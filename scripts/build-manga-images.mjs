// Development-only: obtain character-specific artwork and cache it locally.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const run = promisify(execFile);
const roster = runInNewContext(`${await readFile(resolve(root, 'manga-roster.js'), 'utf8')}\nmangaRoster`);
let officialSlugs;
try {officialSlugs=JSON.parse(await readFile('/tmp/onepiece-slugs.json', 'utf8'));}
catch {await import('./collect-onepiece-index.mjs');officialSlugs=JSON.parse(await readFile('/tmp/onepiece-slugs.json', 'utf8'));}
const normalize = value => value.toLowerCase().replace(/[^a-z0-9]/g, '');
const aliases = { Newgate: 'edward_newgate', Teach: 'Marshall_D_Teach', big_mom: 'CharlotteLinlin', kaidou: 'Kaido', mihawk: 'Dracule_Mihawk', hancock: 'Boa_Hancock', kuma: 'Bartholomew_Kuma', moria: 'Gecko_Moria', bonney: 'Jewelry_Bonney', bege: 'Capone_Bege', drake: 'X_Drake', koby: 'Coby', garp: 'Monkey_D_Garp', akainu: 'Sakazuki', aokiji: 'Kuzan', kizaru: 'Borsalino', ryokugyu: 'Aramaki', lucci: 'Rob_Lucci', katakuri: 'Charlotte_Katakuri', cracker: 'Charlotte_Cracker', oven: 'Charlotte_Oven', daifuku: 'Charlotte_Daifuku', oden: 'Kozuki_Oden', kanjuro: 'kurozumi_kanjuro', inuarashi: 'Duke_Inuarashi', nekomamushi: 'Master_Nekomamushi', krieg: 'Don_Krieg', hatchan: 'Hatchan', enel: 'Eneru', mr1: 'Daz_Bonez', mr2: 'Bon_Clay_Mr2', mr3: 'Galdino', hody: 'Hody_Jones' };
const wikiNames = { 'Tortue Géniale':'Master Roshi','Edward Newgate':'Edward Newgate','Marshall D. Teach':'Marshall D. Teach','Baggy':'Buggy','Koby':'Koby','Bentham':'Bentham','Galdino':'Galdino' };
Object.assign(aliases, {Teach:'Marshall_D_Teech', hatchan:'Hacchan', hody:'Hordy_Jones'});
const cleanUrl = url => url.split('/revision/')[0];
async function get(url) {
  return (await run('curl', ['-fsSL', '--retry','2','--retry-delay','1','--max-time','30','-A','Mozilla/5.0',url], {maxBuffer:12*1024*1024})).stdout;
}
async function wikiImages(universe, title) {
  const base = `https://${universe === 'dbz' ? 'dragonball' : 'onepiece'}.fandom.com/api.php`;
  const page = JSON.parse(await get(`${base}?action=query&titles=${encodeURIComponent(title)}&redirects=1&prop=pageimages&pithumbsize=900&format=json`));
  const pageInfo = Object.values(page.query?.pages || {})[0];
  const portrait = pageInfo?.thumbnail?.source;
  const search = JSON.parse(await get(`${base}?action=query&generator=search&gsrsearch=${encodeURIComponent(pageInfo?.title || title)}&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json`));
  const files = Object.values(search.query?.pages || {}).sort((a,b) => a.index-b.index);
  const gallery = files.filter(file => !/game|fighterz|xenoverse|dokkan|legends|card|icon|logo|sprite|budokai|sparking|heroes|vs\.|vs_|and_|_and_|collage/i.test(file.title)).map(file => file.imageinfo?.[0]?.thumburl || file.imageinfo?.[0]?.url).filter(Boolean);
  return {portrait, gallery};
}
async function save(url, universe, slug, kind, referrer) {
  const {stdout:buffer} = await run('curl', ['-fsSL','--retry','2','--retry-delay','1','--max-time','30','-A','Mozilla/5.0','-e',referrer,url],{encoding:'buffer',maxBuffer:12*1024*1024});
  let ext;
  if (buffer[0] === 0xff && buffer[1] === 0xd8) ext='jpg';
  else if (buffer.subarray(1,4).toString()==='PNG') ext='png';
  else if (buffer.subarray(8,12).toString()==='WEBP') ext='webp';
  else throw new Error('Not a supported image');
  if(buffer.length<1000) throw new Error('Image is too small for a dossier');
  const path = `assets/${universe}/${slug}-${kind}.${ext}`;
  await writeFile(resolve(root,path), buffer);
  return path;
}
let manifest = {};
try { manifest = runInNewContext(`${await readFile(resolve(root,'manga-images.js'),'utf8')}\nmangaImages`); } catch { /* First run. */ }
let failures = 0;
for (const [universe, characters] of Object.entries(roster)) {
  await mkdir(resolve(root,'assets',universe),{recursive:true});
  for (let offset=0;offset<characters.length;offset+=4) {
    await Promise.all(characters.slice(offset,offset+4).map(async character => {
      const key = `${universe}:${character.name}`;
      if (manifest[key]?.gallery.length === 3) {
        const cached=await Promise.all([manifest[key].portrait,...manifest[key].gallery].map(path=>readFile(resolve(root,path)).catch(()=>Buffer.alloc(0))));
        if(cached.every(buffer=>buffer.length>=1000)) return;
      }
      const slug = normalize(character.wiki);
      try {
        let sources, sourcePage;
        if (universe === 'onepiece') {
          const wanted = aliases[character.wiki] || character.wiki;
          const official = officialSlugs.find(value=>normalize(value)===normalize(wanted));
          if (!official) throw new Error(`No official slug: ${wanted}`);
          sourcePage = `https://one-piece.com/character/${official}/index.html`;
          const html = await get(sourcePage);
          const portrait = html.match(/property="og:image" content="([^"]+)"/)?.[1] || `https://one-piece.com/o/assets/images/anime/character/data/${official}/face.jpg`;
          const body = html.split('<article id="main-content">')[1]?.split('</section>')[0] || '';
          const paths = [...new Set([...body.matchAll(/src="(\/(?:img\/character\/[^"\s]+|o\/assets\/(?:images|uploads)\/[^"\s]+))"/g)].map(match=>match[1]))].filter(path=>!/_list\./i.test(path));
          sources = {portrait,gallery:paths.map(path=>`https://one-piece.com${path}`)};
          if (sources.gallery.length<3) {
            const extra = await wikiImages(universe,wikiNames[character.name]||character.name);
            sources.gallery.push(...extra.gallery);
          }
        } else {
          sourcePage = `https://dragonball.fandom.com/wiki/${encodeURIComponent(character.wiki.replace(/ /g,'_'))}`;
          sources = await wikiImages(universe,character.wiki);
        }
        if (!sources.portrait) throw new Error('No character portrait');
        const portrait = await save(sources.portrait,universe,slug,'portrait',sourcePage);
        const gallery=[], remoteGallery=[], seen=new Set([cleanUrl(sources.portrait)]);
        for (const url of sources.gallery) {
          if (seen.has(cleanUrl(url))) continue;
          try {
            gallery.push(await save(url,universe,slug,`gallery-${gallery.length+1}`,sourcePage));
            remoteGallery.push(url); seen.add(cleanUrl(url));
            if (gallery.length===3) break;
          } catch { /* Try another actual character image. */ }
        }
        manifest[key]={portrait,gallery,sourcePage,imageSources:{portrait:sources.portrait,gallery:remoteGallery}};
        if (gallery.length!==3) throw new Error(`Only ${gallery.length} distinct gallery images`);
        console.log(`${universe}: ${character.name} — portrait + 3 images`);
      } catch(error) { failures++; console.error(`${universe}: ${character.name}: ${error.message}`); }
    }));
    await writeFile(resolve(root,'manga-images.js'),`// Locally cached character artwork; source URLs retained for maintenance.\nconst mangaImages = ${JSON.stringify(manifest,null,2)};\n`);
  }
}
console.log(`${Object.keys(manifest).length} characters cached; ${failures} incomplete`);
if(failures) process.exitCode=1;
