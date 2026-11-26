/* ================= 21 Nov 2026: memos and letters the department circulated, 2019 to 2026 =================
   Source: documents the Emergency & Trauma Department circulated to its staff, which Krishna gave on 21 Nov 2026 ("add the
   content into this app. but only relevent ones only. make it premium"). 381 files and 238 pictures were sorted (the
   run-through is on this PC only); what went in is below, each document read from its page images, every number checked on an
   enlarged crop. Each goes in as a labelled note with its own number and date (standing rule 6): the department's own memos as
   department notes, the other departments' letters as hospital notes, and the MOH ectopic pregnancy circular beside the 2018
   one already in the guide. Pages show as snapshots (app/memo/<key>-p<N>.webp, built by src/memos.js) with signatures, name
   blocks, registration numbers, incident background, a link with its QR code and a possible identity number covered; letters
   that name staff throughout show no pages. Nothing here is from memory (rule 8): where a document stops, the step says so. */
(function(){
  const DEPT = ' A department note (standing rule 6).', HOSP = ' A hospital note (standing rule 6).';
  const NOPAGES = 'Not shown as pages: the letter names staff throughout. Read from its page images.';
  const add = (k, o) => { MEMOS[k] = Object.assign({list:false}, o); };

  /* ---------------- The sources ---------------- */
  add('2026-measles', {kind:'Department memo', ref:'HKL/JK/98/123/8', date:'19 Nov 2026', t:'Pengurusan kes disyaki campak (measles) di kaunter triage',
    pages:[[1, 'Memo'], [2, 'Triage guide']], cap:'The memo and its one-page triage guide, a page at a tap. The signature block and the guide\'s three clinical photographs are covered.'});
  add('2026-nipah', {kind:'Department memo', ref:'HKL/JK/98/123/8', date:'printed 28 Jan 2025', t:'Kesiapsiagaan Jabatan Kecemasan HKL bagi pengurusan kes disyaki virus Nipah (NiV)',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block is covered. It was circulated in January 2026: the printed year is under Still to confirm.'});
  add('2026-ptrev', {kind:'Department memo', ref:'HKL/JK/98/188/3', date:'30 Apr 2026', t:'Penambaikan mengenai kelewatan tinjauan (review) pasukan primer (primary team) di Zon Hijau',
    pages:[[1, 'Memo']], cap:'The memo as scanned, its title spelt as printed; the signature block is covered.'});
  add('2026-eot', {kind:'Department memo', ref:'HKL/JK/98/188/3( )26', date:'5 Mar 2026', t:'Penambahbaikan tatacara pengurusan dan komunikasi pesakit kes pembedahan kecemasan di Jabatan Kecemasan',
    pages:[[1, 'Page 1'], [2, 'Page 2']], cap:'The memo as scanned: its background paragraph and the signature block are covered.'});
  add('2026-ivpcm', {kind:'Department letter', ref:'HKL/JK/98/188/1', date:'May 2026', t:'Penggunaan IV paracetamol dan IV albumin (5%, 20% dan 25%)',
    pages:[[1, 'Letter']], cap:'The letter as it was circulated, a phone screenshot of its page; the signature is covered.'});
  add('2026-lampa', {kind:'Department memo', ref:'HKL/JK/98/188/3(11)26', date:'6 Jul 2026', t:'Penambahbaikan proses kerja penggunaan Lampiran A pesakit warga asing Jabatan Kecemasan dan Trauma',
    pages:[[1, 'Memo'], [2, 'Memo, page 2'], [3, 'Flow chart'], [4, 'Flow chart: disposition']], cap:'The memo and its flow chart as scanned; the signature block is covered. Its two forms and Lampiran A itself are not shown.'});
  add('2025-move', {kind:'Department memo', ref:'HKL/JK/98/188/3(28)25', date:'26 Nov 2025', t:'Pengurusan pergerakan/pemindahan pesakit (intrafasility transfer) Jabatan Kecemasan dan Trauma',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block is covered.'});
  add('2025-chemo', {kind:'Department memo', ref:'HKL/JK/98/188/3(23)25', date:'12 Feb 2025', t:'Pengurusan pesakit pasca-kemoterapi dengan demam',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block and registration numbers are covered.'});
  add('2025-mcstaff', {kind:'Department memo', ref:'HKL/JK/98/3(26)25', date:'7 Aug 2025', t:'Amalan pemberian sijil cuti sakit oleh pegawai perubatan kecemasan kepada kakitangan Jabatan Kecemasan',
    pages:[[1, 'Memo']], cap:'The memo as scanned, its number as printed; the signature block is covered.'});
  add('2019-rev24', {kind:'Department memo', ref:'HKL/JK/98/188/3(5)19', date:'4 Feb 2019', t:'Penambahbaikan rawatan pesakit yang telah menerima rawatan di fasiliti kesihatan lebih dari 1 kali dalam masa 24jam',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block is covered.'});
  add('2022-ctmri', {kind:'Department memo', ref:'HKL/JK/98/188/3(28)22', date:'14 Dec 2022', t:'Penambahbaikan bagi kes-kes \'missed intracranial bleeding & missed fracture\' dalam pengimejan CT/MRI',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block and registration numbers are covered.'});
  add('2026-dispatch', {kind:'Department memo', ref:'HKL/JK/98/140/11', date:'Sep 2026', t:'Penggunaan Buku Penghantaran (Dispatch Book)',
    pages:[[1, 'Memo']], cap:'The memo as scanned; the signature block is covered.'});
  add('2026-pocrev', {kind:'Department memo', ref:'HKL/JK/98/188/3( )26', date:'printed 6 Mar 2025', t:'Tatacara semakan keputusan ujian POCT di Jabatan Kecemasan dan Trauma',
    pages:[[1, 'Memo']], cap:'The memo as it was circulated, a photograph of the page: its background paragraph and the signature block are covered.'});
  add('pat-hiv', {kind:'Pathology letter', ref:'HKL/PAT/98/180/4 (28) Jld. 9', date:'7 Nov 2024', t:'Makluman penambahbaikan penghantaran sampel bagi ujian saringan serologi Human Immunodeficiency Virus (HIV) di Unit Mikrobiologi, Jabatan Patologi, HKL', pages:[], cap:NOPAGES});
  add('pat-bhcg', {kind:'Pathology letter', ref:'HKL/PAT/98/180/4(39) Jld. 12', date:'19 Mar 2026', t:'Pemakluman perubahan pengurusan ujian segera beta-human chorionic gonadotropin (BHCG) di Unit Makmal Teras, Jabatan Patologi, HKL', pages:[], cap:NOPAGES});
  add('pat-fbp', {kind:'Pathology letter', ref:'HKL/PAT/98/180/2-3(47) Jld. 2', date:'29 Jun 2026', t:'Makluman garis panduan indikasi dan keperluan maklumat klinikal bagi permohonan ujian full blood picture (FBP), lupus anticoagulant (LA), dan inherited thrombophilia panel', pages:[], cap:NOPAGES});
  add('pat-tubes', {kind:'Pathology letter', ref:'HKL/PAT/98/180/2-8 (7) Jld. 2', date:'May 2024', t:'Penolakan spesimen yang tidak memenuhi kriteria isipadu di Unit Makmal Teras, Jabatan Patologi HKL', pages:[], cap:NOPAGES});
  add('pat-cra', {kind:'Pathology letter', ref:'HKL/PAT/98/180/4(36) Jld. 10', date:'2 Jul 2025', t:'Tatacara penghantaran sampel dan penggunaan borang PER PAT 301 bagi penghantaran sampel ke Common Receiving Area (CRA)', pages:[], cap:NOPAGES});
  add('far-foreign', {kind:'Pharmacy memo', ref:'HKL/FAR/PSF/98/100-1/1/5 (33)', date:'9 Feb 2024', t:'Pembekalan ubat kepada warga asing di fasiliti KKM',
    pages:[[1, 'Infographic']], cap:'The pharmacy\'s infographic as circulated; a picture that may show a real identity card is covered. The memo and the MOH guideline are summarised in the step.'});
  add('far-aspirin', {kind:'Pharmacy letter', ref:'HKL/FAR/FA/98/182-1/2/1(46)', date:'9 Nov 2022', t:'Pemakluman perubahan arahan cara administrasi ubat acetylsalicylic acid dispersible tablet 300mg',
    pages:[[1, 'Letter, page 1']], cap:'The first page of the letter, with the new instruction.'});
  add('upsk', {kind:'Counselling unit criteria', ref:'Referral form HKL/UPsK/01', date:'in force 3 Mar 2025', t:'Kriteria rujukan pesakit untuk Perkhidmatan Psikologi Kaunseling, Hospital Kuala Lumpur',
    pages:[[1, 'Criteria'], [2, 'Flow chart']], cap:'The unit\'s criteria and flow chart as printed.'});
  add('med-mau25', {kind:'General Medicine letter', ref:'(400) HKL/PBTN/98/100/29-01', date:'7 Feb 2025; erratum 20 Feb 2025', t:'Pengemaskinian kriteria kemasukan pesakit perubatan ke wad bukan perubatan (lodger), Pre Discharge Lounge (PDL), MH2A dan MH1B',
    pages:[[1, 'The criteria table']], cap:'The letter\'s table of criteria; a link and its QR code are covered.'});
  add('nefro-hd', {kind:'Nephrology form', ref:'HKL/NEFRO/090', date:'Dec 2024; letter 15 Jan 2025', t:'Request form for acute hemodialysis in Emergency Department',
    pages:[[1, 'The form, page 1']], cap:'The form\'s first page, blank, with its indications.'});
  add('kpk-ectopic', {kind:'MOH circular', ref:'Surat Pekeliling KPK Bil. 9/2024, KKM.600-30/3/1 Jld.6 (57)', date:'13 Jun 2024', t:'Arahan tindakan untuk mencegah kematian ibu yang disebabkan oleh kehamilan luar rahim (ectopic pregnancy)',
    pages:[[1, 'Page 1'], [2, 'Lampiran 1: flow chart']], cap:'The circular\'s first page and its flow chart. Printed pages 5 to 7 are missing from the copy circulated.'});
  add('abx-dose', {kind:'Department guide', ref:'Adult dosing of common antimicrobial agents, 2nd edition', date:'Feb 2024', t:'Adult dosing of common antimicrobial agents used in the Emergency & Trauma Department, Hospital Kuala Lumpur',
    pages:[[1, 'Page 1: CrCl, no renal change'], [2, 'Page 2: by kidney function'], [3, 'Page 3: continued; gentamicin'], [4, 'Page 4: vancomycin']], cap:'The guide as printed, a page at a tap; the names and the approver\'s signature are covered.'});
  add('abx-dil', {kind:'Department guide', ref:'Quick guide on injectable antimicrobial dilution, 2nd edition', date:'Feb 2024', t:'Quick guide on injectable antimicrobial dilution & administration, Emergency and Trauma Department, Hospital Kuala Lumpur',
    pages:[[1, 'Page 1'], [2, 'Page 2']], cap:'The guide as printed, a page at a tap; the names and the approver\'s signature are covered.'});
  SPFIGS.tglab = ['pat-cra', 'pat-hiv', 'pat-fbp'];

  const S = (k, more, kind) => `Source: ${(MEMOS[k].kind || 'memo').replace(/^Department /, '').toLowerCase()} ${MEMOS[k].ref}, ${MEMOS[k].date}${more ? ', ' + more : ''}.` + (kind || DEPT);

  /* ---------------- Green Zone rules: the memos of 2025 and 2026 ---------------- */
  const G = P['gz-rules'];
  const gi = G.nodes.menu.opts.findIndex(o => o[1] === 'gzm');
  G.nodes.menu.opts.splice(gi + 1, 0, ['Memos of 2025 and 2026', 'gzn']);
  G.nodes.gzn = {q:'Which memo?', hint:'Memos and letters of the Emergency & Trauma Department, HKL, 2025 and 2026, as department notes. Each step shows its source.', opts:[
    ['Primary team review: 2 hours, then the EP', 'ptrev'],
    ['Waiting for emergency surgery', 'eot'],
    ['IV paracetamol and IV albumin: the EP signs', 'ivpcm'],
    ['Foreign patient with Lampiran A', 'lampa'],
    ['Fever after chemotherapy', 'chemo'],
    ['Moving a patient within HKL', 'move'],
    ['Sick leave for department staff', 'mcs']]};

  G.nodes.ptrev = {end:'neutral', title:'Primary team review: within 2 hours of your referral', fig:'memo-2026-ptrev', items:[
    'The primary team\'s target is to review the patient "dalam tempoh dua (2) jam selepas rujukan dibuat oleh pegawai perubatan di Zon Hijau": within two hours of your referral (3)',
    'Not seen by the primary team after two hours: tell the Emergency Physician on duty ("memaklumkan perkara ini kepada Pakar Perubatan Kecemasan (EP) yang bertugas"), to speed it up (3)',
    'So that you can look after the other Green Zone patients instead of waiting on one case (4)'],
    links:[['#gz-rules--delay', 'Disposition is delayed']], gap:S('2026-ptrev', 'paragraphs 3 and 4') + ' It does not say where the time of the referral is recorded.'};

  G.nodes.eot = {end:'neutral', title:'Waiting for emergency surgery: tell the primary team and OT at once', fig:'memo-2026-eot', items:[
    'Tell the primary team and the OT at once ("dengan kadar segera") if the patient becomes unstable, or if anything will stop the patient reaching OT within 30 minutes of the time set (3 i)',
    'The zone\'s Team Leader makes sure each patient has a named MO in charge ("patient ownership"); write that MO\'s name clearly in the clinical notes (3 ii)',
    'Record every assessment, change in the patient\'s state and treatment plan in time order ("secara kronologi") (3 iii)',
    'In force at once (4)'],
    links:[['#gz-rules--tl', 'Team leader of the shift']], gap:S('2026-eot', 'after the Mortality and Morbidity meeting of 13 Feb 2026 and the morning management meeting of 2 Mar 2026; its running number is blank as printed') + ' Its background paragraph is covered on the page.'};

  G.nodes.ivpcm = {end:'neutral', title:'IV paracetamol and IV albumin: only with an Emergency Physician\'s signature', fig:'memo-2026-ivpcm', items:[
    '"Dimaklumkan bahawa penggunaan ubat IV Paracetamol serta IV Albumin (5%, 20% dan 25%) di Jabatan Kecemasan dan Trauma, Hospital Kuala Lumpur adalah hanya dibenarkan dengan tandatangan dan pengesahan Pakar Perubatan Kecemasan": in the ED, IV paracetamol and IV albumin 5%, 20% and 25% only with the signature and approval of an Emergency Physician (2)',
    'Why: a review found that most patients given them did not meet the criteria set for their use (3). The letter does not print the criteria'],
    links:[['#yellow-zone--alb', 'Human albumin (memo of 2024)'], ['#dilution', 'ED dosing and dilution guide']],
    gap:S('2026-ivpcm', 'paragraphs 2 and 3; its date prints no day') + ' Which criteria the review used is under Still to confirm.'};

  G.nodes.lampa = {end:'neutral', title:'Foreign patient with Lampiran A (deposit deferred)', fig:'memo-2026-lampa', items:[
    'Lampiran A is for a foreign patient whose deposit is deferred because of a critical situation ("penangguhan pembayaran deposit kerana situasi kritikal") (2)',
    'Only a specialist signs Lampiran A ("hanya boleh ditandatangani oleh Pegawai Perubatan Pakar sahaja") and fills in the specialist\'s clinical assessment form, BPK/JKT-02 (2.2; Nota Penting I and II). The flow chart names the Emergency Physician for both',
    'The patient is registered into a definitive ward or the department\'s pseudo ward (R1, R2, YZ, YZ EXT, TENT, RECCU 1, RECCU 2 or Y OBS) on the admission slip, with Lampiran A attached (2.3; flow chart)',
    'The zone team (doctor, PPP or JT) keeps the PER-PD 301 form and records every investigation and procedure done on the CIP form, CIP/JKT-01 (2.4; flow chart)',
    'At disposition (discharge, own risk or admission): update PER-PD 301 and the CIP form; on admission the ward bed is registered in BOAT (flow chart, page 2)',
    'In force from 6 Jul 2026 (3)'],
    links:[['#prescribing--fgnrx', 'Medicines for a foreign patient: 5 days']],
    gap:S('2026-lampa', 'with its two-page flow chart; the running number is filled in by hand') + ' The flow chart calls the specialist\'s form "CIP/JKT-02" and the CIP form "CIP/JK-01", where the memo and the forms print BPK/JKT-02 and CIP/JKT-01. Lampiran A itself is not attached, and the memo does not say what happens when no specialist is present: under Still to confirm.'};

  G.nodes.chemo = {end:'refer', title:'Fever after chemotherapy: refer to Oncology, never discharge first', fig:'memo-2025-chemo', items:[
    'A patient with fever after chemotherapy belongs to a special population ("populasi khas"): assess as high risk, "dengan kemungkinan demam neutropenik sehingga dibuktikan sebaliknya": neutropenic fever until proven otherwise (2)',
    'Refer to the Oncology Department for further assessment and the decision on disposition (3)',
    '"Pesakit tidak boleh didiscaj tanpa penilaian daripada doktor Jabatan Onkologi": do not discharge before a doctor from Oncology has assessed the patient (3)'],
    gap:S('2025-chemo') + ' The memo gives no temperature, no time since chemotherapy and no neutrophil count, and the guide adds none (rule 8).'};

  G.nodes.move = {end:'neutral', title:'Moving a patient within HKL: the 200 kg line', fig:'memo-2025-move', items:[
    'Estimated weight under 200 kg: the intrafacility ambulance (2.1)',
    '200 kg or more: the zone staff push the patient on a patient trolley (2.1)',
    'The ambulance stretcher is always pushed by 2 staff, the driver with another, when collecting the patient and taking them to the ward, so that it does not tip over (2.2)',
    'In force at once (3)'],
    gap:S('2025-move')};

  G.nodes.mcs = {end:'neutral', title:'Sick leave for department staff: 2 days at most', fig:'memo-2025-mcstaff', items:[
    'An ED MO gives the department\'s own staff a sick leave certificate "tidak melebihi 2 (DUA) hari": no more than 2 days (3)',
    'More than 2 days needed: refer to the Emergency Physician and to the primary team (3.1, 3.2)',
    'Frequent sick leave for the same problem: refer to the primary team (3.3)',
    'A fellow ED medical officer: a certificate only with the Emergency Physician\'s permission (4)',
    'In force at once'],
    gap:S('2025-mcstaff', 'after the morning management meeting of 29 Jul 2025; its number as printed')};

  /* Two older memos join "More department memos" */
  G.nodes.gzm.hint = G.nodes.gzm.hint.replace('2021 to 2024', '2019 to 2024');
  G.nodes.gzm.opts.push(['Treated elsewhere in the last 24 hours', 'rev24'], ['CT or MRI before discharge: the EP reviews', 'ctmri']);
  G.nodes.rev24 = {end:'neutral', title:'Treated elsewhere in the last 24 hours: consult a master\'s trainee or the EP', fig:'memo-2019-rev24', items:[
    'Ask every patient whether they were treated at any public or private health facility in the 24 hours before (2)',
    'Treated in the 24 hours before: "hendaklah mendapatkan konsultasi dari Pegawai Perubatan Sarjana atau Pakar Kecemasan untuk perawatan selanjutnya": consult a master\'s trainee or the Emergency Physician on further care (3)'],
    gap:S('2019-rev24', 'its running number handwritten') + ' A memo of 2019: whether it is still in force, and how the registration sticker marks such a visit, are under Still to confirm.'};
  G.nodes.ctmri = {end:'neutral', title:'CT or MRI before discharge: the EP reviews the images', fig:'memo-2022-ctmri', items:[
    'A patient who had CT or MRI and is going home: refer to the Emergency Physician to review the images (2.1)',
    '"Wajib memberi rawatan susulan seperti EMACC/EMWATCH": give follow-up, such as EMACC or EM Watch, to reassess the patient and for the formal CT or MRI report (2.2)'],
    links:[['#emacc', 'EMACC'], ['#em-watch', 'EM Watch'], ['#missed-fractures', 'Missed fractures']],
    gap:S('2022-ctmri') + ' A memo of 2022: whether it is still in force is under Still to confirm.'};
  if (P['missed-fractures']) P['missed-fractures'].see = [...(P['missed-fractures'].see || []), ['#gz-rules--ctmri', 'CT or MRI before discharge (memo 2022)']];

  /* ---------------- Infection alerts: measles, and the department's own Nipah memo ---------------- */
  const I = P['infection-alerts'];
  const ni = I.nodes.menu.opts.findIndex(o => o[1] === 'nipah');
  I.nodes.menu.opts.splice(ni + 1, 0, ['Suspected measles', 'measles']);
  I.nodes.measles = {end:'refer', title:'Suspected measles: N95, isolate, tell Infection Control', fig:'memo-2026-measles', items:[
    'Suspect measles with all three: a high fever, 38°C or more ("Demam tinggi (≥ 38°C)"); at least one of cough, coryza or conjunctivitis; and a red maculopapular rash, starting on the face and hairline and spreading to the neck, trunk and limbs, usually around day 4 after the first symptoms (triage guide)',
    'Koplik spots, fine white spots inside the cheek, are more specific (triage guide)',
    'At once: wear an N95 mask (or equivalent); isolate the patient (an isolation room, or a negative-pressure room if there is one); tell the medical officer and the Infection Control team at once; record and label "Suspected Measles" on the triage system or EMR (triage guide, immediate actions)',
    'Infectious from 4 days before to 4 days after the rash. It spreads by droplets and through the air, and can stay in the air for up to 2 hours after the patient leaves: use a separate triage route and keep other patients away (triage guide)',
    'Incubation 7 to 14 days. At higher risk of complications: infants under 1 year, pregnant women and the immunocompromised. Complications: pneumonia, ear infection, diarrhoea or dehydration, encephalitis, and SSPE in the long term (triage guide)'],
    links:[['#infection-alerts--notify', 'Notifying an infection']],
    gap:S('2026-measles', 'and its one-page triage guide, "Measles (campak): panduan pantas di triage ED HKL", which prints no date of its own') + ' The guide aims at "pengurusan & notifikasi yang pantas" but prints no notification step: see Notifying an infection. Its clinical photographs are covered on the page.'};

  const NV = I.nodes.nipah;
  NV.items = [...NV.items,
    'The department\'s own memo: a suspected case is fever with neurological or respiratory symptoms and travel or contact within 14 days in a risk area (India: West Bengal, and Bangladesh, as the CPRC updates). Full PPE including N95 or PAPR; avoid nebulisation; intubation only by RSI, by experienced staff (department memo, 3)',
    'Where: unstable (MTS 1–2) in R1 cubicle 1 or 2 only; stable (MTS 3 or higher) in the Decon Room; never in an ordinary zone (department memo, 3)',
    'Tell the Shift Leader, Infection Control and the PKD/CPRC at once about every suspected case, with full documentation; samples for confirmation only on the CPRC\'s or PKD\'s instruction (department memo, 3)'];
  NV.fig = 'memo-2026-nipah';
  NV.gap += ' Also the department\'s memo HKL/JK/98/123/8, printed "28 Januari 2025" and circulated in January 2026: the year is under Still to confirm.' + DEPT;
  /* 25 Nov 2026 (built 26 Nov 2026, at the guide owner's go-ahead): the national guideline of January 2026 (circular KPK Bil. 16/2026,
     6 May 2026), in the guide's own words with section and page; it prints no reproduction terms, so nothing is quoted or copied as
     laid out. The HKL memos above stay the department's route (rule 6); where they differ is under Still to confirm. Cited by number
     and date only, with no page pictures (rule 3). */
  const NG = ' (national guideline, Jan 2026, ';
  NV.items = [...NV.items,
    'National guideline: suspect it with a fever (history, or above 37.5 °C) and neurological symptoms (headache, dizziness, vomiting, confusion, seizures, paralysis, coma or a change in behaviour) or respiratory symptoms (cough, shortness of breath), and, in the 14 days before onset, travel from an affected area such as West Bengal, India, or exposure to a confirmed case, to bats, bat-contaminated food or pigs there, or to date palm sap there' + NG + '4.2, p11)',
    'Warning signs: prolonged fever, a reduced level of consciousness, seizures, shortness of breath, SpO2 below 95%' + NG + 'Table 1, p13)',
    'The guideline works in phases. While no other country reports imported cases (phase 1), a suspected case with mild symptoms and no warning signs may go home with a Health Alert Card for 14 days of self-monitoring; with warning signs, admit to an isolation ward. Once other countries report imported cases (phase 2), admit every suspected case. It does not say which phase applies now: ask the EP or Infection Control' + NG + 'Table 1, p13, and Annex 1, p29)',
    'A suspected case with a negative or inconclusive result is a probable case and is still monitored for 14 days' + NG + '4.3, p11)',
    'Notify every suspected, probable or confirmed case within 24 hours to the nearest health office, by phone or e-Notification' + NG + '5, p12)',
    'Staff who handled the patient or the samples without complete PPE are close contacts and are monitored for 14 days' + NG + '10.1 and 10.2, pp16 to 17)'];
  NV.gap += ' The national lines: Guidelines on the Management of Nipah Virus (NiV) Infection in Malaysia, Disease Control Division, January 2026, issued with circular KPK Bil. 16/2026 (KKM.600-29/4/44 Jld.2(4), 6 May 2026), in the guide\'s own words.';
  NV.links = [...(NV.links || []), ['https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-ketua-pengarah-kesihatan-bil-16-2026-pelaksanaan-garis-panduan-pengurusan-jangkitan-virus-nipah-niv-di-malaysia-edisi-kemaskini-januari-2026', 'National Nipah guideline, Jan 2026 (circular Bil. 16/2026)']];
  if (I.refs && !I.refs.some(r => /Bil\. 16\/2026/.test(r))) I.refs.push('Guidelines on the Management of Nipah Virus (NiV) Infection in Malaysia, Disease Control Division, MOH, January 2026; circular KPK Bil. 16/2026, 6 May 2026');

  /* ---------------- Blood tests: sending samples, POCT results, the laboratory's rules ---------------- */
  const B = P['blood-tests'];
  B.nodes.menu.opts.push(['Sending samples: the dispatch book', 'disp'], ['POCT results: sign and stamp', 'poctrev'], ['Lab request forms: PER-PAT 301, HIV, FBP', 'forms'], ['Filling and mixing tubes', 'tubes'], ['Urgent beta-hCG: call the lab first', 'bhcg']);
  B.nodes.disp = {end:'neutral', title:'The dispatch book: every blood sample sent', fig:'memo-2026-dispatch', items:[
    'From 27 Sep 2026 every place where blood samples are collected keeps a dispatch book (buku penghantaran) (2, 3)',
    'For each sample write: the sample to be tested, with a complete form; the patient\'s name and IC or RN; the requester\'s name or stamp; the date and time of the request (3 i to iv)',
    'The PPK or porter who takes the samples to the laboratory checks that every form is complete and goes with its sample, writes their name and the time the samples were taken, and has the dispatch stamped by the laboratory (4)'],
    gap:S('2026-dispatch', 'dated September 2026 with no day')};
  B.nodes.poctrev = {end:'neutral', title:'POCT results: to the treating MO at once; sign and stamp each one', fig:'memo-2026-pocrev', items:[
    'POCT results (ABG, VBG, ECG, FBC stat) go to the treating medical officer or specialist at once ("dengan segera") (3 i)',
    'On every result you review, write the time and date, stamp it and sign it ("didokumentasi masa, tarikh, dicop dan ditandatangani") (3 ii)',
    'In force at once (4)'],
    links:[['#gz-rules--poct', 'Stat FBC and ABG on the POCT machine']],
    gap:S('2026-pocrev', 'after the Mortality and Morbidity meeting of 4 Dec 2025; its running number is blank') + ' A memo citing a meeting of December 2025 cannot date from March 2025, so the year is under Still to confirm. Its background paragraph is covered on the page.'};
  B.nodes.forms = {end:'neutral', title:'Lab request forms: PER-PAT 301', fig:'sp-tglab', items:[
    'Write every test you request on the front of the PER-PAT 301 form (CRA letter, Lampiran 1)',
    'Tests done by different laboratories go on separate forms and in separate bags; for example HbA1c, done by Special Chemical Pathology (CRA letter, Lampiran 1)',
    'Routine core laboratory tests share one form: LDH, FBC, LFT, AST, ESR and coagulation profile. Endocrine tests, tumour markers and FBP are not routine and each needs its own form (CRA letter, Lampiran 1)',
    'HIV screening (HIV Combo): its own 1 ml plain tube and its own PER-PAT 301, sent apart from every other test. HBsAg and anti-HCV each need their own 1 ml plain tube and may share one form (HIV letter, 3; from 1 Dec 2024)',
    'FBP, lupus anticoagulant and the inherited thrombophilia panel: write the indication and the relevant clinical history on PER-PAT 301 ("WAJIB"); an incomplete request may be delayed or rejected (FBP letter, 3 and 4)',
    'FBP is requested only by a medical officer or specialist. After office hours only for urgent cases (acute leukaemia or MAHA), or before a blood transfusion when an FBP indication is met; otherwise discuss with the pathology medical officer (FBP letter, Lampiran 1)',
    'Lupus anticoagulant and thrombophilia: the checklist goes with the form, with the date and time of sampling; the letter suggests not sending them during an acute event (FBP letter, Lampiran 4)'],
    gap:'Sources: Pathology letters HKL/PAT/98/180/4(36) Jld. 10, 2 Jul 2025 (sending to the CRA); HKL/PAT/98/180/4 (28) Jld. 9, 7 Nov 2024 (HIV); HKL/PAT/98/180/2-3(47) Jld. 2, 29 Jun 2026 (FBP, lupus anticoagulant and thrombophilia).' + HOSP};
  B.nodes.tubes = {end:'neutral', title:'Filling and mixing blood tubes', fig:'memo-pat-tubes', items:[
    'Fill every biochemistry tube to its marked level ("mengikut paras yang ditandakan"): the core laboratory rejects under-filled samples, from 3 Jun 2024 (5, 6)',
    'Take most care with tests that share a tube: renal profile, LFT, calcium, magnesium and phosphate (3)',
    'Mix gently by turning the tube over: plain tubes, with or without gel, 6 to 8 times; lithium heparin and fluoride/oxalate tubes 8 to 10 times (Lampiran 1)'],
    gap:S('pat-tubes', 'the day of the date not readable', HOSP)};
  B.nodes.bhcg = {end:'neutral', title:'Urgent beta-hCG: call the core laboratory first', fig:'memo-pat-bhcg', items:[
    'Before you send an urgent beta-hCG, tell the core laboratory\'s medical officer, on ext 7569 or 5610 (4 i)',
    'After office hours: tell the on-call pathology medical officer before the sample goes (4 ii)',
    'From 1 Apr 2026 (5)'],
    gap:S('pat-bhcg', '', HOSP)};

  /* ---------------- Prescribing at HKL ---------------- */
  const R = P['prescribing'];
  R.nodes.menu.opts.push(['A foreign patient: medicines for 5 days', 'fgnrx'], ['Aspirin 300 mg dispersible: 75 or 150 mg', 'asa']);
  R.nodes.fgnrx = {end:'neutral', title:'A foreign patient: medicines for 5 days, with ten exceptions', fig:'memo-far-foreign', items:[
    'A foreign patient with a non-communicable disease gets medicines for five days only. Write two prescriptions: the first for 5 days from the MOH facility, the second for further supply, to be bought at a private pharmacy (guideline 8.1)',
    'The same 5-day limit applies to medicines that need special approval (ubat kelulusan khas) (pharmacy memo, 3)',
    'Full supply, not limited to 5 days, only for (guideline 8.2): permanent residents, themselves only; children aged 12 and under with a Malaysian birth certificate and a citizen or permanent-resident parent; non-citizen spouses of Malaysians with a valid marriage certificate; infectious diseases under the 1988 Act; fixed courses such as antibiotics (the full regimen); holders of a valid UNHCR card; detainees (immigration depots, police lock-ups, prisons); pregnant women, for treatment, not supplements; injections given by MOH staff, including psychiatric injections; and patients discharged from hospital when the medical officer judges that more than 5 days are needed'],
    links:[['#gz-rules--lampa', 'Foreign patient with Lampiran A']],
    gap:'Source: pharmacy memo HKL/FAR/PSF/98/100-1/1/5 (33), 9 Feb 2024, with its infographic, and the MOH guideline on the Fees (Medical) (Cost of Services) Order 2014, section 8 (KSU circular Bil. 2/2019).' + HOSP};
  R.nodes.asa = {end:'neutral', title:'Aspirin 300 mg dispersible: 75 or 150 mg a day', fig:'memo-far-aspirin', items:[
    'Do not prescribe the 300 mg dispersible tablet (Winspirin®) cut into 150 mg or 75 mg doses: "pemotongan tablet kepada dos 150mg dan 75mg adalah tidak dibenarkan" (3)',
    'The patient dissolves one 300 mg tablet in 10 ml of water, takes the dose and throws the rest away: 2.5 ml once a day (a quarter tablet, 75 mg OD) or 5 ml once a day (half a tablet, 150 mg OD). The solution is made at each dose and taken at once (4)',
    'Aspirin 100 mg with glycine 45 mg (Wincardia®) stays available, where the patient\'s need justifies it (4)'],
    links:[['#acs', 'Acute coronary syndrome']],
    gap:S('far-aspirin', '', HOSP) + ' The brands are those of 2022: whether they are still the ones supplied is under Still to confirm.'};
  R.nodes.cosign.gap += ' The Director sent it again with letter (96)HKL/UPK/98/2/1 Jld.28, 14 Jul 2026.';
  R.see = [...(R.see || []), ['#gz-rules--ivpcm', 'IV paracetamol and IV albumin: the EP signs']];

  /* ---------------- Referral rules: psychology counselling ---------------- */
  const F = P['referral-rules'];
  const pi = F.nodes.menu.opts.findIndex(o => o[1] === 'psy');
  F.nodes.menu.opts.splice(pi + 1, 0, ['Psychology counselling (UPsK)', 'counsel']);
  F.nodes.counsel = {end:'refer', title:'Psychology counselling: screen with PHQ-9 and GAD-7 first', fig:'memo-upsk', items:[
    'A medical officer may refer to the Psychology Counselling Unit (UPsK) a patient with an issue in Table A (mental health, social, medical, marriage and family) causing a psychological effect in Table B (stress, anxiety, depression, burnout, adjustment, sadness and grief, emotional instability) (1)',
    'Screen first with both PHQ-9 and GAD-7 ("PERLU disaring terlebih dahulu") (2)',
    'A score of 14 or below: refer to UPsK on the referral form HKL/UPsK/01, with both scores (2)',
    'A score of 15 or above on either test: refer to the Department of Psychiatry and Mental Health instead (3)',
    'The patient agrees, and can talk with the counsellor in Bahasa Melayu (5, 6)',
    'Not for UPsK: a patient with a psychiatric diagnosis; a child or adolescent with a child psychiatric diagnosis; a referral made to reach a diagnosis; a patient already seeing a (clinical) psychology officer; a foreign national (exclusions 1 to 5)'],
    links:[['#referral-rules--psy', 'Psychiatry']],
    gap:'Source: Unit Psikologi Kaunseling HKL, referral criteria and flow chart, in force 3 Mar 2025, with the referral form HKL/UPsK/01.' + HOSP + ' The flow chart prints the bands 15 to 19 and over 20, so a score of exactly 20 has no band; its text sends 15 and above to Psychiatry.'};

  /* ---------------- Admission to MAU: the 2025 criteria, as a dated note ---------------- */
  const M = P['mau-admission'];
  M.notes = [...(M.notes || []), {l:'2025 criteria', notes:[{h:'The 2025 criteria from General Medicine (a dated note)', fig:'memo-med-mau25',
    src:'General Medicine letter (400) HKL/PBTN/98/100/29-01, 7 Feb 2025, and its erratum (03) HKL/PBTN/98/100/29-01 JLD 2, 20 Feb 2025', items:[
    'MAU (Block MHKL): expected to go home within 72 hours ("<72 jam"); body weight 100 kg or less; no intensive care bed needed (acute, subacute, HDW, CCU or CRW); oxygen up to a Venturi mask at 40% ("sehingga VM40%"); respiratory rate 9–20; systolic BP 100 or more without inotropes; heart rate 60–110; fully alert, GCS 15/15; no isolation precautions; no active suicidal ideas or attempt; no ongoing chest pain',
    'Not for MAU: acute MI; hypertensive emergency; DKA or HHS; thyroid storm; acute stroke; active upper GI bleed; acute psychosis, altered mental state or seizure; shock (cardiogenic, septic or distributive, hypovolaemic); ESRD on haemodialysis; dengue fever; pregnant women ("Wanita hamil")',
    'MH2A takes patients from the ED on the same criteria as MAU',
    'A lodger bed (a non-medical ward): no new case from the ED that a medical specialist has not yet seen (erratum, 20 Feb 2025)',
    'The Pre Discharge Lounge (PDL) takes no new admissions',
    'A patient outside the criteria is admitted only on the decision of the medical specialist on duty',
    'It differs from the 2022 checklist this entry follows: oxygen up to a Venturi mask at 40% against nasal prongs at 3 L/min, a 100 kg limit, pregnancy excluded, no age line. Which set leads is under Still to confirm']}]}];
  M.notesFoot = 'Source: General Medicine letter (400) HKL/PBTN/98/100/29-01, 7 Feb 2025, and its erratum of 20 Feb 2025.' + HOSP;
  if (M.nodes.crit) M.nodes.crit.hint = ((M.nodes.crit.hint || '') + ' General Medicine updated these criteria on 7 Feb 2025: see the 2025 criteria tab.').trim();

  /* ---------------- Yellow Zone: haemodialysis in the ED ---------------- */
  const Y = P['yellow-zone'];
  Y.nodes.menu.opts.push(['Haemodialysis in the ED: the Nephrology form', 'hd']);
  Y.nodes.hd = {end:'neutral', title:'Acute haemodialysis in the ED: the Nephrology request form', fig:'memo-nefro-hd', items:[
    'A patient who needs haemodialysis in the ED: the Nephrology team fills in form HKL/NEFRO/090, and every haemodialysis prescription is discussed with a nephrology specialist or consultant (letter, 2; the form)',
    'The form goes with the patient on admission to the ward (letter, 2)',
    'Have the virology ready: MRSA, CRE and PTB status, and HBsAg, HBsAb, anti-HCV and anti-HIV; the form asks for a hard copy of the results',
    'The form\'s indications, ticked as they apply: severe hyperkalaemia unresponsive to medical management ("CKD/ESRF K+ > 6.5 mmol and AKI > 6mmol", as printed); severe fluid overload or acute pulmonary oedema unresponsive to diuretics (needing 40% oxygen or more by Venturi mask to keep SpO2 at 94% or more); severe metabolic acidosis unresponsive to treatment (pH under 7.1 or bicarbonate under 12 mmol/L); severe poisoning with a substance dialysis removes (for example methanol, ethylene glycol); oliguric or anuric AKI despite adequate resuscitation, in the presence of any of the above'],
    gap:'Source: Nephrology letter HKL/NEFR/98/182/10/11, 15 Jan 2025, with form HKL/NEFRO/090 (issue 01, Dec 2024).' + HOSP};

  /* ---------------- Abdominal pain: the 2024 ectopic pregnancy circular beside the 2018 one ---------------- */
  const A = P['abdominal-pain'];
  /* Search words: distinctive ones only */
  const KW = (x, w) => { if (x) x.kw = ((x.kw || '') + ' ' + w).trim(); };
  KW(I, 'measles campak koplik'); KW(F, 'kaunseling counselling upsk phq-9 gad-7'); KW(R, 'warga asing winspirin wincardia dispersible'); KW(B, 'dispatch despatch per-pat bhcg hiv thrombophilia');
  KW(Y, 'hemodialysis haemodialysis nefrologi');

  if (A && A.dept) A.dept.splice(1, 0, {h:'Girls and women aged 15 to 49: ectopic pregnancy (2024)', src:'KPK circular Bil. 9/2024, KKM.600-30/3/1 Jld.6 (57), 13 Jun 2024', fig:'memo-kpk-ectopic', items:[
    'Any girl or woman aged 15 to 49 with lower abdominal pain, vaginal bleeding or both: take the history with the LNMP, examine, and do a urine pregnancy test, even if she is unmarried, denies sex or has no amenorrhoea (Lampiran 1)',
    'Treat every suspected ectopic pregnancy as an emergency, "dengan kadar SEGERA (urgency)" (3.2)',
    'UPT positive: ultrasound. Not an intrauterine pregnancy, or unsure: "Rujuk Hospital / Pakar O&G dengan SEGERA", refer to hospital or the O&G specialist at once (Lampiran 1)',
    'A national circular, newer than the 2018 one above. Printed pages 5 to 7 are missing from the copy circulated']});
})();
