/* Writes index.html and compositions/*.html for the Green Zone explainer.
   English: node work/build.cjs     reads work/timing.json,    writes this project (video/explainer)
   Malay:   node work/build.cjs ms  reads work/ms/timing.json, writes ../explainer-ms
   Every cue lands on the word that names it. Run from video/explainer. */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const LANG = process.argv[2] === 'ms' ? 'ms' : 'en';
const OUT = LANG === 'en' ? ROOT : path.resolve(ROOT, '../explainer-ms');
const TDIR = LANG === 'en' ? __dirname : path.join(__dirname, 'ms');
const T = JSON.parse(fs.readFileSync(path.join(TDIR, 'timing.json'), 'utf8'));
const S = {}; T.scenes.forEach(s => { S[s.id] = s; });
const r3 = x => Math.round(x * 1000) / 1000;
/* Cues are written against the English word index; for Malay, IDX gives the Malay word that says the same thing */
const IDX = {ms:{
  s01:{3:2, 5:4, 15:12, 18:15},
  s02:{1:1, 4:3, 8:6, 10:9, 12:11, 13:12, 15:13, 17:14},
  s03:{3:4, 4:5, 7:7, 9:8, 10:9, 12:10, 17:14, 18:15, 20:16},
  s04:{2:1, 6:4, 10:9, 15:14},
  s05:{3:2, 5:4, 9:8, 10:9, 13:12, 14:13, 16:14, 17:15},
  s06:{1:1, 3:2, 8:5, 9:6, 10:7, 11:8, 15:13},
  s07:{1:1, 4:4, 6:5, 7:6, 8:7, 15:15, 17:16, 19:19},
  s08:{2:2, 4:6, 7:9, 11:12, 16:15, 18:18, 20:20},
  s09:{3:3, 9:9, 12:13, 15:17, 17:18},
  s10:{0:0, 2:3, 4:6, 5:8}
}};
/* scene-local time of word i (English index) of scene id, plus d */
const at = (id, i, d = 0) => {
  const k = LANG === 'en' ? i : (IDX[LANG][id] || {})[i];
  if (k === undefined || !S[id].words[k]) throw new Error(LANG + ' has no cue for ' + id + ' word ' + i);
  return r3(S[id].voLocal + S[id].words[k].s + d);
};
/* On-screen words. Scene 5 shows the app's own pathway screen, which is in English, so it is not translated. */
const MS = {
  'Zone map':'Peta zon', 'One way':'Sehala',
  'Triage':'Triaj', 'MTS 4 or 5':'MTS 4 atau 5', 'You, the MO':'Anda, MO', 'Consultation':'Konsultasi',
  'Treatment room':'Bilik rawatan', 'PPP':'PPP', 'CCA':'CCA', 'Only if needed':'Jika perlu',
  'Review and finish':'Semak dan selesai', 'Back to you':'Kembali kepada anda',
  'New to the':'Baru di', 'Green Zone?':'Zon Hijau?',
  'Secondary triage':'Triaj sekunder', 'Vital signs':'Tanda vital', 'ECG':'ECG', 'Dressing':'Balutan',
  'Also the focused history and wound irrigation':'Juga sejarah terfokus dan pencucian luka',
  'No repeats':'Tiada ulangan', 'Unless they were missed':'Kecuali jika tertinggal',
  'A later ECG is done in the Procedure Room.':'ECG yang diminta kemudian dibuat di Bilik Prosedur.',
  'Green slip':'Slip hijau', 'Slip hijau':'Slip rawatan', 'Orders':'Arahan', 'Queue no.':'No. giliran', 'Red Box':'Kotak Merah',
  'Calls the queue number':'Memanggil nombor giliran', 'Carries out each order':'Melaksanakan setiap arahan', 'Documents each one':'Mencatat setiap satu',
  'Triage form':'Borang triaj', 'Down-triage':'Turun triaj', 'The MO examined the patient properly first':'MO memeriksa pesakit dengan teliti dahulu',
  'The MO documented it on this form':'MO mencatatnya dalam borang ini', 'The PPP makes sure it is documented.':'PPP memastikan ia dicatat.',
  'Only the EP':'Hanya EP', 'can allow a <span class="nb">down-triage</span>':'boleh membenarkan turun triaj', 'Source: memo HKL/JK/98/188/3(22)22, 4 Oct 2022':'Sumber: memo HKL/JK/98/188/3(22)22, 4 Okt 2022',
  'Results pending':'Menunggu keputusan', 'Never waits outside':'Jangan biar menunggu di luar',
  'Elderly':'Warga emas', 'NSTEMI or ACS':'NSTEMI atau ACS', 'Stat drugs and monitoring':'Ubat stat dan pemantauan',
  'Bring them in: the CCA, the rooms in front of R2, the R2 corridor or any zone with space.':'Bawa masuk ke CCA, bilik di hadapan R2, koridor R2 atau mana-mana zon yang ada ruang.',
  'A bed first':'Cari katil dahulu', 'No bed free':'Tiada katil kosong', 'CCA chair':'Kerusi CCA',
  'Hand over to the HO in the CCA':'Serahkan kepada HO di CCA', 'The four allowed antibiotics':'Empat antibiotik yang dibenarkan',
  'Only these four.':'Hanya empat ini.', ' Source: IV antibiotic memo, 30 Jun 2026.':' Sumber: memo antibiotik IV, 30 Jun 2026.',
  'Before discharge':'Sebelum discaj', 'Reassess the patient':'Nilai semula pesakit', 'Review every blood result and image':'Semak setiap keputusan darah dan imej',
  'Source: memo HKL/JK/98/188/3(10)24, 9 Jul 2024':'Sumber: memo HKL/JK/98/188/3(10)24, 9 Julai 2024',
  'A CT brain was ordered':'CT otak telah diminta', 'The EP reviews':'EP menyemak', 'Then book a follow-up':'Kemudian buat temujanji susulan',
  'Primary team delayed?':'Pasukan primer lewat?', 'hours':'jam', 'The EP may decide the admission.':'EP boleh memutuskan kemasukan.',
  'Unsure, or stuck?':'Tidak pasti, atau buntu?', 'Several disciplines and no disposition after a long wait.':'Beberapa disiplin terlibat dan tiada keputusan disposisi selepas lama menunggu.',
  'Call the EP in charge':'Hubungi EP yang bertugas',
  'Right <em>patient.</em>':'<em>Pesakit</em> yang tepat.', 'Right <em>zone.</em>':'<em>Zon</em> yang tepat.', 'Right <em>time.</em>':'<em>Masa</em> yang tepat.',
  'Green Zone explainer, version 8':'Green Zone explainer, version 8, Bahasa Melayu'
};
const tr = t => { if (LANG === 'en') return t; if (MS[t] === undefined) throw new Error('no Malay for: ' + t); return MS[t]; };
/* Longer Malay lines get a little less type where a box is tight */
const LCSS = LANG === 'ms' ? '#s07-abx h2{font-size:42px} #s09-stuck h2{font-size:56px} #s06-rule h2{font-size:52px}' : '';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* The app's own pictograms (ICONS in src/parts/engine.js), 24 grid, stroke 2 */
const ICON = {
  triage:'<path d="M4 9.5 10.5 3H19a1 1 0 0 1 1 1v8.5L13.5 19a1.8 1.8 0 0 1-2.5 0L4 12a1.8 1.8 0 0 1 0-2.5z"/><circle cx="15.5" cy="7.5" r="1.5"/>',
  stetho:'<path d="M6 3.5v5a4 4 0 0 0 8 0v-5"/><path d="M10 12.5v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10.5" r="2"/>',
  syringe:'<path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><path d="m4 20 2.4-2.4M10 10.5l3.5 3.5"/>',
  chair:'<path d="M7 4v8.5h10V20M7 12.5V20M17 12.5V8"/><path d="M5 12.5h14"/>',
  review:'<path d="M14 3.5H7A2 2 0 0 0 5 5.5v13a2 2 0 0 0 2 2h4"/><path d="M8.5 8h6M8.5 11.5h3"/><circle cx="16" cy="15.5" r="3.3"/><path d="m18.5 18 2 2"/>',
  check:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 3.5V5h6V3.5"/><path d="m8.5 12 2.2 2.2L15.5 9.5"/><path d="M9 18h6"/>',
  rule:'<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  bed:'<path d="M3 18.5v-11M3 14.5h18v4M21 14.5V12a3 3 0 0 0-3-3h-7v5.5"/><circle cx="7" cy="11.5" r="1.8"/>',
  door:'<path d="M13.5 4H7A1.5 1.5 0 0 0 5.5 5.5v13A1.5 1.5 0 0 0 7 20h6.5"/><path d="M10.5 12H20M16.5 8.5 20 12l-3.5 3.5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  todo:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
  path:'<circle cx="6" cy="5" r="2.2"/><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M6 7.2v9.6M8 5h4a4 4 0 0 1 4 4v1M8 19h4a4 4 0 0 0 4-4v-1"/>',
  brain:'<path d="M9.5 4.5a3 3 0 0 0-5 2.2 3 3 0 0 0-.9 5.3 3 3 0 0 0 2.4 4.5 3 3 0 0 0 5 1V6.4a2 2 0 0 0-1.5-1.9zM14.5 4.5a3 3 0 0 1 5 2.2 3 3 0 0 1 .9 5.3 3 3 0 0 1-2.4 4.5 3 3 0 0 1-5 1V6.4a2 2 0 0 1 1.5-1.9z"/>',
  chev:'<path d="m9 6 6 6-6 6"/>'
};
const ic = (k, cls = '') => `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

/* Shared CSS: the tokens file, with font paths as the scene files see them */
const BASE_CSS = fs.readFileSync(path.join(ROOT, 'assets/gz.css'), 'utf8').replace(/url\('fonts\//g, "url('assets/fonts/");
const PART_CSS = `
.zm-h{position:absolute;left:44px;top:34px;display:flex;align-items:center;gap:18px}
.zm-h b{font-weight:800;font-size:40px;letter-spacing:-.01em}
.zm-tag{font-weight:800;font-size:28px;letter-spacing:.08em;text-transform:uppercase;padding:6px 14px;border-radius:12px;background:rgba(255,255,255,.14)}
.zm-base,.zm-fill{position:absolute;height:10px;border-radius:5px}
.zm-base{background:rgba(255,255,255,.22)}
.zm-fill{background:var(--mint);transform-origin:0 50%}
.zm-stop{position:absolute;width:300px;display:flex;flex-direction:column;align-items:center;text-align:center}
.zm-stop b{font-weight:800;font-size:32px;line-height:1.1;margin-top:16px}
.zm-stop small{font-weight:700;font-size:28px;line-height:1.15;margin-top:6px;opacity:.9}
.zw{position:relative}
.zd{position:relative;background:var(--emerald-2);box-shadow:inset 0 0 0 3px rgba(255,255,255,.34);color:#fff}
.zd .ic{width:46%;height:46%}
.zd.maybe{outline:3px dashed rgba(255,255,255,.55);outline-offset:7px}
.zm-halo{position:absolute;border-radius:50%;background:rgba(67,221,140,.3)}
.zm-tok{position:absolute;width:46px;height:46px;border-radius:50%;background:#fff;box-shadow:0 0 0 7px rgba(255,255,255,.22),0 12px 20px -8px rgba(0,0,0,.55)}
.zm-tok i{position:absolute;inset:14px;border-radius:50%;background:var(--emerald-1)}
.ck{position:relative;flex:none;width:58px;height:58px;border-radius:50%;box-shadow:inset 0 0 0 3px var(--ckr,var(--line-2))}
.ck-f{position:absolute;inset:0;border-radius:50%;background:var(--ckc,var(--discharge))}
.ck svg{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--cks,#fff);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.ck path{stroke-dasharray:1}
.row{display:flex;align-items:center;gap:26px}
.nb{white-space:nowrap}
.chip{display:inline-flex;align-items:center;height:64px;padding:0 28px;border-radius:32px;font-weight:800;font-size:34px;white-space:nowrap}
`;

/* ---------- small builders ---------- */
const STOPS = [
  {name:'Triage', sub:'MTS 4 or 5', icon:'triage'},
  {name:'You, the MO', sub:'Consultation', icon:'stetho'},
  {name:'Treatment room', sub:'PPP', icon:'syringe'},
  {name:'CCA', sub:'Only if needed', icon:'chair', maybe:true},
  {name:'Review and finish', sub:'Back to you', icon:'review'}
];
/* The zone map tile. p: id prefix. Geometry in px. */
function zoneMap(p, o){
  const W = o.width, H = o.height, d = o.disc || 116, ty = o.trackY || Math.round(H * 0.47);
  const xs = STOPS.map((s, i) => Math.round(W * (0.1 + 0.2 * i)));
  const stops = STOPS.map((s, i) => `
    <div class="zm-stop" id="${p}-st${i}" style="left:${xs[i] - 150}px;top:${ty - d / 2}px">
      <div class="zw" style="width:${d}px;height:${d}px">
        <div class="zm-halo" id="${p}-h${i}" style="left:-16px;top:-16px;width:${d + 32}px;height:${d + 32}px;opacity:${o.lit && i === 1 ? 1 : 0}"></div>
        <div class="disc zd${s.maybe ? ' maybe' : ''}" id="${p}-d${i}" style="width:${d}px;height:${d}px${o.lit && i === 1 ? ';background:#43dd8c;color:#063d28' : ''}">${ic(s.icon)}</div>
      </div>
      <b>${esc(tr(s.name))}</b><small>${esc(tr(s.sub))}</small>
    </div>`).join('');
  return `<div class="tile t-emerald" id="${p}-zm" style="left:${o.left}px;top:${o.top}px;width:${W}px;height:${H}px">
    ${o.head === false ? '' : `<div class="zm-h"><b>${tr('Zone map')}</b><span class="zm-tag">${tr('One way')}</span></div>`}
    <div class="zm-base" style="left:${xs[0]}px;top:${ty - 5}px;width:${xs[4] - xs[0]}px"></div>
    <div class="zm-fill" id="${p}-fill" style="left:${xs[0]}px;top:${ty - 5}px;width:${xs[4] - xs[0]}px"></div>
    ${stops}
    <div class="zm-tok" id="${p}-tok" style="left:${xs[0] - 23}px;top:${ty - d / 2 - 64}px"><i></i></div>
  </div>`;
}
const zx = (o, i) => Math.round(o.width * (0.1 + 0.2 * i));       /* stop centre inside the tile */
const zstep = o => zx(o, 1) - zx(o, 0);                              /* px between stops */
const check = (id, style = '') => `<div class="ck" id="${id}"${style ? ` style="${style}"` : ''}><div class="ck-f" id="${id}-f"></div><svg viewBox="0 0 24 24"><path id="${id}-p" d="m6.6 12.4 3.6 3.6 7.2-7.4" pathLength="1"/></svg></div>`;

/* ---------- timeline snippets ---------- */
const J = {
  deal:(sel, t, dy = 40) => `tl.fromTo("${sel}",{y:${dy},rotation:1.5,opacity:0},{y:0,rotation:0,opacity:1,duration:.45,ease:"power3.out"},${r3(t)});`,
  slideIn:(sel, t, dx) => `tl.fromTo("${sel}",{x:${dx},opacity:0},{x:0,opacity:1,duration:.5,ease:"power3.out"},${r3(t)});`,
  fade:(sel, t, d = .3) => `tl.fromTo("${sel}",{opacity:0},{opacity:1,duration:${d},ease:"power1.out"},${r3(t)});`,
  fadeTo:(sel, t, from, to, d = .3) => `tl.fromTo("${sel}",{opacity:${from}},{opacity:${to},duration:${d},ease:"power1.inOut",immediateRender:false},${r3(t)});`,
  pop:(sel, t) => `tl.fromTo("${sel}",{scale:.6,opacity:0},{scale:1,opacity:1,duration:.32,ease:"back.out(2.2)"},${r3(t)});`,
  pulse:(sel, t, s = 1.12) => `tl.fromTo("${sel}",{scale:1},{scale:${s},duration:.16,ease:"power2.out",yoyo:true,repeat:1,immediateRender:false},${r3(t)});`,
  tick:(id, t) => `tl.fromTo("#${id}-f",{scale:0},{scale:1,duration:.28,ease:"back.out(2.2)"},${r3(t)});tl.fromTo("#${id}-p",{strokeDashoffset:1},{strokeDashoffset:0,duration:.3,ease:"power2.out"},${r3(t + .1)});`,
  draw:(sel, t, d = .5) => `tl.fromTo("${sel}",{strokeDashoffset:1},{strokeDashoffset:0,duration:${d},ease:"power2.inOut"},${r3(t)});`,
  fill:(sel, t, from, to, d) => `tl.fromTo("${sel}",{scaleX:${from}},{scaleX:${to},duration:${d},ease:"power1.inOut"${from === null ? '' : ''}},${r3(t)});`,
  set:(sel, t, props) => `tl.set("${sel}",${props},${r3(t)});`,
  moveX:(sel, t, from, to, d = .9) => `tl.fromTo("${sel}",{x:${from}},{x:${to},duration:${d},ease:"power2.inOut"},${r3(t)});`,
  light:(p, i, t) => `tl.fromTo("#${p}-d${i}",{backgroundColor:"#0a5a3b",color:"#ffffff"},{backgroundColor:"#43dd8c",color:"#063d28",duration:.3,ease:"power1.out",immediateRender:false},${r3(t)});tl.fromTo("#${p}-h${i}",{opacity:0,scale:.7},{opacity:1,scale:1,duration:.45,ease:"back.out(1.8)"},${r3(t)});`
};

function scene(id, css, html, js){
  return `<template>
<style>
${BASE_CSS}
${PART_CSS}
#root{position:absolute;inset:0;overflow:hidden}
${css}
${LCSS}
</style>
<div id="root" data-composition-id="${id}" data-width="1920" data-height="1080">
${html}
</div>
<script>
(function(){
  const tl = gsap.timeline({ paused: true });
  ${js.join('\n  ')}
  window.__timelines["${id}"] = tl;
})();
</script>
</template>
`;
}
const files = {};

/* ===== s01 · New to the Green Zone? ===== */
{
  const id = 's01', p = 's01', Z = {left:160, top:456, width:1600, height:434, trackY:226};
  const run = at(id, 5), dur = 2.0, step = zstep(Z);
  const html = `
  <h1 id="s01-t" style="position:absolute;left:160px;top:118px;font-weight:900;font-size:132px;line-height:.96;letter-spacing:-.035em">${tr('New to the')}<br><span style="color:var(--accent)">${tr('Green Zone?')}</span></h1>
  <div id="s01-u" style="position:absolute;left:166px;top:390px;width:${LANG === 'en' ? 730 : 650}px;height:12px;border-radius:6px;background:var(--mint);transform-origin:0 50%"></div>
  ${zoneMap(p, Z)}`;
  const js = [
    `tl.fromTo("#s01-u",{scaleX:0},{scaleX:1,duration:.6,ease:"power3.out"},${at(id, 3)});`,
    J.fill('#s01-fill', run, 0, 1, dur),
    J.moveX('#s01-tok', run, 0, step * 4, dur),
    ...[0, 1, 2, 3, 4].map(i => J.pulse(`#s01-d${i}`, run + dur * i / 4)),
    J.light(p, 1, at(id, 15)),
    ...[0, 1, 2, 3, 4].map(i => `tl.fromTo("#s01-st${i}",{y:0},{y:-12,duration:.18,ease:"power2.out",yoyo:true,repeat:1,immediateRender:false},${r3(at(id, 18) + i * .1)});`)
  ];
  files[id] = scene(id, '', html, js);
}

/* ===== s02 · Patients move one way ===== */
{
  const id = 's02';
  const css = `
  #s02-road{left:160px;top:96px;width:1600px;height:300px}
  .rd-stop{position:absolute;top:66px;width:300px;display:flex;flex-direction:column;align-items:center;text-align:center}
  .rd-stop b{font-weight:800;font-size:36px;margin-top:16px}
  .rd-stop small{font-weight:700;font-size:28px;opacity:.9;margin-top:4px}
  #s02-card{left:160px;top:452px;width:900px;height:430px;padding:44px 52px}
  #s02-card .t-title{margin-bottom:26px}
  #s02-card .row{margin-bottom:20px}
  #s02-card .row span{font-weight:800;font-size:42px}
  #s02-note{position:absolute;left:52px;bottom:36px;font-weight:700;font-size:28px;color:var(--muted)}
  #s02-no{left:1120px;top:452px;width:640px;height:430px;padding:44px 48px}
  #s02-loop{position:absolute;right:40px;top:34px;width:220px;height:150px}
  #s02-loop path{fill:none;stroke-linecap:round;stroke-linejoin:round}
  `;
  const xs = [0.16, 0.5, 0.84].map(f => Math.round(1600 * f));
  const rd = [[tr('Triage'), tr('MTS 4 or 5'), 'triage'], [tr('Secondary triage'), '', 'todo'], [tr('You, the MO'), tr('Consultation'), 'stetho']];
  const html = `
  <div class="tile t-emerald" id="s02-road">
    <div class="zm-h" style="top:28px"><span class="zm-tag">${tr('One way')}</span></div>
    <div class="zm-base" style="left:${xs[0]}px;top:115px;width:${xs[2] - xs[0] + 150}px"></div>
    <div class="zm-fill" id="s02-fill" style="left:${xs[0]}px;top:115px;width:${xs[2] - xs[0]}px"></div>
    <svg viewBox="0 0 40 40" style="position:absolute;left:${xs[2] + 150}px;top:104px;width:40px;height:40px;color:rgba(255,255,255,.55)"><path d="M6 4l26 16L6 36z" fill="currentColor"/></svg>
    ${rd.map((r, i) => `<div class="rd-stop" style="left:${xs[i] - 150}px"><div class="disc zd" id="s02-d${i}" style="width:108px;height:108px">${ic(r[2])}</div><b>${esc(r[0])}</b>${r[1] ? `<small>${esc(r[1])}</small>` : ''}</div>`).join('')}
    <div class="zm-tok" id="s02-tok" style="left:${xs[0] - 23}px;top:8px"><i></i></div>
  </div>
  <div class="card" id="s02-card">
    <h2 class="t-title">${tr('Secondary triage')}</h2>
    ${[tr('Vital signs'), tr('ECG'), tr('Dressing')].map((w, i) => `<div class="row">${check('s02-c' + i)}<span>${w}</span></div>`).join('')}
    <p id="s02-note">${tr('Also the focused history and wound irrigation')}</p>
  </div>
  <div class="card" id="s02-no">
    <svg id="s02-loop" viewBox="0 0 220 150"><path id="s02-lp" d="M190 120 C 190 40, 30 40, 30 104" stroke="#0a5a3b" stroke-width="10" pathLength="1" style="stroke-dasharray:1"/><path id="s02-la" d="M10 86 L30 112 L52 88" stroke="#0a5a3b" stroke-width="10" style="opacity:0"/><path id="s02-x" d="M40 20 L180 140" stroke="#c42a20" stroke-width="12" pathLength="1" style="stroke-dasharray:1"/></svg>
    <h2 class="t-title" style="font-size:56px;margin-top:140px">${tr('No repeats')}</h2>
    <p id="s02-un" class="t-label" style="margin-top:12px;color:var(--ink-2)">${tr('Unless they were missed')}</p>
    <p id="s02-pr" class="t-small" style="margin-top:22px;color:var(--muted)">${tr('A later ECG is done in the Procedure Room.')}</p>
  </div>`;
  const js = [
    `tl.fromTo("#s02-road",{y:334,rotation:1.5,opacity:0},{y:294,rotation:0,opacity:1,duration:.45,ease:"power3.out"},0.05);`,
    `tl.fromTo("#s02-road",{y:294},{y:0,duration:.6,ease:"power3.inOut",immediateRender:false},${at(id, 4, -.15)});`,
    J.fill('#s02-fill', at(id, 1), 0, (xs[1] - xs[0]) / (xs[2] - xs[0]), .9),
    J.moveX('#s02-tok', at(id, 1), 0, xs[1] - xs[0], .9),
    J.pulse('#s02-d1', at(id, 1, .85)),
    J.deal('#s02-card', at(id, 4, .25)),
    J.tick('s02-c0', at(id, 8)), J.tick('s02-c1', at(id, 10)), J.tick('s02-c2', at(id, 12)),
    J.fade('#s02-note', at(id, 12, .5)),
    J.deal('#s02-no', at(id, 13, -.15)),
    J.draw('#s02-lp', at(id, 13, .1), .5),
    J.fade('#s02-la', at(id, 13, .55), .15),
    J.draw('#s02-x', at(id, 15, .2), .28),
    J.fade('#s02-un', at(id, 17)),
    J.fade('#s02-pr', at(id, 13, .35))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s03 · Then on to you; the green slip; the treatment room ===== */
{
  const id = 's03';
  const css = `
  #s03-mo{position:absolute;left:160px;top:250px;width:300px;display:flex;flex-direction:column;align-items:center;text-align:center}
  #s03-mo b{font-weight:800;font-size:40px;margin-top:22px}
  #s03-mo small{font-weight:700;font-size:30px;color:var(--muted);margin-top:4px}
  #s03-d{background:var(--mint);color:var(--emerald-3);box-shadow:0 0 0 18px rgba(67,221,140,.24)}
  #s03-slip{position:absolute;left:520px;top:150px;width:520px;height:700px;border-radius:30px;background:#e4f4ea;box-shadow:0 2px 6px rgba(15,26,21,.06),0 40px 70px -40px rgba(6,61,40,.55),inset 0 0 0 1.5px #c4e2cf;overflow:hidden}
  #s03-slip header{height:150px;padding:34px 40px;background:var(--emerald-1);color:#fff}
  #s03-slip header b{display:block;font-weight:900;font-size:50px;letter-spacing:-.02em}
  #s03-slip header small{font-weight:700;font-size:30px;opacity:.9}
  #s03-slip .sl-lab{font-weight:700;font-size:30px;color:#3d6b52;margin:34px 40px 18px}
  .sl-row{display:flex;align-items:center;gap:22px;margin:0 40px 26px}
  .sl-row .ck{width:50px;height:50px;border-radius:12px}
  .sl-row .ck-f{border-radius:12px}
  .sl-bar{height:16px;border-radius:8px;background:#9cc8ad;transform-origin:0 50%}
  #s03-q{position:absolute;left:40px;bottom:40px;display:flex;align-items:center;gap:16px;font-weight:800;font-size:30px;color:#2c5a41}
  #s03-q i{display:block;width:150px;height:52px;border-radius:14px;box-shadow:inset 0 0 0 3px #9cc8ad}
  #s03-path{position:absolute;left:1040px;top:470px;width:250px;height:60px}
  #s03-rbw{position:absolute;top:388px;${LANG === 'en' ? 'left:1092px' : 'left:1040px;width:250px;display:flex;justify-content:center'}}
  #s03-rb{position:relative;height:58px;padding:0 22px;border-radius:16px;font-weight:800;font-size:30px;display:flex;align-items:center}
  #s03-tr{left:1290px;top:150px;width:470px;height:700px;padding:44px 44px}
  #s03-tr .disc{width:104px;height:104px;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 3px rgba(255,255,255,.3)}
  #s03-tr .disc .ic{width:48%;height:48%}
  #s03-tr h2{font-weight:800;font-size:50px;line-height:1.05;margin-top:26px}
  #s03-tr .ppp{font-weight:700;font-size:32px;opacity:.9;margin-top:6px}
  .tr-row{display:flex;align-items:flex-start;gap:20px;margin-top:30px;font-weight:700;font-size:34px;line-height:1.2}
  .tr-row .dot{position:relative;flex:none;width:30px;height:30px;margin-top:6px;border-radius:50%;background:rgba(255,255,255,.3)}
  #s03-ring{position:absolute;inset:-12px;border-radius:50%;box-shadow:0 0 0 4px var(--mint);opacity:0}
  `;
  const html = `
  <div id="s03-mo"><div class="zw" style="width:170px;height:170px"><div class="disc zd" id="s03-d" style="width:170px;height:170px">${ic('stetho')}</div></div><b>${tr('You, the MO')}</b><small>${tr('Consultation')}</small></div>
  <div class="zm-tok" id="s03-tok" style="left:287px;top:312px;z-index:2"><i></i></div>
  <div id="s03-slip">
    <header><b>${tr('Green slip')}</b><small>${tr('Slip hijau')}</small></header>
    <p class="sl-lab">${tr('Orders')}</p>
    ${[0, 1, 2].map(i => `<div class="sl-row">${check('s03-k' + i, '--ckr:#9cc8ad;--ckc:#0d7049')}<div class="sl-bar" id="s03-b${i}" style="width:${[300, 240, 270][i]}px"></div></div>`).join('')}
    <div id="s03-q">${tr('Queue no.')}<i></i></div>
  </div>
  <svg id="s03-path" viewBox="0 0 250 60"><path id="s03-pl" d="M8 30 H 240" stroke="#0a5a3b" stroke-width="8" stroke-linecap="round" fill="none" pathLength="1" style="stroke-dasharray:1"/></svg>
  <div id="s03-rbw"><div id="s03-rb" class="tile t-garnet">${tr('Red Box')}</div></div>
  <div class="tile t-emerald" id="s03-tr">
    <div class="disc">${ic('syringe')}</div>
    <h2>${tr('Treatment room')}</h2><p class="ppp">${tr('PPP')}</p>
    <div class="tr-row" id="s03-r0"><span class="dot"><span id="s03-ring"></span></span><span>${tr('Calls the queue number')}</span></div>
    <div class="tr-row" id="s03-r1"><span class="dot"></span><span>${tr('Carries out each order')}</span></div>
    <div class="tr-row" id="s03-r2"><span class="dot"></span><span>${tr('Documents each one')}</span></div>
  </div>`;
  const js = [
    `tl.fromTo("#s03-mo",{x:650,opacity:0,y:30},{x:650,opacity:1,y:0,duration:.45,ease:"power3.out"},0.05);`,
    `tl.fromTo("#s03-mo",{x:650},{x:0,duration:.6,ease:"power3.inOut",immediateRender:false},${at(id, 4, -.2)});`,
    J.moveX('#s03-tok', 0.0, 390, 650, at(id, 3) - 0.0),
    J.fade('#s03-tok', 0.0, .2),
    `tl.fromTo("#s03-tok",{opacity:1},{opacity:0,duration:.2,immediateRender:false},${at(id, 3, .05)});`,
    J.pulse('#s03-d', at(id, 3), 1.1),
    `tl.fromTo("#s03-slip",{x:-140,rotation:-8,opacity:0},{x:0,rotation:-2,opacity:1,duration:.55,ease:"power3.out"},${at(id, 4, .2)});`,
    ...[0, 1, 2].map(i => `tl.fromTo("#s03-b${i}",{scaleX:0},{scaleX:1,duration:.4,ease:"power2.out"},${r3(at(id, 7) + i * .16)});`),
    J.draw('#s03-pl', at(id, 9), .45),
    J.pop('#s03-rb', at(id, 9, .2)),
    J.deal('#s03-tr', at(id, 10, .1)),
    `tl.fromTo("#s03-ring",{scale:.6,opacity:.9},{scale:1.7,opacity:0,duration:.6,ease:"power1.out"},${at(id, 12)});`,
    `tl.fromTo("#s03-ring",{scale:.6,opacity:.9},{scale:1.7,opacity:0,duration:.6,ease:"power1.out",immediateRender:false},${at(id, 12, .65)});`,
    ...[0, 1, 2].map(i => `tl.fromTo("#s03-r${i} .dot",{backgroundColor:"rgba(255,255,255,0.3)"},{backgroundColor:"#43dd8c",duration:.25,immediateRender:false},${[at(id, 12), at(id, 17), at(id, 20, .35)][i]});`),
    ...[0, 1, 2].map(i => J.tick('s03-k' + i, at(id, 18) + i * .26))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s04 · Down-triage is for the MO ===== */
{
  const id = 's04';
  const css = `
  #s04-mo{left:160px;top:170px;width:560px;height:690px;padding:48px}
  #s04-mo .disc{width:110px;height:110px;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 3px rgba(255,255,255,.3)}
  #s04-mo .disc .ic{width:50%;height:50%}
  #s04-mo h2{font-weight:900;font-size:110px;line-height:.95;letter-spacing:-.035em;margin-top:44px}
  #s04-mo .sub{font-weight:800;font-size:44px;margin-top:18px;opacity:.92}
  #s04-mo .t-src{position:absolute;left:48px;bottom:44px;right:48px}
  #s04-form{left:790px;top:170px;width:970px;height:690px;padding:48px 56px}
  #s04-form header{display:flex;align-items:center;gap:22px;padding-bottom:30px;border-bottom:2px solid var(--line)}
  #s04-form header .ic{width:58px;height:58px;color:var(--plum-1)}
  #s04-dt{margin-top:34px;height:96px;border-radius:24px;display:flex;align-items:center;gap:20px;padding:0 30px;background:var(--surface-2);box-shadow:inset 0 0 0 2px var(--line);font-weight:800;font-size:40px}
  #s04-dt svg{width:44px;height:44px;color:var(--plum-1)}
  .f-row{display:flex;align-items:center;gap:26px;margin-top:34px;font-weight:800;font-size:40px}
  #s04-ppp{position:absolute;left:56px;right:56px;bottom:100px;font-weight:700;font-size:30px;color:var(--muted)}
  #s04-src{position:absolute;left:56px;right:56px;bottom:46px;color:var(--muted)}
  .f-row span{line-height:1.15}
  `;
  const html = `
  <div class="card" id="s04-form">
    <header>${ic('triage')}<h2 class="t-title">${tr('Triage form')}</h2></header>
    <div id="s04-dt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v15M6 13l6 6 6-6"/></svg>${tr('Down-triage')}</div>
    <div class="f-row">${check('s04-c0', '--ckc:var(--plum-1)')}<span>${tr('The MO examined the patient properly first')}</span></div>
    <div class="f-row">${check('s04-c1', '--ckc:var(--plum-1)')}<span>${tr('The MO documented it on this form')}</span></div>
    <p id="s04-ppp">${tr('The PPP makes sure it is documented.')}</p>
    <p id="s04-src" class="t-src">${tr('Source: memo HKL/JK/98/188/3(22)22, 4 Oct 2022')}</p>
  </div>
  <div class="tile t-plum" id="s04-mo">
    <div class="disc">${ic('rule')}</div>
    <h2>${tr('Only the EP')}</h2>
    <p class="sub">${tr('can allow a <span class="nb">down-triage</span>')}</p>
  </div>`;
  const js = [
    J.deal('#s04-form', 0.05),
    J.deal('#s04-mo', at(id, 2, -.1)),
    `tl.fromTo("#s04-dt",{boxShadow:"inset 0 0 0 2px #dbe2de"},{boxShadow:"inset 0 0 0 4px #6a3473",duration:.3,immediateRender:false},${at(id, 6)});`,
    J.tick('s04-c0', at(id, 10, .1)),
    J.tick('s04-c1', at(id, 15)),
    J.fade('#s04-ppp', at(id, 15, .35))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s05 · The pathway: syncope, one question at a time ===== */
{
  const id = 's05';
  const css = `
  #s05-hd{left:160px;top:96px;width:1600px;height:200px;padding:38px 48px}
  #s05-hd .pg{display:inline-flex;align-items:center;height:48px;padding:0 18px;border-radius:14px;background:rgba(255,255,255,.16);font-weight:800;font-size:28px}
  #s05-hd h2{font-weight:900;font-size:84px;line-height:1;letter-spacing:-.03em;margin-top:14px}
  #s05-ends{position:absolute;right:48px;top:44px;display:flex;flex-direction:column;align-items:flex-end;gap:14px}
  #s05-ends p{font-weight:800;font-size:30px;opacity:.9}
  #s05-chips{position:relative;width:632px;height:58px}
  #s05-chips .oc{position:absolute;top:0;justify-content:center;padding:0}
  #s05-ends{align-items:flex-start;width:632px}
  #s05-q1,#s05-q2,#s05-out{left:160px;top:350px;width:1000px;height:520px;padding:48px 52px}
  .q-text{font-weight:800;font-size:54px;line-height:1.08;letter-spacing:-.015em}
  .opt{display:flex;align-items:center;gap:22px;height:96px;margin-top:22px;padding:0 30px;border-radius:24px;background:var(--surface-2);box-shadow:inset 0 0 0 2px var(--line);font-weight:800;font-size:40px}
  .opt i{flex:none;width:34px;height:34px;border-radius:50%;box-shadow:inset 0 0 0 3px var(--line-2)}
  #s05-out{background:var(--discharge);color:#fff;border-radius:36px;box-shadow:0 40px 70px -40px rgba(10,60,35,.6)}
  #s05-out .lbl{font-weight:800;font-size:32px;opacity:.9}
  #s05-out h3{font-weight:900;font-size:76px;line-height:1;letter-spacing:-.03em;margin-top:20px}
  #s05-out p{font-weight:700;font-size:34px;line-height:1.25;margin-top:26px;opacity:.95}
  #s05-route{left:1220px;top:350px;width:540px;height:520px;padding:44px 40px}
  #s05-route h3{font-weight:800;font-size:40px;margin-bottom:12px}
  .rt{display:flex;gap:18px;margin-top:22px}
  .rt i{flex:none;width:16px;height:16px;margin-top:12px;border-radius:50%;background:var(--sapphire-1)}
  .rt span{font-weight:700;font-size:30px;line-height:1.25;color:var(--ink-2)}
  .rt b{font-weight:800;color:var(--accent)}
  `;
  const opt = (i, t) => `<div class="opt" id="s05-o${i}"><i></i>${esc(t)}</div>`;
  const html = `
  <div class="tile t-sapphire" id="s05-hd">
    <span class="pg">Ebook p57–58</span>
    <h2>Syncope</h2>
    <div id="s05-ends"><p>Can still end in</p><div id="s05-chips">
      <span class="oc k-admit" id="s05-ka" style="left:0;width:150px">Admit</span><span class="oc k-discharge" id="s05-kd" style="left:162px;width:236px">Discharge</span><span class="oc k-neutral" id="s05-kn" style="left:410px;width:222px">Next step</span>
    </div></div>
  </div>
  <div class="card" id="s05-q1" data-layout-allow-overlap><p class="q-text">Is this syncope?</p>${opt('a', 'Yes')}${opt('b', 'No')}</div>
  <div class="card" id="s05-q2" data-layout-allow-overlap><p class="q-text">Any dangerous cause or high-risk factor?</p>${opt('c', 'Yes, present')}${opt('d', 'None')}</div>
  <div id="s05-out" class="card" data-layout-allow-overlap><p class="lbl">Discharge</p><h3>Observation and discharge</h3></div>
  <div class="card" id="s05-route"><h3>Your route</h3>
    <div class="rt" id="s05-r0"><i></i><span>Is this syncope? <b>Yes</b></span></div>
    <div class="rt" id="s05-r1"><i></i><span>Assess: history, examination, ECG</span></div>
    <div class="rt" id="s05-r2"><i></i><span>Any dangerous cause or high-risk factor? <b id="s05-r2b">None</b></span></div>
  </div>`;
  const sel = (o, t) => `tl.fromTo("#s05-${o}",{backgroundColor:"#f5f7f6",color:"#0f1a15"},{backgroundColor:"#0b6b47",color:"#ffffff",duration:.22,immediateRender:false},${r3(t)});`;
  const collapse = (s, t) => `tl.fromTo("${s}",{opacity:1,scale:1},{opacity:0,scale:.7,duration:.35,ease:"power2.in",immediateRender:false},${r3(t)});`;
  const swapT = at(id, 10, .15), outT = at(id, 17, .2);
  const js = [
    J.deal('#s05-hd', 0.05),
    J.fade('#s05-ends', at(id, 5)),
    J.deal('#s05-q1', at(id, 3, -.1)),
    J.deal('#s05-route', at(id, 5)),
    sel('oa', at(id, 9)),
    J.fade('#s05-r0', at(id, 9, .1)),
    `tl.fromTo("#s05-q1",{x:0,opacity:1},{x:-80,opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${swapT});`,
    `tl.fromTo("#s05-q2",{x:90,opacity:0},{x:0,opacity:1,duration:.42,ease:"power3.out"},${r3(swapT + .22)});`,
    J.fade('#s05-r1', r3(swapT + .2)),
    J.pulse('#s05-chips', at(id, 13), 1.06),
    collapse('#s05-kn', at(id, 14)),
    sel('od', at(id, 16)),
    J.fade('#s05-r2', r3(swapT + .45)),
    J.fade('#s05-r2b', at(id, 16, .1)),
    `tl.fromTo("#s05-out",{rotationX:-90,opacity:0,transformPerspective:1400,transformOrigin:"50% 0%"},{rotationX:0,opacity:1,duration:.6,ease:"power3.out"},${outT});`,
    `tl.fromTo("#s05-q2",{opacity:1},{opacity:0,duration:.2,immediateRender:false},${r3(outT + .15)});`,
    collapse('#s05-ka', r3(outT + .05)),
    `tl.fromTo("#s05-kd",{x:0},{x:-162,duration:.45,ease:"power3.inOut",immediateRender:false},${r3(outT + .3)});`
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s06 · Waiting for results: the CCA; never waits outside ===== */
{
  const id = 's06', Z = {left:160, top:96, width:1600, height:376, disc:96, trackY:172, lit:true};
  const step = zstep(Z);
  const css = `
  #s06-wait{position:absolute;left:${160 + zx(Z, 3) - 190}px;top:58px;width:380px;display:flex;justify-content:center}
  #s06-wait span{white-space:nowrap;height:56px;padding:0 22px;border-radius:16px;display:flex;align-items:center;background:#fff;color:var(--emerald-3);font-weight:800;font-size:28px;box-shadow:0 10px 24px -12px rgba(0,0,0,.45)}
  #s06-rule{left:160px;top:520px;width:1600px;height:350px;padding:44px 52px}
  #s06-rule h2{font-weight:800;font-size:56px;letter-spacing:-.02em;display:flex;align-items:center;gap:22px}
  #s06-rule h2 svg{width:56px;height:56px}
  #s06-chips{display:flex;gap:18px;margin-top:30px}
  #s06-chips .chip{background:#fff;color:var(--plum-3)}
  #s06-in{font-weight:700;font-size:32px;line-height:1.3;margin-top:30px;opacity:.95}
  `;
  const html = `
  ${zoneMap('s06', Z)}
  <div id="s06-wait"><span>${tr('Results pending')}</span></div>
  <div class="tile t-plum" id="s06-rule">
    <h2>${ic('door')}${tr('Never waits outside')}</h2>
    <div id="s06-chips"><span class="chip" id="s06-c0">${tr('Elderly')}</span><span class="chip" id="s06-c1">${tr('NSTEMI or ACS')}</span><span class="chip" id="s06-c2">${tr('Stat drugs and monitoring')}</span></div>
    <p id="s06-in">${tr('Bring them in: the CCA, the rooms in front of R2, the R2 corridor or any zone with space.')}</p>
  </div>`;
  const js = [
    J.deal('#s06-zm', 0.05),
    J.set('#s06-fill', 0, '{scaleX:.5}'),
    J.set('#s06-tok', 0, `{x:${step * 2}}`),
    J.pop('#s06-wait', at(id, 1)),
    J.fill('#s06-fill', at(id, 3), .5, .75, .9),
    J.moveX('#s06-tok', at(id, 3), step * 2, step * 3, .9),
    J.pulse('#s06-d3', at(id, 8)),
    J.deal('#s06-rule', at(id, 9, -.15)),
    J.pop('#s06-c0', at(id, 10)), J.pop('#s06-c1', at(id, 11)), J.pop('#s06-c2', at(id, 15)),
    J.fade('#s06-in', at(id, 9, .3))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s07 · IV antibiotics and no bed is free ===== */
{
  const id = 's07';
  const css = `
  #s07-board{left:160px;top:96px;width:1600px;height:330px;padding:40px 48px}
  #s07-board h2{font-weight:800;font-size:48px}
  #s07-beds{display:flex;margin-top:28px}
  .bd{flex:1;display:flex;align-items:center;gap:24px;padding:0 34px;height:150px;border-left:2px solid var(--line)}
  .bd:first-child{border-left:0;padding-left:0}
  .bd .bi{position:relative;flex:none;width:96px;height:96px;color:var(--ink-2)}
  .bd .bi svg.x{position:absolute;inset:-6px;width:108px;height:108px}
  .bd b{font-weight:800;font-size:44px}
  #s07-none{position:absolute;right:48px;top:36px;height:60px;padding:0 24px;border-radius:18px;display:flex;align-items:center;background:var(--neutral);color:#fff;font-weight:800;font-size:30px}
  #s07-cca{left:160px;top:470px;width:620px;height:410px;padding:44px 48px}
  #s07-cca .disc{width:110px;height:110px;background:#43dd8c;color:var(--emerald-3)}
  #s07-cca .disc .ic{width:52%;height:52%}
  #s07-cca h2{font-weight:900;font-size:72px;letter-spacing:-.03em;margin-top:24px}
  #s07-cca p{font-weight:700;font-size:32px;margin-top:10px;opacity:.95}
  #s07-abx{left:840px;top:470px;width:920px;height:410px;padding:44px 52px}
  #s07-abx h2{font-weight:800;font-size:48px}
  #s07-names{display:grid;grid-template-columns:1fr 1fr;gap:16px 28px;margin-top:26px}
  #s07-names span{display:flex;align-items:center;height:76px;padding:0 26px;border-radius:22px;background:#fff;color:var(--plum-3);font-weight:800;font-size:40px}
  #s07-only{font-weight:700;font-size:28px;line-height:1.25;margin-top:22px;opacity:.95}
  `;
  const beds = ['Yellow Obs', 'ISO', 'YZ Ext'];
  const html = `
  <div class="card" id="s07-board">
    <h2>${tr('A bed first')}</h2>
    <div id="s07-beds">${beds.map((b, i) => `<div class="bd" id="s07-b${i}"><div class="bi">${ic('bed')}<svg class="x" viewBox="0 0 108 108"><path id="s07-x${i}" d="M14 94 94 14" stroke="#41544b" stroke-width="7" stroke-linecap="round" fill="none" pathLength="1" style="stroke-dasharray:1"/></svg></div><b>${b}</b></div>`).join('')}</div>
    <span id="s07-none">${tr('No bed free')}</span>
  </div>
  <div class="tile t-emerald" id="s07-cca"><div class="disc">${ic('chair')}</div><h2>${tr('CCA chair')}</h2><p>${tr('Hand over to the HO in the CCA')}</p></div>
  <div class="tile t-plum" id="s07-abx"><h2>${tr('The four allowed antibiotics')}</h2>
    <div id="s07-names">${['Augmentin', 'cefuroxime', 'ceftriaxone', 'Unasyn'].map((n, i) => `<span id="s07-n${i}">${n}</span>`).join('')}</div>
    <p id="s07-only"><b id="s07-o4">${tr('Only these four.')}</b>${tr(' Source: IV antibiotic memo, 30 Jun 2026.')}</p>
  </div>`;
  const js = [
    `tl.fromTo("#s07-board",{y:319,rotation:1.5,opacity:0},{y:279,rotation:0,opacity:1,duration:.45,ease:"power3.out"},0.05);`,
    `tl.fromTo("#s07-board",{y:279},{y:0,duration:.6,ease:"power3.inOut",immediateRender:false},${at(id, 8, -.25)});`,
    ...[0, 1, 2].map(i => J.pulse(`#s07-b${i} .bi`, at(id, 1) + i * .18, 1.1)),
    ...[0, 1, 2].map(i => J.draw(`#s07-x${i}`, at(id, 4) + i * .12, .25)),
    ...[0, 1, 2].map(i => J.fadeTo(`#s07-b${i}`, at(id, 6) , 1, .45, .35)),
    J.pop('#s07-none', at(id, 7)),
    J.deal('#s07-cca', at(id, 8, .15)),
    J.deal('#s07-abx', at(id, 15, -.1)),
    ...[0, 1, 2, 3].map(i => J.pop(`#s07-n${i}`, at(id, 17) + i * .14)),
    J.fade('#s07-only', at(id, 15, .3)),
    `tl.fromTo("#s07-o4",{opacity:0},{opacity:1,duration:.3},${at(id, 19)});`
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s08 · Before discharge ===== */
{
  const id = 's08';
  const css = `
  #s08-dc{left:160px;top:110px;width:760px;height:760px;padding:48px 52px}
  #s08-dc .disc{width:104px;height:104px;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 3px rgba(255,255,255,.3)}
  #s08-dc .disc .ic{width:50%;height:50%}
  #s08-dc h2{font-weight:900;font-size:76px;letter-spacing:-.03em;margin-top:30px}
  .dc-row{display:flex;align-items:center;gap:26px;margin-top:44px;font-weight:800;font-size:42px;line-height:1.15}
  #s08-dc .t-src{position:absolute;left:52px;right:52px;bottom:46px}
  #s08-flow{position:absolute;left:1000px;top:110px;width:760px;height:760px}
  .fl{position:absolute;left:0;right:0;height:170px;border-radius:36px;display:flex;align-items:center;gap:26px;padding:0 40px}
  .fl .ic{width:64px;height:64px;flex:none}
  .fl b{font-weight:800;font-size:46px}
  #s08-n0{top:0}
  #s08-n1{top:250px}
  #s08-n2{top:500px;height:260px;flex-direction:column;align-items:flex-start;justify-content:center;gap:22px}
  #s08-n2 p{font-weight:800;font-size:40px}
  #s08-apps{display:flex;gap:18px}
  #s08-apps span{display:flex;align-items:center;height:76px;padding:0 30px;border-radius:24px;background:var(--teal-1);color:#fff;font-weight:800;font-size:40px}
  .fl-ln{position:absolute;left:84px;width:8px;height:80px;border-radius:4px;background:var(--line-2);transform-origin:50% 0}
  `;
  const html = `
  <div class="tile t-teal" id="s08-dc">
    <div class="disc">${ic('check')}</div>
    <h2>${tr('Before discharge')}</h2>
    <div class="dc-row">${check('s08-c0', '--ckr:rgba(255,255,255,.5);--ckc:#ffffff;--cks:#0f5a64')}<span>${tr('Reassess the patient')}</span></div>
    <div class="dc-row">${check('s08-c1', '--ckr:rgba(255,255,255,.5);--ckc:#ffffff;--cks:#0f5a64')}<span>${tr('Review every blood result and image')}</span></div>
    <p class="t-src">${tr('Source: memo HKL/JK/98/188/3(10)24, 9 Jul 2024')}</p>
  </div>
  <div id="s08-flow">
    <div class="fl card" id="s08-n0">${ic('brain')}<b>${tr('A CT brain was ordered')}</b></div>
    <div class="fl-ln" id="s08-l0" style="top:170px"></div>
    <div class="fl tile t-obsidian" id="s08-n1">${ic('review')}<b>${tr('The EP reviews')}</b></div>
    <div class="fl-ln" id="s08-l1" style="top:420px"></div>
    <div class="fl card" id="s08-n2"><p>${tr('Then book a follow-up')}</p><div id="s08-apps"><span id="s08-a0">EMACC</span><span id="s08-a1">EM Watch</span></div></div>
  </div>`;
  const js = [
    `tl.fromTo("#s08-dc",{x:420,y:40,rotation:1.5,opacity:0},{x:420,y:0,rotation:0,opacity:1,duration:.45,ease:"power3.out"},0.05);`,
    `tl.fromTo("#s08-dc",{x:420},{x:0,duration:.6,ease:"power3.inOut",immediateRender:false},${at(id, 7, -.25)});`,
    J.tick('s08-c0', at(id, 2)),
    J.tick('s08-c1', at(id, 4)),
    J.deal('#s08-n0', at(id, 7, .2)),
    `tl.fromTo("#s08-l0",{scaleY:0},{scaleY:1,duration:.35,ease:"power2.out"},${at(id, 11, -.1)});`,
    J.deal('#s08-n1', at(id, 11, .15)),
    `tl.fromTo("#s08-l1",{scaleY:0},{scaleY:1,duration:.35,ease:"power2.out"},${at(id, 16, -.1)});`,
    J.deal('#s08-n2', at(id, 16, .15)),
    J.pop('#s08-a0', at(id, 18)),
    J.pop('#s08-a1', at(id, 20))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s09 · When the EP decides; when to call the EP ===== */
{
  const id = 's09';
  const R = 150, C = 2 * Math.PI * R;
  const css = `
  #s09-ep{left:160px;top:110px;width:780px;height:760px;padding:48px 52px}
  #s09-ep h2{font-weight:800;font-size:50px;letter-spacing:-.02em}
  #s09-dial{position:absolute;left:50%;top:170px;width:380px;height:380px;margin-left:-190px}
  #s09-dial svg{position:absolute;inset:0;width:100%;height:100%}
  #s09-h{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
  #s09-h b{font-weight:900;font-size:120px;line-height:1;letter-spacing:-.04em}
  #s09-h small{font-weight:800;font-size:34px;opacity:.9}
  #s09-cap{position:absolute;left:52px;right:52px;bottom:48px;font-weight:700;font-size:38px;line-height:1.25}
  #s09-stuck{left:1000px;top:110px;width:760px;height:340px;padding:48px 52px}
  #s09-stuck h2{font-weight:900;font-size:66px;letter-spacing:-.03em}
  #s09-stuck p{font-weight:700;font-size:34px;line-height:1.3;color:var(--muted);margin-top:18px}
  #s09-call{left:1000px;top:510px;width:760px;height:360px;padding:48px 52px}
  #s09-call .disc{width:104px;height:104px;background:#43dd8c;color:var(--emerald-3)}
  #s09-call .disc .ic{width:48%;height:48%}
  #s09-call h2{font-weight:900;font-size:68px;line-height:1.02;letter-spacing:-.03em;margin-top:26px}
  `;
  const ticks = Array.from({length:12}, (_, k) => { const a = (k / 12) * 2 * Math.PI - Math.PI / 2; const x1 = 190 + Math.cos(a) * 176, y1 = 190 + Math.sin(a) * 176, x2 = 190 + Math.cos(a) * 188, y2 = 190 + Math.sin(a) * 188; return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,.4)" stroke-width="4" stroke-linecap="round"/>`; }).join('');
  const html = `
  <div class="tile t-obsidian" id="s09-ep">
    <h2>${tr('Primary team delayed?')}</h2>
    <div id="s09-dial"><svg viewBox="0 0 380 380"><circle cx="190" cy="190" r="${R}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="26"/>${ticks}<circle id="s09-arc" cx="190" cy="190" r="${R}" fill="none" stroke="#d8b46a" stroke-width="26" stroke-linecap="round" transform="rotate(-90 190 190)" style="stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${C.toFixed(1)}"/></svg>
      <div id="s09-h"><b>4</b><small>${tr('hours')}</small></div></div>
    <p id="s09-cap">${tr('The EP may decide the admission.')}</p>
  </div>
  <div class="card" id="s09-stuck"><h2>${tr('Unsure, or stuck?')}</h2><p>${tr('Several disciplines and no disposition after a long wait.')}</p></div>
  <div class="tile t-emerald" id="s09-call"><div class="disc">${ic('phone')}</div><h2>${tr('Call the EP in charge')}</h2></div>`;
  const js = [
    `tl.fromTo("#s09-ep",{x:410,y:40,rotation:1.5,opacity:0},{x:410,y:0,rotation:0,opacity:1,duration:.45,ease:"power3.out"},0.05);`,
    `tl.fromTo("#s09-ep",{x:410},{x:0,duration:.6,ease:"power3.inOut",immediateRender:false},${at(id, 12, -.3)});`,
    J.fade('#s09-cap', at(id, 3)),
    J.fade('#s09-h', at(id, 9, -.1)),
    `tl.fromTo("#s09-arc",{strokeDashoffset:${C.toFixed(1)}},{strokeDashoffset:${(C * (1 - 4 / 12)).toFixed(1)},duration:.9,ease:"power2.inOut"},${at(id, 9)});`,
    J.deal('#s09-stuck', at(id, 12, .1)),
    J.deal('#s09-call', at(id, 15, -.1)),
    J.pulse('#s09-call .disc', at(id, 17, .1), 1.1)
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== s10 · Right patient. Right zone. Right time. ===== */
{
  const id = 's10', Z = {left:160, top:500, width:1600, height:392, disc:108, trackY:190, lit:true};
  const step = zstep(Z);
  const css = `
  #s10-t{position:absolute;left:160px;top:96px;font-weight:900;font-size:112px;line-height:1.02;letter-spacing:-.035em}
  #s10-t span{display:block}
  #s10-t em{font-style:normal;color:var(--accent)}
  `;
  const html = `
  <h1 id="s10-t"><span id="s10-l0">${tr('Right <em>patient.</em>')}</span><span id="s10-l1">${tr('Right <em>zone.</em>')}</span><span id="s10-l2">${tr('Right <em>time.</em>')}</span></h1>
  ${zoneMap('s10', Z)}`;
  const js = [
    J.deal('#s10-zm', 0.05),
    J.set('#s10-fill', 0, '{scaleX:1}'),
    J.set('#s10-tok', 0, `{x:${step * 4}}`),
    J.deal('#s10-l0', at(id, 0, -.05), 30), J.deal('#s10-l1', at(id, 2, -.05), 30), J.deal('#s10-l2', at(id, 4, -.05), 30),
    ...[0, 1, 2, 3, 4].map(i => J.pulse(`#s10-d${i}`, at(id, 5, .5) + i * .1))
  ];
  files[id] = scene(id, css, html, js);
}

/* ===== captions: one group at a time, words turn ink as spoken ===== */
const GROUPS_BY_LANG = {
  en: {s01:[4, 9, 12, 16, 19], s02:[3, 6, 12, 16, 20], s03:[3, 8, 11, 15, 20], s04:[4, 6, 9, 13, 16, 20],
       s05:[2, 5, 10, 13, 18], s06:[2, 8, 11, 16, 19], s07:[2, 7, 11, 16, 19], s08:[1, 6, 10, 15, 21], s09:[2, 8, 11, 14, 19]},
  ms: {s01:[3, 6, 8, 13, 16], s02:[2, 5, 11, 18], s03:[4, 7, 10, 12, 16], s04:[3, 5, 8, 12, 14, 17],
       s05:[1, 4, 9, 12, 16], s06:[1, 5, 8, 14, 20], s07:[2, 6, 10, 14, 19], s08:[1, 4, 8, 11, 14, 17, 21], s09:[2, 8, 12, 16, 20]}
};
const GROUPS = GROUPS_BY_LANG[LANG];
const capLines = [];
{
  const els = [], js = [];
  let n = 0;
  for (const sc of T.scenes){
    const ends = GROUPS[sc.id]; if (!ends) continue;
    let from = 0;
    const groups = ends.map(e => { const g = [from, e]; from = e + 1; return g; });
    groups.forEach(([a, b], gi) => {
      const ws = sc.words.slice(a, b + 1);
      const start = r3(sc.start + sc.voLocal + ws[0].s - .08);
      const nextStart = gi < groups.length - 1 ? r3(sc.start + sc.voLocal + sc.words[groups[gi + 1][0]].s - .08) : r3(sc.start + sc.duration - .05);
      const end = r3(Math.min(nextStart, sc.start + sc.voLocal + ws[ws.length - 1].e + .45));
      const dur = r3(Math.max(.6, end - start));
      capLines.push([r3(sc.start + sc.voLocal + ws[0].s), ws.map(w => w.w).join(' ')]);
      els.push(`<div class="cg clip" id="cg${n}" data-start="${start}" data-duration="${dur}"><div class="cgp" id="cgp${n}">${ws.map((w, k) => `<span id="cw${n}_${k}">${esc(w.w)}</span>`).join(' ')}</div></div>`);
      js.push(`tl.fromTo("#cgp${n}",{opacity:0,y:10},{opacity:1,y:0,duration:.14,ease:"power2.out"},${start});`);
      ws.forEach((w, k) => js.push(`tl.fromTo("#cw${n}_${k}",{color:"#53635b"},{color:"#0f1a15",duration:.1},${r3(sc.start + sc.voLocal + w.s)});`));
      js.push(`tl.fromTo("#cgp${n}",{opacity:1},{opacity:0,duration:.12,ease:"power2.in",immediateRender:false},${r3(start + dur - .12)});`);
      n++;
    });
  }
  for (const sc of T.scenes){
    if (GROUPS[sc.id]) continue;
    sc.words.forEach((w, k) => { if (k === 0 || /[.?!]$/.test(sc.words[k - 1].w)){ const e = sc.words.slice(k).findIndex(x => /[.?!]$/.test(x.w)); capLines.push([r3(sc.start + sc.voLocal + w.s), sc.words.slice(k, k + e + 1).map(x => x.w).join(' ')]); } });
  }
  files.captions = `<template>
<style>
${BASE_CSS}
#root{position:absolute;inset:0;pointer-events:none}
.cg{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:0 200px 62px}
.cgp{display:inline-block;max-width:1520px;padding:14px 32px 16px;border-radius:26px;background:#ffffff;font-family:'Figtree',sans-serif;font-weight:700;font-size:48px;line-height:1.2;text-align:center;color:#0f1a15;box-shadow:0 2px 6px rgba(15,26,21,.08),0 26px 44px -26px rgba(15,26,21,.5),inset 0 0 0 1.5px #dbe2de}
</style>
<div id="root" data-composition-id="captions" data-width="1920" data-height="1080">
${els.join('\n')}
</div>
<script>
(function(){
  const tl = gsap.timeline({ paused: true });
  ${js.join('\n  ')}
  window.__timelines["captions"] = tl;
})();
</script>
</template>
`;
}

/* ===== index.html ===== */
const total = T.duration;
const hosts = T.scenes.map((s, i) => `      <div id="${s.id}" data-composition-id="${s.id}" data-composition-src="compositions/${s.id}.html" data-start="${s.start}" data-duration="${s.duration}" data-track-index="1" data-track-kind="graphics" data-width="1920" data-height="1080" style="z-index:${i + 2}"></div>`).join('\n');
const audio = T.scenes.map((s, i) => `      <audio id="vo-${s.id}" class="clip" src="assets/vo/${s.id}.wav" data-start="${s.voStart}" data-duration="${s.vo}" data-track-index="${3}" data-volume="1"></audio>`).join('\n');
files.index = `<!doctype html>
<html lang="${LANG}" data-resolution="landscape">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>${tr('Green Zone explainer, version 8')}</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
${BASE_CSS}
      html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: #e9edeb; }
      #root { position: relative; width: 100%; height: 100%; }
      #ground { position: absolute; inset: 0; z-index: 0; background: radial-gradient(130% 90% at 15% 0%, #f3f6f4 0%, rgba(243,246,244,0) 55%), #e9edeb; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${total}" data-width="1920" data-height="1080">
      <div id="ground"></div>
${hosts}
      <div id="captions" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="${total}" data-track-index="2" data-track-kind="captions" data-width="1920" data-height="1080" style="z-index:30"></div>
${audio}
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`;

fs.mkdirSync(path.join(OUT, 'compositions'), {recursive:true});
for (const [k, v] of Object.entries(files)){
  const f = k === 'index' ? path.join(OUT, 'index.html') : path.join(OUT, 'compositions', k + '.html');
  fs.writeFileSync(f, v);
}
/* For the app: chapters and transcript lines */
const chapters = T.scenes.filter(s => s.chapter).map(s => [r3(s.start), s.chapter]);
fs.writeFileSync(path.join(TDIR, 'app-tour.json'), JSON.stringify({duration:total, chapters, captions:capLines}, null, 1));
console.log(LANG, 'wrote', Object.keys(files).length, 'files; duration', total, '; caption groups', capLines.length);
