// Read-only YouTube audit. No cookies, downloads, or location bypass.
// A Singapore allowance is confirmed only when YouTube explicitly lists SG.
import { readFile, writeFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const run = promisify(execFile);
const source = await readFile(resolve(root, 'script.js'), 'utf8');
const selection = source.slice(source.indexOf('const selectedVideoIds ='), source.indexOf('const combatVideos ='));
const selected = runInNewContext(`${selection}\nselectedVideoIds`);
const archiveSource = (await Promise.all(['manga-roster.js','manga-images.js','manga-data.js','manga-expansion.js'].map(file=>readFile(resolve(root,file),'utf8')))).join('\n');
const archive = runInNewContext(`${archiveSource}\nmangaArchive`);
const battleVideoIds = runInNewContext(`${await readFile(resolve(root,'manga-videos.js'),'utf8')}\nbattleVideoIds`);
const missingSelections = Object.values(archive).flat().flatMap(character=>character.battles.filter(battle=>!battle[2]&&!selected[battle[0]]&&!battleVideoIds[battle[0]]).map(([title])=>({character:character.name,title,universe:character.universe})));
const videos = new Map();
function add(id, title) {
  if (!id) return;
  if (!videos.has(id)) videos.set(id, { id, battles: [] });
  if (!videos.get(id).battles.includes(title)) videos.get(id).battles.push(title);
}
Object.entries(selected).forEach(([title, id]) => add(id, title));
Object.entries(battleVideoIds).forEach(([title, id]) => add(id, title));
Object.values(archive).flat().forEach(character => character.battles.forEach(([title, , id]) => add(id, title)));

function playerResponse(html) {
  const marker = 'var ytInitialPlayerResponse = ';
  const start = html.indexOf(marker);
  if (start < 0) return null;
  let depth = 0, quoted = false, escaped = false;
  const offset = start + marker.length;
  for (let i = offset; i < html.length; i++) {
    const char = html[i];
    if (quoted) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') quoted = false;
    } else if (char === '"') quoted = true;
    else if (char === '{') depth++;
    else if (char === '}' && --depth === 0) return JSON.parse(html.slice(offset, i + 1));
  }
  return null;
}

const results = [];
const entries = [...videos.values()];
for (let offset = 0; offset < entries.length; offset += 2) {
  await Promise.all(entries.slice(offset, offset + 2).map(async video => {
    const result = { ...video, url: `https://www.youtube.com/watch?v=${video.id}`, checkedAt: new Date().toISOString(), status: 'unconfirmed' };
    try {
      const { stdout } = await run('curl', ['-fsSL', '--max-time', '25', '-A', 'Mozilla/5.0', `${result.url}&gl=SG&hl=en`], { maxBuffer: 12 * 1024 * 1024 });
      if (/unusual traffic/.test(stdout)) { console.error('YouTube asked for a captcha; stopping without writing a report.'); process.exit(2); }
      const player = playerResponse(stdout);
      const countries = player?.microformat?.playerMicroformatRenderer?.availableCountries
        || stdout.match(/itemprop="regionsAllowed" content="([^"]*)"/)?.[1]?.split(',');
      result.title = player?.videoDetails?.title;
      result.durationSeconds = Number(player?.videoDetails?.lengthSeconds) || null;
      result.playability = player?.playabilityStatus?.status || 'UNKNOWN';
      result.reason = player?.playabilityStatus?.reason;
      if (countries) result.singaporeAllowed = countries.includes('SG');
      if (countries && !result.singaporeAllowed) result.status = 'blocked-in-SG';
      else if (result.playability === 'OK' && result.singaporeAllowed) result.status = 'confirmed-SG';
      else if (result.playability === 'ERROR') result.status = 'unavailable';
      result.shorterThanThreeMinutes = result.durationSeconds !== null && result.durationSeconds < 180;
      result.possibleGameVideo = /\b(storm|gameplay|sparking|xenoverse|fighterz|roblox|kakarot|ultimate ninja|mugen)\b/i.test(result.title || '');
    } catch (error) { result.reason = error.message; }
    results.push(result);
    if (result.status !== 'confirmed-SG') console.log(`${result.status}: ${video.id} ${video.battles[0]}`);
  }));
  console.log(`Checked ${Math.min(offset + 2, entries.length)}/${entries.length}`);
  await new Promise(done => setTimeout(done, 1500));
}
results.sort((a, b) => a.id.localeCompare(b.id));
const summary = results.reduce((counts, video) => { counts[video.status] = (counts[video.status] || 0) + 1; return counts; }, {});
const reportPath = resolve(root, 'youtube-singapore-audit.json');
await writeFile(reportPath, JSON.stringify({ country: 'SG', checkedAt: new Date().toISOString(), summary, missingSelections, videos: results }, null, 2) + '\n');
console.log(JSON.stringify(summary));
console.log(reportPath);
