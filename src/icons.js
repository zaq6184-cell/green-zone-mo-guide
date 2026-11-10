#!/usr/bin/env node
/* Draw the web app's icons from the brand mark: LOGO in parts/engine.js on its emerald tile, as the .mark style in
   parts/head.html draws it (a 150° gradient from --emerald-1 to --emerald-3, the glyph in --mint and white, light theme),
   so the installed app looks like the mark in the top bar.

   Writes app/icons/. The PNGs are kept in git: run this again only when the mark or its colours change, then npm run build.
     icon-192.png, icon-512.png          the rounded tile on a clear background (manifest purpose "any"), in the
                                         proportions of .mark: corners a third of the size, the glyph 25/42 of it
     maskable-192.png, maskable-512.png  full bleed, the glyph well inside the central safe circle (purpose "maskable":
                                         Android crops these to its own shape)
     apple-touch-icon.png                180 px, full bleed (iOS rounds the corners itself and shows clear pixels as black)

   Usage: node icons.js [site folder, default ../app]     (npm run icons) */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

const PARTS = path.join(__dirname, 'parts');
const OUT = path.join(path.resolve(process.argv[2] || path.join(__dirname, '..', 'app')), 'icons');
const engine = fs.readFileSync(path.join(PARTS, 'engine.js'), 'utf8');
const head = fs.readFileSync(path.join(PARTS, 'head.html'), 'utf8');

const LOGO = (engine.match(/const LOGO = '([^']+)';/) || [])[1];
/* The first value of each token in head.html is the light theme's (the dark blocks come after :root) */
const tok = k => (head.match(new RegExp('--' + k + ':\\s*(#[0-9a-fA-F]{6})\\b')) || [])[1];
const C = {e1: tok('emerald-1'), e3: tok('emerald-3'), mint: tok('mint')};
if (!LOGO || Object.values(C).some(v => !v)){
  console.error('Could not read LOGO from parts/engine.js, or --emerald-1, --emerald-3 and --mint from parts/head.html.');
  process.exit(1);
}

/* [file, size in px, corner radius as a share of the size (0: full bleed), glyph size as a share of the size].
   Maskable: the glyph's farthest point is 11.9 of its 24 units from the centre, so at 0.52 it stays within 26% of the
   size from the centre, well inside the 40% safe circle. */
const ICONS = [
  ['icon-192.png', 192, 1 / 3, 25 / 42],
  ['icon-512.png', 512, 1 / 3, 25 / 42],
  ['maskable-192.png', 192, 0, 0.52],
  ['maskable-512.png', 512, 0, 0.52],
  ['apple-touch-icon.png', 180, 0, 0.58]
];

const page = (s, r, g) => `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;background:transparent}
  :root{--mint:${C.mint}}
  .i{width:${s}px;height:${s}px;display:grid;place-items:center;border-radius:${(r * s).toFixed(2)}px;
    background:linear-gradient(150deg,${C.e1},${C.e3})}
  .i svg{width:${(g * s).toFixed(2)}px;height:${(g * s).toFixed(2)}px;display:block}
</style></head><body><div class="i">${LOGO}</div></body></html>`;

(async () => {
  fs.mkdirSync(OUT, {recursive: true});
  const b = await chromium.launch();
  const p = await b.newPage({deviceScaleFactor: 1});
  for (const [file, s, r, g] of ICONS){
    await p.setViewportSize({width: s, height: s});
    await p.setContent(page(s, r, g));
    await p.locator('.i').screenshot({path: path.join(OUT, file), omitBackground: true});
    console.log('Wrote ' + path.join(OUT, file) + ' (' + s + ' px, ' + Math.round(fs.statSync(path.join(OUT, file)).size / 1024) + ' KB)');
  }
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
