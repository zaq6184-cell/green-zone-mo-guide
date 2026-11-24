/* Writes one discharge advice film as its own HyperFrames project: node work/build.cjs <key> [ms]   (run from video/advice-home)
   <key>: tbi, dengue, asthma, gastro, renal, abdo, hypo. English writes video/advice-home/<key>/, Malay video/advice-home/<key>-ms/.
   The siblings of video/dengue-home and video/cancer-pain-home, built the same way: the voice is the clock (the app's read-aloud
   take of the tab, timing-<key>-<lang>.json from work/prep.cjs: [seconds, 0, line]); every advice line comes on screen as it is
   read, word for word as the app shows it (work/advice.json). Nothing else is on screen except the entry's title, "Discharge
   advice" (in Malay, the patient page's own heading), the source as the app names it, the app's source sentence for the patient
   page, the label "Source" and the guide's name.
   Cards: outcome green for what to do; garnet for a line that tells the patient to come back, return, come to hospital, go to the
   Emergency Department or seek help (BACK, one rule for every film). A line the voice reads quickly (100 characters or fewer) is
   gathered with its short neighbours into a list that builds up as it is read (up to five rows, as long as they fit), so no line is
   gone before it can be read; a garnet line always has a card of its own. Text is sized by measuring it in Chromium with the
   film's fonts. Every text block carries data-w (an advice line) or data-x (one of the extras); work/check-words.cjs checks them. */
const fs = require('fs'), path = require('path');
const KEY = process.argv[2], LANG = process.argv.includes('ms') ? 'ms' : 'en';
const ROOT = path.resolve(__dirname, '..'), GZ = path.resolve(ROOT, '..', '..');
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advice.json'), 'utf8')), F = A.films[KEY], WD = A.words;
if (!F) throw new Error(`usage: node work/build.cjs <${Object.keys(A.films).join('|')}> [ms]`);
const LINES = F[LANG];
if (!LINES) throw new Error(`${KEY}: no ${LANG} lines in work/advice.json (Malay needs ADVICE_MS in src/parts/data31.js; run node work/prep.cjs advice)`);
const tf = path.join(__dirname, `timing-${KEY}-${LANG}.json`);
if (!fs.existsSync(tf)) throw new Error(`${KEY}: no ${path.basename(tf)} (run node work/prep.cjs voice${LANG === 'ms' ? ' ms' : ''})`);
const T = JSON.parse(fs.readFileSync(tf, 'utf8'));
if (T.lines.length !== LINES.length) throw new Error(`${KEY}: ${T.lines.length} timed lines, ${LINES.length} advice lines`);
const OUT = path.join(ROOT, LANG === 'en' ? KEY : `${KEY}-ms`);
const W = 1080, H = 1080, LEAD = 4.0, TAIL = 0.9, ENDCARD = 9;
const r3 = x => Math.round(x * 1000) / 1000;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const at = i => r3(LEAD + T.lines[i][0]);
const VO_END = r3(LEAD + T.dur), END_AT = r3(VO_END + TAIL), FILM = r3(END_AT + ENDCARD);
const UI = {en:{chip:'Discharge advice', source:'Source', guide:'Green Zone MO Guide', src:F.ebook ? WD.srcEn : null, srcHTML:F.ebook ? WD.srcEnHTML : null},
            ms:{chip:WD.chipMs, source:'Sumber', guide:'Green Zone MO Guide', src:F.ebook ? WD.srcMs : null, srcHTML:F.ebook ? esc(WD.srcMs) : null}}[LANG];
const TITLE = F.title;   /* the app has no Malay titles for these entries: a Malay film keeps the entry's title as the app shows it */

/* The kind of each line, from its English words (the same in both languages, line for line) */
const BACK = /\b(return|come back|come to hospital|come straight to hospital|go to the nearest emergency department|seek (medical )?help)\b/i;
const BAN = /^(Don't|Avoid)\b/;
const kinds = F.en.map(t => BACK.test(t) ? 'back' : 'do');
/* One picture per line, in the tab's order. A struck-through picture only where the line itself says don't or avoid (BAN). */
const PICS = {
  tbi:['people', 'hosp', 'bed', 'home', 'glass', 'pill', 'sport', 'car'],
  dengue:['bed', 'cup', 'pill', 'drop', 'spray', 'leaf', 'pill', 'info', 'hand'],
  asthma:['inhaler', 'hosp', 'hosp', 'drop', 'info'],
  gastro:['pill', 'cup', 'cup', 'bed', 'hand', 'hosp'],
  renal:['cup', 'drop', 'pill', 'hosp', 'sport', 'bed'],
  abdo:['hosp', 'cup', 'pill', 'cal'],
  hypo:['car', 'drop', 'candy', 'clip', 'hosp']
}[KEY];
if (!PICS || PICS.length !== F.en.length) throw new Error(`${KEY}: pictures for ${PICS && PICS.length} lines, the tab has ${F.en.length}`);
const IC = {
  people:'<circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M15.5 5.2a3 3 0 0 1 0 5.6M17 14.3a5.5 5.5 0 0 1 3.5 5.7"/>',
  hosp:'<path d="M4 20.5V8.5l8-4.5 8 4.5v12"/><path d="M2.5 20.5h19"/><path d="M12 8.5v5M9.5 11h5"/><path d="M10 20.5v-3.5h4v3.5"/>',
  bed:'<path d="M3 18.5v-11M3 14.5h18v4M21 14.5V12a3 3 0 0 0-3-3h-7v5.5"/><circle cx="7" cy="11.5" r="1.8"/>',
  home:'<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5v10.5h13V9.5"/><path d="M10 20v-5h4v5"/>',
  glass:'<path d="M7 3.5h10l-1 7a4 4 0 0 1-8 0z"/><path d="M12 14.5v6M8.5 20.5h7"/>',
  pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7z"/><path d="m8.5 8.5 7 7"/>',
  sport:'<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5l4.3 3.1-1.6 5h-5.4l-1.6-5z"/><path d="M12 2.5v5M16.3 10.6l4.7-1.6M14.7 15.6l2.9 4.1M9.3 15.6l-2.9 4.1M7.7 10.6 3 9"/>',
  car:'<path d="M5 16.5h14M5 16.5v2.5M19 16.5v2.5"/><path d="M3.5 16.5v-4l2-5a2 2 0 0 1 1.9-1.3h9.2a2 2 0 0 1 1.9 1.3l2 5v4"/><path d="M3.5 12.5h17"/><path d="M7 14.5h.01M17 14.5h.01"/>',
  cup:'<path d="M5 7h12l-1.3 11.2A2 2 0 0 1 13.7 20H8.3a2 2 0 0 1-2-1.8z"/><path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5h-2"/><path d="M6.4 11.5h10.2"/>',
  drop:'<path d="M12 3.5s6 6.4 6 10.9a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/><path d="M9.4 14.6a2.6 2.6 0 0 0 2.6 2.6"/>',
  spray:'<path d="M8 9.5h7v10.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/><path d="M9.5 9.5v-3h4v3M11.5 6.5v-2h3"/><path d="M18 5h.01M20 7h.01M18 9h.01M20.5 3.8h.01"/>',
  leaf:'<path d="M5 19c0-8 5.5-14 15-14 0 9.5-6 15-14 15"/><path d="M5 19l8-8"/>',
  info:'<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.6h.01"/>',
  hand:'<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.8-2.4L3.6 14.8a1.6 1.6 0 0 1 2.4-2.1L8 14.5"/>',
  inhaler:'<path d="M9 3.5h5v6H9z"/><path d="M8 9.5h7v7.5a2 2 0 0 1-2 2H6.5v-4.5H8z"/><path d="M6.5 14.5H4"/>',
  cal:'<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="m9 15 2 2 4-4"/>',
  candy:'<circle cx="12" cy="12" r="4.2"/><path d="M8.2 10.4 4 8.5l.8 4.3M15.8 13.6l4.2 1.9-.8-4.3"/>',
  clip:'<path d="M8.5 4h7v3h-7z"/><path d="M15.5 5.5h2a1.5 1.5 0 0 1 1.5 1.5v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5V7a1.5 1.5 0 0 1 1.5-1.5h2"/><path d="M8.5 11.5h7M8.5 15.5h4.5"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  ban:'<circle cx="12" cy="12" r="9.5"/><path d="m5.3 5.3 13.4 13.4"/>'
};
const svg = (k, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const JW = {do:'out', back:'garnet'}, HEX = {do:'#0d6f40', back:'#a52234'};
/* A line's HTML: its opening "Do:", "Don't" or "Avoid" (and the Malay equivalents a translation may open with) in bold; a line
   joined with semicolons breaks after each one (the words, the semicolons and the spaces stay as they are) */
const lineHTML = t => {
  let h = t.split('; ').map(esc).join(';&#32;<br>');
  const m = t.match(/^(Do:|Don't|Avoid|Jangan|Elakkan)(?=\s)/);
  if (m) h = `<b class="pre">${esc(m[1])}</b>` + h.slice(esc(m[1]).length);
  return h;
};

const FONT = `@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-700-latin.woff2') format('woff2');font-weight:700;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-800-latin.woff2') format('woff2');font-weight:800;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-900-latin.woff2') format('woff2');font-weight:900;font-style:normal;font-display:block}`;
const CSS = `
${FONT}
:root, #root{
  --ink:#0f1a15; --line:#dbe2de; --surface:#ffffff;
  --out-1:#0d6f40; --out-2:#0a5a33; --out-3:#063d22; --mint:#6edb9c;
  --garnet-1:#a52234; --garnet-2:#7e1626; --garnet-3:#560d19; --garnet-soft:#fbe3e6; --out-soft:#e1f3e8;
  --grain:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .1 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>");
}
#root, #root *{box-sizing:border-box}
#root{font-family:'Figtree',sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
#root h1,#root h2,#root p,#root ul{margin:0;padding:0}
.ic{display:block;width:100%;height:100%}
.jw{color:#fff;background:radial-gradient(120% 85% at 0 0,rgba(255,255,255,.16),transparent 55%),var(--grain),linear-gradient(150deg,var(--j1),var(--j2) 55%,var(--j3));background-size:auto,180px 180px,auto;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.16),0 18px 30px -16px var(--j3)}
.j-out{--j1:var(--out-1);--j2:var(--out-2);--j3:var(--out-3)}
.j-garnet{--j1:var(--garnet-1);--j2:var(--garnet-2);--j3:var(--garnet-3)}
.card{position:absolute;left:56px;top:216px;width:968px;height:808px;border-radius:44px;background:var(--surface);box-shadow:0 2px 6px rgba(0,0,0,.18),0 50px 80px -40px rgba(0,0,0,.7),inset 0 0 0 1.5px var(--line);overflow:hidden}
.card::before{content:"";position:absolute;left:0;right:0;top:0;height:14px;background:var(--kc)}
.card.k-do{--kc:var(--out-1)}
.card.k-back{--kc:var(--garnet-1);background:linear-gradient(180deg,var(--garnet-soft),#fff 46%)}
.it{position:absolute;left:52px;top:58px;width:864px;display:flex;flex-direction:column;justify-content:center}
.it .disc{position:relative;flex:none}
.disc .ban,.mk .ban{position:absolute;inset:14%;width:auto;height:auto;color:#fff;opacity:.92}
.it p{font-weight:700;line-height:1.24;letter-spacing:-.01em;color:var(--ink);overflow-wrap:anywhere}
.pre{font-weight:900;color:var(--kc)}
.ul{position:absolute;left:40px;top:58px;width:888px;list-style:none;display:flex;flex-direction:column;gap:10px}
.ul li{display:flex;align-items:center;gap:20px;padding:12px 18px 12px 12px;border-radius:22px;font-weight:700;line-height:1.2;color:var(--ink);overflow-wrap:anywhere}
.ul li .mk{position:relative;width:64px;height:64px;border-radius:20px;padding:14px;flex:none}
.dots{position:absolute;left:52px;bottom:48px;display:flex;gap:12px;align-items:center}
.dots i{display:block;width:18px;height:18px;border-radius:9px;background:var(--line)}
.dots i.on{width:54px}
.dots i.done{background:#b9c4be}
`;

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
      d.innerHTML = p.html; root.appendChild(d);
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
  const IT = [70, 64, 58, 52, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30];
  const LI = [64, 58, 52, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30];
  const TT = [96, 88, 80, 72, 64], HT = [56, 52, 48, 44, 40], SRC = [36, 34, 32, 30];
  const AREA = 808 - 58 - 96;   /* the card's height less its top and the dots */
  const probes = [], idx = {};
  const add = (key, w, css, html) => { idx[key] = probes.length; probes.push({w, css, html}); };
  LINES.forEach((t, i) => {
    IT.forEach(s => add(`i${i}.${s}`, 864, `font-weight:700;font-size:${s}px;line-height:1.24;letter-spacing:-.01em;overflow-wrap:anywhere`, lineHTML(t)));
    LI.forEach(s => add(`r${i}.${s}`, 888, `display:flex;align-items:center;gap:20px;padding:12px 18px 12px 12px;font-weight:700;font-size:${s}px;line-height:1.2;overflow-wrap:anywhere`, `<span style="width:64px;height:64px;flex:none;display:block"></span><span>${lineHTML(t)}</span>`));
  });
  TT.forEach(s => add(`t.${s}`, 864, `font-weight:900;font-size:${s}px;line-height:1.0;letter-spacing:-.035em;text-wrap:balance`, esc(TITLE)));
  HT.forEach(s => add(`h.${s}`, 824, `font-weight:800;font-size:${s}px;line-height:1.06;letter-spacing:-.02em;text-wrap:balance`, esc(TITLE)));
  if (UI.src) SRC.forEach(s => add(`src.${s}`, 864, `font-weight:700;font-size:${s}px;line-height:1.3`, UI.srcHTML));
  const M = await measureAll(probes);
  const m = key => { const r = M[idx[key]]; if (r.over) throw new Error(`${key}: wider than its box`); return r.h; };

  /* Pages: a garnet line, or one over 100 characters, alone; runs of short green lines together, up to five rows that fit */
  const single = i => kinds[i] === 'back' || F.en[i].length > 100 || LINES[i].length > 120;
  const pages = [];
  for (let i = 0; i < LINES.length;) {
    if (single(i)) { pages.push({rows:[i]}); i++; continue; }
    const rows = [i]; i++;
    while (i < LINES.length && !single(i) && rows.length < 5) {
      const s = LI.find(s => [...rows, i].reduce((a, j) => a + m(`r${j}.${s}`), 0) + 10 * rows.length <= AREA);
      if (!s || s < 44) break;   /* a list stays at 44 px or more: a longer run starts a new card */
      rows.push(i); i++;
    }
    pages.push({rows});
  }
  /* A list's last row stays on screen only until the next card comes; if that is under 2.6 s and the next card is a short line
     (or a list), the row moves to start the next card instead, so it is not gone before it can be read */
  const listSize = rows => LI.find(s => rows.reduce((a, j) => a + m(`r${j}.${s}`), 0) + 10 * (rows.length - 1) <= AREA) || 0;
  for (let k = 0; k + 1 < pages.length; k++) {
    const p = pages[k], q = pages[k + 1], L = p.rows[p.rows.length - 1];
    if (p.rows.length > 1 && !single(q.rows[0]) && q.rows.length < 5 && at(q.rows[0]) - at(L) < 2.6) { p.rows.pop(); q.rows.unshift(L); }
    /* a list that this makes smaller than 44 px passes its own last row on to the next card when that card can take it */
    const r = pages[k + 2];
    if (q.rows.length > 1 && listSize(q.rows) < 44 && r && !single(r.rows[0]) && r.rows.length < 5) r.rows.unshift(q.rows.pop());
  }
  for (const p of pages) {
    p.kind = kinds[p.rows[0]];
    if (p.rows.length === 1) {
      const i = p.rows[0];
      for (const s of IT) {
        const disc = s >= 52 ? 112 : s >= 44 ? 96 : 80, gap = s >= 52 ? 34 : 26;
        if (disc + gap + m(`i${i}.${s}`) <= AREA) { p.one = {s, disc, gap}; break; }
      }
      if (!p.one) throw new Error(`line ${i + 1} does not fit at 30 px`);
    } else {
      p.s = LI.find(s => p.rows.reduce((a, j) => a + m(`r${j}.${s}`), 0) + 10 * (p.rows.length - 1) <= AREA);
    }
  }
  const tS = TT.find(s => m(`t.${s}`) <= s * 2.05) || 64, tH = Math.ceil(m(`t.${tS}`));
  const hS = HT.find(s => m(`h.${s}`) <= s * 1.1) || HT.find(s => m(`h.${s}`) <= s * 2.2) || 40, hH = Math.ceil(m(`h.${hS}`));
  const srcS = UI.src ? SRC.find(s => m(`src.${s}`) <= 260) || 30 : 0;

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
  const scenes = [], log = [];
  const chipCSS = (id) => `${id}{display:inline-flex;align-items:center;gap:14px;padding:12px 22px 12px 14px;border-radius:999px;background:rgba(110,219,156,.14);box-shadow:inset 0 0 0 1.5px rgba(110,219,156,.5);color:#d9f7e6;font:700 32px/1 'Figtree'}
${id} i{display:block;width:30px;height:30px;border-radius:50%;background:var(--mint)}`;

  /* 0 · Title card (no voice yet): the entry's title, "Discharge advice", the source as the app names it, and the guide's name */
  const P0 = pages[0], firstStart = r3(at(P0.rows[0]) - 0.65);
  {
    const id = 's0', end = firstStart, words = TITLE.split(' ');
    const css = `#s0-t{position:absolute;left:108px;top:150px;width:864px;color:#fff;font:900 ${tS}px/1.0 'Figtree';letter-spacing:-.035em;text-shadow:0 4px 30px rgba(0,0,0,.5);text-wrap:balance}
#s0-t span{display:inline-block}
#s0-c{position:absolute;left:108px;top:${150 + tH + 44}px;display:flex;flex-direction:column;align-items:flex-start;gap:16px}
${chipCSS('#s0-k')}
#s0-m{display:inline-flex;align-items:center;padding:10px 20px;border-radius:999px;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3);color:#fff;font:700 30px/1 'Figtree'}
#s0-gz{position:absolute;left:108px;bottom:96px;display:flex;align-items:center;gap:16px;color:#fff;font:800 34px/1 'Figtree';text-shadow:0 2px 18px rgba(0,0,0,.6)}
#s0-gz i{display:block;width:44px;height:44px;border-radius:14px}`;
    const html = `  <h1 id="s0-t" data-x="title">${words.map((w, i) => `<span id="s0-w${i}">${esc(w)}</span>`).join(' ')}</h1>
  <div id="s0-c"><div id="s0-k"><i></i><span data-x="chip">${esc(UI.chip)}</span></div><div id="s0-m" data-x="meta">${esc(F.meta)}</div></div>
  <p id="s0-gz"><i class="jw j-out"></i><span data-x="guide">${esc(UI.guide)}</span></p>`;
    const js = words.map((_, i) => enter(`#s0-w${i}`, 0.3 + i * 0.07));
    js.push(`  tl.fromTo("#s0-k",{x:-30,opacity:0},{x:0,opacity:1,duration:.45,ease:"power3.out"},0.7);`, `  tl.fromTo("#s0-m",{x:-30,opacity:0},{x:0,opacity:1,duration:.45,ease:"power3.out"},0.95);`, `  tl.fromTo("#s0-gz",{y:20,opacity:0},{y:0,opacity:1,duration:.45,ease:"power3.out"},1.2);`);
    js.push(leave('#s0-t', end - 0.4), leave('#s0-c', end - 0.4), leave('#s0-gz', end - 0.4));
    scenes.push({id, start:0, end, track:2, html:scene(id, {css, html}, js)});
  }
  /* The header over every card: "Discharge advice" and the entry's title, from the first card to the end of the voice */
  {
    const id = 'hd', start = r3(firstStart - 0.1), end = END_AT;
    const css = `#hd-b{position:absolute;left:56px;right:56px;top:${Math.max(40, 172 - hH - 44)}px;display:flex;align-items:center;gap:24px;color:#fff}
#hd-b .disc{width:88px;height:88px;border-radius:28px;padding:20px;flex:none}
#hd-k{font:800 28px/1 'Figtree';letter-spacing:.02em;color:var(--mint);margin-bottom:10px !important}
#hd-b h2{font:800 ${hS}px/1.06 'Figtree';letter-spacing:-.02em;text-wrap:balance;text-shadow:0 2px 18px rgba(0,0,0,.45)}`;
    const html = `  <div id="hd-b"><div class="disc jw j-out">${svg('check')}</div><div><p id="hd-k" data-x="chip">${esc(UI.chip)}</p><h2 data-x="title">${esc(TITLE)}</h2></div></div>`;
    scenes.push({id, start, end, track:4, html:scene(id, {css, html}, [enter('#hd-b', 0.1), leave('#hd-b', end - start - 0.35)])});
  }
  /* 1..n · The cards: one line alone, or a list that builds up as it is read; a dot per line marks the place in the tab */
  pages.forEach((p, k) => {
    const id = 'p' + (k + 1), start = k ? r3(at(p.rows[0]) - 0.65) : firstStart;
    const end = k + 1 < pages.length ? r3(at(pages[k + 1].rows[0]) - 0.65) : END_AT, last = k + 1 === pages.length;
    const dots = `<div class="dots">${LINES.map((_, i) => `<i id="${id}-d${i}"${i < p.rows[0] ? ' class="done"' : ''}></i>`).join('')}</div>`;
    const disc = i => `${svg(PICS[i])}${BAN.test(F.en[i]) ? svg('ban', 'ban') : ''}`;
    let css = '', body = '';
    const js = [enter(`#${id}-card`, 0)];
    if (p.rows.length === 1) {
      const i = p.rows[0], o = p.one, t = at(i) - start;
      css = `#${id}-i{height:${AREA}px;opacity:0}
#${id}-i .disc{width:${o.disc}px;height:${o.disc}px;border-radius:${Math.round(o.disc * .3)}px;padding:${Math.round(o.disc * .23)}px}
#${id}-i p{margin-top:${o.gap}px !important;font-size:${o.s}px}`;
      body = `    <div class="it" id="${id}-i"><div class="disc jw j-${JW[kinds[i]]}" id="${id}-c">${disc(i)}</div><p data-w="${i}">${lineHTML(LINES[i])}</p></div>`;
      js.push(`  tl.fromTo("#${id}-i",{y:36,opacity:0},{y:0,opacity:1,duration:.45,ease:"power3.out"},${r3(t - 0.2)});`, pop(`#${id}-c`, t - 0.15));
      js.push(`  tl.fromTo("#${id}-d${i}",{width:18,backgroundColor:"#dbe2de"},{width:54,backgroundColor:"${HEX[kinds[i]]}",duration:.35,ease:"power2.out"},${r3(t - 0.2)});`);
      log.push(`${id}: line ${i + 1} alone, ${o.s}px (${kinds[i]})`);
    } else {
      css = `#${id}-ul li{font-size:${p.s}px;opacity:0}`;
      body = `    <ul class="ul" id="${id}-ul">${p.rows.map(i => `<li id="${id}-l${i}"><span class="mk jw j-${JW[kinds[i]]}">${disc(i)}</span><span data-w="${i}">${lineHTML(LINES[i])}</span></li>`).join('')}</ul>`;
      p.rows.forEach((i, n) => {
        const t = at(i) - start, off = n + 1 < p.rows.length ? at(p.rows[n + 1]) - start - 0.2 : end - start - 0.9;
        js.push(`  tl.fromTo("#${id}-l${i}",{x:28,opacity:0},{x:0,opacity:1,duration:.4,ease:"power3.out"},${r3(t - 0.2)});`);
        js.push(`  tl.fromTo("#${id}-l${i}",{backgroundColor:"rgba(225,243,232,0)"},{backgroundColor:"rgba(225,243,232,1)",duration:.3,ease:"power1.out",immediateRender:false},${r3(t - 0.2)});`);
        js.push(`  tl.fromTo("#${id}-l${i}",{backgroundColor:"rgba(225,243,232,1)"},{backgroundColor:"rgba(225,243,232,0)",duration:.35,ease:"power1.inOut",immediateRender:false},${r3(off)});`);
        js.push(`  tl.fromTo("#${id}-d${i}",{width:18,backgroundColor:"#dbe2de"},{width:54,backgroundColor:"${HEX.do}",duration:.35,ease:"power2.out"},${r3(t - 0.2)});`);
        if (n + 1 < p.rows.length) js.push(`  tl.fromTo("#${id}-d${i}",{width:54},{width:18,duration:.3,ease:"power2.inOut",immediateRender:false},${r3(off)});`);
      });
      log.push(`${id}: lines ${p.rows.map(i => i + 1).join(', ')} as a list, ${p.s}px`);
    }
    const html = `  <div class="card k-${p.kind}" id="${id}-card">\n${body}\n    ${dots}\n  </div>`;
    if (last) js.push(`  tl.fromTo("#${id}-card",{y:0,opacity:1},{y:60,opacity:0,duration:.45,ease:"power2.in",immediateRender:false},${r3(end - start - 0.4)});`);
    else js.push(leave(`#${id}-card`, end - start - 0.35));
    scenes.push({id, start, end, track:3, html:scene(id, {css, html}, js)});
  });
  /* End card: the source as the app names it (and, for the ebook's tabs, the patient page's source sentence), and the guide */
  {
    const id = 'se', start = END_AT, end = FILM;
    const css = `#se-box{position:absolute;left:80px;right:80px;bottom:80px;padding:30px 28px 32px;border-radius:32px;background:rgba(6,10,8,.66);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.08);color:#fff}
#se-k{font:800 30px/1 'Figtree';letter-spacing:.02em;color:var(--mint);opacity:0}
#se-src{margin-top:16px !important;font:700 ${srcS || 36}px/1.3 'Figtree';text-shadow:0 2px 18px rgba(0,0,0,.6);opacity:0}
#se-m{margin-top:14px !important;font:800 34px/1.2 'Figtree';opacity:0}
#se-gz{margin-top:30px !important;display:flex;align-items:center;gap:16px;font:800 34px/1 'Figtree';opacity:0}
#se-gz i{display:block;width:44px;height:44px;border-radius:14px}`;
    const html = `  <div id="se-box"><p id="se-k" data-x="source">${esc(UI.source)}</p>${UI.src ? `<p id="se-src" data-x="src">${UI.srcHTML}</p>` : ''}<p id="se-m" data-x="meta">${esc(F.meta)}</p><p id="se-gz"><i class="jw j-out"></i><span data-x="guide">${esc(UI.guide)}</span></p></div>`;
    const js = [fade('#se-k', 0.35, 0, 1, .4), ...(UI.src ? [enter('#se-src', 0.5)] : []), enter('#se-m', UI.src ? 0.7 : 0.5), enter('#se-gz', 0.95)];
    scenes.push({id, start, end, track:2, html:scene(id, {css, html}, js)});
  }

  const index = `<!doctype html>
<html lang="${LANG}" data-resolution="square">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${W}, height=${H}" />
    <title>${esc(TITLE)}: discharge advice${LANG === 'ms' ? ' (Bahasa Melayu)' : ''}</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
#root{background:#06080a}
#bgw{position:absolute;left:0;top:0;width:${W}px;height:${H}px;overflow:hidden}
#bg{position:absolute;left:0;top:0;width:${W}px;height:${H}px;object-fit:cover}
#scrim{position:absolute;left:0;top:0;width:${W}px;height:${H}px;background:linear-gradient(180deg,rgba(5,7,8,.86) 0%,rgba(5,7,8,.42) 46%,rgba(5,7,8,.78) 100%)}
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${FILM}" data-width="${W}" data-height="${H}">
      <div id="bgw"><video id="bg" class="clip" src="assets/bg.mp4" data-start="0" data-duration="${FILM}" data-track-index="1" muted playsinline></video></div>
      <div id="scrim"></div>
${scenes.map((c, i) => `      <div id="${c.id}" data-composition-id="${c.id}" data-composition-src="compositions/${c.id}.html" data-start="${c.start}" data-duration="${r3(c.end - c.start)}" data-track-index="${c.track}" data-track-kind="graphics" data-width="${W}" data-height="${H}" style="z-index:${3 + i}"></div>`).join('\n')}
      <audio id="vo" class="clip" src="assets/vo.wav" data-start="${LEAD}" data-duration="${r3(T.dur)}" data-track-index="5" data-volume="1"></audio>
      <audio id="music" class="clip" src="assets/music.mp3" data-start="0" data-duration="${FILM}" data-track-index="6" data-volume="0.14" data-fade-in="1.2" data-fade-out="3.5"></audio>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      tl.fromTo("#bgw",{scale:1},{scale:1.1,duration:${FILM},ease:"none"},0);
      tl.fromTo("#scrim",{opacity:0.15},{opacity:0.75,duration:1.4,ease:"power1.inOut"},0.5);
      tl.fromTo("#scrim",{opacity:0.75},{opacity:1,duration:0.8,ease:"power1.inOut",immediateRender:false},${r3(firstStart - 0.1)});
      tl.fromTo("#scrim",{opacity:1},{opacity:0.6,duration:1.2,ease:"power1.inOut",immediateRender:false},${r3(END_AT - 0.2)});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`;
  /* The film's own project: its scenes and its copies of the assets (the ground and the bed cut to the film's length) */
  const { execFileSync } = require('child_process');
  fs.mkdirSync(path.join(OUT, 'compositions'), {recursive:true});
  fs.mkdirSync(path.join(OUT, 'assets', 'fonts'), {recursive:true});
  for (const f of fs.readdirSync(path.join(ROOT, 'assets', 'fonts'))) fs.copyFileSync(path.join(ROOT, 'assets', 'fonts', f), path.join(OUT, 'assets', 'fonts', f));
  if (FILM + 1 > 80) throw new Error('the ground is 80 s: make it longer in prep.cjs');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', path.join(ROOT, 'assets', `bg-${F.loop}.mp4`), '-t', String(Math.ceil(FILM + 1)), '-c', 'copy', path.join(OUT, 'assets', 'bg.mp4')]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', path.join(ROOT, 'assets', 'music.mp3'), '-t', String(Math.ceil(FILM + 1)), '-c', 'copy', path.join(OUT, 'assets', 'music.mp3')]);
  fs.copyFileSync(path.join(ROOT, 'assets', `vo-${KEY}-${LANG}.wav`), path.join(OUT, 'assets', 'vo.wav'));
  fs.copyFileSync(path.join(__dirname, 'hyperframes.json'), path.join(OUT, 'hyperframes.json'));
  const name = `adv-${KEY}${LANG === 'ms' ? '-ms' : ''}`;
  fs.writeFileSync(path.join(OUT, 'package.json'), JSON.stringify({name, private:true, type:'module', scripts:{dev:'npx --yes hyperframes@0.9.22 preview', check:'npx --yes hyperframes@0.9.22 check', render:'npx --yes hyperframes@0.9.22 render'}}, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify({id:name, name, createdAt:'2026-11-24T00:00:00.000Z'}, null, 2) + '\n');
  for (const f of fs.readdirSync(path.join(OUT, 'compositions'))) if (f.endsWith('.html')) fs.unlinkSync(path.join(OUT, 'compositions', f));
  fs.writeFileSync(path.join(OUT, 'index.html'), index);
  for (const c of scenes) fs.writeFileSync(path.join(OUT, 'compositions', c.id + '.html'), c.html);
  const poster = r3(firstStart - 0.9);
  fs.writeFileSync(path.join(__dirname, `scenes-${KEY}-${LANG}.json`), JSON.stringify({film:FILM, lead:LEAD, voEnd:VO_END, endAt:END_AT, poster, kinds, pages:pages.map(p => p.rows), scenes:scenes.map(c => ({id:c.id, start:c.start, end:c.end}))}, null, 1));
  console.log(`${name}: ${FILM} s (${Math.round(FILM * 30)} frames); title ${tS}px, header ${hS}px; voice ${LEAD}–${VO_END} s; end card ${END_AT}–${FILM} s; poster ${poster} s; loop ${F.loop}`);
  console.log(log.join('\n'));
})().catch(e => { console.error(e.message || e); process.exit(1); });
