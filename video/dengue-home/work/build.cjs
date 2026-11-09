/* Writes index.html and compositions/*.html for "Dengue at home", the CPG's home care leaflet (Appendix 5B) as a square film.
   English: node work/build.cjs      writes this project (video/dengue-home), reads work/timing-en.json
   Malay:   node work/build.cjs ms   writes ../dengue-home-ms, reads work/timing-ms.json
   The voice is the clock: timing-<lang>.json holds the read-aloud narration (the same take the app plays) and the start of each
   line as [seconds, section, element] (section 0 the title, then each group; a group's elements are [heading, paragraph if any,
   ...items]). Every line of the leaflet comes on screen as it is read, word for word as printed. Run from video/dengue-home. */
const fs = require('fs'), path = require('path');
const LANG = process.argv.includes('ms') ? 'ms' : 'en';
const ROOT = path.resolve(__dirname, '..');
const OUT = LANG === 'en' ? ROOT : path.resolve(ROOT, '..', 'dengue-home-ms');
const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'leaflet.json'), 'utf8')), D = L[LANG];
const T = JSON.parse(fs.readFileSync(path.join(__dirname, `timing-${LANG}.json`), 'utf8'));
const W = 1080, H = 1080, LEAD = 2.2, TAIL = 0.9, ENDCARD = 7.8;
const r3 = x => Math.round(x * 1000) / 1000;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* film time of a line: section s, element e */
const at = (s, e) => { const l = T.lines.find(x => x[1] === s && x[2] === e); if (!l) throw new Error(`no line ${s}.${e}`); return r3(LEAD + l[0]); };
const VO_END = r3(LEAD + T.dur), END_AT = r3(VO_END + TAIL), FILM = r3(END_AT + ENDCARD);
const UI = {en:{source:'Source', guide:'Green Zone MO Guide', cpg:'Dengue CPG, 4th edition · Appendix 5B'},
            ms:{source:'Sumber', guide:'Green Zone MO Guide', cpg:'CPG Denggi, edisi ke-4 · Lampiran 5B'}}[LANG];

/* Stroke icons on a 24 grid, stroke 2, as in the app (bed, syringe, lungs, abdomen, droplet and stop are the app's own) */
const IC = {
  cup:'<path d="M5 7h12l-1.3 11.2A2 2 0 0 1 13.7 20H8.3a2 2 0 0 1-2-1.8z"/><path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5h-2"/><path d="M6.4 11.5h10.2"/>',
  pill:'<path d="M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7z"/><path d="m8.5 8.5 7 7"/>',
  bed:'<path d="M3 18.5v-11M3 14.5h18v4M21 14.5V12a3 3 0 0 0-3-3h-7v5.5"/><circle cx="7" cy="11.5" r="1.8"/>',
  thermo:'<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v7.5"/>',
  hosp:'<path d="M4 20.5V8.5l8-4.5 8 4.5v12"/><path d="M2.5 20.5h19"/><path d="M12 8.5v5M9.5 11h5"/><path d="M10 20.5v-3.5h4v3.5"/>',
  cal:'<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="m9 15 2 2 4-4"/>',
  spray:'<path d="M8 9.5h7v10.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/><path d="M9.5 9.5v-3h4v3M11.5 6.5v-2h3"/><path d="M18 5h.01M20 7h.01M18 9h.01M20.5 3.8h.01"/>',
  syringe:'<path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><path d="m4 20 2.4-2.4M10 10.5l3.5 3.5"/>',
  leaf:'<path d="M5 19c0-8 5.5-14 15-14 0 9.5-6 15-14 15"/><path d="M5 19l8-8"/>',
  hand:'<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.8-2.4L3.6 14.8a1.6 1.6 0 0 1 2.4-2.1L8 14.5"/>',
  down:'<path d="M3.5 7.5l6 6 4-4 7 7"/><path d="M14.5 16.5h6v-6"/>',
  abdomen:'<path d="M7 3.5c0 3.2-1.6 4.8-1.6 8.5S7 20.5 7 20.5M17 3.5c0 3.2 1.6 4.8 1.6 8.5S17 20.5 17 20.5"/><path d="M12 7.5v9.5M8 12.2h8"/>',
  vomit:'<circle cx="10" cy="10" r="6.5"/><path d="M8 8.8h.01M12 8.8h.01M8.5 12.8h3"/><path d="M17.5 15s2 2.2 2 3.6a2 2 0 0 1-4 0c0-1.4 2-3.6 2-3.6z"/>',
  battery:'<rect x="3" y="7.5" width="16" height="9" rx="2"/><path d="M21 10.5v3M6.5 10.5v3"/>',
  lungs:'<path d="M12 4v8"/><path d="M12 12c-.8 1.2-2 1.8-3.4 1.8M12 12c.8 1.2 2 1.8 3.4 1.8"/><path d="M8.7 6.6C6.3 7.2 4 10.6 4 15.2 4 17.8 5 19.5 7 19.5c2.6 0 3.6-1.6 3.6-4.2V9.5"/><path d="M15.3 6.6c2.4.6 4.7 4 4.7 8.6 0 2.6-1 4.3-3 4.3-2.6 0-3.6-1.6-3.6-4.2V9.5"/>',
  dizzy:'<path d="M12 12a1.5 1.5 0 1 1 1.5-1.5 3 3 0 1 1-3-3 4.5 4.5 0 1 1-4.5 4.5 6 6 0 1 1 6 6"/>',
  drop:'<path d="M12 3.5s6 6.4 6 10.9a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/><path d="M9.4 14.6a2.6 2.6 0 0 0 2.6 2.6"/>',
  urine:'<path d="M9 4s-4.5 4.8-4.5 8.2a4.5 4.5 0 0 0 9 0C13.5 8.8 9 4 9 4z"/><path d="M18 6v12M15 15l3 3 3-3"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  stop:'<path d="M8.3 3.5h7.4l4.8 4.8v7.4l-4.8 4.8H8.3l-4.8-4.8V8.3z"/><path d="M12 8v5M12 16.2h.01"/>',
  ban:'<circle cx="12" cy="12" r="9.5"/><path d="m5.3 5.3 13.4 13.4"/>'
};
const svg = (k, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
/* One picture per item, in the leaflet's order (the same in both languages) */
const PICS = [['cup', 'pill', 'bed', 'thermo', 'hosp', 'cal', 'spray'], ['pill', 'leaf', 'syringe', 'hand'], ['down', 'abdomen', 'vomit', 'battery', 'lungs', 'dizzy', 'drop', 'urine']];
const JEWEL = ['emerald', 'amber', 'garnet'], HEX = {emerald:'#0d7049', amber:'#b8741a', garnet:'#a52234'};
const fit = t => t.length <= 48 ? 70 : t.length <= 100 ? 58 : t.length <= 150 ? 52 : 48;

const CSS = `
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-700-latin.woff2') format('woff2');font-weight:700;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-800-latin.woff2') format('woff2');font-weight:800;font-style:normal;font-display:block}
@font-face{font-family:'Figtree';src:url('assets/fonts/figtree-900-latin.woff2') format('woff2');font-weight:900;font-style:normal;font-display:block}
:root, #root{
  --ink:#0f1a15; --ink-2:#26352e; --muted:#53635b; --line:#dbe2de; --surface:#ffffff; --surface-2:#f5f7f6;
  --emerald-1:#0d7049; --emerald-2:#0a5a3b; --emerald-3:#063d28; --mint:#43dd8c;
  --amber-1:#b8741a; --amber-2:#8f5510; --amber-3:#5e3608; --gold:#d8b46a;
  --garnet-1:#a52234; --garnet-2:#7e1626; --garnet-3:#560d19; --garnet-soft:#fbe3e6;
  --grain:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .1 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>");
}
#root, #root *{box-sizing:border-box}
#root{font-family:'Figtree',sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
#root h1,#root h2,#root p,#root ul{margin:0;padding:0}
.ic{display:block;width:100%;height:100%}
.jw{color:#fff;background:radial-gradient(120% 85% at 0 0,rgba(255,255,255,.16),transparent 55%),var(--grain),linear-gradient(150deg,var(--j1),var(--j2) 55%,var(--j3));background-size:auto,180px 180px,auto;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.16),0 18px 30px -16px var(--j3)}
.j-emerald{--j1:var(--emerald-1);--j2:var(--emerald-2);--j3:var(--emerald-3)}
.j-amber{--j1:var(--amber-1);--j2:var(--amber-2);--j3:var(--amber-3)}
.j-garnet{--j1:var(--garnet-1);--j2:var(--garnet-2);--j3:var(--garnet-3)}
.hd{position:absolute;left:108px;top:84px;right:108px;height:96px;display:flex;align-items:center;gap:24px;color:#fff}
.hd .disc{width:88px;height:88px;border-radius:28px;padding:20px;flex:none}
.hd h2{font:800 60px/1.05 'Figtree';letter-spacing:-.02em;text-shadow:0 2px 18px rgba(0,0,0,.45)}
.hd.two{top:64px;height:124px}
.hd.two h2{font-size:50px;line-height:1.06;text-wrap:balance}
.card{position:absolute;left:56px;top:216px;width:968px;height:808px;border-radius:44px;background:var(--surface);box-shadow:0 2px 6px rgba(0,0,0,.18),0 50px 80px -40px rgba(0,0,0,.7),inset 0 0 0 1.5px var(--line);overflow:hidden}
.it{position:absolute;left:52px;top:44px;width:864px;height:640px;display:flex;flex-direction:column;justify-content:center}
.it .disc{width:112px;height:112px;border-radius:34px;padding:26px;position:relative}
.it .disc .ban{position:absolute;inset:14px;width:auto;height:auto;color:#fff;opacity:.92}
.it p{margin-top:34px !important;font-weight:700;line-height:1.24;letter-spacing:-.01em;color:var(--ink)}
.it p .no{color:var(--garnet-1);font-weight:900}
.dots{position:absolute;left:52px;bottom:48px;display:flex;gap:12px;align-items:center}
.dots i{display:block;width:18px;height:18px;border-radius:9px;background:var(--line)}
`;
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
const enter = (sel, t, extra = '') => `  tl.fromTo("${sel}",{y:40,rotation:1.5,opacity:0},{y:0,rotation:0,opacity:1,duration:.45,ease:"power3.out"${extra}},${r3(t)});`;
const leave = (sel, t) => `  tl.fromTo("${sel}",{y:0,opacity:1},{y:-24,opacity:0,duration:.3,ease:"power2.in",immediateRender:false},${r3(t)});`;
const pop = (sel, t) => `  tl.fromTo("${sel}",{scale:.6,opacity:0},{scale:1,opacity:1,duration:.32,ease:"back.out(2.2)"},${r3(t)});`;
const fade = (sel, t, a, b, d = .3) => `  tl.fromTo("${sel}",{opacity:${a}},{opacity:${b},duration:${d},ease:"power1.out",immediateRender:false},${r3(t)});`;

const scenes = [];
/* 0 · Title: the leaflet's own title over the mosquito; the voice reads it */
{
  const id = 's0', start = 0, end = r3(at(1, 0) - 0.45);
  const words = D.title.split(' ');
  const css = `#s0-t{position:absolute;left:108px;top:118px;width:820px;color:#fff;font:900 ${LANG === 'ms' ? 86 : 96}px/1.0 'Figtree';letter-spacing:-.035em;text-shadow:0 4px 30px rgba(0,0,0,.5)}
#s0-t span{display:inline-block;margin-right:.22em}${LANG === 'ms' ? ' #s0-t{text-wrap:balance}' : ''}
#s0-k{position:absolute;left:108px;top:${LANG === 'ms' ? 452 : 352}px;display:flex;align-items:center;gap:14px;padding:12px 22px 12px 14px;border-radius:999px;background:rgba(216,180,106,.16);box-shadow:inset 0 0 0 1.5px rgba(216,180,106,.55);color:#f3dfb4;font:700 32px/1 'Figtree'}
#s0-k i{display:block;width:30px;height:30px;border-radius:50%;background:var(--gold)}`;
  const html = `  <h1 id="s0-t">${words.map((w, i) => `<span id="s0-w${i}">${esc(w)}</span>`).join('')}</h1>
  <div id="s0-k"><i></i>${esc(UI.cpg)}</div>`;
  const js = words.map((_, i) => enter(`#s0-w${i}`, LEAD - 0.3 + i * 0.07));
  js.push(`  tl.fromTo("#s0-k",{x:-30,opacity:0},{x:0,opacity:1,duration:.45,ease:"power3.out"},0.5);`);
  js.push(leave('#s0-t', end - start - 0.4), leave('#s0-k', end - start - 0.4));
  scenes.push({id, start, end, html:scene(id, {css, html}, js)});
}
/* 1, 2 · What to do; What to avoid: the heading, then one item at a time as it is read, with a dot for each */
for (const s of [1, 2]) {
  const g = D.groups[s - 1], id = 's' + s, jw = JEWEL[s - 1];
  const start = r3(at(s, 0) - 0.45), end = r3(at(s + 1, 0) - 0.45), n = g.items.length;
  const items = g.items.map((t, i) => {
    const m = s === 2 ? t.match(/^(DO NOT|JANGAN)\b/) : null;
    const text = m ? `<span class="no">${esc(m[1])}</span>${esc(t.slice(m[1].length))}` : esc(t);
    return `  <div class="it" id="${id}-i${i}"><div class="disc jw j-${jw}" id="${id}-c${i}">${svg(PICS[s - 1][i])}${s === 2 ? svg('ban', 'ban') : ''}</div><p style="font-size:${fit(t)}px">${text}</p></div>`;
  }).join('\n');
  const css = `${g.items.map((_, i) => `#${id}-i${i}`).join(',')}{opacity:0}`;
  const html = `  <div class="hd${g.h.length > 24 ? ' two' : ''}" id="${id}-hd"><div class="disc jw j-${jw}">${svg(s === 1 ? 'check' : 'ban')}</div><h2>${esc(g.h)}</h2></div>
  <div class="card" id="${id}-card">
${items}
    <div class="dots">${g.items.map((_, i) => `<i id="${id}-d${i}"></i>`).join('')}</div>
  </div>`;
  const js = [enter(`#${id}-hd`, 0.3), enter(`#${id}-card`, 0.42)];
  g.items.forEach((_, i) => {
    const t = at(s, i + 1) - start, next = i + 1 < n ? at(s, i + 2) - start : end - start;
    js.push(`  tl.fromTo("#${id}-i${i}",{y:36,opacity:0},{y:0,opacity:1,duration:.45,ease:"power3.out"},${r3(t - 0.2)});`);
    js.push(pop(`#${id}-c${i}`, t - 0.15));
    js.push(`  tl.fromTo("#${id}-d${i}",{width:18,backgroundColor:"#dbe2de"},{width:54,backgroundColor:"${HEX[jw]}",duration:.35,ease:"power2.out"},${r3(t - 0.2)});`);
    if (i + 1 < n) {
      js.push(leave(`#${id}-i${i}`, next - 0.5));
      js.push(`  tl.fromTo("#${id}-d${i}",{width:54},{width:18,duration:.3,ease:"power2.inOut",immediateRender:false},${r3(next - 0.2)});`);
    }
  });
  js.push(leave(`#${id}-hd`, end - start - 0.35), leave(`#${id}-card`, end - start - 0.35));
  scenes.push({id, start, end, html:scene(id, {css, html}, js)});
}
/* 3 · Dengue warning signs: the paragraph as it is read, then its last sentence heads the signs, each added as it is read */
{
  const s = 3, g = D.groups[2], id = 's3', start = r3(at(3, 0) - 0.45), end = END_AT;
  const lead = g.p.split(/(?<=\.)\s+/).pop();
  const css = `#s3-p{position:absolute;left:52px;top:52px;width:864px;font:700 ${fit(g.p) - 2}px/1.28 'Figtree';color:var(--ink);opacity:0}
#s3-p b{color:var(--garnet-1);font-weight:900}
#s3-lh{position:absolute;left:52px;top:46px;width:864px;font:900 40px/1.18 'Figtree';color:var(--garnet-1);letter-spacing:-.01em;opacity:0}
#s3-ul{position:absolute;left:40px;top:160px;width:888px;list-style:none;display:flex;flex-direction:column;gap:4px}
#s3-ul li{display:flex;align-items:center;gap:16px;padding:6px 14px 6px 8px;border-radius:18px;font:700 33px/1.2 'Figtree';color:var(--ink);opacity:0}
#s3-ul li .mk{width:46px;height:46px;border-radius:15px;padding:10px;flex:none}`;
  const pHTML = esc(g.p).replace(esc(lead), `<b>${esc(lead)}</b>`);
  const html = `  <div class="hd${g.h.length > 24 ? ' two' : ''}" id="s3-hd"><div class="disc jw j-garnet">${svg('stop')}</div><h2>${esc(g.h)}</h2></div>
  <div class="card" id="s3-card">
    <p id="s3-p">${pHTML}</p>
    <p id="s3-lh">${esc(lead)}</p>
    <ul id="s3-ul">${g.items.map((t, i) => `<li id="s3-l${i}"><span class="mk jw j-garnet">${svg(PICS[2][i])}</span><span>${esc(t)}</span></li>`).join('')}</ul>
  </div>`;
  const js = [enter('#s3-hd', 0.3), enter('#s3-card', 0.42)];
  const tp = at(3, 1) - start, t0 = at(3, 2) - start;
  js.push(`  tl.fromTo("#s3-p",{y:36,opacity:0},{y:0,opacity:1,duration:.45,ease:"power3.out"},${r3(tp - 0.2)});`);
  js.push(leave('#s3-p', t0 - 0.75), fade('#s3-lh', t0 - 0.45, 0, 1, .35));
  g.items.forEach((_, i) => {
    const t = at(3, i + 2) - start;
    js.push(`  tl.fromTo("#s3-l${i}",{x:28,opacity:0},{x:0,opacity:1,duration:.4,ease:"power3.out"},${r3(t - 0.2)});`);
    js.push(`  tl.fromTo("#s3-l${i}",{backgroundColor:"rgba(251,227,230,0)"},{backgroundColor:"rgba(251,227,230,1)",duration:.3,ease:"power1.out",immediateRender:false},${r3(t - 0.2)});`);
    if (i + 1 < g.items.length) js.push(`  tl.fromTo("#s3-l${i}",{backgroundColor:"rgba(251,227,230,1)"},{backgroundColor:"rgba(251,227,230,0)",duration:.3,ease:"power1.inOut",immediateRender:false},${r3(at(3, i + 3) - start - 0.2)});`);
  });
  js.push(`  tl.fromTo("#s3-l${g.items.length - 1}",{backgroundColor:"rgba(251,227,230,1)"},{backgroundColor:"rgba(251,227,230,0)",duration:.4,ease:"power1.inOut",immediateRender:false},${r3(end - start - 0.9)});`);
  js.push(leave('#s3-hd', end - start - 0.35), `  tl.fromTo("#s3-card",{y:0,opacity:1},{y:60,opacity:0,duration:.45,ease:"power2.in",immediateRender:false},${r3(end - start - 0.4)});`);
  scenes.push({id, start, end, html:scene(id, {css, html}, js)});
}
/* 4 · End card: the source and the MaHTAS acknowledgement, over the mosquito; music only */
{
  const id = 's4', start = END_AT, end = FILM;
  const css = `#s4-box{position:absolute;left:80px;right:80px;bottom:80px;padding:30px 28px 32px;border-radius:32px;background:rgba(10,7,4,.62);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.08);color:#fff}
#s4-k{font:800 30px/1 'Figtree';letter-spacing:.02em;color:#f3dfb4;opacity:0}
#s4-src{margin-top:16px !important;font:700 36px/1.3 'Figtree';text-shadow:0 2px 18px rgba(0,0,0,.6);opacity:0}
#s4-gz{margin-top:30px !important;display:flex;align-items:center;gap:16px;font:800 34px/1 'Figtree';opacity:0}
#s4-gz i{display:block;width:44px;height:44px;border-radius:14px}`;
  const html = `  <div id="s4-box"><p id="s4-k">${esc(UI.source)}</p><p id="s4-src">${esc(L.src)}</p><p id="s4-gz"><i class="jw j-emerald"></i>${esc(UI.guide)}</p></div>`;
  const js = [fade('#s4-k', 0.35, 0, 1, .4), enter('#s4-src', 0.5), enter('#s4-gz', 0.9)];
  scenes.push({id, start, end, html:scene(id, {css, html}, js)});
}

/* Root: the dcpg loop (darkened by a scrim that deepens while the cards are up), the scenes, the voice and the bed */
const sStart = at(1, 0) - 0.6;
const index = `<!doctype html>
<html lang="${LANG}" data-resolution="square">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${W}, height=${H}" />
    <title>Dengue at home${LANG === 'ms' ? ' (Bahasa Melayu)' : ''}</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
#root{background:#0b0805}
#bgw{position:absolute;left:0;top:0;width:${W}px;height:${H}px;overflow:hidden}
#bg{position:absolute;left:0;top:0;width:${W}px;height:${H}px;object-fit:cover}
#scrim{position:absolute;left:0;top:0;width:${W}px;height:${H}px;background:linear-gradient(180deg,rgba(8,6,4,.86) 0%,rgba(8,6,4,.42) 46%,rgba(8,6,4,.78) 100%)}
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
  fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify({id:'dengue-home-ms', name:'dengue-home-ms', createdAt:new Date(0).toISOString()}, null, 2));
}
fs.writeFileSync(path.join(OUT, 'index.html'), index);
for (const c of scenes) fs.writeFileSync(path.join(OUT, 'compositions', c.id + '.html'), c.html);
console.log(`${LANG}: ${FILM} s (${Math.round(FILM * 30)} frames); voice ${LEAD}–${VO_END} s; end card ${END_AT}–${FILM} s; scenes ${scenes.map(c => `${c.id} ${c.start}–${c.end}`).join(', ')}`);
