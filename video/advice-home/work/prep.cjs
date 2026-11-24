/* Prepares the discharge advice films ("<title>: discharge advice"), one per read-aloud advice tab: run from video/advice-home.
   node work/prep.cjs [advice] [voice] [ground] [bed] [en|ms]     (no step named: all four; no language named: English only)
   advice  reads the seven entries' `advice` (and, for Malay, ADVICE_MS) from src/parts in the app's build order (SCRIPTS in
           src/build.js; a part that does not exist yet is skipped and named), with each entry's title and its source as the app
           names it (metaOf in engine.js: 'Ebook p<page>', or the entry's own src), and the app's own source sentences for the
           patient page (English, and ADV_MS_PT for Malay), into work/advice.json. Read only: nothing in src/ is changed.
   voice   joins each clip's read-aloud section takes (narration/read-aloud/adv-<key>-<lang>/00.wav, 01.wav) with 0.7 s between them,
           as narration/scripts/assemble.cjs does for the app's MP3, checks the section starts against the clip's marks, levels the
           join to -16 LUFS at 48 kHz mono (assets/vo-<key>-<lang>.wav) and writes the line marks to work/timing-<key>-<lang>.json.
           English marks: narration/scripts/read-map.json (the same as READ in the app). Malay: READ_MS in data31.js if it is
           there, else narration/read-aloud/READ-ms.json; the Malay voice is refused, naming what is missing, until all exist.
   ground  each film's banner loop (the app's: the entry's hero, else its topic group's loop; flow-video/tiles/<key>.mp4): a 7 s
           loop with a 1 s crossfade at the join (as the app's copies), cropped square around its subject, 80 s long, assets/bg-<loop>.mp4.
   bed     the cancer pain film's bed (video/cancer-pain-home/assets/music.mp3: Flow Music "Gentle Reassurance (Extended)", levelled
           to -15.7 LUFS), copied as assets/music.mp3, so the series sounds as one. */
const fs = require('fs'), path = require('path'), vm = require('vm'), { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..'), GZ = path.resolve(ROOT, '..', '..');
const args = process.argv.slice(2), LANGS = args.includes('ms') ? ['ms'] : ['en'];
const steps = args.filter(a => !['en', 'ms'].includes(a)).length ? args.filter(a => !['en', 'ms'].includes(a)) : ['advice', 'voice', 'ground', 'bed'];
const probe = f => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nk=1:nw=1', f]).toString());
const ff = a => execFileSync('ffmpeg', ['-v', 'error', '-y', ...a]);
/* The seven films: the key used in the clip names, the entry, and the loop's square crop (x in the 1280 px master) */
const FILMS = [
  {key:'tbi', id:'mild-tbi'}, {key:'dengue', id:'dengue'}, {key:'asthma', id:'asthma-zone'}, {key:'gastro', id:'gastroenteritis'},
  {key:'renal', id:'renal-colic'}, {key:'abdo', id:'abdominal-pain'}, {key:'hypo', id:'hypoglycaemia'}];
const CROP = {brain:460, infect:460, flow:560, abdo:460, meta:460};
const ENGINE = path.join(GZ, 'src', 'parts', 'engine.js');

function loadApp() {
  const scripts = JSON.parse(fs.readFileSync(path.join(GZ, 'src', 'build.js'), 'utf8').match(/const SCRIPTS = (\[[^\]]+\])/)[1].replace(/'/g, '"'));
  const have = [], missing = [];
  for (const f of scripts.filter(f => f !== 'engine.js')) (fs.existsSync(path.join(GZ, 'src', 'parts', f)) ? have : missing).push(f);
  const code = have.map(f => fs.readFileSync(path.join(GZ, 'src', 'parts', f), 'utf8')).join('\n;\n');
  const ctx = {console};
  vm.runInNewContext(code + '\n;this.__P = P; this.__AMS = typeof ADVICE_MS !== "undefined" ? ADVICE_MS : null; this.__RMS = typeof READ_MS !== "undefined" ? READ_MS : null;', ctx);
  return {P:ctx.__P, AMS:ctx.__AMS, RMS:ctx.__RMS, have, missing};
}
/* The app's own words for these films, read from engine.js so the films follow the app */
function appWords() {
  const e = fs.readFileSync(ENGINE, 'utf8');
  if (!/const metaOf = p => p\.page \? 'Ebook p' \+ p\.page : \(p\.src \|\| ''\);/.test(e)) throw new Error('engine.js: metaOf has changed; check how the app names a source');
  const tile = e.match(/const TILE_KEYS = new Set\((\[[^\]]+\])\)/)[1].replace(/'/g, '"');
  const cats = [...e.matchAll(/\{k:'([a-z]+)', t:'[^']*', s:'[^']*', ic:'[^']*', c:'[^']*', j:'[^']*', ids:\[([^\]]*)\]\}/g)].map(m => ({k:m[1], ids:[...m[2].matchAll(/'([^']+)'/g)].map(x => x[1])}));
  const ptEn = e.match(/'(From <i>The Clinical Pathway in Emergency for Medical Officer<\/i>, Emergency &amp; Trauma Department, Hospital Kuala Lumpur \(2025\)\.)'/);
  const ptMs = e.match(/const ADV_MS_PT = '([^']+)';/), ptH = e.match(/ms:\{dept:'[^']*', h:'([^']+)'/);
  if (!ptEn || !ptMs || !ptH) throw new Error('engine.js: the patient page source sentences have changed');
  const unhtml = s => s.replace(/<\/?i>/g, '').replace(/&amp;/g, '&');
  return {TILE_KEYS:JSON.parse(tile), CATS:cats, srcEn:unhtml(ptEn[1]), srcEnHTML:ptEn[1], srcMs:ptMs[1], chipMs:ptH[1]};
}

if (steps.includes('advice')) {
  const A = loadApp(), W = appWords(), out = {made:new Date().toISOString(), parts:A.have, missingParts:A.missing, words:W, films:{}};
  for (const f of FILMS) {
    const p = A.P[f.id];
    if (!p || !p.advice) throw new Error(`${f.id}: no advice in the app`);
    const cat = W.CATS.find(c => c.ids.includes(f.id)) || (p.grp === 'rules' && p.sub !== 'protocol' ? {k:'flow'} : null);
    const loop = p.hero || (cat && W.TILE_KEYS.includes(cat.k) ? cat.k : null);
    if (!loop) throw new Error(`${f.id}: no banner loop`);
    const ms = A.AMS && A.AMS[f.id] && A.AMS[f.id].length === p.advice.length ? A.AMS[f.id] : null;
    out.films[f.key] = {id:f.id, title:p.title, meta:p.page ? 'Ebook p' + p.page : (p.src || ''), ebook:!!p.page, loop, en:p.advice, ms};
    console.log(`${f.key}: ${p.title} (${out.films[f.key].meta}), ${p.advice.length} lines, loop ${loop}${ms ? ', Malay lines ready' : ''}`);
  }
  if (A.missing.length) console.log(`parts not there yet (skipped): ${A.missing.join(', ')}`);
  fs.writeFileSync(path.join(__dirname, 'advice.json'), JSON.stringify(out, null, 1));
}
if (steps.includes('voice')) {
  for (const lg of LANGS) {
    let marksOf;
    if (lg === 'en') { const map = JSON.parse(fs.readFileSync(path.join(GZ, 'narration', 'scripts', 'read-map.json'), 'utf8')); marksOf = c => map[c]; }
    else {
      const A = loadApp(), jf = path.join(GZ, 'narration', 'read-aloud', 'READ-ms.json');
      const R = A.RMS || (fs.existsSync(jf) ? JSON.parse(fs.readFileSync(jf, 'utf8')) : null);
      const need = [!A.AMS && 'ADVICE_MS (src/parts/data31.js)', !R && 'the Malay line timings (READ_MS in data31.js, or narration/read-aloud/READ-ms.json)'].filter(Boolean);
      if (need.length) throw new Error(`Malay voice: missing ${need.join('; ')}`);
      marksOf = c => R[c];
    }
    for (const f of FILMS) {
      const clip = `adv-${f.key}-${lg}`, dir = path.join(GZ, 'narration', 'read-aloud', clip), m = marksOf(clip);
      if (!m) throw new Error(`${clip}: no line timings`);
      if (!fs.existsSync(dir)) throw new Error(`${clip}: no takes in narration/read-aloud/${clip}/`);
      const secs = fs.readdirSync(dir).filter(x => /^\d\d\.wav$/.test(x)).sort().map(x => path.join(dir, x));
      const rate = fs.readFileSync(secs[0]).readUInt32LE(24), sil = path.join(__dirname, `sil-${rate}.wav`);
      if (!fs.existsSync(sil)) ff(['-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', '0.7', '-c:a', 'pcm_s16le', sil]);
      let t = 0; const marks = [], list = [];
      secs.forEach((s, i) => { if (i) { list.push(sil); t += 0.7; } marks.push(+t.toFixed(2)); list.push(s); t += probe(s); });
      if (marks.join() !== m.marks.join()) throw new Error(`${clip}: section starts ${marks} differ from the app's ${m.marks}`);
      const lst = path.join(__dirname, `${clip}.txt`), joined = path.join(__dirname, `${clip}-joined.wav`), out = path.join(ROOT, 'assets', `vo-${f.key}-${lg}.wav`);
      fs.writeFileSync(lst, list.map(s => `file '${s.replace(/\\/g, '/')}'`).join('\n'));
      ff(['-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_s16le', joined]);
      ff(['-i', joined, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', out]);
      fs.unlinkSync(joined);
      const dur = +probe(out).toFixed(3);
      fs.writeFileSync(path.join(__dirname, `timing-${f.key}-${lg}.json`), JSON.stringify({clip, dur, lines:m.lines}, null, 1));
      console.log(`${clip}: ${dur} s (sections ${t.toFixed(2)} s), ${m.lines.length} lines`);
    }
  }
}
if (steps.includes('ground')) {
  const D = JSON.parse(fs.readFileSync(path.join(__dirname, 'advice.json'), 'utf8'));
  for (const loop of [...new Set(Object.values(D.films).map(f => f.loop))]) {
    const src = path.join(GZ, 'flow-video', 'tiles', loop + '.mp4'), l7 = path.join(__dirname, `loop7-${loop}.mp4`), out = path.join(ROOT, 'assets', `bg-${loop}.mp4`);
    if (!(loop in CROP)) throw new Error(`no crop chosen for the loop ${loop}`);
    ff(['-i', src, '-filter_complex', '[0:v]trim=1:8,setpts=PTS-STARTPTS[a];[0:v]trim=0:1,setpts=PTS-STARTPTS[b];[a][b]xfade=transition=fade:duration=1:offset=6,format=yuv420p[v]', '-map', '[v]', '-c:v', 'libx264', '-crf', '14', '-preset', 'slow', '-an', l7]);
    ff(['-stream_loop', '-1', '-i', l7, '-t', '80', '-vf', `crop=720:720:${CROP[loop]}:0,scale=1080:1080:flags=lanczos,fps=30`, '-c:v', 'libx264', '-crf', '20', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-an', out]);
    console.log(`ground: ${loop} -> assets/bg-${loop}.mp4 (crop x ${CROP[loop]})`);
  }
}
if (steps.includes('bed')) {
  fs.copyFileSync(path.join(GZ, 'video', 'cancer-pain-home', 'assets', 'music.mp3'), path.join(ROOT, 'assets', 'music.mp3'));
  console.log('bed: assets/music.mp3 (the cancer pain film\'s bed)');
}
