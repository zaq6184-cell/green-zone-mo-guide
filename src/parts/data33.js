/* ================= 26 Nov 2026: links to the National Antimicrobial Guideline's updated topics =================
   The content round approved by the guide owner on 25 Nov 2026 (CONTENT-DRAFT-2026-11.md, item 2). The National Antimicrobial
   Guideline (NAG, Ministry of Health, online, https://sites.google.com/moh.gov.my/nag) updated several topics in Dec 2025 and
   Jan 2026. Its home page reads: "No part of this website, including text, images, and media, may be printed or distributed in
   any other form without the prior written permission of the copyright owner." So these are links and topic names only, read
   on its What's new page on 25 Nov 2026: no regimen, dose or table is copied (rule 8), and the ebook's own lines stay first
   (rule 5). The NAG gives month and year only, and does not say what changed in each topic.
   Each link is added to an outcome, whose https: links open in a new tab. The diabetic foot CPG is in the page's second part
   (build.js, HEAVY): where it has not arrived yet, its links join it then (MORE_AFTER, as data20.js does). */
(function(){
  const NAG = 'https://sites.google.com/moh.gov.my/nag/contents/';
  const addLinks = (id, node, ...l) => { const n = P[id] && P[id].nodes[node]; if (n) n.links = [...(n.links || []), ...l]; };

  /* Cellulitis: the ebook names no antibiotic for outpatient cellulitis (its gap says so) */
  addLinks('cellulitis', 'opd',
    [NAG + 'section-a-adult/a14-skin-soft-tissue-infections', 'National Antimicrobial Guideline: cellulitis (2.5), updated Dec 2025'],
    [NAG + 'section-c-clinical-pathways-in-primary-care/c6-skin-and-soft-tissue-infection', 'NAG primary care: skin and soft tissue infection, updated Jan 2026']);

  /* Pneumonia: the ebook names no outpatient antibiotic for CAP (its gap says so) */
  addLinks('pneumonia', 'opd',
    [NAG + 'section-a-adult/a11-respiratory-infections', 'National Antimicrobial Guideline: CAP (section 1), updated Dec 2025 and Jan 2026'],
    [NAG + 'section-c-clinical-pathways-in-primary-care/c1-acute-bronchitis-and-pneumonia', 'NAG primary care: acute bronchitis and pneumonia']);

  /* Animal bites: the wound itself (no rabies risk), and the Animal Bite Clinic referral */
  const bite = [NAG + 'section-a-adult/a14-skin-soft-tissue-infections', 'National Antimicrobial Guideline: bite-related infections (2.6), updated Dec 2025'];
  addLinks('animal-bites', 'wound', bite);
  addLinks('animal-bites', 'abc', bite);

  /* Renal colic with urosepsis or pyelonephritis: referred to urology; the NAG's UTI chapter for reference */
  addLinks('renal-colic', 'uro', [NAG + 'section-a-adult/a17-urinary-tract-infections', 'National Antimicrobial Guideline: UTI and urosepsis (sections 2 to 4), updated Dec 2025']);

  /* Fever after a flood: leptospirosis (MOH circular Bil. 26/2021, data28.js) */
  addLinks('infection-alerts', 'lepto', [NAG + 'section-a-adult/a16-tropical-infections', 'National Antimicrobial Guideline: leptospirosis (A16, 5)']);

  /* The diabetic foot CPG (second part): mild, moderate and severe infection */
  const foot = () => ['mild', 'mod', 'sevx'].forEach(k => addLinks('diabetic-foot-cpg', k, [NAG + 'section-a-adult/a9-orthopaedic-infections', 'National Antimicrobial Guideline: diabetic foot infections (2.1), updated Dec 2025']));
  if (P['diabetic-foot-cpg']) foot(); else (globalThis.MORE_AFTER = globalThis.MORE_AFTER || []).push(foot);
})();
