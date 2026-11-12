/* ================= 12 Nov 2026: the HKL doctors starter pack =================
   Source: https://linktr.ee/hkldoctors_starterpack, which Krishna gave on 12 Nov 2026, with the two link pages it nests
   (Farmasi HKL and Medication Safety HKL). Every link was reviewed; the run-through is sources/starterpack/RUN-THROUGH.md
   (on this PC only). Hospital and pharmacy documents go in as labelled notes, each with its source and date (standing
   rule 6), every number read from the page image. Open sources show their own pages (app/sp/<key>-p<N>.webp) with
   signatures, registration numbers and staff contacts covered; sources that print "All rights reserved" or are marked
   for internal use are in the guide's own words, and their picture is their tile on the link page (app/sp/tile-<key>.webp),
   at Krishna's choice. Incident stories in the newsletters, alerts and posters are left out (his rule of 12 Nov 2026).
   Files that show patients' details are never linked; each card links to the link page instead. */

const SPFIGS = {}, EDRX_LASA = {};
const SP_PAGE = 'https://linktr.ee/hkldoctors_starterpack', SP_FARM = 'https://linktr.ee/pusat_sumber_farmasi', SP_MED = 'https://linktr.ee/medsafehkl';
(function(){
  const OPEN = 'The document as published, a page at a tap: signatures, registration numbers and staff contacts are covered. The starter pack page links every source.';
  const RES = 'All rights reserved, or marked for internal use: the guide gives the facts in its own words. The picture is its tile on the link page.';
  const S = (o) => Object.assign({dir:'sp', list:SP_PAGE, lname:'The starter pack page', cap:OPEN}, o);
  const T = (o) => S(Object.assign({cap:RES, pages:[['tile', 'Its tile on the link page']]}, o));
  /* Opened with Krishna's MOH sign-in on 12 Nov 2026 and added at his word ("Add c01 and b01"; the GICU guide "as special case") */
  const MOH = 'Opens only with an MOH sign-in, and prints "Hak cipta terpelihara" (all rights reserved): the guide gives the facts in its own words. The picture is its tile on the link page.';
  Object.assign(MEMOS, {
    a09: S({kind:'Site plan', ref:'Peta HKL', date:'undated', t:'Pelan Lokasi HKL', pages:[[1, 'The site plan']]}),
    a01: T({kind:'Video, HKL', ref:'Video guide', date:'2023', t:'Aerial view of HKL (4 min 43 s)'}),
    'a08-1': S({kind:'Reporting for duty', ref:'Urusan Lapor Diri', date:'undated', t:'E-Kehadiran; car park access card; work pass', pages:[['a08-1-p1', 'E-Kehadiran'], ['a08-2-p1', 'Car park card'], ['a08-3-p1', 'Work pass']]}),
    a12: S({kind:'Director\'s letter', ref:'HKL/PENG/98/100/1/JLD2(62)', date:'20 May 2022', t:'Larangan memakai baju skrub hospital di luar kawasan klinikal', pages:[[1, 'Letter'], [4, 'Lampiran: name embroidery']]}),
    a07: T({kind:'MOH and HKL forms', ref:'ME form BPF/104/ME/02; IR 2.0/2017', date:'Word format', t:'Medication error and incident report forms'}),
    d01: T({kind:'Training video, HKL', ref:'Laporan insiden & RCA di HKL', date:'internal training', t:'Incident reports and RCA at HKL', list:SP_MED, lname:'Medication Safety HKL page'}),
    a03: T({kind:'Video, Medical Records', ref:'Tarikh penerbitan Jun 2023', date:'Jun 2023', t:'Tatacara pengisian Borang Masuk Keluar Hospital (PER-PD 301)'}),
    a04: T({kind:'Video, Medical Records', ref:'Tarikh penerbitan Oktober 2022', date:'Oct 2022', t:'Tatacara pengisian Medical Certificate of Cause of Death'}),
    a06: T({kind:'Video', ref:'Needle stick injury', date:'2021', t:'Proper disposal of sharps (57 s)'}),
    a05: T({kind:'Video, another facility', ref:'Taklimat pengurusan Code Grey di fasiliti KKM', date:'2023', t:'Code Grey briefing (filmed at another MOH facility)'}),
    a11: S({kind:'MOH integrity message', ref:'Mesej Integriti Siri 8/2022', date:'2022', t:'Larangan membuat pernyataan awam oleh pegawai awam', pages:[[1, 'The poster']]}),
    a10: S({kind:'HKL letter and MOH circular', ref:'HKL/UPPP/98/102/1 JLD 1 (83)', date:'25 Mar 2022', t:'Garis panduan melakukan pekerjaan luar (lokum) oleh pegawai perubatan bukan pakar', pages:[[1, 'Cover letter'], [15, 'Flow chart']]}),
    b10: S({kind:'Pharmacy letter', ref:'HKL/FAR/PSF/98/100-2/2/4 Jld 2 (22)', date:'Aug 2024', t:'Pengisian status alahan pesakit ke atas preskripsi ubat', pages:[[1, 'Letter']]}),
    b14: S({kind:'Pharmacy letter', ref:'HKL/FAR/98/100-3/4/6 JLD.4 (96)', date:'9 Dec 2024', t:'Peringatan mengenai penulisan dos ubat STAT dan maintenance di dalam preskripsi pesakit dalam', pages:[[1, 'Letter'], [5, 'Lampiran A: right and wrong']]}),
    b09: S({kind:'Director\'s memo', ref:'HKL/TAD/98/104/2', date:'12 Feb 2019', t:'Arahan keperluan tandatangan timbal (countersign) pegawai perubatan / pakar pada semua preskripsi pesakit dalam & luar', pages:[[1, 'Memo']]}),
    b12: S({kind:'Director\'s memo', ref:'HKL/FAR/98/103/PRIC/3/Jld 3/(232)', date:'27 May 2019', t:'Had bilangan maksimum ubat yang boleh dipreskrib dalam satu preskripsi pesakit luar', pages:[[1, 'Memo']]}),
    b05: T({kind:'MOH guide, all rights reserved', ref:'ISBN 978-967-2469-20-9', date:'2020', t:'Quick Guide: Preventing Prescription Error, "Making it right the first time"'}),
    b13: S({kind:'Quality Unit letter', ref:'(62) HKL/UPK/98/123/19', date:'10 Nov 2021', t:'Arahan untuk melaksanakan penambahbaikan langkah-langkah keselamatan pengubatan', pages:[[1, 'Letter']]}),
    b17: S({kind:'Pharmacy letter', ref:'HKL/FAR/FPD-FPDU/98/182-1/2/1.Jld2.(014)', date:'25 Mar 2025', t:'Keperluan penulisan preskripsi bagi ubat-ubatan stok imprest untuk kegunaan pesakit di klinik/unit/wad', pages:[[1, 'Letter']]}),
    b16: S({kind:'Director\'s memo', ref:'HKL/FAR/PSF/98/100-2/2/6 (94)', date:'27 Aug 2020', t:'Larangan self-prescribing / corridor prescribing dan keperluan pendaftaran pesakit di HKL', pages:[[1, 'Memo']]}),
    b11: S({kind:'Quality Unit letter', ref:'(31) HKL/UPK/98/2/1Jld.22', date:'21 Sep 2022', t:'Arahan pemantapan dokumentasi rekod ubatan di dalam rekod perawatan pesakit dan carta pengubatan dalaman', pages:[[1, 'Letter']]}),
    d15: S({kind:'Pharmacy list', ref:'Policy on High Alert Medication, reviewed 2026', date:'2026', t:'List of High Alert Medications, Hospital Kuala Lumpur', pages:[[1, 'The list']], list:SP_MED, lname:'Medication Safety HKL page'}),
    d16: S({kind:'Pharmacy policy', ref:'No. Keluaran 03, Pindaan 00', date:'12 Aug 2026', t:'Policy on Look Alike & Sound Alike (LASA) Medications', pages:[[6, '5.3 Prescribing'], [7, '5.3 (e) to 5.5']], list:SP_MED, lname:'Medication Safety HKL page'}),
    d04: T({kind:'ED pharmacy list', ref:'Analisa top 10 ubat LASA Farmasi Kecemasan, BIL 2/26', date:'20 Aug 2026', t:'Top 10 LASA medicines at the Emergency Pharmacy', list:SP_MED, lname:'Medication Safety HKL page'}),
    d08: T({kind:'HKL guideline, for HKL use', ref:'First Edition', date:'2023', t:'Guidelines on Medication Administration Time, HKL', list:SP_MED, lname:'Medication Safety HKL page'}),
    d07: S({kind:'Pharmacy guide', ref:'Edisi 1', date:'2023', t:'Panduan Penyaringan Preskripsi Pesakit Dalam HKL', pages:[[7, 'Doses and frequency'], [8, 'Duration and signature']], list:SP_MED, lname:'Medication Safety HKL page'}),
    b18: S({kind:'Director\'s memo', ref:'HKL/FAR/98/103/PRIC/3/Jld 3/(244)', date:'24 Jan 2020', t:'Penggunaan memo sebagai preskripsi bagi tujuan pesakit membeli ubat di premis farmasi swasta', pages:[[1, 'Memo']]}),
    b19: S({kind:'HKL form', ref:'Tarikh kuatkuasa 1 Feb 2020', date:'1 Feb 2020', t:'Memo pembelian ubat di premis farmasi swasta (Lampiran B)', pages:[[1, 'The form']]}),
    b04: T({kind:'HKL quiz rules, internal use', ref:'Good Prescribing Practice 2.0', date:'2025', t:'Good Prescribing Practice: the do\'s and don\'ts'}),
    c01: T({kind:'HKL policy, MOH sign-in', ref:'HKL-UKI-DP, Keluaran 02', date:'7 Apr 2026', t:'Polisi Antimicrobial Stewardship Programme (AMS)', list:SP_FARM, lname:'Farmasi HKL page', cap:MOH}),
    b01: T({kind:'Pharmacy good practice, MOH sign-in', ref:'HKL/FAR/GP-19, Keluaran 01', date:'5 Jun 2026', t:'Amalan Baik Mempreskrib Ubat-ubatan yang Mengandungi Sumber Haiwan', cap:MOH}),
    c16: T({kind:'GICU guide, MOH sign-in', ref:'5th edition, next review Apr 2031', date:'Apr 2026', t:'Adult GICU Dilution Guide (HKL)', list:SP_FARM, lname:'Farmasi HKL page', cap:'Opens only with an MOH sign-in: the guide describes it in its own words and copies none of its entries. The picture is its tile on the link page.'}),
    c20: S({kind:'Director\'s circular and pharmacy forms', ref:'HKL/FAR/PSF/98/100-3/4/6', date:'10 Jan 2022', t:'IV N-Acetylcysteine regimen and protocol (paracetamol overdose regime, Lampiran 1a)', pages:[[5, 'Lampiran 1a']], list:SP_FARM, lname:'Farmasi HKL page'})
  });
  /* Several sources on one step: their cards, one after another */
  Object.assign(SPFIGS, {map:['a09', 'a01'], duty:['a08-1'], report:['a07', 'd01'], verbal:['b13', 'b17'], lasa:['d16', 'd04'], max:['b12', 'b05']});

  const C = s => 'Source: ' + s + '. A hospital note (standing rule 6), from the HKL doctors starter pack.';

  /* ---------------- New to HKL ---------------- */
  P['new-hkl'] = {
    title:'New to HKL: the starter pack', src:'HKL doctors starter pack, 2026', grp:'rules', sub:'protocol', isnew:true, hero:'newhkl', heroj:'t-teal',
    lead:'For a doctor new to the hospital: where things are, reporting for duty, scrubs, incidents, the admission and death forms, sharps, and locum.',
    kw:'starter pack new doctor house officer HO medical officer orientation map site plan peta lapor diri e-kehadiran parking access card pas kerja work pass scrubs skrub incident report IR 2.0 medication error MERS RCA PD301 discharge form borang masuk keluar death certificate borang mati MCCD sharps needlestick code grey aggressive public statement social media locum lokum PhIS',
    start:'menu',
    nodes:{
      menu:{q:'What do you need?', hint:'From the HKL doctors starter pack, the hospital\'s own link page for new doctors. Each step shows its source.', opts:[
        ['Where things are: the site plan', 'map'], ['Reporting for duty: attendance, parking, work pass', 'duty'], ['Scrubs outside clinical areas', 'scrubs'],
        ['Report an incident or a medication error', 'report'], ['The admission and discharge form (PD301)', 'pd301'], ['The death certificate', 'death'],
        ['Sharps: proper disposal', 'sharps'], ['An angry or aggressive visitor', 'grey'], ['Public statements and social media', 'statement'],
        ['Locum (medical officers)', 'locum'], ['A patient\'s medicines in PhIS', 'phis']]},
      map:{end:'neutral', title:'Where things are: the site plan', fig:'sp-map', items:[
        'The plan labels Kecemasan (the ED) with Bangunan Utama, Radiologi, SCACC, Hospital Tunku Azizah (HTA), IPHKL, Institut Uro Nefro, IKTAR, Hospital Bersalin, Wisma Rekod, Klinik Orthopedik, Masjid HKL, Pink Parkir, the multi-storey car park (TLK Bertingkat) and Stesen MRT HKL. Tap the plan to zoom',
        'The aerial video (HKL, 2023) flies over the site and names, in order: Bangunan Pentadbiran, Jabatan Kecemasan, Bangunan Utama HKL, Radioterapi & Onkologi, the multi-storey car park, Hospital Bersalin, then the rest of the campus to the MRT station'],
        gap:C('Peta HKL (Pelan Lokasi HKL, undated); Video guide: Aerial view HKL (© Hospital Kuala Lumpur 2023), from its on-screen labels')},
      duty:{end:'neutral', title:'Reporting for duty', fig:'sp-duty', items:[
        'E-Kehadiran: register at the department where you are posted ("Daftar e-Kehadiran dilakukan di jabatan bertugas")',
        'Car park access card: get the form at Cawangan Keselamatan, Tingkat 3, Bangunan Pentadbiran; complete it and get your Head of Department\'s signature; return it there. "Sebanyak RM30 perlu didepositkan" for the access card',
        'Work pass: complete the Permohonan Pas Tetap form and send it to your Head of Department to sign; then send it with a photograph and your department placement letter to Cawangan Keselamatan (the sheet says Tingkat 3, Bangunan Utama)'],
        gap:C('Urusan Lapor Diri, three sheets, undated') + ' The parking sheet places Cawangan Keselamatan in Bangunan Pentadbiran and the work pass sheet in Bangunan Utama, as printed.'},
      scrubs:{end:'neutral', title:'Scrubs outside clinical areas', fig:'memo-a12', items:[
        'No hospital scrubs outside clinical areas, in force from 1 Jun 2022',
        'Hospital scrubs only in clinical areas: the wards, operating theatres, the ICU, the day care unit, the haemodialysis unit and the Jabatan Kecemasan. Outside them, only to move a patient ("bagi urusan penghantaran pesakit sahaja")',
        'Personal scrubs are allowed, except for uniformed staff. They must be a different colour from hospital scrubs and show your name and clinical department, embroidered in one of the four places the Lampiran shows',
        'Breaking the rule after it came into force may bring disciplinary action'],
        gap:C('Director\'s letter HKL/PENG/98/100/1/JLD2(62), 20 May 2022')},
      report:{end:'neutral', title:'Report an incident or a medication error', fig:'sp-report', items:[
        'Incident: make the patient safe first; fill in the IR 2.0 form and the hospital\'s Google Form; send it to the Quality Unit (Unit Kualiti) within 48 hours; tell your Head of Department. Facts only, no blame (the HKL training video)',
        'The MOH form itself (IR 2.0, 2017): tell your Head of Department at once; a medication error also needs the medication error form; the risk or quality manager submits to e-IR within 5 days of the incident',
        'Medication error form (MOH BPF/104/ME/02): describe what happened, whether it reached the patient, the stage (prescribing, dispensing, administration) and the outcome. Give no patient identifiers (the age is allowed). Send it to mers@moh.gov.my',
        'The forms in Word format are linked from the starter pack page'],
        gap:C('MOH Patient Safety Incident Reporting Form IR 2.0/2017; MOH Medication Error Report Form BPF/104/ME/02; HKL training video "Laporan insiden & RCA di HKL" (internal, from its on-screen text)')},
      pd301:{end:'neutral', title:'The admission and discharge form (PER-PD 301)', fig:'memo-a03', items:[
        'Two carbon copies: the first stays in the patient\'s record (RPP); the second goes to the Unit Informatik Kesihatan, Jabatan Rekod Perubatan',
        'Complete every demographic field',
        'At discharge, the discharging MO writes the diagnosis and procedure. "TIDAK DIBENARKAN SEBARANG SINGKATAN DALAM DIAGNOSIS DAN PROSEDUR": no abbreviations, so no CAP, ACS, HTN, ECG or CXR',
        'The main diagnosis is the condition that caused the admission, judged at discharge. Injury or poisoning: add the external cause (mechanism, place, activity), for example "Pedestrian hit by a car"',
        'Then the comorbidities and complications, and the procedures. The discharging MO and the specialist sign, date and stamp it',
        'Questions: Jabatan Rekod Perubatan, ext 5993 or 5995'],
        gap:C('Video guide, Unit Informatik Kesihatan & Casemix, Jabatan Rekod Perubatan HKL, June 2023, from its on-screen text; its spoken narration was not transcribed')},
      death:{end:'neutral', title:'The death certificate (Medical Certificate of Cause of Death)', fig:'memo-a04', items:[
        'Two copies: the original (yellow) and the duplicate (blue)',
        'Part A: the particulars of the deceased, complete and clear',
        'Part B(1)(a): the condition that directly caused death, taken from the PD301. B(1)(b) onward: the conditions that led to it; the last one listed is the underlying cause',
        'Part B(2): other significant conditions that did not directly cause death, from the PD301\'s other diagnoses',
        'Your name, signature, the date and your official stamp in the certifying box. Place of death has boxes for Ward, A&E, B.I.D. and Other',
        '"Kedua-dua borang (salinan pendua) yang telah dilengkapkan perlu dihantar ke Unit Informatik Kesihatan & Casemix dalam tempoh 72 jam selepas pesakit discaj": both duplicate forms go to the unit within 72 hours of discharge. The form\'s own header, as the video shows it, says the carbon copy goes to the Medical Record Department within 24 hours',
        'Questions: Jabatan Rekod Perubatan, ext 5993 or 5995'],
        gap:C('Video guide, Jabatan Rekod Perubatan HKL, October 2022, from its captions') + ' 72 hours (the video) against 24 hours (the form) is under Still to confirm.'},
      sharps:{end:'neutral', title:'Sharps: proper disposal', fig:'memo-a06', items:[
        'You use the needle, you discard it: straight into the sharps bin, at once after use',
        'Never recap',
        'Have everything ready before the procedure, and work in good light',
        'For what to do after a needlestick injury, follow the hospital\'s own procedure: the video covers disposal only'],
        gap:C('Video guide: Needle stick injury, proper disposal (2021), from its on-screen text')},
      grey:{end:'neutral', title:'An angry or aggressive visitor: six steps to calm', fig:'memo-a05', items:[
        'Step 1: "You look upset"', 'Step 2: "Tell me all about it"', 'Step 3: "I\'m sorry this happened to you"', 'Step 4: "How would you like us to help you?"', 'Step 5: "Here is what I would like us to do next"', 'Step 6: "Thank you for sharing your feelings"',
        'In the briefing, the nurse asks the operator to activate Code Grey and gives the place. It was filmed at another MOH facility and gives no HKL number or procedure'],
        links:[['#communication', 'Communication on shift'], ['#code-blue--codes', 'The emergency colour codes']],
        gap:C('Video: Taklimat pengurusan Code Grey di fasiliti KKM (2023), filmed at another facility; from its captions')},
      statement:{end:'neutral', title:'Public statements and social media', fig:'memo-a11', items:[
        'A public officer may not, spoken, in writing or in any other way: make a public statement that could harm a Government policy or decision; make a statement that could embarrass or tarnish the Government; comment on weaknesses of a Government policy, plan or decision; or spread such a statement or comment, their own or anyone else\'s',
        'This includes social media'],
        gap:C('MOH Integrity Message, Siri 8/2022, citing the KSU KKM circulars of 22 Feb 2021 and 22 Jun 2021')},
      locum:{end:'neutral', title:'Locum (medical officers who are not specialists)', fig:'memo-a10', items:[
        'A permanent Malaysian medical officer or specialist may do locum "setelah mempunyai pengalaman sekurang-kurangnya satu tahun selepas memiliki sijil pendaftaran penuh": at least one year after full registration with the Malaysian Medical Council (4.1.1)',
        'Only after office hours, on public holidays, at weekends, on annual leave or on study leave (4.1.2)',
        'Written permission from your Head of Department first, and the practice address added to your annual practising certificate (3.1.1, 3.2.1)',
        'At HKL: download the form from the HKL intranet portal; submit it to your Head of Department, who sends it to the medical officers\' management unit (UPPP) to check; approval comes from the Director'],
        gap:C('HKL letter HKL/UPPP/98/102/1 JLD 1 (83), 25 Mar 2022, with MOH circular Bil. 2/2010 (12 Mar 2010) and the HKL flow chart')},
      phis:{end:'neutral', title:'A patient\'s medicines in PhIS', items:[
        'PhIS (the Pharmacy Information System) shows a patient\'s medication history from the hospital pharmacy\'s records: search by the PhIS MRN, the IC or the name, then the medication profile',
        'View only: a prescriber may not change anything. It is entered by hand at the pharmacy, so it may be incomplete',
        'For a user ID, fill in the PhIS user ID request form with your Head of Department\'s endorsement; training by the system champions comes before access'],
        links:[[SP_PAGE, 'The starter pack page']],
        gap:C('PhIS Prescriber Quick Guide v1.0, Department of Pharmacy HKL; PhIS and CPS User ID Request Form v1.0') + ' The guide\'s screenshots show patients\' details, so it is not linked.'}
    },
    see:[['#prescribing', 'Prescribing at HKL'], ['#pharmacy', 'ED pharmacy drug list'], ['#safe-practice', 'Safe practice']],
    refs:['HKL doctors starter pack (linktr.ee/hkldoctors_starterpack), read 12 Nov 2026: its videos, sheets, letters and forms, each named on its step']
  };

  /* ---------------- Prescribing at HKL ---------------- */
  P['prescribing'] = {
    title:'Prescribing at HKL', src:'HKL pharmacy and Director\'s memos, 2019 to 2026', grp:'rules', sub:'protocol', isnew:true, hero:'prescr', heroj:'t-bronze',
    lead:'The hospital\'s rules for every prescription: a check before you sign, allergy status, STAT doses, countersigning, verbal orders, antibiotics, high alert and look-alike medicines, and medicines from an animal source.',
    kw:'prescribing prescription preskripsi slip discharge prescription allergy alahan stat maintenance countersign tandatangan timbal house officer HO verbal order lisan maximum eight lapan medicines self prescribing corridor RN no daftar imprest drug chart antibiotic indication high alert HAM LASA look alike sound alike tall man administration time OD BD TDS QID private pharmacy memo leading zero trailing zero abbreviation PCM generic antimicrobial stewardship AMS antibiotic request form ARF restricted carbapenem meropenem colistin linezolid AWaRe 72 hour review culture OPAT animal source haiwan porcine khinzir bovine lembu halal gelatin religion vegetarian consent darurat',
    start:'menu',
    nodes:{
      menu:{q:'What do you need?', hint:'From the hospital\'s Director\'s memos and the pharmacy\'s policies, via the HKL doctors starter pack. Each step shows its source.', opts:[
        ['Check a prescription before you sign', 'check'], ['Allergy status', 'allergy'], ['STAT and maintenance doses', 'stat'], ['House officers: countersigning', 'cosign'],
        ['How many medicines on one outpatient slip?', 'max'], ['Verbal orders', 'verbal'], ['Register the patient; no self- or corridor prescribing', 'rn'],
        ['Drugs from ward or ED stock (imprest)', 'imprest'], ['The drug chart and the notes', 'chart'], ['Antibiotics: the stewardship policy', 'ams'], ['High alert medications', 'ham'],
        ['Look-alike sound-alike medicines', 'lasa'], ['Standard administration times', 'times'], ['What the pharmacy sends back', 'screen'],
        ['A drug the patient buys at a private pharmacy', 'private'], ['A medicine from an animal source', 'animal'], ['Pharmacy links', 'links']]},
      check:{check:'all', q:'Before you sign: is each of these on the prescription?', fig:'memo-b04', hint:'The hospital\'s Good Prescribing Practice rules (2025), in the guide\'s own words. Tick each one.', items:[
        'Two patient identifiers: the full name, and the full IC or passport number or the RN',
        'Allergy status marked: yes (and what), no, or unknown',
        'Generic drug names',
        'No abbreviated drug names: paracetamol, not PCM',
        'A leading zero (0.5 mg, not .5 mg) and no trailing zero (5 mg, not 5.0 mg); mcg written out',
        'An IV drug: its dilution and rate. A drug given on set days: the days named',
        'A STAT dose on its own prescription, apart from the maintenance dose',
        'Legible, with your name printed by your signature, and your stamp'],
        opts:[['All in order', 'chkok'], ['Not yet', 'chkfix']]},
      chkok:{end:'discharge', title:'The prescription is ready to sign', items:['A house officer\'s prescription also needs an MO\'s or specialist\'s countersignature'], links:[['#prescribing--cosign', 'Countersigning']], gap:C('Good Prescribing Practice 2.0, HKL, 2025 (its do\'s and don\'ts, for HKL internal use; in the guide\'s own words)')},
      chkfix:{end:'observe', title:'Fix it before you sign', items:['The pharmacy does not supply a prescription without allergy status, and supplies only the STAT dose when STAT and maintenance share a prescription', 'Write a new prescription for an unclear drug name or an abbreviation that is not on the hospital\'s list'], links:[['#prescribing--allergy', 'Allergy status'], ['#prescribing--stat', 'STAT and maintenance'], ['#prescribing--screen', 'What the pharmacy sends back']], gap:C('Good Prescribing Practice 2.0, HKL, 2025; pharmacy letters of Aug 2024 and 9 Dec 2024; Panduan Penyaringan Preskripsi Pesakit Dalam, 2023')},
      allergy:{end:'neutral', title:'Allergy status on every prescription', fig:'memo-b10', items:[
        'Every department must mark the patient\'s allergy status on every prescription, at HKL, HTA and IPR (decided at the drugs and therapeutics committee, JKUT Induk, 12 Jun 2024)',
        '"Jabatan Farmasi tidak akan membekalkan ubat bagi preskripsi yang tidak ditandakan status alahan": the pharmacy will not supply a prescription with no allergy status marked',
        'Seven departments had already required it since 1 Jan 2024, to prevent known-allergy medication errors'],
        gap:C('Pharmacy letter HKL/FAR/PSF/98/100-2/2/4 Jld 2 (22), August 2024, signed by the Director as chair of JKUT Induk')},
      stat:{end:'neutral', title:'STAT and maintenance doses on separate prescriptions', fig:'memo-b14', items:[
        'Write a STAT dose and the maintenance dose of the same drug on separate prescriptions, with immediate effect',
        '"...sebarang preskripsi yang tidak mematuhi arahan ini akan ditolak dengan pembekalan bagi dos stat sahaja": a prescription that does not comply is supplied for the STAT dose only',
        'Lampiran A: right is IV Cefuroxime 1.5g STAT in one box, signed in the STAT column with the date and time given, and IV Cefuroxime 750mg TDS 5/7 in another; wrong is "IV CEFUROXIME STAT + 750MG TDS" in one box'],
        gap:C('Pharmacy letter HKL/FAR/98/100-3/4/6 JLD.4 (96), 9 Dec 2024, after the Medication Safety Action Team meeting of 29 Aug 2024')},
      cosign:{end:'neutral', title:'House officers: every prescription countersigned', fig:'memo-b09', items:[
        'Every prescription, inpatient and outpatient, written by a house officer ("Pegawai Perubatan Siswazah") must be countersigned by a medical officer or specialist ("WAJIB tandatangan timbal"), with immediate effect'],
        gap:C('Director\'s memo HKL/TAD/98/104/2, 12 Feb 2019')},
      max:{end:'neutral', title:'How many medicines on one outpatient prescription?', fig:'sp-max', items:[
        'HKL memo, 27 May 2019: at most EIGHT medicines on one outpatient prescription ("LAPAN ubat sahaja"); for more, use a new prescription (JKUT HKL decision of 2 Apr 2019)',
        'The MOH quick guide (2020) and the hospital\'s Good Prescribing Practice slides say at most 5 medicines on one slip, with a page number on each slip',
        'The two differ: which applies is under Still to confirm'],
        gap:C('Director\'s memo HKL/FAR/98/103/PRIC/3/Jld 3/(232), 27 May 2019; MOH Quick Guide: Preventing Prescription Error, 2020, p21; Good Prescribing Practice slides, Pharmacy HKL')},
      verbal:{end:'neutral', title:'Verbal orders', fig:'sp-verbal', items:[
        'Avoid verbal orders for ward medicines "kecuali di dalam keadaan kecemasan yang mengancam nyawa pesakit (life-threatening conditions) seperti Cardiopulmonary Arrest" (Quality Unit letter, 10 Nov 2021)',
        'If a verbal order has to be given in an emergency, the prescription must follow within 24 hours (pharmacy letter, 25 Mar 2025)',
        'Say the drug name slowly and clearly; the person receiving it repeats the name and the dose back (LASA policy 2026, 5.3 e and 5.5 c)',
        'A patient going to another unit for a procedure goes with the file, the drug chart and the observation chart, so any drug given there is recorded (10 Nov 2021)'],
        links:[['#safe-practice--notes', 'Notes, consent and records']],
        gap:C('Quality Unit letter (62) HKL/UPK/98/123/19, 10 Nov 2021; pharmacy letter HKL/FAR/FPD-FPDU/98/182-1/2/1.Jld2.(014), 25 Mar 2025; Policy on LASA Medications, 12 Aug 2026')},
      rn:{end:'neutral', title:'Register the patient; no self- or corridor prescribing', fig:'memo-b16', items:[
        'Self-prescribing and corridor prescribing are prohibited at HKL',
        'Every patient treated or given medicines at HKL is registered at the clinic concerned, and the registration number (RN) is written in the prescription\'s "No. Daftar" box'],
        gap:C('Director\'s memo HKL/FAR/PSF/98/100-2/2/6 (94), 27 Aug 2020, following MOH letters of 26 Jan 2017 and 3 Jun 2020')},
      imprest:{end:'neutral', title:'Drugs from ward or ED stock (imprest)', fig:'memo-b17', items:[
        'A drug given from imprest stock in a clinic, unit or ward still needs a prescription signed by the responsible doctor (Poisons Act 1952; Poisons (Psychotropic Substances) Regulations 1989)',
        'A verbal order in an emergency: the prescription within 24 hours'],
        gap:C('Pharmacy letter HKL/FAR/FPD-FPDU/98/182-1/2/1.Jld2.(014), 25 Mar 2025')},
      chart:{end:'neutral', title:'The drug chart and the notes', fig:'memo-b11', items:[
        'Every change of dose or regimen is written in the patient\'s notes, matching the inpatient drug chart',
        'Every antibiotic carries its indication on the inpatient drug chart'],
        gap:C('Quality Unit letter (31) HKL/UPK/98/2/1Jld.22, 21 Sep 2022')},
      ams:{end:'neutral', title:'Antibiotics: the hospital\'s stewardship policy', fig:'memo-c01', items:[
        'Write the clinical indication in the notes when you order any antimicrobial',
        'Take the cultures (blood, sputum, urine and so on) before the first dose',
        'Follow the National Antimicrobial Guideline or the hospital\'s own protocols',
        'Restricted antimicrobials, broad-spectrum or costly (carbapenems, colistin, linezolid, ceftazidime/avibactam, ceftolozane/tazobactam): fill in the Antimicrobial Request Form and get the approval of an infectious diseases physician or an approved specialist',
        'Three tiers, mapped to the WHO AWaRe groups: Access, for general use by the guidelines (cefazolin, cloxacillin); Watch, approval needed to continue after the first 72 hours of empirical treatment (meropenem); Reserve, approval by an infectious diseases physician first (linezolid, tigecycline)',
        'Empirical treatment is reviewed at 72 hours, and the progress and culture results every day, to decide whether it continues',
        'A patient on outpatient IV antibiotics (OPAT) who needs readmission is sent to the Emergency and Trauma Department for triage'],
        links:[[SP_FARM, 'Farmasi HKL: the Antimicrobial Request Form'], ['#prescribing--chart', 'The drug chart and the notes']],
        gap:C('Polisi Antimicrobial Stewardship Programme (AMS), HKL-UKI-DP, Keluaran 02, in force 7 Apr 2026: sections E and F, and Appendix 4 (OPAT). It opens only with an MOH sign-in and is all rights reserved, so the guide gives its facts in its own words. Its IV-to-oral switch protocol (Appendix 3) is run by the ward pharmacists')},
      ham:{end:'neutral', title:'High alert medications: HKL\'s list of 2026', fig:'memo-d15', items:[
        'Adrenergic agonists, IV: adrenaline, noradrenaline, phenylephrine, dopamine, dobutamine. Adrenergic antagonists, IV: esmolol, labetalol',
        'General anaesthetics: desflurane, ketamine, sevoflurane, thiopental sodium, propofol. Antiarrhythmics, IV: lignocaine, amiodarone',
        'Antithrombotics: enoxaparin, heparin, warfarin, fondaparinux, rivaroxaban, apixaban, dabigatran, alteplase, streptokinase, tenecteplase, urokinase, tirofiban',
        'Chemotherapy (parenteral and oral); dextrose 50%; all TPN; digoxin; all insulin',
        'Epidural or intrathecal: bupivacaine, ropivacaine, levobupivacaine, mepivacaine, lignocaine. Immunosuppressants: azathioprine, cyclosporine, tacrolimus, methotrexate, mycophenolate, antithymocyte immunoglobulin',
        'Moderate sedation: dexmedetomidine, midazolam, chloral hydrate. Neuromuscular blockers: atracurium, rocuronium, suxamethonium, vecuronium',
        'Opioids: buprenorphine patch, fentanyl (injection, patch), morphine (injection, tablet, syrup), oxycodone, pethidine',
        'Concentrated electrolytes, IV: potassium chloride 10%, potassium dihydrogen phosphate 13.6%, magnesium sulfate 50%, calcium gluconate 10%, sodium glycerophosphate 216 mg/mL, sodium bicarbonate 8.4%, sodium chloride 20%, sodium chloride 3%'],
        gap:C('List of High Alert Medications, Hospital Kuala Lumpur (Policy on High Alert Medication, Jabatan Farmasi HKL, reviewed 2026); 16 classes as printed')},
      lasa:{end:'neutral', title:'Look-alike sound-alike medicines', fig:'sp-lasa', items:[
        'On the prescription, state the dosage form or route; the drug and, where it comes in several, its strength (Gutt Atropine 1% or 0.01%), formulation (Theophylline SR 250mg or IR 125mg) or combination (Levodopa with benserazide or with carbidopa); the full directions; and the diagnosis or indication, which helps when an order is hard to read (5.3)',
        'Verbal orders only in emergencies, that is cardiopulmonary arrest (5.3 e)',
        'The Emergency Pharmacy\'s top 10 look-alike sound-alike pairs (20 Aug 2026): rabies vaccine and rabies immunoglobulin; Cardiprin 100mg and aspirin 150mg; olanzapine 10mg and olanzapine orodispersible 10mg; cobra and king cobra antivenene; acyclovir 200mg and 800mg; sodium bicarbonate powder and sodium dihydrogen phosphate powder; tetanus toxoid vaccine and tetanus immunoglobulin; folic acid 5mg and vitamin B complex; bromhexine 8mg and famotidine 20mg; chloramphenicol 0.5% eye drops and 5% ear drops',
        'The ED pharmacy drug list marks these pairs'],
        links:[['#pharmacy', 'ED pharmacy drug list']],
        gap:C('Policy on Look Alike & Sound Alike (LASA) Medications, Jabatan Farmasi HKL, No. Keluaran 03, 12 Aug 2026, 5.3; Analisa top 10 ubat LASA Farmasi Kecemasan, BIL 2/26, 20 Aug 2026')},
      times:{end:'neutral', title:'Standard administration times', fig:'memo-d08', items:[
        'Oral: OD 8am; ON 10pm; BD 8am and 8pm; TDS 8am, 4pm and 10pm; QID 6am, 12pm, 6pm and 12am',
        'Injection: OD 4am; ON 10pm; BD 6am and 6pm; TDS 4am, 12pm and 8pm; QID 6am, 12pm, 6pm and 12am',
        'After a STAT dose, later doses follow these times',
        'Allowance: within 2 hours either side for daily, weekly or monthly doses; within 1 hour for doses more often than daily but less often than every 4 hours'],
        gap:C('Guidelines on Medication Administration Time, HKL, First Edition 2023, Tables 1 and 2 (for use in HKL; in the guide\'s own words)')},
      screen:{end:'neutral', title:'What the pharmacy sends back', fig:'memo-d07', items:[
        'A dose in mg/kg, even with the weight given: write the dose in mg (Syr. Paracetamol 150mg QID, not 15mg/kg QID)',
        'A syrup in ml: write mg, g or IU',
        'An infusion: in mg/hr or mcg/hr; if in ml/hr, give the dilution (IV Noradrenaline 2ml/hr, with 4mg in 50ml D5 in the special instructions)',
        'An unclear or wrong drug name, or an abbreviation not on the hospital\'s list: a new prescription',
        'No duration written: the prescription is valid for 7 days',
        'A house officer with a temporary registration needs an MO\'s or specialist\'s countersignature; with no stamp, write your full name and registration number'],
        gap:C('Panduan Penyaringan Preskripsi Pesakit Dalam HKL, Edisi 1, 2023, pp7–8 (the inpatient screening guide)')},
      private:{end:'neutral', title:'A drug the patient buys at a private pharmacy', fig:'memo-b18', items:[
        'Do not use a government prescription slip to direct or let a patient buy medicines at a private pharmacy (MOH panel, 26 Aug 2008; Pekeliling Pengurusan Farmasi Bil. 19/2008)',
        'Use the memo format instead (Lampiran B, in force 1 Feb 2020): the patient\'s full name, IC or passport, age, weight, diagnosis, address, department and phone; the drugs; your signature, date, name and official stamp. It is written with the agreement of prescriber and patient',
        'Record every drug in the patient\'s file, including those the patient must buy'],
        links:[[SP_PAGE, 'The form, from the starter pack page']],
        gap:C('Director\'s memo HKL/FAR/98/103/PRIC/3/Jld 3/(244), 24 Jan 2020, and its Lampiran B')},
      animal:{end:'neutral', title:'A medicine from an animal source', fig:'memo-b01', items:[
        'Medicines may use porcine or bovine material: in the active ingredient, the capsule (gelatin), an excipient, or the culture medium',
        'Before you start one, ask about the patient\'s religious and lifestyle needs (and allergies), and record them in the notes',
        'Use it only when the treatment is critical, there is no suitable alternative, and for a set period. Check the alternatives with the pharmacist',
        'Explain it so the patient can make an informed decision, ideally by staff of the same religion; take consent as the Malaysian Medical Council\'s consent guideline sets out, and record it. If the patient declines, record that and consider other treatment',
        'Life-threatening ("darurat"): with no alternative, give it without prior consent for the set period, then explain to the patient or family and record it',
        'The main religions, as the document sets out: Islam, no porcine products, and no animal source not slaughtered as halal; Hindu, most avoid bovine; Sikh, no bovine or porcine; Buddhist, no specific requirement. Buddhist, Hindu and Sikh vegetarians avoid all animal products, eggs included. When unsure, ask the patient, the family or their religious body',
        'The hospital\'s list of medicines with an animal source is on the Farmasi HKL page'],
        links:[[SP_FARM, 'Farmasi HKL: the animal source list']],
        gap:C('Amalan Baik Mempreskrib Ubat-ubatan yang Mengandungi Sumber Haiwan (Good Practice: Prescribing Medications Containing Animal Source), HKL/FAR/GP-19, Keluaran 01, in force 5 Jun 2026, Jabatan Farmasi HKL: sections C and D, Rajah 1 and its two flowcharts. It opens only with an MOH sign-in and is all rights reserved, so the guide gives its facts in its own words')},
      links:{end:'neutral', title:'Pharmacy links', items:[
        'Farmasi HKL: the pharmacy\'s own link page (the antimicrobial request form, the HKL drug list, the dilution guides, the animal source list, the pharmacy quick references). Some of its files open only with an MOH sign-in',
        'Medication Safety HKL: the high alert and LASA policies, posters and the administration time guideline',
        'Medication errors can also be reported online to MOH (MERS)'],
        links:[[SP_FARM, 'Farmasi HKL'], [SP_MED, 'Medication Safety HKL'], [SP_PAGE, 'HKL doctors starter pack'], ['https://mers.moh.gov.my', 'MERS (MOH)']],
        gap:C('The three link pages, read 12 Nov 2026')}
    },
    see:[['#new-hkl', 'New to HKL'], ['#pharmacy', 'ED pharmacy drug list'], ['#safe-practice--rx', 'Prescriptions the pharmacy accepts']],
    refs:['Director\'s memos, pharmacy letters and policies of HKL, 2019 to 2026, each named on its step, via the HKL doctors starter pack']
  };

  /* ---------------- Paracetamol overdose: the hospital's NAC regimen (a hospital note; the ebook's pathway is unchanged) ---------------- */
  const PO = P['paracetamol-overdose'];
  PO.dept = (PO.dept || []).concat([{h:'IV N-acetylcysteine: the hospital\'s regimen (paracetamol overdose regime)', src:'Director\'s circular HKL/FAR/PSF/98/100-3/4/6, 10 Jan 2022, Lampiran 1a (forms updated 12.12.2021), Pharmacy Department with the Emergency and Trauma Department and Gastroenterology; via the HKL doctors starter pack. The ebook gives no NAC doses; it says when to start', fig:'memo-c20',
    items:['IV NAC 5000mg/25ml per vial; every bag in D5%',
      'Without fluid restriction. Step 1: 200 mg/kg in 500ml D5% over 4 hours, 125 ml/hr. Step 2: 50 mg/kg in 500ml D5% over 8 hours, 62.5 ml/hr. Step 3: 50 mg/kg in 500ml D5% over 8 hours, 62.5 ml/hr',
      'Fluid restriction OR BW < 40kg. Step 1: 200 mg/kg in 250ml D5% over 4 hours, 62.5 ml/hr. Step 2: 100 mg/kg in 500ml D5% over 16 hours, 31.25 ml/hr',
      'Dose on the actual body weight, to a ceiling of 110kg for obese patients. Stable 24 hours at no more than 30°C after dilution. Dextrose 5% preferred; sodium chloride 0.9% if dextrose 5% is not suitable',
      'The circular gives no treatment line, timing or stopping rule: follow the ebook\'s pathway for those']}]);
  PO.see = (PO.see || []).concat([['#calc-nac', 'The hospital\'s NAC regimen by weight']]);

  /* ---------------- Look-alike pairs on the ED pharmacy list (the Emergency Pharmacy's top 10, 20 Aug 2026) ---------------- */
  Object.assign(EDRX_LASA, {133:14, 14:133, 1:2, 2:1, 108:107, 107:108, 15:16, 16:15, 4:5, 5:4, 138:141, 141:138, 69:151, 151:69, 28:65, 65:28, 42:44, 44:42});
})();

/* ---------------- The 12 Nov 2026 review: repeated topics joined ----------------
   Where the same memo or rule is written out in two places, one place keeps it in full and the other points to it, so every
   #id--node link still opens. The ebook pathways and the CPG entries are not merged (standing rule 5, and their own source
   labels): they are joined by links instead. */
(function(){
  const node = (id, k) => P[id] && P[id].nodes[k];
  const link = (id, k, l) => { const n = node(id, k); if (n && !(n.links || []).some(x => x[0] === l[0])) n.links = [...(n.links || []), l]; };
  /* The notifiable disease memo (3 Mar 2023) is written out on the Green Zone rules page, with its pages; the infection page keeps its dengue lines */
  const nf = node('infection-alerts', 'notify');
  if (nf && node('gz-rules', 'notif') && nf.items.length === 5 && /^Complete the communicable disease notification form/.test(nf.items[0])){
    nf.items = ['The form, the Shift Supervisor\'s room, the Notification Record Book and the forms to UKA at 8 am and 4 pm: the memo\'s steps are on the Green Zone rules page, with the memo itself', ...nf.items.slice(3)];
    link('infection-alerts', 'notify', ['#gz-rules--notif', 'Notifying a disease: the memo']);
  }
  /* Prescriptions: the ED memo of 21 Dec 2023 and the hospital's rules (2024 to 2026) point to each other */
  link('safe-practice', 'rx', ['#prescribing--check', 'Prescribing at HKL: the check before you sign']);
  link('prescribing', 'allergy', ['#safe-practice--rx', 'The ED memo of 21 Dec 2023']);
  /* Dengue: the CPG leads the topic; the direct admission to the observation ward is a department route beside it */
  link('dengue-cpg', 'yellow', ['#gz-rules--dengue', 'Direct admission to the observation ward (department memo)']);
  link('gz-rules', 'dnot', ['#dengue-cpg', 'Dengue CPG, 4th edition (2026)']);
  /* The angry or aggressive visitor: the HKL code and number are on Communication on shift */
  const gr = node('new-hkl', 'grey');
  if (gr && !gr.items.some(i => /5441/.test(i))){
    gr.items = [...gr.items, 'In HKL, the emergency colour codes card gives Code Gray on ext 5441 for physical violence (still to confirm): see Communication on shift'];
    link('new-hkl', 'grey', ['#communication--help', 'Getting help: the HKL codes']);
  }
  /* Handing over, from the admission memo */
  link('gz-rules', 'adm24', ['#handover', 'Handing over']);
  /* EM Watch and EMACC, the two follow-up clinics */
  if (P['em-watch'] && !(P['em-watch'].see || []).some(x => x[0] === '#emacc')) P['em-watch'].see = [...(P['em-watch'].see || []), ['#emacc', 'EMACC follow-up'], ['#gz-rules--reas', 'Before you admit, discharge or transfer']];
})();
