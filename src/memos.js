// Builds the memo snapshots: app/memo/<key>-p<N>.webp, from the page renders in sources/memos/pages/<key>/pNN.png
// (git-ignored) and the bands listed in sources/memos/covers.json. Each band covers what the public app must not show:
// the signature, the name block and registration numbers under it (Krishna's choice, 12 Nov 2026, under standing rule 3),
// and any phone number or patient detail. Run: node memos.js   (needs Playwright, already set up for the test)
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'sources', 'memos');
const OUT = path.join(ROOT, 'app', 'memo');
const W = 1240;
const spec = JSON.parse(fs.readFileSync(path.join(SRC, 'covers.json'), 'utf8'));
fs.mkdirSync(OUT, { recursive: true });
/* Start from an empty folder, so no page from an earlier run (or without its bands) can be published */
for (const f of fs.readdirSync(OUT)) fs.unlinkSync(path.join(OUT, f));
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.setContent('<canvas id=c></canvas>');
  let n = 0, bytes = 0;
  for (const [key, pages] of Object.entries(spec)) {
    if (key.startsWith('_')) continue;
    for (const [pg, spec] of Object.entries(pages)) {
      const bands = Array.isArray(spec) ? spec : spec.bands, rot = Array.isArray(spec) ? 0 : spec.rot || 0;
      const png = path.join(SRC, 'pages', key, 'p' + String(pg).padStart(2, '0') + '.png');
      const data = 'data:image/png;base64,' + fs.readFileSync(png).toString('base64');
      const url = await p.evaluate(async ([data, bands, W, rot]) => {
        let im = new Image(); im.src = data; await im.decode();
        if (rot) { /* a sideways scan: turn it upright first (270 = a quarter turn anticlockwise) */
          const t = document.createElement('canvas'); t.width = im.naturalHeight; t.height = im.naturalWidth;
          const tg = t.getContext('2d'); tg.translate(rot === 270 ? 0 : t.width, rot === 270 ? t.height : 0); tg.rotate((rot === 270 ? -1 : 1) * Math.PI / 2); tg.drawImage(im, 0, 0);
          im = t; W = 1600;
          /* Trim the blank half a sideways scan leaves: keep the rows and columns where at least 2% of pixels are dark */
          const d = tg.getImageData(0, 0, t.width, t.height).data, cols = new Array(t.width).fill(0), rows = new Array(t.height).fill(0);
          for (let y = 0; y < t.height; y += 2) for (let x = 0; x < t.width; x += 2) { const i = (y * t.width + x) * 4; if (d[i] + d[i + 1] + d[i + 2] < 450) { cols[x]++; rows[y]++; } }
          const cx = cols.map((v, i) => v > t.height / 2 * 0.02 ? i : -1).filter(i => i >= 0), ry = rows.map((v, i) => v > t.width / 2 * 0.02 ? i : -1).filter(i => i >= 0);
          if (cx.length && ry.length) {
            const x0 = Math.max(0, cx[0] - 40), x1 = Math.min(t.width, cx[cx.length - 1] + 40), y0 = Math.max(0, ry[0] - 40), y1 = Math.min(t.height, ry[ry.length - 1] + 40);
            const u = document.createElement('canvas'); u.width = x1 - x0; u.height = y1 - y0; u.getContext('2d').drawImage(t, x0, y0, u.width, u.height, 0, 0, u.width, u.height);
            im = u; W = Math.min(1600, u.width);
          }
        }
        const nw = im.naturalWidth || im.width, nh = im.naturalHeight || im.height;
        const s = W / nw, c = document.getElementById('c');
        c.width = W; c.height = Math.round(nh * s);
        const g = c.getContext('2d'); g.drawImage(im, 0, 0, c.width, c.height);
        for (const [x, y, w, h, label] of bands) {
          const X = x * s, Y = y * s, Wd = w * s, H = h * s;
          g.fillStyle = '#e8ece9'; g.fillRect(X, Y, Wd, H);
          g.strokeStyle = '#9aa7a0'; g.lineWidth = 2; g.setLineDash([10, 8]); g.strokeRect(X + 1, Y + 1, Wd - 2, H - 2); g.setLineDash([]);
          g.fillStyle = '#4d5a53'; g.font = '600 26px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
          g.fillText(label || 'Signature and registration numbers covered', X + Wd / 2, Y + H / 2, Wd - 24);
        }
        return c.toDataURL('image/webp', 0.8);
      }, [data, bands, W, rot]);
      const buf = Buffer.from(url.split(',')[1], 'base64');
      const out = path.join(OUT, `${key}-p${pg}.webp`);
      fs.writeFileSync(out, buf); n++; bytes += buf.length;
    }
  }
  await b.close();
  console.log(`memo pages: ${n}, ${Math.round(bytes / 1024)} KB`);
})().catch(e => { console.error(e); process.exit(1); });
