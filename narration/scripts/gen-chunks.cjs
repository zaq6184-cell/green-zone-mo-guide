// Record every read-aloud segment one line at a time with VoiceStudio's local service (VOICE below, 32 steps). A line is the leaflet's title, a heading, its paragraph or one item (one advice line for the
// advice tabs); a line over 220 characters is split at sentences. Each take is checked by transcribing it back (short audio, so
// the check is reliable) and retried with other seeds when it reads badly; the best take is kept, and the lines are joined with a
// short pause into <clip>/<seg>.wav. Takes: narration/read-aloud/<clip>/<seg>/p<line>-<n>.wav. Report: chunks.json.
// node gen-chunks.cjs [clip] [seg]
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { say, chunks, msNum } = require('./spoken-lib.cjs');
const OUT = path.resolve(__dirname, '..', 'read-aloud') + '/';
const segs = require('./segments.json');
const [onlyClip, onlySeg] = process.argv.slice(2);
const SEEDS = [7, 11, 23, 41], LIMIT = 0.15, GAP = 0.25;
// English: "Google Kira - Female - BM + EN" at 0.86, as in the explainer. Malay: "Malay Kore - Female - TTS Studio" at 0.95, as in the
// Malay explainer (Krishna, 10 Nov 2026: the Kira clone spoke Malay like an English speaker)
const VOICE = {en:{id:'e4e6e5d8', speed:'0.86'}, ms:{id:'364099c8', speed:'0.95'}};
const EN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ENT = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const enNum = n => n < 20 ? EN[n] : n < 100 ? ENT[Math.floor(n / 10)] + (n % 10 ? ' ' + EN[n % 10] : '') : n < 1000 ? EN[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + enNum(n % 100) : '') : String(n);
const norm = (s, lg) => {
  const w = s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/(\d)\s*ml\b/g, lg === 'ms' ? '$1 mililiter' : '$1 millilitres')
    .replace(/(\d)\s*g\b/g, lg === 'ms' ? '$1 gram' : '$1 grams').replace(/\b\d+\b/g, d => lg === 'ms' ? msNum(+d) : enNum(+d))
    .replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(x => x && x !== 'dot' && x !== 'titik');
  const out = []; // join runs of single letters (spelled acronyms, w w w) into one word
  for (const x of w) { if (x.length === 1 && out.length && out[out.length - 1].single) out[out.length - 1].v += x; else out.push({v:x, single:x.length === 1}); }
  return out.map(o => o.v);
};
const lev = (a, b) => { const d = Array.from({length:a.length + 1}, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length]; };
const near = (a, b) => a === b || 1 - lev(a, b) / Math.max(a.length, b.length) >= 0.75;
const fwer = (a, b) => { const d = Array.from({length:a.length + 1}, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (near(a[i - 1], b[j - 1]) ? 0 : 1));
  return d[a.length][b.length] / Math.max(1, a.length); };
// Malay: the transcriber spells Malay by ear ("Dengidi" for "denggi di"), so Malay takes are scored by characters, spaces ignored
const cer = (a, b) => { const x = a.join(''), y = b.join(''); return lev(x, y) / Math.max(1, x.length); };
const wavDur = f => { const b = fs.readFileSync(f); return (b.length - 44) / b.readUInt32LE(28); };
async function gen(text, lg, seed, f) {
  const fd = new FormData();
  fd.append('text', text); fd.append('language', lg); fd.append('profile_id', VOICE[lg].id);
  fd.append('speed', VOICE[lg].speed); fd.append('num_step', '32'); fd.append('seed', String(seed));
  const r = await fetch('http://127.0.0.1:3900/generate', {method:'POST', body:fd});
  if (!r.ok) throw new Error(`generate ${r.status} ${(await r.text()).slice(0, 200)}`);
  fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
}
async function hear(f, lg) {
  const fd = new FormData();
  fd.append('file', new Blob([fs.readFileSync(f)], {type:'audio/wav'}), path.basename(f));
  fd.append('language', lg); fd.append('response_format', 'json');
  const r = await fetch('http://127.0.0.1:3900/v1/audio/transcriptions', {method:'POST', body:fd});
  if (!r.ok) throw new Error(`transcribe ${r.status}`);
  // faster-whisper's stock phrases on a pause (not in the audio): strip before scoring
  return ((await r.json()).text || '').replace(/terima kasih kerana menonton!?|thank you for watching!?|thanks for watching!?/gi, '').trim();
}
(async () => {
  const repF = path.join(__dirname, 'chunks.json');
  const rep = fs.existsSync(repF) ? JSON.parse(fs.readFileSync(repF, 'utf8')) : {};
  for (const s of segs) {
    if (onlyClip && s.clip !== onlyClip) continue;
    if (onlySeg !== undefined && String(s.seg) !== onlySeg) continue;
    const key = `${s.clip}#${s.seg}`, dir = path.join(OUT, s.clip, String(s.seg).padStart(2, '0'));
    fs.mkdirSync(dir, {recursive:true});
    const segWav = path.join(OUT, s.clip, String(s.seg).padStart(2, '0') + '.wav');
    const plan = s.parts.flatMap((p, k) => chunks(p).map((x, j) => ({k, j, text:x}))), rows = [];
    for (const c of plan) {
      const spoken = say(c.text, s.lang), want = norm(spoken, s.lang), name = `p${c.k}-${c.j}`;
      let best = null;
      for (const seed of SEEDS) {
        const f = path.join(dir, `${name}-s${seed}.wav`);
        if (!fs.existsSync(f)) await gen(spoken, s.lang, seed, f);
        const heard = await hear(f, s.lang), got = norm(heard, s.lang), w = fwer(want, got), n = Math.round(w * Math.max(1, want.length)), c = cer(want, got);
        const e = s.lang === 'ms' ? c : w, bad = s.lang === 'ms' ? c > 0.2 : (w > LIMIT && n >= 2) || w > 0.5;
        if (!best || e < best.e) best = {seed, e, bad, heard, f};
        if (!bad) break;
      }
      fs.copyFileSync(best.f, path.join(dir, `${name}.wav`));
      rows.push({k:c.k, j:c.j, file:`${name}.wav`, text:c.text, say:spoken, seed:best.seed, err:+best.e.toFixed(3), bad:best.bad, heard:best.heard, dur:+wavDur(best.f).toFixed(3)});
      console.log(`${best.bad ? 'CHECK' : 'ok   '} ${key} ${name} seed ${best.seed} err ${(best.e * 100).toFixed(0)}%${best.bad ? '\n   say:   ' + spoken + '\n   heard: ' + best.heard : ''}`);
    }
    // Join the chosen takes with a short pause into the segment take.
    const rate = fs.readFileSync(path.join(dir, rows[0].file)).readUInt32LE(24), sil = path.join(__dirname, 'asm', `gap-${rate}.wav`);
    fs.mkdirSync(path.dirname(sil), {recursive:true});
    if (!fs.existsSync(sil)) execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', String(GAP), '-c:a', 'pcm_s16le', sil]);
    const list = rows.flatMap((r, n) => (n ? [sil] : []).concat([path.join(dir, r.file)]));
    const lst = path.join(__dirname, 'asm', `${s.clip}-${s.seg}.txt`);
    fs.writeFileSync(lst, list.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_s16le', segWav]);
    let t = 0; for (const r of rows) { r.at = +t.toFixed(3); t += r.dur + GAP; }
    rep[key] = {clip:s.clip, seg:s.seg, lang:s.lang, gap:GAP, chunks:rows};
    fs.writeFileSync(repF, JSON.stringify(rep, null, 1));
  }
  const bad = Object.values(rep).flatMap(r => r.chunks.filter(c => c.bad).map(c => `${r.clip}#${r.seg} p${c.k}-${c.j} ${(c.err * 100).toFixed(0)}%`));
  console.log('done;', bad.length ? 'still to check: ' + bad.join(', ') : 'every take reads back within the limit');
})();
