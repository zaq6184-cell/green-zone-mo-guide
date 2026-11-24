/* Look around the built guide before choosing the shots (prints what each page shows at phone size). */
const { chromium } = require('../../../src/node_modules/playwright');
const BASE = 'http://localhost:8790/';
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light', reducedMotion: 'no-preference', serviceWorkers: 'block' });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const show = async (h, sel) => {
    await p.goto(BASE + h); await p.waitForTimeout(1800);
    const r = await p.evaluate(s => [...document.querySelectorAll(s)].filter(e => e.offsetParent).slice(0, 12).map(e => { const b = e.getBoundingClientRect(); return `${e.tagName}.${(e.className || '').toString().slice(0, 30)} y=${Math.round(b.top + scrollY)} h=${Math.round(b.height)} :: ${(e.innerText || '').replace(/\s+/g, ' ').slice(0, 70)}`; }), sel);
    console.log('\n== ' + h + ' [' + sel + ']\n' + r.join('\n'));
  };
  await show('#renal-colic', '.run h2, .opts button, button.opt');
  await show('#home', '#pickup, #pickup *:is(b,small), .tile h3, .tile b');
  await show('#dengue-cpg', '.ptabs button, [role=tab], .ptab');
  await show('#intro', '.intro-say button, .intro h1, .intro h2, button');
  await show('#tools', '.tile, a.tile');
  await show('#antidotes', 'h1, .ax-row, .ax-item, details summary, .ax-card');
  await show('#xray-guide--wrj', 'figure, .xf, .xf-key button, h2');
  await show('#calc', 'h1, .tile, .calc-card, a[href^="#calc-"]');
  await show('#new', 'h1, h2, h3, .v8 li, article');
  for (const q of ['OPD', 'ICU', 'BP', 'MC', 'HPE', 'TCA']) {
    await p.goto(BASE + '#search'); await p.waitForTimeout(800);
    await p.keyboard.type(q, { delay: 60 }); await p.waitForTimeout(1500);
    const t = await p.evaluate(() => { const k = document.querySelector('.kbc'); return k ? 'KB: ' + k.innerText.replace(/\s+/g, ' ').slice(0, 120) : 'no card'; });
    console.log('search', q, '->', t);
  }
  console.log('errors', errs);
  await b.close();
})();
