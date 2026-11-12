#!/usr/bin/env node
/* The link preview picture (12 Nov 2026): app/og/preview.jpg, 1200 x 630, the card WhatsApp, Telegram and other apps show
   under a link to the web app (its Open Graph tags are written by build.js). Real screens of the built app, by day, on
   three phones in 3D: the pathway library, a pathway step and the calculators, beside the guide's name and mark. No crest, no people, and
   no screen with a phone number or a staff name. The background is the Flow still for the share banner when it exists
   (illustrations/tiles/share.jpg), otherwise a gradient.
   Usage: node og.js     (after npm run build; needs Playwright; starts its own copy of serve.js) */
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'app', 'og');
const PORT = 8797, BASE = `http://localhost:${PORT}/`;
const SCREENS = [['#pathways', 0], ['#renal-colic', 0], ['#calc', 0]];
const LOGO = (fs.readFileSync(path.join(__dirname, 'parts', 'engine.js'), 'utf8').match(/const LOGO = '(<svg[^']+)'/) || [])[1];
if (!LOGO) { console.error('Could not read LOGO from parts/engine.js'); process.exit(1); }
const bgFile = path.join(ROOT, 'illustrations', 'tiles', 'share.jpg');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const srv = spawn(process.execPath, [path.join(__dirname, 'serve.js')], { env: Object.assign({}, process.env, { PORT: String(PORT) }), stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 700));
  const b = await chromium.launch();
  try {
    /* The three screens, as a phone shows them by day, with motion reduced so every tile shows its still */
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: 'light', reducedMotion: 'reduce', serviceWorkers: 'block', locale: 'en-GB' });
    const shots = [];
    for (const [hash] of SCREENS) {
      const p = await ctx.newPage();
      await p.goto(BASE + hash, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200);
      await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(300);
      shots.push('data:image/png;base64,' + (await p.screenshot({ type: 'png' })).toString('base64'));
      await p.close();
    }
    await ctx.close();
    const bg = fs.existsSync(bgFile) ? 'data:image/jpeg;base64,' + fs.readFileSync(bgFile).toString('base64') : '';
    const phone = (src, cls) => `<div class="ph ${cls}"><div class="scr"><img src="${src}"></div><i class="notch"></i></div>`;
    const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Figtree:wght@600;800;900&display=swap" rel="stylesheet">
<style>
:root{--mint:#43dd8c}*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{position:relative;font-family:Figtree,system-ui,sans-serif;color:#fff;background:radial-gradient(120% 120% at 18% 12%,#0f7a51 0%,#06402a 46%,#03170f 100%)}
.bg{position:absolute;inset:0;background:${bg ? `url(${bg}) center/cover` : 'none'};opacity:.55}
.veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,23,15,.92) 0%,rgba(3,23,15,.72) 42%,rgba(3,23,15,.12) 75%,rgba(3,23,15,0) 100%)}
.txt{position:absolute;left:64px;top:0;bottom:0;width:520px;display:flex;flex-direction:column;justify-content:center;gap:18px}
.mk{width:84px;height:84px;border-radius:24px;display:grid;place-items:center;background:linear-gradient(150deg,#0d7049,#063d28);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3),0 18px 30px -12px rgba(0,0,0,.6)}
.mk svg{width:54px;height:54px}
h1{margin:0;font:900 64px/1.02 Figtree,system-ui,sans-serif;letter-spacing:-.01em}
p{margin:0;font:600 26px/1.3 Figtree,system-ui,sans-serif;color:rgba(255,255,255,.88)}
.who{font:800 17px/1.3 Figtree,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#7fe9b0}
.chips{display:flex;gap:10px;flex-wrap:wrap}
.chips span{padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.22);font:800 17px/1 Figtree,system-ui,sans-serif}
.stage{position:absolute;left:560px;top:-10px;width:660px;height:650px;perspective:1500px}
.ph{position:absolute;width:252px;height:546px;border-radius:40px;padding:9px;background:linear-gradient(160deg,#2b3a33,#0b110e);box-shadow:inset 0 0 0 2px rgba(255,255,255,.22),30px 40px 60px -20px rgba(0,0,0,.7);transform-style:preserve-3d}
.ph .scr{width:100%;height:100%;border-radius:32px;overflow:hidden;background:#e9edeb}
.ph img{display:block;width:100%;height:auto}
.notch{position:absolute;left:50%;top:16px;width:74px;height:20px;margin-left:-37px;border-radius:12px;background:#0b110e}
.a{left:30px;top:96px;transform:rotateY(28deg) rotateZ(-4deg) translateZ(-120px) scale(.92)}
.b{left:206px;top:44px;transform:rotateY(-8deg) translateZ(40px);z-index:2}
.c{left:400px;top:110px;transform:rotateY(-30deg) rotateZ(3deg) translateZ(-100px) scale(.9)}
</style></head><body><div class="bg"></div><div class="veil"></div>
<div class="txt"><div class="mk">${LOGO.replace('<svg ', '<svg width="54" height="54" ')}</div><div class="who">Emergency &amp; Trauma Department · HKL</div><h1>Green Zone<br>MO Guide</h1>
<p>Pathways, rules, calculators and numbers for the Green Zone, in one tap on your phone.</p><div class="chips"><span>Works offline</span><span>A reference tool</span></div></div>
<div class="stage">${phone(shots[0], 'a')}${phone(shots[2], 'c')}${phone(shots[1], 'b')}</div></body></html>`;
    const page = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage();
    await page.setContent(html, { waitUntil: 'networkidle' }); await page.waitForTimeout(500);
    const file = path.join(OUT, 'preview.jpg');
    fs.writeFileSync(file, await page.screenshot({ type: 'jpeg', quality: 84, clip: { x: 0, y: 0, width: 1200, height: 630 } }));
    console.log('Wrote ' + file + ' (' + Math.round(fs.statSync(file).size / 1024) + ' KB)' + (bg ? ', on the Flow still' : ', on the gradient'));
  } finally { await b.close(); srv.kill(); }
})().catch(e => { console.error(e); process.exit(1); });
