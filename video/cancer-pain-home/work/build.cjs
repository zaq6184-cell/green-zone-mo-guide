/* Writes index.html and compositions/*.html for "Cancer pain at home": the cancer pain CPG's patient information leaflet (2nd edition,
   2023; leaflet 1 in English, leaflet 2 in Bahasa Melayu) as a square film. The sibling of video/dengue-home, built the same way.
   English: node work/build.cjs      writes this project (video/cancer-pain-home), reads work/timing-en.json
   Malay:   node work/build.cjs ms   writes ../cancer-pain-home-ms, reads work/timing-ms.json
   The voice is the clock: timing-<lang>.json holds the read-aloud narration (the same take the app plays) and the start of each
   line as [seconds, section, element] (section 0 the title, then each group; a group's elements are [heading, paragraph if any,
   ...items]). Every line of the leaflet comes on screen as it is read, word for word as the app shows it (work/leaflet.json,
   from work/prep.cjs). Text is sized by measuring it in Chromium with the film's own fonts (Playwright from src/node_modules),
   so nothing is clipped: each heading, item, list and the end card takes the largest size that fits its box. Run from
   video/cancer-pain-home. Every text block the film shows carries data-w (the leaflet's words) or data-x (the source label, the
   chip naming the CPG, the guide's name); work/check-words.cjs compares them with the leaflet. */
const fs = require('fs'), path = require('path');
const LANG = process.argv.includes('ms') ? 'ms' : 'en';
const ROOT = path.resolve(__dirname, '..');
const OUT = LANG === 'en' ? ROOT : path.resolve(ROOT, '..', 'cancer-pain-home-ms');
const GZ = path.resolve(ROOT, '..', '..');
const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'leaflet.json'), 'utf8')), D = L[LANG];
const T = JSON.parse(fs.readFileSync(path.join(__dirname, `timing-${LANG}.json`), 'utf8'));
const W = 1080, H = 1080, LEAD = 2.2, TAIL = 0.9, ENDCARD = 14; /* the end card holds 14 s (dengue: 7.8 s), long enough to read this source line of 57 words */
const r3 = x => Math.round(x * 1000) / 1000;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* film time of a line: section s, element e; every timing line must be used exactly once */
const used = new Set();
const at = (s, e) => { const l = T.lines.find(x => x[1] === s && x[2] === e); if (!l) throw new Error(`no line ${s}.${e}`); used.add(`${s}.${e}`); return r3(LEAD + l[0]); };
const VO_END = r3(LEAD + T.dur), END_AT = r3(VO_END + TAIL), FILM = r3(END_AT + ENDCARD);
const UI = {en:{source:'Source', guide:'Green Zone MO Guide', cpg:'Cancer Pain CPG, 2nd edition · Leaflet 1'},
            ms:{source:'Sumber', guide:'Green Zone MO Guide', cpg:'CPG Sakit Kanser, edisi ke-2 · Risalah 2'}}[LANG];

/* Stroke icons on a 24 grid, stroke 2, as in the app (pill, syringe, hospital, calendar, hand and check as in the dengue film) */
const IC = {
  ribbon:'<path d="M12 13.2c1.9-2.4 3.4-4.6 3.4-6.6A3.4 3.4 0 0 0 12 3.2a3.4 3.4 0 0 0-3.4 3.4c0 2 1.5 4.2 3.4 6.6z"/><path d="M9.6 10.3 5.2 20.5l2.9-1 1.2 2.6 2.7-8.9M14.4 10.3l4.4 10.2-2.9-1-1.2 2.6-2.7-8.9"/>',
  press:'<circle cx="12" cy="12" r="2.6"/><path d="M12 2.5v4.5M9.8 4.8 12 7l2.2-2.2M12 21.5V17M9.8 19.2 12 17l2.2 2.2M2.5 12H7M4.8 9.8 7 12l-2.2 2.2M21.5 12H17M19.2 9.8 17 12l2.2 2.2"/>',
  syringe:'<path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><path d="m4 20 2.4-2.4M10 10.5l3.5 3.5"/>',
  gauge:'<path d="M3.5 17a8.5 8.5 0 1 1 17 0"/><path d="m12 17 4-5.2"/><path d="M6.5 17h.01M17.5 17h.01M12 8.5v.01"/>',
  ruler:'<rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M6.5 8v3.5M10 8v2.5M13.5 8v3.5M17 8v2.5"/>',
  face:'<circle cx="12" cy="12" r="9.5"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
  pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7z"/><path d="m8.5 8.5 7 7"/>',
  clip:'<path d="M8.5 4h7v3h-7z"/><path d="M15.5 5.5h2a1.5 1.5 0 0 1 1.5 1.5v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5V7a1.5 1.5 0 0 1 1.5-1.5h2"/><path d="M8.5 11.5h7M8.5 15.5h4.5"/>',
  shield:'<path d="M12 3.5 19 6.5V12c0 4.2-3 7.3-7 8.5-4-1.2-7-4.3-7-8.5V6.5z"/><path d="m9 12 2.2 2.2L15.2 10"/>',
  info:'<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.6h.01"/>',
  help:'<circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.4a2.6 2.6 0 0 1 5.1.7c0 1.8-2.6 2.3-2.6 3.9"/><path d="M12 17h.01"/>',
  cal:'<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="m9 15 2 2 4-4"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M15.5 5.2a3 3 0 0 1 0 5.6M17 14.3a5.5 5.5 0 0 1 3.5 5.7"/>',
  chart:'<path d="M4 19.5h16"/><path d="m5.5 15 4-4.5 3.5 3 5.5-7"/>',
  clock:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5.2l3.4 2.1"/>',
  hand:'<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.8-2.4L3.6 14.8a1.6 1.6 0 0 1 2.4-2.1L8 14.5"/>',
  hosp:'<path d="M4 20.5V8.5l8-4.5 8 4.5v12"/><path d="M2.5 20.5h19"/><path d="M12 8.5v5M9.5 11h5"/><path d="M10 20.5v-3.5h4v3.5"/>',
  globe:'<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.6 3.8 6 3.8 9.5s-1.2 6.9-3.8 9.5M12 2.5C9.4 5.1 8.2 8.5 8.2 12s1.2 6.9 3.8 9.5"/>',
  book:'<path d="M4 19.5v-14a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h13"/><path d="M8.5 7.5h6"/>'
};
const svg = (k, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
/* Per group, in the leaflet's order (the same in both languages): its jewel, the heading's picture, and one picture per line it
   shows (the paragraph first where it is read as a line of its own, then each item) */
const GROUPS = [
  {jw:'plum',     hd:'ribbon', pics:['press', 'syringe']},
  {jw:'indigo',   hd:'gauge',  pics:['gauge', 'ruler', 'face', 'heart']},
  {jw:'teal',     hd:'pill',   pics:['pill', 'clip', 'shield', 'info']},
  {jw:'emerald',  hd:'help',   pics:['heart']},
  {jw:'emerald',  hd:'help',   pics:['cal']},
  {jw:'plum',     hd:'people', pics:['chart', 'clock', 'hand'], list:true},
  {jw:'sapphire', hd:'info',   pics:['hosp', 'people', 'globe', 'globe', 'book']}
];
const HEX = {plum:'#6a3473', indigo:'#3d4597', teal:'#157481', emerald:'#0d7049', sapphire:'#24477f'};
if (D.groups.length !== GROUPS.length) throw new Error(`leaflet has ${D.groups.length} groups, the film ${GROUPS.length}`);

/* A line's HTML: a question that opens an item is set in the section's jewel; a list joined with semicolons breaks after each
   semicolon (the words and the semicolons stay as printed; the space after each stays, so the text is unchanged) */
const lineHTML = t => {
  let h = t.split('; ').map(esc).join(';&#32;<br>');   /* split before escaping: an escaped "&amp; " also ends in "; " */
  const q = t.match(/^[^?]{8,}?\?(?= )/);
  if (q && t.length > q[0].length + 12) h = `<span class="qn">${esc(q[0])}</span>` + h.slice(esc(q[0]).length);
  return h;
};

const FONT = `@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-700-latin.woff2') format('woff2');font-weight:700;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-800-latin.woff2') format('woff2');font-weight:800;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-900-latin.woff2') format('woff2');font-weight:900;font-style:normal;font-display:block}`;
const CSS = `
${FONT}
:root, #root{
  --ink:#0f1a15; --ink-2:#26352e; --muted:#53635b; --line:#dbe2de; --surface:#ffffff; --surface-2:#f5f7f6;
  --emerald-1:#0d7049; --emerald-2:#0a5a3b; --emerald-3:#063d28;
  --plum-1:#6a3473; --plum-2:#4a2150; --plum-3:#2f1334;
  --indigo-1:#3d4597; --indigo-2:#2a3072; --indigo-3:#191d4a;
  --teal-1:#157481; --teal-2:#0f5a64; --teal-3:#093d45;
  --sapphire-1:#24477f; --sapphire-2:#16305c; --sapphire-3:#0d1f3e;
  --lav:#d8c4fa;
  --grain:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .1 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>");
}
#root, #root *{box-sizing:border-box}
#root{font-family:'Figtree',sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
#root h1,#root h2,#root p,#root ul{margin:0;padding:0}
.ic{display:block;width:100%;height:100%}
.jw{color:#fff;background:radial-gradient(120% 85% at 0 0,rgba(255,255,255,.16),transparent 55%),var(--grain),linear-gradient(150deg,var(--j1),var(--j2) 55%,var(--j3));background-size:auto,180px 180px,auto;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.16),0 18px 30px -16px var(--j3)}
.j-emerald{--j1:var(--emerald-1);--j2:var(--emerald-2);--j3:var(--emerald-3)}
.j-plum{--j1:var(--plum-1);--j2:var(--plum-2);--j3:var(--plum-3)}
.j-indigo{--j1:var(--indigo-1);--j2:var(--indigo-2);--j3:var(--indigo-3)}
.j-teal{--j1:var(--teal-1);--j2:var(--teal-2);--j3:var(--teal-3)}
.j-sapphire{--j1:var(--sapphire-1);--j2:var(--sapphire-2);--j3:var(--sapphire-3)}
.hd{position:absolute;left:56px;right:56px;display:flex;align-items:center;gap:24px;color:#fff}
.hd .disc{width:88px;height:88px;border-radius:28px;padding:20px;flex:none}
.hd h2{font-weight:800;line-height:1.06;letter-spacing:-.02em;text-wrap:balance;overflow-wrap:anywhere;text-shadow:0 2px 18px rgba(0,0,0,.45)}
.card{position:absolute;left:56px;width:968px;border-radius:44px;background:var(--surface);box-shadow:0 2px 6px rgba(0,0,0,.18),0 50px 80px -40px rgba(0,0,0,.7),inset 0 0 0 1.5px var(--line);overflow:hidden}
.it{position:absolute;left:52px;width:864px;display:flex;flex-direction:column;justify-content:center}
.it .disc{position:relative;flex:none}
.it p{font-weight:700;line-height:1.24;letter-spacing:-.01em;color:var(--ink);overflow-wrap:anywhere}
.qn{font-weight:900;color:var(--jq)}
.lead{position:absolute;left:52px;top:44px;width:864px;font-weight:900;line-height:1.18;letter-spacing:-.01em;color:var(--jq);overflow-wrap:anywhere}
.dots{position:absolute;left:52px;bottom:48px;display:flex;gap:12px;align-items:center}
.dots i{display:block;width:18px;height:18px;border-radius:9px;background:var(--line)}
.ul{position:absolute;left:40px;width:888px;list-style:none;display:flex;flex-direction:column;gap:8px}
.ul li{display:flex;align-items:center;gap:18px;padding:10px 16px 10px 10px;border-radius:20px;font-weight:700;line-height:1.2;color:var(--ink);overflow-wrap:anywhere}
.ul li .mk{width:56px;height:56px;border-radius:18px;padding:12px;flex:none}
`;

/* Measuring: every candidate size of every text block is laid out in Chromium with the film's fonts, once */
async function measureAll(probes) {
  const { chromium } = require(path.join(GZ, 'src', 'node_modules', 'playwright'));
  const b = await chromium.launch(), pg = await b.newPage();
  const fontCSS = FONT.replace(/url\('assets\/(fonts\/[^']+)'\)/g, (_, f) => `url('data:font/woff2;base64,${fs.readFileSync(path.join(ROOT, 'assets', f)).toString('base64')}')`);
  await pg.setContent(`<html><head><style>${CSS.replace(FONT, fontCSS)}</style></head><body><div id="root"></div></body></html>`);
  await pg.evaluate(async () => { await Promise.all(['700', '800', '900'].map(w => document.fonts.load(`${w} 40px Figtree`))); await document.fonts.ready; });
  const hs = await pg.evaluate(ps => {
    const root = document.getElementById('root');
    return ps.map(p => {
      const d = document.createElement('div');
      d.style.cssText = `position:absolute;left:0;top:0;width:${p.w}px;${p.css}`;
      d.className = p.cls || ''; d.innerHTML = p.html; root.appendChild(d);
      const r = {h:d.getBoundingClientRect().height, over:d.scrollWidth > p.w + 1};
      d.remove(); return r;
    });
  }, probes);
  const loaded = await pg.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').length);
  await b.close();
  if (loaded < 3) throw new Error(`fonts not loaded for measuring (${loaded})`);
  return hs;
}

(async () => {
  /* Lay out each group: the heading band (size and lines), then what the card shows (a lead, one line at a time, or a list) */
  const HD = [60, 56, 52, 48, 46, 44, 42, 40, 38, 36, 34, 32];
  const IT = [70, 64, 58, 52, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30];
  const LI = [46, 44, 42, 40, 38, 36, 34, 32, 30];
  const LD = [44, 42, 40, 38, 36, 34, 32];
  const plan = D.groups.map((g, k) => {
    const G = GROUPS[k];
    const lead = g.p && !/\.$/.test(g.p.trim()) ? g.p : null;          /* a paragraph that opens a list stays as its lead */
    const shown = [...(g.p && !lead ? [g.p] : []), ...g.items];          /* a paragraph that is a sentence is read as a line */
    if (shown.length !== G.pics.length) throw new Error(`group ${k + 1}: ${shown.length} lines, ${G.pics.length} pictures`);
    return {g, G, k, lead, shown, first:g.p && !lead ? 1 : (lead ? 2 : 1)};
  });
  const probes = [], idx = {};
  const add = (key, w, css, html, cls) => { idx[key] = probes.length; probes.push({w, css, html, cls}); };
  for (const p of plan) {
    HD.forEach(s => add(`h${p.k}.${s}`, 856, `font-weight:800;font-size:${s}px;line-height:1.06;letter-spacing:-.02em;text-wrap:balance;overflow-wrap:anywhere`, esc(p.g.h)));
    if (p.lead) LD.forEach(s => add(`l${p.k}.${s}`, 864, `font-weight:900;font-size:${s}px;line-height:1.18;letter-spacing:-.01em;overflow-wrap:anywhere`, esc(p.lead)));
    p.shown.forEach((t, i) => {
      if (p.G.list) LI.forEach(s => add(`r${p.k}.${i}.${s}`, 888, `display:flex;align-items:center;gap:18px;padding:10px 16px 10px 10px;font-weight:700;font-size:${s}px;line-height:1.2;overflow-wrap:anywhere`, `<span style="width:56px;height:56px;flex:none;display:block"></span><span>${lineHTML(t)}</span>`));
      else IT.forEach(s => add(`i${p.k}.${i}.${s}`, 864, `font-weight:700;font-size:${s}px;line-height:1.24;letter-spacing:-.01em;overflow-wrap:anywhere`, lineHTML(t)));
      /* a web address is never broken: the line takes a size at which its longest address fits on one line */
      const url = (t.match(/\(?https?:\/\/[^\s;]+/g) || []).sort((x, y) => y.length - x.length)[0];
      if (url) (p.G.list ? LI : IT).forEach(s => add(`u${p.k}.${i}.${s}`, p.G.list ? 888 - 56 - 18 - 26 : 864, `white-space:nowrap;font-weight:700;font-size:${s}px;letter-spacing:-.01em`, esc(url)));
    });
  }
  const SRC = [36, 34, 32, 30];
  SRC.forEach(s => add(`src.${s}`, 864, `font-weight:700;font-size:${s}px;line-height:1.3;overflow-wrap:anywhere`, esc(L.src)));
  const TT = LANG === 'ms' ? [86, 80] : [96, 90];
  TT.forEach(s => add(`t.${s}`, 864, `font-weight:900;font-size:${s}px;line-height:1.0;letter-spacing:-.035em`, esc(D.title)));
  const M = await measureAll(probes);
  const m = key => { const r = M[idx[key]]; if (r.over) throw new Error(`${key}: text wider than its box`); return r.h; };
  const urlFits = key => !(key in idx) || !M[idx[key]].over;

  const lay = plan.map(p => {
    /* heading: the largest size in two lines (three below 44 px), the band no shorter than the disc */
    let hs = HD.find(s => m(`h${p.k}.${s}`) <= Math.ceil(s * 1.06 * (s >= 44 ? 2 : 3)) + 2) || HD[HD.length - 1];
    const hh = m(`h${p.k}.${hs}`), band = Math.max(96, Math.ceil(hh));
    const bandTop = Math.max(44, 180 - band), cardTop = Math.max(216, bandTop + band + 30), CH = 1024 - cardTop;
    if (hs < 30) throw new Error('heading under 30 px');
    let ls = null, lh = 0;
    if (p.lead) { ls = LD.find(s => m(`l${p.k}.${s}`) <= 170) || LD[LD.length - 1]; lh = Math.ceil(m(`l${p.k}.${ls}`)); }
    const top = 44 + (p.lead ? lh + 26 : 0), areaH = CH - 96 - top;
    let items;
    if (p.G.list) {
      const s = LI.find(s => p.shown.every((_, i) => urlFits(`u${p.k}.${i}.${s}`)) && p.shown.reduce((a, _, i) => a + m(`r${p.k}.${i}.${s}`), 0) + 8 * (p.shown.length - 1) <= areaH);
      if (!s) throw new Error(`group ${p.k + 1}: the list does not fit`);
      items = {s};
    } else {
      items = p.shown.map((_, i) => {
        for (const s of IT) {
          if (!urlFits(`u${p.k}.${i}.${s}`)) continue;
          const disc = s >= 52 ? 112 : s >= 44 ? 96 : 80, gap = s >= 52 ? 34 : 26;
          if (disc + gap + m(`i${p.k}.${i}.${s}`) <= areaH) return {s, disc, gap};
        }
        throw new Error(`group ${p.k + 1} line ${i + 1}: does not fit at 30 px`);
      });
    }
    return {...p, hs, band, bandTop, cardTop, CH, ls, lh, top, areaH, items};
  });
  const srcS = SRC.find(s => m(`src.${s}`) <= 560) || 30;
  const tS = TT.find(s => m(`t.${s}`) <= s * 2.05) || TT[TT.length - 1], tH = Math.ceil(m(`t.${tS}`));

  /* Scenes */
  const scene = (id, body, js) => `<template>
<style>${CSS}${body.css || ''}</style>
<div id="root" data-composition-id="${id}" data-width="${W}" data-height="${H}">
${body.html}
</div>
<script>
(function(){
  const tl = gsap.timeline({ paused: true });
${js.join('\n')}
  window.__timelines["${id}"] = tl;
})();
</script>
</template>
`;
  const enter = (sel, t) => `  tl.fromTo("${sel}",{y:40,rotation:1.5,opacity:0},{y:0,rotation:0,opacity:1,duration:.45,ease:"power3.out"},${r3(t)});`;
  const leave = (sel, t) => `  tl.fromTo("${sel}",{y:0,opacity:1},{y:-24,opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${r3(t)});`;
  const pop = (sel, t) => `  tl.fromTo("${sel}",{scale:.6,opacity:0},{scale:1,opacity:1,duration:.32,ease:"back.out(2.2)"},${r3(t)});`;
  const fade = (sel, t, a, b, d = .3) => `  tl.fromTo("${sel}",{opacity:${a}},{opacity:${b},duration:${d},ease:"power1.out",immediateRender:false},${r3(t)});`;
  const scenes = [];
  const log = [];

  /* 0 · Title: the leaflet's own title over the ribbon, and the chip naming the CPG; the voice reads the title */
  {
    const id = 's0', start = 0, end = r3(at(1, 0) - 0.45);
    at(0, 0);
    const words = D.title.split(' ');
    const css = `#s0-t{position:absolute;left:108px;top:118px;width:864px;color:#fff;font:900 ${tS}px/1.0 'Figtree';letter-spacing:-.035em;text-shadow:0 4px 30px rgba(0,0,0,.5);text-wrap:balance}
#s0-t span{display:inline-block}
#s0-k{position:absolute;left:108px;top:${118 + tH + 44}px;display:flex;align-items:center;gap:14px;padding:12px 22px 12px 14px;border-radius:999px;background:rgba(216,196,250,.16);box-shadow:inset 0 0 0 1.5px rgba(216,196,250,.55);color:#ece3ff;font:700 32px/1 'Figtree'}
#s0-k i{display:block;width:30px;height:30px;border-radius:50%;background:var(--lav)}`;
    const html = `  <h1 id="s0-t" data-w="title">${words.map((w, i) => `<span id="s0-w${i}">${esc(w)}</span>`).join(' ')}</h1>
  <div id="s0-k"><i></i><span data-x="chip">${esc(UI.cpg)}</span></div>`;
    const js = words.map((_, i) => enter(`#s0-w${i}`, LEAD - 0.3 + i * 0.07));
    js.push(`  tl.fromTo("#s0-k",{x:-30,opacity:0},{x:0,opacity:1,duration:.45,ease:"power3.out"},0.5);`);
    js.push(leave('#s0-t', end - start - 0.4), leave('#s0-k', end - start - 0.4));
    scenes.push({id, start, end, html:scene(id, {css, html}, js)});
  }

  /* 1 to 7 · Each group: the heading, then its lines as they are read */
  for (const p of lay) {
    const s = p.k + 1, id = 's' + s, jw = p.G.jw, last = s === lay.length;
    const start = r3(at(s, 0) - 0.45), end = last ? END_AT : r3(at(s + 1, 0) - 0.45);
    const css = `#${id}-card{--jq:var(--${jw}-1)}
#${id}-hd{top:${p.bandTop}px;height:${p.band}px}
#${id}-hd h2{font-size:${p.hs}px}
#${id}-card{top:${p.cardTop}px;height:${p.CH}px}
${p.lead ? `#${id}-lead{font-size:${p.ls}px;opacity:0}\n` : ''}${p.G.list
      ? `#${id}-ul{top:${p.top}px}\n#${id}-ul li{font-size:${p.items.s}px;opacity:0}`
      : p.shown.map((_, i) => `#${id}-i${i}{top:${p.top}px;height:${p.areaH}px;opacity:0}\n#${id}-i${i} .disc{width:${p.items[i].disc}px;height:${p.items[i].disc}px;border-radius:${Math.round(p.items[i].disc * .3)}px;padding:${Math.round(p.items[i].disc * .23)}px}\n#${id}-i${i} p{margin-top:${p.items[i].gap}px !important;font-size:${p.items[i].s}px}`).join('\n')}`;
    const head = `  <div class="hd" id="${id}-hd"><div class="disc jw j-${jw}">${svg(p.G.hd)}</div><h2 data-w="h">${esc(p.g.h)}</h2></div>`;
    const leadH = p.lead ? `\n    <p class="lead" id="${id}-lead" data-w="p">${esc(p.lead)}</p>` : '';
    const js = [enter(`#${id}-hd`, 0.3), enter(`#${id}-card`, 0.42)];
    if (p.lead) js.push(`  tl.fromTo("#${id}-lead",{y:24,opacity:0},{y:0,opacity:1,duration:.4,ease:"power3.out"},${r3(at(s, 1) - start - 0.2)});`);
    let body;
    if (p.G.list) {
      body = `    <ul class="ul" id="${id}-ul">${p.shown.map((t, i) => `<li id="${id}-l${i}"><span class="mk jw j-${jw}">${svg(p.G.pics[i])}</span><span data-w="i">${lineHTML(t)}</span></li>`).join('')}</ul>`;
      const soft = `rgba(${parseInt(HEX[jw].slice(1, 3), 16)},${parseInt(HEX[jw].slice(3, 5), 16)},${parseInt(HEX[jw].slice(5, 7), 16)},`;
      p.shown.forEach((_, i) => {
        const t = at(s, p.first + i) - start;
        js.push(`  tl.fromTo("#${id}-l${i}",{x:28,opacity:0},{x:0,opacity:1,duration:.4,ease:"power3.out"},${r3(t - 0.2)});`);
        js.push(`  tl.fromTo("#${id}-l${i}",{backgroundColor:"${soft}0)"},{backgroundColor:"${soft}.13)",duration:.3,ease:"power1.out",immediateRender:false},${r3(t - 0.2)});`);
        const off = i + 1 < p.shown.length ? at(s, p.first + i + 1) - start - 0.2 : end - start - 0.9;
        js.push(`  tl.fromTo("#${id}-l${i}",{backgroundColor:"${soft}.13)"},{backgroundColor:"${soft}0)",duration:.35,ease:"power1.inOut",immediateRender:false},${r3(off)});`);
      });
      log.push(`${id}: heading ${p.hs}px, lead ${p.ls}px, list ${p.items.s}px`);
    } else {
      body = p.shown.map((t, i) => `    <div class="it" id="${id}-i${i}"><div class="disc jw j-${jw}" id="${id}-c${i}">${svg(p.G.pics[i])}</div><p data-w="${p.g.p === t && !p.lead ? 'p' : 'i'}">${lineHTML(t)}</p></div>`).join('\n')
        + `\n    <div class="dots">${p.shown.map((_, i) => `<i id="${id}-d${i}"></i>`).join('')}</div>`;
      const n = p.shown.length;
      p.shown.forEach((_, i) => {
        const t = at(s, p.first + i) - start, next = i + 1 < n ? at(s, p.first + i + 1) - start : end - start;
        js.push(`  tl.fromTo("#${id}-i${i}",{y:36,opacity:0},{y:0,opacity:1,duration:.45,ease:"power3.out"},${r3(t - 0.2)});`);
        js.push(pop(`#${id}-c${i}`, t - 0.15));
        js.push(`  tl.fromTo("#${id}-d${i}",{width:18,backgroundColor:"#dbe2de"},{width:54,backgroundColor:"${HEX[jw]}",duration:.35,ease:"power2.out"},${r3(t - 0.2)});`);
        if (i + 1 < n) {
          js.push(leave(`#${id}-i${i}`, next - 0.5));
          js.push(`  tl.fromTo("#${id}-d${i}",{width:54},{width:18,duration:.3,ease:"power2.inOut",immediateRender:false},${r3(next - 0.2)});`);
        }
      });
      log.push(`${id}: heading ${p.hs}px${p.lead ? `, lead ${p.ls}px` : ''}, lines ${p.items.map(x => x.s).join('/')}px`);
    }
    const html = `${head}\n  <div class="card" id="${id}-card">${leadH}\n${body}\n  </div>`;
    if (last) js.push(leave(`#${id}-hd`, end - start - 0.35), `  tl.fromTo("#${id}-card",{y:0,opacity:1},{y:60,opacity:0,duration:.45,ease:"power2.in",immediateRender:false},${r3(end - start - 0.4)});`);
    else js.push(leave(`#${id}-hd`, end - start - 0.35), leave(`#${id}-card`, end - start - 0.35));
    scenes.push({id, start, end, html:scene(id, {css, html}, js)});
  }

  /* End card: the source and the acknowledgement exactly as the app shows them (L.src), in English in both films, over the ribbon */
  {
    const id = 's' + (lay.length + 1), start = END_AT, end = FILM;
    const css = `#${id}-box{position:absolute;left:80px;right:80px;bottom:80px;padding:30px 28px 32px;border-radius:32px;background:rgba(8,8,20,.66);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.08);color:#fff}
#${id}-k{font:800 30px/1 'Figtree';letter-spacing:.02em;color:#e3d6ff;opacity:0}
#${id}-src{margin-top:16px !important;font:700 ${srcS}px/1.3 'Figtree';overflow-wrap:anywhere;text-shadow:0 2px 18px rgba(0,0,0,.6);opacity:0}
#${id}-gz{margin-top:30px !important;display:flex;align-items:center;gap:16px;font:800 34px/1 'Figtree';opacity:0}
#${id}-gz i{display:block;width:44px;height:44px;border-radius:14px}`;
    const html = `  <div id="${id}-box"><p id="${id}-k" data-x="source">${esc(UI.source)}</p><p id="${id}-src" data-w="src">${esc(L.src)}</p><p id="${id}-gz"><i class="jw j-emerald"></i><span data-x="guide">${esc(UI.guide)}</span></p></div>`;
    const js = [fade(`#${id}-k`, 0.35, 0, 1, .4), enter(`#${id}-src`, 0.5), enter(`#${id}-gz`, 0.9)];
    scenes.push({id, start, end, html:scene(id, {css, html}, js)});
    log.push(`${id}: source ${srcS}px`);
  }
  const missing = T.lines.filter(l => !used.has(`${l[1]}.${l[2]}`));
  if (missing.length || used.size !== T.lines.length) throw new Error(`timing lines not placed: ${missing.map(l => l[1] + '.' + l[2]).join(' ')}`);

  /* Root: the paincpg loop (darkened by a scrim that deepens while the cards are up), the scenes, the voice and the bed */
  const sStart = at(1, 0) - 0.6;
  const index = `<!doctype html>
<html lang="${LANG}" data-resolution="square">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${W}, height=${H}" />
    <title>Cancer pain at home${LANG === 'ms' ? ' (Bahasa Melayu)' : ''}</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
#root{background:#07081a}
#bgw{position:absolute;left:0;top:0;width:${W}px;height:${H}px;overflow:hidden}
#bg{position:absolute;left:0;top:0;width:${W}px;height:${H}px;object-fit:cover}
#scrim{position:absolute;left:0;top:0;width:${W}px;height:${H}px;background:linear-gradient(180deg,rgba(6,6,18,.86) 0%,rgba(6,6,18,.42) 46%,rgba(6,6,18,.78) 100%)}
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${FILM}" data-width="${W}" data-height="${H}">
      <div id="bgw"><video id="bg" class="clip" src="assets/bg.mp4" data-start="0" data-duration="${FILM}" data-track-index="1" muted playsinline></video></div>
      <div id="scrim"></div>
${scenes.map((c, i) => `      <div id="${c.id}" data-composition-id="${c.id}" data-composition-src="compositions/${c.id}.html" data-start="${c.start}" data-duration="${r3(c.end - c.start)}" data-track-index="2" data-track-kind="graphics" data-width="${W}" data-height="${H}" style="z-index:${3 + i}"></div>`).join('\n')}
      <audio id="vo" class="clip" src="assets/vo-${LANG}.wav" data-start="${LEAD}" data-duration="${r3(T.dur)}" data-track-index="3" data-volume="1"></audio>
      <audio id="music" class="clip" src="assets/music.mp3" data-start="0" data-duration="${FILM}" data-track-index="4" data-volume="0.14" data-fade-in="1.2" data-fade-out="3.5"></audio>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      tl.fromTo("#bgw",{scale:1},{scale:1.1,duration:${FILM},ease:"none"},0);
      tl.fromTo("#scrim",{opacity:0.15},{opacity:0.75,duration:1.4,ease:"power1.inOut"},0.5);
      tl.fromTo("#scrim",{opacity:0.75},{opacity:1,duration:0.8,ease:"power1.inOut",immediateRender:false},${r3(sStart)});
      tl.fromTo("#scrim",{opacity:1},{opacity:0.6,duration:1.2,ease:"power1.inOut",immediateRender:false},${r3(END_AT - 0.2)});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`;
  fs.mkdirSync(path.join(OUT, 'compositions'), {recursive:true});
  /* A Malay project gets its own copy of the shared assets and the project files */
  if (OUT !== ROOT) {
    fs.mkdirSync(path.join(OUT, 'assets', 'fonts'), {recursive:true});
    for (const f of fs.readdirSync(path.join(ROOT, 'assets', 'fonts'))) fs.copyFileSync(path.join(ROOT, 'assets', 'fonts', f), path.join(OUT, 'assets', 'fonts', f));
    for (const f of ['bg.mp4', 'music.mp3', `vo-${LANG}.wav`]) fs.copyFileSync(path.join(ROOT, 'assets', f), path.join(OUT, 'assets', f));
    for (const f of ['hyperframes.json', 'package.json']) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
    fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify({id:'cancer-pain-home-ms', name:'cancer-pain-home-ms', createdAt:new Date(0).toISOString()}, null, 2));
  }
  for (const f of fs.readdirSync(path.join(OUT, 'compositions'))) if (/^s\d+\.html$/.test(f)) fs.unlinkSync(path.join(OUT, 'compositions', f));
  fs.writeFileSync(path.join(OUT, 'index.html'), index);
  for (const c of scenes) fs.writeFileSync(path.join(OUT, 'compositions', c.id + '.html'), c.html);
  fs.writeFileSync(path.join(__dirname, `scenes-${LANG}.json`), JSON.stringify(scenes.map(c => ({id:c.id, start:c.start, end:c.end})), null, 1));
  console.log(`${LANG}: ${FILM} s (${Math.round(FILM * 30)} frames); voice ${LEAD}–${VO_END} s; end card ${END_AT}–${FILM} s; title ${tS}px`);
  console.log(log.join('\n'));
  console.log(`scenes ${scenes.map(c => `${c.id} ${c.start}–${c.end}`).join(', ')}`);
})().catch(e => { console.error(e); process.exit(1); });
