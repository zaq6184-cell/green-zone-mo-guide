
/* ================= Green Zone MO Guide, version 8: the engine =================
   One page, one view at a time, routed on the hash:
   #home, #pathways, #saved, #rules, #tools, #calc(-dengue|-kids|-weight), #numbers,
   #journey(-1..5), #tour (#video), #quiz, #intro, #new, #poster, #about, #search,
   #<entry> and #<entry>--<node> for any step of any pathway or rule.
   Saved, recent, quiz best, tour position and settings stay in this browser only. */

const APP_URL = 'https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9';

/* ================= Content: journey, rules, numbers, tour, quiz, Drive run-through ================= */
const JOURNEY = [
  {short:'Triage', ic:'triage', sub:'MTS 4 or 5', img:'img/gz-02-triage.webp', clip:'clips/stop1-triage.mp4', audio:'audio/stop1.mp3',
   say:'Patients move one way. Triage, then secondary triage, then ECG, irrigation or dressing if needed, and on to you.',
   alt:'Illustration: a triage nurse takes a seated patient\'s blood pressure at the Green Zone counter',
   who:'Triage', title:'Triage, then secondary triage',
   items:['Triage gives the patient MTS level 4 or 5, which brings them to the Green Zone','Then secondary triage','Then ECG, wound irrigation or dressing, only if needed','Patients move one way, and next they come to you'],
   links:[['#gz-rules--oneway','No repeat tests after secondary triage'],['#gz-rules--down','Down-triage: only the EP can allow it'],['#gz-rules--dengue','Dengue from a KK: straight to OW?'],['#asthma-zone','Asthma: the 5000 queue'],['#children--pat','Children: ETD or PEDWCH']]},
  {short:'You, the MO', ic:'stetho', sub:'Consultation', img:'img/gz-03-consult.webp', clip:'clips/stop2-consult.mp4', audio:'audio/stop2.mp3', mo:true,
   say:'You fill in the green slip. For the diagnosis, open its pathway.',
   alt:'Illustration: a medical officer writes notes while a patient sits across the desk in the consultation room',
   who:'You, the MO', title:'Consultation room',
   items:['See the patient and open the ebook pathway for the diagnosis','Fill in the green treatment slip (slip hijau) and attach the queue number','Ask the patient to put the slip in the Red Box and wait in the waiting tent','If an X-ray is needed, send the patient to the X-ray counter'],
   note:{href:'#gz-rules--wait', k:'Never waits outside', t:'The elderly, NSTEMI or ACS, and anyone who needs stat medication and monitoring: bring them inside.'},
   links:[['#pathways','Open a pathway'],['#oscc--dv','Domestic violence missed at triage']]},
  {short:'Treatment room', ic:'syringe', sub:'PPP', img:'img/gz-04-treatment.webp', clip:'clips/stop3-treatment.mp4', audio:'audio/stop3.mp3',
   say:'The treatment room calls the queue number, carries out each order, and documents it.',
   alt:'Illustration: a nurse prepares a drip beside a patient resting in a treatment chair',
   who:'PPP, treatment room', title:'Treatment room (PPP)',
   items:['Takes the slip from the Red Box and calls the queue number','Carries out each procedure you ordered, and documents each one','Tells the patient the next step of the plan'],
   links:[['#blood-tests--gxm','GXM sample: label at the bedside']]},
  {short:'CCA', ic:'chair', sub:'Only if needed', img:'img/gz-05-cca.webp', clip:'clips/stop4-cca.mp4', audio:'audio/stop4.mp3', optional:true,
   say:'Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside.',
   alt:'Illustration: patients seated in rows of chairs in the Chair Centric Area while a nurse checks a monitor',
   who:'Only if results are pending, or for observation or referral', title:'CCA, the Chair Centric Area',
   items:['PPP escorts the patient to the CCA and hands over to Yellow Zone Extension staff','Staff seat the patient, write the details on the whiteboard, record vital signs on the slip and monitor','When observation ends they send the patient back to the doctor\'s room, and the slip returns to the Green Zone MO','You stay responsible for the patient you sent, and the BHT goes with them'],
   links:[['#gz-rules--wait','Where to seat patients who cannot wait outside'],['#gz-rules--ivab','IV antibiotics on a CCA chair'],['#yellow-zone','Uptriage: the Yellow Zone flow']]},
  {short:'Review and finish', ic:'review', sub:'Back to you', img:'img/gz-06-review.webp', clip:'clips/stop5-review.mp4', audio:'audio/stop5.mp3', mo:true,
   say:'Before discharge, reassess and review every result. After a CT brain, ask the EP to review, and book EMACC or EMWATCH follow-up. Unsure, or the disposition is stuck? Call the EP in charge.',
   alt:'Illustration: two doctors review a CT brain image on a screen while a patient waits nearby',
   who:'You, the MO', title:'Review, then finish',
   items:['Results back: call the queue number again','Reassess before you admit, discharge or transfer, and review every blood result and image','Came within 24 hours: ask the TL, a master student or the EP to look at the case','CT brain and going home: ask the EP to review, then give an EMWATCH or EMACC appointment','To finish: attach the slip to the BHT, complete the notes, follow the appointment flow chart for a TCA and give discharge advice','Anything still pending at the end of your shift: hand over to the next MO and document who'],
   note:{href:'#gz-rules--delay', k:'When it stalls', t:'Several disciplines and no disposition after a long wait: inform the EP in charge.', c:'advice'},
   links:[['#tools','Discharge safety check'],['#em-watch','What EM Watch is'],['#emacc','Book EMACC follow-up']]}
];

const RULES = [
  {c:'admit', k:'NEVER WAITS OUTSIDE', h:'Bring them inside', chips:['Elderly','NSTEMI or ACS','Stat drugs and monitoring'],
   items:['Seat them in the CCA, the rooms in front of R2, the R2 corridor or any zone with space','The designated MA and HO there start management and monitoring','No space: tell the EP in charge'],
   links:[['#gz-rules--wait','Open the rule']]},
  {c:'discharge', k:'ADMIT, DISCHARGE, TRANSFER', h:'Reassess first',
   items:['Reassess every patient, and review every blood result and image','Came within 24 hours: ask the TL, a master student or the EP to look at the case','CT brain and going home: EP review, then an EM Watch or EMACC appointment'],
   links:[['#gz-rules--reas','Open the rule'],['#tools','Safety check'],['#em-watch','EM Watch']]},
  {c:'advice', k:'WHEN IT STALLS', h:'Call the EP in charge',
   items:['Several disciplines and no disposition after a long wait: inform the EP','External referral: discuss with the EP before accepting','Pending at the end of your shift: hand over to the next MO and document who'],
   links:[['#gz-rules--delay','Open the rule'],['#gz-rules--ext','External referrals']]}
];
const MORE_RULES = [['#gz-rules--flow','Patient flow and the green slip'],['#gz-rules--oneway','One-way flow: no repeat tests'],['#gz-rules--down','Down-triage'],['#gz-rules--ivab','IV antibiotics, no bed free'],['#gz-rules--ep4','Primary team delayed'],['#gz-rules--kk','Redirect to a KK or GP'],['#asthma-zone','Asthma Zone flow'],['#mau-admission','Admission to MAU'],['#referral-rules--ortho','Orthopaedic referral'],['#referral-rules--ipr','Transfer to IPR'],['#emacc','EMACC follow-up'],['#em-watch','EM Watch'],['#outpatient-referral','Clinic referrals'],['#gz-rules--dengue','Dengue from a KK to OW'],['#yellow-zone','Yellow Zone flow'],['#safe-practice','Million Ringgit Habits']];

/* Version 8: the redesign, for the home card and What's new */
const V8 = [
  ['A new look','The guide is now a bento of tiles, each showing real data from the guide: how each pathway can end, the numbers, the zone.',[['#home','Home']]],
  ['The zone map','The five stops of a Green Zone visit on the home screen. Tap one for what happens there and the rules that apply.',[['#journey','Patient journey']]],
  ['Whole-pathway maps','Every step of a pathway on one sheet, with your route lit and the outcomes you can no longer reach dimmed.',[['#renal-colic','Try it on renal colic']]],
  ['Visual shift tools','A route meter for the discharge check, and gauges for the shock index, pulse pressure, heart rate and BMI, using the same thresholds as before.',[['#tools','Shift tools']]],
  ['First-shift intro','Four quick screens for a new MO or HO.',[['#intro','Open the intro']]],
  ['A new tour','The narrated explainer is rebuilt in the new look and now covers the version 7 rules: no repeat tests after secondary triage, down-triage only with the EP\'s permission, IV antibiotics on a CCA chair, and when the EP may decide the admission. It is also in Bahasa Melayu: switch the narration under the video.',[['#tour','Watch the tour']]],
  ['The wall poster, redrawn','Both A3 sheets in the new look. Sheet 1 adds the four version 7 rules with their sources, and marks the three numbers still to confirm. Sheet 2 shows the Asthma Zone flow from the November 2025 memo.',[['#poster','Wall poster']]]
];

/* The first-shift intro: four screens about using the guide, with a drawn picture each */
const INTRO = [
  {h:'Find it in one search', p:'Type a symptom, rule, dose or number, or press /. Saved and recent pathways wait on your home screen.', art:'search'},
  {h:'One question at a time', p:'Each pathway asks one question per card and shows how it can still end. It finishes in the ebook\'s outcome colours: red admit, yellow observation, green discharge, violet refer.', art:'path'},
  {h:'Patients move one way', p:'Triage, you the MO, the treatment room, the CCA only if needed, then review. Tap any stop on the zone map for what happens there and the rules that apply.', art:'zone'},
  {h:'Tools and numbers, one tap away', p:'The discharge safety check, quick sums and 14 numbers with Copy. Nothing you tick or type is saved.', art:'tools'}
];
const ART = {
  search:'<rect x="18" y="34" width="284" height="56" rx="28" style="fill:#fff"/><circle cx="50" cy="62" r="10" class="ln" style="stroke:var(--emerald-1);stroke-width:3.5"/><path d="m57.5 69.5 7 7" class="ln" style="stroke:var(--emerald-1);stroke-width:3.5"/><text x="76" y="69" style="font:700 19px var(--body);fill:#14211b">renal colic</text><rect x="184" y="50" width="3" height="25" class="blink" style="fill:var(--emerald-1)"/>' +
    '<g class="pop" style="--d:.45s"><rect x="18" y="108" width="210" height="40" rx="15" style="fill:rgba(255,255,255,.18)"/><rect x="32" y="122" width="12" height="12" rx="3" style="fill:var(--b-refer)"/><rect x="48" y="122" width="12" height="12" rx="3" style="fill:var(--b-discharge)"/><text x="70" y="133" style="font:700 15px var(--body);fill:#fff">Renal colic · p53–54</text></g>' +
    '<g class="pop" style="--d:.65s"><rect x="18" y="156" width="170" height="40" rx="15" style="fill:rgba(255,255,255,.1)"/><text x="34" y="181" style="font:700 15px var(--body);fill:rgba(255,255,255,.86)">Saved · Dengue fever</text></g>',
  path:'<rect x="14" y="18" width="188" height="150" rx="22" style="fill:#fff"/><rect x="32" y="38" width="146" height="12" rx="6" style="fill:#14211b"/><rect x="32" y="58" width="104" height="12" rx="6" style="fill:#14211b;opacity:.45"/><rect x="32" y="86" width="152" height="30" rx="12" class="pop" style="fill:var(--emerald-1);--d:.5s"/><rect x="32" y="124" width="152" height="30" rx="12" style="fill:#e8eeea"/>' +
    '<path pathLength="1" d="M246 30 V150" class="ln draw" style="stroke:var(--mint);stroke-width:6"/><circle cx="246" cy="30" r="9" style="fill:#fff"/><circle cx="246" cy="90" r="9" class="pop" style="fill:#fff;--d:.7s"/><rect x="233" y="140" width="26" height="26" rx="8" class="pop" style="fill:var(--b-discharge);--d:1.1s"/>' +
    '<g class="pop" style="--d:1.25s"><rect x="14" y="186" width="16" height="16" rx="4" style="fill:var(--b-admit)"/><rect x="88" y="186" width="16" height="16" rx="4" style="fill:var(--b-observe)"/><rect x="176" y="186" width="16" height="16" rx="4" style="fill:var(--b-discharge)"/><rect x="258" y="186" width="16" height="16" rx="4" style="fill:var(--b-refer)"/><text x="36" y="199" style="font:700 12px var(--body);fill:#fff">Admit</text><text x="110" y="199" style="font:700 12px var(--body);fill:#fff">Observe</text><text x="198" y="199" style="font:700 12px var(--body);fill:#fff">Home</text><text x="280" y="199" style="font:700 12px var(--body);fill:#fff">Refer</text></g>',
  zone:'<path pathLength="1" d="M40 96 H280" class="ln draw" style="stroke:var(--mint);stroke-width:6"/>' +
    ['Triage','You','Treat','CCA','Review'].map((t, i) => `<g class="pop" style="--d:${(.25 + i * .12).toFixed(2)}s"><circle cx="${40 + i * 60}" cy="96" r="18" style="fill:${i === 1 ? 'var(--mint)' : 'rgba(255,255,255,.14)'};stroke:#fff;stroke-width:2.5"/><text x="${40 + i * 60}" y="136" text-anchor="middle" style="font:700 13px var(--body);fill:#fff">${t}</text></g>`).join('') +
    '<circle cx="40" cy="96" r="7" class="mv" style="fill:#fff;--to:60px"/><text x="160" y="176" text-anchor="middle" style="font:700 13px var(--body);fill:rgba(255,255,255,.75)">one way, stop by stop</text>',
  tools:'<rect x="16" y="22" width="150" height="74" rx="18" class="pop" style="fill:var(--garnet-1);--d:.2s"/><text x="34" y="48" style="font:700 12px var(--body);fill:rgba(255,255,255,.85)">Code Blue</text><text x="34" y="82" style="font:700 30px var(--mono);fill:#fff">5333</text>' +
    '<g class="pop" style="--d:.45s"><rect x="186" y="22" width="118" height="74" rx="18" style="fill:rgba(255,255,255,.14)"/><text x="200" y="48" style="font:700 12px var(--body);fill:#fff">Shock index</text><rect x="200" y="62" width="44" height="9" rx="4" style="fill:var(--b-discharge)"/><rect x="244" y="62" width="46" height="9" rx="4" style="fill:var(--b-admit)"/><rect x="228" y="56" width="4" height="22" rx="2" class="mv" style="fill:#fff;--to:6px"/></g>' +
    '<path pathLength="1" d="M28 150 H292" class="ln draw" style="stroke:rgba(255,255,255,.3);stroke-width:5"/>' + [0, 1, 2, 3, 4, 5].map(i => `<circle cx="${28 + i * 52.8}" cy="150" r="10" class="pop" style="fill:${i < 4 ? 'var(--mint)' : 'var(--teal-2)'};stroke:#fff;stroke-width:2.5;--d:${(.6 + i * .1).toFixed(1)}s"/>`).join('') +
    '<text x="28" y="190" style="font:700 13px var(--body);fill:rgba(255,255,255,.8)">Discharge check: 4 of 6 done</text>'
};
const POPULAR = [['#renal-colic','Renal colic'],['#dengue','Dengue'],['#asthma-zone','Asthma Zone'],['#mau-admission','MAU criteria'],['#pneumonia','CURB-65'],['#mild-tbi','Head injury'],['#gz-rules--ivab','IV antibiotics, no bed'],['#referral-rules--ortho','Ortho referral']];

const NUMS = [
  {g:'Emergencies', hot:true, lbl:'Code Blue, outside the ED', val:'ext 5333', copy:'03-2615 5333', note:'ED Call Centre, for an emergency or arrest elsewhere in the hospital. Call Centre 2: ext 6700. SCACC Anaesthesia: ext 1133 / 1134.', href:'#safe-practice--blue', link:'Code Blue', src:'Code Blue Manual, 2019'},
  {g:'Emergencies', hot:true, lbl:'Code Stroke', val:'ext 5999', copy:'ext 5999', note:'Onset under 9 hours. Say CODE STROKE, then the patient\'s name, your location and extension, COVID status and the ETD MO\'s name.', href:'#stroke-tia', link:'CVA and TIA', src:'Code Stroke pathway'},
  {g:'Emergencies', lbl:'ED Resus', val:'ext 5339 / 5326', copy:'ext 5339 / 5326', note:'Amber Zone: ext 5324 / 5360.', src:'MAU critical patient flow'},
  {g:'Admission and follow-up', lbl:'MAU mobile team', val:'ext 6682 / 6684', copy:'ext 6682 / 6684', note:'Office hours. After hours, the same extensions reach the MAU 1 (male), MAU 2 (female) and MAU 3 wards. Phone before you register the admission.', href:'#mau-admission', link:'Admission to MAU', src:'MAU flow chart, 18 Oct 2022'},
  {g:'Admission and follow-up', lbl:'EMACC follow-up', val:'ext 7040', copy:'03-2615 5555 ext 7040', note:'Call 03-2615 5555 ext 7040 and speak to the EMACC MO in charge.', href:'#emacc', link:'EMACC follow-up', src:'EMACC SOP, 1 Feb 2018'},
  {g:'Admission and follow-up', lbl:'IPR specialist on call', val:'03-4023 2966', copy:'03-4023 2966', note:'For a respiratory patient who meets the IPR transfer criteria: stable, no inotropes, Venturi 40% or less, and none of the exclusions.', href:'#referral-rules--ipr', link:'IPR criteria', src:'IPR admission criteria (triage course folder)'},
  {g:'Admission and follow-up', lbl:'IJN hotline', val:'03-2617 8996', copy:'03-2617 8996', note:'ACS that meets the IJN referral criteria, with the patient\'s consent. Do not promise free treatment.', href:'#acs', link:'ACS pathway', src:'Ebook p12–14; IJN update'},
  {g:'Admission and follow-up', lbl:'MAU FAST clinic', val:'MHKL level 2', note:'8 am to 4:30 pm. For example low-risk chest pain with an ECG copy, or CAP with CURB-65 0–1 with a CXR copy.', href:'#outpatient-referral', link:'Clinic referrals', src:'FAST clinic criteria (draft)'},
  {g:'Admission and follow-up', lbl:'Stress test (ETT)', val:'Thu 2:30–4:30 pm', note:'SCACC level 8, Thursdays only. Fill in both the form and the book at Yellow Obs.', href:'#acs', link:'ACS pathway', src:'Stress test reminder'},
  {g:'Admission and follow-up', lbl:'Neuro Rehab Clinic', val:'ext 7099', copy:'ext 7099', note:'Mild TBI with a normal CT brain and PTA over 4 hours: refer for formal cognitive assessment. HRC concussion clinic: 03-9145 3400 ext 3401.', href:'#mild-tbi', link:'Mild TBI pathway', src:'Ebook p25–26'},
  {g:'Imaging', lbl:'Radiology on duty (ROTD)', val:'ext 7122', copy:'ext 7122', note:'Radiology MO EDCT: ext 5928. CT main counter: ext 7109. CT console: ext 7124.', href:'#trauma-walkins--ct', link:'HIT whole-body CT', src:'HIT protocol, Dec 2021'},
  {g:'Infection and protection', lbl:'Infection Control Unit (UKI)', val:'ext 6319 / 5621', copy:'ext 6319 / 5621', note:'Questions on Nipah and other infection alerts.', href:'#infection-alerts--nipah', link:'Nipah', src:'UKI memo, 3 Mar 2026'},
  {g:'Infection and protection', lbl:'SCAN team referral', val:'011-6384 8719', copy:'011-6384 8719', note:'Paediatric registrar, for suspected child abuse. New number in June 2026: check it is still current.', href:'#oscc--child', link:'Suspected child abuse', src:'REMINDER for OSCC, 26 Jun 2026'},
  {g:'Infection and protection', lbl:'Animal Bite Clinic (ABC)', val:'ext 1017 / 1178', copy:'03-2615 5555 ext 1017 / 1178', note:'Physician Clinic, SCACC level 2. Monday to Thursday 2–4 pm, Friday 3–4:30 pm.', href:'#animal-bites', link:'Animal bites', src:'Rabies and ABC protocol, Oct 2022'}
];
const KEY_NUMS = [0, 1, 3, 4];

/* The explainer: chapters and the caption lines with their start times (seconds) */
const CHAPTERS = [[0,'New to the Green Zone?'],[7.9,'Patients move one way'],[17.87,'The green slip and the treatment room'],[26.23,'Down-triage: the EP allows it'],[36.3,'Open the pathway'],[45.03,'Waiting for results: the CCA'],[55.07,'IV antibiotics and no bed'],[64,'Before discharge'],[73.83,'When to call the EP']];
const CAPTIONS = [[0.86,"New to the Green Zone?"],[2.66,"Here is how a patient"],[3.52,"moves through it,"],[5.02,"and what you decide"],[6.26,"at each step."],[8.48,"Patients move one way."],[10.31,"Secondary triage does"],[11.34,"the vital signs, ECG and dressing."],[14.73,"Do not repeat them"],[15.45,"unless they were missed."],[18.39,"Then on to you."],[19.91,"Fill in the green slip."],[22.3,"The treatment room"],[22.76,"calls the queue number"],[24.17,"and carries out each order."],[26.75,"Only the EP can allow"],[27.96,"a down-triage."],[29.82,"Before you down-triage,"],[31.08,"examine the patient properly,"],[32.93,"then document it"],[34.02,"on the triage form."],[36.9,"For the diagnosis,"],[38.21,"open its pathway:"],[39.09,"one question at a time."],[41.51,"Each step shows"],[42.13,"how it can still end."],[45.56,"Waiting for results?"],[46.95,"Send the patient to the CCA."],[48.82,"The elderly, ACS,"],[50.67,"or anyone needing stat drugs"],[52.56,"never waits outside."],[55.58,"Needs IV antibiotics,"],[56.92,"and no bed is free?"],[58.69,"Use a CCA chair,"],[59.59,"with one of the four"],[61.37,"allowed antibiotics only."],[64.52,"Before discharge,"],[65.31,"reassess and review every result."],[67.63,"After a CT brain,"],[68.51,"ask the EP to review,"],[70.27,"then book EMACC or EM Watch."],[74.35,"Primary team delayed?"],[76.1,"The EP may decide the admission"],[77.82,"within four hours."],[79.16,"Unsure, or stuck?"],[80.95,"Call the EP in charge."],[83.79,"Right patient."],[84.85,"Right zone."],[85.79,"Right time."]];
/* The same explainer in Bahasa Melayu (narration: VoiceStudio, the cloned voice Malay Kore) */
const CHAPTERS_MS = [[0,'Baru di Zon Hijau?'],[8.37,'Pesakit bergerak sehala'],[18.43,'Slip hijau dan bilik rawatan'],[27.47,'Turun triaj dengan kebenaran EP'],[37.33,'Buka laluan klinikal'],[47.27,'Menunggu keputusan: CCA'],[57.5,'Antibiotik IV tanpa katil'],[68.37,'Sebelum discaj'],[79.03,'Bila perlu hubungi EP']];
const CAPTIONS_MS = [[0.84,"Baru di Zon Hijau?"],[2.49,"Inilah cara pesakit"],[3.6,"bergerak melaluinya,"],[5.44,"dan apa yang anda putuskan"],[6.26,"pada setiap langkah."],[8.89,"Pesakit bergerak sehala."],[11,"Triaj sekunder mengambil"],[11.94,"tanda vital, membuat ECG dan balutan."],[15.29,"Jangan ulanginya, kecuali jika ada yang tertinggal."],[19.51,"Kemudian, pesakit datang kepada anda."],[21.58,"Isi slip hijau."],[22.84,"Bilik rawatan memanggil"],[23.96,"nombor giliran"],[24.96,"dan melaksanakan setiap arahan."],[28.24,"Hanya EP boleh membenarkan"],[29.61,"turun triaj."],[31.43,"Sebelum turun triaj,"],[32.85,"periksa pesakit dengan teliti,"],[34.5,"kemudian catatkannya"],[35.51,"dalam borang triaj."],[37.89,"Untuk diagnosis,"],[39.04,"buka laluan klinikalnya:"],[41.44,"satu soalan pada satu masa."],[43.58,"Setiap langkah menunjukkan"],[44.21,"kesudahan yang masih mungkin."],[47.78,"Menunggu keputusan?"],[49.1,"Hantar pesakit ke CCA."],[51.18,"Warga emas, ACS,"],[51.68,"atau sesiapa yang memerlukan ubat stat,"],[54.92,"tidak boleh dibiarkan menunggu di luar."],[58.05,"Perlukan antibiotik IV,"],[60.24,"tetapi tiada katil kosong?"],[62.37,"Gunakan kerusi di CCA,"],[63.99,"dengan salah satu daripada"],[65.27,"empat antibiotik yang dibenarkan sahaja."],[68.91,"Sebelum discaj,"],[69.66,"nilai semula pesakit"],[70.53,"dan semak setiap keputusan."],[72.39,"Selepas CT otak,"],[73.35,"minta EP menyemak,"],[75.11,"kemudian buat temujanji"],[76.9,"EMACC atau EM Watch."],[79.84,"Pasukan primer lewat?"],[81.3,"EP boleh memutuskan kemasukan ke wad"],[83.55,"dalam masa empat jam."],[84.92,"Tidak pasti, atau buntu?"],[86.54,"Hubungi EP yang bertugas."],[89.28,"Pesakit yang tepat."],[90.46,"Zon yang tepat."],[91.48,"Masa yang tepat."]];

/* Discharge safety check: built from the reassessment rule and Million Ringgit Habits */
const DC_ALL = [
  ['Reassessed, and every blood result and image reviewed','The rule before any admission, discharge or transfer'],
  ['Safety-net advice given and documented','"Return immediately if pain or symptoms worsen"'],
  ['Allergy asked and documented','Write "no allergic history" if there is none'],
  ['Last vital signs recorded','For any patient who was under observation'],
  ['Walks independently, and you documented it','"Has the patient been to the toilet?"'],
  ['Discharge advice given and follow-up arranged','TCA, KK, clinic, EMACC or EM Watch, with the letter']
];
const DC_STOP = [
  ['Came back within 48 hours, or after several GP visits','Admit','#safe-practice--dc'],
  ['First came within the last 24 hours','Ask the TL, a master student or the EP to look at the case','#gz-rules--reas'],
  ['Abdominal pain with a pain score above 0','Not yet: discharge only at pain score 0, with a clear diagnosis','#safe-practice--abd'],
  ['A CT brain was done','EP review, then an EM Watch or EMACC appointment','#gz-rules--reas'],
  ['Febrile infant under 3 months','Admit','#safe-practice--subtle'],
  ['Limb pain out of proportion','Think of ischaemia or compartment syndrome: check the pulses and refer early','#safe-practice--limb'],
  ['Results still pending at the end of your shift','Hand over to the next MO and document who','#gz-rules--wait']
];

const QUIZ = [
  {q:'Which of these patients should not be left waiting outside the Green Zone?', o:['A 78-year-old with chest pain being observed for ACS','A 30-year-old with an ankle sprain','A student with a sore throat','A patient waiting for a dressing'], a:0,
   why:'The elderly, NSTEMI or ACS, and anyone who needs stat medication and monitoring are brought inside: the CCA, the R2 rooms or corridor, or any zone with space.', href:'#gz-rules--wait'},
  {q:'A KK refers a dengue patient with warning signs only. CCTVR and vital signs are normal, platelets are 80,000 and the patient is not obese. Where do they go?', o:['Straight to the Observation Ward, bypassing the Yellow Zone','The Yellow Zone for review first','Home with a dengue monitoring card','The Red Zone'], a:0,
   why:'All the direct-admission criteria are met, so the triager sends the patient straight to the Observation Ward without Yellow Zone review (memo 23 Mar 2023; Dengue SOP 2.0).', href:'#gz-rules--dengue'},
  {q:'Since the November 2025 memo, who does the final assessment and discharge of a Green Zone asthma patient?', o:['The Green Zone MO','The AMO in the Asthma Zone','The Amber Zone MO','The PPP in the Asthma Treatment Room'], a:0,
   why:'Each asthma patient gets a 5000 queue number and a Green Zone consultation room. The Green Zone MO re-examines, prescribes, and stamps and signs the asthma card.', href:'#asthma-zone'},
  {q:'A patient has had stroke symptoms for 3 hours. What do you dial?', o:['Ext 5999, and say CODE STROKE','Ext 5333, and say Code Blue','The ROTD on ext 7122 to book a CT','The MAU team on ext 6682'], a:0,
   why:'Onset under 9 hours: dial ext 5999 and say CODE STROKE, then give the patient\'s name, your location and extension, COVID status and the ETD MO\'s name. Fill in the Google Form straight after.', href:'#stroke-tia'},
  {q:'Which of these patients can MAU take?', o:['Cellulitis, alert, with normal vital signs','Dengue fever','Acute stroke','ESRD on haemodialysis'], a:0,
   why:'Dengue fever, acute stroke and ESRD on haemodialysis are MAU exclusions. Cellulitis is on MAU\'s list if all 11 criteria are met.', href:'#mau-admission'},
  {q:'You take a GXM sample. When and how do you label the bottle?', o:['At the bedside, by hand, straight after taking the blood','At the counter, after taking all the samples','With a pre-printed label from registration','With your name stamp on the label'], a:0,
   why:'Label at the bedside straight after taking the blood, one patient at a time, by hand and with no stamp on the label. Fill in and sign checklist HKL/PKU-18-02.', href:'#blood-tests--gxm'},
  {q:'In your consultation room you suspect domestic violence that triage missed. What do you do?', o:['Take the patient to OSCC straight away','Finish the consultation and give a leaflet','Tell the patient to make a police report first','Ask the partner what happened'], a:0,
   why:'Green Zone survivors not picked up at triage go to OSCC at once. Ask in private, never in front of the partner, and do not force a police report.', href:'#oscc--dv'},
  {q:'You plan to discharge a patient after a CT brain. What must happen first?', o:['The EP reviews, and the patient gets an EM Watch or EMACC appointment','Nothing extra if the CT is normal','Admit for observation','Refer to Neurosurgery'], a:0,
   why:'Reassess before discharge. After a CT brain, ask the EP to review, then give an EM Watch or EMACC appointment.', href:'#gz-rules--reas'},
  {q:'Which patient fits EM Watch, the telemedicine follow-up?', o:['A Malaysian adult with cellulitis, a smartphone and internet, once the EP agrees','A 16-year-old with cellulitis','A visiting tourist with a sprain','An adult with no phone'], a:0,
   why:'EM Watch needs a Malaysian citizen over 18 who consents and has a smartphone or tablet (not Huawei) with reliable internet. Cellulitis is on its list; discuss with the EP first.', href:'#em-watch'},
  {q:'A patient with abdominal pain feels better. When can they go home?', o:['When the pain score is 0, with a clear diagnosis and safety-net advice','When the pain score is under 5','Once the bloods are normal, whatever the pain','When the patient asks to go'], a:0,
   why:'A Million Ringgit Habit: discharge abdominal pain only at pain score 0, with a clear diagnosis and documented safety-net advice. Examine all 4 quadrants, and the testes in men.', href:'#safe-practice--abd'},
  {q:'You need to down-triage a Green Zone patient. What must happen?', o:['The EP allows it, and you examine the patient properly first, then document it on the triage form','You down-triage from the triage notes, then tell the EP at the end of the shift','The PPP down-triages in the treatment room after the vital signs','The triage nurse down-triages whenever the Green Zone queue is long'], a:0,
   why:'Only the EP can allow a down-triage. Down-triage is not allowed unless the MO has examined the patient first, and the MO documents it on the triage form; the PPP makes sure it is documented (memo, 4 Oct 2022).', href:'#gz-rules--down'},
  {q:'A Green Zone patient needs IV antibiotics and no bed is free in Yellow Obs, ISO or YZ Ext. Which antibiotic may be given on a CCA chair?', o:['Ceftriaxone','Meropenem','Vancomycin','Piperacillin-tazobactam'], a:0,
   why:'Only four are allowed on a CCA chair: Augmentin, cefuroxime, ceftriaxone or Unasyn. Send the prescription, a wristband and complete records, hand over to the HO in the CCA, and move the patient to a bed when one frees up (memo, 30 Jun 2026).', href:'#gz-rules--ivab'},
  {q:'You see a shoulder dislocation in the Green Zone. Who do you refer to?', o:['The ortho MO on call 1 or 2, before or after reduction','The orthopaedic clinic at Wisma Kayu, with a letter','No one, as long as it reduces','The orthopaedic team, as an opinion only'], a:0,
   why:'Refer every joint dislocation, including the shoulder, to the ortho MO on call 1 or 2, before or after reduction, not to the clinic. Make a formal referral: opinion-only referrals are not accepted.', href:'#referral-rules--ortho'}
];

/* What the MO Drive run-through (3. Clinical, 7 Nov 2026) added, and what it did not */
const DRIVE = [
  ['EMWATCH','added','What EM Watch is, who can use it and which conditions it takes. This answers the open EMWATCH question.',[['#em-watch','EM Watch']]],
  ['MAU','added','The 11 admission criteria, the exclusions, the diagnoses MAU considers and how to phone it; the draft MAU FAST and Physician\'s Clinic criteria.',[['#mau-admission','Admission to MAU'],['#outpatient-referral','Clinic referrals']]],
  ['ARDS / ASTHMA','updated','The Asthma Zone flow follows the 13 Nov 2025 memo: you do the final assessment and discharge. Adult and children\'s MDI doses and the patient action plan are added.',[['#asthma-zone','Asthma Zone flow']]],
  ['YELLOW ZONE','added','The July 2026 patient flow, and where patients go when the zone is full.',[['#yellow-zone','Yellow Zone flow']]],
  ['OSCC','added','Sexual assault, domestic violence, suspected child abuse, and the June 2026 reminders on forms and police reports.',[['#oscc','OSCC']]],
  ['ABG','added','When to run a blood gas, and when not to.',[['#blood-tests--gas','Blood gas']]],
  ['PDN / BLOOD TRANSFUSION','added','The mandatory pre-transfusion checklist (Mar 2026), bedside labelling and why requests are rejected.',[['#blood-tests--gxm','GXM sample'],['#blood-tests--reject','Rejections']]],
  ['TOXICOLOGY','added','The tubes for drug levels, and the methanol sample.',[['#blood-tests--tox','Drug levels']]],
  ['INFECTIOUS DISEASES','added','TB, Mpox (Sept 2024), Nipah (Mar 2026), MERS PUI, COVID screening, notification, and rabies with the Animal Bite Clinic.',[['#infection-alerts','Infection alerts'],['#animal-bites','Animal bites']]],
  ['DENGUE','updated','Dengue SOP 2.0: Green Zone timings, the discharge criteria, tags and notification, as department notes on the ebook pathway; plus a shock index check in Tools.',[['#dengue','Dengue fever'],['#calc-dengue','Shock index']]],
  ['TRAUMA, ATLS','added','T-RACS Tier 1 criteria for walk-ins, the HIT whole-body CT protocol and the Aug 2023 trauma lessons.',[['#trauma-walkins','Trauma walk-ins']]],
  ['PAEDS EMERGENCY','added','Where to triage a child, croup, dehydration and swallowed objects; weight-based doses in Tools.',[['#children','Children in the ED'],['#calc-kids','Child doses']]],
  ['MEDICOLEGAL','added','Million Ringgit Habits and the medicolegal tip, also built into the discharge safety check.',[['#safe-practice','Safe practice'],['#tools','Safety check']]],
  ['CODE BLUE','added','The Code Blue numbers and who responds.',[['#safe-practice--blue','Code Blue']]],
  ['STROKE PROTOCOL PATHWAY','updated','Code Stroke ext 5999 steps, and the discharge medicines for Neuro patients, as department notes.',[['#stroke-tia','CVA and TIA']]],
  ['STRESS TEST / OBSESS','updated','Trop T tubes, the Thursday stress test and what to do if it is positive, as department notes.',[['#acs','ACS']]],
  ['STEMI NETWORK','updated','Ticagrelor loading rules, and how to talk to patients about IJN charges.',[['#acs','ACS']]],
  ['O&G','updated','The ectopic pregnancy circular: record the LMP of every woman of reproductive age.',[['#abdominal-pain','Abdominal pain']]],
  ['UROLOGY','updated','More reasons for urgent referral, and the discharge bundle for ureteric colic. The acute scrotum flow matches the ebook.',[['#renal-colic','Renal colic']]],
  ['Root files','added','How to import an imaging CD from another hospital. The resus round template is not Green Zone work.',[['#safe-practice--cd','Imaging CDs']]],
  ['GREEN ZONE','checked','The Green Zone Warrior note is already in the guide; nothing new.',[['#gz-rules','Green Zone rules']]],
  ['EMACC','checked','The 2018 SOP is still the only version. The EMACC video (104 MB) was not opened.',[['#emacc','EMACC']]],
  ['CLINICAL PATHWAY EDHKL','checked','Version 8.5 is the same file as the ebook this guide is built from.',[]],
  ['SNAKES BITE','unreadable','The Malaysian snakebite guideline is a scanned PDF with no readable text. The snake atlas was not opened.',[]],
  ['PDN: transfusion reaction guide','unreadable','The blood taking and transfusion reaction guide is a picture only.',[]],
  ['AIRWAY, EMVEC, ACLS, M&M BULLETIN, ASSET, TOCIP','skipped','Resuscitation, ventilation, ECPR and critical-care transfer: not Green Zone work.',[]],
  ['POCUS','skipped','Lecture slides rather than department rules.',[]],
  ['Medication safety','skipped','The folder is empty.',[]],
  ['Older infection files','skipped','The COVID subfolders (2020–22), ZIKA (2016) and the older MERS and Mpox files are replaced by newer guidance already in the guide.',[]],
  ['National references','skipped','Paediatric Protocols 4th edition, CPG Dengue 2015, the ERC 2021 guidelines, TLSM course material and the resuscitation algorithms stand behind the ebook and are not copied.',[]]
];
const DRIVE_GROUPS = [['added','Added to the guide',true],['updated','Added as department notes on a pathway',true],['checked','Checked, nothing new',false],['skipped','Not used, and why',false],['unreadable','Could not be read',false]];
/* Version 7: the triage course folder documents, as summarised in the Green Zone workflow map */
const V7 = [
  ['One-way procedure flow','No repeat ECG, dressing or vital signs after secondary triage unless they were missed; an ECG asked for in the Green Zone is done in the Procedure Room.',[['#gz-rules--oneway','One-way flow']]],
  ['Down-triage memo HKL/JK/98/188/3(22)22, 4 Oct 2022','Down-triage is not allowed unless the MO has examined the patient first; the MO documents it on the triage form, and the PPP makes sure it is documented. Since 8 Nov 2026 the guide also says only the EP can allow a down-triage; that part\'s written source is still to be confirmed.',[['#gz-rules--down','Down-triage']]],
  ['IV antibiotic memo, 30 Jun 2026','No bed free in Yellow Obs, ISO or YZ Ext: IV antibiotics on a CCA chair, with one of four antibiotics only.',[['#gz-rules--ivab','IV antibiotics, no bed']]],
  ['KKM MTS announcement, Jul 2026','The EP may decide the admission within 4 hours if the primary team is delayed; non-emergency cases can be redirected to a Klinik Kesihatan or private GP.',[['#gz-rules--ep4','Primary team delayed'],['#gz-rules--kk','Redirect to a KK or GP']]],
  ['Orthopaedic referral memo, 17 May 2024','The Lampiran 1 urgent criteria, on-call or clinic referral, CMR within 2 hours, duplicate notes and the referral register.',[['#referral-rules--ortho','Orthopaedic referral']]],
  ['IPR admission criteria','Who can be transferred to IPR, the exclusions and the specialist on-call line.',[['#referral-rules--ipr','Transfer to IPR'],['#numbers','Numbers']]]
];
const NEW7 = [['#gz-rules--oneway','One-way flow: no repeat tests'],['#gz-rules--down','Down-triage: only the EP can allow it'],['#gz-rules--ivab','IV antibiotics when no bed is free'],['#gz-rules--ep4','When the primary team is delayed'],['#gz-rules--kk','Redirect to a KK or private GP'],['#referral-rules--ortho','Orthopaedic referral: on call or clinic'],['#referral-rules--ipr','Transfer to IPR (respiratory)']];
const CONFIRM = [
  'How to book EM Watch: the training deck shows the recruitment step only as a picture.',
  'The procedure for patients redirected to a Klinik Kesihatan or private GP.',
  'Whether the EMACC SOP of 1 Feb 2018 (ext 7040, Monday to Friday 9 am to 4 pm) is still current.',
  'Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents), the SCAN team line and the IPR on-call line.',
  'The MERS-CoV case definition, which is not in the PUI file.',
  'A readable copy of the Malaysian snakebite guideline.',
  'The written source for "only the EP can allow a down-triage": the down-triage memo of 4 Oct 2022 says the MO must examine first and document it, but does not mention the EP.'
];

/* A pearl for each shift, from Million Ringgit Habits and the one-way flow */
const TIPS = [
  {t:'Discharge abdominal pain only when the pain score is 0, with a clear diagnosis and safety-net advice.', href:'#safe-practice--abd', l:'Million Ringgit Habits'},
  {t:'Pain out of proportion in a limb: think of ischaemia or compartment syndrome, check the distal pulses and refer early.', href:'#safe-practice--limb', l:'Limbs and fractures'},
  {t:'Came back within 48 hours, or after several GP visits? Admit.', href:'#safe-practice--dc', l:'Before any discharge'},
  {t:'Stroke can be subtle: persistent dizziness, sudden blurred vision, or one weak limb. Lower your threshold to scan or admit.', href:'#safe-practice--subtle', l:'Subtle stroke'},
  {t:'Admit any febrile infant under 3 months.', href:'#safe-practice--subtle', l:'Children'},
  {t:'If it is not written, it is not done: record timings, vital signs, counselling and the follow-up advice you gave.', href:'#safe-practice--notes', l:'Notes and records'},
  {t:'Localised tenderness with a normal X-ray: treat it as a fracture, explain, and arrange a follow-up X-ray.', href:'#safe-practice--limb', l:'Limbs and fractures'},
  {t:'Record the LMP of every woman of reproductive age, and think of ectopic pregnancy whatever her marital status.', href:'#safe-practice--abd', l:'Abdominal pain'},
  {t:'Men with abdominal pain: examine the testes. The torsion window is 6 hours.', href:'#safe-practice--abd', l:'Abdominal pain'},
  {t:'Do not discharge a patient who cannot walk. Ask whether they have been to the toilet, and document it.', href:'#safe-practice--limb', l:'Before any discharge'},
  {t:'Do not repeat the ECG, dressing or vital signs after secondary triage unless they were missed.', href:'#gz-rules--oneway', l:'One-way flow'}
];

/* The source behind each pearl, in the same order as TIPS (checked against the safe-practice entry and its references) */
const MRH = 'Million Ringgit Habits, ETD HKL';
const TIP_SRC = [MRH, MRH, MRH, MRH, MRH, 'Medicolegal tip of the day, MO Drive, Jun 2026', MRH, MRH + '; KKM circular on ectopic pregnancy, 31 May 2018', MRH, MRH, 'HKL ED one-way procedure flow (Green Zone); KKM MTS announcement, Jul 2026'];
if (TIP_SRC.length !== TIPS.length) console.warn('TIP_SRC and TIPS differ in length');

/* ================= Icons ================= */
const ICONS = {
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  home:'<path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 0 1 4 19z"/>',
  path:'<circle cx="6" cy="5" r="2.2"/><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M6 7.2v9.6M8 5h4a4 4 0 0 1 4 4v1M8 19h4a4 4 0 0 0 4-4v-1"/>',
  rule:'<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  check:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 3.5V5h6V3.5"/><path d="m8.5 12 2.2 2.2L15.5 9.5"/><path d="M9 18h6"/>',
  calc:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7h7M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h3.5"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5.5 3.5-5.5 3.5z"/>',
  pause:'<path d="M9 5.5v13M15 5.5v13"/>',
  volume:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18.2 6.3a8 8 0 0 1 0 11.4"/>',
  quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1.1.9-1.1 1.6v.4"/><path d="M12 16.8h.01"/>',
  spark:'<path d="M12 3.5 13.9 10.1 20.5 12 13.9 13.9 12 20.5 10.1 13.9 3.5 12 10.1 10.1z"/>',
  poster:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7.5h7M8.5 11h7M8.5 14.5h4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6h.01"/>',
  sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h11"/>',
  star:'<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
  chev:'<path d="m9.5 6 6 6-6 6"/>',
  back:'<path d="M14.5 6l-6 6 6 6"/>',
  copy:'<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5v-2A2.5 2.5 0 0 0 13 4H6.5A2.5 2.5 0 0 0 4 6.5V13a2.5 2.5 0 0 0 2.5 2.5h2"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>',
  restart:'<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9"/><path d="M4.5 4.5V9H9"/>',
  heart:'<path d="M12 20s-7.2-4.4-8.7-9.2C2.2 7.4 4.4 4.5 7.6 4.5c1.9 0 3.4 1 4.4 2.6 1-1.6 2.5-2.6 4.4-2.6 3.2 0 5.4 2.9 4.3 6.3C19.2 15.6 12 20 12 20z"/><path d="M6.5 12h2.8l1.4-2.4 2 4.6 1.4-2.2h3.4"/>',
  lungs:'<path d="M12 4v8"/><path d="M12 12c-.8 1.2-2 1.8-3.4 1.8M12 12c.8 1.2 2 1.8 3.4 1.8"/><path d="M8.7 6.6C6.3 7.2 4 10.6 4 15.2 4 17.8 5 19.5 7 19.5c2.6 0 3.6-1.6 3.6-4.2V9.5"/><path d="M15.3 6.6c2.4.6 4.7 4 4.7 8.6 0 2.6-1 4.3-3 4.3-2.6 0-3.6-1.6-3.6-4.2V9.5"/>',
  brain:'<path d="M12 5.2A3 3 0 0 0 6.6 6.8 3 3 0 0 0 4.5 11a3 3 0 0 0 .9 4.6A3.2 3.2 0 0 0 9 19.8a3 3 0 0 0 3-1.3z"/><path d="M12 5.2a3 3 0 0 1 5.4 1.6 3 3 0 0 1 2.1 4.2 3 3 0 0 1-.9 4.6 3.2 3.2 0 0 1-3.6 4.2 3 3 0 0 1-3-1.3"/><path d="M12 5.2v13.3"/>',
  abdomen:'<path d="M7 3.5c0 3.2-1.6 4.8-1.6 8.5S7 20.5 7 20.5M17 3.5c0 3.2 1.6 4.8 1.6 8.5S17 20.5 17 20.5"/><path d="M12 7.5v9.5M8 12.2h8"/>',
  virus:'<circle cx="12" cy="12" r="4.8"/><path d="M12 3.5v3.7M12 16.8v3.7M3.5 12h3.7M16.8 12h3.7M6 6l2.6 2.6M15.4 15.4 18 18M6 18l2.6-2.6M15.4 8.6 18 6"/>',
  droplet:'<path d="M12 3.5s6 6.4 6 10.9a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/><path d="M9.4 14.6a2.6 2.6 0 0 0 2.6 2.6"/>',
  prot:'<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1"/><path d="M12 9.5v6M9 12.5h6"/>',
  bed:'<path d="M3 18.5v-11M3 14.5h18v4M21 14.5V12a3 3 0 0 0-3-3h-7v5.5"/><circle cx="7" cy="11.5" r="1.8"/>',
  door:'<path d="M13.5 4H7A1.5 1.5 0 0 0 5.5 5.5v13A1.5 1.5 0 0 0 7 20h6.5"/><path d="M10.5 12H20M16.5 8.5 20 12l-3.5 3.5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  send:'<path d="M4 12h12.5"/><path d="m11.5 6.5 5.5 5.5-5.5 5.5"/><path d="M20 5v14"/>',
  step:'<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5 14 12l-3.5 3.5"/>',
  todo:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  triage:'<path d="M4 9.5 10.5 3H19a1 1 0 0 1 1 1v8.5L13.5 19a1.8 1.8 0 0 1-2.5 0L4 12a1.8 1.8 0 0 1 0-2.5z"/><circle cx="15.5" cy="7.5" r="1.5"/>',
  stetho:'<path d="M6 3.5v5a4 4 0 0 0 8 0v-5"/><path d="M10 12.5v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10.5" r="2"/>',
  syringe:'<path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><path d="m4 20 2.4-2.4M10 10.5l3.5 3.5"/>',
  chair:'<path d="M7 4v8.5h10V20M7 12.5V20M17 12.5V8"/><path d="M5 12.5h14"/>',
  review:'<path d="M14 3.5H7A2 2 0 0 0 5 5.5v13a2 2 0 0 0 2 2h4"/><path d="M8.5 8h6M8.5 11.5h3"/><circle cx="16" cy="15.5" r="3.3"/><path d="m18.5 18 2 2"/>',
  map:'<path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20z"/><path d="M9 4v13.5M15 6.5V20"/>',
  stop:'<path d="M8.3 3.5h7.4l4.8 4.8v7.4l-4.8 4.8H8.3l-4.8-4.8V8.3z"/><path d="M12 8v5M12 16.2h.01"/>',
  flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 3.5 2 3.5H5"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  gauge:'<path d="M4 16a8 8 0 0 1 16 0"/><path d="m12 16 4-5"/><circle cx="12" cy="16" r="1.4"/>'
};
const svg = (k, cls = '', fill = false) => `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[k] || ''}</svg>`;
/* The mark: the green floor line, leading from the door to care */
const LOGO = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" style="stroke:var(--mint)" stroke-width="2.6" stroke-linecap="round"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" style="stroke:#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="5" cy="18.5" r="2.3" style="fill:#fff"/></svg>';
function fillIcons(root){
  root.querySelectorAll('[data-mark]').forEach(el => { el.innerHTML = LOGO; });
  root.querySelectorAll('[data-icon-in]').forEach(el => { el.innerHTML = svg(el.dataset.iconIn); });
  root.querySelectorAll('[data-icon]').forEach(el => {
    if (el.tagName === 'SPAN') el.outerHTML = svg(el.dataset.icon);
    else el.insertAdjacentHTML('afterbegin', svg(el.dataset.icon));
  });
}

/* ================= Helpers ================= */
const KIND = {admit:'Admit (red box)', discharge:'Discharge (green box)', observe:'Observation (yellow box)', refer:'Refer', neutral:'Next step'};
const KIND_R = {admit:'Admit', discharge:'Discharge', observe:'Observation', refer:'Refer', neutral:'The rule'};
const OUT_ORDER = ['admit','observe','discharge','refer','neutral'];
const OUT_LBL = {admit:'Admit', observe:'Observation', discharge:'Discharge', refer:'Refer', neutral:'Next step'};
const OUT_IC = {admit:'bed', discharge:'door', observe:'clock', refer:'send', neutral:'step'};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const byTitle = (a, b) => P[a].title.localeCompare(P[b].title);
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} },
  del(k){ try { localStorage.removeItem(k); } catch(e){} }
};
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const kindOf = p => p.grp !== 'rules' ? 'Pathway' : p.sub === 'protocol' ? 'Protocol' : 'Rule';
const metaOf = p => p.page ? 'Ebook p' + p.page : (p.src || '');
const kindLabel = (p, k) => (p.grp === 'rules' ? KIND_R : KIND)[k];
const fmt = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
const outsOf = p => OUT_ORDER.filter(k => Object.values(p.nodes).some(n => n.end === k));
const badgeOf = p => p.isnew ? '<span class="badge b-new">New</span>' : p.upd ? '<span class="badge b-upd">Updated</span>' : p.dept ? '<span class="badge b-upd">Dept notes</span>' : '';
const sentence = s => s.charAt(0) + s.slice(1).toLowerCase();
/* The outcome kinds that can still be reached from a node of an entry, in the ebook's order */
function endsFrom(p, from){
  const seen = new Set(), q = [from], out = new Set();
  while (q.length){
    const k = q.shift(); if (seen.has(k)) continue; seen.add(k);
    const n = p.nodes[k]; if (!n) continue;
    if (n.end) out.add(n.end);
    (n.opts || []).forEach(o => q.push(o[1])); if (n.next) q.push(n.next);
  }
  return OUT_ORDER.filter(k => out.has(k));
}
/* The most steps still to go from a node, for the progress bar */
function stepsLeft(p, k, memo = {}, stack = new Set()){
  const n = p.nodes[k]; if (!n || n.end) return 0;
  if (k in memo) return memo[k];
  if (stack.has(k)) return 0;
  stack.add(k);
  const nx = n.opts ? n.opts.map(o => o[1]) : n.next ? [n.next] : [];
  const r = 1 + Math.max(0, ...nx.map(x => stepsLeft(p, x, memo, stack)));
  stack.delete(k);
  return (memo[k] = Math.min(r, 12));
}
const dotsOf = kinds => `<span class="dots" role="img" aria-label="Can end in: ${kinds.map(k => OUT_LBL[k]).join(', ')}">${kinds.map(k => `<i class="k-${k}"></i>`).join('')}</span>`;
let toastT;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2400); }
/* Copy with a fallback: if the clipboard is refused, select the text on the page so it can be copied by hand */
function copyText(text, o = {}){
  const lab = o.btn ? (o.btn.querySelector('.bl') || o.btn) : null;
  const orig = lab ? (lab.dataset.orig || (lab.dataset.orig = lab.textContent)) : '';
  const flash = msg => { if (lab){ lab.textContent = msg; clearTimeout(lab._t); lab._t = setTimeout(() => { lab.textContent = orig; }, 1800); } else toast(msg); };
  const select = () => {
    if (o.el){ const r = document.createRange(); r.selectNodeContents(o.el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); flash('Selected: copy it'); }
    else toast(o.fail || 'Copying is blocked here');
  };
  try { navigator.clipboard.writeText(text).then(() => flash(o.ok || 'Copied'), select); } catch(e){ select(); }
}

/* ================= Groups: body systems for the ebook, then flow and protocols ================= */
const FLOW_IDS = Object.keys(P).filter(id => P[id].grp === 'rules' && P[id].sub !== 'protocol');
const PROT_IDS = Object.keys(P).filter(id => P[id].sub === 'protocol');
const CATS = [
  {k:'heart', t:'Heart and vessels', s:'Heart', ic:'heart', c:'c-heart', j:'t-garnet', ids:['acs','heart-failure','hypertensive-urgency','svt','syncope','dvt']},
  {k:'breath', t:'Breathing and allergy', s:'Breathing', ic:'lungs', c:'c-breath', j:'t-sapphire', ids:['asthma','pneumonia','anaphylaxis']},
  {k:'brain', t:'Brain and behaviour', s:'Brain', ic:'brain', c:'c-brain', j:'t-plum', ids:['stroke-tia','mild-tbi','behavioural-disturbance']},
  {k:'abdo', t:'Abdomen, kidney and scrotum', s:'Abdomen', ic:'abdomen', c:'c-abdo', j:'t-teal', ids:['abdominal-pain','gastroenteritis','biliary','renal-colic','scrotal-pain']},
  {k:'infect', t:'Infection and skin', s:'Infection', ic:'virus', c:'c-infect', j:'t-bronze', ids:['dengue','cellulitis']},
  {k:'meta', t:'Sugar, poisoning and pain', s:'Sugar and pain', ic:'droplet', c:'c-meta', j:'t-indigo', ids:['hyperglycaemia','hypoglycaemia','paracetamol-overdose','pain']},
  {k:'flow', t:'Green Zone flow and referrals', s:'Flow and referrals', ic:'route', c:'c-flow', j:'t-emerald', ids:FLOW_IDS},
  {k:'prot', t:'Department protocols', s:'Protocols', ic:'prot', c:'c-prot', j:'t-obsidian', ids:PROT_IDS}
];
const CAT_OF = {};
CATS.forEach(c => { c.ids = c.ids.filter(id => P[id]); c.ids.forEach(id => { CAT_OF[id] = c; }); });
/* Anything not placed in a group still shows, under Other pathways */
(function(){
  const other = Object.keys(P).filter(id => !CAT_OF[id]);
  if (!other.length) return;
  const c = {k:'other', t:'Other pathways', s:'Other', ic:'path', c:'c-flow', j:'t-obsidian', ids:other};
  CATS.splice(6, 0, c); other.forEach(id => { CAT_OF[id] = c; });
})();
const catOf = id => CAT_OF[id];

/* ================= Search index ================= */
function nodeText(n){ return n.q || n.step || n.title || ''; }
function nodeWords(n){
  const out = [n.q, n.step, n.title, n.hint, n.gap].filter(Boolean);
  (n.items || []).forEach(i => out.push(Array.isArray(i) ? i[0] : i));
  (n.info || []).forEach(i => out.push(i));
  (n.opts || []).forEach(o => out.push(o[0]));
  return out;
}
function pathWords(p){
  return [p.lead, ...Object.values(p.nodes).flatMap(nodeWords), ...(p.advice || []), ...(p.concerns || []),
    ...(p.tables || []).flatMap(t => [t.title, ...t.rows.flat()]),
    ...(p.dept || []).flatMap(d => [d.h, ...(d.items || []), ...(d.table ? d.table.rows.flat() : [])]),
    ...(p.see || []).map(s => s[1])].filter(Boolean);
}
const IDX = [];
for (const [id, p] of Object.entries(P)){
  const c = catOf(id);
  IDX.push({href:'#' + id, title:p.title, kind:kindOf(p), meta:metaOf(p), body:pathWords(p).join(' · '), ic:c.ic, c:c.c, j:c.j});
  const m = p.nodes[p.start];
  if (p.grp === 'rules' && m.opts && m.opts.length > 2) m.opts.forEach(([label, to]) => {
    IDX.push({href:`#${id}--${to}`, title:label, kind:kindOf(p), meta:p.title, body:nodeWords(p.nodes[to]).join(' · '), ic:c.ic, c:c.c, j:c.j});
  });
}
JOURNEY.forEach((s, i) => IDX.push({href:'#journey-' + (i + 1), title:`Journey stop ${i + 1}: ${s.title}`, kind:'Journey', meta:'Patient flow', body:[s.who, ...s.items, s.note ? s.note.t : ''].join(' · '), ic:'route', c:'c-flow'}));
NUMS.forEach(n => IDX.push({href:'#numbers', title:`${n.lbl}: ${n.val}`, kind:'Number', meta:n.src, body:n.note, ic:'phone', c:'c-abdo'}));
IDX.push({href:'#tools', title:'Discharge safety check', kind:'Tool', meta:'Shift tools', body:[...DC_ALL.flat(), ...DC_STOP.map(s => s[0] + ' ' + s[1])].join(' · '), ic:'check', c:'c-meta'});
IDX.push({href:'#calc-dengue', title:'Shock index and pulse pressure check', kind:'Tool', meta:'Dengue SOP 2.0', body:'Shock index HR divided by SBP; pulse pressure; heart rate; dengue discharge criteria; shock', ic:'calc', c:'c-breath'});
IDX.push({href:'#calc-kids', title:'Children\'s weight-based doses', kind:'Tool', meta:'Department posters', body:'Prednisolone 1 mg/kg; salbutamol MDI puffs; ipratropium; dexamethasone croup; nebulised adrenaline; ORS 10 ml/kg; moderate dehydration 75 ml/kg; paediatric dose calculator weight', ic:'calc', c:'c-breath'});
IDX.push({href:'#calc-weight', title:'Adjusted body weight for obese patients', kind:'Tool', meta:'Ebook p31–32', body:'BMI over 27.5; ideal body weight; adjusted body weight; dengue fluid; obese', ic:'calc', c:'c-breath'});
IDX.push({href:'#tour', title:'Tour: the Green Zone in 90 seconds', kind:'Video', meta:'Explainer, English and Bahasa Melayu', body:CAPTIONS.map(c => c[1]).join(' ') + ' Bahasa Melayu Malay BM ' + CAPTIONS_MS.map(c => c[1]).join(' '), ic:'play', c:'c-infect'});
IDX.push({href:'#quiz', title:`Quick check: ${QUIZ.length} questions`, kind:'Quiz', meta:'Self-test', body:QUIZ.map(q => q.q).join(' · '), ic:'quiz', c:'c-infect'});
IDX.push({href:'#new', title:'What\'s new from the drives', kind:'Update', meta:'7 Nov 2026', body:[...DRIVE.map(d => d[0] + ' ' + d[2]), ...V7.map(d => d[0] + ' ' + d[1])].join(' · '), ic:'spark', c:'c-flow'});
IDX.push({href:'#poster', title:'Wall poster, two A3 sheets', kind:'Poster', meta:'Print', body:'poster A3 sheet patient flow rules numbers pathways', ic:'poster', c:'c-prot'});
IDX.push({href:'#about', title:'Sources and about', kind:'About', meta:'Sources, privacy', body:'sources ebook memos SOP privacy no patient data version', ic:'info', c:'c-prot'});
const HAY = new Map(Object.entries(P).map(([id, p]) => [id, (p.title + ' ' + pathWords(p).join(' ')).toLowerCase()]));

/* Terms match at the start of a word, so "tent" finds the waiting tent but not "persistent" */
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const termRe = (w, loose) => new RegExp((loose ? '()' : '(^|[^a-z0-9])') + reEsc(w), 'i');
function terms(q){ return q.toLowerCase().split(/\s+/).filter(Boolean); }
function search(q, loose){
  const ts = terms(q);
  if (!ts.length) return [];
  const res = ts.map(w => termRe(w, loose));
  return IDX.map(e => {
    let s = 0;
    for (let i = 0; i < ts.length; i++){
      const inT = res[i].test(e.title), inB = res[i].test(e.body);
      if (!inT && !inB) return null;
      if (e.title.toLowerCase().startsWith(ts[i])) s += 7; else if (inT) s += 5;
      if (inB) s += 1;
    }
    if (e.kind === 'Pathway') s += .5;
    return {e, s};
  }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 14).map(r => r.e);
}
/* Word starts first; if nothing matches, fall back to matching inside words ("glycaemia") */
function find(q){ const r = search(q); return r.length ? {r, loose:false} : {r:search(q, true), loose:true}; }
function snippet(body, ts, loose){
  let at = -1;
  for (const w of ts){ const m = termRe(w, loose).exec(body); if (m){ const k = m.index + m[1].length; if (at < 0 || k < at) at = k; } }
  if (at < 0) return esc(body.slice(0, 120)) + (body.length > 120 ? '…' : '');
  const a = Math.max(0, at - 50), z = Math.min(body.length, at + 110);
  return highlight((a ? '…' : '') + body.slice(a, z) + (z < body.length ? '…' : ''), ts, loose);
}
function highlight(text, ts, loose){
  let h = esc(text);
  ts.filter(w => w.length > 1).forEach(w => {
    h = h.replace(new RegExp((loose ? '()' : '(^|[^a-z0-9;])') + '(' + reEsc(esc(w)) + ')', 'gi'), '$1<mark>$2</mark>');
  });
  return h;
}

/* ================= Saved and recent (this browser only) ================= */
const savedIds = () => store.get('gz-saved', []).filter(id => P[id]);
const isSaved = id => savedIds().includes(id);
function toggleSave(id){
  const s = savedIds(), on = !s.includes(id);
  store.set('gz-saved', on ? [id, ...s].slice(0, 24) : s.filter(x => x !== id));
  toast(on ? 'Saved to your list' : 'Removed from your list');
  refreshSaved();
  return on;
}
const recentIds = () => store.get('gz-recent', []).filter(id => P[id]);
function remember(id){ store.set('gz-recent', [id, ...recentIds().filter(x => x !== id)].slice(0, 6)); }
function rowItem(id, tag){
  const p = P[id], c = catOf(id);
  return `<li><a href="#${id}"><i class="jd ${c.j}" aria-hidden="true"></i><span class="rt"><b>${esc(p.title)}</b><small>${tag} · ${esc(metaOf(p))}</small></span>${dotsOf(outsOf(p))}${tag === 'Saved' ? svg('star', 'star', true) : svg('chev', 'chev')}</a></li>`;
}
function renderMine(){
  const s = savedIds(), r = recentIds().filter(id => !s.includes(id)).slice(0, 4);
  if (!s.length && !r.length){
    $('#mine').innerHTML = '<p class="empty">Nothing saved yet. Tap the star on any pathway to keep it here and in the menu. These are the most opened:</p><ul class="rows">' +
      ['renal-colic', 'dengue', 'asthma-zone', 'mau-admission'].filter(id => P[id]).map(id => rowItem(id, 'Popular')).join('') + '</ul>';
  } else {
    $('#mine').innerHTML = '<ul class="rows">' + s.slice(0, 6).map(id => rowItem(id, 'Saved')).join('') + r.map(id => rowItem(id, 'Recent')).join('') + '</ul>';
  }
}
function renderSideSaved(){
  const s = savedIds().slice(0, 6), el = $('#sidesaved');
  el.innerHTML = s.length ? '<div class="sgrp">Saved</div>' + s.map(id => `<a href="#${id}">${svg('star', '', true)}<span>${esc(P[id].title)}</span></a>`).join('') : '';
  el.hidden = !s.length;
}
function refreshSaved(){
  renderMine(); renderSideSaved(); renderLibf();
  const s = savedIds();
  $$('#libgrid [data-star]').forEach(b => { const on = s.includes(b.dataset.star); b.setAttribute('aria-pressed', on); b.innerHTML = svg('star', '', on); b.setAttribute('aria-label', (on ? 'Remove from saved: ' : 'Save: ') + P[b.dataset.star].title); });
  if (libF === 'saved') renderLib();
}

/* ================= Search palette ================= */
let palSel = 0, palFrom = null;
const ent = id => { const c = catOf(id); return {href:'#' + id, title:P[id].title, kind:kindOf(P[id]), meta:metaOf(P[id]), ic:c.ic, c:c.c, j:c.j}; };
const KIND_J = {Journey:'t-emerald', Number:'t-garnet', Tool:'t-teal', Video:'t-obsidian', Quiz:'t-plum', Update:'t-sapphire', Poster:'t-obsidian', About:'t-obsidian'};
const jewelOf = e => e.j || (e.ic === 'calc' ? 't-bronze' : KIND_J[e.kind] || 't-obsidian');
function palEntry(e, ts, loose){
  return `<li><a href="${e.href}" role="option" aria-selected="false"><span class="ic j ${jewelOf(e)}">${svg(e.ic)}</span><span class="rx"><span class="rt"><span>${ts ? highlight(e.title, ts, loose) : esc(e.title)}</span><span class="rk">${esc(e.kind)} · ${esc(e.meta)}</span></span>${ts ? `<span class="rs">${snippet(e.body, ts, loose)}</span>` : ''}</span></a></li>`;
}
function renderPal(){
  const q = $('#gq').value.trim(), body = $('#palbody');
  let h = '';
  if (!q){
    const s = savedIds(), r = recentIds().filter(id => !s.includes(id)).slice(0, 4);
    if (s.length) h += '<div class="grp">Saved</div><ul class="pal-res" role="listbox">' + s.map(id => palEntry(ent(id))).join('') + '</ul>';
    if (r.length) h += '<div class="grp">Recent</div><ul class="pal-res" role="listbox">' + r.map(id => palEntry(ent(id))).join('') + '</ul>';
    const quick = POPULAR.map(([href]) => IDX.find(e => e.href === href)).filter(Boolean);
    h += '<div class="grp">Quick open</div><ul class="pal-res" role="listbox">' + quick.map(e => palEntry(e)).join('') +
      palEntry({href:'#tools', title:'Discharge safety check', kind:'Tool', meta:'Shift tools', ic:'check', c:'c-meta'}) +
      palEntry({href:'#numbers', title:'Numbers to know', kind:'Number', meta:'Code Blue, Code Stroke, MAU, EMACC, IPR', ic:'phone', c:'c-abdo'}) + '</ul>';
  } else {
    const ts = terms(q), {r, loose} = find(q);
    h = r.length ? `<div class="grp">${r.length} result${r.length > 1 ? 's' : ''}${loose ? ' (partial matches)' : ''}</div><ul class="pal-res" id="gres" role="listbox">` + r.map(e => palEntry(e, ts, loose)).join('') + '</ul>'
      : `<div class="pal-none">Nothing found for “${esc(q)}”. Try a symptom, a diagnosis, a score, a ward or a drug.</div>`;
  }
  body.innerHTML = h;
  palSel = 0; markSel();
}
function palLinks(){ return $$('#palbody a'); }
function markSel(){ palLinks().forEach((a, i) => a.setAttribute('aria-selected', i === palSel ? 'true' : 'false')); const a = palLinks()[palSel]; if (a) a.scrollIntoView({block:'nearest'}); }
function openPal(){
  if (!$('#pal').hidden) return;
  palFrom = document.activeElement;
  closeDrawer(false);
  $('#pal').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#gq').value = ''; renderPal(); $('#gq').focus();
}
function closePal(restore){
  if ($('#pal').hidden) return;
  $('#pal').hidden = true; document.documentElement.style.overflow = '';
  if (restore && palFrom && palFrom.focus) palFrom.focus();
}

/* ================= Views ================= */
const VIEW_TITLE = {home:'', pathways:'Pathways', rules:'Rules and protocols', tools:'Shift tools', numbers:'Numbers', learn:'Learn the Green Zone', new:'What\'s new', poster:'Wall poster', about:'Sources and about', intro:'First-shift intro'};
let curView = null, curSub = null, routed = false;
const SCROLL = {};
function showView(name, sub){
  const from = curView, changed = name !== from;
  if (from && from !== 'run') SCROLL[from] = window.scrollY;
  if (changed){
    if (from === 'learn'){ pauseTour(); stopJourney(); }
    $$('#viewport > .view').forEach(v => { v.hidden = v.dataset.view !== name; });
    const el = $(`#viewport > .view[data-view="${name}"]`);
    el.classList.remove('enter');
    if (!REDUCED && routed){ void el.offsetWidth; el.classList.add('enter'); }
  }
  curView = name; curSub = sub || null;
  markNav();
  closeDrawer(false);
  if (name !== 'run') setTopTitle(VIEW_TITLE[name] || '');
  if (changed || name === 'run'){
    const back = from === 'run' && SCROLL[name] && ['pathways', 'rules', 'home', 'numbers'].includes(name);
    window.scrollTo(0, back ? SCROLL[name] : 0);
  }
  if (name === 'new'){ store.set('gz-seen', 7); const d = $('#snav .dotn'); if (d) d.hidden = true; }
  return changed;
}
function setTopTitle(t){ $('#toptitle').textContent = t; $('#topbar').classList.toggle('has-title', !!t); }
function markNav(){
  let v = curView;
  if (v === 'run') v = state.id && P[state.id].grp === 'rules' ? 'rules' : 'pathways';
  $$('#snav a').forEach(a => {
    const on = a.dataset.v === v && (!a.dataset.sub || a.dataset.sub === curSub);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  const tab = curView === 'run' ? 'pathways' : v;
  $$('#tabbar [data-tab]').forEach(t => { if (t.dataset.tab === tab) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current'); });
}
function showLearn(sub){
  const changed = showView('learn', sub);
  $$('#ltabs [data-lt]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lt === sub));
  $$('#v-learn [data-lp]').forEach(p => { p.hidden = p.dataset.lp !== sub; });
  if (sub !== 'tour') pauseTour();
  if (sub !== 'journey') stopJourney();
  setTopTitle({journey:'Patient journey', tour:'90-second tour', quiz:'Quick check'}[sub] || 'Learn');
  markNav();
  return changed;
}

/* Drawer menu on phones and tablets */
let drawerFrom = null;
function openDrawer(){
  const s = $('#side'); if (s.classList.contains('open')) return;
  drawerFrom = document.activeElement;
  s.classList.add('open'); $('#scrim').hidden = false; $('#menubtn').setAttribute('aria-expanded', 'true');
  document.documentElement.style.overflow = 'hidden';
  const a = $('#snav a[aria-current]') || $('#snav a');
  setTimeout(() => a.focus(), 40);
}
function closeDrawer(restore){
  const s = $('#side'); if (!s.classList.contains('open')) return;
  s.classList.remove('open'); $('#scrim').hidden = true; $('#menubtn').setAttribute('aria-expanded', 'false');
  document.documentElement.style.overflow = '';
  if (restore && drawerFrom && drawerFrom.focus) drawerFrom.focus();
}

/* ================= Home ================= */
let tipI = Math.floor(Date.now() / 864e5) % TIPS.length;
function tipSource(t){
  const s = TIP_SRC[TIPS.indexOf(t)];
  return s ? (s.includes(';') ? 'Sources: ' : 'Source: ') + s + '.' : '';
}
function renderTip(){
  const t = TIPS[tipI];
  $('#tip').innerHTML = `<p>${esc(t.t)}</p><p class="src">${esc(tipSource(t))}</p><div class="row"><a class="pill" href="${t.href}">${esc(t.l)}${svg('chev')}</a><button type="button" class="sm ghost" data-tipnext>Next pearl</button></div>`;
}
const RULE_IC = {admit:'chair', discharge:'review', advice:'phone'};
const RULE_T = {admit:'t-admit', discharge:'t-discharge', advice:'t-advice'};
/* The three rules: full tiles on the rules page, three rows on the home bento */
function ruleCards(){
  return RULES.map(r => `<article class="tile rule ${RULE_T[r.c]}"><div class="rh"><span class="ic">${svg(RULE_IC[r.c])}</span><h3>${esc(sentence(r.k))}</h3></div><p class="do">${esc(r.h)}</p>${r.chips ? `<div class="chips">${r.chips.map(c => `<span>${esc(c)}</span>`).join('')}</div>` : ''}<ul>${r.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul><div class="links">${r.links.map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}${svg('chev')}</a>`).join('')}</div></article>`).join('');
}
function ruleRows(){
  return RULES.map(r => `<a href="${r.links[0][0]}" style="--rc:var(--b-${r.c})"><i class="jd" style="--jc:var(--b-${r.c})" aria-hidden="true"></i><span><b>${esc(sentence(r.k))}</b><small>${esc(r.h)}${r.chips ? ': ' + esc(r.chips.join(', ')) : ''}</small></span>${svg('chev', 'chev')}</a>`).join('');
}
/* The zone tile: five stops, each opening what happens there and its rules */
let zSel = -1;
function zoneMap(anim){
  const el = $('#zmap');
  el.classList.toggle('anim', !!anim && !REDUCED);
  el.innerHTML = '<li class="zf" aria-hidden="true"></li>' + JOURNEY.map((s, i) => `<li><button type="button" class="${s.mo ? 'you' : ''}${s.optional ? ' maybe' : ''}" data-zs="${i}" aria-expanded="${i === zSel}" aria-controls="zx" style="--i:${i}"><span class="zd">${svg(s.ic)}</span><b>${esc(s.short)}</b><small>${esc(s.sub)}</small></button></li>`).join('');
  const x = $('#zx'), s = JOURNEY[zSel];
  x.hidden = !s;
  x.innerHTML = s ? `<h3>${zSel + 1}. ${esc(s.title)}</h3><ul>${s.items.slice(0, 4).map(i => `<li>${esc(i)}</li>`).join('')}</ul><div class="links">${[...(s.note ? [[s.note.href, s.note.k]] : []), ...s.links].slice(0, 4).map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}${svg('chev')}</a>`).join('')}<a class="pill" href="#journey-${zSel + 1}">Watch this stop${svg('chev')}</a></div>` : '';
}
function numTile(i){
  const n = NUMS[i], ext = /^ext\s/.test(n.val), v = n.val.replace(/^ext\s+/, '');
  const [title, rest] = n.lbl.split(/,\s*/), sub = rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : (n.note.match(/^[^.]{1,32}\./) || [''])[0].replace(/\.$/, '');
  return `<span class="lbl">${esc(title)}</span><div class="row"><span class="val" id="kn${i}">${ext ? '<small class="x">ext</small>' : ''}${esc(v)}</span>${n.copy ? `<button type="button" data-kcopy="${i}" data-quiet aria-label="Copy ${esc(n.lbl)}">${svg('copy')}</button>` : ''}</div>${n.href ? `<a class="tl nt-l" href="${n.href}" aria-label="${esc(n.link)}: ${esc(sub)}">${esc(sub)}${svg('chev')}</a>` : ''}`;
}
const DC_SHORT = ['Reassessed, results reviewed', 'Safety-net advice', 'Allergy asked', 'Last vital signs', 'Walks independently', 'Advice and follow-up'];
function statTiles(){
  const cats = CATS.filter(c => c.ids.length && !['flow', 'prot'].includes(c.k));
  $('#t-paths').innerHTML = `<div class="tile-h"><h3><a href="#pathways">Pathways</a></h3><span class="tag">${Object.keys(P).length}</span></div><ul class="gl">${cats.map(c => `<li><button type="button" data-gocat="${c.k}"><i class="jd ${c.j}" aria-hidden="true"></i><span>${esc(c.s)}</span><b>${c.ids.length}</b></button></li>`).join('')}</ul>`;
  const top = ['gz-rules', 'referral-rules', 'asthma-zone', 'mau-admission'].filter(id => P[id]);
  $('#t-rules').innerHTML = `<div class="tile-h"><h3><a href="#rules">Rules and protocols</a></h3><span class="tag">${FLOW_IDS.length + PROT_IDS.length}</span></div><ul class="gl">${top.map(id => `<li><a href="#${id}"><span>${esc(P[id].title)}</span>${svg('chev')}</a></li>`).join('')}</ul>`;
  $('#t-dc').innerHTML = `<div class="tile-h"><h3><a href="#tools">Discharge check</a></h3><span class="tag">${DC_STOP.length} stop signs</span></div><ul class="dcl">${DC_SHORT.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
  $('#t-calc').innerHTML = `<div class="tile-h"><h3><a href="#calc">Quick sums</a></h3>${svg('calc')}</div><ul class="thr"><li><span>Shock index</span><b>under 1</b></li><li><span>Pulse pressure</span><b>20 to 50</b></li><li><span>Heart rate</span><b>under 90</b></li></ul><p class="sub">Dengue SOP 2.0 discharge criteria. Child doses and adjusted weight too.</p>`;
  introTile();
}
function introTile(){
  const done = !!store.get('gz-intro', 0), t = $('#t-intro');
  t.classList.toggle('done', done);
  t.innerHTML = `<span class="pl">${svg(done ? 'restart' : 'play')}</span><span><h3>${done ? 'First-shift intro' : 'First shift?'}</h3><p>${done ? 'Four quick screens, any time you want them again.' : 'Four quick screens: search, pathways, the zone and the tools.'}</p></span>`;
}
function renderHome(){
  const d = new Date(), hr = d.getHours();
  const g = hr >= 5 && hr < 12 ? 'Good morning' : hr >= 12 && hr < 17 ? 'Good afternoon' : hr >= 17 && hr < 21 ? 'Good evening' : 'Night shift';
  let day = ''; try { day = d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'}); } catch(e){}
  $('#greet').textContent = g + (day ? ' · ' + day : '');
  if (zSel < 0 && matchMedia('(min-width: 761px)').matches) zSel = 1;
  zoneMap(true);
  $('#kn-a').innerHTML = numTile(0); $('#kn-b').innerHTML = numTile(1);
  $('#quick').innerHTML = POPULAR.map(([h, t]) => {
    const m = h.slice(1).match(/^([\w-]+?)(?:--(\w+))?$/), id = m && P[m[1]] ? m[1] : null;
    const kinds = id ? (m[2] ? endsFrom(P[id], m[2]) : outsOf(P[id])) : [], meta = id ? (m[2] ? P[id].title : metaOf(P[id])) : '';
    return `<a href="${h}"><b>${esc(t)}</b><small>${esc(meta)}</small>${dotsOf(kinds)}</a>`;
  }).join('');
  renderMine();
  statTiles();
  $('#keynums').innerHTML = [3, 4, 5].map(i => { const n = NUMS[i]; return `<div class="qnum"><div class="rt"><span>${esc(n.lbl)}</span><b id="kn${i}">${esc(n.val)}</b></div>${n.copy ? `<button type="button" class="sm" data-kcopy="${i}">${svg('copy')}<span class="bl">Copy</span></button>` : ''}</div>`; }).join('');
  renderTip();
  $('#rulecards').innerHTML = ruleRows();
  $('#newcard').innerHTML = `<ul>${V8.map(([t, , l]) => `<li><a href="${l[0][0]}">${esc(t)}</a></li>`).join('')}</ul><a class="pill" href="#new">Everything new, and what came from the drives${svg('chev')}</a>`;
}

/* ================= Pathway library ================= */
let libF = 'all', libCat = 'all';
function libCounts(){ const all = Object.keys(P); return {all:all.length, ebook:all.filter(id => P[id].grp !== 'rules').length, rules:all.filter(id => P[id].grp === 'rules').length, saved:savedIds().length}; }
function renderLibf(){
  const n = libCounts();
  $('#libf').innerHTML = [['all', 'All'], ['ebook', 'Ebook'], ['rules', 'Rules and protocols'], ['saved', 'Saved']].map(([k, t]) => `<button type="button" data-f="${k}" aria-pressed="${libF === k}">${t} <small>${n[k]}</small></button>`).join('');
}
function pcard(id){
  const p = P[id], c = catOf(id), on = isSaved(id);
  return `<article class="pc"><div class="pc-b"><h3><a href="#${id}">${esc(p.title)}</a></h3><div class="meta"><span>${esc(metaOf(p))}</span>${badgeOf(p)}</div>${p.lead ? `<p class="ld">${esc(p.lead)}</p>` : ''}<div class="outs-dots">${outsOf(p).map(k => `<span class="od ${k}">${OUT_LBL[k]}</span>`).join('')}</div></div><button type="button" class="pc-st" data-star="${id}" aria-pressed="${on}" aria-label="${(on ? 'Remove from saved: ' : 'Save: ') + esc(p.title)}">${svg('star', '', on)}</button></article>`;
}
function renderLib(){
  const q = $('#libq').value.trim(), s = savedIds();
  let match = () => true;
  if (q){
    const hit = loose => { const res = terms(q).map(w => termRe(w, loose)); return id => res.every(r => r.test(HAY.get(id))); };
    const strict = hit(false);
    match = Object.keys(P).some(strict) ? strict : hit(true);
  }
  const inF = id => libF === 'all' ? true : libF === 'ebook' ? P[id].grp !== 'rules' : libF === 'rules' ? P[id].grp === 'rules' : s.includes(id);
  const ids = Object.keys(P).filter(id => inF(id) && match(id));
  renderLibf();
  const cats = CATS.filter(c => c.ids.some(id => ids.includes(id)));
  if (libCat !== 'all' && !cats.some(c => c.k === libCat)) libCat = 'all';
  $('#libcats').innerHTML = `<button type="button" data-cat="all" aria-pressed="${libCat === 'all'}">${svg('grid')}<span>All topics</span><small>${ids.length}</small></button>` + cats.map(c => `<button type="button" class="${c.j}" data-cat="${c.k}" aria-pressed="${libCat === c.k}">${svg(c.ic)}<span>${esc(c.s)}</span><small>${c.ids.filter(id => ids.includes(id)).length}</small></button>`).join('');
  const shown = CATS.filter(c => libCat === 'all' || c.k === libCat).map(c => [c, c.ids.filter(id => ids.includes(id)).sort(byTitle)]).filter(([, l]) => l.length);
  let h;
  if (shown.length) h = shown.map(([c, l]) => `<section class="libsec ${c.j}" aria-label="${esc(c.t)}"><h2 class="lh">${svg(c.ic)}<span>${esc(c.t)}</span><small>${l.length}</small></h2><div class="grid">${l.map(pcard).join('')}</div></section>`).join('');
  else if (libF === 'saved' && !s.length) h = '<div class="empty">Nothing saved yet. Tap the star on any pathway to keep it here, on the home page and in the menu.</div>';
  else h = `<div class="empty">No pathway matches “${esc(q)}”. The search also covers rules, numbers, doses and the tour. <button type="button" class="sm" data-find>Search everything</button></div>`;
  $('#libgrid').innerHTML = h;
}

/* ================= Rules and protocols ================= */
function renderRules(){
  $('#rulecards2').innerHTML = ruleCards();
  const rl = id => { const p = P[id], c = catOf(id); return `<article class="rl"><i class="jd ${c.j}" aria-hidden="true"></i><div><h3><a href="#${id}">${esc(p.title)}</a></h3>${p.lead ? `<p>${esc(p.lead)}</p>` : ''}<div class="meta"><span>${esc(p.src || '')}</span>${badgeOf(p)}</div></div></article>`; };
  $('#rl-flow').innerHTML = FLOW_IDS.map(rl).join('');
  $('#rl-prot').innerHTML = PROT_IDS.map(rl).join('');
  $('#morerules').innerHTML = MORE_RULES.map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}</a>`).join('');
}

/* ================= Pathway runner ================= */
let state = {id:null, trail:[], cur:null}, ptabSel = null, land = false;

/* Find the answers that lead from the start of an entry to a node, for links such as #trauma-walkins--ct */
function pathTo(id, target){
  const p = P[id], prev = {[p.start]:null}, q = [p.start];
  while (q.length){
    const k = q.shift(); if (k === target) break;
    const n = p.nodes[k];
    const next = n.opts ? n.opts.map(o => [o[1], o[0]]) : n.next ? [[n.next, 'Done']] : [];
    for (const [to, label] of next) if (!(to in prev)){ prev[to] = [k, label]; q.push(to); }
  }
  if (!(target in prev)) return null;
  const trail = []; let k = target;
  while (prev[k]){ trail.unshift({node:prev[k][0], label:prev[k][1]}); k = prev[k][0]; }
  return trail;
}
function showPath(id, node){
  if (state.id !== id) ptabSel = null;
  state = {id, trail:[], cur:P[id].start};
  if (node && node !== state.cur){ const t = pathTo(id, node); if (t){ state.trail = t; state.cur = node; } }
  remember(id); renderMine();
  showView('run');
  land = false;
  draw(false);
  $('#v-run').setAttribute('aria-label', P[id].title);
  setTopTitle(P[id].title);
  markNav();
  if (routed) $('#run-title').focus({preventScroll:true});
}
function go(label, to){ state.trail.push({node:state.cur, label}); state.cur = to; land = true; draw(true); }
function backTo(i){ state.cur = state.trail[i].node; state.trail = state.trail.slice(0, i); land = false; draw(true); }
function restart(){ state.trail = []; state.cur = P[state.id].start; land = false; draw(true); }

/* How the entry can still end from here, in the ebook's outcome colours */
function endsHTML(p, n){
  const kinds = n.end ? [n.end] : endsFrom(p, state.cur);
  return `<div class="ends"><span>${n.end ? 'Ended in' : 'Can still end in'}</span>${kinds.map(k => `<span class="end" style="--oc:var(--b-${k})">${OUT_LBL[k]}</span>`).join('')}</div>`;
}
function draw(focus){
  const p = P[state.id], n = p.nodes[state.cur], c = catOf(state.id), saved = isSaved(state.id), steps = state.trail.length;
  const isRule = p.grp === 'rules';
  const nowText = n.end ? kindLabel(p, n.end) + ': ' + n.title : nodeText(n);
  const total = n.end ? Math.max(steps, 1) : steps + Math.max(stepsLeft(p, state.cur), 1);
  const bar = Array.from({length:total}, (_, i) => `<i class="${n.end ? 'fin' : i <= steps ? 'on' : ''}"></i>`).join('');
  const count = Object.keys(p.nodes).length;
  const about = (p.lead ? `<p class="lead">${esc(p.lead)}</p>` : '') + (p.see ? `<div class="see"><span>See also</span>${p.see.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}</a>`).join('')}</div>` : '');
  $('#run').innerHTML = `<div class="run-h">
      <div class="run-top"><a class="back" href="${isRule ? '#rules' : '#pathways'}">${svg('back')}<span class="bl-l">${isRule ? 'Rules and protocols' : 'All pathways'}</span><span class="bl-s">${isRule ? 'Rules' : 'Pathways'}</span></a>
        <div class="run-acts">
          <button type="button" class="ib" data-save aria-pressed="${saved}" aria-label="${saved ? 'Saved. Tap to remove from your list' : 'Save to your list'}" title="${saved ? 'Saved' : 'Save'}">${svg('star', '', saved)}</button>
          <button type="button" class="ib" data-map aria-label="See the whole pathway" title="Whole pathway">${svg('map')}</button>
          <button type="button" class="ib" data-link aria-label="Copy a link to this step" title="Copy link">${svg('link')}</button>
          <button type="button" class="ib" data-restart aria-label="Start again" title="Start again"${steps ? '' : ' disabled'}>${svg('restart')}</button>
        </div></div>
      <div class="run-cat"><span class="chip j ${c.j}">${svg(c.ic)}${esc(c.s)}</span><span class="chip">${esc(metaOf(p))}</span>${badgeOf(p)}</div>
      <h1 id="run-title" tabindex="-1">${esc(p.title)}</h1>
      ${about ? `<div class="about-t">${about}</div>` : ''}
    </div>
    <div class="run-grid">
      <aside class="rail-p" aria-label="Your route so far">
        <div class="rail-h"><h2>Your route</h2><span>${n.end ? 'Outcome' : 'Step ' + (steps + 1)}</span></div>
        <ol class="rp">${state.trail.map((t, i) => `<li class="done${i === 0 ? ' start' : ''}"><button type="button" data-back="${i}"><span class="q">${esc(nodeText(p.nodes[t.node]))}</span><span class="a"><span class="vh">You answered: </span>${esc(t.label)}</span></button></li>`).join('')}<li class="now${steps ? '' : ' start'}${n.end ? ' end-k' : ''}" aria-current="step"${n.end ? ` style="--oc:var(--b-${n.end})"` : ''}><span class="q">${esc(nowText)}</span></li></ol>
        ${endsHTML(p, n)}
        <button type="button" class="mapbtn" data-map><span>${svg('map')}Whole pathway</span><small>${count} steps</small></button>
        <p class="calc-note">Tap an earlier answer to change it. Keyboard: 1 to 9 to answer, Backspace to step back.</p>
      </aside>
      <div>
        <div class="strip">${steps ? `<div class="trailx" role="group" aria-label="Your answers so far"><span class="tlbl">Route</span>${state.trail.map((t, i) => `${i ? '<i aria-hidden="true"></i>' : ''}<button type="button" data-back="${i}" title="${esc(nodeText(p.nodes[t.node]))}"><span><span class="vh">Change: </span>${esc(t.label)}</span></button>`).join('')}</div>` : ''}${endsHTML(p, n)}</div>
        <div class="progress" aria-hidden="true"${n.end ? ` style="--oc:var(--b-${n.end})"` : ''}><span>${n.end ? `Outcome after ${steps} step${steps === 1 ? '' : 's'}` : 'Step ' + (steps + 1)}</span>${bar}</div>
        <div id="cur" tabindex="-1" class="cur-in">${card(n, p)}</div>
        ${about ? `<details class="about about-m"><summary>About this pathway</summary><div>${about}</div></details>` : ''}
        ${refTabs(p)}
      </div>
    </div>`;
  if (n.check) wireChecks(n);
  if (focus){
    const cur = $('#cur'); cur.focus({preventScroll:true});
    const strip = $('#run .strip'), target = strip && strip.offsetParent !== null ? strip : cur;
    const r = target.getBoundingClientRect(), topClear = innerWidth >= 1100 ? 16 : 76;
    if (r.top < topClear || r.top > innerHeight * .6) target.scrollIntoView({block:'start', behavior: REDUCED ? 'auto' : 'smooth'});
  }
  if (!$('#pmap').hidden) renderMap();
}

function card(n, p){
  const list = (items, cls) => items && items.length ? `<ul${cls ? ` class="${cls}"` : ''}>` + items.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  if (n.end){
    const ic = n.end === 'neutral' && p.grp === 'rules' ? 'rule' : OUT_IC[n.end];
    return `<article class="res ${n.end}${land ? ' land' : ''}"><div class="res-h"><span class="ic">${svg(ic)}</span><div><h2>${esc(n.title)}</h2><div class="res-k">${kindLabel(p, n.end)}</div></div></div>
      ${(n.items && n.items.length) || n.links || n.gap ? `<div class="res-b">${list(n.items, 'ticks')}
        ${n.links ? `<div class="links">${n.links.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : ''}
        ${n.gap ? `<div class="gap">${svg('info')}<span>${esc(n.gap)}</span></div>` : ''}</div>` : ''}
      <div class="res-f"><button type="button" data-restart>${svg('restart')}Start again</button><span class="grow"></span><button type="button" data-copyout>${svg('copy')}<span class="bl">Copy outcome</span></button>${p.advice && n.end === 'discharge' ? '<button type="button" class="primary" data-showadvice>Discharge advice</button>' : ''}</div></article>`;
  }
  if (n.step){
    const obs = n.kind === 'observe';
    return `<div class="stack"><div class="qc step${obs ? ' obs' : ''}"><div class="qh"><span class="ic">${svg(obs ? 'clock' : 'todo')}</span><h2><span class="vh">${obs ? 'Observation: ' : 'Do this: '}</span>${esc(n.step)}</h2></div>${obs ? '<p class="hint">Observation</p>' : ''}${list(n.items)}
      <div class="opts"><button type="button" class="opt sugg" data-next><kbd>1</kbd><span>Done, continue</span>${svg('chev', 'gt')}</button></div></div></div>`;
  }
  const sc = n.check === 'score';
  const pts = v => v > 0 ? '+' + v : '−' + Math.abs(v);
  const checks = n.check ? `<p class="hint">${sc ? 'Tick each item that applies. The score adds up as you go.' : n.check === 'all' ? 'Tick each criterion that is met. All must be met.' : 'Tick any that are present.'}</p><ul class="checks">` +
    n.items.map((i, k) => `<li><label><input type="checkbox" id="c${k}"><span>${sc ? esc(i[0]) + ` <b class="pts">(${pts(i[1])})</b>` : esc(i)}</span></label></li>`).join('') + '</ul>' + (sc ? '<p class="score">Score <b id="scv">0</b></p>' : '') : '';
  const info = n.info ? '<ul class="info">' + n.info.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  return `<div class="stack"><div class="qc"><h2>${esc(n.q)}</h2>
    ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}${info}${checks}
    <div class="opts">${n.opts.map(([l], k) => `<button type="button" class="opt" data-go="${k}">${k < 9 ? `<kbd>${k + 1}</kbd>` : ''}<span>${esc(l)}</span>${svg('chev', 'gt')}</button>`).join('')}</div></div></div>`;
}
function wireChecks(n){
  const boxes = $$('#cur .checks input'), btns = $$('#cur button.opt');
  const upd = () => {
    const c = boxes.filter(b => b.checked).length;
    let k = null;
    if (n.check === 'score'){ const sum = boxes.reduce((a, b, i) => a + (b.checked ? n.items[i][1] : 0), 0); $('#scv').textContent = sum; k = n.suggest(sum); }
    else if (n.check === 'all') k = c === boxes.length ? 0 : (c > 0 ? 1 : null);
    else k = c > 0 ? 0 : null;
    btns.forEach((b, i) => b.classList.toggle('sugg', i === k));
  };
  boxes.forEach(b => b.addEventListener('change', upd));
}

/* The whole pathway on one sheet: every step in order, your route lit, outcomes you can no longer reach dimmed */
let mapFrom = null;
function renderMap(){
  const p = P[state.id]; if (!p) return;
  const order = [], num = {}, q = [p.start];
  while (q.length){ const k = q.shift(); if (k in num || !p.nodes[k]) continue; num[k] = order.length + 1; order.push(k); const n = p.nodes[k]; (n.opts || []).forEach(o => q.push(o[1])); if (n.next) q.push(n.next); }
  const on = new Set(state.trail.map(t => t.node)), live = new Set(), lq = [state.cur];
  while (lq.length){ const k = lq.shift(); if (live.has(k) || !p.nodes[k]) continue; live.add(k); const n = p.nodes[k]; (n.opts || []).forEach(o => lq.push(o[1])); if (n.next) lq.push(n.next); }
  const ends = order.filter(k => p.nodes[k].end).length;
  $('#pm-title').textContent = p.title;
  $('#pm-sub').textContent = `${order.length} steps · ${ends} outcome${ends === 1 ? '' : 's'} · ${metaOf(p)}`;
  $('#pmbody').innerHTML = `<div class="legend" aria-label="Outcome colours">${OUT_ORDER.filter(k => order.some(x => p.nodes[x].end === k)).map(k => `<span class="od ${k}">${OUT_LBL[k]}</span>`).join('')}</div>
    <ol class="pm${state.trail.length ? ' trail' : ''}">${order.map(k => {
      const n = p.nodes[k], here = k === state.cur;
      const cls = [n.end ? 'en ' + n.end : n.step ? 'st' : 'qn', here ? 'now' : on.has(k) ? 'on' : live.has(k) ? 'live' : '', n.end && !live.has(k) && !here ? 'gone' : ''].join(' ');
      const href = k === p.start ? '#' + state.id : `#${state.id}--${k}`;
      const opts = n.opts ? n.opts.map(([l, to]) => `<span>${esc(l)}${svg('chev')}<b>${num[to]}</b></span>`).join('') : n.next ? `<span>Then${svg('chev')}<b>${num[n.next]}</b></span>` : '';
      return `<li class="${cls}"><span class="d" aria-hidden="true">${n.end ? svg(OUT_IC[n.end]) : num[k]}</span><a href="${href}"${here ? ' aria-current="step"' : ''}><span class="t">${esc(n.end ? n.title : nodeText(n))}</span><span class="k">${n.end ? esc(kindLabel(p, n.end)) : (n.step ? 'Step ' : 'Question ') + num[k]}${here ? ' · you are here' : ''}</span>${opts ? `<span class="o">${opts}</span>` : ''}</a></li>`;
    }).join('')}</ol>`;
}
function openMap(){
  if (!state.id || !$('#pmap').hidden) return;
  mapFrom = document.activeElement;
  renderMap();
  $('#pmap').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#pmclose').focus();
  const now = $('#pmbody li.now'); if (now) now.scrollIntoView({block:'center'});
}
function closeMap(restore){
  if ($('#pmap').hidden) return;
  $('#pmap').hidden = true; document.documentElement.style.overflow = '';
  if (restore && mapFrom && mapFrom.focus) mapFrom.focus();
}
/* The reference under the card: discharge advice, concerns, department notes, tables and references, as tabs */
function tabsOf(p){
  const T = [], li = a => `<li>${esc(a)}</li>`;
  const table = t => `<div class="tbl"><table><thead><tr>${t.head.map(x => `<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (p.advice) T.push({k:'advice', l:'Discharge advice', cls:'t-advice', html:`<ol id="advlist">${p.advice.map(li).join('')}</ol><div class="pbar"><button type="button" class="sm" data-copyadvice>${svg('copy')}<span class="bl">Copy advice</span></button></div>`});
  if (p.concerns) T.push({k:'concerns', l:'Practical concerns', cls:'t-concern', html:`<ul>${p.concerns.map(li).join('')}</ul><p class="hint">Consider admission if any are present.</p>`});
  if (p.dept) T.push({k:'dept', l:'Department notes', cls:'t-dept', html:p.dept.map(d => `<div class="deptnote"><h4>${esc(d.h)}</h4><p class="src">${esc(d.src)}</p>${d.items ? `<ul>${d.items.map(li).join('')}</ul>` : ''}${d.table ? table(d.table) : ''}</div>`).join('') + '<p class="hint">Not in the ebook: supplementary notes from department documents, with their sources.</p>'});
  (p.tables || []).forEach((t, i) => T.push({k:'t' + i, l:t.title, html:table(t)}));
  if (p.refs) T.push({k:'refs', l:'References', html:`<ol class="refs">${p.refs.map(li).join('')}</ol>`});
  return T;
}
function refTabs(p){
  const T = tabsOf(p); if (!T.length) return '';
  if (!T.some(t => t.k === ptabSel)) ptabSel = T[0].k;
  return `<section class="ptab" id="ptab" aria-label="Reference for this pathway"><div class="ptab-bar" role="tablist" aria-label="Reference">${T.map(t => `<button type="button" role="tab" id="tb-${t.k}" aria-controls="tp-${t.k}" aria-selected="${t.k === ptabSel}" tabindex="${t.k === ptabSel ? 0 : -1}" class="${t.cls || ''}" data-pt="${t.k}"><span>${esc(t.l)}</span></button>`).join('')}</div>` +
    T.map(t => `<div class="ptab-p" role="tabpanel" id="tp-${t.k}" aria-labelledby="tb-${t.k}" tabindex="0"${t.k === ptabSel ? '' : ' hidden'}>${t.html}</div>`).join('') + '</section>';
}
function selectTab(k, focus){
  ptabSel = k;
  $$('#ptab [role="tab"]').forEach(b => { const on = b.dataset.pt === k; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  $$('#ptab [role="tabpanel"]').forEach(x => { x.hidden = x.id !== 'tp-' + k; });
}

/* ================= Shift tools ================= */
function renderDcheck(){
  const li = (it, i, stop) => `<li><label><input type="checkbox" data-dc="${stop ? 's' : 'a'}${i}"><span>${esc(it[0])}<small>${stop ? svg('chev') : ''}${esc(it[1])}</small></span></label></li>`;
  $('#dcheck').innerHTML = `<div class="tile t-teal tool-h"><div class="row"><span class="ic">${svg('check')}</span><h2>Discharge safety check</h2></div><p>Tick through it before the patient leaves. It is not saved, and Clear resets it.</p><div class="dc-route" id="dcr" aria-hidden="true"><span class="fill"></span>${DC_ALL.map(() => '<i></i>').join('')}</div></div>
    <div class="tool-b"><h3 class="dc-group">Every patient</h3><ul class="dc-list">${DC_ALL.map((it, i) => li(it, i)).join('')}</ul>
    <h3 class="dc-group">${svg('stop')}Tick if it applies: stop and act</h3><ul class="dc-list stop">${DC_STOP.map((it, i) => li(it, i, true)).join('')}</ul>
    <div class="verdict" id="verdict" aria-live="polite"></div>
    <div class="foot"><span>From the reassessment memo (Jul 2024) and Million Ringgit Habits (ETD HKL)</span><button type="button" class="sm" id="dcclear">${svg('restart')}Clear</button></div></div>`;
  const upd = () => {
    const a = DC_ALL.filter((_, i) => $(`[data-dc="a${i}"]`).checked).length;
    const stops = DC_STOP.filter((_, i) => $(`[data-dc="s${i}"]`).checked);
    const v = $('#verdict'), r = $('#dcr');
    r.classList.toggle('stop', stops.length > 0);
    r.style.setProperty('--w', (stops.length ? 100 : a ? (a - 1) / (DC_ALL.length - 1) * 100 : 0) + '%');
    $$('#dcr i').forEach((x, i) => x.classList.toggle('on', stops.length > 0 || i < a));
    if (stops.length){ v.className = 'verdict stop'; v.innerHTML = `Not yet: ${stops.length} thing${stops.length > 1 ? 's' : ''} to act on first` + stops.map(s => `<p>${esc(s[0])}: <a href="${s[2]}">${esc(s[1])}</a></p>`).join(''); }
    else if (a === DC_ALL.length){ v.className = 'verdict ok'; v.innerHTML = 'All checks done: ready to discharge<p>Document the safety-net advice and the follow-up you arranged.</p>'; }
    else { v.className = 'verdict'; v.textContent = `${a} of ${DC_ALL.length} checks done`; }
  };
  $('#dcheck').addEventListener('change', upd);
  $('#dcclear').addEventListener('click', () => { $$('#dcheck input').forEach(i => { i.checked = false; }); upd(); });
  upd();
}

/* Quick sums: plain arithmetic from the ebook and department posters, each shown with its source */
const CALCS = {
  dengue:{t:'Shock index', fields:[['hr','Heart rate','/min'],['sbp','Systolic BP','mmHg'],['dbp','Diastolic BP','mmHg']],
    note:'Dengue SOP 2.0 discharge criteria: pulse pressure over 20 and under 50 mmHg, HR under 90 (allow for temperature), shock index under 1. In the ebook pathway a shock index over 1 is a sign of shock.',
    run(v){
      const out = [];
      if (v.hr && v.sbp){ const si = v.hr / v.sbp; out.push(['Shock index (HR ÷ SBP)', si.toFixed(2), si < 1 ? 'good' : si > 1 ? 'bad' : 'warn', si < 1 ? 'Under 1: meets the discharge criterion' : si > 1 ? 'Over 1: a sign of shock in the ebook pathway' : 'Exactly 1: not under 1, so the discharge criterion is not met', {min:0, max:2, v:si, bands:[[0, 1, 'good'], [1, 2, 'bad']]}]); }
      if (v.sbp && v.dbp){ const pp = v.sbp - v.dbp; out.push(['Pulse pressure (SBP − DBP)', pp + ' mmHg', pp > 20 && pp < 50 ? 'good' : 'warn', pp <= 20 ? 'Narrow: 20 mmHg or less' : pp >= 50 ? 'Wide: 50 mmHg or more' : 'Between 20 and 50: meets the criterion', {min:0, max:80, v:pp, bands:[[0, 20, 'warn'], [20, 50, 'good'], [50, 80, 'warn']]}]); }
      if (v.hr) out.push(['Heart rate', v.hr + '/min', v.hr < 90 ? 'good' : 'warn', v.hr < 90 ? 'Under 90: meets the criterion' : '90 or more: allow for temperature, and reassess', {min:40, max:160, v:v.hr, bands:[[40, 90, 'good'], [90, 160, 'warn']]}]);
      return out.length ? out : null;
    }},
  kids:{t:'Child doses', fields:[['wt','Weight','kg'],['age','Age','',[['u6','Under 6 years'],['o6','Over 6 years']]]],
    note:'From the department\'s paediatric asthma posters and Paediatrics 101 notes. Check doses against the Paediatric Protocols and the child\'s condition.',
    run(v){
      if (!v.wt) return null;
      if (v.wt < 2 || v.wt > 80) return [['Weight', 'Enter 2 to 80 kg', 'warn', '']];
      const w = v.wt, r1 = x => Math.round(x * 10) / 10, u6 = v.age !== 'o6';
      const pred = r1(w);
      return [
        ['Prednisolone 1 mg/kg/day for 3 days', pred + ' mg', pred > 30 ? 'warn' : 'good', pred > 30 ? 'Over the poster\'s maximum of 30–40 mg a day: give no more than that' : 'Asthma, once daily'],
        ['Salbutamol MDI with spacer', u6 ? '4–6 puffs' : '8–10 puffs', 'good', 'Mild or moderate asthma. Severe: add ipratropium ' + (u6 ? '4' : '8') + ' puffs, 3 cycles in the first hour'],
        ['Dexamethasone (croup)', r1(0.3 * w) + '–' + r1(0.6 * w) + ' mg', 'good', '0.3–0.6 mg/kg'],
        ['Nebulised adrenaline 1:1000 (croup)', r1(Math.min(0.5 * w, 5)) + ' ml', 'good', '0.5 ml/kg, max 5 ml'],
        ['ORS after each loose stool', Math.round(10 * w) + ' ml', 'good', '10 ml/kg'],
        ['ORS for moderate dehydration', Math.round(75 * w) + ' ml over 4 h', 'good', '75 ml/kg, about ' + Math.round(75 * w / 4) + ' ml an hour']
      ];
    }},
  weight:{t:'Adjusted weight', fields:[['sex','Sex','',[['f','Female'],['m','Male']]],['ht','Height','cm'],['wt','Weight','kg']],
    note:'From the ebook\'s dengue table: for an obese patient (BMI over 27.5) use the adjusted body weight. Ideal weight: female 45.5 kg, male 50 kg, plus 0.91 × (height − 152 cm). Adjusted = ideal + 0.4 × (actual − ideal).',
    run(v){
      if (!v.ht || !v.wt) return null;
      if (v.ht < 120 || v.ht > 220 || v.wt < 20 || v.wt > 300) return [['Check the numbers', 'Height 120–220 cm, weight 20–300 kg', 'warn', '']];
      const bmi = v.wt / Math.pow(v.ht / 100, 2), ibw = (v.sex === 'm' ? 50 : 45.5) + 0.91 * (v.ht - 152), adj = ibw + 0.4 * (v.wt - ibw);
      return [
        ['BMI', bmi.toFixed(1) + ' kg/m²', bmi > 27.5 ? 'warn' : 'good', bmi > 27.5 ? 'Over 27.5: use the adjusted body weight' : '27.5 or less: use the actual weight', {min:15, max:45, v:bmi, bands:[[15, 27.5, 'good'], [27.5, 45, 'warn']]}],
        ['Ideal body weight', ibw.toFixed(1) + ' kg', 'good', ''],
        ['Adjusted body weight', adj.toFixed(1) + ' kg', bmi > 27.5 ? 'good' : 'warn', bmi > 27.5 ? 'Use this weight for dengue fluid calculations' : 'Not needed at this BMI']
      ];
    }}
};
let calcTab = 'dengue';
/* A scale under a result: the bands are the thresholds already given in the note above */
const scaleOf = s => {
  if (!s) return '';
  const x = Math.max(0, Math.min(100, (s.v - s.min) / (s.max - s.min) * 100));
  return `<div class="scale" aria-hidden="true"><div class="bar">${s.bands.map(([a, b, c]) => `<s class="${c}" style="flex:${b - a}"></s>`).join('')}</div><span class="pin" style="--x:${x.toFixed(1)}%"></span></div>`;
};
function renderCalc(){
  const c = CALCS[calcTab], box = $('#calcbox');
  const field = ([k, l, unit, choices]) => choices
    ? `<div class="field"><label for="cf-${k}">${l}</label><select id="cf-${k}" data-k="${k}">${choices.map(([v, t]) => `<option value="${v}">${t}</option>`).join('')}</select></div>`
    : `<div class="field"><label for="cf-${k}">${l}${unit ? ' (' + unit + ')' : ''}</label><input id="cf-${k}" data-k="${k}" type="number" inputmode="decimal" min="0" step="any" autocomplete="off"></div>`;
  box.innerHTML = `<div class="tile t-bronze tool-h"><div class="row"><span class="ic">${svg('calc')}</span><h2>Quick sums</h2></div><p>Arithmetic only, from the ebook and department posters. Nothing you type is saved.</p></div>
    <div class="tool-b"><div class="seg" role="group" aria-label="Calculator">${Object.entries(CALCS).map(([k, x]) => `<button type="button" data-ct="${k}" aria-pressed="${k === calcTab}">${x.t}</button>`).join('')}</div>
    <div class="fields">${c.fields.map(field).join('')}</div><div class="outs" id="couts" aria-live="polite"></div><p class="calc-note">${esc(c.note)}</p></div>`;
  const upd = () => {
    const v = {};
    box.querySelectorAll('[data-k]').forEach(el => { v[el.dataset.k] = el.tagName === 'SELECT' ? el.value : (el.value === '' ? 0 : parseFloat(el.value)); });
    const out = c.run(v);
    $('#couts').innerHTML = out ? out.map(([l, val, cls, em, sc]) => `<div class="out ${cls}"><span>${esc(l)}</span><b>${esc(val)}</b>${em ? `<em>${esc(em)}</em>` : ''}${scaleOf(sc)}</div>`).join('') : '<div class="out"><span>Fill in the boxes to see the result</span></div>';
  };
  box.oninput = upd; box.onchange = upd;
  upd();
}

/* ================= Numbers ================= */
const NUM_JI = {0:'t-garnet', 1:'t-obsidian', 2:'t-garnet'};
const NUM_J = {'Emergencies':'t-obsidian', 'Admission and follow-up':'t-sapphire', 'Imaging':'t-teal', 'Infection and protection':'t-plum'};
function renderNums(){
  const groups = [...new Set(NUMS.map(n => n.g))];
  $('#nums').innerHTML = groups.map(g => `<h2 class="num-group">${esc(g)}</h2><div class="nums">` + NUMS.map((n, i) => n.g !== g ? '' :
    `<article class="tile num-card ${NUM_JI[i] || NUM_J[g] || 't-obsidian'}"><span class="lbl">${esc(n.lbl)}</span><span class="val" id="nv${i}">${esc(n.val)}</span><p>${esc(n.note)}</p>
      <div class="row">${n.copy ? `<button type="button" data-copy="${i}">${svg('copy')}<span class="bl">Copy</span></button>` : ''}${n.href ? `<a class="pill" href="${n.href}">${esc(n.link)}${svg('chev')}</a>` : ''}<span class="src">${esc(n.src)}</span></div></article>`).join('') + '</div>').join('');
}

/* ================= Journey: looping clips and narration ================= */
let step = 0, playAll = false, stageVisible = false, clipsOn = false;
const voice = new Audio(); voice.preload = 'none';
function renderJourney(anim){
  $('#rail').innerHTML = JOURNEY.map((s, i) => `<li><button type="button" class="${s.optional ? 'maybe' : ''}" data-i="${i}" ${i === step ? 'aria-current="step"' : ''} aria-label="Stop ${i + 1}: ${esc(s.short)}${s.optional ? ', only if needed' : ''}"><span class="n">${svg(s.ic)}</span><b>${esc(s.short)}</b><small>${esc(s.sub)}</small></button></li>`).join('');
  const s = JOURNEY[step], stage = $('#stage');
  const nc = s.note && s.note.c ? ` style="--c:var(--${s.note.c});--cs:var(--${s.note.c}-soft)"` : '';
  stage.innerHTML = `<figure><video id="jclip" muted loop playsinline preload="none" poster="${s.img}" width="1280" height="720" aria-label="${esc(s.alt)}"></video>
      <div class="cap" id="jcap" hidden></div>
      <div class="ctl"><button type="button" class="mbtn" id="jlisten" aria-pressed="false">${svg('volume')}<span class="bl">Listen</span></button><button type="button" class="mbtn" id="jclipbtn">${svg(clipsOn ? 'pause' : 'play')}<span class="bl">${clipsOn ? 'Pause clip' : 'Play clip'}</span></button></div></figure>
    <div class="txt">
      <h3>${esc(s.title)}</h3>
      <span class="who${s.mo ? ' mo' : ''}${s.optional ? ' optional' : ''}">${esc(s.who)}</span>
      <ul>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      ${s.note ? `<a class="note" href="${s.note.href}"${nc}><b>${esc(s.note.k)}</b>${esc(s.note.t)}</a>` : ''}
      ${s.links ? `<div class="links">${s.links.map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : ''}
      <div class="stage-nav"><span>Stop ${step + 1} of ${JOURNEY.length}</span><div>
        <button type="button" id="jprev"${step === 0 ? ' disabled' : ''}>${svg('back')}Back</button>
        <button type="button" id="jnext" class="${step < JOURNEY.length - 1 ? 'primary' : ''}"${step === JOURNEY.length - 1 ? ' disabled' : ''}>Next stop${svg('chev')}</button></div></div>
    </div>`;
  if (anim){ stage.classList.remove('swap'); void stage.offsetWidth; stage.classList.add('swap'); }
  const v = $('#jclip');
  v.src = s.clip;
  if (clipsOn && stageVisible) v.play().catch(() => {});
  $('#jclipbtn').onclick = () => setJourneyClip(!clipsOn);
  $('#jlisten').onclick = () => { if (!voice.paused && voice.dataset.i == step){ stopVoice(); setPlayAll(false); } else listen(step); };
  $('#jprev').onclick = () => { setPlayAll(false); stopVoice(); setStep(step - 1, true); };
  $('#jnext').onclick = () => { setPlayAll(false); stopVoice(); setStep(step + 1, true); };
}
function setJourneyClip(on){
  clipsOn = on;
  const v = $('#jclip'), b = $('#jclipbtn');
  if (b) b.innerHTML = svg(on ? 'pause' : 'play') + `<span class="bl">${on ? 'Pause clip' : 'Play clip'}</span>`;
  if (v){ if (on && stageVisible) v.play().catch(() => {}); else v.pause(); }
}
function setStep(i, anim){ step = Math.max(0, Math.min(JOURNEY.length - 1, i)); renderJourney(anim); }
function setListen(on){ const b = $('#jlisten'); if (!b) return; b.innerHTML = svg(on ? 'pause' : 'volume') + `<span class="bl">${on ? 'Stop' : 'Listen'}</span>`; b.setAttribute('aria-pressed', on ? 'true' : 'false'); }
function setPlayAll(on){ playAll = on; $('#playall').innerHTML = svg(on ? 'pause' : 'play') + (on ? 'Stop playing' : 'Play all stops'); }
/* Show the narration as captions, one sentence at a time, timed by sentence length */
function listen(i){
  const s = JOURNEY[i], parts = s.say.match(/[^.?!]+[.?!]+/g) || [s.say], total = s.say.length;
  voice.pause(); voice.src = s.audio; voice.dataset.i = i; voice.currentTime = 0;
  const cap = $('#jcap');
  voice.ontimeupdate = () => {
    if (!voice.duration) return;
    const at = voice.currentTime / voice.duration * total; let acc = 0, k = 0;
    for (; k < parts.length - 1; k++){ acc += parts[k].length; if (at < acc) break; }
    const c = $('#jcap'); if (c) c.textContent = parts[k].trim();
  };
  voice.onended = () => {
    const c = $('#jcap'); if (c) c.hidden = true; setListen(false);
    if (playAll && i < JOURNEY.length - 1){ setStep(i + 1, true); setTimeout(() => { if (playAll) listen(i + 1); }, 350); }
    else setPlayAll(false);
  };
  voice.play().then(() => {
    if (cap){ cap.hidden = false; cap.textContent = parts[0].trim(); }
    setListen(true);
  }).catch(() => { toast('The narration could not play here'); setPlayAll(false); });
}
function stopVoice(){ voice.pause(); const cap = $('#jcap'); if (cap) cap.hidden = true; setListen(false); }
function stopJourney(){ if (playAll) setPlayAll(false); stopVoice(); const v = $('#jclip'); if (v) v.pause(); }

/* ================= Tour: language, chapters, transcript, speed, resume ================= */
/* The explainer in English or Bahasa Melayu: each has its own film, cover, chapters, transcript and resume point */
const TOUR_LANGS = {
  en:{src:'media/green-zone-explainer-720p.mp4', cover:'media/explainer-poster.webp', ch:CHAPTERS, cap:CAPTIONS, key:'gz-tour-pos',
      h:'The Green Zone <span>in 90 seconds</span>', d:'1 minute 29 seconds, narrated, with captions on screen. Jump to a chapter, or tap a line of the transcript to hear it.', resume:'Resume at '},
  ms:{src:'media/green-zone-explainer-ms-720p.mp4', cover:'media/explainer-ms-poster.webp', ch:CHAPTERS_MS, cap:CAPTIONS_MS, key:'gz-tour-pos-ms',
      h:'Zon Hijau <span>dalam 2 minit</span>', d:'1 minit 35 saat, dengan narasi dan sari kata pada skrin. Pilih satu bab, atau ketik satu baris transkrip untuk mendengarnya.', resume:'Sambung pada '}
};
function pauseTour(){ const v = $('#vid'); if (v && !v.paused) v.pause(); }
function setupTour(){
  const v = $('#vid'); let retried = false, lastSave = 0, lastLn = -1, lastCh = -1;
  let L = store.get('gz-tour-lang', 'en'); if (!TOUR_LANGS[L]) L = 'en';
  const sp = $('#speeds');
  [0.75, 1, 1.25, 1.5].forEach(r => sp.insertAdjacentHTML('beforeend', `<button type="button" data-rate="${r}" aria-pressed="${r === 1}">${r}×</button>`));
  /* Draw the chosen language; with load, swap the film too (preload is none, so nothing downloads until play) */
  const drawLang = load => {
    const T = TOUR_LANGS[L];
    $('#chaps').innerHTML = T.ch.map(([t, l], i) => `<button type="button" data-t="${t}" data-ch="${i}"><span>${fmt(t)}</span>${esc(l)}</button>`).join('');
    $('#tscript').innerHTML = T.cap.map(([t, l], i) => `<li><button type="button" data-t="${t}" data-ln="${i}"><span>${fmt(t)}</span>${esc(l)}</button></li>`).join('');
    ['#chaps', '#tscript', '#tourh', '#vdesc'].forEach(s => $(s).setAttribute('lang', L));
    $('#tourh').innerHTML = T.h; $('#vdesc').textContent = T.d;
    $$('#tlang [data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === L));
    const old = $('#resume'); if (old) old.remove();
    const pos = store.get(T.key, 0);
    if (pos > 3) sp.insertAdjacentHTML('beforeend', `<button type="button" data-t="${pos}" id="resume">${T.resume}${fmt(pos)}</button>`);
    lastLn = -1; lastCh = -1;
    if (load){ v.pause(); retried = false; $('#vmsg').hidden = true; v.setAttribute('poster', T.cover); v.src = T.src; v.load(); }
  };
  drawLang(L !== 'en');
  const seek = t => { const goTo = () => { try { v.currentTime = t; } catch(e){} v.play().catch(() => {}); }; if (v.readyState >= 1) goTo(); else { v.addEventListener('loadedmetadata', goTo, {once:true}); v.load(); } };
  $('#tourbox').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.lang){ if (b.dataset.lang !== L && TOUR_LANGS[b.dataset.lang]){ L = b.dataset.lang; store.set('gz-tour-lang', L); drawLang(true); } }
    else if (b.dataset.rate){ v.playbackRate = v.defaultPlaybackRate = +b.dataset.rate; $$('#speeds [data-rate]').forEach(x => x.setAttribute('aria-pressed', x === b)); }
    else if (b.dataset.t !== undefined){ seek(+b.dataset.t); if (b.id === 'resume') b.remove(); }
  });
  v.addEventListener('timeupdate', () => {
    const t = v.currentTime, T = TOUR_LANGS[L];
    let ln = -1; T.cap.forEach(([s], i) => { if (t >= s - .05) ln = i; });
    let ch = 0; T.ch.forEach(([s], i) => { if (t >= s) ch = i; });
    if (ln !== lastLn){ $$('#tscript button').forEach((b, i) => b.setAttribute('aria-current', i === ln)); const a = $(`#tscript [data-ln="${ln}"]`), box = $('#tscript'); if (a && !v.paused) box.scrollTop = a.offsetTop - box.clientHeight / 2; lastLn = ln; }
    if (ch !== lastCh){ $$('#chaps button').forEach((b, i) => b.setAttribute('aria-current', i === ch)); lastCh = ch; }
    if (Math.abs(t - lastSave) > 2){ lastSave = t; store.set(T.key, v.duration && t > v.duration - 3 ? 0 : Math.floor(t)); }
  });
  v.addEventListener('ended', () => store.set(TOUR_LANGS[L].key, 0));
  /* If this browser cannot stream the MP4, load it whole and try again */
  v.addEventListener('error', async () => {
    if (retried){ $('#vmsg').hidden = false; return; }
    retried = true;
    try {
      const r = await fetch(TOUR_LANGS[L].src); if (!r.ok) throw new Error(r.status);
      v.src = URL.createObjectURL(await r.blob()); v.load(); v.play().catch(() => {});
    } catch(e){ $('#vmsg').hidden = false; }
  });
}

/* ================= Quick check ================= */
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const QKEY = 'gz-quiz-v7';
let quiz;
function startQuiz(){ quiz = {i:0, score:0, missed:[], answered:false, opts:QUIZ.map(q => shuffle(q.o.map((t, k) => ({t, ok:k === q.a}))))}; renderQuiz(); }
function renderQuiz(focus){
  const box = $('#quizbox'), n = QUIZ.length, best = store.get(QKEY, null);
  if (quiz.i >= n){
    if (best === null || quiz.score > best) store.set(QKEY, quiz.score);
    box.innerHTML = `<div class="q-card" tabindex="-1" id="qcard"><div class="q-top"><span>Done</span><span>${best !== null ? 'Best before: ' + best + ' of ' + n : 'First try'}</span></div>
      <div class="q-prog"><i style="width:100%"></i></div><div class="q-score"><span>${quiz.score}</span> of ${n}</div>
      <p>${quiz.score === n ? 'Every answer right. You know the zone.' : quiz.score >= Math.ceil(n * .7) ? 'Good. Read the ones you missed:' : 'Worth a second look. Read the ones you missed:'}</p>
      ${quiz.missed.length ? `<div class="links">${quiz.missed.map(k => `<a class="pill" href="${QUIZ[k].href}">${esc(QUIZ[k].q.length > 60 ? QUIZ[k].q.slice(0, 58) + '…' : QUIZ[k].q)}</a>`).join('')}</div>` : ''}
      <div class="q-nav"><span></span><button type="button" class="primary" data-q="again">${svg('restart')}Try again</button></div></div>`;
  } else {
    const q = QUIZ[quiz.i], os = quiz.opts[quiz.i];
    box.innerHTML = `<div class="q-card" tabindex="-1" id="qcard"><div class="q-top"><span>Question ${quiz.i + 1} of ${n}</span><span>${quiz.score} right${best !== null ? ' · best ' + best : ''}</span></div>
      <div class="q-prog"><i style="width:${quiz.i / n * 100}%"></i></div><h3>${esc(q.q)}</h3>
      <div class="q-opts">${os.map((o, k) => `<button type="button" data-o="${k}"><b>${'ABCD'[k]}</b><span>${esc(o.t)}</span></button>`).join('')}</div><div id="qwhy"></div></div>`;
  }
  if (focus) $('#qcard').focus({preventScroll:true});
}

/* ================= First-shift intro ================= */
let introI = 0;
const INTRO_J = ['t-emerald', 't-sapphire', 't-plum', 't-teal'];
function renderIntro(focus){
  const s = INTRO[introI], last = introI === INTRO.length - 1;
  $('#introbox').innerHTML = `<article class="tile t-sapphire intro-card"><div class="intro-art"><svg class="art" viewBox="0 0 320 220" role="img" aria-label="${esc(s.h)}">${ART[s.art]}</svg></div>
    <div class="intro-txt"><ol class="intro-steps" aria-label="Screen ${introI + 1} of ${INTRO.length}">${INTRO.map((_, i) => `<li class="${i <= introI ? 'on' : ''}"></li>`).join('')}</ol>
      <h2 id="h-intro">${esc(s.h)}</h2><p>${esc(s.p)}</p>
      <div class="intro-nav"><button type="button" data-intro="back"${introI ? '' : ' hidden'}>${svg('back')}Back</button><span>${introI + 1} of ${INTRO.length}</span><button type="button" class="go" data-intro="${last ? 'done' : 'next'}">${last ? 'Start using the guide' : 'Next'}${svg('chev')}</button></div></div></article><nav class="intro-index" aria-label="Intro screens">${INTRO.map((x, i) => `<button type="button" class="tile ${INTRO_J[i]}" data-intro-go="${i}"${i === introI ? ' aria-current="step"' : ''}><b>${i + 1}</b><span>${esc(x.h)}</span></button>`).join('')}</nav>`;
  if (focus) $('#introbox').focus({preventScroll:true});
}
function introStep(d){ introI = Math.max(0, Math.min(INTRO.length - 1, introI + d)); renderIntro(true); }
function introDone(){ store.set('gz-intro', 1); introTile(); introI = 0; location.hash = '#home'; }

/* ================= What's new from the drives ================= */
function renderDrive(){
  const count = s => DRIVE.filter(d => d[1] === s).length;
  const newIds = Object.keys(P).filter(id => P[id].isnew).length, upd = Object.keys(P).filter(id => P[id].dept || P[id].upd).length;
  const row = ([f, txt, links]) => `<li><span class="f">${esc(f)}</span><div><p>${esc(txt)}</p>${links.length ? `<div class="links">${links.map(([href, l]) => `<a class="pill" href="${href}">${esc(l)}${svg('chev')}</a>`).join('')}</div>` : ''}</div></li>`;
  let h = `<div class="stats"><div class="tile t-sapphire"><b>${newIds}</b><span>new rules and protocols from the MO Drive</span></div><div class="tile t-plum"><b>${upd}</b><span>pathways with department notes or updates</span></div><div class="tile t-teal"><b>${V7.length}</b><span>documents added in version 7 from the triage course folder</span></div><div class="tile t-obsidian"><b>31</b><span>MO Drive subfolders read, plus 2 files; ${count('unreadable')} could not be read</span></div></div>`;
  h += `<details class="dgrp" open><summary>New in version 8: the redesign <small>${V8.length}</small></summary><ul class="drows">${V8.map(row).join('')}</ul></details>`;
  h += `<details class="dgrp" open><summary>New in version 7: the triage course folder <small>${V7.length}</small></summary><ul class="drows">${V7.map(row).join('')}</ul></details>`;
  h += DRIVE_GROUPS.map(([k, t, open]) => {
    const rows = DRIVE.filter(d => d[1] === k); if (!rows.length) return '';
    return `<details class="dgrp"${open ? ' open' : ''}><summary>MO Drive: ${t} <small>${rows.length}</small></summary><ul class="drows">${rows.map(([f, , txt, links]) => row([f, txt, links])).join('')}</ul></details>`;
  }).join('');
  h += `<div class="confirm tile t-champagne"><h3>Still to confirm</h3><ol>${CONFIRM.map(c => `<li>${esc(c)}</li>`).join('')}</ol></div>`;
  $('#drive').innerHTML = h;
}

/* ================= Sources and about ================= */
function renderAbout(){
  const lst = ids => ids.map(id => `<a href="#${id}">${esc(P[id].title)}</a>${P[id].src ? ' · ' + esc(P[id].src) : ''}`);
  const panel = (k, h, p, items) => `<section class="panel"><h3>${h}</h3><p class="src-k">${k}</p><p>${p}</p>${items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}</section>`;
  $('#srcs').innerHTML = [
    panel('Approved source', 'The ebook', '<i>The Clinical Pathway in Emergency for Medical Officer</i>, Emergency &amp; Trauma Department, Hospital Kuala Lumpur (2025). The 23 pathways are built as written, and page numbers refer to that edition.', ['Outcome colours follow the ebook\'s boxes: red admit, green discharge, yellow observation, blue discharge advice', 'Department notes on a pathway are labelled as not in the ebook, with their source']),
    panel('Department notes', 'Green Zone flow and referrals', 'Memos, SOPs and flow charts from the department. Each entry names its source and date.', lst(FLOW_IDS)),
    panel('MO Drive, 3. CLINICAL, read 7 Nov 2026', 'Department protocols', 'Every subfolder of the MO Drive was read; what went in, what did not and why is listed under What\'s new.', lst(PROT_IDS)),
    panel('Version 7', 'The triage course folder', 'Six documents summarised in the Green Zone workflow map (7 Nov 2026), added as department notes.', V7.map(([f]) => esc(f))),
    panel('Media', 'Illustrations, clips and narration', 'The illustrations and the eight-second clips are generated artwork and show no real staff or patients. The tour narration is a synthetic voice.', null),
    panel('Design', 'Why it works this way', 'In Ely and colleagues\' study, family doctors left 64% of their clinical questions unpursued and spent under two minutes on those they did pursue (BMJ 1999;319:358). So every answer here is one search or a few taps away, and the outcome box can be copied straight into the notes. The tour is short, chaptered and captioned, with a transcript and speed control, following guidance on effective educational video (Brame, CBE Life Sci Educ 2016) and accessible video players.', null)
  ].join('');
}

/* ================= Poster sheets, full size ================= */
let lbFrom = null;
function openSheet(i){
  lbFrom = document.activeElement;
  $('#lbimg').src = `poster/sheet${i}.webp`;
  $('#lbimg').alt = i === 1 ? 'Poster sheet 1: patient flow, three rules to keep, four more rules and numbers to know' : 'Poster sheet 2: the 23 pathways, EMACC follow-up, Asthma Zone flow and referrals';
  $('#lbt').textContent = i === 1 ? 'Sheet 1 · Patient flow (A3)' : 'Sheet 2 · Pathways and referrals (A3)';
  $('#lbs').classList.remove('zoom'); $('#lbzoom').textContent = 'Zoom in';
  $('#lb').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#lbs').scrollTo(0, 0); $('#lbclose').focus();
}
function closeSheet(){ if ($('#lb').hidden) return; $('#lb').hidden = true; document.documentElement.style.overflow = ''; if (lbFrom && lbFrom.focus) lbFrom.focus(); }
function toggleZoom(){ const z = $('#lbs').classList.toggle('zoom'); $('#lbzoom').textContent = z ? 'Fit to screen' : 'Zoom in'; }

/* ================= Settings: theme, text size, clips, clear ================= */
const HOST_THEME = document.documentElement.getAttribute('data-theme');
const prefs = {
  theme: store.get('gz-theme', 'auto'),
  size: store.get('gz-size', 'std'),
  clips: store.get('gz-clips', !REDUCED && matchMedia('(min-width: 761px)').matches ? 'on' : 'off')
};
let setFrom = null;
function applyPrefs(){
  const r = document.documentElement;
  if (prefs.theme === 'auto'){ if (HOST_THEME) r.setAttribute('data-theme', HOST_THEME); else r.removeAttribute('data-theme'); }
  else r.setAttribute('data-theme', prefs.theme);
  if (prefs.size === 'large') r.setAttribute('data-size', 'large'); else r.removeAttribute('data-size');
}
function syncSettings(){
  [['#st-theme', prefs.theme], ['#st-size', prefs.size], ['#st-clips', prefs.clips]].forEach(([sel, v]) => $$(sel + ' button').forEach(b => b.setAttribute('aria-pressed', b.dataset.val === v)));
  const s = savedIds().length, r = recentIds().length, best = store.get(QKEY, null);
  $('#st-count').textContent = s || r || best !== null ? `${s} saved, ${r} recent${best !== null ? ', quiz best ' + best + ' of ' + QUIZ.length : ''}. Kept in this browser only.` : 'Nothing kept yet. Saved and recent pathways stay in this browser only.';
}
function openSettings(){
  if (!$('#settings').hidden) return;
  setFrom = document.activeElement;
  closeDrawer(false);
  syncSettings();
  $('#settings').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#setclose').focus();
}
function closeSettings(restore){
  if ($('#settings').hidden) return;
  $('#settings').hidden = true; document.documentElement.style.overflow = '';
  if (restore && setFrom && setFrom.focus) setFrom.focus();
}

/* ================= Routing ================= */
function route(){
  const h = decodeURIComponent(location.hash.slice(1));
  let m, changed = false;
  closePal(false); closeSettings(false); closeSheet(); closeMap(false);
  if (P[h]) showPath(h);
  else if ((m = h.match(/^([\w-]+?)--(\w+)$/)) && P[m[1]] && P[m[1]].nodes[m[2]]) showPath(m[1], m[2]);
  else if (h === 'pathways' || h === 'saved'){ if (h === 'saved' && libF !== 'saved'){ libF = 'saved'; renderLib(); } changed = showView('pathways'); }
  else if (['rules', 'tools', 'numbers', 'new', 'poster', 'about'].includes(h)) changed = showView(h);
  else if ((m = h.match(/^calc(?:-(dengue|kids|weight))?$/))){
    if (m[1] && m[1] !== calcTab){ calcTab = m[1]; renderCalc(); }
    changed = showView('tools');
    $('#calcbox').scrollIntoView({block:'start'});
  }
  else if (h === 'learn' || h === 'journey') changed = showLearn('journey');
  else if ((m = h.match(/^journey-([1-5])$/))){ changed = showLearn('journey'); setStep(+m[1] - 1, !changed); }
  else if (h === 'tour' || h === 'video') changed = showLearn('tour');
  else if (h === 'quiz') changed = showLearn('quiz');
  else if (h === 'intro'){ changed = showView('intro'); if (changed) introI = 0; renderIntro(false); }
  else if (h === 'search'){ if (!curView) showView('home'); routed = true; openPal(); return; }
  else changed = showView('home');
  if (routed && changed) $('#viewport').focus({preventScroll:true});
  routed = true;
}

/* ================= Wiring ================= */
fillIcons(document);
applyPrefs();
clipsOn = prefs.clips === 'on';
$('#cnt-path').textContent = Object.keys(P).length;
$('#cnt-rule').textContent = FLOW_IDS.length + PROT_IDS.length;
if (store.get('gz-seen', 0) >= 7){ const d = $('#snav .dotn'); if (d) d.hidden = true; }
renderHome(); renderSideSaved(); renderLib(); renderRules(); renderDcheck(); renderCalc(); renderNums();
renderJourney(false); setupTour(); startQuiz(); renderDrive(); renderAbout();

/* Clicks that open the search or settings from anywhere, and links to the hash already showing */
document.addEventListener('click', e => {
  if (e.target.closest('[data-find]')){ e.preventDefault(); openPal(); return; }
  if (e.target.closest('[data-settings]')){ e.preventDefault(); openSettings(); return; }
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute('href') === location.hash){ e.preventDefault(); route(); }
});
$('#menubtn').addEventListener('click', () => $('#side').classList.contains('open') ? closeDrawer(true) : openDrawer());
$('#sideclose').addEventListener('click', () => closeDrawer(true));
$('#scrim').addEventListener('click', () => closeDrawer(true));

/* Search palette */
$('#palclose').addEventListener('click', () => closePal(true));
$('#pal').addEventListener('click', e => { if (e.target.id === 'pal') closePal(true); else if (e.target.closest('#palbody a')) closePal(false); });
$('#gq').addEventListener('input', renderPal);
$('#gq').addEventListener('keydown', e => {
  const n = palLinks().length;
  if (e.key === 'ArrowDown' && n){ palSel = (palSel + 1) % n; markSel(); e.preventDefault(); }
  else if (e.key === 'ArrowUp' && n){ palSel = (palSel - 1 + n) % n; markSel(); e.preventDefault(); }
  else if (e.key === 'Enter'){ const a = palLinks()[palSel]; if (a){ e.preventDefault(); const href = a.getAttribute('href'); closePal(false); if (href === location.hash) route(); else location.hash = href; } }
  else if (e.key === 'Escape'){ e.preventDefault(); closePal(true); }
});

/* Home */
$('#bento').addEventListener('click', e => {
  const g = e.target.closest('[data-gocat]'); if (g){ libCat = g.dataset.gocat; libF = 'all'; $('#libq').value = ''; renderLib(); location.hash = '#pathways'; return; }
  const b = e.target.closest('[data-kcopy]'); if (b){ const i = +b.dataset.kcopy; copyText(NUMS[i].copy, {btn: b.hasAttribute('data-quiet') ? null : b, el:$('#kn' + i), ok:'Copied ' + NUMS[i].copy}); return; }
  const z = e.target.closest('[data-zs]'); if (z){ const i = +z.dataset.zs; zSel = zSel === i ? -1 : i; zoneMap(false); const nb = $(`#zmap [data-zs="${i}"]`); if (nb) nb.focus(); }
});
$('#tip').addEventListener('click', e => { if (e.target.closest('[data-tipnext]')){ tipI = (tipI + 1) % TIPS.length; renderTip(); } });

/* Library */
$('#libq').addEventListener('input', renderLib);
$('#libf').addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (b){ libF = b.dataset.f; renderLib(); } });
$('#libcats').addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (b){ libCat = b.dataset.cat; renderLib(); } });
$('#libgrid').addEventListener('click', e => { const b = e.target.closest('[data-star]'); if (b){ e.preventDefault(); toggleSave(b.dataset.star); } });

/* Runner */
$('#run').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || !state.id) return;
  const p = P[state.id], n = p.nodes[state.cur];
  if (b.dataset.go !== undefined){ const [l, to] = n.opts[+b.dataset.go]; go(l, to); }
  else if (b.hasAttribute('data-next')) go('Done', n.next);
  else if (b.dataset.back !== undefined) backTo(+b.dataset.back);
  else if (b.hasAttribute('data-restart')) restart();
  else if (b.hasAttribute('data-map')) openMap();
  else if (b.hasAttribute('data-save')){
    const on = toggleSave(state.id);
    b.setAttribute('aria-pressed', on); b.innerHTML = svg('star', '', on); b.title = on ? 'Saved' : 'Save';
    b.setAttribute('aria-label', on ? 'Saved. Tap to remove from your list' : 'Save to your list');
  }
  else if (b.hasAttribute('data-link')) copyText(APP_URL + '#' + state.id + (state.cur === p.start ? '' : '--' + state.cur), {ok:'Link to this step copied', fail:'Copying is blocked here. Use Share to copy the link.'});
  else if (b.hasAttribute('data-copyout')) copyText([p.title + ': ' + n.title, ...(n.items || []).map(i => '- ' + i)].join('\n'), {btn:b, el:b.closest('.res').querySelector('.res-b') || b.closest('.res').querySelector('h2')});
  else if (b.hasAttribute('data-copyadvice')) copyText(p.advice.map((a, i) => (i + 1) + '. ' + a).join('\n'), {btn:b, el:$('#advlist')});
  else if (b.hasAttribute('data-showadvice')){ selectTab('advice'); $('#ptab').scrollIntoView({block:'start', behavior: REDUCED ? 'auto' : 'smooth'}); }
  else if (b.dataset.pt !== undefined) selectTab(b.dataset.pt);
});
$('#run').addEventListener('keydown', e => {
  const b = e.target.closest && e.target.closest('[role="tab"]'); if (!b) return;
  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
  const tabs = $$('#ptab [role="tab"]'), i = tabs.indexOf(b);
  const j = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  e.preventDefault(); selectTab(tabs[j].dataset.pt, true);
});

/* Tools and numbers */
$('#calcbox').addEventListener('click', e => { const b = e.target.closest('[data-ct]'); if (b){ calcTab = b.dataset.ct; renderCalc(); } });
$('#nums').addEventListener('click', e => { const b = e.target.closest('button[data-copy]'); if (b){ const i = +b.dataset.copy; copyText(NUMS[i].copy, {btn:b, el:$('#nv' + i)}); } });

/* Learn */
$('#ltabs').addEventListener('click', e => { const b = e.target.closest('[data-lt]'); if (!b) return; const h = '#' + b.dataset.lt; if (location.hash === h) route(); else location.hash = h; });
$('#rail').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b){ setPlayAll(false); stopVoice(); setStep(+b.dataset.i, true); } });
$('#rail').addEventListener('keydown', e => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  setStep(step + (e.key === 'ArrowRight' ? 1 : -1), true);
  const b = $(`#rail button[data-i="${step}"]`); if (b) b.focus();
  e.preventDefault();
});
$('#playall').addEventListener('click', () => {
  if (playAll){ setPlayAll(false); stopVoice(); return; }
  setPlayAll(true); setStep(0, true); listen(0);
});
if ('IntersectionObserver' in window){
  new IntersectionObserver(es => es.forEach(en => {
    stageVisible = en.isIntersecting; const v = $('#jclip'); if (!v) return;
    if (stageVisible && clipsOn) v.play().catch(() => {}); else v.pause();
  }), {threshold:.25}).observe($('#stage'));
}
$('#quizbox').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.q === 'again'){ startQuiz(); $('#qcard').focus({preventScroll:true}); return; }
  if (b.dataset.q === 'next'){ quiz.i++; quiz.answered = false; renderQuiz(true); return; }
  if (b.dataset.o === undefined || quiz.answered) return;
  quiz.answered = true;
  const os = quiz.opts[quiz.i], k = +b.dataset.o, ok = os[k].ok, q = QUIZ[quiz.i];
  if (ok) quiz.score++; else quiz.missed.push(quiz.i);
  $$('#quizbox .q-opts button').forEach((x, i) => { x.disabled = true; if (os[i].ok) x.classList.add('right'); else if (i === k) x.classList.add('wrong'); });
  $('#qwhy').innerHTML = `<div class="q-why ${ok ? 'ok' : 'no'}"><b>${ok ? 'Right' : 'Not quite'}</b>${esc(q.why)}</div>
    <div class="q-nav"><a class="pill" href="${q.href}">Read the source${svg('chev')}</a><button type="button" class="primary" data-q="next">${quiz.i === QUIZ.length - 1 ? 'See your score' : 'Next question'}</button></div>`;
  $('#quizbox [data-q="next"]').focus();
});

/* Whole-pathway map and the intro */
$('#pmclose').addEventListener('click', () => closeMap(true));
$('#pmap').addEventListener('click', e => { if (e.target.id === 'pmap') closeMap(true); });
$('#introbox').addEventListener('click', e => { const g = e.target.closest('[data-intro-go]'); if (g){ introI = +g.dataset.introGo; renderIntro(true); return; } const b = e.target.closest('[data-intro]'); if (!b) return; const a = b.dataset.intro; if (a === 'next') introStep(1); else if (a === 'back') introStep(-1); else introDone(); });

/* Poster */
$$('[data-sheet]').forEach(b => b.addEventListener('click', () => openSheet(+b.dataset.sheet)));
$('#lbclose').addEventListener('click', closeSheet);
$('#lbzoom').addEventListener('click', toggleZoom);
$('#lbimg').addEventListener('click', toggleZoom);

/* Settings */
$('#settings').addEventListener('click', e => {
  if (e.target.id === 'settings'){ closeSettings(true); return; }
  const b = e.target.closest('button'); if (!b) return;
  const grp = b.closest('.seg');
  if (grp && b.dataset.val){
    const key = {'st-theme':'theme', 'st-size':'size', 'st-clips':'clips'}[grp.id];
    prefs[key] = b.dataset.val; store.set('gz-' + key, b.dataset.val); applyPrefs(); syncSettings();
    if (key === 'clips') setJourneyClip(prefs.clips === 'on');
  } else if (b.id === 'st-clear'){
    ['gz-saved', 'gz-recent', QKEY, 'gz-quiz-best', 'gz-tour-pos', 'gz-tour-pos-ms', 'gz-tour-lang', 'gz-intro'].forEach(k => store.del(k));
    refreshSaved(); syncSettings(); startQuiz(); introTile(); toast('Cleared from this browser');
  } else if (b.id === 'setclose') closeSettings(true);
});

/* Keyboard: / or Ctrl K to search, Esc to close, 1–9 to answer and Backspace to step back in a pathway */
document.addEventListener('keydown', e => {
  const t = e.target;
  const typing = t && ((t.tagName === 'INPUT' && !['checkbox', 'radio', 'button'].includes(t.type)) || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); $('#pal').hidden ? openPal() : closePal(true); return; }
  if (e.key === 'Escape'){
    if (!$('#pal').hidden) return closePal(true);
    if (!$('#pmap').hidden) return closeMap(true);
    if (!$('#settings').hidden) return closeSettings(true);
    if (!$('#lb').hidden) return closeSheet();
    if ($('#side').classList.contains('open')) return closeDrawer(true);
  }
  const overlay = !$('#pal').hidden || !$('#lb').hidden || !$('#settings').hidden || !$('#pmap').hidden;
  if (typing || e.ctrlKey || e.metaKey || e.altKey || overlay) return;
  if (e.key === '/'){ e.preventDefault(); openPal(); return; }
  if (curView === 'intro' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')){ e.preventDefault(); introStep(e.key === 'ArrowRight' ? 1 : -1); return; }
  if (curView === 'run'){
    if (/^[1-9]$/.test(e.key)){
      const b = $(`#cur button[data-go="${+e.key - 1}"]`) || (e.key === '1' && $('#cur button[data-next]'));
      if (b){ e.preventDefault(); b.click(); }
    } else if (e.key === 'Backspace' && state.trail.length){ e.preventDefault(); backTo(state.trail.length - 1); }
  }
});
/* Tiles catch the light under the pointer */
let glowT = null;
document.addEventListener('pointermove', e => {
  const t = e.target.closest ? e.target.closest('.tile') : null;
  if (glowT && glowT !== t){ glowT.style.removeProperty('--mx'); glowT.style.removeProperty('--my'); }
  glowT = t;
  if (t){ const r = t.getBoundingClientRect(); t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px'); }
}, {passive:true});
window.addEventListener('hashchange', route);
route();
window.addEventListener('load', () => JOURNEY.forEach(s => { const im = new Image(); im.src = s.img; }));
