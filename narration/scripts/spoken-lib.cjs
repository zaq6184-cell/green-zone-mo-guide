// Spoken forms for the TTS input only: the written leaflet and advice text stay as they are on screen.
// - Units and abbreviations expanded the way a speaker reads them; "&" read as "and" / "dan"; a slash between words as "or" / "atau".
// - Acronyms spelled letter by letter (Malay has no plural -s, so "NSAIDs" is read N. S. A. I. D. in Malay).
// - Web addresses read with "dot" (English) or "titik" (Malay), each part as a speaker would say it.
// - Malay numbers written out in Malay words, so the bilingual voice never reads them in English.
// Also splits a segment's written text into sentence chunks of at most MAX characters for recording.
const ACR = ['FLACC', 'IASP', 'MHPCC', 'NRS', 'VAS', 'ORS', 'MDI', 'NSAIDs', 'NGOs', 'NGO'];
const DOMAIN = {malaysianhospicecouncil:'malaysian hospice council', moh:'M. O. H.', masp:'M. A. S. P.', acadmed:'acad med'};
// Malay: the Kore voice blurs "www", "org" and "my" read as words (heard as "WOBO", or dropped); spelled letter by letter they
// read cleanly, and "acadmed" reads best as one word (tested 10 Nov 2026)
const MS_PART = {www:'W. W. W.', org:'O. R. G.', my:'M. Y.', gov:'G. O. V.', acadmed:'acadmed'};
const MS1 = ['sifar', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan'];
const msNum = n => n < 10 ? MS1[n] : n === 10 ? 'sepuluh' : n === 11 ? 'sebelas' : n < 20 ? MS1[n - 10] + ' belas'
  : n < 100 ? MS1[Math.floor(n / 10)] + ' puluh' + (n % 10 ? ' ' + MS1[n % 10] : '')
  : n < 1000 ? (n < 200 ? 'seratus' : MS1[Math.floor(n / 100)] + ' ratus') + (n % 100 ? ' ' + msNum(n % 100) : '')
  : n < 1e6 ? (n < 2000 ? 'seribu' : msNum(Math.floor(n / 1000)) + ' ribu') + (n % 1000 ? ' ' + msNum(n % 1000) : '') : String(n);
// "N. G. O.s" came out with an extra syllable (heard as "NGO DUS"); "N. G. Os" reads as NGOs
const spell = (a, lg) => a === 'FLACC' ? 'FLACC' : a === 'NGOs' && lg !== 'ms' ? 'N. G. Os' : a.replace(/s$/, '').split('').join('. ') + '.' + (/s$/.test(a) && lg !== 'ms' ? 's' : '');
function say(t, lg) {
  let s = t.replace(/https?:\/\//g, '').replace(/(\.[a-z]{2,4})\/(?=[)\s.;,]|$)/g, '$1');
  s = s.replace(/\b(www\.)?([a-z0-9-]+(?:\.[a-z0-9-]+)+)\b/gi, m => !/\.(my|org|gov|com|net)\b/i.test(m) ? m : lg === 'ms'
    ? m.split('.').map(p => MS_PART[p.toLowerCase()] || DOMAIN[p] || p).join(' titik ')
    : m.replace(/^www\./i, 'w w w.').split('.').map(p => DOMAIN[p] || p).join(' dot '));
  s = s.replace(/\be\.g\.?/g, lg === 'ms' ? 'contohnya' : 'for example');
  s = s.replace(/(\d)\s?ml\b/g, lg === 'ms' ? '$1 mililiter' : '$1 millilitres');
  s = s.replace(/(\d)\s?g\b/g, lg === 'ms' ? '$1 gram' : '$1 grams');
  s = s.replace(/\s*&\s*/g, lg === 'ms' ? ' dan ' : ' and ').replace(/\bMoH\b/g, 'M. O. H.');
  s = s.replace(/([a-z])\s?\/\s?([a-z])/gi, lg === 'ms' ? '$1 atau $2' : '$1 or $2');
  for (const a of ACR) s = s.replace(new RegExp('\\b' + a + '\\b', 'g'), spell(a, lg));
  s = s.replace(/\b([A-Z]{2,})\b/g, m => ACR.some(a => a.startsWith(m)) ? m : m.toLowerCase());
  if (lg === 'ms') s = s.replace(/\b\d+\b/g, d => msNum(+d));
  return s.replace(/\s+/g, ' ').replace(/\.{2,}/g, '.').trim();
}
// Sentence chunks of the written text, at most MAX characters each where a sentence allows (then split at ; or :).
const MAX = 220;
function chunks(text) {
  const sent = text.split(/(?<=[.?!])\s+(?=[A-Z(])/).flatMap(x => x.length <= MAX ? [x] : x.split(/(?<=[;:])\s+/));
  const out = [];
  for (const x of sent) { if (out.length && (out[out.length - 1] + ' ' + x).length <= MAX) out[out.length - 1] += ' ' + x; else out.push(x); }
  return out;
}
module.exports = {say, chunks, msNum};
