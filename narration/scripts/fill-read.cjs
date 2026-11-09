// Write the read-aloud map (src, duration, section marks and, where recorded line by line, line marks) from read-map.json into
// engine.js's READ constant.
const fs = require('fs');
const E = require('path').resolve(__dirname, '..', '..', 'src', 'parts', 'engine.js');
const map = require('./read-map.json');
let s = fs.readFileSync(E, 'utf8');
const re = /const READ = \{\n[\s\S]*?\n\};/;
if (!re.test(s)) { console.error('READ not found'); process.exit(1); }
const body = Object.entries(map).map(([k, v]) => `'${k}':{src:'${v.src}', dur:${v.dur}, marks:[${v.marks.join(', ')}]` +
  (v.lines ? `,\n    lines:[${v.lines.map(l => `[${l.join(',')}]`).join(',')}]` : '') + '}').join(',\n  ');
s = s.replace(re, () => `const READ = {\n  ${body}\n};`);
fs.writeFileSync(E, s);
console.log('READ filled:', Object.keys(map).length, 'clips,', Object.values(map).reduce((n, v) => n + (v.lines ? v.lines.length : 0), 0), 'lines');
