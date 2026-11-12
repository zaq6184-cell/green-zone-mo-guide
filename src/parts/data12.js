/* ================= The triage course (T.a.g Warrior Course, TAG TEAM, ETD HKL, 2026): department notes (10 Nov 2026) =================
   Krishna admitted the course decks as department documents under standing rule 6 (CLAUDE.md, "Recorded on 10 Nov 2026
   (triage course and X-ray round)"): labelled notes, each with its deck and slide. Built only from what LECTURE-REVIEW.md
   records the slides as saying; the three decks under 10 MB were read again from the files themselves (slide text, tables
   and speaker notes), and agree with the review.

   The five decks (none prints a date; the dates are Drive's or the file's):
   - Lecture 4, Referral System from the Green Zone: 33 slides, Drive copy modified 6 Jul 2026;
   - Lecture 4, Handing over Green Zone cases: 15 slides, modified 6 Jul 2026;
   - Lecture 5, Commonly missed fracture in Green Zone: 39 slides, added to Drive 6 Jul 2026;
   - Lecture 6, Approach to abdominal pain in Green Zone: 23 slides, file modified 12 May 2026;
   - CBD 2, Case based discussions part II: 31 slides, modified 6 Jul 2026.

   What is here:
   - additions to gz-rules (uptriage), referral-rules (the referral map, the orthopaedic work process, the FAST clinic steps,
     how to make a referral), safe-practice (the disposition and AOR checks, the abdominal pain check before discharge),
     and department notes on abdominal-pain and scrotal-pain (the ebook's pathways are unchanged: standing rule 5);
   - three new entries: handover, missed-fractures and cbd-2.

   Left out, each for the department to confirm (the node's gap says so where a case or a slide turns on it): every slide
   that differs from the ebook, a CPG entry or a dated department protocol already in the guide (LECTURE-REVIEW.md, the
   "Differs" lists), and what cannot be used as typed (the handover deck's shift times; the knee X-ray rule's age).
   Not copied: any film, photo or figure; any patient detail; any personal name; the sample letters' made-up names.
   No deck is linked from the app. No fig keys. */

(function(){
  const TAG = 'TAG Warrior Course, ETD HKL, 2026';
  const A = 'Lecture 4 (Referral System from the Green Zone)';
  const B = 'Lecture 4 (Handing over Green Zone cases)';
  const C = 'Lecture 5 (Commonly missed fracture in Green Zone)';
  const D = 'Lecture 6 (Approach to abdominal pain in Green Zone)';
  const E = 'CBD 2 (Case based discussions, part II)';
  const src = (deck, sl) => 'Source: ' + TAG + ': ' + deck + ', ' + sl + '.';
  const WAIT = 'awaits the department\'s confirmation';
  const addLinks = (n, ...l) => { n.links = [...(n.links || []), ...l]; };
  const addSee = (id, ...l) => { if (P[id]) P[id].see = [...(P[id].see || []), ...l]; };
  const addKw = (p, w) => { p.kw = ((p.kw || '') + ' ' + w).trim(); };

  /* ====================================================================================================
     1. Green Zone rules: uptriage (Lecture 4, Referral System, slides 22 to 25)
     ==================================================================================================== */
  const G = P['gz-rules'];
  G.nodes.menu.opts.splice(G.nodes.menu.opts.findIndex(o => o[1] === 'sepsis') + 1, 0, ['Uptriage: think it through, then who to tell', 'uptri']);
  G.nodes.uptri = {q:'Does this patient need more than the Green Zone?',
    hint:'The Green Zone Thinking Framework, "re-triaging promptly and safely": grade each of the five rows green, amber or red. The slide gives no count of amber or red rows that means uptriage. ' + src(A, 'slide 23'),
    info:[
      'General appearance (first look): mild, moderate or severe',
      'Syndromic interpretation: mild, moderate or severe',
      'Intervention (pharmacological, non-pharmacological): non-critical, semi-critical or critical',
      'Investigation: non-urgent, semi-urgent or urgent',
      'Disposition: stable, acute or critical'],
    opts:[['Yes, uptriage: who to tell', 'uphow'], ['Show me the worked example', 'upex']]};
  G.nodes.uphow = {step:'Speak to the team leader of the receiving zone', items:[
    'Discuss with the TL of the receiving zone, Red or Yellow',
    'Speak in person, and pass the patient over for closer monitoring or further intervention',
    'Involve the EP for prompt intervention if needed',
    src(A, 'slide 24')], next:'upppk'};
  G.nodes.upppk = {step:'Inform the PPK in charge', items:[
    'The PPK prepares a bed or stretcher and physically moves the patient to the zone of destination',
    'The slide labels this step "GZ CC"',
    src(A, 'slide 24')], next:'updone'};
  G.nodes.updone = {end:'refer', title:'Uptriaged: complete the clerking and document it', items:[
    'You, the Green Zone MO, complete the initial clerking and document accordingly in your notes',
    'The slide\'s end point: "PT SAFELY UPTRIAGED"',
    'Involve the EP for prompt intervention if needed'],
    links:[['#gz-rules--upex', 'The worked example'], ['#yellow-zone--flow', 'Yellow Zone patient flow'], ['#gz-rules--sepsis', 'Sepsis found in the Green Zone'], ['#cbd-2--c1', 'A case: worse after 4 hours of waiting']],
    gap:src(A, 'slides 23 and 24')};
  G.nodes.upex = {end:'refer', title:'Worked example: post-traumatic pneumothorax, Green Zone to R2', items:[
    'The case: a 21-year-old man, motorbike against car 2 hours ago. Left chest wall pain with mild shortness of breath, speaking in phrases, RR 28, reduced breath sounds on the left, the left chest hyperresonant on percussion. X-ray not done yet',
    'The slide\'s reading: "POST TRAUMATIC PNEUMOTHORAX. NEEDS IMMEDIATE INTERVENTION"',
    'Discuss with the TL of the receiving zone, and pass the patient over to the TL for an immediate eFAST',
    'Inform the PPK in charge: prompt transfer to R2 by wheelchair or bed, whichever is faster',
    'Complete the initial clerking in R2',
    'Involve the EP for prompt intervention if needed'],
    links:[['#gz-rules--uptri', 'The thinking framework'], ['#trauma-walkins', 'Trauma walk-ins']],
    gap:src(A, 'slide 25')};
  addLinks(G.nodes.sepsis, ['#gz-rules--uptri', 'Uptriage: who to tell']);
  addLinks(G.nodes.kk, ['#referral-rules--mapkk', 'What goes to the Klinik Kesihatan (triage course)']);
  addLinks(G.nodes.wait, ['#handover', 'Handing over at the end of the shift']);
  G.refs.push(TAG + ': ' + A + ', slides 22 to 25, uptriaging Green Zone patients (no date on the slides; Drive copy modified 6 Jul 2026)');
  addKw(G, 'uptriage up-triage uptriaging uptriaged re-triage retriage retriaging thinking framework receiving zone team leader tl ppk naik zon');
  addSee('yellow-zone', ['#gz-rules--uptri', 'Uptriage from the Green Zone: who to tell']);

  /* ====================================================================================================
     2. Referral rules: the referral map (slide 3), the orthopaedic work process (slides 9 and 11),
        the FAST clinic steps (slide 12), how to make a referral (slides 18 to 21)
     ==================================================================================================== */
  const R = P['referral-rules'];
  R.nodes.menu.opts.unshift(['Where does this referral go? The referral map', 'map']);
  R.nodes.menu.opts.push(
    ['Orthopaedic trauma: the work process', 'orthwp'],
    ['Make the referral: say it, write it', 'how']);

  /* ---- The referral map ---- */
  R.nodes.map = {q:'What does this patient need?',
    hint:'Two kinds of referral. In-patient: from the ED Green Zone to the on-call MOs. Out-patient: within HKL facilities, to a Klinik Kesihatan or to a private centre. ' + src(A, 'slides 2 and 3'),
    opts:[
      ['Admission to a specific ward', 'mapcall'],
      ['A clinic inside HKL', 'maphkl'],
      ['Primary care: the Klinik Kesihatan', 'mapkk'],
      ['Treatment at a private centre', 'mappriv'],
      ['A special route: orthopaedics, FAST clinic, Animal Bite Clinic, IPR, torsion', 'mapspec']]};
  R.nodes.mapcall = {end:'refer', title:'In-patient referral: the on-call MO', items:[
    'A patient who requires admission to a specific ward: refer from the Green Zone to that team\'s on-call MO',
    'Orthopaedic injuries: the Lampiran 1 check tells an on-call referral from a clinic referral'],
    links:[['#referral-rules--how', 'Make the referral: say it, write it'], ['#referral-rules--ortho', 'Orthopaedics: on call or clinic?'], ['#referral-rules--med', 'Admission to General Medicine'], ['#mau-admission', 'Admission to MAU']],
    gap:src(A, 'slide 3') + ' Left out of this branch: the slide\'s own list of fractures for the on-call MO, which is not the list in Lampiran 1, and its line "Special situation: early TCA", which is unclear. Each ' + WAIT + '.'};
  R.nodes.maphkl = {check:'all', q:'Out-patient referral within HKL: does the patient fit?',
    hint:'The slide gives two inclusion criteria and three exclusion criteria. ' + src(A, 'slide 3'),
    items:[
      'Stable patient',
      'Can be seen days to weeks later',
      'No acute problem requiring urgent review',
      'Admission is not indicated',
      'Not a wound requiring T&S'],
    opts:[['All met', 'maphklok'], ['Not all met', 'maphklno']]};
  R.nodes.maphklok = {end:'refer', title:'Refer to the clinic inside HKL', items:[
    'Stable, and can be seen days to weeks later: an out-patient referral within HKL fits',
    'Pick the clinic in Clinic referrals from the ED',
    'Write it on the HKL referral letter form (Borang Rujukan), to the clinic by name'],
    links:[['#outpatient-referral', 'Clinic referrals from the ED'], ['#referral-rules--howlet', 'Write the referral letter'], ['#emacc', 'EMACC follow-up']],
    gap:src(A, 'slides 3 and 20')};
  R.nodes.maphklno = {end:'neutral', title:'Not for an out-patient clinic referral', items:[
    'The slide excludes from out-patient referral: an acute problem requiring urgent review, a patient in whom admission is indicated, and a wound requiring T&S',
    'A patient who requires admission to a specific ward goes to the on-call MO: the slide\'s in-patient branch'],
    links:[['#referral-rules--mapcall', 'In-patient referral: the on-call MO']],
    gap:src(A, 'slide 3') + ' The slide\'s footnote on patients who keep coming back is left out: its wording differs from two rules already in this guide, and ' + WAIT + '.'};
  R.nodes.mapkk = {end:'refer', title:'Refer to the Klinik Kesihatan', items:[
    'A diagnosis or issue that belongs to Family Medicine',
    'Optimisation of DM and hypertension',
    'Investigating a thyroid swelling or PTB',
    'Wound inspection and STO',
    'Continuation of medication'],
    links:[['#gz-rules--kk', 'Redirect to a Klinik Kesihatan or GP'], ['#gz-rules--gout', 'Gout referrals'], ['#outpatient-referral', 'Clinic referrals from the ED']],
    gap:src(A, 'slide 3') + ' The slide\'s line also sends palpitations to the Klinik Kesihatan; its slide 13 and this guide send them to the MAU FAST clinic. That word is left out and ' + WAIT + '.'};
  R.nodes.mappriv = {end:'refer', title:'A private centre: an open referral', items:[
    'An open referral, addressed "TO WHOM IT MAY CONCERN"',
    'Include: "Patient keen to seek treatment at your centre"',
    'Write it on a Memo, not on HKL letterhead'],
    links:[['#referral-rules--howmemo', 'The memo, with the slide\'s example']],
    gap:src(A, 'slides 3 and 21')};
  R.nodes.mapspec = {q:'Which special route?',
    hint:'The slide names three special out-patient referrals: orthopaedics, the FAST clinic and the Animal Bite Clinic. The deck then shows the IPR criteria and the acute scrotal pain pathway. ' + src(A, 'slides 8 to 17'),
    opts:[
      ['Orthopaedic referral', 'orthwp'],
      ['FAST clinic', 'fast'],
      ['Animal Bite Clinic', 'mapabc'],
      ['Transfer to IPR', 'ipr'],
      ['Acute scrotal pain: testicular torsion', 'maptt']]};
  R.nodes.mapabc = {end:'refer', title:'Animal Bite Clinic: the rabies vaccine pathway', items:[
    'The slide shows the department\'s chart "Clinical pathway and patient flow for rabies vaccine", dated 15.07.2022: the chart this guide already follows',
    'Run it step by step in Animal bites and rabies: the risk of rabies, the wound category, the earlier prophylaxis, the vaccine, the vaccine card, then the Animal Bite Clinic'],
    links:[['#animal-bites', 'Animal bites and rabies (ABC)'], ['#calc-rabies', 'Rabies vaccine calculator']],
    gap:src(A, 'slide 15') + ' No dose is repeated here: the protocol entry carries them.'};
  R.nodes.maptt = {end:'refer', title:'Acute scrotal pain: torsion is a time-dependent referral', items:[
    '"Testicular torsion is a time-dependent diagnosis, a true Urologic Emergency, and early evaluation can assist in urologic intervention to prevent testicular loss"',
    '"Testicular viability significantly decreases 6 hours after the onset of symptoms; hence, early diagnosis is key."',
    'The slide then shows the department\'s Clinical Pathway For Acute Scrotal Pain: urgent, semi-urgent or non-urgent referral to urology or paediatric surgery. Run it in the ebook pathway'],
    links:[['#scrotal-pain', 'Acute scrotal pain pathway']],
    gap:src(A, 'slides 16 and 17')};

  /* ---- The FAST clinic, after the referral ---- */
  R.nodes.fast = {end:'refer', title:'FAST clinic: what happens after you refer', items:[
    'FAST clinic: Bangunan MHKL, level 2, 8:00 am to 4:30 pm',
    '1. You decide the patient is suitable for an out-patient referral: the criteria are in Clinic referrals from the ED',
    '2. Give the patient the referral letter to the FAST clinic and a copy of the ECG and CXR',
    '3. The patient or the next of kin takes the letter to the FAST clinic, and the clinic gives an appointment date',
    '4. The patient attends the clinic. No further investigation needed: discharged with an open memo',
    '5. Further investigation needed: the clinic arranges a stress test, echocardiogram, myoview or other test, and a PC appointment. The patient attends the test, then the PC for the result',
    '6. Result positive: referred to the Cardiology Unit, IJN or Serdang. Result negative: discharged with an open memo'],
    links:[['#outpatient-referral', 'Clinic referrals from the ED: the criteria'], ['#referral-rules--pc', 'Physician Clinic (PC) referral']],
    gap:src(A, 'slide 12') + ' The chart is in Malay; this is the guide\'s English. Its QR code and its link to the criteria were not opened.'};

  /* ---- Orthopaedic trauma: the work process chart of the memo of 17 May 2024 (slide 11), in front of the Lampiran 1 check ---- */
  R.nodes.orthwp = {q:'Trauma case: is a fracture detected, clinically or on the X-ray?',
    hint:'"Work process for referral of orthopedic trauma cases": the chart with the orthopaedic referral memo of 17 May 2024. An X-ray that does not settle whether there is a fracture: refer to the EP on duty (memo, 2.3). ' + src(A, 'slide 11'),
    opts:[
      ['Yes, or undetermined', 'ortho'],
      ['No', 'orthem'],
      ['The memo\'s other points: CMR notes, records, POP', 'orthmemo']]};
  R.nodes.orthem = {step:'No fracture detected: discharge with an EMACC appointment to review the X-ray report', items:[
    'The chart\'s step, as printed: "Discharge with EMACC appointment to review xray report"',
    'At that review, two questions follow: does the report note a fracture, and are the signs or symptoms persisting or increasing?',
    src(A, 'slide 11')], next:'orthrep'};
  R.nodes.orthrep = {q:'At the review: does the X-ray report note a fracture?',
    hint:'Yes: the chart goes to "Indication for urgent referral?", which is Lampiran 1. ' + src(A, 'slide 11'),
    opts:[['Yes', 'ortho'], ['No', 'orthsx']]};
  R.nodes.orthsx = {q:'Persistent or increasing signs or symptoms?',
    hint:'Yes: the chart goes to "Indication for urgent referral?", which is Lampiran 1. ' + src(A, 'slide 11'),
    opts:[['Yes', 'ortho'], ['No', 'orthdc']]};
  R.nodes.orthdc = {end:'discharge', title:'Discharge the patient with advice', items:[
    'No fracture on the X-ray report, and no persistent or increasing signs or symptoms: "Discharge patient with advice"'],
    links:[['#emacc', 'EMACC follow-up'], ['#safe-practice--limb', 'Limbs and fractures: before discharge'], ['#missed-fractures', 'Commonly missed fractures']],
    gap:src(A, 'slide 11') + ' The chart belongs to memo HKL/JK/98/188/3(8)24, 17 May 2024.'};
  R.nodes.orthmemo = {end:'neutral', title:'The orthopaedic memo of 17 May 2024: its other points', items:[
    'CMR: document the examination before and after the CMR in full, the neurovascular examination included (2.1.4)',
    'Records: the orthopaedic team puts the records of patients referred to the on-call team in the "Orthopedic Corner" rack before they go to the record unit (2.6.1)',
    'Records of patients referred from zones other than the Green Zone may not be taken out of those zones (2.6.2)',
    'Pressure sores: refer to the primary team treating the cause of the immobilisation (2.7)',
    'A POP procedure is requested through a Google form (2.8)',
    'The sick certificate book is in a locked box in the POP room, with a procedure to follow (2.9)',
    '"Orthopedic Corner": an examination bed with a curtain, for the orthopaedic team (2.10)'],
    links:[['#referral-rules--orthoc', 'Refer to the orthopaedic team on call'], ['#referral-rules--orthcl', 'Refer to the orthopaedic clinic']],
    gap:'Source: memo HKL/JK/98/188/3(8)24, 17 May 2024, read from its image in the ' + TAG + ': ' + A + ', slide 9 (in Malay; this is the guide\'s English). Left out: its 2.1.1 on who reduces a dislocation when the orthopaedic team cannot do it at once, which goes further than the dislocation line in this guide and ' + WAIT + '.'};
  R.nodes.orthoc.items.push('The orthopaedic team\'s definitive management and diagnosis are documented in the ETD patient\'s notes (the memo\'s work process chart)');
  R.nodes.orthcl.items.push('Before the patient leaves: immobilisation and pain management, the referral letter to the Orthopaedic Clinic, and discharge with advice (the memo\'s work process chart)');
  addLinks(R.nodes.orthoc, ['#referral-rules--orthwp', 'The work process, step by step'], ['#referral-rules--orthmemo', 'The memo\'s other points']);
  addLinks(R.nodes.orthcl, ['#referral-rules--orthwp', 'The work process, step by step']);
  R.nodes.orthoc.gap += ' The work process chart: as shown in the ' + TAG + ': ' + A + ', slide 11.';
  R.nodes.orthcl.gap += ' The work process chart: as shown in the ' + TAG + ': ' + A + ', slide 11.';

  /* ---- How to make a referral: three steps, spoken and written ---- */
  R.nodes.how = {q:'An effective referral: spoken or written?',
    hint:'Three steps either way. 1. A polite introduction. 2. Get their attention: the indication and the relevant information; in writing, the diagnosis first. 3. Manage expectation: what do you want? ' + src(A, 'slide 18'),
    opts:[
      ['Spoken: by phone', 'howsay'],
      ['Written: a letter to a clinic in HKL', 'howlet'],
      ['Written: a memo to a private centre', 'howmemo']]};
  R.nodes.howsay = {end:'neutral', title:'By phone: introduce, get their attention, say what you want', items:[
    '1. Polite introduction: "Hello, I\'m ____ calling from Green Zone Room 5"',
    '2. Get their attention, with the indication and the relevant information: "I\'m referring 17 yo boy with acute abdomen, probably an appendicitis. Patient has periumbilical pain for 2 days, migrating to RIF. Fever 38C, with rebound tenderness at RIF. WBC 14 with leukocytosis. We\'ve given patient PCM and IV morphine"',
    '3. Manage expectation: "I\'m referring for admission."',
    'Then write in the notes the name of the MO you referred to, and the date and time (memo HKL/JK/98/188/3(9)23, 2 Jun 2023)'],
    links:[['#communication--prep', 'Before you pick up the phone'], ['#referral-rules--map', 'Where does this referral go?']],
    gap:src(A, 'slides 18 and 19') + ' The example is the slide\'s own, made up for teaching.'};
  R.nodes.howlet = {end:'neutral', title:'A referral letter: diagnosis first, then what you want', items:[
    'On the HKL referral letter form (Borang Rujukan), to the clinic by name. The slide\'s example goes to the Surgery out-patient clinic, SCACC HKL',
    '1. Introduction',
    '2. Get their attention: the diagnosis first, then the relevant information. The example: a right inguinal hernia; the swelling for 2 years, on and off, bigger over the past 6 months; "5x8cm, completely reducible, non tender"; "AXR no distended bowels"; given analgesics and discharged well',
    '3. Manage expectation: "We are referring this pt to you for assessment of hernia repair."'],
    links:[['#outpatient-referral', 'Clinic referrals from the ED'], ['#referral-rules--howmemo', 'The same case as a memo to a private centre']],
    gap:src(A, 'slide 20') + ' The example is the slide\'s own sample letter; its made-up names are not copied.'};
  R.nodes.howmemo = {end:'neutral', title:'A memo to a private centre: "To whom it may concern"', items:[
    'On a Memo form, not on HKL letterhead, addressed "To whom it may concern"',
    'The same three parts as the letter: the introduction, the diagnosis first with the relevant information, and what you want',
    'The slide\'s example ends: "This pt is keen for further treatment at your center."'],
    links:[['#referral-rules--mappriv', 'A private centre: an open referral'], ['#referral-rules--howlet', 'The letter to a clinic in HKL']],
    gap:src(A, 'slides 3 and 21')};
  R.refs.push(
    TAG + ': ' + A + ', 33 slides (no date on the slides; Drive copy modified 6 Jul 2026): the referral map (slide 3), the orthopaedic memo, Lampiran 1 and work process chart (slides 9 to 11), the FAST clinic (slides 12 and 13), IPR (slide 14), the rabies vaccine pathway (slide 15), acute scrotal pain (slides 16 and 17), effective referral (slides 18 to 21)');
  addKw(R, 'referral map where to refer on-call oncall in-patient inpatient out-patient outpatient private centre private hospital open referral to whom it may concern memo letterhead borang rujukan referral letter surat rujukan effective referral polite introduction manage expectation work process trauma emacc x-ray report pop sick certificate pressure sore orthopedic corner fast clinic stress test echocardiogram myoview ijn serdang thyroid sto wound inspection');
  addSee('communication', ['#referral-rules--how', 'Make the referral: say it, write it (triage course)']);

  /* ---------- Clinic referrals from the ED: point to the map and the FAST steps ---------- */
  const O = P['outpatient-referral'];
  addLinks(O.nodes.where, ['#referral-rules--fast', 'FAST clinic: what happens after you refer'], ['#referral-rules--howlet', 'Write the referral letter']);
  addSee('outpatient-referral', ['#referral-rules--map', 'Where does this referral go? The referral map']);
  O.refs.push(TAG + ': ' + A + ', slides 3, 12 and 13 (no date on the slides; Drive copy modified 6 Jul 2026)');

  /* ====================================================================================================
     3. Safe practice: the disposition and AOR checks (Lecture 4, Referral System, slide 27);
        abdominal pain, the check before discharge (Lecture 6, slides 21 and 22)
     ==================================================================================================== */
  const S = P['safe-practice'];
  S.nodes.menu.opts.splice(S.nodes.menu.opts.findIndex(o => o[1] === 'leave') + 1, 0, ['Disposition: discharge, follow-up, DAMA or AOR', 'dispo']);
  S.nodes.menu.opts.splice(S.nodes.menu.opts.findIndex(o => o[1] === 'abd') + 1, 0, ['Abdominal pain: the check before discharge', 'abdchk']);
  const S27 = src(A, 'slide 27');
  S.nodes.dispo = {q:'How is the patient leaving the Green Zone?',
    hint:'The slide\'s disposition map: admit, or discharge; a discharge is plain, with follow-up, or DAMA or AOR. It gives no list for an admission. ' + S27,
    opts:[
      ['Discharge', 'dcchk'],
      ['Discharge with follow-up: EMACC or EM Watch', 'dcfu'],
      ['DAMA or AOR', 'aor']]};
  S.nodes.dcchk = {check:'all', q:'Discharge: is each part covered?', hint:S27, items:[
    'Diagnosis and issues',
    'Treatment given: in the department, and upon discharge',
    'Safety net: the possible outcome, the advice and the TCA',
    'Checklist: the patient\'s contact information, the prescription slip, the MC and the follow-up'],
    opts:[['All covered', 'dcgo'], ['Not all covered', 'dcfix']]};
  S.nodes.dcgo = {end:'discharge', title:'Discharge: the four parts are covered', items:[
    'Diagnosis and issues; the treatment given, in the department and upon discharge; the safety net; and the checklist of contact information, prescription slip, MC and follow-up',
    'Then the department\'s rules for leaving: the discharge package, and a prescription the pharmacy accepts'],
    links:[['#safe-practice--leave', 'Leaving the department'], ['#safe-practice--rx', 'Prescriptions the pharmacy accepts'], ['#safe-practice--dc', 'Before any discharge'], ['#tools', 'Open the discharge safety check']],
    gap:S27};
  S.nodes.dcfix = {end:'neutral', title:'Not yet: cover the missing part first', items:[
    'The slide lists four parts under Discharge: the diagnosis and issues, the treatment given, the safety net, and the checklist',
    'Cover the part that is missing, then run the check again'],
    links:[['#safe-practice--dispo', 'The disposition check']],
    gap:S27};
  S.nodes.dcfu = {q:'Which follow-up?',
    hint:'Follow-up in the ED is given only through EM WATCH or EMACC (department policy 2026, 32.2.5, p75). The slide says what each is for. ' + S27,
    opts:[['EMACC: the after-care clinic', 'fuemacc'], ['EM Watch: telemedicine', 'fuwatch']]};
  const FUGAP = S27 + ' The slide\'s lines on which results each clinic reviews are left out: they differ from the EMACC and EM Watch entries in this guide, and the point ' + WAIT + '.';
  S.nodes.fuemacc = {end:'refer', title:'Discharge with EMACC follow-up', items:[
    'EMACC (Emergency Medicine After-Care Clinic): to follow up a condition',
    '"Do not include clear cut cases to be referred": a case that clearly needs a referral is referred, not booked into EMACC',
    'Then cover the four parts of a discharge: diagnosis, treatment given, safety net and the checklist'],
    links:[['#emacc', 'EMACC: who is eligible, and how to book'], ['#safe-practice--dcchk', 'The discharge check']],
    gap:FUGAP};
  S.nodes.fuwatch = {end:'refer', title:'Discharge with EM Watch follow-up', items:[
    'EM Watch is for Malaysians',
    'For a follow-up that does not need a physical examination',
    'Then cover the four parts of a discharge: diagnosis, treatment given, safety net and the checklist'],
    links:[['#em-watch', 'EM Watch: who is eligible'], ['#em-watch--book', 'Book EM Watch: the steps'], ['#safe-practice--dcchk', 'The discharge check']],
    gap:FUGAP};
  S.nodes.aor = {check:'all', q:'DAMA or AOR: is each part done?',
    hint:'Consent for AOR needs both: a sound mind, and an understanding of the consequence. ' + S27,
    items:[
      'Sound mind',
      'Understands the consequence: of refusing treatment, and of delaying treatment',
      'Test of understanding done',
      'Discharge plan made',
      'The next best plan given: the patient\'s contact information, the prescription slip, the MC and the follow-up'],
    opts:[['All done', 'aorok'], ['Not all done', 'aorno']]};
  S.nodes.aorok = {end:'discharge', title:'Leaving at own risk: consent, understanding and the next best plan are in place', items:[
    'Consent for AOR: a sound mind, and understands the consequence of refusing or delaying treatment',
    'The understanding tested, and a discharge plan made',
    'The next best plan given: contact information, prescription slip, MC and follow-up',
    'Complete the AOR discharge form: the patient, relative or guardian signs it, with a witness (department policy 2026, 32.3.1 to 32.3.2, p75)'],
    links:[['#safe-practice--leave', 'Leaving the department: the AOR form'], ['#communication--tb', 'Teach-back: test the understanding']],
    gap:S27};
  S.nodes.aorno = {end:'neutral', title:'Not yet: the AOR list is not complete', items:[
    'The slide gives two points as the consent for AOR: a sound mind, and understanding the consequence of refusing or delaying treatment',
    'It then lists the test of understanding, the discharge plan and the next best plan',
    'Complete what is missing before the patient leaves'],
    links:[['#safe-practice--leave', 'Leaving the department: the AOR form']],
    gap:S27 + ' The slide does not say what to do when the patient is not of sound mind or does not understand the consequence.'};
  addLinks(S.nodes.leave, ['#safe-practice--dispo', 'Disposition: the discharge and AOR checks']);
  addLinks(S.nodes.dc, ['#safe-practice--dispo', 'Disposition: the discharge and AOR checks']);

  /* ---- Abdominal pain: the check before discharge ---- */
  const D22 = src(D, 'slide 22');
  S.nodes.abdchk = {check:'all', q:'Abdominal pain: ready to go home?',
    hint:'Reassess the pain, especially before discharging. ' + D22,
    items:[
      'The pain is completely resolved',
      '"Challenge the bowel": the patient is able to eat without problem',
      'Able to pass motion'],
    opts:[['All met', 'abdgo'], ['Not all met', 'abdstay']]};
  S.nodes.abdgo = {end:'discharge', title:'Abdominal pain: the three conditions are met', items:[
    'The pain is completely resolved, the patient eats without problem and is able to pass motion',
    'Give the safety-net advice and document it: the ebook\'s discharge advice is on the Abdominal pain pathway',
    'The other abdominal pain habits still apply: all 4 quadrants examined and documented, and a clear diagnosis (Million Ringgit Habits)'],
    links:[['#abdominal-pain', 'Abdominal pain pathway and discharge advice'], ['#safe-practice--abd', 'Abdominal pain habits'], ['#safe-practice--dcchk', 'The discharge check']],
    gap:D22 + ' The deck\'s safety-net script (slide 23) is left out: two of its points differ from the ebook\'s discharge advice, and the script ' + WAIT + '.'};
  S.nodes.abdstay = {end:'observe', title:'Not ready: keep observing, and reassess', items:[
    '"Before discharging pt with abdo pain, pain must be completely resolved."',
    '"Observation is treatment. Time is diagnostic."',
    'Not sure what the film or the findings show? "Unsure? Ask!"'],
    links:[['#abdominal-pain', 'Abdominal pain pathway'], ['#safe-practice--abd', 'Abdominal pain habits']],
    gap:src(D, 'slides 21 and 22')};
  addLinks(S.nodes.abd, ['#safe-practice--abdchk', 'The check before discharge']);
  addLinks(S.nodes.limb, ['#missed-fractures', 'Commonly missed fractures on X-ray']);
  S.refs.push(
    TAG + ': ' + A + ', slides 26 to 32, disposition in the Green Zone (no date on the slides; Drive copy modified 6 Jul 2026)',
    TAG + ': ' + D + ', slides 21 and 22 (no date on the slides; file modified 12 May 2026)');
  addKw(S, 'disposition discharge checklist safety net tca contact information prescription slip mc follow-up emacc em watch consent sound mind understands consequence test of understanding next best plan challenge the bowel pass motion pain resolved reassess');

  /* ====================================================================================================
     4. Abdominal pain (ebook pathway): department notes from Lecture 6. The pathway itself is unchanged.
     ==================================================================================================== */
  const AP = P['abdominal-pain'];
  const DSRC = sl => TAG + ': ' + D + ', ' + sl + ' (no date on the slides; file modified 12 May 2026)';
  AP.dept = [...(AP.dept || []),
    {h:'A missed appendicitis: eight errors, and the deck\'s answer to each', src:DSRC('slides 2 to 22'), items:[
      '"Standard is safe. Non-standard, be it less or extra, is unsafe."',
      'The case, as the deck tells it: an obese man in his thirties with abdominal pain for 3 days, vomiting and a reduced appetite. BP 216/110. Abdomen soft, tender in the epigastrium. Impression: hypertensive urgency. He was given a blood pressure tablet and an analgesic injection, and had an abdominal X-ray and an FBC. After 90 minutes the WBC was 9.3 and the BP 176/98, and he went home with a blood pressure tablet, an analgesic and a memo to the Klinik Kesihatan to check his blood pressure',
      'Two days later he was in septic shock with an acute abdomen. At operation: suppurative appendicitis with a gangrenous appendix. He died after the operation',
      '1. Incomplete history. Take the pain history: site, onset, character, radiation, timing, exacerbating factor, severity. Ask the associated symptoms: nausea and vomiting, fever',
      '2. Inappropriate examination. "PROPERLY EXAMINE THE ABDOMEN! LIE THE PATIENT FLAT!"',
      '3. Incomplete, incorrect working diagnosis. For this case the deck writes: 1. Acute abdomen. 2. Hypertensive urgency',
      '4. Incorrect tests: see "Which test, and why" below',
      '5. Incorrect interpretation of the FBC. Sensitivity (SNOUT): a negative result rules out, a positive one is useless. Specificity (SPIN): a positive result rules in, a negative one is useless',
      '6. Falsely reassuring improvement. "Numbers on pieces of paper can deceive you": a normal WBC in an acute abdomen; a normal ABG in a patient with respiratory distress; a normal ECG in severe chest pain; a dropping HCT in a haemodynamically stable dengue patient',
      '7. Incorrect X-ray interpretation. "Grow your knowledge." "Unsure? Ask!"',
      '8. No reassessment of pain, especially before discharging: see "Reassess the pain before discharge" below',
      'The doses in the case are not copied: the deck shows them as part of the management that went wrong. Its gloss on hypertensive urgency (slide 15) is left out: it adds a word the ebook\'s pathway does not use, and ' + WAIT]},
    {h:'The working diagnosis: an appropriately sized umbrella', src:DSRC('slides 14 to 16'), items:[
      '"The art of composing working diagnosis": it should reflect your line of thought, in a good one-line summary',
      '"Working diagnosis should be an \'appropriately-sized umbrella.\'"',
      'The deck\'s examples: acute abdomen; blunt abdominal trauma; undifferentiated fever; fall on outstretched hand; abdominal handlebar injury']},
    {h:'Which test, and why: the deck\'s view', src:DSRC('slide 17'), items:[
      'The slide\'s line on amylase is left out: its trigger differs from the Million Ringgit Habits line in this guide ("Epigastric pain: ECG ± amylase"), and ' + WAIT],
      table:{head:['Test', 'The deck\'s view'], rows:[
        ['WBC', 'Can be useful'],
        ['UFEME', 'Can deceive you. Interpret appropriately'],
        ['LFT, RP', 'In a more severe patient'],
        ['Electrolytes', 'In an ill patient'],
        ['Coagulation profile', '"Useless unless patient on warfarin"'],
        ['CXR', 'More useful than AXR'],
        ['AXR', 'Selectively order: "I/O symptoms", as the slide writes it'],
        ['ECG', 'Useful']]}},
    {h:'Reassess the pain before discharge', src:DSRC('slides 22 and 23'), items:[
      '"Before discharging pt with abdo pain, pain must be completely resolved."',
      '"Challenge the bowel": the patient is able to eat without problem, and able to pass motion',
      '"Observation is treatment. Time is diagnostic."',
      'To tick these off: Safe practice, "Abdominal pain: the check before discharge" (linked under See also)',
      'The deck\'s safety-net script (slide 23) is left out: what it says about painkillers and follow-up differs from the ebook\'s discharge advice, and the script ' + WAIT]}];
  addSee('abdominal-pain', ['#safe-practice--abdchk', 'The check before discharge (triage course)']);

  /* ---------- Acute scrotal pain (ebook pathway): one department note (Lecture 4, Referral System, slides 16 and 17) ---------- */
  const SP = P['scrotal-pain'];
  SP.dept = [...(SP.dept || []),
    {h:'Testicular torsion: a time-dependent diagnosis', src:TAG + ': ' + A + ', slides 16 and 17 (no date on the slides; Drive copy modified 6 Jul 2026)', items:[
      '"Testicular torsion is a time-dependent diagnosis, a true Urologic Emergency, and early evaluation can assist in urologic intervention to prevent testicular loss"',
      '"Most common in young people but rarely may be seen in older individuals. The majority of cases occur in younger patients (< 25 years old)"',
      '"Testicular viability significantly decreases 6 hours after the onset of symptoms; hence, early diagnosis is key."',
      'Slide 17 shows the department\'s Clinical Pathway For Acute Scrotal Pain: the chart this pathway follows']}];

  /* ====================================================================================================
     5. New entry: handing over at the end of the shift (Lecture 4, Handing over Green Zone cases)
     ==================================================================================================== */
  P['handover'] = {
    title:'Handing over at the end of the shift', src:'TAG Warrior Course, 2026', grp:'rules', sub:'flow', isnew:true,
    kw:'handover hand over handing over hand-over handed passover pass over passing over pass-over end of shift shift change overlap cards card registered room settle team leader tl bmu summary nba no bed available handover list passing over form pending serah tugas tukar syif',
    lead:'What to finish before your shift ends, and what to pass over: settle the cards that are done, hand over the rest with a list. From the triage course deck on handing over Green Zone cases.',
    see:[['#communication--hand', 'Hand over in ISBAR'], ['#gz-rules--wait', 'Patients who should not wait outside'], ['#gz-rules--ivab', 'IV antibiotics when no bed is free'], ['#gz-rules--ep4', 'When the primary team is delayed']],
    start:'menu',
    nodes:{
      menu:{q:'End of shift: what do you need?',
        hint:'"It is department policy that GZ Mos have to manage all patients that arrive within given time." That spreads patients fairly over time, but on a busy shift you may still have many patients to see as it ends. ' + src(B, 'slide 3'),
        opts:[
          ['The end-of-shift check', 'chk'],
          ['This card: settle it, or hand it over?', 'card'],
          ['What must be passed over', 'what'],
          ['Make a handover list', 'list'],
          ['The team leader\'s part', 'tl']]},
      chk:{check:'all', q:'Before you leave: is each done?', hint:src(B, 'slides 4 to 8'), items:[
        'Seen the cards registered to your room. The slide: "To see all cards registered to your room 30 minutes before end for the shift."',
        'Settled every card that is complete: history, examination, issues and plan; results, treatment and referral; discharge plan',
        'Listed every case to pass over: pending management; pending review by the primary team; referred to another facility; waiting for admission',
        'Handed the list over to the next MO'],
        opts:[['All done', 'done'], ['Not all done', 'card']]},
      card:{q:'How far has this card got?',
        hint:'The deck draws each card in three bands. Blue: history and physical examination, issues, plan. Green: investigation results, treatment, referral. Pink: discharge plan. ' + src(B, 'slides 5 to 7'),
        opts:[
          ['All three bands are done', 'settle'],
          ['Part done: results, treatment, a referral or the discharge plan still to come', 'over'],
          ['Only started', 'over']]},
      settle:{end:'neutral', title:'Settle it', items:[
        'A card with all three bands done is yours to finish before you go: "Settle it"',
        'The three bands: history, physical examination, issues and plan; investigation results, treatment and referral; the discharge plan'],
        links:[['#safe-practice--dispo', 'Disposition: the discharge and AOR checks'], ['#handover--chk', 'The end-of-shift check']],
        gap:src(B, 'slides 5 to 7')},
      over:{end:'refer', title:'Hand over!', items:[
        'A card that is part done, or only started, where the two shifts overlap: "HAND OVER!"',
        'Put it on your handover list: the patient, the history and differential diagnosis, the investigations, the referral',
        'Document who you passed the patient to, and what is pending ("Green Zone Warrior" note)'],
        links:[['#handover--list', 'Make a handover list'], ['#handover--what', 'What must be passed over'], ['#communication--hand', 'Hand over in ISBAR']],
        gap:src(B, 'slides 6 and 7')},
      what:{end:'neutral', title:'What must be passed over', items:[
        'All the cases registered to your room that are not settled:',
        'Pending management',
        'Pending review by the primary team',
        'Patients referred to other facilities: the slide names EPAU, the ophthalmology ward and the ENT ward',
        'All cases waiting for admission'],
        links:[['#gz-rules--wait', 'Patients who should not wait outside'], ['#gz-rules--ivab', 'IV antibiotics when no bed is free'], ['#handover--list', 'Make a handover list']],
        gap:src(B, 'slide 4') + ' The slide\'s shift and registration times, for MOs and for the TL, are left out: three of them are mistyped ("230am", "730pm", "700pm"), so they cannot be used as typed. The right times await the department\'s confirmation.'},
      list:{end:'neutral', title:'Make a handover list', items:[
        '"Tips: Create a hand over list"',
        'Four columns: Patient; History & DDX; IX; Referral. The slide\'s example is in the table below',
        'One line for each patient: what it is, what has been done, what is pending, and who has been referred to and when',
        'Planned, marked "Future updates & improvements" on the slide: a paper form, "HKL ETD Green Zone Passing Over Form", with the date, time, shift, room and both MOs\' names, and the columns No., Patient name, Clinical information and Pending tasks',
        'Write the list on paper: this guide stores nothing about a patient'],
        links:[['#communication--hand', 'Hand over in ISBAR'], ['#handover--what', 'What must be passed over']],
        gap:src(B, 'slides 8 and 9') + ' The slide does not say whether the paper form is in use yet. The deck\'s list is the written handover; the Communication entry teaches ISBAR, from published sources, for the spoken one.'},
      tl:{end:'neutral', title:'The team leader at the end of the shift', items:[
        'To help and consult on patients\' cases from other rooms',
        'To help the triager with triaging issues',
        'To manage the disposition of patients waiting for admission',
        'To help distribute and manage the other rooms\' cards at the end of the shift',
        'Planned, marked "Future updates & improvements": a paper passing over form for the TL at the end of the shift, the "ETD HKL Green Zone Team Leader BMU Summary". For each patient: the room, the status (NBA or observe), the primary team, the length of stay and a remark; and a total',
        'The TL highlights to the EP the patients with no bed available, and how many of them need antibiotics'],
        links:[['#gz-rules--wait', 'Patients who should not wait outside'], ['#gz-rules--ivab', 'IV antibiotics when no bed is free'], ['#gz-rules--ep4', 'When the primary team is delayed']],
        gap:src(B, 'slides 11 to 13') + ' The slide\'s hour figure for highlighting an NBA patient to the EP is left out: no dated department document in this guide gives it, and it ' + WAIT + '. The TL\'s times on slide 4 are left out with the others.'},
      done:{end:'neutral', title:'Ready to hand over', items:[
        '"This will only work if Green Zone function as a ZONE and not multiple single rooms."',
        'Mutual understanding and mutual respect: "That your colleague has done their best to carry out their duty."',
        'Patients planned for admission and still waiting at the end of your shift must be passed over to the next MO ("Green Zone Warrior" note)'],
        links:[['#communication--hand', 'Hand over in ISBAR'], ['#handover--tl', 'The team leader\'s part']],
        gap:src(B, 'slide 14')}
    },
    tables:[{title:'Handover list: the slide\'s example', head:['Patient', 'History & DDX', 'IX', 'Referral'], rows:[
      ['Queue number', '36 yo. FOOSH. Distal radius #', 'X-ray done & reviewed.', 'Ortho. Referred 1:30PM.'],
      ['Queue number', '40 yo man. Low risk chest pain. Heart score 2', 'ECG: Normal SR. Trop taken. To trace.', '-'],
      ['Queue number', '25 yo lady. Tachycardia for investigation. Pale.', 'ECG: Sinus tachy. FBC, RP.', '-'],
      ['Queue number', '16 yo boy. Fell from MB. No LOC. L/W forehead, L/W left hand.', 'CXR, left rad/ulna x-ray. Please review.', 'Wound irrigation, dressing, IM ATT ordered.']]}],
    refs:[
      TAG + ': ' + B + ', 15 slides (no date on the slides; file modified 6 Jul 2026). The table shows four of the slide\'s five made-up examples, as typed, without their queue numbers',
      '"Green Zone Warrior" note (MO Drive, Green Zone folder): passing over at the end of the shift',
      'ISBAR for the spoken handover: Communication on shift']
  };
  addLinks(P['communication'].nodes.handend, ['#handover', 'Handing over at the end of the shift (triage course)']);
  addSee('communication', ['#handover', 'Handing over at the end of the shift']);

  /* ====================================================================================================
     6. New entry: commonly missed fractures (Lecture 5). No film is copied; the knee X-ray rule is left out.
     ==================================================================================================== */
  P['missed-fractures'] = {
    title:'Commonly missed fractures on X-ray', src:'TAG Warrior Course, 2026', grp:'rules', sub:'protocol', isnew:true,
    kw:'missed fracture missed fractures commonly missed injury injuries x-ray xray x ray radiograph film blowout blow-out orbital floor om view occipito-mantel occipitomental tear drop teardrop maxillary sinus fluid level rib ribs pneumothorax oblique hand metacarpal phalanx phalanges carpal punch tibial plateau knee split depression bicondylar lefort le fort scapula elbow supracondylar midfoot metatarsal ankle lumbar spine missed x-ray consultation recall called back call back unit rekod aim small miss small fish birds patah terlepas',
    lead:'The injuries most often missed on X-ray in ED HKL, how to look for four of them, and how the department catches a film that was misread. From the triage course deck, whose aim is: "Reduce errors in x-ray interpretation in the Green Zone". No film is copied.',
    see:[['#referral-rules--orthwp', 'Orthopaedic trauma: the work process'], ['#referral-rules--ortho', 'Orthopaedics: on call or clinic?'], ['#safe-practice--limb', 'Limbs and fractures: before discharge'], ['#trauma-walkins', 'Trauma walk-ins'], ['#emacc', 'EMACC follow-up']],
    start:'menu',
    nodes:{
      menu:{q:'Which do you need?', hint:'"Our aim: Reduce errors in x-ray interpretation in the Green Zone". ' + src(C, 'slide 2'), opts:[
        ['The injuries most often missed in ED HKL', 'list'],
        ['Blowout fracture', 'blow'],
        ['Rib fracture', 'rib'],
        ['Fractures of the hand', 'hand'],
        ['Tibial plateau fracture', 'tib'],
        ['A missed X-ray: how the patient is called back', 'recall'],
        ['Reading any film: what the deck teaches', 'read']]},
      list:{q:'Commonly missed injuries from X-ray in ED HKL: which one?',
        hint:'The slide numbers them 1 to 11 and does not say what the order means. The deck teaches four of them. ' + src(C, 'slide 5'),
        info:[
          'Head and neck: blowout fracture, LeFort fracture',
          'Truncal and axial: ribs fracture, spine (lumbar)',
          'Upper limbs: scapula; elbow (humerus supracondylar fracture); hand',
          'Lower limbs: tibial plateau, midfoot, metatarsals, ankle',
          'As numbered: 1 blowout fracture, 2 ribs fracture, 3 elbow, 4 hand, 5 tibial plateau, 6 midfoot, 7 metatarsals, 8 ankle, 9 lumbar spine, 10 LeFort, 11 scapula'],
        opts:[['Blowout fracture', 'blow'], ['Ribs', 'rib'], ['Hand', 'hand'], ['Tibial plateau', 'tib'], ['One of the other seven', 'rest']]},
      rest:{end:'neutral', title:'The other seven: on the list, with no teaching slide', items:[
        'The elbow (humerus supracondylar fracture), midfoot, metatarsals, ankle, lumbar spine, LeFort fracture and scapula are on the deck\'s list of commonly missed injuries',
        'The deck has no text slide for them, and its films of them carry no captions, so nothing more is given here',
        'Every X-ray done in the ED is reported, and a patient sent home on the wrong plan is called back'],
        links:[['#missed-fractures--recall', 'A missed X-ray: how the patient is called back'], ['#missed-fractures--read', 'Reading any film']],
        gap:src(C, 'slides 5 and 23 to 39')},

      /* ---- Blowout fracture ---- */
      blow:{step:'Blowout fracture: ask for the OM view', items:[
        'Mechanism: the slide\'s drawings show a ball and a fist striking the eye',
        'Films: AP, lateral and the OM view',
        'OM view: "Occipito-mantel view", as the slide spells it; its diagram is marked 45°',
        '"If you can\'t see the fish, look for the birds." The fish is the fracture; the birds are the effects of the fracture',
        src(C, 'slides 6 to 9')], next:'blowq'},
      blowq:{check:'any', q:'On the OM view: any of these signs?', hint:src(C, 'slide 10'), items:[
        'Discontinuity of the orbital floor',
        'Tear drop sign',
        'Fluid level in the maxillary sinus',
        'Fullness of the maxillary sinus'],
        opts:[['Any present', 'blowy'], ['None seen', 'blown']]},
      blowy:{end:'neutral', title:'A sign of a blowout fracture is on the film', items:[
        'The slide gives four things to look for on the OM view: discontinuity of the orbital floor, the tear drop sign, a fluid level in the maxillary sinus, and fullness of the maxillary sinus',
        'The deck stops at the film: it gives no management and no referral route for a blowout fracture'],
        links:[['#referral-rules--map', 'Where does this referral go?'], ['#trauma-walkins', 'Trauma walk-ins']],
        gap:src(C, 'slide 10') + ' What to do next is not in the deck.'},
      blown:{end:'neutral', title:'None of the four signs seen', items:[
        '"If you can\'t see the fish, look for the birds": look again for the effects of a fracture, not only for the break',
        'Every X-ray done in the ED is reported: a film with a positive finding is checked against the notes of the discharged patient'],
        links:[['#missed-fractures--recall', 'A missed X-ray: how the patient is called back']],
        gap:src(C, 'slides 4 and 8 to 10')},

      /* ---- Rib fracture ---- */
      rib:{step:'Rib fracture: history and examination', items:[
        'Mechanism: blunt trauma to the chest. A fall from a motorbike, a fall from height, a kick on the side of the chest',
        'History: pain on inspiration; a sensation of bone rubbing against bone',
        'Inspection: unequal chest rise',
        'Palpation: subcutaneous crepitus, bony crepitus',
        'Percussion: hyperresonant on the same side, or equal',
        'Auscultation: reduced breath sounds, or equal',
        src(C, 'slide 11')], next:'ribx'},
      ribx:{end:'neutral', title:'Rib fracture: the chest X-ray', items:[
        'AP or PA: "Wajib" (a must). The main reason is to look for a pneumothorax',
        'Oblique: optional',
        'The slide traces the rib arcs on one film and labels them lateral, anterior and posterior: look along each'],
        links:[['#emacc', 'EMACC: 2 or fewer uncomplicated rib fractures'], ['#gz-rules--upex', 'Worked example: pneumothorax, Green Zone to R2'], ['#trauma-walkins', 'Trauma walk-ins']],
        gap:src(C, 'slides 11 and 12')},

      /* ---- Hand ---- */
      hand:{step:'Fractures of the hand: examine every bone and joint', items:[
        'Mechanism: a blunt injury to the hand; the hand striking a blunt, hard object (punching, a karate chop, bracing from a fall)',
        'Look: swelling and deformity',
        'Feel: "PALPATION OF EVERY BONE & JOINT"',
        'Move: range of movement',
        'Films: AP and lateral',
        src(C, 'slide 18')], next:'handx'},
      handx:{end:'neutral', title:'Reading the hand film: "Aim small, miss small."', items:[
        'Do not read the film in large areas. The slide crosses out boxes drawn over several fingers at once, over the whole metacarpal area and over the whole thumb',
        'Read it in small boxes: one phalanx, one metacarpal, one carpal bone at a time'],
        links:[['#referral-rules--ortho', 'Orthopaedics: on call or clinic?'], ['#missed-fractures--read', 'Reading any film']],
        gap:src(C, 'slides 19 to 22')},

      /* ---- Tibial plateau ---- */
      tib:{step:'Tibial plateau fracture: mechanism and examination', items:[
        'Mechanism: a valgus or varus force to the knee, while weight bearing; or axial loading',
        'The slide\'s examples: a rugby tackle, a car bumper collision, a fall from height, an MVA',
        'Examination: joint pain, reduced range of movement, joint line tenderness, effusion, and unable to bear weight (in bold on the slide)',
        src(C, 'slide 28')], next:'tibx'},
      tibx:{end:'neutral', title:'Tibial plateau fracture: the six types the slide shows', items:[
        'Type I: split',
        'Type II: split-depression',
        'Type III: central depression',
        'Type IV: split fracture, medial plateau',
        'Type V: bicondylar fracture',
        'Type VI: dissociation of metaphysis and diaphysis',
        'On the knee film the slide labels: femur, patella, medial and lateral femoral condyles, medial and lateral tibial plateaux, intercondylar eminence, tibia and fibula',
        'Unable to bear weight is also an urgent orthopaedic criterion (Lampiran 1), and "Do not discharge a patient who cannot walk" (Million Ringgit Habits)'],
        links:[['#referral-rules--ortho', 'Orthopaedics: on call or clinic?'], ['#safe-practice--limb', 'Limbs and fractures: before discharge']],
        gap:src(C, 'slides 28, 30 and 31') + ' The slide does not name the classification. The deck\'s slide on when to X-ray a knee (slide 29) is left out: its table prints "Age ≥55 years" and its own large text ">55", and the rule is quoted from outside the department. It ' + WAIT + '.'},

      /* ---- The department's safety net, and the deck's two mantras ---- */
      recall:{end:'neutral', title:'Missed X-ray Consultation: how a misread film is caught', items:[
        '"All x-ray done in ED will be reported."',
        '"X-ray films with +ve findings will be sent to unit rekod and cross-referenced with case note of discharged patients."',
        '"Reviewed by MO."',
        '"Patients who were discharged with inappropriate management with the x-ray findings will be called back."',
        'The discharge checklist asks for the patient\'s contact information (Lecture 4, Referral System, slide 27)'],
        links:[['#safe-practice--dcchk', 'The discharge check'], ['#emacc', 'EMACC: suspected fracture with a normal X-ray'], ['#referral-rules--orthwp', 'Orthopaedic trauma: the work process'], ['#safe-practice--limb', 'Limbs and fractures: before discharge']],
        gap:src(C, 'slide 4')},
      read:{end:'neutral', title:'Reading a film: what the deck teaches', items:[
        'Diagnosing a fracture from a radiograph takes four things together: the mechanism of injury, the physical examination, X-ray reading skill and anatomy knowledge',
        'X-Ray Mantra #1: "If you can\'t see the fish, look for the birds." The fish is the fracture; the birds are the effects of the fracture',
        '"Aim small, miss small.": read one bone at a time, not a whole region at once',
        'Every X-ray done in the ED is reported, and a patient sent home on the wrong plan is called back'],
        links:[['#missed-fractures--recall', 'A missed X-ray: how the patient is called back'], ['#missed-fractures--list', 'The injuries most often missed']],
        gap:src(C, 'slides 3, 4, 8, 9 and 21')}
    },
    refs:[
      TAG + ': ' + C + ', 39 slides (no date on the slides; added to Drive 6 Jul 2026; the same file is also in the course folder as "Lecture 4"). Read in the Drive viewer: its speaker notes were not seen',
      'The deck\'s films, drawings and photographs are not copied']
  };
  addSee('trauma-walkins', ['#missed-fractures', 'Commonly missed fractures on X-ray (triage course)']);
  addSee('emacc', ['#missed-fractures--recall', 'A missed X-ray: how the patient is called back']);

  /* ====================================================================================================
     7. New entry: CBD 2, nine cases to work through. Each case: a question or two, then the slides' answer.
        A wrong choice leads to a short step that says why, then to the same answer.
        The cases are numbered 1 to 9 in slide order (c1 to c9): the slides' own scenario numbers do not run in order.
     ==================================================================================================== */
  const C4GAP = src(E, 'slides 10 to 12, headed "Scenario 4"') + ' The slide says how often the FBC is repeated in each branch. Those intervals are left out: the ebook\'s dengue pathway gives none, and the point ' + WAIT + '.';
  P['cbd-2'] = {
    title:'Case discussions: CBD 2', src:'TAG Warrior Course, 2026', grp:'rules', sub:'protocol', isnew:true,
    kw:'cbd cbd2 case based discussion case discussion cases scenario scenarios teaching practice triage course tag warrior uptriage esrf haemodialysis hemodialysis permcath deteriorate dengue wrong triage chemotherapy chemo neutropenic sepsis neutropenia cancer fever undifferentiated fever cat bite dog bite human bite rodent rat bite wound suture cat-scratch diabetic foot ulcer burn scald hot water blister jelonet silver sulphadiazine ssd burnshield headache thunderclap snoop4 red flag ct brain primary headache migraine opioid neuroimaging sakit kepala melecur gigitan',
    kinds:{neutral:'What the slides teach', refer:'Uptriage'},
    lead:'Nine short cases from the triage course to work through: pick a case, answer its questions, and read the teaching points the slides give. Where a slide differs from the ebook or a dated department protocol, that point is left out and the case says so.',
    see:[['#gz-rules--uptri', 'Uptriage: think it through, then who to tell'], ['#animal-bites', 'Animal bites and rabies (ABC)'], ['#dengue', 'Dengue fever pathway'], ['#quiz', 'The guide\'s quiz']],
    start:'menu',
    nodes:{
      menu:{q:'Which case?',
        hint:'Nine cases, numbered here in slide order: the slides\' own scenario numbers do not run in order, so each answer names its slides and their heading. ' + src(E, 'slides 1 to 31'),
        opts:[
          ['Case 1: unwell on haemodialysis, 4 hours in the waiting area', 'c1'],
          ['Case 2: dengue from a KK, sent to the Green Zone', 'c2'],
          ['Case 3: fever a week after chemotherapy', 'c3'],
          ['Case 4: fever, day 2', 'c4'],
          ['Case 5: a cat bite to the thumb', 'c5'],
          ['Case 6: a diabetic foot wound', 'c6'],
          ['Case 7: a hot water burn', 'c7'],
          ['Case 8: sudden headache and vomiting', 'c8'],
          ['Case 9: a headache he has had before', 'c9']]},

      /* ---- Case 1: worse while waiting (slides 2 to 4) ---- */
      c1:{q:'Case 1: she is called to your room after more than 4 hours of waiting. What do you do next?', hint:src(E, 'slides 2 and 3'), info:[
        'A 64-year-old woman with ESRF on haemodialysis through a permcath',
        'Complaint: "tak sedap badan". Mild generalised weakness, slight chills earlier; no clear fever, no focal symptoms',
        'At secondary triage: BP 135/80, HR 88, RR 18, SpO₂ 98% on room air, temperature 37.3°C. Triaged Green, Level 4, and placed in the waiting area',
        'In your room now: cold peripheries, poor pulse volume, HR 130'],
        opts:[['Uptriage her now', 'c1up'], ['Start the workup in the Green Zone, and review with the results', 'c1gz']]},
      c1gz:{step:'Know your limit: she has changed since triage', items:[
        'Cold peripheries, poor pulse volume and HR 130, after an HR of 88 at triage',
        '"KNOW YOUR LIMIT, GZ has limited capabilities managing pts that require monitoring"',
        src(E, 'slides 3 and 4')], next:'c1up'},
      c1up:{end:'refer', title:'Case 1: uptriage promptly to the appropriate zone', items:[
        'Objective: "KNOW YOUR LIMIT, GZ has limited capabilities managing pts that require monitoring. Uptriage promptly to the appropriate zone."',
        'Learning point: the triage was correct at the beginning, but a patient may still deteriorate within a short period, especially a high-risk patient: older, or with multiple comorbidities',
        'In this case, uptriage is appropriate',
        'Your role as the MO: alert the PPP to repeat the vital signs; alert the PPK to get a trolley or bed; alert the TL of R2 or the Yellow Zone that the patient needs uptriage',
        '"MUTUAL PROMPT ACTION FROM ALL PIHAK": prompt action from everyone, together'],
        links:[['#gz-rules--uptri', 'Uptriage: think it through, then who to tell'], ['#gz-rules--wait', 'Patients who should not wait outside'], ['#yellow-zone--flow', 'Yellow Zone patient flow']],
        gap:src(E, 'slides 2 to 4, headed "Scenario 1"')},

      /* ---- Case 2: dengue triaged to the Green Zone (slides 5 and 6). Where he goes, and who may be in the Green Zone, are left out. ---- */
      c2:{q:'Case 2: triaged Level 4 and sent to the Green Zone. Is the triage correct?', hint:src(E, 'slide 5'), info:[
        'A 55-year-old man referred from a Klinik Kesihatan: dengue fever, day 4 of illness, in the critical phase, with a warning sign (vomiting), not in shock, vital signs stable, on IV drip maintenance',
        'Dengue combo: NS1 weak positive. FBC: WCC 2.0, Hb 15, PLT 80, HCT 50',
        'In the Green Zone: clinically stable, alert and conscious, CRT under 2 seconds, warm peripheries, not tachypnoeic; lungs clear, abdomen soft and non-tender, no bruises',
        'Latest vital signs: BP 120/80, HR 80, T 37, SpO₂ 98%, RR 20'],
        opts:[['No: wrong triage', 'c2no'], ['Yes: he is stable, so Level 4 fits', 'c2yes']]},
      c2yes:{step:'Read the referral again: he has a warning sign', items:[
        'The referral says critical phase, with a warning sign: vomiting',
        'The slide\'s verdict: "WRONG TRIAGE: LEVEL 4 = GZ", and the correct triage is Level 3',
        src(E, 'slides 5 and 6')], next:'c2no'},
      c2no:{end:'refer', title:'Case 2: wrong triage. Level 3, not the Green Zone: uptriage', items:[
        '"WRONG TRIAGE: LEVEL 4 = GZ." The correct triage is Level 3',
        'Your role as the MO: "UPTRIAGE TO APPROPRIATE ZONES!" Bypass the treatment room and redirect the patient at once, to start treatment with documented observation',
        'Alert the PPK to register the case in the wrong triage QR, so that the supervisor (penyelia) can close the feedback loop',
        'Learning point, as printed: "Platelet <50, risk of leaking. Need uptriage, close monitoring & urgent bedside USG". The case\'s own platelet count is 80, and the slide does not say why the point is there',
        'Where he goes: follow the department\'s dengue rule and the dengue pathway, linked below'],
        links:[['#gz-rules--dengue', 'Dengue with warning signs, referred from KK'], ['#dengue', 'Dengue fever pathway'], ['#dengue-cpg', 'Dengue CPG, 4th edition'], ['#gz-rules--uptri', 'Uptriage: who to tell']],
        gap:src(E, 'slides 5 and 6, headed "Scenario 2"') + ' Two points on slide 6 are left out and await the department\'s confirmation: the place it sends this patient to, which is not the one named in the memo of 23 Mar 2023 in this guide; and its line on which dengue patients may be triaged to the Green Zone, which differs from the Dengue SOP 2.0 (Oct 2023). This guide has no link to the wrong triage register the slide mentions.'},

      /* ---- Case 3: fever after chemotherapy (slides 7 to 9). The antibiotic names are left out. ---- */
      c3:{q:'Case 3: where do you continue managing this patient?',
        hint:'The slide shows the Green Zone Thinking Framework beside the case and asks: outline the management; what should be prioritised; where would you continue managing this patient? ' + src(E, 'slides 7 and 8'),
        info:[
          'A 65-year-old man with rectal carcinoma, AP resection 4 months ago; chemotherapy started 2 months ago, the latest cycle 1 week ago',
          'Fever, malaise, sleeping most of the time',
          'Lungs: right lower zone crepitations',
          'T 38°C, HR 94, BP 134/80, RR 22, SpO₂ 96%',
          'Seen in the Green Zone; no investigations ordered yet'],
        opts:[
          ['Uptriage to the Yellow Zone', 'c3up'],
          ['The CCA: bloods, and IV antibiotics on a chair', 'c3cca'],
          ['The waiting area, until the results are back', 'c3cca']]},
      c3cca:{step:'Not the CCA, and not the waiting area', items:[
        '"DO NOT put patient in CCA. DO NOT leave patient in waiting area."',
        'The slide\'s diagnosis: likely neutropenic sepsis, secondary to hospital acquired pneumonia',
        src(E, 'slide 9')], next:'c3up'},
      c3up:{end:'refer', title:'Case 3: likely neutropenic sepsis: uptriage to the Yellow Zone', items:[
        'Diagnosis: "Likely NEUTROPENIC SEPSIS 2-DARY HOSPITAL ACQUIRED PNEUMONIA"',
        '1. T. PCM 1g in the treatment room',
        '2. CXR',
        '3. Uptriage to the Yellow Zone',
        '4. Set an IV line',
        '5. FBC (side lab), blood C&S, RP, LFT, Ca, Mg, PO4, coagulation profile, CXR, urine dipstick, DXT, RTK',
        '6. If neutropenic sepsis: start IV antibiotics, and positive pressure isolation',
        '7. If not neutropenic sepsis: start IV antibiotics',
        '8. IV drip maintenance',
        '9. Refer oncology',
        '"DO NOT put patient in CCA. DO NOT leave patient in waiting area."',
        '"In neutropenic sepsis, blood C&S and timing of antibiotic is important." An urgent FBC is important, and so is the choice of antibiotic'],
        links:[['#gz-rules--sepsis', 'Sepsis found in the Green Zone'], ['#gz-rules--uptri', 'Uptriage: who to tell'], ['#gz-rules--ivab', 'IV antibiotics when no bed is free']],
        gap:src(E, 'slides 7 to 9, headed "Scenario 3"') + ' The slide names the antibiotics for each branch. They are left out: two of them are not among the four the IV antibiotic memo of 30 Jun 2026 lists, and the choice ' + WAIT + '.'},

      /* ---- Case 4: fever, day 2 (slides 10 to 12). The FBC intervals are left out. ---- */
      c4:{q:'Case 4: fever, day 2. What is your care plan?', hint:src(E, 'slide 10'), info:[
        'A 25-year-old woman with no known medical illness: fever day 2, high grade, with a runny nose and a sore throat',
        'No chesty cough, no dysuria, good appetite, no vomiting. RTK at home negative',
        'Fogging activity at home 1 week ago',
        'T 38°C, RR 18, BP 117/60, HR 100, SpO₂ 100%. Lungs clear, throat normal'],
        opts:[['FBC and a dengue combo test; no IV line', 'c4res'], ['No tests: treat as an upper respiratory infection and discharge', 'c4no']]},
      c4no:{step:'The slide\'s diagnosis: undifferentiated fever, day 2 of illness', items:[
        'Its care plan asks for an FBC and a dengue combo test',
        'T. PCM 1g in the treatment room; no need for an IV line; encourage orally',
        src(E, 'slide 11')], next:'c4res'},
      c4res:{q:'The FBC and the dengue combo are back. Which fits?',
        hint:'Diagnosis: undifferentiated fever, day 2 of illness. T. PCM 1g in the treatment room; no need for an IV line; encourage orally. ' + src(E, 'slide 11'),
        opts:[
          ['FBC within normal parameters, dengue combo negative', 'c4neg'],
          ['FBC within acceptable parameters, dengue combo positive', 'c4pos'],
          ['Warning signs present', 'c4adm']]},
      c4neg:{end:'discharge', title:'Case 4: undifferentiated fever: a repeat FBC at the KK or a GP', items:[
        'A repeat FBC in the Klinik Kesihatan or with a GP',
        '"Uncomplicated undifferentiated fever can be followed up in outpatient clinic."',
        'On discharge, advise the patient on the dengue warning signs',
        'TCA to the ED stat if warning signs develop',
        '"All patients with undifferentiated fever if discharged, must be educated on dengue warning signs and advised TCA stat if warning signs develop."'],
        links:[['#dengue-cpg', 'Dengue CPG: the warning signs and the home care leaflet'], ['#safe-practice--subtle', 'Fever with no source: consider dengue'], ['#gz-rules--kk', 'Redirect to a Klinik Kesihatan or GP']],
        gap:C4GAP},
      c4pos:{end:'discharge', title:'Case 4: uncomplicated dengue: a repeat FBC as an outpatient', items:[
        'A repeat FBC as an outpatient',
        '"Uncomplicated dengue fever, with normal WBC, HCT and PLT, can be followed up in outpatient clinic."',
        'On discharge, advise the patient on the dengue warning signs',
        'TCA to the ED stat if warning signs develop'],
        links:[['#dengue', 'Dengue fever pathway'], ['#dengue-cpg', 'Dengue CPG, 4th edition'], ['#calc-dassess', 'Dengue: one-screen assessment']],
        gap:C4GAP},
      c4adm:{end:'admit', title:'Case 4: warning signs present: admit', items:[
        '"If presence of warning signs, admit."'],
        links:[['#dengue', 'Dengue fever pathway'], ['#dengue-cpg', 'Dengue CPG, 4th edition'], ['#gz-rules--dengue', 'Dengue with warning signs, referred from KK']],
        gap:src(E, 'slides 10 to 12, headed "Scenario 4"')},

      /* ---- Case 5: bite wounds (slides 13 and 14). The rabies vaccination slide (15) is left out whole. ---- */
      c5:{q:'Case 5: a cat bite over the right thumb. Which bite carries the higher risk of infection?', hint:src(E, 'slides 13 and 14'), info:[
        'An 18-year-old man with no known medical illness: alleged cat bite over the right thumb',
        'The slide asks: describe the wound; what is your management; what complication do you expect?',
        'From the slide\'s notes: a puncture wound is a wound whose depth is greater than its width'],
        opts:[['The cat bite', 'c5mxq'], ['A dog bite', 'c5dog']]},
      c5dog:{step:'The cat bite carries the higher risk', items:[
        'Dog bite: superficial; lower risk for infection (5%)',
        'Cat bite: cats have narrower and sharper teeth, causing a deep puncture wound; higher risk of infection (80%)',
        src(E, 'slide 14')], next:'c5mxq'},
      c5mxq:{q:'How do you manage the wound?',
        hint:'Cat bite: narrower and sharper teeth, a deep puncture wound, a higher risk of infection (80%). Complication: cat-scratch disease, regional lymphadenopathy 7 to 12 days after a cat bite or scratch. ' + src(E, 'slide 14'),
        opts:[['Irrigate, dress, analgesics, ATT and antibiotics; do not suture', 'c5mx'], ['Irrigate and suture, then antibiotics', 'c5sut']]},
      c5sut:{step:'"DO NOT SUTURE THE WOUND"', items:[
        '"All bite wounds are contaminated and dirty wounds, high risk of infection"',
        src(E, 'slide 14')], next:'c5mx'},
      c5mx:{end:'neutral', title:'Case 5: bite wounds: irrigate, dress, cover with antibiotics, do not suture', items:[
        '"All bite wounds are contaminated and dirty wounds, high risk of infection"',
        'Management: irrigation; dressing; analgesics; ATT; antibiotics (the slide names cloxacillin and Augmentin, with no dose)',
        '"DO NOT SUTURE THE WOUND"',
        'Dog bite: superficial; lower risk for infection (5%)',
        'Cat bite: a deep puncture wound; higher risk of infection (80%). Complication: cat-scratch disease, regional lymphadenopathy 7 to 12 days after a cat bite or scratch',
        'Rodent bite (rats, squirrels), as printed: "Low risk of infection. Does not transmit leptospirosis"',
        'Human bite: tends to be more serious than an animal bite, being polymicrobial with a high bacterial load',
        'The slide ends on "Indication of anti-rabies:" and lists none. Use the department\'s rabies protocol, linked below'],
        links:[['#animal-bites', 'Animal bites and rabies (ABC)'], ['#calc-rabies', 'Rabies vaccine calculator']],
        gap:src(E, 'slides 13 and 14, headed "Scenario 6" and "Scenario 5: Bite wound"') + ' The deck\'s rabies vaccination slide (slide 15) is left out whole: its dose, schedule, exposure categories and immunoglobulin rule differ from the HKL protocol of October 2022 in this guide, and ' + WAIT + '.'},

      /* ---- Case 6: a diabetic foot wound (slide 16). The deck gives no answer; its speaker note's grading is left out. ---- */
      c6:{end:'neutral', title:'Case 6: a diabetic foot wound: the deck gives the questions only', items:[
        'A 55-year-old with diabetes and hypertension: a non-healing wound for 1 month, with pus discharge for 1 week. The slide shows a foot wound',
        'The slide asks: describe the wound; how would you manage the patient?',
        'The deck has no answer slide for this case',
        'Work it through with the diabetic foot CPG entry: general illness and a limb-threatening problem first, then the grade of the ulcer'],
        links:[['#diabetic-foot-cpg', 'Diabetic foot: CPG 2nd edition'], ['#cellulitis', 'Acute cellulitis pathway']],
        gap:src(E, 'slide 16, headed "Scenario 7"') + ' The slide\'s speaker note grades the ulcer by a classification other than the one the diabetic foot CPG in this guide uses. It is left out and ' + WAIT + '.'},

      /* ---- Case 7: a minor burn (slides 17 and 18) ---- */
      c7:{q:'Case 7: a hot water burn with blisters. Do you de-roof the blisters?', hint:src(E, 'slides 17 and 18'), info:[
        'A 30-year-old with no known medical illness: hot water splashed over the right leg. The slide shows blisters at the ankle',
        'The slide asks: describe the wound; what is your management?',
        'From the slide\'s notes, types of burn. Superficial burn wound: superficial (epidermal), superficial partial thickness. Deep burn wound: deep partial thickness, full thickness'],
        opts:[['No: leave the blisters', 'c7abxq'], ['Yes: de-roof, then dress', 'c7roof']]},
      c7roof:{step:'Leave the blisters', items:[
        '"Avoid de-roofing the blisters, it may increase risk of infection"',
        src(E, 'slide 18')], next:'c7abxq'},
      c7abxq:{q:'Does this minor burn need antibiotics?', hint:src(E, 'slide 18'),
        opts:[['No', 'c7mx'], ['Yes: to prevent infection', 'c7abx']]},
      c7abx:{step:'"No need antibiotics"', items:[
        'Silver sulphadiazine (SSD) is commonly used for prophylaxis against infection; however, it delays wound healing and stains the skin',
        src(E, 'slide 18')], next:'c7mx'},
      c7mx:{end:'neutral', title:'Case 7: minor burn: leave the blisters, dress, no antibiotics', items:[
        '"Avoid de-roofing the blisters, it may increase risk of infection"',
        'Pain management',
        'ATT',
        'Dressing: wet-to-dry dressing with Jelonet',
        '"No need antibiotics"',
        'Silver sulphadiazine (SSD): commonly used for prophylaxis against infection; however, it delays wound healing and stains the skin',
        'Burnshield: used in extensive burns; it provides cooling for pain relief and shock reduction'],
        links:[['#pain', 'Pain management pathway']],
        gap:src(E, 'slides 17 and 18, headed "Scenario 8" and "Scenario 7 Minor burn"') + ' The deck gives no size or depth at which a burn stops being minor, and no referral route.'},

      /* ---- Case 8: a sudden headache (slides 19 to 25). The opioid dose and the pain score row are left out. ---- */
      c8:{q:'Case 8: a sudden, intense headache with vomiting. Is this a concerning headache?', hint:src(E, 'slides 19 and 20'), info:[
        'A 65-year-old woman: sudden onset headache and vomiting',
        'She was having tea with her family, felt an intense headache suddenly and had to lie down, then had bouts of vomiting',
        'The headache is worse on opening her eyes. Initial pain score 8',
        'In the Green Zone: pain score 6, sitting in a wheelchair, eyes closed, grimacing. She has taken two paracetamol tablets twice and is no better'],
        opts:[['Yes: look for the signs, and image', 'c8zone'], ['No: treat the pain as a primary headache', 'c8snoop']]},
      c8snoop:{step:'Check the concerning headache signs: SNOOP4', items:[
        'Systemic signs or symptoms: loss of appetite, loss of weight, fever, chills, night sweats, myalgia',
        'Neurologic signs or symptoms: changed behaviour, diplopia, motor weakness',
        'Older: new after age 50',
        'Onset: peak pain at onset (thunderclap)',
        'Papilledema; positional provocation; pattern change; precipitated by exercise or Valsalva',
        'She is 65, and the headache was intense from the moment it started',
        src(E, 'slide 22')], next:'c8zone'},
      c8zone:{q:'While she waits for the CT brain: keep her in the Green Zone, or uptriage?',
        hint:'Physical signs to look for: unequal pupils; neck stiffness; Kernig sign; a focal neurological deficit (slurring of speech, unilateral limb weakness, facial asymmetry). ' + src(E, 'slides 21 and 24'),
        info:[
          'The slide\'s table, keep in the Green Zone against uptriage:',
          'GCS: 15 against under 15',
          'BP: ≤140 against >140 (the slide gives no unit and does not say systolic)',
          'Physical findings: no symptoms of raised ICP against symptoms of raised ICP'],
        opts:[['Uptriage to the Yellow Zone', 'c8up'], ['Keep her in the Green Zone', 'c8keep']]},
      c8keep:{step:'The slide\'s plan for her is to uptriage', items:[
        '"B. Proper monitoring: documented observation; UPtriage to YZ"',
        src(E, 'slide 23')], next:'c8up'},
      c8up:{end:'refer', title:'Case 8: uptriage to the Yellow Zone, documented observation, CT brain', items:[
        'Signs to look for: unequal pupils; neck stiffness; Kernig sign; a focal neurological deficit (slurring of speech, unilateral limb weakness, facial asymmetry)',
        'SNOOP4, the concerning headache signs: systemic signs or symptoms; neurologic signs or symptoms; older (new after age 50); onset (peak pain at onset, thunderclap); papilledema; positional provocation; pattern change; precipitated by exercise or Valsalva',
        'A. Pain management: the slide names IM diclofenac, with no dose',
        'B. Proper monitoring: documented observation; uptriage to the Yellow Zone',
        'C. Imaging: CT brain, plain',
        'While waiting for the CT, the slide\'s table sets against keeping a patient in the Green Zone: GCS under 15; BP over 140 (no unit given, not said to be systolic); symptoms of raised ICP',
        'Take-home: "High index of suspicion, think of the life threatening first and rule them out." "Do not miss the red flag sign." "Secondary headache might relieved with the analgesia"'],
        links:[['#gz-rules--uptri', 'Uptriage: who to tell'], ['#gz-rules--reas', 'A CT brain ordered: before you discharge'], ['#cbd-2--c9', 'Case 9: a headache he has had before']],
        gap:src(E, 'slides 19 to 25 and 30, headed "Scenario 9"') + ' Two points are left out and await the department\'s confirmation: the opioid dose on slide 23, which differs from the ebook\'s morphine pain protocol; and the pain score row of the table on slide 24, which draws its line at a different score from the ebook\'s pain pathway.'},

      /* ---- Case 9: a primary headache (slides 26 to 30) ---- */
      c9:{q:'Case 9: a headache he has had before. Does he need neuroimaging?', hint:src(E, 'slides 26 and 27'), info:[
        'A 24-year-old man: headache for 1 day',
        'Severe, worse with loud noise and in bright rooms; gradual onset, worsening over a few hours; with eye pain',
        'On further history: similar episodes 2 to 3 times in the past year',
        'The slide asks: what further questions would you ask before deciding if he requires imaging? How would you manage the pain? Disposition?'],
        opts:[['Not if he meets the low-risk criteria', 'c9rxq'], ['Yes: a CT brain, to be safe', 'c9ct']]},
      c9ct:{step:'Check the low-risk criteria before you image', items:[
        'The slide puts a no-entry sign on neuroimaging for a primary headache, beside the criteria for a low-risk headache',
        'The criteria are on the next screen',
        src(E, 'slide 28')], next:'c9rxq'},
      c9rxq:{q:'He meets the low-risk criteria. How do you manage the pain?',
        hint:'"Criteria for Low-Risk Headaches": a journal table shown on the slide, the journal not named. ' + src(E, 'slide 28'),
        info:[
          'Age younger than 30 years',
          'Features typical of primary headaches',
          'History of similar headache',
          'No abnormal neurologic findings',
          'No concerning change in usual headache pattern',
          'No high-risk comorbid conditions (e.g., human immunodeficiency virus infection)',
          'No new, concerning historical or physical examination findings'],
        opts:[['Non-opioids first', 'c9dq'], ['An opioid', 'c9op']]},
      c9op:{step:'"Non-Opioid should be preferred over opioid"', items:[
        '"Non-Opioid should be preferred over opioid in the adult ED patient with acute primary headache (ACEP & AHS)"',
        'Opioids increase the risk of migraine chronification, and impede the reversal of central sensitisation in patients with migraine',
        'Opioids are also associated with more frequent return visits to the ED',
        src(E, 'slide 29')], next:'c9dq'},
      c9dq:{q:'After treatment: have the symptoms improved?',
        hint:'Non-pharmacological, if triggers are known: bed rest; a dark and quiet environment. Pharmacological: acetaminophen (paracetamol); NSAIDs; a dopamine antagonist (metoclopramide, prochlorperazine, haloperidol); triptans. The slide gives no doses. ' + src(E, 'slide 29'),
        opts:[['Improved', 'c9home'], ['Not improved', 'c9adm']]},
      c9home:{end:'discharge', title:'Case 9: primary headache, improved: discharge with follow-up and return advice', items:[
        'Diagnosis: primary headache',
        '"If symptoms improved, allow discharge with out-patient headache clinic follow-up and return instructions for worsening of headache or the development of any new neurological symptoms"',
        'Non-opioids are preferred over opioids in acute primary headache',
        'Take-home: "It\'s all about history taking and clinical examination." "Do not miss the red flag sign." "Secondary headache might relieved with the analgesia"'],
        links:[['#outpatient-referral', 'Clinic referrals from the ED'], ['#safe-practice--dcchk', 'The discharge check'], ['#cbd-2--c8', 'Case 8: sudden headache and vomiting']],
        gap:src(E, 'slides 26 to 30, headed "Scenario 9"') + ' The slides give no doses, and do not say where the out-patient headache clinic is. The low-risk criteria are a journal table the slide shows without naming the journal.'},
      c9adm:{end:'admit', title:'Case 9: not improved: work up for a secondary headache, and admit', items:[
        '"If symptoms not improved, work-up for secondary headache and for admission"',
        'Take-home: "High index of suspicion, think of the life threatening first and rule them out"',
        'The concerning headache signs (SNOOP4) and the physical signs are in Case 8'],
        links:[['#cbd-2--c8', 'Case 8: the concerning signs and the CT'], ['#referral-rules--map', 'Where does this referral go?']],
        gap:src(E, 'slides 28 to 30, headed "Scenario 9"')}
    },
    refs:[
      TAG + ': ' + E + ', 31 slides, three with speaker notes (no date on the slides; Drive copy modified 6 Jul 2026)',
      'Sources the slides name, none with a year or page: ACEP and AHS, on opioids in acute primary headache (slide 29); "Criteria for Low-Risk Headaches", a journal table (slide 28); SNOOP4 (slide 22); and the Interim Guideline for Human Rabies Prevention & Control in Malaysia (slide 15, which is left out here)',
      'The deck\'s photographs and films are not copied']
  };
  addSee('gz-rules', ['#handover', 'Handing over at the end of the shift'], ['#cbd-2', 'Case discussions: CBD 2 (triage course)']);
  addSee('animal-bites', ['#cbd-2--c5', 'Bite wound care: a case (triage course)']);
})();
