import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
const root=resolve(import.meta.dirname,'..');
const files=['manga-roster.js','manga-images.js','manga-data.js','manga-expansion.js'];
const source=(await Promise.all(files.map(file=>readFile(resolve(root,file),'utf8')))).join('\n');
const archive=runInNewContext(`${source}\nmangaArchive`);
for(const [universe,characters] of Object.entries(archive)) {
  const expected=universe==='dbz'?102:100;
  assert.equal(characters.length,expected);
  assert.equal(new Set(characters.map(character=>character.name)).size,expected);
  for(const character of characters) {
    assert.equal(character.gallery.length,3,character.name);
    assert.equal(new Set([character.portrait,...character.gallery]).size,4,character.name);
    const hashes=[];
    for(const file of [character.portrait,...character.gallery]) {
      const bytes=await readFile(resolve(root,file));
      assert.ok(bytes.length>1000,`${character.name}: ${file}`);
      hashes.push(createHash('sha256').update(bytes).digest('hex'));
    }
    assert.equal(new Set(hashes).size,4,`${character.name}: duplicate image bytes`);
    for(const language of ['fr','en']) {
      const copy=character.copy[language];
      for(const field of ['story','role','village','quote']) assert.ok(copy[field]?.length>0,`${character.name}: ${language}.${field}`);
      for(const field of ['family','goal','clan']) assert.ok(copy.details[field]?.length>0,`${character.name}: ${language}.${field}`);
      assert.ok(copy.techniques.length>0,character.name);
      assert.equal(copy.battles.length,character.battles.length,character.name);
    }
  }
  const fewerThanThree=characters.filter(character=>character.battles.length<3).map(character=>character.name);
  console.log(`${universe}: ${expected} distinct characters, ${expected} portraits + ${expected*3} distinct gallery images, FR/EN records.`);
  console.log(`Editorial gaps: ${fewerThanThree.length} profiles have fewer than 3 recorded fights.`);
}
