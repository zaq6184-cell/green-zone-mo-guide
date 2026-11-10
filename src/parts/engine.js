
/* ================= Green Zone MO Guide, version 8: the engine =================
   One page, one view at a time, routed on the hash:
   #home, #pathways, #saved, #rules, #tools, #calc and #calc-<calculator>, #numbers,
   #journey(-1..5), #tour (#video), #quiz, #intro, #new, #poster, #about, #search,
   #<entry> and #<entry>--<node> for any step of any pathway or rule.
   Saved, recent, quiz best, tour position and settings stay in this browser only. */

/* The public web app on GitHub Pages. Copy link builds its links on this address, so anyone they are sent to can open them. */
const APP_URL = 'https://zaq6184-cell.github.io/green-zone-mo-guide/';

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
  ['Every entry on its banner','Every pathway, rule and protocol now opens on its topic\'s glass banner, compact on a phone so the first question stays near the top; the rabies protocol has its own, an amber glass paw and a vaccine vial. The ED links, communication and interpreter banners now move with Flow Studio, and the discharge advice of gastroenteritis, renal colic, abdominal pain and hypoglycaemia can be read aloud.',[['#renal-colic','Renal colic'],['#animal-bites','Animal bites and rabies']]],
  ['From the department\'s link page','What the 2026 department documents add for the Green Zone: the zone at a glance (seen by an MO in under 120 minutes; the referred team answers in 1 to 2 hours), sepsis goes up to the Yellow or Red Zone, how to book EM Watch step by step, the IV antibiotic flow chart of June 2026, leaving the department (own-risk discharge, absconded patients), prescriptions the pharmacy rejects, DNR, referral details, redirection at triage, and a Fire in the department card (dial 6000, the five steps, the assembly point). Each with its memo, policy or plan and date.',[['#gz-rules--glance','The Green Zone at a glance'],['#code-blue--fire','Fire in the department']]],
  ['Communication on shift','Step by step from the situation in front of you: an angry or aggressive patient or relative (a weapon or violence now: step away and call Code Gray, ext 5441; otherwise a safe stance, calm yourself, the department\'s three steps), a complaint about the wait, bad news (SPIKES), explaining a discharge with teach-back, a phone referral by ISBAR, and no shared language. From the department\'s quick card and published sources, each named, with the phrases to say and not to say, in English and Bahasa Melayu.',[['#communication','Communication on shift']]],
  ['Snake bites','The Ministry of Health snakebite guideline (2017) step by step, in the guide\'s own words with its pages: possible envenoming goes to the Red Zone; who to observe and for how long; the 20-minute whole blood clotting test, with a timer; the antivenom indications; which antivenom and how many vials by snake, for the Peninsula or Sabah and Sarawak; reactions; venom in the eye; and going home. Two calculators (the clotting test, and antivenom by snake with a child\'s doses by weight), drawings of the bedside checks, and a banner of a glass viper that turns in 3D.',[['#snakebite-moh','Snake bites'],['#calc-snakeav','Antivenom by snake']]],
  ['ED links','The department\'s link page sorted for a shift: forms to request a porter or an ambulance, book emergency OT or acute HD, report an incident or broken equipment, the registries, the department\'s fire plan and disaster links, and the hospital systems, which open on the hospital network.',[['#links','ED links']]],
  ['Code Blue, in full','The HKL Code Blue Manual 2022/2024 (5th edition) step by step: who to call and what to do from anywhere in the hospital grounds, Zone 1 or SCACC (Zone 2), in office hours or after 1700 hr; stay and play or move after 10 minutes; who comes, with the six roles; and death at the scene. A map of the blocks says who responds in each, with its number; SCACC is drawn level by level with its extensions; the crash cart, the clerking sheet and the bystander poster are in tabs. The hospital\'s other emergency colour codes (Black, Silver, Gray, Orange and Purple) are there too.',[['#code-blue','Code Blue'],['#code-blue--codes','Emergency codes']]],
  ['Medical interpreters','The hospital\'s medical interpreter service (memo of 9 Jul 2026): Mandarin, Tamil, Nepali and Bangladeshi, through the operator on line 0, with its flow chart in Malay and English.',[['#interpreter','Interpreters']]],
  ['Rabies and the ABC, in full','The HKL protocol on rabies and the Animal Bite Clinic (Oct 2022) step by step: its risk checklist, the wound categories, the rabies vaccine and RIG flow charts, and how to write each prescription (IM, ID and RIG; ward chart, Malaysian or foreigner), with the schedules, sites and doses drawn. A prescription writer counts every dose date from Day 0. The protocol PDF opens from the entry.',[['#animal-bites','Animal bites and rabies'],['#calc-rabies','Write the prescription']]],
  ['Read aloud and watch','The patient advice, read aloud word for word for a patient to follow: both CPG leaflets (dengue and cancer pain) in English and Bahasa Melayu, and the discharge advice of mild head injury, dengue, the Asthma Zone, gastroenteritis, renal colic, abdominal pain and hypoglycaemia. Tap Listen; the line being read is marked as the voice reaches it, and the chips start a section. The dengue leaflet also has a two-minute film in each language, every line on screen as it is read. Nothing downloads until you tap.',[['#dengue-cpg','Dengue CPG: Home care advice'],['#mild-tbi','Mild head injury: Discharge advice']]],
  ['National CPGs: nine more','Nine more national guidelines from the Academy of Medicine of Malaysia list, step by step, each beside the pathway or rule it belongs to, each with its own moving banner. Quoted with their page numbers: Chronic Kidney Disease in Adults (2nd edition, 2018), with dose changes by kidney function; Rhinosinusitis in Adolescents and Adults (2016); Avulsed Permanent Anterior Teeth (3rd edition, 2019), for the knocked-out front tooth; Geriatric Hip Fracture (2023); and Cancer Pain (2nd edition, 2023), with its patient leaflet in English and Bahasa Melayu. Summarised in the guide\'s own words with page numbers, because their copyright gives no permission to reproduce them: Type 2 Diabetes Mellitus (6th edition, 2020), Venous Thromboembolism (2013), COPD (2nd edition, 2009) and Sore Throat (2003). Hip fracture and the knocked-out tooth sit in a new Injuries and teeth group. New calculators: kidney function with drug doses, the cancer pain rescue dose and the McIsaac score. Where a CPG and the ebook differ is listed under Still to confirm.',[['#ckd-cpg','CKD CPG'],['#cancer-pain-cpg','Cancer pain CPG'],['#guidelines','All guidelines']]],
  ['Dengue: one screen','The dengue CPG\'s whole triage on one screen (4th edition, 2026): first look and first touch, the seven vital signs, warning signs and co-morbids, with the day of illness and blood results. The MTS level, zone and group update as you tick, in Appendix 7\'s own order; a timeline marks the day of illness against the febrile and critical phases, and on a phone the result stays in view at the foot of the screen. Nothing is saved.',[['#calc-dassess','Open the assessment'],['#dengue-cpg','Dengue CPG']]],
  ['National CPGs: six more','Six more national guidelines from the Academy of Medicine of Malaysia list, step by step, each beside the pathway or rule it belongs to, each with its own moving banner. Management of Asthma in Adults (2nd edition, MaHTAS 2024): grade an exacerbation by Table 9, treat it by the emergency department algorithm, then admit or discharge with an action plan. Management of Gout (2nd edition, MaHTAS 2021): check it is a flare, choose a drug with its doses and contraindications, keep urate-lowering therapy going, and send home with the right referral. Early Management of Head Injury in Adults (2015): head CT, ED observation, admission and the advice card. Acute Coronary Syndromes (1st edition, 2026): the ECG in 10 minutes, the troponin rule-out, risk and first drugs; it asks that suspected ACS is not triaged to a green zone. Diabetic Foot (2nd edition, 2018): general illness, the University of Texas grade, antibiotics and referral. Foreign Body Ingestion in Children (2025): red flags, the first X-ray and each object by where it lies. Every line names its CPG page. New calculators: asthma prednisolone by weight, the action plan PEF zones, and the Glasgow Coma Scale. A new Guidelines filter in Pathways puts the national guidelines together and lists the other national CPGs chosen for the Green Zone from the Academy of Medicine of Malaysia list, as links: each opens its PDF in Google Drive where the CPG allows a copy, otherwise the Academy\'s own file, with its quick reference and patient leaflets where it has them. Where a CPG and the ebook differ is listed under Still to confirm.',[['#acs-cpg','ACS CPG'],['#head-injury-cpg','Head injury CPG'],['#guidelines','All guidelines']]],
  ['Dengue CPG 2026','The new national guideline, Management of Dengue in Adults (4th edition, MaHTAS 2026), step by step: triage a patient to a zone (Appendix 7 with Table 8), check the discharge criteria, and look up regular medicines. Fluids, tests, shock and the course of illness are in tabs, each line with its CPG page. The home care leaflet is there in English and Bahasa Melayu, with Copy. Four new dengue calculators: triage vital signs, fluids by weight, the test result and urine output. The ebook pathway stays as written, and where the two differ is listed under Still to confirm.',[['#dengue-cpg','Open the dengue CPG'],['#calc-dvitals','Triage vital signs'],['#calc-dfluid','Fluids by weight']]],
  ['Calculators','Twenty-nine calculators in one place, built only from the ebook, the department\'s notes and the national CPGs, each naming its source: the shock index, analgesia, anticoagulant and insulin doses by weight, CURB-65, Wells, the Obsess protocol check, syncope, SVT, hypertensive urgency, the pain scales, BARS and RASS, the head injury check, paracetamol overdose by time, anaphylaxis, child doses, the SOAP check, the dengue triage vital signs, fluids, test result and urine output, the asthma prednisolone dose and action plan zones, the Glasgow Coma Scale, the dengue assessment on one screen, kidney function with drug doses, the cancer pain rescue dose and the McIsaac score. The weight carries across the dose calculators while the guide is open, and nothing you type is saved. Scores the ebook names but does not define, such as TIMI and ABCD2, and other essential emergency scores open on MDCalc; children\'s tools open on PEMCalc. Both are outside sites.',[['#calc','Calculators'],['#calc-obsess','Obsess protocol check'],['#calc-paraod','Paracetamol overdose']]],
  ['A new look','The guide is now a bento of tiles, each showing real data from the guide: how each pathway can end, the numbers, the zone.',[['#home','Home']]],
  ['The zone map','The five stops of a Green Zone visit on the home screen. Tap one for what happens there and the rules that apply.',[['#journey','Patient journey']]],
  ['Whole-pathway maps','Every step of a pathway on one sheet, with your route lit and the outcomes you can no longer reach dimmed.',[['#renal-colic','Try it on renal colic']]],
  ['Visual shift tools','A route meter for the discharge check, and gauges for the shock index, pulse pressure, heart rate and BMI, using the same thresholds as before.',[['#tools','Shift tools']]],
  ['First-shift intro','Four quick screens for a new MO or HO.',[['#intro','Open the intro']]],
  ['A new tour','The narrated explainer is rebuilt in the new look and now covers the version 7 rules: no repeat tests after secondary triage, down-triage only with the EP\'s permission, IV antibiotics on a CCA chair, and when the EP may decide the admission. It is also in Bahasa Melayu: switch the narration under the video.',[['#tour','Watch the tour']]],
  ['The wall poster, redrawn','Both A3 sheets in the new look. Sheet 1 adds the four version 7 rules with their sources, and marks the three numbers still to confirm. Sheet 2 shows the Asthma Zone flow from the November 2025 memo.',[['#poster','Wall poster']]],
  ['Moving tiles','The topic tiles, Code Blue and Code Stroke show a glass sculpture of their body system, made in Flow Studio, moving in a quiet 8-second loop: the heart beats, the lungs breathe. The other home tiles move too: a book, a shield, a doorway, a gauge, a compass and a pearl. So do the Pathways section bars and the Shift tools headers. A loop plays only while its tile is on screen, and a phone plays at most six at once. Settings, Moving tiles turns them off.',[['#home','Home'],['#pathways','Pathways'],['#tools','Shift tools']]],
  ['Day and night','A switch on the home screen turns the night colours on and off. In night colours the tour plays a night version of the film, in English and in Bahasa Melayu, and the poster page shows night versions of both sheets. The sheets on the wall keep the day colours.',[['#home','Home'],['#tour','Watch the tour']]]
];

/* The first-shift intro: four screens about using the guide, with a drawn picture each */
const INTRO = [
  {h:'Find it in one search', p:'Type a symptom, rule, dose or number, or press /. Saved and recent pathways wait on your home screen.', art:'search'},
  {h:'One question at a time', p:'Each pathway asks one question per card and shows how it can still end. It finishes in the ebook\'s outcome colours: red admit, yellow observation, green discharge, violet refer.', art:'path'},
  {h:'Patients move one way', p:'Triage, you the MO, the treatment room, the CCA only if needed, then review. Tap any stop on the zone map for what happens there and the rules that apply.', art:'zone'},
  {h:'Tools and numbers, one tap away', p:'The discharge safety check, 29 calculators and 14 numbers with Copy. Nothing you tick or type is saved.', art:'tools'}
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
  {g:'Emergencies', hot:true, lbl:'Code Blue, outside the ED', val:'ext 5333', copy:'03-2615 5333', note:'ED Call Centre, for an emergency or arrest anywhere in the hospital grounds; the team arrives within 10 minutes. SCACC in office hours: Anaesthesia ext 1133 / 1134 with 5333. Call Centre 2: ext 6700. Forensic: ext 6695.', href:'#code-blue', link:'Code Blue', src:'Code Blue Manual 2022/2024'},
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
  {g:'Infection and protection', lbl:'Animal Bite Clinic (ABC)', val:'ext 1017 / 1178', copy:'03-2615 5555 ext 1017 / 1178', note:'Physician Clinic, SCACC level 2. Monday to Thursday 2–4 pm, Friday 3–4:30 pm.', href:'#animal-bites', link:'Animal bites', src:'Rabies and ABC protocol, Oct 2022'},
  {g:'Emergencies', lbl:'Code Black, Silver, Gray or Purple', val:'ext 5441', copy:'ext 5441', note:'Black: a bomb threat or a CBRNE incident. Silver: an armed threat or hostages. Gray: physical violence involving visitors or staff. Purple: attempted suicide or self-harm.', href:'#code-blue--codes', link:'Emergency codes', src:'HKL colour codes card (undated)'},
  {g:'Emergencies', lbl:'Fire or internal incident (Code Orange)', val:'ext 6000', copy:'ext 6000', note:'Line 6000: every internal disaster incident, such as a fire, 24 hours. An external mass casualty incident comes through MECC and the EP on call. The colour codes card calls it Code Orange.', href:'#code-blue--fire', link:'Fire in the department', src:'Pelan Tindakan Bencana HKL 2026, p56'},
  {g:'Emergencies', lbl:'Forensic, death at the scene', val:'ext 6695', copy:'ext 6695', note:'A death at the scene of a Code Blue: the primary team declares it, and the body goes directly to Forensic.', href:'#code-blue--death', link:'Death at the scene', src:'Code Blue Manual 2022/2024'},
  {g:'Patients and families', lbl:'Medical interpreter', val:'Line 0', note:'Mandarin, Tamil, Nepali or Bangladeshi: call line 0 (IbuSawat HKL); the telephonist puts you through to the interpreter.', href:'#interpreter', link:'Interpreters', src:'HKL memo, 9 Jul 2026'}
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
  ['Orthopaedic referral memo, 17 May 2024','The Lampiran 1 urgent criteria, on-call or clinic referral, CMR within 2 hours, and the memo to show when a referral is declined.',[['#referral-rules--ortho','Orthopaedic referral']]],
  ['IPR admission criteria','Who can be transferred to IPR, the exclusions and the specialist on-call line.',[['#referral-rules--ipr','Transfer to IPR'],['#numbers','Numbers']]]
];
const NEW7 = [['#gz-rules--oneway','One-way flow: no repeat tests'],['#gz-rules--down','Down-triage: only the EP can allow it'],['#gz-rules--ivab','IV antibiotics when no bed is free'],['#gz-rules--ep4','When the primary team is delayed'],['#gz-rules--kk','Redirect to a KK or private GP'],['#referral-rules--ortho','Orthopaedic referral: on call or clinic'],['#referral-rules--ipr','Transfer to IPR (respiratory)']];
const CONFIRM = [
  'EM Watch booking is now in the app from work instruction AK-15 (in force 16 Mar 2026, p12). Still to confirm: its two forms, the Pink Form (Lampiran 1) and the EM WATCH Appointment form (Lampiran 2), which are not attached to the copy seen; and the timing: AK-15 aims to reassess within 48 to 72 hours and to review CT brain reports within 48 hours of discharge, where the department policy (2026, 9.2.1) and the 2023 deck give 1 week; and the deck\'s online prescription against AK-15\'s documents collected at the Record Unit.',
  'Redirection is in the app in part: a primary triage decision by the PPP for Level 5 (9XXX), with a Redirection Slip and the Redirection Book (AK-01, 2026; memo HKL/JK/98/188/3(2)24, 11 Jan 2024; the 2021 policy). Still to confirm: how a Green Zone MO redirects a patient already seen in the consultation room; whether private GPs are included; whether the 2021 hours (0730 to 1930, Monday to Friday), slip and list of Klinik Kesihatan are current; and the redirection procedure AK-01 cites (HKL/JK/PK 0x), which is not in the department\'s folder.',
  'EMACC booking: the app follows the SOP of 1 Feb 2018 (ext 7040, the EMACC box, 40 a day, first review within 1 week). Memo HKL/JK/98/188/3(01)24 of 11 Jan 2024, which cancels memo (27)22, writes the TCA on the slip hijau and sends the patient to Counter 10: 7.30 am to 3.30 pm, 56 appointments a day, the first visit no earlier than day 4 (urgent) or day 5, at most 2 visits within a month, blood results to EMWATCH. Work instruction AK-13 (an unsigned 2026 copy) phones the registration counter for a Google Sheet slot from 4 days after discharge. The department policy (2026, 8.3.3) gives 9 am to 4 pm on working days. No 2026 document prints ext 7040.',
  'Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents; a 2020 department table gives ext 5137 and 6838), the SCAN team line and the IPR on-call line.',
  'The MERS-CoV case definition, which is not in the PUI file.',
  'The MOH snakebite guideline (2017): Tables 15 and 16 leave four pit vipers and a krait\'s second choice blank, and give no dose for an unidentified bite and no maximum; and in HKL, where an observation-only or post-antivenom patient goes, who arranges the bloods at 5-7 days, the antivenom stock, and the RECS contact. CPG-REVIEW-SNAKEBITE.md.',
  'The written source for "only the EP can allow a down-triage": the down-triage memo of 4 Oct 2022 says the MO must examine first and document it, but does not mention the EP.',
  'Where the calculators\' sources stop: paracetamol at exactly 50 kg; a creatinine clearance of exactly 30 for fondaparinux and Clexane; how to split the total daily insulin dose into basal and bolus; which SOAP band counts as moderate dehydration, and how to treat a child over 10% dehydrated; whether there is a first-line drug at BARS 7; for paracetamol overdose, the activated charcoal dose, the N-acetylcysteine regimen (the HKL ED Dilution Guide\'s three bags, 2018 to 2019, or the MOH Antidotes Quick Guide\'s two, 2022), the nomogram treatment line and which band exactly 8 hours belongs to; and child doses in anaphylaxis.',
  'Which dengue source the Green Zone follows where the ebook (built from the CPG 3rd edition, 2015) and the CPG 4th edition (2026) differ: shock CRT over 2 or over 3 seconds; persistent vomiting over 2 times in 24 hours or over 3 a day; the list of warning signs (the ebook has persistent diarrhoea and a tender liver, the CPG liver enlargement over 2 cm, postural hypotension and reduced urine output); and oral fluids (2 litres a day, or 200 ml an hour while awake).',
  'Points inside the dengue CPG (4th edition) itself: Algorithm 1 starts 3–5 ml/kg/hr for 1 hour, the text (p44) for 1–2 hours; Table 5 has no row for exactly 5 days of fever, and covers 9 of the 16 result patterns; and the CPG gives no formula for the MAP.',
  'Which asthma source the Green Zone follows where the ebook (built from the 2017 CPG) and the Asthma in Adults CPG, 2nd edition (2024) differ: prednisolone 30 mg a day for 5 days, or 0.5 to 1 mg/kg with a maximum of 50 mg for 5 to 7 days; IV magnesium sulphate 2.47 g or 2 g; SC terbutaline, which the CPG keeps for critical care; ipratropium at moderate and every 20 minutes, or for severe only every 4 to 6 hours; a severe respiratory rate over 30 or over 25; grading and discharge on PEF, which Table 9 does not use; a discharge SpO2 over 95% or over 94%; and an observation route, which the CPG does not have. The full table is in CPG-REVIEW-ASTHMA.md.',
  'Points inside the asthma CPG (2nd edition) itself: Table 9 prints SpO2 <90% and PaO2 <60 mmHg under both severe and life-threatening, and the guide lists them as life-threatening by its note to classify using the most severe parameters; mild SpO2 is ≥95% in Table 9 but <95% in Algorithms 3 and 4; four oxygen targets (93 to 95%, ≥94%, >94% for improvement, 94 to 98% in pregnancy); prednisolone by the ideal body weight, with no formula; IV hydrocortisone 100 mg stat or 200 mg a day in divided doses; and follow-up within 1 to 2 weeks or within seven days.',
  'The gout CPG (2nd edition, 2021): the Green Zone gout rule (HKL letter, 29 Nov 2024) words several of Recommendation 12\'s rheumatology referral criteria differently (men under 30, against early onset at age <30 years; at least three months of allopurinol), which may come from the letter itself. The CPG gives no pathway for suspected septic arthritis or joint aspiration, no NSAID course length and no gastroprotection. Inside it: colchicine 1.2 mg then 0.6 mg in the trials (p35) but 1 mg then 0.5 mg in Appendix 5B (p68); no renal row for a CrCl of 90 or more; and NSAIDs in pregnancy restricted to the first and second trimester (Appendix 5C) but avoided from 20 weeks (FDA advice, p40). The full review is in CPG-REVIEW-GOUT.md.',
  'The head injury CPG (2015) against the ebook\'s mild TBI pathway: the CPG admits every patient aged 65 or over or on an anticoagulant or antiplatelet whatever the CT shows (a boxed statement, p19), where the ebook can send them home after a normal CT; it counts vomiting twice or more, the ebook more than twice; its advice card covers 24 hours, the ebook 48; it has six urgent-CT factors the ebook lacks, and no PTA charting. Inside it: three observation schedules, a six-hour observation with no start point, and no list of indications for neuro-trauma referral. The full review is in CPG-REVIEW-HEAD-INJURY.md.',
  'The ACS CPG (1st edition, 2026) against the ebook\'s chest pain pathway: Key Recommendation 8 says a patient with chest pain suspected of ACS should NOT be triaged to a green or non-critical zone; it scores by HEART or by TIMI (TIMI only with a high-sensitivity troponin), with TIMI 0 or 1 to go home, where the Obsess protocol asks for TIMI under 1, and the department policy (2026, 19.1.2) prints "Skor TIMI ≤ 1"; it calls labelling troponin results positive or negative inappropriate; and low-risk unstable angina may go home. Inside it: Flowchart 6 gives no route for a conventional troponin taken under 6 hours from onset, a single hs-cTn is timed three ways, HEART has no row for exactly 3 risk factors, and the alteplase dose is printed up to 5 mg. Whether HKL\'s troponin is high-sensitivity, and its 99th percentile, are to confirm. The full review is in CPG-REVIEW-ACS.md.',
  'The diabetic foot CPG (2nd edition, 2018): which HKL team takes an urgent referral, and the route to Foot Protection Services; Algorithm B sends UT 0, IA and IB to outpatient care while Table 2 asks for every active problem to be seen within 24 hours; it gives no route for UT IIA or IIIA; erythema of exactly 2 cm fits neither infection band and SIRS is not defined; and its antibiotic table prints piperacillin/tazobactam 4.5 mg (moderate) and 4.5 g (severe). The full review is in CPG-REVIEW-DIABETIC-FOOT.md.',
  'The foreign body ingestion CPG (2025) against the department\'s swallowed foreign body step: the department sends every asymptomatic battery past the oesophagus home with stool checks and a Monday clinic, where the CPG removes a gastric button battery within 24 hours if the child is under 5 or the battery is 20 mm or more, and needs no stool checks; the department treats a single magnet as high risk, where the CPG allows discharge; and its width threshold is 2.5 cm against 20 mm. Inside it: five timings for a gastric battery (12, 24 and 48 hours), and no algorithm for a magnet with another metal object. The full review is in CPG-REVIEW-FB-CHILDREN.md.',
  'The national CPGs whose copyright gives no permission to reproduce (34 state no terms; the hypertension 2018 and menopause 2022 CPGs reserve all rights): four are summarised in the guide\'s own words with page numbers (type 2 diabetes, VTE, COPD and sore throat; the guide owner\'s decision of 9 Nov 2026), and the others stay as links to the Academy of Medicine\'s own files. Quoting any of them needs the publisher\'s permission.',
  'The CKD CPG (2018): which HKL clinic takes a Recommendation 12 referral, and who takes AKI on CKD (the CPG: a nephrologist now; the department\'s colic note: Urology urgently); NSAIDs, which the CPG says to avoid in CKD and the ebook gives for renal colic; whether to dose by creatinine clearance (Appendix 3, unless marked #) or the lab\'s eGFR; and metformin, which the ebook contraindicates under an eGFR of 45 and the CPG halves at 30 - 45. CPG-REVIEW-CKD.md.',
  'The rhinosinusitis CPG (2016), written for primary care and non-ORL centres: how its urgent referral within 24 hours maps to the ORL on-call; early referral within one week (6.1) or two weeks (Algorithm 3); where the 3-day review of Algorithm 1 happens; and prednisolone 30 mg for 7 days in Appendix 5 against no oral steroid in Recommendation 5; amoxicillin for 5 - 7 days or 5 - 10 days. CPG-REVIEW-RHINOSINUSITIS.md.',
  'The avulsed tooth CPG (2019): which HKL dental team takes a knocked-out permanent tooth from the ED, in and out of office hours, for adults and children, and whether the ED MO replants or stores and refers; whether the walk-in is fast-tracked from MTS 4 or 5 (15 minutes dry, 60 minutes in all); and antibiotics, which it gives only "if indicated" with no dose, and tetanus, which it lists only on its form. CPG-REVIEW-AVULSED-TOOTH.md.',
  'The geriatric hip fracture CPG (2023): with a normal X-ray but a fracture still suspected it asks for CT or MRI and an orthopaedic referral, where the department\'s notes give a repeat X-ray, EMACC within 3 days or the orthopaedic clinic: who orders the CT; its Appendix 3 doses for the elderly against the ebook and the analgesia calculator; and which clinic takes the older faller without a fracture. CPG-REVIEW-HIP-FRACTURE.md.',
  'The cancer pain CPG (2023): the starting dose of oral immediate-release morphine (5 mg, 5 - 10 mg or 3 - 5 mg); its Algorithm 2 against the ebook\'s morphine protocol, and which zone runs it; which naloxone regimen (40 mcg every 1 - 3 minutes, or 20 mcg every two minutes); which team takes cancer pain referrals; and its p24 conversion ratio against Table 4, so the app converts no opioid doses. CPG-REVIEW-CANCER-PAIN.md.',
  'The type 2 diabetes CPG (2020, summarised): which total daily insulin dose and split to use outside DKA (the ebook\'s 0.2 - 0.5 unit/kg/day, the CPG\'s split after DKA, or its basal start), which answers part of item 8 only for that case; its hypoglycaemia doses and the ebook\'s admission and discharge rules, which it lacks; metformin under an eGFR of 45; SGLT2 inhibitors under 30; and euglycaemic ketoacidosis in the blood gas rule. CPG-REVIEW-T2DM.md.',
  'The VTE CPG (2013, summarised): it has no D-dimer step, because the assay most Malaysian laboratories run is not sensitive enough to rule out VTE: which assay HKL runs, and whether the Green Zone keeps the ebook\'s D-dimer step; disposition after a confirmed DVT, which neither source sets; and its two-band Wells against the ebook\'s three. CPG-REVIEW-VTE.md.',
  'The COPD CPG (2009, summarised): whether every Green Zone COPD flare-up gets the ABG it recommends; its oxygen target of 90 - 93% against the department\'s discharge at SpO2 95% or more; prednisolone 30 - 40 mg for 7 - 14 days against the department\'s 30 mg for 5 days; and its antibiotic triggers. CPG-REVIEW-COPD.md.',
  'The rabies and ABC protocol (Oct 2022): how a possible risk in its checklist (Table 1B, the animal can be observed for 14 days) changes the flow charts\' "Risk of rabies?", which the protocol does not say in words; the vaccine schedule after pre-exposure prophylaxis (the vaccine flow chart asks only about post-exposure prophylaxis, the RIG flow chart about either); which four sites the ID 4-site course uses; and whether the protocol is still current.',
  'The sore throat CPG (2003, summarised): which team takes a suspected quinsy from the Green Zone (the CPG gives no red flags or admission criteria); whether the ED has a rapid strep test or sends throat cultures, and who acts on the result; and NSAIDs, which the ebook\'s pain ladder allows and this CPG advises against routinely. CPG-REVIEW-SORE-THROAT.md.',
  'The Code Blue Manual 2022/2024 (5th edition): Table 1 prints no contact number for the Maternity Hospital and has no row 9; whether "on public holidays" covers only the main block\'s ground and first floors or the whole list; and its cross-references point to the wrong appendix (the SCACC chart is Appendix iv, the crash cart Appendix vi, the clerking sheet Appendix vii). Its chain of survival is numbered 1, 2, 4, 5.',
  'The emergency colour codes card (shared 10 Nov 2026) prints no issuer or date: confirm Code Black, Silver, Gray and Purple on ext 5441 and Code Orange on ext 6000 against the hospital\'s own circular. The hospital disaster plan (2026) names no colour code but Code Blue: 6000 is its line for a fire or any internal disaster incident (p56), and an external mass casualty incident comes through MECC and the EP on call (p29 to 31).',
  'The medical interpreter memo (9 Jul 2026): its Lampiran 2, the interpreters\' terms of reference, was not in the copy shared; and what to do for a language it does not cover.',
  'Communication on shift: whether the department endorses the aggressive patient quick card (no issuer or date printed) and its Drive copy; a direct line to the Polis Bantuan post, and Code Gray or Grey; how the ED reports violence against staff and supports them; who in the ED hears a complaint; the department\'s own steps after a death in the ED; interpreters for other languages, and whether family or bilingual staff may interpret; a copy of the MOH Guidelines on Management of Aggressive Patients (2016), which the ebook cites; the Bahasa Melayu phrases; waiting-time targets; and the handover format. COMMUNICATION-REVIEW.md.',
  'The Green Zone in the department\'s 2026 documents: a pain score of 7 or more (not chest pain) is a Green Zone criterion in work instruction AK-07 (p5, an unsigned copy) but a Yellow Zone one in the department policy (3.1.3, p20) and AK-06 (p5); AK-07 also prints "GCS > 15".',
  'The Green Zone\'s target times: Level 4 within 60 minutes (the policy\'s charter, p8; AK-07, p6); Level 5 within 90 minutes (charter, p9) or within 120 minutes from start to finish (AK-07, p6); and under 120 minutes to be seen by an MO, for the whole zone (policy 4.2.1, p21). Which one is the zone audited against?',
  'The 48-hour EMWATCH appointment for a CT brain review (memo HKL/JK/98/188/3(21)23, 10 Oct 2023): which cases count as "neuromedical" (head injury?), and whether it stands beside AK-15\'s 48 to 72 hours.',
  'Who makes the police report when the next of kin of a patient discharged by Psychiatry cannot be reached within 4 hours (memo HKL/JK/98/188/3(11)23), and for an absconded patient within 24 hours (department policy 2026, 32.4.2)?',
  'The IV antibiotic flow chart (memo HKL/JK/98/188/3(10)26, 30 Jun 2026): note 1 gives the bed priority as Yellow Observation, Wad ISO or ISO 3, note 4 as Yellow Observation or "Wad ISO 2".',
  'Mass casualty incidents: what counts as one (more than 2 casualties in the 2026 hospital plan, p30; 20 or more in PK-03, 2011; tag counts in the business continuity plan); what happens to the patients already in the Green Zone; and an action card for an MO or house officer, which none of the documents read has. The ED\'s internal disaster flow chart and the external disaster action cards on the disaster link page need an MOH sign-in.'
];

/* A pearl for each shift, from Million Ringgit Habits and the one-way flow */
const TIPS = [
  {t:'Persistent vomiting in the febrile phase is not a dengue warning sign: warning signs are most predictive in the critical phase, when the fever settles.', href:'#dengue-cpg', l:'Dengue CPG, p15'},
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
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M5.3 18.7l1.5-1.5M17.2 6.8l1.5-1.5"/>',
  moon:'<path d="M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a7 7 0 0 0 9.7 9.7z"/>',
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
  gauge:'<path d="M4 16a8 8 0 0 1 16 0"/><path d="m12 16 4-5"/><circle cx="12" cy="16" r="1.4"/>',
  kid:'<circle cx="12" cy="5" r="2.4"/><path d="M12 8.5v6.5M8 11l4-2 4 2M9.5 21l2.5-6 2.5 6"/>',
  scale:'<path d="M12 4v16M8.5 20h7M5 7h14M5 7l-2.5 6M5 7l2.5 6M19 7l-2.5 6M19 7l2.5 6"/><path d="M2.5 13a2.5 2.5 0 0 0 5 0zM16.5 13a2.5 2.5 0 0 0 5 0z"/>',
  feather:'<path d="M19 4C11 4 6 9 6 17v3"/><path d="M6 17c6 0 11-4 13-13M10 13h5"/>',
  ext:'<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
  flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.4 14h9.2"/>',
  bone:'<path d="M9.2 7.6l7.2 7.2M7.6 9.2l7.2 7.2"/><circle cx="7.8" cy="5.6" r="2"/><circle cx="5.6" cy="7.8" r="2"/><circle cx="18.4" cy="16.2" r="2"/><circle cx="16.2" cy="18.4" r="2"/>'
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
const KIND_G = {admit:'Admit', discharge:'Discharge', observe:'Observation', refer:'Refer', neutral:'What the CPG says'};
const OUT_ORDER = ['admit','observe','discharge','refer','neutral'];
const OUT_LBL = {admit:'Admit', observe:'Observation', discharge:'Discharge', refer:'Refer', neutral:'Next step'};
const OUT_IC = {admit:'bed', discharge:'door', observe:'clock', refer:'send', neutral:'step'};
/* The hospital blocks of the Code Blue Manual's Appendix ii (Response Locations By Block), placed as its schematic draws them
   (left, top, width, height in %), with who responds there from Table 1 or Table 2. A block of the map is a button (cbmap). */
const CB_BLOCKS = {
  nephro:{n:'Nephro / Urology', f:'Institut Urologi & Nephrologi', p:[2.9, 6, 25.5, 9.5], l:['Response team: the Nephrology & Urology Department, for the Nephrology & Urology Institute and the Research & Finance blocks: 03-2615 5381 (Nephrology), 03-2615 6231 (Urology)', 'Code Blue team: Emergency']},
  onco:{n:'Onco / Radio\u00ADtherapy', f:'Bangunan Radioterapi & Onkologi', p:[42, 3.5, 24.5, 12.5], l:['Response team: Nuclear Medicine / Radiotherapy, for the Oncology & Radiotherapy Institute: 03-2615 6816', 'Code Blue team: Emergency']},
  park:{n:'Multi-level parking', f:'Bangunan "parking" bertingkat', p:[70, 3.5, 21, 12.5], l:['The 5333 number is given to the multi-storey car park and the auxiliary police (5.1)', 'Table 1 names no response team for it']},
  main:{n:'Main block', f:'Bangunan Utama (Main Block HKL)', p:[30.6, 25.5, 20.2, 12.5], a:'Code Blue: ext 5333 (03-2615 5333). Wards: Anaesthesia, 03-2615 6510', l:['Wards (in-patient residents), ICU, HDW, CCU and CRW: the Anaesthesia team, 03-2615 6510 (Table 1)', 'The ED covers the main hospital lobby, and the "ground floor and first floor of main hospital block and overall coverage of the entire hospital grounds (On public holidays)" (3.0)']},
  iktar:{n:'IKTAR', f:'Bangunan IKTAR', p:[53.2, 25.5, 15.8, 12.5], l:['Response team: Neurosurgery / Neuromedical / Psychiatry, for the Institut Kaji-saraf TAR: 03-2615 6656 / 5193', 'Code Blue team: Emergency']},
  mhkl:{n:'MHKL', f:'Bangunan Hospital Bersalin (Maternity Hospital)', p:[71.4, 25.5, 26, 12.5], l:['Maternity Hospital: the Code Blue team is Emergency', 'Table 1 prints no contact number for it']},
  hta:{n:'HTA', f:'Hospital Tunku Azizah', p:[31, 48, 25.5, 12.5], a:'WCH code blue team: 03-2600 1050', l:['Table 1 lists the Woman and Child Hospital (WCH): its own WCH code blue team covers WCH and the Paediatric Institute']},
  wisma:{n:'Wisma Kayu / Ortho', f:'Bangunan Wisma Kayu dan Orthopedik', p:[71.6, 48.5, 25.4, 12.5], l:['Response team: the Orthopaedic outpatient clinic, for the clinic, the Wisma Kayu area, the mosque and the surrounding area (during office hours): 03-2615 5525', 'Code Blue team: Emergency']},
  scacc:{n:'SCACC', f:'Specialist Centre & Ambulatory Care Centre', p:[1, 61, 25.4, 13], z:2, a:'Office hours: ext 1133 / 1134 and 5333 together. After 1700 hr: 5333', l:['Each level has a gazetted First Responder trained in BLS and high-quality CPR, and its own extension (Table 2)', 'After office hours the dialysis unit staff respond first, and the ED Code Blue team second (4.2)']},
  iphkl:{n:'IPHKL', f:'Institut Paediatrik', p:[30.2, 76, 26.4, 13], a:'WCH code blue team: 03-2600 1050', l:['Table 1: the WCH code blue team covers the Woman and Child Hospital and the Paediatric Institute']}
};
const CB_ROADS = [[0, 18.7, 100, 3.6], [0, 40.9, 100, 3.6], [27.6, 44.5, 1.8, 55.5], [64.8, 44.5, 1.8, 23.7], [29.4, 68.2, 70.6, 3.4]];
const CBM_HINT = '<p class="cbm-h">Tap a block: who responds there, and the number. Not on the map: the Radiology department, 03-2615 7019 / 5928 (Table 1).</p>';
function cbBlock(k){
  const b = CB_BLOCKS[k];
  return `<p class="cbm-name">${esc(b.n)}<small>${esc(b.f)}</small></p><p class="cbm-a${b.z ? ' z2' : ''}">${esc(b.a || 'Code Blue: ext 5333 (03-2615 5333)')}</p><ul>${b.l.map(x => `<li>${esc(x)}</li>`).join('')}</ul><p class="cbm-src">Appendix ii and Table ${b.z ? 2 : 1}, Code Blue Manual 2022/2024</p>`;
}
/* Tap a block: it lights, and the panel under the map says who responds there; tap it again to clear */
function cbPick(b){
  const f = b.closest('.figcbm'), on = b.getAttribute('aria-pressed') !== 'true';
  f.querySelectorAll('[data-cbb]').forEach(x => x.setAttribute('aria-pressed', String(x === b && on)));
  f.querySelector('.cbm-out').innerHTML = on ? cbBlock(b.dataset.cbb) : CBM_HINT;
}
/* The 20WBCT timer in the snakebite figure (wbct): 20 minutes from Start, with the clock time to tip the tube. It lives in memory only,
   so it keeps running while you move between steps; nothing is stored (rule 4). */
let wbEnd = 0, wbT = null;
const wbLeft = () => wbEnd ? Math.max(0, Math.round((wbEnd - Date.now()) / 1000)) : 1200;
const wbFmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
const wbAt = s => !wbEnd ? 'Start it when the blood goes into the tube' : s ? 'Tip the tube once at ' + new Date(wbEnd).toTimeString().slice(0, 5) : 'Tip the tube once now';
function wbTimer(){
  const s = wbLeft();
  if (wbEnd && s && !wbT) setTimeout(() => { if (!wbT) wbT = setInterval(wbTick, 1000); }, 0);
  return `<div class="wb-tm${wbEnd && !s ? ' due' : ''}"><button type="button" class="soft sm" data-wbct>${wbEnd ? 'Restart the 20 minutes' : 'Start the 20 minutes'}</button><output class="wb-cd">${wbFmt(s)}</output><span class="wb-at">${wbAt(s)}</span></div>`;
}
function wbTick(){
  const s = wbLeft();
  $$('.wb-tm').forEach(t => { t.querySelector('.wb-cd').textContent = wbFmt(s); t.querySelector('.wb-at').textContent = wbAt(s); t.classList.toggle('due', !s); t.querySelector('[data-wbct]').textContent = 'Restart the 20 minutes'; });
  if (!s){ clearInterval(wbT); wbT = null; }
}
function wbctStart(){ wbEnd = Date.now() + 1200000; clearInterval(wbT); wbT = null; wbTick(); wbT = setInterval(wbTick, 1000); }
/* Infographics for the rabies protocol (10 Nov 2026), drawn from its flow charts and appendices; a node or note names one in fig */
const FIGS = {
  /* The three wound categories of the flow charts (Appendices 2 and 3), with what each leads to */
  woundcat:() => {
    const skin = cut => `<svg class="wc-sk" viewBox="0 0 64 40" aria-hidden="true"><rect x="2" y="22" width="60" height="16" rx="3" class="sk3"/><rect x="2" y="12" width="60" height="12" rx="2" class="sk2"/><rect x="2" y="7" width="60" height="6" rx="2" class="sk1"/>${cut}</svg>`;
    const rows = [['c1', '1', 'Intact skin', 'No vaccine, no RIG', ''],
      ['c2', '2', 'Superficial wound', 'Vaccine, by prophylaxis history', '<path class="cut" d="M24 7l4 4 4-3 4 4 4-4"/>'],
      ['c3', '3', 'Punctured wound', 'Vaccine, and RIG if eligible', '<path class="cut" d="M30 6l2 26 2-26"/><circle class="drop" cx="32" cy="4" r="2.4"/>']];
    return `<div class="fig figwc" role="img" aria-label="Wound categories: 1, intact skin, no vaccine or RIG; 2, superficial wound, vaccine by prophylaxis history; 3, punctured wound, vaccine and RIG if eligible">${rows.map(([c, n, t, d, cut]) => `<div class="wc ${c}">${skin(cut)}<b>Category ${n}</b><span>${t}</span><em>${d}</em></div>`).join('')}</div>`;
  },
  /* The vaccine schedules on a day strip, with the sites and the dose at each (Appendix 2) */
  sched:() => {
    const R = [['Full course · IM', '1 site; D0,3,7,14-28', [0, 3, 7], [14, 28], ''], ['Full course · ID', '2 sites; D0,3,7', [0, 3, 7], null, '×2'],
      ['Shorter course · IM/ID', '1 site; D0,3', [0, 3], null, ''], ['Shorter course · ID', '4 sites; D0', [0], null, '×4']];
    const x = d => (d / 28 * 100).toFixed(2) + '%';
    return `<div class="fig figsc"><div class="sc-k" role="img" aria-label="Rabies vaccine schedules: full course IM 1 site on days 0, 3, 7 and 14 to 28, or ID 2 sites on days 0, 3 and 7; shorter course after post-exposure prophylaxis 3 months ago or more, IM or ID 1 site on days 0 and 3, or ID 4 sites on day 0">
      <p class="sc-cap">Full course: no previous post-exposure prophylaxis. Shorter course: post-exposure prophylaxis 3 months ago or more.</p>
      ${R.map(([t, d, days, rng, m]) => `<div class="sc-r"><span class="sc-l"><b>${t}</b>${d}</span><div class="sc-t"><span class="sc-line"></span>${rng ? `<s style="--a:${x(rng[0])};--b:${x(rng[1])}"></s>` : ''}${days.map(n => `<i style="--x:${x(n)}">${m ? `<small>${m}</small>` : ''}</i>`).join('')}</div></div>`).join('')}
      <div class="sc-r sc-ax"><span class="sc-l"></span><div class="sc-t">${[0, 3, 7, 14, 28].map(n => `<em style="--x:${x(n)}">D${n}</em>`).join('')}</div></div></div>
      <div class="sc-site" role="img" aria-label="Sites: deltoid for IM or ID, suprascapular for ID, anterolateral thigh for ID. Dose at each site: IM 0.5 ml, ID 0.1 ml">
        <svg viewBox="0 0 132 120" aria-hidden="true"><g class="bd"><circle cx="34" cy="14" r="9"/><path d="M20 28q14-6 28 0l4 34h-36z"/><path d="M20 30l-9 32M48 30l9 32"/><path d="M25 62l-3 52M43 62l3 52"/><circle cx="98" cy="14" r="9"/><path d="M84 28q14-6 28 0l4 34h-36z"/><path d="M84 30l-9 32M112 30l9 32"/><path d="M89 62l-3 52M107 62l3 52"/></g>
          <circle class="pt im" cx="17" cy="38" r="4.5"/><circle class="pt id" cx="24" cy="80" r="4.5"/><circle class="pt id" cx="91" cy="35" r="4.5"/><circle class="pt id" cx="105" cy="35" r="4.5"/>
          <text x="34" y="119" class="cap">front</text><text x="98" y="119" class="cap">back</text></svg>
        <ul><li><i class="pt im"></i>Deltoid (IM/ID)</li><li><i class="pt id"></i>Suprascapular (ID)</li><li><i class="pt id"></i>Anterolateral thigh (ID)</li></ul>
        <p class="sc-dose"><b>Dose (each site)</b><span>IM <b>0.5 ml</b></span><span>ID <b>0.1 ml</b></span></p></div></div>`;
  },
  /* RIG at a glance (Appendices 3 and 6) */
  rig:() => `<div class="fig figrig" role="img" aria-label="RIG: 1 vial, 1000 IU, at most 1 vial a patient; infiltrate around the wounds; equine RIG may be diluted with normal saline to 2 to 3 times the volume; never in the same syringe as the rabies vaccine">
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v3l-3 4v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9l-3-4V3"/><path d="M7 13h10"/></svg><b>1 vial (1000 iu)</b><span>Max. dose: 1 vial/patient</span></div>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12c3-4 13-4 16 0-3 4-13 4-16 0z"/><path d="M12 4v3M12 17v3M5 6l2 2M19 6l-2 2M5 18l2-2M19 18l-2-2"/></svg><b>Infiltrate around the wounds</b><span>Stat, in the ED when urgent</span></div>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v5l3 4v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7l3-4z"/><path d="M6 15h12"/></svg><b>Equine RIG may be diluted</b><span>With normal saline, 2 – 3x volume</span></div>
    <div class="no"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><circle cx="12" cy="12" r="10"/><path d="m5 5 14 14"/></svg><b>Never in the same syringe</b><span>as the rabies vaccine</span></div></div>`,
  /* ---- Code Blue (Code Blue Manual 2022/2024, 5th edition) ---- */
  /* The numbers to call, each with Copy (section 14 and Appendices iv and v) */
  cbcall:() => {
    const R = [['hot', 'Activate Code Blue', 'Anywhere in the hospital grounds. Direct line 03-2615 5333', '5333', '03-2615 5333'],
      ['z2', 'SCACC, office hours', 'Anaesthesia, with 5333 at the same time', '1133 / 1134', 'ext 1133 / 1134'],
      ['', 'Death at the scene', 'Forensic Department', '6695', 'ext 6695'],
      ['', 'Call Center 2', 'The MA in charge holds the kit key', '6700', 'ext 6700']];
    return `<div class="fig figcbn"><div class="cbn-g">${R.map(([c, t, s, v, cp]) => `<div class="cbn${c ? ' ' + c : ''}"><span class="cbn-t"><b>${t}</b>${s}</span><span class="cbn-v"><small>ext</small>${v}</span><button type="button" class="cpy" data-cpy="${cp}" aria-label="Copy ${cp}">${svg('copy')}<span class="bl">Copy</span></button></div>`).join('')}</div><p class="fig-cap">Code Blue Manual 2022/2024: the phone directory (14, p21) and Appendices iv and v.</p></div>`;
  },
  /* The blocks of the hospital (Appendix ii), each a button that says who responds there */
  cbmap:() => `<div class="fig figcbm"><div class="cbm-map" role="group" aria-label="The hospital blocks, from Appendix ii (a schematic, not to scale). Tap a block for who responds there">
      ${CB_ROADS.map(([x, y, w, h]) => `<i class="rd" aria-hidden="true" style="--x:${x}%;--y:${y}%;--w:${w}%;--h:${h}%"></i>`).join('')}
      ${Object.entries(CB_BLOCKS).map(([k, b]) => `<button type="button" class="cbm-b${b.z ? ' z2' : ''}" data-cbb="${k}" aria-pressed="false" style="--x:${b.p[0]}%;--y:${b.p[1]}%;--w:${b.p[2]}%;--h:${b.p[3]}%">${esc(b.n)}</button>`).join('')}</div>
    <div class="cbm-key"><span class="z1">Zone 1: Code Blue on 5333</span><span class="z2">Zone 2, SCACC: 1133 / 1134 with 5333</span></div>
    <div class="cbm-out" aria-live="polite">${CBM_HINT}</div></div>`,
  /* SCACC, level by level, with each level's extension (Table 2) */
  cbscacc:() => {
    const L = [[8, 'Daycare Medical / Surgical, TSSU, OT, RHU', '1695 · 1704'], [7, 'Anaesthesia OT, and every floor as Secondary Responder', '1133 / 1134', 'an'],
      [6, 'Ophthalmology, ORL, Dermatology, Plastic & Reconstructive Surgery, Oncology Day Care', '1478 / 5561'], [5, 'Neurosurgery and Neurology Clinics', '1046 / 1047'],
      [4, 'Psychiatry Clinic, Satellite Pharmacy Area 1', '1043 / 1044'], [3, 'Dialysis Unit, Nephrology and Urology Clinics', '1035 / 1036'],
      [2, 'Surgery and Medical Clinics, Dental Clinic, Welfare Unit, Cafeteria', '1021 / 1023'], [1, 'Orthopaedic Clinic, Foyer, Lobby, X-ray, Pathology lab, Cafeteria', '1007 / 1104']];
    return `<div class="fig figcbs"><ol class="cbs" aria-label="SCACC levels 8 to 1 and each level's Code Blue extension (Table 2)">${L.map(([n, t, x, c]) => `<li${c ? ` class="${c}"` : ''}><b aria-label="Level ${n}">${n}</b><span>${esc(t)}</span><em>${x}</em></li>`).join('')}</ol><p class="fig-cap">Table 2, p13: on every level the Code Blue team is Anaesthesia & Emergency. Office hours: the floor's First Responder calls 1133 / 1134 and 5333 together. After 1700 hr: 5333.</p></div>`;
  },
  /* The 10-minute response, and what to do past it (5.3c, 5.4d and 5.4e) */
  cbclock:() => `<div class="fig figcbk" role="img" aria-label="The 10-minute response: call 5333 and start BLS at once; the Code Blue team arrives within 10 minutes. Past 10 minutes, BLS-trained staff stay and play, continuing CPR; staff not trained in BLS start the transfer to the ED.">
    <div class="cbk-bar"><span class="cbk-fill"></span></div>
    <div class="cbk-ax"><span><b>0 min</b>Call 5333 · start BLS</span><span><b>≤ 10 min</b>The Code Blue team arrives</span></div>
    <div class="cbk-fork"><p class="ok"><b>Past 10 min, BLS-trained</b>Stay & play: continue CPR until the team arrives (5.4e)</p><p class="no"><b>Past 10 min, no one BLS-trained</b>Start the transfer to the ED (5.4d)</p></div></div>`,
  /* The chain of survival (2.1), as its four links are listed */
  cbchain:() => {
    const C = [['Recognition and activation of the emergency response system', '<path d="M6.5 3.5h3l1.6 4-2 1.3a10 10 0 0 0 6.1 6.1l1.3-2 4 1.6v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>'],
      ['Immediate high-quality CPR', '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/><path d="M12 2.5v3M9.5 4.5 12 7l2.5-2.5"/>'],
      ['Rapid defibrillation', '<path d="M13.5 2.5 5 13.5h6l-1.2 8L18.5 10h-6.2z"/>'],
      ['Advanced life support and post-arrest care', '<path d="M2.5 12.5h4l2-5 3.5 10 2.5-6.5 1.5 1.5h5.5"/>']];
    return `<div class="fig figcbc" role="img" aria-label="The chain of survival: ${C.map(c => c[0].toLowerCase()).join('; ')}"><div class="cbc-g">${C.map(([t, d], i) => `<div class="cbc" style="--d:${(i * .12).toFixed(2)}s"><svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg><span>${t}</span></div>`).join('')}</div><p class="fig-cap">The chain of survival, as rapidly as possible (2.1, p8).</p></div>`;
  },
  /* Who comes: the three teams and the six roles (6.0) */
  cbteam:() => {
    const T = [['ed', 'ED Code Blue team', 'Trained in BLS, ACLS and ATLS', [['Emergency Physician on call', 1], ['Red/yellow zone MO', 1], ['Runner SN and treatment room MA', 2], ['Attendant/porter', 1]]],
      ['an', 'Anaesthesia team', 'SCACC, ICU, HDW, CCU, CRW and the wards', [['Specialist', 1], ['Medical Officer', 1], ['Medical Assistant', 1]]],
      ['pr', 'Primary Responder', 'Trained in at least BLS', [['Specialist', 1], ['Medical officers', 2], ['Paramedics: SN or MA', 2]]]];
    const roles = ['Team leader', 'Airway manager', 'Chest compression', 'Intravenous line', 'Drug preparation', 'Defibrillation'];
    return `<div class="fig figcbt"><div class="cbt-g">${T.map(([c, h, s, m]) => `<div class="cbt ${c}"><div class="cbt-h"><b>${h}</b><em>${m.reduce((a, x) => a + x[1], 0)}</em></div><small>${s}</small><ul>${m.map(([t, k]) => `<li><span class="cbt-d" aria-hidden="true">${'<i></i>'.repeat(k)}</span>${t}${k > 1 ? ` (${k})` : ''}</li>`).join('')}</ul></div>`).join('')}</div>
      <div class="cbt-r"><b>Roles</b>${roles.map((r, i) => `<span><i>${i + 1}</i>${r}</span>`).join('')}</div><p class="fig-cap">Code Blue team composition (6.0, p19). The team is available all the time.</p></div>`;
  },
  /* The hospital's emergency colour codes, from the rapid response card */
  cbcodes:() => {
    const C = [['black', 'Code Black', 'Bomb or CBRNE threat', 'Bomb threats, or chemical, biological, radiological, nuclear and explosive incidents', '5441', '', '<circle cx="12" cy="12" r="1.4"/><path d="M10.5 9.4 8 5.07a8 8 0 0 1 8 0l-2.5 4.33a3 3 0 0 0-3 0zM15 12h5a8 8 0 0 1-4 6.93l-2.5-4.33A3 3 0 0 0 15 12zM10.5 14.6 8 18.93A8 8 0 0 1 4 12h5a3 3 0 0 0 1.5 2.6z"/>'],
      ['silver', 'Code Silver', 'Armed threat', 'Armed threats or hostages', '5441', '', '<path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6z"/><path d="M9 12h6"/>'],
      ['gray', 'Code Gray', 'Physical violence', 'Physical violence involving visitors or staff', '5441', '', '<circle cx="8" cy="6" r="2.2"/><circle cx="16.5" cy="6" r="2.2"/><path d="M8 9v5l-2 6M8 14l2.5 6M16.5 9v5l2 6M16.5 14 14 20M10.5 11l3.5-1.5"/>'],
      ['orange', 'Code Orange', 'Fire and mass disaster', 'Fires, or large-scale facility emergencies', '6000', '', '<path d="M12 21c-3.6 0-6-2.5-6-5.8 0-3.8 3.3-5.4 3.8-9.7 2.3 1.4 3.4 3.8 3.4 5.6 1-.6 1.6-1.7 1.7-3 1.9 1.7 3.1 4 3.1 6.9 0 3.5-2.4 6-6 6z"/>'],
      ['blue', 'Code Blue', 'Medical emergency', 'Anyone found unconscious or in cardiac arrest', '5333', '1133 in SCACC', '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/><path d="M7 12.5h2.5l1.2-2 2 4 1.3-2H17"/>'],
      ['purple', 'Code Purple', 'Psychiatric emergency', 'Attempted suicide or self-harm', '5441', '', '<path d="M9.5 20v-3H8a2 2 0 0 1-2-2v-2.5L4.5 11l1.6-2.6A6.5 6.5 0 0 1 18.5 9c0 2.3-1 3.9-2.5 5v6"/><path d="M11.2 8.5a1.6 1.6 0 1 1 2.2 1.5c-.6.3-.9.7-.9 1.3M12.5 13.5v.01"/>']];
    return `<div class="fig figcc"><div class="cc-g">${C.map(([k, n, t, d, x, x2, ic]) => `<div class="cc ${k}"><span class="cc-ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ic}</svg></span><div class="cc-t"><b>${n}</b><span class="cc-s">${t}</span><span class="cc-d">${d}</span></div><div class="cc-x"><span class="cc-n"><small>ext</small>${x}</span>${x2 ? `<small>${x2}</small>` : ''}<button type="button" class="cpy" data-cpy="ext ${x}" aria-label="Copy ext ${x} for ${n}">${svg('copy')}<span class="bl">Copy</span></button></div></div>`).join('')}</div><p class="fig-cap">HKL Emergency Color Codes: Rapid Response Guide (no issuer or date printed; shared 10 Nov 2026). Check against the hospital's circular. The hospital disaster plan (2026) names no Code Orange: 6000 is its line for a fire or any internal incident (p56); an external mass casualty incident comes through MECC and the EP on call (p29 to 31).</p></div>`;
  },
  /* The Code Blue Record Clerking Sheet, drawn as its sections (Appendix vii) */
  cbsheet:() => `<div class="fig figsh"><div class="sh" role="img" aria-label="The Code Blue Record Clerking Sheet, Code_blue/CS-01, version 2019: patient data; the type of emergency with CPR and ROSC times; observations; the Code Blue team's airway, breathing, ECG, DXT and diagnosis; the attending clinicians; and the DAMA section">
      <div class="sh-h"><b>Code Blue clerking sheet, Hospital Kuala Lumpur</b><span>Code_blue/CS-01 · version 2019</span></div>
      <div class="sh-r c2"><span>Patient demographic data</span><span>Date · time</span></div>
      <div class="sh-r"><span>Primary responder area</span></div>
      <div class="sh-r c3"><span><i>1</i>Medical emergency</span><span><i>2</i>Cardio respiratory arrest · CPR · ROSC</span><span><i>3</i>Trauma</span></div>
      <div class="sh-t"><span>Time</span><span>BP</span><span>HR</span><span>SpO2</span><span>GCS</span><span>Drugs</span><span>IV fluids</span></div>
      <div class="sh-b">To be filled by the Code Blue team</div>
      <div class="sh-r c2"><span>Airway: intubated, suction, ETT/LMA</span><span>Breathing: regular, irregular, arrest, NpO2, HFMO2</span></div>
      <div class="sh-r c3"><span>ECG</span><span>DXT</span><span>Diagnosis</span></div>
      <div class="sh-r c2"><span>1st responder</span><span>2nd responder / Code Blue team</span></div>
      <div class="sh-b dama">DAMA: the patient, the Code Blue team, a witness</div></div>
    <p class="fig-cap">Appendix vii, p28. The primary responder and the Code Blue team fill it in (5.3f).</p></div>`,
  /* ---- The medical interpreter service: the flow chart of the memo of 9 Jul 2026 (Lampiran 1) ---- */
  interp:() => {
    const S = [['Your department needs an interpreter', '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M15.5 4.5h5v4h-2l-1.5 1.5V8.5h-1.5z"/>'],
      ['Call line 0: IbuSawat HKL, the hospital operator', '<path d="M6.5 3.5h3l1.6 4-2 1.3a10 10 0 0 0 6.1 6.1l1.3-2 4 1.6v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>'],
      ['The telephonist calls the interpreter for the language, from the list HKL management appointed', '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>'],
      ['The line is put through to the interpreter', '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>'],
      ['You and the interpreter talk, for the interpreter to attend in person', '<path d="M4 5h11v8H9l-4 3.5V13H4z"/><path d="M15 9h5v8h-1v3l-3.5-3H11v-2"/>']];
    return `<div class="fig figint"><ol>${S.map(([t, d], i) => `<li style="--d:${(i * .1).toFixed(1)}s"><span class="ii"><svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg></span><span class="it"><b>${i + 1}</b>${t}</span></li>`).join('')}</ol>
      <p class="int-l"><span lang="zh">华语</span><span lang="ta">தமிழ்</span><span lang="ne">नेपाली</span><span lang="bn">বাংলা</span></p><p class="fig-cap">Lampiran 1, the flow chart of the medical interpreter service (memo of 9 Jul 2026).</p></div>`;
  },
  /* ---- Snakebite (MOH Guideline: Management of Snakebite, 2017), drawn from the entry's own facts and pages ---- */
  /* Looking for ptosis and weak eye movements at the bedside (4.2.4, p32; p46) */
  ptosis:() => {
    const face = (lid, eyeY, extra) => `<svg viewBox="0 0 120 92" aria-hidden="true"><ellipse cx="60" cy="50" rx="34" ry="38" class="sk"/>${[44, 76].map(x => `<ellipse cx="${x}" cy="46" rx="9" ry="6" class="ew"/><circle cx="${x}" cy="${eyeY}" r="3.2" class="ir"/><path d="M${x - 10} ${46 + lid}q10 ${-7 - lid / 2} 20 0" class="lid"/>`).join('')}${extra}</svg>`;
    const up = '<path d="M60 14V4m0 0-4 4m4-4 4 4" class="ar"/><circle cx="60" cy="16" r="2.6" class="fi"/>';
    return `<div class="fig figpt"><div class="pt-g">
      <div class="pt n">${face(0, 43, up)}<b>Normal</b><span>Look up, head still: the upper lids lift fully</span></div>
      <div class="pt y">${face(5, 45, up)}<b>Ptosis</b><span>The upper lids lift less, or not at all (p32)</span></div>
      <div class="pt e">${face(0, 46, '<path d="M14 46H2m0 0 4-4m-4 4 4 4M106 46h12m0 0-4-4m4 4-4 4" class="ar"/>')}<b>Eye movements</b><span>Follow the finger side to side: an eye that cannot follow, double vision</span></div></div>
      <p class="fig-cap">Paralysis descends, and ptosis comes first (p32). Also: fixed dilated pupils, the broken neck sign, difficulty swallowing, paradoxical breathing (p46).</p></div>`;
  },
  /* The 20WBCT, with a 20-minute timer that keeps nothing (4.5.9, p39; 7.5.3 and 7.6.1, p75) */
  wbct:() => {
    const tube = (f, tilt) => `<svg viewBox="0 0 40 64" aria-hidden="true"><g${tilt ? ' transform="rotate(-62 20 34)"' : ''}><path d="M12 6h16v44a8 8 0 0 1-16 0z" class="tb"/>${f}</g></svg>`;
    const S = [['2 ml of fresh venous blood', '<svg viewBox="0 0 40 64" aria-hidden="true"><path d="M8 48 28 18m-4-6 8 8M22 10l10 10M10 50l-4 4" class="tb"/><path d="M12 42l12-18" class="bl2"/></svg>'],
      ['A small, dry glass tube, new or heat-cleaned', tube('<path d="M12 38h16v12a8 8 0 0 1-16 0z" class="bf"/>')],
      ['20 minutes, undisturbed, at room temperature', '<svg viewBox="0 0 40 64" aria-hidden="true"><circle cx="20" cy="34" r="15" class="tb"/><path d="M20 34V24m0 10 7 4" class="tb"/><path d="M16 12h8" class="tb"/></svg>'],
      ['Then tip it once', tube('<path d="M12 38h16v12a8 8 0 0 1-16 0z" class="bf"/>', true)]];
    return `<div class="fig figwb"><ol class="wb-s">${S.map(([t, s], i) => `<li><span class="wb-i">${s}</span><b>${i + 1}</b><span>${t}</span></li>`).join('')}</ol>
      <div class="wb-r"><div class="ok">${tube('<path d="M12 22h16v28a8 8 0 0 1-16 0z" class="bf"/>', true)}<p><b>Clotted</b>The blood stays put as a clot. Repeat as needed (p39)</p></div>
        <div class="no">${tube('<path d="M6 44q14 6 28-2v10H6z" class="bf"/><path d="M28 50q4 6 2 10" class="bf"/>', true)}<p><b>Not clotted</b>It runs: a coagulopathy is possible (p39)</p></div></div>
      ${wbTimer()}
      <p class="fig-cap">Not on its own for antivenom: read it with the patient (p39). After antivenom, clotting usually returns in 3-9 hours; recheck 6 hours after the infusion ended (p75). The timer stores nothing.</p></div>`;
  },
  /* Observation from arrival (chapter 5, p46; 6.3.8, p54; 4.2, p31; Appendix 2, p91; Table 11, p40; 9.1.2.1, p83) */
  obs:() => {
    const T = [['Acute', 'Every 5-15 minutes', 'Vital signs, pain score and PEFR; temperature 4-hourly; urine output hourly (6.3.8)'],
      ['First 12 hours', 'At least hourly', 'Serial assessment on the snakebite chart (chapter 5; Appendix 2)'],
      ['To 48 hours', 'Serial assessment', 'Bloods by the snake: pit viper or unidentified, FBC, clotting profile and CK 6-hourly (Table 11)'],
      ['Species unknown', 'At least 24 hours', 'Of close observation (4.2, p31)'],
      ['After antivenom', 'At least 1 hour', 'Of monitoring after the infusion (7.3.1, p69)'],
      ['After discharge', '5-7 days', 'Blood tests after a pit viper envenoming, for recurrence (9.1.2.1, p83)']];
    return `<div class="fig figob"><ol class="ob-l">${T.map(([w, b, s], i) => `<li style="--d:${(i * .08).toFixed(2)}s"><span class="ob-w">${w}</span><b>${b}</b><span>${s}</span></li>`).join('')}</ol></div>`;
  },
  /* Giving antivenom (7.3.1, p69) and what to expect (7.5, p75) */
  avgive:() => {
    const S = [['Adrenaline ready', 'Adult 0.5 mg; child 0.01 mg/kg, of 1 mg/ml'], ['Reconstitute', 'The solution supplied or 10 ml water for injection; swirl, never shake'], ['Dilute', 'Adult 250-500 ml NS or D5%; child 5-10 ml/kg'], ['Run slowly, then faster', '1-2 ml/min for 10-15 minutes; done within an hour'], ['Monitor', 'During it and for at least an hour after']];
    const R = [['15-30 min', 'Bleeding stops'], ['30-60 min', 'Blood pressure may rise'], ['3-9 h', 'Clotting returns'], ['6 h after the end', 'Recheck clotting; still abnormal: repeat the starting dose']];
    return `<div class="fig figav"><ol class="av-s">${S.map(([t, s], i) => `<li><b>${i + 1}</b><span><em>${t}</em>${s}</span></li>`).join('')}</ol>
      <div class="av-r"><span class="av-h">Then expect (p75)</span>${R.map(([t, s]) => `<span><b>${t}</b>${s}</span>`).join('')}</div>
      <p class="fig-cap">IV only, the same dose at every age (7.3.1, p69; 6.6, p58). Confirm the product and dose with the EP.</p></div>`;
  },
  /* Antivenom reactions on a time axis (Table 17, p76 to 77; 7.7, p76) */
  react:() => `<div class="fig figrx" role="img" aria-label="Antivenom reactions: early, 2 to 180 minutes after starting, stop the antivenom and give adrenaline; pyrogenic, 1 to 2 hours after, cool, antipyretic and fluids; late, 1 to 12 days after, oral chlorpheniramine, then prednisolone">
    <div class="rx-ax"><i></i></div>
    <div class="rx-g"><div class="e"><b>Early</b><em>2-180 minutes</em><span>Stop the antivenom; adrenaline IM, adult 0.5 mg, child 0.01 mg/kg</span></div>
      <div class="p"><b>Pyrogenic</b><em>1-2 hours after</em><span>Cool the patient, an antipyretic, IV fluids</span></div>
      <div class="l"><b>Late</b><em>1-12 days after</em><span>Chlorpheniramine by mouth for 5 days; prednisolone if no response in 24-48 hours</span></div></div>
    <p class="fig-cap">Restart more slowly once it has settled (7.7, p76). Doses: Table 17 in the Antivenom tab.</p></div>`,
  /* Rate of proximal progression of the swelling (Table 10, p34; 5.4.8, p48 to 50) */
  rpp:() => `<div class="fig figrp"><svg viewBox="0 0 320 96" role="img" aria-label="A forearm with two strips of tape at the proximal edge of the swelling, 4 hours apart and 2.5 cm apart: 0.6 cm an hour">
      <path d="M8 40c40-10 120-12 200-8 40 2 70 6 104 4v34c-34 2-64 6-104 8-80 4-160 2-200-8z" class="lb"/>
      <path d="M8 40c30-8 80-10 120-10v52c-40 0-90-2-120-10z" class="sw"/><path d="M100 30v52" class="ed"/><path d="M128 30v52" class="ed2"/>
      <rect x="94" y="22" width="12" height="16" rx="2" class="tp"/><rect x="122" y="22" width="12" height="16" rx="2" class="tp"/>
      <text x="100" y="16" class="tx">08:00</text><text x="128" y="16" class="tx">12:00</text>
      <path d="M100 90h28" class="ms"/><text x="114" y="96" class="tx s">2.5 cm in 4 hours = 0.6 cm/h</text>
      <circle cx="40" cy="58" r="3" class="bt"/><circle cx="48" cy="56" r="3" class="bt"/></svg>
    <ul class="rp-l"><li>Tape the proximal edge of the swelling, with the date and time; never a permanent marker (p34, p50)</li><li>Measure between the two tapes: the distance over the interval, in cm an hour (p49)</li><li>Keep only the two latest tapes; limb girth adds nothing (p49 to 50)</li></ul></div>`,
  /* ---- Communication on shift (10 Nov 2026): the department's quick card, Project BETA, SPIKES, AHRQ teach-back, ISBAR ---- */
  /* How far it has gone, and what to do at each level (the card; the colour codes card; the ebook p5 to 9) */
  cmdanger:() => `<div class="fig figcm"><div class="cmd">
      <div class="cmd-b g"><b>Angry, but talking</b><span>Talk it down: a safe stance, calm yourself, the three steps</span></div>
      <div class="cmd-b a"><b>Early danger signs</b><span>Clenched fists · pacing · invading personal space · verbal threats · throwing objects · sudden intense silence</span><em>Call senior staff or security now; talk only with backup</em></div>
      <div class="cmd-b r"><b>A weapon, or violence now</b><span>Step away. Code Gray (violence) or Code Silver (armed threat); the ebook: Polis Bantuan and Code Grey (p5 to 9)</span><div class="cmd-x"><span class="cc-n"><small>ext</small>5441</span><button type="button" class="cpy" data-cpy="ext 5441" aria-label="Copy ext 5441">${svg('copy')}<span class="bl">Copy</span></button></div></div></div>
    <p class="fig-cap">Never manage escalating aggression alone (the department's quick card). Ext 5441 is from the hospital's colour codes card.</p></div>`,
  /* Where to stand (the card; Project BETA, domains 1 and 2) */
  cmstance:() => `<div class="fig figcm"><div class="cms"><svg viewBox="0 0 300 170" role="img" aria-label="Seen from above: you stand at an angle to the patient, at least two arm's lengths away, with the door beside or behind you and a clear way out for both of you; a colleague stands back">
      <rect x="6" y="6" width="288" height="158" rx="10" class="rm"/><path d="M6 128v-36" class="dr"/><text x="12" y="146" class="tx">door</text>
      <path d="M40 110 C 90 120, 150 120, 200 96" class="pa"/><path d="M60 100 C 30 104, 14 108, 8 110" class="pa"/>
      <circle cx="222" cy="64" r="16" class="pt"/><text x="222" y="98" class="tx c">patient</text>
      <circle cx="96" cy="104" r="14" class="me"/><text x="96" y="134" class="tx c">you, at an angle</text>
      <circle cx="58" cy="52" r="11" class="co"/><text x="58" y="34" class="tx c">a colleague, back</text>
      <path d="M110 96 L206 70" class="gp"/><text x="136" y="60" class="tx c b">at least 2 arm's lengths</text><text x="136" y="72" class="tx c s">the card: 1 to 2</text></svg>
    <ul class="cms-l"><li class="y">Hands visible, relaxed, side-on</li><li class="y">A clear way out for you, and one for them</li><li class="n">Crossed arms or finger pointing</li><li class="n">Standing over a seated patient</li></ul></div>
    <p class="fig-cap">The card asks for 1 to 2 arm lengths; Project BETA, at least 2: the guide follows the wider gap.</p></div>`,
  /* The card's three steps, with its phrases as printed */
  cmdeesc:() => {
    const S = [['Acknowledge the emotion', ['I can see you’re upset.', 'I understand this is frustrating.']], ['Set respectful limits', ['I want to help you, but I cannot do that if staff feel unsafe.']], ['Offer choices', ['Would you prefer to sit here or move to the assessment room?']]];
    return `<div class="fig figcm"><ol class="cm3">${S.map(([h, q], i) => `<li style="--d:${(i * .1).toFixed(1)}s"><b><i>${i + 1}</i>${h}</b>${q.map(x => `<q>${x}</q>`).join('')}</li>`).join('')}</ol>
      <p class="cm-strip">One person talks · short sentences · repeat yourself · promise only what you can give</p><p class="fig-cap">The three steps and their phrases: the department's quick card. The strip: Project BETA (Richmond et al., 2012).</p></div>`;
  },
  /* The card's L.E.A.P. */
  cmleap:() => `<div class="fig figcm"><div class="cml">${[['L', 'Listen without interrupting'], ['E', 'Empathise'], ['A', 'Apologise for the situation'], ['P', 'Problem-solve together']].map(([k, t]) => `<div><b>${k}</b><span>${t}</span></div>`).join('')}</div>
    <q class="cm-q">I’m sorry the wait has been long. Let me see what I can do to help.</q>
    <p class="fig-cap">The card's own letters. The published LEAP (Amador) is Listen, Empathize, Agree, Partner.</p></div>`,
  /* Never say, and say instead: the card's two lists, not matched pairs */
  cmsay:() => `<div class="fig figcm"><div class="cmy"><div class="n"><b>Never say</b>${['Calm down!', 'It’s not my fault.', 'You have to wait.', 'If you don’t behave…'].map(x => `<q>${x}</q>`).join('')}</div>
      <div class="y"><b>Say instead</b>${['I want to help you.', 'Let’s figure this out together.', 'Your safety is important to us.', 'Here’s what I can do right now.'].map(x => `<q>${x}</q>`).join('')}</div></div>
    <p class="fig-cap">Both lists as the department's quick card prints them. Aggression is usually driven by fear, pain or loss of control, not by you.</p></div>`,
  /* SPIKES, in the guide's own words (Baile et al., 2000) */
  cmspikes:() => `<div class="fig figcm"><ol class="cmk">${[['S', 'Setting', 'A private place, seated'], ['P', 'Perception', 'Ask what they know first'], ['I', 'Invitation', 'How much do they want to know?'], ['K', 'Knowledge', 'Warn, then plain words, small pieces'], ['E', 'Emotions', 'Name the feeling, and pause'], ['S', 'Strategy', 'The plan, then sum up']].map(([k, h, t], i) => `<li style="--d:${(i * .07).toFixed(2)}s"><b>${k}</b><span><em>${h}</em>${t}</span></li>`).join('')}</ol>
    <p class="fig-cap">SPIKES (Baile et al., The Oncologist, 2000), in the guide's own words.</p></div>`,
  /* Teach-back as a loop (AHRQ Tool 5; Right Decision Service) */
  cmteach:() => `<div class="fig figcm"><div class="cmt"><div class="lp"><span class="a">Explain one or two points, in plain words</span><span class="b">Ask them to say it back, in their own words</span><span class="c ok">Right: the next point, then the safety-net</span><span class="c no">Not quite: explain it another way, and ask again</span></div>
      <div class="chips"><span class="y">“Show me”, for an inhaler or a new medicine</span><span class="n">“Do you understand?”</span></div></div>
    <p class="fig-cap">Teach-back tests your explanation, not the patient (AHRQ Health Literacy Universal Precautions Toolkit, Tool 5).</p></div>`,
  /* ISBAR for a phone referral (Marshall et al., 2009 and 2012; the NHS SBAR tool) */
  cmisbar:() => `<div class="fig figcm"><ol class="cmb">${[['I', 'Identify', 'Yourself, where you are, and the patient'], ['S', 'Situation', 'Why you are calling'], ['B', 'Background', 'The history and results that matter'], ['A', 'Assessment', 'What you think; or “not sure, but worried”'], ['R', 'Request', 'What you need, and by when (SBAR: recommendation)'], ['↺', 'Read back', 'They repeat the plan back to you']].map(([k, h, t]) => `<li><b>${k}</b><span><em>${h}</em>${t}</span></li>`).join('')}</ol>
    <p class="fig-cap">ISBAR (Marshall et al., 2009 and 2012), in the guide's own words.</p></div>`
};
const figHTML = k => FIGS[k] ? FIGS[k]() : '';

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
const kindOf = p => p.grp === 'cpg' ? 'Guideline' : p.grp !== 'rules' ? 'Pathway' : p.sub === 'protocol' ? 'Protocol' : 'Rule';
const metaOf = p => p.page ? 'Ebook p' + p.page : (p.src || '');
const kindLabel = (p, k) => (p.kinds && p.kinds[k]) || (p.grp === 'rules' ? KIND_R : p.grp === 'cpg' ? KIND_G : KIND)[k];
/* A guideline's neutral outcomes are its answers (the medicines), not a next step */
const outLbl = (p, k) => p.grp === 'cpg' && k === 'neutral' ? 'Guidance' : OUT_LBL[k];
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
  {k:'heart', t:'Heart and vessels', s:'Heart', ic:'heart', c:'c-heart', j:'t-garnet', ids:['acs','acs-cpg','heart-failure','hypertensive-urgency','svt','syncope','dvt','vte-cpg']},
  {k:'breath', t:'Breathing and allergy', s:'Breathing', ic:'lungs', c:'c-breath', j:'t-sapphire', ids:['asthma','asthma-cpg','copd-cpg','pneumonia','sinusitis-cpg','anaphylaxis']},
  {k:'brain', t:'Brain and behaviour', s:'Brain', ic:'brain', c:'c-brain', j:'t-plum', ids:['stroke-tia','mild-tbi','head-injury-cpg','behavioural-disturbance']},
  {k:'abdo', t:'Abdomen, kidney and scrotum', s:'Abdomen', ic:'abdomen', c:'c-abdo', j:'t-teal', ids:['abdominal-pain','gastroenteritis','biliary','renal-colic','ckd-cpg','scrotal-pain','fb-children-cpg']},
  {k:'infect', t:'Infection and skin', s:'Infection', ic:'virus', c:'c-infect', j:'t-bronze', ids:['dengue','dengue-cpg','cellulitis','sore-throat-cpg']},
  {k:'meta', t:'Sugar, poisoning and pain', s:'Sugar and pain', ic:'droplet', c:'c-meta', j:'t-indigo', ids:['hyperglycaemia','hypoglycaemia','t2dm-cpg','diabetic-foot-cpg','gout-cpg','paracetamol-overdose','snakebite-moh','pain','cancer-pain-cpg']},
  {k:'injury', t:'Injuries and teeth', s:'Injuries', ic:'bone', c:'c-injury', j:'t-slate', ids:['hip-fracture-cpg','avulsed-tooth-cpg']},
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
    ...(p.notes || []).flatMap(t => t.notes.flatMap(d => [d.h, ...(d.items || []), ...(d.table ? d.table.rows.flat() : [])])),
    ...(p.leaflet ? ['en', 'ms'].flatMap(k => p.leaflet[k].groups.flatMap(g => [g.h, g.p, ...g.items])) : []),
    ...(p.see || []).map(s => s[1]), p.kw].filter(Boolean);
}
const IDX = [];
for (const [id, p] of Object.entries(P)){
  const c = catOf(id);
  IDX.push({href:'#' + id, title:p.title, kind:kindOf(p), meta:metaOf(p), body:pathWords(p).join(' · '), ic:c.ic, c:c.c, j:c.j});
  const m = p.nodes[p.start];
  if ((p.grp === 'rules' || p.grp === 'cpg') && m.opts && m.opts.length > 2) m.opts.forEach(([label, to]) => {
    IDX.push({href:`#${id}--${to}`, title:label, kind:kindOf(p), meta:p.title, body:nodeWords(p.nodes[to]).join(' · '), ic:c.ic, c:c.c, j:c.j});
  });
}
JOURNEY.forEach((s, i) => IDX.push({href:'#journey-' + (i + 1), title:`Journey stop ${i + 1}: ${s.title}`, kind:'Journey', meta:'Patient flow', body:[s.who, ...s.items, s.note ? s.note.t : ''].join(' · '), ic:'route', c:'c-flow'}));
NUMS.forEach(n => IDX.push({href:'#numbers', title:`${n.lbl}: ${n.val}`, kind:'Number', meta:n.src, body:n.note, ic:'phone', c:'c-abdo'}));
IDX.push({href:'#tools', title:'Discharge safety check', kind:'Tool', meta:'Shift tools', body:[...DC_ALL.flat(), ...DC_STOP.map(s => s[0] + ' ' + s[1])].join(' · '), ic:'check', c:'c-meta'});
IDX.push({href:'#tour', title:'Tour: the Green Zone in 90 seconds', kind:'Video', meta:'Explainer, English and Bahasa Melayu', body:CAPTIONS.map(c => c[1]).join(' ') + ' Bahasa Melayu Malay BM ' + CAPTIONS_MS.map(c => c[1]).join(' '), ic:'play', c:'c-infect'});
IDX.push({href:'#home', title:'Day and night colours', kind:'Setting', meta:'Switch on the home screen', body:'Night colours, night mode, dark mode, dark theme, day colours, light mode, screen too bright, night shift', ic:'moon', c:'c-meta'});
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
    if (e.kind === 'Pathway' || e.kind === 'Guideline') s += .5;
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
const VIEW_TITLE = {home:'', pathways:'Pathways', rules:'Rules and protocols', tools:'Shift tools', calc:'Calculators', numbers:'Numbers', learn:'Learn the Green Zone', new:'What\'s new', poster:'Wall poster', about:'Sources and about', intro:'First-shift intro'};
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
  const tab = curView === 'run' ? 'pathways' : v === 'calc' ? 'tools' : v;
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
/* Tile media (8 Nov 2026): Flow Studio jewel-glass stills (tiles/<key>.webp) and their 7 to 8-second loops (tiles/<key>.mp4)
   for the nine topics, Code Blue and Code Stroke, and the six home tiles (paths, rules, dc, calc, intro, tip). Every key has
   both. A still loads lazily; a loop downloads and plays only while its tile is on screen, Moving tiles is on and motion is
   not reduced, and it pauses offscreen or when the page is hidden. */
const TILE_KEYS = new Set(['all', 'heart', 'breath', 'brain', 'abdo', 'infect', 'meta', 'flow', 'prot', 'codeblue', 'codestroke', 'paths', 'rules', 'dc', 'calc', 'intro', 'tip', 'kids', 'doses', 'scores', 'calm', 'head', 'dengue', 'cardio', 'tox', 'dcpg', 'asthcpg', 'goutcpg', 'fbcpg', 'footcpg', 'acscpg', 'headcpg', 'ckdcpg', 'sinuscpg', 'toothcpg', 'hipcpg', 'paincpg', 't2dmcpg', 'vtecpg', 'copdcpg', 'throatcpg', 'injury', 'interp', 'snakecpg', 'links', 'comms', 'rabies']);
const tileMedia = k => TILE_KEYS.has(k) ? `<span class="tm" aria-hidden="true" data-tm="${k}"><img src="tiles/${k}.webp" alt="" loading="lazy" decoding="async" width="640" height="360"></span>` : '';
/* At most this many loops play at once, the tiles most fully on screen first; the rest wait on their stills.
   The phone figure is a guess, to spare battery and older phones, until it is tried on a real phone. */
const TILE_MAX = matchMedia('(max-width: 760px)').matches ? 6 : 12;
let tileIO = null;
const tileSeen = new Map();
function tileClips(){
  if (tileIO) tileIO.disconnect();
  tileSeen.clear();
  if (prefs.tiles !== 'on' || REDUCED || !('IntersectionObserver' in window)){ $$('.tm video').forEach(v => v.pause()); $$('.tm[data-play]').forEach(el => el.removeAttribute('data-play')); return; }
  tileIO = tileIO || new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting && e.intersectionRatio >= .35) tileSeen.set(e.target, e.intersectionRatio); else tileSeen.delete(e.target); });
    const top = new Set([...tileSeen].sort((a, b) => b[1] - a[1]).slice(0, TILE_MAX).map(([el]) => el));
    $$('.tm').forEach(el => { el.toggleAttribute('data-play', top.has(el)); if (top.has(el) || el.querySelector('video')) playTile(el, top.has(el)); });
  }, {threshold:[0, .35, .6, .85, 1]});
  $$('.tm').forEach(el => { if (TILE_KEYS.has(el.dataset.tm)) tileIO.observe(el); });
}
function playTile(el, show){
  let v = el.querySelector('video');
  if (!show || document.hidden){ if (v) v.pause(); return; }
  if (!v){
    v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.addEventListener('playing', () => v.classList.add('on'), {once:true});
    v.src = `tiles/${el.dataset.tm}.mp4`; el.appendChild(v);
  }
  v.play().catch(() => {});
}
/* Redraw a container but keep its tile media nodes, so a loop that is playing does not restart or flicker */
function withTiles(root, html){
  const keep = {}; root.querySelectorAll('.tm').forEach(el => { keep[el.dataset.tm] = el; });
  root.innerHTML = html;
  root.querySelectorAll('.tm').forEach(el => { const old = keep[el.dataset.tm]; if (old) el.replaceWith(old); });
  tileClips();
}
document.addEventListener('visibilitychange', () => { if (document.hidden) $$('.tm video').forEach(v => v.pause()); else tileClips(); });
function numTile(i){
  const n = NUMS[i], ext = /^ext\s/.test(n.val), v = n.val.replace(/^ext\s+/, '');
  const [title, rest] = n.lbl.split(/,\s*/), sub = rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : (n.note.match(/^[^.]{1,32}\./) || [''])[0].replace(/\.$/, '');
  return `${i < 2 ? tileMedia(['codeblue', 'codestroke'][i]) : ''}<span class="lbl">${esc(title)}</span><div class="row"><span class="val" id="kn${i}">${ext ? '<small class="x">ext</small>' : ''}${esc(v)}</span>${n.copy ? `<button type="button" data-kcopy="${i}" data-quiet aria-label="Copy ${esc(n.lbl)}">${svg('copy')}</button>` : ''}</div>${n.href ? `<a class="tl nt-l" href="${n.href}" aria-label="${esc(n.link)}: ${esc(sub)}">${esc(sub)}${svg('chev')}</a>` : ''}`;
}
const DC_SHORT = ['Reassessed, results reviewed', 'Safety-net advice', 'Allergy asked', 'Last vital signs', 'Walks independently', 'Advice and follow-up'];
function statTiles(){
  const cats = CATS.filter(c => c.ids.length && !['flow', 'prot'].includes(c.k));
  withTiles($('#t-paths'), `${tileMedia('paths')}<div class="tile-h"><h3><a href="#pathways">Pathways</a></h3><span class="tag">${Object.keys(P).length}</span></div><ul class="gl">${cats.map(c => `<li><button type="button" data-gocat="${c.k}"><i class="jd ${c.j}" aria-hidden="true"></i><span>${esc(c.s)}</span><b>${c.ids.length}</b></button></li>`).join('')}</ul>`);
  const top = ['gz-rules', 'referral-rules', 'asthma-zone', 'mau-admission'].filter(id => P[id]);
  withTiles($('#t-rules'), `${tileMedia('rules')}<div class="tile-h"><h3><a href="#rules">Rules and protocols</a></h3><span class="tag">${FLOW_IDS.length + PROT_IDS.length}</span></div><ul class="gl">${top.map(id => `<li><a href="#${id}"><span>${esc(P[id].title)}</span>${svg('chev')}</a></li>`).join('')}</ul>`);
  withTiles($('#t-dc'), `${tileMedia('dc')}<div class="tile-h"><h3><a href="#tools">Discharge check</a></h3><span class="tag">${DC_STOP.length} stop signs</span></div><ul class="dcl">${DC_SHORT.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`);
  withTiles($('#t-calc'), `${tileMedia('calc')}<div class="tile-h"><h3><a href="#calc">Calculators</a></h3><span class="tag">${Object.keys(CALCS).length}</span></div><ul class="thr"><li><span>Shock index</span><b>under 1</b></li><li><span>Pulse pressure</span><b>20 to 50</b></li><li><span>Heart rate</span><b>under 90</b></li></ul><p class="sub">Dengue SOP 2.0 discharge criteria, with doses, scores and checks in the calculators.</p>`);
  introTile();
}
function introTile(){
  const done = !!store.get('gz-intro', 0), t = $('#t-intro');
  t.classList.toggle('done', done);
  withTiles(t, `${tileMedia('intro')}<span class="pl">${svg(done ? 'restart' : 'play')}</span><span><h3>${done ? 'First-shift intro' : 'First shift?'}</h3><p>${done ? 'Four quick screens, any time you want them again.' : 'Four quick screens: search, pathways, the zone and the tools.'}</p></span>`);
}
function renderHome(){
  const d = new Date(), hr = d.getHours();
  const g = hr >= 5 && hr < 12 ? 'Good morning' : hr >= 12 && hr < 17 ? 'Good afternoon' : hr >= 17 && hr < 21 ? 'Good evening' : 'Night shift';
  let day = ''; try { day = d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'}); } catch(e){}
  $('#greet').textContent = g + (day ? ' · ' + day : '');
  if (zSel < 0 && matchMedia('(min-width: 761px)').matches) zSel = 1;
  zoneMap(true);
  withTiles($('#kn-a'), numTile(0)); withTiles($('#kn-b'), numTile(1));
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
  $('#newcard').innerHTML = `<ul>${V8.slice(0, 6).map(([t, , l]) => `<li><a href="${l[0][0]}">${esc(t)}</a></li>`).join('')}</ul><a class="pill" href="#new">Everything new, and what came from the drives${svg('chev')}</a>`;
}

/* ================= Pathway library ================= */
let libF = 'all', libCat = 'all';
function libCounts(){ const all = Object.keys(P); return {all:all.length, ebook:all.filter(id => !P[id].grp).length, cpg:all.filter(id => P[id].grp === 'cpg').length, rules:all.filter(id => P[id].grp === 'rules').length, saved:savedIds().length}; }
function renderLibf(){
  const n = libCounts();
  $('#libf').innerHTML = [['all', 'All'], ['ebook', 'Ebook'], ['cpg', 'Guidelines'], ['rules', 'Rules and protocols'], ['saved', 'Saved']].map(([k, t]) => `<button type="button" data-f="${k}" aria-pressed="${libF === k}">${t} <small>${n[k]}</small></button>`).join('');
}
function pcard(id){
  const p = P[id], c = catOf(id), on = isSaved(id);
  return `<article class="pc"><div class="pc-b"><h3><a href="#${id}">${esc(p.title)}</a></h3><div class="meta"><span>${esc(metaOf(p))}</span>${badgeOf(p)}</div>${p.lead ? `<p class="ld">${esc(p.lead)}</p>` : ''}<div class="outs-dots">${outsOf(p).map(k => `<span class="od ${k}">${outLbl(p, k)}</span>`).join('')}</div></div><button type="button" class="pc-st" data-star="${id}" aria-pressed="${on}" aria-label="${(on ? 'Remove from saved: ' : 'Save: ') + esc(p.title)}">${svg('star', '', on)}</button></article>`;
}
function renderLib(){
  const q = $('#libq').value.trim(), s = savedIds();
  let match = () => true;
  if (q){
    const hit = loose => { const res = terms(q).map(w => termRe(w, loose)); return id => res.every(r => r.test(HAY.get(id))); };
    const strict = hit(false);
    match = Object.keys(P).some(strict) ? strict : hit(true);
  }
  const inF = id => libF === 'all' ? true : libF === 'ebook' ? !P[id].grp : libF === 'cpg' ? P[id].grp === 'cpg' : libF === 'rules' ? P[id].grp === 'rules' : s.includes(id);
  const ids = Object.keys(P).filter(id => inF(id) && match(id));
  /* National CPGs not built into the guide: all of them under Guidelines, and the ones a search finds under All */
  const shelf = libF === 'cpg' || (libF === 'all' && q) ? CPG_SHELF.filter(c => shelfOut(c) && (!q || terms(q).every(w => termRe(w, true).test(shelfHay(c))))) : [];
  renderLibf();
  const cats = CATS.filter(c => c.ids.some(id => ids.includes(id)));
  if (libCat !== 'all' && !cats.some(c => c.k === libCat)) libCat = 'all';
  withTiles($('#libcats'), `<button type="button" data-cat="all" aria-pressed="${libCat === 'all'}">${tileMedia('all')}${svg('grid')}<span>All topics</span><small>${ids.length}</small></button>` + cats.map(c => `<button type="button" class="${c.j}" data-cat="${c.k}" aria-pressed="${libCat === c.k}">${tileMedia(c.k)}${svg(c.ic)}<span>${esc(c.s)}</span><small>${c.ids.filter(id => ids.includes(id)).length}</small></button>`).join(''));
  const shown = CATS.filter(c => libCat === 'all' || c.k === libCat).map(c => [c, c.ids.filter(id => ids.includes(id)).sort(byTitle)]).filter(([, l]) => l.length);
  let h;
  if (shown.length) h = shown.map(([c, l]) => `<section class="libsec ${c.j}" aria-label="${esc(c.t)}"><h2 class="lh">${tileMedia(c.k)}${svg(c.ic)}<span>${esc(c.t)}</span><small>${l.length}</small></h2><div class="grid">${l.map(pcard).join('')}</div></section>`).join('');
  else if (shelf.length) h = '';
  else if (libF === 'saved' && !s.length) h = '<div class="empty">Nothing saved yet. Tap the star on any pathway to keep it here, on the home page and in the menu.</div>';
  else h = `<div class="empty">No pathway matches “${esc(q)}”. The search also covers rules, numbers, doses and the tour. <button type="button" class="sm" data-find>Search everything</button></div>`;
  withTiles($('#libgrid'), h + (shelf.length ? shelfHTML(shelf) : ''));
}
/* The CPG shelf: national CPGs from the Academy of Medicine list that are not built into the guide, as outside links */
const shelfOut = c => !(c.id && P[c.id]);
const shelfHay = c => [c.t, c.s, c.y, c.kw, 'cpg guideline national academy'].join(' ');
function shelfCard(c){
  /* The Drive copy only where the CPG's terms allow reproduction (c.drive set); otherwise the Academy's own file */
  const x = 'target="_blank" rel="noopener noreferrer"', main = c.drive ? GDRIVE + c.drive + '/view' : ACAD + c.cpg;
  const qr = c.qr ? `<a class="pill ext" href="${c.qrd ? GDRIVE + c.qrd + '/view' : ACAD + c.qr}" ${x}>Quick reference<span class="vh"> for ${esc(c.t)}, ${c.qrd ? 'PDF in Google Drive' : 'on the Academy site'}</span>${svg('ext')}</a>` : '';
  const acad = c.drive ? `<a class="pill ext" href="${ACAD + c.cpg}" ${x}>Academy<span class="vh"> of Medicine: the official file of ${esc(c.t)}</span>${svg('ext')}</a>` : '';
  const pil = (c.pil || []).map(([p, l, d]) => `<a class="pill ext" href="${d ? GDRIVE + d + '/view' : ACAD + p}" ${x}>Patient leaflet, ${esc(l)}<span class="vh"> for ${esc(c.t)}, ${d ? 'PDF in Google Drive' : 'on the Academy site'}</span>${svg('ext')}</a>`).join('');
  return `<article class="pc cxl shelf-c"><div class="pc-b"><h3><a href="${main}" ${x}>${esc(c.t)}<span class="vh"> (opens ${c.drive ? 'the PDF in Google Drive' : 'the Academy of Medicine site'}, an outside site)</span></a></h3><div class="meta"><span class="ext">${svg('ext')}${c.drive ? 'PDF in Google Drive' : 'Academy of Medicine'}</span><span>${esc(c.s)} · ${esc(c.y)}</span></div>`
    + (acad || qr || pil ? `<div class="shelf-l">${acad}${qr}${pil}</div>` : '') + `</div>${svg('ext', 'go')}</article>`;
}
function shelfHTML(list){
  const part = (t, l) => l.length ? `<h3 class="shelf-sub">${t} <small>${l.length}</small></h3><div class="grid">${l.map(shelfCard).join('')}</div>` : '';
  return `<section class="libsec t-obsidian shelf" aria-label="National CPGs, outside links"><h2 class="lh">${svg('ext')}<span>National CPGs, outside links</span><small>${list.length}</small></h2>`
    + `<p class="shelf-note">Not built into the guide yet. Each opens its PDF in Google Drive, to read or download, where its copyright allows a copy to be shared, and so do its quick reference and patient leaflets; otherwise, and from the Academy link, the Academy of Medicine's official file, which may ask for a quick check first. Chosen for the Green Zone from the Academy's list of 9 Nov 2026.</p>`
    + `<div class="shelf-top"><a class="pill ext" href="${CPG_FOLDER}" target="_blank" rel="noopener noreferrer">All 109 national CPGs in one Drive folder${svg('ext')}</a></div>`
    + part('For the Green Zone', list.filter(c => c.tier !== 'C')) + part('Now and then', list.filter(c => c.tier === 'C')) + '</section>';
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
  return `<div class="ends"><span>${n.end ? 'Ended in' : 'Can still end in'}</span>${kinds.map(k => `<span class="end" style="--oc:var(--b-${k})">${outLbl(p, k)}</span>`).join('')}</div>`;
}
function draw(focus){
  const p = P[state.id], n = p.nodes[state.cur], c = catOf(state.id), saved = isSaved(state.id), steps = state.trail.length;
  const isRule = p.grp === 'rules';
  const nowText = n.end ? kindLabel(p, n.end) + ': ' + n.title : nodeText(n);
  const total = n.end ? Math.max(steps, 1) : steps + Math.max(stepsLeft(p, state.cur), 1);
  const bar = Array.from({length:total}, (_, i) => `<i class="${n.end ? 'fin' : i <= steps ? 'on' : ''}"></i>`).join('');
  const count = Object.keys(p.nodes).length;
  const about = (p.lead ? `<p class="lead">${esc(p.lead)}</p>` : '') + (p.doc ? `<div class="see"><span>Source</span><a class="pill ext" href="${p.doc.href}" target="_blank" rel="noopener noreferrer">${esc(p.doc.t)}${svg('ext')}</a></div>` : '') + (p.see ? `<div class="see"><span>See also</span>${p.see.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}</a>`).join('')}</div>` : '');
  /* Every entry opens on a jewel banner: a guideline's own picture (hero), or its topic group's glass loop (a topic banner) */
  const hk = p.hero || (c && c.k && TILE_KEYS.has(c.k) ? c.k : '');
  const head = `<div class="run-cat"><span class="chip j ${c.j}">${svg(c.ic)}${esc(c.s)}</span><span class="chip">${esc(metaOf(p))}</span>${badgeOf(p)}</div>
      <h1 id="run-title" tabindex="-1">${esc(p.title)}</h1>`;
  withTiles($('#run'), `<div class="run-h">
      <div class="run-top"><a class="back" href="${isRule ? '#rules' : '#pathways'}">${svg('back')}<span class="bl-l">${isRule ? 'Rules and protocols' : 'All pathways'}</span><span class="bl-s">${isRule ? 'Rules' : 'Pathways'}</span></a>
        <div class="run-acts">
          <button type="button" class="ib" data-save aria-pressed="${saved}" aria-label="${saved ? 'Saved. Tap to remove from your list' : 'Save to your list'}" title="${saved ? 'Saved' : 'Save'}">${svg('star', '', saved)}</button>
          <button type="button" class="ib" data-map aria-label="See the whole pathway" title="Whole pathway">${svg('map')}</button>
          <button type="button" class="ib" data-link aria-label="Copy a link to this step" title="Copy link">${svg('link')}</button>
          <button type="button" class="ib" data-restart aria-label="Start again" title="Start again"${steps ? '' : ' disabled'}>${svg('restart')}</button>
        </div></div>
      ${hk ? `<div class="tile ${p.heroj || c.j} run-hero${p.hero ? '' : ' topic'}">${tileMedia(hk)}${head}</div>` : head}
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
    </div>`);
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
      ${(n.items && n.items.length) || n.links || n.gap ? `<div class="res-b">${n.figOnly ? '' : list(n.items, 'ticks')}
        ${n.fig ? figHTML(n.fig) : ''}${n.links ? `<div class="links">${n.links.map(([href, t]) => /^https:/.test(href) ? `<a class="pill ext" href="${href}" target="_blank" rel="noopener noreferrer">${esc(t)}${svg('ext')}</a>` : `<a class="pill" href="${href}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : ''}
        ${n.gap ? `<div class="gap">${svg('info')}<span>${esc(n.gap)}</span></div>` : ''}</div>` : ''}
      <div class="res-f"><button type="button" data-restart>${svg('restart')}Start again</button><span class="grow"></span><button type="button" data-copyout>${svg('copy')}<span class="bl">Copy outcome</span></button>${(p.advice || p.leaflet) && n.end === 'discharge' ? `<button type="button" class="primary" data-showadvice>${p.leaflet ? 'Home care advice' : 'Discharge advice'}</button>` : ''}</div></article>`;
  }
  if (n.step){
    const obs = n.kind === 'observe';
    return `<div class="stack"><div class="qc step${obs ? ' obs' : ''}"><div class="qh"><span class="ic">${svg(obs ? 'clock' : 'todo')}</span><h2><span class="vh">${obs ? 'Observation: ' : 'Do this: '}</span>${esc(n.step)}</h2></div>${obs ? '<p class="hint">Observation</p>' : ''}${n.fig ? figHTML(n.fig) : ''}${list(n.items)}
      <div class="opts"><button type="button" class="opt sugg" data-next><kbd>1</kbd><span>Done, continue</span>${svg('chev', 'gt')}</button></div></div></div>`;
  }
  const sc = n.check === 'score';
  const pts = v => v > 0 ? '+' + v : '−' + Math.abs(v);
  const checks = n.check ? `<p class="hint">${sc ? 'Tick each item that applies. The score adds up as you go.' : n.check === 'all' ? 'Tick each criterion that is met. All must be met.' : 'Tick any that are present.'}</p><ul class="checks">` +
    n.items.map((i, k) => `<li><label><input type="checkbox" id="c${k}"><span>${sc ? esc(i[0]) + ` <b class="pts">(${pts(i[1])})</b>` : esc(i)}</span></label></li>`).join('') + '</ul>' + (sc ? '<p class="score">Score <b id="scv">0</b></p>' : '') : '';
  const info = n.info ? '<ul class="info">' + n.info.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  return `<div class="stack"><div class="qc"><h2>${esc(n.q)}</h2>
    ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}${n.fig ? figHTML(n.fig) : ''}${info}${checks}
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
  $('#pmbody').innerHTML = `<div class="legend" aria-label="Outcome colours">${OUT_ORDER.filter(k => order.some(x => p.nodes[x].end === k)).map(k => `<span class="od ${k}">${outLbl(p, k)}</span>`).join('')}</div>
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
  if (p.advice) T.push({k:'advice', l:'Discharge advice', cls:'t-advice', html:(READ_ADV[state.id] ? listenBar(READ_ADV[state.id], 'Listen to this advice') : '') + `<ol id="advlist">${p.advice.map(li).join('')}</ol><div class="pbar"><button type="button" class="sm" data-copyadvice>${svg('copy')}<span class="bl">Copy advice</span></button></div>`});
  if (p.concerns) T.push({k:'concerns', l:'Practical concerns', cls:'t-concern', html:`<ul>${p.concerns.map(li).join('')}</ul><p class="hint">Consider admission if any are present.</p>`});
  const note = d => `<div class="deptnote"><h3>${esc(d.h)}</h3><p class="src">${esc(d.src)}</p>${d.fig ? figHTML(d.fig) : ''}${d.items ? `<ul>${d.items.map(li).join('')}</ul>` : ''}${d.table ? table(d.table) : ''}</div>`;
  if (p.leaflet) T.push({k:'leaflet', l:'Home care advice', cls:'t-advice', html:leafletHTML(p)});
  if (p.dept) T.push({k:'dept', l:'Department notes', cls:'t-dept', html:p.dept.map(note).join('') + '<p class="hint">Not in the ebook: supplementary notes from department documents, with their sources.</p>'});
  /* A national guideline's reference notes, several tabs of them, each note with its page */
  (p.notes || []).forEach((t, i) => T.push({k:'n' + i, l:t.l, cls:'t-cpg', html:t.notes.map(note).join('') + (p.notesFoot ? `<p class="hint">${esc(p.notesFoot)}</p>` : p.own ? `<p class="hint">From the ${esc(p.src)}, with its page numbers, in the guide's own words: the CPG gives no permission to reproduce it, so nothing here is quoted.</p>` : `<p class="hint">From the ${esc(p.src)}, with its page numbers. Reproduced with acknowledgement to ${esc(p.ack || 'MaHTAS')}.</p>`)}));
  (p.tables || []).forEach((t, i) => T.push({k:'t' + i, l:t.title, html:table(t)}));
  /* A national CPG on the shelf opens its full PDF from its References tab */
  const pdf = p.grp === 'cpg' && CPG_SHELF.find(c => c.id && P[c.id] === p);
  if (p.refs) T.push({k:'refs', l:'References', html:(p.docs ? `<div class="cx-links cpg-pdf">${p.docs.map(([h, t]) => `<a class="pill ext" href="${h}" target="_blank" rel="noopener noreferrer">${esc(t)}${svg('ext')}</a>`).join('')}</div>` : '') + (p.doc ? `<div class="cx-links cpg-pdf"><a class="pill ext" href="${p.doc.href}" target="_blank" rel="noopener noreferrer">${esc(p.doc.t)}${svg('ext')}</a></div>` : '') + (pdf ? `<div class="cx-links cpg-pdf">${pdf.drive ? `<a class="pill ext" href="${GDRIVE + pdf.drive}/view" target="_blank" rel="noopener noreferrer">The full CPG, PDF in Google Drive${svg('ext')}</a>` : ''}<a class="pill ext" href="${ACAD + pdf.cpg}" target="_blank" rel="noopener noreferrer">Academy of Medicine${svg('ext')}</a>${pdf.qr ? `<a class="pill ext" href="${pdf.qrd ? GDRIVE + pdf.qrd + '/view' : ACAD + pdf.qr}" target="_blank" rel="noopener noreferrer">Quick reference${svg('ext')}</a>` : ''}</div>` : '') + `<ol class="refs">${p.refs.map(li).join('')}</ol>`});
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
/* Read-aloud (9 Nov 2026): VoiceStudio narrations of the patient advice, word for word, recorded one line at a time
   (narration/README.md) and played from app/audio/ (mono MP3). dur, marks (the start of each section, in seconds) and lines
   (the start of each line, as [seconds, section, element]) are written by narration/scripts/fill-read.cjs. */
const READ = {
  'leaf-dengue-en':{src:'audio/leaf-dengue-en.mp3', dur:108.5, marks:[0, 2.29, 46.86, 70.02],
    lines:[[0,0,0],[2.29,1,0],[3.82,1,1],[18.55,1,2],[24.99,1,3],[26.68,1,4],[30.6,1,5],[34.72,1,6],[38.21,1,7],[46.86,2,0],[47.97,2,1],[59.64,2,2],[63.43,2,3],[66.58,2,4],[70.02,3,0],[72.15,3,1],[84.82,3,2],[89.61,3,3],[91.95,3,4],[93.52,3,5],[95.32,3,6],[98.27,3,7],[100.17,3,8],[105.26,3,9]]},
  'leaf-dengue-ms':{src:'audio/leaf-dengue-ms.mp3', dur:101.49, marks:[0, 3.28, 42.31, 64.11],
    lines:[[0,0,0],[3.28,1,0],[5.14,1,1],[17.1,1,2],[23.68,1,3],[25.76,1,4],[29.01,1,5],[32.26,1,6],[34.35,1,7],[42.31,2,0],[44.27,2,1],[55.5,2,2],[58.61,2,3],[61.37,2,4],[64.11,3,0],[66.31,3,1],[80.99,3,2],[84.64,3,3],[86.26,3,4],[87.96,3,5],[89.67,3,6],[92.13,3,7],[93.2,3,8],[98.53,3,9]]},
  'leaf-cancerpain-en':{src:'audio/leaf-cancerpain-en.mp3', dur:236.36, marks:[0, 1.91, 16.87, 61.56, 130.99, 150.57, 174.93, 188],
    lines:[[0,0,0],[1.91,1,0],[4.1,1,1],[10.02,1,2],[16.87,2,0],[18.89,2,1],[26.93,2,2],[36.63,2,3],[52.81,2,4],[61.56,3,0],[65.26,3,1],[82.33,3,2],[103.43,3,3],[116.9,3,4],[130.99,4,0],[138.86,4,1],[150.57,5,0],[155.24,5,1],[174.93,6,0],[177.68,6,1],[179.99,6,2],[182.34,6,3],[184.66,6,4],[188,7,0],[190.91,7,1],[194.74,7,2],[197.33,7,3],[202.84,7,4],[210.62,7,5],[215.8,7,6]]},
  'leaf-cancerpain-ms':{src:'audio/leaf-cancerpain-ms.mp3', dur:235.17, marks:[0, 2.18, 17.26, 62.26, 127.4, 147.59, 173.45, 186.54],
    lines:[[0,0,0],[2.18,1,0],[4.71,1,1],[10.47,1,2],[17.26,2,0],[19.56,2,1],[27.3,2,2],[36.41,2,3],[53.91,2,4],[62.26,3,0],[65.7,3,1],[81.81,3,2],[98.52,3,3],[114.35,3,4],[127.4,4,0],[133.86,4,1],[147.59,5,0],[151.86,5,1],[173.45,6,0],[176.65,6,1],[178.62,6,2],[181.31,6,3],[183.44,6,4],[186.54,7,0],[191.49,7,1],[195.28,7,2],[197.96,7,3],[203.01,7,4],[210.41,7,5],[215.37,7,6]]},
  'adv-tbi-en':{src:'audio/adv-tbi-en.mp3', dur:57.09, marks:[0, 42.06],
    lines:[[0,0,0],[6.69,0,1],[27.81,0,2],[36.39,0,3],[42.06,0,4],[45.71,0,5],[48.4,0,6],[55.9,0,7]]},
  'adv-dengue-en':{src:'audio/adv-dengue-en.mp3', dur:37.67, marks:[0, 21.03],
    lines:[[0,0,0],[2.27,0,1],[8.75,0,2],[12.8,0,3],[14.76,0,4],[21.03,0,5],[26.51,0,6],[32.64,0,7],[35,0,8]]},
  'adv-asthma-en':{src:'audio/adv-asthma-en.mp3', dur:47.52, marks:[0, 32.59],
    lines:[[0,0,0],[6.12,0,1],[18.97,0,2],[32.59,0,3],[41.69,0,4]]},
  'adv-gastro-en':{src:'audio/adv-gastro-en.mp3', dur:36.72, marks:[0, 17.16],
    lines:[[0,0,0],[4.31,0,1],[11.05,0,2],[17.16,0,3],[18.91,0,4],[24.06,0,5]]},
  'adv-renal-en':{src:'audio/adv-renal-en.mp3', dur:41.05, marks:[0, 22.07],
    lines:[[0,0,0],[9.88,0,1],[17.45,0,2],[22.07,0,3],[31.84,0,4],[38.14,0,5]]},
  'adv-abdo-en':{src:'audio/adv-abdo-en.mp3', dur:26.12, marks:[0, 14.39],
    lines:[[0,0,0],[10.44,0,1],[14.39,0,2],[20.19,0,3]]},
  'adv-hypo-en':{src:'audio/adv-hypo-en.mp3', dur:38.23, marks:[0, 23.46],
    lines:[[0,0,0],[7.57,0,1],[17.49,0,2],[23.46,0,3],[27.92,0,4]]}
};
const READ_LEAF = {'dengue-cpg':'leaf-dengue', 'cancer-pain-cpg':'leaf-cancerpain'}, READ_ADV = {'mild-tbi':'adv-tbi-en', 'dengue':'adv-dengue-en', 'asthma-zone':'adv-asthma-en', 'gastroenteritis':'adv-gastro-en', 'renal-colic':'adv-renal-en', 'abdominal-pain':'adv-abdo-en', 'hypoglycaemia':'adv-hypo-en'};
const mmss = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
const reader = new Audio(); reader.preload = 'none';
let readKey = '';
function listenBar(key, label, chips){
  const r = READ[key]; if (!r) return '';
  return `<div class="lsn" data-read="${key}"><button type="button" class="lsn-b" aria-pressed="false" aria-label="${esc(label)}, ${mmss(r.dur)}">${svg('play')}</button>
    <div class="lsn-t"><b>${esc(label)}</b><span class="lsn-time"><span class="lsn-at">0:00</span> / ${mmss(r.dur)}</span></div>
    <div class="lsn-bar" aria-hidden="true"><i></i>${r.marks.slice(1).map(m => `<s style="--x:${(m / r.dur * 100).toFixed(1)}%"></s>`).join('')}</div>
    ${chips && chips.length ? `<div class="lsn-ch${chips.length > 4 ? ' many' : ''}">${chips.map((c, i) => r.marks[i + 1] != null ? `<button type="button" data-seek="${r.marks[i + 1]}">${esc(c)}</button>` : '').join('')}</div>` : ''}</div>`;
}
function readerUI(){
  const box = $(`.lsn[data-read="${readKey}"]`); if (!box) return;
  const r = READ[readKey], t = reader.currentTime || 0, on = !reader.paused;
  const b = box.querySelector('.lsn-b'); b.innerHTML = svg(on ? 'pause' : 'play'); b.setAttribute('aria-pressed', on ? 'true' : 'false');
  box.classList.toggle('on', on);
  box.querySelector('.lsn-at').textContent = mmss(t);
  box.querySelector('.lsn-bar i').style.width = Math.min(100, t / r.dur * 100).toFixed(2) + '%';
  /* Light the section being read: the title, then each section of the leaflet in order */
  const k = r.marks.filter(m => m <= t + 0.05).length - 1, leaf = box.closest('.leaf');
  box.querySelectorAll('.lsn-ch button').forEach((c, i) => {
    const was = c.classList.contains('on'), now = (on || t > 0) && i === k - 1;
    c.classList.toggle('on', now);
    /* A long chip row is one swipeable line: bring the section being read into it, without moving the page */
    if (now && !was && c.parentElement.classList.contains('many')){ const row = c.parentElement; row.scrollTo({left:c.offsetLeft - (row.clientWidth - c.offsetWidth) / 2, behavior:REDUCED ? 'auto' : 'smooth'}); }
  });
  if (leaf){
    const parts = [leaf.querySelector('.leaf-t'), ...leaf.querySelectorAll('.leaf-g')];
    parts.forEach((el, i) => el && el.classList.toggle('reading', (on || t > 0) && i === k && t < r.dur - 0.2));
  }
  /* Mark the line being read (lines: [seconds, section, element]) and keep it in view, unless the reader has just scrolled */
  const ln = (on || t > 0) && t < r.dur - 0.2 && r.lines ? r.lines.filter(l => l[0] <= t + 0.05).pop() : null;
  const el = ln ? readLine(box, ln[1], ln[2]) : null;
  document.querySelectorAll('.rl-on').forEach(x => { if (x !== el) x.classList.remove('rl-on'); });
  if (el && !el.classList.contains('rl-on')){
    el.classList.add('rl-on');
    const b = el.getBoundingClientRect();
    if (on && Date.now() - readScrolled > 4000 && (b.top < 80 || b.bottom > innerHeight - 96)) el.scrollIntoView({block:'center', behavior:REDUCED ? 'auto' : 'smooth'});
  }
}
/* A leaflet's section 0 is its title and section k its k-th group, whose elements are [heading, paragraph if any, ...items];
   an advice tab's elements are its advice lines */
function readLine(box, s, e){
  const leaf = box.closest('.leaf');
  if (!leaf){ const tab = box.closest('[role="tabpanel"]'); return tab ? tab.querySelectorAll('#advlist > li')[e] || null : null; }
  if (s === 0) return leaf.querySelector('.leaf-t');
  const g = leaf.querySelectorAll('.leaf-g')[s - 1];
  return g ? g.querySelectorAll(':scope > h5, :scope > p, :scope > ul > li')[e] || null : null;
}
let readScrolled = 0;
['wheel', 'touchmove', 'keydown'].forEach(ev => addEventListener(ev, e => { if (ev !== 'keydown' || /^(Page|Arrow(Up|Down)|Home|End)/.test(e.key)) readScrolled = Date.now(); }, {passive:true}));
function stopReader(){
  if (!readKey) return;
  reader.pause();
  const box = $(`.lsn[data-read="${readKey}"]`);
  if (box){ box.classList.remove('on'); const b = box.querySelector('.lsn-b'); b.innerHTML = svg('play'); b.setAttribute('aria-pressed', 'false'); }
  document.querySelectorAll('.reading, .lsn-ch button.on, .rl-on').forEach(el => el.classList.remove('reading', 'on', 'rl-on'));
}
function playReader(key, at){
  if (readKey !== key){ stopReader(); readKey = key; reader.src = READ[key].src; }
  stopJourney(); pauseTour(); pauseFilms();
  if (at != null){ try { reader.currentTime = at; } catch(e){} }
  reader.play().then(readerUI).catch(() => toast('The narration could not play here'));
}
reader.addEventListener('timeupdate', readerUI);
reader.addEventListener('pause', readerUI);
reader.addEventListener('ended', () => { reader.currentTime = 0; readerUI(); document.querySelectorAll('.reading, .lsn-ch button.on, .rl-on').forEach(el => el.classList.remove('reading', 'on', 'rl-on')); });
document.addEventListener('click', e => {
  const b = e.target.closest('.lsn-b, .lsn-ch [data-seek]'); if (!b) return;
  const key = b.closest('.lsn').dataset.read;
  if (b.dataset.seek != null) return playReader(key, +b.dataset.seek);
  if (readKey === key && !reader.paused) reader.pause(); else playReader(key);
});

/* A short film of a leaflet (9 Nov 2026): every line on screen as the read-aloud voice says it (video/dengue-home). A small card
   until tapped; the tap swaps in the player, so nothing downloads before it (preload none). One film per language. */
const FILMS = {'dengue-cpg':{
  en:{src:'media/dengue-home-720.mp4', cover:'media/dengue-home-poster.webp', thumb:'media/dengue-home-thumb.webp', t:'Watch this leaflet', d:'2 min · every line on screen as it is read'},
  ms:{src:'media/dengue-home-ms-720.mp4', cover:'media/dengue-home-ms-poster.webp', thumb:'media/dengue-home-ms-thumb.webp', t:'Tonton risalah ini', d:'2 min · setiap baris di skrin semasa dibacakan'}}};
function filmCard(id, lg){
  const f = FILMS[id] && FILMS[id][lg]; if (!f) return '';
  return `<div class="lfilm" lang="${lg}"><button type="button" class="lfilm-b" data-film="${f.src}" data-cover="${f.cover}"><span class="lfilm-th"><img src="${f.thumb}" alt="" width="72" height="72" loading="lazy">${svg('play')}</span><span class="lfilm-t"><b>${esc(f.t)}</b><small>${esc(f.d)}</small></span></button></div>`;
}
function pauseFilms(){ $$('.lfilm video').forEach(v => { if (!v.paused) v.pause(); }); }
document.addEventListener('click', e => {
  const b = e.target.closest('.lfilm-b'); if (!b) return;
  stopReader(); stopJourney(); pauseTour();
  const box = b.parentElement;
  box.innerHTML = `<video class="lfilm-v" controls playsinline preload="none" width="720" height="720" poster="${b.dataset.cover}" src="${b.dataset.film}"></video>`;
  const v = box.querySelector('video');
  v.addEventListener('play', stopReader);
  v.play().catch(() => {});
});

/* The CPG's home care leaflet (Appendix 5B) in English or Bahasa Melayu. The choice lives in memory only */
let leafLang = 'en';
function leafletHTML(p){
  const L = p.leaflet, d = L[leafLang];
  return `<div class="leaf" id="leaf" lang="${leafLang}"><div class="seg leaf-lang" role="group" aria-label="Language of the advice">${['en', 'ms'].map(k => `<button type="button" data-leaf="${k}" aria-pressed="${leafLang === k}" lang="${k}">${esc(L[k].lang)}</button>`).join('')}</div>
    ${READ_LEAF[state.id] ? listenBar(READ_LEAF[state.id] + '-' + leafLang, leafLang === 'ms' ? 'Dengar dalam Bahasa Melayu' : 'Listen in English', d.groups.map(g => g.h.length > 28 ? g.h.slice(0, 26).replace(/\s+\S*$/, '') + '…' : g.h)) : ''}
    ${filmCard(state.id, leafLang)}
    <h4 class="leaf-t">${esc(d.title)}</h4>${d.groups.map(g => `<section class="leaf-g${g.warn ? ' warn' : ''}"><h5>${g.warn ? svg('stop') : ''}${esc(g.h)}</h5>${g.p ? `<p>${esc(g.p)}</p>` : ''}<ul>${g.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>`).join('')}
    <p class="src">${esc(L.src)}</p></div><div class="pbar"><button type="button" class="sm" data-copyleaf>${svg('copy')}<span class="bl">Copy advice</span></button></div>`;
}
const leafletText = p => { const L = p.leaflet, d = L[leafLang]; return [d.title.toUpperCase(), ...d.groups.flatMap(g => ['', g.h.toUpperCase(), ...(g.p ? [g.p] : []), ...g.items.map(x => '- ' + x)]), '', L.src].join('\n'); };

/* ================= Shift tools ================= */
function renderDcheck(){
  const li = (it, i, stop) => `<li><label><input type="checkbox" data-dc="${stop ? 's' : 'a'}${i}"><span>${esc(it[0])}<small>${stop ? svg('chev') : ''}${esc(it[1])}</small></span></label></li>`;
  withTiles($('#dcheck'), `<div class="tile t-teal tool-h">${tileMedia('dc')}<div class="row"><span class="ic">${svg('check')}</span><h2>Discharge safety check</h2></div><p>Tick through it before the patient leaves. It is not saved, and Clear resets it.</p><div class="dc-route" id="dcr" aria-hidden="true"><span class="fill"></span>${DC_ALL.map(() => '<i></i>').join('')}</div></div>
    <div class="tool-b"><h3 class="dc-group">Every patient</h3><ul class="dc-list">${DC_ALL.map((it, i) => li(it, i)).join('')}</ul>
    <h3 class="dc-group">${svg('stop')}Tick if it applies: stop and act</h3><ul class="dc-list stop">${DC_STOP.map((it, i) => li(it, i, true)).join('')}</ul>
    <div class="verdict" id="verdict" aria-live="polite"></div>
    <div class="foot"><span>From the reassessment memo (Jul 2024) and Million Ringgit Habits (ETD HKL)</span><button type="button" class="sm" id="dcclear">${svg('restart')}Clear</button></div></div>`);
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

/* ================= Calculators (9 Nov 2026) =================
   Calculators built only from the ebook and the department's notes (standing rule 8), each naming its source, and since
   9 Nov 2026 four dengue calculators from the CPG Management of Dengue in Adults, 4th edition, which Krishna admitted as a source.
   Where a source stops (exactly 50 kg, exactly 30, no basal-bolus split, no band named "moderate"), the calculator says so
   instead of choosing. The weight and the child's age band are shared between calculators in memory only and are never
   stored (rule 4). Paediatric tools that our sources do not cover open on PEMCalc, an outside site, labelled as such.
   Checklists and tables come straight from the pathway data, so a calculator cannot drift from its pathway. */
const CALC_GROUPS = [
  {k:'dengue', t:'Dengue', j:'t-bronze', ic:'droplet', d:'The one-screen assessment, triage vital signs, fluids, the test result, urine output, the shock index and adjusted weight'},
  {k:'doses', t:'Doses', j:'t-indigo', ic:'syringe', d:'Analgesia, anticoagulants, insulin, asthma prednisolone, kidney function with drug doses, and the rabies vaccine and RIG'},
  {k:'scores', t:'Scores', j:'t-sapphire', ic:'scale', d:'CURB-65, Wells, the asthma action plan zones and the McIsaac score'},
  {k:'cardio', t:'Heart', j:'t-teal', ic:'heart', d:'Chest pain, syncope, SVT and blood pressure'},
  {k:'calm', t:'Pain and calm', j:'t-plum', ic:'feather', d:'Pain scales, BARS and RASS, and the cancer pain rescue dose'},
  {k:'head', t:'Injuries', j:'t-garnet', ic:'brain', d:'Head injury criteria and the GCS, with the neck and limb rules'},
  {k:'tox', t:'Poisoning and allergy', j:'t-obsidian', ic:'flask', d:'Paracetamol overdose and anaphylaxis'},
  {k:'kids', t:'Kids', j:'t-champagne', ic:'kid', d:'Child doses and the dehydration check'}
];
const CALC_G = Object.fromEntries(CALC_GROUPS.map(g => [g.k, g]));
/* Appendix 3 rows kept in the CKD CPG entry's Doses tab: name, usual dose, the three GFR columns and the note */
const ckdRows = () => P['ckd-cpg'].notes.find(t => t.l === 'Doses').notes.filter(n => n.table).flatMap(n => n.table.rows.map(r => ({grp:n.h, name:r[0] + (r[0] === 'Acyclovir' ? ' (' + (/zoster/.test(r[1]) ? 'herpes zoster' : 'herpes simplex') + ')' : ''), dose:r[1], mild:r[2], mod:r[3], sev:r[4], note:r[5] || ''})));
/* Outside tools, as links only: nothing from either site is copied into the guide.
   PEMCalc (pemcalc.com, Dr Kiran Nesarajah): children's tools our sources do not cover.
   MDCalc (mdcalc.com): emergency scores the ebook names but does not define (TIMI, ABCD2), or does not cover.
   The MDCalc links come from its own sitemap and were checked to open, 9 Nov 2026. */
const PEM = 'https://pemcalc.com/', MDC = 'https://www.mdcalc.com/calc/';
const CALC_LINKS = [
  {g:'kids', site:'PEMCalc', href:PEM + 'asthma.html', t:'PRAM asthma score', d:'Severity score for a child with acute asthma, with doses by severity.'},
  {g:'kids', site:'PEMCalc', href:PEM + 'croup.html', t:'Westley croup score', d:'Croup severity from five signs.'},
  {g:'kids', site:'PEMCalc', href:PEM + 'vitalsigns.html', t:'Normal vital signs by age', d:'Heart rate, breathing rate, blood pressure and SpO2 ranges for each age group.'},
  {g:'head', site:'PEMCalc', href:PEM + 'pecarn.html', t:'PECARN head injury rules', d:'Which children with a head injury can safely go without a CT.'},
  {g:'head', site:'PEMCalc', href:PEM + 'pgcs.html', t:'Paediatric GCS', d:'The GCS with descriptors for infants and young children.'},
  {g:'cardio', site:'MDCalc', href:MDC + '111/timi-risk-score-ua-nstemi', t:'TIMI risk score (UA/NSTEMI)', d:'Risk score for unstable angina or NSTEMI. The Obsess protocol needs TIMI under 1, and the ebook does not list its items.'},
  {g:'cardio', site:'MDCalc', href:MDC + '115/wells-criteria-pulmonary-embolism', t:'Wells criteria for pulmonary embolism', d:'Pre-test probability of a pulmonary embolism.'},
  {g:'cardio', site:'MDCalc', href:MDC + '347/perc-rule-pulmonary-embolism', t:'PERC rule for pulmonary embolism', d:'When a low-risk patient needs no further testing for a pulmonary embolism.'},
  {g:'cardio', site:'MDCalc', href:MDC + '48/corrected-qt-interval-qtc', t:'Corrected QT interval (QTc)', d:'The QT interval corrected for the heart rate.'},
  {g:'scores', site:'MDCalc', href:MDC + '357/abcd2-score-tia', t:'ABCD2 score (TIA)', d:'Stroke risk after a TIA. The ebook\'s TIA route turns on ABCD2 over 3, and it does not list the items.'},
  {g:'scores', site:'MDCalc', href:MDC + '617/alvarado-score-acute-appendicitis', t:'Alvarado score', d:'Likelihood of appendicitis in a patient with abdominal pain.'},
  {g:'scores', site:'MDCalc', href:MDC + '104/centor-score-modified-mcisaac-strep-pharyngitis', t:'Centor score (McIsaac)', d:'Likelihood of a streptococcal sore throat.'},
  {g:'head', site:'MDCalc', href:MDC + '64/glasgow-coma-scale-score-gcs', t:'Glasgow Coma Scale', d:'The GCS that the head injury criteria use.'},
  {g:'head', site:'MDCalc', href:MDC + '696/canadian-c-spine-rule', t:'Canadian C-spine rule', d:'Which alert, stable trauma patients need imaging of the neck.'},
  {g:'head', site:'MDCalc', href:MDC + '703/nexus-criteria-c-spine-imaging', t:'NEXUS criteria for C-spine imaging', d:'When the cervical spine can be cleared without imaging.'},
  {g:'head', site:'MDCalc', href:MDC + '1670/ottawa-ankle-rule', t:'Ottawa ankle rule', d:'Which ankle and midfoot injuries need an X-ray.'},
  {g:'head', site:'MDCalc', href:MDC + '368/ottawa-knee-rule', t:'Ottawa knee rule', d:'Which knee injuries need an X-ray.'},
  {g:'doses', site:'MDCalc', href:MDC + '43/creatinine-clearance-cockcroft-gault-equation', t:'Creatinine clearance (Cockcroft-Gault)', d:'The creatinine clearance that the anticoagulant doses here depend on.'}
];
/* National CPGs on the Academy of Medicine of Malaysia's list (https://www.acadmed.org.my/index.cfm?&menuid=67), read 9 Nov 2026:
   the 46 that bear on the Green Zone (CPG-RUN-THROUGH.md, tiers A, B and C, and the dengue CPG). Links only. Each opens its PDF
   in Krishna's Google Drive folder, AMM Clinical Practice Guidelines (all 109 CPGs, shared with anyone who has the link; drive is
   the Drive file id) where the CPG's terms allow reproduction, with the Academy's own file as a second link (an outside site that
   may ask for a quick check first). Where the terms do not (none stated, or all rights reserved), drive is empty and the card links
   to the Academy's file only. Tiers and reuse terms: CPG-RUN-THROUGH.md and its front-matter check.
   A CPG built into the guide names its entry in id: it shows as that entry, which links to the same PDF from its References tab.
   Tiers A and B: for the Green Zone; C: now and then. */
const ACAD = 'https://www.acadmed.org.my/view_file.cfm?fileid=', GDRIVE = 'https://drive.google.com/file/d/', CPG_FOLDER = 'https://drive.google.com/drive/folders/1gzMDT4vyUnK-WiyC2AKdIAEP2eFjxjwh';
const CPG_SHELF = [
  {t:'Prevention and Treatment of Venous Thrombosis', y:'2013', s:'Haematology', tier:'B', cpg:'612', drive:'', qr:'613', id:'vte-cpg', kw:'dvt pe embolism anticoagulant'},
  {t:'Management of Type 2 Diabetes Mellitus, 6th edition', y:'2020', s:'Endocrine', tier:'B', cpg:'763', drive:'', qr:'979', id:'t2dm-cpg', kw:'dm diabetes sugar hypoglycaemia'},
  {t:'Management of Chronic Obstructive Pulmonary Disease, 2nd edition', y:'2009', s:'Respiratory', tier:'B', cpg:'323', drive:'', qr:'324', id:'copd-cpg', kw:'copd exacerbation'},
  {t:'Management of Avulsed Permanent Anterior Teeth, 3rd edition', y:'2019', s:'Dental and oral health', tier:'B', cpg:'429', drive:'113kKK18Qv7IZn1IjjsTtdOo81aHGvikP', id:'avulsed-tooth-cpg', kw:'tooth teeth dental knocked out'},
  {t:'Management of Abdominal Trauma in Adults', y:'2025', s:'Trauma and emergency', tier:'B', cpg:'1160', drive:'1_kf1naStT38xkobBgqoXD-jmbYiVUYBx', qr:'1161', qrd:'1U3l01Ltcf4_Py4BaFwh7lFYZcDWyKa9N', kw:'trauma injury'},
  {t:'Management of Cancer Pain, 2nd edition', y:'2023', s:'Cancer', tier:'B', cpg:'342', drive:'1c63xgZARDOpfh0ODSlol9YK9PmUadTwE', qr:'343', qrd:'1J1yWlLMa9Ht5aqh6SF7Xhkf5cCNydnQH', pil:[['374','English','1Nz4joQbftSlvhot5sSyKRLvFyvzZnJxz'],['1165','Bahasa Melayu','1XT3FP4QcwEppmNIwSxafa4MWU8807zlK']], id:'cancer-pain-cpg', kw:'opioid morphine palliative'},
  {t:'Management of Rhinosinusitis in Adolescents and Adults', y:'2016', s:'Ear, nose and throat', tier:'B', cpg:'845', drive:'1x265L-rLowqaMQhf-hfSB2mTQ_j0uyL2', qr:'846', qrd:'1hAVOU3dKBiTJfEWY8FMyiyX4h8eiho8n', id:'sinusitis-cpg', kw:'sinusitis nose'},
  {t:'Management of Sore Throat', y:'2003', s:'Ear, nose and throat', tier:'B', cpg:'284', drive:'', id:'sore-throat-cpg', kw:'pharyngitis tonsillitis'},
  {t:'Management of Chronic Kidney Disease, 2nd edition', y:'2018', s:'Kidney', tier:'B', cpg:'898', drive:'1trJ06QZ-Ad2nIj_BxVVAC3ZJ-MS4_z9q', qr:'899', qrd:'1cQCUDPeIOFWj_CxH9YciaoDzgp56sifG', id:'ckd-cpg', kw:'ckd renal egfr'},
  {t:'Management of Geriatric Hip Fracture', y:'2023', s:'Orthopaedics', tier:'B', cpg:'1107', drive:'1z_KLXdA6hrPuNuu2tRo6eKR6jns_DNWW', qr:'1108', qrd:'15i95pdADpSJI-ENLzONRMRnP5YLX85JN', id:'hip-fracture-cpg', kw:'fall elderly neck of femur'},
  {t:'Management of Ischaemic Stroke, 3rd edition', y:'2020', s:'Cardiovascular', tier:'C', cpg:'975', drive:'1WhG4bt5O7NFat8xD2ik25ya2Ya6AK6Tp', qr:'976', qrd:'17A7H8aREOWrvEo2UJK5U5F7bjogHLpHL', kw:'tia stroke thrombolysis'},
  {t:'Management of Hypertension, 5th edition', y:'2018', s:'Cardiovascular', tier:'C', cpg:'894', drive:'', kw:'bp blood pressure'},
  {t:'Management of Heart Failure, 5th edition', y:'2023', s:'Cardiovascular', tier:'C', cpg:'684', drive:'1xuqpb9yVtb88CTJMRA7TbgJ2fNCbWndO', kw:'hf breathless oedema'},
  {t:'Management of Atrial Fibrillation', y:'2012', s:'Cardiovascular', tier:'C', cpg:'564', drive:'', kw:'af palpitations anticoagulation'},
  {t:'Management of Dengue Fever in Children, 2nd edition', y:'2020', s:'Infectious diseases', tier:'C', cpg:'269', drive:'1OL6FwwwKeEaagMGXkpC_4bqLsxlTFbWc', qr:'997', qrd:'1Qr_F2OmK7cqPFH6VJgDAoI3fVpiu10Ay', kw:'child paediatric dengue'},
  {t:'Management of Spontaneous Intracerebral Haemorrhage, 1st edition', y:'2025', s:'Neurology and neurosurgery', tier:'C', cpg:'1164', drive:'1BX3zdSYLsleWSWtH2fCAQwOZnEZGpEpW', kw:'ich stroke bleed'},
  {t:'Prevention, Diagnosis and Management of Infective Endocarditis', y:'2017', s:'Cardiovascular', tier:'C', cpg:'850', drive:'1fAoIHqsQNsfrYjmvtyWapBwlXVgvUCKK', kw:'fever murmur'},
  {t:'Heart Disease in Pregnancy, 2nd edition', y:'2016', s:'Cardiovascular', tier:'C', cpg:'798', drive:'', kw:'pregnant'},
  {t:'Management of Mandibular Condyle Fractures', y:'2019', s:'Dental and oral health', tier:'C', cpg:'965', drive:'17zgBeoMbAiyRuPTSnnBhgDAoQ_wi6iRE', kw:'jaw fracture'},
  {t:'Management of Periodontal Abscess, 2nd edition', y:'2017', s:'Dental and oral health', tier:'C', cpg:'857', drive:'1tDwBS8D9Djf0nE4JgZIolVBTR1rSb5Pv', kw:'dental abscess tooth'},
  {t:'Management of Acute Orofacial Infection of Odontogenic Origin in Children, 1st edition', y:'2016', s:'Dental and oral health', tier:'C', cpg:'851', drive:'1kurQTenV8kdVId8Wv0BnWK_y4UKc-Bzg', kw:'facial swelling dental child'},
  {t:'Management of Thyroid Disorders', y:'2019', s:'Endocrine', tier:'C', cpg:'967', drive:'1xtAgksnyFhRSVlCmHZLeOuGpDPIrWpFO', qr:'968', qrd:'1kxOzcusAAi1xK4rDI-VEsjoIcMJFKXbz', kw:'thyrotoxicosis hyperthyroid'},
  {t:'Management of Type 1 Diabetes Mellitus in Children and Adolescents', y:'2016', s:'Endocrine', tier:'C', cpg:'803', drive:'1XoFrbeqPmc6NCDhCNWE3boR4DqUruSxJ', qr:'804', qrd:'1Ue-J4t5Iquqz9oOsRh4Mf_meAvJ2sfLe', kw:'dka child diabetes'},
  {t:'Management of Haemophilia', y:'2018', s:'Haematology', tier:'C', cpg:'922', drive:'10vaSILhJpnMWslhtXcOhFjDK14Y5tx5x', qr:'923', qrd:'1dzC9DJ-TdGvACR7KM7REfxI6UT31ikiQ', kw:'bleed factor'},
  {t:'Management of Immune Thrombocytopenic Purpura', y:'2006', s:'Haematology', tier:'C', cpg:'256', drive:'', kw:'itp platelets'},
  {t:'Management of Menorrhagia', y:'2004', s:'Men\'s and women\'s health', tier:'C', cpg:'272', drive:'', kw:'pv bleeding period'},
  {t:'Management of Bipolar Disorder, 2nd edition', y:'2024', s:'Mental health', tier:'C', cpg:'676', drive:'1fCmMFZSeUzqMCjtnoPgMQszzRtcAZDAK', qr:'677', qrd:'19AzjFEoHdh32PCqJ4TD6YZ3dB0KJ2NYi', kw:'mania agitation'},
  {t:'Management of Schizophrenia, 2nd edition', y:'2021', s:'Mental health', tier:'C', cpg:'290', drive:'1gCEz-7T-Bx-ibo3JEIOZwS7zkhGbhCc5', qr:'1052', qrd:'10C0iIZvt0TcyzE7a1lwslApv8jyAwO6X', kw:'psychosis agitation'},
  {t:'Management of Dementia, 3rd edition', y:'2021', s:'Mental health', tier:'C', cpg:'1021', drive:'1B0dLPvqNqOMclAN4iaFzc-paC9Bk0GGe', qr:'1022', qrd:'1K8eDSktZPdlzSJoZkuGLAx1dLYlsvfi9', pil:[['427','2nd edition','1LK-lDMHUvQgNFkzY7P76TJgFPurzBBDY']], kw:'confusion elderly'},
  {t:'Management of Major Depressive Disorder, 2nd edition', y:'2019', s:'Mental health', tier:'C', cpg:'250', drive:'1NDfFHN51KLD0ySFown7okb1qZThliytC', qr:'313', qrd:'1vpAmtc1gvAyXo0kJquaM4jgx7WeyDNT1', pil:[['327','2007 edition','1kkRohTyAs8kMp30P5KEN8ZOmZxwoxQ0x']], kw:'depression suicide self-harm'},
  {t:'Management of Glaucoma, 2nd edition', y:'2017', s:'Eye', tier:'C', cpg:'878', drive:'1VhY1AHyRITLHZf51X7QFTtrzF9AWAaA9', qr:'879', qrd:'1ikHARjR_yVzzCz0swLeMhsE_qUIoHSnd', kw:'red eye eye pain'},
  {t:'Management of Tuberculosis, 4th edition', y:'2021', s:'Respiratory', tier:'C', cpg:'567', drive:'1_Yylc0k5I8YQUQ_885JRPWdbpgmEazxi', qr:'568', qrd:'1tmki5ro1_SCGbBozft8CAZxo4qkSrJXw', kw:'tb cough isolation'},
  {t:'Management of E-cigarette or Vaping Product Use-Associated Lung Injury (EVALI)', y:'2021', s:'Respiratory', tier:'C', cpg:'1012', drive:'1AcbMBiM0XjvCa-7LWgQjxwGWo1C1NyTQ', qr:'1013', qrd:'1u18KVpwOV2qpce5Tb0lzQDkYcid5WGct', kw:'vape vaping e-cigarette'},
  {t:'Management of Atopic Eczema', y:'2017', s:'Skin', tier:'C', cpg:'883', drive:'1IiXHxz7huUnVYY4jV0JWPbrrJ3QmqtXN', qr:'884', qrd:'1zDPwCb-GvLmIXdza6bxLDpZQwUP_0kkk', kw:'eczema rash itch'},
  {t:'Management of Colorectal Carcinoma', y:'2017', s:'Cancer', tier:'C', cpg:'900', drive:'1Yi8aOp__YWgYRYviEt0vrSQZgG4g6xa5', qr:'901', qrd:'1BEb98K39atpAyHzM5d7_IQDjwDUlQYUU', kw:'bowel cancer rectal bleeding'},
  {t:'Management of Nasopharyngeal Carcinoma', y:'2016', s:'Cancer', tier:'C', cpg:'837', drive:'1ZbEPh1f2qWa7D6qzyHDf1SUGwiEICpeJ', qr:'838', qrd:'19rSndbJzC-_fahJc-3cqsYZyi8O1ZUjB', kw:'npc nosebleed epistaxis neck lump'},
  {t:'Management of Inflammatory Bowel Disease', y:'2025', s:'Gastroenterology', tier:'C', cpg:'1179', drive:'1FVqGrkn0aVfLvIFdWjVrzZTcU7FBYkS1', qr:'1180', qrd:'1bLRvU7YkxydGfZTjdmhQ4GGt-WVoYGvb', kw:'ibd crohn colitis diarrhoea'},
  {t:'Management of Post-Operative Infectious Endophthalmitis', y:'2006', s:'Eye', tier:'C', cpg:'653', drive:'', kw:'red eye eye surgery'},
  {t:'Management of Osteoarthritis, 2nd edition', y:'2013', s:'Rheumatology', tier:'C', cpg:'647', drive:'1F0uej_b3o4G-g6ZG_BAzXVDf2UhR2bDH', qr:'648', qrd:'1t7Y674hQrsxlHokFDvTp24A3x12KzIwv', kw:'oa knee hip joint pain'},
  {t:'Management of Asthma in Adults, 2nd edition', y:'2024', s:'Respiratory', tier:'A', cpg:'865', drive:'1pkxXZSQHmoCxIw2X4XLfXBf4OZDAQC0s', qr:'866', qrd:'1i1Gl8R4N1lwJ3oeyxfcKrYQchX1Gv-yM', id:'asthma-cpg', kw:'wheeze inhaler'},
  {t:'Early Management of Head Injury in Adults', y:'2015', s:'Neurology and neurosurgery', tier:'A', cpg:'779', drive:'1CR7nrraYWb3xMEUHjg2M_Ic-Vo7ZahiN', qr:'780', qrd:'1uG4KEyp9OZEQU5lFkeaMscOKx7qmjKB1', id:'head-injury-cpg', kw:'tbi concussion ct brain'},
  {t:'Management of Acute Coronary Syndromes, 1st edition', y:'2026', s:'Cardiovascular', tier:'A', cpg:'1171', drive:'1f9svSyE3_zx9NYxaDNYsDa0BIXmjJZ-6', id:'acs-cpg', kw:'chest pain mi stemi nstemi troponin'},
  {t:'Management of Gout, 2nd edition', y:'2021', s:'Rheumatology', tier:'A', cpg:'1045', drive:'1XHCEbaV5kRBJuE9we-fL1Dy7dd0WXPYw', qr:'1046', qrd:'1PR9Y2O88nkt0NbBcM7lrokivsN7LnT1w', id:'gout-cpg', kw:'joint uric acid urate colchicine allopurinol'},
  {t:'Management of Diabetic Foot, 2nd edition', y:'2018', s:'Orthopaedics', tier:'A', cpg:'920', drive:'1eABKtXY8Loc5Nf8vMZSNTewqsjFUvxcA', qr:'921', qrd:'1l5Rz65UkxZIivzaaPIGTCmiE5Z8C6xz8', id:'diabetic-foot-cpg', kw:'ulcer wound amputation'},
  {t:'Management of Foreign Body Ingestion in Children', y:'2025', s:'Paediatric surgery', tier:'A', cpg:'1174', drive:'1eJ7l3B92PES5w_OOqNazGPbSQ2mx9YYq', qr:'1175', qrd:'1KGHj-gffI6U1RyzYydA4A2LCg34VfVcM', id:'fb-children-cpg', kw:'swallowed coin battery magnet child'},
  {t:'Management of Dengue in Adults, 4th edition', y:'2026', s:'Infectious diseases', tier:'A', cpg:'756', drive:'16UkGeGZ5-9QKsnFewVHckgU-UXyJIVOb', qr:'757', qrd:'13lJ7CLeGtF-wHslrW6gesJ92hQ-dLXhL', id:'dengue-cpg', kw:'dengue fever'}
];
/* The GCS scales, read from the head injury CPG's Appendix 3 rows: 'Spontaneous 4; To voice/sound 3; ...' */
const gcsOpts = i => () => P['head-injury-cpg'].notes.flatMap(t => t.notes).find(n => n.h.startsWith('Appendix 3')).table.rows[i][1].split('; ').map(s => { const m = s.match(/^(.*) (\d)$/); return [m[2], m[1]]; });
const tableOf = (id, part) => (P[id].tables || []).find(t => t.title.includes(part));
/* A table inside the dengue CPG's reference notes (Table 5, the fluid quota) */
const dTable = part => P['dengue-cpg'].notes.flatMap(t => t.notes).find(n => n.table && n.h.includes(part)).table;
const r1 = x => Math.round(x * 10) / 10;
const fx = x => String(r1(x));
const range = (w, a, b, unit = 'mg') => `${fx(a * w)}–${fx(b * w)} ${unit}`;
const badWt = (w, lo = 2, hi = 300) => w < lo || w > hi ? [['Weight', `Enter ${lo} to ${hi} kg`, 'warn', '']] : null;
const PAIN_ROWS = {flacc:'FLACC', painad:'PAINAD', cpot:'CPOT'};
const painRows = v => {
  const t = tableOf('pain', PAIN_ROWS[v.sc || 'flacc']).rows;
  return v.sc === 'cpot' ? [...t.slice(0, 3), t[v.tube === 'ex' ? 4 : 3]] : t;
};
const painKey = v => 'r_' + (v.sc || 'flacc') + (v.sc === 'cpot' ? '_' + (v.tube || 'in') : '');
const CALCS = {
  dassess:{t:'Dengue assessment: one screen', g:'dengue', sticky:true, src:'CPG 4th ed., Appendix 7 and Table 8', path:'#dengue-cpg--ask', kw:'dengue assessment one screen whole triage appendix 7 table 8 mts zone level group a b1 b2 c warning signs comorbid co-morbid social risk vital signs day of illness phase febrile critical recovery haematocrit hct baseline platelet notification cpg',
    sub:'The CPG\'s systematic triage in one place: first look, vital signs, warning signs and co-morbids, with the day of illness and blood results. The zone, MTS level and group update as you tick.',
    fields:[
      {type:'h', n:'1', label:'First look and first touch'},
      {k:'lt', type:'check', label:'Life-threatening features? Tick each one present', stop:true, none:true, items:() => P['dengue-cpg'].nodes.life.items},
      {type:'h', n:'2', label:'Vital signs'},
      ['sbp','Systolic BP','mmHg'], ['dbp','Diastolic BP','mmHg'], ['hr','Heart rate','/min'], ['rr','Respiratory rate','/min'], ['spo2','SpO2','%'], ['map','MAP shown on the monitor','mmHg'],
      {type:'h', n:'3', label:'Warning signs, unstable co-morbids or high risk'},
      {k:'ws', type:'check', label:'Tick each one present', stop:true, none:true, items:() => P['dengue-cpg'].nodes.ws.items},
      {type:'h', n:'4', label:'Co-morbids or social risk'},
      {k:'cm', type:'check', label:'Tick each one present', none:true, items:() => P['dengue-cpg'].nodes.cm.items},
      {type:'h', n:'5', label:'Day of illness and blood results (optional)'},
      ['day','Day of illness',''],
      {k:'fev', type:'seg', label:'Fever now', opts:[['on','Still febrile'], ['down','Fever subsiding'], ['off','Afebrile, recovering']], nodef:true},
      ['hct','Haematocrit now','%'], ['hct0','An earlier haematocrit (baseline), if known','%'], ['plt','Platelets','× 10⁹/L'],
      {k:'sex', type:'seg', label:'For the median haematocrit (p17)', opts:[['m','Male ≤60 years'], ['mo','Male > 60 years'], ['f','Female']], nodef:true}],
    note:'CPG Management of Dengue in Adults, 4th edition (MaHTAS, 2026). Appendix 7 (p108) triages in order: life-threatening features, then unstable vital signs, then warning signs, unstable co-morbids or high risk, then co-morbids or social risk. The first one present sets the zone, MTS level and group (Table 8, p35), so tick None of these for each list once you have checked it: a lower level shows only when every earlier step is done. The vital signs use the triage vital signs calculator\'s rules. A rising haematocrit is measured from the patient\'s own baseline (≥20%, p17); the median values are for reference only, and the CPG does not use them as a baseline. Nothing you tick or type is saved.',
    run(v){
      const N = P['dengue-cpg'].nodes, out = [], lists = [];
      const st = k => v[k + '_n'] ? 'yes' : v[k + '_none'] ? 'none' : '';
      const ticked = k => N[{lt:'life', ws:'ws', cm:'cm'}[k]].items.filter((x, i) => v[k][i]);
      const vr = CALCS.dvitals.run(v);
      let vit = '', vitBad = [];
      if (Array.isArray(vr)) out.push(...vr);
      else if (vr){ vitBad = vr.outs.filter(o => o[2] === 'bad').map(o => o[0]); vit = vitBad.length ? 'yes' : v.sbp && v.dbp && v.hr && v.rr && v.spo2 && v.map ? 'none' : ''; }
      const steps = [['lt', st('lt'), 'red12', 'the first look and first touch (list 1)'], ['vit', vit, 'red2', 'all seven vital signs (2)'], ['ws', st('ws'), 'yellow', 'the warning signs (list 3)'], ['cm', st('cm'), 'green', 'the co-morbids and social risk (list 4)']];
      const any = steps.some(x => x[1]) || vr || v.day || v.hct || v.plt;
      if (!any) return null;
      const hit = steps.findIndex(x => x[1] === 'yes'), open = steps.filter(x => !x[1]);
      const lvl = hit >= 0 ? steps[hit][2] : open.length ? '' : 'pc', firm = lvl && (hit < 0 || steps.slice(0, hit).every(x => x[1] === 'none'));
      const Z = {red12:['MTS 1 or 2', 'bad', 'Red Zone, Group C'], red2:['MTS 2', 'bad', 'Red Zone, Group C'], yellow:['MTS 3', 'bad', 'Yellow Zone, Group B2'], green:['MTS 4', 'warn', 'Green Zone, Group B1'], pc:['MTS 5', 'good', 'At home, Group A']};
      if (lvl){
        const why = hit < 0 ? 'Nothing present in lists 1 to 4 and stable vital signs' : 'Present: ' + (steps[hit][0] === 'vit' ? vitBad : ticked(steps[hit][0])).join('; ');
        out.unshift([(firm ? '' : 'At least: ') + 'MTS level and zone (Appendix 7, Table 8)', Z[lvl][0], Z[lvl][1], Z[lvl][2] + '. ' + why]);
      }
      if (vr && !Array.isArray(vr)) out.push(...vr.outs);
      /* The course of illness (4.2, p9–11) and the key indicators of the critical phase (p42–43) */
      const notes = t => P['dengue-cpg'].notes.flatMap(x => x.notes).find(x => x.h === t).items;
      if (v.day){
        const d = Math.round(v.day), win = d >= 3 && d <= 7;
        out.push(['Day of illness', 'Day ' + d, win || v.fev === 'down' ? 'warn' : '', (win ? 'Inside the usual critical-phase window, days 3 to 7: the critical phase occurs when fever subsides (4.2, p9–11)' : d < 3 ? 'Before the usual critical-phase window of days 3 to 7 (4.2, p9–11)' : 'After the usual critical-phase window of days 3 to 7 (4.2, p9–11)') + (v.fev === 'down' ? '. A rapid drop in temperature may signal entry into the critical phase (p42)' : ''), {tl:true, day:d}]);
        if (win || v.fev === 'down') lists.push({h:'Key indicators of the critical phase (p42–43)', rows:notes('Key indicators of the critical phase').map((x, i) => [String(i + 1), x])});
      } else if (v.fev === 'down') out.push(['Fever', 'Subsiding', 'warn', 'A rapid drop in temperature may signal entry into the critical phase (p42). Enter the day of illness to see the timeline']);
      if (v.hct){
        if (v.hct0){
          const r = (v.hct - v.hct0) / v.hct0 * 100;
          out.push(['Haematocrit rise from baseline', (r > 0 ? '+' : '') + r.toFixed(0) + '%', r >= 20 ? 'bad' : 'good', r >= 20 ? '≥20% from baseline: a marker of plasma leakage (p17). Appendix 7 counts it as a warning sign with a rapidly falling platelet count' : 'Under 20% from the baseline', {min:-20, max:60, v:Math.max(-20, Math.min(60, r)), bands:[[-20, 20, 'good'], [20, 60, 'bad']]}]);
        } else {
          const med = {m:['male ≤60 years', 46], mo:['male > 60 years', 42], f:['female (all age groups)', 40]}[v.sex];
          out.push(['Haematocrit', v.hct + '%', '', (med ? `Median normal HCT, ${med[0]}: ${med[1]}% (p17). ` : '') + 'The CPG measures a rise from the patient\'s own baseline: enter an earlier result to compare']);
        }
      }
      if (v.plt) out.push(['Platelets', v.plt + ' × 10⁹/L', v.plt < 100 ? 'warn' : '', v.plt < 100 ? 'Below 100 × 10⁹/L: the earliest and most useful indicator of the critical phase (p42). The platelet count does not predict bleeding (p17), and routine prophylactic platelet transfusion is not given without active bleeding (Recommendation 9, p57)' : '100 × 10⁹/L or more', {min:0, max:300, v:Math.min(300, v.plt), bands:[[0, 100, 'warn'], [100, 300, 'good']]}]);
      if (lvl){ const rest = firm ? N[lvl].items.slice(2) : N[lvl].items; if (rest.length) lists.unshift({h:firm ? 'Then, for this level' : 'At least: ' + N[lvl].title, rows:rest.map((x, i) => [String(i + 1), x])}); }
      lists.push({h:'Notification (chapter 6, p16)', rows:[['Act 342', notes('Notification')[0]]]});
      const todo = open.map(x => x[3]).join(', ');
      const verdict = lvl && firm ? {cls:lvl === 'pc' ? 'ok' : lvl === 'green' ? 'next' : 'stop', h:N[lvl].title, p:N[lvl].items.slice(0, 2).join('. ') + '.', href:'#dengue-cpg--' + lvl, link:'Open the triage outcome'}
        : lvl ? {cls:lvl === 'green' ? 'next' : 'stop', h:'At least ' + N[lvl].title, p:'Still to check: ' + steps.slice(0, hit).filter(x => x[1] !== 'none').map(x => x[3]).join(', ') + '. Appendix 7 checks these first, so they can only raise the level.', href:'#dengue-cpg--' + lvl, link:'Open the triage outcome'}
        : {cls:'next', h:'Keep going', p:'Still to check: ' + todo + '. Tick None of these for each list once you have checked it.', href:'#dengue-cpg--ask', link:'Or step through the triage'};
      return {outs:out, verdict, lists, links:[['#calc-dfluid', 'Fluids by weight'], ['#calc-drdt', 'Test result'], ['#calc-duo', 'Urine output'], ['#dengue-cpg--dc', 'Ready to go home?']]};
    }},
  dengue:{t:'Shock index', g:'dengue', src:'Dengue SOP 2.0', path:'#dengue', kw:'pulse pressure heart rate discharge criteria shock',
    sub:'Shock index, pulse pressure and heart rate against the dengue discharge criteria.',
    fields:[['hr','Heart rate','/min'],['sbp','Systolic BP','mmHg'],['dbp','Diastolic BP','mmHg']],
    note:'Dengue SOP 2.0 discharge criteria: pulse pressure over 20 and under 50 mmHg, HR under 90 (allow for temperature), shock index under 1. In the ebook pathway a shock index over 1 is a sign of shock.',
    run(v){
      const out = [];
      if (v.hr && v.sbp){ const si = v.hr / v.sbp; out.push(['Shock index (HR ÷ SBP)', si.toFixed(2), si < 1 ? 'good' : si > 1 ? 'bad' : 'warn', si < 1 ? 'Under 1: meets the discharge criterion' : si > 1 ? 'Over 1: a sign of shock in the ebook pathway' : 'Exactly 1: not under 1, so the discharge criterion is not met', {min:0, max:2, v:si, bands:[[0, 1, 'good'], [1, 2, 'bad']]}]); }
      if (v.sbp && v.dbp){ const pp = v.sbp - v.dbp; out.push(['Pulse pressure (SBP − DBP)', pp + ' mmHg', pp > 20 && pp < 50 ? 'good' : 'warn', pp <= 20 ? 'Narrow: 20 mmHg or less' : pp >= 50 ? 'Wide: 50 mmHg or more' : 'Between 20 and 50: meets the criterion', {min:0, max:80, v:pp, bands:[[0, 20, 'warn'], [20, 50, 'good'], [50, 80, 'warn']]}]); }
      if (v.hr) out.push(['Heart rate', v.hr + '/min', v.hr < 90 ? 'good' : 'warn', v.hr < 90 ? 'Under 90: meets the criterion' : '90 or more: allow for temperature, and reassess', {min:40, max:160, v:v.hr, bands:[[40, 90, 'good'], [90, 160, 'warn']]}]);
      return out.length ? out : null;
    }},
  weight:{t:'Adjusted weight', g:'dengue', src:'Ebook p31–32', path:'#dengue', kw:'obese bmi ideal body weight dengue fluid',
    sub:'Ideal and adjusted body weight for an obese patient, for dengue fluid calculations.',
    fields:[['sex','Sex','',[['f','Female'],['m','Male']]],['ht','Height','cm'],['wt','Weight','kg']],
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
    }},
  /* Dengue, CPG 4th edition (MaHTAS 2026): each threshold is in P['dengue-cpg'] (see CALC_FACTS), and the tables are read from it */
  dvitals:{t:'Dengue triage vital signs', g:'dengue', src:'CPG 4th ed., Appendix 7', path:'#dengue-cpg--vit', kw:'dengue triage unstable vital signs blood pressure map mean arterial pulse pressure shock index heart rate respiratory rate spo2 red zone mts level 2 cpg',
    sub:'The seven unstable vital signs of the CPG\'s systematic triage, checked one by one.',
    fields:[['sbp','Systolic BP','mmHg'],['dbp','Diastolic BP','mmHg'],['hr','Heart rate','/min'],['rr','Respiratory rate','/min'],['spo2','SpO2','%'],['map','MAP shown on the monitor','mmHg']],
    note:'CPG Appendix 7 (p108), unstable vital signs: BP < 90/60 mmHg; MAP < 65 mmHg; PP < 30 mmHg; shock index (HR/SBP) > 1; HR > 100/min; RR > 20/min; SpO2 < 95%. Any one sends the patient to the Red Zone, MTS level 2. Pulse pressure is SBP − DBP (Appendix 10). The CPG gives no formula for the MAP, so enter the monitor\'s reading. A systolic under 90 counts as below 90/60. A diastolic under 60 with a systolic of 90 or more is shown for you to judge: the CPG does not say whether it counts on its own, and the Green Zone leaves it to the MO (the guide owner\'s decision, 9 Nov 2026).',
    run(v){
      if (v.sbp && v.dbp && v.dbp >= v.sbp) return [['Check the numbers', 'The diastolic should be below the systolic', 'warn', '']];
      const out = [], bad = [], todo = [];
      let lowDia = false;
      const add = (l, val, u, em, sc, flag) => { out.push([l, val, u ? 'bad' : 'good', em, sc]); if (u) bad.push(flag); };
      if (v.sbp && v.dbp){
        const pp = v.sbp - v.dbp;
        lowDia = v.sbp >= 90 && v.dbp < 60;
        if (lowDia) out.push(['Blood pressure', `${v.sbp}/${v.dbp} mmHg`, 'warn', 'Diastolic under 60, systolic 90 or more: not counted on its own, so judge it']);
        else add('Blood pressure', `${v.sbp}/${v.dbp} mmHg`, v.sbp < 90, v.sbp < 90 ? 'Systolic under 90: below 90/60' : 'Not below 90/60', null, 'BP < 90/60 mmHg');
        add('Pulse pressure (SBP − DBP)', pp + ' mmHg', pp < 30, pp < 30 ? 'Under 30 mmHg' : '30 mmHg or more', {min:0, max:80, v:pp, bands:[[0, 30, 'bad'], [30, 80, 'good']]}, 'PP < 30 mmHg');
      } else todo.push('blood pressure');
      if (v.map) add('MAP, from the monitor', v.map + ' mmHg', v.map < 65, v.map < 65 ? 'Under 65 mmHg' : '65 mmHg or more', {min:30, max:130, v:v.map, bands:[[30, 65, 'bad'], [65, 130, 'good']]}, 'MAP < 65 mmHg'); else todo.push('MAP');
      if (v.hr && v.sbp){ const si = v.hr / v.sbp; add('Shock index (HR ÷ SBP)', si.toFixed(2), si > 1, si > 1 ? 'Over 1' : si === 1 ? 'Exactly 1: not over 1' : 'Under 1', {min:0, max:2, v:si, bands:[[0, 1, 'good'], [1, 2, 'bad']]}, 'Shock index > 1'); } else todo.push('shock index');
      if (v.hr) add('Heart rate', v.hr + '/min', v.hr > 100, v.hr > 100 ? 'Over 100/min' : '100/min or under', {min:40, max:180, v:v.hr, bands:[[40, 100, 'good'], [100, 180, 'bad']]}, 'HR > 100/min'); else todo.push('heart rate');
      if (v.rr) add('Respiratory rate', v.rr + '/min', v.rr > 20, v.rr > 20 ? 'Over 20/min' : '20/min or under', {min:5, max:45, v:v.rr, bands:[[5, 20, 'good'], [20, 45, 'bad']]}, 'RR > 20/min'); else todo.push('respiratory rate');
      if (v.spo2) add('SpO2', v.spo2 + '%', v.spo2 < 95, v.spo2 < 95 ? 'Under 95%' : '95% or more', {min:80, max:100, v:v.spo2, bands:[[80, 95, 'bad'], [95, 100, 'good']]}, 'SpO2 < 95%'); else todo.push('SpO2');
      if (!out.length) return null;
      const verdict = bad.length ? {cls:'stop', h:'Unstable vital signs: Red Zone, MTS level 2', p:`${bad.join('; ')}. Table 8: compensated dengue shock syndrome; emergency treatment, IV fluid therapy and admission (Group C).`, href:'#dengue-cpg--red2', link:'Open the triage outcome'}
        : lowDia ? {cls:'next', h:'Check the blood pressure', p:`The diastolic is under 60 with a systolic of 90 or more. Appendix 7 writes BP < 90/60 mmHg and does not say whether a low diastolic alone counts: judge it with the rest of the triage.${todo.length ? ' Still to check: ' + todo.join(', ') + '.' : ''}`, href:'#dengue-cpg--vit', link:'Open the triage question'}
        : todo.length ? {cls:'next', h:'None unstable so far', p:'Still to check: ' + todo.join(', ') + '.'}
        : {cls:'ok', h:'No unstable vital signs', p:'Go on to the next triage question: warning signs, unstable co-morbids or high risk.', href:'#dengue-cpg--ws', link:'Next triage question'};
      return {outs:out, verdict};
    }},
  dfluid:{t:'Dengue fluids by weight', g:'dengue', src:'CPG 4th ed., Algorithm 1, Tables 11–13', path:'#dengue-cpg', kw:'dengue fluid quota m+5% maintenance holliday segar 48 hours critical phase warning signs group b2 iv rate ml/kg/hr crystalloid 70 kg limit obese bmi adjusted body weight cpg',
    sub:'Maintenance, the 48-hour fluid quota and the Algorithm 1 rates, with the 70 kg limit and the adjusted weight.',
    fields:[['wt','Weight','kg'],['ht','Height (optional, for the BMI)','cm'],{k:'sex', type:'seg', label:'Sex (needed only for the adjusted weight)', opts:[['f','Female'],['m','Male']], nodef:true}],
    note:'CPG 4th ed.: maintenance by Holliday-Segar (Table 11, p41): 4ml/kg/hr for the first 10kg, 2ml/kg/hr for the next 10kg and 1ml/kg/hr for each kg after that. A 70 kg weight limit applies to maintenance and the fluid quota (p40). Over BMI 27.5, use the adjusted body weight (Table 13, p48). The fluid quota (maintenance + 5% deficit, oral and IV together) is the maximum over 48 hours in the critical phase without shock, read from the table under Algorithm 1 (p xiv), as the Green Zone does (the guide owner\'s decision, 9 Nov 2026). In shock the quota no longer applies (p44).',
    run(v){
      const w = v.wt; if (!w) return null;
      if (w < 20 || w > 300) return [['Weight', 'Enter 20 to 300 kg', 'warn', '']];
      if (v.ht && (v.ht < 120 || v.ht > 220)) return [['Height', 'Enter 120 to 220 cm, or leave it empty', 'warn', '']];
      const out = [];
      let used = w, how = 'actual weight';
      if (v.ht){
        const bmi = w / Math.pow(v.ht / 100, 2), obese = bmi > 27.5;
        out.push(['BMI', bmi.toFixed(1) + ' kg/m²', obese ? 'warn' : 'good', obese ? 'Over 27.5: Table 13 uses the adjusted body weight' : '27.5 or less: use the actual weight', {min:15, max:45, v:bmi, bands:[[15, 27.5, 'good'], [27.5, 45, 'warn']]}]);
        if (obese){
          if (!v.sex) return {outs:out, verdict:{cls:'next', h:'Choose the sex', p:'Over BMI 27.5 the CPG uses the adjusted body weight, which needs the ideal body weight for the sex (Table 13, p48).'}};
          const ibw = (v.sex === 'm' ? 50 : 45.5) + 0.91 * (v.ht - 152);
          used = ibw + 0.4 * (w - ibw); how = 'adjusted body weight';
        }
      }
      const W = Math.min(used, 70), mh = W <= 10 ? 4 * W : W <= 20 ? 40 + 2 * (W - 10) : 60 + (W - 20);
      out.push(['Weight for the fluids', fx(W) + ' kg', 'good', used > 70 ? `The ${how} is ${fx(used)} kg: capped at the 70 kg limit (p40)` : `The ${how}`]);
      out.push(['Maintenance (Table 11)', fx(mh) + ' ml/hr', 'good', `${Math.round(mh * 24)} ml a day`]);
      const rows = dTable('Fluid quota').rows.map(r => [parseFloat(r[0].replace(/[^\d.]/g, '')), r[1]]);
      const top = rows[rows.length - 1], exact = rows.find(r => r[0] === W), lo = [...rows].reverse().find(r => r[0] < W), hi = rows.find(r => r[0] > W);
      const qem = 'Oral and IV together: the most to give over 48 hours, in the critical phase without shock';
      let gap = '';
      if (W >= top[0]) out.push(['Fluid quota over 48 hours (M+5%)', top[1] + ' ml', 'good', qem]);
      else if (exact) out.push(['Fluid quota over 48 hours (M+5%)', exact[1] + ' ml', 'good', qem]);
      else if (lo && hi){ out.push(['Fluid quota over 48 hours (M+5%)', `${lo[1]}–${hi[1]} ml`, 'warn', `The table gives ${lo[0]} kg ${lo[1]} ml and ${hi[0]} kg ${hi[1]} ml`]); gap = `The table gives the quota in 5 kg steps; it does not say how to treat ${fx(W)} kg.`; }
      else { out.push(['Fluid quota over 48 hours (M+5%)', 'Below the table', 'warn', 'The table starts at 30 kg']); gap = 'The quota table starts at 30 kg.'; }
      const k = (a, b) => `${fx(a * W)}–${fx(b * W)} ml/hr`;
      return {outs:out,
        lists:[{h:`Algorithm 1 at ${fx(W)} kg: warning signs (Group B2)`, rows:[
          ['Start', 'IV crystalloid 3–5 ml/kg/hr for 1 hour: ' + k(3, 5)],
          ['Improving', 'IV crystalloid 2–3 ml/kg/hr for 1–2 hours: ' + k(2, 3)],
          ['Still improving', `1–2 ml/kg/hr (${k(1, 2)}) or maintenance (${fx(mh)} ml/hr); stop IV fluid if able to tolerate orally`],
          ['Not improving, not in shock', 'Take FBC/VBG/lactate; increase to 5–7 ml/kg/hr while awaiting the result: ' + k(5, 7)],
          ['Drinking 1–2 ml/kg/hour', `${fx(W)}–${fx(2 * W)} ml an hour by mouth: IV fluid is not necessary (p44)`]]}],
        verdict:{cls:'next', h:'Keep the total within the quota', p:'The quota counts oral and IV fluid together over 48 hours, and many patients need less. Reassess before each change: clinical condition, vital signs, CCTVR and urine output. In shock, use Algorithms 2 to 4 instead.', href:'#dengue-cpg', link:'Open the Fluids and Shock tabs'},
        gap};
    }},
  drdt:{t:'Dengue test result', g:'dengue', src:'CPG 4th ed., Table 5', path:'#dengue-cpg', kw:'dengue rdt rapid combo test ns1 igm igg serology interpretation secondary dengue vaccine vaccination qdenga tak-003 cpg',
    sub:'What a rapid combo test (NS1, IgM and IgG) means, from the CPG\'s Table 5.',
    fields:[{k:'fd', type:'seg', label:'History of fever', opts:[['lt','Less than 5 days'],['eq','5 days'],['gt','More than 5 days']], nodef:true},
      {k:'ns1', type:'seg', label:'NS1', opts:[['+','Positive'],['−','Negative']], nodef:true},
      {k:'igm', type:'seg', label:'IgM', opts:[['+','Positive'],['−','Negative']], nodef:true},
      {k:'igg', type:'seg', label:'IgG', opts:[['+','Positive'],['−','Negative']], nodef:true},
      {k:'vax', type:'check', label:'Dengue vaccine', items:['Dengue vaccine (TAK-003/Qdenga) in the last 30 days']}],
    note:'CPG Table 5 (p20) lists four result patterns for a history of fever of less than 5 days and five for more than 5 days; any other pattern, and exactly 5 days, is not in the table. Recommendation 1 (p21): within 30 days after dengue vaccination, PCR or NS1 antigen may be used to diagnose dengue, and IgM and IgG should not be used as confirmatory tests.',
    run(v){
      if (!v.fd || !v.ns1 || !v.igm || !v.igg) return null;
      const band = {lt:'Less than 5 days', gt:'More than 5 days'}[v.fd], pat = `NS1 ${v.ns1}, IgM ${v.igm}, IgG ${v.igg}`, out = [];
      let gap = '', verdict = null;
      if (!band){ out.push(['Table 5', 'Not covered', 'warn', 'The table gives less than 5 days and more than 5 days, not exactly 5']); gap = 'Table 5 has no reading for a history of fever of exactly 5 days.'; }
      else {
        const row = dTable('Table 5').rows.find(r => r[0] === band && r[1] === v.ns1 && r[2] === v.igm && r[3] === v.igg);
        if (row) out.push(['Table 5', row[4], /^Not dengue infection$/.test(row[4]) ? 'good' : /High risk/.test(row[4]) ? 'bad' : 'warn', `${pat}, with ${band.toLowerCase()} of fever`]);
        else { out.push(['Table 5', 'Not in the table', 'warn', `${pat} is not listed for ${band.toLowerCase()} of fever`]); gap = 'Table 5 does not list this result pattern.'; }
      }
      if (v.vax_n) verdict = {cls:'refer', h:'Within 30 days of dengue vaccination', p:'IgM and IgG should not be used as confirmatory tests; PCR or NS1 antigen may be used. A positive NS1 does not tell wild-type from vaccine-derived virus, and a negative one does not fully exclude dengue (Recommendation 1 and 7.3, p21). Rely on clinical evaluation and judgement.'};
      else if (v.ns1 === '−' && v.igm === '−' && v.igg === '−') verdict = {cls:'next', h:'All three negative', p:'Negative test results require differential diagnosis to confirm cause of infection (p21).'};
      return {outs:out, verdict, gap};
    }},
  duo:{t:'Urine output', g:'dengue', src:'CPG 4th ed., p31, p44 and p84', path:'#dengue-cpg', kw:'dengue urine output ml/kg/hr void oliguria perfusion discharge catheter cpg',
    sub:'Urine output in ml/kg/hr from one void, against the CPG\'s targets.',
    fields:[['vol','Urine passed','ml'],['hrs','Hours since the last void','h'],['wt','Weight','kg']],
    note:'CPG 4th ed.: calculate urine output in ml/kg/hr at each void; 0.5 - 1 ml/kg/hour is optimal and indicates adequate perfusion (p44). The minimum is 0.5 ml/kg/hour, and a patient should pass urine 4 to 6 times a day, at least once every 6 hours (p31). The discharge criteria ask for 0.5 - 1.5 mL/kg/hr (p84). This uses the weight you enter.',
    run(v){
      if (!v.vol || !v.hrs || !v.wt) return null;
      const bad = badWt(v.wt, 20, 300); if (bad) return bad;
      const u = v.vol / v.wt / v.hrs;
      const out = [['Urine output', u.toFixed(2) + ' ml/kg/hr', u < 0.5 ? 'bad' : u <= 1.5 ? 'good' : 'warn',
        u < 0.5 ? 'Under 0.5: below the minimum of 0.5 ml/kg/hour (p31)' : u <= 1 ? '0.5 to 1: optimal, adequate perfusion (p44)' : u <= 1.5 ? 'Over 1: within the discharge criterion of 0.5 to 1.5 (p84)' : 'Over 1.5: above the ranges the CPG gives',
        {min:0, max:2.5, v:u, bands:[[0, 0.5, 'bad'], [0.5, 1.5, 'good'], [1.5, 2.5, 'warn']]}]];
      if (v.hrs > 6) out.push(['Time since the last void', fx(v.hrs) + ' hours', 'warn', 'Over 6 hours: the CPG asks for urine at least once every 6 hours (p31)']);
      return out;
    }},
  /* Asthma in adults, CPG 2nd edition (MaHTAS 2024): each number is in P['asthma-cpg'] (see CALC_FACTS) */
  apred:{t:'Asthma: prednisolone by weight', g:'doses', src:'Asthma CPG 2nd ed., p xiv and p40', path:'#asthma-cpg--mmt', kw:'asthma exacerbation prednisolone steroid oral corticosteroid ocs dose mg/kg ideal body weight cpg',
    sub:'The CPG\'s prednisolone range in an asthma exacerbation: 0.5 to 1 mg/kg, maximum 50 mg, for 5 to 7 days.',
    fields:[['ibw','Ideal body weight','kg']],
    note:'Asthma CPG 2nd ed. (MaHTAS 2024), Algorithm 4 (p xiv): Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat, then Continue prednisolone (5 - 7 days). Text (p40): The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily; This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction. The CPG gives no formula for the ideal body weight, so enter it. The ebook pathway and the Asthma Zone memo give 30 mg a day for 5 days; which the Green Zone follows is still to confirm.',
    run(v){
      const w = v.ibw; if (!w) return null;
      const bad = badWt(w, 30, 150); if (bad) return bad;
      const lo = Math.min(0.5 * w, 50), hi = Math.min(w, 50);
      const out = [['Prednisolone, stat and then daily', lo === hi ? fx(hi) + ' mg' : `${fx(lo)}–${fx(hi)} mg`, 'good',
          w >= 100 ? 'Both ends reach the 50 mg maximum' : w > 50 ? '0.5–1 mg/kg; the upper end is held at the 50 mg maximum' : '0.5–1 mg/kg of the ideal body weight'],
        ['Course', '5 to 7 days', 'good', 'Can be stopped without gradual reduction (p40)']];
      return {outs:out, gap:'The CPG uses the ideal body weight (p40) but gives no formula for it, and Algorithm 4 writes mg/kg without naming the weight. It gives no tablet strength or rounding, and does not say whether the stat dose is the first day of the course.',
        links:[['#asthma-cpg--mmt', 'Mild or moderate treatment'], ['#asthma', 'Ebook pathway (30 mg)']]};
    }},
  apef:{t:'Asthma action plan: PEF zones', g:'scores', src:'Asthma CPG 2nd ed., Appendix 5', path:'#asthma-cpg--home', kw:'asthma action plan aap peak flow pefr pef personal best predicted zones well getting worse alert discharge cpg',
    sub:'The three PEFR zones for the CPG\'s written asthma action plan, from the personal best.',
    fields:[['best','Personal best PEFR, or predicted','l/min'],['now','Current PEFR (optional)','l/min']],
    note:'Asthma CPG 2nd ed., Appendix 5A (p71), the same in 5B: WELL, PEFR: ____ to ____l/min (80% to 100% of personal best); GETTING WORSE, PEFR: ____ to ____l/min (50% to 79% of personal best); ALERT, PEFR: Below ____l/min (less than 50% of personal best). In PEFR-based plans, personal best PEFR should be used; In patients without known personal best, the predicted value may be used (5.2, p13), read off the nomogram in Appendix 4 (p70). ABG: It should be considered for patients with PEFR <50% (7.3, p41). Values are rounded to the nearest l/min.',
    run(v){
      const b = v.best; if (!b) return null;
      if (b < 60 || b > 900) return [['Check the number', 'Personal best 60–900 l/min', 'warn', '']];
      const r = x => Math.round(x), out = [
        ['WELL', `${r(0.8 * b)} to ${r(b)} l/min`, 'good', '80% to 100% of personal best'],
        ['GETTING WORSE', `${r(0.5 * b)} to ${r(0.79 * b)} l/min`, 'warn', '50% to 79% of personal best'],
        ['ALERT', `Below ${r(0.5 * b)} l/min`, 'bad', 'Less than 50% of personal best']];
      if (v.now){
        const p = v.now / b * 100, pc = fx(p) + '%';
        const z = p > 100 ? ['Above 100% of personal best', 'warn', 'The plan has no zone above 100%: check the personal best'] : p >= 80 ? ['WELL', 'good', '80% to 100% of personal best'] : p > 79 ? ['Between 79% and 80%', 'warn', 'The plan has no zone between 79% and 80%'] : p >= 50 ? ['GETTING WORSE', 'warn', '50% to 79% of personal best'] : ['ALERT', 'bad', 'Less than 50% of personal best. ABG: it should be considered for patients with PEFR <50% (p41)'];
        out.push(['Current PEFR', `${r(v.now)} l/min, ${pc}`, z[1], `${z[0]}: ${z[2]}`, {min:0, max:120, v:Math.min(p, 120), bands:[[0, 50, 'bad'], [50, 80, 'warn'], [80, 100, 'good'], [100, 120, 'warn']]}]);
      }
      return {outs:out, gap:'The plan\'s bands leave readings between 79% and 80% of personal best, and above 100%, without a zone. The predicted value comes only from the Appendix 4 nomogram, a picture with no formula. PEF or FEV1 may not be applicable in an acute exacerbation (p37).',
        links:[['#asthma-cpg--home', 'Discharge with an action plan']]};
    }},
  analgesia:{t:'Analgesia by weight', g:'doses', src:'Ebook p45–50', path:'#pain', kw:'paracetamol panadol ketamine pain dose mg/kg',
    sub:'Paracetamol and ketamine doses from the ebook\'s choice of analgesia table.',
    fields:[['wt','Weight','kg']],
    note:'From the ebook\'s choice of analgesia table. Paracetamol (PO/IV): over 50 kg, 500 mg–1 g 6–8 hourly, max 4 g/day; under 50 kg, 15 mg/kg/dose, max 60 mg/kg/day; caution in hepatic impairment. Ketamine (IM/IV): analgesia 0.1–0.3 mg/kg; 0.2–0.5 mg/kg (labelled "recreational" in the ebook); partial dissociation 0.4–0.8 mg/kg; full dissociation 1–2 mg/kg; avoid in IHD.',
    run(v){
      const w = v.wt; if (!w) return null;
      const bad = badWt(w); if (bad) return bad;
      const out = [];
      if (w < 50) out.push(['Paracetamol (PO/IV), each dose', fx(15 * w) + ' mg', 'good', `15 mg/kg/dose, max ${fx(60 * w)} mg a day (60 mg/kg/day). Caution: hepatic impairment`]);
      else if (w > 50) out.push(['Paracetamol (PO/IV), each dose', '500 mg–1 g', 'good', '6–8 hourly, max 4 g a day. Caution: hepatic impairment']);
      else out.push(['Paracetamol at exactly 50 kg', 'Not covered', 'warn', 'The ebook gives doses for over 50 kg and under 50 kg, but not for exactly 50 kg']);
      out.push(['Ketamine (IM/IV): analgesia', range(w, 0.1, 0.3), 'good', '0.1–0.3 mg/kg. Avoid in IHD']);
      out.push(['Ketamine: 0.2–0.5 mg/kg', range(w, 0.2, 0.5), 'good', 'The ebook labels this dose "recreational"']);
      out.push(['Ketamine: partial dissociation', range(w, 0.4, 0.8), 'warn', '0.4–0.8 mg/kg']);
      out.push(['Ketamine: full dissociation', range(w, 1, 2), 'warn', '1–2 mg/kg']);
      return {outs:out, links:[['#calc-pain', 'Pain scales'], ['#pain--mp', 'Morphine pain protocol']]};
    }},
  anticoag:{t:'Anticoagulant for a confirmed DVT', g:'doses', src:'Ebook p33–35', path:'#dvt--dvt', kw:'fondaparinux arixtra clexane enoxaparin creatinine clearance dvt dose',
    sub:'Fondaparinux and Clexane doses by weight and creatinine clearance.',
    fields:[['wt','Weight','kg'], {k:'crcl', type:'seg', nodef:true, label:'Creatinine clearance', opts:[['over','Over 30'], ['under','Under 30']]}],
    note:'From the ebook\'s DVT pathway, once a DVT is confirmed: SC fondaparinux (if creatinine clearance over 30): under 50 kg 5 mg, 50–100 kg 7.5 mg, over 100 kg 10 mg, once a day; or SC Clexane 1 mg/kg every 12 hours (creatinine clearance over 30) or once a day (under 30). Consult EP in an obese patient.',
    run(v){
      const w = v.wt; if (!w) return null;
      const bad = badWt(w); if (bad) return bad;
      if (!v.crcl) return [['Creatinine clearance', 'Choose over or under 30', 'warn', 'The ebook gives doses for over 30 and under 30, not for exactly 30']];
      const out = [];
      if (v.crcl === 'over'){
        out.push(['SC fondaparinux', (w < 50 ? '5' : w <= 100 ? '7.5' : '10') + ' mg once a day', 'good', w < 50 ? 'Under 50 kg' : w <= 100 ? '50–100 kg' : 'Over 100 kg']);
        out.push(['or SC Clexane', fx(w) + ' mg every 12 hours', 'good', '1 mg/kg every 12 hours']);
      } else {
        out.push(['SC fondaparinux', 'Not given', 'warn', 'The ebook gives fondaparinux only for creatinine clearance over 30']);
        out.push(['SC Clexane', fx(w) + ' mg once a day', 'good', '1 mg/kg once a day']);
      }
      out.push(['Obese patient', 'Consult EP', 'warn', '']);
      return {outs:out, gap:'The ebook does not state the disposition after a confirmed DVT.', links:[['#calc-wells', 'Wells score'], ['#calc-crcl', 'Creatinine clearance (CKD CPG)'], [MDC + '43/creatinine-clearance-cockcroft-gault-equation', 'Creatinine clearance on MDCalc (outside site)', true]]};
    }},
  /* CKD CPG 2018: creatinine clearance by the CPG's own Cockcroft-Gault (p7), then the drug's printed Appendix 3 cell at that
     kidney function, from the Doses tab of P['ckd-cpg'] (see CALC_FACTS). Exactly 30 and 60 show both columns that meet there. */
  crcl:{t:'Kidney function and drug doses', g:'doses', src:'CKD CPG 2018, p7 and Appendix 3', path:'#ckd-cpg--rx', kw:'ckd chronic kidney disease creatinine clearance crcl cockcroft gault egfr renal impairment dose adjustment antibiotic metformin sglt2 diuretic appendix 3 discharge prescription cpg',
    sub:'Creatinine clearance by the CPG\'s Cockcroft-Gault, then a drug\'s dose at that kidney function, as Appendix 3 prints it.',
    fields:[['yrs','Age','years'], ['wt','Weight','kg'], ['scr','Serum creatinine','µmol/L'], {k:'sex', type:'seg', label:'Sex', opts:[['m','Male'], ['f','Female']], nodef:true},
      {k:'drug', type:'pick', label:'Drug (Appendix 3, the rows kept in the guide)', opts:() => ckdRows().map(r => [r.name, r.dose, r.grp])}],
    note:'CKD CPG, 2nd edition (MaHTAS, 2018). CrCl = (140 - age) x weight (kg) / SCr (µmol/L) x constant, 1.23 in a man and 1.04 in a woman (p7); the CPG prints the unit as ml/min/1.73 m². In the elderly (over 65) there is no accurate method to assess renal function. Appendix 3 columns: mild GFR 60 - 90, moderate 30 - 59, severe under 30 ml/min; a drug marked # is dosed by MDRD or CKD-EPI instead. Each cell is shown as printed: read any sub-band in it against the clearance. Nothing you enter is saved.',
    run(v){
      let cl = null;
      const out = [];
      if (v.yrs && v.wt && v.scr && v.sex){
        if (v.yrs < 18 || v.yrs > 110) return [['Age', 'Enter 18 to 110 years', 'warn', 'The CPG is for adults']];
        const bad = badWt(v.wt); if (bad) return bad;
        if (v.scr < 20 || v.scr > 2000) return [['Serum creatinine', 'Enter 20 to 2000 µmol/L', 'warn', '']];
        cl = (140 - v.yrs) * v.wt / v.scr * (v.sex === 'm' ? 1.23 : 1.04);
        out.push(['Creatinine clearance (Cockcroft-Gault)', cl.toFixed(0) + ' ml/min', cl < 30 ? 'bad' : cl < 60 ? 'warn' : 'good', `(140 - ${v.yrs}) x ${fx(v.wt)} / ${v.scr} x ${v.sex === 'm' ? '1.23' : '1.04'} (p7); the CPG prints the unit as ml/min/1.73 m²` + (v.yrs > 65 ? '. Over 65: the CPG says there is no accurate method to assess renal function' : ''), {min:0, max:120, v:Math.min(120, cl), bands:[[0, 30, 'bad'], [30, 60, 'warn'], [60, 120, 'good']]}]);
      }
      if (cl == null && !v.drug) return null;
      const r = cl == null ? null : Math.round(cl);
      const cols = r == null ? [] : r > 90 ? ['usual'] : r === 60 ? ['mild', 'mod'] : r === 30 ? ['mod', 'sev'] : r > 60 ? ['mild'] : r > 30 ? ['mod'] : ['sev'];
      const NAME = {usual:'Usual dose', mild:'Mild (GFR 60 - 90 ml/min)', mod:'Moderate (GFR 30 - 59 ml/min)', sev:'Severe (GFR <30 ml/min)'};
      const lists = [];
      let gap = '';
      if (v.drug){
        const d = ckdRows().find(x => x.name === v.drug);
        if (d){
          const rows = [['Usual dose', d.dose]];
          if (cols.length) cols.filter(c => c !== 'usual').forEach(c => rows.push([NAME[c], d[c]]));
          else rows.push([NAME.mild, d.mild], [NAME.mod, d.mod], [NAME.sev, d.sev]);
          const nt = d.note.replace(/^#;?\s*/, ''); if (nt) rows.push(['Note', nt]);
          lists.push({h:d.name + (cols.length ? ' at a clearance of ' + r + ' ml/min' : ': every column'), rows:rows.filter(x => x[1])});
          if (d.note.startsWith('#')) gap = 'This drug is marked #: Appendix 3 doses it by MDRD or CKD-EPI, not by this Cockcroft-Gault clearance.';
          if (d.name === 'Metformin' && r != null && r > 45 && r < 60) gap = (gap ? gap + ' ' : '') + 'Metformin\'s moderate cell gives only 30 - 45: the CPG does not state the dose at 46 - 59.';
        }
      }
      if (r != null && r > 90) gap = (gap ? gap + ' ' : '') + 'Appendix 3\'s columns stop at a GFR of 90 ml/min; above that it prints only the usual dose.';
      if (r != null && r < 10) gap = (gap ? gap + ' ' : '') + 'The dosing guide for GFR <10 ml/min does not provide information on dosing in haemodialysis, peritoneal dialysis or continuous RRT patients.';
      if (r === 30 || r === 60) out.push(['Where the columns meet', 'Both shown', 'warn', `At ${r} ml/min two of Appendix 3's columns meet: read both cells`]);
      return {outs:out, lists, gap, links:[['#ckd-cpg--r12', 'When to refer (Recommendation 12)'], ['#calc-anticoag', 'Anticoagulant for a confirmed DVT']]};
    }},
  /* Cancer pain CPG 2023: the rescue (breakthrough) dose as 1/6 to 1/12 of the 24-hour dose (Recommendation 7, p23; p22) and the
     titration rules (p20, p23), from the text of P['cancer-pain-cpg'] (see CALC_FACTS). No opioid conversion: the CPG's p24
     ratio and its Table 4 disagree (CPG-REVIEW-CANCER-PAIN.md). */
  copioid:{t:'Cancer pain: rescue dose and titration', g:'calm', src:'Cancer pain CPG 2023, p20–23', path:'#cancer-pain-cpg--bt', kw:'cancer pain opioid morphine oxycodone breakthrough rescue dose 1/6 1/12 titration 24-hour total daily dose palliative cpg',
    sub:'The rescue dose for breakthrough pain from the regular 24-hour opioid dose, and the CPG\'s titration step.',
    fields:[['tdd','Regular opioid over 24 hours (oral morphine or oxycodone)','mg'], ['res','Rescue doses taken in the last 24 hours, in total (optional)','mg'], ['nres','Number of rescue doses in the last 24 hours (optional)',''],
      {k:'ctl', type:'seg', label:'Pain now', opts:[['un','Uncontrolled'], ['ok','Controlled']], nodef:true}],
    note:'Cancer pain CPG, 2nd edition (MaHTAS, 2023). Opioids (morphine or oxycodone) for breakthrough cancer pain should be prescribed at 1/6 to 1/12 of the 24-hour dose (Recommendation 7, p23); 1/6 is the 4-hourly dose, and as low as 1/12 can be used, for example in renal impairment (p22). Rescue doses are given as often as required (up to hourly). Titration (p20): add the rescue doses of the last 24 hours to the regular dose (limit to a 50% increase; more than that, consult a specialist), or increase the daily dose by 25 - 50% if no rescue doses were taken but the pain is uncontrolled. Titration can be done as early as 24 hours after starting. No opioid conversion is shown. Nothing you enter is saved.',
    run(v){
      const t = v.tdd; if (!t) return null;
      if (t < 1 || t > 2000) return [['Regular opioid', 'Enter 1 to 2000 mg over 24 hours', 'warn', '']];
      const out = [['Rescue dose (1/6 to 1/12 of the 24-hour dose)', `${fx(t / 12)}–${fx(t / 6)} mg`, 'good', 'Each dose, as often as required (up to hourly). 1/6 is the 4-hourly dose; as low as 1/12 can be used, for example in renal impairment (p22). Recommendation 7 (p23)']];
      let verdict = null;
      if (v.res){
        const n = t + v.res, cap = t * 1.5, over = n > cap;
        out.push(['New 24-hour dose: regular plus rescue doses', fx(Math.min(n, cap)) + ' mg', over ? 'warn' : 'good', over ? `Regular plus rescue comes to ${fx(n)} mg, over a 50% increase: the CPG limits the step to 50% (${fx(cap)} mg) and says to consult a specialist for more (p20)` : 'Regular plus the rescue doses of the last 24 hours (p20)']);
        out.push(['Rescue dose on the new 24-hour dose', `${fx(Math.min(n, cap) / 12)}–${fx(Math.min(n, cap) / 6)} mg`, 'good', '1/6 to 1/12 of the new 24-hour dose']);
      } else if (v.ctl === 'un'){
        out.push(['Increase by 25 - 50% of the daily dose', `${fx(t * 1.25)}–${fx(t * 1.5)} mg over 24 hours`, 'warn', 'No rescue doses taken but the pain is uncontrolled (p20)']);
      }
      if (v.nres > 3) verdict = {cls:'next', h:'More than 3 rescue doses a day: titrate', p:'A dose increment may be necessary when the patient needs multiple doses for breakthrough pain (>3 doses) throughout the day (p20). Titration can be done as early as 24 hours after starting.', href:'#cancer-pain-cpg--titr', link:'Open the titration step'};
      return {outs:out, verdict, gap:'For a patient on a fentanyl patch, the CPG does not say which opioid to use for rescue or how to convert its dose.', links:[['#cancer-pain-cpg--lax', 'Side effects: laxative and antiemetic'], ['#cancer-pain-cpg--tox', 'Opioid toxicity']]};
    }},
  /* Sore throat CPG 2003, summarised in the guide's own words: the McIsaac score from the entry's own checklist (p12) */
  mcisaac:{t:'Sore throat: McIsaac score', g:'scores', src:'Sore throat CPG 2003 (summarised), p12', path:'#sore-throat-cpg--ms', kw:'sore throat pharyngitis tonsillitis mcisaac centor score strep gabhs throat swab antibiotic cpg',
    sub:'One point each, as the CPG\'s algorithm scores them, and what each score leads to.',
    fields:[{k:'ms', type:'check', label:'Tick each one present', pts:true, items:() => P['sore-throat-cpg'].nodes.ms.items}],
    note:'From the sore throat CPG (April 2003), summarised in the guide\'s own words: the CPG gives no permission to reproduce it. One point each (algorithm, p12): fever ≥ 38°C, no cough, tonsillar exudates, tender anterior cervical nodes, age <15. Score <2: a virus is likely; 2 - 3: throat swab; 4 or more: swab, or start an antibiotic. The CPG is from 2003. Nothing you tick is saved.',
    run(v){
      if (!v.ms_set) return null;
      const sc = v.ms_sum, o = P['sore-throat-cpg'].nodes.ms.opts, i = sc < 2 ? 0 : sc <= 3 ? 1 : 2;
      return {outs:[['McIsaac score', sc + ' of 5', ['good', 'warn', 'bad'][i], o[i][0], {min:-0.5, max:5.5, v:sc, bands:[[-0.5, 1.5, 'good'], [1.5, 3.5, 'warn'], [3.5, 5.5, 'bad']]}]],
        verdict:{cls:['ok', 'next', 'stop'][i], h:o[i][0], href:'#sore-throat-cpg--' + o[i][1], link:'Open the step'}};
    }},
  insulin:{t:'Total daily insulin dose', g:'doses', src:'Ebook p41–42', path:'#hyperglycaemia--known', kw:'tdd basal bolus insulin hyperglycaemia units',
    sub:'The total daily dose for starting a basal-bolus regimen, from the ebook\'s Table 1.0.',
    fields:[['wt','Weight','kg'], {k:'prof', type:'pick', label:'Patient profile (unit/kg/day)', opts:() => tableOf('hyperglycaemia', 'insulin').rows.map(r => [r[0], r[1]])}],
    note:'From the ebook\'s Table 1.0, total daily insulin dose: 0.2–0.3 unit/kg/day for the elderly, renal failure or risk of hypoglycaemia; otherwise 0.4 at BG 7.8–11.1 mmol/L and 0.5 at BG 11.2–22.2 mmol/L.',
    run(v){
      const w = v.wt; if (!w || !v.prof) return null;
      const bad = badWt(w); if (bad) return bad;
      const [a, b] = v.prof.split('–').map(Number);
      return {outs:[['Total daily dose', (b ? `${fx(a * w)}–${fx(b * w)}` : fx(a * w)) + ' units a day', 'good', v.prof + ' unit/kg/day']],
        lists:[{h:'Type 2 diabetes CPG (2020, summarised): what it gives on splitting', rows:P['t2dm-cpg'].nodes.isplit.items.map((x, i) => [String(i + 1), x])}],
        gap:'The ebook says to start a basal-bolus regimen based on the TDD, but does not give the split between basal and bolus doses. The type 2 diabetes CPG gives a split only for the move off an insulin infusion after DKA, and a different starting TDD: which the Green Zone uses is still to confirm.', links:[['#t2dm-cpg--isplit', 'Type 2 diabetes CPG: the split']]};
    }},
  /* Rabies post-exposure prophylaxis: the prescriptions written the way the protocol's examples write them (Appendices 4 to 6),
     with the dose dates worked out from Day 0, and the schedules from its flow chart (Appendix 2). No name, IC or serial number:
     the slip's own boxes take those. Nothing is saved. */
  rabies:{t:'Rabies vaccine and RIG: the prescription', g:'doses', src:'Rabies and ABC protocol, Oct 2022', path:'#animal-bites--cat', kw:'rabies dog bite cat bite monkey bite animal bite abc vaccine rig immunoglobulin pep post-exposure prophylaxis intradermal intramuscular deltoid prescription schedule foreigner ward chart',
    sub:'Writes the rabies vaccine and RIG prescriptions as the protocol\'s examples do, with each dose date counted from Day 0.',
    fields:v => [
      {k:'reg', type:'seg', label:'Vaccine course', re:true, opts:[['full', 'Full course'], ['short', 'Shorter course']]},
      {k:'rt', type:'seg', label:'Route', re:true, opts:v.reg === 'short' ? [['im1', 'IM, 1 site'], ['id1', 'ID, 1 site'], ['id4', 'ID, 4 sites']] : [['im', 'IM, 1 site'], ['id', 'ID, 2 sites']]},
      {k:'slip', type:'seg', label:'Prescription', opts:[['opd', 'Outpatient: Malaysian'], ['fgn', 'Outpatient: foreigner'], ['ward', 'Ward chart']]},
      {k:'d0', type:'date', label:'Day 0: the date of the first dose'},
      {k:'rig', type:'seg', label:'RIG (Category 3, eligible, urgent in the ED)', opts:[['no', 'No RIG'], ['yes', 'RIG in the ED']]}
    ],
    note:'Full course: no history of post-exposure prophylaxis. Shorter course: post-exposure prophylaxis 3 months ago or more. Less than 3 months ago, or a Category 1 wound, or no rabies risk: no vaccine and no RIG. The MO writes the prescription and the EP countersigns it; the SN or PPP indents from the A&E pharmacy.',
    run(v){
      const short = v.reg === 'short';
      const rt = short ? (['im1', 'id1', 'id4'].includes(v.rt) ? v.rt : 'im1') : (v.rt === 'id' ? 'id' : 'im');
      const im = rt === 'im' || rt === 'im1', sites = rt === 'id' ? 2 : rt === 'id4' ? 4 : 1;
      const days = short ? (rt === 'id4' ? [0] : [0, 3]) : (im ? [0, 3, 7, 14] : [0, 3, 7]);
      const pad = n => String(n).padStart(2, '0');
      const d0 = /^\d{4}-\d{2}-\d{2}$/.test(v.d0) ? v.d0.split('-').map(Number) : null;
      const on = n => { if (!d0) return 'date'; const d = new Date(Date.UTC(d0[0], d0[1] - 1, d0[2] + n)); return pad(d.getUTCDate()) + '/' + pad(d.getUTCMonth() + 1) + '/' + d.getUTCFullYear(); };
      const chart = short ? (rt === 'id4' ? 'ID: 4 sites; D0' : 'IM/ID: 1 site; D0,3') : (im ? 'IM: 1 site; D0,3,7,14-28' : 'ID: 2 sites; D0,3,7');
      const drug = im ? 'IM Rabies Vaccine 0.5 ml stat' : `ID Rabies Vaccine 0.1 ml x ${sites} site${sites > 1 ? 's' : ''} stat`;
      const outs = [
        ['Schedule', days.map(n => 'D' + n).join(', '), 'good', chart + (!short && im ? ' · the last dose from D14 to D28' : ''), {rx:true, days, rng:!short && im ? [14, 28] : null, m:sites > 1 ? '×' + sites : ''}],
        ['Dose at each site', im ? '0.5 ml' : '0.1 ml', 'good', im ? 'Intramuscular (IM): 0.5 ml' : `Intradermal (ID): 0.1 ml, at ${sites} site${sites > 1 ? 's' : ''}`],
        ['Site', im ? 'Deltoid' : sites === 4 ? 'See below' : 'Deltoid', 'good', im ? 'Deltoid (IM/ID)' : 'Deltoid (IM/ID); Suprascapular (ID); Anterolateral thigh (ID)']];
      let rows;
      if (v.slip === 'ward') rows = [['Kaedah Administrasi', im ? 'IM (Deltoid)' : 'Intradermal'], ['Nama Ubat', 'Rabies Vaccine (Day 0)'], ['Dos', im ? '0.5ml' : `0.1 ml x ${sites} site${sites > 1 ? 's' : ''}${sites === 2 ? ' (each deltoid)' : ''}`], ['Frekuensi', 'Stat'], ['Signed', 'MO: sign and stamp; EP: countersign and stamp (T/tangan timbal & Cop Pakar)']];
      else if (v.slip === 'fgn') rows = [['Site', '(Deltoid)'], ['D0', (im ? 'IM Rabies Vaccine 0.5 ml stat' : `Intradermal Rabies Vaccine 0.1 ml x ${sites} site${sites > 1 ? 's' : ''} stat`) + ` D0 (${on(0)})`], ['Signed', 'EP and MO: sign and stamp'], ['Later doses', 'One dose per visit: at each visit, write that day\'s dose the same way']];
      else rows = [['Site', im ? '(Deltoid)' : '(To inject at Deltoid) (Intradermal)'], ...days.map(n => ['D' + n, `${drug} D${n} (${on(n)})`]), ['Signed', 'EP and MO: sign and stamp']];
      const lists = [{h:v.slip === 'ward' ? 'Write on the ward chart (Day 0)' : v.slip === 'fgn' ? 'Write on the outpatient slip (foreigner: to prescribe ONE dose per visit)' : 'Write on the outpatient slip (Malaysian)', rows}];
      if (v.rig === 'yes') lists.push({h:'RIG', rows:[['Before', 'Refer ID trainee/consultant (accept verbal consent)'], v.slip === 'ward' ? ['Ward chart', 'Rabies Immunoglobulin (to infiltrate around the wounds) · Dos: 1 vial (1000 iu) · Frekuensi: Stat · Case d/w ID Dr (name)'] : ['Outpatient slip', 'Rabies Immunoglobulin 1 vial (1000 units) stat'], ['Signed', v.slip === 'ward' ? 'MO, countersigned by the EP' : 'ID Trainee/Consultant (accept verbal consent) and MO'], ['Max. dose', '1 vial/patient'], ['Give', 'Infiltrate around the wounds. RIG MUST NOT be administered in the same syringe as the rabies vaccine. Equine RIG (Rabix IG / Equirab) can be further diluted with normal saline (2 – 3x Volume)']]});
      const gaps = [];
      if (short) gaps.push('The protocol\'s prescription examples show the full course; the shorter course is written here in the same format.');
      if (rt === 'id4') gaps.push('It lists the ID sites as deltoid, suprascapular and anterolateral thigh, and does not say which four to use.');
      if (!d0) gaps.push('Enter Day 0 to put the dates in.');
      return {outs, lists, gap:gaps.join(' ') || null,
        verdict:{cls:'refer', h:'Then: EP to countersign, give the first dose, refer to the ABC', p:'SN/PPP to indent from A&E Pharmacy. Issue the vaccine card, fill in the animal bite notification form, and refer to the Animal Bite Clinic (ext 1017/1178) with a copy of it.', href:'#animal-bites--abc', link:'The ABC referral'}};
    }},
  /* Dengue CPG 4th edition: Appendix 7's systematic triage on one screen. The checklists and outcome cards are read from
     P['dengue-cpg'] (its triage steps life, vit, ws, cm and the outcomes red12, red2, yellow, green, pc); the vital signs use the
     triage vital signs calculator's own checks; the course of illness, the haematocrit and the platelets come from its notes
     (see CALC_FACTS). Nothing is saved, and there is no name or ID box. */
  curb:{t:'CURB-65', g:'scores', src:'Ebook p27', path:'#pneumonia--curb', kw:'pneumonia cap severity score',
    sub:'Severity score for community-acquired pneumonia, read the way the ebook reads it.',
    fields:[{k:'c', type:'check', label:'Tick each one present', pts:true, items:() => P.pneumonia.nodes.curb.items}],
    note:'From the ebook\'s community-acquired pneumonia pathway: score 0–1, under 3% risk of death, then the Pneumonia Severity Index (PSI) class; 2 or more, over 10% risk of death: admit.',
    run(v){
      if (!v.c_set) return null;
      const s = v.c_sum;
      return {outs:[['CURB-65 score', s + ' of 5', s >= 2 ? 'bad' : 'good', s >= 2 ? 'Over 10% risk of death' : 'Under 3% risk of death', {min:-0.5, max:5.5, v:s, bands:[[-0.5, 1.5, 'good'], [1.5, 5.5, 'bad']]}]],
        verdict:s >= 2 ? {cls:'stop', h:'Score 2 or more: admit', href:'#pneumonia--admit', link:'Open the pathway step'}
          : {cls:'next', h:'Score 0–1: next, the Pneumonia Severity Index (PSI) class', href:'#pneumonia--psi', link:'Continue in the pathway'}};
    }},
  wells:{t:'Wells score (DVT)', g:'scores', src:'Ebook p33–35', path:'#dvt--wells', kw:'dvt deep vein thrombosis d-dimer compression ultrasound',
    sub:'Pre-test risk of a DVT, with the next step from the ebook\'s pathway.',
    fields:[{k:'w', type:'check', label:'Tick each one present', pts:true, items:() => P.dvt.nodes.wells.items}],
    note:'From the ebook\'s DVT pathway: low risk (−2 to 0), D-dimer; moderate risk (1 to 2), D-dimer and interim anticoagulant while waiting; high risk (3 or more), 2-point compression test and interim anticoagulant while waiting.',
    run(v){
      if (!v.w_set) return null;
      const s = v.w_sum, band = s >= 3 ? 'High risk' : s >= 1 ? 'Moderate risk' : 'Low risk';
      return {outs:[['Wells score', String(s), s >= 3 ? 'bad' : s >= 1 ? 'warn' : 'good', band, {min:-2.5, max:9.5, v:s, bands:[[-2.5, 0.5, 'good'], [0.5, 2.5, 'warn'], [2.5, 9.5, 'bad']]}]],
        verdict:s >= 3 ? {cls:'next', h:'High risk: 2-point compression test', p:'Start interim anticoagulant while waiting.', href:'#dvt--cp', link:'Continue in the pathway'}
          : s >= 1 ? {cls:'next', h:'Moderate risk: D-dimer', p:'Start interim anticoagulant while waiting for the D-dimer.', href:'#dvt--ddm', link:'Continue in the pathway'}
          : {cls:'next', h:'Low risk: D-dimer', href:'#dvt--dd', link:'Continue in the pathway'},
        links:[['#calc-anticoag', 'Anticoagulant doses']]};
    }},
  pain:{t:'Pain scales', g:'calm', src:'Ebook p45–50', path:'#pain', kw:'flacc painad cpot dementia non-communicative ventilated pain score ladder',
    sub:'FLACC, PAINAD or CPOT for a patient who cannot rate their own pain, read on the MOH analgesic ladder.',
    fields:v => [{k:'sc', type:'seg', label:'Scale', re:true, opts:[['flacc','FLACC (non-communicative)'], ['painad','PAINAD (geriatric, dementia)'], ['cpot','CPOT (critical care)']]},
      ...(v.sc === 'cpot' ? [{k:'tube', type:'seg', label:'The patient is', re:true, opts:[['in','Intubated'], ['ex','Extubated']]}] : []),
      {k:painKey(v), type:'rate', label:'Score each row', rows:painRows(v)}],
    note:'From the ebook\'s pain pathway: a patient who cannot self-report is assessed with PAINAD (geriatric, dementia), FLACC (non-communicative) or CPOT (ventilated), then "pain score over 6?" decides the next step, with the MOH analgesic ladder: mild 1–3, moderate 4–6, severe 7–10. CPOT scores the ventilator row or the vocalisation row, not both.',
    run(v){
      const rows = painRows(v), a = v[painKey(v)] || [], n = a.filter(x => x != null).length;
      if (!n) return null;
      const s = a.reduce((t, x) => t + (x || 0), 0), max = rows.length * 2, name = PAIN_ROWS[v.sc || 'flacc'];
      const lad = tableOf('pain', 'ladder').rows, step = s >= 7 ? lad[2] : s >= 4 ? lad[1] : s >= 1 ? lad[0] : null;
      const out = [[name + ' score', `${s} of ${max}`, s > 6 ? 'bad' : s >= 4 ? 'warn' : 'good', n < rows.length ? `${rows.length - n} more row${rows.length - n > 1 ? 's' : ''} to score` : step ? step[0] + ' on the MOH ladder' : 'Score 0', {min:-0.5, max:max + 0.5, v:s, bands:[[-0.5, 3.5, 'good'], [3.5, 6.5, 'warn'], [6.5, max + 0.5, 'bad']]}]];
      if (n < rows.length) return out;
      if (step) out.push(['MOH analgesic ladder', step[0].split(' ')[0], s > 6 ? 'bad' : s >= 4 ? 'warn' : 'good', step[1]]);
      return {outs:out, verdict:s > 6 ? {cls:'refer', h:'Over 6: consult EP for the morphine pain protocol', href:'#pain--mp', link:'Open the pathway step'}
        : {cls:'next', h:'6 or under: non-pharmacological treatment plus analgesia', p:'Use the analgesic ladder and reassess in 30 minutes to 1 hour.', href:'#pain--np', link:'Open the pathway step'},
        links:[['#calc-analgesia', 'Analgesia by weight']]};
    }},
  calm:{t:'Agitation: BARS and RASS', g:'calm', src:'Ebook p5–9', path:'#behavioural-disturbance', kw:'bars rass agitation violent behaviour sedation midazolam ketamine restraint',
    sub:'Pick the level to see the ebook\'s next step, with weight-based doses from its medication table at BARS 7.',
    fields:v => [{k:'sc', type:'seg', label:'Scale', re:true, opts:[['bars','BARS'], ['rass','RASS']]},
      v.sc === 'rass' ? {k:'rass', type:'pick', label:'RASS level', opts:() => tableOf('behavioural-disturbance', 'RASS').rows.map(r => [r[0], r[1], r[2]])}
        : {k:'bars', type:'pick', label:'BARS level', re:true, opts:() => tableOf('behavioural-disturbance', 'BARS').rows.map(r => [r[0], r[1]])},
      ...(v.sc !== 'rass' && v.bars === '7' ? [['wt','Weight','kg']] : [])],
    note:'From the ebook\'s acute behavioural disturbance pathway: BARS 1 to 3 and 5 to 6, look for an organic cause; BARS 4 (non-violent), look for an organic cause; BARS 7, choice of medication, control and restraint, using the medication table. The ebook lists the RASS levels without an action for each.',
    run(v){
      if (v.sc === 'rass'){
        if (!v.rass) return null;
        const r = tableOf('behavioural-disturbance', 'RASS').rows.find(x => x[0] === v.rass);
        return {outs:[['RASS ' + r[0], r[1], 'good', r[2]]], gap:'The ebook lists the RASS levels without an action for each.'};
      }
      if (!v.bars) return null;
      const b = +v.bars, row = tableOf('behavioural-disturbance', 'BARS').rows[b - 1], out = [['BARS ' + b, row[1], b === 7 ? 'bad' : b === 4 ? 'good' : 'warn', '']];
      if (b !== 7) return {outs:out, verdict:b === 4 ? {cls:'next', h:'Non-violent (BARS 4): look for an organic cause', href:'#behavioural-disturbance--nvorg', link:'Open the pathway step'}
        : {cls:'next', h:'Look for an organic cause', href:'#behavioural-disturbance--org', link:'Open the pathway step'}};
      const w = v.wt, verdict = {cls:'stop', h:'BARS 7: choice of medication, control and restraint', p:'Monitor for restraint risks: suffocation (prone position), aspiration, injury, hyperthermia, lactic acidosis, raised CK, escape.', href:'#behavioural-disturbance--meds', link:'Open the pathway step'};
      if (!w) return {outs:[...out, ['Weight-based doses', 'Enter the weight', 'warn', 'The weight-based lines from the ebook\'s medication table appear here']], verdict};
      const bad = badWt(w); if (bad) return {outs:[...out, ...bad], verdict};
      out.push(['Midazolam IM (adult)', range(w, 0.07, 0.1), 'warn', '0.07–0.1 mg/kg (usual 5 mg). Respiratory depression, cardiac arrest, paradoxical agitation']);
      out.push(['Midazolam IM (paediatric)', range(w, 0.1, 0.2), 'warn', `0.1–0.2 mg/kg (max 0.5 mg/kg, ${fx(0.5 * w)} mg)`]);
      out.push(['Ketamine IM', fx(4 * w) + ' mg', 'warn', '4 mg/kg. Hypertension, tachycardia, hypersalivation, laryngospasm, emergence phenomenon']);
      out.push(['Ketamine IV over 60 s', range(w, 0.5, 2), 'warn', '0.5–2 mg/kg']);
      return {outs:out, verdict, gap:'The ebook\'s medication step does not name a first-line drug. These are the weight-based lines from its medication table; the full table has the other drugs and the reversal agents.', links:[['#behavioural-disturbance', 'Medication table']]};
    }},
  head:{t:'Mild head injury: CT and discharge', g:'head', src:'Ebook p25–26', path:'#mild-tbi', kw:'tbi head injury ct brain pta a-wptas concussion discharge',
    sub:'The immediate CT criteria, then the safe discharge criteria, from the ebook\'s mild TBI pathway.',
    fields:[{k:'ct', type:'check', label:'Any criteria for immediate CT brain?', stop:true, items:() => P['mild-tbi'].nodes.ct.items},
      {k:'dc', type:'check', label:'Safe discharge criteria, after PTA charting for at least 6 hours since the injury', items:() => P['mild-tbi'].nodes.dc.items}],
    note:'From the ebook\'s mild TBI pathway. With no immediate CT criteria: observe and assess PTA (A-WPTAS); CT brain if more than 4 hours since the injury and under 18 points on PTA. Discharge only when every safe discharge criterion is fulfilled; if not, admit for extended observation.',
    run(v){
      if (!v.ct_set && !v.dc_set) return null;
      const out = [], dcT = P['mild-tbi'].nodes.dc.items.length;
      if (v.ct_set) out.push(['Immediate CT brain', v.ct_n ? 'Indicated' : 'No criteria', v.ct_n ? 'bad' : 'good', v.ct_n ? `${v.ct_n} ${v.ct_n > 1 ? 'criteria' : 'criterion'} present` : 'Observe and assess PTA (A-WPTAS): CT if more than 4 hours since the injury and under 18 points on PTA']);
      if (v.dc_set) out.push(['Safe discharge criteria', `${v.dc_n} of ${dcT}`, v.dc_n === dcT ? 'good' : 'warn', v.dc_n === dcT ? 'All fulfilled' : 'If they cannot all be met: admit for extended observation']);
      const verdict = v.dc_n === dcT ? {cls:'ok', h:'All fulfilled: discharge with head injury advice', href:'#mild-tbi--home', link:'Open the discharge step'}
        : v.ct_n ? {cls:'stop', h:'Perform CT brain', href:'#mild-tbi--ct1', link:'Open the pathway step'}
        : v.dc_set ? {cls:'next', h:'Not every criterion is fulfilled yet', p:'If they cannot all be met, admit for extended observation.', href:'#mild-tbi--extobs', link:'Open the pathway step'}
        : {cls:'next', h:'No immediate CT criteria: observe and assess PTA', href:'#mild-tbi--obs', link:'Open the pathway step'};
      return {outs:out, verdict, links:[[MDC + '64/glasgow-coma-scale-score-gcs', 'GCS on MDCalc (outside site)', true]]};
    }},
  /* Head injury in adults, CPG 2015: the Glasgow Coma Scale, read from Appendix 3 in P['head-injury-cpg'] (see CALC_FACTS) */
  gcs:{t:'Glasgow Coma Scale', g:'head', src:'Head injury CPG 2015, Appendix 3', path:'#head-injury-cpg--sev', kw:'gcs glasgow coma scale score eye verbal motor e4v5m6 consciousness head injury severity mild moderate severe',
    sub:'The best eye, verbal and motor responses, the total, and the head injury severity it gives.',
    fields:[{k:'ge', type:'pick', label:'Eye Opening Response', opts:gcsOpts(0)}, {k:'gv', type:'pick', label:'Verbal Response', opts:gcsOpts(1)}, {k:'gm', type:'pick', label:'Motor Response', opts:gcsOpts(2)}],
    note:'Head injury CPG 2015, Appendix 3 (p52): the scale measures the best motor, verbal and eye opening response, and the score is the cumulative sum of the scale in each component. Eye: Spontaneous 4; To voice/sound 3; To pressure/pain 2; None 1. Verbal: Orientated 5; Confused 4; Words 3; Sounds 2; None 1. Motor: Obeys commands 6; Localising 5; Flexion withdrawal 4; Abnormal flexion 3; Extension 2; None 1. Severity (chapter 3, p5): Mild head injury (MHI): GCS 13 - 15; Moderate head injury: GCS 9 - 12; Severe head injury: GCS 3 - 8. GCS score can be influenced by alcohol intoxication, sedative medications, hypoxia and hypotension (p6).',
    run(v){
      const picked = [['E', v.ge], ['V', v.gv], ['M', v.gm]];
      if (picked.every(([, x]) => !x)) return null;
      if (picked.some(([, x]) => !x)) return [['Still to pick', picked.filter(([, x]) => !x).map(([l]) => ({E:'eye', V:'verbal', M:'motor'})[l]).join(', '), 'warn', 'The score is the sum of all three components']];
      const t = +v.ge + +v.gv + +v.gm, code = 'E' + v.ge + 'V' + v.gv + 'M' + v.gm;
      const sev = t >= 13 ? ['Mild head injury (MHI)', 'good'] : t >= 9 ? ['Moderate head injury', 'warn'] : ['Severe head injury', 'bad'];
      const out = [['Glasgow Coma Score', code + ' = ' + t, sev[1], sev[0] + ': GCS ' + (t >= 13 ? '13 - 15' : t >= 9 ? '9 - 12' : '3 - 8'), {min:3, max:15, v:t, bands:[[3, 8.5, 'bad'], [8.5, 12.5, 'warn'], [12.5, 15, 'good']]}]];
      const verdict = t >= 13 ? {cls:'next', h:'Mild head injury: next, the head CT decision', p:'Immediate head CT (Algorithm 3) for GCS <13 on initial management or GCS <15 at 2 hours after injury, among its other risk factors.', href:'#head-injury-cpg--imm', link:'Head CT: Algorithm 3'}
        : {cls:'stop', h:sev[0] + ': resuscitate and hand on', p:(t <= 8 ? 'In patients with head injury with GCS of ≤8, intubation is recommended for airway protection (p16). ' : '') + 'GCS <13 on initial management: immediate head CT (Algorithm 3); red zone (Algorithm 2).', href:'#head-injury-cpg--modsev', link:'Open the CPG step'};
      return {outs:out, verdict, gap:'Appendix 3 gives no score for a response that cannot be tested, for example when intubated or with swollen eyes.', links:[['#calc-head', 'Mild head injury: the ebook\'s CT and discharge check']]};
    }},
  obsess:{t:'Chest pain: Obsess protocol check', g:'cardio', src:'Ebook p12–14', path:'#acs--oc', kw:'acs chest pain obsess observation protocol troponin timi aspirin',
    sub:'Whether a patient with chest pain fits the department\'s Obsess observation protocol.',
    fields:[{k:'o', type:'check', label:'Tick each criterion that is met', items:() => P.acs.nodes.oc.items}],
    note:'From the ebook\'s ACS pathway: every criterion must be met for the Obsess protocol (aspirin 300 mg, serial ECG, hourly vital signs, pain score). The ebook does not show the branch where they are not all met, and does not list the TIMI items.',
    run(v){
      if (!v.o_set) return null;
      const all = P.acs.nodes.oc.items.length, n = v.o_n;
      return {outs:[['Obsess criteria met', `${n} of ${all}`, n === all ? 'good' : 'warn', n === all ? 'All met' : 'If they cannot all be met: not suitable for the Obsess protocol']],
        verdict:n === all ? {cls:'next', h:'All met: start the Obsess protocol', p:P.acs.nodes.obs.items.join('; ') + '.', href:'#acs--obs', link:'Open the protocol step'}
          : {cls:'next', h:'Not suitable for the Obsess protocol yet', p:P.acs.nodes.noobs.items.join(' '), href:'#acs--noobs', link:'Open the pathway step'},
        links:[['#acs-cpg--timi', 'TIMI score (ACS CPG 2026, Appendix IV)'], [MDC + '111/timi-risk-score-ua-nstemi', 'TIMI score on MDCalc (outside site)', true]]};
    }},
  syncope:{t:'Syncope: dangerous causes and high-risk factors', g:'cardio', src:'Ebook p57–58', path:'#syncope--risk', kw:'syncope collapse faint blackout high risk admit ecg troponin',
    sub:'Any dangerous cause or high-risk factor means admission; none means observation and discharge.',
    fields:[{k:'r', type:'check', label:'Tick each one present', stop:true, items:() => P.syncope.nodes.risk.items}],
    note:'From the ebook\'s syncope pathway: any dangerous cause or high-risk factor, admit for evaluation and cardiac monitoring; none, observation and discharge, with follow-up at EMWATCH, EMACC or PC clinic.',
    run(v){
      if (!v.r_set) return null;
      const n = v.r_n;
      return {outs:[['Dangerous causes or high-risk factors', String(n), n ? 'bad' : 'good', n ? 'Present' : 'None ticked']],
        verdict:n ? {cls:'stop', h:'Admit for evaluation and cardiac monitoring', href:'#syncope--adm', link:'Open the pathway step'}
          : {cls:'ok', h:'None present: observation and discharge', p:P.syncope.nodes.home.items.slice(-1)[0] + '.', href:'#syncope--home', link:'Open the discharge step'},
        links:[[MDC + '115/wells-criteria-pulmonary-embolism', 'Wells PE on MDCalc (outside site)', true], [MDC + '48/corrected-qt-interval-qtc', 'QTc on MDCalc (outside site)', true]]};
    }},
  svt:{t:'SVT: instability and drugs', g:'cardio', src:'Ebook p55–56', path:'#svt', kw:'svt supraventricular tachycardia adenosine verapamil amiodarone esmolol cardioversion valsalva',
    sub:'Signs of instability first, then the ebook\'s drugs to terminate SVT, with esmolol worked out by weight.',
    fields:[{k:'u', type:'check', label:'Signs of instability? Tick each one present', stop:true, items:() => P.svt.nodes.unst.items}, ['wt','Weight','kg']],
    note:'From the ebook\'s SVT pathway: any sign of instability, consult EP for synchronised cardioversion, then admit; none, vagal manoeuvres first, then the drugs in its table.',
    run(v){
      const outs = [], w = v.wt;
      let verdict = null;
      if (v.u_set) verdict = v.u_n ? {cls:'stop', h:'Unstable: consult EP for synchronised cardioversion, then admit', p:P.svt.nodes.cv.items.slice(0, 2).join('; ') + '.', href:'#svt--cv', link:'Open the pathway step'}
        : {cls:'next', h:'Stable: vagal manoeuvres first', p:P.svt.nodes.vagal.items.join(' ') + '.', href:'#svt--vagal', link:'Open the pathway step'};
      if (!w) outs.push(['Esmolol by weight', 'Enter the weight', 'warn', 'The esmolol rates are given per kg']);
      else {
        const bad = badWt(w);
        if (bad) outs.push(...bad);
        else {
          outs.push(['Esmolol loading, over 1 min', fx(0.5 * w) + ' mg/min', 'warn', '0.5 mg/kg/min']);
          outs.push(['Then over 4 min', fx(0.05 * w) + ' mg/min', 'warn', '0.05 mg/kg/min. Repeat the loading if the HR is not controlled in 5 min']);
          outs.push(['Esmolol maintenance', fx(0.1 * w) + ' mg/min', 'warn', `0.1 mg/kg/min; after a 3rd bolus if needed, ${fx(0.15 * w)} mg/min (0.15 mg/kg/min)`]);
          outs.push(['Esmolol maximum', fx(0.3 * w) + ' mg/min', 'bad', '0.3 mg/kg/min']);
        }
      }
      return {outs, verdict, lists:[{h:'Drugs used to terminate SVT, as the ebook gives them', rows:tableOf('svt', 'terminate SVT').rows.map(r => [r[0], r[1] + (r[2] ? '. Precautions: ' + r[2] : '')])}]};
    }},
  htn:{t:'Hypertensive urgency', g:'cardio', src:'Ebook p38–40', path:'#hypertensive-urgency', kw:'hypertension blood pressure bp urgency emergency antihypertensive captopril perindopril amlodipine nifedipine',
    sub:'Target organ damage first, then any of the ebook\'s antihypertensives in the ED, with its contraindications.',
    fields:[{k:'t', type:'check', label:'New or progressive target organ damage? Tick each one present', stop:true, items:() => P['hypertensive-urgency'].nodes.tod.items},
      ['drug', 'Antihypertensive in the ED (* preferred in the ebook)', '', [['', 'Choose a drug'], ...tableOf('hypertensive-urgency', 'antihypertensives').rows.map(r => [r[0], r[0] + ' (' + r[1] + ')'])]]],
    note:'From the ebook\'s hypertensive urgency pathway: any new or progressive target organ damage, manage as a hypertensive emergency; none, rest and recheck. Drugs from its Table 1.0, contraindications from its Table 1.1.',
    run(v){
      const outs = [];
      let verdict = null;
      if (v.t_set) verdict = v.t_n ? {cls:'refer', h:'Hypertensive emergency: manage as a hypertensive emergency', href:'#hypertensive-urgency--emerg', link:'Open the pathway step'}
        : {cls:'next', h:'Hypertensive urgency: rest and recheck', p:P['hypertensive-urgency'].nodes.rest.items.join('; ') + '.', href:'#hypertensive-urgency--rest', link:'Open the pathway step'};
      const row = v.drug && tableOf('hypertensive-urgency', 'antihypertensives').rows.find(r => r[0] === v.drug);
      if (row){
        const cls = {'ACEi':'ACE inhibitors', 'ARB':'ARBs', 'CCB':'Calcium channel blockers', 'Beta-blocker':'Beta-blockers', 'Thiazide diuretic':'Thiazide diuretics'}[row[1]];
        const ci = cls && tableOf('hypertensive-urgency', 'contraindications').rows.find(r => r[0] === cls);
        outs.push(['Starting dose', row[2], 'good', row[0].includes('*') ? row[1] + ', preferred in the ebook' : row[1]]);
        outs.push(['Maximum dose', row[4], 'warn', '']);
        outs.push(['Onset, then peak', `${row[3]} h, peak ${row[5]} h`, '', '']);
        if (ci) outs.push([`Contraindications: ${ci[0]}`, ci[1] ? 'Check these' : 'Possible only', 'bad', (ci[1] ? 'Compelling: ' + ci[1] + '. ' : '') + (ci[2] ? 'Possible: ' + ci[2] + '.' : '')]);
      }
      return outs.length || verdict ? {outs, verdict} : null;
    }},
  paraod:{t:'Paracetamol overdose: time since ingestion', g:'tox', src:'Ebook p51–52', path:'#paracetamol-overdose', kw:'paracetamol acetaminophen panadol overdose poisoning nac n-acetylcysteine charcoal nomogram',
    sub:'The ebook\'s route by the time since ingestion, from the hours or from the clock time it was taken.',
    fields:[['h','Hours since ingestion','h'], {k:'at', type:'time', label:'Or the time it was taken'}],
    note:'From the ebook\'s paracetamol overdose pathway: under 2 hours, activated charcoal; 2 to 8 hours, serum paracetamol and LFT at 4–8 hours (the nomogram if the results are back within 8 hours of ingestion, otherwise N-acetylcysteine); 8 to 24 hours and over 24 hours, start N-acetylcysteine and measure the paracetamol level and LFT.',
    run(v){
      let h = v.h > 0 ? v.h : null, from = '';
      if (h == null && v.at){
        const [hh, mm] = v.at.split(':').map(Number), now = new Date(), d = now.getHours() * 60 + now.getMinutes() - (hh * 60 + mm);
        h = (d < 0 ? d + 1440 : d) / 60; from = `Taken at ${v.at}: about ${fx(h)} hours ago, if within the last 24 hours`;
      }
      if (h == null) return null;
      const band = h < 2 ? 'u2' : h < 8 ? 'u8' : h === 8 ? 'e8' : h <= 24 ? 'u24' : 'o24';
      const V = {
        u2:{h:'Under 2 hours: activated charcoal', href:'#paracetamol-overdose--ac'},
        u8:{h:'2 to 8 hours: serum paracetamol and LFT at 4–8 hours after ingestion', p:'If the results will be back within 8 hours of ingestion, plot on the nomogram: above the treatment line, full-dose N-acetylcysteine and admit. If not, start N-acetylcysteine.', href:'#paracetamol-overdose--lvl'},
        e8:{h:'At exactly 8 hours the ebook\'s bands meet', p:'2 to 8 hours: measure the paracetamol level and LFT, and use the nomogram only if the results are back within 8 hours. 8 to 24 hours: start N-acetylcysteine.', href:'#paracetamol-overdose--time'},
        u24:{h:'8 to 24 hours: commence N-acetylcysteine infusion', p:'Measure serum paracetamol and LFT. Paracetamol above the nomogram line, or ALT 50 U/L or more: full-dose N-acetylcysteine and admit.', href:'#paracetamol-overdose--nac'},
        o24:{h:'Over 24 hours: commence N-acetylcysteine infusion', p:'Measure serum paracetamol and LFT. Paracetamol over 10 mg/L (66 µmol/L), or ALT 50 U/L or more: full-dose N-acetylcysteine and admit.', href:'#paracetamol-overdose--nac24'}
      };
      return {outs:[['Time since ingestion', fx(h) + ' h', '', from || {u2:'Under 2 hours', u8:'2 to 8 hours', e8:'Exactly 8 hours', u24:'8 to 24 hours', o24:'Over 24 hours'}[band]]],
        verdict:{cls:'next', link:'Open the pathway step', ...V[band]},
        gap:'The ebook does not give the activated charcoal dose, the N-acetylcysteine regimen or which nomogram treatment line to use.' + (band === 'e8' ? ' It does not say which band exactly 8 hours belongs to.' : '')};
    }},
  anaph:{t:'Anaphylaxis: drugs and fluids', g:'tox', src:'Ebook p15–16', path:'#anaphylaxis--first', kw:'anaphylaxis allergy adrenaline epinephrine glucagon hydrocortisone chlorpheniramine salbutamol fluids',
    sub:'The ebook\'s drugs in anaphylaxis at a glance, with the fluid bolus worked out by weight.',
    fields:[['wt','Weight','kg']],
    note:'From the ebook\'s anaphylaxis pathway: remove the allergen, give oxygen and IM adrenaline, and monitor the blood pressure, pulse oximetry and ECG; then the drugs in its table.',
    run(v){
      const w = v.wt, outs = [];
      if (!w) outs.push(['IV fluids: NS bolus', 'Enter the weight', 'warn', '10–20 ml/kg']);
      else { const bad = badWt(w); if (bad) outs.push(...bad); else outs.push(['IV fluids: NS bolus', `${Math.round(10 * w)}–${Math.round(20 * w)} ml`, 'good', '10–20 ml/kg']); }
      return {outs, lists:[{h:'Drugs in anaphylaxis, as the ebook gives them', rows:tableOf('anaphylaxis', 'Drugs').rows.map(r => [r[0], r[1]])}],
        gap:'The ebook\'s table gives one dose for each drug and no child doses.'};
    }},
  /* Snakebite (MOH Guideline: Management of Snakebite, 2017; spec in sources/snakebite/calc-spec.md). The 20-minute whole blood
     clotting test (4.5.9, p39; 7.5.3 and 7.6.1, p75): when to tip the tube, how to read it, when to recheck after antivenom. */
  snake20:{t:'Snakebite: 20-minute whole blood clotting test', g:'tox', src:'MOH snakebite guideline, p39 and p75', path:'#snakebite-moh--labs', kw:'snake bite snakebite ular 20wbct wbct clotting test whole blood coagulopathy pit viper bleeding antivenom',
    sub:'The bedside clotting test: when to tip the tube, how to read it, and when to recheck after antivenom.',
    fields:[{k:'at', type:'time', label:'Blood went into the tube at'}, {k:'res', type:'seg', label:'After 20 minutes, the tube tipped once', nodef:true, opts:[['clot', 'Clotted'], ['no', 'Not clotted'], ['part', 'Partly clotted']]}, {k:'end', type:'time', label:'After antivenom: the infusion ended at'}],
    note:'Put 2 ml of freshly drawn venous blood into a small, dry glass tube, new or heat-cleaned. Leave it undisturbed at room temperature for 20 minutes, then tip it once (p39). A quick bedside test when the bite is unidentified or a pit viper is suspected, and when the laboratory cannot do a clotting profile. Nothing you enter is saved.',
    run(v){
      const add = (t, m) => { const [h, mi] = t.split(':').map(Number), d = (h * 60 + mi + m) % 1440; return String(Math.floor(d / 60)).padStart(2, '0') + ':' + String(d % 60).padStart(2, '0'); };
      const outs = [], gaps = [];
      if (v.at) outs.push(['Tip the tube once at', add(v.at, 20), 'good', 'Blood in at ' + v.at + ': 20 minutes undisturbed at room temperature (p39)']);
      if (v.res === 'no') outs.push(['Result', 'Not clotted', 'bad', 'Still liquid: a coagulopathy is possible. Repeat as needed (p39)']);
      else if (v.res === 'clot') { outs.push(['Result', 'Clotted', 'good', 'Repeat as needed (p39)']); gaps.push('Not in the guideline: what a clotted result rules out.'); }
      else if (v.res === 'part') { outs.push(['Result', 'Partly clotted', 'warn', 'Not in the guideline: whether a partial clot counts. Do not choose: ask the EP']); gaps.push('Not in the guideline: whether a partial clot counts, a schedule for repeat tests, or what to use without a glass tube.'); }
      if (v.end) outs.push(['Recheck the clotting at', add(v.end, 360), 'good', 'Still not clotting, or not clotting again, 6 hours after the infusion ended: repeat the starting dose (7.6.1, p75)']);
      if (!outs.length) return null;
      return {outs, lists:[{h:'Read it with the patient', rows:[['On its own', 'Do not decide antivenom on the 20WBCT alone: read it with the patient, and with the laboratory clotting profile when there is one (p39)'], ['And yet', 'A coagulopathy on the 20WBCT is also listed as an antivenom indication (7.2.1.1, p66): the guideline says both'], ['After antivenom', 'After an adequate dose, clotting usually returns in 3-9 hours (p75)']]}],
        verdict:{cls:'next', h:v.res === 'no' ? 'A possible coagulopathy: check the antivenom indications with the EP' : 'Then: the rest of the assessment', p:'The indications, the product and the dose by snake are in the guideline\'s steps and the antivenom calculator.', href:'#snakebite-moh--env', link:'Antivenom indications'},
        gap:gaps.join(' ') || null};
    }},
  /* Antivenom by snake: Tables 15 and 16 (p70 to 74), how to give it (7.3.1, p69), when to repeat (7.6, p75), reactions (Table 17, p76 to 77) */
  snakeav:{t:'Snakebite: antivenom by snake', g:'tox', src:'MOH snakebite guideline, Tables 15 to 17', path:'#snakebite-moh--which', kw:'snake bite snakebite ular antivenom antivenin cobra king cobra krait sea snake pit viper malayan pit viper green pit viper coral keelback qsmi npav hpav vials',
    sub:'The product and starting dose by snake and region, how to give it, when to repeat it, and the reaction doses, child doses by weight.',
    fields:v => {
      const bor = v.reg === 'bor', F = [
        {k:'reg', type:'seg', label:'Where the bite happened', re:true, opts:[['pen', 'Peninsular Malaysia'], ['bor', 'Sabah and Sarawak']]},
        {k:'grp', type:'seg', label:'The snake', nodef:true, re:true, opts:[['cobra', 'Cobra'], ['krait', 'Krait'], ['pv', 'Pit viper'], ['sea', 'Sea snake'], ['coral', 'Coral snake'], ['keel', 'Red-necked keelback'], ['unk', 'Not identified']]}];
      if (v.grp === 'cobra') F.push({k:'sp', type:'seg', label:'Which cobra', nodef:true, re:true, opts:[['mono', 'Monocled'], ['spit', 'Equatorial spitting'], ['king', 'King cobra']]});
      if (v.grp === 'cobra' && (v.sp === 'mono' || v.sp === 'spit')) F.push({k:'env', type:'seg', label:'Envenoming', nodef:true, opts:[['loc', 'Local'], ['sys', 'Systemic']]});
      if (v.grp === 'krait') F.push({k:'sp', type:'seg', label:'Which krait', nodef:true, opts:[['mk', 'Malayan'], ['bk', 'Banded'], ['rhk', 'Red-headed']]});
      if (v.grp === 'pv') F.push({k:'sp', type:'seg', label:'Which pit viper', nodef:true, opts:[['mpv', 'Malayan pit viper'], ['gpv', 'A green pit viper'], ['wag', bor ? 'Bornean keeled' : 'Wagler\'s (temple)'], ['blank', bor ? 'Sabah green' : 'Leaf-nose palm, Sumatran or mountain']]});
      if (v.grp === 'unk') F.push({k:'syn', type:'seg', label:'The main syndrome', nodef:true, opts:[['par', 'Paralysis'], ['bleed', 'Bleeding or not clotting'], ['myo', 'Muscle pain, dark urine'], ['loc', 'Local swelling only']]});
      F.push({k:'age', type:'seg', label:'Patient', re:true, opts:[['ad', 'Adult'], ['ch', 'Child']]});
      if (v.age === 'ch') F.push(['wt', 'Weight', 'kg']);
      F.push({k:'end', type:'time', label:'The infusion ended at (optional)'});
      return F;
    },
    note:'The choice of antivenom is for a doctor trained in snakebite management (7.3.1, p69): confirm it with the EP. Stocks differ between hospitals: ask the pharmacist; RECS can help share stock (7.3, p67). Never the Indian polyvalent antivenom: it is not appropriate for Malaysian snakes (Table 14 note, p68). Nothing you enter is saved.',
    run(v){
      if (!v.grp) return null;
      const bor = v.reg === 'bor', ch = v.age === 'ch', w = ch ? v.wt : null, gaps = [], outs = [];
      const NPAV = 'QSMI Neuro Polyvalent Snake Antivenom (NPAV)', HPAV = 'QSMI Haemato Polyvalent Snake Antivenom (HPAV)';
      let first = null, second = null, dose = null, next = null, src = '', clot = false, notes = [];
      const sp = v.sp, notBorneo = bor && ['mono', 'mk', 'mpv'].includes(sp);
      if (v.grp === 'cobra'){
        if (!sp) return [['The snake', 'Choose the cobra', 'warn', '']];
        if (sp === 'king'){ first = 'QSMI King Cobra Antivenin'; second = NPAV; dose = '10 vials'; next = 'After 1-2 hours'; src = bor ? 'Table 16, p73' : 'Table 15, p70'; }
        else { first = 'QSMI Cobra Antivenin'; second = NPAV; dose = v.env === 'loc' ? '5-10 vials' : v.env === 'sys' ? '10 vials' : 'Local envenoming 5-10 vials; systemic 10 vials'; next = 'After 1-2 hours'; src = sp === 'spit' && bor ? 'Table 16, p73' : 'Table 15, p70'; if (sp === 'spit') notes.push(['Spitting cobra', 'The cobra antivenin cross-neutralises the equatorial spitting cobra (note, p72)']); }
        notes.push(['Cross-cover', 'Cobra antivenom does not reliably cover the king cobra (p64)']);
      } else if (v.grp === 'krait'){
        if (!sp) return [['The snake', 'Choose the krait', 'warn', '']];
        if (sp === 'rhk'){ first = NPAV + ': it cross-neutralises'; second = 'Nil'; dose = '5 vials'; }
        else { first = sp === 'mk' ? 'QSMI Malayan Krait Antivenin' : 'QSMI Banded Krait Antivenin'; second = sp === 'bk' && bor ? NPAV : 'Blank in print (Table 15, p71)'; dose = '5 vials'; if (second.startsWith('Blank')) gaps.push('Not in the guideline: the second choice for this krait in Peninsular Malaysia; the cell is blank.'); }
        next = 'After 1-2 hours'; src = bor ? 'Table 16, p73' : 'Table 15, p71';
        notes.push(['Cross-cover', 'Neither krait antivenom reliably covers the other krait (p64)'], ['Paralysis', 'Krait and sea snake paralysis may not respond to antivenom: if it is not halted, urgent intubation and ventilation (7.5.5, p75)']);
      } else if (v.grp === 'sea'){
        first = 'CSL Polyvalent Sea Snake Antivenom'; second = 'Nil'; dose = '1-3 vials'; next = 'After 1-2 hours'; src = bor ? 'Table 16, p73' : 'Table 15, p71';
        notes.push(['Paralysis', 'Krait and sea snake paralysis may not respond to antivenom: if it is not halted, urgent intubation and ventilation (7.5.5, p75)']);
      } else if (v.grp === 'coral'){
        return {outs:[['Antivenom', 'None available', 'warn', 'No antivenom is known to work against coral snakes (p64; Table 15, p71)']],
          lists:[{h:'If paralysis develops: consider an anticholinesterase (6.5.4, p56 to 57)', rows:[['First', 'Record the baseline signs'], ['Atropine IV', ch ? (w > 0 ? `${r1(0.05 * w)} mg (50 µg/kg)` : '50 µg/kg: enter the weight') : '0.6 mg'], ['Then neostigmine IM', ch ? (w > 0 ? `${r1(0.04 * w * 100) / 100} mg (0.04 mg/kg)` : '0.04 mg/kg') : '0.02 mg/kg'], ['Watch', '30-60 minutes for less ptosis and better ventilatory capacity'], ['A clear response', 'Neostigmine 0.5-2.5 mg every 1-3 hours, at most 10 mg in 24 hours (child 0.01-0.04 mg/kg every 2-4 hours), with atropine']]}],
          verdict:{cls:'refer', h:'No antivenom: support breathing, and ask the EP', p:'Coral: consider neostigmine with atropine (Table 15, p71).', href:'#snakebite-moh--coral', link:'Coral snakes in the guideline'},
          gap:null};
      } else if (v.grp === 'keel'){
        return {outs:[['Antivenom', 'Anti-yamakagashi antivenom', 'warn', 'Sourced from Japan; no second choice (6.8, p59)'], ['Starting dose', 'Not in the guideline', 'warn', 'Get expert help']],
          lists:[{h:'Until antivenom is available', rows:[['Bleeding', 'Blood products only for life-threatening bleeding (6.4.9, p55)']]}],
          verdict:{cls:'refer', h:'Get expert help, and confirm with the EP', p:'The red-necked keelback causes a severe coagulopathy and needs its own antivenom (6.8, p59).', href:'#snakebite-moh--keel', link:'The keelback in the guideline'},
          gap:'Not in the guideline: the dose of the anti-yamakagashi antivenom.'};
      } else if (v.grp === 'pv'){
        if (!sp) return [['The snake', 'Choose the pit viper', 'warn', '']];
        if (sp === 'wag') return {outs:[['Antivenom', 'None available', 'warn', 'Usually not indicated: no antivenom, HPAV included, has been shown to neutralise its venom, and bites are generally not lethal (p65)']], verdict:{cls:'next', h:'No antivenom: observe and treat the bite', p:'Those pit vipers: usually not indicated (Tables 15 and 16).', href:'#snakebite-moh--wag', link:'In the guideline'}, gap:null};
        if (sp === 'blank') return {outs:[['Antivenom and dose', 'Blank in print', 'warn', bor ? 'Table 16 leaves the Sabah green pit viper blank (p73)' : 'Table 15 leaves the leaf-nose palm, Sumatran and mountain pit vipers blank (p71)']],
          lists:[{h:'Facts beside it, not a dose', rows:[['Sabah and Sarawak', 'Table 16 gives the Sumatran pit viper the green pit viper antivenin, 3 vials (p74)'], ['Cross-cover', 'Green pit viper antivenom and HPAV are considered to cross-neutralise most Trimeresurus species (p65)']]}],
          verdict:{cls:'refer', h:'Ask the EP or an expert', p:'The guideline\'s cell is blank at the page break.', href:'#snakebite-moh--gpv', link:'Pit vipers in the guideline'}, gap:'Not in the guideline: the cell is blank. Ask the EP or an expert.'};
        clot = true;
        if (sp === 'mpv'){ first = 'QSMI Malayan Pit Viper Antivenin'; second = HPAV; dose = '4 vials'; next = 'At 6 hours'; src = 'Table 15, p71'; notes.push(['Cross-cover', 'Malayan pit viper antivenom does not cover the green pit vipers (p64)']); notes.push(['3 or 4 vials', 'The guide follows Table 15\'s 4 vials (p71), the guide owner\'s decision of 10 Nov 2026; the guideline\'s own case photo shows 3 vials (p37), and the MST book prints 3 (p47)']); }
        else { first = 'QSMI Green Pit Viper Antivenin'; second = HPAV; dose = '3 vials'; next = 'At 6 hours'; src = bor ? 'Table 16, p73 to 74' : 'Table 15, p72'; notes.push(['Which green pit vipers', bor ? 'Kinabalu brown, Kinabalu green, Sumatran and Bornean palm pit vipers (Table 16)' : 'Hagen\'s green, white-lipped green, mangrove, Thai peninsula, Tioman island and Cameron pit vipers (Table 15)']); }
      } else if (v.grp === 'unk'){
        if (!v.syn) return [['The syndrome', 'Choose the main syndrome', 'warn', '']];
        const S = {par:[NPAV + ': polyvalents are usually used when the species is uncertain (p64)', 'Not in the guideline', 'Elapid antivenoms neutralise less per vial: up to 10 vials to start in confirmed envenoming (p65). 5 vials is given only as the red-headed krait\'s first-choice dose (p71, p73)'],
          bleed:[HPAV + ': raised against the Malayan pit viper, white-lipped green pit viper and Russell\'s viper (p64)', 'Not in the guideline', 'HPAV is a second choice with no dose of its own in Tables 15 and 16 (p71 to 74)'],
          myo:['If a sea snake is suspected: CSL Polyvalent Sea Snake Antivenom', '1-3 vials; next after 1-2 hours', 'Coral snakes also cause muscle pain and have no antivenom; how to tell them apart when neither was seen is not in the guideline'],
          loc:['Not in the guideline', 'Not in the guideline', 'Cobras and pit vipers both cause severe pain, spreading swelling and blisters (Table 12, p41): ask the EP or RECS']}[v.syn];
        outs.push(['Antivenom', S[0], S[0].startsWith('Not') ? 'warn' : 'good', ''], ['Starting dose', S[1], S[1].startsWith('Not') ? 'warn' : 'good', S[2]]);
        if (v.syn === 'bleed') clot = true;
        gaps.push('Starting dose for an unidentified bite: not in the guideline. Do not work out a polyvalent dose.');
      }
      if (first){
        outs.push(['Antivenom', first, 'good', 'First choice · ' + src], ['Second choice', second, second === 'Nil' || second.startsWith('Blank') ? 'warn' : 'good', ''], ['Starting dose', dose, 'good', 'The same dose at every age, in pregnancy and with comorbidities; no contraindication (6.6, p58)'], ['Next dose', next, 'good', 'According to the clinical signs and symptoms (Tables 15 and 16)']);
      }
      if (notBorneo) notes.unshift(['Region', 'Not in Borneo: the Malayan pit viper, monocled cobra and Malayan krait (p74). The guideline gives no instruction for this case']);
      /* how to give it, with a child's doses by weight */
      const wOk = !ch || (w > 0 && w <= 100);
      if (ch && !(w > 0)) outs.push(['Child', 'Enter the weight', 'warn', 'For the adrenaline and the dilution volume; the antivenom dose itself does not change']);
      if (ch && w > 100) outs.push(['Weight', 'Enter 1 to 100 kg', 'warn', '']);
      outs.push(['Adrenaline ready before starting', ch ? (wOk && w ? r1(0.01 * w * 100) / 100 + ' mg' : '0.01 mg/kg') : '0.5 mg', 'good', ch ? '0.01 mg/kg of 1 mg/ml (1 in 1,000); the guideline gives no child maximum (adult 0.5 mg)' : '0.5 ml of 1 mg/ml (1 in 1,000) (p69)']);
      outs.push(['Dilute in', ch ? (wOk && w ? `${Math.round(5 * w)}-${Math.round(10 * w)} ml` : '5-10 ml/kg') : '250-500 ml', 'good', 'Normal saline or D5%' + (ch ? ', 5-10 ml/kg' : '') + '; with a volume concern, 5-10 ml/kg or undiluted (6.6.3 to 6.6.4, p58)']);
      if (v.end && clot){ const [h, mi] = v.end.split(':').map(Number), d = (h * 60 + mi + 360) % 1440; outs.push(['Recheck the clotting at', String(Math.floor(d / 60)).padStart(2, '0') + ':' + String(d % 60).padStart(2, '0'), 'good', '6 hours after the infusion ended (7.6.1, p75)']); }
      const lists = [{h:'How to give it (7.3.1, p69)', rows:[['Premedication', 'None: hydrocortisone and antihistamines only for signs of allergy (6.4.3, p55)'], ['Reconstitute', 'Each vial with the solution supplied or 10 ml water for injection; swirl gently, never shake'], ['Route', 'IV only'], ['Rate', 'Run at 1-2 ml/min for 10-15 minutes; with no reaction, faster, to finish within an hour'], ['Monitor', 'During the infusion and for at least an hour after']]},
        {h:'Repeat the starting dose (7.6, p75)', rows:[['Clotting', 'Still unclotted, or unclotted again, 6 hours after the infusion ended'], ['Bleeding', 'Within 1-2 hours if bleeding stays brisk'], ['Paralysis or circulation', 'After 1-2 hours if they worsen, with full support'], ['Maximum', 'No maximum dose or number of repeats is given']]},
        {h:'Reactions (Table 17, p76 to 77)', rows:[['Early, 2-180 minutes', 'Stop the antivenom. Adrenaline IM ' + (ch ? (wOk && w ? r1(0.01 * w * 100) / 100 + ' mg (0.01 mg/kg)' : '0.01 mg/kg') : '0.5 mg') + ', every 5-10 minutes; IV straight away with a coagulopathy'], ['Chlorpheniramine IV', ch ? (wOk && w ? r1(0.2 * w) + ' mg (0.2 mg/kg)' : '0.2 mg/kg') : '10 mg'], ['Ranitidine IV', ch ? (wOk && w ? r1(1 * w) + ' mg (1 mg/kg)' : '1 mg/kg') : '50 mg'], ['Hydrocortisone IV', (wOk && w ? `${Math.round(2 * w)}-${Math.min(Math.round(4 * w), ch ? 200 : 1e9)} mg` : '2-4 mg/kg') + (ch ? ', at most 200 mg' : '')], ['Infusion', ch ? 'Not in the sources for a child: ask the EP. Table 17 prints 1 microgm/kg/min; the ebook gives 1 mcg/min, not by weight' : '1 mcg/min: 1 mg (1 ml of 1:1000) in 500 ml NS at 0.5 ml/min, as the ebook gives it (p15 to 16; the guide owner\'s decision, 10 Nov 2026). Table 17 prints 1 microgm/kg/min'], ['Pyrogenic, 1-2 hours after', 'Cool the patient, an antipyretic, IV fluids'], ['Late, 1-12 days after', 'Chlorpheniramine by mouth for 5 days: ' + (ch ? '0.25 mg/kg/day in divided doses' : '2 mg six-hourly') + '; prednisolone if no response in 24-48 hours: ' + (ch ? '0.7-1 mg/kg/day' : '30-60 mg/day') + ', divided, for 5-7 days']]}];
      if (notes.length) lists.unshift({h:'Notes for this snake', rows:notes});
      if (!v.end && clot) gaps.push('Enter when the infusion ended to get the time to recheck the clotting.');
      if (ch && w > 0 && Math.round(4 * w) > 200) gaps.push('Hydrocortisone is capped at the child maximum of 200 mg.');
      return {outs, lists, verdict:{cls:'refer', h:'Confirm with the EP before you give it', p:'The choice of antivenom is for a doctor trained in snakebite management (7.3.1, p69). Never the Indian polyvalent antivenom (p68).', href:'#snakebite-moh--which', link:'Antivenom in the guideline'}, gap:gaps.join(' ') || null};
    }},
  kids:{t:'Child doses', g:'kids', src:'Department posters', path:'#children', kw:'paediatric prednisolone salbutamol puffs ipratropium croup dexamethasone adrenaline ors',
    sub:'Asthma, croup and ORS doses by weight, from the department\'s posters and notes.',
    fields:[['wt','Weight','kg'],['age','Age','',[['u6','Under 6 years'],['o6','Over 6 years']]]],
    note:'From the department\'s paediatric asthma posters and Paediatrics 101 notes. Check doses against the Paediatric Protocols and the child\'s condition.',
    run(v){
      if (!v.wt) return null;
      if (v.wt < 2 || v.wt > 80) return [['Weight', 'Enter 2 to 80 kg', 'warn', '']];
      const w = v.wt, u6 = v.age !== 'o6';
      const pred = r1(w);
      return [
        ['Prednisolone 1 mg/kg/day for 3 days', pred + ' mg', pred > 30 ? 'warn' : 'good', pred > 30 ? 'Over the poster\'s maximum of 30–40 mg a day: give no more than that' : 'Asthma, once daily'],
        ['Salbutamol MDI with spacer', u6 ? '4–6 puffs' : '8–10 puffs', 'good', 'Mild or moderate asthma. Severe: add ipratropium ' + (u6 ? '4' : '8') + ' puffs, 3 cycles in the first hour'],
        ['Dexamethasone (croup)', r1(0.3 * w) + '–' + r1(0.6 * w) + ' mg', 'good', '0.3–0.6 mg/kg'],
        ['Nebulised adrenaline 1:1000 (croup)', r1(Math.min(0.5 * w, 5)) + ' ml', 'good', '0.5 ml/kg, max 5 ml'],
        ['ORS after each loose stool', Math.round(10 * w) + ' ml', 'good', '10 ml/kg'],
        ['ORS for moderate dehydration', Math.round(75 * w) + ' ml', 'good', 'Over 4 hours: 75 ml/kg, about ' + Math.round(75 * w / 4) + ' ml an hour']
      ];
    }},
  soap:{t:'Dehydration check (SOAP)', g:'kids', src:'Paediatrics 101 notes', path:'#children--dehyd', kw:'diarrhoea gastroenteritis child dehydration ors sunken eyes skin turgor',
    sub:'Count the four SOAP signs in a child with diarrhoea, with the ORS volumes by weight.',
    fields:[['wt','Weight','kg'], {k:'s', type:'check', label:'Tick each sign you find', items:() => [['S: sunken eyes'], ['O: offer water (how the child drinks)'], ['A: activeness'], ['P: pinch (skin turgor)']]}],
    note:'From Paediatrics 101, Dr Alza\'s simple notes (department teaching notes): fewer than 2 signs, under 5% dehydrated; 2 or more signs, 5–10%; all 4 signs, over 10%. ORS 10 ml/kg after each loose stool; moderate dehydration, 75 ml/kg over 4 hours.',
    run(v){
      const out = [];
      if (v.s_set){
        const n = v.s_n;
        out.push(['SOAP signs', n + ' of 4', n === 4 ? 'bad' : n >= 2 ? 'warn' : 'good', n === 4 ? 'Over 10% dehydrated' : n >= 2 ? '5–10% dehydrated' : 'Under 5% dehydrated', {min:-0.5, max:4.5, v:n, bands:[[-0.5, 1.5, 'good'], [1.5, 3.5, 'warn'], [3.5, 4.5, 'bad']]}]);
      }
      const w = v.wt;
      if (w){
        if (w < 2 || w > 80) out.push(['Weight', 'Enter 2 to 80 kg', 'warn', '']);
        else {
          out.push(['ORS after each loose stool', Math.round(10 * w) + ' ml', 'good', '10 ml/kg']);
          out.push(['ORS for moderate dehydration', Math.round(75 * w) + ' ml', 'good', `Over 4 hours: 75 ml/kg, about ${Math.round(75 * w / 4)} ml an hour`]);
        }
      }
      if (!out.length) return null;
      const gaps = ['The notes do not say which SOAP band counts as moderate dehydration.'];
      if (v.s_set && v.s_n === 4) gaps.push('They do not cover treatment for a child over 10% dehydrated.');
      return {outs:out, gap:gaps.join(' ')};
    }}
};
/* Every number above must still be in the source text: the test checks each of these phrases against the pathway data */
const CALC_FACTS = [
  ['snakebite-moh', 'Put 2 ml of freshly drawn venous blood into a small, dry glass tube, new or heat-cleaned'], ['snakebite-moh', 'Leave it undisturbed at room temperature for 20 minutes, then tip it once'], ['snakebite-moh', 'Still liquid: a coagulopathy is possible. Repeat as needed'], ['snakebite-moh', 'a quick bedside test when the bite is unidentified or a pit viper is suspected'], ['snakebite-moh', 'Do not decide antivenom on the 20WBCT alone'], ['snakebite-moh', 'Yet a coagulopathy on the 20WBCT is also listed as an antivenom indication (p66)'], ['snakebite-moh', 'After an adequate dose, clotting usually returns in 3-9 hours (p75)'], ['snakebite-moh', 'Still not clotting, or not clotting again, 6 hours after the infusion ended: repeat the starting dose (p75)'], ['snakebite-moh', 'Not in the guideline: whether a partial clot counts, a schedule for repeat tests, or what to use without a glass tube'], ['snakebite-moh', 'Local envenoming 5-10 vials, systemic 10 vials; next after 1-2 hours'], ['snakebite-moh', '10 vials; next after 1-2 hours'], ['snakebite-moh', '5 vials; next after 1-2 hours'], ['snakebite-moh', 'Red-headed krait 5 vials; next after 1-2 hours. No dose as a second choice'], ['snakebite-moh', '1-3 vials; next after 1-2 hours'], ['snakebite-moh', '4 vials; next at 6 hours'], ['snakebite-moh', '3 vials; next at 6 hours'], ['snakebite-moh', 'Second choice for the pit vipers'], ['snakebite-moh', 'Coral: consider neostigmine with atropine. Those pit vipers: usually not indicated'], ['snakebite-moh', 'Starting dose for an unidentified bite: not in the guideline'], ['snakebite-moh', 'Not in Borneo: the Malayan pit viper, monocled cobra and Malayan krait (p74)'], ['snakebite-moh', 'Printed blank, so ask the EP or an expert: the leaf-nose palm, Sumatran and mountain pit vipers in Table 15 (p71), the Sabah green pit viper in Table 16 (p73)'], ['snakebite-moh', 'Its antivenom is the anti-yamakagashi antivenom, sourced from Japan; no second choice and no dose in the guideline'], ['snakebite-moh', 'Never the Indian polyvalent antivenom'], ['snakebite-moh', 'Elapid antivenoms neutralise less per vial: up to 10 vials to start in confirmed envenoming (p65)'], ['snakebite-moh', 'Adrenaline drawn up before starting: adult 0.5 mg, child 0.01 mg/kg, of 1 mg/ml (1 in 1,000) (p69)'], ['snakebite-moh', 'Reconstitute each vial with the solution supplied or 10 ml water for injection; swirl gently, never shake (p69)'], ['snakebite-moh', 'Dilute: adult 250-500 ml normal saline or D5%; child 5-10 ml/kg'], ['snakebite-moh', 'or give it undiluted'], ['snakebite-moh', 'Run at 1-2 ml/min for 10-15 minutes; with no reaction, faster, to finish within an hour (p69)'], ['snakebite-moh', 'Monitor during the infusion and for at least an hour after'], ['snakebite-moh', 'The same dose at every age, in pregnancy and with comorbidities; no contraindication'], ['snakebite-moh', 'Some severely envenomed children may need a larger volume of antivenom, given their lower volume of distribution'], ['snakebite-moh', 'Repeat the starting dose: still unclotted, or unclotted again, 6 hours after the infusion ended; within 1-2 hours if bleeding stays brisk; after 1-2 hours if paralysis or the circulation worsens, with full support'], ['snakebite-moh', 'No maximum dose or number of repeats is given'], ['anaphylaxis', 'Infusion 1 mcg/min: 1 mg (1 ml of 1:1000) in 500 ml NS at 0.5 ml/min'], ['snakebite-moh', 'Krait and sea snake paralysis does not respond like this'], ['snakebite-moh', 'Table 17 prints 1 microgm/kg/min'],
  ['animal-bites', 'IM: 1 site; D0,3,7,14-28'], ['animal-bites', 'ID: 2 sites; D0,3,7'], ['animal-bites', 'IM/ID: 1 site; D0,3'], ['animal-bites', 'ID: 4 sites; D0'],
  ['animal-bites', 'Intramuscular (IM): 0.5 ml'], ['animal-bites', 'Intradermal (ID): 0.1 ml'], ['animal-bites', 'Deltoid (IM/ID)'], ['animal-bites', 'Suprascapular (ID)'], ['animal-bites', 'Anterolateral thigh (ID)'],
  ['animal-bites', 'IM Rabies Vaccine 0.5 ml stat D0'], ['animal-bites', 'ID Rabies Vaccine 0.1 ml x 2 sites stat D0'], ['animal-bites', 'Intradermal Rabies Vaccine 0.1 ml x 2 sites stat D0'], ['animal-bites', '0.1 ml x 2 sites (each deltoid)'],
  ['animal-bites', 'to prescribe ONE dose per visit'], ['animal-bites', 'Rabies Immunoglobulin 1 vial (1000 units) stat'], ['animal-bites', 'Dos: 1 vial (1000 iu)'], ['animal-bites', 'Max. dose: 1 vial/patient'],
  ['animal-bites', 'Refer ID trainee/consultant (accept verbal consent)'], ['animal-bites', 'RIG MUST NOT be administered in the same syringe as the rabies vaccine'], ['animal-bites', 'Equine RIG (Rabix IG / Equirab) can be further diluted with normal saline (2 – 3x Volume)'],
  ['ckd-cpg', 'CrCl (ml/min/1.73 m²) = (140 - age (yrs)) x body weight (kg)/SCr (umol/l) x Constant where the constant is 1.23 in male or 1.04 in female'], ['ckd-cpg', 'In the elderly (age >65 years), there is no accurate method to assess renal function'],
  ['ckd-cpg', 'Mild (GFR 60 - 90 ml/min)'], ['ckd-cpg', 'Moderate (GFR 30 - 59 ml/min)'], ['ckd-cpg', 'Severe (GFR <30 ml/min)'], ['ckd-cpg', '#Drug dosing calculated using MDRD or CKD-Epi'],
  ['ckd-cpg', 'The dosing guide for GFR <10 ml/min does not provide information on dosing in haemodialysis, peritoneal dialysis or continuous RRT patients'],
  ['cancer-pain-cpg', 'Opioids (morphine or oxycodone) for breakthrough cancer pain should be prescribed at 1/6 to 1/12 of the 24-hour dose'], ['cancer-pain-cpg', 'has been 1/6 i.e. equivalent to the 4-hourly opioid dose'], ['cancer-pain-cpg', 'doses as low as 1/12 of the 24-hour dose can be used'],
  ['cancer-pain-cpg', 'Rescue dose for breakthrough pain is given as often as required (up to hourly)'], ['cancer-pain-cpg', 'calculate the total daily dose of 4-hourly opioid + dose of opioids taken for breakthrough pain over the last 24 hours (Limit to 50% dose'],
  ['cancer-pain-cpg', 'increase opioid daily dose (25 - 50% of the daily dose) for patient who takes no rescue doses but still has uncontrolled pain'], ['cancer-pain-cpg', '(>3 doses) throughout the day'], ['cancer-pain-cpg', 'Dose titration can be done as early as 24 hours after initiation'],
  ['sore-throat-cpg', '["Fever ≥ 38°C",1]'], ['sore-throat-cpg', '["Age <15",1]'], ['sore-throat-cpg', 'Score <2: a virus is likely'], ['sore-throat-cpg', 'Score 4 or more: swab, or start an antibiotic'],
  ['t2dm-cpg', 'TDD = weight in kg times 0.5 U-0.75 U'], ['t2dm-cpg', 'In general, the prandial share should not be >50% of the TDD (p76)'],
  ['dengue-cpg', 'Febrile phase: usually lasts 2 - 7 days'], ['dengue-cpg', 'usually between days 3 and 7 of illness'], ['dengue-cpg', 'A rising HCT (≥20% from baseline)'],
  ['dengue-cpg', 'Median normal HCT: male ≤60 years 46%; male > 60 years 42%; female (all age groups) 40%.'], ['dengue-cpg', 'A platelet count below 100 × 10⁹/L is the earliest and most useful indicator of the critical phase (p42).'],
  ['dengue-cpg', 'a rapid drop in temperature may signal entry into the critical phase'], ['dengue-cpg', 'Routine prophylactic transfusion of platelets or plasma should not be performed in dengue patients without active bleeding.'],
  ['dengue-cpg', 'All dengue cases has to be notified by medical practitioners within 24 hours of diagnosis being made.'],
  ['pain', '15 mg/kg/dose'], ['pain', 'max 60 mg/kg/day'], ['pain', '500 mg–1 g 6–8 hourly, max 4 g/day'], ['pain', 'Analgesia 0.1–0.3 mg/kg'],
  ['pain', '0.2–0.5 mg/kg'], ['pain', 'partial dissociation 0.4–0.8 mg/kg'], ['pain', 'full dissociation 1–2 mg/kg'], ['pain', 'Mild 1–3'], ['pain', 'Moderate 4–6'], ['pain', 'Severe 7–10'],
  ['dvt', 'under 50 kg 5 mg once a day'], ['dvt', '50–100 kg 7.5 mg once a day'], ['dvt', 'over 100 kg 10 mg once a day'],
  ['dvt', 'Clexane 1 mg/kg every 12 hours (creatinine clearance over 30), 1 mg/kg once a day (creatinine clearance under 30)'], ['dvt', 'Consult EP in an obese patient'],
  ['dvt', 'Low risk (−2 to 0)'], ['dvt', 'Moderate risk (1 to 2)'], ['dvt', 'High risk (3 or more)'],
  ['pneumonia', 'Score 0–1 (under 3% risk of death)'], ['pneumonia', 'Score 2 or more (over 10% risk of death)'],
  ['hyperglycaemia', 'BG 7.8–11.1 mmol/L'], ['hyperglycaemia', 'BG 11.2–22.2 mmol/L'], ['hyperglycaemia', 'basal-bolus insulin regimen based on TDD'],
  ['behavioural-disturbance', 'IM 0.07–0.1 mg/kg (usual 5 mg)'], ['behavioural-disturbance', 'paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)'], ['behavioural-disturbance', 'IM 4 mg/kg; IV 0.5–2 mg/kg over 60 s'],
  ['behavioural-disturbance', '1 to 3'], ['behavioural-disturbance', '5 to 6'], ['behavioural-disturbance', 'No (non-violent, BARS 4)'],
  ['mild-tbi', 'More than 4 hours since injury and under 18 points on PTA'], ['mild-tbi', 'minimum of 6 hours since injury'],
  ['children', 'Fewer than 2 signs: under 5% dehydrated'], ['children', '2 or more signs: 5–10%'], ['children', 'All 4 signs: over 10%'],
  ['children', 'ORS 10 ml/kg after each loose stool'], ['children', 'moderate dehydration: 75 ml/kg over 4 hours'], ['children', 'Dexamethasone 0.3–0.6 mg/kg'], ['children', '0.5 ml/kg (max 5 ml)'],
  ['svt', 'Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min'], ['svt', 'maintenance 0.1 mg/kg/min'], ['svt', 'then 0.15 mg/kg/min'], ['svt', 'max 0.3 mg/kg/min'],
  ['anaphylaxis', '10–20 ml/kg NS bolus'], ['acs', 'Start T aspirin 300 mg'], ['syncope', 'Follow-up at EMWATCH, EMACC or PC clinic'],
  ['paracetamol-overdose', 'Under 2 hours'], ['paracetamol-overdose', '2 to 8 hours'], ['paracetamol-overdose', '8 to 24 hours'], ['paracetamol-overdose', 'Over 24 hours'],
  ['paracetamol-overdose', '4–8 hours after ingestion'], ['paracetamol-overdose', 'within 8 hours'], ['paracetamol-overdose', 'above the nomogram line, or ALT 50 U/L or more'],
  ['paracetamol-overdose', 'Paracetamol over 10 mg/L (66 µmol/L), or ALT 50 U/L or more'],
  ['dengue-cpg', 'Blood pressure (BP) < 90/60 mmHg'], ['dengue-cpg', 'Mean arterial pressure (MAP) < 65 mmHg'], ['dengue-cpg', 'Pulse pressure (PP) < 30 mmHg'], ['dengue-cpg', 'Shock index (HR/SBP) > 1'],
  ['dengue-cpg', 'Heart rate (HR) > 100/min'], ['dengue-cpg', 'Respiratory rate (RR) > 20/min'], ['dengue-cpg', 'Oxygen saturation (SpO2) < 95%'],
  ['dengue-cpg', '4ml/kg/hr'], ['dengue-cpg', '2ml/kg/hr'], ['dengue-cpg', '1ml/kg/hr'], ['dengue-cpg', '70 kg weight limit for weight-based fluid calculations in maintenance and fluid quota'],
  ['dengue-cpg', 'For obese patients (BMI >27.5 kg/m2), maintenance fluid calculation should be based on Adjusted Body Weight (ABW).'], ['dengue-cpg', 'ABW = IBW + 0.4 (actual weight - IBW)'],
  ['dengue-cpg', 'female: 45.5 kg + 0.91(height in cm -152)'], ['dengue-cpg', 'Male: 50.0 kg + 0.91(height in cm -152)'],
  ['dengue-cpg', 'Start IV crystalloid 3-5ml/kg/hr for 1 hour'], ['dengue-cpg', 'IV crystalloid 2-3ml/kg/hr for 1-2 hour'], ['dengue-cpg', 'reduce to 1-2ml/kg/hr or maintenance fluid; stop IV fluid if able to tolerate orally'],
  ['dengue-cpg', 'increase fluid regimen to 5-7ml/kg/hr while awaiting result'], ['dengue-cpg', 'oral fluid intake equivalent to 1 - 2 ml/ kg/hour, IV fluid administration is not necessary'],
  ['dengue-cpg', 'Optimal urine output: 0.5 - 1 ml/kg/hour'], ['dengue-cpg', 'a minimum of 0.5 ml/kg/hour'], ['dengue-cpg', 'at least once every 6 hours'], ['dengue-cpg', 'Good urine output (0.5 - 1.5 mL/kg/hr)'],
  ['dengue-cpg', 'IgM and IgG should not be used as confirmatory tests'], ['dengue-cpg', 'Negative test results require differential diagnosis to confirm cause of infection'],
  ['asthma-cpg', 'Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat'], ['asthma-cpg', 'ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily'],
  ['asthma-cpg', 'This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction'], ['asthma-cpg', 'Continue prednisolone (5 - 7 days)'],
  ['asthma-cpg', 'The CPG gives no formula for the ideal body weight'],
  ['asthma-cpg', 'PEFR: ____ to ____l/min (80% to 100% of personal best)'], ['asthma-cpg', 'PEFR: ____ to ____l/min (50% to 79% of personal best)'],
  ['asthma-cpg', 'PEFR: Below ____l/min (less than 50% of personal best)'], ['asthma-cpg', 'In patients without known personal best, the predicted value may be used'],
  ['asthma-cpg', 'It should be considered for patients with PEFR <50%'], ['asthma-cpg', 'PEF or FEV1 may not be applicable to be used in acute asthma exacerbation'],
  ['head-injury-cpg', 'Spontaneous 4; To voice/sound 3; To pressure/pain 2; None 1'], ['head-injury-cpg', 'Orientated 5; Confused 4; Words 3; Sounds 2; None 1'],
  ['head-injury-cpg', 'Obeys commands 6; Localising 5; Flexion withdrawal 4; Abnormal flexion 3; Extension 2; None 1'],
  ['head-injury-cpg', 'Mild head injury (MHI): GCS 13 - 15'], ['head-injury-cpg', 'Moderate head injury: GCS 9 - 12'], ['head-injury-cpg', 'Severe head injury: GCS 3 - 8'],
  ['head-injury-cpg', 'GCS <13 on initial management'], ['head-injury-cpg', 'GCS <15 at 2 hours after injury'],
  ['head-injury-cpg', 'In patients with head injury with GCS of ≤8, intubation is recommended for airway protection']
];
const calcFactsMissing = () => CALC_FACTS.filter(([id, s]) => !JSON.stringify(P[id]).includes(s));
const CALC_SEE = {'ckd-cpg':[['#calc-crcl', 'Kidney function and drug doses']], 'cancer-pain-cpg':[['#calc-copioid', 'Rescue dose and titration'], ['#calc-pain', 'Pain scales'], ['#calc-analgesia', 'Analgesia by weight']], 'sore-throat-cpg':[['#calc-mcisaac', 'McIsaac score'], ['#calc-kids', 'Child doses'], ['#calc-analgesia', 'Analgesia by weight']],
  't2dm-cpg':[['#calc-insulin', 'Total daily insulin dose']], 'vte-cpg':[['#calc-anticoag', 'Anticoagulant for a confirmed DVT'], ['#calc-wells', 'Wells score (DVT)'], ['#calc-crcl', 'Kidney function']], 'copd-cpg':[['#calc-curb', 'CURB-65']], 'sinusitis-cpg':[['#calc-analgesia', 'Analgesia by weight']],
  'hip-fracture-cpg':[['#calc-analgesia', 'Analgesia by weight'], ['#calc-pain', 'Pain scales (PAINAD)']], 'avulsed-tooth-cpg':[['#calc-analgesia', 'Analgesia by weight']],
  'asthma-cpg':[['#calc-apred', 'Prednisolone by weight'], ['#calc-apef', 'Action plan PEF zones']], 'head-injury-cpg':[['#calc-gcs', 'Glasgow Coma Scale calculator']], 'acs-cpg':[['#calc-obsess', 'Obsess protocol check']], pneumonia:[['#calc-curb', 'CURB-65 calculator']], dvt:[['#calc-wells', 'Wells score calculator'], ['#calc-anticoag', 'Anticoagulant doses']],
  pain:[['#calc-pain', 'Pain scales calculator'], ['#calc-analgesia', 'Analgesia by weight']], hyperglycaemia:[['#calc-insulin', 'Insulin dose calculator']],
  'mild-tbi':[['#calc-head', 'Head injury check'], ['#calc-gcs', 'Glasgow Coma Scale']], 'behavioural-disturbance':[['#calc-calm', 'BARS and RASS']],
  dengue:[['#calc-dengue', 'Shock index'], ['#calc-weight', 'Adjusted weight']], children:[['#calc-kids', 'Child doses'], ['#calc-soap', 'Dehydration check']],
  acs:[['#calc-obsess', 'Obsess protocol check']], syncope:[['#calc-syncope', 'Syncope risk check']], svt:[['#calc-svt', 'SVT drugs by weight']], 'hypertensive-urgency':[['#calc-htn', 'Hypertensive urgency calculator']],
  'paracetamol-overdose':[['#calc-paraod', 'Time since ingestion']], anaphylaxis:[['#calc-anaph', 'Anaphylaxis drugs and fluids']],
  'dengue-cpg':[['#calc-dassess', 'One-screen assessment'], ['#calc-dvitals', 'Triage vital signs'], ['#calc-dfluid', 'Fluids by weight'], ['#calc-drdt', 'Test result'], ['#calc-duo', 'Urine output'], ['#calc-weight', 'Adjusted weight']]};
/* Add each calculator link once: an entry may already link to it (dengue already links to the shock index) */
for (const [id, l] of Object.entries(CALC_SEE)) if (P[id]){ const have = new Set((P[id].see || []).map(s => s[0])); P[id].see = [...(P[id].see || []), ...l.filter(([h]) => !have.has(h))]; }
for (const [id, c] of Object.entries(CALCS)) IDX.push({href:'#calc-' + id, title:c.t, kind:'Calculator', meta:c.src, body:[c.sub, c.note, c.kw].join(' · '), ic:'calc', c:'c-breath', j:CALC_G[c.g].j});
CALC_LINKS.forEach(l => IDX.push({href:'#calc', title:l.t + ' (' + l.site + ', outside site)', kind:'Calculator', meta:l.href.split('/')[2], body:l.d, ic:'calc', c:'c-breath', j:CALC_G[l.g].j}));
CPG_SHELF.filter(shelfOut).forEach(c => IDX.push({href:'#guidelines', title:c.t + ' (' + c.y + ')', kind:'National CPG', meta:'Academy of Medicine, outside site', body:[c.s, c.kw, 'clinical practice guideline cpg'].join(' · '), ic:'ext', c:'c-prot'}));

/* The open calculator. Entries live in memory only: the weight and age band are shared, the rest is per calculator */
let calcTab = 'dengue', cxOpen = false, cxGroup = 'all', cxQ = '';
const calcMem = {wt:'', age:'u6'}, cState = {};
const SHARED = new Set(['wt', 'age']);
const cGet = (id, k) => SHARED.has(k) ? calcMem[k] : (cState[id] || {})[k];
const cPut = (id, k, val) => { if (SHARED.has(k)) calcMem[k] = val; else (cState[id] = cState[id] || {})[k] = val; };
const optsOf = f => typeof f.opts === 'function' ? f.opts() : f.opts;
const itemsOf = f => (typeof f.items === 'function' ? f.items() : f.items).map(x => Array.isArray(x) ? x : [x]);
function calcVals(id){
  const c = CALCS[id], v = {};
  const read = list => list.forEach(f => {
    if (f.type === 'h') return;
    if (Array.isArray(f)){ const [k, , , ch] = f, x = cGet(id, k); v[k] = ch ? (x || ch[0][0]) : (x === '' || x == null ? 0 : parseFloat(x) || 0); return; }
    const x = cGet(id, f.k);
    if (f.type === 'check'){ const a = x || [], it = itemsOf(f); v[f.k] = a; v[f.k + '_set'] = !!x; v[f.k + '_n'] = a.filter(Boolean).length; v[f.k + '_sum'] = it.reduce((s, row, i) => s + (a[i] ? (row[1] != null ? row[1] : 1) : 0), 0); if (f.none) v[f.k + '_none'] = !!cGet(id, f.k + '_none') && !v[f.k + '_n']; }
    else if (f.type === 'rate') v[f.k] = x || [];
    else if (f.type === 'time' || f.type === 'date') v[f.k] = x || '';
    else v[f.k] = x || (f.type === 'seg' && !f.nodef ? optsOf(f)[0][0] : '');
  });
  /* Fields can depend on earlier choices (the pain scale, BARS 7): read until they settle */
  let list = typeof c.fields === 'function' ? c.fields(v) : c.fields;
  read(list);
  if (typeof c.fields === 'function') for (let i = 0; i < 3; i++){ list = c.fields(v); read(list); }
  return {v, list};
}
function fieldHTML(id, f){
  if (Array.isArray(f)){
    const [k, l, unit, ch] = f, x = cGet(id, k);
    if (ch) return `<div class="field"><label for="cf-${k}">${l}</label><select id="cf-${k}" data-k="${k}">${ch.map(([val, t]) => `<option value="${val}"${x === val ? ' selected' : ''}>${t}</option>`).join('')}</select></div>`;
    return `<div class="field${k === 'wt' ? ' wt' : ''}"><label for="cf-${k}">${l}${unit ? ' (' + unit + ')' : ''}</label><input id="cf-${k}" data-k="${k}" type="number" inputmode="decimal" min="0" step="any" autocomplete="off" value="${esc(x == null ? '' : String(x))}">${k === 'wt' ? '<small>Shared with the other dose calculators. Not saved.</small>' : ''}</div>`;
  }
  if (f.type === 'h') return `<h3 class="cf-full cf-h">${f.n ? `<b>${esc(f.n)}</b>` : ''}${esc(f.label)}</h3>`;
  const x = cGet(id, f.k);
  if (f.type === 'time') return `<div class="field"><label for="cf-${f.k}">${esc(f.label)}</label><input id="cf-${f.k}" data-k="${f.k}" type="time" autocomplete="off" value="${esc(x || '')}"></div>`;
  if (f.type === 'date') return `<div class="field"><label for="cf-${f.k}">${esc(f.label)}</label><input id="cf-${f.k}" data-k="${f.k}" type="date" autocomplete="off" value="${esc(x || '')}"></div>`;
  if (f.type === 'seg'){ const o = optsOf(f), cur = x || (f.nodef ? '' : o[0][0]);
    return `<div class="cf-full cf-seg"><span class="cf-l" id="cl-${f.k}">${esc(f.label)}</span><div class="seg" role="group" aria-labelledby="cl-${f.k}" style="--n:${o.length}">${o.map(([val, t]) => `<button type="button" data-k="${f.k}" data-sv="${val}" aria-pressed="${cur === val}">${esc(t)}</button>`).join('')}</div></div>`; }
  if (f.type === 'check'){ const a = x || [];
    return `<fieldset class="cf-full"><legend>${esc(f.label)}</legend><ul class="dc-list${f.stop ? ' stop' : ''}">${itemsOf(f).map((row, i) => `<li><label><input type="checkbox" data-k="${f.k}" data-i="${i}"${a[i] ? ' checked' : ''}><span>${esc(row[0])}</span>${f.pts ? `<b class="pts">${(row[1] != null ? row[1] : 1) > 0 ? '+' : ''}${String(row[1] != null ? row[1] : 1).replace('-', '−')}</b>` : ''}</label></li>`).join('')}${f.none ? `<li class="none"><label><input type="checkbox" data-none="${f.k}"${cGet(id, f.k + '_none') && !a.some(Boolean) ? ' checked' : ''}><span>None of these</span></label></li>` : ''}</ul></fieldset>`; }
  if (f.type === 'rate'){ const a = x || [];
    return `<fieldset class="cf-full"><legend>${esc(f.label)}</legend>${f.rows.map((row, r) => `<div class="rate"><span class="rn" id="rn-${r}">${esc(row[0])}</span><div class="ro" role="radiogroup" aria-labelledby="rn-${r}">${[1, 2, 3].map(s => `<button type="button" role="radio" data-k="${f.k}" data-r="${r}" data-s="${s - 1}" aria-checked="${a[r] === s - 1}"><b>${s - 1}</b><span>${esc(row[s] || '')}</span></button>`).join('')}</div></div>`).join('')}</fieldset>`; }
  if (f.type === 'pick'){
    return `<fieldset class="cf-full"><legend>${esc(f.label)}</legend><div class="pick" role="radiogroup">${optsOf(f).map(([val, t, d]) => `<button type="button" role="radio" data-k="${f.k}" data-pv="${esc(val)}" aria-checked="${x === val}"><b>${esc(val)}</b><span>${esc(t)}${d ? `<small>${esc(d)}</small>` : ''}</span></button>`).join('')}</div></fieldset>`; }
  return '';
}
function renderCalc(){
  const c = CALCS[calcTab], g = CALC_G[c.g], box = $('#calcbox'), {list} = calcVals(calcTab);
  withTiles(box, `<div class="tile ${g.j} tool-h cx-h">${tileMedia(g.k)}<div class="row"><span class="ic">${svg(g.ic)}</span><h2>${esc(c.t)}</h2></div><p>${esc(c.sub)}</p><div class="tags"><span class="tag">${esc(c.src)}</span><span class="tag">${esc(g.t)}</span></div></div>
    <div class="tool-b"><div class="fields">${list.map(f => fieldHTML(calcTab, f)).join('')}</div>${c.sticky ? '<button type="button" class="cx-sticky" id="cxsticky" hidden></button>' : ''}<div class="outs" id="couts" aria-live="polite"></div>
    <p class="calc-note">${esc(c.note)}</p>
    <div class="foot cx-foot">${c.path ? `<a class="pill" href="${c.path}">Open the pathway${svg('chev')}</a>` : ''}<span class="sp"></span><button type="button" class="sm" id="cxcopy">${svg('copy')}<span class="bl">Copy</span></button><button type="button" class="sm" id="cxclear">${svg('restart')}<span class="bl">Clear</span></button></div></div>`);
  calcOut();
  markCxCurrent();
}
let calcLast = null;
function calcOut(){
  const c = CALCS[calcTab], {v, list} = calcVals(calcTab);
  let r = c.run(v);
  if (Array.isArray(r)) r = {outs:r};
  calcLast = r;
  const sk = $('#cxsticky');
  if (sk){ const vd = r && r.verdict; sk.hidden = !vd; if (vd){ sk.className = 'cx-sticky ' + vd.cls; sk.innerHTML = `<span>${esc(vd.h)}</span><small>See the result${svg('chev')}</small>`; } }
  const box = $('#couts');
  if (!r){ box.innerHTML = `<div class="out"><span>${list.some(f => !Array.isArray(f)) ? 'Choose or tick to see the result' : 'Fill in the boxes to see the result'}</span></div>`; return; }
  const vd = r.verdict;
  /* A figure is set in mono; an answer in words (Indicated, Not covered, a BARS level) is set in the display face */
  box.innerHTML = r.outs.map(([l, val, cls, em, sc]) => `<div class="out ${cls}"><span>${esc(l)}</span><b${/\d/.test(val) ? '' : ` class="w${val.length > 22 ? ' long' : ''}"`}>${esc(val)}</b>${em ? `<em>${esc(em)}</em>` : ''}${scaleOf(sc)}</div>`).join('')
    + (vd ? `<div class="verdict ${vd.cls}"><span>${esc(vd.h)}</span>${vd.p ? `<p>${esc(vd.p)}</p>` : ''}${vd.href ? `<a class="pill" href="${vd.href}">${esc(vd.link || 'Open the pathway step')}${svg('chev')}</a>` : ''}</div>` : '')
    + (r.lists ? r.lists.map(L => `<div class="cx-list"><h4>${esc(L.h)}</h4><dl>${L.rows.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl></div>`).join('') : '')
    + (r.gap ? `<p class="cx-gap">${svg('info')}<span><b>Not in the source:</b> ${esc(r.gap)}</span></p>` : '')
    + (r.links ? `<div class="cx-links">${r.links.map(([h, t, ext]) => ext ? `<a class="pill ext" href="${h}" target="_blank" rel="noopener noreferrer">${esc(t)}${svg('ext')}</a>` : `<a class="pill" href="${h}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : '');
}
/* A scale under a result: the bands are the thresholds already given in the note above */
const scaleOf = s => {
  if (!s) return '';
  if (s.rx){ const x = d => (d / 28 * 100).toFixed(2) + '%';
    return `<div class="rxs" aria-hidden="true"><div class="sc-t"><span class="sc-line"></span>${s.rng ? `<s style="--a:${x(s.rng[0])};--b:${x(s.rng[1])}"></s>` : ''}${s.days.map(n => `<i style="--x:${x(n)}">${s.m ? `<small>${s.m}</small>` : ''}</i>`).join('')}</div><div class="sc-t sc-ax">${[...new Set([...s.days, ...(s.rng ? [s.rng[1]] : [])])].map(n => `<em style="--x:${x(n)}">D${n}</em>`).join('')}</div></div>`; }
  if (s.tl){ const x = (Math.max(1, Math.min(10, s.day)) - .5) * 10;
    return `<div class="dtl" aria-hidden="true"><div class="dtl-lg"><span><i class="feb"></i>Febrile phase: usually 2 to 7 days</span><span><i class="crit"></i>Critical phase: usually days 3 to 7, as the fever subsides</span></div><div class="dtl-k"><div class="dtl-t"><s class="feb" style="left:0;width:70%"></s></div><div class="dtl-t"><s class="crit" style="left:20%;width:50%"></s></div><div class="dtl-ax">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(d => `<i${d === s.day ? ' class="on"' : ''}>${d}</i>`).join('')}</div><span class="dtl-pin" style="--x:${x}%"></span></div></div>`; }
  const x = Math.max(0, Math.min(100, (s.v - s.min) / (s.max - s.min) * 100));
  return `<div class="scale" aria-hidden="true"><div class="bar">${s.bands.map(([a, b, c]) => `<s class="${c}" style="flex:${b - a}"></s>`).join('')}</div><span class="pin" style="--x:${x.toFixed(1)}%"></span></div>`;
};
function calcText(){
  const c = CALCS[calcTab], r = calcLast, {v, list} = calcVals(calcTab);
  const ins = list.filter(f => Array.isArray(f) && v[f[0]]).map(f => `${f[1]}: ${f[3] ? (f[3].find(o => o[0] === v[f[0]]) || [, v[f[0]]])[1] : v[f[0]] + (f[2] ? ' ' + f[2] : '')}`);
  list.filter(f => !Array.isArray(f) && (f.type === 'seg' || f.type === 'pick') && v[f.k]).forEach(f => { const o = optsOf(f).find(x => x[0] === v[f.k]); if (o) ins.push(`${f.label}: ${f.type === 'pick' ? o[0] + ' ' + o[1] : o[1]}`); });
  const lines = [c.t, ...ins];
  if (r){ r.outs.forEach(([l, val, , em]) => lines.push(`${l}: ${val}${em ? ' (' + em + ')' : ''}`)); if (r.verdict) lines.push(r.verdict.h + (r.verdict.p ? ' ' + r.verdict.p : '')); if (r.lists) r.lists.forEach(L => { lines.push(L.h + ':'); L.rows.forEach(([a, b]) => lines.push('  ' + a + ': ' + b)); }); if (r.gap) lines.push('Not in the source: ' + r.gap); }
  lines.push('Source: ' + c.src + ' (Green Zone MO Guide). Check against the patient and local protocols.');
  return lines.join('\n');
}
function fieldOf(k){ return calcVals(calcTab).list.find(f => (Array.isArray(f) ? f[0] : f.k) === k); }
function calcRefocus(sel){ if (!sel) return; const el = $('#calcbox ' + sel); if (el) el.focus(); }
$('#calcbox').addEventListener('input', e => { const el = e.target.closest('input[type="number"][data-k], input[type="time"][data-k], input[type="date"][data-k]'); if (!el) return; cPut(calcTab, el.dataset.k, el.value); calcOut(); });
$('#calcbox').addEventListener('change', e => {
  const el = e.target;
  if (el.matches('select[data-k]')){ cPut(calcTab, el.dataset.k, el.value); calcOut(); }
  else if (el.matches('input[type="checkbox"][data-none]')){ const k = el.dataset.none, n = itemsOf(fieldOf(k)).length; cPut(calcTab, k + '_none', el.checked); if (el.checked){ cPut(calcTab, k, Array(n).fill(false)); el.closest('ul').querySelectorAll('input[data-k]').forEach(i => { i.checked = false; }); } calcOut(); }
  else if (el.matches('input[type="checkbox"][data-k]')){ const f = fieldOf(el.dataset.k), n = itemsOf(f).length, a = (cGet(calcTab, el.dataset.k) || Array(n).fill(false)).slice(); a[+el.dataset.i] = el.checked; cPut(calcTab, el.dataset.k, a); if (f.none && el.checked){ cPut(calcTab, el.dataset.k + '_none', false); const nb = el.closest('ul').querySelector('input[data-none]'); if (nb) nb.checked = false; } calcOut(); }
});
$('#calcbox').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.id === 'cxcopy') return copyText(calcText(), {btn:b, el:$('#couts')});
  if (b.id === 'cxsticky') return $('#couts').scrollIntoView({block:'start', behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  if (b.id === 'cxclear'){ delete cState[calcTab]; calcMem.wt = ''; calcMem.age = 'u6'; renderCalc(); return calcRefocus('#cxclear'); }
  const k = b.dataset.k; if (!k) return;
  const f = fieldOf(k);
  if (b.dataset.sv != null){ cPut(calcTab, k, b.dataset.sv); if (f && f.re){ renderCalc(); return calcRefocus(`[data-k="${k}"][data-sv="${b.dataset.sv}"]`); } b.parentNode.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b)); calcOut(); }
  else if (b.dataset.r != null){ const a = (cGet(calcTab, k) || []).slice(); a[+b.dataset.r] = +b.dataset.s; cPut(calcTab, k, a); b.parentNode.querySelectorAll('button').forEach(x => x.setAttribute('aria-checked', x === b)); calcOut(); }
  else if (b.dataset.pv != null){ cPut(calcTab, k, b.dataset.pv); if (f && f.re){ renderCalc(); return calcRefocus(`[data-k="${k}"][data-pv="${b.dataset.pv}"]`); } b.parentNode.querySelectorAll('button').forEach(x => x.setAttribute('aria-checked', x === b)); calcOut(); }
});

/* The hub: group tiles, a find box and every calculator and outside link, grouped */
function renderCalcHub(){
  /* Counts are calculators only, as on the home tile, the sidebar and Shift tools; the outside links are extra rows */
  const n = g => g === 'all' ? Object.keys(CALCS).length : Object.values(CALCS).filter(c => c.g === g).length;
  withTiles($('#cxcats'), [{k:'all', t:'All', j:'t-obsidian', ic:'calc'}, ...CALC_GROUPS].map(g => `<button type="button" class="${g.j}" data-cg="${g.k}" aria-pressed="${cxGroup === g.k}">${tileMedia(g.k === 'all' ? 'calc' : g.k)}${svg(g.ic)}<span>${esc(g.t)}</span><small>${n(g.k)}</small></button>`).join(''));
  withTiles($('#cxlist'), CALC_GROUPS.map(g => {
    const cs = Object.entries(CALCS).filter(([, c]) => c.g === g.k), ls = CALC_LINKS.filter(l => l.g === g.k);
    return `<section class="libsec cxsec ${g.j}" data-g="${g.k}" aria-label="${esc(g.t)}"><h2 class="lh">${tileMedia(g.k)}${svg(g.ic)}<span>${esc(g.t)}</span><small>${cs.length}</small></h2><div class="grid">`
      + cs.map(([id, c]) => `<article class="pc cxc" data-id="${id}" data-kw="${esc([c.t, c.sub, c.src, c.kw, g.t].join(' ').toLowerCase())}"><div class="pc-b"><h3><a href="#calc-${id}">${esc(c.t)}</a></h3><div class="meta"><span class="src">${esc(c.src)}</span></div><p class="ld">${esc(c.sub)}</p></div>${svg('chev', 'go')}</article>`).join('')
      + ls.map(l => `<article class="pc cxl" data-kw="${esc([l.t, l.d, l.site.toLowerCase() + (l.site === 'PEMCalc' ? ' paediatric child' : ' emergency'), g.t].join(' ').toLowerCase())}"><div class="pc-b"><h3><a href="${l.href}" target="_blank" rel="noopener noreferrer">${esc(l.t)}<span class="vh"> (opens ${l.site}, an outside site)</span></a></h3><div class="meta"><span class="ext">${svg('ext')}${l.site}, outside site</span></div><p class="ld">${esc(l.d)} Not from the ebook or a department document: check it against local protocols.</p></div>${svg('ext', 'go')}</article>`).join('')
      + '</div></section>';
  }).join(''));
  applyCxFilter();
  markCxCurrent();
}
function applyCxFilter(){
  const q = cxQ.trim().toLowerCase(); let shown = 0;
  $$('#cxlist .cxsec').forEach(sec => {
    const inG = cxGroup === 'all' || sec.dataset.g === cxGroup; let k = 0;
    sec.querySelectorAll('.pc').forEach(row => { const ok = inG && (!q || q.split(/\s+/).every(w => row.dataset.kw.includes(w))); row.hidden = !ok; if (ok) k++; });
    sec.hidden = !k; shown += k;
  });
  $('#cxempty').hidden = shown > 0;
  $$('#cxcats [data-cg]').forEach(b => b.setAttribute('aria-pressed', b.dataset.cg === cxGroup));
}
function markCxCurrent(){ $$('#cxlist .cxc').forEach(r => { const on = cxOpen && r.dataset.id === calcTab; r.classList.toggle('cur', on); const a = r.querySelector('a'); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }); }
function setCxOpen(on){ cxOpen = on; $('#cx').classList.toggle('open', on); $('#calcbox').hidden = !on; markCxCurrent(); }
$('#cxcats').addEventListener('click', e => { const b = e.target.closest('[data-cg]'); if (!b) return; cxGroup = b.dataset.cg; applyCxFilter(); });
$('#cxq').addEventListener('input', e => { cxQ = e.target.value; applyCxFilter(); });
/* The Shift tools card that leads to the hub */
function renderToolsCalc(){
  withTiles($('#tcx'), `${tileMedia('calc')}<div class="row"><span class="ic">${svg('calc')}</span><h2>Calculators</h2><span class="tag">${Object.keys(CALCS).length}</span></div><p>Doses, scores and checks from the ebook and department notes, each with its source.</p><ul class="gl">${CALC_GROUPS.map(g => `<li><span>${esc(g.t)}</span><b>${Object.values(CALCS).filter(c => c.g === g.k).length}</b></li>`).join('')}</ul><span class="go-l">Open the calculators${svg('chev')}</span>`);
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

/* ================= ED links (10 Nov 2026): the ETD HKL link page, sorted for a shift =================
   From the department's link page (https://sites.google.com/moh.gov.my/etdhkl-linktree), read 10 Nov 2026. The hospital systems are
   on the hospital network only (Krishna asked for them, 10 Nov 2026): they open from a hospital computer, and each has Copy for its
   address. The page's response registers (Google Sheets that may hold patients' details) are left out: open them from the link page. */
const LINKTREE = 'https://sites.google.com/moh.gov.my/etdhkl-linktree';
const GFORM = id => 'https://docs.google.com/forms/d/e/' + id + '/viewform';
const LINKS = [
  {k:'net', h:'Hospital systems', s:'On the hospital network only: open them from a hospital computer. Copy an address to type it in there.', ic:'grid', j:'t-obsidian', items:[
    {t:'HKL-LIMS', d:'Laboratory information system', u:'http://10.44.161.64:5083/login', k:'System'},
    {t:'Bedwatcher', d:'Bed watch', u:'http://10.44.161.147/bedwatchv2/', k:'System'},
    {t:'Pharmacy Information System (PHIS)', d:'', u:'http://10.44.161.30:8080/iphis/login.zul', k:'System'},
    {t:'Doctor2u', d:'', u:'http://10.44.161.189:8090/Account/Login/', k:'System'},
    {t:'Nephrology CKD', d:'', u:'http://10.44.161.201/CKD/', k:'System'},
    {t:'SPRP', d:'', u:'http://10.44.161.159/SPRP/', k:'System'},
    {t:'E-Kehadiran', d:'Attendance', u:'http://10.44.161.91/', k:'System'}]},
  {k:'book', h:'Request and book', s:'Google Forms of the department: they open with your MOH Google account.', ic:'send', j:'t-teal', items:[
    {t:'Permohonan Porter', d:'Request a porter', u:GFORM('1FAIpQLSf2KxiZ8TU0M1yebkOeXgwRrY9AuPzpT2pi9zhUgPb293WqDg'), k:'Form'},
    {t:'Permohonan Ambulans', d:'Request an ambulance', u:GFORM('1FAIpQLSfDHJrOwLhOXgUMO8y0pLvdghcpkz9mxDuuVXzrlxSfEgmOFw'), k:'Form'},
    {t:'Emergency OT Booking', d:'Book an emergency operating theatre slot', u:GFORM('1FAIpQLSdEE5uLKVeRa5cIwictmfhQSTLMvGHBdiCIiAZO-7D8e0tGhw'), k:'Form'},
    {t:'Acute HD Booking', d:'Book acute haemodialysis', u:'https://docs.google.com/forms/d/15bJbrAUJaz6Jhmk1DJPO0f5SuM9MxomTxmepjCsiK00/viewform', k:'Form'}]},
  {k:'report', h:'Report', s:'', ic:'flag', j:'t-garnet', items:[
    {t:'Pelaporan Incident Reporting', d:'Report an incident', u:'https://forms.gle/ttzA1Q3t1WqPTa9y9', k:'Form'},
    {t:'Borang Kerosakan BEMS/FEMS', d:'Report broken medical equipment (BEMS) or facilities (FEMS)', u:GFORM('1FAIpQLScdbB9xkN87_eR_FKXxYlSuUUyEi2wLTfmRNnr5whw3pujdsg'), k:'Form'}]},
  {k:'reg', h:'Registries and audits', s:'', ic:'todo', j:'t-plum', items:[
    {t:'Tranexamic Acid Form', d:'The department\'s tranexamic acid form', u:GFORM('1FAIpQLScZdlHU2QHMHmXkBRfSb6SJxB5qc1yQVSwvzcxCCvmUAyF2Mw'), k:'Form'},
    {t:'Stroke Patient Registry', d:'Register a stroke patient', u:GFORM('1FAIpQLSeupQ_emKdULAM5_a_b9KfUU-s_hhSnjG8xSj6aFOe4K-P-0g'), k:'Form'},
    {t:'Procedural Sedation Anesthesia (PSA) Form', d:'Record a procedural sedation', u:GFORM('1FAIpQLSfY6gmfoQFNhjpRkpXq3VUuIP0tueMK8TDjNUsjauIKyGaqNA'), k:'Form'},
    {t:'COVID-19 Linelisting Form', d:'COVID-19 line listing', u:GFORM('1FAIpQLSefanuVML-CMtYDl4l2G6lRl41ZRagZoDlYE6qxqYE5oy6otw'), k:'Form'}]},
  {k:'dept', h:'The department', s:'', ic:'prot', j:'t-emerald', items:[
    {t:'Laman Web Jabatan Kecemasan dan Trauma', d:'The department\'s website', u:'https://sites.google.com/view/edhkl/home', k:'Site'},
    {t:'Pelan Kebakaran Jabatan', d:'The department\'s fire plan', u:'https://docs.google.com/presentation/d/1lMQxmwXbNylrX6I6XUbZX3KuZ6TVSlhan0ivsiX_eLg/edit?usp=sharing', k:'Slides'},
    {t:'Linktree Bencana ETDHKL', d:'The department\'s disaster links', u:'https://linktr.ee/ibniesan', k:'Links'},
    {t:'Aktiviti hari ini', d:'Today\'s department calendar', u:'https://www.google.com/calendar/embed?src=avedhkl@moh.gov.my', k:'Calendar'},
    {t:'Clinical Pathways and Slides', d:'The department\'s pathways and teaching slides', u:'https://drive.google.com/drive/folders/1G9rbJP1vzSVhs4-TpchtCubXMcVQIc9E?usp=sharing', k:'Folder'},
    {t:'Memo Jabatan', d:'The department\'s list of memos', u:'https://docs.google.com/spreadsheets/d/1ZCxDjxd5fgTGWx6fFNzJBDYvlIgTbdIyB-hIJUxCkA4/edit?usp=drive_link', k:'Sheet'}]},
  {k:'staff', h:'Hospital and staff', s:'', ic:'home', j:'t-sapphire', items:[
    {t:'Laman Web HKL', d:'Hospital Kuala Lumpur', u:'https://hkl.moh.gov.my/', k:'Site'},
    {t:'MyCPD', d:'CPD points', u:'https://www.mycpd2.moh.gov.my/', k:'Site'},
    {t:'HRMIS', d:'Staff records', u:'https://hrmis2.eghrmis.gov.my/HRMISNET/Common/Main/Login.aspx', k:'Site'},
    {t:'SIMKA', d:'', u:'https://simka2.moh.gov.my/result/', k:'Site'},
    {t:'BLESS', d:'', u:'https://www.bless.gov.my/bless/action/login', k:'Site'}]}
];
const LK_IC = {System:'grid', Form:'todo', Site:'home', Slides:'poster', Links:'link', Calendar:'clock', Folder:'path', Sheet:'grid'};
let lkF = 'all';
const lkHost = u => u.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
function renderLinks(){
  const q = ($('#lkq').value || '').trim().toLowerCase();
  $('#lkf').innerHTML = [['all', 'All'], ...LINKS.map(g => [g.k, g.h])].map(([k, t]) => `<button type="button" data-lf="${k}" aria-pressed="${lkF === k}">${esc(t)}</button>`).join('');
  const gs = LINKS.filter(g => lkF === 'all' || g.k === lkF).map(g => ({...g, items:g.items.filter(it => !q || (it.t + ' ' + it.d + ' ' + it.k + ' ' + g.h).toLowerCase().includes(q))})).filter(g => g.items.length);
  $('#lnks').innerHTML = gs.length ? gs.map(g => `<section class="lk-g${g.k === 'net' ? ' net' : ''}"><div class="lk-gh"><span class="ic j ${g.j}">${svg(g.ic)}</span><div><h2>${esc(g.h)}</h2>${g.s ? `<p>${esc(g.s)}</p>` : ''}</div></div>
    <ul class="lk-l">${g.items.map(it => `<li><a class="lk" href="${esc(it.u)}" target="_blank" rel="noopener noreferrer"><span class="lk-i">${svg(LK_IC[it.k] || 'link')}</span><span class="lk-t"><b>${esc(it.t)}</b>${it.d ? `<small>${esc(it.d)}</small>` : ''}${g.k === 'net' ? `<code class="lk-u">${esc(lkHost(it.u))}</code>` : ''}</span><span class="lk-k">${esc(it.k)}</span>${svg('ext')}</a>${g.k === 'net' ? `<button type="button" class="cpy" data-lcopy="${esc(it.u)}" aria-label="Copy the address of ${esc(it.t)}">${svg('copy')}<span class="bl">Copy</span></button>` : ''}</li>`).join('')}</ul></section>`).join('')
    : '<p class="empty">No link matches. Try a form, a system or a folder.</p>';
}
function renderToolsLinks(){
  withTiles($('#tlk'), `${tileMedia('links')}<div class="row"><span class="ic">${svg('link')}</span><h2>ED links</h2><span class="tag">${LINKS.reduce((a, g) => a + g.items.length, 0)}</span></div><p>The department's forms, hospital systems and folders, from the ETD HKL link page.</p><ul class="gl">${LINKS.map(g => `<li><span>${esc(g.h)}</span><b>${g.items.length}</b></li>`).join('')}</ul>`);
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
      <h2>${esc(s.title)}</h2>
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
/* The explainer in English or Bahasa Melayu: each has its own film, cover, chapters, transcript and resume point.
   Each film also has a night version (nsrc, ncover) with the same timings, played when the guide shows night colours. */
const TOUR_LANGS = {
  en:{src:'media/green-zone-explainer-720p.mp4', cover:'media/explainer-poster.webp', nsrc:'media/green-zone-explainer-night-720p.mp4', ncover:'media/explainer-night-poster.webp', ch:CHAPTERS, cap:CAPTIONS, key:'gz-tour-pos',
      h:'The Green Zone <span>in 90 seconds</span>', d:'1 minute 29 seconds, narrated, with captions on screen. Jump to a chapter, or tap a line of the transcript to hear it.', resume:'Resume at '},
  ms:{src:'media/green-zone-explainer-ms-720p.mp4', cover:'media/explainer-ms-poster.webp', nsrc:'media/green-zone-explainer-ms-night-720p.mp4', ncover:'media/explainer-ms-night-poster.webp', ch:CHAPTERS_MS, cap:CAPTIONS_MS, key:'gz-tour-pos-ms',
      h:'Zon Hijau <span>dalam 2 minit</span>', d:'1 minit 35 saat, dengan narasi dan sari kata pada skrin. Pilih satu bab, atau ketik satu baris transkrip untuk mendengarnya.', resume:'Sambung pada '}
};
const film = T => night() ? {src:T.nsrc, cover:T.ncover} : {src:T.src, cover:T.cover};
let tourTheme = () => {};
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
    if (load){ const f = film(T); v.pause(); retried = false; $('#vmsg').hidden = true; v.setAttribute('poster', f.cover); v.src = f.src; v.load(); }
  };
  drawLang(true);
  /* Day or night changed: swap to the matching film, keeping the place and, if it was playing, playing on */
  tourTheme = () => {
    const f = film(TOUR_LANGS[L]); if (v.getAttribute('src') === f.src) return;
    const t = v.currentTime || 0, playing = !v.paused && !v.ended;
    retried = false; $('#vmsg').hidden = true;
    v.setAttribute('poster', f.cover); v.src = f.src; v.load();
    if (t > .5) v.addEventListener('loadedmetadata', () => { try { v.currentTime = t; } catch(e){} }, {once:true});
    if (playing) v.play().catch(() => {});
  };
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
      const r = await fetch(film(TOUR_LANGS[L]).src); if (!r.ok) throw new Error(r.status);
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
      <div class="q-prog"><i style="width:${quiz.i / n * 100}%"></i></div><h2>${esc(q.q)}</h2>
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
  h += `<div class="confirm tile t-champagne"><h2>Still to confirm</h2><ol>${CONFIRM.map(c => `<li>${esc(c)}</li>`).join('')}</ol></div>`;
  $('#drive').innerHTML = h;
}

/* ================= Sources and about ================= */
function renderAbout(){
  const lst = ids => ids.map(id => `<a href="#${id}">${esc(P[id].title)}</a>${P[id].src ? ' · ' + esc(P[id].src) : ''}`);
  const panel = (k, h, p, items) => `<section class="panel"><h2>${h}</h2><p class="src-k">${k}</p><p>${p}</p>${items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}</section>`;
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
let lbFrom = null, lbI = 0;
/* Sheet i, full size or thumbnail, in the colours on screen (night sheets when the guide is dark) */
const sheetSrc = (i, thumb) => `poster/sheet${i}${night() ? '-night' : ''}${thumb ? '-thumb' : ''}.webp`;
function openSheet(i){
  lbFrom = document.activeElement; lbI = i;
  $('#lbimg').src = sheetSrc(i, false);
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
/* Night colours on? An explicit theme on the page wins; with none, the device decides */
const DARKQ = matchMedia('(prefers-color-scheme: dark)');
function night(){ const t = document.documentElement.getAttribute('data-theme'); return t ? t === 'dark' : DARKQ.matches; }
/* After any change of colours: the home switch, the poster sheets and the tour film follow */
function themeChanged(){
  const n = night();
  $('#daynight').setAttribute('aria-checked', n);
  $$('#v-poster [data-sheet] img').forEach(im => { const s = sheetSrc(im.closest('[data-sheet]').dataset.sheet, true); if (im.getAttribute('src') !== s) im.setAttribute('src', s); });
  if (!$('#lb').hidden && lbI) $('#lbimg').src = sheetSrc(lbI, false);
  tourTheme();
}
const prefs = {
  theme: store.get('gz-theme', 'auto'),
  size: store.get('gz-size', 'std'),
  clips: store.get('gz-clips', !REDUCED && matchMedia('(min-width: 761px)').matches ? 'on' : 'off'),
  /* The tile loops move on every device unless motion is reduced or the browser's data saver is on */
  tiles: store.get('gz-tiles', REDUCED || (navigator.connection && navigator.connection.saveData) ? 'off' : 'on')
};
let setFrom = null;
function applyPrefs(){
  const r = document.documentElement;
  if (prefs.theme === 'auto'){ if (HOST_THEME) r.setAttribute('data-theme', HOST_THEME); else r.removeAttribute('data-theme'); }
  else r.setAttribute('data-theme', prefs.theme);
  if (prefs.size === 'large') r.setAttribute('data-size', 'large'); else r.removeAttribute('data-size');
  themeChanged();
}
function syncSettings(){
  [['#st-theme', prefs.theme], ['#st-size', prefs.size], ['#st-clips', prefs.clips], ['#st-tiles', prefs.tiles]].forEach(([sel, v]) => $$(sel + ' button').forEach(b => b.setAttribute('aria-pressed', b.dataset.val === v)));
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
  stopReader(); pauseFilms();
  const h = decodeURIComponent(location.hash.slice(1));
  let m, changed = false;
  closePal(false); closeSettings(false); closeSheet(); closeMap(false);
  if (P[h]) showPath(h);
  else if ((m = h.match(/^([\w-]+?)--(\w+)$/)) && P[m[1]] && P[m[1]].nodes[m[2]]) showPath(m[1], m[2]);
  else if (h === 'pathways' || h === 'saved' || h === 'guidelines'){ const f = {saved:'saved', guidelines:'cpg'}[h]; if (f && libF !== f){ libF = f; renderLib(); } changed = showView('pathways'); }
  else if (['rules', 'tools', 'numbers', 'links', 'new', 'poster', 'about'].includes(h)) changed = showView(h);
  else if ((m = h.match(/^calc(?:-([a-z0-9]+))?$/))){
    const id = m[1] && CALCS[m[1]] ? m[1] : null;
    if (id && id !== calcTab){ calcTab = id; renderCalc(); }
    setCxOpen(!!id);
    changed = showView('calc');
    if (id) $('#calcbox').scrollIntoView({block:'start'});
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
$('#cnt-calc').textContent = Object.keys(CALCS).length;
if (store.get('gz-seen', 0) >= 7){ const d = $('#snav .dotn'); if (d) d.hidden = true; }
renderHome(); renderSideSaved(); renderLib(); renderRules(); renderDcheck(); renderCalcHub(); renderCalc(); renderToolsCalc(); renderNums(); renderLinks(); renderToolsLinks();
withTiles($('#lkhero'), `${tileMedia('links')}<span class="lbl">The ETD HKL link page</span><h2>Open the original${svg('ext')}</h2><p>Every link on it, the response registers too, with your MOH account.</p>`);
$('#tl-keyn .tl').textContent = 'All ' + NUMS.length;
/* the links are found by search, each opening the ED links page */
IDX.push({href:'#links', title:'ED links', kind:'Tool', meta:'Forms, hospital systems and folders', body:'linktree ETD HKL link page forms hospital systems intranet folders ' + LINKS.flatMap(g => g.items.map(it => it.t + ' ' + it.d)).join(' · '), ic:'link', c:'c-flow'});
LINKS.forEach(g => g.items.forEach(it => IDX.push({href:'#links', title:it.t, kind:'Link', meta:'ED links · ' + g.h, body:[it.d, it.k, g.h].join(' · '), ic:'link', c:'c-flow'})));
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
  /* Advice is copied for the patient: page references stay on screen but not in the copied text */
  else if (b.hasAttribute('data-copyadvice')) copyText(p.advice.map((a, i) => (i + 1) + '. ' + a.replace(/\s*\([^()]*\bp\s?(?:\d|[ivxl]+\b)[^()]*\)/g, '')).join('\n'), {btn:b, el:$('#advlist')});
  else if (b.hasAttribute('data-copyleaf')) copyText(leafletText(p), {btn:b, el:$('#leaf')});
  else if (b.dataset.leaf){ stopReader(); leafLang = b.dataset.leaf; $('#tp-leaflet').innerHTML = leafletHTML(p); const nb = $(`#tp-leaflet [data-leaf="${leafLang}"]`); if (nb) nb.focus(); }
  else if (b.hasAttribute('data-showadvice')){ selectTab(p.leaflet ? 'leaflet' : 'advice'); $('#ptab').scrollIntoView({block:'start', behavior: REDUCED ? 'auto' : 'smooth'}); }
  else if (b.dataset.pt !== undefined) selectTab(b.dataset.pt);
  else if (b.dataset.cbb) cbPick(b);
  else if (b.hasAttribute('data-wbct')) wbctStart();
  /* a figure's number: if the clipboard is blocked, the number itself is selected to copy by hand */
  else if (b.dataset.cpy) copyText(b.dataset.cpy, {btn:b, el:b.parentElement.querySelector('.cbn-v, .cc-n'), ok:'Copied'});
});
$('#run').addEventListener('keydown', e => {
  const b = e.target.closest && e.target.closest('[role="tab"]'); if (!b) return;
  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
  const tabs = $$('#ptab [role="tab"]'), i = tabs.indexOf(b);
  const j = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  e.preventDefault(); selectTab(tabs[j].dataset.pt, true);
});

/* Tools and numbers */
$('#nums').addEventListener('click', e => { const b = e.target.closest('button[data-copy]'); if (b){ const i = +b.dataset.copy; copyText(NUMS[i].copy, {btn:b, el:$('#nv' + i)}); } });
$('#lkq').addEventListener('input', renderLinks);
$('#lkf').addEventListener('click', e => { const b = e.target.closest('[data-lf]'); if (b){ lkF = b.dataset.lf; renderLinks(); const nb = $(`#lkf [data-lf="${lkF}"]`); if (nb) nb.focus(); } });
$('#lnks').addEventListener('click', e => { const b = e.target.closest('[data-lcopy]'); if (b) copyText(b.dataset.lcopy, {btn:b, el:b.closest('li').querySelector('.lk-u'), ok:'Copied'}); });

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

/* Day and night: the home switch sets the theme the same way as Settings; Auto there follows the device again */
$('#daynight').addEventListener('click', () => {
  prefs.theme = night() ? 'light' : 'dark'; store.set('gz-theme', prefs.theme); applyPrefs();
});
const onDeviceTheme = () => { if (prefs.theme === 'auto' && !HOST_THEME) themeChanged(); };
try { DARKQ.addEventListener('change', onDeviceTheme); } catch(e){ try { DARKQ.addListener(onDeviceTheme); } catch(e2){} }

/* Settings */
$('#settings').addEventListener('click', e => {
  if (e.target.id === 'settings'){ closeSettings(true); return; }
  const b = e.target.closest('button'); if (!b) return;
  const grp = b.closest('.seg');
  if (grp && b.dataset.val){
    const key = {'st-theme':'theme', 'st-size':'size', 'st-clips':'clips', 'st-tiles':'tiles'}[grp.id];
    prefs[key] = b.dataset.val; store.set('gz-' + key, b.dataset.val); applyPrefs(); syncSettings();
    if (key === 'clips') setJourneyClip(prefs.clips === 'on');
    if (key === 'tiles') tileClips();
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
