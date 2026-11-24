/* Every caption word against the script, in order (SPEC.md): the captions must read exactly as the narration is scripted. */
const L = require('./layout.json'), S = require('./script.cjs');
const caps = L.captions.map(c => c[1]).join(' '), script = S.map(s => s[1]).join(' ');
console.log(caps === script ? 'captions = script, word for word (' + script.split(/\s+/).length + ' words, ' + L.captions.length + ' groups)' : 'MISMATCH\n' + caps + '\n' + script);
