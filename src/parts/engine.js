
/* ================= Green Zone MO Guide, version 8: the engine =================
   One page, one view at a time, routed on the hash:
   #home, #pathways, #saved, #rules, #tools, #calc and #calc-<calculator>, #numbers,
   #journey(-1..5), #tour (#video), #quiz, #intro, #new, #poster, #about, #search,
   #<entry> and #<entry>--<node> for any step of any pathway or rule.
   Saved, recent, quiz best, tour position and settings stay in this browser only. */

/* The public web app on GitHub Pages. Copy link builds its links on this address, so anyone they are sent to can open them. */
const APP_URL = 'https://zaq6184-cell.github.io/green-zone-mo-guide/';
/* The whole ebook as a PDF, in Krishna's Google Drive (12 Nov 2026: "Already uploaded the pdf file to the google drive. Can use it") */
const EBOOK_PDF = 'https://drive.google.com/file/d/1VrOsrSTS10YKPrXE5Krgw4wn6EmUEu_j/view';

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
   links:[['#gz-rules--wait','Where to seat patients who cannot wait outside'],['#gz-rules--ivab','IV antibiotics on a CCA chair'],['#yellow-zone--flow','Uptriage: the Yellow Zone flow']]},
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
const MORE_RULES = [['#gz-rules--flow','Patient flow and the green slip'],['#gz-rules--oneway','One-way flow: no repeat tests'],['#gz-rules--down','Down-triage'],['#gz-rules--ivab','IV antibiotics, no bed free'],['#gz-rules--ep4','Primary team delayed'],['#gz-rules--kk','Redirect to a KK or GP'],['#asthma-zone','Asthma Zone flow'],['#mau-admission','Admission to MAU'],['#referral-rules--ortho','Orthopaedic referral'],['#referral-rules--ipr','Transfer to IPR'],['#emacc','EMACC follow-up'],['#em-watch','EM Watch'],['#outpatient-referral','Clinic referrals'],['#gz-rules--dengue','Dengue from a KK to OW'],['#yellow-zone--flow','Yellow Zone flow'],['#safe-practice','Million Ringgit Habits']];

/* Version 8: the redesign, for the home card and What's new */
/* The version line in the footer and Settings: change it with each round */
const APP_VER = 'Version 8, updated 23 Nov 2026';
const V8 = [
  [`Faster on a weak signal, and pages that move`, `The installed guide now opens its saved copy after 1.5 seconds with no answer from the network (it waited 4), and once the hospital Wi-Fi has hung, the next open no longer waits again: measured on a slowed phone, 4.3 seconds down to 1.8 on a stuck connection, and to 0.3 for the open after it. A newer version still arrives, with Reload. On the claude.ai link, and on the web app with Data Saver on, a first visit no longer downloads the journey's five pictures and the tour's cover (about 320 KB) until you open those pages (the installed web app still saves them in the background, for use offline), and a thin bar at the top shows while a slow first open is still arriving. A tool tile now grows into its page's banner as it opens, and the back button slides the earlier page back in; other links still open at once, and with reduced motion pages change as before.`, [['#install', 'Install the guide'], ['#tools', 'Shift tools']]],
  [`Antidotes, abbreviations and the documents left out`, `The Ministry of Health's Antidotes Quick Guide (First Edition, January 2022): all 38 antidotes with their preparation, dose and storage as printed, in Shift tools, in search and on the drug card, with the lines its reader found doubtful marked. The MOH abbreviation list (Bil.1/2024, 2,665 rows): type an abbreviation in search to see its meaning as the list prints it. Discharge at own risk, the MOH procedure (circular Bil. 24/2021), in Safe practice; fever after a flood, treated as suspected leptospirosis (Bil. 26/2021), and smoking products and vaping, notified within 24 hours (Bil. 25/2026), in Infection alerts; the department's CME on reading a CT brain; and the CME deck on the aggressive patient on the behavioural disturbance pathway. Each with its source and date; the questions they raise are under Still to confirm.`, [['#antidotes', 'Antidotes'], ['#abbreviations', 'Abbreviations'], ['#ct-brain', 'Reading a CT brain'], ['#safe-practice--aorkpk', 'Own risk: the MOH procedure']], ['#safe-practice', '#infection-alerts', '#behavioural-disturbance', '#ct-brain']],
  [`The route, in 3D`, `The patient journey ends on a glass model of the five stops of a Green Zone visit, made in Blender for this guide: drag it, or use the slider, to turn it all the way round, and tap a number for what happens at that stop. Only its first view loads (7 KB) until you turn it; the rest is one 166 KB picture, kept once used. Four new banners move too: antidotes, abbreviations, CT brain and the aggressive patient.`, [['#journey', 'Patient journey']]],
  ['Department memos and letters, 2019 to 2026','Two dozen memos and letters the department circulated, read from their pages and placed where you look for them: suspected measles (memo of 19 Nov 2026) and the department\'s own Nipah memo in Infection alerts; seven memos of 2025 and 2026 on the Green Zone rules (primary team review within 2 hours, waiting for emergency surgery, IV paracetamol and IV albumin, Lampiran A, fever after chemotherapy, moving a patient within HKL, sick leave for staff), with two older ones; the dispatch book, POCT results and the laboratory\'s rules in Blood tests; medicines for a foreign patient and dispersible aspirin in Prescribing; psychology counselling in Referral rules; the 2025 MAU criteria as a dated tab; haemodialysis in the Yellow Zone; and the 2024 ectopic pregnancy circular on Abdominal pain. A new page in Shift tools, ED antimicrobial guides, holds the department\'s two quick guides of February 2024: the dose of each antimicrobial for each band of kidney function (type a CrCl and the printed band is marked), and how to reconstitute, dilute and give each injectable. Each step shows its source, with its pages at a tap where they can be shown.',[['#gz-rules--gzn','Green Zone: memos of 2025 and 2026'],['#infection-alerts--measles','Suspected measles'],['#blood-tests','Blood tests: the lab\'s rules'],['#prescribing--fgnrx','A foreign patient: 5 days'],['#antibiotics','ED antimicrobial guides']],['#gz-rules','#infection-alerts','#blood-tests','#prescribing','#referral-rules','#mau-admission','#yellow-zone','#abdominal-pain','#missed-fractures']],
  ['Open now','The home page shows what holds at this moment, in Malaysia time: whether EMACC, EM Watch and the Animal Bite Clinic are in session (until when, or the next session), the shift, and the hours that change a route (MAU office hours, the Observation Ward\'s medical officer, LA OT for orthopaedic cases, Code Blue at SCACC after 1700 hr). The steps that print those hours show the same, live. Only the hours the sources print; sessions only, nothing about booking.',[['#home','Home'],['#emacc--clinic','EMACC hours']]],
  ['Changed since you last looked','From the next update on, an entry that changed since you last opened the guide carries a Changed mark in the library and a line at its top, and What\'s new on the home page marks what is new to you. Your phone keeps only a count of the updates it has seen.',[['#new','What\'s new']]],
  ['The reference beside the step','On a computer, or a tablet held sideways, the route panel beside the step can show the pathway\'s reference tabs instead (Reference beside the step), so a table or the advice stays in view while you answer. Your route moves to the strip above the step.',[['#renal-colic','Renal colic']]],
  ['Back, to where you were','A back arrow now sits at the top left whenever there is somewhere to go back to: it returns to the page you came from as you left it, on the same step of a pathway with your answers, the same tab and the same place on the page, or to your search with its words. After a link inside a step it opens for a moment to show where it leads. Press and hold it (or right-click) for the earlier pages of this visit. On a desktop it is in the menu, under Search. Your phone\'s own back does the same. It lives in memory only: a reload clears it.',[['#home','Home']]],
  ['The pink EM Watch form','EM Watch now walks you through the department\'s pink form, page by page: the checklist and its five mandatory conditions, the consent the patient signs, and the slip you cut off for them, with the clinic\'s hours (Monday to Saturday, 8 am to 2 pm). The consent is in two tabs, Malay and English, as printed, and Read aloud reads it in either language. Each page opens as printed with a tap. Nothing about the patient goes into the guide.',[['#em-watch--form','The pink form'],['#em-watch','EM Watch']],['#em-watch']],
  ['Find a drug, set a reminder, pin what you use','Type a drug\'s name in search and a card above the results shows where the guide names it: its rows on the ED pharmacy list, its pages in the dilution guide with the high-alert mark, any look-alike pair, and each step that names it, a tap away; doses stay in their own steps. Steps that print a short bedside interval (reassess after 10 minutes, repeat every 20 minutes) offer a reminder that shows when it is due, and buzzes on a phone that can (Android); it holds only the step and the time. Pin a calculator or a single step to the top of the home page. On a phone, Save, Pin, the whole map, Copy link and Start again now sit under the step, within reach of your thumb, and the pathway library folds by group.',[['#asthma--m1','A step with a reminder'],['#calc','Pin a calculator']]],
  ['Children\'s heart and breathing rates by age','A new calculator shows where a child\'s heart rate and breathing rate sit among healthy children of the same age band: the 1st to 99th centiles from Fleming et al. (Lancet 2011), a systematic review of 69 studies from birth to 18 years. It names the centile and never calls a rate normal, since the paper does not say which centile makes a rate abnormal. PEMCalc stays linked for blood pressure and SpO2, which the paper does not give.',[['#calc-vitals','Open the calculator'],['#ed-scores--vitals','The source and its limits']]],
  ['Calculators built in, from their own sources','The calculators that sent you to MDCalc now work inside the guide, and 22 are new: TIMI and HEART (ACS CPG 2026); the Canadian CT Head Rule, the Canadian C-spine Rule and NEXUS (head injury CPG 2015); Wells for PE (VTE CPG 2013); the Ottawa ankle, foot and knee rules; CHA2DS2-VASc and HAS-BLED (AF CPG 2012); MEWS (abdominal trauma CPG 2025); and, each from its own paper or owner and credited to its authors, ABCD2, the Ottawa SAH rule, PERC, the age-adjusted D-dimer, the San Francisco Syncope Rule, the Canadian Syncope Risk Score, Alvarado, qSOFA, NEWS2, CIWA-Ar, burns size and fluids, and a child\'s weight from age. Nothing is copied from MDCalc: its terms forbid it, even with credit. Only six outside links are left: five PEMCalc children\'s tools and the QTc.',[['#calc','Open the calculators'],['#ed-scores','Scores and rules']]],
  ['Read aloud, Malay smart search, and voice on your phone','Read aloud under any step, or above a reference tab, reads it in your phone\'s own voice, in English, or in Malay where the text is Malay. Smart search now understands Malay ("alahan teruk", "luka terbakar", "buku lali terseliuh"), with a second model that downloads only the first time you search in Malay. In the claude.ai copy, Ask shows the guide\'s own line that answers, checked word for word. In the web app, Settings, Voice on this phone makes English voice search run on the phone itself, so the sound never leaves it.',[['#renal-colic','Try Read aloud'],['#search','Search in Malay']]],
  ['Smart search: by meaning, on your phone','Search now understands everyday words: "fainted" finds syncope, "fell and hit head" finds head injury, "platelet low" finds the dengue CPG, "ankle sprain" finds the ankle. A small AI model downloads once (about 8 MB) the first time you search, then works without a signal. It runs on your phone, so nothing you type is sent anywhere, and it only finds the guide\'s own pages. Settings, Smart search turns it off.',[['#search','Try a search']]],
  ['Your phone buzzes where it helps','On an Android phone the guide now gives a light tick when you answer, a pulse when you reach the outcome, a buzz when a number or outcome is copied, two buzzes for a stop sign, and a long buzz when the 20-minute WBCT timer runs out (if you had switched to another app, it buzzes when you come back to the guide). Settings, Vibration turns it off. iPhones do not let a web page vibrate.',[['#tools','Shift tools']]],
  ['The answer in thumb reach, and a tidier outcome card','On a checklist question, the answer your ticks point to now waits just above the tab bar: one tap answers. The route opens on your newest answer. The outcome card shows its ebook pages, its items are boxes to tick as you do them (on screen only, nothing is kept), and its main action sits at the foot, in reach of your thumb. Search results are shorter, Numbers, Pathways, Tools and Calculators open on the line that matters, and pictures sit back a little at night. In the claude.ai copy, Something wrong on this step? can also open claude.ai\'s comment box on the step: never write a patient\'s details there.',[['#renal-colic','Try it on renal colic'],['#numbers','Numbers']]],
  ['Search that forgives, and search by voice','Search now finds a misspelt word (paracetmol, renal collic), American spellings (hypoglycemia, diarrhea), Malay and everyday words (sakit dada, kencing batu, stomach ache) and abbreviations (AGE, PCM, HTN), and says which words it used. A microphone in the search box listens in English or Bahasa Melayu: say a topic, never a patient\'s details.',[['#search','Search the guide']]],
  ['Home care advice on the patient\'s own phone','On a discharge outcome and on the advice tabs, Show to patient brings up a QR code. The patient scans it and the advice opens on their phone, with Listen, in English or Bahasa Melayu where the leaflet has both. Nothing about them is sent or kept: the code holds only the address.',[['#renal-colic','Renal colic'],['#dengue-cpg','Dengue CPG']]],
  ['Copy the route, and flag a step','At the end of a pathway, Copy route copies each question with the answer you chose, then the outcome and its pages, for your notes. Under every step, Something wrong on this step? writes a short report for the guide owner: pick a reason, then send it on WhatsApp or copy it.',[['#renal-colic','Try it on renal colic']]],
  ['Save everything for no signal','In the web app, Settings can now save every film, sound and printed page in one go (about 68 MB, best on Wi-Fi), so all of it opens without a signal.',[['#install','Install the guide']]],
  ['Ask in your own words','In the claude.ai copy of the guide, type a question in your own words and tap Ask: Claude picks the steps in the guide that fit, and you see the guide\'s own text. It runs on your own Claude account, so never type a patient\'s details.',[['#search','Search the guide']]],
  ['ED extensions','The department\'s extension list is at the top of Numbers: 34 rooms in five areas, found by room or by the first digits of a number, each extension copied with a tap. Search finds every room.',[['#numbers','Numbers']]],
  ['Share the guide','Send the guide to a colleague from its own page or the home tile: the link\'s card rises out of a phone in 3D, with the share sheet, Copy link, WhatsApp, Telegram and a QR code. A link to the web app now shows a preview card in messaging apps: the guide on three phones.',[['#share','Share the guide']]],
  ['Antibiotics and medicines from an animal source','Prescribing at HKL has two more topics, in the guide\'s own words: the hospital\'s antimicrobial stewardship policy (the request form, restricted agents, the 72-hour review, and OPAT patients who come back through the ED) and the good practice for a medicine from an animal source, the emergency case included. The dilution guide notes the general ICU\'s own guide as a special case.',[['#prescribing--ams','Antibiotics'],['#prescribing--animal','Animal source'],['#dilution','Dilution guide']]],
  ['The ED dosing and dilution guide','The department\'s own guide to the injectable drugs used in the ED (3rd edition, January 2026), 116 drugs: find a drug as you type, filter the 31 on the hospital\'s high alert list, and open its pages as printed, with the dose, dilution, rate and nursing notes. Search finds each drug by name.',[['#dilution','Open the guide'],['#tools','Shift tools']]],
  ['New to HKL, and Prescribing at HKL','From the HKL doctors starter pack and its pharmacy pages, every link reviewed: New to HKL (the site plan, reporting for duty, scrubs, incident and medication error reports, the PD301 and the death certificate, sharps, de-escalation, public statements, locum, PhIS) and Prescribing at HKL (a check before you sign, allergy status, STAT doses, countersigning, the eight-medicine limit, verbal orders, imprest stock, high alert and look-alike medicines, administration times, what the pharmacy sends back, private pharmacy memos). The paracetamol overdose entry adds the hospital\'s NAC regimen with a calculator, and the ED pharmacy list marks its look-alike pairs. Each step shows its source.',[['#new-hkl','New to HKL'],['#prescribing','Prescribing at HKL'],['#calc-nac','NAC by weight']]],
  ['The ED pharmacy drug list','The Emergency Pharmacy\'s own list of 14 Apr 2025, 155 drugs, found as you type: is it on the list, and who may start it? Each drug shows its prescriber category in the MOH Medicines Formulary (B and C: a medical officer may start it; A/KK, A and A*: a specialist), with a link to the formulary\'s own entry. Search finds a drug by name and opens the list on it.',[['#pharmacy','Open the list'],['#tools','Shift tools']]],
  ['Department memos for the Green and Yellow Zones','Twenty-two of the department\'s own memos, 2021 to 2024, as steps you can work through: EMACC booking now follows the memo of 11 Jan 2024 (Counter 10, day 4 or day 5); the team leader\'s shift, admitting from the Green Zone, elderly patients, the records to finish, critical lab results, notification, STEMI to IJN, police detainees, stat FBC and ABG, LA OT and tourniquets; in the Yellow Zone, transfusion, sedation, central lines with the care bundle, referred patients, transfers by EWS, albumin, dangerous drugs and unknown patients; and a missed fracture on a reported film. Each shows its memo\'s own pages, with the signature, registration numbers and any incident background covered, and links to the department\'s own memo list.',[['#gz-rules--tl','Team leader of the shift'],['#gz-rules--gzm','Green Zone memos'],['#yellow-zone','Yellow Zone memos']]],
  ['Abdominal pain: the visual handbook','A teaching handbook on adult abdominal pain in the ED, with its quick reference: the bedside pathway, the checks that prevent a miss, red flags, tests and imaging, pain relief and antibiotics, eight presentations, six cases, and a 3D map of the nine regions to tap and turn. Every number was checked against the source the handbook cites; the HKL ebook\'s Abdominal pain pathway stays the department\'s. The Malay discharge script can be read aloud.',[['#abdo-handbook','Open the handbook'],['#abdo-handbook--loc','The 3D map'],['#abdo-handbook--trig','The checks that prevent a miss']]],
  ['Real X-ray films, with the normal anatomy outlined','Reading X-rays now shows a normal film on each step: chest, pelvis, shoulder, elbow, wrist, hand, knee, ankle and foot, eighteen films in all. Each bone is outlined on the film: tap a name to light it, or switch the outlines off to read the film bare. The outlines are this guide\'s own tracing by eye, a teaching aid; some are marked approximate where bones lie over each other. A film loads only when you open its step.',[['#xray-guide--wrj','Wrist'],['#xray-guide--hd','Hand'],['#xray-guide--ankv','Ankle']]],
  ['Dengue follows the 2026 CPG','The Dengue route opens the CPG entry (4th edition), which has a Quick Reference tab. Pregnancy, age 65 and over, and obesity are triaged to Group B1 (MTS level 4, Green), as the Quick Reference prints them. The ebook\'s dengue pathway is kept as printed, with a notice.',[['#dengue-cpg','Dengue CPG']]],
  ['The ebook\'s own pages','Each of the 23 ebook pathways has a Printed pages tab: a button for every page of the ebook that covers it, opening that page as printed, full size, so you can check the guide against the book. A page loads only when you tap it. The tab also links to the full ebook as a PDF.',[['#renal-colic','Renal colic'],['#pain','Pain management']]],
  ['The ebook, checked line by line','Every printed line of the ebook\'s 23 pathways (pages 5 to 63) was checked against the guide, and what had been shortened or left out is back, as printed, with its page: the definition, restraint monitoring and the drugs\' time to peak and half-life for acute behavioural disturbance; the written asthma action plan; the risk factors, symptoms and signs of Fournier\'s gangrene, scrotal abscess and epididymo-orchitis; the side effects in the choice of analgesia; and the full esmolol, adenosine and amiodarone lines for SVT. Where the print looks like a slip, or two of its pages disagree, the guide keeps its reading and quotes the print beside it; the two that bear on a number are under Still to confirm.',[['#asthma','Bronchial asthma'],['#scrotal-pain','Acute scrotal pain'],['#behavioural-disturbance','Acute behavioural disturbance']]],
  ['Reading X-rays, one check at a time','A new guide for the films you read alone: the checks before you read, a set search, then chest, ankle and foot, knee, wrist and scaphoid, hand, elbow, shoulder, hip and pelvis, and when an abdominal film is and is not indicated. The Ottawa ankle, foot and knee rules and the elbow extension test are checklists that suggest the answer. It is written in the guide\'s own words from named online sources, each linked, and where those sources disagree it says so; it does not replace the radiologist\'s report or the EP\'s review. Shift tools has a tile for it.',[['#xray-guide','Reading X-rays'],['#xray-guide--ank','Ottawa ankle rule']]],
  ['From the triage course','The TAG Warrior Course decks (ETD HKL, 2026) as department notes, each with its deck and slide: handing over at the end of the shift, the fractures most often missed on X-ray and the recall of a missed film, nine case discussions to work through, the referral map and how to make a referral, uptriaging with the Green Zone thinking framework, and discharge, follow-up and own-risk discharge checks. Slides that differ from the ebook or a dated department protocol are not in the guide: they are listed under Still to confirm.',[['#handover','Handing over'],['#missed-fractures','Commonly missed fractures'],['#cbd-2','Case discussions']]],
  ['Install on the front page','The home screen has an Install the guide tile: it shows whether the guide is saved for use without a signal, and a small phone in 3D turns as you move or scroll.',[['#install','Install the guide']]],
  ['Install the guide, and use it without a signal','The web app now installs on any phone, tablet or computer: an iPhone or iPad from Safari, Android from Chrome, Samsung Internet, Edge or Firefox, and Windows, Mac, Linux or ChromeOS from Chrome, Edge or Safari. Install the guide shows the steps for your device, drawn, with an Install button where the browser offers one. Once opened with a signal, the guide saves itself and opens without one: every pathway, rule, calculator and number, and the pictures; films and sounds once played through. It updates itself the next time it opens with a signal.',[['#install','Install the guide']]],
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
/* ================= Changed since you last looked (18 Nov 2026) =================
   Krishna: "Build all five" (E). The phone keeps one number, gz-round: how many rounds of What's new (V8, newest first) it had
   seen when the guide last opened. Rounds added since then mark the entries in their fourth field (addresses) as Changed: a
   badge in the library and a line at the top of the entry; What's new on the home page marks what is new to this phone. On the
   first open nothing is invented: the number is stored and nothing is marked. Nothing about a patient is kept (rule 4). */
const CHG_N = V8.length; let chgPrev = null;
try { const v = localStorage.getItem('gz-round'); chgPrev = v === null || isNaN(+v) ? null : +v; localStorage.setItem('gz-round', String(CHG_N)); } catch(e){}
const CHG_NEW = chgPrev !== null && chgPrev < CHG_N ? CHG_N - chgPrev : 0;
const CHG = new Map(); /* entry object -> the newest round's title that changed it */
V8.slice(0, CHG_NEW).forEach(([t, , , at]) => (at || []).forEach(h => { const p = P[h.replace(/^#/, '').split('--')[0]]; if (p && !CHG.has(p)) CHG.set(p, t); }));

/* The first-shift intro: four screens about using the guide, with a drawn picture each */
const INTRO = [
  {h:'Find it in one search', p:'Type a symptom, rule, dose or number, or press /. Saved and recent pathways wait on your home screen.', art:'search'},
  {h:'One question at a time', p:'Each pathway asks one question per card and shows how it can still end. It finishes in the ebook\'s outcome colours: red admit, yellow observation, green discharge, violet refer.', art:'path'},
  {h:'Patients move one way', p:'Triage, you the MO, the treatment room, the CCA only if needed, then review. Tap any stop on the zone map for what happens there and the rules that apply.', art:'zone'},
  {h:'Tools and numbers, one tap away', p:'The discharge safety check, {calcs} calculators and {nums} numbers with Copy. Nothing you tick or type is saved.', art:'tools'}
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
const POPULAR = [['#renal-colic','Renal colic'],['#dengue-cpg','Dengue'],['#asthma-zone','Asthma Zone'],['#mau-admission','MAU criteria'],['#pneumonia','CURB-65'],['#mild-tbi','Head injury'],['#gz-rules--ivab','IV antibiotics, no bed'],['#referral-rules--ortho','Ortho referral']];

const NUMS = [
  {g:'Emergencies', hot:true, lbl:'Code Blue, outside the ED', val:'ext 5333', copy:'03-2615 5333', note:'ED Call Centre, for an emergency or arrest anywhere in the hospital grounds; the team arrives within 10 minutes. SCACC in office hours: Anaesthesia ext 1133 / 1134 with 5333. Call Centre 2: ext 6700. Forensic: ext 6695.', href:'#code-blue', link:'Code Blue', src:'Code Blue Manual 2022/2024'},
  {g:'Emergencies', hot:true, lbl:'Code Stroke', val:'ext 5999', copy:'ext 5999', note:'Onset under 9 hours. Say CODE STROKE, then the patient\'s name, your location and extension, COVID status and the ETD MO\'s name.', href:'#stroke-tia', link:'CVA and TIA', src:'Code Stroke pathway'},
  {g:'Emergencies', lbl:'ED Resus', val:'ext 5339 / 5326', copy:'ext 5339 / 5326', note:'Amber Zone: ext 5324 / 5360.', src:'MAU critical patient flow'},
  {g:'Admission and follow-up', lbl:'MAU mobile team', val:'ext 6682 / 6684', copy:'ext 6682 / 6684', note:'Office hours. After hours, the same extensions reach the MAU 1 (male), MAU 2 (female) and MAU 3 wards. Phone before you register the admission.', href:'#mau-admission', link:'Admission to MAU', src:'MAU flow chart, 18 Oct 2022'},
  {g:'Admission and follow-up', lbl:'EMACC follow-up', val:'Counter 10', copy:'Counter 10, the ED Registration Counter', note:'Write the TCA date on the slip hijau and send the patient to Counter 10, the ED Registration Counter (memo (01)24, Jan 2024). EMACC runs 8 am to 3 pm, Monday to Friday. The 2018 SOP\'s line to the EMACC MO, ext 7040, is in no 2026 document.', href:'#emacc', link:'EMACC follow-up', src:'Memo (01)24, Jan 2024'},
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
  ['YELLOW ZONE','added','The July 2026 patient flow, and where patients go when the zone is full.',[['#yellow-zone--flow','Yellow Zone flow']]],
  ['OSCC','added','Sexual assault, domestic violence, suspected child abuse, and the June 2026 reminders on forms and police reports.',[['#oscc','OSCC']]],
  ['ABG','added','When to run a blood gas, and when not to.',[['#blood-tests--gas','Blood gas']]],
  ['PDN / BLOOD TRANSFUSION','added','The mandatory pre-transfusion checklist (Mar 2026), bedside labelling and why requests are rejected.',[['#blood-tests--gxm','GXM sample'],['#blood-tests--reject','Rejections']]],
  ['TOXICOLOGY','added','The tubes for drug levels, and the methanol sample.',[['#blood-tests--tox','Drug levels']]],
  ['INFECTIOUS DISEASES','added','TB, Mpox (Sept 2024), Nipah (Mar 2026), MERS PUI, COVID screening, notification, and rabies with the Animal Bite Clinic.',[['#infection-alerts','Infection alerts'],['#animal-bites','Animal bites']]],
  ['DENGUE','updated','Dengue SOP 2.0: Green Zone timings, the discharge criteria, tags and notification, as department notes on the ebook pathway; plus a shock index check in Tools.',[['#dengue','Dengue fever'],['#calc-dengue','Shock index']]],
  ['TRAUMA, ATLS','added','T-RACS Tier 1 criteria for walk-ins, the HIT whole-body CT protocol and the Aug 2023 trauma lessons.',[['#trauma-walkins','Trauma walk-ins']]],
  ['PAEDS EMERGENCY','added','Where to triage a child, croup, dehydration and swallowed objects; weight-based doses in Tools.',[['#children','Children in the ED'],['#calc-kids','Child doses']]],
  ['MEDICOLEGAL','added','Million Ringgit Habits and the medicolegal tip, also built into the discharge safety check.',[['#safe-practice','Safe practice'],['#tools','Safety check']]],
  ['CODE BLUE','added','The Code Blue numbers and who responds.',[['#code-blue','Code Blue']]],
  ['STROKE PROTOCOL PATHWAY','updated','Code Stroke ext 5999 steps, and the discharge medicines for Neuro patients, as department notes.',[['#stroke-tia','CVA and TIA']]],
  ['STRESS TEST / OBSESS','updated','Trop T tubes, the Thursday stress test and what to do if it is positive, as department notes.',[['#acs','ACS']]],
  ['STEMI NETWORK','updated','Ticagrelor loading rules, and how to talk to patients about IJN charges.',[['#acs','ACS']]],
  ['O&G','updated','The ectopic pregnancy circular: record the LMP of every woman of reproductive age.',[['#abdominal-pain','Abdominal pain']]],
  ['UROLOGY','updated','More reasons for urgent referral, and the discharge bundle for ureteric colic. The acute scrotum flow matches the ebook.',[['#renal-colic','Renal colic']]],
  ['Root files','added','How to import an imaging CD from another hospital. The resus round template is not Green Zone work.',[['#safe-practice--cd','Imaging CDs']]],
  ['GREEN ZONE','checked','The Green Zone Warrior note is already in the guide; nothing new.',[['#gz-rules','Green Zone rules']]],
  ['EMACC','checked','The SOP of 2018. Since 12 Nov 2026 the guide follows the department memo of 11 Jan 2024 for the work process. The EMACC video (104 MB) was not opened.',[['#emacc','EMACC']]],
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
  `From the documents added on 21 Nov 2026 at the guide owner's "add the documents that was left out". Still to confirm: (1) the MOH procedure for discharge at own risk (KPK circular Bil. 24/2021) is written for ward inpatients and never mentions the emergency department: does the department apply it in the ED, and is its Borang A the AOR form the department policy 2026 (32.3) means; (2) the MOH abbreviation list Bil.1/2024 prints no issuer, date or rule for its use, and gives only the meanings it prints (TDS only as "Toilet, Debridement And Suturing", BD only as "Binswanger's Disease"): whether the department uses it, and where its do-not-use list (named in its row 1500) is; (3) the leptospirosis circular Bil. 26/2021 prints the child's amoxicillin as "50 mg/kg dose oral 608 hourly" (in both copies circulated), gives no regimen for children aged 8 and over, and is written for primary care: what the department uses; (4) the smoking products circular Bil. 25/2026 names no route for sending its notification form to the PKD: how the department sends it; (5) the CME deck on the aggressive patient (circulated 13 Oct 2026, undated) has its own dose table (slide 53, haloperidol, olanzapine, risperidone, lorazepam, diazepam and midazolam): how it compares with the ebook's table on the behavioural disturbance pathway, which stays the department's route; (6) the MOH Antidotes Quick Guide (2022) prints lines its reader found doubtful, shown as printed with a Check mark: calcium gluconate's maximum "3000-6000mg/kg/dose" after 60 mg/kg/dose; dantrolene's indication "Malignant hypothermia" and its 70 ml title against 60 ml of water for injection; atropine "0.5 to 2.4 mg/kg/hour"; bromocriptine's two maximums; D-penicillamine's two daily doses; methylene blue's two dose paragraphs; folinic acid's 50 mg/5 ml title against 50 mg/ml; and the storage tables of idarucizumab and the 3-factor PCC, which contradict the text under them; whether a later edition exists; and how its entries compare with the ebook\'s pathways and the hospital\'s regimens (N-acetylcysteine with the paracetamol overdose pathway and the HKL NAC regimen; naloxone and flumazenil), which has not been done; (7) the aggressive patient deck\'s HKL risk-of-violence form prints "> 2" factors for high risk and "≥ 2" for moderate (slide 22); (8) the CT brain CME prints the narrow window as "WW: 8 WL:32" (slide 4), shown as printed.`,
  'From the department memos and letters added on 21 Nov 2026. Still to confirm: (1) the department\'s Nipah memo HKL/JK/98/123/8 prints "28 Januari 2025" but was circulated in January 2026, and the POCT review memo prints "6 Mac 2025" but cites a meeting of 4 Dec 2025: which year is right; (2) whether the memo on a patient treated elsewhere within 24 hours (HKL/JK/98/188/3(5)19, 4 Feb 2019) and the memo on CT or MRI before discharge (HKL/JK/98/188/3(28)22, 14 Dec 2022) are still in force, and how the registration sticker marks a visit within 24 hours; (3) which criteria the review of IV paracetamol and IV albumin used (letter HKL/JK/98/188/1, May 2026); (4) Lampiran A for foreign patients (memo of 6 Jul 2026): its flow chart prints the forms as CIP/JKT-02 and CIP/JK-01 where the memo prints BPK/JKT-02 and CIP/JKT-01, and it does not say what happens when no specialist is present; (5) MAU: the 2022 criteria the entry follows, or the General Medicine letter of 7 Feb 2025 (oxygen up to a Venturi mask at 40%, 100 kg or less, pregnancy excluded); (6) whether the aspirin dispersible brands of the pharmacy letter of 9 Nov 2022 are still the ones supplied; (7) EMACC\'s days: an undated meeting minute circulated on 3 Jan 2025 says EMACC runs Monday to Saturday, Saturday until 1 pm, with at most 10 Monday appointments, where the guide (the guide owner, 12 Nov 2026) says Monday to Friday, 8 am to 3 pm; (8) whether the department\'s two antimicrobial quick guides (dilution, and adult dosing), 2nd edition, February 2024, are still the current editions.',
  'Open now (18 Nov 2026) reads the hours the sources print. Four print an hour but not the days: MAU office hours, 8 am to 5 pm (the MAU admission note); the Observation Ward\'s medical officer, 10 am to 10 pm (memo HKL/JK/98/188/3(6)23); LA OT taking orthopaedic cases, 8 am to 9 pm only (department policy 2026, 22.3.3); and office hours at SCACC ending at 1700 hr, with no start (Code Blue Manual, 4.2). Which days does each hold, and when do SCACC office hours start? EMACC follows the guide owner\'s 8 am to 3 pm, Monday to Friday, where the memo of 11 Jan 2024 prints 7.30 am to 3.30 pm. The guide cannot know public holidays.',
  'From the calculators built into the guide on 16 Nov 2026 (CALC-RESEARCH.md). Still to confirm: (1) which D-dimer assay the HKL laboratory runs: the age-adjusted cut-off (ADJUST-PE) holds only for highly sensitive assays, and the VTE CPG (2013, p46) says the whole blood agglutination D-dimer used in most Malaysian laboratories is not sensitive in ruling out VTE; (2) the AF CPG (2012), Table 14 footnote: a symbol is lost in print before 160 (hypertension), 2 (bilirubin) and 3 (enzymes), and the creatinine threshold is printed \u2265200 mmol/L; (3) the Ottawa SAH rule\'s age: 40 or older (JAMA 2013) or over 40 (CMAJ 2017, Figure 1): the guide uses 40 or older; (4) burns: the department\'s own referral route, its fluid formula (RCH uses 3 ml/kg/%TBSA, VicBurns 3 to 4, its adult poster 4) and the paediatric TBSA chart it uses; (5) alcohol withdrawal: the department\'s regimen for a CIWA-Ar of 10 or more, which the guide\'s sources do not give.',
  'From the children\'s heart and breathing rates added on 16 Nov 2026 (Fleming et al., Lancet 2011, Web Tables 4 and 5): the paper gives centiles of healthy children and does not say which centile makes a rate abnormal. Still to confirm: which ranges or centile the department and its paediatric triage use for a child\'s heart rate and breathing rate, and whether the guide should mark one.',
  'The ED extension directory (Nombor Sambungan Jabatan – ED, added 12 Nov 2026) prints no issuer or date. Still to confirm: (1) three numbers are printed for two rooms each: 6699 for Bilik Porter PPK and Pejabat Rekod Kecemasan, 6590 for the MOIC (Bilik Pegawai Perubatan (YM)) and Bilik PPK (YM), and 5346 for Bilik Ketua Jururawat and Pejabat Pengurusan (Penyelia/Matron): shared lines, or slips? (2) Who keeps the list, and its date.',
  'The ED dosing and dilution guide (3rd edition, January 2026; added 12 Nov 2026) is shown as printed. Still to confirm with its authors: (1) midazolam, page 126: the high-dose Midafentanyl syringe prints "60 mg midazolam + 600 mg fentanyl to 60 ml", while the same page prints 300 mcg fentanyl in 30 ml and a final 10 mcg/ml of fentanyl (the general ICU\'s own dilution guide, 5th edition, April 2026, p12, also dilutes fentanyl to a final 10 mcg/ml); (2) the guide\'s own high alert badge and the hospital\'s 2026 list differ (dextrose 20%, diazepam and phenobarbital carry the badge but are not on the list; potassium dihydrogen phosphate and sodium bicarbonate 8.4% are on the list without the badge).',
  'From the HKL doctors starter pack (added 12 Nov 2026). Still to confirm: (1) medicines on one outpatient prescription: eight (Director\'s memo, 27 May 2019) or five (MOH quick guide 2020, p21; the hospital\'s Good Prescribing Practice slides)? (2) the death certificate duplicate: within 72 hours of discharge (the Medical Records video, Oct 2022) or within 24 hours (the form\'s own header)? (3) abbreviations: the pharmacy\'s accepted list and the MOH guide accept PCM and EES; the 2025 Good Prescribing Practice rules say write paracetamol, not PCM; (4) the GXM video (2023) asks for at least 5 ml in an adult and a printed label on the back of the form; the March 2026 transfusion memo in the guide says EDTA 3 to 4 ml and handwritten labels only.',
  'Department memos added on 12 Nov 2026 (Green Zone memos and the Yellow Zone menu). Still to confirm: (1) the elderly memo HKL/JK/98/188/3(14)2021 of 12 May 2021 (no IV tramadol over 65; elderly waiting for a primary team in the Yellow Zone): still in force? (2) the POCT memo HKL/JK/98/188/1(24)2023 of 8 Nov 2023 was issued for a reagent shortage: are its limits on stat FBC and ABG still in force? (3) repeat BP, ECG and DXT: memo HKL/JK/98/188/3(9)24 says Bilik 9, the one-way flow note says the Procedure Room: the same room? (4) is the LA OT Google Form (memo HKL/JK/98/188/3(23)22) still the way to book?',
  'The ED pharmacy drug list (added 12 Nov 2026) is the Emergency Pharmacy\'s list of 14 Apr 2025, with each drug\'s MOH formulary category. Still to confirm: (1) is a later list out? (2) how the ED applies the categories A/KK, A and A* when an MO writes the prescription (the formulary says who may start one; does the EP countersign?); (3) row 72, Gamma Benzene Hexachloride: the scan\'s decimal mark is unclear (read as 0.1%), and the formulary lists only 1%.',
  'EM Watch booking is now in the app from work instruction AK-15 (in force 16 Mar 2026, p12). A pink EM Watch form (four pages, no form number or date printed) was given by the guide owner on 18 Nov 2026 and is in the app. Still to confirm: (1) whether it is AK-15\'s Pink Form (Lampiran 1), and whether the slip cut off on its page 4 is the EM WATCH Appointment form (Lampiran 2); (2) its age condition, "Berumur lebih 18 tahun/penjaga" (over 18, or a guardian; its consent is signed by "the patient or authorised guardian"), against 18 and over in AK-15 and the department policy: may a patient under 18 use EM Watch with a guardian?; (3) its other conditions: a smartphone with WhatsApp and the know-how to make a video call, where AK-15 gives a smartphone or tablet with stable internet, used alone or with the family\'s help; "not Huawei" (the 2023 deck) is not on it; and "Pesakit tidak memerlukan pemeriksaan secara fisikal" (no physical examination needed; also the triage course, slide 27), which AK-15\'s criteria as the guide has them do not list; (4) the clinic\'s hours on the slip, Monday to Saturday 8 am to 2 pm, closed on Sunday, which no other source gives. (The clinic\'s mobile number, printed on pages 2 to 4, stays covered in the guide, by the guide owner\'s decision of 18 Nov 2026.) Also still to confirm: the timing: AK-15 aims to reassess within 48 to 72 hours and to review CT brain reports within 48 hours of discharge, where the department policy (2026, 9.2.1) and the 2023 deck give 1 week; and the deck\'s online prescription against AK-15\'s documents collected at the Record Unit.',
  'Redirection is in the app in part: a primary triage decision by the PPP for Level 5 (9XXX), with a Redirection Slip and the Redirection Book (AK-01, 2026; memo HKL/JK/98/188/3(2)24, 11 Jan 2024; the 2021 policy). Still to confirm: how a Green Zone MO redirects a patient already seen in the consultation room; whether private GPs are included; whether the 2021 hours (0730 to 1930, Monday to Friday), slip and list of Klinik Kesihatan are current; and the redirection procedure AK-01 cites (HKL/JK/PK 0x), which is not in the department\'s folder.',
  'EMACC follows memo HKL/JK/98/188/3(01)24 of 11 Jan 2024 since 12 Nov 2026 (the guide owner\'s decision), in place of the SOP of 1 Feb 2018: the TCA on the slip hijau and Counter 10, 7.30 am to 3.30 pm, the first visit no earlier than day 4 (urgent) or day 5, at most 2 visits within a month, blood results to EM WATCH; and EMACC runs 8 am to 3 pm, Monday to Friday (the guide owner, 12 Nov 2026). Still to confirm: a written source for those hours (the memo prints 7.30 am to 3.30 pm for the MOs, and the department policy, 2026, 8.3.3, 9 am to 4 pm on working days); work instruction AK-13 (an unsigned 2026 copy) phones the registration counter for a Google Sheet slot from 4 days after discharge; no 2026 document prints ext 7040; who EMACC is for still comes from the 2018 SOP; and the ebook\'s "EMACC or EMWATCH in 24 to 48 hours" (for example abdominal pain) against the memo\'s first EMACC visit on day 4 or day 5.',
  'Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents; a 2020 department table gives ext 5137 and 6838), the SCAN team line and the IPR on-call line.',
  'The MERS-CoV case definition, which is not in the PUI file.',
  'The MOH snakebite guideline (2017): Tables 15 and 16 leave four pit vipers and a krait\'s second choice blank, and give no dose for an unidentified bite and no maximum; and in HKL, where an observation-only or post-antivenom patient goes, who arranges the bloods at 5-7 days, the antivenom stock, and the RECS contact. CPG-REVIEW-SNAKEBITE.md.',
  'The written source for "only the EP can allow a down-triage": the down-triage memo of 4 Oct 2022 says the MO must examine first and document it, but does not mention the EP.',
  'Where the calculators\' sources stop: paracetamol at exactly 50 kg; a creatinine clearance of exactly 30 for fondaparinux and Clexane; how to split the total daily insulin dose into basal and bolus; which SOAP band counts as moderate dehydration, and how to treat a child over 10% dehydrated; whether there is a first-line drug at BARS 7; for paracetamol overdose, the activated charcoal dose, the N-acetylcysteine regimen (answered in part on 12 Nov 2026: the hospital\'s circular of 10 Jan 2022, on the paracetamol overdose entry and its calculator, gives three bags, or two with fluid restriction or under 40 kg; the MOH Antidotes Quick Guide, 2022, gives two), the nomogram treatment line and which band exactly 8 hours belongs to; and child doses in anaphylaxis.',
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
  'The geriatric hip fracture CPG (2023): with a normal X-ray but a fracture still suspected it asks for CT or MRI and an orthopaedic referral, where the department\'s notes give a repeat X-ray, EMACC (the first visit on day 4 or 5 since memo (01)24) or the orthopaedic clinic: who orders the CT; its Appendix 3 doses for the elderly against the ebook and the analgesia calculator; and which clinic takes the older faller without a fracture. CPG-REVIEW-HIP-FRACTURE.md.',
  'The cancer pain CPG (2023): the starting dose of oral immediate-release morphine (5 mg, 5 - 10 mg or 3 - 5 mg); its Algorithm 2 against the ebook\'s morphine protocol, and which zone runs it; which naloxone regimen (40 mcg every 1 - 3 minutes, or 20 mcg every two minutes); which team takes cancer pain referrals; and its p24 conversion ratio against Table 4, so the app converts no opioid doses. CPG-REVIEW-CANCER-PAIN.md.',
  'The type 2 diabetes CPG (2020, summarised): which total daily insulin dose and split to use outside DKA (the ebook\'s 0.2 - 0.5 unit/kg/day, the CPG\'s split after DKA, or its basal start), which answers part of the calculators item above only for that case; its hypoglycaemia doses and the ebook\'s admission and discharge rules, which it lacks; metformin under an eGFR of 45; SGLT2 inhibitors under 30; and euglycaemic ketoacidosis in the blood gas rule. CPG-REVIEW-T2DM.md.',
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
  'The 48-hour EMWATCH appointment for a CT brain review (memo HKL/JK/98/188/3(21)23, 10 Oct 2023): which cases count as "neuromedical" (head injury?), and whether it stands beside AK-15\'s 48 to 72 hours. The guide\'s rules, discharge check, journey and quiz say "an EM Watch or EMACC appointment" for a CT brain review, while EMACC now sees patients from day 4 (memo (01)24): should EMACC stay in that line?',
  'Obesity in dengue sits in three zones across the sources: morbid obesity to Red (the department\'s Dengue SOP 2.0 note), the high-risk line of Appendix 7 to Yellow, and Group B1, Green, in the Quick Reference (p5) and Tables 6 and 8, which the guide follows since 12 Nov 2026. Which does the department use for morbid obesity?',
  'Who makes the police report when the next of kin of a patient discharged by Psychiatry cannot be reached within 4 hours (memo HKL/JK/98/188/3(11)23), and for an absconded patient within 24 hours (department policy 2026, 32.4.2)?',
  'The IV antibiotic flow chart (memo HKL/JK/98/188/3(10)26, 30 Jun 2026): note 1 gives the bed priority as Yellow Observation, Wad ISO or ISO 3, note 4 as Yellow Observation or "Wad ISO 2".',
  'Mass casualty incidents: what counts as one (more than 2 casualties in the 2026 hospital plan, p30; 20 or more in PK-03, 2011; tag counts in the business continuity plan); what happens to the patients already in the Green Zone; and an action card for an MO or house officer, which none of the documents read has. The ED\'s internal disaster flow chart and the external disaster action cards on the disaster link page need an MOH sign-in.',
  "Triage course, Lecture 4 (Referral System) (TAG Warrior Course, ETD HKL, 2026): these slides differ from the ebook or a dated department document, or need a source, so they are not in the guide as rules until the department confirms them. (1) Slide 3's footnote \"Low threshold for admission if have recurrent visit to ed or multiple health care facilities in 48 hours\" differs from safe-practice--dc (\"Came back within 48 hours, or after several GP visits: admit\") and gz-rules--reas (a senior look at 24 hours). (2) Slide 3 sends \"Investigating palpitation\" to the Klinik Kesihatan, where its own slide 13 and the outpatient-referral table send palpitations to the MAU FAST clinic. (3) Slide 3 sends \"Thyroid swelling\" to the Klinik Kesihatan (kept in the referral map as printed); the guide sends suspected hyperthyroidism with a TFT pending to MAU FAST. Confirm the two do not overlap. (4) Slide 3's fractures for the on-call MO (\"Long bone fracture, fracture involving joint or growth plate, displaced fracture\") are not the Lampiran 1 list of the memo of 17 May 2024. (5) Slide 3's \"Special situation: early TCA\" under the on-call MO is unclear. (6) Slide 9, memo point 2.1.1 (the ETD team does the CMR first if Orthopaedics cannot reduce a dislocation at once) goes further than referral-rules--orthoc. (7) Slide 10's Lampiran 1 urgent list is wider than the referral-rules--ortho checklist: wounds involving muscle or dirty wounds, ligament injury with gross swelling, fractures with dislocation, angulation or overriding. (8) Slide 13 says \"CURB score 0,1 only\" where outpatient-referral says CURB-65 of 0 to 1. (9) Slide 14's IPR poster lists \"Needing further investigation (CT Scan, OGDS, Colonoscopy)\" and \"biggest diameter >60CM\", which referral-rules--ipr lacks, and does not carry the guide's \"Not on inotropic support\". (10) Slide 27 gives EMACC \"Result: x-ray report\" and EM Watch \"Result: investigation, CT report\": answered on 12 Nov 2026, since memo (01)24 also sends X-ray reports to EMACC and blood results to EM Watch. (11) The memo points in referral-rules--orthmemo (2.1.4, 2.6 to 2.10) were read from a slide image in Malay: check them against the memo PDF.",
  "Triage course, Lecture 4 (Handing over) (TAG Warrior Course, ETD HKL, 2026): these slides differ from the ebook or a dated department document, or need a source, so they are not in the guide as rules until the department confirms them. (1) Slide 4's shift and registration times for MOs and the TL are mistyped (\"230am\", \"730pm\", \"700pm\") and cannot be used as typed. (2) Slide 13's \"NBA>6h to EP\" has no dated department document behind it in the guide; the nearest lines are the 4-hour ones in the dengue notes and gz-rules--ep4. (3) Slides 8 and 9 hand over by a list (Patient, History and DDX, IX, Referral), where communication--hand teaches ISBAR: which format does the department want, and are the two \"Future updates & improvements\" paper forms in use? (4) \"30 minutes before end for the shift\" (in handover--chk, as typed) is ambiguous.",
  "Triage course, Lecture 5 (Commonly missed fracture) (TAG Warrior Course, ETD HKL, 2026): these slides differ from the ebook or a dated department document, or need a source, so they are not in the guide as rules until the department confirms them. (1) Slide 29's knee X-ray rule prints \"Age ≥55 years\" in its table and \">55\" beside it, and quotes the Ottawa knee rules from outside the department: the whole rule is left out of missed-fractures.",
  "Triage course, Lecture 6 (Approach to abdominal pain) (TAG Warrior Course, ETD HKL, 2026): these slides differ from the ebook or a dated department document, or need a source, so they are not in the guide as rules until the department confirms them. (1) Slide 23's safety-net script (\"don't keep taking the pain killer\", no follow-up date) differs from the ebook's abdominal pain advice (paracetamol; EMACC or EM Watch in 24 to 48 hours): the script is left out. (2) Slide 17's \"Amylase – Consider if there's guarding, vomiting\" differs from safe-practice--abd (\"Epigastric pain: ECG ± amylase\"). (3) Slide 15's gloss \"(asymptomatic elevated blood pressure)\" on hypertensive urgency adds a word the ebook's hypertensive-urgency lead does not use. (4) The deck's true case of a missed appendicitis is in the abdominal pain notes without an exact age, hospital or doses; three readings are kept because the teaching turns on them. Say if it should be cut further.",
  "Triage course, CBD 2 (TAG Warrior Course, ETD HKL, 2026): these slides differ from the ebook or a dated department document, or need a source, so they are not in the guide as rules until the department confirms them. (1) Slide 15 (rabies) differs from the HKL protocol of October 2022 in animal-bites on dose (1 ml IM), schedule (days 0, 3, 7, 14 and 28, alternative day 30; days 0 and 3 if fully immunised), exposure categories, immunoglobulin for every Category 3 and a stop rule: the whole slide is left out. (2) Slide 23's \"IV Morphine 4mg STAT\" for a 65-year-old differs from the ebook's morphine pain protocol in pain (0.5 mg steps over 60 years). (3) Slide 24's pain score row (under 6 keep, 6 or more uptriage) differs from the ebook's \"Pain score over 6?\" and the policy's 7; the table's other three rows are in. (4) Slide 6's \"CORRECT TRIAGE: LEVEL 3 = YZ/ Y OBS … redirect immediately to Y OBS\" differs from gz-rules--dengue (memo of 23 Mar 2023: direct to the Observation Ward). (5) Slide 6's \"Dengue fever without warning sign with/without special population ONLY allowed to be triaged to GREEN ZONE\" differs from the Dengue SOP 2.0 note in dengue. Its \"Platelet <50\" point is kept as printed although the case's count is 80. (6) Slide 9's antibiotics (\"IV cefepime or IV tazocin\"; \"IV ceftriaxone or IV tazocin\") include two not on the IV antibiotic memo's list of 30 Jun 2026: the names are left out. (7) Slide 11's FBC intervals (\"EOD FBC in KK or GP\" if the combo is negative, \"daily FBC\" if positive) are left out: the ebook gives none, and the dengue CPG says daily follow-up. (8) Slide 16's speaker note grades the foot ulcer by Wagner, where diabetic-foot-cpg uses the University of Texas classification. (9) Kept as the slides print them, from outside sources the decks do not name: the bite slide's figures (5% and 80% infection risk, cat-scratch at 7 to 12 days, \"Does not transmit leptospirosis\", cloxacillin and Augmentin with no dose), \"IM diclofenac\" for the sudden headache with no dose, SNOOP4 and the low-risk headache criteria, the burn points and the six tibial plateau types. Confirm each, or name its source. (10) Does the \"wrong triage QR\" register in case 2 exist?",
  "Reading X-rays is built from named online sources in the guide's own words (the guide owner, 10 Nov 2026), not from a department document. Still to confirm with the department: (1) Hot reporting: does HKL have it, and who reviews a late radiology report, and by when? (NICE NG38 wants a report before discharge; RCEM, 2023, sets a 72-hour review of abnormal reports.) (2) Who reviews a doubtful film? No source lists the findings that must go to a senior; the guide only has \"ask the EP first\" in referral-rules--ortho. (3) Ottawa ankle and foot rules: which ages and exclusions does the department follow (under 18 excluded on the NHS Scotland sheet; over 5 years in NICE NG38; under 6 or over 55 on WikEM)? The rule's wording comes from secondary sources, because the original papers are not open. (4) Ottawa knee rule: is the age \"55 or over\" (ACR) or \"over 55\" (WikEM)? Is weight-bearing one criterion or two? The checklist follows the ACR narrative; what is the youngest age it applies to? (5) A suspected scaphoid fracture with a normal film: the sources give MRI first, MRI at 10 days, repeat films at 10 to 14 days or at 2 to 3 weeks, and the guide's EMACC entry gives the first visit on day 4 or 5 (memo (01)24). Which next test, and when? (6) Occult hip fracture and hip views are kept out of the X-ray guide, because the hip fracture CPG entry holds the local answer (CT as the local choice; its own views) and NICE CG124 and Radiology Masterclass differ from it. (7) Abdominal film: the ebook's abdominal pain pathway lists \"CXR (erect) with or without abdominal X-ray\"; the RCR's list of indications does not include abdominal pain alone. xray-guide--abno says so and points to the ebook as the approved pathway. (8) Elbow extension test (Appelboam, BMJ 2008): how would a Green Zone patient be brought back at 7 to 10 days? (9) The adult cervical spine film is left out (the guide owner, 10 Nov 2026): the head injury CPG (2015) still uses three-view films, where NICE and the ACR now send adults who need imaging to CT.",
  "The abdominal pain handbook against the ebook (12 Nov 2026): the handbook is a teaching synthesis and the ebook stays the department's pathway; where they differ, the department should say which to teach. (1) Follow-up of non-specific abdominal pain: the handbook (p22, after RCEMLearning) arranges a time-bound review \"often within 12-24 h if unresolved\"; the ebook (p11) gives EMACC or EMWATCH in 24 to 48 hours. (2) IV morphine titration: the ebook gives 1 mg at 60 years old or below; MOH Pain Management in ETD 2020, Appendix 2, which the handbook quotes, gives 0.5 mg at 60 or older, so a patient of exactly 60 gets a different dose. (3) IV fentanyl: the ebook's table lists 50-100 mcg; MOH 2020 lists 25-50 micrograms as the initial alternative. (4) Renal colic imaging: the handbook cites NICE NG118 (low-dose non-contrast CT within 24 h in adults); the ebook's pathway uses POCUS, an urgent KUB ultrasound by radiology and an early TCA for KUB ultrasound.",
  "The ebook against the guide (checked line by line, 12 Nov 2026): two printed numbers where the guide or a calculator reads the print one way and the department should confirm it. (1) Acute behavioural disturbance, p8: midazolam for a child is printed \"IM 0.1-0.2 mg/kg – 0.5mg/kg\" in the Starting Dose column; the guide and its calculator read the 0.5 mg/kg as a maximum. (2) Pain, p50: paracetamol under 50 kg is printed \"Max 60mg/kg/dose\"; the guide and its calculator say 60 mg/kg/day."
];

/* A pearl for each shift, each with its own source (12 Nov 2026: the sources were a separate list matched by position,
   which slipped by one when the dengue pearl went first) */
const MRH = 'Million Ringgit Habits, ETD HKL';
const TIPS = [
  {t:'Persistent vomiting in the febrile phase is not a dengue warning sign: warning signs are most predictive in the critical phase, when the fever settles.', href:'#dengue-cpg', l:'Dengue CPG, p15', src:'CPG Management of Dengue in Adults, 4th edition (MaHTAS, 2026), p15'},
  {t:'Discharge abdominal pain only when the pain score is 0, with a clear diagnosis and safety-net advice.', href:'#safe-practice--abd', l:'Million Ringgit Habits', src:MRH},
  {t:'Pain out of proportion in a limb: think of ischaemia or compartment syndrome, check the distal pulses and refer early.', href:'#safe-practice--limb', l:'Limbs and fractures', src:MRH},
  {t:'Came back within 48 hours, or after several GP visits? Admit.', href:'#safe-practice--dc', l:'Before any discharge', src:MRH},
  {t:'Stroke can be subtle: persistent dizziness, sudden blurred vision, or one weak limb. Lower your threshold to scan or admit.', href:'#safe-practice--subtle', l:'Subtle stroke', src:MRH},
  {t:'Admit any febrile infant under 3 months.', href:'#safe-practice--subtle', l:'Children', src:MRH},
  {t:'If it is not written, it is not done: record timings, vital signs, counselling and the follow-up advice you gave.', href:'#safe-practice--notes', l:'Notes and records', src:'Medicolegal tip of the day, MO Drive, Jun 2026'},
  {t:'Localised tenderness with a normal X-ray: treat it as a fracture, explain, and arrange a follow-up X-ray.', href:'#safe-practice--limb', l:'Limbs and fractures', src:MRH},
  {t:'Record the LMP of every woman of reproductive age, and think of ectopic pregnancy whatever her marital status.', href:'#safe-practice--abd', l:'Abdominal pain', src:MRH + '; KKM circular on ectopic pregnancy, 31 May 2018'},
  {t:'Men with abdominal pain: examine the testes. The torsion window is 6 hours.', href:'#safe-practice--abd', l:'Abdominal pain', src:MRH},
  {t:'Do not discharge a patient who cannot walk. Ask whether they have been to the toilet, and document it.', href:'#safe-practice--limb', l:'Limbs and fractures', src:MRH},
  {t:'Do not repeat the ECG, dressing or vital signs after secondary triage unless they were missed.', href:'#gz-rules--oneway', l:'One-way flow', src:'HKL ED one-way procedure flow (Green Zone); KKM MTS announcement, Jul 2026'}
];

/* ================= Icons ================= */
const ICONS = {
  install:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.6"/><path d="M12 7v7M9 11.2l3 3 3-3M10.5 18.3h3"/>',
  share:'<path d="M7 10H6a1.5 1.5 0 0 0-1.5 1.5v8A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 18 10h-1M12 3v12M8.5 6.5 12 3l3.5 3.5"/>',
  kebab:'<circle cx="12" cy="5.5" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="18.5" r="1.3"/>',
  dots:'<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>',
  burger:'<path d="M4.5 7h15M4.5 12h15M4.5 17h15"/>',
  tick:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  wifi:'<path d="M2.8 9a13.5 13.5 0 0 1 18.4 0M6 12.4a9 9 0 0 1 12 0M9.2 15.8a4.5 4.5 0 0 1 5.6 0"/><circle cx="12" cy="19.2" r="1.1"/>',
  nowifi:'<path d="M2.8 9a13.5 13.5 0 0 1 18.4 0M6 12.4a9 9 0 0 1 12 0M9.2 15.8a4.5 4.5 0 0 1 5.6 0M3.5 3.5l17 17"/><circle cx="12" cy="19.2" r="1.1"/>',
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
  pin:'<path d="M9.5 3.5h5l-.9 5.6 3.4 3.4H7l3.4-3.4zM12 12.5v8"/>',
  send:'<path d="M4 12h12.5"/><path d="m11.5 6.5 5.5 5.5-5.5 5.5"/><path d="M20 5v14"/>',
  step:'<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5 14 12l-3.5 3.5"/>',
  todo:'<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  triage:'<path d="M4 9.5 10.5 3H19a1 1 0 0 1 1 1v8.5L13.5 19a1.8 1.8 0 0 1-2.5 0L4 12a1.8 1.8 0 0 1 0-2.5z"/><circle cx="15.5" cy="7.5" r="1.5"/>',
  stetho:'<path d="M6 3.5v5a4 4 0 0 0 8 0v-5"/><path d="M10 12.5v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10.5" r="2"/>',
  syringe:'<path d="m14 4 6 6M17 7l-8.5 8.5L5 16l.5-3.5L14 4"/><path d="m4 20 2.4-2.4M10 10.5l3.5 3.5"/>',
  pill:'<path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7z"/><path d="m8.5 8.5 7 7"/>',
  chair:'<path d="M7 4v8.5h10V20M7 12.5V20M17 12.5V8"/><path d="M5 12.5h14"/>',
  review:'<path d="M14 3.5H7A2 2 0 0 0 5 5.5v13a2 2 0 0 0 2 2h4"/><path d="M8.5 8h6M8.5 11.5h3"/><circle cx="16" cy="15.5" r="3.3"/><path d="m18.5 18 2 2"/>',
  map:'<path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20z"/><path d="M9 4v13.5M15 6.5V20"/>',
  stop:'<path d="M8.3 3.5h7.4l4.8 4.8v7.4l-4.8 4.8H8.3l-4.8-4.8V8.3z"/><path d="M12 8v5M12 16.2h.01"/>',
  flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 3.5 2 3.5H5"/>',
  comment:'<path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-4.2A7.5 7.5 0 1 1 20 11.5z"/><path d="M9 10.5h6M9 13.5h4"/>',
  mic:'<rect x="9" y="3" width="6" height="11.5" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/>',
  qr:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 19.5h1.5M19.5 14H20"/>',
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
  if (!s){ if (wbT) wbDue(); clearInterval(wbT); wbT = null; }
}
/* Time to tip the tube: a long buzz, held until the guide is back on screen if the phone had moved to another app */
let wbLate = false;
function wbDue(){ if (document.visibilityState === 'visible') buzz('alarm'); else wbLate = true; }
document.addEventListener('visibilitychange', () => { if (wbLate && document.visibilityState === 'visible'){ wbLate = false; buzz('alarm'); } });
function wbctStart(){ wbEnd = Date.now() + 1200000; clearInterval(wbT); wbT = null; wbTick(); wbT = setInterval(wbTick, 1000); }
/* ================= Bedside reminders (17 Nov 2026) =================
   Where a step prints a short bedside interval ("Reassess after 10 minutes", "repeat every 20 minutes"), a button starts a
   reminder for that interval, as printed. REMIND lists each step, the minutes and the phrase that sets them, and the test checks
   that every phrase is still in its step. Several can run at once, in a tray at the foot of the screen. Like the 20WBCT timer, a
   reminder lives in memory only: it holds the step's address and the time, never anything about a patient, and nothing is typed
   (standing rule 4); a reload clears it. When one is due it buzzes and opens the tray; if the phone had moved to another app, it
   does so when the guide is back on screen. */
const REMIND = {
  'anaphylaxis--airp':[[10, 'Nebulised adrenaline, repeat every 10 minutes']],
  'asthma--m1':[[10, 'Reassess after 10 minutes']],
  'asthma--m2':[[10, 'reassess after 10 minutes; may repeat up to 3 times']],
  'asthma--s1':[[20, 'may repeat every 20 minutes (up to 3 times)']],
  'hypoglycaemia--r15':[[15, 'Reassess in 15 minutes']],
  'pain--np':[[30, 'Reassess in 30 minutes to 1 hour']],
  'pain--m1':[[5, 'Reassess in 5 minutes']],
  'pain--m05':[[5, 'Reassess in 5 minutes']],
  'children--asthma':[[20, 'repeat every 20 minutes (max 3 cycles in 1 hour)'], [60, 'observe 60 minutes']],
  'asthma-cpg--mmt':[[20, 'repeat every 20 minutes for 1 hour']],
  'asthma-cpg--svt':[[20, 'repeat every 20 minutes for 1 hour']],
  'asthma-cpg--ltx':[[20, 'repeat every 20 minutes for 1 hour']],
  't2dm-cpg--hchk':[[15, 'Glucose rechecked every 15 minutes']]
};
let rems = [], remT = null, remSeq = 0, remOpen = false;
const remFmt = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const remHref = addr => { const [id, k] = addr.split('--'); return '#' + (P[id].start === k ? id : addr); };
function remBtns(id, k){
  const r = REMIND[id + '--' + k]; if (!r) return '';
  return `<div class="rmd-b">${r.map(([m, ph], i) => `<button type="button" class="soft" data-remind="${id}--${k}" data-ri="${i}">${svg('clock')}<span>Remind me in ${m} min</span></button><small>The step says: “${esc(ph)}”. The reminder holds only this step and the time${CAN_BUZZ && prefs.buzz !== 'off' ? ', and buzzes when it is due' : ': this phone cannot vibrate for it, so watch for it on screen'}.</small>`).join('')}</div>`;
}
function remStart(addr, i){
  const [m, ph] = REMIND[addr][i], [id] = addr.split('--'), old = rems.find(r => r.addr === addr && r.i === i);
  if (old){ old.end = Date.now() + m * 60000; old.due = old.late = false; }
  else rems.push({n:++remSeq, addr, i, m, ph, t:P[id].title, end:Date.now() + m * 60000, due:false, late:false});
  buzz('ok'); toast(old ? `Reminder restarted: ${m} min` : `Reminder set: ${m} min`);
  remDraw(); if (!remT) remT = setInterval(remTick, 1000);
}
function remTick(){
  const now = Date.now(); let rang = false;
  rems.forEach(r => { if (!r.due && r.end <= now){ r.due = true; rang = true; if (document.visibilityState === 'visible') remRing(r); else r.late = true; } });
  if (rang) remDraw();
  else $$('#rmd [data-rn]').forEach(o => { const r = rems.find(x => x.n === +o.dataset.rn); if (r && !r.due) o.textContent = remFmt(r.end - now); });
  if (!rems.some(r => !r.due)){ clearInterval(remT); remT = null; }
}
function remRing(r){ buzz('alarm'); remOpen = true; const l = document.getElementById('rmdlive'); if (l) l.textContent = 'Reminder due: ' + r.ph + ', ' + r.t; }
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  const late = rems.filter(r => r.late); if (!late.length) return;
  late.forEach(r => { r.late = false; }); remRing(late[0]); remDraw();
});
function remDraw(){
  const el = $('#rmd'); if (!el) return;
  document.documentElement.classList.toggle('rmd-on', rems.length > 0);
  if (!rems.length){ el.hidden = true; el.innerHTML = ''; remOpen = false; return; }
  const now = Date.now(), due = rems.filter(r => r.due), run = rems.filter(r => !r.due).sort((a, b) => a.end - b.end), top = due[0] || run[0];
  const left = r => r.due ? 'Due now' : remFmt(r.end - now);
  const row = r => `<li class="${r.due ? 'due' : ''}"><span class="rmd-t"><b>${esc(r.ph)}</b><small>${esc(r.t)}</small></span><output${r.due ? '' : ` data-rn="${r.n}"`}>${left(r)}</output><span class="rmd-a"><a class="btn sm" href="${remHref(r.addr)}" data-ropen>Open the step</a>${r.due ? `<button type="button" class="sm" data-ragain="${r.n}">Again, ${r.m} min</button>` : ''}<button type="button" class="ib" data-rdone="${r.n}" aria-label="${r.due ? 'Done: clear this reminder' : 'Cancel this reminder'}">${svg('x')}</button></span></li>`;
  el.hidden = false;
  el.className = 'rmd' + (due.length ? ' is-due' : '') + (remOpen ? ' open' : '');
  el.innerHTML = `<button type="button" class="rmd-p" id="rmdp" aria-expanded="${remOpen}" aria-label="Reminders: ${rems.length}. ${due.length ? 'Due: ' : 'Next: '}${esc(top.ph)}">${svg('clock')}<span class="rmd-pt"><b>${due.length ? 'Due: ' : ''}${esc(top.ph)}</b><small>${esc(top.t)}</small></span><output${top.due ? '' : ` data-rn="${top.n}"`}>${top.due ? 'Now' : remFmt(top.end - now)}</output>${rems.length > 1 ? `<span class="rmd-n">${rems.length}</span>` : ''}</button>`
    + (remOpen ? `<div class="rmd-l"><ul>${[...due, ...run].map(row).join('')}</ul><p class="rmd-note">Reminders live on this screen only. They hold the step and the time, nothing about the patient, and a reload clears them.</p></div>` : '');
}
/* wired from the start-up line, once the page's helpers exist */
function remWire(){ const el = document.getElementById('rmd'); if (el) el.addEventListener('click', e => {
  const t = e.target;
  if (t.closest('#rmdp')){ remOpen = !remOpen; remDraw(); const p = $('#rmdp'); if (p) p.focus(); return; }
  const a = t.closest('[data-ragain]'), d = t.closest('[data-rdone]');
  if (a){ const r = rems.find(x => x.n === +a.dataset.ragain); if (r) remStart(r.addr, r.i); return; }
  if (d){ rems = rems.filter(x => x.n !== +d.dataset.rdone); remDraw(); const p = $('#rmdp'); if (p) p.focus(); return; }
  if (t.closest('[data-ropen]')){ remOpen = false; setTimeout(remDraw, 0); }
}); }
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
/* X-ray films with the normal anatomy outlined (data14.js, XFILMS): the film, the guide's own outlines over it, a key of the
   parts (tap one to light it on the film), a switch to hide the outlines, and the credit the film's licence asks for. */
function filmHTML(k){
  const f = XFILMS[k]; if (!f) return '';
  const pts = p => p.map(q => q.join(',')).join(' ');
  /* The key: a pill per part; a film with many parts (the hand) groups them (f.groups), and a group opens to its parts */
  const pill = p => `<li><button type="button" data-xk="${p.k}" aria-pressed="false"><i>${f.parts.indexOf(p) + 1}</i>${esc(p.t)}</button></li>`;
  const grouped = new Set((f.groups || []).flatMap(g => g[1]));
  const key = (f.groups || []).map(g => `<li class="xf-g"><button type="button" data-xg="${g[1].join(' ')}" aria-expanded="false"><i>${g[1].length}</i>${esc(g[0])}</button><ul hidden>${g[1].map(x => pill(f.parts.find(p => p.k === x))).join('')}</ul></li>`).join('') + f.parts.filter(p => !grouped.has(p.k)).map(pill).join('');
  return `<figure class="fig xf" data-xf="${k}"><div class="xf-bar"><b>${esc(f.t)}</b><button type="button" class="sm" data-xf-toggle aria-pressed="true">Outlines on</button></div>` +
    `<div class="xf-stage" style="aspect-ratio:${f.w}/${f.h}"><img src="xray/${k}.webp" width="${f.w}" height="${f.h}" loading="lazy" decoding="async" alt="${esc(f.alt || f.t)}"><svg viewBox="0 0 ${f.w} ${f.h}" aria-hidden="true" focusable="false">${f.parts.map(p => `<polygon data-xp="${p.k}" points="${pts(p.p)}"/>`).join('')}</svg></div>` +
    `<ul class="xf-key" aria-label="Parts outlined on the film">${key}</ul>` +
    `<figcaption>Tap a name to light that part on the film${f.groups ? '; a group opens to its bones' : ''}. The outlines are this guide's own tracing by eye, a teaching aid and not a measurement; where one part runs on into the next, the line between them is a guide, not an edge on the film. ${esc(f.names)} ${esc(f.credit)}</figcaption></figure>`;
}
if (typeof XFILMS !== 'undefined') Object.keys(XFILMS).forEach(k => { FIGS['xf-' + k] = () => filmHTML(k); });
/* ================= Department memos (12 Nov 2026, data18.js) =================
   A memo card on the step that quotes it: its number, date and title as printed, and its own scanned pages
   (app/memo/<key>-p<N>.webp, with the signature and registration numbers covered), each opened with a tap in the
   page viewer. Nothing loads before the tap. */
/* A page is a number (<dir>/<key>-p<N>), 'tile' (its tile on the link page, <dir>/tile-<key>) or a file name in <dir> */
const memoSrc = (k, n, dir) => typeof n === 'number' ? `${dir}/${k}-p${n}` : n === 'tile' ? `${dir}/tile-${k}` : `${dir}/${n}`;
const memoHTML = k => { const m = MEMOS[k], dir = m.dir || 'memo', sp = dir !== 'memo';
  return `<div class="fig figmemo${sp ? ' mm-sp' : ''}"><div class="mm-h"><span class="mm-chip">${svg(sp ? 'link' : 'rule')}${esc(m.kind || 'Department memo')}</span><span class="mm-ref">${esc(m.ref)} · ${esc(m.date)}</span></div>
    <p class="mm-t" lang="ms">${esc(m.t)}</p>
    <div class="mm-p">${m.pages.map(([n, l]) => `<button type="button" class="pill" data-ppage="${memoSrc(k, n, dir)}" data-pname="${esc((sp ? m.t : m.kind ? m.ref : 'Memo ' + m.ref) + ' · ' + l)}">${svg('poster')}${esc(l)}</button>`).join('')}${m.list === false ? '' : `<a class="pill" href="${m.list || MEMO_LIST}" target="_blank" rel="noopener noreferrer">${esc(m.lname || 'The department\'s memo list')}${svg('ext')}</a>`}</div>
    <p class="fig-cap">${esc(m.cap || 'The memo as scanned, a page at a tap: signatures, registration numbers and any incident background are covered. The department\'s own list holds every memo.')}</p></div>`; };
if (typeof MEMOS !== 'undefined') Object.keys(MEMOS).forEach(k => { FIGS['memo-' + k] = () => memoHTML(k); });
/* Several sources on one step (the starter pack, data20.js): their cards one after another */
if (typeof SPFIGS !== 'undefined') Object.keys(SPFIGS).forEach(k => { FIGS['sp-' + k] = () => SPFIGS[k].map(memoHTML).join(''); });
/* On a question or a step the memo card goes below the options, so the question stays at the top of a phone screen */
const memoFig = n => !!(n.fig && /^(memo|sp)-/.test(n.fig));
/* EMACC's first visit (memo HKL/JK/98/188/3(01)24, Lampiran A, 12): why it is day 4 or day 5, as the memo's own timeline draws it */
FIGS.emtl = () => { const D = [['1', 'The patient is discharged', ''], ['2', '9 am: PPK Rekod sends the X-ray for reporting', ''], ['3', 'X-ray reporting', ''], ['4', '9 am: PPK Rekod collects the reported X-ray. 10 am: missed fracture review by an ED MO. 12 pm to 3 pm: EMACC, urgent cases', 'u'], ['5', 'EMACC, cases that are not urgent (the first appointment)', 'n']];
  return `<div class="fig figemt"><ol class="emt">${D.map(([d, t, k]) => `<li class="${k}"><b>Day ${d}</b><span>${esc(t)}</span></li>`).join('')}</ol><p class="fig-cap">The first EMACC visit waits for the X-ray report (memo (01)24, Lampiran A, 12).</p></div>`; };
/* The team leader's room through the day (memo HKL/JK/98/188/3(1)23, Lampiran 1): first and last case of each shift */
FIGS.tlclock = () => { const R = [['Morning', '8.00 am', '2.00 pm'], ['Afternoon', '3.00 pm', '9.00 pm'], ['Night', '10.00 pm', '7.00 am']];
  return `<div class="fig figtl" role="img" aria-label="Your room as team leader: cases start at ${R.map(r => r[1]).join(', ')} and the last case comes at ${R.map(r => r[2]).join(', ')}">
    ${R.map(([s, a, b], i) => `<div class="tl-r" style="--d:${(i * .12).toFixed(2)}s"><b>${s}</b><span class="tl-a"><em>First case</em>${a}</span><span class="tl-bar" aria-hidden="true"><i></i></span><span class="tl-b"><em>Last case</em>${b}</span></div>`).join('')}
    <p class="fig-cap">Your room as team leader: when its cases start and when the last one comes. After the last case, share out the unseen cases.</p></div>`; };
/* ================= The 3D abdomen map (12 Nov 2026) =================
   The handbook's nine regions (p. 7) on a glass torso rendered with Blender for this guide (sources/abdo/abdo3d.blend): the front
   view first (abdo3d/poster.webp), the patient's right on the screen's left, labelled. Tap a region to light it and see what to
   think of there. The slider, or a sideways drag, turns the torso through 72 degrees: the 25 frames (abdo3d/fNN.webp, about
   19 KB each) download only when it is first turned. A3D (data17.js) holds each region's outline on each frame. */
const A3_REG = typeof HB_REGIONS !== 'undefined' ? HB_REGIONS : [];
const a3pad = i => String(i).padStart(2, '0');
const a3c = pts => { const a = pts.split(' ').map(s => s.split(',').map(Number)); return [a.reduce((t, q) => t + q[0], 0) / a.length, a.reduce((t, q) => t + q[1], 0) / a.length]; };
function a3svg(i, on){
  return A3D.frames[i][1].map((pts, r) => { const [x, y] = a3c(pts); return `<g class="a3-g${on === r + 1 ? ' on' : ''}" data-a3r="${r + 1}" role="button" tabindex="0" aria-label="Region ${esc(A3_REG[r][0])}"><polygon points="${pts}"/><text x="${x.toFixed(0)}" y="${(y + 14).toFixed(0)}">${r + 1}</text></g>`; }).join('');
}
function abdo3dHTML(){
  if (typeof A3D === 'undefined') return '';
  return `<figure class="fig a3" data-a3 data-i="${A3D.front}" data-on="0"><div class="a3-bar"><b>The nine regions, in 3D</b></div>` +
    `<div class="a3-stage" style="aspect-ratio:${A3D.w}/${A3D.h}"><img class="a3-img" src="abdo3d/poster.webp" width="${A3D.w}" height="${A3D.h}" loading="lazy" decoding="async" alt="A glass torso seen from the front, with the abdomen divided into nine glowing regions">` +
    `<svg viewBox="0 0 ${A3D.w} ${A3D.h}">${a3svg(A3D.front, 0)}</svg><span class="a3-s a3-sr">Patient's right</span><span class="a3-s a3-sl">Patient's left</span></div>` +
    `<label class="a3-turn"><span>Turn</span><input type="range" min="0" max="${A3D.frames.length - 1}" step="1" value="${A3D.front}" data-a3yaw aria-label="Turn the torso"></label>` +
    `<div class="a3-info" aria-live="polite"><p class="hint">Tap a region to light it and see what to think of there.</p></div>` +
    `<figcaption>Schematic regions only, as the handbook (p. 7) draws them: organs and pain can overlap. The glass torso is this guide's own model, made in Blender.</figcaption></figure>`;
}
FIGS.abdo3d = abdo3dHTML;
const a3loaded = new Set();
function a3frame(fig, i){
  i = Math.max(0, Math.min(A3D.frames.length - 1, i));
  const on = +fig.dataset.on || 0;
  fig.dataset.i = i;
  if (!a3loaded.size) A3D.frames.forEach((_, k) => { const im = new Image(); im.src = `abdo3d/f${a3pad(k)}.webp`; a3loaded.add(im); });
  fig.querySelector('.a3-img').src = i === A3D.front && on ? `abdo3d/front-lit/r${on}.webp` : `abdo3d/f${a3pad(i)}.webp`;
  fig.querySelector('svg').innerHTML = a3svg(i, on);
  const yaw = A3D.frames[i][0], r = fig.querySelector('[data-a3yaw]'); if (+r.value !== i) r.value = i;
  r.setAttribute('aria-valuetext', yaw === 0 ? 'Front view' : Math.abs(yaw) + ' degrees toward the patient\'s ' + (yaw > 0 ? 'left' : 'right'));
}
function a3pick(fig, r){
  const was = +fig.dataset.on || 0, on = was === r ? 0 : r;
  fig.dataset.on = on;
  const i = +fig.dataset.i;
  fig.querySelectorAll('.a3-g').forEach(g => g.classList.toggle('on', +g.dataset.a3r === on));
  fig.classList.toggle('a3-pick', !!on);
  if (i === A3D.front) fig.querySelector('.a3-img').src = on ? `abdo3d/front-lit/r${on}.webp` : (a3loaded.size ? `abdo3d/f${a3pad(i)}.webp` : 'abdo3d/poster.webp');
  const R = A3_REG[on - 1];
  fig.querySelector('.a3-info').innerHTML = on ? `<h4>${esc(R[0])}</h4><ul>${R[1].map(x => `<li>${esc(x)}</li>`).join('')}</ul><div class="links"><a class="pill" href="#abdo-handbook--rg${on}">Open region ${on}${svg('chev')}</a>${R[2].map(l => `<a class="pill" href="#abdo-handbook--${l[0]}">${esc(l[1])}</a>`).join('')}</div>` : '<p class="hint">Tap a region to light it and see what to think of there.</p>';
}
document.addEventListener('click', e => { const g = e.target.closest && e.target.closest('.a3-g'); if (g) a3pick(g.closest('[data-a3]'), +g.dataset.a3r); });
document.addEventListener('keydown', e => { const g = e.target.closest && e.target.closest('.a3-g'); if (g && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); a3pick(g.closest('[data-a3]'), +g.dataset.a3r); } });
document.addEventListener('input', e => { const r = e.target.closest && e.target.closest('[data-a3yaw]'); if (r) a3frame(r.closest('[data-a3]'), +r.value); });
/* A sideways drag on the torso turns it, a step every 14 px; an upward or downward swipe still scrolls the page */
let a3drag = null;
document.addEventListener('pointerdown', e => { const s = e.target.closest && e.target.closest('.a3-stage'); if (s && e.isPrimary) a3drag = {s, x:e.clientX, i:+s.closest('[data-a3]').dataset.i, moved:false}; });
document.addEventListener('pointermove', e => { if (!a3drag) return; const d = Math.round((e.clientX - a3drag.x) / 14); if (d){ a3drag.moved = true; a3frame(a3drag.s.closest('[data-a3]'), a3drag.i - d); } });
['pointerup', 'pointercancel'].forEach(ev => document.addEventListener(ev, () => { a3drag = null; }));
/* ================= Turnable 3D scenes (21 Nov 2026) =================
   Scenes this guide modelled and rendered in Blender from its own code (src/spin3d.py; no downloaded model), each a turntable
   of SPIN[key].n views packed into one picture (spin/<key>.webp, by src/spin-pack.py, data29.js). Before a tap only the first
   view loads (spin/<key>-0.webp, a few KB, lazily). The first drag, slider move or Turn in 3D downloads the rest once, and Turn
   in 3D turns the scene once around unless motion is reduced. A sideways drag turns it, gliding on a little after the finger
   lifts; an upward or downward swipe still scrolls. Numbered labels sit on the scene's own points (SPIN[key].at), and a tap
   on one opens what happens there (SPIN_INFO). Labels say only what the guide already says on the page they open. */
const SPIN_PX = 16; /* pixels of drag per view */
const SPIN_INFO = {
  route: {t:'The route, in 3D', alt:'A glass model of the five stops of a Green Zone visit on a glowing one-way path: triage, the MO\'s room, the treatment room, the CCA in amber, and review',
    hint:'Drag sideways to turn it, or tap a number.',
    cap:'The order of the five stops, as the journey above sets them out: not a floor plan. The CCA (amber) is only if needed; the direct path skips it. This guide\'s own model, made in Blender.',
    label:i => JOURNEY[i].short, dim:i => !!JOURNEY[i].optional,
    info:i => { const s = JOURNEY[i]; return `<h4>${i + 1}. ${esc(s.title)}</h4><ul>${s.items.slice(0, 3).map(x => `<li>${esc(x)}</li>`).join('')}</ul><div class="links"><a class="pill" href="#journey-${i + 1}">Open stop ${i + 1}${svg('chev')}</a></div>`; }}
};
const spinOK = k => typeof SPIN !== 'undefined' && SPIN[k] && SPIN_INFO[k];
function spinLabels(k, i, on){
  const S = SPIN[k], I = SPIN_INFO[k];
  return S.at[i][1].map(([x, y, z], j) => `<button type="button" class="spin-pin${on === j ? ' on' : ''}${I.dim && I.dim(j) ? ' dim' : ''}" data-spin-pin="${j}" style="left:${(x / S.w * 100).toFixed(2)}%;top:${(y / S.h * 100).toFixed(2)}%;z-index:${Math.max(1, Math.round(100 - z * 4))}" aria-pressed="${on === j}" aria-label="${esc((j + 1) + '. ' + I.label(j))}"><i>${j + 1}</i><span>${esc(I.label(j))}</span></button>`).join('');
}
function spinHTML(k){
  if (!spinOK(k)) return '';
  const S = SPIN[k], I = SPIN_INFO[k], kb = Math.round(S.bytes / 1024);
  return `<figure class="fig spin" data-spin="${k}" data-i="0" data-on="-1"><div class="spin-bar"><b>${esc(I.t)}</b><button type="button" class="sm spin-go" data-spin-go>${svg('play')}<span>Turn in 3D</span><small>${kb} KB</small></button></div>` +
    `<div class="spin-stage" style="aspect-ratio:${S.w}/${S.h}"><img class="spin-img" src="spin/${k}-0.webp" width="${S.w}" height="${S.h}" loading="lazy" decoding="async" alt="${esc(I.alt)}"><div class="spin-sheet" aria-hidden="true"></div><div class="spin-lbl">${spinLabels(k, 0, -1)}</div><span class="spin-wait" aria-hidden="true"></span></div>` +
    `<label class="spin-turn"><span>Turn</span><input type="range" min="0" max="${S.n - 1}" step="1" value="0" data-spin-yaw aria-label="Turn the model" aria-valuetext="Front view"></label>` +
    `<div class="spin-info" aria-live="polite"><p class="hint">${esc(I.hint)}</p></div><figcaption>${esc(I.cap)}</figcaption></figure>`;
}
const spinReady = new Set(), spinGet = {};
function spinLoad(fig){
  const k = fig.dataset.spin;
  if (spinReady.has(k)) return Promise.resolve();
  if (!spinGet[k]){ $$(`[data-spin="${k}"]`).forEach(f => f.classList.add('spin-loading'));
    spinGet[k] = new Promise(res => { const im = new Image(); im.onload = im.onerror = () => { spinReady.add(k); $$(`[data-spin="${k}"]`).forEach(f => { f.classList.remove('spin-loading'); f.classList.add('spin-ready'); spinPaint(f, +f.dataset.i); }); res(); }; im.src = `spin/${k}.webp`; }); }
  return spinGet[k];
}
function spinPaint(fig, i){
  const k = fig.dataset.spin, S = SPIN[k], sh = fig.querySelector('.spin-sheet'), c = i % S.cols, r = Math.floor(i / S.cols);
  if (spinReady.has(k)) sh.style.cssText = `background-image:url(spin/${k}.webp);background-size:${S.cols * 100}% ${S.rows * 100}%;background-position:${S.cols > 1 ? (c / (S.cols - 1) * 100).toFixed(3) : 0}% ${S.rows > 1 ? (r / (S.rows - 1) * 100).toFixed(3) : 0}%`;
  fig.querySelector('.spin-lbl').innerHTML = spinLabels(k, i, +fig.dataset.on);
  const rg = fig.querySelector('[data-spin-yaw]'); if (+rg.value !== i) rg.value = i;
  rg.setAttribute('aria-valuetext', i === 0 ? 'Front view' : `Turned ${S.at[i][0]} degrees`);
}
function spinTo(fig, pos){
  const S = SPIN[fig.dataset.spin], i = ((Math.round(pos) % S.n) + S.n) % S.n;
  if (+fig.dataset.i === i) return;
  fig.dataset.i = i; spinPaint(fig, i);
}
/* Turn in 3D: once around in about 2.6 s, easing in and out; never with reduced motion */
function spinPlay(fig){
  const S = SPIN[fig.dataset.spin], from = +fig.dataset.i, t0 = performance.now(), dur = 2600, id = (fig._run || 0) + 1;
  fig._run = id;
  const tick = now => { if (fig._run !== id || !fig.isConnected) return; const p = Math.min(1, (now - t0) / dur), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    spinTo(fig, from + e * S.n); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
let spinDrag = null;
document.addEventListener('pointerdown', e => {
  const st = e.target.closest && e.target.closest('.spin-stage'); if (!st || !e.isPrimary || e.target.closest('.spin-pin')) return;
  const fig = st.closest('[data-spin]'); fig._run = (fig._run || 0) + 1; spinLoad(fig);
  spinDrag = {fig, x:e.clientX, i:+fig.dataset.i, v:0, lx:e.clientX, lt:e.timeStamp};
});
document.addEventListener('pointermove', e => {
  if (!spinDrag || !spinReady.has(spinDrag.fig.dataset.spin)) return;
  const d = spinDrag, dt = Math.max(1, e.timeStamp - d.lt); d.v = (e.clientX - d.lx) / dt; d.lx = e.clientX; d.lt = e.timeStamp;
  spinTo(d.fig, d.i - (e.clientX - d.x) / SPIN_PX);
});
['pointerup', 'pointercancel'].forEach(ev => document.addEventListener(ev, () => {
  const d = spinDrag; spinDrag = null; if (!d || REDUCED || Math.abs(d.v) < .2 || !spinReady.has(d.fig.dataset.spin)) return;
  /* Glide: the speed at release, in views a frame, fading out */
  let v = d.v * 16 / SPIN_PX, pos = +d.fig.dataset.i; const id = (d.fig._run || 0) + 1; d.fig._run = id;
  const glide = () => { if (d.fig._run !== id) return; v *= .9; pos -= v; spinTo(d.fig, pos); if (Math.abs(v) > .04) requestAnimationFrame(glide); };
  requestAnimationFrame(glide);
}));
document.addEventListener('input', e => { const r = e.target.closest && e.target.closest('[data-spin-yaw]'); if (!r) return;
  const fig = r.closest('[data-spin]'), v = +r.value; fig._run = (fig._run || 0) + 1; spinLoad(fig).then(() => spinTo(fig, v)); });
document.addEventListener('click', e => {
  const g = e.target.closest && e.target.closest('[data-spin-go]');
  if (g){ const fig = g.closest('[data-spin]'); spinLoad(fig).then(() => { if (!REDUCED) spinPlay(fig); }); return; }
  const p = e.target.closest && e.target.closest('[data-spin-pin]'); if (!p) return;
  const fig = p.closest('[data-spin]'), k = fig.dataset.spin, j = +p.dataset.spinPin, on = +fig.dataset.on === j ? -1 : j, I = SPIN_INFO[k];
  fig.dataset.on = on; fig.classList.toggle('spin-pick', on >= 0);
  fig.querySelector('.spin-lbl').innerHTML = spinLabels(k, +fig.dataset.i, on);
  fig.querySelector('.spin-info').innerHTML = on < 0 ? `<p class="hint">${esc(I.hint)}</p>` : I.info(on);
  const nb = fig.querySelector(`[data-spin-pin="${j}"]`); if (nb) nb.focus();
});
/* A step that reads several films shows them one after another (XGROUPS, data15.js) */
if (typeof XGROUPS !== 'undefined') Object.keys(XGROUPS).forEach(n => { FIGS['xg-' + n] = () => XGROUPS[n].map(filmHTML).join(''); });
document.addEventListener('click', e => {
  const t = e.target.closest && e.target.closest('[data-xf-toggle],[data-xk],[data-xg]'); if (!t) return;
  const fig = t.closest('.xf'); if (!fig) return;
  const tg = fig.querySelector('[data-xf-toggle]');
  if (t === tg){ const on = t.getAttribute('aria-pressed') !== 'true'; t.setAttribute('aria-pressed', on); t.textContent = on ? 'Outlines on' : 'Outlines off'; fig.classList.toggle('xf-off', !on); return; }
  const grp = t.hasAttribute('data-xg');
  const was = grp ? t.getAttribute('aria-expanded') === 'true' : t.getAttribute('aria-pressed') === 'true';
  fig.querySelectorAll('[data-xk]').forEach(b => b.setAttribute('aria-pressed', 'false')); fig.querySelectorAll('[data-xp]').forEach(p => p.classList.remove('on'));
  /* One group open at a time; a part's pill leaves its own group open */
  fig.querySelectorAll('[data-xg]').forEach(b => { if (grp || !b.parentNode.contains(t)){ b.setAttribute('aria-expanded', 'false'); b.nextElementSibling.hidden = true; } });
  fig.classList.toggle('xf-pick', !was);
  if (!was){ const ks = grp ? t.dataset.xg.split(' ') : [t.dataset.xk];
    if (grp){ t.setAttribute('aria-expanded', 'true'); t.nextElementSibling.hidden = false; } else t.setAttribute('aria-pressed', 'true');
    ks.forEach(x => { const p = fig.querySelector(`[data-xp="${x}"]`); if (p) p.classList.add('on'); }); fig.classList.remove('xf-off'); tg.setAttribute('aria-pressed', 'true'); tg.textContent = 'Outlines on'; }
});
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
const VT_OK = typeof document.startViewTransition === 'function'; /* page transitions: vtGo */
let vtOn = false;
const kindOf = p => p.kind ? p.kind : p.grp === 'cpg' ? 'Guideline' : p.grp !== 'rules' ? 'Pathway' : p.sub === 'protocol' ? 'Protocol' : 'Rule';
const metaOf = p => p.page ? 'Ebook p' + p.page : (p.src || '');
const kindLabel = (p, k) => (p.kinds && p.kinds[k]) || (p.grp === 'rules' ? KIND_R : p.grp === 'cpg' ? KIND_G : KIND)[k];
/* A guideline's neutral outcomes are its answers (the medicines), not a next step */
const outLbl = (p, k) => p.grp === 'cpg' && k === 'neutral' ? 'Guidance' : OUT_LBL[k];
const fmt = t => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');
const outsOf = p => OUT_ORDER.filter(k => Object.values(p.nodes).some(n => n.end === k));
const badgeOf = p => (CHG.has(p) ? '<span class="badge b-chg">Changed</span>' : '') + (p.isnew ? '<span class="badge b-new">New</span>' : p.upd ? '<span class="badge b-upd">Updated</span>' : p.dept ? '<span class="badge b-dept">Dept notes</span>' : '');
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
/* Vibration (13 Nov 2026, Krishna: "Provide vibration of phone where it is needed"): a short buzz where the screen gives no other
   sign or the MO may be looking away: a copy (and a different buzz when copying is blocked), an answer, an outcome, a stop sign
   ticked, a calculator turning to stop, voice search starting and stopping, and a long one when the 20WBCT timer runs out.
   Phones with Android only (iPhone browsers have no vibration); Settings, Vibration turns it off. Only the switch is kept. */
const CAN_BUZZ = typeof navigator.vibrate === 'function';
const BUZZ = {tick:8, ok:14, land:[22], stop:[30, 70, 30], fail:[40, 60, 40], alarm:[400, 150, 400, 150, 600]};
function buzz(k){ if (!CAN_BUZZ || prefs.buzz === 'off') return; try { navigator.vibrate(BUZZ[k]); } catch(e){} }
function copyText(text, o = {}){
  const lab = o.btn ? (o.btn.querySelector('.bl') || o.btn) : null;
  const orig = lab ? (lab.dataset.orig || (lab.dataset.orig = lab.textContent)) : '';
  const flash = msg => { if (lab){ lab.textContent = msg; clearTimeout(lab._t); lab._t = setTimeout(() => { lab.textContent = orig; }, 1800); } else toast(msg); };
  const select = () => {
    buzz('fail');
    if (o.el){ const r = document.createRange(); r.selectNodeContents(o.el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); flash('Selected: copy it'); }
    else toast(o.fail || 'Copying is blocked here');
  };
  try { navigator.clipboard.writeText(text).then(() => { buzz('ok'); flash(o.ok || 'Copied'); }, select); } catch(e){ select(); }
}

/* ================= Groups: body systems for the ebook, then flow and protocols ================= */
const FLOW_IDS = Object.keys(P).filter(id => P[id].grp === 'rules' && P[id].sub !== 'protocol');
const PROT_IDS = Object.keys(P).filter(id => P[id].sub === 'protocol');
const CATS = [
  {k:'heart', t:'Heart and vessels', s:'Heart', ic:'heart', c:'c-heart', j:'t-garnet', ids:['acs','acs-cpg','heart-failure','hypertensive-urgency','svt','syncope','dvt','vte-cpg']},
  {k:'breath', t:'Breathing and allergy', s:'Breathing', ic:'lungs', c:'c-breath', j:'t-sapphire', ids:['asthma','asthma-cpg','copd-cpg','pneumonia','sinusitis-cpg','anaphylaxis']},
  {k:'brain', t:'Brain and behaviour', s:'Brain', ic:'brain', c:'c-brain', j:'t-plum', ids:['stroke-tia','mild-tbi','head-injury-cpg','behavioural-disturbance']},
  {k:'abdo', t:'Abdomen, kidney and scrotum', s:'Abdomen', ic:'abdomen', c:'c-abdo', j:'t-teal', ids:['abdominal-pain','abdo-handbook','gastroenteritis','biliary','renal-colic','ckd-cpg','scrotal-pain','fb-children-cpg']},
  {k:'infect', t:'Infection and skin', s:'Infection', ic:'virus', c:'c-infect', j:'t-bronze', ids:['dengue','dengue-cpg','cellulitis','sore-throat-cpg']},
  {k:'meta', t:'Sugar, poisoning and pain', s:'Sugar and pain', ic:'droplet', c:'c-meta', j:'t-indigo', ids:['hyperglycaemia','hypoglycaemia','t2dm-cpg','diabetic-foot-cpg','gout-cpg','paracetamol-overdose','snakebite-moh','pain','cancer-pain-cpg']},
  {k:'injury', t:'Injuries and teeth', s:'Injuries', ic:'bone', c:'c-injury', j:'t-slate', ids:['xray-guide','hip-fracture-cpg','avulsed-tooth-cpg']},
  {k:'scores', t:'Scores and rules', s:'Scores', ic:'scale', c:'c-flow', j:'t-sapphire', ids:['ed-scores']},
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
/* Words people type for an entry beyond its own text (the 12 Nov 2026 review): a whole-word match on an entry's kw counts like
   its title, so "chest pain" finds the ACS pathway, "asthma" the ebook's asthma pathway, "dengue" the CPG first (it leads the
   topic since 12 Nov 2026), and "MC" the medical certificate lines rather than every "mcg" */
const KW_MORE = {acs:'chest pain', asthma:'asthma wheeze', 'missed-fractures':'fracture', 'dengue-cpg':'dengue', emacc:'MC medical certificate sick leave', 'safe-practice':'MC medical certificate sick leave'};
Object.entries(KW_MORE).forEach(([id, w]) => { if (P[id]) P[id].kw = ((P[id].kw || '') + ' ' + w).trim(); });
const IDX = [];
for (const [id, p] of Object.entries(P)){
  const c = catOf(id);
  IDX.push({href:'#' + id, title:p.title, kind:kindOf(p), meta:metaOf(p), body:pathWords(p).join(' · '), kw:p.kw || '', ic:c.ic, c:c.c, j:c.j});
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
IDX.push({href:'#install', title:'Install the guide, and use it without a signal', kind:'Setting', meta:'Phone, tablet or computer', body:'install app home screen add to home screen offline no signal no internet no wifi download save phone android iphone ipad samsung windows mac laptop computer desktop', ic:'install', c:'c-meta'});
IDX.push({href:'#about', title:'Sources and about', kind:'About', meta:'Sources, privacy', body:'sources ebook memos SOP privacy no patient data version', ic:'info', c:'c-prot'});
/* The library's search words, built at the first search (18 Nov 2026: about 0.2 s of startup on a slow phone) */
let HAY_ = null;
const HAY = {get:id => (HAY_ || (HAY_ = new Map(Object.entries(P).map(([i, p]) => [i, (p.title + ' ' + pathWords(p).join(' ')).toLowerCase()])))).get(id)};

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
      /* A title that starts with the word scores most; a one- or two-letter start only counts in full as a whole word ("MC", not "McIsaac") */
      const t0 = e.title.toLowerCase();
      if (t0.startsWith(ts[i])) s += ts[i].length > 2 || new RegExp('^' + reEsc(ts[i]) + '($|[^a-z0-9])').test(t0) ? 7 : 3; else if (inT) s += 5;
      /* An entry's own search words (kw): a whole-word match counts like a title word, a little less when the title matched too */
      if (e.kw && new RegExp('(^|[^a-z0-9])' + reEsc(ts[i]) + '($|[^a-z0-9])', 'i').test(e.kw)) s += inT ? 3 : 5;
      if (inB) s += 1;
    }
    if (e.kind === 'Pathway' || e.kind === 'Guideline') s += .5;
    /* An ED pharmacy drug comes after the pathways, rules and guidelines that mention it (the list keeps its own order) */
    if (e.kind === 'Drug' || e.kind === 'Dilution' || e.kind === 'Antimicrobial' || e.kind === 'Antidote') s = Math.min(s, 1);
    return {e, s};
  }).filter(Boolean).sort((a, b) => (b.s - a.s) || (a.e.href.includes('--') - b.e.href.includes('--'))).slice(0, 14).map(r => r.e);
}
/* Word starts first; if nothing matches, fall back to matching inside words ("glycaemia") */
function find(q){ const r = search(q); return r.length ? {r, loose:false} : {r:search(q, true), loose:true}; }
/* ================= Forgiving search (12 Nov 2026) =================
   Today's search runs first and is never rescored. Then:
   - Words people use for a topic (Malay, everyday words, abbreviations) add the results for the guide's own words, first,
     labelled "Including results for ...". Each alias points only to words the guide itself uses; it is a search word, not
     clinical content. Abbreviations that are also English words (AGE, PE, OD, MI) count only typed in capitals.
   - American spellings are tried in the British spelling the guide uses (hypoglycemia, diarrhea, edema, pediatric).
   - Only when nothing at all matches, a misspelt word (4 letters or more, no digits) is corrected to the nearest word in the
     guide, labelled "Nothing for ... Showing results for ...", so a corrected drug name is always visible. */
const ALIASES = [
  /* Malay */
  ['sakit perut', 'abdominal pain'], ['sakit dada', 'chest pain'], ['sesak nafas', 'breathless'], ['semput', 'asthma'], ['lelah', 'asthma'],
  ['demam denggi', 'dengue'], ['denggi', 'dengue'], ['cirit birit', 'diarrhoea'], ['muntah', 'vomiting'], ['kencing batu', 'renal colic'], ['batu karang', 'renal colic'],
  ['gigitan anjing', 'dog bite'], ['gigitan kucing', 'cat bite'], ['gigitan ular', 'snake bite'], ['patukan ular', 'snake bite'], ['patah', 'fracture'],
  ['kepala terhantuk', 'head injury'], ['kecederaan kepala', 'head injury'], ['pengsan', 'syncope'], ['gula rendah', 'hypoglycaemia'], ['kencing manis', 'diabetes'],
  ['darah tinggi', 'hypertensive'], ['sakit tekak', 'sore throat'], ['resdung', 'rhinosinusitis'], ['gigi tercabut', 'avulsed tooth'], ['tertelan', 'ingestion'],
  ['alahan', 'anaphylaxis'], ['buah zakar', 'scrotal'], ['angin ahmar', 'stroke'], ['strok', 'stroke'], ['serangan jantung', 'acute coronary syndrome'], ['sakit sendi', 'gout'],
  ['jangkitan kulit', 'cellulitis'], ['keracunan', 'poisoning'], ['terlebih dos', 'overdose'],
  /* 13 Nov 2026, from 30 Malay searches: each points at the guide's own words */
  ['muntah darah', 'gi bleed'], ['berak hitam', 'gi bleed'], ['lemah sebelah badan', 'stroke'], ['lemah sebelah', 'stroke'], ['buah pinggang', 'kidney'], ['kaki bengkak', 'swollen leg'],
  ['luka terbakar', 'burn'], ['melecur', 'burn'], ['terlebih makan ubat', 'overdose'], ['makan ubat berlebihan', 'overdose'], ['buku lali', 'ankle'], ['tertelan syiling', 'coin'], ['tertelan', 'swallowed'],
  /* everyday words and brands */
  ['stomach ache', 'abdominal pain'], ['tummy ache', 'abdominal pain'], ['heart attack', 'acute coronary syndrome'], ['kidney stone', 'renal colic'],
  ['panadol', 'paracetamol'], ['fainting', 'syncope'], ['faint', 'syncope'], ['wheeze', 'asthma'],
  ['blood sugar', 'glucose'], ['low sugar', 'hypoglycaemia'], ['high sugar', 'hyperglycaemia'], ['broken bone', 'fracture'], ['allergy', 'anaphylaxis'],
  /* 13 Nov 2026, from 110 on-shift searches: each points at the guide's own words */
  ['vomiting blood', 'gi bleed'], ['black stool', 'gi bleed'], ['weak one side', 'stroke'], ['one sided weakness', 'stroke'], ['facial droop', 'stroke'], ['slurred speech', 'stroke'],
  ['head knock', 'head injury'], ['hit head', 'head injury'], ['hit his head', 'head injury'], ['hit her head', 'head injury'], ['bumped head', 'head injury'],
  ['took too many pills', 'overdose'], ['took too many tablets', 'overdose'], ['too many pills', 'overdose'], ['too many tablets', 'overdose'], ['overdosed', 'overdose'], ['fits', 'seizure'], ['fitting', 'seizure'], ['convulsion', 'seizure'],
  ['passed out', 'syncope'], ['blacked out', 'syncope'], ['drunk', 'alcohol'], ['urine infection', 'uti'],
  /* 18 Nov 2026: the department's names for the EM Watch form and its video call */
  ['pink form', 'em watch form'], ['borang pink', 'em watch form'], ['google meet', 'em watch'],
  /* abbreviations */
  ['sob', 'breathless'], ['pcm', 'paracetamol'], ['htn', 'hypertensive'], ['loc', 'loss of consciousness'], ['cva', 'stroke'], ['dm', 'diabetes'],
  ['fb', 'foreign body'], ['hpt', 'hypertensive'], ['ugib', 'bleeding'], ['age', 'gastroenteritis', 1], ['pe', 'pulmonary embolism', 1], ['od', 'overdose', 1], ['mi', 'myocardial infarction', 1]
].map(([a, to, caps]) => ({a, to, caps:!!caps, re:new RegExp('(^|\\s)' + reEsc(caps ? a.toUpperCase() : a) + '(?=\\s|$)', caps ? '' : 'i')}));
const US_UK = [[/([^a])emi(a|c)/, '$1aemi$2'], [/^hem(a|o)/, 'haem$1'], [/^edema/, 'oedema'], [/^esophag/, 'oesophag'], [/^diarrhea/, 'diarrhoea'], [/^pediat/, 'paediat'],
  [/^orthoped/, 'orthopaed'], [/^gynec/, 'gynaec'], [/^anesth/, 'anaesth'], [/^tumor/, 'tumour'], [/^labor$/, 'labour'], [/^fetal/, 'foetal'], [/^cesarean/, 'caesarean']];
const ukOf = w => { for (const [re, to] of US_UK) if (re.test(w)) return w.replace(re, to); return w; };
/* The alias phrase as typed: Malay "cirit-birit" is written with a hyphen too */
const aliasQ = q => q.replace(/(\w)-(\w)/g, '$1 $2');
function aliasesOf(q){
  const t = aliasQ(q), hit = [];
  for (const x of ALIASES){
    const src = x.caps ? t : t.toLowerCase();
    if (x.re.test(src) && !hit.some(h => h.to === x.to)) hit.push({a:x.a, to:x.to, q:src.replace(x.re, '$1' + x.to).trim()});
  }
  return hit;
}
let VOCAB = null;
function vocab(){
  if (VOCAB) return VOCAB;
  const n = new Map();
  for (const e of IDX) for (const w of (e.title + ' ' + (e.kw || '') + ' ' + e.body).toLowerCase().match(/[a-z]{4,}/g) || []) n.set(w, (n.get(w) || 0) + 1);
  return VOCAB = [...n.entries()];
}
/* Optimal string alignment distance (a swap of two letters counts as one) */
function osa(a, b){
  const m = a.length, n = b.length, d = Array.from({length:m + 1}, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++){
    const c = a[i - 1] === b[j - 1] ? 0 : 1;
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[m][n];
}
/* The nearest word in the guide to a misspelt one: a whole word, or the start of one (for a word still being typed) */
function nearest(t){
  const max = t.length >= 6 ? 2 : 1;
  let best = null;
  for (const [w, f] of vocab()){
    if (Math.abs(w.length - t.length) > max && w.length < t.length) continue;
    let d = Math.abs(w.length - t.length) <= max ? osa(t, w) : 99;
    if (d > max) for (let L = Math.max(4, t.length - 1); L <= Math.min(w.length, t.length + 1); L++){ const dp = osa(t, w.slice(0, L)) + .5; if (dp < d) d = dp; }
    if (d <= max && (!best || d < best.d || (d === best.d && f > best.f))) best = {w, d, f};
  }
  return best && best.w;
}
const known = t => vocab().some(([w]) => w.startsWith(t));
function findMore(q){
  const base = find(q), out = {r:base.r, loose:base.loose, also:[], fixed:null};
  /* Aliases: the guide's own words first, then what the typed words found */
  const al = aliasesOf(q);
  if (al.length){
    const seen = new Set(), r = [];
    /* the alias in place of its words; if that finds nothing, the guide's own words alone ("alahan teruk" is anaphylaxis) */
    for (const a of al){ const f0 = find(a.q), fr = f0.loose ? [] : f0.r; for (const e of (fr.length ? fr : find(a.to).r)) if (!seen.has(e.href)){ seen.add(e.href); r.push(e); } }
    if (r.some(e => !base.r.includes(e))){ out.r = [...r, ...base.r.filter(e => !seen.has(e.href))].slice(0, 14); out.also = al.map(a => a.to); out.loose = false; out.al = seen; }
  }
  if (out.r.length) return out;
  /* American spellings, then misspellings: only when nothing matched */
  const ts = terms(q), uk = ts.map(ukOf);
  if (uk.some((w, i) => w !== ts[i])){ const r = find(uk.join(' ')); if (r.r.length) return {...out, r:r.r, loose:r.loose, fixed:uk.join(' ')}; }
  const fx = uk.map(w => w.length >= 4 && /^[a-z]+$/.test(w) && !known(w) ? (nearest(w) || w) : w);
  if (fx.some((w, i) => w !== uk[i])){ const r = find(fx.join(' ')); if (r.r.length) return {...out, r:r.r, loose:r.loose, fixed:fx.join(' ')}; }
  return out;
}
/* ================= Smart search (13 Nov 2026) =================
   Krishna: "Improve the search capabilities, if possible AI", and for its download, "First time it's needed".
   A small open model (Model2Vec potion-retrieval-32M, MIT licence, cut to 128 dimensions: app/ai/, made by src/ai.js) turns a
   search and every passage of the guide into vectors of meaning on the phone itself: no AI engine, only a look-up and a sum,
   and nothing is sent anywhere. It downloads once (about 8 MB) the first time a search is typed, unless Settings, Smart search
   is off or the browser's Data Saver is on (then it waits for a tap), and the web app keeps it for use without a signal.
   It only reorders and adds the guide's own pages; it writes nothing (rule 8). Words still decide when they are sure: every
   typed word in a title, or a Malay or everyday word the guide already knows (ALIASES). Otherwise the closest in meaning come
   first, and when even the closest are not close the palette says they are only the nearest and points to the national CPGs.
   Digits (extensions) stay with words. Measured on 13 Nov 2026: 55 of 55 hard on-shift searches found a right page in the top
   three (words alone: 46; for UTI, tetanus and drunk, which have no page of their own, a page that mentions them), and the
   searches that already worked kept their first result. */
const AI = {state:'idle', enc:null, vec:null, own:null, txt:null, n:0, D:0};
let aiTried = false;
const AI_SKIP = new Set(['Setting', 'Quiz', 'Update', 'Poster', 'About', 'Video']);
/* A passage this close joins the results. Below the second the matches are only the nearest, and the palette says so: on
   110 searches the model's scores did not tell a topic the guide covers from one it does not, so it never claims "not covered". */
const AI_MIN = .38, AI_WEAK = .46;
const AIMS_MIN = .38, AIMS_WEAK = .46; /* the Malay model's, set on the 30 Malay searches of 13 Nov 2026 */
const SAVE_DATA = !!(navigator.connection && navigator.connection.saveData);
function aiTok(vocab){
  const pre = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z0-9]+|[^\sa-z0-9]/g) || [];
  const wp = w => { if (w.length > 100) return []; const out = []; let i = 0; while (i < w.length){ let j = w.length, f = -1; while (j > i){ const id = vocab.get((i ? '##' : '') + w.slice(i, j)); if (id !== undefined){ f = id; break; } j--; } if (f < 0) return []; out.push(f); i = j; } return out; };
  return s => pre(s).flatMap(wp);
}
/* The Malay model's tokenizer (from src/ai-ms.js's companion src/ai-ms-tok.js): potion-multilingual-128M's SentencePiece
   Unigram vocabulary, with Viterbi over the piece scores; the guide's text and what is typed are lower-cased the same way */
const MS = (() => {
  const META = '\u2581';
  /* SentencePiece nmt_nfkc removes ASCII control characters and maps these to a space before NFKC */
  const CTRL = /[\u0000-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/g;
  const SPACEISH = /[\t\n\f\r\u0085\u1680\u200B-\u200F\u2028\u2029\u2581\uFEFF\uFFFD]/g;
  const PUNCT = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

  function msNorm(s, lower){
    s = String(s).replace(CTRL, '').replace(SPACEISH, ' ').normalize('NFKC');
    s = s.replace(/ {2,}/g, ' ').replace(PUNCT, ' $& ').replace(/\s+/g, ' ').trim();
    return lower ? s.toLowerCase() : s;
  }

  function msVocab(text){
    const lines = text.split('\n');
    const head = lines[0].split('\t');
    if (head[0] !== '#GZMS') throw new Error('vocab format');
    const def = Number(head[1]), min = Number(head[2]), n = lines.length - 1;
    const pieces = new Array(n), score = new Float64Array(n), ids = new Map();
    for (let i = 0; i < n; i++){
      const l = lines[i + 1], t = l.indexOf('\t');
      const p = t < 0 ? l : l.slice(0, t);
      pieces[i] = p; score[i] = t < 0 ? def : Number(l.slice(t + 1));
      if (!ids.has(p)) ids.set(p, i);
    }
    return {pieces, ids, score, def, min};
  }

  /* V: {ids: Map piece -> id, score, min}. Returns s => ids; opts.unk: true keeps [UNK] as -1 (for checking only).
     opts.offset: true carries the running score from word to word, exactly as one Viterbi over the whole string (slower, no cache). */
  function msTok(V, opts){
    opts = opts || {};
    const unkScore = V.min - 10, ids = V.ids, score = V.score;
    let maxLen = 1; for (const p of ids.keys()){ const n = Array.from(p).length; if (n > maxLen) maxLen = n; }
    const cache = new Map();
    function word(w, base){
      const cp = Array.from(w), n = cp.length;
      const best = new Float64Array(n + 1), from = new Int32Array(n + 1).fill(-1), tid = new Int32Array(n + 1);
      best[0] = base; from[0] = 0;
      for (let i = 0; i < n; i++){
        if (from[i] < 0) continue;
        const b = best[i]; let sub = '', single = false;
        for (let j = i; j < n && j - i < maxLen; j++){
          sub += cp[j];
          const t = ids.get(sub);
          if (t === undefined) continue;
          const c = b + score[t];
          if (j === i) single = true;
          if (from[j + 1] < 0 || c > best[j + 1]){ best[j + 1] = c; from[j + 1] = i; tid[j + 1] = t; }
        }
        if (!single){ const c = b + unkScore; if (from[i + 1] < 0 || c > best[i + 1]){ best[i + 1] = c; from[i + 1] = i; tid[i + 1] = -1; } }
      }
      const out = []; let e = n;
      while (e > 0){ const t = tid[e]; if (!(t === -1 && out.length && out[out.length - 1] === -1)) out.push(t); e = from[e]; }
      out.reverse();
      return {out, end: best[n]};
    }
    return function(s){
      const t = msNorm(s, opts.lower);
      if (!t) return [];
      const words = (META + t.replace(/ /g, META)).split(/(?=\u2581)/);
      const res = []; let acc = 0, prevUnk = false;
      for (const w of words){
        let r;
        if (opts.offset){ const x = word(w, acc); acc = x.end; r = x.out; }
        else { r = cache.get(w); if (!r){ r = word(w, 0).out; if (cache.size > 50000) cache.clear(); cache.set(w, r); } }
        for (const id of r){
          if (id === -1){ if (!prevUnk && opts.unk) res.push(-1); prevUnk = true; }
          else { res.push(id); prevUnk = false; }
        }
      }
      return res;
    };
  }

  return {msNorm, msVocab, msTok};
})();
/* A model file: model.bin on the web app; the claude.ai copy serves only web file types, so it has the same bytes as base64 text */
const aiGet = async f => { const r = await fetch('ai/' + f); if (!r.ok) throw new Error(f + ' ' + r.status); return r; };
async function aiBin(name){
  for (const f of FRAMED ? [name + '.b64.txt', name + '.bin'] : [name + '.bin', name + '.b64.txt']){
    let r; try { r = await aiGet(f); } catch(e){ continue; }
    if (!f.endsWith('.txt')) return r.arrayBuffer();
    const s = atob((await r.text()).trim()), u = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return u.buffer;
  }
  throw new Error(name + ' missing');
}
/* From a model's 8-bit rows and its tokenizer: a vector of meaning for any text, and the guide's passages read with it
   (each entry's title, then its text in pieces of about 40 words) */
async function aiIndex(buf, tokOf){
  const dv = new DataView(buf);
  if (String.fromCharCode(...new Uint8Array(buf, 0, 4)) !== 'GZAI') throw new Error('model format');
  const V = dv.getUint32(4, true), D = dv.getUint32(8, true), tok = tokOf(V);
  const scale = new Float32Array(buf, 12, D), Q = new Int8Array(buf, 12 + D * 4, V * D);
  const enc = s => {
    const v = new Float32Array(D); let n = 0;
    for (const id of tok(s)){ const o = id * D; for (let k = 0; k < D; k++) v[k] += Q[o + k]; }
    for (let k = 0; k < D; k++){ v[k] *= scale[k]; n += v[k] * v[k]; }
    if (!n) return null; n = Math.sqrt(n); for (let k = 0; k < D; k++) v[k] /= n; return v;
  };
  const own = [], vecs = [], txt = [];
  const add = (i, s, t) => { const v = enc(s); if (v){ own.push(i); vecs.push(v); txt.push(t); } };
  for (let i = 0; i < IDX.length; i++){
    const e = IDX[i]; if (AI_SKIP.has(e.kind)) continue;
    add(i, e.title, '');
    let cur = [], words = 0;
    const flush = () => { if (cur.length){ const t = cur.join(' · '); add(i, e.title + ': ' + t, t); cur = []; words = 0; } };
    for (const p of (e.body || '').split(' · ')){ cur.push(p); words += p.split(' ').length; if (words > 40) flush(); }
    flush();
    if (i % 40 === 39) await new Promise(r => setTimeout(r, 0)); /* let a slow phone breathe */
  }
  const M = new Float32Array(vecs.length * D); vecs.forEach((v, j) => M.set(v, j * D));
  return {state:'ready', enc, vec:M, own:Int32Array.from(own), txt, n:vecs.length, D};
}
async function aiLoad(){
  if (AI.state === 'loading' || AI.state === 'ready') return;
  AI.state = 'loading'; aiNote();
  try {
    const [vr, buf] = await Promise.all([aiGet('vocab.txt'), aiBin('model')]);
    const pieces = (await vr.text()).split('\n');
    Object.assign(AI, await aiIndex(buf, V => { if (pieces.length !== V) throw new Error('word pieces'); return aiTok(new Map(pieces.map((t, i) => [t, i]))); }));
  } catch(e){ AI.state = 'failed'; AI.err = String(e && e.message || e); }
  aiNote();
  if (!$('#pal').hidden && $('#gq').value.trim() && !askCtl) renderPal(); /* never over a question being asked, or its answer */
}
/* Malay-aware smart search (13 Nov 2026, the third of the five AI upgrades Krishna asked for). Measured on 63 searches: the
   multilingual model alone lifted Malay (4 to 13 of 30) but cost English (31 to 26 of 33), so the guide routes: a search with
   a common Malay word goes to Model2Vec potion-multilingual-128M (MIT, Minish Lab, distilled from bge-m3; cut by src/ai-ms.js
   to 65,989 pieces and 128 dimensions, about 8 MB: app/ai/ms-model.bin and ms-vocab.txt), and every other search stays on the
   English model. The Malay model downloads only the first time a Malay search is typed. MS_WORDS are everyday Malay words,
   search words only (rule 8). */
const AIMS = {state:'idle', enc:null, vec:null, own:null, txt:null, n:0, D:0};
let aiMsTried = false;
const MS_WORDS = new Set(('sakit demam kencing batu sesak nafas semput lelah perut dada kepala tangan kaki patah tulang darah gula tinggi rendah manis ' +
  'muntah cirit birit berak sembelit loya pening pitam pengsan gigitan gigit digigit anjing kucing ular patukan dipatuk luka terbakar melecur ubat ' +
  'terlebih makan minum budak kanak bayi mengandung hamil berdarah tekak batuk selsema hidung telinga mulut gigi tercabut tertelan syiling leher ' +
  'belakang pinggang zakar lutut siku bahu jari kulit gatal ruam bengkak merah nanah lemah sebelah badan lumpuh kebas kejang sawan ahmar strok ' +
  'jantung serangan berdebar alahan teruk rosak terhantuk kecederaan jatuh terjatuh terseliuh lali pergelangan keracunan jangkitan kuman denggi ' +
  'pesakit rawatan bagaimana berapa perlu boleh tidak dengan untuk yang dari selepas sebelum minggu sejak masih sangat sikit banyak orang tua ' +
  'lelaki perempuan wanita kerana sebab rujuk rujukan bila apa mana buah buku sakitnya bengkok kesakitan pendarahan cedera terkena kemalangan ' +
  'kencing manis darah tinggi susah bernafas sejuk panas menggigil lesu letih penat sesak dadanya kepalanya perutnya').split(' '));
const msQuery = q => q.toLowerCase().replace(/-/g, ' ').split(/[^a-z]+/).some(w => MS_WORDS.has(w));
async function aiLoadMs(){
  if (AIMS.state === 'loading' || AIMS.state === 'ready') return;
  AIMS.state = 'loading'; aiNote();
  try {
    const [vr, buf] = await Promise.all([aiGet('ms-vocab.txt'), aiBin('ms-model')]);
    const MV = MS.msVocab(await vr.text());
    Object.assign(AIMS, await aiIndex(buf, V => { if (MV.pieces.length !== V) throw new Error('word pieces'); return MS.msTok(MV, {lower:true}); }));
  } catch(e){ AIMS.state = 'failed'; AIMS.err = String(e && e.message || e); }
  aiNote();
  if (!$('#pal').hidden && $('#gq').value.trim() && !askCtl) renderPal(); /* never over a question being asked, or its answer */
}
/* Each entry's closest passage to the search under model M, and which passage it was */
function aiScores(M, q){
  const v = M.enc(q); if (!v) return null;
  const best = new Float32Array(IDX.length).fill(-1), at = new Int32Array(IDX.length).fill(-1), D = M.D, X = M.vec;
  for (let j = 0; j < M.n; j++){
    let s = 0; const o = j * D; for (let k = 0; k < D; k++) s += v[k] * X[o + k];
    const i = M.own[j]; if (s > best[i]){ best[i] = s; at[i] = j; }
  }
  return {best, at};
}
/* Words and meaning together. Returns null when smart search has nothing to add (not ready, digits, too short). */
function smartFind(q, kw){
  if (prefs.ai === 'off' || /\d/.test(q) || q.replace(/[^a-z]/gi, '').length < 3) return null;
  /* a Malay search goes to the Malay model once it is ready; until then, and for everything else, the English one */
  const M = msQuery(q) && AIMS.state === 'ready' ? AIMS : AI, MIN = M === AIMS ? AIMS_MIN : AI_MIN, WEAK = M === AIMS ? AIMS_WEAK : AI_WEAK;
  if (M.state !== 'ready') return null;
  /* drug lists, the CPG shelf's links and outside links stay after the guide's own pages, as in keyword search */
  const side = i => /^(Drug|Dilution|Antimicrobial|Antidote|National CPG|Link)$/.test(IDX[i].kind);
  const pick = s => { const sc = aiScores(M, s); if (!sc) return null; let m = 0; for (let i = 0; i < IDX.length; i++) if (sc.best[i] > m && !side(i)) m = sc.best[i]; return {sc, m}; };
  /* A word the guide does not know was corrected by spelling: meaning decides whether the correction or the word as typed
     is closer ("asthama" is asthma; "sprain" is not "strain") */
  let A = pick(q), fixUsed = false;
  if (kw.fixed){ const B = pick(kw.fixed); if (B && (!A || B.m > A.m + .02)){ A = B; fixUsed = true; } }
  if (!A) return null;
  const {best, at} = A.sc, ts = terms(fixUsed ? kw.fixed : q), pos = new Map(IDX.map((e, i) => [e, i]));
  const near = [...best.keys()].filter(i => best[i] >= MIN).sort((a, b) => (best[b] - (side(b) ? .3 : 0)) - (best[a] - (side(a) ? .3 : 0))).slice(0, 14);
  const own = near.filter(i => !side(i)), closest = own.length ? best[own[0]] : 0;
  /* Words that are sure keep their order (every typed word in the top result's title, or a Malay or everyday word the
     guide knows); meaning then only adds what they missed, after them */
  const sure = kw.r.length && (!kw.fixed || fixUsed) && ((kw.al && kw.al.has(kw.r[0].href)) || (!kw.loose && ts.every(w => termRe(w).test(kw.r[0].title))));
  let order;
  if (sure) order = [...kw.r.map(e => pos.get(e)).filter(i => i !== undefined), ...near.filter(i => !kw.r.includes(IDX[i]))].slice(0, 14);
  else {
    const pts = new Map();
    /* a word found in a title counts for more than one found only in the text ("fainted" is in Code Blue's text; Syncope is what is meant) */
    kw.r.forEach((e, k) => { const i = pos.get(e); if (i !== undefined) pts.set(i, Math.max(0, best[i]) + (kw.fixed && !fixUsed ? .06 : ts.some(w => termRe(w).test(e.title)) ? .18 : .06) / (1 + k * .5)); });
    near.forEach(i => { if (!pts.has(i)) pts.set(i, best[i]); });
    /* the guide's own pages first, then the drug lists, shelf and links, each by score */
    order = [...pts.entries()].sort((a, b) => (side(a[0]) - side(b[0])) || (b[1] - a[1])).slice(0, 14).map(([i]) => i);
  }
  const snip = new Map(order.filter(i => at[i] >= 0 && M.txt[at[i]] && !kw.r.includes(IDX[i])).map(i => [IDX[i], M.txt[at[i]]]));
  return {r:order.map(i => IDX[i]), snip, ms:M === AIMS, weak:!sure && closest < WEAK, moved:!sure && order[0] !== pos.get(kw.r[0]), sure:!!sure, closest, fixUsed};
}
/* The smart search line in the palette, and its state in Settings */
function aiNote(){
  const st = $('#st-aistate');
  if (st) st.textContent = (AI.state === 'ready' ? 'Ready on this device.' : AI.state === 'loading' ? 'Downloading now (about 8 MB, once).' : AI.state === 'failed' ? 'It could not download; it will try again on your next search.' : prefs.ai === 'off' ? 'Off: search uses the words you type.' : SAVE_DATA ? 'Waiting while Data Saver is on: tap Download in search.' : 'It downloads (about 8 MB, once) the first time you search.') + (prefs.ai === 'off' ? '' : AIMS.state === 'ready' ? ' Malay search is ready too.' : ' A search in Malay downloads a second model (about 8 MB, once) the first time.');
}
function snippetOf(e, ts, loose, snip){ const t = snip && snip.get(e); return t ? highlight(t.length > 240 ? t.slice(0, t.lastIndexOf(' ', 230)) + '…' : t, ts, loose) : snippet(e.body, ts, loose); }
function snippet(body, ts, loose){
  let at = -1;
  for (const w of ts){ const m = termRe(w, loose).exec(body); if (m){ const k = m.index + m[1].length; if (at < 0 || k < at) at = k; } }
  /* A snippet starts and ends on whole words */
  const cut = z => { if (z >= body.length) return body.length; const s = body.lastIndexOf(' ', z); return s > z - 30 ? s : z; };
  if (at < 0){ const z = cut(120); return esc(body.slice(0, z)) + (z < body.length ? '…' : ''); }
  let a = Math.max(0, at - 50);
  if (a > 0){ const s = body.indexOf(' ', a); if (s > -1 && s < at) a = s + 1; }
  const z = Math.max(cut(at + 110), at + 1);
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
  const s = savedIds().slice(0, 6), pn = pinIds().slice(0, 6), el = $('#sidesaved');
  el.innerHTML = (s.length ? '<div class="sgrp">Saved</div>' + s.map(id => `<a href="#${id}">${svg('star', '', true)}<span>${esc(P[id].title)}</span></a>`).join('') : '')
    + (pn.length ? '<div class="sgrp">Pinned</div>' + pn.map(h => `<a href="${h}">${svg('pin', '', true)}<span>${esc(pinInfo(h).title)}</span></a>`).join('') : '');
  el.hidden = !s.length && !pn.length;
}
function refreshSaved(){
  renderMine(); renderSideSaved(); renderLibf(); renderPins();
  const s = savedIds();
  $$('#libgrid [data-star]').forEach(b => { const on = s.includes(b.dataset.star); b.setAttribute('aria-pressed', on); b.innerHTML = svg('star', '', on); b.setAttribute('aria-label', (on ? 'Remove from saved: ' : 'Save: ') + P[b.dataset.star].title); });
  if (libF === 'saved') renderLib();
}

/* ================= Open now (18 Nov 2026) =================
   Krishna: "Build all five" (A). The hours the guide's own sources print, read against the time in Malaysia now (UTC+8 all
   year, whatever the phone's own time zone), on the home page (#tl-now) and as live chips on the steps that print or use them.
   Each row names the step and the phrase its hours come from, and the test fails if the phrase leaves its step (rule 8).
   Clinic rows are sessions only: they say nothing about booking (EMACC and EM Watch are booked days ahead). Where a source
   prints an hour but not the days, the row says so and the question is under Still to confirm. Public holidays cannot be known
   here, so the clinic whose source closes on them says "unless today is a public holiday". Information only: no outcome
   colours, nothing chosen for you, and nothing stored (rule 4). */
const NOW_D = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nowWeek = (days, spans) => Object.fromEntries(days.map(d => [d, spans]));
const HOURS = [
  {k:'emacc', t:'EMACC', kind:'session', at:'#emacc--clinic', phrase:'EMACC runs 8 am to 3 pm, Monday to Friday', week:nowWeek([1, 2, 3, 4, 5], [[480, 900]]),
   hrs:'Sessions Monday to Friday, 8 am to 3 pm (the guide owner, 12 Nov 2026)', on:['#emacc', '#safe-practice--fuemacc']},
  {k:'emwatch', t:'EM Watch', kind:'session', at:'#em-watch--form', phrase:'Isnin hingga Sabtu, 8.00 pagi hingga 2.00 petang', week:nowWeek([1, 2, 3, 4, 5, 6], [[480, 840]]),
   hrs:'Sessions Monday to Saturday, 8 am to 2 pm; closed on Sunday (the pink form\'s slip)', on:['#em-watch', '#safe-practice--fuwatch']},
  {k:'abc', t:'Animal Bite Clinic', kind:'session', at:'#animal-bites--abc', phrase:'Mondays to Thursdays 2.00pm – 4.00pm; Fridays 3.00pm – 4.30pm', ph:true,
   week:Object.assign(nowWeek([1, 2, 3, 4], [[840, 960]]), nowWeek([5], [[900, 990]])),
   hrs:'Sessions Monday to Thursday 2 pm to 4 pm, Friday 3 pm to 4.30 pm; closed on weekends and public holidays', on:['#animal-bites--abc']},
  {k:'mau', t:'MAU', kind:'span', at:'#mau-admission--mau', phrase:'Office hours (8 am–5 pm): MAU mobile team', span:[480, 1020],
   inT:'Office hours now: the MAU mobile team', outT:'After hours now: MAU 1, 2 or 3', hrs:'Office hours 8 am to 5 pm; the days are not printed', on:['#mau-admission--mau']},
  {k:'ow', t:'Observation Ward', kind:'span', at:'#gz-rules--ow', phrase:'with a medical officer from 10 am to 10 pm', span:[600, 1320],
   inT:'An OW medical officer now', outT:'No OW medical officer now', hrs:'A medical officer from 10 am to 10 pm; the days are not printed', on:['#gz-rules--ow', '#dengue--ow']},
  {k:'laot', t:'LA OT, orthopaedic cases', kind:'span', at:'#referral-rules--orthoc', phrase:'takes orthopaedic cases from 8 am to 9 pm only', span:[480, 1260],
   inT:'The emergency OT takes orthopaedic cases now', outT:'No orthopaedic cases in the emergency OT now', hrs:'8 am to 9 pm only; the days are not printed', on:['#referral-rules--orthoc']},
  {k:'cbs', t:'Code Blue at SCACC', kind:'after', at:'#code-blue--z2ah', phrase:'After office hours (after 1700 hr)', from:1020,
   inT:'After 1700 hr: the manual sends a SCACC Code Blue to MECC, 5333', outT:'Before 1700 hr: the manual prints when office hours end, not when they start', hrs:'Office hours end at 1700 hr; the start and the days are not printed', on:['#code-blue--where', '#code-blue--z2', '#code-blue--z2ah']},
  {k:'shift', t:'Shift', kind:'shift', at:'#gz-rules--cv', phrase:'AM 8.00 am to 3.00 pm; PM 3.00 pm to 10.00 pm; ON 10.00 pm to 8.00 am', shifts:[['AM', 480, 900], ['PM', 900, 1320], ['ON', 1320, 480]],
   hrs:'AM 8 am to 3 pm, PM 3 pm to 10 pm, ON 10 pm to 8 am (the critical result memo)', on:['#gz-rules--cv']}
];
const myNow = () => { const d = new Date(Date.now() + 8 * 3600e3); return {dow:d.getUTCDay(), min:d.getUTCHours() * 60 + d.getUTCMinutes()}; };
const hm = m => { m = ((m % 1440) + 1440) % 1440; const h = Math.floor(m / 60), mi = m % 60; return (h % 12 || 12) + (mi ? '.' + String(mi).padStart(2, '0') : '') + (h < 12 ? ' am' : ' pm'); };
const nowLabel = now => NOW_D[now.dow].slice(0, 3) + ' ' + hm(now.min);
function hoursState(h, now){
  const {dow, min} = now || myNow(), ph = h.ph ? ' (unless today is a public holiday)' : '', phn = h.ph ? ' (unless it is a public holiday)' : '';
  if (h.kind === 'session'){
    const cur = (h.week[dow] || []).find(([a, b]) => min >= a && min < b);
    if (cur){ const left = cur[1] - min; return {on:true, line:`In session until ${hm(cur[1])}${left < 60 ? ` (${left} min left)` : ''}${ph}`}; }
    for (let i = 0; i < 8; i++){
      const d = (dow + i) % 7, sp = (h.week[d] || []).find(([a]) => i > 0 || a > min);
      if (sp) return {on:false, line:`Not in session now; next session ${i === 0 ? 'today' : i === 1 ? 'tomorrow' : NOW_D[d]}, ${hm(sp[0])}${phn}`};
    }
    return {on:false, line:'Not in session now'};
  }
  if (h.kind === 'span'){ const [a, b] = h.span, on = min >= a && min < b; return {on, line:`${on ? h.inT : h.outT}, until ${hm(on ? b : a)}`}; }
  if (h.kind === 'after'){ const on = min >= h.from; return {on, line:on ? h.inT : h.outT}; }
  const s = h.shifts.find(([, a, b]) => a < b ? min >= a && min < b : min >= a || min < b);
  return {on:true, line:`${s[0]} shift, ${hm(s[1])} to ${hm(s[2])}`, shift:s[0]};
}
const nowRow = (h, now) => { const s = hoursState(h, now); return `<li><a href="${h.at}" class="${s.on ? 'on' : ''}" data-nowk="${h.k}"><i class="nd" aria-hidden="true"></i><span class="nt-t"><b>${esc(h.t)}</b><span>${esc(s.line)}</span></span><small>${esc(h.hrs)}</small></a></li>`; };
function renderNow(){
  const el = $('#tl-now'); if (!el) return;
  const now = myNow(), open = !!(el.querySelector('details') || {}).open, sh = hoursState(HOURS.find(h => h.k === 'shift'), now);
  el.innerHTML = `<div class="tile-h"><h2 id="h-now">Now</h2><span class="tag mono" data-nowt>${esc(nowLabel(now))}</span><a class="tag nowsh" href="#gz-rules--cv">${esc(sh.shift)} shift</a></div>
    <ul class="nowl">${HOURS.filter(h => h.kind === 'session').map(h => nowRow(h, now)).join('')}</ul>
    <details class="nowmore"${open ? ' open' : ''}><summary>Hours that change a route${svg('chev')}</summary><ul class="nowl">${HOURS.filter(h => h.kind === 'span' || h.kind === 'after').map(h => nowRow(h, now)).join('')}</ul></details>
    <p class="sub">Malaysia time, from this phone's clock, against the hours the guide's sources print. Sessions only: it says nothing about booking.</p>`;
}
/* On a step: the hours it prints or uses, live, with the time they were read at */
const nowChipsIn = (hs, now) => `<span class="nowc-t">${svg('clock')}${esc(nowLabel(now))}</span>` + hs.map(h => { const s = hoursState(h, now); return `<span class="nowc-c${s.on ? ' on' : ''}" data-nowk="${h.k}"><b>${esc(h.t)}:</b> ${esc(s.line)}</span>`; }).join('');
function nowChips(id, node){
  const a = '#' + id, b = a + '--' + node, hs = HOURS.filter(h => h.on.some(x => x === a || x === b));
  return hs.length ? `<div class="nowc" data-nowc="${hs.map(h => h.k).join(' ')}" aria-label="Hours now">${nowChipsIn(hs, myNow())}</div>` : '';
}
function nowTick(){
  if (document.hidden) return;
  const now = myNow();
  if (curView === 'home') renderNow();
  $$('.nowc').forEach(el => { el.innerHTML = nowChipsIn(HOURS.filter(h => el.dataset.nowc.split(' ').includes(h.k)), now); });
}
setInterval(nowTick, 30000);
document.addEventListener('visibilitychange', () => nowTick());

/* ================= Pinned calculators and steps (17 Nov 2026) =================
   The star keeps a whole entry (Saved); a pin keeps one calculator or one step, shown in a row at the top of the home page, in the
   menu and in the search box. Only the addresses are kept, on this phone (gz-pins), as Saved does: nothing about a patient. */
const PIN_MAX = 12;
const pinOk = h => { const m = /^#calc-([a-z0-9]+)$/.exec(h); if (m) return !!CALCS[m[1]]; const [id, k] = String(h).slice(1).split('--'); return !!(P[id] && k && P[id].nodes[k]); };
const pinIds = () => store.get('gz-pins', []).filter(pinOk);
const isPinned = h => pinIds().includes(h);
const clip = (s, n) => s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, '') + '…';
function pinInfo(h){
  const m = /^#calc-([a-z0-9]+)$/.exec(h);
  if (m){ const c = CALCS[m[1]], g = CALC_G[c.g]; return {href:h, title:c.t, sub:'Calculator', kind:'Calculator', meta:g.t, ic:g.ic, j:g.j}; }
  const [id, k] = h.slice(1).split('--'), p = P[id], n = p.nodes[k], c = catOf(id);
  return {href:h, title:clip(n.end ? n.title : nodeText(n), 64), sub:p.title, kind:'Step', meta:p.title, ic:c.ic, j:c.j};
}
function pinBtnHTML(h, cls, label){
  const on = isPinned(h);
  return `<button type="button"${cls ? ` class="${cls}"` : ''} data-pin="${h}" aria-pressed="${on}" aria-label="${on ? 'Pinned to the home page. Tap to unpin' : 'Pin to the home page'}" title="${on ? 'Pinned' : 'Pin'}">${svg('pin', '', on)}${label ? `<span class="bl">${on ? 'Pinned' : 'Pin'}</span>` : ''}</button>`;
}
function syncPins(h){
  const on = isPinned(h);
  $$('[data-pin]').filter(x => x.dataset.pin === h).forEach(x => { const lbl = !!x.querySelector('.bl'); x.setAttribute('aria-pressed', on); x.title = on ? 'Pinned' : 'Pin';
    x.setAttribute('aria-label', on ? 'Pinned to the home page. Tap to unpin' : 'Pin to the home page'); x.innerHTML = svg('pin', '', on) + (lbl ? `<span class="bl">${on ? 'Pinned' : 'Pin'}</span>` : ''); });
}
function togglePin(h){
  const s = pinIds(), on = !s.includes(h);
  if (on && s.length >= PIN_MAX){ toast('Up to ' + PIN_MAX + ' pins: unpin one first'); return false; }
  store.set('gz-pins', on ? [h, ...s] : s.filter(x => x !== h));
  buzz('ok'); toast(on ? 'Pinned to the home page' : 'Unpinned');
  renderPins(); renderSideSaved();
  return on;
}
function renderPins(){
  const el = $('#pins'); if (!el) return;
  const s = pinIds();
  el.hidden = !s.length;
  el.innerHTML = s.length ? `<div class="pins-h"><h2>Pinned</h2><small>${s.length} of ${PIN_MAX}</small></div><ul class="pins-x">${s.map(h => { const i = pinInfo(h); return `<li><a class="pinc" href="${h}"><span class="ic j ${i.j}">${svg(i.ic)}</span><span class="pinc-t"><b>${esc(i.title)}</b><small>${esc(i.sub)}</small></span></a></li>`; }).join('')}</ul>` : '';
  const x = el.querySelector('.pins-x'); if (x) requestAnimationFrame(() => edgeFade(x));
}

/* ================= Search palette ================= */
let palSel = 0, palFrom = null;
const ent = id => { const c = catOf(id); return {href:'#' + id, title:P[id].title, kind:kindOf(P[id]), meta:metaOf(P[id]), ic:c.ic, c:c.c, j:c.j}; };
const KIND_J = {Journey:'t-emerald', Number:'t-garnet', Tool:'t-teal', Video:'t-obsidian', Quiz:'t-plum', Update:'t-sapphire', Poster:'t-obsidian', About:'t-obsidian'};
const jewelOf = e => e.j || (e.ic === 'calc' ? 't-bronze' : KIND_J[e.kind] || 't-obsidian');
function palEntry(e, ts, loose, snip){
  return `<li><a href="${e.href}"${e.rx ? ` data-rx="${esc(e.rx)}"` : ''}${e.dg ? ` data-dg="${esc(e.dg)}"` : ''}${e.ab ? ` data-ab="${esc(e.ab)}"` : ''}${e.ax ? ` data-ax="${esc(e.ax)}"` : ''}${e.ext ? ` data-extq="${esc(e.ext)}"` : ''} role="option" aria-selected="false"><span class="ic j ${jewelOf(e)}">${svg(e.ic)}</span><span class="rx"><span class="rt"><span>${ts ? highlight(e.title, ts, loose) : esc(e.title)}</span><span class="rk">${esc(e.kind)} · ${esc(e.meta)}</span></span>${ts ? `<span class="rs">${snippetOf(e, ts, loose, snip)}</span>` : ''}</span></a></li>`;
}
/* ================= Antidotes (21 Nov 2026) =================
   The MOH Antidotes Quick Guide (Adult Dose), First Edition, January 2022 (Pharmaceutical Services Programme), 38 antidotes,
   each with its own headings in their printed order and its text unmodified, as its page 2 permits with acknowledgement
   (data/antidotes.json, from src/antidotes.js; AXIDX in data30.js names them for search and the drug finder card). The
   entries load the first time the page opens (about 57 KB) and the web app keeps them once used. A line the reader found
   doubtful (a maximum printed per kg, a storage table that contradicts its text) is shown as printed and marked. */
const AX = {state:'idle', d:null, p:null};
function axLoad(){
  if (AX.state === 'loading' || AX.state === 'ready') return AX.p;
  AX.state = 'loading';
  return AX.p = fetch('data/antidotes.json').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(d => { AX.d = d; AX.state = 'ready'; if (lazyDone.has('antidotes')){ renderAxStatic(); renderAx(); } })
    .catch(() => { AX.state = 'failed'; if (lazyDone.has('antidotes')) renderAx(); });
}
/* The guide's own marks: **bold**, ^n reference marks, bullet lines and pipe tables, drawn as printed */
function axMd(t){
  const inl = x => esc(x).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\^(\d+(?:[,\-–]\d+)*)/g, '<sup>$1</sup>');
  const out = []; let tb = null, ul = null;
  const flush = () => { if (tb){ const rows = tb.filter(r => !/^\|\s*-/.test(r)).map(r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim()));
      out.push(`<div class="ax-tw"><table class="ax-t"><thead><tr>${rows[0].map(c => `<th>${inl(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r => `<tr>${r.map(c => `<td>${inl(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`); tb = null; }
    if (ul){ out.push(`<ul>${ul.map(x => `<li>${inl(x)}</li>`).join('')}</ul>`); ul = null; } };
  String(t).split('\n').forEach(l => {
    if (/^\s*\|/.test(l)){ if (ul) flush(); (tb = tb || []).push(l.trim()); return; }
    if (/^\s*[•▪-]\s+/.test(l)){ if (tb) flush(); (ul = ul || []).push(l.replace(/^\s*[•▪-]\s+/, '')); return; }
    flush(); if (l.trim()) out.push(`<p>${inl(l)}</p>`);
  });
  flush(); return out.join('');
}
function renderAx(){
  const L = $('#axl'); if (!L) return;
  if (AX.state !== 'ready'){ if (AX.state === 'idle' && !$('#v-antidotes').hidden) axLoad(); /* drawn early when the phone is idle: load only once the page is shown */
    $('#axn').textContent = AX.state === 'failed' ? '' : 'Getting the guide ready: about 57 KB, once.';
    L.innerHTML = AX.state === 'failed' ? '<p class="empty">The guide could not be loaded. Check the connection and open this page again.</p>' : ''; return; }
  const q = ($('#axq').value || '').trim().toLowerCase(), R = AX.d.rows;
  const hit = r => !q || r.n.toLowerCase().includes(q) || String(r.f).toLowerCase().includes(q) || (q.length >= 4 && r.h.some(([h, v]) => /^indication/i.test(h) && v.toLowerCase().includes(q)));
  const hits = R.map((r, i) => [r, i]).filter(([r]) => hit(r));
  $('#axn').textContent = q ? `${hits.length} of ${R.length} antidotes` : `${R.length} antidotes, in the guide's own order. Tap one to open it.`;
  const one = hits.length === 1;
  L.innerHTML = hits.length ? `<ul class="ax-l">${hits.map(([r, i]) => `<li><details class="ax" id="ax-${i}"${one ? ' open' : ''}><summary><span class="ax-h"><b>${esc(r.n)}</b><small>${esc(r.f)}</small></span>${r.q ? `<span class="tag ax-qt" title="A line under Still to confirm">Check</span>` : ''}<span class="ax-pg">p${esc(r.p)}</span></summary>`
    + `<div class="ax-b">${r.q ? `<p class="ab-gap">${svg('info')}<span>As printed, and under Still to confirm: ${esc(r.q)}.</span></p>` : ''}${r.h.map(([h, v]) => `<section class="ax-f"><h4>${esc(h)}</h4>${axMd(v)}</section>`).join('')}</div></details></li>`).join('')}</ul>`
    : '<p class="empty">No antidote in the guide matches. Try the poison, or the antidote\'s generic name.</p>';
}
const AX_TILE = () => TILE_KEYS.has('antidote') || STILL_KEYS.has('antidote') ? 'antidote' : 'tox';
function renderAxStatic(){
  if (!$('#axhero')) return;
  withTiles($('#axhero'), `${tileMedia(AX_TILE())}<span class="lbl">MOH · First Edition · Jan 2022</span><h2>${typeof AXIDX !== 'undefined' ? AXIDX.length : 38} antidotes</h2><p>Preparation, dose and storage for each, as the Ministry of Health's quick guide prints them.</p>`);
  const M = AX.d && AX.d.meta;
  $('#axsrc').innerHTML = `<p class="lk-note">Source: Antidotes Quick Guide (Adult Dose), First Edition, January 2022, Pharmaceutical Services Programme, Ministry of Health Malaysia${M ? ` (${esc(M.code)}, ${esc(M.isbn)})` : ''}. Reproduced with acknowledgement and the text unmodified, as its page 2 permits: “Permission is hereby granted to reproduce information contained herein provided that such reproduction be given due acknowledgement and shall not modify the text.” Each entry's reference list, which its small raised numbers point to, is in the printed guide, and its tables are redrawn for a phone: where the guide merges a cell, its value is repeated in each row or column it covers, and two boxed notes (dantrolene, digoxin Fab) sit after their dose sections. A second reader checked every value against the page images. Its own disclaimer: “${esc(M ? M.disclaimer : 'This antidotes guide is intended to serve the user as a handy reference and not as a complete drug information resource.')}” A national guide (standing rule 8). It has not yet been compared line by line with the ebook's pathways or the hospital's own regimens (paracetamol overdose and its NAC regimen among them): those stay the department's route, and the comparison is under Still to confirm.</p>`;
}
function renderToolsAx(){
  if (!$('#tax') || typeof AXIDX === 'undefined') return;
  withTiles($('#tax'), `${tileMedia(AX_TILE())}<div class="row"><span class="ic">${svg('prot')}</span><h2>Antidotes</h2><span class="tag">${AXIDX.length}</span></div><p>The Ministry of Health's quick guide, January 2022: preparation, dose and storage for each antidote, as printed.</p>`);
}
/* ================= Abbreviations (21 Nov 2026) =================
   The Ministry of Health's "Senarai Kata Singkatan (Abbreviation) di Fasiliti Kementerian Kesihatan Malaysia Bil.1/2024", all
   2,665 rows as printed (data/abbr.json, from src/abbr.js). It prints no issuer, reference, date or rule for its use. It loads
   the first time it is needed (the page #abbreviations, or a search of 2 to 10 characters with no space; about 48 KB with
   gzip), and the web app keeps it once used. A search that is exactly an abbreviation on the list shows its meanings above
   the results; an abbreviation with several rows shows them all, as printed, and the guide never chooses between them. */
const KB = {state:'idle', rows:null, by:null, meta:null, p:null};
const kbKey = s => String(s).toLowerCase().replace(/[\s.]/g, '');
function kbLoad(){
  if (KB.state === 'loading' || KB.state === 'ready') return KB.p;
  KB.state = 'loading';
  return KB.p = fetch('data/abbr.json').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(d => {
    KB.meta = d.meta; KB.rows = d.rows; KB.by = new Map();
    d.rows.forEach(r => { const k = kbKey(r[0]); if (!KB.by.has(k)) KB.by.set(k, []); KB.by.get(k).push(r); });
    KB.state = 'ready';
    if (!$('#pal').hidden && $('#gq').value.trim() && !askCtl) renderPal(); /* never over a question being asked, or its answer */
    if (lazyDone.has('abbreviations')) renderKb();
  }).catch(() => { KB.state = 'failed'; if (lazyDone.has('abbreviations')) renderKb(); });
}
function kbCard(q){
  if (KB.state !== 'ready') return '';
  const rows = KB.by.get(kbKey(q)); if (!rows) return '';
  return `<section class="drugc kbc" aria-label="${esc(rows[0][0])}: on the abbreviation list"><div class="dc-h"><span class="ic j t-slate">${svg('rule')}</span><span class="dc-ht"><b>${esc(rows[0][0])}</b><small>MOH abbreviation list, Bil.1/2024, as printed${rows.length > 1 ? `: ${rows.length} rows` : ''}</small></span></div>`
    + rows.slice(0, 4).map(r => `<a class="dc-r" href="#abbreviations" data-kb="${esc(r[0])}"><span class="k">Row ${r[3]} · p${r[2]}</span><span class="v">${esc(r[1])}</span></a>`).join('')
    + (rows.length > 4 ? `<a class="dc-r more" href="#abbreviations" data-kb="${esc(rows[0][0])}"><span class="v">${rows.length - 4} more rows</span></a>` : '') + '</section>';
}
function renderKb(){
  const L = $('#kbl'); if (!L) return;
  if (KB.state !== 'ready'){ if (KB.state === 'idle' && !$('#v-abbreviations').hidden) kbLoad();
    $('#kbn').textContent = KB.state === 'failed' ? '' : 'Getting the list ready: about 48 KB, once.';
    L.innerHTML = KB.state === 'failed' ? '<p class="empty">The list could not be loaded. Check the connection and open this page again.</p>' : ''; return; }
  const raw = ($('#kbq').value || '').trim(), q = raw.toLowerCase(), k = kbKey(raw);
  let hits = [];
  if (q){
    const exact = KB.rows.filter(r => kbKey(r[0]) === k), starts = k ? KB.rows.filter(r => kbKey(r[0]) !== k && kbKey(r[0]).startsWith(k)) : [];
    const inMeaning = q.length >= 3 ? KB.rows.filter(r => !(k && kbKey(r[0]).startsWith(k)) && r[1].toLowerCase().includes(q)) : [];
    hits = [...exact, ...starts, ...inMeaning];
  }
  const re = q ? new RegExp('(' + raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig') : null;
  const hl = s => re ? String(s).split(re).map((v, i) => i % 2 ? `<mark>${esc(v)}</mark>` : esc(v)).join('') : esc(s);
  $('#kbn').textContent = !q ? `${KB.rows.length.toLocaleString('en-GB')} abbreviations. Type the letters, or a word in the meaning.` : hits.length ? `${hits.length} row${hits.length > 1 ? 's' : ''}${hits.length > 60 ? ': the first 60' : ''}` : '';
  L.innerHTML = !q ? '' : hits.length ? `<ul class="phx-l kb-l">${hits.slice(0, 60).map(r => `<li class="phx kb-r"><span class="phx-t"><b class="kb-a">${hl(r[0])}</b><span class="kb-m">${hl(r[1])}</span><small class="kb-p">Row ${r[3]} · p${r[2]}</small></span></li>`).join('')}</ul>`
    : `<p class="empty">“${esc(raw)}” is not on the list. The list says nothing about abbreviations it leaves out.</p>`;
}
const KB_TILE = () => TILE_KEYS.has('abbrev') || STILL_KEYS.has('abbrev') ? 'abbrev' : 'sources';
function renderKbStatic(){
  if (!$('#kbhero')) return;
  withTiles($('#kbhero'), `${tileMedia(KB_TILE())}<span class="lbl">Ministry of Health · Bil.1/2024</span><h2>2,665 abbreviations</h2><p>Each with its meaning as the list prints it, on 61 pages.</p>`);
  $('#kbsrc').innerHTML = `<p class="lk-note">Source: “Senarai Kata Singkatan (Abbreviation) di Fasiliti Kementerian Kesihatan Malaysia Bil.1/2024”, posted to the department's channel on 1 Aug 2024. The list prints no issuer, reference, date or signature, and no rule on how to use it. It prints one instruction, in its row 1500: “MSO4: Morphine Sulfate (Do Not Use This Abbreviation. Write Out The Name. Per The Do-Not-Use List.)”; that do-not-use list is not in the file. Where one abbreviation has several rows, or a row reads oddly, it is shown as printed. It gives only the meanings it prints: TDS, for example, appears only as “Toilet, Debridement And Suturing”, and BD only as “Binswanger's Disease”. Nothing you type is stored.</p>`;
}
function renderToolsKb(){
  if (!$('#tkb')) return;
  withTiles($('#tkb'), `${tileMedia(KB_TILE())}<div class="row"><span class="ic">${svg('rule')}</span><h2>Abbreviations</h2><span class="tag">2,665</span></div><p>The Ministry of Health's list, Bil.1/2024: what an abbreviation stands for, as printed.</p>`);
}
function renderPal(){
  const q = $('#gq').value.trim(), body = $('#palbody');
  let h = '';
  if (!q){
    const s = savedIds(), r = recentIds().filter(id => !s.includes(id)).slice(0, 4);
    if (s.length) h += '<div class="grp">Saved</div><ul class="pal-res" role="listbox">' + s.map(id => palEntry(ent(id))).join('') + '</ul>';
    const pn = pinIds(); if (pn.length) h += '<div class="grp">Pinned</div><ul class="pal-res" role="listbox">' + pn.map(x => palEntry(pinInfo(x))).join('') + '</ul>';
    if (r.length) h += '<div class="grp">Recent</div><ul class="pal-res" role="listbox">' + r.map(id => palEntry(ent(id))).join('') + '</ul>';
    const quick = POPULAR.map(([href]) => IDX.find(e => e.href === href)).filter(Boolean);
    h += '<div class="grp">Quick open</div><ul class="pal-res" role="listbox">' + quick.map(e => palEntry(e)).join('') +
      palEntry({href:'#tools', title:'Discharge safety check', kind:'Tool', meta:'Shift tools', ic:'check', c:'c-meta'}) +
      palEntry({href:'#numbers', title:'Numbers to know', kind:'Number', meta:'Code Blue, Code Stroke, MAU, EMACC, IPR', ic:'phone', c:'c-abdo'}) + '</ul>';
  } else {
    const kw = findMore(q);
    /* Smart search downloads the first time it is needed: the first search of three letters or more */
    if ((AI.state === 'idle' || AI.state === 'failed') && !aiTried && prefs.ai !== 'off' && !SAVE_DATA && q.replace(/[^a-z]/gi, '').length >= 3){ aiTried = true; aiLoad(); }
    if (msQuery(q) && (AIMS.state === 'idle' || AIMS.state === 'failed') && !aiMsTried && prefs.ai !== 'off' && !SAVE_DATA){ aiMsTried = true; aiLoadMs(); }
    const sm = smartFind(q, kw), r = sm ? sm.r : kw.r, {loose, also} = kw, fixed = kw.fixed && (!sm || sm.fixUsed || kw.r.includes(sm.r[0])) ? kw.fixed : null; /* a corrected word is never silent */
    const ts = terms(fixed || q).concat(also.flatMap(terms));
    const note = sm && sm.weak ? `<div class="pal-fix pal-weak" id="gfix">These are the nearest by meaning. If none fits, the guide may not cover “${esc(q)}”: see the <a href="#guidelines">national CPGs</a>.</div>`
      : fixed ? `<div class="pal-fix" id="gfix">Nothing for “${esc(q)}”. Showing results for <b>${esc(fixed)}</b>.</div>`
      : also.length ? `<div class="pal-fix" id="gfix">Including results for <b>${also.map(esc).join('</b>, <b>')}</b>.</div>` : '';
    const ai = AIMS.state === 'loading' && msQuery(q) ? `<div class="pal-ai" id="gai">${svg('spark')}<span>Getting Malay smart search ready: about 8 MB, once. Searching meanwhile.</span></div>`
      : AI.state === 'loading' ? `<div class="pal-ai" id="gai">${svg('spark')}<span>Getting smart search ready: about 8 MB, once. Searching by words meanwhile.</span></div>`
      : sm && sm.moved && !sm.weak ? `<div class="pal-ai" id="gai">${svg('spark')}<span>Smart search: closest in meaning first, all from the guide's own pages.</span></div>`
      : AI.state === 'idle' && SAVE_DATA && prefs.ai !== 'off' ? `<div class="pal-ai" id="gai">${svg('spark')}<span>Smart search waits while Data Saver is on.</span><button type="button" class="sm" id="gaidl">Download, 8 MB</button></div>` : '';
    const dcs = drugsFor([fixed || q, ...also]), dcard = dcs.length && dcs.length <= 2 ? dcs.map(drugCard).join('') : '', kbc = kbCard(q);
    if (KB.state === 'idle' && !SAVE_DATA && /^\S{2,10}$/.test(q)) kbLoad();
    h = askBtn(q) + ai + (r.length ? note + dcard + `<div class="grp">${r.length} result${r.length > 1 ? 's' : ''}${loose && !sm ? ' (partial matches)' : ''}</div><ul class="pal-res" id="gres" role="listbox">` + r.map(e => palEntry(e, ts, loose, sm && sm.snip)).join('') + '</ul>' + kbc
      : kbc + `<div class="pal-none">Nothing ${kbc ? 'else ' : ''}found for “${esc(q)}”. Try a symptom, a diagnosis, a score, a ward or a drug.</div>`);
  }
  if (askCtl && q){ askCtl.abort(); askCtl = null; }
  body.innerHTML = h; body.scrollTop = 0;
  palSel = 0; markSel(true);
}
function palLinks(){ return $$('#palbody a').filter(a => !a.closest('.drugc')); } /* the drug card is reached by Tab; arrows and Enter keep to the results */
function markSel(still){ palLinks().forEach((a, i) => a.setAttribute('aria-selected', i === palSel ? 'true' : 'false')); const a = palLinks()[palSel]; if (a && !still) a.scrollIntoView({block:'nearest'}); } /* new results open at the top, the drug card in full; only the arrow keys scroll */
function openPal(q){
  if (!$('#pal').hidden) return;
  palFrom = document.activeElement;
  closeDrawer(false);
  if (AI.state === 'failed') aiTried = false; /* a download that failed is tried again on the next search */
  if (AIMS.state === 'failed') aiMsTried = false;
  $('#pal').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#gq').value = typeof q === 'string' ? q : ''; renderPal();
  if (typeof q !== 'string' || matchMedia('(hover:hover) and (pointer:fine)').matches) $('#gq').focus();
}
function closePal(restore){
  if ($('#pal').hidden) return;
  if (typeof micStop === 'function' && micOn) micStop();
  if (!restore && $('#gq').value.trim()) navPal = {q:$('#gq').value.trim(), at:Date.now()};
  $('#pal').hidden = true; document.documentElement.style.overflow = '';
  if (restore && palFrom && palFrom.focus) palFrom.focus();
}

/* ================= Drug finder card (17 Nov 2026) =================
   Typing a drug's name puts one card above the search results: where the guide names that drug. Its rows on the ED pharmacy list
   (with the formulary category), its pages in the ED dosing and dilution guide (with the hospital's high-alert mark), a look-alike
   pair from the Emergency Pharmacy's top 10, and every step that names it, each a tap away. It points and never summarises: no
   dose is lifted out of its step (rules 5 and 8), and the results below keep their own order. A drug is known by its name on the
   two department lists; two or more drugs sharing a name (several insulins) show no card, and the results list them. */
let DRUGS = null;
const DSTEPS = new Map();
const dgGeneric = t => t.split(/\s(?=\d)|\s\(|;|,/)[0].trim();
const DRUG_TWO = /^(sodium|potassium|calcium|magnesium|vitamin|glucose|dextrose|human|water|ferrous|glyceryl|hydrogen|activated|tranexamic|valproic|fusidic|folic|isosorbide)$/;
/* The two lists name one drug with and without its salt (Tramadol HCl, Tramadol): the salt is dropped, except after a word such as sodium or calcium */
const DRUG_SALT = /^(hcl|hydrochloride|sulphate|sulfate|phosphate|citrate|maleate|bromide|tartrate|bitartrate|acetate|succinate|besylate|besilate|mesylate|mesilate|hyclate|sodium|potassium|dihydrate|monohydrate|trihydrate|hydrobromide|fumarate|butylbromide)$/i;
const drugName = g => { const w = g.trim().split(/\s+/); if (!DRUG_TWO.test(w[0].toLowerCase())) while (w.length > 1 && DRUG_SALT.test(w[w.length - 1])) w.pop(); return w.join(' '); };
function drugIndex(){
  if (DRUGS) return DRUGS;
  const M = new Map(), add = (g0, kind, i) => { const g = drugName(g0), k = g.toLowerCase(); if (!M.has(k)) M.set(k, {g, k, rx:[], dg:[], ab:[], ax:[]}); M.get(k)[kind].push(i); };
  if (typeof EDRX !== 'undefined') EDRX.items.forEach(i => add(rxGeneric(i[1]), 'rx', i));
  if (typeof EDDG !== 'undefined') EDDG.items.forEach(i => add(dgGeneric(i[1]), 'dg', i));
  if (typeof AXIDX !== 'undefined') AXIDX.forEach(([i, n, f, g]) => add(g, 'ax', {n, f, g}));
  if (typeof ABX !== 'undefined'){ ABX.dose.renal.rows.forEach(r => add(r[6], 'ab', {n:r[0], g:r[6]})); ABX.dose.none.forEach(r => add(r[3], 'ab', {n:r[0], g:r[3]})); ABX.dil.rows.forEach(r => add(r[4], 'ab', {n:r[1], g:r[4]})); }
  DRUGS = [...M.values()].map(d => {
    const w = d.k.split(/[\s/]+/), f = w[0].length < 4 ? d.k : DRUG_TWO.test(w[0]) && w[1] ? w[0] + ' ' + w[1] : w[0];
    return {...d, f, g:d.rx.length ? drugName(rxGeneric(d.rx[0][1])) : d.g.charAt(0).toUpperCase() + d.g.slice(1).toLowerCase()};
  });
  return DRUGS;
}
/* A single word being typed may be the start of a drug's name (amox); a longer search must hold the drug's name as whole words,
   so "adrenal crisis" is not adrenaline and "none of the four" is not the four-factor concentrate */
const DRUG_WORD = /^(oral|four|anti|topical|normal|sterile|snake|human)$/;
const wordIn = (q, t) => new RegExp('(^|[^a-z])' + reEsc(t) + '(?![a-z])').test(q);
function drugsFor(qs){
  const out = [];
  qs.forEach(q0 => {
    const q = String(q0 || '').toLowerCase().trim(); if (q.replace(/[^a-z]/g, '').length < 4) return;
    const words = q.split(/[^a-z0-9-]+/).filter(Boolean), one = words.length === 1 && words[0].length >= 4 ? words[0] : '';
    drugIndex().forEach(d => { if (out.includes(d)) return;
      if (wordIn(q, d.k) || (!DRUG_WORD.test(d.f) && wordIn(q, d.f)) || (one && !DRUG_WORD.test(one) && d.k.startsWith(one))) out.push(d); });
  });
  return out;
}
function drugSteps(d){
  if (DSTEPS.has(d.k)) return DSTEPS.get(d.k);
  const re = new RegExp('(^|[^a-z])' + reEsc(d.f) + '(?![a-z])', 'i'), hits = [];
  Object.keys(P).forEach(id => {
    const p = P[id], ns = Object.entries(p.nodes || {}).filter(([, n]) => re.test(JSON.stringify(n))).map(([k, n]) => ({href:'#' + (k === p.start ? id : id + '--' + k), t:stepLabel(n.end ? n.title : nodeText(n))}));
    if (ns.length) hits.push({id, t:p.title, ns}); else if (re.test(JSON.stringify([p.notes, p.dept, p.tables, p.advice, p.concerns, p.leaflet, p.script]))) hits.push({id, t:p.title, ns:[]});
  });
  DSTEPS.set(d.k, hits); return hits;
}
/* A step's own heading, cut before the first dose or threshold it prints ("Administer IV morphine …"), so no number leaves its step */
const DOSE_AT = /\d+(?:[.,]\d+)?(?:\s?(?:to|–|-)\s?\d+(?:[.,]\d+)?)?\s?(?:mg|mcg|µg|g|kg|ml|mL|L|units?|IU|mmol|µmol|%|puffs?|U)\b/i;
function stepLabel(t){
  const m = DOSE_AT.exec(t); if (!m) return clip(t, 72);
  const s = t.slice(0, m.index).replace(/[\s,:;(–-]+$/, '');
  return s.length >= 10 ? clip(s, 64) + ' …' : 'Open the step';
}
function drugCard(d){
  const st = drugSteps(d), n = st.reduce((a, e) => a + e.ns.length, 0), withSteps = st.filter(e => e.ns.length).length, refOnly = st.length - withSteps, hi = d.dg.some(i => i[6]);
  const pages = i => 'p' + i[4] + (i[5] !== i[4] ? '–' + i[5] : '');
  const HI = '<span class="tag hi" title="On the hospital\'s 2026 high-alert list">High alert</span>';
  const rows = d.rx.slice(0, 3).map(i => `<a class="dc-r" href="#pharmacy" data-rx="${esc(rxGeneric(i[1]))}"><span class="k">ED pharmacy</span><span class="v">${esc(i[1])}</span><span class="tag">${esc(i[2] || 'Not in the formulary')}</span></a>`).join('')
    + (d.rx.length > 3 ? `<a class="dc-r more" href="#pharmacy" data-rx="${esc(rxGeneric(d.rx[0][1]))}"><span class="v">${d.rx.length - 3} more on the pharmacy list</span></a>` : '')
    + d.dg.map(i => `<a class="dc-r" href="#dilution" data-dg="${esc(dgGeneric(i[1]))}"><span class="k">Dilution guide</span><span class="v">${esc(i[1])}, ${pages(i)}</span>${i[6] ? HI : ''}</a>`).join('')
    + (d.ab || []).slice(0, 2).map(i => `<a class="dc-r" href="#antibiotics" data-ab="${esc(i.g)}"><span class="k">Antimicrobial guide</span><span class="v">${esc(i.n)}</span></a>`).join('')
    + (d.ax || []).slice(0, 2).map(i => `<a class="dc-r" href="#antidotes" data-ax="${esc(i.g)}"><span class="k">Antidote guide</span><span class="v">${esc(i.n)}</span></a>`).join('');
  const lasa = typeof EDRX_LASA === 'undefined' ? '' : d.rx.filter(i => EDRX_LASA[i[0]]).map(i => { const o = EDRX.items.find(x => x[0] === EDRX_LASA[i[0]]); return o ? `<p class="dc-lasa">${svg('info')}<span>Look-alike pair on the Emergency Pharmacy's top 10: <b>${esc(i[1])}</b> and <b>${esc(o[1])}</b>.</span></p>` : ''; }).join('');
  const items = st.flatMap(e => e.ns.length ? e.ns.map(s => `<li><a href="${s.href}"><b>${esc(e.t)}</b><span>${esc(s.t)}</span></a></li>`) : [`<li><a href="#${e.id}"><b>${esc(e.t)}</b><span>Named in its reference tabs</span></a></li>`]);
  const ent = x => `${x} entr${x === 1 ? 'y' : 'ies'}`;
  const cnt = n ? `Named in ${n} step${n === 1 ? '' : 's'}${withSteps > 1 ? ` of ${ent(withSteps)}` : ''}` + (refOnly ? `, and in the reference tabs of ${refOnly} more` : '') : refOnly ? `Named in the reference tabs of ${ent(refOnly)}` : 'Not named in the guide\'s pathways';
  return `<section class="drugc" aria-label="${esc(d.g)}: where the guide names it"><div class="dc-h"><span class="ic j t-teal">${svg('pill')}</span><span class="dc-ht"><b>${esc(d.g)}</b><small>Where the guide names it. Each dose stays in its own step.</small></span>${hi ? HI : ''}</div>`
    + (rows ? `<div class="dc-rows">${rows}</div>` : '') + lasa
    + `<div class="dc-s"><p class="dc-n">${cnt}</p>${items.length ? `<ul>${items.slice(0, 4).join('')}</ul>` + (items.length > 4 ? `<details><summary>All ${items.length}</summary><ul>${items.slice(4).join('')}</ul></details>` : '') : ''}</div></section>`;
}

/* ================= Voice search (12 Nov 2026) =================
   A microphone in the search box: say a topic and it is typed for you, in English or Bahasa Melayu. The web app uses the
   browser's own speech recognition (Chrome sends the sound to its speech service; nothing is kept by the guide). The claude.ai
   artifact, where a framed page cannot reach the microphone, uses the viewer's dictation when the host offers it. The hint
   says not to speak a patient's name or details (standing rule 4). If the microphone cannot start, the button goes away. */
const SPEECH = window.SpeechRecognition || window.webkitSpeechRecognition;
const FRAMED = (() => { try { return window.top !== window; } catch(e){ return true; } })();
let micLang = 'en', micRec = null, micDict = null, micOn = false, micBase = '', micDead = false;
const MIC_HINT = {en:'Listening in English. Say a topic, not a patient\'s name or details.', ms:'Mendengar dalam Bahasa Melayu. Sebut topik sahaja, bukan nama atau butiran pesakit.'};
/* ================= Voice search on this phone (13 Nov 2026) =================
   The fifth AI upgrade: English voice search can run on the phone itself, so the sound never leaves it (rule 4), instead of
   the browser's speech service. Moonshine tiny (onnx-community/moonshine-tiny-ONNX, MIT), run by transformers.js 4.3.2
   (Apache 2.0) from jsDelivr, pinned; its files come from Hugging Face (about 35 MB once, the browser keeps them). Measured
   on 13 Nov 2026: 90 to 92% of words right on test speech, about a tenth of a second per clip, and nothing for silence;
   Whisper tiny was less accurate and ten times slower. English only: free on-phone models are too inaccurate in Malay, so the
   BM button keeps the browser's service. Web app only (Settings, Voice on this phone, off until switched on): the claude.ai
   copy cannot serve the 27 MB runtime. It hears a topic; it never stores what was said. */
const ASR_TF = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js';
const ASR_OK = !FRAMED && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder && (window.AudioContext || window.webkitAudioContext));
let asrPipe = null, asrLoading = null, asrRec = null, asrState = 'idle', asrWork = false;
const asrLocal = () => ASR_OK && prefs.asr === 'on' && micLang === 'en';
function asrLoad(){
  if (asrPipe) return Promise.resolve(asrPipe);
  if (!asrLoading) asrLoading = (async () => {
    asrState = 'loading'; micHint();
    const tf = await import(ASR_TF);
    tf.env.allowLocalModels = false;
    const p = await tf.pipeline('automatic-speech-recognition', 'onnx-community/moonshine-tiny-ONNX');
    asrPipe = p; asrState = 'ready'; micHint(); return p;
  })().catch(e => { asrLoading = null; asrState = 'failed'; throw e; });
  return asrLoading;
}
async function asrDecode(buf){
  const AC = window.AudioContext || window.webkitAudioContext, c = new AC({sampleRate:16000});
  try {
    const a = await c.decodeAudioData(buf);
    if (a.numberOfChannels < 2) return a.getChannelData(0);
    const l = a.getChannelData(0), r = a.getChannelData(1), m = new Float32Array(l.length);
    for (let i = 0; i < l.length; i++) m[i] = (l[i] + r[i]) / 2;
    return m;
  } finally { c.close(); }
}
async function asrStart(){
  if (asrWork) return;
  asrWork = true;
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({audio:{channelCount:1}}); }
  catch(e){ asrWork = false; toast('The microphone is blocked for the guide here'); micUI(false); return; }
  const loading = asrLoad().catch(() => null), parts = [];
  let rec;
  try { rec = asrRec = new MediaRecorder(stream); }
  catch(e){ stream.getTracks().forEach(t => t.stop()); asrWork = false; toast('Voice on this phone does not work in this browser'); return; }
  const done = new Promise(f => { rec.onstop = f; });
  rec.ondataavailable = e => { if (e.data && e.data.size) parts.push(e.data); };
  micUI(true); rec.start();
  setTimeout(() => { if (rec.state !== 'inactive') rec.stop(); }, 6000);
  await done;
  stream.getTracks().forEach(t => t.stop());
  if (asrRec === rec) asrRec = null;
  micUI(false); asrBusy(true);
  try {
    const pcm = await asrDecode(await new Blob(parts, {type:rec.mimeType}).arrayBuffer()), asr = await loading;
    if (!asr) throw new Error('model');
    const out = await asr(pcm, {max_new_tokens:Math.max(16, Math.ceil(pcm.length / 16000 * 8))});
    const t = String(out && out.text || '').trim().replace(/[.,!?]+$/, '');
    if (t) micType(t); else toast('Nothing heard. Try again, closer to the phone.');
  } catch(e){ toast(asrState === 'failed' ? 'Voice on this phone could not download. Try again with a signal.' : 'That could not be heard. Try again.'); }
  asrBusy(false); asrWork = false;
}
function asrBusy(on){ const h = $('#gmhint'); if (!h) return; h.hidden = !on; h.textContent = on ? (asrState === 'ready' ? 'Working it out on this phone…' : 'Getting voice on this phone ready: about 35 MB, once…') : ''; }
function micHint(){ const h = $('#gmhint'); if (h && micOn && asrLocal()) h.textContent = 'Listening on this phone (English), up to 6 seconds: tap again to stop. ' + MIC_HINT.en.replace(/^Listening in English\. /, ''); }
function micShow(){
  const can = !micDead && (!!micDict || (!!SPEECH && !FRAMED) || (ASR_OK && prefs.asr === 'on'));
  $('#gmic').hidden = !can; $('#gmlang').hidden = !can;
}
function micUI(on){
  if (micOn !== on) buzz('tick');
  micOn = on;
  const b = $('#gmic'); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
  b.setAttribute('aria-label', on ? 'Stop listening' : 'Search by voice');
  const h = $('#gmhint'); h.hidden = !on; h.textContent = on ? MIC_HINT[micLang] : '';
  if (on) micHint();
}
function micType(text){ $('#gq').value = (micBase + ' ' + text).replace(/\s+/g, ' ').trim(); renderPal(); }
function micFail(hard){ micUI(false); if (hard){ micDead = true; micShow(); toast('Voice search is not available here'); } }
function micStart(){
  if (micOn) return micStop();
  micBase = $('#gq').value.trim();
  if (asrLocal()){ asrStart(); return; }
  if (micDict){
    micUI(true);
    micDict.start({language: micLang === 'ms' ? 'ms' : 'en'}).catch(e => micFail(e && (e.code === 'not_granted' || e.code === 'unavailable')));
    return;
  }
  if (!SPEECH){ toast('Voice search in BM needs Chrome or Edge here'); return; }
  try {
    const r = micRec = new SPEECH();
    r.lang = micLang === 'ms' ? 'ms-MY' : 'en-GB'; r.interimResults = true; r.maxAlternatives = 1; r.continuous = false;
    r.onresult = e => { let t = ''; for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript; micType(t); };
    r.onerror = e => micFail(['not-allowed', 'service-not-allowed', 'audio-capture', 'language-not-supported'].includes(e.error));
    r.onend = () => { micRec = null; micUI(false); };
    micUI(true); r.start();
  } catch(e){ micFail(true); }
}
function micStop(){
  if (asrRec && asrRec.state !== 'inactive'){ try { asrRec.stop(); } catch(e){} return; }
  if (micRec){ try { micRec.stop(); } catch(e){} }
  if (micDict && micOn) micDict.stop().catch(() => {});
  micUI(false);
}
$('#gmic').addEventListener('click', micStart);
$('#gmlang').addEventListener('click', () => {
  micLang = micLang === 'en' ? 'ms' : 'en';
  const b = $('#gmlang'); b.textContent = micLang === 'en' ? 'EN' : 'BM';
  b.setAttribute('aria-label', 'Voice language: ' + (micLang === 'en' ? 'English' : 'Bahasa Melayu') + '. Tap to change.');
  if (micOn){ micStop(); }
});
micShow();
/* In the claude.ai artifact: the host's dictation, when it offers it to this viewer */
if (window.claude && typeof window.claude.use === 'function') window.claude.use('dictation').then(d => {
  if (!d) return;
  micDict = d;
  d.onPartial(({text}) => micType(text));
  d.onFinal(({text}) => { micBase = (micBase + ' ' + text).trim(); micType(''); });
  d.onState(({state, reason}) => { if (state === 'idle'){ micUI(false); if (reason === 'not_granted' || reason === 'unavailable'){ micDead = true; micShow(); } } });
  micShow();
}).catch(() => {});

/* ================= Views ================= */
const VIEW_TITLE = {home:'', pathways:'Pathways', rules:'Rules and protocols', tools:'Shift tools', calc:'Calculators', numbers:'Numbers', learn:'Learn the Green Zone', new:'What\'s new', poster:'Wall poster', about:'Sources and about', intro:'First-shift intro', install:'Install the guide', pharmacy:'ED pharmacy', dilution:'Dilution guide', share:'Share the guide', links:'ED links'};
let curView = null, curSub = null, routed = false;
const SCROLL = {};
/* A topic or group tile filters the list under it. On a phone the tiles fill the screen, so the list comes up to meet the
   reader (Krishna, 10 Nov 2026): its first section settles just under the top bar, smoothly unless motion is reduced.
   Nothing moves when the list already starts in the upper third of the screen. */
const firstShown = sel => $$(sel).find(s => !s.hidden && s.offsetParent !== null) || null;
let revealNext = null;
function revealList(el){
  if (!el) return;
  const bar = $('#topbar'), under = bar && getComputedStyle(bar).display !== 'none' ? Math.max(0, bar.getBoundingClientRect().bottom) : 0;
  const y = el.getBoundingClientRect().top;
  if (y >= under && y <= under + innerHeight / 3) return;
  window.scrollTo({top:Math.max(0, window.scrollY + y - under - 12), behavior:REDUCED ? 'auto' : 'smooth'});
}
function showView(name, sub){
  ensureView(name);
  const from = curView, changed = name !== from;
  if (from && from !== 'run') SCROLL[from] = window.scrollY;
  if (changed){
    if (from === 'learn'){ pauseTour(); stopJourney(); }
    $$('#viewport > .view').forEach(v => { v.hidden = v.dataset.view !== name; });
    const el = $(`#viewport > .view[data-view="${name}"]`);
    el.classList.remove('enter', 'enter-back');
    if (!REDUCED && routed && !vtOn){ void el.offsetWidth; el.classList.add('enter'); }
  }
  curView = name; curSub = sub || null;
  markNav();
  closeDrawer(false);
  if (name !== 'run') setTopTitle(VIEW_TITLE[name] || '');
  if (changed || name === 'run'){
    const back = from === 'run' && SCROLL[name] && ['pathways', 'rules', 'home', 'numbers'].includes(name);
    window.scrollTo(0, back ? SCROLL[name] : 0);
  }
  /* A topic chosen on the home tile: the library opens with that topic, its list brought up */
  if (revealNext && name === revealNext[0]){ const s = revealNext[1]; revealNext = null; requestAnimationFrame(() => revealList(firstShown(s))); }
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
  const tab = curView === 'run' ? 'pathways' : v === 'calc' || v === 'install' || v === 'share' ? 'tools' : v;
  $$('#tabbar [data-tab]').forEach(t => { if (t.dataset.tab === tab) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current'); });
}
function showLearn(sub){
  const changed = showView('learn', sub);
  $$('#ltabs [data-lt]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lt === sub));
  $$('#v-learn [data-lp]').forEach(p => { p.hidden = p.dataset.lp !== sub; });
  if (sub === 'tour') tourOpen(); else pauseTour();
  if (sub !== 'journey') stopJourney(); else journeySeen();
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
  const s = t.src;
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
const TILE_KEYS = new Set(['all', 'heart', 'breath', 'brain', 'abdo', 'infect', 'meta', 'flow', 'prot', 'codeblue', 'codestroke', 'paths', 'rules', 'dc', 'calc', 'intro', 'tip', 'kids', 'doses', 'scores', 'calm', 'head', 'dengue', 'cardio', 'tox', 'dcpg', 'asthcpg', 'goutcpg', 'fbcpg', 'footcpg', 'acscpg', 'headcpg', 'ckdcpg', 'sinuscpg', 'toothcpg', 'hipcpg', 'paincpg', 't2dmcpg', 'vtecpg', 'copdcpg', 'throatcpg', 'injury', 'interp', 'snakecpg', 'links', 'comms', 'rabies', 'abdohb', 'pharm', 'newhkl', 'prescr', 'dilute', 'whatsnew', 'sources', 'poster', 'extdir', 'ctbrain', 'antidote', 'abbrev', 'aggress']);
/* Stills without a loop yet (the 12 Nov 2026 review: Flow Studio stills for What's new, Sources and about, the wall poster
   and the dilution guide): shown like a tile's still, never asked for a video. Move a key to TILE_KEYS once its loop is in tiles/. */
const STILL_KEYS = new Set([]); /* empty: the four review banners' loops and the ED extension directory's (extdir) went in on 12 Nov 2026 */
const tileMedia = k => TILE_KEYS.has(k) || STILL_KEYS.has(k) ? `<span class="tm" aria-hidden="true" data-tm="${k}"><img src="tiles/${k}.webp" alt="" loading="lazy" decoding="async" width="640" height="360"></span>` : '';
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
/* A loop on a page that is no longer shown stops downloading and goes, unless it has fully arrived (18 Nov 2026): Safari's
   engine kept every paused loop loading, 23 at once on pages no longer shown, which held the connections an X-ray film and
   smart search needed on the local test server. A loop that only scrolls out of view on the page you are on keeps its video,
   as before. When the page is shown again its loops start over their stills. */
const tileFull = v => v.duration > 0 && v.buffered.length > 0 && v.buffered.end(v.buffered.length - 1) >= v.duration - .25;
function playTile(el, show){
  let v = el.querySelector('video');
  if (!show || document.hidden){
    if (v){ v.pause(); if (!show && !tileFull(v) && el.closest('[hidden]')){ v.removeAttribute('src'); v.load(); v.remove(); } }
    return;
  }
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
  renderNow();
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
  $('#newcard').innerHTML = `<ul>${V8.slice(0, 6).map(([t, , l], i) => `<li><a href="${l[0][0]}">${esc(t)}</a>${i < CHG_NEW ? '<span class="chg-d">New to you</span>' : ''}</li>`).join('')}</ul><a class="pill" href="#new">Everything new, and what came from the drives${svg('chev')}</a>`;
}

/* ================= Pathway library ================= */
let libF = 'all', libCat = 'all';
function libCounts(){ const all = Object.keys(P); return {all:all.length, ebook:all.filter(id => !P[id].grp).length, cpg:all.filter(id => P[id].grp === 'cpg').length, rules:all.filter(id => P[id].grp === 'rules').length, saved:savedIds().length}; }
/* On a phone the whole library folds by group (17 Nov 2026): a tap on a group opens it; a search, a filter or a topic shows everything */
let libOpen = new Set();
const FOLD_MQ = matchMedia('(max-width:760px)');
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
  const fold = FOLD_MQ.matches && libF === 'all' && libCat === 'all' && !q && shown.length > 1;
  if (shown.length) h = (fold ? `<div class="lib-fold"><span>${ids.length} pathways in ${shown.length} groups. Tap a group to open it.</span><button type="button" class="sm" data-lsec="*">${shown.every(([c]) => libOpen.has(c.k)) ? 'Close all' : 'Open all'}</button></div>` : '')
    + shown.map(([c, l]) => { const open = !fold || libOpen.has(c.k);
      return `<section class="libsec ${c.j}${fold ? ' fold' : ''}" aria-label="${esc(c.t)}"><h2 class="lh">${tileMedia(c.k)}${fold ? `<button type="button" class="lh-b" data-lsec="${c.k}" aria-expanded="${open}">` : ''}${svg(c.ic)}<span>${esc(c.t)}</span><small>${l.length}</small>${fold ? svg('chev', 'lh-c') + '</button>' : ''}</h2>${open ? `<div class="grid">${l.map(pcard).join('')}</div>` : ''}</section>`; }).join('');
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
let refSide = store.get('gz-refside', 'off') === 'on'; /* 18 Nov 2026: the reference tabs beside the step on wide screens */

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
/* Copy route (12 Nov 2026): the questions answered on this visit, each with the answer chosen, then the outcome and its source,
   as plain text for the clerking notes. Only steps walked here are copied; a link that opened part-way through says so.
   Nothing is stored (standing rule 4). */
function routeText(p, n){
  const walked = state.trail.filter(t => !t.auto), skipped = walked.length < state.trail.length;
  const src = p.page ? `Source: The Clinical Pathway in Emergency for Medical Officer, ETD HKL (2025), page${String(p.page).includes('–') ? 's' : ''} ${p.page}` : p.src ? 'Source: ' + p.src : '';
  return [p.title + ': route through the pathway', ...(skipped ? ['(Opened part-way through by a link: the earlier steps are not listed.)'] : []),
    ...walked.map((t, i) => `${i + 1}. ${nodeText(p.nodes[t.node])} ${t.label === 'Done' ? '(done)' : 'Answer: ' + t.label}`),
    'Outcome: ' + n.title, ...(n.items || []).map(i => '- ' + i), ...(src ? [src] : []), 'Green Zone MO Guide, ' + APP_VER].join('\n');
}
function showPath(id, node){
  if (state.id !== id) ptabSel = null;
  state = {id, trail:[], cur:P[id].start};
  /* A link to a step fills in one way of reaching it; those answers are marked auto, so Copy route never copies an answer nobody gave */
  if (node && node !== state.cur){ const t = pathTo(id, node); if (t){ state.trail = t.map(x => ({...x, auto:true})); state.cur = node; } }
  remember(id); renderMine();
  showView('run');
  land = false;
  draw(false);
  $('#v-run').setAttribute('aria-label', P[id].title);
  setTopTitle(P[id].title);
  markNav();
  if (routed) $('#run-title').focus({preventScroll:true});
}
function go(label, to){ state.trail.push({node:state.cur, label}); state.cur = to; land = true; buzz(P[state.id].nodes[to] && P[state.id].nodes[to].end ? 'land' : 'tick'); draw(true); }
function backTo(i){ state.cur = state.trail[i].node; state.trail = state.trail.slice(0, i); land = false; draw(true); }
function restart(){ state.trail = []; state.cur = P[state.id].start; land = false; draw(true); }

/* How the entry can still end from here, in the ebook's outcome colours */
function endsHTML(p, n){
  const kinds = n.end ? [n.end] : endsFrom(p, state.cur);
  return `<div class="ends"><span>${n.end ? 'Ended in' : 'Can still end in'}</span>${kinds.map(k => `<span class="end" style="--oc:var(--b-${k})">${outLbl(p, k)}</span>`).join('')}</div>`;
}
function draw(focus){
  sayStop(); /* a new step stops the reading of the last */
  const p = P[state.id], n = p.nodes[state.cur], c = catOf(state.id), saved = isSaved(state.id), steps = state.trail.length;
  const isRule = p.grp === 'rules', sh = '#' + state.id + '--' + state.cur;
  const nowText = n.end ? kindLabel(p, n.end) + ': ' + n.title : nodeText(n);
  const total = n.end ? Math.max(steps, 1) : steps + Math.max(stepsLeft(p, state.cur), 1);
  const bar = Array.from({length:total}, (_, i) => `<i class="${n.end ? 'fin' : i <= steps ? 'on' : ''}"></i>`).join('');
  const count = Object.keys(p.nodes).length;
  const about = (p.lead ? `<p class="lead">${esc(p.lead)}</p>` : '') + (p.doc ? `<div class="see"><span>Source</span><a class="pill ext" href="${p.doc.href}" target="_blank" rel="noopener noreferrer">${esc(p.doc.t)}${svg('ext')}</a></div>` : '') + (p.see ? `<div class="see"><span>See also</span>${p.see.map(([href, t]) => `<a class="pill" href="${href}">${esc(t)}</a>`).join('')}</div>` : '');
  const rtabs = refTabs(p); /* the reference tabs, below the step or beside it */
  /* Every entry opens on a jewel banner: a guideline's own picture (hero), or its topic group's glass loop (a topic banner) */
  const hk = p.hero || (c && c.k && TILE_KEYS.has(c.k) ? c.k : '');
  const head = `<div class="run-cat"><span class="chip j ${c.j}">${svg(c.ic)}${esc(c.s)}</span><span class="chip${p.page ? ' mono' : ''}">${esc(metaOf(p))}</span>${badgeOf(p)}</div>
      <h1 id="run-title" tabindex="-1"${p.title.length > 26 ? ' class="long"' : ''}>${esc(p.title)}</h1>`;
  withTiles($('#run'), `<div class="run-h">
      <div class="run-top"><a class="back" href="${isRule ? '#rules' : '#pathways'}">${svg(isRule ? 'rule' : 'path')}<span class="bl-l">${isRule ? 'Rules and protocols' : 'All pathways'}</span><span class="bl-s">${isRule ? 'Rules' : 'Pathways'}</span></a>
        <div class="run-acts">
          <button type="button" class="ib" data-save aria-pressed="${saved}" aria-label="${saved ? 'Saved. Tap to remove from your list' : 'Save to your list'}" title="${saved ? 'Saved' : 'Save'}">${svg('star', '', saved)}</button>
          ${pinBtnHTML(sh, 'ib', false)}
          <button type="button" class="ib" data-map aria-label="See the whole pathway" title="Whole pathway">${svg('map')}</button>
          <button type="button" class="ib" data-link aria-label="Copy a link to this step" title="Copy link">${svg('link')}</button>
          <button type="button" class="ib" data-restart aria-label="Start again" title="Start again"${steps ? '' : ' disabled'}>${svg('restart')}</button>
        </div></div>
      ${hk ? `<div class="tile ${p.heroj || c.j} run-hero${p.hero ? '' : ' topic'}">${tileMedia(hk)}${head}</div>` : head}
      ${about ? `<div class="about-t">${about}</div>` : ''}
      ${CHG.has(p) ? `<p class="chg-n">${svg('spark')}<span>Changed since you last opened the guide: <b>${esc(CHG.get(p))}</b></span><a href="#new">What's new</a></p>` : ''}
    </div>
    <div class="run-grid${refSide && rtabs ? ' ref-side' : ''}">
      <aside class="rail-p" aria-label="Your route so far">
        <div class="rail-h"><h2>Your route</h2><span>${n.end ? 'Outcome' : 'Step ' + (steps + 1)}</span></div>${rtabs ? `<button type="button" class="refsw" data-refside="on">${svg('grid')}<span>Reference beside the step</span></button>` : ''}
        <ol class="rp">${state.trail.map((t, i) => `<li class="done${i === 0 ? ' start' : ''}"><button type="button" data-back="${i}"><span class="q">${esc(nodeText(p.nodes[t.node]))}</span><span class="a"><span class="vh">You answered: </span>${esc(t.label)}</span></button></li>`).join('')}<li class="now${steps ? '' : ' start'}${n.end ? ' end-k' : ''}" aria-current="step"${n.end ? ` style="--oc:var(--b-${n.end})"` : ''}><span class="q">${esc(nowText)}</span></li></ol>
        ${endsHTML(p, n)}
        <button type="button" class="mapbtn" data-map><span>${svg('map')}Whole pathway</span><small>${count} steps</small></button>
        <p class="calc-note">Tap an earlier answer to change it. Keyboard: 1 to 9 to answer, Backspace to step back.</p>
      </aside>
      <div class="run-main">
        <div class="strip">${steps ? `<div class="trailw"><span class="tlbl" aria-hidden="true">Route</span><div class="trailx" role="group" aria-label="Your answers so far">${state.trail.map((t, i) => `${i ? '<i aria-hidden="true"></i>' : ''}<button type="button" data-back="${i}" title="${esc(nodeText(p.nodes[t.node]))}"><span><span class="vh">${esc(nodeText(p.nodes[t.node]))}: you answered </span>${esc(t.label)}<span class="vh">. Tap to change it.</span></span></button>`).join('')}</div></div>` : ''}${endsHTML(p, n)}</div>
        <div class="progress" aria-hidden="true"${n.end ? ` style="--oc:var(--b-${n.end})"` : ''}><span>${n.end ? `Outcome after ${steps} step${steps === 1 ? '' : 's'}` : 'Step ' + (steps + 1)}</span>${bar}</div>
        ${nowChips(state.id, state.cur)}<div id="cur" tabindex="-1" class="cur-in">${card(n, p)}</div>
        ${remBtns(state.id, state.cur)}
        <div class="thumbbar" role="group" aria-label="This step">
          <button type="button" data-save aria-pressed="${saved}" aria-label="${saved ? 'Saved. Tap to remove from your list' : 'Save to your list'}">${svg('star', '', saved)}<span>${saved ? 'Saved' : 'Save'}</span></button>
          ${pinBtnHTML(sh, '', true)}
          <button type="button" data-map aria-label="See the whole pathway">${svg('map')}<span>Map</span></button>
          <button type="button" data-link aria-label="Copy a link to this step">${svg('link')}<span>Link</span></button>
          <button type="button" data-restart aria-label="Start again"${steps ? '' : ' disabled'}>${svg('restart')}<span>Again</span></button>
        </div>
        <div class="flagrow">${sayBtn('cur', 'Read aloud')}<button type="button" class="flagb" data-flag>${svg('flag')}<span>Something wrong on this step?</span></button></div>
        ${n.check && !n.end ? '<button type="button" class="ansbar" id="ansbar" hidden></button>' : ''}
        ${about ? `<details class="about about-m"><summary>About this pathway</summary><div>${about}</div></details>` : ''}
      </div>
      ${rtabs ? `<div class="refcol"><button type="button" class="refsw" data-refside="off">${svg('route')}<span>Show your route</span></button>${rtabs}</div>` : ''}
    </div>`);
  if (ansIO){ ansIO.disconnect(); ansIO = null; }
  if (n.check) wireChecks(n);
  /* The route trail opens on its newest answer, with soft edges where it runs on */
  const tx = $('#run .trailx'); if (tx){ tx.scrollLeft = tx.scrollWidth; edgeFade(tx); }
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
  /* The outcome's items are boxes for the MO to tick as each is done: on screen only, nothing is kept */
  /* each step's heading has its own id: a comment placed on it stays with that step */
  const sq = 'sq-' + state.id + '--' + state.cur;
  const tickList = items => items && items.length ? '<ul class="ticks">' + items.map(i => `<li><label><input type="checkbox"><span>${esc(i)}</span></label></li>`).join('') + '</ul>' : '';
  if (n.end){
    const ic = n.end === 'neutral' && p.grp === 'rules' ? 'rule' : OUT_IC[n.end], adv = (p.advice || p.leaflet) && n.end === 'discharge';
    return `<article class="res ${n.end}${land ? ' land' : ''}"><div class="res-h"><span class="ic">${svg(ic)}</span><div><h2 id="${sq}">${esc(n.title)}</h2><div class="res-k">${kindLabel(p, n.end)}</div>${metaOf(p) ? `<div class="res-s">${esc(metaOf(p))}</div>` : ''}</div></div>
      ${(n.items && n.items.length) || n.links || n.gap ? `<div class="res-b">${n.figOnly ? '' : tickList(n.items)}
        ${n.fig ? figHTML(n.fig) : ''}${n.links ? `<div class="links">${n.links.map(([href, t]) => /^https:/.test(href) ? `<a class="pill ext" href="${href}" target="_blank" rel="noopener noreferrer">${esc(t)}${svg('ext')}</a>` : `<a class="pill" href="${href}">${esc(t)}${svg('chev')}</a>`).join('')}</div>` : ''}
        ${n.gap ? `<div class="gap">${svg('info')}<span>${esc(n.gap)}</span></div>` : ''}</div>` : ''}
      <div class="res-f">${state.trail.some(t => !t.auto) ? `<button type="button" data-copyroute>${svg('route')}<span class="bl">Copy route</span></button>` : ''}<button type="button" data-copyout>${svg('copy')}<span class="bl">Copy outcome</span></button>${adv ? ptqBtn(state.id, '') : ''}<button type="button" class="res-again" data-restart>${svg('restart')}Start again</button>${adv ? `<button type="button" class="primary" data-showadvice>${p.leaflet ? 'Home care advice' : 'Discharge advice'}</button>` : ''}</div></article>`;
  }
  if (n.step){
    const obs = n.kind === 'observe';
    return `<div class="stack"><div class="qc step${obs ? ' obs' : ''}"><div class="qh"><span class="ic">${svg(obs ? 'clock' : 'todo')}</span><h2 id="${sq}"><span class="vh">${obs ? 'Observation: ' : 'Do this: '}</span>${esc(n.step)}</h2></div>${obs ? '<p class="hint">Observation</p>' : ''}${n.fig && !memoFig(n) ? figHTML(n.fig) : ''}${list(n.items)}${memoFig(n) ? figHTML(n.fig) : ''}
      <div class="opts"><button type="button" class="opt sugg" data-next><kbd>1</kbd><span>Done, continue</span>${svg('chev', 'gt')}</button></div></div></div>`;
  }
  const sc = n.check === 'score';
  const pts = v => v > 0 ? '+' + v : '−' + Math.abs(v);
  const checks = n.check ? `<p class="hint">${sc ? 'Tick each item that applies. The score adds up as you go.' : n.check === 'all' ? 'Tick each criterion that is met. All must be met.' : 'Tick any that are present.'}</p><ul class="checks">` +
    n.items.map((i, k) => `<li><label><input type="checkbox" id="c${k}"><span>${sc ? esc(i[0]) + ` <b class="pts">(${pts(i[1])})</b>` : esc(i)}</span></label></li>`).join('') + '</ul>' + (sc ? '<p class="score">Score <b id="scv">0</b></p>' : '') : '';
  const info = n.info ? '<ul class="info">' + n.info.map(i => `<li>${esc(i)}</li>`).join('') + '</ul>' : '';
  return `<div class="stack"><div class="qc"><h2 id="${sq}">${esc(n.q)}</h2>
    ${n.hint ? `<p class="hint">${esc(n.hint)}</p>` : ''}${n.fig && !memoFig(n) ? figHTML(n.fig) : ''}${info}${checks}
    <div class="opts">${n.opts.map(([l], k) => `<button type="button" class="opt" data-go="${k}">${k < 9 ? `<kbd>${k + 1}</kbd>` : ''}<span>${esc(l)}</span>${svg('chev', 'gt')}</button>`).join('')}</div>${memoFig(n) ? figHTML(n.fig) : ''}</div></div>`;
}
/* The suggested answer in thumb reach (13 Nov 2026): when the answer keys sit under the tab bar, a bar just above it carries the
   key your ticks point to, and a tap answers with it. It hides whenever that key is itself on screen. */
let ansIO = null;
function wireChecks(n){
  const boxes = $$('#cur .checks input'), btns = $$('#cur button.opt'), bar = $('#ansbar'), seen = new Set();
  let k = null;
  const showBar = () => {
    if (!bar) return;
    const on = k !== null && !!btns[k] && !seen.has(btns[k]);
    if (on && bar.dataset.go !== String(k)){
      const l = n.opts[k][0];
      bar.dataset.go = k;
      bar.innerHTML = `${k < 9 ? `<kbd>${k + 1}</kbd>` : ''}<span class="ab-t"><small>From what you ticked</small><b>${esc(l)}</b></span>${svg('chev', 'gt')}`;
      bar.setAttribute('aria-label', 'Answer: ' + l + ', suggested from what you ticked');
    }
    bar.hidden = !on;
  };
  const upd = () => {
    const c = boxes.filter(b => b.checked).length;
    k = null;
    if (n.check === 'score'){ const sum = boxes.reduce((a, b, i) => a + (b.checked ? n.items[i][1] : 0), 0); $('#scv').textContent = sum; k = n.suggest(sum); }
    else if (n.check === 'all') k = c === boxes.length ? 0 : (c > 0 ? 1 : null);
    else k = c > 0 ? 0 : null;
    btns.forEach((b, i) => b.classList.toggle('sugg', i === k));
    showBar();
  };
  boxes.forEach(b => b.addEventListener('change', upd));
  if (bar && 'IntersectionObserver' in window){
    ansIO = new IntersectionObserver(es => { es.forEach(en => en.intersectionRatio >= .6 ? seen.add(en.target) : seen.delete(en.target)); showBar(); },
      {rootMargin:`-76px 0px -${innerWidth <= 760 ? 112 : 24}px 0px`, threshold:[0, .6, 1]});
    btns.forEach(b => ansIO.observe(b));
  }
}
/* Rows that scroll sideways (the route trail, the list filters) show a soft edge where they run on */
function edgeFade(el){
  if (!el) return;
  const max = el.scrollWidth - el.clientWidth;
  el.classList.toggle('ef-l', max > 4 && el.scrollLeft > 4);
  el.classList.toggle('ef-r', max > 4 && el.scrollLeft < max - 4);
}
const FADE_ROWS = '.trailx, #libf, #rxf, #lkf, #dgf, #extf, .pins-x';
const fadeRows = () => $$(FADE_ROWS).forEach(el => { if (el.offsetParent !== null) edgeFade(el); });
document.addEventListener('scroll', e => { const t = e.target; if (t && t.matches && t.matches(FADE_ROWS)) edgeFade(t); }, {capture:true, passive:true});
addEventListener('resize', () => requestAnimationFrame(fadeRows));

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
  if (p.advice) T.push({k:'advice', l:'Discharge advice', cls:'t-advice', html:(READ_ADV[state.id] ? listenBar(READ_ADV[state.id], 'Listen to this advice') : '') + `<ol id="advlist">${p.advice.map(li).join('')}</ol><div class="pbar"><button type="button" class="sm" data-copyadvice>${svg('copy')}<span class="bl">Copy advice</span></button>${ptqBtn(state.id)}</div>`});
  if (p.concerns) T.push({k:'concerns', l:'Practical concerns', cls:'t-concern', html:`<ul>${p.concerns.map(li).join('')}</ul><p class="hint">Consider admission if any are present.</p>`});
  const note = d => `<div class="deptnote"${d.lang ? ` lang="${d.lang}"` : ''}><h3>${esc(d.h)}</h3><p class="src">${esc(d.src)}</p>${d.fig ? figHTML(d.fig) : ''}${d.items ? `<ul>${d.items.map(li).join('')}</ul>` : ''}${d.table ? table(d.table) : ''}${d.refs ? `<ol class="srcl">${d.refs.map(r => `<li>${esc(r[0])} ${r[1][0] === '#' ? `<a href="${r[1]}">Open in this guide</a>` : `<a href="${r[1]}" target="_blank" rel="noopener noreferrer">Open source${svg('ext')}</a>`}</li>`).join('')}</ol>` : ''}</div>`;
  if (p.leaflet) T.push({k:'leaflet', l:'Home care advice', cls:'t-advice', html:leafletHTML(p)});
  if (p.dept) T.push({k:'dept', l:'Department notes', cls:'t-dept', html:p.dept.map(note).join('') + '<p class="hint">Not in the ebook: supplementary notes from department documents, with their sources.</p>'});
  /* A national guideline's reference notes, several tabs of them, each note with its page */
  (p.notes || []).forEach((t, i) => T.push({k:'n' + i, l:t.l, cls:'t-cpg', html:t.notes.map(note).join('') + (t.foot ? `<p class="hint">${esc(t.foot)}</p>` : p.notesFoot ? `<p class="hint">${esc(p.notesFoot)}</p>` : p.own ? `<p class="hint">From the ${esc(p.src)}, with its page numbers, in the guide's own words: the CPG gives no permission to reproduce it, so nothing here is quoted.</p>` : `<p class="hint">From the ${esc(p.src)}, with its page numbers. Reproduced with acknowledgement to ${esc(p.ack || 'MaHTAS')}.</p>`)}));
  if (p.script) T.push({k:'script', l:'Malay script', cls:'t-advice', html:`<h3 class="tab-h">${esc(p.script.h)}</h3>` + (READ[p.script.read] ? listenBar(p.script.read, 'Dengar skrip ini') : '') + `<ol id="advlist" lang="ms">${p.script.lines.map(li).join('')}</ol><div class="pbar"><button type="button" class="sm" data-copyscript>${svg('copy')}<span class="bl">Copy script</span></button></div><p class="hint">${esc(p.script.note)}</p>`});
  (p.tables || []).forEach((t, i) => T.push({k:'t' + i, l:t.title, html:table(t)}));
  if (p.pages) T.push({k:'pages', l:'Printed pages', html:`<p class="hint">The ${esc(p.pages.name.toLowerCase())}'s own pages, as printed. A page loads when you tap it; tap the page to zoom.</p><div class="epg">${p.pages.list.map(([f, t]) => `<button type="button" class="pill" data-ppage="${p.pages.dir}/${f}" data-pname="${esc(p.pages.name + ' · ' + t)}">${svg('poster')}${esc(t)}</button>`).join('')}${p.pages.pdf.map(([h, t]) => `<a class="pill" href="${h}" target="_blank" rel="noopener">${esc(t)}${svg('ext')}</a>`).join('')}</div>`});
  const epg = ebookPages(p);
  if (epg.length) T.push({k:'pages', l:'Printed pages', html:`<p class="hint">The ebook's own ${epg.length === 1 ? 'page' : 'pages'} for this pathway, as printed. A page loads when you tap it; tap the page to zoom.</p><div class="epg">${epg.map(n => `<button type="button" class="pill" data-epage="${n}">${svg('poster')}Page ${n}</button>`).join('')}<a class="pill" href="${EBOOK_PDF}" target="_blank" rel="noopener">Full ebook (PDF)${svg('ext')}</a></div>`});
  /* A national CPG on the shelf opens its full PDF from its References tab */
  const pdf = p.grp === 'cpg' && CPG_SHELF.find(c => c.id && P[c.id] === p);
  if (p.refs) T.push({k:'refs', l:'References', html:(p.docs ? `<div class="cx-links cpg-pdf">${p.docs.map(([h, t]) => `<a class="pill ext" href="${h}" target="_blank" rel="noopener noreferrer">${esc(t)}${svg('ext')}</a>`).join('')}</div>` : '') + (p.doc ? `<div class="cx-links cpg-pdf"><a class="pill ext" href="${p.doc.href}" target="_blank" rel="noopener noreferrer">${esc(p.doc.t)}${svg('ext')}</a></div>` : '') + (pdf ? `<div class="cx-links cpg-pdf">${pdf.drive ? `<a class="pill ext" href="${GDRIVE + pdf.drive}/view" target="_blank" rel="noopener noreferrer">The full CPG, PDF in Google Drive${svg('ext')}</a>` : ''}<a class="pill ext" href="${ACAD + pdf.cpg}" target="_blank" rel="noopener noreferrer">Academy of Medicine${svg('ext')}</a>${pdf.qr ? `<a class="pill ext" href="${pdf.qrd ? GDRIVE + pdf.qrd + '/view' : ACAD + pdf.qr}" target="_blank" rel="noopener noreferrer">Quick reference${svg('ext')}</a>` : ''}</div>` : '') + `<ol class="refs">${p.refs.map(li).join('')}</ol>`});
  return T;
}
function refTabs(p){
  const T = tabsOf(p); if (!T.length) return '';
  if (!T.some(t => t.k === ptabSel)) ptabSel = T[0].k;
  return `<section class="ptab" id="ptab" aria-label="Reference for this pathway"><div class="ptab-bar" role="tablist" aria-label="Reference">${T.map(t => `<button type="button" role="tab" id="tb-${t.k}" aria-controls="tp-${t.k}" aria-selected="${t.k === ptabSel}" tabindex="${t.k === ptabSel ? 0 : -1}" class="${t.cls || ''}" data-pt="${t.k}"><span>${esc(t.l)}</span></button>`).join('')}</div>` +
    (TTS ? `<div class="ptab-say">${sayBtn('tab', 'Read this tab aloud')}</div>` : '') + T.map(t => `<div class="ptab-p" role="tabpanel" id="tp-${t.k}" aria-labelledby="tb-${t.k}" tabindex="0"${t.k === ptabSel ? '' : ' hidden'}>${t.html}</div>`).join('') + '</section>';
}
function selectTab(k, focus){
  if (sayOn && sayOn.dataset.say === 'tab') sayStop();
  ptabSel = k;
  $$('#ptab [role="tab"]').forEach(b => { const on = b.dataset.pt === k; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  $$('#ptab [role="tabpanel"]').forEach(x => { x.hidden = x.id !== 'tp-' + k; });
}
/* Read-aloud (9 Nov 2026): VoiceStudio narrations of the patient advice, word for word, recorded one line at a time
   (narration/README.md) and played from app/audio/ (mono MP3). dur, marks (the start of each section, in seconds) and lines
   (the start of each line, as [seconds, section, element]) are written by narration/scripts/fill-read.cjs. */
const READ = {
  /* The abdominal pain handbook's Malay discharge script (p. 23): Malay Kore over a quiet Flow Music bed; line 5 of the screen (the review date and place) is left for the MO to fill in, so it is not read. Times are the word starts. */
  'abdo-script-ms':{src:'audio/abdo-script-ms.mp3', dur:38.1, marks:[0],
    lines:[[1.98,0,0],[5.82,0,1],[20.8,0,2],[26.03,0,3],[30.77,0,5]]},
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
/* The listen bar on screen: the patient page can carry the same narration as a hidden pathway tab */
const lsnBox = k => $$(`.lsn[data-read="${k}"]`).find(b => b.offsetParent !== null) || $(`.lsn[data-read="${k}"]`);
function readerUI(){
  const box = lsnBox(readKey); if (!box) return;
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
  if (!leaf){ const tab = box.closest('[role="tabpanel"], .pt-adv'); return tab ? tab.querySelectorAll('#advlist > li, .pt-list > li')[e] || null : null; }
  if (s === 0) return leaf.querySelector('.leaf-t');
  const g = leaf.querySelectorAll('.leaf-g')[s - 1];
  return g ? g.querySelectorAll(':scope > h5, :scope > p, :scope > ul > li')[e] || null : null;
}
let readScrolled = 0;
['wheel', 'touchmove', 'keydown'].forEach(ev => addEventListener(ev, e => { if (ev !== 'keydown' || /^(Page|Arrow(Up|Down)|Home|End)/.test(e.key)) readScrolled = Date.now(); }, {passive:true}));
/* ================= Read aloud with the phone's own voices (13 Nov 2026) =================
   Krishna: "perform all these upgrades", the first being to read any page aloud. The step or outcome on screen, or the open
   reference tab, is read by the phone's own text-to-speech voice (speechSynthesis), in English, or in Malay where the text is
   Malay (a leaflet's Bahasa Melayu side): nothing downloads. It reads the guide's own words as they stand, never anything
   else (rule 8), and nothing typed is involved (rule 4). Only on a tap; navigating away, answering or playing a recording
   stops it. A phone with no Malay voice says so rather than reading Malay in an English voice. The recorded narrations (READ)
   stay where they exist. */
const TTS = window.speechSynthesis && window.SpeechSynthesisUtterance ? window.speechSynthesis : null;
const SAY_BLOCK = 'h1,h2,h3,h4,h5,p,li,dt,dd,th,td,figcaption,blockquote,.res-k,.res-s,label > span';
const SAY_SKIP = 'button,kbd,svg,.vh,.flagrow,.res-f,.pbar,.lsn,.lfilm,.ptab-bar,.ptab-say,.leaf-lang,[aria-hidden="true"]';
let sayOn = null;
function sayLines(el){
  const all = [...el.querySelectorAll(SAY_BLOCK)].filter(x => !x.closest(SAY_SKIP) && x.offsetParent !== null), set = new Set(all);
  const lines = all.filter(x => ![...x.querySelectorAll(SAY_BLOCK)].some(y => set.has(y))).map(x => x.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const opts = [...el.querySelectorAll('button.opt > span')].map(s => s.textContent.trim()).filter(Boolean);
  if (opts.length > 1) lines.push('Answers: ' + opts.join('; '));
  return lines;
}
/* Chrome on Android cuts off a long utterance, so the text goes in pieces of about 200 characters, sentence by sentence */
function sayChunks(lines){
  const out = []; let cur = '';
  for (const l of lines){ const s = /[.!?:;]$/.test(l) ? l : l + '.'; if (cur && (cur + ' ' + s).length > 200){ out.push(cur); cur = s; } else cur = cur ? cur + ' ' + s : s; }
  if (cur) out.push(cur);
  return out;
}
function sayVoice(lg){
  const vs = TTS.getVoices() || [], ok = v => new RegExp('^' + lg + '([-_]|$)', 'i').test(v.lang), pool = vs.filter(ok);
  const gb = v => lg !== 'en' || /^en[-_]GB/i.test(v.lang);
  return pool.find(v => v.localService && gb(v)) || pool.find(gb) || pool.find(v => v.localService) || pool[0] || null;
}
function sayUI(b, on){ if (!b) return; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); const l = b.querySelector('span'); if (l) l.textContent = on ? 'Stop reading' : b.dataset.label; }
function sayStop(){ if (TTS && (sayOn || TTS.speaking)) TTS.cancel(); const b = sayOn; sayOn = null; sayUI(b, false); }
function sayEl(el, b){
  if (!TTS || !el) return;
  if (sayOn === b){ sayStop(); return; }
  sayStop(); stopReader(); pauseFilms();
  const lg = /^ms/i.test(([...el.querySelectorAll('[lang]')].find(x => !x.closest('.fig')) || el.closest('[lang]') || {getAttribute:() => 'en'}).getAttribute('lang') || '') ? 'ms' : 'en';
  const voices = TTS.getVoices() || [], v = sayVoice(lg);
  if (lg === 'ms' && voices.length && !v){ toast('This phone has no Malay voice. Add one in its text-to-speech settings.'); return; }
  const parts = sayChunks(sayLines(el)); if (!parts.length) return;
  sayOn = b; sayUI(b, true);
  parts.forEach((t, i) => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = lg === 'ms' ? 'ms-MY' : 'en-GB'; if (v) u.voice = v; u.rate = .95;
    if (i === parts.length - 1) u.onend = u.onerror = () => { if (sayOn === b){ sayOn = null; sayUI(b, false); } };
    TTS.speak(u);
  });
}
const sayBtn = (k, label) => TTS ? `<button type="button" class="flagb sayb" data-say="${k}" data-label="${label}" aria-pressed="false">${svg('volume')}<span>${label}</span></button>` : '';
function stopReader(){
  if (!readKey) return;
  reader.pause();
  const box = lsnBox(readKey);
  if (box){ box.classList.remove('on'); const b = box.querySelector('.lsn-b'); b.innerHTML = svg('play'); b.setAttribute('aria-pressed', 'false'); }
  document.querySelectorAll('.reading, .lsn-ch button.on, .rl-on').forEach(el => el.classList.remove('reading', 'on', 'rl-on'));
}
function playReader(key, at){
  sayStop();
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
    <p class="src">${esc(L.src)}</p></div><div class="pbar"><button type="button" class="sm" data-copyleaf>${svg('copy')}<span class="bl">Copy advice</span></button>${ptqBtn(state.id)}</div>`;
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
  $('#dcheck').addEventListener('change', e => {
    const was = $('#verdict').className; upd();
    if (e.target.dataset.dc && e.target.dataset.dc[0] === 's' && e.target.checked) buzz('stop');
    else if ($('#verdict').className !== was && $('#verdict').classList.contains('ok')) buzz('land');
  });
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
  {k:'scores', t:'Scores', j:'t-sapphire', ic:'scale', d:'CURB-65, Wells, McIsaac and the asthma action plan zones; ABCD2, the Ottawa SAH rule, Alvarado, qSOFA, NEWS2, MEWS and CIWA-Ar'},
  {k:'cardio', t:'Heart', j:'t-teal', ic:'heart', d:'Chest pain (Obsess, TIMI, HEART), PE (Wells, PERC, age-adjusted D-dimer), syncope, SVT, blood pressure and AF (CHA2DS2-VASc, HAS-BLED)'},
  {k:'calm', t:'Pain and calm', j:'t-plum', ic:'feather', d:'Pain scales, BARS and RASS, and the cancer pain rescue dose'},
  {k:'head', t:'Injuries', j:'t-garnet', ic:'brain', d:'Head injury criteria, the GCS and the Canadian CT Head Rule; the neck (Canadian C-spine, NEXUS); the Ottawa ankle, foot and knee rules; burns'},
  {k:'tox', t:'Poisoning and allergy', j:'t-obsidian', ic:'flask', d:'Paracetamol overdose and anaphylaxis'},
  {k:'kids', t:'Kids', j:'t-champagne', ic:'kid', d:'Child doses, the dehydration check, weight from age, and heart and breathing rates by age'}
];
const CALC_G = Object.fromEntries(CALC_GROUPS.map(g => [g.k, g]));
/* Appendix 3 rows kept in the CKD CPG entry's Doses tab: name, usual dose, the three GFR columns and the note */
const ckdRows = () => P['ckd-cpg'].notes.find(t => t.l === 'Doses').notes.filter(n => n.table).flatMap(n => n.table.rows.map(r => ({grp:n.h, name:r[0] + (r[0] === 'Acyclovir' ? ' (' + (/zoster/.test(r[1]) ? 'herpes zoster' : 'herpes simplex') + ')' : ''), dose:r[1], mild:r[2], mod:r[3], sev:r[4], note:r[5] || ''})));
/* Outside tools, as links only: nothing from either site is copied into the guide.
   PEMCalc (pemcalc.com, Dr Kiran Nesarajah): children's tools our sources do not cover (PRAM needs its author's permission;
   PECARN waits for its paper; its vital signs page for blood pressure and SpO2 by age, which Fleming 2011, the source of the
   guide's own children's heart and breathing rates, does not give).
   MDCalc (mdcalc.com): the QTc only. Since 16 Nov 2026 the other scores are built in from their own sources (data24.js,
   CALC-RESEARCH.md): MDCalc's terms forbid copying its tools or text, even with credit.
   The MDCalc links come from its own sitemap and were checked to open, 9 Nov 2026. */
const PEM = 'https://pemcalc.com/', MDC = 'https://www.mdcalc.com/calc/';
const CALC_LINKS = [
  {g:'kids', site:'PEMCalc', href:PEM + 'asthma.html', t:'PRAM asthma score', d:'Severity score for a child with acute asthma, with doses by severity.'},
  {g:'kids', site:'PEMCalc', href:PEM + 'croup.html', t:'Westley croup score', d:'Croup severity from five signs.'},
  {g:'kids', site:'PEMCalc', href:PEM + 'vitalsigns.html', t:'Blood pressure and SpO2 by age', d:'Blood pressure and SpO2 ranges for each age group, which the guide\'s source for children\'s heart and breathing rates (Fleming 2011) does not give.'},
  {g:'head', site:'PEMCalc', href:PEM + 'pecarn.html', t:'PECARN head injury rules', d:'Which children with a head injury can safely go without a CT.'},
  {g:'head', site:'PEMCalc', href:PEM + 'pgcs.html', t:'Paediatric GCS', d:'The GCS with descriptors for infants and young children.'},
  {g:'cardio', site:'MDCalc', href:MDC + '48/corrected-qt-interval-qtc', t:'Corrected QT interval (QTc)', d:'The QT interval corrected for the heart rate.'}
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
    note:'CPG Management of Dengue in Adults, 4th edition (MaHTAS, 2026). Appendix 7 (p108) triages in order: life-threatening features, then unstable vital signs, then warning signs, unstable co-morbids or high risk, then co-morbids or social risk. This guide asks pregnancy, age 65 and over, and obesity with the co-morbids (Group B1, MTS level 4, Green), as the Quick Reference prints them on p5 (the guide owner\'s decision, 12 Nov 2026). The first one present sets the zone, MTS level and group (Table 8, p35), so tick None of these for each list once you have checked it: a lower level shows only when every earlier step is done. The vital signs use the triage vital signs calculator\'s rules. A rising haematocrit is measured from the patient\'s own baseline (≥20%, p17); the median values are for reference only, and the CPG does not use them as a baseline. Nothing you tick or type is saved.',
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
    note:'From the ebook\'s dengue table: for an obese patient (BMI over 27.5) use the adjusted body weight. Ideal weight: female 45.5 kg, male 50 kg, plus 0.91 × (height − 152 cm). Adjusted = ideal + 0.4 × (actual − ideal). For women the ebook prints 0.98 where the dengue CPG, 4th edition, prints 0.91 (ebook p31; the fluid notes of the CPG entry): this calculator follows the CPG and uses 0.91 for both (the guide owner, 12 Nov 2026).',
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
        : {cls:'ok', h:'No unstable vital signs', p:'Go on to the next triage question: warning signs or unstable co-morbids.', href:'#dengue-cpg--ws', link:'Next triage question'};
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
        links:[['#calc-timi', 'TIMI risk score calculator (ACS CPG 2026, Appendix IV)'], ['#acs-cpg--timi', 'TIMI score in the ACS CPG']]};
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
  paraod:{t:'Paracetamol overdose: time since ingestion', g:'tox', src:'Ebook p52', path:'#paracetamol-overdose', kw:'paracetamol acetaminophen panadol overdose poisoning nac n-acetylcysteine charcoal nomogram',
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
  nac:{t:'IV N-acetylcysteine: the hospital\'s regimen', g:'tox', src:'HKL NAC circular, Jan 2022', path:'#paracetamol-overdose', kw:'nac n-acetylcysteine acetylcysteine hidonac paracetamol overdose regimen regime infusion dose bag rate',
    sub:'The hospital\'s paracetamol overdose regime (Lampiran 1a), worked out by weight: mg, ml of the 5000mg/25ml vial, the bag and the rate.',
    fields:[['wt','Actual body weight','kg'], {k:'fr', type:'seg', label:'Fluid restriction?', opts:[['n','No'], ['y','Yes']]}],
    note:'From the Director\'s circular of 10 Jan 2022 and its Lampiran 1a (Pharmacy Department HKL, forms updated 12.12.2021), on the paracetamol overdose entry: the dose on the actual body weight to a ceiling of 110kg; fluid restriction OR a weight under 40kg takes the two-bag regime; every bag in D5% (sodium chloride 0.9% if dextrose 5% is not suitable). When to start and stop follows the ebook\'s pathway, which gives no doses.',
    run(v){
      if (!v.wt) return null;
      const bad = badWt(v.wt); if (bad) return bad;
      const w = Math.min(v.wt, 110), two = v.fr === 'y' || v.wt < 40;
      const S = two ? [[200, 250, 4, '62.5'], [100, 500, 16, '31.25']] : [[200, 500, 4, '125'], [50, 500, 8, '62.5'], [50, 500, 8, '62.5']];
      const outs = S.map(([d, bag, h, rate], i) => { const mg = d * w; return ['Step ' + (i + 1) + ': ' + d + ' mg/kg', fx(mg) + ' mg', '', `${fx(mg / 200)} ml of IV NAC (5000mg/25ml) in ${bag}ml D5% over ${h} hours: ${rate} ml/hr`]; });
      const total = S.reduce((a, s) => a + s[0], 0);
      outs.unshift(['Dosing weight', fx(w) + ' kg', v.wt > 110 ? 'warn' : '', v.wt > 110 ? 'The circular caps the weight at 110kg' : 'Actual body weight']);
      return {outs, verdict:{cls:'next', h:(two ? 'Fluid restriction or under 40kg: two bags' : 'Three bags') + `, ${total} mg/kg over ${S.reduce((a, s) => a + s[2], 0)} hours`, p:'Check the volume against the vials: 5000mg in 25ml is 200mg per ml.', href:'#paracetamol-overdose', link:'The pathway and the circular'},
        gap:'The circular gives no treatment line, timing or stopping rule: the ebook\'s pathway decides when to start. The non-paracetamol acute liver failure regime (Lampiran 1b) is not worked out here.'};
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
    }},
  /* ================= 16 Nov 2026: in place of MDCalc links, each read from its own source in the guide's data =================
     Group A: the ACS CPG 2026 (TIMI, HEART), the head injury CPG 2015 (Canadian CT Head Rule, Canadian C-spine Rule, NEXUS),
     the VTE CPG 2013 (PE Wells) and Reading X-rays (the Ottawa rules). Group B: the AF CPG 2012 and the abdominal trauma CPG
     2025. Group C: each score's own paper or owner (P['ed-scores']). Nothing is copied from MDCalc. Nothing is saved. */
  timi:{t:'TIMI risk score (UA/NSTEMI)', g:'cardio', src:'ACS CPG 2026, Appendix IV', path:'#acs-cpg--timi', kw:'timi unstable angina nstemi chest pain risk acs troponin obsess',
    sub:'The seven variables of Appendix IV, and where the CPG\'s rule-out takes the total.',
    fields:[{k:'t', type:'check', label:'Tick each one present at admission', pts:true, items:() => P['acs-cpg'].nodes.timi.items}],
    note:'ACS CPG (1st edition, 2026), Appendix IV (p164): the sum of 7 variables at admission. Flowchart 6, only after the serial troponins and with the patient pain free: a TIMI for UA/NSTEMI score of 0 or 1 is discharged and 2 or more is the indeterminate group; Appendix IV and Table 7 call 2 or less low risk. The ebook\'s Obsess protocol asks for TIMI under 1.',
    run(v){
      if (!v.t_set) return null;
      const s = v.t_sum, r = bandOut('acs-cpg', 'timi', s, ['good', 'warn'], 'TIMI for UA/NSTEMI', s + ' of 7', {min:-0.5, max:7.5, v:s, bands:[[-0.5, 1.5, 'good'], [1.5, 7.5, 'warn']]});
      r.verdict.cls = 'next'; r.verdict.p = 'Flowchart 6 scores this only after the serial troponins come back below the 99th percentile with under 50% change in 3 hours, in a patient who is pain free; a raised troponin, a 50% change or ongoing pain takes the patient to admission or the indeterminate group instead.';
      if (s === 2) r.gap = 'A score of 2 is low risk in Appendix IV and Table 7, but goes to the indeterminate group in Flowchart 6.';
      r.links = [['#calc-obsess', 'Obsess protocol check (the ebook: TIMI under 1)'], ['#calc-heart', 'HEART score']];
      return r;
    }},
  heart:{t:'HEART score', g:'cardio', src:'ACS CPG 2026, Appendix III', path:'#acs-cpg--heart', kw:'heart score chest pain history ecg age risk factors troponin acs',
    sub:'Add the five rows of Appendix III, and see where the CPG\'s rule-out takes the total.',
    fields:() => heartRows().map(([h, bands], i) => ({k:'hr' + i, type:'pick', label:h, opts:bands})),
    note:'ACS CPG (1st edition, 2026), Appendix III (p163): add the five rows, 0 to 10. Flowchart 6 (with cTn), only after the serial troponins and with the patient pain free: HEART score 3 or less is discharged, over 3 is the indeterminate group. In the Modified Heart Score, hs-cTn is used instead of cardiac troponins.',
    run(v){
      const rows = heartRows(), got = rows.map((r, i) => v['hr' + i]);
      if (got.every(x => !x)) return null;
      if (got.some(x => !x)) return [['Still to pick', rows.filter((r, i) => !got[i]).map(r => r[0]).join(', '), 'warn', 'The score adds all five rows']];
      const s = got.reduce((a, x) => a + +x, 0), i = s <= 3 ? 0 : 1, n = P['acs-cpg'].nodes.heart, o = n.opts[i];
      return {outs:[['HEART score', s + ' of 10', i ? 'warn' : 'good', o[0], {min:-0.5, max:10.5, v:s, bands:[[-0.5, 3.5, 'good'], [3.5, 10.5, 'warn']]}]],
        verdict:{cls:'next', h:nodeHead(P['acs-cpg'].nodes[o[1]]), p:'Flowchart 6 scores this only after the serial troponins come back below the 99th percentile with under 50% change in 3 hours, in a patient who is pain free; a raised troponin, a 50% change or ongoing pain takes the patient to admission or the indeterminate group instead.', href:'#acs-cpg--' + o[1], link:'Open the step'},
        gap:'The CPG does not define the History or ECG grades, and exactly 3 risk factors is in no row of Appendix III.', links:[['#calc-timi', 'TIMI risk score']]};
    }},
  cthr:{t:'Canadian CT Head Rule', g:'head', src:'Head injury CPG 2015, p26', path:'#head-injury-cpg--cthr', kw:'canadian ct head rule cchr minor head injury ct brain skull fracture vomiting amnesia dangerous mechanism',
    sub:'The rule\'s high- and medium-risk factors for a minor head injury, as the CPG prints them.',
    fields:[{k:'h', type:'check', label:'A. High risk (for neurological intervention)', stop:true, none:true, items:() => P['head-injury-cpg'].nodes.cthr.items},
      {k:'m', type:'check', label:'B. Medium risk (for brain injury on CT)', none:true, items:() => P['head-injury-cpg'].nodes.cthrm.items}],
    note:'Head injury CPG 2015, p26: CT Head Rule is only applicable for patients with minor head injuries: witnessed loss of consciousness, definite amnesia or witnessed disorientation in a patient with a GCS score of 13 - 15. The CPG\'s own decision on a head CT, and how soon, is Algorithm 3.',
    run(v){
      if (!v.h_n && !v.h_none) return null;
      const key = v.h_n ? 'cthrhi' : (!v.m_n && !v.m_none) ? '' : v.m_n ? 'cthrmid' : 'cthrlo';
      if (!key) return [['High risk', 'None', 'good', 'Now the medium-risk factors']];
      const e = P['head-injury-cpg'].nodes[key];
      return {outs:[['Canadian CT Head Rule', key === 'cthrhi' ? 'High risk' : key === 'cthrmid' ? 'Medium risk' : 'Neither', key === 'cthrhi' ? 'bad' : key === 'cthrmid' ? 'warn' : 'good', e.title]],
        verdict:{cls:key === 'cthrlo' ? 'ok' : key === 'cthrhi' ? 'stop' : 'next', h:e.title, p:e.items[1], href:'#head-injury-cpg--imm', link:'Head CT: Algorithm 3'}, gap:e.gap, links:[['#calc-gcs', 'Glasgow Coma Scale'], ['#calc-head', 'The ebook\'s mild head injury check']]};
    }},
  cspine:{t:'Canadian C-spine Rule', g:'head', src:'Head injury CPG 2015, Appendix 6', path:'#head-injury-cpg--ccr1', kw:'canadian c-spine rule ccr cervical spine neck injury x-ray radiography trauma',
    sub:'Whether an alert, stable trauma patient needs a neck film, step by step as Appendix 6 prints it.',
    fields:[{k:'h', type:'check', label:'Any high risk factor which mandates radiography?', stop:true, none:true, items:() => P['head-injury-cpg'].nodes.ccr1.items},
      {k:'l', type:'check', label:'Any low risk factor which allows safe assessment of range of motion?', none:true, items:() => P['head-injury-cpg'].nodes.ccr2.items},
      {k:'rot', type:'seg', label:'Able to actively rotate neck? 45° left and right', nodef:true, opts:[['able', 'Able'], ['unable', 'Unable']]}],
    note:'Head injury CPG 2015, Appendix 6 (p55): for alert (GCS=15) and stable trauma patients where cervical spine injury is concern. Any high risk factor: radiography. No low risk factor: radiography. A low risk factor: assess the range of motion; unable to rotate 45° left and right: radiography.',
    run(v){
      const N = P['head-injury-cpg'].nodes, end = (k, why) => ({outs:[['Canadian C-spine Rule', k === 'ccrok' ? 'No radiography' : 'Radiography', k === 'ccrok' ? 'good' : 'bad', why]], verdict:{cls:k === 'ccrok' ? 'ok' : 'stop', h:N[k].title, href:'#head-injury-cpg--' + k, link:'Open the step'}, gap:N[k].gap, links:[['#calc-nexus', 'NEXUS low-risk criteria']]});
      if (!v.h_n && !v.h_none) return null;
      if (v.h_n) return end('ccrx', 'A high risk factor mandates radiography');
      if (!v.l_n && !v.l_none) return [['High risk factors', 'None', 'good', 'Now the low risk factors']];
      if (!v.l_n) return end('ccrx', 'No low risk factor allows a safe range of motion assessment');
      if (!v.rot) return [['Range of motion', 'Safe to assess', 'good', 'Ask the patient to rotate the neck 45° left and right']];
      return v.rot === 'able' ? end('ccrok', 'Able to rotate 45° left and right') : end('ccrx', 'Unable to rotate 45° left and right');
    }},
  nexus:{t:'NEXUS low-risk criteria', g:'head', src:'Head injury CPG 2015, Appendix 7', path:'#head-injury-cpg--nexus', kw:'nexus cervical spine neck x-ray radiography low risk criteria trauma intoxication',
    sub:'Cervical-spine radiography is indicated unless the patient meets all five.',
    fields:[{k:'n', type:'check', label:'Tick each criterion the patient meets', items:() => P['head-injury-cpg'].nodes.nexus.items}],
    note:'Head injury CPG 2015, Appendix 7 (p56), from Hoffman and colleagues: cervical-spine radiography is indicated for patients with trauma unless they meet all five criteria. The step gives each definition as printed.',
    run(v){
      if (!v.n_set) return null;
      const all = v.n_n === 5, k = all ? 'nexok' : 'nexx', e = P['head-injury-cpg'].nodes[k];
      return {outs:[['Criteria met', v.n_n + ' of 5', all ? 'good' : 'bad', all ? 'All five: low probability of cervical injury' : 'Not all five: radiography is indicated']],
        verdict:{cls:all ? 'ok' : 'stop', h:e.title, href:'#head-injury-cpg--' + k, link:'Open the step'}, gap:e.gap, links:[['#calc-cspine', 'Canadian C-spine Rule']]};
    }},
  wellspe:{t:'Wells score (PE)', g:'cardio', src:'VTE CPG 2013, Table 3.1.2', path:'#vte-cpg--pewells', kw:'wells pe pulmonary embolism ctpa lmwh vte',
    sub:'PE likely or unlikely, and the CPG\'s next step.',
    fields:[{k:'w', type:'check', label:'Tick each one present', pts:true, items:() => P['vte-cpg'].nodes.pewells.items}],
    note:'VTE CPG (2013), Table 3.1.2 (p45), in the guide\'s own words: PE likely above 4 points, PE unlikely at 4 points or fewer. Its algorithm (p47): PE likely, cover with LMWH and a CTPA the same day or within 24 hours, then a bilateral CUS if the CTPA is negative; PE unlikely, exclude PE. Tested in non-pregnant patients.',
    run(v){
      if (!v.w_set) return null;
      const s = v.w_sum;
      return bandOut('vte-cpg', 'pewells', s, ['bad', 'good'], 'PE Wells score', String(s), {min:-0.5, max:12.5, v:s, bands:[[-0.5, 4.25, 'good'], [4.25, 12.5, 'bad']]}, [['#calc-perc', 'PERC rule'], ['#calc-ddimer', 'Age-adjusted D-dimer'], ['#calc-anticoag', 'Anticoagulant doses']]);
    }},
  ottawa:{t:'Ottawa ankle, foot and knee rules', g:'head', src:'Reading X-rays (named sources)', path:'#xray-guide--ank', kw:'ottawa ankle rule foot rule knee rule x-ray film sprain fracture malleolus navicular fifth metatarsal patella fibula weight bearing',
    sub:'Whether the injury needs a film, from the checklists in Reading X-rays.',
    fields:v => [{k:'j', type:'seg', label:'Which rule?', re:true, opts:[['ank', 'Ankle'], ['ft', 'Midfoot'], ['kn', 'Knee']]},
      {k:'r_' + (v.j || 'ank'), type:'check', label:'Tick each one present', none:true, items:() => P['xray-guide'].nodes[v.j || 'ank'].items}],
    note:'From Reading X-rays (11 Nov 2026), in the guide\'s own words from named sources: the NHS Scotland Ottawa Ankle Rules sheet, Wikipedia and WikEM for the ankle and foot; the ACR narrative (2019), Wikipedia, WikEM and NICE NG38 for the knee. The step lists when not to use the knee rule.',
    run(v){
      const j = v.j || 'ank', k = 'r_' + j;
      if (!v[k + '_n'] && !v[k + '_none']) return null;
      const n = P['xray-guide'].nodes[j], any = v[k + '_n'] > 0, o = n.opts[any ? 0 : 1];
      return {outs:[[{ank:'Ottawa ankle rule', ft:'Ottawa foot rule', kn:'Ottawa knee rule'}[j], any ? 'Film needed' : 'No film by the rule', any ? 'warn' : 'good', o[0]]],
        verdict:{cls:any ? 'next' : 'ok', h:any ? 'A film is needed by the rule' : 'No film needed by the rule', href:'#xray-guide--' + o[1], link:'Open the step'}};
    }},
  chads:{t:'CHA2DS2-VASc (AF)', g:'cardio', src:'AF CPG 2012, Table 12', path:'#ed-scores--chads', kw:'cha2ds2-vasc chads2 af atrial fibrillation stroke risk anticoagulation oac aspirin',
    sub:'Stroke risk in non-valvular AF, its yearly stroke rate, and the antithrombotic approach the CPG sets for it.',
    fields:[{k:'ag', type:'seg', label:'Age', opts:[['0', 'Under 65'], ['65', '65 to 74'], ['75', '75 or over']]},
      {k:'c', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.chads.items.filter(r => !/^Age /.test(r[0]))}],
    note:'Management of Atrial Fibrillation CPG (2012), Table 12 (p29), in the guide\'s own words: the risk factors with their points (maximum 9), the adjusted stroke rate by score, and the approach to thromboprophylaxis.',
    run(v){
      if (!v.c_set && v.ag === '0') return null;
      const it = P['ed-scores'].nodes.chads.items, ap = v.ag === '75' ? it.find(r => /75 or over/.test(r[0]))[1] : v.ag === '65' ? it.find(r => /65 to 74/.test(r[0]))[1] : 0, s = v.c_sum + ap;
      const r = bandOut('ed-scores', 'chads', s, ['good', 'warn', 'bad'], 'CHA2DS2-VASc', s + ' of 9', {min:-0.5, max:9.5, v:s, bands:[[-0.5, 0.5, 'good'], [0.5, 1.5, 'warn'], [1.5, 9.5, 'bad']]}, [['#calc-hasbled', 'HAS-BLED']]);
      r.outs.push(['Adjusted stroke rate', CHADS_RATE[s] + ' a year', 'good', 'Table 12c, by score']);
      return r;
    }},
  hasbled:{t:'HAS-BLED (AF)', g:'cardio', src:'AF CPG 2012, Table 14', path:'#ed-scores--hasbled', kw:'has-bled hasbled bleeding risk anticoagulation af warfarin',
    sub:'Bleeding risk on antithrombotic therapy in AF.',
    fields:[{k:'b', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.hasbled.items}],
    note:'AF CPG (2012), Table 14 and its keypoint (p42), in the guide\'s own words: a score of 3 or more indicates high risk, needing some caution and regular review once antithrombotic therapy starts. The step gives the footnote\'s definitions; a symbol is lost in its print (Still to confirm).',
    run(v){
      if (!v.b_set) return null;
      const s = v.b_sum;
      return bandOut('ed-scores', 'hasbled', s, ['bad', 'good'], 'HAS-BLED', s + ' of 9', {min:-0.5, max:9.5, v:s, bands:[[-0.5, 2.5, 'good'], [2.5, 9.5, 'bad']]}, [['#calc-chads', 'CHA2DS2-VASc']]);
    }},
  mews:{t:'MEWS (abdominal trauma)', g:'scores', src:'Abdominal trauma CPG 2025, Table 6', path:'#ed-scores--mews', kw:'mews modified early warning score hdu icu abdominal trauma deterioration',
    sub:'Pick the band for each sign, as Table 6 prints them.',
    fields:() => MEWS_ROWS.map(([h, bands], i) => ({k:'mw' + i, type:'pick', label:h, opts:bands.map(([b, sc], j) => [String(j), b, '', sc])})),
    note:'Management of Abdominal Trauma in Adults CPG (2025), Table 6 (p57): patients with a MEWS of 3 or 4 were transferred to the HDU, and a MEWS of 5 or more was considered criteria for ICU admission. The CPG uses it, with the CRASH score, to pick out severely injured abdominal trauma patients for early ICU/HDW referral.',
    run(v){ return bandsRun(v, 'mw', MEWS_ROWS, s => s >= 5 ? 2 : s >= 3 ? 1 : 0, 'MEWS', ['good', 'warn', 'bad'], 'ed-scores', 'mews', 14); }},
  abcd2:{t:'ABCD2 score (TIA)', g:'scores', src:'Johnston et al., Lancet 2007', path:'#ed-scores--abcd2', kw:'abcd2 abcd tia transient ischaemic attack stroke risk',
    sub:'Early stroke risk after a TIA, and where the ebook\'s TIA route takes it.',
    fields:[{k:'a', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.abcd2.items.filter(r => !/^(Clinical feature|Duration)/.test(r[0]))},
      {k:'cf', type:'seg', label:'Clinical features', opts:[['none', 'Neither'], ['speech', 'Speech impairment without weakness'], ['weak', 'Unilateral weakness']]},
      {k:'du', type:'seg', label:'Duration', opts:[['0', 'Under 10 min'], ['10', '10 to 59 min'], ['60', '60 min or longer']]}],
    note:'Johnston SC et al. Lancet 2007;369:283-92 (abstract), in the guide\'s own words: score 0 to 3 low risk (2-day stroke risk 1.0%), 4 to 5 moderate (4.1%), 6 to 7 high (8.1%). The ebook\'s TIA route calls over 3 high.',
    run(v){
      if (!v.a_set && v.cf === 'none' && v.du === '0') return null;
      const it = P['ed-scores'].nodes.abcd2.items, pt = re => it.find(r => re.test(r[0]))[1];
      const s = v.a_sum + (v.cf === 'weak' ? pt(/unilateral weakness/) : v.cf === 'speech' ? pt(/speech impairment/) : 0) + (v.du === '60' ? pt(/60 min or longer/) : v.du === '10' ? pt(/10 to 59 min/) : 0);
      const r = bandOut('ed-scores', 'abcd2', s, ['good', 'bad'], 'ABCD2', s + ' of 7', {min:-0.5, max:7.5, v:s, bands:[[-0.5, 3.5, 'good'], [3.5, 5.5, 'warn'], [5.5, 7.5, 'bad']]}, [['#stroke-tia', 'Ebook: stroke and TIA']]);
      r.outs.push(['Johnston et al.', s <= 3 ? 'Low risk' : s <= 5 ? 'Moderate risk' : 'High risk', s <= 3 ? 'good' : s <= 5 ? 'warn' : 'bad', '2-day stroke risk ' + (s <= 3 ? '1.0%' : s <= 5 ? '4.1%' : '8.1%')]);
      return r;
    }},
  sah:{t:'Ottawa SAH rule', g:'scores', src:'Perry et al., JAMA 2013; CMAJ 2017', path:'#ed-scores--sah', kw:'ottawa sah subarachnoid haemorrhage hemorrhage headache thunderclap neck stiffness',
    sub:'Whether an alert adult with a sudden headache needs investigation for subarachnoid haemorrhage.',
    fields:[{k:'s', type:'check', label:'Tick each one present', stop:true, none:true, items:() => P['ed-scores'].nodes.sah.items}],
    note:'Perry JJ et al., JAMA 2013 and CMAJ 2017, in the guide\'s own words: for alert patients over 15 with a new acute severe nontraumatic headache peaking within 1 hour; not with new neurological deficits, previous aneurysm, SAH or brain tumour, or 3 or more similar headaches over 6 months or more. Any one item: investigate.',
    run(v){ return anyRun(v, 's', 'ed-scores', 'sah', 'Ottawa SAH rule', ['Investigate for SAH', 'Not required by the rule']); }},
  perc:{t:'PERC rule (PE)', g:'cardio', src:'Kline et al., J Thromb Haemost 2008', path:'#ed-scores--perc', kw:'perc pulmonary embolism rule out criteria pe d-dimer low risk',
    sub:'For a patient you already think is low risk for PE: all eight criteria, or not.',
    fields:[{k:'g', type:'seg', label:'Your gestalt: pretest probability of PE', nodef:true, opts:[['low', 'Low, under 15%'], ['not', 'Not low']]},
      {k:'p', type:'check', label:'Tick each criterion the patient meets', items:() => P['ed-scores'].nodes.perc.items}],
    note:'Kline JA et al. J Thromb Haemost 2008 (abstract), in the guide\'s own words: with a low suspicion (gestalt under 15%) and all eight criteria, 1.0% had VTE or died within 45 days in a study in 13 emergency departments. PERC is not in the VTE CPG, whose route is the PE Wells score.',
    run(v){
      if (!v.g) return v.p_set ? [['Gestalt', 'Still to choose', 'warn', 'PERC applies only with a low suspicion']] : null;
      if (v.g === 'not') return {outs:[['PERC', 'Does not apply', 'warn', 'Only for a low suspicion, under 15%']], verdict:{cls:'next', h:'Suspicion not low: use the VTE CPG\'s PE Wells score', href:'#vte-cpg--pewells', link:'PE Wells score'}, links:[['#calc-wellspe', 'Wells score (PE)']]};
      if (!v.p_set) return null;
      const neg = v.p_n === 8, k = neg ? 'percneg' : 'percpos', e = P['ed-scores'].nodes[k];
      return {outs:[['Criteria met', v.p_n + ' of 8', neg ? 'good' : 'warn', neg ? 'PERC negative' : 'PERC positive']], verdict:{cls:neg ? 'ok' : 'next', h:e.title, p:e.items[0], href:'#ed-scores--' + k, link:'Open the step'}, gap:e.gap, links:[['#calc-wellspe', 'Wells score (PE)']]};
    }},
  ddimer:{t:'Age-adjusted D-dimer', g:'cardio', src:'Righini et al., JAMA 2014', path:'#ed-scores--ddimer', kw:'d-dimer ddimer age adjusted cut-off cutoff pe pulmonary embolism adjust-pe elderly',
    sub:'The D-dimer cut-off for age, for a non-high clinical probability only.',
    fields:[{k:'pr', type:'seg', label:'Clinical probability', nodef:true, opts:[['low', 'Non-high or unlikely'], ['high', 'High or likely']]}, ['yrs', 'Age', 'years'], ['dd', 'D-dimer result, if you have it', '\u00b5g/L']],
    note:'Righini M et al. JAMA 2014 (ADJUST-PE, abstract), in the guide\'s own words: from age 50 the cut-off is age \u00d7 10 \u00b5g/L, in place of 500 \u00b5g/L, for a non-high or unlikely clinical probability, with a highly sensitive D-dimer assay. The VTE CPG warns that the whole blood agglutination D-dimer used in most Malaysian laboratories is not sensitive in ruling out VTE (p46).',
    run(v){
      if (!v.pr) return v.yrs ? [['Clinical probability', 'Still to choose', 'warn', 'The age-adjusted cut-off is for a non-high or unlikely probability only']] : null;
      if (v.pr === 'high') return {outs:[['Age-adjusted cut-off', 'Does not apply', 'bad', 'ADJUST-PE: non-high or unlikely probability only']], verdict:{cls:'stop', h:'High or likely probability: no D-dimer rule-out', p:'The VTE CPG: PE likely, cover with LMWH and a CTPA the same day (p47).', href:'#vte-cpg--pelik', link:'VTE CPG: PE likely'}};
      if (!v.yrs) return null;
      if (v.yrs < 18 || v.yrs > 120) return [['Age', 'Enter 18 to 120 years', 'warn', '']];
      const cut = v.yrs >= 50 ? v.yrs * 10 : 500, out = [['Cut-off', cut + ' \u00b5g/L', 'good', v.yrs >= 50 ? 'Age \u00d7 10, from age 50' : 'Under 50: the conventional 500 \u00b5g/L']];
      if (v.dd && v.dd < 50) return {outs:out.concat([['D-dimer ' + v.dd, 'Check the unit', 'warn', 'Enter \u00b5g/L: 500 \u00b5g/L is 0.5 mg/L']])};
      if (v.dd) out.push(['D-dimer ' + v.dd + ' \u00b5g/L', v.dd < cut ? 'Below the cut-off' : 'At or above the cut-off', v.dd < cut ? 'good' : 'bad', v.dd < cut ? 'ADJUST-PE: 1 of 331 untreated between 500 and the cut-off had an event in 3 months' : 'Not ruled out by D-dimer']);
      return {outs:out, gap:'Only with a highly sensitive assay: check which D-dimer your laboratory runs (VTE CPG, p46; Still to confirm).', links:[['#calc-wellspe', 'Wells score (PE)'], ['#ed-scores--ddimer', 'The step and its source']]};
    }},
  sfsr:{t:'San Francisco Syncope Rule', g:'cardio', src:'Quinn et al., Ann Emerg Med 2004, 2006', path:'#ed-scores--sfsr', kw:'san francisco syncope rule chess faint collapse syncope serious outcome',
    sub:'Five findings: any one, and the patient is not low risk by the rule.',
    fields:[{k:'f', type:'check', label:'Tick each one present', stop:true, none:true, items:() => P['ed-scores'].nodes.sfsr.items}],
    note:'Quinn JV et al., Ann Emerg Med 2004 and 2006 (abstracts), in the guide\'s own words: 98% sensitive and 56% specific for serious outcomes within 30 days in its validation. The ebook\'s syncope pathway is the department\'s route.',
    run(v){ return anyRun(v, 'f', 'ed-scores', 'sfsr', 'San Francisco Syncope Rule', ['Not low risk', 'Low risk by the rule'], [['#calc-syncope', 'The ebook\'s syncope risk check'], ['#calc-csrs', 'Canadian Syncope Risk Score']]); }},
  csrs:{t:'Canadian Syncope Risk Score', g:'cardio', src:'Thiruganasambandamoorthy et al., CMAJ 2016', path:'#ed-scores--csrs', kw:'canadian syncope risk score csrs faint collapse syncope troponin qtc vasovagal',
    sub:'The 30-day risk of a serious adverse event after syncope, from Figure 2.',
    fields:[{k:'c', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.csrs.items.filter(r => !/^Diagnosis in emergency/.test(r[0]))},
      {k:'dx', type:'seg', label:'Diagnosis in the emergency department', opts:[['none', 'Neither'], ['vv', 'Vasovagal syncope'], ['card', 'Cardiac syncope']]}],
    note:'Thiruganasambandamoorthy V et al. CMAJ 2016;188:E289-98, Figure 2, in the guide\'s own words: adults with syncope within 24 hours, score \u22123 to 11. The paper derived the score; its later validation was not read here.',
    run(v){
      if (!v.c_set && v.dx === 'none') return null;
      const it = P['ed-scores'].nodes.csrs.items, dp = re => it.find(r => re.test(r[0]))[1];
      const s = v.c_sum + (v.dx === 'vv' ? dp(/vasovagal syncope$/) : v.dx === 'card' ? dp(/cardiac syncope$/) : 0), risk = CSRS_RISK.find(r => r[0] === s);
      const r = bandOut('ed-scores', 'csrs', s, ['good', 'good', 'warn', 'bad', 'bad'], 'Canadian Syncope Risk Score', String(s), {min:-3.5, max:11.5, v:s, bands:[[-3.5, 0.5, 'good'], [0.5, 3.5, 'warn'], [3.5, 11.5, 'bad']]}, [['#syncope', 'Ebook: syncope'], ['#calc-sfsr', 'San Francisco Syncope Rule']]);
      if (risk) r.outs.push(['30-day risk', risk[1] + '%', 'good', risk[2] + ' (Figure 2)']);
      return r;
    }},
  alvarado:{t:'Alvarado score', g:'scores', src:'Alvarado 1986; Ohle et al., BMC Med 2011', path:'#ed-scores--alvarado', kw:'alvarado mantrels appendicitis right iliac fossa rif abdominal pain score',
    sub:'The 10-point appendicitis score, with the strata of a systematic review.',
    fields:[{k:'a', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.alvarado.items}],
    note:'Ohle R et al. BMC Med 2011;9:139 (Figure 1, CC BY): Alvarado\'s score (1986), strata 1 to 4 (predicted appendicitis 30%), 5 to 6 (66%) and 7 to 10 (93%). A cut point of 5 rules out well in all groups; the score over-predicts appendicitis in women at every level. The ebook\'s abdominal pain pathway stays the department\'s route.',
    run(v){
      if (!v.a_set) return null;
      return bandOut('ed-scores', 'alvarado', v.a_sum, ['good', 'warn', 'bad'], 'Alvarado score', v.a_sum + ' of 10', {min:-0.5, max:10.5, v:v.a_sum, bands:[[-0.5, 4.5, 'good'], [4.5, 6.5, 'warn'], [6.5, 10.5, 'bad']]}, [['#abdominal-pain', 'Ebook: abdominal pain']]);
    }},
  qsofa:{t:'qSOFA (suspected infection)', g:'scores', src:'Sepsis-3, JAMA 2016', path:'#ed-scores--qsofa', kw:'qsofa quick sofa sepsis infection septic poor outcome',
    sub:'Three bedside criteria for an adult with suspected infection.',
    fields:[{k:'q', type:'check', label:'Tick each one present', pts:true, items:() => P['ed-scores'].nodes.qsofa.items}],
    note:'Singer M et al. and Seymour CW et al., JAMA 2016 (abstracts), in the guide\'s own words: at least 2 of the 3 marks an adult with suspected infection as more likely to have poor outcomes typical of sepsis. The abstracts describe a score of 2 or more only.',
    run(v){
      if (!v.q_set) return null;
      return bandOut('ed-scores', 'qsofa', v.q_sum, ['bad', 'warn'], 'qSOFA', v.q_sum + ' of 3', {min:-0.5, max:3.5, v:v.q_sum, bands:[[-0.5, 1.5, 'good'], [1.5, 3.5, 'bad']]});
    }},
  news2:{t:'NEWS2 (adults)', g:'scores', src:'Royal College of Physicians, 2017', path:'#ed-scores--news2', kw:'news2 news national early warning score deterioration escalation observations vital signs',
    sub:'Type the observations: each scores by the RCP\'s Chart 1, and the total sets the response.',
    fields:[{k:'sc', type:'seg', label:'SpO2 scale', opts:[['1', 'Scale 1'], ['2', 'Scale 2 (hypercapnic, target 88\u201392%)']]},
      ['rr', 'Respiration rate', 'per minute'], ['sp', 'SpO2', '%'], {k:'o2', type:'seg', label:'Air or oxygen?', opts:[['Air', 'Air'], ['Oxygen', 'Oxygen']]},
      ['sbp', 'Systolic blood pressure', 'mmHg'], ['pr', 'Pulse', 'per minute'], {k:'cn', type:'seg', label:'Consciousness (ACVPU)', opts:[['Alert', 'Alert'], ['CVPU', 'New confusion, voice, pain or unresponsive']]}, ['tp', 'Temperature', '\u00b0C']],
    note:'Royal College of Physicians, National Early Warning Score (NEWS) 2, 2017 (Charts 1, 2 and 4), in the guide\'s own layout and words: not the RCP\'s chart. Not for children (under 16) or women who are pregnant. Scale 2 only for confirmed hypercapnic respiratory failure with a prescribed target of 88 to 92%.',
    run(v){
      const need = [['rr', 'respiration rate'], ['sp', 'SpO2'], ['sbp', 'systolic pressure'], ['pr', 'pulse'], ['tp', 'temperature']].filter(([k]) => !v[k]);
      if (need.length === 5) return null;
      if (need.length) return [['Still to enter', need.map(n => n[1]).join(', '), 'warn', 'NEWS2 adds all seven parameters']];
      const R = name => NEWS2_ROWS.find(r => r[0].startsWith(name))[1];
      const parts = [['Respiration', bandScore(R('Respiration'), v.rr)], ['SpO2', bandScore(R(v.sc === '2' ? 'SpO2 Scale 2' : 'SpO2 Scale 1'), v.sp, v.o2)], ['Air or oxygen', bandScore(R('Air or oxygen'), v.o2)],
        ['Systolic', bandScore(R('Systolic'), v.sbp)], ['Pulse', bandScore(R('Pulse'), v.pr)], ['Consciousness', bandScore(R('Consciousness'), v.cn)], ['Temperature', bandScore(R('Temperature'), v.tp)]];
      const miss = parts.filter(p => p[1] == null);
      if (miss.length) return [['Between the printed bands', miss.map(p => p[0]).join(', '), 'warn', 'Chart 1 prints whole numbers (temperature to one decimal)']];
      const s = parts.reduce((a, p) => a + p[1], 0), three = parts.some(p => p[1] === 3), i = s >= 7 ? 3 : s >= 5 ? 2 : three ? 1 : 0, n = P['ed-scores'].nodes.news2, o = n.opts[i], e = P['ed-scores'].nodes[o[1]];
      return {outs:[['NEWS2', String(s), ['good', 'warn', 'bad', 'bad'][i], o[0], {min:-0.5, max:20.5, v:s, bands:[[-0.5, 4.5, 'good'], [4.5, 6.5, 'warn'], [6.5, 20.5, 'bad']]}], ['Parameters that score', parts.filter(p => p[1]).length + ' of 7', 'good', parts.filter(p => p[1]).map(p => p[0] + ' ' + p[1]).join(', ') || 'None']],
        verdict:{cls:['ok', 'next', 'stop', 'stop'][i], h:e.title, p:e.items.join(' '), href:'#ed-scores--' + o[1], link:'Open the step'}, gap:e.gap};
    }},
  ciwa:{t:'CIWA-Ar (alcohol withdrawal)', g:'scores', src:'Sullivan et al., Br J Addict 1989', path:'#ed-scores--ciwa', kw:'ciwa ciwa-ar alcohol withdrawal tremor sweats agitation hallucinations delirium',
    sub:'Rate each of the ten items as the scale prints them; maximum 67.',
    fields:() => CIWA_ROWS.map(([h, how, d], i) => ({k:'cw' + i, type:'pick', label:h + ': ' + how, opts:d.map((t, j) => [String(j), t || 'Between the levels either side', ''])})),
    note:'The CIWA-Ar (Sullivan et al., 1989), as the scale is printed: it is not copyrighted and may be reproduced freely. Its one cut-off: patients scoring less than 10 do not usually need additional medication for withdrawal. Record the pulse, taken for one minute, and the blood pressure with it.',
    run(v){
      const got = CIWA_ROWS.map((r, i) => v['cw' + i]);
      if (got.every(x => !x)) return null;
      const s = got.reduce((a, x) => a + (x ? +x : 0), 0), left = got.filter(x => !x).length, i = s < 10 ? 0 : 1, o = P['ed-scores'].nodes.ciwa.opts[i], e = P['ed-scores'].nodes[o[1]];
      const out = [['CIWA-Ar', s + ' of 67', i ? 'warn' : 'good', o[0], {min:-0.5, max:67.5, v:s, bands:[[-0.5, 9.5, 'good'], [9.5, 67.5, 'warn']]}]];
      if (left) out.push(['Still to rate', left + ' of 10 items', 'warn', 'The total so far counts only the items rated']);
      return {outs:out, verdict:left ? null : {cls:i ? 'next' : 'ok', h:e.title, p:e.items[0], href:'#ed-scores--' + o[1], link:'Open the step'}, gap:e.gap};
    }},
  burns:{t:'Burns: size and fluids', g:'head', src:'VicBurns; RCH Melbourne', path:'#ed-scores--bsz', kw:'burn burns tbsa rule of nines palm parkland fluid resuscitation hartmann urine output scald luka terbakar melecur',
    sub:'TBSA by the rule of nines (adults) or your paediatric chart, then the Parkland volume and starting rate.',
    fields:v => [{k:'who', type:'seg', label:'Patient', re:true, opts:[['adult', 'Adult'], ['child', 'Child under 16']]},
      ...((v.who || 'adult') === 'adult' ? [{k:'rg', type:'check', label:'Whole regions burnt (rule of nines; not erythema)', pts:true, items:() => RULE_OF_NINES}, ['palms', 'Scattered patches: number of the patient\'s palms', 'palms']]
        : [['tbsa', 'TBSA from a paediatric chart (Lund and Browder)', '%']]),
      ['wt', 'Weight', 'kg'], ['hrs', 'Hours since the burn', 'hours'], ['given', 'IV fluid already given', 'ml'],
      {k:'co', type:'seg', label:'Formula', opts:[['3', '3 ml/kg/%TBSA (RCH)'], ['4', '4 ml/kg/%TBSA (VicBurns: inhalation, electrical or other trauma)']]}],
    note:'From the Victorian Adult Burns Service (VicBurns: rule of nines, the palm, the fluid thresholds, 3 to 4 ml/kg/%TBSA) and the Royal Children\'s Hospital Melbourne (the modified Parkland steps and the urine output targets), in the guide\'s own words. Count from the time of the burn. Not in the ebook: the department\'s own burns route is under Still to confirm.',
    run(v){
      const adult = (v.who || 'adult') === 'adult', tb = adult ? Math.min(100, (v.rg_sum || 0) + (v.palms || 0)) : v.tbsa;
      if (!tb) return null;
      if (tb > 100) return [['TBSA', 'Enter up to 100%', 'warn', '']];
      const lim = adult ? 20 : 10, over = tb > lim, out = [['TBSA', fx(tb) + '%', over ? 'bad' : 'warn', (adult ? 'Adult: fluids over 20%' : 'Child under 16: fluids over 10%') + ' (VicBurns)']];
      if (!over) return {outs:out, verdict:{cls:'next', h:'Below the fluid threshold: check when to call the burns team', href:'#ed-scores--bmin', link:'Open the step'}};
      if (!v.wt) return {outs:out.concat([['Weight', 'Enter the weight', 'warn', 'for the Parkland volume']])};
      const bad = badWt(v.wt, 2, 300); if (bad) return bad;
      const vol = +v.co * tb * v.wt, half = vol / 2, h = Math.min(v.hrs || 0, 7), first = half - (v.given || 0);
      out.push(['First 24 hours', Math.round(vol) + ' ml', 'bad', v.co + ' \u00d7 ' + fx(tb) + '% \u00d7 ' + fx(v.wt) + ' kg, from the time of the burn']);
      out.push(['Starting rate', first > 0 ? Math.round(first / (8 - h)) + ' ml/hr' : 'Already given', first > 0 ? 'bad' : 'warn', first > 0 ? `(${Math.round(half)} \u2212 ${Math.round(v.given || 0)} ml) over the ${8 - h} hours left of the first 8` : 'More than the first-8-hour half is in: titrate by urine output']);
      out.push(['Next 16 hours', Math.round(half / 16) + ' ml/hr', 'warn', Math.round(half) + ' ml']);
      out.push(['Urine output target', adult ? fx(0.5 * v.wt) + '\u2013' + fx(v.wt) + ' ml/hr' : fx(v.wt) + ' ml/hr', 'good', adult ? '0.5 to 1 ml/kg/hr (or 30 to 50 ml/hr)' : '1 ml/kg/hr']);
      return {outs:out, verdict:{cls:'stop', h:'Above the threshold: IV fluids and the burns team', p:'Hartmann\'s solution; titrate the rate by urine output, by 10 to 20% at a time (RCH).', href:'#ed-scores--bfx', link:'Open the step'}, gap:'The formulas set the starting rate; the urine output and fluid status set the rest (RCH).'};
    }},
  wtage:{t:'Child: weight from age', g:'kids', src:'Luscombe and Owens, Arch Dis Child 2007', path:'#ed-scores--wtage', kw:'weight estimate estimation age child apls formula resuscitation broselow',
    sub:'Two formulas for ages 1 to 10, when the child cannot be weighed.',
    fields:[['yrs', 'Age', 'years']],
    note:'Luscombe M, Owens B. Arch Dis Child 2007;92:412-5 (abstract): in 17,244 children aged 1 to 10 in a UK emergency department, the formula then in use, 2 \u00d7 (age + 4), underestimated weight by a mean of 18.8%; 3 \u00d7 age + 7 was the most accurate. Weigh the child whenever you can.',
    run(v){
      if (!v.yrs) return null;
      if (v.yrs < 1 || v.yrs > 10) return [['Age', 'Ages 1 to 10 only', 'warn', 'The paper covers 1 to 10 years']];
      return {outs:[['Formula then in use', fx(2 * (v.yrs + 4)) + ' kg', 'warn', '2 \u00d7 (age + 4): underestimated by a mean of 18.8%'], ['Luscombe and Owens', fx(3 * v.yrs + 7) + ' kg', 'good', '3 \u00d7 age + 7: mean underestimate 2.48%']],
        gap:'Both formulas come from British children; weigh the child whenever you can.', links:[['#calc-kids', 'Child doses by weight']]};
    }},
  vitals:{t:'Child: heart and breathing rates by age', g:'kids', src:'Fleming et al., Lancet 2011, Web Tables 4 and 5', path:'#ed-scores--vitals', kw:'fleming centile centiles paediatric infant baby',
    sub:'Where a child\'s heart rate and breathing rate sit among healthy children of the same age band.',
    fields:[{k:'vband', type:'pick', copyVal:true, label:'Age band, as the paper prints them', opts:() => FLEMING_HR.map(r => [r[0], r[0] === 'Birth' ? 'The immediate neonatal period: heart rate only' : r[0].replace(/^(\d+)–(\d+) ([my])$/, (m, a, b, u) => a + ' to ' + b + (u === 'm' ? ' months' : ' years'))])},
      ['vhr', 'Heart rate (optional)', 'beats/min'], ['vrr', 'Breathing rate (optional)', 'breaths/min']],
    note:'Fleming S, et al. Lancet 2011;377:1011-8 (PMC3789232), web appendix p12, Web Tables 4 (breathing rate) and 5 (heart rate): centiles from a systematic review of 69 studies of healthy children from birth to 18 years. The paper does not say which centile makes a rate abnormal; read a rate as part of the whole assessment. Heart rate may be higher with fever or anxiety, and a manual count may underestimate it. The paper gives no blood pressure or SpO2.',
    run(v){
      const hr = v.vband && FLEMING_HR.find(r => r[0] === v.vband);
      if (!hr) return null;
      const rr = FLEMING_RR.find(r => r[0] === v.vband), out = [flemRow('Heart rate', hr)];
      if (v.vhr) out.push(flemAt('Heart rate ' + v.vhr, v.vhr, hr));
      if (rr){ out.push(flemRow('Breathing rate', rr)); if (v.vrr) out.push(flemAt('Breathing rate ' + v.vrr, v.vrr, rr)); }
      else out.push(['Breathing rate', 'No row for birth', 'warn', 'Web Table 4 starts at 0 to 3 months']);
      return {outs:out, verdict:{cls:'next', h:'Where the rate sits among healthy children', p:'The paper does not say which centile makes a rate abnormal. Read the rate with the whole child: heart rate may be higher with fever or anxiety, and a manual count may underestimate it.', href:'#children', link:'Children in the ED'},
        gap:'blood pressure and SpO2, and which centile makes a rate abnormal (Fleming et al., Lancet 2011, Web Tables 4 and 5). The department\'s own paediatric ranges are under Still to confirm.', links:[['#ed-scores--vitals', 'The source and its limits']]};
    }}
};
/* ---- 16 Nov 2026: helpers for the scores built from their own sources ---- */
/* Fleming centiles: a band's row, and where a typed rate sits among its centiles (equal to one: "at") */
const flemRow = (what, r) => [what + ', healthy children (' + r[0] + ')', 'Median ' + r[4], '', FLEMING_C.map((c, i) => c.replace(' centile', '') + ' ' + r[i + 1]).join(' · ')];
function flemAt(label, x, r){
  const c = r.slice(1), n = FLEMING_C, s = i => n[i].replace(' centile', ''), full = i => 'the ' + n[i] + ' (' + c[i] + ')';
  if (x < c[0]) return [label, 'Below the 1st', 'warn', 'Below ' + full(0)];
  if (x > c[6]) return [label, 'Above the 99th', 'warn', 'Above ' + full(6)];
  const i = c.indexOf(x);
  if (i >= 0) return [label, 'At the ' + s(i), '', 'At ' + full(i)];
  const j = c.findIndex(y => y > x);
  return [label, s(j - 1).replace(/^m/, 'M') + ' to ' + s(j), '', 'Between ' + full(j - 1) + ' and ' + full(j)];
}
const nodeHead = n => n ? (n.title || n.q || n.step || '') : '';
/* A score node's band by its own suggest(), the step it leads to, and the verdict that opens it */
function bandOut(id, key, s, cls, label, val, sc, links){
  const n = P[id].nodes[key], i = n.suggest ? n.suggest(s) : 0, o = n.opts[i], e = P[id].nodes[o[1]], c = cls[i];
  return {outs:[[label, val, c, o[0], sc]], verdict:{cls:{good:'ok', warn:'next', bad:'stop'}[c], h:nodeHead(e), p:e && e.end ? (e.items || [])[0] : '', href:`#${id}--${o[1]}`, link:'Open the step'}, gap:e && e.gap, links};
}
/* A rule that fires on any one item: the node's first option when any is ticked, its second for none */
function anyRun(v, k, id, key, label, words, links){
  if (!v[k + '_n'] && !v[k + '_none']) return null;
  const any = v[k + '_n'] > 0, o = P[id].nodes[key].opts[any ? 0 : 1], e = P[id].nodes[o[1]];
  return {outs:[[label, any ? words[0] : words[1], any ? 'bad' : 'good', o[0]]], verdict:{cls:any ? 'stop' : 'ok', h:e.title, p:(e.items || [])[0], href:`#${id}--${o[1]}`, link:'Open the step'}, gap:e.gap, links};
}
/* A table of printed bands (MEWS): one pick per row, the score from the band picked */
function bandsRun(v, k, rows, band, label, cls, id, key, max){
  const got = rows.map((r, i) => v[k + i]);
  if (got.every(x => !x)) return null;
  if (got.some(x => !x)) return [['Still to pick', rows.filter((r, i) => !got[i]).map(r => r[0]).join(', '), 'warn', 'The score adds every row']];
  const s = got.reduce((a, x, i) => a + rows[i][1][+x][1], 0), i = band(s), o = P[id].nodes[key].opts[i], e = P[id].nodes[o[1]];
  return {outs:[[label, s + ' of ' + max, cls[i], o[0]]], verdict:{cls:{good:'ok', warn:'next', bad:'stop'}[cls[i]], h:e.title, p:(e.items || [])[0], href:`#${id}--${o[1]}`, link:'Open the step'}, gap:e.gap};
}
/* The HEART rows of the ACS CPG's Appendix III, read from the entry's own lines: [row, [[points, grade], ...]] */
const heartRows = () => P['acs-cpg'].nodes.heart.info.slice(0, 5).map(l => { const m = l.match(/^([^:(]+)[^:]*: (.*)$/); return [m[1].trim(), m[2].split('; ').map(b => { const x = b.match(/^(.*) (\d)$/); return [x[2], x[1]]; })]; });
/* The score of a value against printed bands such as '\u22648', '9\u201311', '\u226525', '88\u201392, or \u226593 on air' (NEWS2) */
function bandScore(bands, x, o2){
  if (typeof x === 'string' && !/^[\d.]+$/.test(x)){ const b = bands.find(([l]) => l === x); return b ? b[1] : null; }
  const n = +x, hit = part => {
    const m = part.match(/^(.*?)(?: on (air|oxygen))?$/), cond = m[1].trim(), on = m[2];
    if (on && (o2 || 'Air').toLowerCase() !== on) return false;
    let r;
    if ((r = cond.match(/^\u2264([\d.]+)$/))) return n <= +r[1];
    if ((r = cond.match(/^\u2265([\d.]+)$/))) return n >= +r[1];
    if ((r = cond.match(/^([\d.]+)\u2013([\d.]+)$/))) return n >= +r[1] && n <= +r[2];
    return false;
  };
  const b = bands.find(([l]) => l.split(', or ').some(hit));
  return b ? b[1] : null;
}
/* Every number above must still be in the source text: the test checks each of these phrases against the pathway data */
const CALC_FACTS = [
  ['ed-scores', 'heart rate from 59 studies (143,346 children) and breathing rate from 20 (3,881 children)'], ['ed-scores', 'Web Tables 4 and 5, p12'],
  ['paracetamol-overdose', 'Step 1: 200 mg/kg in 500ml D5% over 4 hours, 125 ml/hr'], ['paracetamol-overdose', 'Step 2: 50 mg/kg in 500ml D5% over 8 hours, 62.5 ml/hr'], ['paracetamol-overdose', 'Step 1: 200 mg/kg in 250ml D5% over 4 hours, 62.5 ml/hr'], ['paracetamol-overdose', 'Step 2: 100 mg/kg in 500ml D5% over 16 hours, 31.25 ml/hr'], ['paracetamol-overdose', 'IV NAC 5000mg/25ml per vial'], ['paracetamol-overdose', 'to a ceiling of 110kg'], ['paracetamol-overdose', 'Fluid restriction OR BW < 40kg'],
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
  ['head-injury-cpg', 'In patients with head injury with GCS of ≤8, intubation is recommended for airway protection'],
  /* 16 Nov 2026: the scores built from their own sources (data24.js) */
  ['acs-cpg', 'Appendix IV (p164): the sum of the presence of 7 variables at admission'],
  ['acs-cpg', 'HEART score ≤ 3'],
  ['acs-cpg', 'HEART score > 3'],
  ['head-injury-cpg', 'GCS score <15 at two hours after injury'],
  ['head-injury-cpg', 'Amnesia before impact >30 minutes'],
  ['head-injury-cpg', 'Age >65 years old'],
  ['head-injury-cpg', 'Able to actively rotate neck? 45° left and right'],
  ['head-injury-cpg', 'No posterior midline cervical-spine tenderness'],
  ['vte-cpg', 'PE likely above 4 points; PE unlikely at 4 points or fewer'],
  ['vte-cpg', '["Heart rate over 100 beats/min",1.5]'],
  ['vte-cpg', '["Haemoptysis",1]'],
  ['ed-scores', '["Clinical feature: unilateral weakness",2]'],
  ['ed-scores', '["Duration 10 to 59 min",1]'],
  ['ed-scores', 'score 0 to 3 low risk (2-day stroke risk 1.0%), 4 to 5 moderate (4.1%), 6 to 7 high (8.1%)'],
  ['ed-scores', 'Age 40 years or older'],
  ['ed-scores', 'a gestalt pretest probability under 15%'],
  ['ed-scores', 'SaO2 95% or higher'],
  ['ed-scores', 'cut-off = age × 10 µg/L'],
  ['ed-scores', 'the conventional cut-off of 500 µg/L'],
  ['ed-scores', 'Haematocrit under 30%'],
  ['ed-scores', 'Systolic blood pressure under 90 mm Hg at triage'],
  ['ed-scores', '["Corrected QT interval > 480 ms",2]'],
  ['ed-scores', '["Diagnosis in emergency department: vasovagal syncope",-2]'],
  ['ed-scores', '["Tenderness in right lower quadrant",2]'],
  ['ed-scores', '["Leucocytosis",2]'],
  ['ed-scores', '["Respiratory rate 22/min or greater",1]'],
  ['ed-scores', '["Systolic blood pressure 100 mm Hg or less",1]'],
  ['ed-scores', 'Respiration rate (per minute): ≤8 scores 3; 9–11 scores 1; 12–20 scores 0; 21–24 scores 2; ≥25 scores 3'],
  ['ed-scores', 'Temperature (°C): ≤35.0 scores 3; 35.1–36.0 scores 1; 36.1–38.0 scores 0; 38.1–39.0 scores 1; ≥39.1 scores 2'],
  ['ed-scores', 'Patients with a MEWS of 3 or 4 were transferred to the HDU'],
  ['ed-scores', 'A MEWS score of ≥5 was considered criteria for ICU admission'],
  ['ed-scores', '["Age 75 or over",2]'],
  ['ed-scores', '["Age 65 to 74",1]'],
  ['ed-scores', 'A score of 3 or more indicates high risk'],
  ['ed-scores', 'Patients scoring less than 10 do not usually need additional medication for withdrawal'],
  ['ed-scores', 'maximum possible score 67'],
  ['ed-scores', 'Right arm 9%'],
  ['ed-scores', 'begin fluid resuscitation for burns over 20% TBSA in adults, and over 10% TBSA in children under 16'],
  ['ed-scores', 'RCH modified Parkland: 3 × TBSA% × weight (kg) = ml for the first 24 hours'],
  ['ed-scores', 'children 1 ml/kg/hr; adults 0.5 to 1 ml/kg/hr'],
  ['ed-scores', 'weight (kg) = 2 × (age + 4)'],
  ['ed-scores', 'weight (kg) = 3 × age + 7']
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
/* 16 Nov 2026: links to the calculators built from their own sources */
Object.entries({'acs-cpg':[['#calc-timi', 'TIMI risk score'], ['#calc-heart', 'HEART score']], 'head-injury-cpg':[['#calc-cthr', 'Canadian CT Head Rule'], ['#calc-cspine', 'Canadian C-spine Rule'], ['#calc-nexus', 'NEXUS criteria']],
  'vte-cpg':[['#calc-wellspe', 'Wells score (PE)'], ['#calc-perc', 'PERC rule'], ['#calc-ddimer', 'Age-adjusted D-dimer']], 'xray-guide':[['#calc-ottawa', 'Ottawa rules calculator']], 'stroke-tia':[['#calc-abcd2', 'ABCD2 calculator']],
  syncope:[['#calc-sfsr', 'San Francisco Syncope Rule'], ['#calc-csrs', 'Canadian Syncope Risk Score']], 'abdominal-pain':[['#calc-alvarado', 'Alvarado calculator']], 'abdo-handbook':[['#calc-alvarado', 'Alvarado calculator']],
  'ed-scores':['abcd2', 'sah', 'perc', 'ddimer', 'sfsr', 'csrs', 'alvarado', 'qsofa', 'news2', 'mews', 'chads', 'hasbled', 'ciwa', 'burns', 'wtage', 'vitals'].map(k => ['#calc-' + k, CALCS[k].t]), children:[['#calc-vitals', 'Heart and breathing rates by age']]}).forEach(([id, l]) => { CALC_SEE[id] = [...(CALC_SEE[id] || []), ...l]; });
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
    return `<fieldset class="cf-full"><legend>${esc(f.label)}</legend><div class="pick" role="radiogroup">${optsOf(f).map(([val, t, d, badge]) => `<button type="button" role="radio" data-k="${f.k}" data-pv="${esc(val)}" aria-checked="${x === val}"><b>${esc(badge != null ? badge : val)}</b><span>${esc(t)}${d ? `<small>${esc(d)}</small>` : ''}</span></button>`).join('')}</div></fieldset>`; }
  return '';
}
function renderCalc(){
  const c = CALCS[calcTab], g = CALC_G[c.g], box = $('#calcbox'), {list} = calcVals(calcTab);
  withTiles(box, `<div class="tile ${g.j} tool-h cx-h">${tileMedia(g.k)}<div class="row"><span class="ic">${svg(g.ic)}</span><h2>${esc(c.t)}</h2></div><p>${esc(c.sub)}</p><div class="tags"><span class="tag">${esc(c.src)}</span><span class="tag">${esc(g.t)}</span></div></div>
    <div class="tool-b"><div class="fields">${list.map(f => fieldHTML(calcTab, f)).join('')}</div>${c.sticky ? '<button type="button" class="cx-sticky" id="cxsticky" hidden></button>' : ''}<div class="outs" id="couts" aria-live="polite"></div>
    <p class="calc-note">${esc(c.note)}</p>
    <div class="foot cx-foot">${c.path ? `<a class="pill" href="${c.path}">Open the pathway${svg('chev')}</a>` : ''}<span class="sp"></span>${pinBtnHTML('#calc-' + calcTab, 'sm', true)}<button type="button" class="sm" id="cxcopy">${svg('copy')}<span class="bl">Copy</span></button><button type="button" class="sm" id="cxclear">${svg('restart')}<span class="bl">Clear</span></button></div></div>`);
  calcOut();
  markCxCurrent();
}
let calcLast = null;
let cxVd = '';
function calcOut(){
  const c = CALCS[calcTab], {v, list} = calcVals(calcTab);
  let r = c.run(v);
  if (Array.isArray(r)) r = {outs:r};
  calcLast = r;
  /* a buzz when this calculator's verdict turns to stop (not when a calculator first opens) */
  const vk = calcTab + ':' + (r && r.verdict ? r.verdict.cls + ':' + r.verdict.h : '');
  if (vk !== cxVd && cxVd.startsWith(calcTab + ':') && r && r.verdict && r.verdict.cls === 'stop') buzz('stop');
  cxVd = vk;
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
  list.filter(f => !Array.isArray(f) && (f.type === 'seg' || f.type === 'pick') && v[f.k]).forEach(f => { const o = optsOf(f).find(x => x[0] === v[f.k]); if (o) ins.push(`${f.label}: ${f.type === 'pick' ? (f.copyVal ? o[0] : o[0] + ' ' + o[1]) : o[1]}`); });
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
$('#cxcats').addEventListener('click', e => { const b = e.target.closest('[data-cg]'); if (!b) return; cxGroup = b.dataset.cg; applyCxFilter(); revealList(firstShown('#cxlist .cxsec') || $('#cxempty')); });
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
/* ================= The ED pharmacy drug list (12 Nov 2026, data19.js) =================
   The Emergency Pharmacy's own list as printed, found as you type, with each drug's prescriber category in the MOH
   Medicines Formulary and a link to the formulary's own entry. A category says who may start the prescription
   (MOH Pharmaceutical Services Programme): B and C include medical officers; A/KK, A and A* are for specialists. */
const RX_TIER = c => !c ? 'no' : /^(B|C\+?)$/.test(c) ? 'mo' : 'sp';
const RX_TILE = () => TILE_KEYS.has('pharm') ? 'pharm' : 'doses';
/* Who may start (initiate) the prescription, as the MOH Pharmaceutical Services Programme's MOHMF page defines each category */
const RX_DEF = {'A*':'consultants and specialists, for specific indications only', 'A':'consultants and specialists', 'A/KK':'consultants, specialists and family medicine specialists', 'B':'medical officers, as well as specialists', 'C':'paramedics and medical officers, as well as specialists', 'C+':'paramedics doing midwifery too'};
const rxGeneric = t => t.split(/\s(?=\d)|,\s|\s&\s|\s\(/)[0].trim();
let rxF = 'all';
function renderRx(){
  if (typeof EDRX === 'undefined') return;
  const q = ($('#rxq').value || '').trim().toLowerCase(), all = EDRX.items, cnt = t => all.filter(i => RX_TIER(i[2]) === t).length;
  $('#rxf').innerHTML = [['all', 'All'], ['mo', 'MO may start'], ['sp', 'Specialist categories'], ['no', 'Not in the formulary']].map(([k, t]) => `<button type="button" data-rf="${k}" aria-pressed="${rxF === k}">${t} <span class="n">${k === 'all' ? all.length : cnt(k)}</span></button>`).join('');
  const hits = all.filter(i => (rxF === 'all' || RX_TIER(i[2]) === rxF) && (!q || i[1].toLowerCase().includes(q)));
  const L0 = i => i[1][0].toUpperCase(), letters = [...new Set(hits.map(L0))];
  $('#rxaz').innerHTML = hits.length > 12 ? letters.map(L => `<button type="button" data-rl="${L}" aria-label="Drugs starting with ${L}">${L}</button>`).join('') : '';
  $('#rxn').textContent = q || rxF !== 'all' ? `${hits.length} of ${all.length} drugs` : `${all.length} drugs, in the list's own order`;
  const re = q ? new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig') : null;
  const hl = s => re ? s.split(re).map((x, k) => k % 2 ? `<mark>${esc(x)}</mark>` : esc(x)).join('') : esc(s);
  const tip = c => !c ? 'Not found in the formulary\'s public list at this strength or form' : `MOH formulary category ${c}${RX_DEF[c] ? ': ' + RX_DEF[c] : ', by indication'}`;
  $('#rxl').innerHTML = hits.length ? letters.map(L => `<section class="phx-g" id="rx-${L}"><h2>${L}</h2><ul class="phx-l">${hits.filter(i => L0(i) === L).map(([n, t, c, u, note]) => `<li class="phx" data-rxn="${n}"><span class="phx-t"><b>${hl(t)}</b>${note ? `<small>${esc(note)}</small>` : ''}${typeof EDRX_LASA !== 'undefined' && EDRX_LASA[n] ? `<small class="phx-lasa">${svg('flag')}Look-alike sound-alike with ${esc(all.find(i => i[0] === EDRX_LASA[n])[1])} (the Emergency Pharmacy's top 10, 20 Aug 2026)</small>` : ''}</span><span class="phx-b ${RX_TIER(c)}" title="${esc(tip(c))}"><span class="vh">${esc(tip(c))}. </span><span aria-hidden="true">${c ? esc(c) : '·'}</span></span>${u ? `<a class="phx-go" href="${esc(u)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(t)} in the MOH formulary">${svg('ext')}</a>` : '<span aria-hidden="true"></span>'}</li>`).join('')}</ul></section>`).join('')
    : '<p class="empty">No drug on the ED pharmacy\'s list of 14 Apr 2025 matches. Ask the pharmacy, or check the MOH formulary.</p>';
}
function renderRxStatic(){
  if (typeof EDRX === 'undefined') return;
  const all = EDRX.items, n = all.filter(i => i[2]).length;
  withTiles($('#rxhero'), `${tileMedia(RX_TILE())}<span class="lbl">Jabatan Farmasi HKL · 14 Apr 2025</span><h2>${all.length} drugs on the ED list</h2><p>${n} with their MOH formulary category. Tap ${svg('ext')} for the formulary's own entry.</p>`);
  $('#rxcats').innerHTML = `<div class="phx-c"><b><span class="phx-b mo">B · C</span>MO may start</b>B: medical officers and specialists. C and C+: paramedics too.</div>
    <div class="phx-c"><b><span class="phx-b sp">A/KK · A</span>Specialist</b>A/KK: consultants, specialists and family medicine specialists. A: consultants and specialists. A*: specialists, for specific indications only.</div>
    <div class="phx-c"><b><span class="phx-b no">·</span>Not found</b>Not in the formulary's public list at the strength or form printed here.</div>`;
  $('#rxsrc').innerHTML = `Source: ${esc(EDRX.src)}, a department document: ${all.length} drugs, names and strengths as printed. Categories: the <a href="https://pharmacy.moh.gov.my/en/documents/ministry-health-medicines-formulary-mohmf.html" target="_blank" rel="noopener noreferrer">MOH Medicines Formulary</a> (who may start a prescription), matched by name and strength in its MyFormulary data of 5 Nov 2026; where the formulary prints a different form or strength, the drug says so. The formulary is the authority: open its entry before you prescribe. Indications and doses are not copied here.`;
}
function renderToolsRx(){
  if (typeof EDRX === 'undefined' || !$('#trx')) return;
  const all = EDRX.items, c = t => all.filter(i => RX_TIER(i[2]) === t).length;
  withTiles($('#trx'), `${tileMedia(RX_TILE())}<div class="row"><span class="ic">${svg('pill')}</span><h2>ED pharmacy drug list</h2><span class="tag">${all.length}</span></div><p>Is it on the Emergency Pharmacy's list, and who may start it? The list of 14 Apr 2025, with the MOH formulary categories.</p><ul class="gl"><li><span>MO may start</span><b>${c('mo')}</b></li><li><span>Specialist</span><b>${c('sp')}</b></li><li><span>Not found</span><b>${c('no')}</b></li></ul><span class="go-l">Open the list${svg('chev')}</span>`);
}
/* ================= The ED dosing and dilution guide (12 Nov 2026, data21.js) =================
   An index of the department's guide (3rd ed., Jan 2026): find a drug, open its own pages as printed. The doses are read from
   the pages, never retyped. "High alert" marks a drug on the hospital's 2026 list. */
let dgF = 'all';
const DG_TILE = () => TILE_KEYS.has('dilute') || STILL_KEYS.has('dilute') ? 'dilute' : TILE_KEYS.has('prescr') ? 'prescr' : 'doses';
/* The claude.ai artifact holds at most 511 files, so the guide's 227 pages are not among them (Krishna, 12 Nov 2026: "Yes,
   publish", with its pages opening the web app's copies). There each page opens from the web app in a new tab; the artifact
   cannot show another site's picture in its own viewer. A let, so the test can try it. */
let DG_REMOTE = /(^|\.)claude\.ai$|claudeusercontent\.com$/.test(location.hostname);
function renderDg(){
  if (typeof EDDG === 'undefined') return;
  const q = ($('#dgq').value || '').trim().toLowerCase(), all = EDDG.items;
  $('#dgf').innerHTML = [['all', 'All', all.length], ['ham', 'High alert', all.filter(i => i[6]).length]].map(([k, t, n]) => `<button type="button" data-df="${k}" aria-pressed="${dgF === k}">${t} <span class="n">${n}</span></button>`).join('');
  const hits = all.filter(i => (dgF === 'all' || i[6]) && (!q || i[1].toLowerCase().includes(q)));
  const L0 = i => i[1].replace(/^[^A-Za-z]+/, '')[0].toUpperCase(), letters = [...new Set(hits.map(L0))];
  $('#dgaz').innerHTML = hits.length > 12 ? letters.map(L => `<button type="button" data-dl="${L}" aria-label="Drugs starting with ${L}">${L}</button>`).join('') : '';
  $('#dgn').textContent = q || dgF !== 'all' ? `${hits.length} of ${all.length} drugs` : `${all.length} drugs, in the guide's own order`;
  const re = q ? new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig') : null;
  const hl = s => re ? s.split(re).map((x, k) => k % 2 ? `<mark>${esc(x)}</mark>` : esc(x)).join('') : esc(s);
  const pills = ([n, t, a, b, pa, pb]) => Array.from({length:b - a + 1}, (_, k) => a + k).map((pg, k) => DG_REMOTE
    ? `<a class="pill" href="${APP_URL}sp/c17-p${pg}.webp" target="_blank" rel="noopener noreferrer" aria-label="${esc(t + ', page ' + (pg - 8) + ', opens from the web app')}">${svg('poster')}p ${pg - 8}${svg('ext')}</a>`
    : `<button type="button" class="pill" data-ppage="sp/c17-p${pg}" data-pname="${esc(t + ' · page ' + (pg - 8))}">${svg('poster')}p ${pg - 8}</button>`).join('');
  $('#dgl').innerHTML = hits.length ? letters.map(L => `<section class="phx-g" id="dg-${L}"><h2>${L}</h2><ul class="phx-l">${hits.filter(i => L0(i) === L).map(i => `<li class="phx dg" data-dgn="${i[0]}"><span class="phx-t"><b>${hl(i[1])}</b>${i[6] ? `<small class="phx-lasa">${svg('flag')}On the hospital's high alert list (2026)</small>` : ''}${EDDG.notes && EDDG.notes[i[0]] ? `<small class="phx-lasa dg-note">${svg('info')}${esc(EDDG.notes[i[0]])}</small>` : ''}<span class="dg-p">${pills(i)}</span></span></li>`).join('')}</ul></section>`).join('')
    : '<p class="empty">No drug in the guide matches. Try its generic name.</p>';
}
function renderDgStatic(){
  if (typeof EDDG === 'undefined') return;
  withTiles($('#dghero'), `${tileMedia(DG_TILE())}<span class="lbl">ETD HKL · 3rd edition · Jan 2026</span><h2>${EDDG.items.length} injectable drugs</h2><p>Each opens the guide's own pages: dose, dilution, rate, nursing notes and Y-site compatibility.</p>`);
  /* Special case (Krishna, 12 Nov 2026): the general ICU's own guide, described in the guide's own words; none of its entries copied */
  if ($('#dgicu') && typeof MEMOS !== 'undefined' && MEMOS.c16) $('#dgicu').innerHTML = `<h2 id="h-dgicu"><span class="dg-icu-k">Special case</span>A patient in the general ICU</h2>
    <ul class="dg-icu-l"><li>The general ICU has its own dilution guide: the Adult GICU Dilution Guide (HKL), 5th edition, April 2026, next review April 2031, prepared by pharmacists with the agreement of the ICU's consultant intensivists.</li>
    <li>Its entries marked † are departures agreed with the intensivist in charge, so they apply only in that ICU.</li>
    <li>It draws on the manufacturers' product information and other references, among them the MOH Dilution Guide for Fluid-Restricted Critically Ill Adults (2024).</li>
    <li>The guide above is the department's own, for the ED. The GICU guide opens only with an MOH sign-in, from the Farmasi HKL page.</li></ul>${memoHTML('c16')}`;
  $('#dgsrc').innerHTML = `Source: ${esc(EDDG.src)}, Pharmacy Department HKL, reviewed by the department's emergency physicians; shared on the Farmasi HKL page. In the guide with the department's authorisation (12 Nov 2026). Its pages are shown as printed, with the names and contact numbers of two pharmacists (pages 69, 123, 211 and 223) and the names on the NAC forms (pages 133 and 134) covered. "High alert" marks a drug on the hospital's List of High Alert Medications (2026); the guide's own red badge on its pages differs in places (it marks dextrose 20%, diazepam and phenobarbital, which the list does not name, and not potassium dihydrogen phosphate or sodium bicarbonate 8.4%, which the list does). The guide's own disclaimer: it is for trained staff of the department; check the dose before you give it.${DG_REMOTE ? ' In this copy each page opens from the web app, in a new tab.' : ''}`;
}
function renderToolsDg(){
  if (typeof EDDG === 'undefined' || !$('#tdg')) return;
  withTiles($('#tdg'), `${tileMedia(DG_TILE())}<div class="row"><span class="ic">${svg('syringe')}</span><h2>ED dosing and dilution guide</h2><span class="tag">${EDDG.items.length}</span></div><p>The department's guide to injectable drugs, 3rd edition, January 2026: find a drug, open its pages.</p><ul class="gl"><li><span>Drugs</span><b>${EDDG.items.length}</b></li><li><span>High alert</span><b>${EDDG.items.filter(i => i[6]).length}</b></li></ul><span class="go-l">Open the guide${svg('chev')}</span>`);
}
/* ================= The ED antimicrobial guides (21 Nov 2026, data27.js from src/abx.js) =================
   The department's two quick guides, 2nd edition, February 2024: reconstitution, dilution and rate for 25 injectable
   antimicrobials, and adult doses with the dose for each band of kidney function. Every cell as printed. Type a CrCl and the
   bands the guide prints for it are marked; the page never rounds into a band and never picks a weight (the guide defines obese
   two ways), and nothing typed is stored. */
let abF = 'all';
const AB_TILE = () => TILE_KEYS.has('infect') ? 'infect' : 'doses';
/* A printed band's own numbers: "31-50 ml/min", "> 60", "<10 ml/min & regular HD", "CrCl >40ml/min", "Normal or CrCl >50 ml/min" */
function abIn(band, x){
  const t = String(band).split('\n')[0];
  let m = /(\d+)\s*[-–]\s*(\d+)/.exec(t); if (m) return x >= +m[1] && x <= +m[2];
  m = />\s*(\d+)/.exec(t); if (m) return x > +m[1];
  m = /<\s*(\d+)/.exec(t); if (m) return x < +m[1];
  return false;
}
const abLines = s => esc(s).replace(/\n/g, ' <br>');
function abCr(){ const v = parseFloat(($('#abcr') && $('#abcr').value || '').replace(',', '.')); return isFinite(v) && v >= 0 && v <= 400 ? v : null; }
function renderAb(){
  if (typeof ABX === 'undefined' || !$('#abl')) return;
  const q = ($('#abq').value || '').trim().toLowerCase(), x = abCr(), D = ABX.dose;
  const hit = (...s) => !q || s.some(v => String(v).toLowerCase().includes(q));
  const re = q ? new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig') : null;
  const hl = s => re ? String(s).split(re).map((v, k) => k % 2 ? `<mark>${esc(v)}</mark>` : esc(v)).join('') : esc(s);
  const nOf = {renal:D.renal.rows.length + 2, none:D.none.length, dil:ABX.dil.rows.length};
  $('#abf').innerHTML = [['all', 'All'], ['renal', 'Kidney function'], ['none', 'No renal change'], ['dil', 'Dilution and rate']].map(([k, t]) => `<button type="button" data-abf="${k}" aria-pressed="${abF === k}">${t}${k === 'all' ? '' : ` <span class="n">${nOf[k]}</span>`}</button>`).join('');
  const gapMsg = (bands, usual) => x === null ? '' : bands.some(b => abIn(b, x)) ? '' : `<p class="ab-gap">${svg('info')}<span>${usual && x > 50 ? `No printed band covers ${x} ml/min: the usual dose column prints no CrCl.` : `${x} ml/min falls between the printed bands.`}</span></p>`;
  const band = (h, v, on, cls) => `<div class="ab-b${on ? ' on' : ''}${cls ? ' ' + cls : ''}"><dt>${abLines(h)}</dt> <dd>${abLines(v)}</dd></div> `;
  const S = [];
  if (abF === 'all' || abF === 'renal'){
    const rows = D.renal.rows.filter(r => hit(r[0], r[6]));
    const g = hit('gentamicin', 'endocarditis') ? D.gent : null, v = hit('vancomycin') ? D.vanc : null;
    if (rows.length || g || v) S.push(`<section class="phx-g ab-sec" id="ab-renal"><h2>Dose by kidney function</h2><ul class="phx-l">` + rows.map(r => {
      const own = /^Piperacillin/i.test(r[6]), heads = own ? [r[2], r[3], r[4]].map(c => c.split('\n')[0]) : D.renal.head.slice(1);
      const vals = own ? [r[2], r[3], r[4]].map(c => c.split('\n').slice(1).join('\n')) : [r[2], r[3], r[4]];
      return `<li class="ab-r" data-abn="${esc(r[6])}"><b class="ab-n">${hl(r[0])}</b> <dl class="ab-bands">${band('Usual dose', r[1], false, 'usual')}${heads.map((h, k) => band(h + (own ? '' : ''), vals[k], x !== null && abIn(h, x))).join('')}</dl>`
        + (r[7] ? `<p class="ab-note">${esc(r[7])}</p>` : '') + (/merged cell/.test(r[5]) ? `<p class="ab-note">As printed: ${esc(r[5].replace(/ are one merged cell| is one merged cell/, ' share one cell').replace(/all three renal columns share one cell/, 'the three bands share one cell'))}.</p>` : '') + gapMsg(heads, true) + '</li> ';
    }).join('')
      + (g ? `<li class="ab-r" data-abn="Gentamicin"><b class="ab-n">${esc(g.title)}</b> <dl class="ab-bands">${g.rows.map(([h, d]) => band('CrCl ' + h, d, x !== null && abIn(h, x))).join('')}</dl><p class="ab-note">${esc(g.foot)}</p><ul class="ab-tdm">${g.tdm.map(t => `<li>${esc(t)}</li>`).join('')}</ul>${x !== null && g.rows.filter(([h]) => abIn(h, x)).length > 1 ? `<p class="ab-gap">${svg('info')}<span>The printed bands share their ends: ${x} ml/min sits in two of them.</span></p>` : gapMsg(g.rows.map(r => r[0]))}</li>` : '')
      + (v ? `<li class="ab-r" data-abn="Vancomycin"><b class="ab-n">${esc(v.title)}</b> <dl class="ab-bands">${v.rows.map(([h, d, t]) => band(h, d + '\n\nFirst levels: ' + t.replace(/▪\s*/g, '').replace(/\n/g, '; '), x !== null && abIn(h, x))).join('')}</dl><p class="ab-note">Dose by actual body weight (ABW), as printed.</p>${gapMsg(v.rows.map(r => r[0]).filter(h => /\d/.test(h)))}</li>` : '')
      + '</ul></section>');
  }
  if (abF === 'all' || abF === 'none'){
    const rows = D.none.filter(r => hit(r[0], r[3]));
    if (rows.length) S.push(`<section class="phx-g ab-sec" id="ab-none"><h2>No change with kidney function</h2><ul class="phx-l">` + rows.map(r => `<li class="ab-r" data-abn="${esc(r[3])}"><b class="ab-n">${hl(r[0])}</b> <dl class="ab-bands">${band('Usual dose', r[1], false, 'usual')}${r[2] ? band('Notes', r[2], false, 'usual') : ''}</dl></li>`).join('') + '</ul></section>');
  }
  if (abF === 'all' || abF === 'dil'){
    const rows = ABX.dil.rows.filter(r => hit(r[1], r[4]));
    if (rows.length) S.push(`<section class="phx-g ab-sec" id="ab-dil"><h2>Reconstitution, dilution and rate</h2><ul class="phx-l">` + rows.map(r => `<li class="ab-r ab-d" data-abn="${esc(r[4])}"><b class="ab-n">${hl(r[1])}</b> <dl class="ab-bands">${band('Reconstitution and dilution', r[2], false, 'usual')}${band('Rate', r[3], false, 'usual')}</dl>${r[5] ? `<p class="ab-note">${esc(r[5])}</p>` : ''}</li>`).join('') + `</ul><p class="ab-note">${esc(ABX.dil.foot)}</p></section>`);
  }
  $('#abn').textContent = x !== null ? `CrCl ${x} ml/min: the printed bands that cover it are marked.` : 'Type a CrCl to mark the printed band for it.';
  $('#abl').innerHTML = S.join('') || '<p class="empty">No antimicrobial in the two guides matches. Try its generic name, or the ED dosing and dilution guide.</p>';
}
function renderAbStatic(){
  if (typeof ABX === 'undefined' || !$('#abhero')) return;
  const D = ABX.dose;
  withTiles($('#abhero'), `${tileMedia(AB_TILE())}<span class="lbl">ETD HKL · 2nd edition · Feb 2024</span><h2>${D.renal.rows.length + D.none.length + 2} antimicrobials</h2><p>Doses by kidney function, and how to reconstitute, dilute and give ${ABX.dil.rows.length} injectables.</p>`);
  $('#abcg').innerHTML = `<summary>${svg('calc')}<span>How the guide works out CrCl</span></summary><div class="ab-cgb"><p class="ab-k">Cockcroft-Gault, as printed</p><ul>${D.cg.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
    <p class="ab-k">Which weight</p><ul>${D.wnotes.map(l => `<li>${esc(l)}</li>`).join('')}</ul><ul>${D.weights.map(([d, f]) => `<li><b>${esc(d)}</b>: ${abLines(f)}</li>`).join('')}</ul>
    <p class="ab-note">${esc(D.obese)} The guide does not say which to use, so this page leaves the weight to you and marks only the band for the CrCl you type.</p>
    <p><a class="pill" href="#calc-crcl">${svg('calc')}CrCl calculator (CKD CPG)</a></p></div>`;
  $('#absrc').innerHTML = (typeof MEMOS !== 'undefined' && MEMOS['abx-dose'] ? memoHTML('abx-dose') + memoHTML('abx-dil') : '')
    + `<p class="lk-note">Sources: ${esc(D.src)}; ${esc(ABX.dil.src)}. Prepared by the department's clinical (EM) pharmacists and approved for use by the head of department on 8 Feb 2024: department documents (standing rule 6), every cell as printed. Whether the 2nd edition is still current is under Still to confirm. Nothing you type here is stored.</p>`;
}
function renderToolsAb(){
  if (typeof ABX === 'undefined' || !$('#tabx')) return;
  const D = ABX.dose;
  withTiles($('#tabx'), `${tileMedia(AB_TILE())}<div class="row"><span class="ic">${svg('pill')}</span><h2>ED antimicrobial guides</h2><span class="tag">${D.renal.rows.length + D.none.length + 2}</span></div><p>The department's quick guides, February 2024: the dose for each band of kidney function, and how to give each injectable.</p><ul class="gl"><li><span>By kidney function</span><b>${D.renal.rows.length + 2}</b></li><li><span>Injectables</span><b>${ABX.dil.rows.length}</b></li></ul>`);
}

function renderToolsLinks(){
  withTiles($('#tlk'), `${tileMedia('links')}<div class="row"><span class="ic">${svg('link')}</span><h2>ED links</h2><span class="tag">${LINKS.reduce((a, g) => a + g.items.length, 0)}</span></div><p>The department's forms, hospital systems and folders, from the ETD HKL link page.</p><ul class="gl">${LINKS.map(g => `<li><span>${esc(g.h)}</span><b>${g.items.length}</b></li>`).join('')}</ul>`);
  /* Reading X-rays (11 Nov 2026): the tile lists the films from the guide's own start menu, so it never drifts from the entry */
  const xg = P['xray-guide'], xt = $('#txr');
  if (xt){
    const films = xg && xg.nodes[xg.start] && xg.nodes[xg.start].opts ? xg.nodes[xg.start].opts.map(o => o[0]) : [];
    xt.hidden = !films.length;
    if (films.length) withTiles(xt, `${tileMedia('injury')}<div class="row"><span class="ic">${svg('bone')}</span><h2>Reading X-rays</h2><span class="tag">${films.length} films</span></div><p>One check at a time for the films you read alone, with the rules for when to X-ray. In the guide's own words, from named sources.</p><ul class="gl">${films.slice(0, 6).map(f => `<li><span>${esc(f)}</span></li>`).join('')}</ul><span class="go-l">Open the guide${svg('chev')}</span>`);
  }
}

/* ================= Journey: looping clips and narration ================= */
let step = 0, playAll = false, stageVisible = false, clipsOn = false;
const voice = new Audio(); voice.preload = 'none';
/* The journey's pictures (about 290 KB for the five stops) load only once its page is shown, not on every first visit
   (23 Nov 2026): a phone on mobile data that never opens the journey never fetches them. On the first showing the
   other stops' pictures are fetched too, so moving between stops stays instant. */
let jSeen = false;
function journeySeen(){
  if (jSeen) return; jSeen = true;
  const v = $('#jclip'); if (v && v.dataset.poster){ v.setAttribute('poster', v.dataset.poster); v.removeAttribute('data-poster'); }
  JOURNEY.forEach(s => { const im = new Image(); im.src = s.img; });
}
function renderJourney(anim){
  const js = $('#jspin'); if (js && !js.firstChild) js.innerHTML = spinHTML('route');
  $('#rail').innerHTML = JOURNEY.map((s, i) => `<li><button type="button" class="${s.optional ? 'maybe' : ''}" data-i="${i}" ${i === step ? 'aria-current="step"' : ''} aria-label="Stop ${i + 1}: ${esc(s.short)}${s.optional ? ', only if needed' : ''}"><span class="n">${svg(s.ic)}</span><b>${esc(s.short)}</b><small>${esc(s.sub)}</small></button></li>`).join('');
  const s = JOURNEY[step], stage = $('#stage');
  const nc = s.note && s.note.c ? ` style="--c:var(--${s.note.c});--cs:var(--${s.note.c}-soft)"` : '';
  stage.innerHTML = `<figure><video id="jclip" muted loop playsinline preload="none" ${jSeen ? `poster="${s.img}"` : `data-poster="${s.img}"`} width="1280" height="720" aria-label="${esc(s.alt)}"></video>
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
/* Set by setupTour: tourOpen when the tour is shown, tourTheme when the colours change */
let tourTheme = () => {}, tourOpen = () => {};
function pauseTour(){ const v = $('#vid'); if (v && !v.paused) v.pause(); }
function setupTour(){
  const v = $('#vid'); let retried = false, lastSave = 0, lastLn = -1, lastCh = -1;
  /* armed: the tour has been opened, so its film may go in. shown: the film in the player (still that film while a whole
     copy plays from a blob after an error). startAt: the place to go back to when the film next loads */
  let armed = false, shown = '', startAt = 0;
  let L = store.get('gz-tour-lang', 'en'); if (!TOUR_LANGS[L]) L = 'en';
  const sp = $('#speeds');
  [0.75, 1, 1.25, 1.5].forEach(r => sp.insertAdjacentHTML('beforeend', `<button type="button" data-rate="${r}" aria-pressed="${r === 1}">${r}×</button>`));
  /* The film for this language and these colours. Its cover and its film go in only once the tour has opened (the cover
     went in at once until 23 Nov 2026: 30 KB on every first visit, for a page most visits never open), and
     never with load(): Chrome treats a call to load() as overriding preload="none" and downloads the film (Chrome 157,
     10 Nov 2026: the first 26 seconds, about 1 MB, on a first visit with no tap). With src alone, nothing downloads until
     play, a chapter, a line of the transcript or Resume. */
  const putFilm = () => {
    const f = film(TOUR_LANGS[L]);
    v.dataset.cover = f.cover; /* the cover chosen (no download) */
    if (armed && v.getAttribute('poster') !== f.cover) v.setAttribute('poster', f.cover);
    startAt = 0;
    if (armed){ shown = f.src; retried = false; $('#vmsg').hidden = true; v.src = f.src; }
  };
  /* Draw the chosen language, with its film */
  const drawLang = () => {
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
    v.pause(); putFilm();
  };
  drawLang();
  tourOpen = () => { if (!armed){ armed = true; putFilm(); } };
  /* Day or night changed: swap to the matching film, keeping the place and, if it was playing, playing on. A paused film
     swaps without downloading; it goes back to its place when it next plays. */
  tourTheme = () => {
    if (!armed){ putFilm(); return; }
    if (shown === film(TOUR_LANGS[L]).src) return;
    const t = v.currentTime || 0, playing = !v.paused && !v.ended, back = t > .5 && !v.ended;
    putFilm(); if (back) startAt = t;
    if (playing) v.play().catch(() => {});
  };
  v.addEventListener('loadedmetadata', () => { if (startAt){ try { v.currentTime = startAt; } catch(e){} startAt = 0; } });
  const seek = t => { tourOpen(); const goTo = () => { try { v.currentTime = t; } catch(e){} v.play().catch(() => {}); }; if (v.readyState >= 1) goTo(); else { v.addEventListener('loadedmetadata', goTo, {once:true}); v.load(); } };
  $('#tourbox').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.lang){ if (b.dataset.lang !== L && TOUR_LANGS[b.dataset.lang]){ L = b.dataset.lang; store.set('gz-tour-lang', L); drawLang(); } }
    else if (b.dataset.rate){ v.playbackRate = v.defaultPlaybackRate = +b.dataset.rate; $$('#speeds [data-rate]').forEach(x => x.setAttribute('aria-pressed', x === b)); }
    else if (b.dataset.t !== undefined){ seek(+b.dataset.t); if (b.id === 'resume') b.remove(); }
  });
  v.addEventListener('timeupdate', () => {
    /* A new src first resets the time to 0, before the film has loaded: that keeps the lit chapter and line, and must not
       wipe the saved place */
    if (!v.readyState) return;
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
      <h2 id="h-intro">${esc(s.h)}</h2><p>${esc(s.p.replace('{calcs}', Object.keys(CALCS).length).replace('{nums}', NUMS.length))}</p>
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
  let h = `<div class="stats"><div class="tile t-sapphire"><b>${newIds}</b><span>entries marked New: rules, protocols, guidelines and the starter pack</span></div><div class="tile t-plum"><b>${upd}</b><span>pathways with department notes or updates</span></div><div class="tile t-teal"><b>${V7.length}</b><span>documents added in version 7 from the triage course folder</span></div><div class="tile t-obsidian"><b>31</b><span>MO Drive subfolders read, plus 2 files; ${count('unreadable')} could not be read</span></div></div>`;
  h += `<details class="dgrp" open><summary>Since version 8 (8 Nov 2026), newest first <small>${V8.length}</small></summary><ul class="drows">${V8.map(row).join('')}</ul></details>`;
  h += `<details class="dgrp" open><summary>New in version 7: the triage course folder <small>${V7.length}</small></summary><ul class="drows">${V7.map(row).join('')}</ul></details>`;
  h += DRIVE_GROUPS.map(([k, t, open]) => {
    const rows = DRIVE.filter(d => d[1] === k); if (!rows.length) return '';
    return `<details class="dgrp"${open ? ' open' : ''}><summary>MO Drive: ${t} <small>${rows.length}</small></summary><ul class="drows">${rows.map(([f, , txt, links]) => row([f, txt, links])).join('')}</ul></details>`;
  }).join('');
  h += `<div class="confirm tile t-champagne"><h2>Still to confirm</h2><ol>${CONFIRM.map(c => `<li>${esc(c)}</li>`).join('')}</ol></div>`;
  $('#drive').innerHTML = h;
}

/* Banners for What's new, Sources and about, and the wall poster (the 12 Nov 2026 review): a Flow Studio loop in the style of
   the on-shift lists' banners, each falling back to an existing picture if its own is missing */
function renderViewHeroes(){
  const hero = (sel, key, alt, lbl, h, p) => { const el = $(sel); if (el) withTiles(el, `${tileMedia(TILE_KEYS.has(key) || STILL_KEYS.has(key) ? key : alt)}<span class="lbl">${lbl}</span><h2>${h}</h2><p>${p}</p>`); };
  const ebook = Object.values(P).filter(x => !x.grp).length, cpg = Object.values(P).filter(x => x.grp === 'cpg').length;
  hero('#newhero', 'whatsnew', 'intro', 'Since 8 Nov 2026', `${V8.length} rounds since version 8`, `Newest first, then the MO Drive and the triage course, and ${CONFIRM.length} points still to confirm with the department.`);
  hero('#abouthero', 'sources', 'paths', 'Where every line comes from', 'The ebook first', `${ebook} ebook pathways as written, ${cpg} national guidelines, and the department\'s own memos, lists and notes, each with its source and date.`);
  hero('#posterhero', 'poster', 'flow', 'Two A3 sheets', 'The wall poster', 'The patient\'s route, the rules and the numbers on one wall, with the code that opens the guide.');
}

/* ================= Sources and about ================= */
function renderAbout(){
  const lst = ids => ids.map(id => `<a href="#${id}">${esc(P[id].title)}</a>${P[id].src ? ' · ' + esc(P[id].src) : ''}`);
  const panel = (k, h, p, items) => `<section class="panel"><h2>${h}</h2><p class="src-k">${k}</p><p>${p}</p>${items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}</section>`;
  $('#srcs').innerHTML = [
    panel('Approved source', 'The ebook', '<i>The Clinical Pathway in Emergency for Medical Officer</i>, Emergency &amp; Trauma Department, Hospital Kuala Lumpur (2025). The 23 pathways are built as written, and page numbers refer to that edition.', ['Outcome colours follow the ebook\'s boxes: red admit, green discharge, yellow observation, blue discharge advice', 'Department notes on a pathway are labelled as not in the ebook, with their source']),
    panel('Department notes', 'Green Zone flow and referrals', 'Memos, SOPs and flow charts from the department. Each entry names its source and date.', lst(FLOW_IDS)),
    panel('MO Drive, department memos and the starter pack', 'Department protocols', 'From the MO Drive (read in full on 7 Nov 2026), the department\'s memos, the triage course and the HKL doctors starter pack. Each entry names its source and date; what went in, what did not and why is listed under What\'s new.', lst(PROT_IDS)),
    panel('National guidelines and named sources', 'Guidelines, handbook and the X-ray guide', 'National CPGs quoted as printed with their page and acknowledgement, or summarised in the guide\'s own words where their copyright gives no permission; a teaching handbook checked against its sources; and Reading X-rays from named online sources. None replaces the ebook: where they differ is under Still to confirm.', Object.keys(P).filter(id => P[id].grp === 'cpg').map(id => `<a href="#${id}">${esc(P[id].title)}</a>${P[id].src ? ' · ' + esc(P[id].src) : ''}`)),
    panel('Department lists', 'Drug lists and the dilution guide', 'The Emergency Pharmacy\'s drug list (14 Apr 2025) with the MOH formulary categories, and the department\'s dosing and dilution guide (3rd edition, January 2026), each shown as printed.', ['<a href="#pharmacy">ED pharmacy drug list</a>', '<a href="#dilution">ED dosing and dilution guide</a>']),
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
  $('#lb').setAttribute('aria-label', 'Poster sheet');
  $('#lbimg').src = sheetSrc(i, false);
  $('#lbimg').alt = i === 1 ? 'Poster sheet 1: patient flow, three rules to keep, four more rules and numbers to know' : 'Poster sheet 2: the 23 pathways, EMACC follow-up, Asthma Zone flow and referrals';
  $('#lbt').textContent = i === 1 ? 'Sheet 1 · Patient flow (A3)' : 'Sheet 2 · Pathways and referrals (A3)';
  $('#lbs').classList.remove('zoom'); $('#lbzoom').textContent = 'Zoom in';
  $('#lb').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#lbs').scrollTo(0, 0); $('#lbclose').focus();
}
/* The ebook's own pages, as printed (12 Nov 2026, at Krishna's request): each ebook pathway has a Printed pages tab whose
   buttons open that page in the same full-size viewer. The images (ebook/pNN.webp, pages 5 to 63) load only on a tap. */
const ebookPages = p => { if (p.grp || !p.page) return []; const m = String(p.page).match(/^(\d+)(?:\D+(\d+))?$/); if (!m) return []; const a = +m[1], b = +(m[2] || m[1]); return Array.from({length:b - a + 1}, (_, i) => a + i); };
function openEbookPage(n){
  lbFrom = document.activeElement; lbI = 0;
  $('#lbimg').src = `ebook/p${String(n).padStart(2, '0')}.webp`;
  $('#lbimg').alt = `Page ${n} of the ebook, as printed`;
  $('#lbt').textContent = `Ebook · page ${n}`;
  $('#lb').setAttribute('aria-label', 'Ebook page');
  $('#lbs').classList.remove('zoom'); $('#lbzoom').textContent = 'Zoom in';
  $('#lb').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#lbs').scrollTo(0, 0); $('#lbclose').focus();
}
document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('[data-epage]'); if (b) openEbookPage(+b.dataset.epage); });
function openPageImg(src, name){
  lbFrom = document.activeElement; lbI = 0;
  $('#lbimg').src = src + '.webp'; $('#lbimg').alt = name + ', as printed';
  $('#lbt').textContent = name; $('#lb').setAttribute('aria-label', 'Printed page');
  $('#lbs').classList.remove('zoom'); $('#lbzoom').textContent = 'Zoom in';
  $('#lb').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#lbs').scrollTo(0, 0); $('#lbclose').focus();
}
document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('[data-ppage]'); if (b) openPageImg(b.dataset.ppage, b.dataset.pname); });
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
  tiles: store.get('gz-tiles', REDUCED || (navigator.connection && navigator.connection.saveData) ? 'off' : 'on'),
  /* Vibration on a phone that has it: on unless switched off */
  buzz: store.get('gz-buzz', 'on'),
  /* Smart search: downloads the first time it is needed, unless switched off */
  ai: store.get('gz-ai', 'on'),
  /* Voice search on this phone (English, web app): off until switched on, since it downloads about 35 MB */
  asr: store.get('gz-asr', 'off')
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
  $('#st-buzzrow').hidden = !CAN_BUZZ;
  $('#st-asrrow').hidden = !ASR_OK;
  aiNote();
  [['#st-theme', prefs.theme], ['#st-size', prefs.size], ['#st-clips', prefs.clips], ['#st-tiles', prefs.tiles], ['#st-buzz', prefs.buzz], ['#st-ai', prefs.ai], ['#st-asr', prefs.asr]].forEach(([sel, v]) => $$(sel + ' button').forEach(b => b.setAttribute('aria-pressed', b.dataset.val === v)));
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

/* ================= Install the guide (#install) ================= */
/* Installing the guide on a phone, tablet or computer, and using it without a signal. engine.js draws this page in both
   copies. The live state (saved for offline use, installed, the browser's own Install offer) comes from pwa.js, which only
   the web app on GitHub Pages has (window.GZ_PWA); it calls renderInstall again once it is ready. The claude.ai artifact
   cannot install or keep an offline copy, so there the page says so and links to the web app.
   The QR code opens APP_URL + '#install'. It was made by src/qr.js
   (node qr.js "https://zaq6184-cell.github.io/green-zone-mo-guide/#install" M: version 4, 33 modules, one path unit a
   module), and test.js checks that it still reads as that address. */
const INSTALL_QR = 'M0 0h7v1h-7zM8 0h2v1h-2zM11 0h4v1h-4zM18 0h1v1h-1zM24 0h1v1h-1zM26 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h3v1h-3zM12 1h3v1h-3zM16 1h1v1h-1zM18 1h3v1h-3zM22 1h1v1h-1zM26 1h1v1h-1zM32 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h1v1h-1zM13 2h4v1h-4zM20 2h2v1h-2zM24 2h1v1h-1zM26 2h1v1h-1zM28 2h3v1h-3zM32 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM10 3h1v1h-1zM12 3h1v1h-1zM14 3h4v1h-4zM19 3h3v1h-3zM24 3h1v1h-1zM26 3h1v1h-1zM28 3h3v1h-3zM32 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM8 4h1v1h-1zM11 4h3v1h-3zM15 4h5v1h-5zM24 4h1v1h-1zM26 4h1v1h-1zM28 4h3v1h-3zM32 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM11 5h6v1h-6zM20 5h1v1h-1zM22 5h2v1h-2zM26 5h1v1h-1zM32 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h7v1h-7zM9 7h1v1h-1zM12 7h2v1h-2zM15 7h2v1h-2zM20 7h1v1h-1zM23 7h1v1h-1zM0 8h1v1h-1zM3 8h6v1h-6zM11 8h2v1h-2zM16 8h2v1h-2zM19 8h1v1h-1zM22 8h2v1h-2zM25 8h1v1h-1zM28 8h1v1h-1zM30 8h3v1h-3zM1 9h2v1h-2zM4 9h1v1h-1zM8 9h1v1h-1zM10 9h1v1h-1zM13 9h3v1h-3zM17 9h4v1h-4zM23 9h2v1h-2zM28 9h3v1h-3zM0 10h1v1h-1zM5 10h5v1h-5zM13 10h1v1h-1zM15 10h1v1h-1zM20 10h1v1h-1zM22 10h4v1h-4zM28 10h5v1h-5zM3 11h2v1h-2zM11 11h3v1h-3zM15 11h1v1h-1zM17 11h2v1h-2zM20 11h1v1h-1zM25 11h3v1h-3zM30 11h1v1h-1zM32 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM5 12h2v1h-2zM12 12h2v1h-2zM16 12h1v1h-1zM20 12h1v1h-1zM23 12h2v1h-2zM26 12h2v1h-2zM31 12h2v1h-2zM0 13h1v1h-1zM2 13h1v1h-1zM4 13h1v1h-1zM8 13h1v1h-1zM14 13h1v1h-1zM17 13h1v1h-1zM20 13h1v1h-1zM22 13h2v1h-2zM25 13h1v1h-1zM27 13h1v1h-1zM29 13h2v1h-2zM2 14h2v1h-2zM5 14h2v1h-2zM8 14h1v1h-1zM10 14h1v1h-1zM13 14h1v1h-1zM15 14h2v1h-2zM18 14h4v1h-4zM26 14h2v1h-2zM29 14h2v1h-2zM1 15h2v1h-2zM5 15h1v1h-1zM8 15h1v1h-1zM10 15h3v1h-3zM19 15h1v1h-1zM22 15h1v1h-1zM25 15h1v1h-1zM29 15h2v1h-2zM32 15h1v1h-1zM0 16h2v1h-2zM3 16h2v1h-2zM6 16h1v1h-1zM8 16h1v1h-1zM12 16h2v1h-2zM19 16h2v1h-2zM25 16h5v1h-5zM2 17h1v1h-1zM4 17h1v1h-1zM7 17h1v1h-1zM12 17h6v1h-6zM19 17h2v1h-2zM22 17h1v1h-1zM24 17h3v1h-3zM28 17h1v1h-1zM30 17h3v1h-3zM0 18h2v1h-2zM4 18h1v1h-1zM6 18h5v1h-5zM12 18h1v1h-1zM14 18h3v1h-3zM18 18h4v1h-4zM23 18h1v1h-1zM27 18h1v1h-1zM29 18h2v1h-2zM32 18h1v1h-1zM0 19h1v1h-1zM3 19h1v1h-1zM7 19h4v1h-4zM13 19h3v1h-3zM19 19h1v1h-1zM22 19h1v1h-1zM24 19h2v1h-2zM28 19h3v1h-3zM0 20h4v1h-4zM5 20h2v1h-2zM8 20h2v1h-2zM11 20h2v1h-2zM15 20h3v1h-3zM24 20h1v1h-1zM29 20h1v1h-1zM0 21h2v1h-2zM4 21h1v1h-1zM8 21h1v1h-1zM10 21h1v1h-1zM12 21h1v1h-1zM15 21h1v1h-1zM19 21h5v1h-5zM27 21h4v1h-4zM0 22h1v1h-1zM4 22h1v1h-1zM6 22h6v1h-6zM14 22h2v1h-2zM17 22h1v1h-1zM21 22h3v1h-3zM30 22h3v1h-3zM0 23h1v1h-1zM2 23h3v1h-3zM8 23h1v1h-1zM11 23h1v1h-1zM13 23h1v1h-1zM17 23h2v1h-2zM20 23h1v1h-1zM23 23h1v1h-1zM26 23h2v1h-2zM30 23h3v1h-3zM0 24h2v1h-2zM3 24h10v1h-10zM14 24h1v1h-1zM16 24h1v1h-1zM19 24h2v1h-2zM24 24h6v1h-6zM31 24h1v1h-1zM8 25h1v1h-1zM14 25h3v1h-3zM18 25h1v1h-1zM21 25h1v1h-1zM23 25h2v1h-2zM28 25h1v1h-1zM30 25h2v1h-2zM0 26h7v1h-7zM8 26h1v1h-1zM10 26h2v1h-2zM14 26h2v1h-2zM19 26h6v1h-6zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h1v1h-1zM0 27h1v1h-1zM6 27h1v1h-1zM8 27h1v1h-1zM11 27h1v1h-1zM13 27h2v1h-2zM18 27h1v1h-1zM23 27h2v1h-2zM28 27h4v1h-4zM0 28h1v1h-1zM2 28h3v1h-3zM6 28h1v1h-1zM8 28h1v1h-1zM10 28h1v1h-1zM12 28h4v1h-4zM20 28h1v1h-1zM22 28h7v1h-7zM31 28h1v1h-1zM0 29h1v1h-1zM2 29h3v1h-3zM6 29h1v1h-1zM8 29h2v1h-2zM12 29h2v1h-2zM15 29h1v1h-1zM18 29h3v1h-3zM22 29h1v1h-1zM24 29h2v1h-2zM27 29h1v1h-1zM31 29h2v1h-2zM0 30h1v1h-1zM2 30h3v1h-3zM6 30h1v1h-1zM9 30h3v1h-3zM15 30h1v1h-1zM17 30h4v1h-4zM22 30h4v1h-4zM27 30h3v1h-3zM31 30h2v1h-2zM0 31h1v1h-1zM6 31h1v1h-1zM9 31h1v1h-1zM11 31h2v1h-2zM14 31h1v1h-1zM18 31h2v1h-2zM22 31h1v1h-1zM26 31h3v1h-3zM30 31h3v1h-3zM0 32h7v1h-7zM8 32h1v1h-1zM14 32h2v1h-2zM17 32h1v1h-1zM19 32h1v1h-1zM24 32h1v1h-1zM27 32h2v1h-2z';
const INSTALL_PLAT = [
  {k:'iphone', t:'iPhone or iPad', br:[['safari', 'Safari'], ['other', 'Chrome or Edge']]},
  {k:'android', t:'Android', br:[['chrome', 'Chrome'], ['samsung', 'Samsung Internet'], ['edge', 'Edge'], ['firefox', 'Firefox']]},
  {k:'windows', t:'Windows', br:[['chrome', 'Chrome or Edge'], ['firefox', 'Firefox']]},
  {k:'mac', t:'Mac', br:[['safari', 'Safari'], ['chrome', 'Chrome or Edge'], ['firefox', 'Firefox']]},
  {k:'linux', t:'Linux or ChromeOS', br:[['chrome', 'Chrome or Edge'], ['firefox', 'Firefox']]}
];
/* Steps: [drawing, title, line]. {kebab}, {dots}, {burger} and {share} stand for the button's own icon */
const INSTALL_STEPS = {
  'iphone-safari':{steps:[
    ['iosShare', 'Tap {share} Share', 'The square with an arrow: at the bottom of Safari on an iPhone, at the top right on an iPad.'],
    ['iosSheet', 'Tap Add to Home Screen', 'Scroll down the list if you do not see it.'],
    ['iosAdd', 'Tap Add', 'Green Zone joins your home screen. Open it from there: full screen, and it works without a signal.']]},
  'iphone-other':{steps:[
    ['iosShareTop', 'Tap {share} Share', 'In Chrome it is in the address bar; in Edge, open the menu {dots} first.'],
    ['iosSheet', 'Tap Add to Home Screen', 'Scroll down the list if you do not see it.'],
    ['iosAdd', 'Tap Add', 'Green Zone joins your home screen, and works without a signal.']],
    note:'From Chrome or Edge, an iPhone or iPad needs iOS 16.4 or later. On an older one, open the guide in Safari.'},
  'android-chrome':{steps:[
    ['andKebab', 'Tap {kebab}', 'At the top right of Chrome. If Chrome offers Install at the bottom of the screen, tap that instead.'],
    ['andMenu', 'Tap Install app', 'On some phones it says Add to Home screen.'],
    ['andPrompt', 'Tap Install', 'Green Zone joins your apps and home screen, and opens full screen.']]},
  'android-samsung':{steps:[
    ['samBar', 'Tap {burger}', 'At the bottom right of Samsung Internet. If the address bar shows an install icon, tap that instead.'],
    ['samMenu', 'Tap Add page to', 'In the menu that opens.'],
    ['samTarget', 'Tap Home screen, then Add', 'Green Zone joins your home screen.']]},
  'android-edge':{steps:[
    ['edgeBar', 'Tap {dots}', 'In the bar at the bottom of Edge.'],
    ['edgeMenu', 'Tap Add to phone', 'In the menu that opens.'],
    ['andPrompt', 'Tap Install', 'Green Zone joins your apps and home screen.']]},
  'android-firefox':{steps:[
    ['andKebab', 'Tap {kebab}', 'Firefox has its menu at the top or the bottom of the screen.'],
    ['ffMenu', 'Tap Install', 'In older versions: Add to Home screen.'],
    ['andPrompt', 'Tap Add', 'Green Zone joins your home screen.']]},
  'desk-chrome':{steps:[
    ['deskIcon', 'Click the install icon', 'At the right end of the address bar: a screen with a down arrow. Edge may say App available.'],
    ['deskPrompt', 'Click Install', 'The guide opens in its own window, and stays in the Start menu, the Dock or the app launcher.'],
    ['deskMenu', 'No icon? Use the menu', 'Chrome: {kebab}, Cast, save and share, Install page as app. Edge: {dots}, Apps, Install this site as an app.']]},
  'mac-safari':{steps:[
    ['macFile', 'Choose File, then Add to Dock', 'In Safari 17 or later (macOS Sonoma or newer). The {share} Share button has Add to Dock too.'],
    ['macAdd', 'Click Add', 'Keep the name Green Zone, or type your own.'],
    ['macDock', 'Open it from the Dock', 'It opens in its own window, and works without a signal.']]},
  'desk-firefox':{steps:[
    ['ffStar', 'Bookmark it', 'Firefox on a computer cannot install web apps. Click the star in the address bar, or press Ctrl+D (Cmd+D on a Mac).'],
    ['ffOffline', 'It still opens without a signal', 'Once the guide has saved itself, the bookmark opens it offline too. To install it as an app, open it in Chrome or Edge.']]}
};
const INSTALL_KEYS = {kebab:['kebab', 'the menu button'], dots:['dots', 'the menu button'], burger:['burger', 'the menu button'], share:['share', '']};
const instText = s => esc(s).replace(/\{(\w+)\}/g, (m, k) => INSTALL_KEYS[k] ? `<span class="in-key" aria-hidden="true">${svg(INSTALL_KEYS[k][0])}</span>${INSTALL_KEYS[k][1] ? `<span class="vh">${INSTALL_KEYS[k][1]}</span>` : ''}` : m);

/* The device and browser, from the user agent; the choice can be changed on the page (in memory only) */
function detectDevice(){
  const ua = navigator.userAgent || '', touchMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  const os = /iPhone|iPod|iPad/.test(ua) || touchMac ? 'iphone' : /Android/.test(ua) ? 'android' : /CrOS|Linux|X11/.test(ua) ? 'linux' : /Windows/.test(ua) ? 'windows' : /Macintosh|Mac OS X/.test(ua) ? 'mac' : '';
  const br = /SamsungBrowser/.test(ua) ? 'samsung' : /EdgA\/|EdgiOS|Edg\//.test(ua) ? 'edge' : /FxiOS|Firefox\//.test(ua) ? 'firefox' : /CriOS|Chrome\/|Chromium\//.test(ua) ? 'chrome' : /Safari\//.test(ua) ? 'safari' : '';
  const inapp = /FBAN|FBAV|FB_IAB|Instagram|Line\/|MicroMessenger|WhatsApp|Telegram|; wv\)/.test(ua);
  const plat = os || 'windows';
  const pick = {iphone:br === 'safari' || !br ? 'safari' : 'other', android:['samsung', 'edge', 'firefox'].includes(br) ? br : 'chrome', mac:br === 'safari' ? 'safari' : br === 'firefox' ? 'firefox' : 'chrome'}[plat] || (br === 'firefox' ? 'firefox' : 'chrome');
  return {os, plat, br:pick, inapp, known:!!os};
}
const DEVICE = detectDevice();
let instPlat = DEVICE.plat, instBr = DEVICE.br;
const instKey = (p, b) => ['windows', 'linux', 'mac'].includes(p) && b !== 'safari' ? 'desk-' + b : p + '-' + b;

/* Step drawings, 320 by 200, in the intro's vocabulary: a phone or a window, the control to use ringed in teal */
const IA = (() => {
  const t = (x, y, s, txt, c = 'a-tx', a = '') => `<text x="${x}" y="${y}" class="${c}" style="font-size:${s}px"${a ? ` text-anchor="${a}"` : ''}>${txt}</text>`;
  const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" class="a-hl pop" style="--d:.35s"/><circle cx="${x}" cy="${y}" r="${r}" class="a-echo"/>`;
  const row = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="a-hr pop" style="--d:.35s"/>`;
  const mark = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${(s / 24).toFixed(3)})"><rect width="24" height="24" rx="6.5" class="a-mk"/><g transform="translate(3.6 3.6) scale(.7)" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" stroke="#43dd8c"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" stroke="#fff"/><circle cx="5" cy="18.5" r="2.3" fill="#fff" stroke="none"/></g></g>`;
  /* Phones are cropped: the top or the bottom of one, so the control is large */
  const phone = (top, inner) => top
    ? `<rect x="66" y="8" width="188" height="232" rx="30" class="a-ph"/><rect x="75" y="17" width="170" height="214" rx="22" class="a-sc"/>${inner}`
    : `<rect x="66" y="-40" width="188" height="232" rx="30" class="a-ph"/><rect x="75" y="-31" width="170" height="214" rx="22" class="a-sc"/>${inner}`;
  const page = y => `<rect x="88" y="${y}" width="110" height="9" rx="4.5" class="a-pl"/><rect x="88" y="${y + 16}" width="78" height="9" rx="4.5" class="a-pl"/><rect x="88" y="${y + 34}" width="144" height="34" rx="9" class="a-cd"/><rect x="88" y="${y + 76}" width="144" height="34" rx="9" class="a-cd"/>`;
  const ic = {
    share:(x, y) => `<path d="M${x - 6} ${y - 3}v10h12v-10M${x} ${y - 9}v11M${x - 4} ${y - 5}l4-4 4 4" class="a-ic"/>`,
    kebab:(x, y) => `<circle cx="${x}" cy="${y - 6}" r="2" class="a-dt"/><circle cx="${x}" cy="${y}" r="2" class="a-dt"/><circle cx="${x}" cy="${y + 6}" r="2" class="a-dt"/>`,
    dots:(x, y) => `<circle cx="${x - 6}" cy="${y}" r="2" class="a-dt"/><circle cx="${x}" cy="${y}" r="2" class="a-dt"/><circle cx="${x + 6}" cy="${y}" r="2" class="a-dt"/>`,
    burger:(x, y) => `<path d="M${x - 7} ${y - 5}h14M${x - 7} ${y}h14M${x - 7} ${y + 5}h14" class="a-ic"/>`,
    back:(x, y) => `<path d="M${x + 3} ${y - 6}l-6 6 6 6" class="a-ic"/>`,
    fwd:(x, y) => `<path d="M${x - 3} ${y - 6}l6 6-6 6" class="a-ic"/>`,
    book:(x, y) => `<path d="M${x - 7} ${y - 6}h5a2 2 0 0 1 2 2v11a2 2 0 0 0-2-2h-5zM${x + 7} ${y - 6}h-5a2 2 0 0 0-2 2v11a2 2 0 0 1 2-2h5z" class="a-ic"/>`,
    tabs:(x, y) => `<rect x="${x - 6}" y="${y - 4}" width="11" height="11" rx="2" class="a-ic"/><path d="M${x - 3} ${y - 7}h8a2 2 0 0 1 2 2v8" class="a-ic"/>`,
    home:(x, y) => `<path d="M${x - 7} ${y}l7-6 7 6M${x - 5} ${y - 2}v8h10v-8" class="a-ic"/>`,
    plus:(x, y) => `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" rx="3.5" class="a-ic"/><path d="M${x} ${y - 3.5}v7M${x - 3.5} ${y}h7" class="a-ic"/>`,
    lock:(x, y) => `<rect x="${x - 4}" y="${y - 1}" width="8" height="6" rx="1.5" class="a-ic"/><path d="M${x - 2.5} ${y - 1}v-2a2.5 2.5 0 0 1 5 0v2" class="a-ic"/>`,
    star:(x, y) => `<path d="M${x} ${y - 7}l2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7z" class="a-ic"/>`,
    inst:(x, y) => `<rect x="${x - 8}" y="${y - 7}" width="16" height="11" rx="2" class="a-ic"/><path d="M${x - 4} ${y + 7}h8M${x} ${y - 4}v5M${x - 2.5} ${y - .5}l2.5 2.5 2.5-2.5" class="a-ic"/>`,
    wifioff:(x, y) => `<path d="M${x - 9} ${y - 3}a13 13 0 0 1 18 0M${x - 5.5} ${y + 1}a8 8 0 0 1 11 0M${x - 2} ${y + 5}a3 3 0 0 1 4 0M${x - 9} ${y - 9}l18 18" class="a-ic"/>`
  };
  /* A sheet or menu of rows; hi is the row to tap */
  const rows = (x, y, w, items, hi, h = 26, fs = 11) => items.map((s, i) => (i === hi ? row(x, y + i * h, w, h - 2) : '') + t(x + 12, y + i * h + h / 2 + 4, fs, s, i === hi ? 'a-tx a-b' : 'a-tx')).join('');
  const sheet = (x, y, w, hgt) => `<rect x="${x}" y="${y + 3}" width="${w}" height="${hgt}" rx="12" class="a-sh"/><rect x="${x}" y="${y}" width="${w}" height="${hgt}" rx="12" class="a-cd"/>`;
  /* A desktop browser window: a tab, the address bar, the page */
  const win = (extra = '') => `<rect x="8" y="12" width="304" height="182" rx="12" class="a-win"/><rect x="8" y="12" width="304" height="30" rx="12" class="a-tb"/><rect x="8" y="30" width="304" height="12" class="a-tb"/>` +
    `<rect x="22" y="19" width="122" height="23" rx="7" class="a-cd"/>${mark(30, 24, 13)}${t(49, 35, 10, 'Green Zone MO Guide')}<circle cx="282" cy="27" r="4" class="a-pl"/><circle cx="296" cy="27" r="4" class="a-pl"/>` +
    `${ic.back(28, 58)}${ic.fwd(46, 58)}<rect x="62" y="47" width="240" height="23" rx="11.5" class="a-bar"/>${ic.lock(76, 57)}${t(87, 62, 10, 'zaq6184-cell.github.io/green…', 'a-mu')}` +
    `<rect x="24" y="84" width="150" height="10" rx="5" class="a-pl"/><rect x="24" y="102" width="110" height="10" rx="5" class="a-pl"/><rect x="24" y="124" width="132" height="54" rx="10" class="a-cd"/><rect x="166" y="124" width="132" height="54" rx="10" class="a-cd"/>${extra}`;
  const dim = top => `<rect x="75" y="${top ? 17 : -31}" width="170" height="214" rx="22" class="a-dim"/>`;
  const iosAddr = y => `<rect x="88" y="${y}" width="144" height="24" rx="12" class="a-bar"/>${t(160, y + 16, 10.5, 'zaq6184-cell.github.io', 'a-mu', 'middle')}`;
  return {
    iosShare:() => phone(false, page(-2) + iosAddr(124) + ic.back(96, 165) + ic.fwd(128, 165) + ic.share(160, 166) + ic.book(192, 165) + ic.tabs(224, 165) + ring(160, 163, 15)),
    iosShareTop:() => phone(true, `<rect x="86" y="32" width="148" height="26" rx="13" class="a-bar"/>${t(100, 49, 10.5, 'zaq6184-cell.github…', 'a-mu')}${ic.share(219, 46)}${ring(219, 44, 14)}` + page(70)),
    iosSheet:() => phone(false, page(-2) + dim(false) + sheet(75, 34, 170, 160) + mark(88, 46, 22) + t(118, 56, 10.5, 'Green Zone MO Guide', 'a-tx a-b') + t(118, 70, 10, 'zaq6184-cell.github.io', 'a-mu') +
      `<path d="M85 84h150" class="a-sep"/>` + rows(80, 88, 160, ['Copy', 'Add to Reading List', 'Add to Home Screen'], 2) + ic.plus(226, 153)),
    iosAdd:() => phone(true, t(88, 44, 11, 'Add to Home Screen', 'a-tx a-b') + t(232, 44, 11, 'Add', 'a-ac', 'end') + ring(221, 40, 15) +
      `<path d="M75 56h170" class="a-sep"/>` + mark(90, 70, 42) + `<rect x="142" y="74" width="92" height="26" rx="7" class="a-cd"/>` + t(150, 91, 11, 'Green Zone') + t(142, 116, 10, 'zaq6184-cell.github.io', 'a-mu')),
    andKebab:() => phone(true, `<rect x="84" y="30" width="132" height="26" rx="13" class="a-bar"/>${ic.lock(97, 42)}${t(106, 47, 10.5, 'zaq6184-cell.github…', 'a-mu')}${ic.kebab(232, 43)}${ring(232, 43, 13)}` + page(70)),
    andMenu:() => phone(true, `<rect x="84" y="30" width="132" height="26" rx="13" class="a-bar"/>${t(98, 47, 10.5, 'zaq6184-cell…', 'a-mu')}` + page(70) + sheet(122, 26, 118, 172) + rows(124, 32, 114, ['New tab', 'History', 'Bookmarks', 'Install app', 'Share…', 'Settings'], 3)),
    andPrompt:() => phone(true, page(40) + dim(true) + `<rect x="84" y="54" width="152" height="112" rx="16" class="a-cd"/>` + mark(94, 68, 28) + t(128, 80, 12, 'Install app', 'a-tx a-b') + t(128, 96, 10, 'Green Zone MO Guide') +
      t(94, 120, 10, 'zaq6184-cell.github.io', 'a-mu') + t(150, 151, 11, 'Cancel', 'a-ac', 'middle') + `<rect x="184" y="136" width="42" height="22" rx="11" class="a-btn"/>` + t(205, 151, 10.5, 'Install', 'a-bt', 'middle') + ring(205, 147, 19)),
    samBar:() => phone(false, page(-2) + `<rect x="75" y="148" width="170" height="35" class="a-tb"/>` + ic.back(94, 165) + ic.fwd(120, 165) + ic.home(148, 166) + ic.book(176, 165) + ic.tabs(204, 165) + ic.burger(230, 165) + ring(230, 165, 13)),
    samMenu:() => phone(false, page(-2) + dim(false) + sheet(75, 32, 170, 160) + rows(80, 42, 160, ['Bookmarks', 'Saved pages', 'Add page to', 'Ad blockers', 'Settings'], 2)),
    samTarget:() => phone(false, page(-2) + dim(false) + `<rect x="88" y="34" width="144" height="128" rx="14" class="a-cd"/>` + t(100, 54, 11.5, 'Add page to', 'a-tx a-b') + rows(92, 64, 136, ['Bookmarks', 'Quick access', 'Home screen'], 2) + t(220, 152, 11, 'Add', 'a-ac', 'end')),
    edgeBar:() => phone(false, page(-2) + `<rect x="75" y="148" width="170" height="35" class="a-tb"/>` + ic.back(96, 165) + ic.fwd(126, 165) + ic.dots(160, 165) + ic.tabs(194, 165) + `<circle cx="225" cy="165" r="7" class="a-ic"/>` + ring(160, 165, 14)),
    edgeMenu:() => phone(false, page(-2) + dim(false) + sheet(75, 32, 170, 160) + rows(80, 42, 160, ['Favourites', 'History', 'Add to phone', 'Share', 'Settings'], 2)),
    ffMenu:() => phone(false, page(-2) + dim(false) + sheet(75, 32, 170, 160) + rows(80, 42, 160, ['Bookmarks', 'History', 'Find in page', 'Install', 'Share'], 3)),
    deskIcon:() => win(`${ic.inst(266, 58)}${ic.star(288, 58)}${ring(266, 58, 13)}`),
    deskPrompt:() => win(`${ic.inst(266, 58)}${ic.star(288, 58)}` + sheet(136, 76, 168, 106) + t(150, 96, 11.5, 'Install app?', 'a-tx a-b') + mark(150, 106, 26) + t(184, 116, 10.5, 'Green Zone MO Guide') + t(184, 131, 10, 'zaq6184-cell.github.io', 'a-mu') +
      `<rect x="236" y="148" width="54" height="22" rx="11" class="a-btn"/>` + t(263, 163, 10.5, 'Install', 'a-bt', 'middle') + t(208, 163, 10.5, 'Cancel', 'a-ac', 'middle') + ring(263, 159, 19)),
    deskMenu:() => win(`${ic.kebab(296, 58)}` + sheet(170, 72, 134, 112) + rows(172, 78, 130, ['New tab', 'History', 'Cast, save and share', 'Settings'], 2, 26, 10.5) + sheet(28, 128, 150, 34) + rows(32, 132, 142, ['Install page as app…'], 0)),
    macFile:() => `<rect x="8" y="12" width="304" height="182" rx="12" class="a-win"/><rect x="8" y="12" width="304" height="22" rx="12" class="a-tb"/><rect x="8" y="24" width="304" height="10" class="a-tb"/>` +
      `<circle cx="24" cy="23" r="5" class="a-pl"/>${t(38, 27, 11, 'Safari', 'a-tx a-b')}${row(80, 15, 34, 17)}${t(87, 27, 11, 'File', 'a-tx a-b')}${t(126, 27, 11, 'Edit')}${t(158, 27, 11, 'View')}${t(194, 27, 11, 'History')}` +
      sheet(80, 36, 168, 140) + rows(82, 42, 164, ['New Window', 'New Private Window', 'Open File…', 'Add to Dock…', 'Close Window'], 3),
    macAdd:() => `<rect x="8" y="12" width="304" height="182" rx="12" class="a-win"/>` + sheet(64, 28, 192, 150) + t(160, 52, 12, 'Add to Dock', 'a-tx a-b', 'middle') + mark(82, 66, 44) +
      `<rect x="138" y="72" width="102" height="26" rx="7" class="a-cd"/>` + t(146, 89, 11, 'Green Zone') + t(138, 116, 10, 'zaq6184-cell.github.io', 'a-mu') +
      t(176, 158, 11, 'Cancel', 'a-ac', 'middle') + `<rect x="200" y="143" width="44" height="22" rx="11" class="a-btn"/>` + t(222, 158, 10.5, 'Add', 'a-bt', 'middle') + ring(222, 154, 18),
    macDock:() => `<rect x="8" y="12" width="304" height="182" rx="12" class="a-win"/><rect x="40" y="136" width="240" height="46" rx="14" class="a-bar"/>` +
      [0, 1, 2, 4, 5].map(i => `<rect x="${52 + i * 38}" y="143" width="30" height="30" rx="8" class="a-pl"/>`).join('') + `<g class="pop" style="--d:.3s">${mark(128, 143, 30)}</g>` + ring(143, 158, 21) +
      `<rect x="104" y="100" width="78" height="22" rx="11" class="a-cd"/>` + t(143, 115, 10.5, 'Green Zone', 'a-tx a-b', 'middle'),
    ffStar:() => win(`${ic.star(288, 58)}${ring(288, 58, 13)}`),
    ffOffline:() => win(`${ic.star(288, 58)}<rect x="196" y="82" width="104" height="24" rx="12" class="a-cd"/>${ic.wifioff(212, 95)}${t(226, 98, 10.5, 'No signal', 'a-tx a-b')}` +
      `<g class="pop" style="--d:.35s"><circle cx="232" cy="151" r="16" class="a-btn"/><path d="M225 151l5 5 9-10" class="a-okp"/></g>`)
  };
})();

/* The picture beside the live state: a phone's home screen with Green Zone on it, and a badge for the state */
function instHeroArt(st){
  const icons = [...Array(12)].map((_, i) => { const x = 118 + (i % 3) * 30, y = 44 + Math.floor(i / 3) * 34; return i === 4 ? '' : `<rect x="${x}" y="${y}" width="22" height="22" rx="6" style="fill:rgba(255,255,255,.16)"/>`; }).join('');
  const badge = st === 'offline' ? `<circle cx="172" cy="80" r="11" style="fill:var(--observe-soft);stroke:#fff;stroke-width:2"/><path d="M166 78a9 9 0 0 1 12 0M168.5 81a5 5 0 0 1 7 0M166 74l12 12" style="fill:none;stroke:var(--observe);stroke-width:1.8;stroke-linecap:round"/>`
    : st === 'saved' || st === 'installed' ? `<circle cx="172" cy="80" r="11" style="fill:var(--mint);stroke:#fff;stroke-width:2"/><path d="M167 80l3.5 3.5 6.5-7" style="fill:none;stroke:var(--teal-3);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"/>`
    : st === 'saving' ? `<circle cx="172" cy="80" r="11" style="fill:var(--teal-2);stroke:#fff;stroke-width:2"/><path d="M172 74v8M168.5 79l3.5 3.5 3.5-3.5" style="fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round"/>` : '';
  return `<rect x="96" y="10" width="128" height="204" rx="24" style="fill:rgba(0,0,0,.2);stroke:#fff;stroke-width:3"/><rect x="138" y="18" width="44" height="6" rx="3" style="fill:rgba(255,255,255,.4)"/>${icons}` +
    `<g class="pop" style="--d:.25s"><g transform="translate(148 78)"><rect width="22" height="22" rx="6" style="fill:var(--emerald-1);stroke:var(--mint);stroke-width:1.5"/><g transform="translate(3.3 3.3) scale(.64)" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" stroke="#43dd8c"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" stroke="#fff"/><circle cx="5" cy="18.5" r="2.3" fill="#fff" stroke="none"/></g></g></g>` +
    `<g class="pop" style="--d:.55s">${badge}</g><text x="159" y="114" text-anchor="middle" style="font:700 10px var(--body);fill:#fff">Green Zone</text>` +
    `<path pathLength="1" d="M28 196 H292" class="ln draw" style="stroke:rgba(255,255,255,.25);stroke-width:3"/>`;
}

let instWeb = false;
function renderInstall(){
  const pwa = window.GZ_PWA, box = $('#instbox'); if (!box) return;
  instWeb = !!pwa;
  const url = APP_URL + '#install';
  const qr = `<div class="in-qr-w"><svg class="in-qr-c" viewBox="-3 -3 39 39" role="img" aria-label="QR code that opens the install page of the web app"><rect x="-3" y="-3" width="39" height="39" rx="3" fill="#fff"/><path d="${INSTALL_QR}" fill="#0b110e" shape-rendering="crispEdges"/></svg></div>`;
  const onPhone = ['iphone', 'android'].includes(DEVICE.os);
  const qrTile = `<section class="tile t-pearl in-qr" aria-labelledby="h-inqr">${qr}<div><h3 id="h-inqr">${onPhone ? 'For a colleague' : 'On your phone'}</h3><p>${onPhone ? 'Their camera opens this page from the code. Then they follow the steps for their phone.' : 'Point your phone\'s camera at the code to open this page there, then follow the steps for your phone.'}</p>` +
    `<div class="in-url"><code id="in-url">${esc(url.replace(/^https:\/\//, ''))}</code><button type="button" class="sm" data-incopy><span class="bl">Copy link</span></button></div></div></section>`;
  if (!instWeb){
    const claude = /(^|\.)claude\.ai$|claudeusercontent\.com$/.test(location.hostname);
    box.innerHTML = `<section class="tile t-teal in-hero" id="inhero"><div class="in-hero-t"><span class="lbl">The guide as an app</span><h2 id="in-state">Install it from the web app</h2>` +
      `<p id="in-sub">${claude ? 'This copy runs inside claude.ai, which cannot install apps or keep the guide for use without a signal.' : 'This copy cannot be installed or kept for use without a signal.'} Open the web app to install it on this phone or computer, or scan the code with your phone.</p>` +
      `<div class="in-acts"><a class="btn in-go" href="${url}" target="_blank" rel="noopener">Open the web app${svg('ext')}</a></div></div>` +
      `<svg class="art in-art" viewBox="0 0 320 220" aria-hidden="true" focusable="false">${instHeroArt('')}</svg></section><div class="in-more">${qrTile}</div>`;
    renderToolsInstall();
    return;
  }
  const plat = INSTALL_PLAT.find(p => p.k === instPlat) || INSTALL_PLAT[0];
  if (!plat.br.some(b => b[0] === instBr)) instBr = plat.br[0][0];
  const set = INSTALL_STEPS[instKey(plat.k, instBr)];
  const here = INSTALL_PLAT.find(p => p.k === DEVICE.plat), hereBr = here && here.br.find(b => b[0] === DEVICE.br);
  box.innerHTML = `<section class="tile t-teal in-hero" id="inhero" aria-live="polite"><div class="in-hero-t"><span class="lbl">The guide as an app</span><h2 id="in-state"></h2><p id="in-sub"></p><ul class="in-chips" id="in-chips"></ul><div class="in-acts" id="in-acts"></div></div>` +
    `<svg class="art in-art" id="in-art" viewBox="0 0 320 220" aria-hidden="true" focusable="false"></svg></section>` +
    `<div class="shead"><h2 id="h-insteps">Install it, step by step</h2><p id="in-dev">${DEVICE.known ? `This looks like ${esc(here.t)}${hereBr ? ', ' + esc(hereBr[1]) : ''}. Choose another device or browser to see its steps.` : 'Choose your device and browser.'}</p></div>` +
    `<div class="in-pick"><div class="seg" id="in-plat" role="group" aria-label="Device">${INSTALL_PLAT.map(p => `<button type="button" data-inplat="${p.k}" aria-pressed="${p.k === plat.k}">${esc(p.t)}${p.k === DEVICE.plat && DEVICE.known ? '<i class="in-me" aria-hidden="true"></i><span class="vh"> (this device)</span>' : ''}</button>`).join('')}</div>` +
    (plat.br.length > 1 ? `<div class="seg" id="in-br" role="group" aria-label="Browser">${plat.br.map(([k, t]) => `<button type="button" data-inbr="${k}" aria-pressed="${k === instBr}">${esc(t)}</button>`).join('')}</div>` : '') + `</div>` +
    (DEVICE.inapp && plat.k === DEVICE.plat ? `<p class="in-note">${svg('info')}<span>This page seems to be open inside another app. Open it in ${DEVICE.os === 'iphone' ? 'Safari' : 'Chrome'} first: the app's menu has Open in browser.</span></p>` : '') +
    `<ol class="in-steps" id="in-steps" aria-labelledby="h-insteps">${set.steps.map(([art, h, p], i) => `<li class="tile t-pearl in-step"><div class="in-fig"><svg class="art ia" viewBox="0 0 320 200" aria-hidden="true" focusable="false">${IA[art]()}</svg></div>` +
      `<div class="in-txt"><b class="in-n" aria-hidden="true">${i + 1}</b><h3><span class="vh">Step ${i + 1}: </span>${instText(h)}</h3><p>${instText(p)}</p></div></li>`).join('')}</ol>` +
    (set.note ? `<p class="in-note">${svg('info')}<span>${esc(set.note)}</span></p>` : '') +
    `<div class="in-more">${qrTile}<section class="tile t-pearl in-off" aria-labelledby="h-inoff"><h3 id="h-inoff">What works without a signal</h3><ul class="in-ok">` +
    [['y', 'Every pathway, rule, guideline and calculator'], ['y', 'Numbers to know, the discharge check and the quiz'], ['y', 'The pictures in the guide'], ['y', 'Films and sounds you have played through once'],
      ['n', 'Outside links: Drive PDFs, MDCalc, PEMCalc and the hospital systems'], ['n', 'Films and sounds not yet played']].map(([k, s]) => `<li class="${k}">${svg(k === 'y' ? 'tick' : 'x')}<span><span class="vh">${k === 'y' ? 'Works: ' : 'Needs a signal: '}</span>${esc(s)}</span></li>`).join('') +
    `</ul><p class="sub">It updates itself the next time it opens with a signal.</p></section></div>`;
  installLive();
  renderToolsInstall();
}

/* The live state: saved for offline use, installed, online or not, and the browser's own Install offer */
function installLive(){
  const pwa = window.GZ_PWA; if (!pwa || !$('#in-state')) return;
  const s = pwa.info(), on = navigator.onLine !== false;
  const mb = n => n ? (n / 1048576).toFixed(1) + ' MB' : '';
  const kept = s.played ? ` ${s.played} film${s.played === 1 ? '' : 's'} and sounds you played through are kept too.` : ' Films and sounds are kept once you play them through.';
  const [h, p, art] = s.installed ? ['Installed: you are using the app', 'It opens from your home screen, full screen, and works without a signal.' + (s.state === 'saved' ? ` Saved on this device: ${mb(s.bytes)}.` : ''), on ? 'installed' : 'offline']
    : s.state === 'saved' ? ['Ready offline', `Saved on this device: the guide and ${s.saved === s.of ? 'all its' : s.saved - 2 + ' of its'} pictures, ${mb(s.bytes)}.` + kept + ' Install it to open it like an app.', on ? 'saved' : 'offline']
    : s.state === 'failed' ? ['Works online here', 'This browser could not keep a copy for use without a signal. It still works with one.', '']
    : ['Saving for offline use', 'Keep this page open with a signal for a moment.', 'saving'];
  $('#in-state').textContent = h; $('#in-sub').textContent = p;
  const chip = (cls, ic, t) => `<li class="${cls}">${svg(ic)}<span>${t}</span></li>`;
  $('#in-chips').innerHTML = (s.state === 'saved' ? chip('on', 'tick', 'Works without a signal') : s.state === 'failed' ? chip('off', 'x', 'No offline copy') : chip('off', 'clock', 'Saving')) +
    (s.installed ? chip('on', 'tick', 'Installed') : chip('off', 'install', 'Not installed yet')) +
    (on ? chip('off', 'wifi', 'Online') : chip('warn', 'nowifi', s.state === 'saved' ? 'Offline now: using the saved copy' : 'Offline now'));
  $('#in-acts').innerHTML = s.offer && !s.installed ? `<button type="button" class="in-go" data-ingo>${svg('install')}Install the guide</button>` : '';
  $('#in-art').innerHTML = instHeroArt(art);
  renderToolsInstall();
}

/* The Shift tools tile */
function renderToolsInstall(){
  const el = $('#tin'); if (!el) return;
  const pwa = window.GZ_PWA, s = pwa ? pwa.info() : null;
  const tag = !pwa ? 'Web app' : s.installed ? 'Installed' : s.state === 'saved' ? 'Ready offline' : 'Saving';
  el.innerHTML = `<div class="row"><span class="ic">${svg('install')}</span><h2>Install the guide</h2><span class="tag">${tag}</span></div><p>On a phone, tablet or computer, opened like an app and used without a signal: the steps for every device and browser.</p>` +
    `<ul class="gl">${INSTALL_PLAT.map(p => `<li><span>${esc(p.t)}</span>${p.k === DEVICE.plat && DEVICE.known ? '<b class="me">This one</b>' : ''}</li>`).join('')}</ul><span class="go-l">How to install${svg('chev')}</span>`;
}
addEventListener('gz-pwa', () => { if (!lazyDone.has('install')) return; if (!instWeb && window.GZ_PWA) renderInstall(); else installLive(); });
addEventListener('online', installLive); addEventListener('offline', installLive);
$('#instbox').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.inplat){ instPlat = b.dataset.inplat; instBr = instPlat === DEVICE.plat ? DEVICE.br : null; renderInstall(); const n = $(`#in-plat [data-inplat="${instPlat}"]`); if (n) n.focus(); }
  else if (b.dataset.inbr){ instBr = b.dataset.inbr; renderInstall(); const n = $(`#in-br [data-inbr="${instBr}"]`); if (n) n.focus(); }
  else if (b.hasAttribute('data-ingo') && window.GZ_PWA) window.GZ_PWA.install();
  else if (b.hasAttribute('data-incopy')) copyText(APP_URL + '#install', {btn:b, el:$('#in-url'), ok:'Link copied'});
});

/* The home tile (10 Nov 2026): Install on the front page, with a small phone drawn in 3D that turns toward the pointer
   (and, on a touch screen, as the tile crosses the screen). On the web app it shows the live state and, where the browser
   offers an install, a button that opens the browser's own prompt. In the claude.ai artifact it can only link to the web
   app. Once the guide is installed the tile is hidden: the reader is already in the app. */
function renderHomeInstall(){
  const el = $('#t-inst'); if (!el) return;
  const pwa = window.GZ_PWA, s = pwa ? pwa.info() : null;
  if (s && s.installed){ el.hidden = true; return; }
  const tag = !pwa ? 'Web app' : s.state === 'saved' ? 'Ready offline' : s.state === 'failed' ? 'Online only here' : 'Saving';
  const line = !pwa ? 'It installs from the web app: open it there, then add it to your home screen.'
    : 'Open it from your home screen like an app, and use it without a signal.';
  const acts = (pwa && s.offer ? `<button type="button" class="in-go sm" data-hin-go>${svg('install')}Install</button>` : '') +
    (!pwa ? `<a class="pill" href="${APP_URL}#install" target="_blank" rel="noopener">Open the web app${svg('ext')}</a>` : '') +
    `<a class="pill" href="#install">How to install${svg('chev')}</a>`;
  const ghosts = '<i class="ph3-g"></i>';
  el.innerHTML = `<div class="hin-t"><div class="tile-h"><h2 id="h-inst">Install the guide</h2><span class="tag">${tag}</span></div><p class="sub">${line}</p><div class="links">${acts}</div></div>` +
    `<span class="ph3" aria-hidden="true"><span class="ph3-b"><i class="ph3-s"></i>${ghosts}<i class="ph3-n"></i><span class="ph3-i">${LOGO}</span>${s && s.state === 'saved' ? `<span class="ph3-k">${svg('tick')}</span>` : ''}</span></span>`;
  el.hidden = false;
}
$('#t-inst').addEventListener('click', e => { if (e.target.closest('[data-hin-go]') && window.GZ_PWA) window.GZ_PWA.install(); });
addEventListener('gz-pwa', renderHomeInstall);
renderHomeInstall();

/* ================= Share the guide (12 Nov 2026, at Krishna's request) =================
   One link for a colleague: the web app's address (APP_URL), which opens on any phone and installs from there. A share
   sheet where the browser has one (navigator.share, from a tap only; a cancel is not an error), Copy link everywhere, and
   WhatsApp and Telegram links that open the reader's own app, where they choose who it goes to. The card drawn in 3D is the
   one a messaging app shows under the link: the web app's Open Graph tags (build.js) and og/preview.jpg (og.js). It is one
   card for every link, since a link preview runs no script and drops what follows the #. Nothing is stored or sent. */
const SHARE_QR = 'M0 0h7v1h-7zM12 0h1v1h-1zM14 0h2v1h-2zM18 0h2v1h-2zM21 0h1v1h-1zM23 0h2v1h-2zM26 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM10 1h1v1h-1zM12 1h1v1h-1zM15 1h1v1h-1zM17 1h1v1h-1zM21 1h1v1h-1zM23 1h2v1h-2zM26 1h1v1h-1zM32 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM11 2h1v1h-1zM14 2h1v1h-1zM16 2h2v1h-2zM19 2h2v1h-2zM23 2h2v1h-2zM26 2h1v1h-1zM28 2h3v1h-3zM32 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM9 3h3v1h-3zM13 3h1v1h-1zM17 3h1v1h-1zM22 3h2v1h-2zM26 3h1v1h-1zM28 3h3v1h-3zM32 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM9 4h4v1h-4zM16 4h1v1h-1zM19 4h1v1h-1zM21 4h1v1h-1zM23 4h2v1h-2zM26 4h1v1h-1zM28 4h3v1h-3zM32 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM17 5h2v1h-2zM20 5h2v1h-2zM24 5h1v1h-1zM26 5h1v1h-1zM32 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h1v1h-1zM24 6h1v1h-1zM26 6h7v1h-7zM10 7h1v1h-1zM12 7h1v1h-1zM14 7h1v1h-1zM17 7h6v1h-6zM24 7h1v1h-1zM0 8h1v1h-1zM3 8h1v1h-1zM5 8h2v1h-2zM8 8h1v1h-1zM12 8h2v1h-2zM15 8h2v1h-2zM19 8h1v1h-1zM21 8h2v1h-2zM25 8h1v1h-1zM27 8h1v1h-1zM0 9h1v1h-1zM2 9h2v1h-2zM5 9h1v1h-1zM8 9h1v1h-1zM10 9h1v1h-1zM12 9h1v1h-1zM16 9h1v1h-1zM21 9h2v1h-2zM25 9h3v1h-3zM31 9h2v1h-2zM2 10h5v1h-5zM8 10h3v1h-3zM17 10h1v1h-1zM19 10h4v1h-4zM24 10h1v1h-1zM27 10h2v1h-2zM30 10h1v1h-1zM32 10h1v1h-1zM3 11h2v1h-2zM8 11h1v1h-1zM10 11h3v1h-3zM14 11h1v1h-1zM16 11h2v1h-2zM19 11h1v1h-1zM21 11h4v1h-4zM28 11h2v1h-2zM31 11h1v1h-1zM3 12h4v1h-4zM8 12h1v1h-1zM10 12h3v1h-3zM15 12h1v1h-1zM19 12h3v1h-3zM24 12h3v1h-3zM29 12h1v1h-1zM32 12h1v1h-1zM0 13h6v1h-6zM8 13h6v1h-6zM15 13h2v1h-2zM21 13h1v1h-1zM24 13h1v1h-1zM26 13h1v1h-1zM28 13h1v1h-1zM31 13h2v1h-2zM0 14h1v1h-1zM6 14h4v1h-4zM11 14h4v1h-4zM17 14h2v1h-2zM20 14h1v1h-1zM23 14h1v1h-1zM25 14h2v1h-2zM30 14h2v1h-2zM3 15h3v1h-3zM10 15h1v1h-1zM15 15h1v1h-1zM17 15h2v1h-2zM20 15h2v1h-2zM23 15h2v1h-2zM26 15h3v1h-3zM31 15h1v1h-1zM0 16h7v1h-7zM10 16h2v1h-2zM13 16h1v1h-1zM17 16h1v1h-1zM20 16h2v1h-2zM23 16h1v1h-1zM26 16h1v1h-1zM28 16h1v1h-1zM31 16h1v1h-1zM2 17h3v1h-3zM7 17h1v1h-1zM9 17h6v1h-6zM18 17h1v1h-1zM21 17h1v1h-1zM23 17h1v1h-1zM27 17h1v1h-1zM29 17h1v1h-1zM0 18h3v1h-3zM4 18h3v1h-3zM9 18h2v1h-2zM12 18h1v1h-1zM16 18h1v1h-1zM18 18h1v1h-1zM20 18h1v1h-1zM25 18h1v1h-1zM30 18h3v1h-3zM1 19h1v1h-1zM7 19h2v1h-2zM11 19h1v1h-1zM14 19h1v1h-1zM16 19h3v1h-3zM20 19h2v1h-2zM23 19h1v1h-1zM26 19h2v1h-2zM31 19h2v1h-2zM4 20h3v1h-3zM11 20h2v1h-2zM14 20h1v1h-1zM16 20h4v1h-4zM21 20h1v1h-1zM23 20h3v1h-3zM27 20h1v1h-1zM31 20h1v1h-1zM1 21h2v1h-2zM7 21h1v1h-1zM9 21h2v1h-2zM13 21h6v1h-6zM24 21h3v1h-3zM31 21h2v1h-2zM0 22h2v1h-2zM3 22h5v1h-5zM9 22h2v1h-2zM13 22h1v1h-1zM15 22h1v1h-1zM19 22h1v1h-1zM22 22h1v1h-1zM25 22h1v1h-1zM27 22h1v1h-1zM29 22h2v1h-2zM32 22h1v1h-1zM1 23h2v1h-2zM7 23h8v1h-8zM16 23h1v1h-1zM19 23h1v1h-1zM21 23h2v1h-2zM24 23h2v1h-2zM28 23h2v1h-2zM0 24h1v1h-1zM2 24h1v1h-1zM5 24h3v1h-3zM9 24h2v1h-2zM12 24h6v1h-6zM20 24h2v1h-2zM23 24h6v1h-6zM32 24h1v1h-1zM8 25h4v1h-4zM13 25h1v1h-1zM19 25h2v1h-2zM22 25h1v1h-1zM24 25h1v1h-1zM28 25h2v1h-2zM32 25h1v1h-1zM0 26h7v1h-7zM10 26h3v1h-3zM20 26h1v1h-1zM22 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h4v1h-4zM0 27h1v1h-1zM6 27h1v1h-1zM8 27h1v1h-1zM12 27h5v1h-5zM19 27h4v1h-4zM24 27h1v1h-1zM28 27h1v1h-1zM32 27h1v1h-1zM0 28h1v1h-1zM2 28h3v1h-3zM6 28h1v1h-1zM9 28h1v1h-1zM12 28h1v1h-1zM14 28h1v1h-1zM16 28h1v1h-1zM19 28h4v1h-4zM24 28h6v1h-6zM0 29h1v1h-1zM2 29h3v1h-3zM6 29h1v1h-1zM8 29h2v1h-2zM12 29h4v1h-4zM17 29h1v1h-1zM21 29h1v1h-1zM23 29h1v1h-1zM26 29h1v1h-1zM28 29h3v1h-3zM0 30h1v1h-1zM2 30h3v1h-3zM6 30h1v1h-1zM10 30h2v1h-2zM14 30h1v1h-1zM18 30h1v1h-1zM20 30h3v1h-3zM24 30h1v1h-1zM28 30h1v1h-1zM32 30h1v1h-1zM0 31h1v1h-1zM6 31h1v1h-1zM9 31h1v1h-1zM12 31h1v1h-1zM14 31h4v1h-4zM20 31h2v1h-2zM23 31h3v1h-3zM29 31h1v1h-1zM0 32h7v1h-7zM8 32h1v1h-1zM11 32h1v1h-1zM21 32h1v1h-1zM23 32h3v1h-3zM28 32h2v1h-2zM31 32h1v1h-1z';
const SHARE_TITLE = 'Green Zone MO Guide';
const SHARE_DESC = 'Pathways, rules, calculators and numbers for the Green Zone, Emergency & Trauma Department, HKL. A reference tool only.';
const SHARE_HOST = APP_URL.replace(/^https:\/\//, '').replace(/\/$/, '');
/* Not inside a frame (the claude.ai artifact): there the share sheet is blocked, so Copy link stands in */
const canShare = () => { try { return typeof navigator.share === 'function' && window.top === window.self; } catch(e){ return false; } };
function shareGuide(btn, url = APP_URL){
  if (!canShare()) return copyText(url, {btn, ok:'Link copied'});
  try { navigator.share({title:SHARE_TITLE, text:SHARE_DESC, url}).catch(e => { if (!e || e.name !== 'AbortError') copyText(url, {btn, ok:'Link copied'}); }); }
  catch(e){ copyText(url, {btn, ok:'Link copied'}); }
}
/* The card a messaging app shows. On the share page it carries the real picture (og/preview.jpg, fetched only there);
   on the home tile it is drawn, so the front page loads nothing more. */
const shCard = img => `<span class="shc"><span class="shc-img">${img ? '<img src="og/preview.jpg" alt="" width="1200" height="630" decoding="async">' : ''}<span class="shc-mk">${LOGO}</span></span>` +
  `<span class="shc-t"><b>${SHARE_TITLE}</b><span>${esc(SHARE_DESC)}</span><small>${SHARE_HOST}</small></span></span>`;
/* The phone, its chat, the card that rises out of it toward you, and the code behind: all in 3D. It leans toward a mouse
   or pen (the tile's --tx and --ty, as for Install), turns as it crosses a touch screen, and stands still with reduced motion. */
const sh3Art = big => `<span class="sh3${big ? ' big' : ''}" aria-hidden="true"><span class="sh3-b"><i class="sh3-ph"></i><i class="sh3-sc"></i>` +
  `<i class="sh3-l l1"></i><i class="sh3-l l2"></i><span class="sh3-card">${shCard(big)}</span>` +
  `<span class="sh3-qr"><svg viewBox="-2 -2 37 37"><rect x="-2" y="-2" width="37" height="37" rx="3" fill="#fff"/><path d="${SHARE_QR}" fill="#0b110e" shape-rendering="crispEdges"/></svg></span>` +
  `<span class="sh3-go">${svg('share')}</span></span></span>`;
function renderHomeShare(){
  const el = $('#t-share'); if (!el) return;
  el.innerHTML = `<div class="hin-t"><div class="tile-h"><h2 id="h-share-t">Share the guide</h2><span class="tag">One link</span></div>` +
    `<p class="sub">Send it to a colleague: the link opens on any phone, and installs from there.</p><div class="links">` +
    (canShare() ? `<button type="button" class="in-go sm" data-hsh-go>${svg('share')}<span class="bl">Share</span></button>` : `<button type="button" class="in-go sm" data-hsh-copy>${svg('copy')}<span class="bl">Copy link</span></button>`) +
    `<a class="pill" href="#share">Card and QR code${svg('chev')}</a></div></div>${sh3Art(false)}`;
}
let shDone = false;
function renderShare(){
  const box = $('#shbox'); if (!box || shDone) return;
  shDone = true;
  const wa = 'https://wa.me/?text=' + encodeURIComponent(SHARE_TITLE + ': ' + APP_URL);
  const tg = 'https://t.me/share/url?url=' + encodeURIComponent(APP_URL) + '&text=' + encodeURIComponent(SHARE_TITLE);
  box.innerHTML = `<section class="tile t-emerald hin shl sh-hero" id="shhero" aria-labelledby="h-shhero"><div class="hin-t"><span class="lbl">One link, any phone</span>` +
    `<h2 id="h-shhero">Send the guide to a colleague</h2><p class="sub">They tap the link, the guide opens, and it installs from there. Nothing about you or your patients goes with it.</p>` +
    `<div class="links">${canShare() ? `<button type="button" class="in-go" data-shgo>${svg('share')}<span class="bl">Share</span></button>` : ''}` +
    `<button type="button" class="in-go${canShare() ? ' sh-alt' : ''}" data-shcopy>${svg('copy')}<span class="bl">Copy link</span></button>` +
    `<a class="pill" href="${wa}" target="_blank" rel="noopener noreferrer">WhatsApp${svg('ext')}</a><a class="pill" href="${tg}" target="_blank" rel="noopener noreferrer">Telegram${svg('ext')}</a></div>` +
    `<code class="sh-url" id="sh-url">${esc(SHARE_HOST)}/</code></div>${sh3Art(true)}</section>` +
    `<div class="sh-more"><section class="tile t-pearl sh-prev" aria-labelledby="h-shprev"><h3 id="h-shprev">What they will see</h3>` +
    `<p class="sub">Messaging apps such as WhatsApp and Telegram show this card under the link.</p>${shCard(true)}` +
    `<p class="sub">A link to one pathway or step shows the same card, then opens that step: copy it with ${svg('link')} on any step.</p></section>` +
    `<section class="tile t-pearl in-qr sh-qr" aria-labelledby="h-shqr"><div class="in-qr-w"><svg class="in-qr-c" viewBox="-3 -3 39 39" role="img" aria-label="QR code that opens the guide's web app">` +
    `<rect x="-3" y="-3" width="39" height="39" rx="3" fill="#fff"/><path d="${SHARE_QR}" fill="#0b110e" shape-rendering="crispEdges"/></svg></div>` +
    `<div><h3 id="h-shqr">Face to face</h3><p>Their phone's camera opens the guide from this code. On a computer, it opens on your phone the same way.</p></div></section></div>`;
  /* The picture shows once it has loaded; until then, or where it is not published, the card keeps its drawn mark */
  $$('#shbox .shc-img img').forEach(im => { const on = () => im.classList.add('on'); if (im.complete && im.naturalWidth) on(); else { im.addEventListener('load', on); im.addEventListener('error', () => im.remove()); } });
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-shgo],[data-shcopy],[data-hsh-go],[data-hsh-copy]'); if (!b) return;
  if (b.hasAttribute('data-shgo') || b.hasAttribute('data-hsh-go')) shareGuide(b);
  else copyText(APP_URL, {btn:b, el:b.hasAttribute('data-shcopy') ? $('#sh-url') : null, ok:'Link copied'});
});
IDX.push({href:'#share', title:'Share the guide', kind:'Setting', meta:'One link, a QR code, and the card messaging apps show', body:'share send colleague friend recommend whatsapp telegram link copy link qr code new staff house officer', ic:'share', c:'c-meta'});
renderHomeShare();

/* ================= Ask in your own words (12 Nov 2026) =================
   Only in the claude.ai artifact, where the host lets a page ask Claude (the sample capability), and only on a tap. The guide
   first finds up to 40 candidate entries and steps for the question in its own index; Claude is asked only which of those (by
   number) answer it, and the page shows the guide's own titles and text for the ones it picks: Claude writes nothing that
   appears on screen (standing rule 8), and a pick that is not on the list is ignored. The question goes to Claude under the
   viewer's own account, so the button says not to type a patient's name or details (standing rule 4). Elsewhere the button
   is not shown. */
let askFn = null, askDead = false, askCtl = null;
const ASK_STOP = new Set('a an the of to in on for and or with is are was be by at as it its this that what which who how do does did should can could would will i we my me our you your patient pt please if when then than there any about from into get give need needs'.split(' '));
function askCands(q){
  const ws = [...new Set([...terms(aliasQ(q)).map(w => ukOf(w.replace(/[^a-z0-9-]/g, ''))), ...aliasesOf(q).flatMap(a => terms(a.to))].filter(w => w.length > 1 && !ASK_STOP.has(w)))];
  if (!ws.length) return [];
  const res = ws.map(w => new RegExp('(^|[^a-z0-9])' + reEsc(w), 'i')), out = [];
  for (const e of IDX){
    let s = 0; for (const re of res) s += re.test(e.title) ? 3 : re.test(e.kw || '') ? 2 : re.test(e.body) ? 1 : 0;
    if (s) out.push({e, s});
  }
  for (const [id, p] of Object.entries(P)) for (const [k, n] of Object.entries(p.nodes)){
    if (k === p.start) continue;
    const t = nodeWords(n).join(' · ');
    let s = 0; for (const re of res) if (re.test(t)) s++;
    if (s >= Math.min(2, res.length)){ const c = catOf(id); out.push({e:{href:`#${id}--${k}`, title:nodeText(n), kind:'Step', meta:p.title, body:t, ic:c.ic, c:c.c, j:c.j}, s:s + .2}); }
  }
  const seen = new Set();
  return out.sort((a, b) => b.s - a.s).filter(x => !seen.has(x.e.href) && seen.add(x.e.href)).slice(0, 40).map(x => x.e);
}
const askBtn = q => askFn && !askDead && q.trim().split(/\s+/).length >= 2 ? `<button type="button" class="pal-ask" id="gask">${svg('spark')}<span><b>Ask in your own words</b><small>Claude picks the steps in the guide that fit your question; what you see is the guide's own text. Don't type a patient's name or details.</small></span></button>` : '';
/* Exact quotes (13 Nov 2026): Claude may also name the line that answers; the page shows it only if it is the guide's own text */
const askText = e => ((e.title || '') + ' · ' + (e.body || '')).replace(/\s+/g, ' ');
function askQuote(e, quote){
  const qt = String(quote).replace(/\s+/g, ' ').trim().replace(/^["“‘']+|["”’']+$/g, '').trim();
  return qt.length >= 12 && qt.split(' ').length <= 40 && askText(e).includes(qt) ? qt : null;
}
async function askGuide(){
  const q = $('#gq').value.trim(), body = $('#palbody');
  const cands = askCands(q);
  if (!cands.length){ body.innerHTML = `<div class="pal-none">The guide has nothing that matches “${esc(q)}”. Try other words.</div>`; return; }
  if (askCtl) askCtl.abort();
  const ctl = askCtl = new AbortController();
  body.innerHTML = `<div class="pal-asking" role="status">${svg('spark')}<span>Finding the steps in the guide for “${esc(q)}”…</span><button type="button" class="sm" id="gaskstop">Stop</button></div>`;
  $('#gaskstop').addEventListener('click', () => { ctl.abort(); renderPal(); });
  const list = cands.map((e, i) => `c${i + 1} | ${e.title} | ${e.kind} | ${e.meta || ''} | ${askText(e).slice(0, 600)}`).join('\n');
  const input = `You help a doctor in a Malaysian emergency department find the right place in a clinical reference guide. Do not give clinical advice.

The doctor's question: "${q.replace(/"/g, "'")}"

Candidate places in the guide, one per line (id | title | kind | where | the guide's own text, cut short):
${list}

Reply with JSON only, in this form: {"picks": [{"id": "c3", "quote": "..."}, {"id": "c1", "quote": ""}]}. List up to 3 candidate ids, best first, that would best answer the question. Use an empty list if none fits. Pick only ids from the list above. For each pick, "quote" is the one sentence or line from that candidate's own text that best answers the question, copied exactly, character for character, at most 30 words; use "" if no single line answers it. Never write words of your own in a quote.`;
  try {
    const r = await askFn.json(input, {modelTier:'default', signal:ctl.signal});
    if (ctl !== askCtl || $('#pal').hidden) return;
    /* A pick is "c3" or {id:"c3", quote:"..."}. A quote is kept only if the guide's own text holds it letter for letter */
    const quotes = new Map();
    const picks = (r && Array.isArray(r.picks) ? r.picks : []).map(x => {
      const m = /^c(\d+)$/.exec(String(x && typeof x === 'object' ? x.id : x)), e = m && cands[+m[1] - 1];
      if (e && x && typeof x === 'object' && typeof x.quote === 'string'){ const qt = askQuote(e, x.quote); if (qt && !quotes.has(e)) quotes.set(e, qt); }
      return e;
    }).filter(Boolean).filter((e, i, a) => a.indexOf(e) === i).slice(0, 3);
    const ts = terms(q);
    body.innerHTML = picks.length ? `<div class="pal-fix" id="gaskn">Picked by Claude from the guide for “${esc(q)}”. The words below are the guide's own: open the step and check it before you act.${quotes.size ? ' A line in quotation marks is the guide\'s own, checked letter for letter.' : ''}</div><ul class="pal-res" id="gaskres" role="listbox">${picks.map(e => palEntry(e, ts, true, quotes.has(e) ? new Map([[e, '“' + quotes.get(e) + '”']]) : null)).join('')}</ul>`
      : `<div class="pal-none" id="gaskn">Claude found nothing in the guide that answers “${esc(q)}”. Try search with other words.</div>`;
    palSel = 0; markSel();
  } catch(e){
    if (ctl.signal.aborted || $('#pal').hidden) return;
    if (e && e.code === 'not_granted'){ askDead = true; renderPal(); return; }
    body.innerHTML = `<div class="pal-none">${e && e.code === 'rate_limited' ? 'Too many questions just now. Try again in a minute.' : 'Claude could not be asked just now. Search still works.'}</div>`;
  }
}
$('#palbody').addEventListener('click', e => { if (e.target.closest('#gask')) askGuide(); else if (e.target.closest('#gaidl')){ aiTried = true; aiLoad(); renderPal(); } });
if (window.claude && typeof window.claude.use === 'function') window.claude.use('sample').then(s => { if (s && typeof s.json === 'function'){ askFn = s; if (!$('#pal').hidden) renderPal(); } }).catch(() => {});

/* ================= Flag this step (12 Nov 2026) =================
   An MO who finds a number that looks wrong, a line out of date, an unclear step or a broken link picks one reason, and the
   guide writes a short report (where: the entry, the step and its link; what: the reason; the guide's version) to send to the
   guide owner on WhatsApp or the phone's share sheet, or to copy. Preset reasons only, no box to type in, nothing stored, and
   nothing is sent unless the MO sends it (standing rule 4). */
const FLAG_WHY = ['A number or dose looks wrong', 'It looks out of date', 'It is unclear', 'A link or picture does not work', 'Something else (I will explain)'];
let flagWhy = 0, flagFrom = null;
/* Comment on this step (13 Nov 2026, Krishna: "add claude.ai's comment box for flagged steps"): in the claude.ai copy only, the
   flag dialog can open claude.ai's own comment box on the step's heading (the composer-only grant: the page posts nothing and
   never reads a comment; claude.ai does the typing, the name and the display). The heading carries an id per step, so each
   step's comments sit on their own step. Rule 4: the dialog says never to write a patient's name or details. */
let cmts = null;
if (window.claude && typeof window.claude.use === 'function') window.claude.use('comments').then(c => { if (c && typeof c.openComposer === 'function') cmts = c; }).catch(() => {});
function commentStep(){
  const el = $('#cur h2'); if (!cmts || !el) return;
  /* the report (with the step's link) goes on the clipboard, so the comment names its step even where the box's place on the page does not */
  copyText(flagText(), {ok:'Report copied: paste it into the comment box'});
  closeFlag(false);
  let target = {element:el};
  try { const r = document.createRange(); r.selectNodeContents(el); target = {range:r}; } catch(e){}
  cmts.openComposer(target).then(r => { if (!r || !r.opened) toast('The comment box did not open. Tap Comment again, or send the report by WhatsApp.'); })
    .catch(e => { if (e && /unavailable|not_granted|capability_/.test(e.code || '')) cmts = null; toast('Comments are not open to you here. Send the report by WhatsApp or Copy.'); });
}
function flagText(){
  const p = P[state.id], n = p.nodes[state.cur];
  return `Green Zone MO Guide: please check this step.\nWhere: ${p.title}: ${nodeText(n)}\n${APP_URL}#${state.id}${state.cur === p.start ? '' : '--' + state.cur}\nWhat: ${FLAG_WHY[flagWhy]}\n(${APP_VER})`;
}
function drawFlag(){
  const share = !FRAMED && typeof navigator.share === 'function';
  $('#flagbody').innerHTML = `<div class="flag-w" role="group" aria-label="What is wrong">${FLAG_WHY.map((w, i) => `<button type="button" data-fw="${i}" aria-pressed="${i === flagWhy}">${esc(w)}</button>`).join('')}</div>
    <pre class="flag-t" id="flagt">${esc(flagText())}</pre>
    <p class="ptq-how">Send it to the guide owner. Don't add a patient's name or details.</p>
    <div class="ptq-a"><a class="btn sm" id="flagwa" href="https://wa.me/?text=${encodeURIComponent(flagText())}" target="_blank" rel="noopener noreferrer">${svg('send')}<span>WhatsApp</span></a>${share ? `<button type="button" class="sm" data-flagshare>${svg('share')}<span>Share</span></button>` : ''}<button type="button" class="sm" data-flagcopy>${svg('copy')}<span class="bl">Copy</span></button></div>
    ${cmts ? `<div class="flag-c"><button type="button" class="sm" data-flagcmt>${svg('comment')}<span>Comment on this step in claude.ai</span></button><p class="ptq-how">The comment box opens on this step, and the report above is copied: paste it in, then add a line if you need to. It is posted with your claude.ai name, and everyone who can comment on the guide sees it. Never write a patient's name, IC or anything that identifies them.</p></div>` : ''}`;
}
function openFlag(){
  if (!state.id) return;
  flagWhy = 0; flagFrom = document.activeElement; drawFlag();
  $('#flagdlg').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#flagclose').focus();
}
function closeFlag(restore){
  if ($('#flagdlg').hidden) return;
  $('#flagdlg').hidden = true; document.documentElement.style.overflow = '';
  if (restore && flagFrom && flagFrom.focus) flagFrom.focus();
}
$('#flagclose').addEventListener('click', () => closeFlag(true));
$('#flagdlg').addEventListener('click', e => {
  if (e.target === $('#flagdlg')) return closeFlag(true);
  const b = e.target.closest('[data-fw], [data-flagcopy], [data-flagshare], [data-flagcmt]'); if (!b) return;
  if (b.hasAttribute('data-flagcmt')) commentStep();
  else if (b.dataset.fw){ flagWhy = +b.dataset.fw; drawFlag(); const nb = $(`#flagbody [data-fw="${flagWhy}"]`); if (nb) nb.focus(); }
  else if (b.hasAttribute('data-flagcopy')) copyText(flagText(), {btn:b, el:$('#flagt'), ok:'Report copied'});
  else if (b.hasAttribute('data-flagshare')) navigator.share({text:flagText()}).catch(() => {});
});

/* ================= Home care advice on the patient's own phone (12 Nov 2026) =================
   "Show to patient" brings up a QR code; the patient scans it and the advice opens on their phone, on the public web app's
   #pt-<id> page (#pt-<id>-ms in Bahasa Melayu): the advice as the guide gives it, with Listen where it was recorded, and
   nothing else from the guide on screen. Only advice written for the patient: the two CPG leaflets and the advice tabs that
   are read aloud (PT_QR, from src/ptqr.js). Nothing about the patient is sent or kept: the code holds only the address.
   The ebook's dengue pathway hands out the CPG's leaflet, since the dengue topic follows the CPG (Krishna, 12 Nov 2026). */
const PT_ALIAS = {dengue:'dengue-cpg'}, DOC_TITLE = document.title;
const ptKey = id => { const k = PT_ALIAS[id] || id; return typeof PT_QR !== 'undefined' && PT_QR[k] && P[k] ? k : null; };
const stripPages = a => a.replace(/\s*\([^()]*\bp\s?(?:\d|[ivxl]+\b)[^()]*\)/g, '');
const PT_TXT = {
  en:{dept:'Emergency & Trauma Department, Hospital Kuala Lumpur', h:'Home care advice', size:'Larger text', foot:'Given to you by your doctor in the Emergency Department. This page keeps nothing about you.'},
  ms:{dept:'Jabatan Kecemasan & Trauma, Hospital Kuala Lumpur', h:'Nasihat penjagaan di rumah', size:'Tulisan lebih besar', foot:'Diberikan oleh doktor anda di Jabatan Kecemasan. Halaman ini tidak menyimpan sebarang maklumat tentang anda.'}
};
let ptCur = null, ptBack = false;
function renderPt(id, lang, back){
  ptCur = id;
  const p = P[id], lg = lang === 'ms' && p.leaflet && PT_QR[id].ms ? 'ms' : 'en', T = PT_TXT[lg];
  let body;
  if (p.leaflet){
    const L = p.leaflet, d = L[lg];
    body = `<div class="leaf pt-leaf" lang="${lg}">${PT_QR[id].ms ? `<div class="seg leaf-lang" role="group" aria-label="Language">${['en', 'ms'].map(k => `<button type="button" data-ptlang="${k}" aria-pressed="${lg === k}" lang="${k}">${esc(L[k].lang)}</button>`).join('')}</div>` : ''}
      ${READ_LEAF[id] ? listenBar(READ_LEAF[id] + '-' + lg, lg === 'ms' ? 'Dengar dalam Bahasa Melayu' : 'Listen in English') : ''}
      ${filmCard(id, lg)}
      <h2 class="leaf-t">${esc(d.title)}</h2>${d.groups.map(g => `<section class="leaf-g${g.warn ? ' warn' : ''}"><h5>${g.warn ? svg('stop') : ''}${esc(g.h)}</h5>${g.p ? `<p>${esc(g.p)}</p>` : ''}<ul>${g.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>`).join('')}
      <p class="src">${esc(L.src)}</p></div>`;
  } else {
    body = `<div class="pt-adv" lang="en">${READ_ADV[id] ? listenBar(READ_ADV[id], 'Listen to this advice') : ''}
      <h2 class="leaf-t">${esc(p.title)}</h2><ol class="pt-list">${p.advice.map(a => `<li>${esc(stripPages(a))}</li>`).join('')}</ol>
      <p class="src">From <i>The Clinical Pathway in Emergency for Medical Officer</i>, Emergency &amp; Trauma Department, Hospital Kuala Lumpur (2025).</p></div>`;
  }
  $('#ptbody').innerHTML = (back ? `<button type="button" class="sm pt-back" data-ptback>${svg('back')}<span>Back to the guide</span></button>` : '') + `<header class="pt-h"><span class="mark" aria-hidden="true" data-mark></span><div class="pt-ht"><small>${esc(T.dept)}</small><h1 id="h-pt">${esc(T.h)}</h1></div>
    <button type="button" class="sm pt-size" data-ptsize aria-pressed="${prefs.size === 'large'}" aria-label="${esc(T.size)}"><b class="aa" aria-hidden="true">Aa</b><span aria-hidden="true">${esc(T.size)}</span></button></header>${body}<p class="pt-f">${esc(T.foot)}</p>`;
  fillIcons($('#ptbody'));
  document.title = (lg === 'ms' ? 'Nasihat penjagaan di rumah' : 'Home care advice') + ' · HKL';
}
$('#ptbody').addEventListener('click', e => {
  if (e.target.closest('[data-ptback]')){ NAV.length ? navBack(NAV.length - 1) : (location.hash = '#home'); return; }
  const l = e.target.closest('[data-ptlang]');
  if (l && ptCur){ location.hash = '#pt-' + ptCur + (l.dataset.ptlang === 'ms' ? '-ms' : ''); return; }
  const b = e.target.closest('[data-ptsize]'); if (!b) return;
  prefs.size = prefs.size === 'large' ? 'std' : 'large'; store.set('gz-size', prefs.size); applyPrefs();
  b.setAttribute('aria-pressed', prefs.size === 'large');
});
/* The QR dialog, opened from a discharge outcome, the Discharge advice tab or the Home care advice tab */
let ptqId = null, ptqLang = 'en', ptqFrom = null;
function drawPtq(){
  const k = ptqId, q = PT_QR[k][ptqLang] || PT_QR[k].en, p = P[k], n = q.n;
  $('#ptqbody').innerHTML = `<p class="ptq-t"><b>${esc(p.leaflet ? p.leaflet[q === PT_QR[k].ms ? 'ms' : 'en'].title : p.title)}</b></p>
    ${PT_QR[k].ms ? `<div class="seg" id="ptqlang" role="group" aria-label="Language of the advice">${['en', 'ms'].map(x => `<button type="button" data-ptql="${x}" aria-pressed="${ptqLang === x}" lang="${x}">${esc(p.leaflet[x].lang)}</button>`).join('')}</div>` : ''}
    <div class="ptq-c"><svg viewBox="-4 -4 ${n + 8} ${n + 8}" role="img" aria-label="QR code that opens this advice on the patient's phone"><rect x="-4" y="-4" width="${n + 8}" height="${n + 8}" fill="#fff"/><path d="${q.d}" fill="#000" shape-rendering="crispEdges"/></svg></div>
    <p class="ptq-how">Ask the patient to point their phone camera at the code. The advice opens on their phone${READ_LEAF[k] || READ_ADV[k] ? ', with Listen' : ''}, and nothing about them is sent or kept.</p>
    <div class="ptq-a"><span class="ptq-u" id="ptqu">${esc(q.u)}</span><button type="button" class="sm" data-ptqcopy>${svg('copy')}<span class="bl">Copy link</span></button><a class="btn sm" href="#pt-${k}${q === PT_QR[k].ms ? '-ms' : ''}" data-ptqopen>${svg('ext')}<span>See what they see</span></a></div>`;
}
function openPtq(id, lang){
  const k = ptKey(id); if (!k) return;
  ptqId = k; ptqLang = lang === 'ms' && PT_QR[k].ms ? 'ms' : 'en'; ptqFrom = document.activeElement;
  drawPtq();
  $('#ptq').hidden = false; document.documentElement.style.overflow = 'hidden';
  $('#ptqclose').focus();
}
function closePtq(restore){
  if ($('#ptq').hidden) return;
  $('#ptq').hidden = true; document.documentElement.style.overflow = '';
  if (restore && ptqFrom && ptqFrom.focus) ptqFrom.focus();
}
$('#ptqclose').addEventListener('click', () => closePtq(true));
$('#ptq').addEventListener('click', e => {
  if (e.target === $('#ptq')) return closePtq(true);
  const b = e.target.closest('[data-ptql], [data-ptqcopy], [data-ptqopen]'); if (!b) return;
  if (b.dataset.ptql){ ptqLang = b.dataset.ptql; drawPtq(); const nb = $(`#ptqlang [data-ptql="${ptqLang}"]`); if (nb) nb.focus(); }
  else if (b.hasAttribute('data-ptqcopy')) copyText($('#ptqu').textContent, {btn:b, el:$('#ptqu'), ok:'Link copied'});
  else if (b.hasAttribute('data-ptqopen')) closePtq(false);
});
document.addEventListener('click', e => { const b = e.target.closest('[data-ptqr]'); if (b) openPtq(b.dataset.ptqr, b.dataset.lang || (typeof leafLang !== 'undefined' ? leafLang : 'en')); });
const ptqBtn = (id, cls) => ptKey(id) ? `<button type="button" class="${cls || 'sm'}" data-ptqr="${id}">${svg('qr')}<span class="bl">Show to patient</span></button>` : '';

/* ================= Routing ================= */
function route(){
  stopReader(); pauseFilms(); sayStop();
  const h = decodeURIComponent(location.hash.slice(1));
  let m, changed = false;
  closePal(false); closeSettings(false); closeSheet(); closeMap(false); closePtq(false); closeFlag(false); closeNavList(false);
  const navT = h === 'search' ? null : navBefore('#' + (h || 'home'));
  const pt = h.match(/^pt-([\w-]+?)(-ms)?$/), ptId = pt && ptKey(pt[1]) === pt[1] ? pt[1] : null;
  document.documentElement.classList.toggle('pt-mode', !!ptId);
  if (!ptId && document.title !== DOC_TITLE) document.title = DOC_TITLE;
  /* Opened from inside the guide (See what they see), the page offers the way back; on the patient's own phone it does not */
  if (ptId){ if (curView !== 'pt') ptBack = routed; renderPt(ptId, pt[2] ? 'ms' : 'en', ptBack); changed = showView('pt'); }
  else if (P[h]) showPath(h);
  else if ((m = h.match(/^([\w-]+?)--(\w+)$/)) && P[m[1]] && P[m[1]].nodes[m[2]]) showPath(m[1], m[2]);
  else if (h === 'pathways' || h === 'saved' || h === 'guidelines'){ const f = {saved:'saved', guidelines:'cpg'}[h]; if (f && libF !== f){ libF = f; renderLib(); } changed = showView('pathways'); }
  else if (['rules', 'tools', 'numbers', 'links', 'pharmacy', 'dilution', 'antibiotics', 'antidotes', 'abbreviations', 'new', 'poster', 'about', 'install'].includes(h)){ changed = showView(h); if (h === 'antidotes' && AX.state === 'idle') renderAx(); if (h === 'abbreviations' && KB.state === 'idle') renderKb(); }
  else if (h === 'share'){ renderShare(); changed = showView('share'); }
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
  navAfter('#' + (h || 'home'), navT);
  requestAnimationFrame(fadeRows);
}
/* ================= Back through this visit (18 Nov 2026) =================
   Krishna: "If after opening new content, create back button so that can go back to the previous content or page. Make it
   interactive and high quality." Answering a step does not change the address, so the browser's own back used to land on a
   pathway's first question. Now each page left is kept as a snapshot: its address; on a pathway the step, the answers given
   (with their auto marks) and the open tab; the scroll position; and a search it was opened from. Back restores it: the arrow
   in the top bar (where the logo sits, so the menu never moves), the sidebar's button on a desktop, the hold list (press and
   hold, right-click, or the down arrow key) for earlier pages, and the phone's own back where the browser returns to a page
   the guide tagged (history.state). Every other change of address is a fresh visit, as before: a page opened again by its
   address starts at its first question. The guide moves by setting the address, never history.back(), so in the claude.ai
   frame it cannot step out of the guide. Memory only (rule 4): nothing is written to storage, and a reload clears it. */
const NAV_LOAD = Math.random().toString(36).slice(2, 8), NAV_MAX = 30, NAV_LIST = 8;
let NAV = [], navSeq = 0, navHere = null, navWant = null, navPopSt = null, navPal = null, navFrom = null, navFromAt = 0, navPeekT = 0;
const NAV_SNAPS = new Map(); /* a tagged history entry's key -> the page as it was left, for the browser's own back and forward */
const NAV_IC = {home:'home', rules:'rule', tools:'check', calc:'calc', numbers:'phone', links:'link', pharmacy:'pill', dilution:'syringe', new:'spark', poster:'poster', about:'info', intro:'spark', install:'install', share:'share', learn:'route', pt:'heart'};
addEventListener('popstate', e => { navPopSt = e.state; });
/* Where a tap came from: a link inside the content or the search opens the arrow to show where it leads; the tab bar and the menu do not */
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('a[href^="#"], [data-gocat]');
  if (a){ navFrom = a.closest('#viewport, #pal') ? 'content' : 'chrome'; navFromAt = Date.now(); }
}, true);
function navTag(){
  try {
    const s = history.state; if (s && s.gzl === NAV_LOAD && s.gz) return s.gz;
    const k = ++navSeq; history.replaceState({gz:k, gzl:NAV_LOAD}, ''); return k;
  } catch (e) { return ++navSeq; } /* a frame that refuses: the phone's own back behaves as before; the guide's own back still works */
}
/* The page on screen, as it stands */
function navSnap(){
  if (!navHere) return null;
  const s = {h:navHere.h, k:navHere.k, y:window.scrollY, j:''};
  if (curView === 'run' && state.id && P[state.id]){
    const p = P[state.id], n = p.nodes[state.cur], c = catOf(state.id) || {};
    s.st = {id:state.id, trail:state.trail.map(t => ({...t})), cur:state.cur, tab:ptabSel};
    s.t = p.title; s.s = (state.trail.length ? 'Step ' + (state.trail.length + 1) + ' · ' : '') + clip(n.end ? n.title : nodeText(n), 70);
    s.ic = c.ic || (p.grp === 'rules' ? 'rule' : 'path'); s.j = c.j || '';
  } else {
    const v = curView || 'home', calc = (navHere.h.match(/^#calc-([a-z0-9]+)$/) || [])[1];
    s.t = v === 'pathways' ? ({saved:'Saved', cpg:'Guidelines'}[libF] || 'Pathways') : v === 'calc' && calc && CALCS[calc] ? CALCS[calc].t
      : v === 'learn' ? ({journey:'The patient journey', tour:'The tour', quiz:'The quiz'}[curSub] || VIEW_TITLE.learn) : v === 'pt' ? 'Advice for the patient' : VIEW_TITLE[v] || 'Home';
    s.s = v === 'calc' && calc ? 'Calculator' : (navHere.h.match(/^#journey-(\d)$/) || [])[1] ? 'Stop ' + navHere.h.slice(-1) : '';
    s.ic = v === 'pathways' ? (libF === 'saved' ? 'star' : 'path') : NAV_IC[v] || 'home';
  }
  return s;
}
/* Before a page changes: keep the one being left, and say whether this is a way back */
function navBefore(hh){
  const pop = navPopSt; navPopSt = null;
  const want = navWant && navWant.h === hh ? navWant : null; navWant = null;
  const pal = navPal && Date.now() - navPal.at < 2500 ? navPal.q : null; navPal = null;
  const leave = navSnap();
  if (leave){
    if (pal){ leave.pal = pal; leave.t = 'Search'; leave.s = '“' + pal + '”'; leave.ic = 'search'; leave.j = ''; }
    NAV_SNAPS.set(leave.k, leave);
  }
  let target = want;
  if (!target && pop && pop.gzl === NAV_LOAD && NAV_SNAPS.has(pop.gz) && !(leave && pop.gz === leave.k)) target = NAV_SNAPS.get(pop.gz);
  const i = target ? NAV.lastIndexOf(target) : -1;
  if (i >= 0){ NAV = NAV.slice(0, i); return target; }
  /* A fresh visit (or the browser's forward): the page left goes on the stack, unless it is the same page, the intro,
     or the patient's page in its other language; a pathway opened again by its own address, with answers given, is kept */
  if (leave && !/^#intro$/.test(leave.h)){
    const same = leave.h === hh && !leave.pal && !(leave.st && leave.st.trail.length);
    const ptLang = /^#pt-/.test(leave.h) && leave.h.replace(/-ms$/, '') === hh.replace(/-ms$/, '');
    if (!same && !ptLang){ NAV.push(leave); if (NAV.length > NAV_MAX) NAV.shift(); }
  }
  return target;
}
/* After it changes: tag the entry, restore what was kept, and draw the button */
function navAfter(hh, target){
  navHere = {h:hh, k:navTag()};
  if (target){
    if (target.st && curView === 'run' && P[target.st.id]){
      const p = P[target.st.id];
      state = {id:target.st.id, trail:target.st.trail.map(t => ({...t})), cur:p.nodes[target.st.cur] ? target.st.cur : p.start};
      ptabSel = target.st.tab; land = false; draw(false); setTopTitle(p.title);
    }
    const y = target.y; if (vtOn) window.scrollTo(0, y); requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, y)));
    if (!REDUCED && !vtOn){ const v = $('#viewport > .view:not([hidden])'); if (v){ v.classList.remove('enter', 'enter-back'); void v.offsetWidth; v.classList.add('enter-back'); } }
    if (target.pal) setTimeout(() => openPal(target.pal), 0);
  }
  navDraw(!target && navFrom === 'content' && Date.now() - navFromAt < 2000);
  navFrom = null;
}
function navDraw(peek){
  const s = NAV[NAV.length - 1], on = !!s && curView !== 'pt';
  $('#topbar').classList.toggle('has-back', on);
  $$('[data-gback]').forEach(b => {
    b.hidden = !on; if (!on) return;
    b.setAttribute('aria-label', 'Back to ' + s.t + (s.s ? ', ' + s.s : ''));
    b.title = 'Back to ' + s.t + '. Press and hold for earlier pages.';
  });
  if (on){ $('#gbl').textContent = s.t; $('#sbt').textContent = s.t; $('#sbs').textContent = s.s || ''; $('#sbs').hidden = !s.s; }
  const g = $('#gback'); clearTimeout(navPeekT); g.classList.remove('peek');
  if (on && peek){ void g.offsetWidth; g.classList.add('peek'); navPeekT = setTimeout(() => g.classList.remove('peek'), 2600); }
}
/* Back: one page, or (from the hold list) several */
function navBack(i){
  const s = NAV[i]; if (!s) return;
  closeNavList(false); navWant = s; buzz('tick');
  vtGo(() => { if (location.hash === s.h) route(); else location.hash = s.h; }, {back:true});
}
/* Page transitions (23 Nov 2026): a tap on a tile that opens a page grows the tile into the page's banner, and the back
   button slides the earlier page in from the left. Measured at CPU slowed 4 times on a phone: a transition shows the new
   page about one to four frames later (tile 293 ms against 227, back 150 against 126) and finishes about 0.3 s after
   that; on other links (a library row, a search result) Chrome aborted it and the page came 40 to 90 ms later for nothing,
   so plain links change page at once, as before. The View
   Transitions API (Chrome 111, Safari 18, Firefox 144; same-document transitions Baseline since October 2025); where a
   browser lacks it, or motion is reduced, the page changes as before. Rules kept: never for an answer on the same page,
   200 ms or so, a tap during one finishes it at once, and the guide never waits on an event that may not come (250 ms at
   most). While the new page is drawn the browser holds the old picture, so nothing in between shows. */
function vtGo(go, o){
  o = o || {};
  if (!VT_OK || REDUCED || vtOn || document.hidden){ go(); return; }
  const root = document.documentElement, src = o.src && o.src.isConnected ? o.src : null;
  root.classList.add('vt-on'); root.classList.toggle('vt-back', !!o.back);
  if (src) src.style.viewTransitionName = 'gz-hero';
  vtOn = true;
  let t, started = false, dog = 0;
  const skip = () => { try { if (t) t.skipTransition(); } catch(e){} };
  const end = () => {
    clearTimeout(dog);
    vtOn = false; root.classList.remove('vt-on', 'vt-back');
    removeEventListener('pointerdown', skip, true);
    $$('[style*="view-transition-name"]').forEach(el => { el.style.viewTransitionName = ''; });
  };
  try {
    t = document.startViewTransition(() => new Promise(res => {
      started = true;
      if (src) src.style.viewTransitionName = '';
      const h0 = location.hash; let to = 0;
      const done = () => {
        clearTimeout(to); removeEventListener('hashchange', done);
        if (src){ const hero = $('#viewport > .view:not([hidden]) :is(.run-hero, .phx-hero, .lk-hero)'); if (hero && hero.getClientRects().length) hero.style.viewTransitionName = 'gz-hero'; }
        res();
      };
      to = setTimeout(done, 250);
      addEventListener('hashchange', done); /* after route(), whose listener came first */
      try { go(); } catch(e){ done(); throw e; }
      if (location.hash === h0) done(); /* routed at once, or nothing changed */
    }));
  } catch(e){ end(); go(); return; }
  /* The browser changes the page only after it has drawn the old one. Where it draws no frame (a page behind another
     window, seen on 23 Nov 2026 in a hidden browser pane), the tap would wait; after 300 ms the transition is skipped,
     which changes the page at once. */
  dog = setTimeout(() => { if (!started) skip(); }, 300);
  addEventListener('pointerdown', skip, {capture:true, once:true});
  t.ready.catch(() => {}); /* skipped or aborted (the screen turned, say): the page has changed all the same */
  t.finished.then(end, end);
}
/* A tap on a tile that links to another page of the guide: through a page transition. Other links, links that other
   handlers take over (preventDefault), the search page, a step of the page already open, and links with a modifier key
   change page at once. */
function vtPage(h){
  if (!h || h.length < 2 || h === '#search') return false;
  const id = x => x.slice(1).split('--')[0];
  return id(h) !== id(location.hash || '#home');
}
/* The hold list: the earlier pages of this visit, newest first */
let navListFrom = null;
function openNavList(btn, focus){
  const m = $('#gbm'); if (!NAV.length) return;
  const rows = []; for (let i = NAV.length - 1, n = 1; i >= 0 && n <= NAV_LIST; i--, n++){ const s = NAV[i];
    rows.push(`<li><button type="button" data-gbto="${i}"><span class="ic ${s.j ? 'j ' + s.j : 'gbm-ic'}">${svg(s.ic || 'path')}</span><span class="gbm-t"><b>${esc(s.t)}</b>${s.s ? `<small>${esc(s.s)}</small>` : ''}</span><span class="gbm-n">${n === 1 ? 'Back' : n + ' back'}</span></button></li>`); }
  $('#gbml').innerHTML = rows.join('');
  const r = btn.getBoundingClientRect();
  const wide = innerWidth >= 1100, mw = Math.min(380, innerWidth - 20); /* a desktop opens it beside the menu, a phone under the top bar */
  m.style.top = Math.round(wide ? r.top : r.bottom + 8) + 'px'; m.style.left = Math.round(wide ? r.right + 12 : Math.max(10, Math.min(r.left, innerWidth - mw - 10))) + 'px';
  if (m.hidden){ navListFrom = btn; m.hidden = false; buzz('tick'); }
  btn.setAttribute('aria-expanded', 'true');
  if (focus){ const f = m.querySelector('button'); if (f) f.focus(); }
}
function closeNavList(restore){
  const m = $('#gbm'); if (!m || m.hidden) return;
  m.hidden = true; $$('[data-gback]').forEach(b => b.setAttribute('aria-expanded', 'false'));
  if (restore && navListFrom && navListFrom.focus) navListFrom.focus();
}
(function(){
  let held = false, t = 0;
  const stop = () => clearTimeout(t);
  document.addEventListener('pointerdown', e => {
    const b = e.target.closest && e.target.closest('[data-gback]');
    if (!b){ if (!(e.target.closest && e.target.closest('#gbm'))) closeNavList(false); return; }
    held = false; stop(); t = setTimeout(() => { held = true; openNavList(b, false); }, 450);
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => document.addEventListener(ev, stop, true));
  document.addEventListener('contextmenu', e => { const b = e.target.closest && e.target.closest('[data-gback]'); if (!b) return; e.preventDefault(); stop(); held = true; openNavList(b, false); });
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('[data-gback]');
    if (b){ e.preventDefault(); const h = held; held = false; if (h && !$('#gbm').hidden) return; /* the release of a long press */ navBack(NAV.length - 1); return; }
    const r = e.target.closest && e.target.closest('[data-gbto]'); if (r){ navBack(+r.dataset.gbto); }
  });
  document.addEventListener('keydown', e => {
    const b = e.target.closest && e.target.closest('[data-gback]');
    if (b && (e.key === 'ArrowDown' || e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10'))){ e.preventDefault(); openNavList(b, true); return; }
    if ($('#gbm').hidden) return;
    if (e.key === 'Escape'){ e.preventDefault(); e.stopPropagation(); closeNavList(true); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){ const l = [...$$('#gbml button')], i = l.indexOf(document.activeElement); if (i < 0) return; e.preventDefault(); l[(i + (e.key === 'ArrowDown' ? 1 : l.length - 1)) % l.length].focus(); }
  }, true);
})();
/* On a phone the on-shift views open on the sentence that carries their rule; More shows the rest */
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('[data-vmore]'); if (!b) return;
  const h = b.closest('.vhead'), open = !h.classList.contains('open');
  h.classList.toggle('open', open); b.setAttribute('aria-expanded', open); b.textContent = open ? 'Less' : 'More';
});

/* ================= Wiring ================= */
fillIcons(document);
applyPrefs();
clipsOn = prefs.clips === 'on';
$('#cnt-path').textContent = Object.keys(P).length;
$('#cnt-rule').textContent = FLOW_IDS.length + PROT_IDS.length;
$('#cnt-calc').textContent = Object.keys(CALCS).length;
$$('[data-ver]').forEach(e => { e.textContent = APP_VER; });
/* Counts written in the views' own text (12 Nov 2026: they had drifted from the data) */
$$('[data-cnt]').forEach(e => { const n = {ebook:Object.values(P).filter(x => !x.grp).length, rules:FLOW_IDS.length + PROT_IDS.length}[e.dataset.cnt]; if (n) e.textContent = n; });
if (store.get('gz-seen', 0) >= 7){ const d = $('#snav .dotn'); if (d) d.hidden = true; }
/* ================= Pages drawn when first needed (18 Nov 2026) =================
   Krishna: "Build all five" (B). Measured with the CPU slowed four times (about a mid-range phone): the startup drew every page,
   opened or not, and the pages nobody had opened yet cost about 2.5 s of it (the dilution guide, the pharmacy list, the
   calculators, Install, the library, the extensions, the ED links). Each is now drawn the first time it is shown (showView), the
   first time a search hands over to it, or when the phone is idle after the first screen, one page per idle moment. */
const LAZY = {pathways:[renderLib], rules:[renderRules], calc:[renderCalcHub, renderCalc], numbers:[renderNums, () => { if (typeof EXTDIR !== 'undefined' && $('#extdir')){ renderExtStatic(); renderExt(); } }],
  links:[renderLinks], pharmacy:[renderRxStatic, renderRx], dilution:[renderDgStatic, renderDg], antibiotics:[renderAbStatic, renderAb], antidotes:[renderAxStatic, renderAx], abbreviations:[renderKbStatic, renderKb], new:[renderDrive], install:[renderInstall]};
const lazyDone = new Set();
function ensureView(v){ if (!LAZY[v] || lazyDone.has(v)) return; lazyDone.add(v); LAZY[v].forEach(f => f()); }
function lazyIdle(){
  const v = Object.keys(LAZY).find(k => !lazyDone.has(k)); if (!v) return;
  const go = () => { ensureView(v); lazyIdle(); };
  if (window.requestIdleCallback) requestIdleCallback(go, {timeout:2000}); else setTimeout(go, 150); /* Safari has no requestIdleCallback */
}
renderHome(); renderSideSaved(); renderDcheck(); renderToolsCalc(); renderToolsLinks(); renderToolsRx(); renderToolsDg(); renderToolsAb(); renderToolsAx(); renderToolsKb();
withTiles($('#lkhero'), `${tileMedia('links')}<span class="lbl">The ETD HKL link page</span><h2>Open the original${svg('ext')}</h2><p>Every link on it, the response registers too, with your MOH account.</p>`);
$('#tl-keyn .tl').textContent = 'All ' + NUMS.length;
/* the links are found by search, each opening the ED links page */
IDX.push({href:'#links', title:'ED links', kind:'Tool', meta:'Forms, hospital systems and folders', body:'linktree ETD HKL link page forms hospital systems intranet folders ' + LINKS.flatMap(g => g.items.map(it => it.t + ' ' + it.d)).join(' · '), ic:'link', c:'c-flow'});
LINKS.forEach(g => g.items.forEach(it => IDX.push({href:'#links', title:it.t, kind:'Link', meta:'ED links · ' + g.h, body:[it.d, it.k, g.h].join(' · '), ic:'link', c:'c-flow'})));
/* the ED pharmacy list: the page, and each drug by its generic name (all strengths together), opening the list on it */
if (typeof EDRX !== 'undefined'){
  IDX.push({href:'#pharmacy', title:'ED pharmacy drug list', kind:'Tool', meta:'What the Emergency Pharmacy supplies, with the MOH formulary categories', body:'pharmacy farmasi ubat drug list stock available discharge prescription formulary FUKKM category ' + EDRX.items.map(i => i[1]).join(' · '), ic:'pill', c:'c-meta'});
  const G = {}; EDRX.items.forEach(i => { const g = rxGeneric(i[1]); (G[g] = G[g] || []).push(i); });
  if (typeof EDDG !== 'undefined'){
    IDX.push({href:'#dilution', title:'ED dosing and dilution guide', kind:'Tool', meta:'Injectable drugs, 3rd edition, January 2026', body:'dilution dilute infusion injectable iv drug dose rate syringe pump icu gicu intensive care ' + EDDG.items.map(i => i[1]).join(' · '), ic:'syringe', c:'c-meta'});
    EDDG.items.forEach(i => { const g = i[1].split(/\s(?=\d)|\s\(|;|,/)[0].trim(); IDX.push({href:'#dilution', title:g + ' (ED dilution guide)', kind:'Dilution', meta:'Dosing and dilution guide, p' + i[4] + (i[5] !== i[4] ? '–' + i[5] : ''), body:i[1], ic:'syringe', c:'c-meta', dg:g}); });
  }
  Object.entries(G).forEach(([g, is]) => IDX.push({href:'#pharmacy', title:g + ' (ED pharmacy)', kind:'Drug', meta:'ED pharmacy · ' + [...new Set(is.map(i => i[2] || 'not in the formulary'))].join(', '), body:is.map(i => i[1]).join(' · '), ic:'pill', c:'c-meta', rx:g}));
}
/* The ED antimicrobial guides (21 Nov 2026): the page, and each antimicrobial by its name */
if (typeof ABX !== 'undefined'){
  if (typeof AXIDX !== 'undefined'){
    IDX.push({href:'#antidotes', title:'Antidotes (MOH quick guide, 2022)', kind:'Tool', meta:'Preparation, dose and storage for 38 antidotes, as printed', body:'antidote antidotes poisoning overdose toxicology', kw:'antidote antidotes', ic:'prot', c:'c-meta'});
    AXIDX.forEach(([i, n, f, g]) => IDX.push({href:'#antidotes', title:g + ' (antidote)', kind:'Antidote', meta:'MOH Antidotes Quick Guide: ' + f, body:(n + ' ' + f).toLowerCase(), kw:g.toLowerCase(), ax:g, ic:'prot', c:'c-meta'}));
  }
  IDX.push({href:'#abbreviations', title:'Abbreviations (MOH list, Bil.1/2024)', kind:'Tool', meta:'2,665 abbreviations and their meanings, as printed', body:'abbreviation abbreviations singkatan kata singkatan acronym acronyms what does it stand for meaning', kw:'abbreviation abbreviations singkatan acronym', ic:'rule', c:'c-meta'});
  IDX.push({href:'#antibiotics', title:'ED antimicrobial guides', kind:'Tool', meta:'Doses by kidney function, and how to give injectable antimicrobials (Feb 2024)', body:'antibiotic antibiotics antimicrobial renal dose crcl creatinine clearance kidney dilution reconstitution reconstitute infusion rate', kw:'antibiotic antibiotics antimicrobial antimicrobials crcl', ic:'pill', c:'c-meta'});
  const seen = new Set(); [...ABX.dose.renal.rows.map(r => r[6]), ...ABX.dose.none.map(r => r[3]), ...ABX.dil.rows.map(r => r[4]), 'Gentamicin', 'Vancomycin'].forEach(g => { const k = g.toLowerCase(); if (seen.has(k)) return; seen.add(k); IDX.push({href:'#antibiotics', title:g + ' (ED antimicrobial guides)', kind:'Antimicrobial', meta:'ED antimicrobial guides: dose by kidney function, dilution and rate', body:g, ic:'pill', c:'c-meta', ab:g}); });
}
renderJourney(false); setupTour(); startQuiz(); renderAbout(); renderViewHeroes(); renderPins(); remWire();

/* Clicks that open the search or settings from anywhere, and links to the hash already showing */
document.addEventListener('click', e => {
  const rs = e.target.closest && e.target.closest('[data-refside]');
  if (rs){ refSide = rs.dataset.refside === 'on'; store.set('gz-refside', refSide ? 'on' : 'off'); const y = window.scrollY; draw(false); window.scrollTo(0, y); const f = $(refSide ? '.refcol .refsw' : '.rail-p .refsw'); if (f) f.focus({preventScroll:true}); return; }
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
  const g = e.target.closest('[data-gocat]'); if (g){ libCat = g.dataset.gocat; libF = 'all'; $('#libq').value = ''; renderLib(); revealNext = ['pathways', '#libgrid .libsec']; location.hash = '#pathways'; return; }
  const b = e.target.closest('[data-kcopy]'); if (b){ const i = +b.dataset.kcopy; copyText(NUMS[i].copy, {btn: b.hasAttribute('data-quiet') ? null : b, el:$('#kn' + i), ok:'Copied ' + NUMS[i].copy}); return; }
  const z = e.target.closest('[data-zs]'); if (z){ const i = +z.dataset.zs; zSel = zSel === i ? -1 : i; zoneMap(false); const nb = $(`#zmap [data-zs="${i}"]`); if (nb) nb.focus(); }
});
$('#tip').addEventListener('click', e => { if (e.target.closest('[data-tipnext]')){ tipI = (tipI + 1) % TIPS.length; renderTip(); } });

/* Library */
$('#libq').addEventListener('input', renderLib);
$('#libf').addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (b){ libF = b.dataset.f; renderLib(); } });
$('#libcats').addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (b){ libCat = b.dataset.cat; renderLib(); revealList(firstShown('#libgrid .libsec') || $('#libgrid')); } });
$('#libgrid').addEventListener('click', e => { const b = e.target.closest('[data-star]'); if (b){ e.preventDefault(); toggleSave(b.dataset.star); } });
$('#libgrid').addEventListener('click', e => {
  const b = e.target.closest('[data-lsec]'); if (!b) return;
  const k = b.dataset.lsec;
  if (k === '*'){ const ks = CATS.map(c => c.k), all = ks.every(x => libOpen.has(x)); libOpen = all ? new Set() : new Set(ks); }
  else if (libOpen.has(k)) libOpen.delete(k); else libOpen.add(k);
  renderLib(); const nb = $(`#libgrid [data-lsec="${k}"]`); if (nb) nb.focus();
});
FOLD_MQ.addEventListener('change', () => renderLib());
/* Pins (17 Nov 2026): the pin on a step, in the thumb bar or on a calculator */
document.addEventListener('click', e => { const b = e.target.closest('[data-pin]'); if (!b) return; const h = b.dataset.pin; togglePin(h); syncPins(h); });

/* Runner */
$('#run').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || !state.id) return;
  const p = P[state.id], n = p.nodes[state.cur];
  if (b.dataset.say){ sayEl(b.dataset.say === 'cur' ? $('#cur') : $('#ptab [role="tabpanel"]:not([hidden])'), b); return; }
  if (b.dataset.remind){ remStart(b.dataset.remind, +b.dataset.ri); return; }
  if (b.dataset.go !== undefined){ const [l, to] = n.opts[+b.dataset.go]; go(l, to); }
  else if (b.hasAttribute('data-next')) go('Done', n.next);
  else if (b.dataset.back !== undefined) backTo(+b.dataset.back);
  else if (b.hasAttribute('data-restart')) restart();
  else if (b.hasAttribute('data-map')) openMap();
  else if (b.hasAttribute('data-save')){
    const on = toggleSave(state.id);
    $$('#run [data-save]').forEach(x => { const tb = !!x.closest('.thumbbar'); x.setAttribute('aria-pressed', on); x.innerHTML = svg('star', '', on) + (tb ? `<span>${on ? 'Saved' : 'Save'}</span>` : ''); if (!tb) x.title = on ? 'Saved' : 'Save';
      x.setAttribute('aria-label', on ? 'Saved. Tap to remove from your list' : 'Save to your list'); });
  }
  else if (b.hasAttribute('data-link')) copyText(APP_URL + '#' + state.id + (state.cur === p.start ? '' : '--' + state.cur), {ok:'Link to this step copied', fail:'Copying is blocked here. Use Share to copy the link.'});
  else if (b.hasAttribute('data-flag')) openFlag();
  else if (b.hasAttribute('data-copyroute')) copyText(routeText(p, n), {btn:b, ok:'Route copied'});
  else if (b.hasAttribute('data-copyout')) copyText([p.title + ': ' + n.title, ...(n.items || []).map(i => '- ' + i)].join('\n'), {btn:b, el:b.closest('.res').querySelector('.res-b') || b.closest('.res').querySelector('h2')});
  /* Advice is copied for the patient: page references stay on screen but not in the copied text */
  else if (b.hasAttribute('data-copyscript')) copyText(p.script.lines.join('\n'), {btn:b, el:$('#advlist')});
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
/* The ED pharmacy list: find as you type, filter by category, jump to a letter; a drug found by search opens the list on it */
$('#rxq').addEventListener('input', renderRx);
$('#dgq').addEventListener('input', renderDg);
$('#dgf').addEventListener('click', e => { const b = e.target.closest('[data-df]'); if (b){ dgF = b.dataset.df; renderDg(); const nb = $(`#dgf [data-df="${dgF}"]`); if (nb) nb.focus(); } });
$('#dgaz').addEventListener('click', e => { const b = e.target.closest('[data-dl]'); if (b){ const s = document.getElementById('dg-' + b.dataset.dl); if (s) s.scrollIntoView({block:'start'}); } });
if ($('#abq')){ $('#abq').addEventListener('input', renderAb); $('#abcr').addEventListener('input', renderAb);
  $('#abf').addEventListener('click', e => { const b = e.target.closest('[data-abf]'); if (b){ abF = b.dataset.abf; renderAb(); const nb = $(`#abf [data-abf="${abF}"]`); if (nb) nb.focus(); } }); }
const abFrom = a => { if (a && a.dataset.ab){ ensureView('antibiotics'); abF = 'all'; $('#abq').value = a.dataset.ab; renderAb(); } };
const kbFrom = a => { if (a && a.dataset.kb){ ensureView('abbreviations'); $('#kbq').value = a.dataset.kb; renderKb(); } };
const axFrom = a => { if (a && a.dataset.ax){ ensureView('antidotes'); $('#axq').value = a.dataset.ax; renderAx(); } };
if ($('#axq')) $('#axq').addEventListener('input', renderAx);
$('#palbody').addEventListener('click', e => axFrom(e.target.closest('a[data-ax]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) axFrom(palLinks()[palSel]); }, true);
if ($('#kbq')) $('#kbq').addEventListener('input', renderKb);
$('#palbody').addEventListener('click', e => kbFrom(e.target.closest('a[data-kb]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) kbFrom(palLinks()[palSel]); }, true);
$('#palbody').addEventListener('click', e => abFrom(e.target.closest('a[data-ab]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) abFrom(palLinks()[palSel]); }, true);
const dgFrom = a => { if (a && a.dataset.dg){ ensureView('dilution'); dgF = 'all'; $('#dgq').value = a.dataset.dg; renderDg(); } };
$('#palbody').addEventListener('click', e => dgFrom(e.target.closest('a[data-dg]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) dgFrom(palLinks()[palSel]); }, true);
$('#rxf').addEventListener('click', e => { const b = e.target.closest('[data-rf]'); if (b){ rxF = b.dataset.rf; renderRx(); const nb = $(`#rxf [data-rf="${rxF}"]`); if (nb) nb.focus(); } });
$('#rxaz').addEventListener('click', e => { const b = e.target.closest('[data-rl]'); if (b){ const s = document.getElementById('rx-' + b.dataset.rl); if (s) s.scrollIntoView({block:'start'}); } });
/* ================= The ED extension directory (12 Nov 2026, data22.js) =================
   The department's extensions, by room: find a room or a number as you type (digits find the room an extension belongs to),
   filter by area, and tap an extension to copy it. A department note, as printed, with its source; nothing is stored. */
let extF = 'all';
const EXT_TILE = () => TILE_KEYS.has('extdir') || STILL_KEYS.has('extdir') ? 'extdir' : 'links';
const extBtn = (x, label, cls = '', inner = x) => `<button type="button" class="ext-x${cls}" data-ext="${x}" aria-label="Copy extension ${x}${label ? ', ' + esc(label) : ''}"><span class="bl">${inner}</span>${svg('copy')}</button>`;
function renderExtStatic(){
  if (typeof EXTDIR === 'undefined' || !$('#extdir')) return;
  const rows = EXTDIR.groups.flatMap(g => g.rows), n = new Set(rows.flatMap(r => r[1])).size;
  withTiles($('#exthero'), `${tileMedia(EXT_TILE())}<span class="lbl">${esc(EXTDIR.top[0])}</span><h2 class="ext-big">${EXTDIR.top[1].map(x => extBtn(x, EXTDIR.top[0], ' big')).join('')}</h2><p>${n} extensions in ${rows.length} rooms. Type a room or a number, and tap an extension to copy it.</p>`);
  $('#extsrc').textContent = 'Source: ' + EXTDIR.src + '. A department note (standing rule 6), as printed: check an extension against the hospital directory before you rely on it. Where the list prints one number for two rooms, both rows say so, and it is under Still to confirm.';
}
function renderExt(){
  if (typeof EXTDIR === 'undefined' || !$('#extl')) return;
  const q = ($('#extq').value || '').trim().toLowerCase(), digits = /^\d+$/.test(q);
  const all = EXTDIR.groups.flatMap(g => g.rows.map(r => ({g, r})));
  const match = ({r}) => !q || (digits ? r[1].some(x => x.startsWith(q)) : (r[0] + ' ' + (r[2] || '')).toLowerCase().includes(q));
  $('#extf').innerHTML = [['all', 'All', all.length], ...EXTDIR.groups.map(g => [g.k, g.h, g.rows.length])].map(([k, t, n]) => `<button type="button" data-ef="${k}" aria-pressed="${extF === k}">${esc(t)} <span class="n">${n}</span></button>`).join('');
  const hits = all.filter(x => (extF === 'all' || x.g.k === extF) && match(x));
  const re = q && !digits ? new RegExp('(' + reEsc(q) + ')', 'ig') : null;
  const hl = s => re ? s.split(re).map((x, k) => k % 2 ? `<mark>${esc(x)}</mark>` : esc(x)).join('') : esc(s);
  const hx = x => digits && x.startsWith(q) ? `<mark>${q}</mark>${x.slice(q.length)}` : x;
  $('#extn').textContent = q || extF !== 'all' ? `${hits.length} of ${all.length} rooms` : `${all.length} rooms, as the list prints them`;
  $('#extl').innerHTML = hits.length ? EXTDIR.groups.filter(g => hits.some(h => h.g === g)).map(g => `<section class="tile t-pearl ext-g" aria-labelledby="ext-h-${g.k}"><h2 id="ext-h-${g.k}"><i class="jd ${g.j}" aria-hidden="true"></i>${esc(g.h)}<span class="n">${g.rows.length}</span></h2><ul class="ext-l">` +
    hits.filter(h => h.g === g).map(({r}) => `<li><span class="ext-t"><b>${hl(r[0])}</b>${r[3] ? `<small>${esc(r[3])}</small>` : ''}</span><span class="ext-xs">${r[1].map(x => extBtn(x, r[0], '', hx(x))).join('')}</span></li>`).join('') + `</ul></section>`).join('')
    : '<p class="empty">No room or extension on the list matches. Try a room name, or the first digits of an extension.</p>';
}
if ($('#extdir')){
  $('#extq').addEventListener('input', renderExt);
  $('#extf').addEventListener('click', e => { const b = e.target.closest('[data-ef]'); if (b){ extF = b.dataset.ef; renderExt(); const nb = $(`#extf [data-ef="${extF}"]`); if (nb) nb.focus(); } });
  $('#extdir').addEventListener('click', e => { const b = e.target.closest('[data-ext]'); if (b) copyText(b.dataset.ext, {btn:b, ok:'Copied'}); });
}
/* Search finds the directory and each room on it; opening a room fills the directory's find box */
if (typeof EXTDIR !== 'undefined'){
  IDX.push({href:'#numbers', title:'ED extension directory', kind:'Tool', meta:'The department\'s extensions, by room', body:'extension extensions sambungan telephone phone number directory ' + EXTDIR.groups.flatMap(g => g.rows.map(r => r[0] + ' ' + r[1].join(' '))).join(' · '), ic:'phone', c:'c-abdo'});
  EXTDIR.groups.forEach(g => g.rows.forEach(r => IDX.push({href:'#numbers', title:`${r[0]}: ext ${r[1].join(' / ')}`, kind:'Number', meta:'ED extensions · ' + g.h, body:[r[1].join(' '), r[2] || '', g.h, 'extension sambungan'].join(' · '), ic:'phone', c:'c-abdo', ext:r[0]})));
}
const extFrom = a => { if (a && a.dataset.extq){ ensureView('numbers'); extF = 'all'; $('#extq').value = a.dataset.extq; renderExt(); } };
$('#palbody').addEventListener('click', e => extFrom(e.target.closest('a[data-extq]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) extFrom(palLinks()[palSel]); }, true);
const rxFrom = a => { if (a && a.dataset.rx){ ensureView('pharmacy'); rxF = 'all'; $('#rxq').value = a.dataset.rx; renderRx(); } };
$('#palbody').addEventListener('click', e => rxFrom(e.target.closest('a[data-rx]')), true);
document.addEventListener('keydown', e => { if (e.key === 'Enter' && !$('#pal').hidden) rxFrom(palLinks()[palSel]); }, true);
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
    const key = {'st-theme':'theme', 'st-size':'size', 'st-clips':'clips', 'st-tiles':'tiles', 'st-buzz':'buzz', 'st-ai':'ai', 'st-asr':'asr'}[grp.id];
    prefs[key] = b.dataset.val; store.set('gz-' + key, b.dataset.val); applyPrefs(); syncSettings();
    if (key === 'buzz') buzz('ok');
    if (key === 'asr') micShow();
    if (key === 'clips') setJourneyClip(prefs.clips === 'on');
    if (key === 'tiles') tileClips();
  } else if (b.id === 'st-clear'){
    ['gz-saved', 'gz-pins', 'gz-recent', QKEY, 'gz-quiz-best', 'gz-tour-pos', 'gz-tour-pos-ms', 'gz-tour-lang', 'gz-intro'].forEach(k => store.del(k));
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
    if (!$('#ptq').hidden) return closePtq(true);
    if (!$('#flagdlg').hidden) return closeFlag(true);
    if (!$('#lb').hidden) return closeSheet();
    if ($('#side').classList.contains('open')) return closeDrawer(true);
  }
  const overlay = !$('#pal').hidden || !$('#lb').hidden || !$('#settings').hidden || !$('#pmap').hidden || !$('#ptq').hidden || !$('#flagdlg').hidden;
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
/* Tiles, answer keys and the question card catch the light under the pointer, and under a finger while it is down:
   a touch lights the spot it lands on (pointerdown), and the light goes out when the finger lifts or the page scrolls. */
let glowT = null;
const glowOff = () => { if (glowT){ ['--mx', '--my', '--tx', '--ty', '--rx', '--ry'].forEach(k => glowT.style.removeProperty(k)); glowT.classList.remove('lit'); glowT = null; } };
const glowAt = e => {
  const t = e.target.closest ? e.target.closest('.tile,button.opt,.qc') : null;
  if (glowT && glowT !== t) glowOff();
  glowT = t;
  if (!t) return;
  const r = t.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
  t.style.setProperty('--mx', x + 'px'); t.style.setProperty('--my', y + 'px');
  /* 3D: a tile with a picture leans toward a mouse or pen, and its picture shifts the other way for depth. --tx and --ty run
     from -1 to 1 across the tile; the angle is smaller on a larger tile, so an edge never travels more than about 6 px.
     Not for touch: a finger that lands on a tile to scroll the page would make it wobble. */
  if (e.pointerType !== 'touch' && !REDUCED && r.width && t.classList.contains('tile') && (t.classList.contains('hin') || t.querySelector(':scope > .tm'))){ /* .hin: Install and Share */
    const nx = Math.max(-1, Math.min(1, x / r.width * 2 - 1)), ny = Math.max(-1, Math.min(1, y / r.height * 2 - 1));
    t.style.setProperty('--tx', nx.toFixed(3)); t.style.setProperty('--ty', ny.toFixed(3));
    t.style.setProperty('--ry', (nx * Math.min(4, 700 / r.width)).toFixed(2) + 'deg');
    t.style.setProperty('--rx', (-ny * Math.min(4, 700 / r.height)).toFixed(2) + 'deg');
    t.classList.add('lit');
  }
};
document.addEventListener('pointermove', glowAt, {passive:true});
document.addEventListener('pointerdown', glowAt, {passive:true});
['pointerup', 'pointercancel'].forEach(k => document.addEventListener(k, e => { if (e.pointerType !== 'mouse') glowOff(); }, {passive:true}));
document.addEventListener('click', e => {
  if (!VT_OK || REDUCED || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a || a.target || a.hasAttribute('download')) return;
  const h = a.getAttribute('href'), src = a.closest('.tile:not(.run-hero):not(.phx-hero)');
  if (!src || !vtPage(h)) return;
  e.preventDefault();
  vtGo(() => { location.hash = h; }, {src});
});
window.addEventListener('hashchange', route);
route();
{ const bt = $('#gzboot'); if (bt) bt.remove(); } /* the guide is ready: the ready bar goes */
requestAnimationFrame(() => setTimeout(lazyIdle, 50));
