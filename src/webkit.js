/* The guide in Safari's engine (17 Nov 2026): Playwright's WebKit at iPhone 13 size by day and night, and at iPhone SE size by
   day. It opens each main view and looks for errors, a view that does not show and sideways scroll, then works through the step
   runner, the thumb bar, search, the drug card, a reminder, a pin and an X-ray film. Screenshots go to shots/webkit/.
   It tests the engine, not a real iPhone (fonts, for one, draw thinner in the engine's Windows build), so a phone check is still needed.
   WebKit lives in C:\Users\user\tools\ms-playwright (installed there on 17 Nov 2026, outside the Claude app's own storage):
     set PLAYWRIGHT_BROWSERS_PATH to that folder (this script does so if it is not set), then run: npm run webkit
   It starts its own copy of serve.js on PORT (default 8793). */
process.env.PLAYWRIGHT_BROWSERS_PATH = process.env.PLAYWRIGHT_BROWSERS_PATH || 'C:\\Users\\user\\tools\\ms-playwright';
const pw = require('playwright'), path = require('path'), fs = require('fs'), {spawn} = require('child_process');
const PORT = Number(process.env.PORT) || 8793, URL = `http://localhost:${PORT}/`, OUT = path.join(__dirname, 'shots', 'webkit');
fs.mkdirSync(OUT, {recursive: true});
const VIEWS = ['#home', '#pathways', '#rules', '#tools', '#calc', '#calc-news2', '#calc-dengue', '#calc-vitals', '#numbers', '#links', '#pharmacy', '#dilution',
  '#renal-colic', '#dengue-cpg', '#asthma--m1', '#xray-guide--wrj', '#abdo-handbook', '#code-blue', '#guidelines', '#new', '#about', '#tour', '#quiz', '#journey', '#intro', '#poster', '#install', '#share', '#search', '#pt-dengue-cpg'];
(async () => {
  const srv = spawn(process.execPath, [path.join(__dirname, 'serve.js')], {env: {...process.env, PORT: String(PORT)}, stdio: 'ignore'});
  await new Promise(r => setTimeout(r, 800));
  let problems = 0;
  const b = await pw.webkit.launch();
  try {
    for (const [dev, scheme] of [['iPhone 13', 'light'], ['iPhone 13', 'dark'], ['iPhone SE', 'light']]) {
      const ctx = await b.newContext({...pw.devices[dev], colorScheme: scheme, serviceWorkers: 'block'});
      const p = await ctx.newPage(), errs = [], bad = [], shots = dev === 'iPhone 13';
      p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text().slice(0, 160)); });
      await p.goto(URL + '#home', {waitUntil: 'load'}); await p.waitForTimeout(900);
      for (const v of VIEWS) {
        const before = errs.length;
        await p.evaluate(h => { location.hash = h; }, v); await p.waitForTimeout(v === '#tour' ? 900 : 550);
        const r = await p.evaluate(() => ({sw: document.documentElement.scrollWidth, iw: innerWidth, vis: [...document.querySelectorAll('.view')].some(x => !x.hidden && x.offsetHeight)}));
        if (r.sw > r.iw) bad.push(`${v}: sideways scroll, ${r.sw} px in ${r.iw}`);
        if (!r.vis) bad.push(`${v}: no view shown`);
        if (errs.length > before) bad.push(`${v}: ${errs.slice(before).join(' / ')}`);
        if (shots) await p.screenshot({path: path.join(OUT, `${scheme}-${v.slice(1)}.png`)});
      }
      await p.evaluate(() => { location.hash = '#renal-colic'; }); await p.waitForTimeout(500);
      await p.tap('#cur button.opt'); await p.waitForTimeout(400); await p.tap('#cur button.opt'); await p.waitForTimeout(400);
      if (await p.evaluate(() => state.trail.length) !== 2) bad.push('answering two questions did not move on');
      await p.tap('.thumbbar [data-map]'); await p.waitForTimeout(500);
      if (await p.evaluate(() => document.querySelector('#pmap').hidden)) bad.push('the thumb bar\'s map did not open');
      await p.tap('#pmclose'); await p.waitForTimeout(300);
      await p.evaluate(() => openPal()); await p.fill('#gq', 'fell and hit head'); await p.waitForTimeout(2500);
      if (!(await p.evaluate(() => !!palLinks()[0]))) bad.push('search found nothing for "fell and hit head"');
      await p.fill('#gq', 'adrenaline'); await p.waitForTimeout(500);
      if (!(await p.evaluate(() => !!document.querySelector('.drugc')))) bad.push('no drug card for adrenaline');
      if (shots) await p.screenshot({path: path.join(OUT, `${scheme}-drug-card.png`)});
      await p.keyboard.press('Escape'); await p.waitForTimeout(200);
      await p.evaluate(() => { location.hash = '#asthma--m1'; }); await p.waitForTimeout(500);
      await p.tap('[data-remind]'); await p.waitForTimeout(300);
      await p.evaluate(() => { rems[0].end = Date.now() - 1; remTick(); }); await p.waitForTimeout(300);
      if (!(await p.evaluate(() => document.querySelector('#rmd').classList.contains('is-due')))) bad.push('the reminder did not come due');
      if (shots) await p.screenshot({path: path.join(OUT, `${scheme}-reminder-due.png`)});
      await p.evaluate(() => { rems = []; remDraw(); });
      await p.evaluate(() => { location.hash = '#calc-news2'; }); await p.waitForTimeout(500);
      await p.tap('#calcbox [data-pin]'); await p.waitForTimeout(200);
      await p.evaluate(() => { location.hash = '#home'; }); await p.waitForTimeout(500);
      if (!(await p.evaluate(() => !document.querySelector('#pins').hidden))) bad.push('the pin did not show on home');
      await p.evaluate(() => { location.hash = '#xray-guide--wrj'; }); await p.waitForTimeout(900);
      if (!(await p.evaluate(() => { const i = document.querySelector('.xf img'); return !!i && i.naturalWidth > 0; }))) bad.push('the wrist film did not load');
      console.log(`WebKit ${dev}, ${scheme}: ${bad.length ? bad.length + ' problem(s)' : 'no problems'}`); bad.forEach(x => console.log('  - ' + x));
      problems += bad.length;
      await ctx.close();
    }
  } finally { await b.close(); srv.kill(); }
  console.log(problems ? problems + ' problem(s)' : 'Safari\'s engine: no problems'); console.log('screenshots: ' + OUT);
  process.exitCode = problems ? 1 : 0;
})();
