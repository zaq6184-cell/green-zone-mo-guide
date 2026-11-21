/* ================= 21 Nov 2026: the documents left out of the first announcements round =================
   Krishna, 21 Nov 2026: "add the documents that was left out" (the national documents and the two CME decks listed as his
   call when the department's memos went in). Each is read from its page images into a transcription on this PC
   (sources/telegram/edhkl-announcements/work/reads/, git-ignored), every number checked on an enlarged crop. National
   circulars and guides go in as labelled notes with their own number and date; the CME decks as department teaching notes
   with their slide (as the triage course decks were on 10 Nov 2026). None replaces the ebook (rule 5): where one differs from
   it, the difference is under Still to confirm. Nothing here is from memory (rule 8). */
(function(){
  const add = (k, o) => { MEMOS[k] = Object.assign({list:false}, o); };
  const addLinks = (n, l) => { if (n) n.links = [...(n.links || []), l]; };

  /* ---------- Discharge at own risk: the MOH procedure (Director General's circular Bil. 24/2021) ---------- */
  add('kpk-aor', {kind:'MOH circular', ref:'Surat Pekeliling KPK Bil. 24/2021, KKM.600-1/4/20 JLD 3 (50)', date:'13 Dec 2021',
    t:'Prosedur mengenai pesakit yang ingin discaj dari hospital atas risiko sendiri',
    pages:[[1, 'Letter, p1'], [2, 'Letter, p2'], [3, 'Letter, p3'], [4, 'Procedure 1'], [5, 'Procedure 2'], [6, 'Procedure 3'], [7, 'Procedure 4'], [8, 'Procedure 5'], [9, 'Procedure 6'], [10, 'Procedure 7'], [11, 'Borang A, p1'], [12, 'Borang A, p2'], [13, 'AOR checklist']],
    cap:'The circular as circulated, a page at a tap: the covering letter, the procedure (printed pages 1 to 7) and its two blank forms. The signature, an e-mail address and the handwritten notes are covered; the distribution lists are left out.'});
  const S = P['safe-practice'];
  if (S && S.nodes.menu){
    S.nodes.menu.opts.splice(S.nodes.menu.opts.findIndex(o => o[1] === 'leave') + 1, 0, ['Own risk: the MOH procedure (2021)', 'aorkpk']);
    S.nodes.aorkpk = {end:'neutral', fig:'memo-kpk-aor', title:'Discharge at own risk: what the MOH procedure asks of the doctor (circular Bil. 24/2021)', items:[
      'Not for anyone under 18: the procedure does not apply to children, who come under the Child Act 2001 (procedure 1.3); its form says a child under 18 may not be discharged this way (Borang A)',
      'The patient may leave unless a law allows them to be held: the Prevention and Control of Infectious Diseases Act 1988 [Act 342], the Mental Health Act 2001 [Act 615] or the Child Act 2001 [Act 611] (2.6)',
      'Advise every patient on the treatment plan, its risks and possible complications: effective communication and informed consent matter (3.1)',
      'Make sure the patient is not an infectious case that puts the public at risk (3.2)',
      'Give enough medicine and a follow-up appointment at the clinic (3.3); sick leave covers the whole inpatient stay (3.4)',
      'See and examine the patient, find out the reasons for leaving and record them in detail in the clinical notes (3.7.2.1)',
      'Decide whether discharge is suitable or safe; if it is not, explain to the patient and family why the patient cannot go yet (3.7.2.2)',
      'Complete the discharge form and the other documents as for a normal discharge. Borang A, the AOR declaration, is signed by a witness (usually a nurse) and the duty doctor after the patient or next of kin completes it (3.7.2.3)',
      'Going to another facility: stabilise the patient first; a move to a private hospital, with its transport and booking, is arranged by the patient or family (3.7.2.4)',
      'A complete referral letter goes with the patient: the diagnosis, the tests and imaging done with their results, and the treatment including medicines; file a copy in the case note (3.7.2.5). Lab results, and X-ray, CT or MRI films with their reports, go with it when the patient will be treated elsewhere (3.7.2.6, 3.7.2.7)',
      'A hospital ambulance if the patient needs one and the hospital can provide it, charged under the Fees (Medical) Order 1982 (3.7.2.8)',
      'The doctor and hospital are protected only if every step, this circular included, is shown to have been followed (3.5)'],
      links:[['#safe-practice--leave', 'Leaving the department: the department policy 2026'], ['#safe-practice--aor', 'DAMA or AOR: the course checklist']],
      gap:'Source: Surat Pekeliling Ketua Pengarah Kesihatan Bil. 24/2021, "Prosedur mengenai pesakit yang ingin discaj dari hospital atas risiko sendiri", KKM.600-1/4/20 JLD 3 (50), 13 Dec 2021 (received by the HKL emergency office on 20 Dec 2021); it cancels circular Bil. 11/2013. A national circular, in the guide\'s own words with its paragraph numbers. It is written for ward inpatients and never mentions the emergency department; how the department applies it in the ED is under Still to confirm. The nurse\'s and ward sister\'s duties (3.7.1, 3.7.3) are on its pages.'};
    addLinks(S.nodes.leave, ['#safe-practice--aorkpk', 'Own risk: the MOH procedure (2021)']);
    addLinks(S.nodes.aorok, ['#safe-practice--aorkpk', 'Own risk: the MOH procedure (2021)']);
    S.kw = ((S.kw || '') + ' atas risiko sendiri borang a').trim();
  }

  /* ---------- Infection alerts: leptospirosis after floods (circular Bil. 26/2021) and smoking products (Bil. 25/2026) ---------- */
  add('kpk-lepto', {kind:'MOH circular', ref:'Surat Pekeliling KPK Bil. 26/2021, KKM.600-29/4/43 Jld.2(18)', date:'31 Dec 2021',
    t:'Pengurusan kes leptospirosis semasa dan selepas banjir',
    pages:[[1, 'Page 1'], [2, 'Page 2'], [3, 'Page 3: pre-emptive treatment'], [4, 'Page 4: samples, reports'], [5, 'Page 5'], [6, 'Lampiran 2: flow chart'], [7, 'Lampiran 5: case definition'], [8, 'Lampiran 5: notification']],
    cap:'The circular\'s five pages, its flow chart and its case definition, a page at a tap; the signature, an e-mail address and the handwritten notes are covered. The prophylaxis plan, laboratories and report forms (Lampiran 1, 3, 4) are not shown.'});
  const I = P['infection-alerts'];
  if (I && I.nodes.menu){
    const at = I.nodes.menu.opts.findIndex(o => o[1] === 'notify');
    I.nodes.menu.opts.splice(at, 0, ['Fever after a flood: leptospirosis', 'lepto'], ['Smoking products and vaping: notify within 24 hours', 'vape']);
    I.nodes.lepto = {end:'neutral', fig:'memo-kpk-lepto', title:'Fever after a flood: treat as suspected leptospirosis (MOH circular Bil. 26/2021)', items:[
      'Anyone at an MOH facility with fever and exposure to floods or post-flood cleaning gets pre-emptive treatment as suspected leptospirosis (3.2.3, p3)',
      'Adult: doxycycline 200 mg stat, then 100 mg BD for 5 to 7 days (3.2.4, p3; the flow chart, Lampiran 2)',
      'Pregnant, or allergic to doxycycline: azithromycin 1 g on day 1, then 500 mg once daily for the next 2 days (3.2.4, p3)',
      'Child under 8 years, in the flow chart only (Lampiran 2, p15), as printed: "Ampicilin 75-100mg/kg oral dose 6 hourly for 7 days" or amoxicillin 50 mg/kg dose oral for 7 days, its interval printed "608 hourly" (under Still to confirm). No regimen is printed for children aged 8 and over',
      'Admitted suspected cases: take a sample for a confirmatory test, MAT or PCR, and send it to the zone laboratory; for Kuala Lumpur and Putrajaya, the IMR (3.3.1 to 3.3.2, p4; Lampiran 3)',
      'Confirmed (Lampiran 5, p19): a clinical or probable case with any one of five tests: MAT, titre ≥ 1:400 on a single serum or a four-fold or greater rise on paired sera; a positive PCR (samples within 10 days of onset); a positive culture (blood within 7 days of onset, urine after the 10th day); leptospires shown in tissue by immunohistochemical staining (e.g. after death); or, where laboratory capacity is not well established, positive results on two different rapid diagnostic tests',
      'Report every case given pre-emptive treatment to the District Health Office daily, for 30 days from the date the flood recedes (3.4.1, p4)',
      'Notify probable cases (a clinical case with a positive ELISA or other rapid test) by the existing procedure (3.4.2, p4); Lampiran 5 asks for probable and confirmed cases within one week of diagnosis, on the notification form or CDCIS eNotification (p20)',
      'Prophylaxis for flood victims, volunteers and flood workers is given by the health teams: doxycycline 200 mg stat, then 200 mg once a week while exposed; azithromycin 500 mg stat, then once a week, if pregnant or allergic to doxycycline (3.1.3, p2; Lampiran 1)'],
      links:[['#infection-alerts--notify', 'Notifying an infection']],
      gap:'Source: Surat Pekeliling Ketua Pengarah Kesihatan Bil. 26/2021, "Pengurusan kes leptospirosis semasa dan selepas banjir", KKM.600-29/4/43 Jld.2(18), 31 Dec 2021 (received by HKL on 3 Jan 2022). A national circular, in the guide\'s own words with its paragraphs; doses as printed. It never names the emergency department, its flow chart is titled for primary care, and it prints no admission criteria.'};
    I.nodes.vape = {end:'neutral', title:'Smoking products, vaping included: notify an acute or critical case within 24 hours (MOH circular Bil. 25/2026)', items:[
      'Suspected case: any smoking product used in the 90 days before the symptoms began, with no clear other diagnosis or cause (guideline 6.1, p26). Smoking products include tobacco (heated and smokeless too), vape liquid or gel, and tobacco substitutes (2.1 to 2.4, p21)',
      'Notify every suspected case to the District Health Office (PKD) within 24 hours of diagnosis, on the guideline\'s form (Lampiran 2, NOTIFIKASI/PM.FCTC-2026), without waiting for the final diagnosis (circular 3.2, p5; guideline 7, p30)',
      'The form asks for: smoking status and when the patient last smoked; the symptoms and when they began; any respiratory support; test results (FBC, cultures, respiratory panel, ESR, CRP, urine, drug test, chest X-ray or CT, each with its date); and the product, its brand, type and device (pp47 to 48)',
      'EVALI: vape use in the 90 days before symptoms, with changes on chest X-ray or CT; confirmed when the first tests find no lung infection, probable when an infection is found that the clinical team does not think is the main cause of the lung injury (guideline 6.2, p27)',
      'No lung changes: a case other than EVALI, with cardiovascular, gut or neurological symptoms, no infection found and/or a clinical toxidrome, as the guideline prints it (6.3, p28; the toxidromes, Lampiran 1, p46)',
      'The hospital makes a police report when there is strong evidence of an illicit substance: a positive urine drug test and a seized item suspected to contain it (guideline 8.1, p32)',
      'Afterwards, the specialist or MO confirms the final diagnosis so the PKD can complete its investigation (guideline 7, p30)',
      'Treatment: the guideline gives none; it points to the CPG Management of EVALI (2021) (p24)'],
      links:[['#infection-alerts--notify', 'Notifying an infection']],
      gap:'Source: Surat Pekeliling Ketua Pengarah Kesihatan Bil. 25/2026, "Arahan notifikasi situasi akut atau kritikal akibat produk merokok", KKM.600-40/1/10 Jld. 2 (58), 19 Oct 2026, with its Garis Panduan Notifikasi, Edisi 2026 (circulated to the department\'s specialists and MOs on 23 Oct 2026). The guideline prints "Hak cipta terpelihara", so this is in the guide\'s own words with its pages, and its pages are not shown. It names no system, fax or e-mail for sending the form. Circular Bil. 26/2026, named with it, was not in the file circulated.'};
    I.kw = ((I.kw || '') + ' leptospirosis lepto banjir flood doxycycline vape vaping evali rokok elektronik smoking notifikasi').trim();
  }

  /* ---------- Behavioural disturbance: the CME deck on the aggressive patient (department teaching, rule 6) ---------- */
  const B = P['behavioural-disturbance'];
  if (B){
    if (!B.hero) B.hero = 'aggress';
    const D = 'CME deck "Guidelines on management of aggressive patient" (based on the MOH guideline of Nov 2016), circulated to the department on 13 Oct 2026';
    B.dept = [...(B.dept || []), {h:'Managing the aggressive patient: the department\'s CME deck', src:D + '. A department teaching note (standing rule 6), with its slides. Its dose table (slide 53) is not copied: the ebook\'s own table on this pathway stays the department\'s, and how the two compare is under Still to confirm.', items:[
      'Restraint is chemical or physical (slide 46). As the deck quotes the Mental Health Regulations 2010 (Part V): an MO or registered medical practitioner prescribes it; in an emergency the MO may authorise a nurse or medical assistant, who then tells the MO which drugs were given (slide 48)',
      'Under restraint, an acutely disturbed patient is visited by nursing staff every 15 minutes, and the MO examines the patient at intervals of not more than 4 hours; vital signs as often as the MO orders (slide 49)',
      'Not for a minor below 12; no seclusion for more than 8 hours in a row; physical restraint beyond 8 hours needs a psychiatric review (slide 47)',
      'Record the drug or form of restraint, the indication, who approved or authorised it, who gave it, the time, and who authorised its removal (slide 49)',
      'Never used as restraint: strings, ropes or raffia; handcuffs, shackles or pasung; body restraint; a strait jacket; chains; wire; bandage; damaged equipment (slide 50)',
      'Choose by the cause (slide 52, the guideline\'s Figure 5): with delirium, treat its cause and avoid benzodiazepines unless alcohol or benzodiazepine withdrawal is suspected; intoxication with a CNS stimulant, a benzodiazepine; with a CNS depressant such as alcohol, avoid benzodiazepines',
      'As printed (slide 52): "Parenteral Midazolam should ONLY be used in settings where specialized resuscitation is available"',
      'After sedation: a safe position with a clear airway; monitor airway, BP, pulse, temperature, respiratory rate, pupils and GCS, with blood glucose, ECG and oxygen saturation; look for adverse effects, overdose and organic causes (slide 51)',
      'Four-point restraint: padded cuffs on both wrists and ankles, fixed to the frame of the bed or stretcher, not its rails; supine, head raised 30°, hand position changed hourly; ideally a team of five, a leader and one per limb; once secured, check each limb\'s circulation (slides 54 to 56)']}];
  }

  /* ---------- Reading a CT brain: the department's CME (neuroradiology, 27 Jan 2026), in the guide's own words ---------- */
  const CT = n => `Source: "CT Brain", ED CME by the HKL neuroradiology team, 27 Jan 2026, slide ${n}. A department teaching note (standing rule 6), in the guide's own words: the deck prints no reproduction terms and its pictures come from other sources, so none is copied.`;
  P['ct-brain'] = {title:'Reading a CT brain: the ED CME (Jan 2026)', grp:'rules', sub:'protocol', isnew:true, hero:'ctbrain',
    src:'CT Brain, ED CME, HKL neuroradiology, 27 Jan 2026',
    lead:'What the department\'s CT brain teaching session showed, one topic at a tap: windows, blood, fractures, stroke, swelling and artefacts. A teaching note, not a reporting standard: the radiologist\'s report and the EP\'s review stand.',
    kw:'ct brain ct head computed tomography window edh sdh sah subdural extradural epidural subarachnoid bleed haemorrhage aspects stroke early signs midline shift mass effect skull fracture suture artefact',
    start:'menu', nodes:{
      menu:{q:'What do you want to read?', opts:[['Windows: why the same slice looks different', 'win'], ['Blood: how old, and where', 'bleed'], ['Skull fracture or suture?', 'frac'], ['Acute stroke: what to give, what to look for', 'stroke'], ['Swelling and mass effect', 'mass'], ['Artefacts and traps', 'art']]},
      win:{end:'neutral', title:'Windows', items:[
        'The deck shows four windows, width (WW) and level (WL) as printed: brain WW 80, WL 40; subdural WW 150, WL 50; narrow WW 8, WL 32; bone WW 1500, WL 500 (slide 4)',
        'It pairs the same slices in a subdural window, a stroke window and a bone window (slide 5)',
        'Basal cisterns: the suprasellar cistern should look like a pentagon, and the ambient and quadrigeminal plate cisterns like the smile of the "ventricular face" (slide 11)'], gap:CT('4, 5 and 11')},
      bleed:{end:'neutral', title:'Blood: how old, and where', items:[
        'Acute blood is denser (brighter) than water; the brain is about 70 to 80% water (slide 12)',
        'Blood changes with time: hyperdense when acute (within 72 hours), isodense with brain when subacute (1 to 3 weeks), hypodense when chronic (more than 3 weeks) (slide 13)',
        'Extradural: between skull and dura, biconvex; usually does not cross suture lines; commonly with a skull vault fracture, from a torn middle meningeal artery (slide 15)',
        'Subdural: between dura and arachnoid, crescent shaped; not limited by sutures; common in the elderly and in alcoholics with atrophy (slide 16)',
        'Subarachnoid: within the sulci and basal cisterns. In non-traumatic cases, or traumatic ones with a large amount in the basal cisterns, a ruptured aneurysm must be excluded; where the blood lies is one of the best clues to where the aneurysm is (slides 17, 18)',
        'Contusions: common in the anterior cranial fossa and temporal poles (slide 19)',
        'Swirl sign: unclotted fresh blood, darker than the clot around it, means active bleeding and predicts that the haematoma will grow (slide 24)',
        'Physiological calcifications (choroid plexus, pineal, basal ganglia): the deck sets a "Blood?" in the brain window beside the same area in the bone window (slide 25)'], gap:CT('12 to 25')},
      frac:{end:'neutral', title:'Skull fracture or suture?', items:[
        'Fracture: a sharp lucency with non-sclerotic borders. Suture: an interdigitating, zigzag line with sclerotic borders',
        'Fracture: widens as it nears a suture. Suture: no diastasis',
        'Fracture: can cross suture lines. Suture: merges with the next suture, never cuts across it',
        'Fracture: usually one-sided or asymmetric. Suture: usually both sides, fairly symmetric',
        'Fracture: commonly with soft tissue swelling or haematoma over it. Suture: no soft tissue swelling'], gap:CT(26)},
      stroke:{end:'neutral', title:'Acute stroke: what to give the radiologist, and the early signs', items:[
        'When requesting imaging, give: the symptoms and the affected side; the time of onset; the vital signs, especially the blood pressure; the examination; your clinical suspicion (slide 33)',
        'CT in acute stroke: to detect infarcts, to exclude haemorrhage or stroke mimics, and to follow progress (slide 29)',
        'Five early signs: a hyperdense artery; blurred basal ganglia; loss of the insular ribbon; hypoattenuating brain; sulcal effacement (slides 34 to 39)',
        'Hypoattenuation is highly specific for irreversible damage within the first 6 hours; each 1% rise in brain water lowers CT density by 2.5 HU; a larger hypodensity means a larger infarct, more severe symptoms and a higher risk of haemorrhage (slide 38)',
        'ASPECTS scores the MCA territory out of 10, a point off for each region affected (M1 to M6, caudate, lentiform, insula, internal capsule). ASPECTS ≤ 7 means a worse functional outcome at 3 months and a higher risk of symptomatic haemorrhage (slide 40)',
        'Perfusion: the core infarct is tissue that cannot be saved; the penumbra has reduced flow and may recover with treatment; the outer zone (oligaemia) is likely to survive without it (slides 41 to 43)'],
        links:[['#calc-cthr', 'Canadian CT Head Rule'], ['#ed-scores--abcd2', 'ABCD2 after a TIA']], gap:CT('29 to 43')},
      mass:{end:'neutral', title:'Swelling and mass effect', items:[
        'Vasogenic oedema: the blood-brain barrier breaks down and fluid leaks out of the vessels; seen with tumours and abscesses (slide 45)',
        'Cytotoxic oedema: the cells\' pumps fail and sodium and water stay inside them; seen in acute ischaemic stroke (slide 45)',
        'Signs of mass effect: sulcal effacement, ventricular effacement, midline shift, mass effect on the other side, and effaced basal cisterns (slide 46)'], gap:CT('45 and 46')},
      art:{end:'neutral', title:'Artefacts and traps', items:[
        'Movement blurs the scan: the deck shows the repeat scan beside it (slide 47)',
        'Beam hardening from the petrous bones: the dense skull base often limits the view of the brainstem; if brainstem disease is a specific concern, consider MRI (slide 48)',
        'Metal streaks from dental amalgam or aneurysm clips can hide an acute bleed (slide 49)',
        'Single slice caution, partial voluming: the deck sets a "Blood?" beside the petrous bone (slide 50)'], gap:CT('47 to 50')}
    }};
})();
