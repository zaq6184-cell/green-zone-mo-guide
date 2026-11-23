#!/usr/bin/env node
/* Accessibility check (23 Nov 2026, Krishna's "Build 1 to 5", 3): axe-core's WCAG 2.2 A and AA rules on the guide's main views,
   at phone size (390 x 844) by day and by night, after each view has been opened as a person would. It starts its own
   serve.js and finds axe-core in C:\Users\user\tools\axe (npm install axe-core@4.10.3 there; not a dependency of the guide).
   Prints each rule broken, how many elements, and where; "no violations" when there are none. The parts axe cannot judge
   (text over a picture or a moving tile, for example) are counted as "to check by eye", not as passes.
   Usage: node a11y.js [port, default 8799] [--all to list every element] */
const path = require('path'), fs = require('fs'), { spawn } = require('child_process');
const { chromium } = require('playwright');
const AXE = path.join('C:\\Users\\user\\tools\\axe\\node_modules\\axe-core\\axe.min.js');
if (!fs.existsSync(AXE)) { console.log('axe-core is missing: run "npm install axe-core@4.10.3" in C:\\Users\\user\\tools\\axe'); process.exit(1); }
const port = Number(process.argv.find(a => /^\d+$/.test(a))) || 8799, ALL = process.argv.includes('--all');
const VIEWS = [
  ['home'], ['pathways'], ['renal-colic'], ['renal-colic', 'answer'], ['rules'], ['gz-rules--ivab'], ['tools'], ['calc'], ['calc-news2'], ['calc-dfluid'],
  ['numbers'], ['links'], ['pharmacy'], ['dilution'], ['antibiotics'], ['antidotes'], ['abbreviations'], ['guidelines'], ['dengue-cpg'], ['dengue-cpg', 'tabs'],
  ['xray-guide--ank'], ['abdo-handbook'], ['code-blue'], ['journey'], ['tour'], ['quiz'], ['new'], ['about'], ['install'], ['share'], ['intro'],
  ['pt-dengue-cpg'], ['search', 'palette'], ['home', 'settings'], ['home', 'menu']
];
const srv = spawn(process.execPath, [path.join(__dirname, 'serve.js')], {env:{...process.env, PORT:String(port)}, stdio:'ignore'});
const wait = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  await wait(1200);
  const b = await chromium.launch(), axe = fs.readFileSync(AXE, 'utf8');
  const found = new Map(), eye = new Map(); let pages = 0;
  for (const theme of ['light', 'dark']) {
    const ctx = await b.newContext({viewport:{width:390, height:844}, deviceScaleFactor:2, isMobile:true, hasTouch:true, colorScheme:theme, reducedMotion:'reduce', serviceWorkers:'block'});
    const p = await ctx.newPage();
    for (const [h, act] of VIEWS) {
      await p.goto(`http://127.0.0.1:${port}/#${h}`); await p.waitForFunction(() => typeof MORE !== 'undefined' && MORE && typeof curView !== 'undefined' && curView, null, {timeout:20000}); await p.waitForTimeout(400);
      if (act === 'answer') await p.click('#v-run .opts button, #v-run button.opt').catch(() => {});
      if (act === 'tabs') await p.click('#ptab [role="tab"]:nth-child(2)').catch(() => {});
      if (act === 'palette') { await p.fill('#gq', 'dengue'); await p.waitForTimeout(400); }
      if (act === 'settings') await p.evaluate(() => openSettings());
      if (act === 'menu') await p.click('#menubtn').catch(() => {});
      await p.waitForTimeout(300);
      await p.addScriptTag({content:axe});
      const r = await p.evaluate(async () => {
        const res = await axe.run(document, {runOnly:{type:'tag', values:['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, resultTypes:['violations', 'incomplete']});
        const pick = l => l.map(v => ({id:v.id, impact:v.impact, help:v.help, nodes:v.nodes.filter(n => !n.target.join(' ').match(/^(\.view\[hidden\]|\[hidden\])/)).map(n => n.target.join(' ') + (n.failureSummary ? ' :: ' + n.failureSummary.split('\n').slice(1, 2).join(' ').trim() : ''))})).filter(v => v.nodes.length);
        return {v:pick(res.violations), i:pick(res.incomplete)};
      });
      pages++;
      for (const v of r.v) { const k = v.id; if (!found.has(k)) found.set(k, {help:v.help, impact:v.impact, at:new Map()}); v.nodes.forEach(n => found.get(k).at.set(n, (found.get(k).at.get(n) || []).concat(theme[0] + ':' + h + (act ? '/' + act : '')))); }
      for (const v of r.i) eye.set(v.id, (eye.get(v.id) || 0) + v.nodes.length);
    }
    await ctx.close();
  }
  console.log(`${pages} views checked (${VIEWS.length} by day and by night)`);
  if (!found.size) console.log('no violations');
  for (const [k, f] of found) {
    console.log(`\n${k} (${f.impact}): ${f.help} - ${f.at.size} element(s)`);
    [...f.at].slice(0, ALL ? 999 : 6).forEach(([n, w]) => console.log('   ', n.slice(0, 220), ' [' + [...new Set(w)].slice(0, 4).join(', ') + (w.length > 4 ? ' ...' : '') + ']'));
  }
  console.log('\nto check by eye (axe could not decide):', [...eye].map(([k, n]) => k + ' ' + n).join(', ') || 'none');
  await b.close(); srv.kill(); process.exit(0);
})().catch(e => { console.log(e.message); srv.kill(); process.exit(1); });
