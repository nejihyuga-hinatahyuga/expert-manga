import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile } from 'node:fs/promises';
const run = promisify(execFile);
const slugs = new Set();
for (let offset = 0; offset <= 42; offset += 6) {
  await Promise.all(Array.from({length: Math.min(6, 43-offset)}, (_,i) => offset+i).map(async page => {
    const {stdout} = await run('curl', ['-fsSL','--max-time','25',`https://one-piece.com/character/syllabary/index.html?page=${page}&sort=asc&category=`], {maxBuffer:2000000});
    for (const match of stdout.matchAll(/\/character\/([^/"?]+)\/index\.html/g)) slugs.add(match[1]);
  }));
}
await writeFile('/tmp/onepiece-slugs.json', JSON.stringify([...slugs].sort(), null, 2));
console.log(`${slugs.size} official character pages indexed`);
