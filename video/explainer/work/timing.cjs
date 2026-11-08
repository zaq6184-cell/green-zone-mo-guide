/* Builds the timing file for the explainer: scene slots, voice-over placement, word times.
   English: node work/timing.cjs      -> work/timing.json    (voice: assets/vo, words: work/sNN.json)
   Malay:   node work/timing.cjs ms   -> work/ms/timing.json (voice: ../explainer-ms/assets/vo, words: work/ms/sNN.json)
   Run from the English project root (video/explainer). */
const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const LANG = process.argv[2] === 'ms' ? 'ms' : 'en';
const FPS = 30, snap = t => Math.round(t * FPS) / FPS;

/* The script, as shown on screen. Each scene's words map to whisper's words by position;
   MAP lists the few places where whisper split or joined words. */
const SCENES = {
  en: [
    {id:'s01', chapter:'New to the Green Zone?', text:'New to the Green Zone? Here is how a patient moves through it, and what you decide at each step.'},
    {id:'s02', chapter:'Patients move one way', text:'Patients move one way. Secondary triage does the vital signs, ECG and dressing. Do not repeat them unless they were missed.'},
    {id:'s03', chapter:'The green slip and the treatment room', text:'Then on to you. Fill in the green slip. The treatment room calls the queue number and carries out each order.'},
    {id:'s04', chapter:'Down-triage: the EP allows it', text:'Only the EP can allow a down-triage. Before you down-triage, examine the patient properly, then document it on the triage form.'},
    {id:'s05', chapter:'Open the pathway', text:'For the diagnosis, open its pathway: one question at a time. Each step shows how it can still end.'},
    {id:'s06', chapter:'Waiting for results: the CCA', text:'Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside.'},
    {id:'s07', chapter:'IV antibiotics and no bed', text:'Needs IV antibiotics, and no bed is free? Use a CCA chair, with one of the four allowed antibiotics only.'},
    {id:'s08', chapter:'Before discharge', text:'Before discharge, reassess and review every result. After a CT brain, ask the EP to review, then book EMACC or EM Watch.'},
    {id:'s09', chapter:'When to call the EP', text:'Primary team delayed? The EP may decide the admission within four hours. Unsure, or stuck? Call the EP in charge.'},
    {id:'s10', chapter:null, text:'Right patient. Right zone. Right time.'}
  ],
  ms: [
    {id:'s01', chapter:'Baru di Zon Hijau?', text:'Baru di Zon Hijau? Inilah cara pesakit bergerak melaluinya, dan apa yang anda putuskan pada setiap langkah.'},
    {id:'s02', chapter:'Pesakit bergerak sehala', text:'Pesakit bergerak sehala. Triaj sekunder mengambil tanda vital, membuat ECG dan balutan. Jangan ulanginya, kecuali jika ada yang tertinggal.'},
    {id:'s03', chapter:'Slip hijau dan bilik rawatan', text:'Kemudian, pesakit datang kepada anda. Isi slip hijau. Bilik rawatan memanggil nombor giliran dan melaksanakan setiap arahan.'},
    {id:'s04', chapter:'Turun triaj dengan kebenaran EP', text:'Hanya EP boleh membenarkan turun triaj. Sebelum turun triaj, periksa pesakit dengan teliti, kemudian catatkannya dalam borang triaj.'},
    {id:'s05', chapter:'Buka laluan klinikal', text:'Untuk diagnosis, buka laluan klinikalnya: satu soalan pada satu masa. Setiap langkah menunjukkan kesudahan yang masih mungkin.'},
    {id:'s06', chapter:'Menunggu keputusan: CCA', text:'Menunggu keputusan? Hantar pesakit ke CCA. Warga emas, ACS, atau sesiapa yang memerlukan ubat stat, tidak boleh dibiarkan menunggu di luar.'},
    {id:'s07', chapter:'Antibiotik IV tanpa katil', text:'Perlukan antibiotik IV, tetapi tiada katil kosong? Gunakan kerusi di CCA, dengan salah satu daripada empat antibiotik yang dibenarkan sahaja.'},
    {id:'s08', chapter:'Sebelum discaj', text:'Sebelum discaj, nilai semula pesakit dan semak setiap keputusan. Selepas CT otak, minta EP menyemak, kemudian buat temujanji EMACC atau EM Watch.'},
    {id:'s09', chapter:'Bila perlu hubungi EP', text:'Pasukan primer lewat? EP boleh memutuskan kemasukan ke wad dalam masa empat jam. Tidak pasti, atau buntu? Hubungi EP yang bertugas.'},
    {id:'s10', chapter:null, text:'Pesakit yang tepat. Zon yang tepat. Masa yang tepat.'}
  ]
}[LANG];
/* whisper token index -> 'split' one whisper word into two script words, 'join' two whisper words into one */
const MAP = { en: { s03: {split:[1]}, s04: {join:[6, 10]} }, ms: { s08: {join:[17]} } }[LANG];
const VO = LANG === 'en' ? path.join(ROOT, 'assets/vo') : path.resolve(ROOT, '../explainer-ms/assets/vo');
const WORDS = LANG === 'en' ? __dirname : path.join(__dirname, 'ms');

function silenceList(file){
  const r = spawnSync('ffmpeg', ['-hide_banner', '-i', file, '-af', 'silencedetect=noise=-38dB:d=0.1', '-f', 'null', '-'], {encoding:'utf8'});
  const txt = r.stderr || '', list = []; let s = null;
  for (const line of txt.split(/\r?\n/)){
    const a = line.match(/silence_start: ([\d.]+)/); if (a) s = +a[1];
    const b = line.match(/silence_end: ([\d.]+)/); if (b && s !== null){ list.push([s, +b[1]]); s = null; }
  }
  return list;
}
const dur = f => +spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f], {encoding:'utf8'}).stdout.trim();

const out = {lang:LANG, fps:FPS, scenes:[]};
let t = 0;
SCENES.forEach((sc, i) => {
  const wav = path.join(VO, sc.id + '.wav'), vo = dur(wav);
  const j = JSON.parse(fs.readFileSync(path.join(WORDS, sc.id + '.json'), 'utf8'));
  let ww = j.transcription.map(x => ({t:x.text.trim(), s:x.offsets.from / 1000, e:x.offsets.to / 1000})).filter(x => x.t);
  const m = MAP[sc.id] || {};
  if (m.split) m.split.slice().reverse().forEach(k => { const w = ww[k], mid = (w.s + w.e) / 2; ww.splice(k, 1, {t:'a', s:w.s, e:mid}, {t:'b', s:mid, e:w.e}); });
  if (m.join) m.join.slice().reverse().forEach(k => { const a = ww[k], b = ww[k + 1]; ww.splice(k, 2, {t:a.t + '-' + b.t, s:a.s, e:b.e}); });
  const words = sc.text.split(/\s+/);
  if (words.length !== ww.length) throw new Error(sc.id + ': script has ' + words.length + ' words, whisper ' + ww.length);
  /* Pull a word's start out of a pause, and its end back to the pause */
  const sil = silenceList(wav).filter(([a, b]) => b - a >= 0.15);
  let prev = -1;
  const W = words.map((w, k) => {
    let s = ww[k].s, e = Math.max(ww[k].e, s + 0.08);
    for (const [a, b] of sil){
      if (s >= a - 0.02 && s < b) s = b;                              /* starts inside a pause */
      else if (s < a && a < e && (a - s) < 0.4 * (e - s)) s = b;      /* whisper put the onset before the pause */
      else if (s < a && a < e) e = a;                                 /* runs on into the pause */
    }
    s = Math.max(s, prev + 0.04); prev = s;
    return {w, s:+s.toFixed(3), e:+Math.max(e, s + 0.08).toFixed(3)};
  });
  const lead = i === 0 ? 0.8 : i === SCENES.length - 1 ? 0.6 : 0.45;
  const TAIL = {s05:1.2, s06:0.9, s07:0.9};
  const tail = i === SCENES.length - 1 ? 2.4 : (TAIL[sc.id] || 0.5);
  const start = snap(t), voStart = snap(start + lead), end = snap(voStart + vo + tail);
  out.scenes.push({id:sc.id, chapter:sc.chapter, start, duration:+(end - start).toFixed(4), voStart, voLocal:+(voStart - start).toFixed(4), vo:+vo.toFixed(3), silences:sil, words:W});
  t = end;
});
out.duration = +t.toFixed(4);
fs.writeFileSync(path.join(WORDS, 'timing.json'), JSON.stringify(out, null, 1));
for (const s of out.scenes) console.log(s.id, 'start', s.start.toFixed(2), 'dur', s.duration.toFixed(2), 'vo@', s.voLocal.toFixed(2), '|', s.words.map(w => w.w + '@' + w.s.toFixed(2)).join(' '));
console.log(LANG, 'total', out.duration);
