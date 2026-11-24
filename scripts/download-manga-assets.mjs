// Development utility: save the catalogue's public character artwork locally.
// The website itself remains dependency-free and never runs this utility.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { resolve, dirname } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const runFile = promisify(execFile);

const root = resolve(import.meta.dirname, '..');
const source = (await Promise.all(['manga-roster.js','manga-images.js','manga-data.js','manga-expansion.js'].map(file=>readFile(resolve(root,file),'utf8')))).join('\n');
const archive = runInNewContext(`${source}\nmangaArchive`);
const assets = Object.values(archive).flat().flatMap(character => [
  [character.portrait, character.imageSources.portrait, character.slug],
  ...character.gallery.map((path, index) => [path, character.imageSources.gallery[index], character.slug])
]);
let failures = 0;
for (let offset = 0; offset < assets.length; offset += 6) {
  await Promise.all(assets.slice(offset, offset + 6).map(async ([path, url, slug]) => {
    const destination = resolve(root, path);
    try { await access(destination); return; } catch { /* New asset. */ }
    try {
      const referrer = url.startsWith('https://one-piece.com/') ? `https://one-piece.com/character/${slug}/index.html` : 'https://web.dragonball-api.com/';
      const { stdout } = await runFile('curl', ['-fsSL', '--max-time', '30', '-A', 'Mozilla/5.0', '-e', referrer, url], { encoding: 'buffer', maxBuffer: 10 * 1024 * 1024 });
      const signature = stdout.subarray(0, 12);
      if (!(signature[0] === 0xff && signature[1] === 0xd8) && signature.subarray(1, 4).toString() !== 'PNG' && signature.subarray(8, 12).toString() !== 'WEBP') throw new Error('Response is not an image');
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, stdout);
      console.log(path);
    } catch (error) {
      failures++;
      console.error(`${path}: ${error.message}`);
    }
  }));
}
if (failures) process.exitCode = 1;
