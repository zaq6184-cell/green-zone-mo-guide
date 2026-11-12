// The reference picture for starter pack sources that print "All rights reserved" or are marked for internal use
// (Krishna's choice, 12 Nov 2026): the item's own tile, cropped from its link page, as app/sp/tile-<key>.webp.
// Run: node sptiles.js [key ...]   (needs Playwright and ffmpeg; reads the live link pages; with keys, crops only those)
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const OUT = path.join(__dirname, '..', 'app', 'sp');
const TMP = path.join(__dirname, '..', 'sources', 'starterpack', 'shots', 'tiles');
fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(TMP, { recursive: true });
const ONLY = process.argv.slice(2);
const PAGES = {
  'https://linktr.ee/hkldoctors_starterpack': [
    ['a01', 'Aerial View HKL'], ['a03', 'Borang Masuk Keluar Hospital'], ['a04', 'Pengisian Borang Kematian'], ['a05', 'Code Grey'],
    ['a06', 'Needle Stick Injury'], ['a07', 'Medication Error & Incident Report Forms'], ['b03', 'Garis Panduan Preskripsi Ubat'],
    ['b04', 'Good Prescribing Practice Quiz'], ['b05', 'Quick Guide Preventing Prescription Error'], ['b07', 'Garispanduan POM HKL'],
    ['farmasi', 'Farmasi HKL'], ['medsafe', 'Medication Safety HKL'], ['sp', 'PhIS Prescriber Quick Guide'],
    ['b01', 'Good Practice: Prescribing Medications Containing Animal Source']],
  'https://linktr.ee/pusat_sumber_farmasi': [['c04', 'HKL Animal Source List'], ['c17', 'HKL ED Dilution Guide'], ['c01', 'Antimicrobial Stewardship Program Policy HKL'], ['c16', 'HKL ICU Drug Dilution 2026 5th Ed']],
  'https://linktr.ee/medsafehkl': [
    ['d01', 'Laporan Insiden & RCA'], ['d04', 'Top 10 Ubat LASA'], ['d08', 'Medication Administration Time'],
    ['d16', 'Policy on Look Alike Sound Alike'], ['d15', 'List Of High Alert Medications'], ['d22', 'Poster Medication Safety HKL']]
};
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 420, height: 900 }, deviceScaleFactor: 2, locale: 'en-GB' });
  const p = await ctx.newPage(); let n = 0;
  for (const [url, items] of Object.entries(PAGES)) {
    if (ONLY.length && !items.some(([k]) => ONLY.includes(k))) continue;
    await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200);
    for (const [k, text] of items) {
      if (ONLY.length && !ONLY.includes(k)) continue;
      const a = p.locator('a', { hasText: text }).first();
      if (!await a.count()) { console.log('NOT FOUND', k, text); continue; }
      await a.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
      const png = path.join(TMP, k + '.png');
      await a.screenshot({ path: png });
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', png, '-c:v', 'libwebp', '-quality', '82', path.join(OUT, 'tile-' + k + '.webp')]);
      n++;
    }
  }
  await b.close();
  console.log('tiles:', n);
})().catch(e => { console.error(e); process.exit(1); });
