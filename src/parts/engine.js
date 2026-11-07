
/* ================= Green Zone MO Guide, version 7: the engine =================
   One page, one view at a time, routed on the hash:
   #home, #pathways, #saved, #rules, #tools, #calc(-dengue|-kids|-weight), #numbers,
   #journey(-1..5), #tour (#video), #quiz, #new, #poster, #about, #search,
   #<entry> and #<entry>--<node> for any step of any pathway or rule.
   Saved, recent, quiz best, tour position and settings stay in this browser only. */

const APP_URL = 'https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9';

/* ================= Content: journey, rules, numbers, tour, quiz, Drive run-through ================= */
const JOURNEY = [
  {short:'Triage', sub:'MTS 4 or 5', img:'img/gz-02-triage.webp', clip:'clips/stop1-triage.mp4', audio:'audio/stop1.mp3',
   say:'Patients move one way. Triage, then secondary triage, then ECG, irrigation or dressing if needed, and on to you.',
   alt:'Illustration: a triage nurse takes a seated patient\'s blood pressure at the Green Zone counter',
   who:'Triage', title:'Triage, then secondary triage',
   items:['Triage gives the patient MTS level 4 or 5, which brings them to the Green Zone','Then secondary triage','Then ECG, wound irrigation or dressing, only if needed','Patients move one way, and next they come to you'],
   links:[['#gz-rules--oneway','No repeat tests after secondary triage'],['#gz-rules--down','Down-triage: the MO only'],['#gz-rules--dengue','Dengue from a KK: straight to OW?'],['#asthma-zone','Asthma: the 5000 queue'],['#children--pat','Children: ETD or PEDWCH']]},
  {short:'You, the MO', sub:'Consultation', img:'img/gz-03-consult.webp', clip:'clips/stop2-consult.mp4', audio:'audio/stop2.mp3', mo:true,
   say:'You fill in the green slip. For the diagnosis, open its pathway.',
   alt:'Illustration: a medical officer writes notes while a patient sits across the desk in the consultation room',
   who:'You, the MO', title:'Consultation room',
   items:['See the patient and open the ebook pathway for the diagnosis','Fill in the green treatment slip (slip hijau) and attach the queue number','Ask the patient to put the slip in the Red Box and wait in the waiting tent','If an X-ray is needed, send the patient to the X-ray counter'],
   note:{href:'#gz-rules--wait', k:'Never waits outside', t:'The elderly, NSTEMI or ACS, and anyone who needs stat medication and monitoring: bring them inside.'},
   links:[['#pathways','Open a pathway'],['#oscc--dv','Domestic violence missed at triage']]},
  {short:'Treatment room', sub:'PPP', img:'img/gz-04-treatment.webp', clip:'clips/stop3-treatment.mp4', audio:'audio/stop3.mp3',
   say:'The treatment room calls the queue number, carries out each order, and documents it.',
   alt:'Illustration: a nurse prepares a drip beside a patient resting in a treatment chair',
   who:'PPP, treatment room', title:'Treatment room (PPP)',
   items:['Takes the slip from the Red Box and calls the queue number','Carries out each procedure you ordered, and documents each one','Tells the patient the next step of the plan'],
   links:[['#blood-tests--gxm','GXM sample: label at the bedside']]},
  {short:'CCA', sub:'Only if needed', img:'img/gz-05-cca.webp', clip:'clips/stop4-cca.mp4', audio:'audio/stop4.mp3', optional:true,
   say:'Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside.',
   alt:'Illustration: patients seated in rows of chairs in the Chair Centric Area while a nurse checks a monitor',
   who:'Only if results are pending, or for observation or referral', title:'CCA, the Chair Centric Area',
   items:['PPP escorts the patient to the CCA and hands over to Yellow Zone Extension staff','Staff seat the patient, write the details on the whiteboard, record vital signs on the slip and monitor','When observation ends they send the patient back to the doctor\'s room, and the slip returns to the Green Zone MO','You stay responsible for the patient you sent, and the BHT goes with them'],
   links:[['#gz-rules--wait','Where to seat patients who cannot wait outside'],['#gz-rules--ivab','IV antibiotics on a CCA chair'],['#yellow-zone','Uptriage: the Yellow Zone flow']]},
  {short:'Review and finish', sub:'Back to you', img:'img/gz-06-review.webp', clip:'clips/stop5-review.mp4', audio:'audio/stop5.mp3', mo:true,
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

const ACTS = [
  {href:'#pathways', t:'Pathways', s:'23 ebook pathways, 15 rules and protocols', ic:'path', c:'c-flow'},
  {href:'#rules', t:'Green Zone rules', s:'Who never waits, reassess, call the EP', ic:'rule', c:'c-heart'},
  {href:'#tools', t:'Discharge check', s:'Before the patient goes home', ic:'check', c:'c-meta'},
  {href:'#calc', t:'Quick sums', s:'Shock index, child doses, adjusted weight', ic:'calc', c:'c-breath'},
  {href:'#numbers', t:'Numbers', s:'Code Blue, Code Stroke, MAU, EMACC, IPR', ic:'phone', c:'c-abdo'},
  {href:'#journey', t:'New here?', s:'The journey, a 1-minute tour, a quiz', ic:'play', c:'c-infect'}
];
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
const CHAPTERS = [[0,'New to the Green Zone?'],[8.0,'Patients move one way'],[16.9,'The green slip and the treatment room'],[25.4,'Open the pathway'],[35.7,'Waiting for results: the CCA'],[45.0,'Before discharge'],[55.0,'When to call the EP']];
const CAPTIONS = [[0.6,"New to the Green Zone?"],[2.52,"Here is how a patient moves through it,"],[4.88,"and what you decide at each step."],[8.2,"Patients move one way."],[9.85,"Triage, then secondary triage,"],[11.9,"then ECG, irrigation"],[14.01,"or dressing if needed,"],[15.26,"and on to you."],[17.1,"You fill in the green slip."],[19.41,"The treatment room"],[20.28,"calls the queue number,"],[22.16,"carries out each order,"],[24.05,"and documents it."],[25.7,"For the diagnosis, open its pathway."],[28.73,"23 ebook pathways,"],[30.64,"one question at a time,"],[32.33,"ending in the outcome box."],[36.0,"Waiting for results?"],[37.57,"Send the patient to the CCA."],[39.66,"The elderly, ACS,"],[41.51,"or anyone needing stat drugs"],[43.31,"never waits outside."],[45.3,"Before discharge,"],[46.38,"reassess and review every result."],[48.64,"After a CT brain,"],[50.1,"ask the EP to review,"],[51.97,"and book EMACC or EMWATCH follow-up."],[55.3,"Unsure, or the disposition is stuck?"],[58.1,"Call the EP in charge."],[59.81,"Right patient."],[60.78,"Right zone."],[61.57,"Right time."]];

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
  {q:'Who may down-triage a Green Zone patient?', o:['Only the MO, after examining the patient, documented on the triage form','The triage nurse, whenever the Green Zone queue is long','The PPP in the treatment room, after the vital signs','Any staff member, as long as the patient agrees to wait'], a:0,
   why:'Down-triage is not allowed unless the MO has examined the patient first. The MO documents it on the triage form, and the PPP checks that it was documented (memo, 4 Oct 2022).', href:'#gz-rules--down'},
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
  ['Down-triage memo, 4 Oct 2022','Only the MO may down-triage, after examining the patient, and documents it on the triage form.',[['#gz-rules--down','Down-triage']]],
  ['IV antibiotic memo, 30 Jun 2026','No bed free in Yellow Obs, ISO or YZ Ext: IV antibiotics on a CCA chair, with one of four antibiotics only.',[['#gz-rules--ivab','IV antibiotics, no bed']]],
  ['KKM MTS announcement, Jul 2026','The EP may decide the admission within 4 hours if the primary team is delayed; non-emergency cases can be redirected to a Klinik Kesihatan or private GP.',[['#gz-rules--ep4','Primary team delayed'],['#gz-rules--kk','Redirect to a KK or GP']]],
  ['Orthopaedic referral memo, 17 May 2024','The Lampiran 1 urgent criteria, on-call or clinic referral, CMR within 2 hours, duplicate notes and the referral register.',[['#referral-rules--ortho','Orthopaedic referral']]],
  ['IPR admission criteria','Who can be transferred to IPR, the exclusions and the specialist on-call line.',[['#referral-rules--ipr','Transfer to IPR'],['#numbers','Numbers']]]
];
const NEW7 = [['#gz-rules--oneway','One-way flow: no repeat tests'],['#gz-rules--down','Down-triage is for the MO only'],['#gz-rules--ivab','IV antibiotics when no bed is free'],['#gz-rules--ep4','When the primary team is delayed'],['#gz-rules--kk','Redirect to a KK or private GP'],['#referral-rules--ortho','Orthopaedic referral: on call or clinic'],['#referral-rules--ipr','Transfer to IPR (respiratory)']];
const CONFIRM = [
  'How to book EM Watch: the training deck shows the recruitment step only as a picture.',
  'The procedure for patients redirected to a Klinik Kesihatan or private GP.',
  'Whether the EMACC SOP of 1 Feb 2018 (ext 7040, Monday to Friday 9 am to 4 pm) is still current.',
  'Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents), the SCAN team line and the IPR on-call line.',
  'The MERS-CoV case definition, which is not in the PUI file.',
  'A readable copy of the Malaysian snakebite guideline.'
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
  step:'<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5 14 12l-3.5 3.5"/>'
};
const svg = (k, cls = '', fill = false) => `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[k] || ''}</svg>`;
/* The mark: the green floor line, leading from the door to care */
const LOGO = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" style="stroke:var(--bright)" stroke-width="2.5" stroke-linecap="round"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" style="stroke:var(--on-deep)" stroke-width="2.5" stroke-linecap="round"/><circle cx="5" cy="18.5" r="2.3" style="fill:var(--on-deep)"/></svg>';
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
  {k:'heart', t:'Heart and vessels', s:'Heart', ic:'heart', c:'c-heart', ids:['acs','heart-failure','hypertensive-urgency','svt','syncope','dvt']},
  {k:'breath', t:'Breathing and allergy', s:'Breathing', ic:'lungs', c:'c-breath', ids:['asthma','pneumonia','anaphylaxis']},
  {k:'brain', t:'Brain and behaviour', s:'Brain', ic:'brain', c:'c-brain', ids:['stroke-tia','mild-tbi','behavioural-disturbance']},
  {k:'abdo', t:'Abdomen, kidney and scrotum', s:'Abdomen', ic:'abdomen', c:'c-abdo', ids:['abdominal-pain','gastroenteritis','biliary','renal-colic','scrotal-pain']},
  {k:'infect', t:'Infection and skin', s:'Infection', ic:'virus', c:'c-infect', ids:['dengue','cellulitis']},
  {k:'meta', t:'Sugar, poisoning and pain', s:'Sugar and pain', ic:'droplet', c:'c-meta', ids:['hyperglycaemia','hypoglycaemia','paracetamol-overdose','pain']},
  {k:'flow', t:'Green Zone flow and referrals', s:'Flow and referrals', ic:'route', c:'c-flow', ids:FLOW_IDS},
  {k:'prot', t:'Department protocols', s:'Protocols', ic:'prot', c:'c-prot', ids:PROT_IDS}
];
const CAT_OF = {};
CATS.forEach(c => { c.ids = c.ids.filter(id => P[id]); c.ids.forEach(id => { CAT_OF[id] = c; }); });
/* Anything not placed in a group still shows, under Other pathways */
(function(){
  const other = Object.keys(P).filter(id => !CAT_OF[id]);
  if (!other.length) return;
  const c = {k:'other', t:'Other pathways', s:'Other', ic:'path', c:'c-flow', ids:other};
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
  IDX.push({href:'#' + id, title:p.title, kind:kindOf(p), meta:metaOf(p), body:pathWords(p).join(' · '), ic:c.ic, c:c.c});
  const m = p.nodes[p.start];
  if (p.grp === 'rules' && m.opts && m.opts.length > 2) m.opts.forEach(([label, to]) => {
    IDX.push({href:`#${id}--${to}`, title:label, kind:kindOf(p), meta:p.title, body:nodeWords(p.nodes[to]).join(' · '), ic:c.ic, c:c.c});
  });
}
JOURNEY.forEach((s, i) => IDX.push({href:'#journey-' + (i + 1), title:`Journey stop ${i + 1}: ${s.title}`, kind:'Journey', meta:'Patient flow', body:[s.who, ...s.items, s.note ? s.note.t : ''].join(' · '), ic:'route', c:'c-flow'}));
NUMS.forEach(n => IDX.push({href:'#numbers', title:`${n.lbl}: ${n.val}`, kind:'Number', meta:n.src, body:n.note, ic:'phone', c:'c-abdo'}));
IDX.push({href:'#tools', title:'Discharge safety check', kind:'Tool', meta:'Shift tools', body:[...DC_ALL.flat(), ...DC_STOP.map(s => s[0] + ' ' + s[1])].join(' · '), ic:'check', c:'c-meta'});
IDX.push({href:'#calc-dengue', title:'Shock index and pulse pressure check', kind:'Tool', meta:'Dengue SOP 2.0', body:'Shock index HR divided by SBP; pulse pressure; heart rate; dengue discharge criteria; shock', ic:'calc', c:'c-breath'});
IDX.push({href:'#calc-kids', title:'Children\'s weight-based doses', kind:'Tool', meta:'Department posters', body:'Prednisolone 1 mg/kg; salbutamol MDI puffs; ipratropium; dexamethasone croup; nebulised adrenaline; ORS 10 ml/kg; moderate dehydration 75 ml/kg; paediatric dose calculator weight', ic:'calc', c:'c-breath'});
IDX.push({href:'#calc-weight', title:'Adjusted body weight for obese patients', kind:'Tool', meta:'Ebook p31–32', body:'BMI over 27.5; ideal body weight; adjusted body weight; dengue fluid; obese', ic:'calc', c:'c-breath'});
IDX.push({href:'#tour', title:'Tour: the Green Zone in one minute', kind:'Video', meta:'Explainer', body:CAPTIONS.map(c => c[1]).join(' '), ic:'play', c:'c-infect'});
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
  return `<li><a href="#${id}"><span class="ic ${c.c}">${svg(c.ic)}</span><span class="rt"><b>${esc(p.title)}</b><small>${tag} · ${esc(metaOf(p))}</small></span>${tag === 'Saved' ? svg('star', 'star', true) : svg('chev', 'chev')}</a></li>`;
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
const ent = id => { const c = catOf(id); return {href:'#' + id, title:P[id].title, kind:kindOf(P[id]), meta:metaOf(P[id]), ic:c.ic, c:c.c}; };
function palEntry(e, ts, loose){
  return `<li><a href="${e.href}" role="option" aria-selected="false"><span class="ic ${e.c}">${svg(e.ic)}</span><span class="rx"><span class="rt"><span>${ts ? highlight(e.title, ts, loose) : esc(e.title)}</span><span class="rk">${esc(e.kind)} · ${esc(e.meta)}</span></span>${ts ? `<span class="rs">${snippet(e.body, ts, loose)}</span>` : ''}</span></a></li>`;
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
const VIEW_TITLE = {home:'', pathways:'Pathways', rules:'Rules and protocols', tools:'Shift tools', numbers:'Numbers', learn:'Learn the Green Zone', new:'What\'s new', poster:'Wall poster', about:'Sources and about'};
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
  setTopTitle({journey:'Patient journey', tour:'One-minute tour', quiz:'Quick check'}[sub] || 'Learn');
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
function renderTip(){
  const t = TIPS[tipI];
  $('#tip').innerHTML = `<p>${esc(t.t)}</p><div class="row"><a class="pill" href="${t.href}">${esc(t.l)}${svg('chev')}</a><button type="button" class="sm ghost" data-tipnext>Next pearl</button></div>`;
}
function ruleCards(){
  return RULES.map(r => `<article class="rule" style="--c:var(--${r.c})"><span class="k">${esc(r.k)}</span><h3>${esc(r.h)}</h3>${r.chips ? `<div class="chips">${r.chips.map(c => `<span>${esc(c)}</span>`).join('')}</div>` : ''}<ul>${r.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul><div class="links">${r.links.map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}${svg('chev')}</a>`).join('')}</div></article>`).join('');
}
function renderHome(){
  const d = new Date(), hr = d.getHours();
  const g = hr >= 5 && hr < 12 ? 'Good morning' : hr >= 12 && hr < 17 ? 'Good afternoon' : hr >= 17 && hr < 21 ? 'Good evening' : 'Night shift';
  let day = ''; try { day = d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'}); } catch(e){}
  $('#greet').textContent = g + (day ? ' · ' + day : '');
  $('#quick').innerHTML = POPULAR.map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join('');
  $('#acts').innerHTML = ACTS.map(a => `<a class="act ${a.c}" href="${a.href}"><span class="ic">${svg(a.ic)}</span><b>${esc(a.t)}</b><small>${esc(a.s)}</small>${svg('chev', 'go')}</a>`).join('');
  renderMine();
  $('#rulecards').innerHTML = ruleCards();
  $('#keynums').innerHTML = KEY_NUMS.map(i => { const n = NUMS[i]; return `<div class="qnum${n.hot ? ' hot' : ''}"><div class="rt"><span>${esc(n.lbl)}</span><b id="kn${i}">${esc(n.val)}</b></div>${n.copy ? `<button type="button" class="sm" data-kcopy="${i}">${svg('copy')}<span class="bl">Copy</span></button>` : ''}</div>`; }).join('');
  renderTip();
  $('#newcard').innerHTML = `<p>Seven entries from six documents in the triage course folder, each with its source and date.</p><ul>${NEW7.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul><a class="pill" href="#new">Everything added from the drives${svg('chev')}</a>`;
  $('#jstrip').innerHTML = JOURNEY.map((s, i) => `<a href="#journey-${i + 1}" class="${s.optional ? 'maybe' : ''}"><span class="n">${i + 1}</span><b>${esc(s.short)}</b><small>${esc(s.sub)}</small></a>`).join('');
}

/* Hero clip: wide screens only (the picture is hidden on phones), and only while it is on screen */
const heroMQ = matchMedia('(min-width: 981px)');
let heroV = null, heroOn = false, heroVisible = false;
function heroSet(on){
  heroOn = on;
  const btn = $('#heroplay');
  if (!heroMQ.matches){ btn.hidden = true; if (heroV) heroV.pause(); return; }
  if (on && !heroV){
    const img = $('#heroimg');
    heroV = document.createElement('video');
    Object.assign(heroV, {muted:true, loop:true, playsInline:true, poster:'img/gz-01-hero.webp', src:'clips/hero-loop.mp4'});
    heroV.setAttribute('muted', ''); heroV.setAttribute('playsinline', ''); heroV.setAttribute('aria-hidden', 'true');
    heroV.width = 1376; heroV.height = 768;
    const alt = document.createElement('span'); alt.className = 'vh'; alt.textContent = img.alt;
    img.replaceWith(heroV); heroV.after(alt);
  }
  if (heroV){ if (on && heroVisible) heroV.play().catch(() => {}); else heroV.pause(); }
  btn.hidden = false;
  btn.innerHTML = svg(on ? 'pause' : 'play') + (on ? 'Pause' : 'Play');
  btn.setAttribute('aria-label', on ? 'Pause the background clip' : 'Play the background clip');
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
  return `<article class="pc"><span class="ic ${c.c}">${svg(c.ic)}</span><div class="pc-b"><h3><a href="#${id}">${esc(p.title)}</a></h3><div class="meta"><span>${esc(metaOf(p))}</span>${badgeOf(p)}</div>${p.lead ? `<p class="ld">${esc(p.lead)}</p>` : ''}<div class="outs-dots">${outsOf(p).map(k => `<span class="od ${k}">${OUT_LBL[k]}</span>`).join('')}</div></div><button type="button" class="pc-st" data-star="${id}" aria-pressed="${on}" aria-label="${(on ? 'Remove from saved: ' : 'Save: ') + esc(p.title)}">${svg('star', '', on)}</button></article>`;
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
  $('#libcats').innerHTML = `<button type="button" data-cat="all" aria-pressed="${libCat === 'all'}">All topics</button>` + cats.map(c => `<button type="button" data-cat="${c.k}" aria-pressed="${libCat === c.k}"><span class="ic ${c.c}">${svg(c.ic)}</span>${esc(c.s)}</button>`).join('');
  const shown = CATS.filter(c => libCat === 'all' || c.k === libCat).map(c => [c, c.ids.filter(id => ids.includes(id)).sort(byTitle)]).filter(([, l]) => l.length);
  let h;
  if (shown.length) h = shown.map(([c, l]) => `<section class="libsec" aria-label="${esc(c.t)}"><h2><span class="ic ${c.c}">${svg(c.ic)}</span>${esc(c.t)} <small>${l.length}</small></h2><div class="grid">${l.map(pcard).join('')}</div></section>`).join('');
  else if (libF === 'saved' && !s.length) h = '<div class="empty">Nothing saved yet. Tap the star on any pathway to keep it here, on the home page and in the menu.</div>';
  else h = `<div class="empty">No pathway matches “${esc(q)}”. The search also covers rules, numbers, doses and the tour. <button type="button" class="sm" data-find>Search everything</button></div>`;
  $('#libgrid').innerHTML = h;
}

/* ================= Rules and protocols ================= */
function renderRules(){
  $('#rulecards2').innerHTML = ruleCards();
  const rl = id => { const p = P[id], c = catOf(id); return `<article class="rl"><span class="ic ${c.c}">${svg(c.ic)}</span><div><h3><a href="#${id}">${esc(p.title)}</a></h3>${p.lead ? `<p>${esc(p.lead)}</p>` : ''}<div class="meta"><span>${esc(p.src || '')}</span>${badgeOf(p)}</div></div></article>`; };
  $('#rl-flow').innerHTML = FLOW_IDS.map(rl).join('');
  $('#rl-prot').innerHTML = PROT_IDS.map(rl).join('');
  $('#morerules').innerHTML = MORE_RULES.map(([h, t]) => `<a class="pill" href="${h}">${esc(t)}</a>`).join('');
}

/* ================= Pathway runner ================= */
let state = {id:null, trail:[], cur:null}, ptabSel = null;

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
  draw(false);
  $('#v-run').setAttribute('aria-label', P[id].title);
  setTopTitle(P[id].title);
  markNav();
  if (routed) $('#run-title').focus({preventScroll:true});
}
function go(label, to){ state.trail.push({node:state.cur, label}); state.cur = to; draw(true); }
function backTo(i){ state.cur = state.trail[i].node; state.trail = state.trail.slice(0, i); draw(true); }
function restart(){ state.trail = []; state.cur = P[state.id].start; draw(true); }

function draw(focus){
  const p = P[state.id], n = p.nodes[state.cur], c = catOf(state.id), saved = isSaved(state.id), steps = state.trail.length;
  const pct = n.end ? 100 : Math.min(88, 14 + steps * 16);
  const isRule = p.grp === 'rules';
  const nowText = n.end ? kindLabel(p, n.end) + ': ' + n.title : nodeText(n);
  $('#run').innerHTML = `<div class="run-h">
      <div class="run-top"><a class="back" href="${isRule ? '#rules' : '#pathways'}">${svg('back')}${isRule ? 'Rules and protocols' : 'All pathways'}</a>
        <div class="run-acts">
          <button type="button" class="ib" data-save aria-pressed="${saved}" aria-label="${saved ? 'Saved. Tap to remove from your list' : 'Save to your list'}" title="${saved ? 'Saved' : 'Save'}">${svg('star', '', saved)}</button>
          <button type="button" class="ib" data-link aria-label="Copy a link to this step" title="Copy link">${svg('link')}</button>
          <button type="button" class="ib" data-restart aria-label="Start again" title="Start again"${steps ? '' : ' disabled'}>${svg('restart')}</button>
        </div></div>
      <div class="run-cat"><span class="ic ${c.c}">${svg(c.ic)}</span><span>${esc(c.t)} · ${esc(metaOf(p))}</span>${badgeOf(p)}</div>
      <h1 id="run-title" tabindex="-1">${esc(p.title)}</h1>
      ${p.lead ? `<p class="lead">${esc(p.lead)}</p>` : ''}
      ${p.see ? `<div class="see"><span>See also</span>${p.see.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}</a>`).join('')}</div>` : ''}
    </div>
    <div class="run-grid">
      <aside class="rail-p" aria-label="Your answers so far">
        <div class="kicker"><span>Your path</span><span>${n.end ? 'Outcome' : 'Step ' + (steps + 1)}</span></div>
        <ol class="rp">${state.trail.map((t, i) => `<li class="done${i === 0 ? ' start' : ''}"><button type="button" data-back="${i}"><span class="q">${esc(nodeText(p.nodes[t.node]))}</span><span class="a"><span class="vh">You answered: </span>${esc(t.label)}</span></button></li>`).join('')}<li class="now${steps ? '' : ' start'}${n.end ? ' end-k' : ''}" aria-current="step"><span class="q">${esc(nowText)}</span></li></ol>
        <div class="foot"><span>Tap an earlier answer to change it.</span><span>Keyboard: 1–9 to answer, Backspace to step back.</span></div>
      </aside>
      <div>
        ${steps ? `<div class="trailx" role="group" aria-label="Your answers so far"><span class="tlbl">Path</span>${state.trail.map((t, i) => `${i ? '<i aria-hidden="true"></i>' : ''}<button type="button" data-back="${i}" title="${esc(nodeText(p.nodes[t.node]))}"><span><span class="vh">Change: </span>${esc(t.label)}</span></button>`).join('')}</div>` : ''}
        <div class="progress" aria-hidden="true"><span>${n.end ? `Outcome after ${steps} step${steps === 1 ? '' : 's'}` : 'Step ' + (steps + 1)}</span><i style="--p:${pct}%"></i></div>
        <div id="cur" tabindex="-1" class="cur-in">${card(n, p)}</div>
        ${refTabs(p)}
      </div>
    </div>`;
  if (n.check) wireChecks(n);
  if (focus){
    const cur = $('#cur'); cur.focus({preventScroll:true});
    const chips = $('#run .trailx'), target = chips && chips.offsetParent !== null ? chips : cur;
    const r = target.getBoundingClientRect(), topClear = innerWidth >= 1100 ? 16 : 76;
    if (r.top < topClear || r.top > innerHeight * .6) target.scrollIntoView({block:'start', behavior: REDUCED ? 'auto' : 'smooth'});
  }
}

function card(n, p){
  const list = (items, cls) => items && items.length ? `<ul${cls ? ` class="${cls}"` : ''}>` + items.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  if (n.end){
    const ic = n.end === 'neutral' && p.grp === 'rules' ? 'rule' : OUT_IC[n.end];
    return `<article class="res ${n.end}"><div class="res-h"><span class="ic">${svg(ic)}</span><div><div class="res-k">${kindLabel(p, n.end)}</div><h2>${esc(n.title)}</h2></div></div>
      ${(n.items && n.items.length) || n.links || n.gap ? `<div class="res-b">${list(n.items, 'ticks')}
        ${n.links ? `<div class="links">${n.links.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : ''}
        ${n.gap ? `<div class="gap">${svg('info')}<span>${esc(n.gap)}</span></div>` : ''}</div>` : ''}
      <div class="res-f"><button type="button" class="ghost" data-restart>${svg('restart')}Start again</button><span class="grow"></span><button type="button" data-copyout>${svg('copy')}<span class="bl">Copy outcome</span></button>${p.advice && n.end === 'discharge' ? '<button type="button" class="primary" data-showadvice>Discharge advice</button>' : ''}</div></article>`;
  }
  if (n.step){
    return `<div class="qc step"><div class="qk"><i></i><span class="kicker">${n.kind === 'observe' ? 'Observation' : 'Do this'}</span></div><h2>${esc(n.step)}</h2>${list(n.items)}
      <div class="opts"><button type="button" class="opt sugg" data-next><kbd>1</kbd><span>Done, continue</span>${svg('chev', 'gt')}</button></div></div>`;
  }
  const sc = n.check === 'score';
  const pts = v => v > 0 ? '+' + v : '−' + Math.abs(v);
  const checks = n.check ? `<p class="hint">${sc ? 'Tick each item that applies. The score adds up as you go.' : n.check === 'all' ? 'Tick each criterion that is met. All must be met.' : 'Tick any that are present.'}</p><ul class="checks">` +
    n.items.map((i, k) => `<li><label><input type="checkbox" id="c${k}"><span>${sc ? esc(i[0]) + ` <b class="pts">(${pts(i[1])})</b>` : esc(i)}</span></label></li>`).join('') + '</ul>' + (sc ? '<p class="score">Score <b id="scv">0</b></p>' : '') : '';
  const info = n.info ? '<ul class="info">' + n.info.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  return `<div class="qc"><div class="qk"><i></i><span class="kicker">Decide</span></div><h2>${esc(n.q)}</h2>
    ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}${info}${checks}
    <div class="opts">${n.opts.map(([l], k) => `<button type="button" class="opt" data-go="${k}">${k < 9 ? `<kbd>${k + 1}</kbd>` : ''}<span>${esc(l)}</span>${svg('chev', 'gt')}</button>`).join('')}</div></div>`;
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
  const li = (it, i, stop) => `<li><label><input type="checkbox" data-dc="${stop ? 's' : 'a'}${i}"><span>${esc(it[0])}<small>${stop ? '→ ' : ''}${esc(it[1])}</small></span></label></li>`;
  $('#dcheck').innerHTML = `<div class="tool-h"><span class="ic c-meta">${svg('check')}</span><h2>Discharge safety check</h2></div>
    <p class="sub">Tick through it before the patient leaves. It is not saved, and Clear resets it.</p>
    <div class="dc-group">Every patient</div><ul class="dc-list">${DC_ALL.map((it, i) => li(it, i)).join('')}</ul>
    <div class="dc-group">Tick if it applies: stop and act</div><ul class="dc-list stop">${DC_STOP.map((it, i) => li(it, i, true)).join('')}</ul>
    <div class="meter" aria-hidden="true"><i id="dcm"></i></div>
    <div class="verdict" id="verdict" aria-live="polite"></div>
    <div class="foot"><span>From the reassessment memo (Jul 2024) and Million Ringgit Habits (ETD HKL)</span><button type="button" class="sm" id="dcclear">${svg('restart')}Clear</button></div>`;
  const upd = () => {
    const a = DC_ALL.filter((_, i) => $(`[data-dc="a${i}"]`).checked).length;
    const stops = DC_STOP.filter((_, i) => $(`[data-dc="s${i}"]`).checked);
    const v = $('#verdict'), m = $('#dcm');
    m.style.width = (stops.length ? 100 : a / DC_ALL.length * 100) + '%';
    m.style.background = stops.length ? 'var(--admit)' : a === DC_ALL.length ? 'var(--discharge)' : 'var(--zone)';
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
      if (v.hr && v.sbp){ const si = v.hr / v.sbp; out.push(['Shock index (HR ÷ SBP)', si.toFixed(2), si < 1 ? 'good' : si > 1 ? 'bad' : 'warn', si < 1 ? 'Under 1: meets the discharge criterion' : si > 1 ? 'Over 1: a sign of shock in the ebook pathway' : 'Exactly 1: not under 1, so the discharge criterion is not met']); }
      if (v.sbp && v.dbp){ const pp = v.sbp - v.dbp; out.push(['Pulse pressure (SBP − DBP)', pp + ' mmHg', pp > 20 && pp < 50 ? 'good' : 'warn', pp <= 20 ? 'Narrow: 20 mmHg or less' : pp >= 50 ? 'Wide: 50 mmHg or more' : 'Between 20 and 50: meets the criterion']); }
      if (v.hr) out.push(['Heart rate', v.hr + '/min', v.hr < 90 ? 'good' : 'warn', v.hr < 90 ? 'Under 90: meets the criterion' : '90 or more: allow for temperature, and reassess']);
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
        ['BMI', bmi.toFixed(1) + ' kg/m²', bmi > 27.5 ? 'warn' : 'good', bmi > 27.5 ? 'Over 27.5: use the adjusted body weight' : '27.5 or less: use the actual weight'],
        ['Ideal body weight', ibw.toFixed(1) + ' kg', 'good', ''],
        ['Adjusted body weight', adj.toFixed(1) + ' kg', bmi > 27.5 ? 'good' : 'warn', bmi > 27.5 ? 'Use this weight for dengue fluid calculations' : 'Not needed at this BMI']
      ];
    }}
};
let calcTab = 'dengue';
function renderCalc(){
  const c = CALCS[calcTab], box = $('#calcbox');
  const field = ([k, l, unit, choices]) => choices
    ? `<div class="field"><label for="cf-${k}">${l}</label><select id="cf-${k}" data-k="${k}">${choices.map(([v, t]) => `<option value="${v}">${t}</option>`).join('')}</select></div>`
    : `<div class="field"><label for="cf-${k}">${l}${unit ? ' (' + unit + ')' : ''}</label><input id="cf-${k}" data-k="${k}" type="number" inputmode="decimal" min="0" step="any" autocomplete="off"></div>`;
  box.innerHTML = `<div class="tool-h"><span class="ic c-breath">${svg('calc')}</span><h2>Quick sums</h2></div><p class="sub">Arithmetic only, from the ebook and department posters. Nothing you type is saved.</p>
    <div class="seg" role="group" aria-label="Calculator">${Object.entries(CALCS).map(([k, x]) => `<button type="button" data-ct="${k}" aria-pressed="${k === calcTab}">${x.t}</button>`).join('')}</div>
    <div class="fields">${c.fields.map(field).join('')}</div><div class="outs" id="couts" aria-live="polite"></div><p class="calc-note">${esc(c.note)}</p>`;
  const upd = () => {
    const v = {};
    box.querySelectorAll('[data-k]').forEach(el => { v[el.dataset.k] = el.tagName === 'SELECT' ? el.value : (el.value === '' ? 0 : parseFloat(el.value)); });
    const out = c.run(v);
    $('#couts').innerHTML = out ? out.map(([l, val, cls, em]) => `<div class="out ${cls}"><span>${esc(l)}</span><b>${esc(val)}</b>${em ? `<em>${esc(em)}</em>` : ''}</div>`).join('') : '<div class="out"><span>Fill in the boxes to see the result</span></div>';
  };
  box.oninput = upd; box.onchange = upd;
  upd();
}

/* ================= Numbers ================= */
function renderNums(){
  const groups = [...new Set(NUMS.map(n => n.g))];
  $('#nums').innerHTML = groups.map(g => `<h2 class="num-group">${esc(g)}</h2><div class="nums">` + NUMS.map((n, i) => n.g !== g ? '' :
    `<article class="num-card${n.hot ? ' hot' : ''}"><span class="lbl">${esc(n.lbl)}</span><span class="val" id="nv${i}">${esc(n.val)}</span><p>${esc(n.note)}</p>
      <div class="row">${n.copy ? `<button type="button" data-copy="${i}">${svg('copy')}<span class="bl">Copy</span></button>` : ''}${n.href ? `<a class="pill" href="${n.href}">${esc(n.link)}${svg('chev')}</a>` : ''}<span class="src">${esc(n.src)}</span></div></article>`).join('') + '</div>').join('');
}

/* ================= Journey: looping clips and narration ================= */
let step = 0, playAll = false, stageVisible = false, clipsOn = false;
const voice = new Audio(); voice.preload = 'none';
function renderJourney(anim){
  $('#rail').innerHTML = JOURNEY.map((s, i) => `<li><button type="button" class="${s.optional ? 'maybe' : ''}" data-i="${i}" ${i === step ? 'aria-current="step"' : ''} aria-label="Stop ${i + 1}: ${esc(s.short)}${s.optional ? ', only if needed' : ''}"><span class="n">${i + 1}</span><b>${esc(s.short)}</b><small>${esc(s.sub)}</small></button></li>`).join('');
  const s = JOURNEY[step], stage = $('#stage');
  const nc = s.note && s.note.c ? ` style="--c:var(--${s.note.c});--cs:var(--${s.note.c}-soft)"` : '';
  stage.innerHTML = `<figure><video id="jclip" muted loop playsinline preload="none" poster="${s.img}" width="1280" height="720" aria-label="${esc(s.alt)}"></video>
      <div class="cap" id="jcap" hidden></div>
      <div class="ctl"><button type="button" class="mbtn" id="jlisten" aria-pressed="false">${svg('volume')}<span class="bl">Listen</span></button><button type="button" class="mbtn" id="jclipbtn">${svg(clipsOn ? 'pause' : 'play')}<span class="bl">${clipsOn ? 'Pause clip' : 'Play clip'}</span></button></div></figure>
    <div class="txt">
      <span class="who${s.mo ? ' mo' : ''}${s.optional ? ' optional' : ''}">${esc(s.who)}</span>
      <h3>${esc(s.title)}</h3>
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

/* ================= Tour: chapters, transcript, speed, resume ================= */
function pauseTour(){ const v = $('#vid'); if (v && !v.paused) v.pause(); }
function setupTour(){
  const v = $('#vid'); let retried = false, lastSave = 0;
  $('#chaps').innerHTML = CHAPTERS.map(([t, l], i) => `<button type="button" data-t="${t}" data-ch="${i}"><span>${fmt(t)}</span>${esc(l)}</button>`).join('');
  $('#tscript').innerHTML = CAPTIONS.map(([t, l], i) => `<li><button type="button" data-t="${t}" data-ln="${i}"><span>${fmt(t)}</span>${esc(l)}</button></li>`).join('');
  const sp = $('#speeds');
  [0.75, 1, 1.25, 1.5].forEach(r => sp.insertAdjacentHTML('beforeend', `<button type="button" data-rate="${r}" aria-pressed="${r === 1}">${r}×</button>`));
  const pos = store.get('gz-tour-pos', 0);
  if (pos > 3) sp.insertAdjacentHTML('beforeend', `<button type="button" data-t="${pos}" id="resume">Resume at ${fmt(pos)}</button>`);
  const seek = t => { const goTo = () => { try { v.currentTime = t; } catch(e){} v.play().catch(() => {}); }; if (v.readyState >= 1) goTo(); else { v.addEventListener('loadedmetadata', goTo, {once:true}); v.load(); } };
  $('#tourbox').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.rate){ v.playbackRate = +b.dataset.rate; $$('#speeds [data-rate]').forEach(x => x.setAttribute('aria-pressed', x === b)); }
    else if (b.dataset.t !== undefined){ seek(+b.dataset.t); if (b.id === 'resume') b.remove(); }
  });
  let lastLn = -1, lastCh = -1;
  v.addEventListener('timeupdate', () => {
    const t = v.currentTime;
    let ln = -1; CAPTIONS.forEach(([s], i) => { if (t >= s - .05) ln = i; });
    let ch = 0; CHAPTERS.forEach(([s], i) => { if (t >= s) ch = i; });
    if (ln !== lastLn){ $$('#tscript button').forEach((b, i) => b.setAttribute('aria-current', i === ln)); const a = $(`#tscript [data-ln="${ln}"]`), box = $('#tscript'); if (a && !v.paused) box.scrollTop = a.offsetTop - box.clientHeight / 2; lastLn = ln; }
    if (ch !== lastCh){ $$('#chaps button').forEach((b, i) => b.setAttribute('aria-current', i === ch)); lastCh = ch; }
    if (Math.abs(t - lastSave) > 2){ lastSave = t; store.set('gz-tour-pos', v.duration && t > v.duration - 3 ? 0 : Math.floor(t)); }
  });
  v.addEventListener('ended', () => store.set('gz-tour-pos', 0));
  /* If this browser cannot stream the MP4, load it whole and try again */
  v.addEventListener('error', async () => {
    if (retried){ $('#vmsg').hidden = false; return; }
    retried = true;
    try {
      const r = await fetch('media/green-zone-explainer-720p.mp4'); if (!r.ok) throw new Error(r.status);
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

/* ================= What's new from the drives ================= */
function renderDrive(){
  const count = s => DRIVE.filter(d => d[1] === s).length;
  const newIds = Object.keys(P).filter(id => P[id].isnew).length, upd = Object.keys(P).filter(id => P[id].dept || P[id].upd).length;
  const row = ([f, txt, links]) => `<li><span class="f">${esc(f)}</span><div><p>${esc(txt)}</p>${links.length ? `<div class="links">${links.map(([href, l]) => `<a class="pill" href="${href}">${esc(l)}${svg('chev')}</a>`).join('')}</div>` : ''}</div></li>`;
  let h = `<div class="stats"><div><b>${newIds}</b><span>new rules and protocols from the MO Drive</span></div><div><b>${upd}</b><span>pathways with department notes or updates</span></div><div><b>${V7.length}</b><span>documents added in version 7 from the triage course folder</span></div><div><b>31</b><span>MO Drive subfolders read, plus 2 files; ${count('unreadable')} could not be read</span></div></div>`;
  h += `<details class="dgrp" open><summary>New in version 7: the triage course folder <small>${V7.length}</small></summary><ul class="drows">${V7.map(row).join('')}</ul></details>`;
  h += DRIVE_GROUPS.map(([k, t, open]) => {
    const rows = DRIVE.filter(d => d[1] === k); if (!rows.length) return '';
    return `<details class="dgrp"${open ? ' open' : ''}><summary>MO Drive: ${t} <small>${rows.length}</small></summary><ul class="drows">${rows.map(([f, , txt, links]) => row([f, txt, links])).join('')}</ul></details>`;
  }).join('');
  h += `<div class="confirm"><h3>Still to confirm</h3><ol>${CONFIRM.map(c => `<li>${esc(c)}</li>`).join('')}</ol></div>`;
  $('#drive').innerHTML = h;
}

/* ================= Sources and about ================= */
function renderAbout(){
  const lst = ids => ids.map(id => `<a href="#${id}">${esc(P[id].title)}</a>${P[id].src ? ' · ' + esc(P[id].src) : ''}`);
  const panel = (k, h, p, items) => `<section class="panel"><div class="kicker">${k}</div><h3>${h}</h3><p>${p}</p>${items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}</section>`;
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
  $('#lbimg').alt = i === 1 ? 'Poster sheet 1: patient flow, three rules to keep and numbers to know' : 'Poster sheet 2: the 23 pathways, EMACC follow-up, Asthma Zone flow and referrals';
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
  closePal(false); closeSettings(false); closeSheet();
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
$('#keynums').addEventListener('click', e => { const b = e.target.closest('[data-kcopy]'); if (b){ const i = +b.dataset.kcopy; copyText(NUMS[i].copy, {btn:b, el:$('#kn' + i)}); } });
$('#tip').addEventListener('click', e => { if (e.target.closest('[data-tipnext]')){ tipI = (tipI + 1) % TIPS.length; renderTip(); } });
if ('IntersectionObserver' in window){
  new IntersectionObserver(es => { heroVisible = es[0].isIntersecting; if (heroV){ if (heroVisible && heroOn) heroV.play().catch(() => {}); else heroV.pause(); } }).observe($('#heromedia'));
}
$('#heroplay').addEventListener('click', () => heroSet(!heroOn));
if (heroMQ.addEventListener) heroMQ.addEventListener('change', () => heroSet(heroOn));
heroSet(clipsOn);

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
    if (key === 'clips'){ const on = prefs.clips === 'on'; heroSet(on); setJourneyClip(on); }
  } else if (b.id === 'st-clear'){
    ['gz-saved', 'gz-recent', QKEY, 'gz-quiz-best', 'gz-tour-pos'].forEach(k => store.del(k));
    refreshSaved(); syncSettings(); startQuiz(); toast('Cleared from this browser');
  } else if (b.id === 'setclose') closeSettings(true);
});

/* Keyboard: / or Ctrl K to search, Esc to close, 1–9 to answer and Backspace to step back in a pathway */
document.addEventListener('keydown', e => {
  const t = e.target;
  const typing = t && ((t.tagName === 'INPUT' && !['checkbox', 'radio', 'button'].includes(t.type)) || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); $('#pal').hidden ? openPal() : closePal(true); return; }
  if (e.key === 'Escape'){
    if (!$('#pal').hidden) return closePal(true);
    if (!$('#settings').hidden) return closeSettings(true);
    if (!$('#lb').hidden) return closeSheet();
    if ($('#side').classList.contains('open')) return closeDrawer(true);
  }
  const overlay = !$('#pal').hidden || !$('#lb').hidden || !$('#settings').hidden;
  if (typing || e.ctrlKey || e.metaKey || e.altKey || overlay) return;
  if (e.key === '/'){ e.preventDefault(); openPal(); return; }
  if (curView === 'run'){
    if (/^[1-9]$/.test(e.key)){
      const b = $(`#cur button[data-go="${+e.key - 1}"]`) || (e.key === '1' && $('#cur button[data-next]'));
      if (b){ e.preventDefault(); b.click(); }
    } else if (e.key === 'Backspace' && state.trail.length){ e.preventDefault(); backTo(state.trail.length - 1); }
  }
});
window.addEventListener('hashchange', route);
route();
window.addEventListener('load', () => JOURNEY.forEach(s => { const im = new Image(); im.src = s.img; }));
