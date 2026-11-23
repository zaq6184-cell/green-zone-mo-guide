/* Checks that every line the film shows is in the leaflet word for word, and that nothing else is on screen.
   node work/check-words.cjs [ms]   (run from video/cancer-pain-home, after work/build.cjs)
   Each scene file is loaded in Chromium; every text block marked data-w must equal a leaflet line exactly (title, heading,
   paragraph, item, or the source line L.src), every leaflet line must be shown exactly once, and the only other words allowed
   are the data-x extras (the source label, the chip naming the CPG, the guide's name). */
const fs = require('fs'), path = require('path');
const LANG = process.argv.includes('ms') ? 'ms' : 'en';
const ROOT = path.resolve(__dirname, '..'), OUT = LANG === 'en' ? ROOT : path.resolve(ROOT, '..', 'cancer-pain-home-ms');
const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'leaflet.json'), 'utf8')), D = L[LANG];
const want = [D.title, ...D.groups.flatMap(g => [g.h, ...(g.p ? [g.p] : []), ...g.items]), L.src];
(async () => {
  const { chromium } = require(path.resolve(ROOT, '..', '..', 'src', 'node_modules', 'playwright'));
  const b = await chromium.launch(), pg = await b.newPage();
  const shown = [], extras = [], stray = [];
  const files = fs.readdirSync(path.join(OUT, 'compositions')).filter(f => /^s\d+\.html$/.test(f)).sort((a, c) => parseInt(a.slice(1)) - parseInt(c.slice(1)));
  for (const f of files) {
    const src = fs.readFileSync(path.join(OUT, 'compositions', f), 'utf8');
    const inner = src.replace(/^<template>/, '').replace(/<\/template>\s*$/, '').replace(/<script>[\s\S]*?<\/script>/g, '').replace(/<style>[\s\S]*?<\/style>/g, '');
    const r = await pg.evaluate(html => {
      document.body.innerHTML = html;
      const w = [...document.querySelectorAll('[data-w]')].map(e => e.textContent);
      const x = [...document.querySelectorAll('[data-x]')].map(e => e.textContent);
      document.querySelectorAll('[data-w],[data-x],svg').forEach(e => e.remove());
      return {w, x, rest:document.body.textContent.replace(/\s+/g, ' ').trim()};
    }, inner);
    shown.push(...r.w.map(t => [f, t])); extras.push(...r.x); if (r.rest) stray.push([f, r.rest]);
  }
  await b.close();
  const bad = shown.filter(([, t]) => !want.includes(t));
  const count = t => shown.filter(([, s]) => s === t).length;
  const miss = want.filter(t => count(t) !== 1);
  console.log(`${LANG}: ${shown.length} blocks shown, ${want.length} leaflet lines (with the source line); extras: ${extras.join(' | ')}`);
  for (const [f, t] of bad) console.log(`NOT IN THE LEAFLET (${f}): ${t}`);
  for (const t of miss) console.log(`SHOWN ${count(t)} TIMES: ${t}`);
  for (const [f, t] of stray) console.log(`OTHER TEXT (${f}): ${t}`);
  const ok = !bad.length && !miss.length && !stray.length;
  console.log(ok ? 'every line word for word, each once, nothing else' : 'PROBLEMS');
  process.exit(ok ? 0 : 1);
})();
