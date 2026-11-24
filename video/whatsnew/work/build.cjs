/* What's new in the guide: writes index.html, compositions/*.html and work/layout.json from work/timing.json (node work/prep.cjs)
   and work/rects.json (node work/shots.cjs). SPEC.md sets the look, the words and the shots.   node work/build.cjs */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const T = JSON.parse(fs.readFileSync(path.join(__dirname, 'timing.json'), 'utf8'));
const R = JSON.parse(fs.readFileSync(path.join(__dirname, 'rects.json'), 'utf8'));
/* Boxes the shot script could not find by selector, read off the screens (CSS px) */
R.antidotes.banner = { x: 16, y: 199, w: 358, h: 150 };
R.calc.groups = { x: 12, y: 262, w: 366, h: 436 };
const r3 = x => Math.round(x * 1000) / 1000;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- timing: the voice is the clock ---------- */
const S = Object.fromEntries(T.sentences.map(s => [s.id, s]));
const GAP_IN = 0.45, GAP_BEAT = 0.9, BRIDGE = 2.0, HOLD = 2.6;
let t = 0.9;
const place = (id, gap) => { const s = S[id]; if (gap != null) t = t + gap; s.at = r3(t - s.words[0].s); s.end = r3(s.at + s.words[s.words.length - 1].e); t = s.end; };
place('s01'); place('s02', GAP_IN);
place('s03', GAP_BEAT); place('s04', GAP_IN);
place('s05', GAP_BEAT); place('s06', GAP_IN);
const bridgeAt = r3(S.s06.end + 0.6), bridgeEnd = r3(bridgeAt + BRIDGE); t = bridgeEnd - 0.4;
place('s07', 0.9); place('s08', GAP_IN);
place('s09', GAP_BEAT); place('s10', GAP_IN); place('s11', GAP_IN);
place('s12', GAP_BEAT);
const FILM = r3(S.s12.end + HOLD);
const W = (id, i) => r3(S[id].at + S[id].words[i].s);          /* absolute time a word starts */
const WE = (id, i) => r3(S[id].at + S[id].words[i].e);
const END = id => S[id].end;
const SC = [
  { id: 'open', start: 0, end: r3(W('s03', 0) - 0.55) },
  { id: 'b2', end: r3(W('s05', 0) - 0.55) },
  { id: 'b3', end: bridgeAt },
  { id: 'bridge', end: bridgeEnd },
  { id: 'b4', end: r3(W('s09', 0) - 0.55) },
  { id: 'b5', end: r3(W('s12', 0) - 0.6) },
  { id: 'close', end: FILM }
];
SC.forEach((c, i) => { if (i) c.start = SC[i - 1].end; c.dur = r3(c.end - c.start); });
const scn = Object.fromEntries(SC.map(c => [c.id, c]));

/* ---------- look ---------- */
const FONTS = ['700', '800', '900'].map(w => `@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-${w}-latin.woff2') format('woff2');font-weight:${w};font-style:normal;font-display:block}`).join('\n');
const JEWEL = { emerald: ['#0d7049', '#0a5a3b', '#063d28'], plum: ['#6a3473', '#4a2150', '#2f1334'], teal: ['#157481', '#0f5a64', '#093d45'],
  indigo: ['#3a3f8c', '#282c6a', '#181b47'], slate: ['#4b5b66', '#34424b', '#202b32'], obsidian: ['#27352e', '#17211c', '#0b110e'], bronze: ['#8b5c24', '#6b4519', '#432a0e'] };
const BASE = `${FONTS}
#root, #root *{box-sizing:border-box}
#root{position:absolute;inset:0;font-family:'Figtree',sans-serif;color:#0f1a15;-webkit-font-smoothing:antialiased}
#root p,#root h1,#root h2{margin:0}`;

/* The phone: a 400 x 866 screen (390 CSS px wide at 2x shots, so 1 CSS px = 400/390 px) in an obsidian bezel */
const SX = 1196, SY = 44, SW = 400, SH = 866, K = SW / 390;
const PHONE_CSS = `
.ph{position:absolute;left:${SX - 14}px;top:${SY - 14}px;width:${SW + 28}px;height:${SH + 28}px;border-radius:62px;background:linear-gradient(150deg,#2a3832,#121a16 60%,#0a0f0c);box-shadow:0 2px 2px rgba(0,0,0,.08),0 60px 90px -50px #063d28,0 20px 40px -24px rgba(15,26,21,.45),inset 0 0 0 1.5px rgba(255,255,255,.12)}
.scr{position:absolute;left:${SX}px;top:${SY}px;width:${SW}px;height:${SH}px;border-radius:48px;overflow:hidden;background:#e9edeb}
.scr img{position:absolute;left:0;top:0;width:${SW}px;display:block}
.tap{position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;border:4px solid #43dd8c;background:rgba(67,221,140,.22);opacity:0}
.co{position:absolute;overflow:hidden;border-radius:26px;background:#fff;box-shadow:0 2px 2px rgba(0,0,0,.06),0 40px 70px -30px rgba(6,61,40,.55),0 0 0 1.5px rgba(15,26,21,.08);opacity:0}
.co img{position:absolute;display:block}
.tl{position:absolute;left:150px;width:860px;border-radius:36px;padding:34px 40px 36px;color:#fff;overflow:hidden;opacity:0}
.tl::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.14);pointer-events:none}
.tl h2{font-weight:800;font-size:54px;line-height:1.08;letter-spacing:-.02em}
.tl p{margin-top:14px !important;font-weight:700;font-size:31px;line-height:1.3;color:rgba(255,255,255,.86)}
${Object.entries(JEWEL).map(([k, [a, b, c]]) => `.j-${k}{background:radial-gradient(120% 85% at 0 0,rgba(255,255,255,.14),transparent 55%),linear-gradient(150deg,${a},${b} 55%,${c});box-shadow:0 2px 2px rgba(0,0,0,.05),0 44px 70px -40px ${c},0 14px 26px -18px rgba(15,26,21,.35)}`).join('\n')}`;

/* A screen scene: shots in the phone, taps, callouts lifted out of the screen, and the beat's jewel tiles */
function screenScene(c, def) {
  const L = x => r3(x - c.start);
  const els = [], js = [];
  def.shots.forEach((s, i) => {
    const h = r3(SW * s.hpx / 780);
    els.push(`<img id="${c.id}-sh${i}" src="assets/shots/${s.img}.webp" alt="" style="height:${h}px;opacity:${i ? 0 : 1}" />`);
    if (i) {
      js.push(`tl.fromTo("#${c.id}-sh${i}",{opacity:0,y:${(s.pan ? s.pan[0] : 0) + 24}},{opacity:1,y:${s.pan ? s.pan[0] : 0},duration:.35,ease:"power3.out"},${L(s.at)});`);
      js.push(`tl.fromTo("#${c.id}-sh${i - 1}",{opacity:1},{opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${L(s.at)});`);
    } else if (s.pan) js.push(`tl.set("#${c.id}-sh0",{y:${s.pan[0]}},0);`);
    if (s.pan) js.push(`tl.fromTo("#${c.id}-sh${i}",{y:${s.pan[0]}},{y:${s.pan[1]},duration:${r3(s.pan[3] - s.pan[2])},ease:"power2.inOut",immediateRender:false},${L(s.pan[2])});`);
  });
  (def.taps || []).forEach((p, i) => {
    els.push(`<div class="tap" id="${c.id}-tap${i}" style="left:${r3(SX + p.x * K)}px;top:${r3(SY + p.y * K)}px"></div>`);
    js.push(`tl.fromTo("#${c.id}-tap${i}",{scale:.6,opacity:1},{scale:1.4,opacity:0,duration:.45,ease:"power2.out"},${L(p.at)});`);
  });
  (def.callouts || []).forEach((o, i) => {
    const pad = 6, rx = o.rect.x - pad, ry = o.rect.y - pad, rw = o.rect.w + 2 * pad, rh = o.rect.h + 2 * pad, z = o.z || 1.45;
    const w = r3(rw * K * z), h = r3(rh * K * z), cx = SX + (rx + rw / 2) * K, cy = SY + (ry + rh / 2) * K + (o.dy || 0);
    const left = r3(Math.min(1880 - w, Math.max(1040, cx - w / 2))), top = r3(Math.min(900 - h, Math.max(30, cy - h / 2)));
    els.push(`<div class="co" id="${c.id}-co${i}" data-layout-allow-overflow style="left:${left}px;top:${top}px;width:${w}px;height:${h}px"><img src="assets/shots/${o.img}.webp" alt="" style="width:${r3(SW * z)}px;left:${r3(-rx * K * z)}px;top:${r3(-ry * K * z)}px" /></div>`);
    js.push(`tl.fromTo("#${c.id}-co${i}",{opacity:0,scale:.86,y:16},{opacity:1,scale:1,y:0,duration:.42,ease:"back.out(1.6)"},${L(o.at)});`);
    js.push(`tl.fromTo("#${c.id}-co${i}",{opacity:1,scale:1},{opacity:0,scale:.94,duration:.28,ease:"power2.in",immediateRender:false},${L(o.until)});`);
  });
  def.tiles.forEach((tile, i) => {
    els.push(`<div class="tl j-${tile.j}" id="${c.id}-t${i}" style="top:${tile.top}px"><h2>${esc(tile.h)}</h2><p>${esc(tile.p)}</p></div>`);
    js.push(`tl.fromTo("#${c.id}-t${i}",{opacity:0,y:40,rotation:1.5},{opacity:1,y:0,rotation:0,duration:.45,ease:"power3.out"},${L(tile.at)});`);
    if (i && def.tiles[i - 1]) js.push(`tl.fromTo("#${c.id}-t${i - 1}",{opacity:1},{opacity:.72,duration:.4,ease:"power2.inOut",immediateRender:false},${L(tile.at)});`);
  });
  /* the phone settles in at the start of each screen beat */
  js.unshift(`tl.fromTo("#${c.id}-pw",{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power3.out"},0);`);
  js.push(`tl.fromTo("#${c.id}-pw",{opacity:1},{opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${r3(c.dur - .3)});`);
  js.push(...def.tiles.map((x, i) => `tl.fromTo("#${c.id}-t${i}",{opacity:${i === def.tiles.length - 1 ? 1 : .72}},{opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${r3(c.dur - .3)});`));
  const imgs = els.filter(e => e.startsWith('<img')), rest = els.filter(e => !e.startsWith('<img'));
  return scene(c.id, PHONE_CSS, `<div id="${c.id}-pw" style="position:absolute;inset:0"><div class="ph"></div><div class="scr">${imgs.join('')}</div>${rest.filter(e => e.includes('class="tap"') || e.includes('class="co"')).join('\n')}</div>\n${rest.filter(e => e.includes('class="tl')).join('\n')}`, js);
}
function scene(id, css, html, js) {
  return `<template>
<style>
${BASE}
${css}
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
const hpx = { home: 1688, step: 1688, 'home-pickup': 1688, 'dengue-film': 1688, 'cancer-film': 1688, intro: 1688, 'tools-pan': 3200, antidotes: 1688, 'search-nbm': 1688, xray: 1688, 'xray-scaphoid': 1688, calc: 1688, new: 1688 };
const sh = (img, at, pan) => ({ img, at, hpx: hpx[img], pan });
const mid = r => ({ x: r.x + r.w / 2, y: r.y + r.h / 2 });
const files = {};

/* Beat 2: sooner, and pick up where you left off */
{
  const c = scn.b2, card = R['home-pickup'].card;
  files.b2 = screenScene(c, {
    shots: [sh('home', c.start), sh('home-pickup', W('s04', 1)), sh('step', W('s04', 13) + .12)],
    taps: [{ ...mid(card), at: W('s04', 13) - .22 }],
    callouts: [{ img: 'home-pickup', rect: card, at: W('s04', 6), until: W('s04', 12) - .05, z: 1.75 }],
    tiles: [{ j: 'emerald', h: 'Quicker on a weak signal', p: 'The guide starts before the whole page has arrived.', top: 250, at: W('s03', 0) - .1 },
            { j: 'plum', h: 'Pick up where you left off', p: 'The last step you opened, one tap from home.', top: 520, at: W('s04', 2) }]
  });
}
/* Beat 3: the leaflet films, and the intro read aloud */
{
  const c = scn.b3;
  files.b3 = screenScene(c, {
    shots: [sh('dengue-film', c.start), sh('cancer-film', W('s05', 3)), sh('intro', W('s06', 0) - .15)],
    callouts: [{ img: 'cancer-film', rect: R['cancer-film'].film, at: W('s05', 8), until: END('s05') + .15, z: 1.75 },
               { img: 'intro', rect: R.intro.say, at: W('s06', 5), until: END('s06') + .35, z: 1.8 }],
    tiles: [{ j: 'teal', h: 'Leaflet films', p: 'Dengue and cancer pain, every line on screen, in English and BM.', top: 250, at: W('s05', 0) - .1 },
            { j: 'indigo', h: 'The intro, read aloud', p: 'The first-shift intro, in English or BM.', top: 540, at: W('s06', 1) }]
  });
}
/* Beat 4: antidotes and abbreviations */
{
  const c = scn.b4, tp = R['tools-pan'], panTo = -Math.round((tp.antidotes.y - 330) * K);
  const tapY = tp.antidotes.y + tp.antidotes.h / 2 + panTo / K;
  files.b4 = screenScene(c, {
    shots: [sh('tools-pan', c.start, [-40, panTo, c.start + .15, W('s07', 3) - .1]), sh('search-nbm', W('s08', 0) - .12)],
    taps: [{ x: tp.antidotes.x + tp.antidotes.w / 2, y: tapY, at: W('s07', 4) - .3 }],
    /* the Antidotes tile lifted out of Shift tools (its page lists products with strengths, so it is not shown) */
    callouts: [{ img: 'tools-pan', rect: tp.antidotes, dy: panTo, at: W('s07', 4) + .1, until: W('s08', 0) - .25, z: 1.6 },
               { img: 'search-nbm', rect: R['search-nbm'].card, at: W('s08', 2), until: END('s08') + .35, z: 1.7 }],
    tiles: [{ j: 'teal', h: 'Antidotes', p: "The Ministry of Health's quick guide, January 2022, in Shift tools.", top: 250, at: W('s07', 0) - .1 },
            { j: 'slate', h: 'Abbreviations', p: 'Type one in search: its meaning as the MOH list prints it.', top: 540, at: W('s08', 1) }]
  });
}
/* Beat 5: reading X-rays, and the calculators */
{
  const c = scn.b5, sc = R.xray.scaphoid;
  files.b5 = screenScene(c, {
    shots: [sh('xray', c.start), sh('xray-scaphoid', W('s10', 0) + .15), sh('calc', W('s11', 2) - .1)],
    taps: [{ ...mid(sc), at: W('s10', 0) - .2 }],
    callouts: [{ img: 'xray-scaphoid', rect: { x: 44, y: 150, w: 302, h: 429 }, at: W('s10', 3), until: END('s10') + .45, z: 1.12, dy: 40 },
               { img: 'calc', rect: R.calc.groups, at: W('s11', 5), until: END('s11') + .3, z: 1.12 }],
    tiles: [{ j: 'obsidian', h: 'Reading X-rays', p: 'Real films, with the normal anatomy outlined.', top: 250, at: W('s09', 0) - .1 },
            { j: 'bronze', h: '56 calculators', p: 'Each names the source behind its numbers.', top: 520, at: W('s11', 3) }]
  });
}
/* The open and the close: words over the Flow clips (the clips themselves are in the root) */
const TITLE_CSS = `
.ttl{position:absolute;left:150px;top:330px;color:#fff;text-shadow:0 2px 30px rgba(0,0,0,.45)}
.ttl h1{font-weight:900;font-size:112px;line-height:1;letter-spacing:-.035em;opacity:0}
.ttl h1 em{font-style:normal;color:#7cf0b4}
.ttl p{margin-top:26px !important;font-weight:800;font-size:40px;line-height:1.2;color:rgba(255,255,255,.88);opacity:0}
.gz{display:flex;align-items:center;gap:18px;margin-top:44px !important;font-weight:800;font-size:34px;opacity:0}
.gz i{display:block;width:46px;height:46px;border-radius:15px;background:linear-gradient(150deg,#0d7049,#0a5a3b 55%,#063d28);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.18)}`;
{
  const c = scn.open, L = x => r3(x - c.start);
  files.open = scene('open', TITLE_CSS, `<div class="ttl"><h1 id="open-h">What's <em>new</em></h1><p id="open-p">in the Green Zone MO Guide</p></div>`, [
    `tl.fromTo("#open-h",{opacity:0,y:40},{opacity:1,y:0,duration:.6,ease:"power3.out"},${L(W('s01', 0) - .1)});`,
    `tl.fromTo("#open-p",{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power3.out"},${L(W('s01', 4))});`,
    `tl.fromTo(".ttl",{opacity:1},{opacity:0,duration:.35,ease:"power2.in",immediateRender:false},${r3(c.dur - .4)});`]);
}
{
  const c = scn.close, L = x => r3(x - c.start);
  files.close = scene('close', TITLE_CSS, `<div class="ttl"><h1 id="close-h">What's <em>new</em></h1><p id="close-p">Open it any time.</p><p class="gz" id="close-g"><i></i><span>Green Zone MO Guide</span></p></div>`, [
    `tl.fromTo("#close-h",{opacity:0,y:40},{opacity:1,y:0,duration:.6,ease:"power3.out"},${L(W('s12', 1) - .1)});`,
    `tl.fromTo("#close-p",{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power3.out"},${L(W('s12', 4))});`,
    `tl.fromTo("#close-g",{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power3.out"},${L(END('s12') + .3)});`]);
}

/* ---------- captions: every word as scripted, 2 to 7 words a group, each word turns ink as it is spoken ---------- */
/* where each sentence's caption groups end (word index), so a group never splits a phrase */
const ENDS = { s01:[], s02:[3], s03:[3], s04:[4, 9, 14], s05:[5, 9], s06:[2, 6], s07:[2, 6], s08:[4], s09:[4], s10:[2], s11:[3, 7], s12:[4, 8] };
const groupsOf = (words, id) => { const g = []; let a = 0; for (const e of [...ENDS[id], words.length - 1]) { g.push(words.slice(a, e + 1).map((_, k) => a + k)); a = e + 1; } return g; };
const capEls = [], capJs = [], capLog = [];
let n = 0;
for (const s of T.sentences) {
  const gs = groupsOf(s.words, s.id);
  gs.forEach((ix, gi) => {
    const ws = ix.map(i => s.words[i]);
    const start = r3(s.at + ws[0].s - .1);
    const next = gi < gs.length - 1 ? r3(s.at + s.words[gs[gi + 1][0]].s - .1) : null;
    const end = next !== null ? next : r3(s.at + ws[ws.length - 1].e + .4);
    const dur = r3(end - start);
    capLog.push([start, ws.map(w => w.w).join(' ')]);
    capEls.push(`<div class="cg clip" id="cg${n}" data-start="${start}" data-duration="${dur}"><div class="cgp" id="cgp${n}">${ws.map((w, k) => `<span id="cw${n}_${k}">${esc(w.w)}</span>`).join(' ')}</div></div>`);
    capJs.push(`tl.fromTo("#cgp${n}",{opacity:0,y:8},{opacity:1,y:0,duration:.12,ease:"power2.out"},${start});`);
    ws.forEach((w, k) => capJs.push(`tl.fromTo("#cw${n}_${k}",{color:"#7b8a83"},{color:"#0f1a15",duration:.1},${r3(s.at + w.s)});`));
    if (next === null) capJs.push(`tl.fromTo("#cgp${n}",{opacity:1},{opacity:0,duration:.12,ease:"power2.in",immediateRender:false},${r3(end - .12)});`);
    n++;
  });
}
files.captions = scene('captions', `
.cg{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:0 240px 58px}
.cgp{display:inline-block;max-width:1440px;padding:12px 30px 14px;border-radius:24px;background:rgba(255,255,255,.96);font-weight:700;font-size:46px;line-height:1.2;text-align:center;color:#0f1a15;box-shadow:0 18px 40px -22px rgba(6,24,16,.5),inset 0 0 0 1.5px rgba(15,26,21,.08)}`,
  capEls.join('\n'), capJs);

/* ---------- index.html ---------- */
const hosts = SC.filter(c => c.id !== 'bridge').map((c, i) => `      <div id="${c.id}" data-composition-id="${c.id}" data-composition-src="compositions/${c.id}.html" data-start="${c.start}" data-duration="${c.dur}" data-track-index="2" data-track-kind="graphics" data-width="1920" data-height="1080" style="z-index:${5 + i}"></div>`).join('\n');
const vids = [['open', 'open'], ['bridge', 'bridge'], ['close', 'close']].map(([sc, f]) => `      <video id="v-${f}" class="clip" src="assets/flow/${f}.mp4" data-start="${scn[sc].start}" data-duration="${scn[sc].dur}" data-track-index="1" muted playsinline style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover;z-index:2"></video>`).join('\n');
const audio = T.sentences.map(s => `      <audio id="vo-${s.id}" class="clip" src="assets/vo/${s.id}.wav" data-start="${s.at}" data-duration="${s.dur}" data-track-index="4" data-volume="1"></audio>`).join('\n');
files.index = `<!doctype html>
<html lang="en" data-resolution="landscape">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>What's new in the guide</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
      html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: #e9edeb; }
      #root { position: relative; width: 100%; height: 100%; }
      #ground { position: absolute; inset: 0; z-index: 0; background: radial-gradient(130% 90% at 15% 0, #f3f6f4, transparent 55%), #e9edeb; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${FILM}" data-width="1920" data-height="1080">
      <div id="ground"></div>
${vids}
${hosts}
      <div id="captions" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="${FILM}" data-track-index="3" data-track-kind="captions" data-width="1920" data-height="1080" style="z-index:30"></div>
${audio}
      <audio id="music" class="clip" src="assets/music.mp3" data-start="0" data-duration="${FILM}" data-track-index="5" data-volume="0.16" data-fade-in="1" data-fade-out="3.5"></audio>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`;
fs.mkdirSync(path.join(ROOT, 'compositions'), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'compositions'))) fs.unlinkSync(path.join(ROOT, 'compositions', f));
for (const [k, v] of Object.entries(files)) fs.writeFileSync(k === 'index' ? path.join(ROOT, 'index.html') : path.join(ROOT, 'compositions', k + '.html'), v);
fs.writeFileSync(path.join(__dirname, 'layout.json'), JSON.stringify({ film: FILM, scenes: SC, sentences: T.sentences.map(s => ({ id: s.id, at: s.at, end: s.end, text: s.text })), captions: capLog }, null, 1));
console.log('film', FILM, 's;', SC.map(c => `${c.id} ${c.start}-${c.end}`).join(' | '));
console.log('caption groups', capLog.length);
