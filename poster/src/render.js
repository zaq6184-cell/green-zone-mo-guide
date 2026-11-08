/* Render the two A3 wall-poster sheets from poster.html.
 *
 *   node render.js
 *
 * Writes (and overwrites):
 *   ../sheet1-patient-flow.png, ../sheet2-pathways-referrals.png   2246 x 3174 (deviceScaleFactor 2)
 *   ../green-zone-poster-A3.pdf                                     two pages, backgrounds printed
 *   ../../app/poster/sheet1.webp, sheet2.webp                       1684 x 2380
 *   ../../app/poster/sheet1-thumb.webp, sheet2-thumb.webp           560 x 791
 *
 * Needs the Playwright in ../../src/node_modules (cd ../../src && npm install; npx playwright install chromium),
 * ffmpeg with libwebp on PATH, and the internet for the Google Fonts. It stops without writing anything if a
 * font fails to load, if any element leaves its sheet or its parent box, if any text is under 16 px (13 px for
 * source lines and the footer), or if the rendered QR code differs from the original by a single module.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');
const { chromium } = require(path.join(__dirname, '..', '..', 'src', 'node_modules', 'playwright'));

const SRC = path.join(__dirname, 'poster.html');
const POSTER = path.join(__dirname, '..');
const APP = path.join(__dirname, '..', '..', 'app', 'poster');
const SHEETS = [
  { id: 'sheet1', png: 'sheet1-patient-flow.png', webp: 'sheet1' },
  { id: 'sheet2', png: 'sheet2-pathways-referrals.png', webp: 'sheet2' }
];
const FACES = ['900 16px Figtree', '850 16px Figtree', '800 16px Figtree', '400 16px "Atkinson Hyperlegible Next"',
  '700 16px "Atkinson Hyperlegible Next"', '800 16px "Atkinson Hyperlegible Next"', '700 16px "Atkinson Hyperlegible Mono"'];
const WEBP = [
  { suffix: '', w: 1684, h: 2380, min: 270000, max: 340000 },
  { suffix: '-thumb', w: 560, h: 791, min: 65000, max: 80000 }
];

const fail = msg => { console.error('STOP: ' + msg); process.exit(1); };
const pngSize = buf => [buf.readUInt32BE(16), buf.readUInt32BE(20)];
function webpSize(buf) {
  const kind = buf.toString('ascii', 12, 16);
  if (kind === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
  if (kind === 'VP8L') { const b = buf.readUInt32LE(21); return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1]; }
  if (kind === 'VP8X') return [buf.readUIntLE(24, 3) + 1, buf.readUIntLE(27, 3) + 1];
  return [0, 0];
}
const encodeWebp = (png, w, h, q) => execFileSync('ffmpeg', ['-v', 'error', '-i', png, '-vf', `scale=${w}:${h}:flags=lanczos`,
  '-c:v', 'libwebp', '-lossless', '0', '-compression_level', '6', '-preset', 'picture', '-quality', String(q), '-f', 'webp', 'pipe:1'],
  { maxBuffer: 64 * 1024 * 1024 });

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1123, height: 1587 }, deviceScaleFactor: 2 })).newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(pathToFileURL(SRC).href, { waitUntil: 'networkidle' });

  /* Fonts: load every face used, then check each with its weight. A bare family name passes even when nothing loaded. */
  const fonts = await page.evaluate(async faces => {
    await Promise.all(faces.map(f => document.fonts.load(f).catch(() => [])));
    await document.fonts.ready;
    const loaded = new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')));
    return { checks: faces.map(f => [f, document.fonts.check(f)]), loaded: [...loaded] };
  }, FACES);
  const missing = ['Figtree', 'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible Mono'].filter(f => !fonts.loaded.includes(f));
  if (missing.length || fonts.checks.some(([, ok]) => !ok)) fail('fonts did not load: ' + JSON.stringify(fonts));
  console.log('fonts loaded: ' + fonts.loaded.join(', '));

  /* Layout: nothing outside its sheet or its parent box, nothing clipped, no text under the size floor. */
  const problems = await page.evaluate(() => {
    const out = [];
    const name = el => `${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().replace(/\s+/g, '.') : ''} "${(el.textContent || '').trim().slice(0, 40)}"`;
    for (const sheet of document.querySelectorAll('.sheet')) {
      const sr = sheet.getBoundingClientRect();
      const foot = sheet.querySelector('.foot').getBoundingClientRect();
      if (foot.bottom > sr.bottom - parseFloat(getComputedStyle(sheet).paddingBottom) + 0.5) out.push(`${sheet.id}: content runs into the bottom margin`);
      for (const el of sheet.querySelectorAll('*')) {
        if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') continue;
        const r = el.getBoundingClientRect();
        if (!r.width && !r.height) continue;
        if (r.left < sr.left - .5 || r.right > sr.right + .5 || r.top < sr.top - .5 || r.bottom > sr.bottom + .5) out.push(`${sheet.id}: outside the sheet: ${name(el)}`);
        const cs = getComputedStyle(el), p = el.parentElement;
        if (p && p !== sheet) {
          const pr = p.getBoundingClientRect();
          const d = cs.display === 'inline' ? Math.max(pr.left - r.left, r.right - pr.right) : Math.max(pr.left - r.left, r.right - pr.right, pr.top - r.top, r.bottom - pr.bottom);
          if (d > .75) out.push(`${sheet.id}: ${d.toFixed(1)} px outside its parent: ${name(el)}`);
        }
        if (el.scrollWidth > el.clientWidth + 1 && cs.overflowX !== 'visible') out.push(`${sheet.id}: clipped: ${name(el)}`);
        if ([...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) {
          const floor = el.closest('.foot, .src') ? 13 : 16;
          if (parseFloat(cs.fontSize) < floor) out.push(`${sheet.id}: ${cs.fontSize} text: ${name(el)}`);
        }
      }
    }
    return out;
  });
  if (errors.length) fail('page errors: ' + errors.join(' | '));
  if (problems.length) fail('layout problems:\n  ' + problems.join('\n  '));
  console.log('layout: nothing overflows, clips or falls under the size floor');

  /* QR: compare every module of the rendered code with the original PNG (12 px per module, 37 x 37 with the quiet zone). */
  const qrBox = await page.locator('#sheet1 img.qr').boundingBox();
  const qrShot = await page.screenshot({ clip: qrBox });
  const qr = await page.evaluate(async shot => {
    const load = src => new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = src; });
    const grid = (img, n) => {
      const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
      const x = c.getContext('2d'); x.drawImage(img, 0, 0);
      const d = x.getImageData(0, 0, c.width, c.height).data, m = c.width / n, g = [];
      for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
        const k = (Math.floor((j + .5) * m) * c.width + Math.floor((i + .5) * m)) * 4;
        g.push(d[k] + d[k + 1] + d[k + 2] < 384 ? 1 : 0);
      }
      return g;
    };
    const original = grid(await load(document.querySelector('#sheet1 img.qr').src), 37);
    const rendered = grid(await load('data:image/png;base64,' + shot), 37);
    return { modules: original.length, differ: original.filter((v, i) => v !== rendered[i]).length, dark: original.filter(Boolean).length };
  }, qrShot.toString('base64'));
  if (qr.differ) fail(`the rendered QR differs from the original in ${qr.differ} modules`);
  console.log(`QR: all ${qr.modules} modules match the original (${qr.dark} dark), ${qrBox.width} CSS px wide`);

  /* PNGs */
  for (const s of SHEETS) {
    const buf = await page.locator('#' + s.id).screenshot({ animations: 'disabled' });
    const [w, h] = pngSize(buf);
    if (w !== 2246 || h !== 3174) fail(`${s.png} came out ${w} x ${h}, not 2246 x 3174`);
    fs.writeFileSync(path.join(POSTER, s.png), buf);
    console.log(`wrote poster/${s.png} (${w} x ${h}, ${Math.round(buf.length / 1024)} KB)`);
  }

  /* PDF: one sheet per page, page size from @page (1123 x 1587 CSS px = 842.25 x 1190.25 pt, A3 within 0.2 mm) */
  const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  const box = (pdf.toString('latin1').match(/\/MediaBox\s*\[[^\]]*\]/) || ['?'])[0];
  if (pages !== 2) fail(`the PDF has ${pages} pages, not 2`);
  fs.writeFileSync(path.join(POSTER, 'green-zone-poster-A3.pdf'), pdf);
  console.log(`wrote poster/green-zone-poster-A3.pdf (2 pages, ${box}, ${Math.round(pdf.length / 1024)} KB)`);
  await browser.close();

  /* WebP for the app's #poster view: the highest quality that keeps each file inside its size band */
  for (const s of SHEETS) {
    const png = path.join(POSTER, s.png);
    for (const t of WEBP) {
      let lo = 30, hi = 98, best = null;
      while (lo <= hi) {
        const q = (lo + hi) >> 1, buf = encodeWebp(png, t.w, t.h, q);
        if (buf.length <= t.max) { best = { q, buf }; lo = q + 1; } else hi = q - 1;
      }
      if (!best) fail(`${s.webp}${t.suffix}.webp is over ${t.max} bytes even at quality 30`);
      const [w, h] = webpSize(best.buf);
      if (w !== t.w || h !== t.h) fail(`${s.webp}${t.suffix}.webp came out ${w} x ${h}`);
      const note = best.buf.length < t.min ? ` (under the ${t.min}-byte band even at the top quality)` : '';
      fs.writeFileSync(path.join(APP, `${s.webp}${t.suffix}.webp`), best.buf);
      console.log(`wrote app/poster/${s.webp}${t.suffix}.webp (${w} x ${h}, quality ${best.q}, ${best.buf.length} bytes)${note}`);
    }
  }
})().catch(e => fail(e.stack || String(e)));
