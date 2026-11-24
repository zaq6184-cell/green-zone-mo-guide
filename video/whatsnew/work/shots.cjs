/* The guide's own screens for the What's new film: the built app (app/, served by `PORT=8790 node src/serve.js`), a phone at
   390 x 844 CSS px and 2x, by day, motion allowed, no service worker. Writes assets/shots/<name>.png (780 px wide) and
   work/rects.json: for each shot, the CSS-px boxes the film taps or lifts out ({x, y, w, h} in the shot's own coordinates).
   Nothing is typed but the search word NBM. The guide holds no patient, so no screen can show one. */
const { chromium } = require('../../../src/node_modules/playwright');
const fs = require('fs'), path = require('path');
const BASE = 'http://localhost:8790/', OUT = path.join(__dirname, '..', 'assets', 'shots');
const rects = {};
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light', reducedMotion: 'no-preference', serviceWorkers: 'block' });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const go = async (h, ms = 2200) => { await p.goto(BASE + h); await p.waitForTimeout(ms); };
  const box = (s, full) => p.evaluate(([s, full]) => { const e = typeof s === 'string' ? document.querySelector(s) : null; if (!e) return null; const r = e.getBoundingClientRect(); return { x: Math.round(r.left), y: Math.round(r.top + (full ? scrollY : 0)), w: Math.round(r.width), h: Math.round(r.height) }; }, [s, full]);
  const boxText = (sel, txt) => p.evaluate(([sel, txt]) => { const e = [...document.querySelectorAll(sel)].find(e => e.offsetParent && e.innerText.trim().startsWith(txt)); if (!e) return null; const r = e.getBoundingClientRect(); return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) }; }, [sel, txt]);
  const shot = async (n, rs, clip) => { await p.screenshot({ path: path.join(OUT, n + '.png'), ...(clip ? { fullPage: true, clip } : {}) }); rects[n] = rs || {}; console.log('shot', n, JSON.stringify(rects[n])); };

  // Home, then the pick-up card after opening a pathway's first question, then that step again from the card
  await go('#home'); await shot('home', { search: await box('.hs, #hsearch, .home-search') });
  await go('#renal-colic'); await shot('step');
  await go('#home'); await shot('home-pickup', { card: await box('#pickup') });
  // The leaflet films: the film card low on the screen, so no leaflet text shows below it
  for (const [h, n] of [['#dengue-cpg', 'dengue-film'], ['#cancer-pain-cpg', 'cancer-film']]) {
    await go(h); await p.click('button.t-advice'); await p.waitForTimeout(900);
    await p.evaluate(() => { const f = document.querySelector('[data-film]'); const c = f.closest('.film, .lf-film, button, a, div') || f; const r = c.getBoundingClientRect(); window.scrollTo(0, r.bottom + scrollY - 700); });
    await p.waitForTimeout(900);
    await shot(n, { film: await p.evaluate(() => { let e = document.querySelector('[data-film]'); while (e.parentElement && e.getBoundingClientRect().width < 300) e = e.parentElement; const r = e.getBoundingClientRect(); return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) }; }), listen: await boxText('div, section', 'Listen in English') });
  }
  // The first-shift intro: Listen, English, BM
  await go('#intro'); await shot('intro', { say: await box('.intro-say') });
  // Shift tools, a tall picture to pan down to the Antidotes and Abbreviations tiles
  await go('#tools'); const at = await box('a.tile[href="#antidotes"]', true);
  const y0 = Math.max(0, at.y - 1000), H = 1600;
  await shot('tools-pan', { antidotes: { ...at, y: at.y - y0 }, abbr: (b => ({ ...b, y: b.y - y0 }))(await box('a.tile[href="#abbreviations"]', true)), top: y0, h: H }, { x: 0, y: y0, width: 390, height: H });
  await go('#antidotes'); await shot('antidotes', { banner: await box('.ax-hero, .phx-hero, .run-hero, .lk-hero') });
  // An abbreviation in search (the list loads on the first short search)
  await go('#home', 1500); await go('#search', 1200); await p.keyboard.type('NBM', { delay: 140 });
  await p.waitForSelector('.kbc', { timeout: 15000 }); await p.waitForTimeout(800);
  await p.evaluate(() => document.querySelector('.kbc').scrollIntoView({ block: 'center' })); await p.waitForTimeout(800);
  await shot('search-nbm', { card: await box('.kbc'), field: await box('#gq, .pal input, input[type=search]') });
  // Reading X-rays: the wrist film with its outlines, then Scaphoid tapped
  await go('#xray-guide--wrj', 3500);
  await p.evaluate(() => { const f = document.querySelector('figure.xf'); window.scrollTo(0, f.getBoundingClientRect().top + scrollY - 90); }); await p.waitForTimeout(1500);
  const sc = await boxText('figure.xf button', '3'); await shot('xray', { film: await box('figure.xf img, figure.xf svg, figure.xf canvas'), scaphoid: sc });
  await p.click('figure.xf button:has-text("Scaphoid")'); await p.waitForTimeout(1200); await shot('xray-scaphoid', { scaphoid: sc });
  // The calculators hub, and What's new
  await go('#calc'); await shot('calc', { groups: await box('.cgrid, .calc-groups, .bento') });
  await go('#new'); await shot('new');
  fs.writeFileSync(path.join(__dirname, 'rects.json'), JSON.stringify(rects, null, 1));
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
