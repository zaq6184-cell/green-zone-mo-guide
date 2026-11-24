/* Checks one advice film's words: node work/check-words.cjs <key> [ms]   (run from video/advice-home, after work/build.cjs)
   Every block marked data-w must be the advice line it names, word for word as the app shows it (work/advice.json); every line
   must be on screen exactly once; the only other words are the data-x extras, each one of the allowed: the entry's title,
   "Discharge advice" (or the Malay heading), the source as the app names it, the patient page's source sentence, the label
   "Source" and the guide's name. Nothing else may be on screen. */
const fs = require('fs'), path = require('path');
const KEY = process.argv[2], LANG = process.argv.includes('ms') ? 'ms' : 'en';
const ROOT = path.resolve(__dirname, '..'), OUT = path.join(ROOT, LANG === 'en' ? KEY : `${KEY}-ms`);
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advice.json'), 'utf8')), F = A.films[KEY], WD = A.words, LINES = F[LANG];
const allowed = new Set([F.title, LANG === 'ms' ? WD.chipMs : 'Discharge advice', F.meta, LANG === 'ms' ? 'Sumber' : 'Source', 'Green Zone MO Guide',
  ...(F.ebook ? [LANG === 'ms' ? WD.srcMs : WD.srcEn] : [])]);
(async () => {
  const { chromium } = require(path.resolve(ROOT, '..', '..', 'src', 'node_modules', 'playwright'));
  const b = await chromium.launch(), pg = await b.newPage();
  const shown = [], extras = [], stray = [];
  for (const f of fs.readdirSync(path.join(OUT, 'compositions')).filter(f => f.endsWith('.html'))) {
    const inner = fs.readFileSync(path.join(OUT, 'compositions', f), 'utf8').replace(/^<template>/, '').replace(/<\/template>\s*$/, '').replace(/<script>[\s\S]*?<\/script>/g, '').replace(/<style>[\s\S]*?<\/style>/g, '');
    const r = await pg.evaluate(html => {
      document.body.innerHTML = html;
      const w = [...document.querySelectorAll('[data-w]')].map(e => [+e.dataset.w, e.textContent]);
      const x = [...document.querySelectorAll('[data-x]')].map(e => e.textContent);
      document.querySelectorAll('[data-w],[data-x],svg').forEach(e => e.remove());
      return {w, x, rest:document.body.textContent.replace(/\s+/g, ' ').trim()};
    }, inner);
    shown.push(...r.w.map(([i, t]) => [f, i, t])); extras.push(...r.x.map(t => [f, t])); if (r.rest) stray.push([f, r.rest]);
  }
  await b.close();
  const bad = shown.filter(([, i, t]) => LINES[i] !== t), miss = LINES.map((t, i) => [i, shown.filter(s => s[1] === i).length]).filter(([, n]) => n !== 1);
  const badx = extras.filter(([, t]) => !allowed.has(t));
  console.log(`${KEY} ${LANG}: ${shown.length} lines shown of ${LINES.length}; extras: ${[...new Set(extras.map(e => e[1]))].join(' | ')}`);
  for (const [f, i, t] of bad) console.log(`NOT LINE ${i + 1} AS THE APP SHOWS IT (${f}): ${t}`);
  for (const [i, n] of miss) console.log(`LINE ${i + 1} SHOWN ${n} TIMES`);
  for (const [f, t] of badx) console.log(`EXTRA NOT ALLOWED (${f}): ${t}`);
  for (const [f, t] of stray) console.log(`OTHER TEXT (${f}): ${t}`);
  const ok = !bad.length && !miss.length && !badx.length && !stray.length;
  console.log(ok ? 'every line word for word, each once, nothing else' : 'PROBLEMS');
  process.exit(ok ? 0 : 1);
})();
