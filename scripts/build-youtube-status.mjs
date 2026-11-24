import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const report=JSON.parse(await readFile(resolve(root,'youtube-singapore-audit.json'),'utf8'));
const status=Object.fromEntries(report.videos.map(video=>[video.id,{status:video.status,game:video.possibleGameVideo,checkedAt:video.checkedAt}]));
await writeFile(resolve(root,'youtube-status.js'),`// Geographic availability is a dated check, not a permanent guarantee.\nconst youtubeVideoStatus = ${JSON.stringify(status,null,2)};\n`);
