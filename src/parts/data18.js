/* ================= 12 Nov 2026: the department's internal memos for the Green and Yellow Zones =================
   Source: the department's memo index ("MEMO DALAMAN JABATAN", 99 memos, 2021 to 2026), which Krishna gave on 12 Nov 2026.
   The memos the Green and Yellow Zones act on were read from their page images (the scans have no text layer; the OCR
   was used only to find the text) and are added here as department notes (standing rule 6), each with its number and
   date. The review of every row, with what went in, what was already in the guide and what was left out and why, is
   MEMO-RUN-THROUGH.md. The memos are quoted in Malay where the wording matters, with the guide's English.
   Each memo's own pages show as snapshots (app/memo/<key>-p<N>.webp, built by src/memos.js): at Krishna's choice of
   12 Nov 2026 (standing rule 3) the signature, the name block and the registration numbers under it are covered, and so
   are staff names and phone numbers. Not copied: names, signatures, registration numbers, phone numbers of staff. */

/* The department's own memo list ("Memo Jabatan", on the ED link page): each memo card links to it (Krishna, 12 Nov 2026) */
const MEMO_LIST = 'https://docs.google.com/spreadsheets/d/1ZCxDjxd5fgTGWx6fFNzJBDYvlIgTbdIyB-hIJUxCkA4/edit?usp=drive_link';
const MEMOS = {
  '2023-01': {ref:'HKL/JK/98/188/3(1)23', date:'10 Jan 2023', t:'Pelaksanaan tugas dan tanggungjawab Ketua Pasukan (Team Leader) di Zon Hijau', pages:[[1, 'Memo'], [2, 'Lampiran 1']]},
  '2024-09': {ref:'HKL/JK/98/188/3(9)24', date:'30 May 2024', t:'Penambahbaikan pengurusan kes di Zon Hijau', pages:[[1, 'Page 1'], [2, 'Page 2']]},
  '2021-14': {ref:'HKL/JK/98/188/3(14)2021', date:'12 May 2021', t:'Peringatan dalam pengurusan pesakit warga emas di zon klinikal Jabatan Kecemasan dan Trauma', pages:[[1, 'Memo']]},
  '2022-14': {ref:'HKL/JK/98/188/3(17)22', date:'4 Aug 2022', t:'Peringatan ke atas penyediaan laporan dan dokumentasi fail perawatan pesakit di zon-zon perawatan', pages:[[1, 'Memo']]},
  '2023-20': {ref:'HKL/JK/98/188/3(19)23', date:'27 Sep 2023', t:'Larangan penggunaan sarung tangan getah sebagai torniquet', pages:[[1, 'Memo']]},
  '2022-23': {ref:'HKL/JK/98/188/3(25)', date:'15 Nov 2022', t:'Carta aliran pemakluman keputusan kritikal (critical value notification) Makmal Patologi kepada Jabatan Kecemasan dan Trauma', pages:[[1, 'Memo'], [2, 'Flow chart']]},
  '2023-04': {ref:'HKL/JK/98/188/3/(4) 23', date:'3 Mar 2023', t:'Penambahbaikan ke atas proses kerja notifikasi penyakit berjangkit 1988', pages:[[1, 'Memo'], [2, 'Flow chart']]},
  '2023-05': {ref:'HKL/JK/98/188/3(5)23', date:'21 Mar 2023', t:'Pengaktifan ambulan EMS/interfacility transfer untuk kes STEMI dari Jabatan Kecemasan dan Trauma HKL ke IJN', pages:[[1, 'Memo'], [2, 'Flow chart']]},
  '2023-24': {ref:'HKL/JK/98/188/1(24)2023', date:'8 Nov 2023', t:'Peraturan penggunaan mesin POCT untuk ujian ABG dan FBC stat', pages:[[1, 'Memo']]},
  '2022-04': {ref:'HKL/JK/98/188/3(5)22', date:'16 Mar 2022', t:'Tatacara terkini pengambilan spesimen bagi orang dalam tahanan polis', pages:[[1, 'Memo'], [2, 'Flow chart']]},
  '2022-12': {ref:'HKL/JK/98/188/3(13)22', date:'9 Jun 2022', t:'Carta aliran kerja pengurusan kes \'missed fracture\'', pages:[[1, 'Memo'], [2, 'Lampiran 1'], [3, 'Lampiran 2']]},
  '2022-19': {ref:'HKL/JK/98/188/3(14)22', date:'10 Jun 2022', t:'Verifikasi pengurusan transfusi darah', pages:[[1, 'Memo']]},
  '2022-22': {ref:'HKL/JK/98/188/3(24)22', date:'11 Oct 2022', t:'Peringatan kepada prosedur penerimaan pesakit rujukan dari hospital/klinik luar', pages:[[1, 'Page 1'], [2, 'Page 2']]},
  '2024-13': {ref:'HKL/JK/98/188/3(12)24', date:'14 Aug 2024', t:'Pemakluman tatacara preskripsi Human Albumin di Jabatan Kecemasan dan Trauma', pages:[[1, 'Memo']]},
  '2024-04': {ref:'HKL/JK/98/188/3(3)24', date:'7 Mar 2024', t:'Pemakluman penambahbaikan pengendalian pesakit yang tidak mempunyai dokumen pengenalan diri \'unknown\'', pages:[[1, 'Memo']]},
  '2021-12': {ref:'HKL/JK/98/188/3(13)2021', date:'10 May 2021', t:'Penambahbaikan pengurusan pesakit yang memerlukan \'sedation\' semasa prosidur CT scan/X-ray', pages:[[1, 'Memo'], [3, 'PSA form, side 1'], [4, 'PSA form, side 2']]},
  '2022-08': {ref:'HKL/JK/98/188/3(9)22', date:'13 May 2022', t:'Arahan berkaitan prosedur CVC insertion di Jabatan Kecemasan dan Trauma', pages:[[1, 'Memo']]},
  '2022-09': {ref:'HKL/JK/98/188/3(10)22', date:'17 May 2022', t:'Penggunaan borang baru "Central Venous Catheter Care Bundle"', pages:[[1, 'Memo'], [2, 'The care bundle form']]},
  '2023-14': {ref:'HKL/JK/98/188/3(14)23', date:'5 Jul 2023', t:'Penyelarasan borang Inter-Departmental Transfer of Adult Patients Risk Assessment, borang senarai semak penghantaran pesakit dan senarai semak peralatan', pages:[[1, 'Memo'], [3, 'Risk form and flow chart']]},
  '2024-11': {ref:'HKL/JK/98/188/3(11)24', date:'16 Jul 2024', t:'Carta alir pengurusan Dangerous Drugs Act (DDA) Jabatan Kecemasan dan Trauma HKL', pages:[[1, 'Memo'], [2, 'The DD in-charge duties'], [3, 'Flow chart']]},
  '2022-21': {ref:'HKL/JK/98/188/3(23)22', date:'11 Oct 2022', t:'Pelaksanaan penggunaan Google Form sebagai format untuk tempahan kes ke LA OT', pages:[[1, 'Memo']]},
  '2024-02': {ref:'HKL/JK/98/188/3(01)24', date:'11 Jan 2024', t:'Penyelarasan semula proses kerja pengurusan pesakit Klinik Ulangan (EMACC) Jabatan Kecemasan dan Trauma', pages:[[1, 'Memo'], [2, 'Lampiran A, 1 to 8'], [3, 'Lampiran A, 9 to 12'], [4, 'Lampiran A, 13 to 16'], [6, 'Lampiran B1: the TCA']]}
};

(function(){
  const M = k => `memo ${MEMOS[k].ref}, ${MEMOS[k].date}`;
  const SRC = (k, more) => `Source: ${M(k)}${more ? ', ' + more : ''}. A department note (standing rule 6).`;

  /* The same POCT rule shows in both zones */
  const POCT = [
    'FBC Stat: "Hanya boleh dihantar untuk kes-kes dari Resus 1, Resus 2 dan Zon Kuning sahaja. Zon-zon lain perlu mendapat kelulusan Pakar yang bertugas." Only for Resus 1, Resus 2 and the Yellow Zone; any other zone needs the approval of the specialist on duty (2.1a)',
    'One FBC Stat per patient; a repeat needs the specialist on duty\'s approval (2.1b)',
    'A patient referred from outside with blood results from the same day: the blood tests are not repeated (2.1c)',
    'ABG Stat: only for Resus 1, Resus 2 and the Yellow Zone, after resuscitation has started; any other zone needs the specialist on duty\'s approval (2.2a)',
    'One ABG per patient; a repeat needs the specialist on duty\'s approval (2.2b)',
    '"Hanya ujian ABG yang dibenarkan. VBG hanya boleh dilakukan untuk kes denggi yang kritikal (severe dengue). Kes-kes denggi adalah terkecuali." Only ABG is allowed; a VBG only for critical (severe) dengue, the exception (2.2c)'];
  const POCTGAP = SRC('2023-24', 'paragraph 2, issued to save POCT machine reagent during a shortage, effective immediately; it gives no end date') + ' Whether it is still in force is under Still to confirm.';

  /* ---------------- Green Zone rules ---------------- */
  const G = P['gz-rules'];
  const at = G.nodes.menu.opts.findIndex(o => o[1] === 'sepsis');
  G.nodes.menu.opts.splice(at + 1, 0, ['Team leader of the shift', 'tl'], ['More department memos', 'gzm']);

  G.nodes.tl = {check:'all', q:'Team leader: at the start of the shift, is each of these done?', fig:'memo-2023-01',
    hint:'The MO who leads the Green Zone team on the shift (Ketua Pasukan). Tick what is done.',
    items:[
      'Roll call (taklimat ringkas) before the shift starts: every member of the team is present and knows the others (item 1)',
      'Pending cases from the previous shift, including those waiting for a ward, are not missed and each has a proper plan, for example the Chair Centric Area',
      'One MO attends the CME/GWR from 8.00 am to 9.00 am; cases go to that MO\'s room only after 9.00 am (item 6)'],
    opts:[['All done: run the shift', 'tlrun'], ['Not yet', 'tlfix']]};
  G.nodes.tlfix = {end:'neutral', title:'Finish the start-of-shift checks first', items:[
    'Hold the roll call, so the team knows who is on and who is where',
    'Go through every pending case from the previous shift, including those waiting for a ward, and make sure each has a plan',
    'Send one MO to the CME/GWR from 8.00 am to 9.00 am; that room takes cases only after 9.00 am'],
    links:[['#gz-rules--tlrun', 'During the shift']], gap:SRC('2023-01', 'Lampiran 1')};
  G.nodes.tlrun = {end:'neutral', title:'Team leader: during the shift', fig:'tlclock', items:[
    'Advise and consult on cases when the team on the shift needs it (item 2)',
    'Redistribute cases when unseen cases pile up (item 3)',
    'A sudden surge of patients: discuss with the Emergency Physician on duty and ask for help (item 4)',
    'An incident: make sure the staff involved report it to the Penyelia (item 5)',
    'Your own room: registration to it starts at 8.00 am (morning shift), 3.00 pm (afternoon) and 10.00 pm (night), and its number of cases need not match the other rooms',
    'The last case goes to your room at 2.00 pm (morning), 9.00 pm (afternoon) and 7.00 am (night). Then share out the unseen cases, so the whole Green Zone starts examining them and gives each a plan',
    '"Ketua Pasukan memastikan ahli pasukan tidak meninggalkan zon/syif sekiranya terdapat bilik yang masih ada lambakan kes yang belum diselesaikan": no one in the team leaves the zone or the shift while a room still has a backlog'],
    links:[['#gz-rules--delay', 'Disposition is delayed'], ['#gz-rules--uptri', 'Uptriage']],
    gap:SRC('2023-01', 'Lampiran 1, decided at the morning meeting and the Green Zone Warrior course')};

  G.nodes.gzm = {q:'Which department memo?', hint:'Memos of the Emergency & Trauma Department, HKL, 2021 to 2024, as department notes. Each step shows its memo, with its pages.', opts:[
    ['Admitting from the Green Zone; repeat BP and ECG', 'adm24'],
    ['Elderly patients', 'old'],
    ['Records to finish before the patient leaves', 'rec'],
    ['The lab calls a critical result', 'cv'],
    ['Notifiable disease: the form', 'notif'],
    ['STEMI: the ambulance to IJN', 'stemi'],
    ['Police detainee brought for samples only', 'pol'],
    ['Stat FBC and ABG on the POCT machine', 'poct'],
    ['Booking a case to LA OT', 'laot'],
    ['Tourniquets', 'tq'],
    ['A reported X-ray shows a missed fracture', 'mfl']]};

  G.nodes.adm24 = {end:'neutral', title:'Admitting from the Green Zone; repeat BP and ECG', fig:'memo-2024-09', items:[
    'Once the PPK has booked the ward by Google Form, the RPP of a patient to be admitted comes back to you, the treating MO, so you know where the patient is before the transfer to the ward (2.1.1)',
    'A patient still waiting for a ward when the shift changes: hand over, examine again and document (2.1.2)',
    'Repeat vital signs and ECG ("Repeat Bp/ECG/DXT") are done in Bilik 9, not at secondary triage (2.2.1)',
    'Every Green Zone consultation room has a BP machine for the MO to repeat the BP (2.2.2)',
    'A patient diagnosed with sepsis is uptriaged to the Yellow or Red Zone, by the patient\'s condition (2.3.1)',
    'The waiting area is watched: continuously by the PPK on wheelchair duty, and every 2 hours by the Penyelia on duty and the triage staff (2.4.1)'],
    links:[['#gz-rules--sepsis', 'Sepsis found in the Green Zone'], ['#gz-rules--oneway', 'One-way flow: no repeats after secondary triage'], ['#gz-rules--reas', 'Before you admit, discharge or transfer']],
    gap:SRC('2024-09', 'effective immediately') +' The one-way flow step says an ECG asked for in the Green Zone is done in the Procedure Room; the memo names Bilik 9.'};

  G.nodes.old = {end:'neutral', title:'Elderly patients: three reminders', fig:'memo-2021-14', items:[
    '"Pesakit yang berumur > 65 tahun adalah tidak digalakkan untuk menerima ubat suntikan IV Tramal kerana boleh mendapat komplikasi dan kesan sampingan yang tidak diingini": patients over 65 are discouraged from IV tramadol (Tramal), for its complications and side effects (2 i)',
    'An elderly patient treated in the Green Zone who needs review by a primary team (for example Urology, Surgery or Neurology) is placed in the Yellow Zone while waiting (2 ii)',
    'Place elderly patients near the nurses\' counter, to watch them more closely and prevent incidents such as falls (2 iii)',
    'The ebook\'s analgesia table, for comparison: tramadol in the elderly, "start low 50 mg, max 300 mg/day (to avoid if possible)"'],
    links:[['#pain', 'Ebook: pain management'], ['#gz-rules--wait', 'Patients who should not wait outside']],
    gap:SRC('2021-14') + ' A 2021 memo: whether it still stands is under Still to confirm.'};

  G.nodes.rec = {check:'all', q:'Before the patient goes home or to a ward: is each record done and up to date?', fig:'memo-2022-14',
    hint:'"...memastikan semua dokumen tersebut disediakan dan dikemaskini, sebelum pesakit discaj balik atau masuk ke wad." The department found many of these missing, which makes medical reports hard to write, especially in medicolegal cases.',
    items:['The patient clerking note, by the MO', 'The nursing or patient report', 'The observation chart', 'The Early Warning Sign form'],
    opts:[['All four are done', 'recok'], ['Not yet', 'recno']]};
  G.nodes.recok = {end:'discharge', title:'The records are complete', items:['The patient can go home or to the ward once the rest of the disposition is settled'],
    links:[['#gz-rules--reas', 'Before you admit, discharge or transfer'], ['#safe-practice--dcchk', 'The discharge check']], gap:SRC('2022-14')};
  G.nodes.recno = {end:'observe', title:'Finish the records before the patient leaves', items:['Write or update what is missing: the clerking note is yours; the nursing report, the observation chart and the Early Warning Sign form are the nurses\' and PPPs\'', 'Then complete the disposition'],
    gap:SRC('2022-14')};

  G.nodes.cv = {end:'neutral', title:'The lab calls a critical result', fig:'memo-2022-23', items:[
    'The pathology lab calls: 1. the zone\'s extension; if that fails, 2. the mobile of the PPP U32 or KJ U32 in charge of the zone; or 3. any PPP U32 or KJ U32 on that shift. The lab records the name and post of the person who took the call',
    '"Petugas Jabatan Kecemasan yang menerima maklumat \'Critical Value Notification\' daripada Makmal Patologi hendaklah memaklumkan Pegawai Perubatan incharge zon dengan kadar segera": whoever takes the call tells the MO in charge of the zone at once (2.2)',
    'You, the MO in charge of the zone: act on the result (further care)',
    'Each shift, the KJ U32 or Penyelia U32 posts the in-charge\'s mobile or zone extension in the lab\'s WhatsApp group (2.1)',
    'Shifts as the memo prints them: AM 8.00 am to 3.00 pm; PM 3.00 pm to 10.00 pm; ON 10.00 pm to 8.00 am, when only the PPP U32 is in charge of the zone'],
    gap:SRC('2022-23', 'paragraph 2 and the flow chart')};

  G.nodes.notif = {end:'neutral', title:'Notifiable disease: the form reaches UKA within 24 hours', fig:'memo-2023-04', items:[
    'Complete the Borang Notifikasi Penyakit Berjangkit 1988. "Wajib menulis nomborkad pengenalan, tandatangan serta cop nama pegawai perubatan yang bertugas": the identity card number, signature and name stamp of the MO on duty must be written',
    'Take the completed form to the Shift Supervisor\'s room (Bilik Penyelia Syif) yourself, and record the hand-over in the Notification Record Book there, as proof of hand-over',
    'The PPP U32 in charge of the shift checks every form is complete; the PPK takes them to the Unit Kesihatan Awam HKL (UKA) twice a day, at 8.00 am and 4.00 pm',
    'Why: forms were still failing to reach UKA within 24 hours'],
    links:[['#infection-alerts', 'Infection alerts']],
    gap:SRC('2023-04', 'from the Head of the PPP supervisors, with its flow chart')};

  G.nodes.stemi = {q:'STEMI going to IJN: is the KVAS 10 team available?', fig:'memo-2023-05', hint:'You tell MECC; MECC activates KVAS 10 and tells you whether it is free.',
    opts:[['Yes: KVAS 10 is available', 'stk'], ['No: KVAS 10 is away on another case', 'ste']]};
  G.nodes.stk = {end:'refer', title:'KVAS 10 takes the patient to IJN', items:['MO informs MECC, and MECC activates KVAS 10', 'KVAS 10 transports the patient to IJN; the team hands over to the IJN team and returns to base'],
    links:[['#acs--ijn', 'Ebook: IJN referral']], gap:SRC('2023-05', 'flow chart')};
  G.nodes.ste = {end:'refer', title:'An EMS ambulance, with an escort from your zone', items:[
    'MECC informs the PHC supervisor (SV PHC) and your clinical zone; the SV PHC activates the EMS/interfacility ambulance with its driver (2.2)',
    '"Staf pengiring dari zon yang memohon": the escort comes from the zone that asked (2.3)',
    'The EMS team and the accompanying staff take the patient to IJN, hand over to the IJN team and return to base'],
    links:[['#acs--ijn', 'Ebook: IJN referral']], gap:SRC('2023-05', 'paragraph 2 and the flow chart')};

  G.nodes.pol = {q:'A police detainee brought only for samples: stable?', fig:'memo-2022-04', hint:'Since the meeting with the Forensic Department of 11 Mar 2022, Forensic takes these samples. "Diminta untuk para petugas tidak menolak kes daripada pihak polis": do not turn away a police case.',
    opts:[['Stable', 'pol2'], ['Not stable', 'polx']]};
  G.nodes.polx = {end:'admit', title:'Not stable: treat accordingly', items:['Manage the patient\'s condition first, in the right zone'], gap:SRC('2022-04', 'flow chart')};
  G.nodes.pol2 = {q:'Arrived between 8 am and 5 pm?', opts:[['Yes', 'polf'], ['No', 'pol3']]};
  G.nodes.pol3 = {q:'Call the forensic specialist. Is it urgent?', opts:[['Not urgent', 'polf'], ['Urgent', 'pol4']]};
  G.nodes.pol4 = {q:'Are forensic staff available?', opts:[['Yes', 'polf'], ['No', 'poly']]};
  G.nodes.polf = {end:'refer', title:'To the Forensic Department, with the police', items:[
    'Call the Forensic counter (ext 6695) or the person in charge there first, before you send the detainee with the police ("memaklumkan dulu kepada pihak kaunter Jabatan Forensik")',
    'Forensic takes the sample, or gives an appointment to take it'],
    gap:SRC('2022-04', 'paragraphs 2 to 3 and the flow chart') + ' The flow chart\'s footnote also names staff with their mobile numbers; they are not copied, and are covered on its page.'};
  G.nodes.poly = {end:'discharge', title:'Urgent, and no forensic staff: the Yellow Zone takes the sample', items:['"Sekiranya Jabatan Forensik mengalami kekangan petugas ... Jabatan Kecemasan akan membantu": the ED helps when Forensic is short of staff', 'The flow chart then ends in discharge'],
    gap:SRC('2022-04', 'paragraph 3 and the flow chart')};

  G.nodes.poct = {end:'neutral', title:'Stat FBC and ABG on the POCT machine', fig:'memo-2023-24', items:POCT.concat(['From the Green Zone, a stat FBC or ABG on the POCT machine needs the approval of the specialist on duty']), gap:POCTGAP};

  G.nodes.laot = {end:'neutral', title:'Booking a case to LA OT', fig:'memo-2022-21', items:[
    '"...semua kes untuk tempahan (booking) ke LA OT dari Jabatan Kecemasan hendaklah melalui Google Form yang disediakan di dalam komputer di zon-zon kecemasan": book every LA OT case through the Google Form on the zone computers (2)',
    'The patient moves: change the location in the Google Sheet, also linked on the zone computers (2)',
    'In force from 10 Oct 2022. After the changeover, no phone call is needed: the LA OT staff check the Google Sheet (3)'],
    gap:SRC('2022-21') + ' The form and the sheet are on the zone computers; the guide does not link them, since the sheet holds patients\' details.'};

  G.nodes.tq = {end:'neutral', title:'Tourniquets: never a rubber glove', fig:'memo-2023-20', items:[
    '"...melarang penggunaan sarung tangan getah sebagai torniquet semasa prosedur pemasangan intravenous cannula dan pengambilan darah pesakit": no rubber glove as a tourniquet for IV cannulation or blood taking (3)',
    'Use the tourniquets the department provides (3)',
    'Effective immediately, with firm action against anyone who does not comply (4)'],
    gap:SRC('2023-20')};

  G.nodes.mfl = {end:'neutral', title:'A reported X-ray shows a missed fracture', items:['The memo\'s flow, step by step, is on the missed fractures page'], links:[['#missed-fractures--mf1', 'The missed fracture flow']], gap:'Source: ' + M('2022-12') + '. A department note (standing rule 6); the memo card on the flow opens its pages.'};

  /* ---------------- Yellow Zone ---------------- */
  const Y = P['yellow-zone'];
  Y.title = 'Yellow Zone: flow and memos';
  Y.lead = 'Where patients go in the Yellow Zone, and the department memos for the procedures, drugs and transfers there.';
  Y.start = 'menu';
  Y.upd = true;
  Y.nodes.menu = {q:'What do you need?', opts:[
    ['Patient flow in the Yellow Zone', 'flow'],
    ['Blood transfusion: the second verifier', 'bt'],
    ['Sedation for a procedure, CT or X-ray', 'psa'],
    ['Central line (CVC)', 'cvc'],
    ['Receiving a patient referred from another hospital', 'refin'],
    ['Transfer to a ward or another department', 'tr'],
    ['Human albumin', 'alb'],
    ['Dangerous drugs (DDA): your part', 'dda'],
    ['Stat FBC and ABG on the POCT machine', 'poct'],
    ['An "unknown" patient now identified', 'unk']]};

  Y.nodes.bt = {end:'neutral', title:'Blood transfusion: the second verifier signs before it starts', fig:'memo-2022-19', items:[
    'Agreed with the National Blood Centre (Pusat Darah Negara): the Ketua Jururawat, the Penyelia or the MO looking after the zone on that shift is the second verifier on the blood transfusion checklist (2)',
    '"Semua senarai semak hendaklah ditandatangani dan dicop ... sebelum transfusi darah dilakukan": every checklist is signed and stamped by one of them before the transfusion starts (3)'],
    gap:SRC('2022-19')};

  Y.nodes.psa = {q:'Sedation for a procedure, CT or X-ray: is the patient high risk?', fig:'memo-2021-12', hint:'"Borang PSA wajib diisi" for every patient given sedation for any procedure, CT and X-ray included. The memo does not define high risk; the form asks about past history, allergy, previous complications and difficult airway features.',
    opts:[['High risk', 'psah'], ['Not high risk', 'psaf']]};
  Y.nodes.psah = {end:'refer', title:'High risk: consult the Emergency Physician first', items:['"Kes \'high risk\' yang memerlukan \'sedation\' hendaklah mendapat konsultasi dari Pakar Perubatan Kecemasan" (3 ii)', 'Then fill in the PSA form as for every sedation'], links:[['#yellow-zone--psaf', 'The PSA form']], gap:SRC('2021-12')};
  Y.nodes.psaf = {end:'neutral', title:'Fill in the Procedural Sedation Analgesia (PSA) form', items:[
    'Every patient given sedation for any procedure, CT and X-ray included: the PSA form (PSA/JKT/HKL/2013) in duplicate, one copy with the patient\'s record and one in the PSA file (3 i)',
    'The form covers the indication (CMR, T&S, acute wound management, others), the place (Red zone, Yellow zone, IC ward), the pre-procedure assessment and preparation, monitoring and the medications given',
    '"To take vital signs every 5 minutes during procedure, and every 15 minutes during observation until fully conscious" (form, side 2)',
    'After the procedure it records any adverse event: "hypoxia (SPO2 <91%), hypotension, cardiac arrest, vomiting, apnoea etc", reversal agents, and the discharge criteria'],
    gap:SRC('2021-12', 'and its PSA form') + ' The form refers to Lampiran 2 (medication) and Lampiran 3 (airway, last meal, trolley, discharge criteria), which are not in the memo\'s file: no drug or dose is given here.'};

  const CVCB = ['Operator and assistant practised correct hand hygiene technique', 'Operator and assistant wore sterile gloves and gown, cap and mask', 'Equipment assembled and verified', 'Skin site scrubbed back and forth with friction using 2% chlorhexidine for 30 seconds (2 min for femoral)', 'Skin site allowed to dry completely before puncture (2 min for femoral). Do not wipe, fan or blot.', 'Patient\'s body covered by sterile drape from head to toe', 'Ultrasound probe cover applied', 'Local anaesthesia administered', 'CVC connected to 3-way stop cock, flushed and all lumen clamped except for distal lumen', 'Vein punctured and blood aspirated, guided by real-time ultrasound', 'Guidewire inserted followed by needle and syringe removal', 'Small incision (3mm) in the skin made using scapel', 'Dilator slided over the guidewire in twisting motion to create track and then removed', 'CVC threaded over the guidewire via unclamped distal lumen and the end of guidewire is grasped with forcep', 'CVC is ONLY then advanced and guidewire removed', 'CVC placement confirmed with ultrasound', 'Blood aspirated and flushed from each lumen', 'All lumen clamped, 3-way stop cock locked and caps applied', 'CVC secured with suture and sterile transparent dressing applied', 'Insertion date documented on dressing', 'CVC tip position confirmed with CXR'];
  Y.nodes.cvc = {q:'Central line: is the specialist on duty supervising you directly?', fig:'memo-2022-08', hint:'"Pegawai Perubatan tidak dibenarkan melakukan CVC insertion TANPA \'direct supervision\' dari Pakar yang bertugas" (2.1).',
    opts:[['Yes, the specialist is with me', 'cvcb'], ['No', 'cvcno']]};
  Y.nodes.cvcno = {end:'refer', title:'Stop: no CVC without the specialist\'s direct supervision', items:['Ask the specialist on duty to supervise you directly before you start', 'The CVC insertion checklist is in use since 9 May 2022 (2.3)'], gap:SRC('2022-08', 'from the Deputy Head for the Head of Department, effective immediately')};
  Y.nodes.cvcb = {check:'all', q:'The CVC care bundle: the critical steps', fig:'memo-2022-09', hint:'As printed on the form HKL/JK/PK 01-17 (in force 2 Mar 2022): "If there is any deviation of steps, supervisor must immediately correct the operator." Tick each step as it is done.',
    items:CVCB, opts:[['Every step done', 'cvcok'], ['A step was missed', 'cvcfix']]};
  Y.nodes.cvcok = {end:'neutral', title:'Inserted: the daily care, days 1 to 3', items:[
    'Hub is wiped with 2% chlorhexidine for 30s and allowed to dry prior to access',
    'Exit site is inspected for any signs of infection',
    'Transparent dressing is dry and intact',
    'CVC is still required',
    'Attach the form to the observation chart; the memo files it with the temperature chart and the drug chart too'],
    gap:SRC('2022-09', 'and the form HKL/JK/PK 01-17, Daily CVC Monitoring') + ' The equipment list is on the form\'s back page, which is not in the memo\'s file.'};
  Y.nodes.cvcfix = {end:'refer', title:'A step was missed: the supervisor corrects it now', items:['"If there is any deviation of steps, supervisor must immediately correct the operator"', 'Record any complication on the form'], gap:SRC('2022-09', 'the form HKL/JK/PK 01-17')};

  Y.nodes.refin = {check:'all', q:'A patient referred from another hospital or clinic: is each of these done?', fig:'memo-2022-22', hint:'The staff who receive the case are responsible for each point (3).',
    items:[
      'Examined again carefully on arrival, above all critical cases that need intubation and infusions (3 i)',
      'All the documents received are complete, with the results, X-ray and others (3 ii)',
      'Intubated: the ETT is confirmed in the right position, with no complication of intubation such as a pneumothorax or a blocked ETT, before any paralytic agent or a higher sedation dose (3 iii)'],
    opts:[['All done', 'refok'], ['Not yet', 'refno']]};
  Y.nodes.refok = {end:'neutral', title:'Received safely: carry on with the plan', items:['Re-examined, documents and results complete, the tube checked'], gap:SRC('2022-22')};
  Y.nodes.refno = {end:'observe', title:'Finish the checks before you go on', items:['"Tidak dibenarkan memberi ubat \'paralytic agent\' atau meningkatkan dos ubat sedation sebelum memastikan ETT pada kedudukan yang betul": no paralytic and no higher sedation dose until the ETT is confirmed in place (3 iii)', 'Re-examine, and chase any missing document or result'], gap:SRC('2022-22')};

  Y.nodes.tr = {q:'Transfer: is this a high-risk patient, on inotropes or ventilated (invasive or non-invasive)?', fig:'memo-2023-14', hint:'Every inter-departmental transfer uses three forms: the Inter-Departmental Transfer of Adult Patients risk assessment (HKL/PKT-14-01), the patient sending checklist and the equipment checklist.',
    opts:[['Yes, high risk', 'trhi'], ['No', 'trews']]};
  Y.nodes.trews = {q:'The Early Warning Score, recorded half an hour before the transfer?', hint:'"For EWS ≥ 1, to inform Doctor" (the risk form).',
    opts:[['EWS 0', 'trlo'], ['EWS 1 to 5', 'trmed'], ['Over 5', 'trhi']]};
  Y.nodes.trlo = {end:'discharge', title:'Low-risk transfer', items:['"Accompanied by PPK/JM/JT/ Pen.Peg.Perubatan"', 'The memo asks for its three forms on every transfer: the risk assessment, the patient sending checklist and the equipment checklist'], gap:SRC('2023-14', 'the risk assessment flow chart (HKL/PKT-14, issue 02, amendment 01, in force January 2016)')};
  Y.nodes.trmed = {q:'Medium-risk transfer. Consult the PP: is the transfer essential now?', opts:[['Yes', 'trmy'], ['No', 'trwait']]};
  Y.nodes.trmy = {end:'observe', title:'Medium risk: transfer with trained staff', items:['"Transfer with PP/PPS and JT/Pen. Peg. Perubatan with appropriate training as judged by managing PP"', 'Fill in the transfer checklist, with monitoring'], gap:SRC('2023-14', 'the risk assessment flow chart')};
  Y.nodes.trhi = {q:'High risk. Consult the specialist in charge: is the transfer essential now?', opts:[['Yes', 'trhy'], ['No', 'trwait']]};
  Y.nodes.trhy = {end:'admit', title:'High risk: transfer with an ALS-trained doctor', items:['"Transfer with: PP with ALS training and PPS/ JT/ Pen.Peg.Perubatan"', 'Fill in the transfer checklist, with monitoring'], gap:SRC('2023-14', 'the risk assessment flow chart: "EWS =0" low, "EWS =1 - 5" medium, "EWS > 5" high (a faint scan, read against the 5 beside it)')};
  Y.nodes.trwait = {end:'observe', title:'Not essential now: resuscitate and delay the transfer', items:['"Resuscitate & delay transfer"'], gap:SRC('2023-14', 'the risk assessment flow chart')};

  Y.nodes.alb = {end:'neutral', title:'Human albumin needs the Emergency Physician', fig:'memo-2024-13', items:['"...prekripsi Human Albumin perlu mendapat persetujuan dan tandatangan timbal dari Pakar Kecemasan": a human albumin prescription needs the Emergency Physician\'s agreement and countersignature (2)', 'Effective immediately (3)'], gap:SRC('2024-13', 'from morning meeting 25/2024')};

  Y.nodes.dda = {end:'neutral', title:'Dangerous drugs (DDA): your part as the MO', fig:'memo-2024-11', items:[
    '"Pegawai Perubatan BERTANGGUNGJAWAB memastikan preskripsi ubat pesakit (in patient) DITULIS LENGKAP": write the in-patient prescription in full (duty 8)',
    '"Pegawai Perubatan TIDAK DIBENARKAN mengambil / mengeluarkan DD dari Almari DD": you may not take a dangerous drug out of the DD cupboard yourself (duty 14)',
    'The flow: you write the prescription and ask the PPP or JT to give it; the PPP or JT in charge of the patient checks it and asks the DD in-charge, who issues it; the syringing out is done together',
    'A zone\'s dangerous drugs are for that zone only: "DD Yellow Zone terhad kepada pesakit Yellow Zone/ Yellow Zone Extension/ Psy Cubical sahaja" (duty 13)',
    'Every DD given is recorded under the patient\'s real name, and two patient identifiers are used each time'],
    gap:SRC('2024-11', 'its 15 duties of the DD in-charge and its flow chart; it cancels memo HKL/JK/98/188/3(49)20 of 1 Oct 2020')};

  Y.nodes.poct = {end:'neutral', title:'Stat FBC and ABG on the POCT machine', fig:'memo-2023-24', items:POCT, gap:POCTGAP};

  Y.nodes.unk = {end:'neutral', title:'An "unknown" patient now identified: keep both wristbands', fig:'memo-2024-04', items:[
    'A patient registered as "unknown" and later re-registered under the real identity may wear the new wristband together with the original "unknown" one (2)',
    'Why: blood samples and tests already sent under the unknown identity stay usable for that patient (2)'],
    gap:SRC('2024-04', 'after the Department Retreat of 26 Feb 2024 and the Transfusion Committee')};

  Y.see = (Y.see || []).concat([['#gz-rules--gzm', 'Green Zone: department memos']]);
  Y.kw = ((Y.kw || '') + ' memo blood transfusion verifier sedation PSA CVC central line care bundle referral transfer EWS albumin dangerous drugs DDA morphine POCT FBC ABG unknown wristband').trim();
  Y.refs = (Y.refs || []).concat(['Department memos: ' + ['2022-19', '2021-12', '2022-08', '2022-09', '2022-22', '2023-14', '2024-13', '2024-11', '2023-24', '2024-04'].map(M).join('; ')]);

  G.kw = ((G.kw || '') + ' team leader ketua pasukan roll call surge memo elderly tramadol tramal records clerking note critical value lab notification UKA STEMI KVAS police detainee forensic POCT LA OT tourniquet glove').trim();
  G.refs = (G.refs || []).concat(['Department memos: ' + ['2023-01', '2024-09', '2021-14', '2022-14', '2022-23', '2023-04', '2023-05', '2022-04', '2023-24', '2022-21', '2023-20'].map(M).join('; ')]);

  /* ---------------- Missed fractures: the department's work flow ---------------- */
  const F = P['missed-fractures'];
  const ri = F.nodes.menu.opts.findIndex(o => o[1] === 'recall');
  F.nodes.menu.opts.splice(ri + 1, 0, ['The memo: a reported film shows a fracture', 'mf1']);
  F.nodes.recall.links = (F.nodes.recall.links || []).concat([['#missed-fractures--mf1', 'The department memo\'s flow']]);
  F.nodes.mf1 = {q:'The radiology report has come back to you, the MO on duty. Does it show a fracture?', fig:'memo-2022-12', hint:'The report is entered in the "X-Ray reporting" data and handed to the MO on duty, who assesses it (Lampiran 1).',
    opts:[['Ada kepatahan: a fracture', 'mf2'], ['Tiada kepatahan: no fracture', 'mfn']]};
  F.nodes.mfn = {end:'neutral', title:'No fracture: return the RPP to the Records Unit', items:['Serah RPP kembali kepada Unit Rekod Jabatan'], gap:SRC('2022-12', 'Lampiran 1')};
  F.nodes.mf2 = {q:'Can the patient be reached?', opts:[['Yes', 'mfy'], ['No', 'mfno']]};
  F.nodes.mfy = {end:'refer', title:'Call the patient back', items:['Ask the patient to come back to the department at a time and place that suit the patient', 'Inform the MO involved', 'Document the plan and further action in the RPP', 'Return the RPP to the Records Unit'], gap:SRC('2022-12', 'Lampiran 1')};
  F.nodes.mfno = {end:'refer', title:'Cannot be reached: a recall letter or the nearest police station', items:[
    'Send a recall letter, or contact the police station nearest the patient\'s address to reach the patient',
    'A critical missed fracture that cannot be reached by phone: fill in the form "Pemakluman pesakit Missed Fracture yang tidak dapat dihubungi melalui telefon" (Lampiran 2) in 2 copies and give both to MECC, who call the nearest police station (2)',
    'One copy goes to the Records Unit; MECC keeps the other in case the police call back (Lampiran 2)',
    'Then inform the MO involved, document the plan in the RPP and return the RPP to the Records Unit'],
    gap:SRC('2022-12', 'paragraph 2 and Lampiran 1 and 2')};

  /* ---------------- EMACC follows memo (01)24 of 11 Jan 2024 (Krishna, 12 Nov 2026) ----------------
     The memo cancels the Klinik Ulangan memo (27)22 and sets the work process: booking at Counter 10 with the slip hijau,
     the first visit on day 4 (urgent) or day 5 at the earliest, blood results to EM WATCH, at most 2 visits in a month.
     It does not restate who EMACC is for, so the 2018 SOP's eligibility and case list stay, labelled with their date. */
  const E = P['emacc'], E24 = s => SRC('2024-02', s);
  E.title = 'EMACC follow-up (Klinik Ulangan)';
  E.src = 'Memo (01)24, Jan 2024';
  E.upd = true;
  E.lead = 'Emergency Medicine After Care Clinic: a short follow-up for patients discharged from the ED. The work process follows memo HKL/JK/98/188/3(01)24 of 11 Jan 2024, which cancels the Klinik Ulangan memo of 5 Dec 2022.';
  E.nodes.elig.hint = 'Who EMACC is for comes from the SOP of 1 Feb 2018: the 2024 memo does not restate it.';
  E.nodes.first.opts = [['Yes', 'usual'], ['No', 'need']];
  E.nodes.need = {q:'What does the follow-up need to review?', fig:'memo-2024-02',
    info:['Trauma within 3 months is a new trauma case: seen in the ED or at EMACC (within its first month). After 3 months it is an old case, assessed for the ED or redirected to another facility by its severity (9)',
      'EMACC sees a patient at most twice within 1 month of discharge; after 1 month it is a new case, registered and triaged again (8)'],
    opts:[['A blood result', 'bres'], ['The patient, or an X-ray report', 'urg'], ['Only the clinic\'s hours and slots', 'clinic']]};
  E.nodes.bres = {end:'refer', title:'A blood result to review: EM WATCH, not EMACC', items:['"Bagi kes-kes yang memerlukan review blood result perlu dirujuk ke EMWATCH": cases that need a blood result reviewed are referred to EM WATCH (12)'],
    links:[['#em-watch', 'EM Watch: telemedicine follow-up']], gap:E24('Lampiran A, 12')};
  E.nodes.urg = {q:'Is it an urgent review?', hint:'The first visit is no earlier than day 4 (urgent) or day 5, so the X-ray report is back by then (12).',
    opts:[['Urgent review', 'bku'], ['Not urgent', 'bkn']]};
  const HOW = [
    'Write the TCA date on the slip hijau, and send the patient with it to Counter 10, the ED Registration Counter, for the EMACC card and the appointment date; the Pembantu Tadbir records every TCA (7, 11; Lampiran B1)',
    'The patient brings the slip hijau back to you: record the appointment date in the RPP, clip the slip hijau outside the RPP or the X-ray envelope, and hand over the discharge package (the medication slip, an MC if any, a referral letter if any) before the patient goes home (11; Lampiran B1)',
    'Tell the patient: at most 2 EMACC visits within 1 month of discharge; refer to a specialist clinic if needed (8)',
    'Late or missed: seen if a walk-in slot is free while the clinic is open; otherwise a new date on the next clinic day. No appointment card: to the Registration Counter first (13 to 15)',
    'EMACC runs Monday to Friday, 8 am to 3 pm (Krishna, 12 Nov 2026)'];
  E.nodes.bku = {end:'refer', title:'Urgent: EMACC on day 4 at the earliest, 12 pm to 3 pm', fig:'emtl', items:HOW, links:[['#emacc--clinic', 'The clinic: hours and slots']], gap:E24('Lampiran A, 7 to 15, and Lampiran B1')};
  E.nodes.bkn = {end:'refer', title:'Not urgent: EMACC on day 5 at the earliest, 8 am to 3 pm', fig:'emtl', items:HOW, links:[['#emacc--clinic', 'The clinic: hours and slots']], gap:E24('Lampiran A, 7 to 15, and Lampiran B1')};
  E.nodes.clinic = {end:'neutral', title:'The EMACC clinic: 8 am to 3 pm, Monday to Friday', fig:'memo-2024-02', items:[
    'EMACC runs 8 am to 3 pm, Monday to Friday (Krishna, 12 Nov 2026). The memo prints the MOs\' hours as 7.30 am to 3.30 pm and consultations from 8.00 am to 3.30 pm, and the triage counter takes the last EMACC patient at 3.00 pm (1, 3, 4)',
    'Appointments: 8 an hour across 2 consultation rooms, 8.00 am to 3.00 pm, 56 a day not counting walk-ins; about 56 to 60 patients a day in all (10)',
    'A walk-in with no appointment who is still unwell or still unfit for work and needs a doctor: registered as an EMACC patient, or as a copy card after EMACC hours (16)',
    'The second visit follows up the first, or bridges to a specialist clinic appointment; the patient is discharged after it (8.2)'],
    gap:E24('Lampiran A') + ' The hours, 8 am to 3 pm on Monday to Friday, are Krishna\'s instruction of 12 Nov 2026; their written source is under Still to confirm.'};
  delete E.nodes.book;
  E.tables[0].title = 'Cases the 2018 SOP sends to EMACC. Its review times are replaced: the first visit is day 4 (urgent) or day 5 at the earliest, and blood results go to EM WATCH (memo (01)24, Jan 2024)';
  E.refs = ['Memo HKL/JK/98/188/3(01)24: Penyelarasan semula proses kerja pengurusan pesakit Klinik Ulangan (EMACC), 11 Jan 2024, with Lampiran A, A1, B1, B2 and B3', 'Emergency Medicine After Care Clinic (EMACC) Standard Operating Procedure, ETD HKL, 1 Feb 2018 (MO Drive, Clinical / EMACC): who EMACC is for, and its case list'];
  E.kw = ((E.kw || '') + ' klinik ulangan TCA slip hijau counter 10 kaunter 10 day 4 day 5 urgent review walk-in copy card').trim();
})();
