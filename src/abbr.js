// Builds app/data/abbr.json, the Ministry of Health's abbreviation list as printed (21 Nov 2026):
// "SENARAI KATA SINGKATAN (ABBREVIATION) DI FASILITI KEMENTERIAN KESIHATAN MALAYSIA BIL.1/2024", 2,665 rows on 61 pages,
// read row by row from its page images into sources/telegram/edhkl-announcements/work/reads/f121.json (git-ignored).
// The page loads it the first time it is needed (#abbreviations, or a short search), so the guide's page stays as light as before.
// Run: node abbr.js
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'sources', 'telegram', 'edhkl-announcements', 'work', 'reads', 'f121.json');
const OUT = path.join(ROOT, 'app', 'data', 'abbr.json');
const d = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const rows = d.rows.map(r => [r.abbr, r.meaning, r.page, +r.other.BIL]);
rows.forEach((r, i) => { if (r[3] !== i + 1) throw new Error('row ' + (i + 1) + ' is numbered ' + r[3]); if (!r[0] || !r[1]) throw new Error('row ' + (i + 1) + ' has an empty cell'); });
const out = {meta:{t:d.meta.title, n:rows.length, pages:61,
  note:'Issued with Surat Pekeliling Ketua Pengarah Kesihatan Bil.4/2024 (KKM.100-1/6/1 Jld.2 (16), 19 April 2024); the file was posted to the department channel on 1 Aug 2024.'}, rows};
fs.mkdirSync(path.dirname(OUT), {recursive:true});
fs.writeFileSync(OUT, JSON.stringify(out));
console.log('wrote', OUT, rows.length, 'rows,', fs.statSync(OUT).size, 'bytes');
