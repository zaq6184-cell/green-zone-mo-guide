#!/usr/bin/env node
/* How fast the installed web app opens again through its service worker, when the network is healthy, slow or stuck
   (23 Nov 2026). It serves ../app the way GitHub Pages does (gzip and ETags, so an unchanged page comes back as 304), lets
   a phone-sized Chromium save the guide, slows the CPU 4 times, then reloads with the page's answer on time, delayed
   300 ms, delayed 2.5 s, never sent (stuck), and on time again (the open right after a stuck one). Measured on 23 Nov 2026
   with the 1.5 s wait and one page request at a time, over two runs: about 0.4, 0.8, 1.8 to 2.0, 1.8 to 2.0 and 0.3 to
   0.4 s to ready (with the 4 s wait before: 0.4, 0.8, 2.8, 4.3 and 4.3 s).
   Usage: node reopen.js [port, default 8798]     (needs Playwright, as test.js does) */
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib'), crypto = require('crypto');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..', 'app'), port = Number(process.argv[2]) || 8798, BASE = `http://localhost:${port}/`;
const TYPES = {'.html':'text/html; charset=utf-8', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.mp4':'video/mp4', '.mp3':'audio/mpeg', '.js':'text/javascript', '.webmanifest':'application/manifest+json', '.json':'application/json', '.txt':'text/plain', '.bin':'application/octet-stream'};
let mode = 'ok'; /* how the page itself is answered: ok, slow-<ms> or hang */
const srv = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]); if (rel === '/') rel = '/index.html';
  const file = path.join(root, path.normalize(rel));
  if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()){ res.writeHead(404); res.end(); return; }
  const send = () => {
    const buf = fs.readFileSync(file), type = TYPES[path.extname(file)] || 'application/octet-stream';
    const tag = '"' + crypto.createHash('sha1').update(buf).digest('hex').slice(0, 16) + '"';
    const h = {'Content-Type':type, 'ETag':tag, 'Cache-Control':'max-age=600'};
    if (req.headers['if-none-match'] === tag){ res.writeHead(304, h); res.end(); return; }
    if (/gzip/.test(req.headers['accept-encoding'] || '') && /html|javascript|json|text|manifest/.test(type) && !req.headers.range){
      const z = zlib.gzipSync(buf); h['Content-Encoding'] = 'gzip'; h['Content-Length'] = z.length; res.writeHead(200, h); res.end(z); return;
    }
    h['Content-Length'] = buf.length; res.writeHead(200, h); res.end(buf);
  };
  if (rel === '/index.html' && mode === 'hang') return; /* never answered */
  if (rel === '/index.html' && mode.startsWith('slow-')){ setTimeout(send, +mode.slice(5)); return; }
  send();
}).listen(port);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({viewport:{width:390, height:844}, deviceScaleFactor:3, isMobile:true, hasTouch:true, serviceWorkers:'allow'});
  const p = await ctx.newPage();
  await p.goto(BASE, {waitUntil:'load'});
  await p.waitForFunction(async () => window.GZ_PWA && (await window.GZ_PWA.info()).state === 'saved', null, {timeout:120000, polling:1000});
  const c = await ctx.newCDPSession(p); await c.send('Emulation.setCPUThrottlingRate', {rate:4});
  for (const m of ['ok', 'slow-300', 'slow-2500', 'hang', 'ok']){
    mode = m;
    await p.reload({waitUntil:'domcontentloaded', timeout:60000}); await p.waitForTimeout(1500);
    const t = await p.evaluate(() => { const n = performance.getEntriesByType('navigation')[0], f = performance.getEntriesByName('first-contentful-paint')[0];
      return {resp:Math.round(n.responseEnd), fcp:f && Math.round(f.startTime), dcl:Math.round(n.domContentLoadedEventEnd)}; });
    console.log(`${m.padEnd(9)} page from the worker at ${t.resp} ms, first paint ${t.fcp} ms, ready ${t.dcl} ms`);
  }
  mode = 'ok'; await b.close(); srv.close(); process.exit(0);
})().catch(e => { console.log(e.message); process.exit(1); });
