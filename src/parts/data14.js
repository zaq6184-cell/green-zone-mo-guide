/* ================= X-ray films with the normal anatomy outlined (12 Nov 2026) =================
   Krishna, 12 Nov 2026: "use real films", and for the X-ray guide "add the complete outline anatomy of each part in the x-ray
   itself so that junior mo can identify between Normal anatomy/bone with abnormal one". Decisions the same day: only films
   that are public domain, CC0, CC BY or CC BY-SA, with no patient marking; labelled films on Wikimedia Commons and Wikipedia's
   anatomy articles are admitted as the sources of bone and structure names (rule 8); views with no usable film stay without one.
   Each film: its key is its file (app/xray/<key>.webp); t (title), w and h (pixels), credit (author, licence and source, as the
   licence asks), names (where the structure names come from) and parts: [{k, t, p}] with p the outline in film pixels.
   The outlines are the guide's own drawing over the film, traced by eye: a teaching aid, not a measurement.
   XRAY-IMAGES.md lists every film found, with its page, licence and attribution line. */
const XFILMS = {
  'wrist-pa': {t:'Normal wrist, PA view', w:690, h:980,
    alt:'X-ray of a normal left wrist, PA view',
    credit:'Film: Mikael Häggström, M.D., "X-ray of normal wrist by dorsoplantar projection (crop)", CC0 1.0, via Wikimedia Commons. Outlines: this guide.',
    names:'Names as labelled on "Accessory bones of the wrist" (Mikael Häggström, CC0, Wikimedia Commons).',
    parts:[
      {k:'radius', t:'Radius', p:[[385,980],[372,820],[345,700],[318,600],[312,560],[325,542],[420,522],[500,482],[545,424],[578,415],[600,470],[598,560],[580,680],[560,800],[550,980]]},
      {k:'ulna', t:'Ulna', p:[[140,980],[150,800],[135,680],[120,580],[122,530],[140,505],[165,498],[178,520],[190,545],[240,538],[290,548],[308,580],[300,620],[270,700],[250,820],[245,980]]},
      {k:'scaphoid', t:'Scaphoid', p:[[430,338],[470,318],[520,326],[542,362],[548,400],[520,440],[470,480],[420,505],[400,480],[408,440],[428,400]]},
      {k:'lunate', t:'Lunate', p:[[270,470],[300,430],[345,414],[395,426],[400,470],[385,515],[330,530],[285,505]]},
      {k:'triquetrum', t:'Triquetrum, with the pisiform lying over it', p:[[160,360],[185,325],[230,320],[270,360],[300,400],[290,430],[240,480],[190,460],[165,420]]},
      {k:'capitate', t:'Capitate', p:[[320,235],[345,205],[410,205],[440,240],[435,300],[425,360],[400,405],[345,412],[320,385],[318,300]]},
      {k:'hamate', t:'Hamate', p:[[215,225],[245,200],[300,205],[322,240],[320,330],[300,385],[270,355],[240,300],[215,260]]},
      {k:'trapezoid', t:'Trapezoid', p:[[445,225],[490,205],[530,225],[540,275],[520,310],[470,310],[440,285]]},
      {k:'trapezium', t:'Trapezium', p:[[530,230],[575,205],[615,235],[630,290],[600,335],[550,335],[535,290]]}
    ]}
};
/* Dengue (Krishna, 12 Nov 2026: "Follow dengue cpg", and "for the dengue topic in the app. please follow the latet cpg 2026"):
   the CPG, 4th edition, is the lead for dengue. The home route and searches open the CPG entry, and the ebook's pathway says so
   on its first step and lists the CPG first under See also. The ebook's own pathway is left as printed (rule 5). */
if (P['dengue'] && P['dengue-cpg']){
  const first = P['dengue'].nodes[P['dengue'].start];
  const note = 'For dengue this guide follows the CPG Management of Dengue in Adults, 4th edition (2026): open that entry first. The pathway below is the ebook\'s, as printed; it follows the 3rd edition (2015).';
  first.hint = first.hint ? note + ' ' + first.hint : note;
  P['dengue'].see = [['#dengue-cpg', 'Dengue CPG, 4th edition (2026): follow this first'], ...(P['dengue'].see || []).filter(s => s[0] !== '#dengue-cpg')];
}
/* Dengue triage (Krishna, 12 Nov 2026: "dengue part : MTS level 4, Green"): pregnancy, age 65 and over, and obesity follow the
   Quick Reference's Group B1 (p5: possible referral to hospital, MTS level 4, Green), not Appendix 7's high-risk line (Yellow,
   MTS level 3), which was the choice of 9 Nov 2026. The three leave the warning-signs step and join the co-morbids step, in the
   Quick Reference's wording. Nothing else in either step changes. */
if (P['dengue-cpg'] && P['dengue-cpg'].nodes.ws && P['dengue-cpg'].nodes.cm){
  const ws = P['dengue-cpg'].nodes.ws, cm = P['dengue-cpg'].nodes.cm;
  const moved = ['High risk: pregnancy', 'High risk: > 65 years old', 'High risk: morbid obesity'];
  if (moved.every(m => ws.items.includes(m))){
    ws.items = ws.items.filter(i => !moved.includes(i));
    ws.q = 'Warning signs or unstable co-morbids?';
    ws.hint = 'Pregnancy, age 65 and over, and obesity are not asked here: they are in Group B1 (MTS level 4, Green) at the next step, as the Quick Reference prints them on p5 and as Tables 6 and 8 of the CPG do. Decided at the guide owner\'s instruction on 12 Nov 2026; Appendix 7 of the CPG asks about high risk at this step instead. All pregnant patients with confirmed dengue should be hospitalised (p72).';
    cm.items = [...cm.items, 'Pregnancy', '≥65 years old', 'Obesity'];
  }
}
/* Where each film is shown: on the step of the X-ray guide that reads it */
if (P['xray-guide'] && P['xray-guide'].nodes.wrj) P['xray-guide'].nodes.wrj.fig = 'xf-wrist-pa';
/* Dengue Quick Reference (Krishna: the dengue topic follows the 2026 CPG; he supplied its Quick Reference).
   One more reference tab on the CPG entry: what the Quick Reference for Healthcare Providers, Management of Dengue in Adults
   (Fourth Edition) (MaHTAS, 12 pages, no date printed) says that the entry, built from the full CPG, does not yet carry:
   the MISSING rows and the missing half of the IN (part) rows of CPG-REVIEW-DENGUE-QR.md. The Quick Reference prints no
   reproduction wording, so each point is in the guide's own words, with every number as printed and its page. No table here
   (dTable in engine.js looks tables up by heading), and no existing node, option or note of the entry is changed. */
if (P['dengue-cpg'] && P['dengue-cpg'].notes){
  P['dengue-cpg'].notes.push({l:'Quick Reference, 2026', foot:'From the Quick Reference for Healthcare Providers: Management of Dengue in Adults (Fourth Edition), MaHTAS, with its page numbers, in the guide\'s own words: it prints no reproduction terms, so nothing here is quoted.', notes:[
    {h:'What this tab is', src:'Quick Reference for Healthcare Providers: Management of Dengue in Adults (Fourth Edition), MaHTAS, 2026 (no date is printed in it)', items:[
      'Points from the Quick Reference that the rest of this entry, built from the full CPG, does not carry. They are in the guide\'s own words, not quoted, each with the Quick Reference\'s page. Every number is as the Quick Reference prints it.']},
    {h:'Key messages', src:'Quick Reference, p2', items:[
      'Suspect dengue in every patient who presents with an acute febrile illness.',
      'Critical phase without shock: adjust the fluid rate often on the clinical signs. Do not run a fixed rate.',
      'Dengue shock: assess fluid responsiveness and fluid tolerance with dynamic indices.',
      'Refer every patient with severe dengue to the Intensive Care Unit (ICU) promptly.',
      'If shock persists despite fluid resuscitation, the preferred vasopressor is noradrenaline.',
      'Dengue-associated AKI with metabolic acidosis: do not give sodium bicarbonate routinely to all of these patients.',
      'Dengue vaccination may be considered in all adults unless contraindicated, particularly adults with comorbidities who are at increased risk of severe dengue.']},
    {h:'Phases of the illness', src:'Quick Reference, p3', items:[
      'A course without plasma leakage goes from the febrile phase straight to the convalescent (recovery) phase. Only a course with plasma leakage (warning sign) has a critical phase between them.',
      'The convalescent (recovery) phase lasts 2-5 days.']},
    {h:'History, examination and the rapid test', src:'Quick Reference, p6 (dengue clinical assessment in primary care)', items:[
      'History: ask the date the fever started, as well as the day of illness.',
      'History: ask whether the patient has had a dengue vaccine, and the date of vaccination.',
      'Examination: record the Glasgow Coma Scale and the hydration status, with the general condition and mental status.',
      'Examination: check the respiratory status (tachypnoea, pleural effusion).',
      'Examination: examine the abdomen (tenderness, hepatomegaly, ascites).',
      'Examination: look for a bleeding tendency in the skin, the mucosa and at injection sites.',
      'If the Dengue Rapid Diagnostic Test cannot be done, refer the patient to the nearest facility where it can be done.']},
    {h:'Fluid quota in the critical phase without shock', src:'Quick Reference, p6', items:[
      'The 5% deficit stands for the plasma volume the patient is expected to lose during the critical phase.',
      'For maintenance therapy, the intravenous fluid of choice is crystalloid.']},
    {h:'Predictors of severe dengue', src:'Quick Reference, p7', items:[
      'It is a combination of the predictors (the patient\'s factors, clinical signs, laboratory markers and imaging) that predicts severe dengue.']},
    {h:'Indicators of effective fluid resuscitation', src:'Quick Reference, p7', items:[
      'Read all of these together, not one alone.',
      'Clinical: the general well-being or mental state improves.',
      'Clinical: the peripheries are warm and the BP is stable.',
      'Clinical: capillary refill time ≤ 3sec.',
      'Clinical: the pulse pressure is improving.',
      'Clinical: the tachycardia is settling.',
      'Clinical: the urine output is improving.',
      'Clinical: the tachypnoea is less.',
      'Laboratory: the HCT falls appropriately.',
      'Laboratory: the metabolic acidosis and the lactate improve.']},
    {h:'Algorithms 2 and 3: ultrasound', src:'Quick Reference, p9 (compensated shock) and p10 (decompensated shock)', items:[
      'Algorithm 2 (compensated shock): beside the note on how improvement is assessed, the page adds point-of-care ultrasound, if available.',
      'Algorithm 3 (decompensated shock): the page adds the same line in the same place.']},
    {h:'PoCUS by phase', src:'Quick Reference, p12 (PoCUS guided dengue management). Its ultrasound pictures are not reproduced here.', items:[
      'Febrile phase. Possible complication: dehydration. PoCUS may show a small or flat IVC (<1.5 cm) and a hyperdynamic heart with small LV, RV. Use it to assess volume and guide fluids.',
      'Critical phase. Possible complications: leaking, bleeding, shock and organ dysfunction. PoCUS may show GBWT >3 mm (GBWT: gallbladder wall thickening), a low LVOT VTI (left ventricular outflow tract velocity time integral) and reduced cardiac function. Use it to guide fluids, blood and vasoactives, and reassess serially.',
      'Recovery phase: Day 7 onwards. Possible complications: reabsorption and fluid overload. PoCUS may show a dilated IVC with poor variability, and B-lines (lung comet-tail artefacts) in fluid overload. Use it to confirm resolution, detect fluid overload and de-escalate fluids.',
      'Signs can coexist and overlap across the phases. Clinical judgement and serial PoCUS are essential.',
      'PoCUS adds to the clinical assessment. Always read it with clinical judgement and the patient\'s context.',
      'PoCUS can also help to detect hypovolaemia early, to guide fluid therapy and monitor the response, and to support safe de-escalation during recovery.']}
  ]});
}
