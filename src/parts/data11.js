/* ================= 10 Nov 2026: the department's link page (ETD HKL linktree), the "Ready now" items =================
   From the review sources/linktree/LINKTREE-RUN-THROUGH.md, section 13, each item checked against the document itself
   (the text layer of the 2026 MSQH set, page images of the scanned memos, the fire plan and the disaster plan):
   - Polisi Jabatan Kecemasan dan Trauma, HKL-JK-PD, issue 06: signed by the Director of HKL, in force 18 Mar 2026;
   - work instructions HKL-JK-AK-01 (Triaj Prima), AK-02 (Triaj Sekunder) and AK-15 (EM WATCH): signed, in force 16 Mar 2026;
     AK-07 (Zon Tidak Kritikal): an unsigned copy (PDF of 9 Dec 2025); the policy's master list gives the set as approved 16 Mar 2026;
   - department memos HKL/JK/98/188/3 (2)2021, (9)23, (11)23, (21)23, (26)23, (2)24, (4)24, (5)24, (9)24, (10)24, (17)24, (10)26
     and the IV antibiotic flow chart; the orthopaedic memos (8)22 and (8)24 to check against;
   - the department fire plan (posters, Apr 2026) and Pelan Tindakan Bencana Hospital Kuala Lumpur, 2026 edition.
   Department notes and steps only, each with its source and date (standing rule 6); the ebook's pathways are unchanged (rule 5).
   The policy and the AK work instructions print "Hak cipta terpelihara" (no part may be reproduced without the written
   permission of the HKL Quality Assurance Unit), so they are written here in the guide's own words with section and page,
   with two short lines quoted where the wording matters. The memos are quoted in Malay as printed, with the guide's English.
   Not copied: names, signatures, registration numbers, phone numbers of staff, patient details and the floor plans. */

(function(){
  /* ---------- Green Zone rules ---------- */
  const G = P['gz-rules'];

  /* 1. The Green Zone at a glance: the department policy (section 4) and the work instruction AK-07 */
  G.nodes.menu.opts.unshift(['The Green Zone at a glance', 'glance']);
  G.nodes.glance = {end:'neutral', title:'The Green Zone at a glance', items:[
    'Who it is for: stable patients, MTS levels 4 and 5, with a minor injury or illness, medical or trauma. Only patients who are stable, can wait and need no immediate intervention, and who can walk or sit in a wheelchair (department policy 2026, section 4 and 4.1, p21)',
    'There is no observation area: only a waiting area while the next step is decided, and a simple treatment area for care that needs no regular observation (policy, section 4, p21)',
    'Seen by an MO in under 120 minutes (policy 4.2.1, p21)',
    'The patient is treated as an outpatient, or admitted to a ward after the MO\'s examination. A patient who needs more critical care moves to a more suitable zone (policy 4.3.1 and 4.3.3, p21)',
    'You can refer to other departments straight from the Green Zone. "Masa respon oleh Pegawai Perubatan dari jabatan berkaitan mesti dalam masa 1-2 jam": the referred department\'s MO must respond within 1 to 2 hours (policy 4.3.4, p21)',
    'Samples in criminal and medicolegal cases are handled by the Forensic Department (policy 4.3.5, p22)',
    'Belongs in the Green Zone (work instruction AK-07, p5): MTS 4 and 5; stable, with no life-threatening danger sign; every vital sign, pupil size included, normal or slightly off but stable, for example a mild fever; fully alert, with no confusion, severe dizziness or new focal neurological symptoms',
    'Not for the Green Zone (AK-07, p5): MTS 1 to 3, or any danger sign or physiological instability; a vital sign that is unstable or outside the safe range, for example hypotension, severe tachycardia or bradypnoea; an altered mental state, a GCS under 15, confusion, or dizziness or headache with new neurological symptoms',
    'Your part as the MO (AK-07, p7): the diagnosis and the disposition decision where a case needs a detailed diagnosis or investigations beyond the PPP; order and interpret the limited investigations needed for a safe discharge, for example an X-ray or specific blood tests; supervise and verify the treatment the PPP and nurses give; sign the discharge notes and the referral letters to specialists or the Klinik Kesihatan'],
    links:[['#gz-rules--sepsis','Sepsis found in the Green Zone'],['#referral-rules','Referral rules'],['#safe-practice--leave','Leaving the department']],
    gap:'Sources: Polisi Jabatan Kecemasan dan Trauma, HKL-JK-PD, issue 06 (approved by the Director of HKL, in force 18 Mar 2026), section 4, p21 to 22; work instruction HKL-JK-AK-07, Pengurusan Kes Di Zon Tidak Kritikal, issue 01: an unsigned copy (PDF of 9 Dec 2025) in the department\'s MSQH folder, listed in the policy\'s master list as approved for use on 16 Mar 2026; p5 and p7. Left out until the department settles them: AK-07\'s pain score of 7 or more as a Green Zone criterion (the policy, 3.1.3, p20, and AK-06 make it a Yellow Zone one), its "GCS > 15", and the zone\'s target times (Level 4 within 60 minutes; Level 5 within 90 minutes in the policy\'s charter, within 120 minutes start to finish in AK-07). Listed under Still to confirm.'};

  /* 2. Sepsis found in the Green Zone: memo (9)24, 30 May 2024 */
  G.nodes.menu.opts.splice(G.nodes.menu.opts.findIndex(o => o[1] === 'wait') + 1, 0, ['Sepsis found in the Green Zone', 'sepsis']);
  G.nodes.sepsis = {end:'admit', title:'Sepsis found in the Green Zone: uptriage to the Yellow or Red Zone', items:[
    '"Pesakit-pesakit yang diberi diagnosis Sepsis di Zon Hijau hendaklah di Uptriage ke Zon Kuning atau Zon Merah (mengikut keadaan pesakit) untuk rawatan dan pemeriksaan lanjut"',
    'In English: a patient diagnosed with sepsis in the Green Zone is uptriaged to the Yellow Zone or the Red Zone, by the patient\'s condition, for further treatment and examination'],
    gap:'Source: memo HKL/JK/98/188/3(9)24, 30 May 2024, paragraph 2.3.1, issued after a patient death in the Green Zone; effective immediately. The memo does not define sepsis or give criteria for it.'};

  /* 3, with 5. Before you admit, discharge or transfer: the corrected date of memo (10)24, and the 48-hour EM Watch rule */
  G.nodes.reas.items.push('Neuromedical cases that need a CT brain review: give the EMWATCH appointment within 48 hours, to pick up a fracture or brain bleed missed at the first examination (memo HKL/JK/98/188/3(21)23, 10 Oct 2023)');
  G.nodes.reas.links = [...(G.nodes.reas.links || []), ['#em-watch--book','Book EM Watch: the steps']];
  G.nodes.reas.gap = 'Sources: memo HKL/JK/98/188/3(10)24, 10 Jul 2024 (typed 09 Julai 2024, corrected by hand to 10); "Green Zone Warrior" note; memo HKL/JK/98/188/3(21)23, 10 Oct 2023, which does not define "neuromedical".';
  G.refs = G.refs.map(r => /HKL\/JK\/98\/188\/3\(10\)24/.test(r) ? r.replace('9 Jul 2024', '10 Jul 2024 (typed 09 Julai 2024, corrected by hand to 10)') : r);

  /* 4. IV antibiotics when no bed is free: memo (10)26 of 30 Jun 2026 and its flow chart (node key and title kept) */
  G.nodes.ivab.items = [
    'Update the care plan and make sure the patient\'s record (RPP) is complete, for example the blood results, X-ray and other documents (you, the Green Zone MO)',
    'Write an in-patient prescription, and make sure the IV antibiotic is one that is allowed and the dose is correct (you)',
    'The Green Zone PPK puts a wristband with the patient\'s name on every patient, and makes sure it is on the right patient',
    'Every patient on an IV antibiotic plan goes to a bedded zone, first Yellow Observation, the ISO Ward or ISO 3 (note 1). A bed is free: the MO or PPK sends the patient there, you do the routine case passing over to the zone\'s MO in charge, and the ward or zone PPP or nurse gives the antibiotic as prescribed, after checking the 7 \'R',
    'No bed available: the patient goes to the CCA (Chair Centric Area) and is given a chair, and you pass the care plan over to the HO in the CCA. Only these may be given in the CCA: IV Augmentin, IV Rocephin (ceftriaxone), IV Cefuroxime and IV Unasyn',
    'In the CCA: the YZ Ext PPP gives the antibiotic as prescribed when the HO says so, after checking the 7 \'R; the CCA HO monitors and documents the vital signs regularly and passes over to the next shift\'s HO',
    'When a bed frees up in Yellow Observation, the ISO Ward, YZ Extension or ISO 3, the YZ Ext PPP or MO (TL) moves the patient there; YZ Extension vacancies go first to patients from the CCA',
    'The YZ Ext PPP does the routine passing over when the patient changes zone or is admitted (BOAT)'];
  G.nodes.ivab.links = [...(G.nodes.ivab.links || []), ['#gz-rules--sepsis','Sepsis found in the Green Zone (memo, 30 May 2024)']];
  G.nodes.ivab.gap = 'Source: memo HKL/JK/98/188/3(10)26, 30 Jun 2026 (Arahan pengurusan penempatan dan pemberian IV antibiotik pesakit Zon Hijau), for Green Zone patients waiting for a ward bed, "No Bed Available" (NBA), effective immediately from 30 Jun 2026; with its flow chart (Carta aliran penempatan dan pemberian IV antibiotik pesakit dari Zon Hijau). The HO in the CCA is part of the YZ Ext team (note 2). Its note 1 gives the bed priority as Yellow Observation, Wad ISO or ISO 3, and its note 4 names "Wad ISO 2": as printed.';
  G.refs = G.refs.map(r => /^IV antibiotic memo/.test(r) ? 'Memo HKL/JK/98/188/3(10)26: Arahan pengurusan penempatan dan pemberian IV antibiotik pesakit Zon Hijau, 30 Jun 2026, with its flow chart' : r);

  /* 10. Redirection to a Klinik Kesihatan: AK-01 and AK-02 (2026), memo (2)24 and the 2021 policy (node key and title kept) */
  G.nodes.kk.items.push(
    'In HKL, redirection is a primary triage decision: the PPP at primary triage redirects a Level 5 patient, completes a Redirection Slip, gives it to the patient and directs them to the facility, and the case is recorded in the Redirection Book, kept for 7 years (work instruction AK-01, 2026, p7, p10 to 11 and the flow chart on p13)',
    'A redirected Level 5 patient has no secondary triage (AK-02, 2026, p6)',
    'Level 5B, the 9XXX queue numbers (non-emergency, over 1 hour): non-emergency cases can be redirected to the nearest Klinik Kesihatan, PED (HTA) or UCC during operating hours, and the redirection form must be filled in (memo HKL/JK/98/188/3(2)24, 11 Jan 2024, Lampiran A2)',
    'Every redirected patient is recorded and given the department\'s Patient Redirection Slip; only the PPP on duty at primary triage may triage a patient out (memo HKL/JK/98/188/3(2)2021, 19 Jan 2021, with the Patient Redirection Policy 2021 and its slip)');
  G.nodes.kk.gap = 'Sources: KKM MTS announcement, Jul 2026; MAU FAST referral criteria; work instructions HKL-JK-AK-01, Triaj Prima, and HKL-JK-AK-02, Triaj Sekunder, issue 01, in force 16 Mar 2026; memo HKL/JK/98/188/3(2)24, 11 Jan 2024; memo HKL/JK/98/188/3(2)2021, 19 Jan 2021. Still to confirm: how a Green Zone MO redirects a patient already seen in the consultation room; whether private GPs are included; the 2021 policy\'s hours (0730 to 1930, Monday to Friday), slip and list of Klinik Kesihatan; and the redirection procedure AK-01 cites, "HKL/JK/PK 0x- redirection kes", which is not in the department\'s folder.';

  G.refs.push(
    'Polisi Jabatan Kecemasan dan Trauma, HKL-JK-PD, issue 06: approved by the Director of HKL, in force 18 Mar 2026; section 4, Zon Tidak Kritikal (p21 to 22)',
    'Work instruction HKL-JK-AK-07: Pengurusan Kes Di Zon Tidak Kritikal, issue 01 (an unsigned copy, PDF of 9 Dec 2025; approved for use 16 Mar 2026 per the policy\'s master list)',
    'Work instructions HKL-JK-AK-01, Triaj Prima, and HKL-JK-AK-02, Triaj Sekunder, issue 01, in force 16 Mar 2026',
    'Memo HKL/JK/98/188/3(9)24: Penambahbaikan pengurusan kes di Zon Hijau, 30 May 2024',
    'Memo HKL/JK/98/188/3(21)23: Temujanji EMWATCH bagi kes neuromedical dalam masa 48 jam, 10 Oct 2023',
    'Memo HKL/JK/98/188/3(2)24: Penyelarasan semula sistem triaj, 11 Jan 2024, with Lampiran A1 and A2',
    'Memo HKL/JK/98/188/3(2)2021: Pengalihan pesakit (patient redirection) ke klinik-klinik kesihatan berhampiran, 19 Jan 2021, with the Patient Redirection Policy 2021 and the slip');

  /* ---------- 3. EM Watch: how to book (AK-15, 2026) and the 48-hour CT brain review (memo (21)23) ---------- */
  const E = P['em-watch'];
  E.src = 'AK-15, Mar 2026; EM Watch deck, Aug 2023';
  E.nodes.elig.items = E.nodes.elig.items.map(t => t === 'Over 18 years old' ? '18 years old or over' : t);
  E.nodes.elig.hint = 'AK-15 (2026, p5) and the department policy (2026, 9.1, p28): Malaysian citizens only, 18 and over, with consent, a smartphone or tablet with stable internet, and able to use it and the loaned medical equipment, alone or with the family\'s help. "Not Huawei" is from the Aug 2023 deck.';
  E.nodes.cond.info.push(
    'A CT brain the EP has reviewed, with no urgent admission needed (AK-15, 2026, p5)',
    'Neuromedical cases that need a CT brain review: an appointment within 48 hours (memo, 10 Oct 2023)');
  E.nodes.book = {end:'refer', title:'Refer to EM Watch', items:[
    'Before you recruit: discuss with the EP. The EP approves the patient for virtual follow-up, and must review the CT brain images before a discharge to EM Watch (AK-15, p8)',
    '"kes-kes neuromedical yang memerlukan CT Brain Review perlu diberikan temujanji dalam tempoh masa 48 jam": neuromedical cases that need a CT brain review must be given an appointment within 48 hours, to pick up a fracture or brain bleed not found at the first examination (memo HKL/JK/98/188/3(21)23, 10 Oct 2023)',
    '1. The patient meets the criteria (AK-15, p12)',
    '2. Get the patient\'s informed consent: the patient is allowed home, and you prepare the discharge care bundle. Consent given: fill in the Pink Form (Borang Pink, Lampiran 1) and attach it to the patient\'s record (RPP). No consent: refer to EMACC if needed',
    '3. Explain how the teleconsultation works and the appointment date; the patient may go home',
    '4. Complete the informed consent form (Lampiran 1) and the EM WATCH Appointment form (Lampiran 2)',
    '5. Attach the EM WATCH Appointment form to the outside of the RPP (you, the PPP or the nurse)',
    '6. The administrative assistant (PT) records the appointment date and time in the Google Meet system',
    '7. Send the updated RPP to the ED Record Office, which keeps it until the appointment',
    'Remind the patient that the follow-up is virtual: no need to come to the hospital on that date (AK-15, p9)',
    'On the day: the PPK calls or WhatsApps the patient 10 minutes before the session; the medicine slip, MC or referral letter goes to the Record Unit, where the family collects it (AK-15, p9 to 10)',
    'From the Aug 2023 training deck: first teleconsultation within 1 week of discharge, up to 2 sessions within 2 weeks, up to 20 patients a day; an online prescription bought at a pharmacy of the patient\'s choice; guided self-monitoring at home, with monitoring devices if needed'],
    links:[['#emacc','EMACC follow-up'],['#gz-rules--reas','Before you admit, discharge or transfer']],
    gap:'Sources: work instruction HKL-JK-AK-15, Pengurusan Kes Di Klinik Rawatan Susulan Telekonsultasi (EM WATCH), issue 01, in force 16 Mar 2026, p8 to 10 and p12; memo HKL/JK/98/188/3(21)23, 10 Oct 2023, which does not define "neuromedical" or say how to book; EM Watch introduction (training deck), Aug 2023. The two forms are not attached to the copy seen. The sources differ on timing and documents: AK-15 aims to reassess within 48 to 72 hours and to review every CT brain report within 48 hours of discharge (p6); the department policy (2026, 9.2.1, p28) and the 2023 deck give the first appointment 1 week after discharge; the deck\'s online prescription against the Record Unit in AK-15 and the policy (9.3.10, p29). Listed under Still to confirm.'};
  E.refs.push(
    'Work instruction HKL-JK-AK-15: Pengurusan Kes Di Klinik Rawatan Susulan Telekonsultasi (EM WATCH), issue 01, in force 16 Mar 2026',
    'Memo HKL/JK/98/188/3(21)23: Temujanji EMWATCH bagi kes neuromedical dalam masa 48 jam, 10 Oct 2023',
    'Polisi Jabatan Kecemasan dan Trauma, issue 06, in force 18 Mar 2026: section 9, Klinik Rawatan Susulan Telekonsultasi (EM WATCH), p28 to 29');
  P['mild-tbi'].see = [...(P['mild-tbi'].see || []), ['#em-watch--book', 'EM Watch: CT brain review within 48 hours (department)']];

  /* ---------- 6 and 7. Safe practice: leaving the department; prescriptions; DNR ---------- */
  const S = P['safe-practice'];
  S.nodes.menu.opts.splice(S.nodes.menu.opts.findIndex(o => o[1] === 'dc') + 1, 0,
    ['Leaving: discharge package, own risk, absconded', 'leave'],
    ['Prescriptions the pharmacy accepts', 'rx']);
  S.nodes.menu.opts.splice(S.nodes.menu.opts.findIndex(o => o[1] === 'notes') + 1, 0, ['DNR: decide with the specialist on duty', 'dnr']);
  S.nodes.dc.links = [...(S.nodes.dc.links || []), ['#safe-practice--leave','Leaving the department'], ['#safe-practice--rx','Prescriptions the pharmacy accepts']];
  S.nodes.leave = {end:'neutral', title:'Leaving the department: discharge, own risk and absconded patients', items:[
    'You, the ED MO, discharge every patient who does not need admission to a ward (department policy 2026, 32.2.1, p74)',
    'Every discharged patient gets a discharge package: the medicines and a relevant health education leaflet (32.2.2, p74)',
    'Give sick leave and referrals as the illness needs; record the discharge diagnosis at the end of the consultation (32.2.3 to 32.2.4, p74)',
    'Follow-up in the ED is given only through EM WATCH or EMACC (32.2.5, p75)',
    'At own risk (AOR) or against medical advice (DAMA): the patient may leave after enough explanation from the responsible MO. You, the responsible MO, complete the AOR discharge form; the patient, relative or guardian signs it, with a witness (32.3.1 to 32.3.2, p75)',
    'Whatever the kind of discharge, give the documents for admission, follow-up and further care where relevant: the MC, the medicines and a memo (32.3.3, p75)',
    'Absconded: a patient who leaves the department without permission is treated as absconded, and is discharged from the system after 24 hours (32.4.1, p75)',
    '"Kakitangan hendaklah memaklumkan kepada waris selepas 1 jam ketiadaan dan laporan polis hendaklah dibuat dalam tempoh 24 jam": staff tell the family after 1 hour\'s absence, and a police report is made within 24 hours (32.4.2, p75)',
    'Record the incident in the patient\'s notes (32.4.3, p75)'],
    links:[['#em-watch','EM Watch'],['#emacc','EMACC follow-up'],['#safe-practice--rx','Prescriptions the pharmacy accepts'],['#tools','Open the discharge safety check']],
    gap:'Source: Polisi Jabatan Kecemasan dan Trauma, HKL-JK-PD, issue 06 (approved by the Director of HKL, in force 18 Mar 2026), section 32, p74 to 75. The policy does not say which staff tell the family or make the police report, and the AOR form itself is not in it.'};
  S.nodes.rx = {end:'neutral', title:'Prescriptions: fill in every part, or the pharmacy rejects them', items:[
    '"Semua komponen di dalam preskripsi WAJIB dipenuhi dengan Nama/No KP/Pendaftaran/Umur/Tarikh/Penyakit/ Cop dan Tandatangan serta SEJARAH ALAHAN"',
    'In English: every part of the prescription must be filled in: the name, IC number, registration number, age, date, diagnosis, your stamp and signature, and the allergy history',
    'If any is missing, the Pharmacy rejects (rejection) the prescription (paragraph 2.2)'],
    links:[['#safe-practice--dc','Before any discharge'],['#tools','Open the discharge safety check']],
    gap:'Source: memo HKL/JK/98/188/3(26)23, 21 Dec 2023, after the Drugs and Therapeutics Committee (JKUT) meeting no. 2/2023 of 14 Dec 2023 reviewed adverse drug reaction reports, especially allergy problems; effective immediately.'};
  S.nodes.dnr = {end:'neutral', title:'DNR: decide, tell the family and document with the specialist on duty', items:[
    '"Semua kes yang berpotensi untuk DNR wajib dibincangkan dengan pakar yang bertugas": every potential DNR case must be discussed with the specialist on duty (2.1)',
    '"Pemakluman DNR kepada waris pesakit sewajarnya dilakukan bersama pakar yang bertugas": tell the family about DNR together with the specialist on duty (2.2)',
    '"Dokumentasi yang jelas terhadap justifikasi status DNR dan butiran pemakluman kepada waris hendaklah dilakukan oleh pegawai perubatan dan disemak oleh pakar yang bertugas": you, the MO, document clearly the reason for the DNR status and what the family was told, and the specialist on duty checks it (2.3)'],
    gap:'Source: memo HKL/JK/98/188/3(4)24, 7 Mar 2024, after the Department Retreat 2024 (26 Feb 2024) reviewed cases given DNR status; effective immediately. The memo names no form.'};
  S.refs.push(
    'Polisi Jabatan Kecemasan dan Trauma, HKL-JK-PD, issue 06, in force 18 Mar 2026: section 32, Perkhidmatan Kemasukan & Discaj (p73 to 75)',
    'Memo HKL/JK/98/188/3(26)23: Ketetapan berkaitan penerimaan preskripsi ubatan bagi tujuan dispensing kepada pesakit oleh Jabatan Farmasi, 21 Dec 2023',
    'Memo HKL/JK/98/188/3(4)24: Arahan penambahbaikan tatacara memutuskan status DNR kepada pesakit, 7 Mar 2024');
  S.kw = ((S.kw || '') + ' aor dama own risk against medical advice absconded abscond melarikan diri discharge package leaflet prescription preskripsi rejected rejection allergy alahan dnr do not resuscitate').trim();

  /* ---------- 8. Referral rules: document the referral; the response time; throat foreign body; Psychiatry discharges; ortho and LA OT ---------- */
  const R = P['referral-rules'];
  R.nodes.menu.hint = 'Every referral to another department (the primary team): write in the notes the name of the MO you referred to, and the date and time (memo HKL/JK/98/188/3(9)23, 2 Jun 2023). You can refer straight from the Green Zone; the referred department\'s MO must respond within 1 to 2 hours (department policy 2026, 4.3.4, p21).';
  R.nodes.menu.opts.splice(R.nodes.menu.opts.findIndex(o => o[1] === 'psy') + 1, 0,
    ['Psychiatry has discharged the patient', 'psydc'],
    ['Foreign body in the throat', 'fbt']);
  R.nodes.psydc = {end:'neutral', title:'Psychiatry has discharged the patient: going home with the next of kin', items:[
    'The Psychiatry MO you referred to documents one of two: discharged and must be taken home by the next of kin (3.1), or discharged and may go home alone (3.2)',
    'Must go home with the next of kin: ED staff contact the next of kin to take the patient home (4)',
    '"Sekiranya waris tidak dapat dihubungi dalam masa 4 jam atau tidak mahu mengambil pesakit pulang, laporan polis hendaklah dilakukan": if the next of kin cannot be reached within 4 hours, or will not take the patient home, a police report must be made (4)',
    'Give the relatives the department\'s notice (Peringatan kepada waris dan penjaga pesakit yang dirujuk ke Psikiatri): they feed the patient until the decision to admit is made; if a discharged patient\'s relatives cannot be reached or refuse to take the patient home, a police report will be made; they are advised to wait with the patient, if they can, until the patient is safely admitted or discharged'],
    links:[['#referral-rules--psy','Psychiatry referral']],
    gap:'Source: memo HKL/JK/98/188/3(11)23, 27 Jun 2023, agreed with the Psychiatry Department after violence against ED staff by a referred patient\'s relatives; effective immediately; with its notice for relatives. The memo does not say who makes the police report.'};
  R.nodes.psy.links = [...(R.nodes.psy.links || []), ['#referral-rules--psydc','Psychiatry has discharged the patient']];
  R.nodes.fbt = {end:'refer', title:'Foreign body in the throat: refer to the ORL MO on call', items:[
    '"semua kes benda asing di tekak (foreign body in throat) wajib dirujuk kepada Pegawai Perubatan Atas Panggilan Jabatan Otorinologi untuk pemeriksaan lanjut"',
    'In English: every foreign body in the throat must be referred to the on-call MO of the Otorhinolaryngology (ORL) Department for further examination'],
    gap:'Source: memo HKL/JK/98/188/3(5)24, 12 Mar 2024, from the Deputy Head of Department II, after the department\'s Mortality and Morbidity meeting report no. 5/2024 (23 Feb 2024); effective immediately. The memo gives no examples, age limit or first examination.'};
  R.nodes.orthoc.items.push(
    'Earlier LA OT limit, from the congestion action plan (12 Nov 2024), citing memo (8)22 of May 2022: a case referred to the orthopaedic doctor on duty should be settled within 2 hours, and the wait for an LA OT procedure is 4 hours or less. The EP calls the orthopaedic doctor to speed the decision; an LA OT case that cannot be expedited and is over 4 hours may be registered for ward admission',
    'The department policy (2026, 22.3.3 to 22.3.6, p57 to 58) gives the emergency OT\'s orthopaedic cases 8 am to 9 pm only, called through the Google Sheet within 6 hours of the MO\'s examination; patients not called after 6 hours go to the Orthopaedic Ward first. The guide follows this 6-hour limit, from the newest department document (the guide owner\'s decision of 10 Nov 2026)');
  R.nodes.orthoc.gap += ' LA OT: memo HKL/JK/98/188/3(8)22, May 2022 (2.2 and 2.3); action plan for congestion, memo HKL/JK/98/188/3(17)24, 12 Nov 2024 (part 3); Polisi Jabatan Kecemasan dan Trauma, issue 06, 2026, 22.3.';
  R.refs.push(
    'Memo HKL/JK/98/188/3(9)23: Penambahbaikan bagi kes-kes rujukan di Jabatan Kecemasan, 2 Jun 2023 (the register lists it as 188/3(10)23)',
    'Polisi Jabatan Kecemasan dan Trauma, issue 06, in force 18 Mar 2026: 4.3.4 (p21) and 22.3 (p57 to 58)',
    'Memo HKL/JK/98/188/3(11)23: Pengurusan discaj pesakit psikiatri di Jabatan Kecemasan dan Trauma, 27 Jun 2023, with its notice for relatives',
    'Memo HKL/JK/98/188/3(5)24: Arahan penambahbaikan pengendalian kes benda asing di tekak (foreign body in throat), 12 Mar 2024',
    'Memo HKL/JK/98/188/3(8)22: Langkah-langkah penambahbaikan untuk mengurangkan masa menunggu pesakit yang dirujuk ke Ortopedik untuk menjalankan prosedur di LA OT, May 2022',
    'Memo HKL/JK/98/188/3(17)24: Pelan tindakan (kemaskini) menangani kesesakan di Jabatan Kecemasan dan Trauma Hospital Kuala Lumpur, 12 Nov 2024');
  R.kw = ((R.kw || '') + ' foreign body throat tekak fish bone tulang ikan ent orl otorhinolaryngology psychiatry discharged next of kin waris police report laporan polis la ot local anaesthesia theatre congestion response time').trim();

  /* ---------- 9. Code Blue and the emergency codes: fire in the department; the plan's facts beside the card's Code Orange ---------- */
  const C = P['code-blue'];
  C.nodes.role.opts.push(['A fire in the department: dial 6000', 'fire']);
  C.nodes.fire = {end:'neutral', title:'Fire in the department: dial 6000', items:[
    '"Talian 6000 adalah talian kecemasan untuk semua insiden bencana dalaman": line 6000 is the emergency line for every internal disaster incident, open 24 hours (hospital disaster plan 2026, 8.6.1, p56)',
    'You smell burning or see fire: phone 6000; put out a fire that is still small with an extinguisher; tell the head of the department or unit. The 6000 operator calls the fire brigade (999) as they judge, and tells the emergency call centre (5333), the Ketua Penyelia Hospital and the Ketua Penyelia Jururawat (8.6.2, p56)',
    'The department poster\'s steps, "Arahan semasa kecemasan", as printed. 1. Bertenang dan jangan panik: stay calm; do not panic',
    '2. Ikuti laluan kecemasan terdekat: follow the nearest emergency route',
    '3. JANGAN gunakan lif: do NOT use the lift',
    '4. Bantu pesakit atau individu yang memerlukan bantuan: help patients and anyone who needs help',
    '5. Berkumpul di TITIK BERKUMPUL yang ditetapkan: gather at the assigned assembly point. The ED\'s is No 3, Parking Terbuka Cawangan Sumber (hospital disaster plan 2026, Jadual 8.2, p52)',
    'The poster\'s reminders, "Peringatan": Sentiasa pastikan laluan kecemasan tidak dihalang (keep the emergency routes clear). Kenalpasti lokasi pemadam api dan pintu keluar terdekat (know where the nearest fire extinguisher and exit are). Ikuti arahan petugas keselamatan (follow the safety officers\' instructions)',
    'From the Green Zone (the poster\'s Green Zone sheet): exit doors beside Triage, towards the patient drop-off area (Kawasan Menurunkan Pesakit), and one on the corridor side of the Zon Tidak Kritikal; fire extinguishers by the Asthma Bay and the Bilik YM Syif; a fire hose reel in the waiting area by Triage',
    'Evacuation, if needed or ordered: the Fire Warden, the most senior and experienced staff member of the zone or ward, moves the staff to bring the patients to the assembly point (8.6.2, p57)',
    'Not a fire: an external mass casualty incident does not come through 6000. It is notified through the 999 emergency call system, the police, the fire brigade or transport operators, or arrives without notice; the MECC supervisor passes it to the emergency physician on active call, who tells the head of the ED. The head of the ED declares a Yellow Alert; the Hospital Director declares a Red Alert on the head of the ED\'s advice (6.1.1 to 6.1.4, p29 to 32)'],
    links:[['#code-blue--codes','The other emergency codes']],
    gap:'Sources: Pelan kebakaran jabatan, ETD HKL: twelve floor plan and emergency route posters, one for each area, with the same instructions (Google Slides, created 14 Apr 2026 according to Drive; no date printed; the poster prints no phone number); Pelan Tindakan Bencana Hospital Kuala Lumpur, 2026 edition, 6.1.1 to 6.1.4 (p29 to 32), Jadual 8.2 (p52) and 8.6.1 to 8.6.2 (p56 to 57). The floor plans are not copied. Neither document uses the name "Code Orange", or says what happens to the patients already in the Green Zone in a mass casualty incident: listed under Still to confirm.'};
  C.nodes.codes.items = C.nodes.codes.items.map(t => /^Code Orange:/.test(t) ? t + ' (the card, undated). The hospital disaster plan, 2026 edition, names no Code Orange: 6000 is its line for a fire or any internal disaster incident (p56), and an external mass casualty incident comes through MECC and the emergency physician on call, not 6000 (p29 to 31)' : t);
  C.nodes.codes.links = [...(C.nodes.codes.links || []), ['#code-blue--fire', 'Fire in the department: dial 6000']];
  C.nodes.codes.gap += ' The hospital disaster plan, 2026 edition, uses no colour code but Code Blue: line 6000 is for a fire or any internal disaster incident (8.6.1, p56), and an external mass casualty incident comes through MECC (999) to the emergency physician on call (6.1.1, p29 to 30).';
  C.notes.find(t => t.l === 'Emergency codes').notes.push(
    {h:'Line 6000 and mass casualty incidents: the hospital disaster plan, 2026', src:'Pelan Tindakan Bencana Hospital Kuala Lumpur, 2026 edition: 6.1.1 to 6.1.4 (p29 to 32), Jadual 8.2 (p52) and 8.6.1 (p56). Dated, where the colour codes card is not; it names no colour code but Code Blue', items:[
      '"Talian 6000 adalah talian kecemasan untuk semua insiden bencana dalaman. Talian ini aktif secara berterusan selama 24 jam." (8.6.1, p56)',
      'In English: line 6000 is the emergency line for every internal disaster incident, such as a fire. It is open 24 hours',
      'An external disaster or mass casualty incident is notified through the 999 emergency call system, the police, the fire brigade or transport operators, or arrives without notice; the MECC supervisor passes it to the emergency physician on active call (6.1.1, p29 to 30)',
      'The head of the ED declares a Yellow Alert; the Hospital Director declares a Red Alert on the head of the ED\'s advice (6.1.3 to 6.1.4, p31 to 32)',
      'The ED\'s fire assembly point: No 3, Parking Terbuka Cawangan Sumber (Jadual 8.2, p52)']});
  C.notesFoot += ' The note on line 6000 and mass casualty incidents is from Pelan Tindakan Bencana Hospital Kuala Lumpur, 2026 edition, with its section and page numbers.';
  C.refs.push(
    'Pelan kebakaran jabatan, ETD HKL: floor plan and emergency route posters, one for each area (Google Slides, Apr 2026; no date printed)',
    'Pelan Tindakan Bencana Hospital Kuala Lumpur, 2026 edition (Disemak 2026): 6.1 (p29 to 32), 8.3 (p52) and 8.6 (p56 to 57)');
  C.kw = ((C.kw || '') + ' kebakaran 6000 assembly point titik berkumpul evacuation evakuasi exit fire warden mass casualty mci disaster bencana yellow alert red alert').trim();
})();
