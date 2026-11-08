/* Render the two A3 wall-poster sheets from poster.html, in both themes: day (the printed sheets) and night
 * (the same sheets for screens and the app's dark mode, switched by the class "night" on <html>).
 *
 *   node render.js
 *
 * Writes, each file only when it has changed:
 *   ../sheet1-patient-flow.png, ../sheet2-pathways-referrals.png               day, 2246 x 3174 (deviceScaleFactor 2)
 *   ../sheet1-patient-flow-night.png, ../sheet2-pathways-referrals-night.png   night, 2246 x 3174
 *   ../green-zone-poster-A3.pdf                                                day only: two pages, backgrounds printed
 *   ../../app/poster/sheet1.webp, sheet2.webp, sheet1-night.webp, sheet2-night.webp                         1684 x 2380
 *   ../../app/poster/sheet1-thumb.webp, sheet2-thumb.webp, sheet1-night-thumb.webp, sheet2-night-thumb.webp  560 x 791
 * A PNG has changed when a single pixel differs from the file on disk, the PDF when anything but its two date
 * stamps differs, and a WebP is made again when its PNG changed or the WebP is missing. So an edit to one theme
 * leaves the other theme's files, and the printed day sheets, exactly as they were. Delete a file to force it.
 *
 * Needs the Playwright in ../../src/node_modules (cd ../../src && npm install; npx playwright install chromium),
 * ffmpeg with libwebp on PATH, and the internet for the Google Fonts. It checks both themes first and stops
 * without writing anything if a font fails to load, if any element leaves its sheet or its parent box, if any
 * text is under 16 px (13 px for source lines and the footer), if any text is under 4.5:1 against what is
 * painted behind it, or if the rendered QR code differs from the original by a single module.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');
const { chromium } = require(path.join(__dirname, '..', '..', 'src', 'node_modules', 'playwright'));

const SRC = path.join(__dirname, 'poster.html');
const POSTER = path.join(__dirname, '..');
const APP = path.join(__dirname, '..', '..', 'app', 'poster');
const THEMES = [
  { name: 'day', night: false, suffix: '' },
  { name: 'night', night: true, suffix: '-night' }
];
const SHEETS = [
  { id: 'sheet1', png: 'sheet1-patient-flow', webp: 'sheet1' },
  { id: 'sheet2', png: 'sheet2-pathways-referrals', webp: 'sheet2' }
];
const PDF = 'green-zone-poster-A3.pdf';
const FACES = ['900 16px Figtree', '850 16px Figtree', '800 16px Figtree', '400 16px "Atkinson Hyperlegible Next"',
  '700 16px "Atkinson Hyperlegible Next"', '800 16px "Atkinson Hyperlegible Next"', '700 16px "Atkinson Hyperlegible Mono"'];
const WEBP = [
  { suffix: '', w: 1684, h: 2380, min: 270000, max: 340000 },
  { suffix: '-thumb', w: 560, h: 791, min: 65000, max: 80000 }
];
const MIN_CONTRAST = 4.5;

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
const undated = buf => buf.toString('latin1').replace(/\/(CreationDate|ModDate)\s*\(D:[^)]*\)/g, '');

/* Fonts: load every face used, then check each with its weight. A bare family name passes even when nothing loaded. */
async function checkFonts(page) {
  const fonts = await page.evaluate(async faces => {
    await Promise.all(faces.map(f => document.fonts.load(f).catch(() => [])));
    await document.fonts.ready;
    const loaded = new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')));
    return { checks: faces.map(f => [f, document.fonts.check(f)]), loaded: [...loaded] };
  }, FACES);
  const missing = ['Figtree', 'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible Mono'].filter(f => !fonts.loaded.includes(f));
  if (missing.length || fonts.checks.some(([, ok]) => !ok)) fail('fonts did not load: ' + JSON.stringify(fonts));
  return fonts.loaded;
}

/* Layout: nothing outside its sheet or its parent box, nothing clipped, no text under the size floor. */
function checkLayout(page) {
  return page.evaluate(() => {
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
}

/* QR: compare every module of the rendered code with the original PNG (12 px per module, 37 x 37 with the quiet zone). */
async function checkQr(page) {
  const img = page.locator('#sheet1 img.qr');
  const box = await img.boundingBox(), shot = await img.screenshot();
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
  }, shot.toString('base64'));
  return { ...qr, width: box.width };
}

/* Contrast: every run of text against what is painted behind it, at least 4.5:1. The sheets are shot again with
   every glyph made transparent, so the background is the real one: jewel gradients with their sheen and grain,
   chips, rings and the flat outcome fills. It is averaged over 4 x 4 CSS px cells, to even out the grain, across
   the middle 60% of each line box, where the glyphs are, and each run is judged by its worst cell. */
async function checkContrast(page) {
  const runs = await page.evaluate(() => {
    const out = [];
    for (const sheet of document.querySelectorAll('.sheet')) {
      const sr = sheet.getBoundingClientRect();
      const walk = document.createTreeWalker(sheet, NodeFilter.SHOW_TEXT);
      for (let n; (n = walk.nextNode());) {
        const el = n.parentElement;
        if (!n.textContent.trim() || el.closest('svg')) continue;
        const cs = getComputedStyle(el).color, m = /^rgba?\(([^)]+)\)$/.exec(cs);
        if (!m) return { error: `cannot read the colour ${cs} of "${n.textContent.trim().slice(0, 40)}"` };
        const c = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
        if (c.length === 3) c.push(1);
        for (let a = el; a && a !== document.documentElement; a = a.parentElement) c[3] *= parseFloat(getComputedStyle(a).opacity);
        const r = document.createRange(); r.selectNodeContents(n);
        const rects = [...r.getClientRects()].filter(q => q.width >= 1 && q.height >= 1).map(q => [q.left - sr.left, q.top - sr.top, q.width, q.height]);
        if (rects.length) out.push({ sheet: sheet.id, text: n.textContent.trim().replace(/\s+/g, ' ').slice(0, 44), color: c, rects });
      }
    }
    return out;
  });
  if (runs.error) fail('contrast: ' + runs.error);
  const hide = await page.addStyleTag({ content: '.sheet *{-webkit-text-fill-color:transparent!important}' });
  const results = [];
  for (const s of SHEETS) {
    const shot = await page.locator('#' + s.id).screenshot({ animations: 'disabled' });
    results.push(...await page.evaluate(async ({ id, shot, runs }) => {
      const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = 'data:image/png;base64,' + shot; });
      const W = img.naturalWidth, H = img.naturalHeight, cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      const g = cv.getContext('2d'); g.drawImage(img, 0, 0);
      const d = g.getImageData(0, 0, W, H).data;
      const k = W / document.getElementById(id).getBoundingClientRect().width, cell = Math.round(4 * k);
      const lin = v => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      const lum = (r, gr, b) => 0.2126 * lin(r) + 0.7152 * lin(gr) + 0.0722 * lin(b);
      return runs.map(run => {
        const [tr, tg, tb, ta] = run.color;
        let worst = { ratio: Infinity, bg: null };
        for (const [x, y, w, h] of run.rects) {
          const x0 = Math.max(0, Math.floor(x * k)), x1 = Math.min(W, Math.ceil((x + w) * k));
          const y0 = Math.max(0, Math.floor((y + h * .2) * k)), y1 = Math.min(H, Math.ceil((y + h * .8) * k));
          for (let cy = y0; cy < y1; cy += cell) for (let cx = x0; cx < x1; cx += cell) {
            let r = 0, gr = 0, b = 0, n = 0;
            for (let py = cy; py < Math.min(cy + cell, y1); py++) for (let px = cx; px < Math.min(cx + cell, x1); px++) {
              const i = (py * W + px) * 4; r += d[i]; gr += d[i + 1]; b += d[i + 2]; n++;
            }
            r /= n; gr /= n; b /= n;
            const lt = lum(tr * ta + r * (1 - ta), tg * ta + gr * (1 - ta), tb * ta + b * (1 - ta)), lb = lum(r, gr, b);
            const ratio = (Math.max(lt, lb) + .05) / (Math.min(lt, lb) + .05);
            if (ratio < worst.ratio) worst = { ratio, bg: [r, gr, b].map(Math.round) };
          }
        }
        return { sheet: run.sheet, text: run.text, color: run.color.slice(0, 3), ...worst };
      });
    }, { id: s.id, shot: shot.toString('base64'), runs: runs.filter(r => r.sheet === s.id) }));
  }
  await hide.evaluate(n => n.remove());
  return results.filter(r => r.bg).sort((a, b) => a.ratio - b.ratio);
}

/* The number of pixels that differ between two PNGs (-1 when their sizes differ). */
function pixelDiff(page, a, b) {
  if (a.equals(b)) return 0;
  return page.evaluate(async ([x, y]) => {
    const load = src => new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = 'data:image/png;base64,' + src; });
    const px = img => { const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight; const g = c.getContext('2d'); g.drawImage(img, 0, 0); return g.getImageData(0, 0, c.width, c.height).data; };
    const [i, j] = await Promise.all([load(x), load(y)]);
    if (i.naturalWidth !== j.naturalWidth || i.naturalHeight !== j.naturalHeight) return -1;
    const p = px(i), q = px(j);
    let n = 0;
    for (let k = 0; k < p.length; k += 4) if (p[k] !== q[k] || p[k + 1] !== q[k + 1] || p[k + 2] !== q[k + 2] || p[k + 3] !== q[k + 3]) n++;
    return n;
  }, [a.toString('base64'), b.toString('base64')]);
}

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1123, height: 1587 }, deviceScaleFactor: 2 })).newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(pathToFileURL(SRC).href, { waitUntil: 'networkidle' });

  /* Check and capture both themes before anything is written. The PDF is made while the day theme is on. */
  const pngs = [];
  let pdf = null;
  for (const t of THEMES) {
    await page.evaluate(on => document.documentElement.classList.toggle('night', on), t.night);
    const say = msg => console.log(`${t.name}: ${msg}`);
    say('fonts loaded: ' + (await checkFonts(page)).join(', '));

    const problems = await checkLayout(page);
    if (errors.length) fail(`${t.name}: page errors: ` + errors.join(' | '));
    if (problems.length) fail(`${t.name}: layout problems:\n  ` + problems.join('\n  '));
    say('layout: nothing overflows, clips or falls under the size floor');

    const qr = await checkQr(page);
    if (qr.differ) fail(`${t.name}: the rendered QR differs from the original in ${qr.differ} modules`);
    say(`QR: all ${qr.modules} modules match the original (${qr.dark} dark), ${qr.width} CSS px wide`);

    const contrast = await checkContrast(page);
    const low = contrast.filter(r => r.ratio < MIN_CONTRAST);
    const line = r => `${r.ratio.toFixed(2)}:1 ${r.sheet} "${r.text}" (text rgb(${r.color.join(',')}) on rgb(${r.bg.join(',')}))`;
    if (low.length) fail(`${t.name}: ${low.length} text runs under ${MIN_CONTRAST}:1:\n  ` + low.map(line).join('\n  '));
    say(`contrast: all ${contrast.length} text runs at ${MIN_CONTRAST}:1 or more; lowest:\n    ` + contrast.slice(0, 4).map(line).join('\n    '));

    for (const s of SHEETS) {
      const buf = await page.locator('#' + s.id).screenshot({ animations: 'disabled' });
      const [w, h] = pngSize(buf);
      if (w !== 2246 || h !== 3174) fail(`${s.png}${t.suffix}.png came out ${w} x ${h}, not 2246 x 3174`);
      pngs.push({ name: `${s.png}${t.suffix}.png`, webp: `${s.webp}${t.suffix}`, buf });
    }

    if (!t.night) {
      /* One sheet per page, page size from @page (1123 x 1587 CSS px = 842.25 x 1190.25 pt, A3 within 0.2 mm) */
      const buf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
      const pages = (buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      if (pages !== 2) fail(`the PDF has ${pages} pages, not 2`);
      pdf = { buf, box: (buf.toString('latin1').match(/\/MediaBox\s*\[[^\]]*\]/) || ['?'])[0] };
    }
  }
  if (errors.length) fail('page errors: ' + errors.join(' | '));

  /* Every check passed in both themes: write what changed. */
  const written = new Set();
  for (const p of pngs) {
    const file = path.join(POSTER, p.name);
    const old = fs.existsSync(file) ? fs.readFileSync(file) : null;
    const diff = old ? await pixelDiff(page, p.buf, old) : null;
    if (diff === 0) { console.log(`unchanged: poster/${p.name} (pixel-identical to the file on disk, left as it is)`); continue; }
    fs.writeFileSync(file, p.buf);
    written.add(p.name);
    const why = diff === null ? 'new' : diff < 0 ? 'size changed' : `${diff} pixels changed`;
    console.log(`wrote poster/${p.name} (2246 x 3174, ${Math.round(p.buf.length / 1024)} KB, ${why})`);
  }
  const pdfFile = path.join(POSTER, PDF);
  if (fs.existsSync(pdfFile) && undated(fs.readFileSync(pdfFile)) === undated(pdf.buf)) console.log(`unchanged: poster/${PDF} (same apart from its date stamps, left as it is)`);
  else { fs.writeFileSync(pdfFile, pdf.buf); console.log(`wrote poster/${PDF} (2 pages, ${pdf.box}, ${Math.round(pdf.buf.length / 1024)} KB)`); }
  await browser.close();

  /* WebP for the app's #poster view: the highest quality that keeps each file inside its size band */
  for (const p of pngs) {
    const png = path.join(POSTER, p.name);
    for (const t of WEBP) {
      const name = `${p.webp}${t.suffix}.webp`, file = path.join(APP, name);
      if (!written.has(p.name) && fs.existsSync(file)) { console.log(`unchanged: app/poster/${name} (its PNG did not change)`); continue; }
      let lo = 30, hi = 98, best = null;
      while (lo <= hi) {
        const q = (lo + hi) >> 1, buf = encodeWebp(png, t.w, t.h, q);
        if (buf.length <= t.max) { best = { q, buf }; lo = q + 1; } else hi = q - 1;
      }
      if (!best) fail(`${name} is over ${t.max} bytes even at quality 30`);
      const [w, h] = webpSize(best.buf);
      if (w !== t.w || h !== t.h) fail(`${name} came out ${w} x ${h}`);
      const note = best.buf.length < t.min ? ` (under the ${t.min}-byte band even at the top quality)` : '';
      fs.writeFileSync(file, best.buf);
      console.log(`wrote app/poster/${name} (${w} x ${h}, quality ${best.q}, ${best.buf.length} bytes)${note}`);
    }
  }
})().catch(e => fail(e.stack || String(e)));
