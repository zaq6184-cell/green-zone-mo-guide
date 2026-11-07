
/* ================= v6: material from the MO Drive "3. Clinical" folder (read 7 Nov 2026) =================
   Ebook pathways stay as written. Department material is added as new rule and protocol entries,
   or as clearly labelled "From the MO Drive" notes (dept) on an ebook pathway, each with its source and date. */

/* Existing rule entries: group them and link the answered EM Watch question */
P['gz-rules'].sub = 'flow';
P['gz-rules'].see = [['#em-watch','What EM Watch is'],['#mau-admission','Admission to MAU'],['#yellow-zone','Yellow Zone flow']];
P['emacc'].sub = 'flow';
P['emacc'].see = [['#em-watch','EM Watch: telemedicine follow-up'],['#outpatient-referral','MAU FAST and Physician\'s Clinic']];
P['referral-rules'].sub = 'flow';
P['referral-rules'].see = [['#mau-admission','Admission to MAU'],['#outpatient-referral','Clinic referrals from the ED']];

/* ---------- Asthma Zone: rewritten to the Nov 2025 memo (replaces the older AMO and Amber Zone flow) ---------- */
P['asthma-zone'] = {
  title:'Asthma Zone flow', src:'Asthma memo, Nov 2025', grp:'rules', sub:'flow', upd:true,
  lead:'How a Green Zone asthma patient moves from triage to the Asthma Treatment Room and back to you. Since November 2025 the Green Zone MO does the final assessment and the discharge.',
  start:'tri',
  nodes:{
    tri:{q:'Triage level given at primary triage?', hint:'PPP auscultates the lungs and gives the triage level.', opts:[['Level 2 or 3','r1'],['Level 4 or 5','card']]},
    r1:{end:'admit', title:'Critical zone, R1', items:['Levels 2 and 3 go to the critical zone (R1), not the Asthma Treatment Room']},
    card:{step:'Asthma card and a 5000 queue number', items:['PPP opens an asthma card, records the auscultation findings, and stamps and signs it','The patient gets a queue number starting with 5000 and is registered to a Green Zone consultation room, like any other Green Zone case','Asthma with trauma: a trauma card and a different queue number'], next:'room'},
    room:{step:'Asthma Treatment Room (PPP)', items:['Secondary assessment; uptriage at once if unstable','Vital signs and PEFR before and after treatment','Treatment by the department asthma protocol, completing the inhaler cycle (dose table below)','Reassess at 15–20 minutes'], next:'res'},
    res:{q:'Resolved after the inhaler cycle?', opts:[['Resolved','edu'],['Not resolved','up']]},
    up:{end:'admit', title:'Uptriage to R1', items:['PPP passes the patient over to R1 and completes the asthma card','PPP informs the Green Zone MO']},
    edu:{step:'Health education, then the card comes to your room', items:['PPP gives health education and sends the asthma card to the Green Zone MO\'s room'], next:'gzmo'},
    gzmo:{q:'You re-examine the patient. Stable?', opts:[['Stable','dc'],['Not stable','up2']]},
    up2:{end:'admit', title:'Uptriage to R1', items:['Uptriage if the patient is unstable when you re-examine']},
    dc:{end:'discharge', title:'Discharge (you, the Green Zone MO)', items:[
      'Give the balance of the MDI the patient used, with the spacer',
      'Prednisolone 30 mg once daily for 5 days',
      'Salbutamol MDI 4 puffs every 4–6 hours for 1 day, then 2 puffs as needed',
      'Do not share the MDI; bring your own spacer next time; come back at once (TCA stat) if the attack recurs',
      'Review inhaler technique, triggers and smoking; record the risk factors for asthma death (table below)',
      'Referral letter and MC if needed',
      'Complete the documentation, then stamp and sign the asthma card'],
      gap:'Flow: memo HKL/JK/98/188/3(27)25, 13 Nov 2025. Discharge prescription: department BA/COPD protocol, 27 Mar 2020.'}
  },
  tables:[
    {title:'Adult MDI doses with a spacer (department protocol, Mar 2020)', head:['Step','What to do'], rows:[
      ['Equivalence','Neb salbutamol 5 mg = 5–10 puffs (100 mcg per puff); neb ipratropium 0.5 mg = 4 puffs (20 mcg per puff)'],
      ['Dose 1','Salbutamol 4–6 puffs, with IV or oral steroid; reassess after 10 minutes'],
      ['Dose 2','Salbutamol 6–8 puffs; reassess after 10 minutes'],
      ['Dose 3','Salbutamol 8 puffs; still not improved: uptriage'],
      ['Ready to go home','Improved, no rhonchi, and SpO2 95% or more on room air'],
      ['Technique','Prime the spacer with 2 puffs (not counted); give 1 puff every 30 seconds with at least 5 tidal breaths; rest 5–10 minutes, then reassess']]},
    {title:'Children: MDI doses with spacer and mask (paediatric asthma posters)', head:['Situation','Under 6 years','Over 6 years'], rows:[
      ['Mild or moderate','Salbutamol 4–6 puffs','Salbutamol 8–10 puffs'],
      ['Improved','Observe 60 minutes, then discharge with the whole set (MDI, spacer, mask), prednisolone 1 mg/kg/day (max 30–40 mg) for 3 days, 2–4 puffs every 4 hours until well, TCA KK in 2 days if not improving','Same'],
      ['Not improved','Prednisolone 1 mg/kg; uptriage to SARI; repeat every 20 minutes (max 3 cycles in 1 hour); oxygen 8 L/min by face mask','Same'],
      ['Severe','Salbutamol 4–6 puffs plus ipratropium 4 puffs, 3 cycles in the first hour','Salbutamol 8–10 puffs plus ipratropium 8 puffs, 3 cycles in the first hour']]},
    {title:'Risk factors for asthma or COPD death (record them on the clerking sheet)', head:['Risk factor'], rows:[
      ['Near-fatal asthma or COPD needing intubation and ventilation'],['Hospital or emergency care for asthma or COPD in the last 12 months'],['Not using an inhaled steroid, or poor adherence'],['Using oral steroids now, or recently stopped'],['Overusing SABA (more than 1 canister a month)'],['Psychiatric disease or serious psychosocial problems'],['Confirmed food allergy']]}],
  advice:['Preventer (budesonide MDI) every day; reliever (salbutamol MDI) when needed','Getting worse (waking at night, worse with a cold): reliever every 4 hours, keep taking the preventer, and come to hospital if not better, bringing the MDI and spacer','Severe (wheeze that does not settle, breathless, hard to talk): come straight to hospital or call an ambulance, taking 4 puffs of the reliever every 4 minutes on the way','Wash the spacer once a week in soapy water, rinse and let it air dry; do not wipe it with a cloth or tissue or brush the inside','Know your triggers: smoke, animal fur, cold air, dust, exercise and infections'],
  see:[['#asthma','Bronchial asthma pathway (ebook)'],['#children--asthma','Children\'s asthma doses']],
  refs:['Memo HKL/JK/98/188/3(27)25: Pengurusan dan perawatan pesakit asma Zon Hijau (Acute Respiratory Distress Zone), 13 Nov 2025','Interim protocol: BA/COPD management in ED (COVID), ED pharmacist and EP, 27 Mar 2020','MDI with modified spacer poster, ED HKL','Paediatric asthma posters: mild to moderate, and severe (ARDS / Asthma folder)','Patient leaflet: asthma action plan and spacer care (Malay)','Acute Respiratory Distress clerking sheet HKL/JK/PK 01-02, issue 03, 11 Jun 2018','Older Asthma Zone flow and policy (AMO nebuliser, Amber Zone MO review): replaced by the Nov 2025 memo']
};

/* ---------- EM Watch ---------- */
P['em-watch'] = {
  title:'EM Watch telemedicine follow-up', src:'EM Watch, Aug 2023', grp:'rules', sub:'flow', isnew:true,
  lead:'EM Watch is the department\'s "virtual observation ward": after discharge, EM practitioners follow the patient up by teleconsultation, with guided self-monitoring at home.',
  start:'elig',
  nodes:{
    elig:{check:'all', q:'Can the patient use EM Watch?', items:['Malaysian citizen','Over 18 years old','Consents to EM Watch','Has a smartphone or tablet (not Huawei) with reliable internet','Can use the app and any monitoring device, or has someone to help (for example an elderly patient)'], opts:[['All met','cond'],['Not all met','alt']]},
    cond:{q:'Is it a condition EM Watch takes?', hint:'Discuss with the EP on the floor first.', info:['Low-risk chest pain; stable compensated heart failure; breakthrough seizure','Cellulitis; uncontrolled diabetes; hypertensive urgency','Non-specific abdominal pain; renal or biliary colic','Soft tissue injuries; wound management','Poisoning; bites and stings; electrical injuries; allergic reaction','Reviewing investigations, for example TFT'], opts:[['Yes, and the EP agrees','book'],['No','alt']]},
    book:{end:'refer', title:'Refer to EM Watch', items:['First teleconsultation within 1 week of discharge','Up to 2 teleconsultation sessions within 2 weeks; up to 20 patients a day','Online prescription: the patient buys the medicine at a pharmacy of their choice','Guided self-monitoring at home, with monitoring devices if needed; onward referral if needed'], gap:'Source: EM Watch introduction (training deck), ETD HKL, Aug 2023. The deck does not show how to book (its recruitment slide is a picture): ask the EP on the floor.'},
    alt:{end:'neutral', title:'Use EMACC or the usual follow-up', items:['Not for EM Watch: book EMACC if the patient fits, or arrange the usual clinic follow-up'], links:[['#emacc','EMACC follow-up']]}
  },
  refs:['EM Watch introduction (training deck), ETD HKL, file dated 9 Aug 2023 (MO Drive, 3. Clinical / EMWATCH)']
};

/* ---------- Admission to MAU ---------- */
P['mau-admission'] = {
  title:'Admission to MAU', src:'MAU criteria, Oct 2022', grp:'rules', sub:'flow', isnew:true,
  lead:'MAU is the medical short-stay ward for stable patients expected to stay under 72 hours. Green Zone medical admissions go to MAU when the patient meets the criteria.',
  start:'excl',
  nodes:{
    excl:{check:'any', q:'Any exclusion diagnosis?', items:['Acute myocardial infarction','Hypertensive emergency','DKA or HHS','Thyroid storm','Acute stroke','Active upper GI bleed','Acute psychosis, altered mental state or seizure','Shock: cardiogenic, septic or distributive, or hypovolaemic','ESRD on haemodialysis','Dengue fever'], opts:[['Yes, present','notmau'],['None','crit']]},
    crit:{check:'all', q:'Meets all 11 MAU criteria?', items:['Age 12 or older','No intensive care bed needed (acute, subacute, HDW, CCU or CRW)','Oxygen at most nasal prongs 3 L/min','Respiratory rate 9–20','Systolic BP 100 or more without inotropes','Heart rate 60–110','Alert, GCS 15','Ambulant to semi-dependent','No isolation precautions','No active suicidal ideation or attempt','No ongoing chest pain'], opts:[['All met','mau'],['Not all met','notmau']]},
    mau:{end:'admit', title:'Admit to MAU', items:['Phone MAU before you register the admission and send the patient','Office hours (8 am–5 pm): MAU mobile team ext 6682 / 6684','After hours: MAU 1 (male), MAU 2 (female) or MAU 3 (MAU ward), on the same extensions','In the admission Google Form choose the ward "MAU" (it helps the BMU)','MAU full: book as a pending case to MAU and refer to the EP on duty for temporary placement'], gap:'Sources: MAU criteria for admission flow chart, updated 18 Oct 2022; MAU ward reactivation notice; memo HKL/PBTN/98/240-01, 20 Dec 2019. Check the extensions against the current directory.'},
    notmau:{end:'admit', title:'Not for MAU: usual medical admission', items:['The flow chart sends these patients to a medical base ward or IPHKL instead of MAU','Refer to the Medical specialist or MO on call before admitting to a General Medicine ward'], links:[['#referral-rules--med','Admission to General Medicine']]}
  },
  tables:[{title:'Diagnoses MAU will consider (flow chart, 18 Oct 2022)', head:['System','Diagnoses'], rows:[
    ['Cardiovascular','UA or NSTEMI with Trop T under 500; hypertensive urgency or uncontrolled hypertension; decompensated heart failure; AF; stable or resolved SVT'],
    ['GI and urinary','Acute dyspepsia; acute gastroenteritis; symptomatic ascites; UTI; pyelonephritis'],
    ['Respiratory','Acute exacerbation of asthma or COPD (bronchodilator 2-hourly or less often); CAP or HAP'],
    ['Endocrine','Uncontrolled diabetes or erratic hyperglycaemia; hyperthyroidism'],
    ['Rheumatology','Acute gout flare; relapse of autoimmune disease (SLE)'],
    ['Haematology','Relapsed ITP; iron deficiency anaemia; thalassaemia and haemoglobinopathies; B12 megaloblastic anaemia; nutritional pancytopenia; polycythaemia'],
    ['Infection','PUO; viral fever (not dengue)'],
    ['Others','Cellulitis; diabetic foot ulcer; poisoning; drug overdose; snake bite']]}],
  see:[['#outpatient-referral','Going home instead: MAU FAST clinic'],['#referral-rules','Referral rules']],
  refs:['MAU criteria for admission flow chart, Department of Medicine HKL, updated 18 Oct 2022','Pengaktifan semula MAU Ward: MAU ward admission criteria and contact (undated notice)','Memo HKL/PBTN/98/240-01: Perubahan kriteria kemasukan pesakit ke MAU, 20 Dec 2019','Older MAU checklist (2019) and the Ward 8B renaming letter (30 Apr 2019): history only']
};

/* ---------- Clinic referrals from the ED (MAU FAST, Physician's Clinic): draft criteria ---------- */
P['outpatient-referral'] = {
  title:'Clinic referrals from the ED', src:'FAST clinic criteria (draft)', grp:'rules', sub:'flow', isnew:true,
  lead:'Where to send a patient who is safe to go home but needs a clinic: MAU FAST clinic, the Physician\'s Clinic, a specialty clinic or the KK. These criteria are a draft and a guide only; the treating doctor decides.',
  start:'safe',
  nodes:{
    safe:{check:'all', q:'Safe to discharge to a clinic?', items:['Haemodynamically stable','Not dehydrated','No organ dysfunction: hypoxia, AKI, severe transaminitis, metabolic acidosis, coagulopathy or impaired GCS','Patient and family understand the advice','Independent, or has the means to come back for follow-up','Tolerating orally','No significant bleeding','Treatable as an outpatient','No medical emergency: DKA, HHS, hypertensive emergency, or a symptomatic electrolyte disturbance'], opts:[['All met','where'],['Not all met','adm']]},
    where:{end:'refer', title:'Pick the clinic from the table below', items:['MAU FAST clinic: MHKL level 2, 8 am to 4:30 pm','Send copies of the ECG, the CXR and the lab results with the patient','Readjust NCD medication before discharge if needed, then refer back to the treating clinic or KK'], gap:'Source: MAU FAST clinic referral criteria and PC clinic referral criteria (draft), MO Drive, Aug 2023.'},
    adm:{end:'admit', title:'Not ready for clinic follow-up', items:['Treat, and consider admission'], links:[['#mau-admission','Admission to MAU']]}
  },
  tables:[{title:'Where to refer (draft criteria)', head:['Problem','Refer to'], rows:[
    ['Low-risk chest pain that may need EST or Myoview (with or without a suspicious ECG)','MAU FAST clinic, with ECG copies, CXR and labs'],
    ['GERD, gastritis, PUD, costochondritis or musculoskeletal pain with a non-suspicious ECG','Relief, then the nearest KK or the Gastro clinic'],
    ['Anaemia, asymptomatic and stable (for example probable IDA for parenteral iron)','MAU FAST clinic; if transfused in the ED, send the anaemia workup before transfusion and refer Gastro for outpatient scopes'],
    ['AF, proven SVT safe for discharge, asymptomatic heart block, frequent ectopics, or asymptomatic ECG changes suggesting IHD','MAU FAST clinic with the ECG. Symptomatic tachyarrhythmia or heart block: admit medical'],
    ['Palpitations with a normal ECG; suspected hyperthyroidism with TFT pending and Burch–Wartofsky under 25','MAU FAST clinic'],
    ['Post-stroke workup after Neuromedical review and discharge','MAU FAST clinic for echo and Holter'],
    ['Suspected heart failure (breathless or leg swelling), stable','MAU FAST clinic with CXR and ECG'],
    ['CAP with CURB-65 of 0–1, stable, eating, independent, with good support','MAU FAST clinic with a CXR copy; consider admission if elderly or comorbidities are uncontrolled'],
    ['Incidental electrolyte disturbance, asymptomatic and corrected; mild asymptomatic hyponatraemia (Na over 125)','MAU FAST clinic if needed (paired samples for hyponatraemia), or admit MAU. Symptomatic hypercalcaemia: admit'],
    ['Probable connective tissue or rheumatological disease','Physician\'s Clinic HKL'],
    ['Young hypertension or young diabetes (not in crisis)','Physician\'s Clinic HKL'],
    ['ALT or AST under 200, asymptomatic','Physician\'s Clinic; higher but fit for discharge: Gastro clinic'],
    ['Suspected lung, mediastinal, blood, GI or HPB cancer, without compromise','Physician\'s Clinic with CXR and a letter (tumour markers for GI or HPB)'],
    ['Elderly with suspected dementia, or after a fall','Physician\'s Clinic before Geriatrics, with CT images or report if done'],
    ['PUO','Ideally admit; Physician\'s Clinic if the patient refuses admission and is stable'],
    ['Chronic cough, query PTB, stable','Nearest KK or IPR'],
    ['STD, RVD or hepatitis screening requests','Nearest KK'],
    ['Obstructive jaundice','Ideally admit, especially with cholangitis, biliary colic or pancreatitis']]}],
  see:[['#emacc','EMACC follow-up'],['#em-watch','EM Watch']],
  refs:['MAU FAST clinic referral criteria / PC clinic referral criteria (draft), MO Drive, 3. Clinical / MAU / FAST Clinic, Aug 2023','Flow chart to FAST clinic (MO Drive)']
};

/* ---------- Yellow Zone flow ---------- */
P['yellow-zone'] = {
  title:'Yellow Zone patient flow', src:'Yellow Zone flow, Jul 2026', grp:'rules', sub:'flow', isnew:true,
  lead:'What happens when you uptriage a patient to the Yellow Zone, and where patients go when it is full.',
  start:'flow',
  nodes:{
    flow:{end:'neutral', title:'Aliran pesakit di Zon Kuning', items:[
      'The patient enters the Yellow Zone and goes to a Loading Pit Stop (LPS) bed for pass over',
      'Pit Stop (PS): initial examination and treatment',
      'Then the patient is passed over to a Medical bed (M1–M4) or a Trauma bed (T1–T5)',
      'When the zone is congested, patients go to: OR2 (opposite Resus 2), the buffer zone, YZ Extension, the ISO ward or the Observation ward',
      'Aggressive patient with a psychiatric history only: the PSY corner first',
      'The zone also has MO tables, an X-ray corner and a store'],
      gap:'Source: "Aliran pesakit di Zon Kuning" (YELLOW ZONE.jpg), MO Drive, 13 Jul 2026.'}
  },
  see:[['#gz-rules--wait','Patients who should not wait outside'],['#behavioural-disturbance','Behavioural disturbance pathway']],
  refs:['Aliran pesakit di Zon Kuning, ETD HKL, 13 Jul 2026 (MO Drive, 3. Clinical / Yellow Zone)']
};

/* ---------- OSCC: abuse and assault ---------- */
P['oscc'] = {
  title:'OSCC: abuse, assault and domestic violence', src:'OSCC policy 2015', grp:'rules', sub:'protocol', isnew:true,
  lead:'One Stop Crisis Centre cases. Treat injuries and life threats first; then the right team, the right forms and safe evidence.',
  start:'menu',
  nodes:{
    menu:{q:'Which case?', opts:[['Sexual assault, 18 and over','sa'],['Domestic violence','dv'],['Suspected child abuse, under 18','child'],['Notes, forms and police reports','docs']]},
    sa:{end:'refer', title:'Sexual assault, 18 and over', items:[
      'Stable survivors go from the triage counter straight to the OSCC room; injuries and life threats come first',
      'Get consent. Adults do not need a police report to be treated. Never send a survivor to the police station: the police come to OSCC (Pol 59)',
      'Fresh case: rape within 72 hours (72–120 hours may still be sampled as fresh); sodomy within 120 hours, seen within 90 minutes of arrival',
      'Refer O&G for alleged rape, and the surgical team for sodomy. Any touching, licking or kissing of the genitals: refer the gynae team to examine',
      'Fresh rape: do a UPT and examine the abdomen',
      'Evidence: the survivor keeps their own clothing until it is collected; each item in its own paper bag; DNA swabs before microbiology swabs; police present; hand everything to the police, never keep it in the hospital. DNA lasts up to 7 days vaginal, 72 hours anal, 48 hours oral',
      'Treatment: emergency contraception (levonorgestrel 1.5 mg once, before leaving OSCC, or a copper IUD within 5 days); tetanus for soiled wounds; STI prophylaxis and HIV PEP after discussing with ID; take the viral screening and write it in the OSCC file',
      'Refer every survivor to the MSW (with consent). Suicidal or depressed: admit and refer Psychiatry',
      'Admit for a safety concern (after hours, for the MSW, JKM or a shelter) or if an EUA is needed'],
      gap:'Sources: MOH OSCC Policy and Guidelines for Hospitals, July 2015; REMINDER for OSCC, 26 Jun 2026.'},
    dv:{end:'refer', title:'Domestic violence', items:[
      'Green Zone survivors not picked up at triage: take them to OSCC straight away',
      'Red flags: injuries that do not fit the story; depression, self-harm or suicide attempts; frequent ED visits; substance use; self-blame; a partner who insists on staying and answers for the patient',
      'Ask in private, never in front of the partner: "Have you been kicked, hit, punched or otherwise hurt by someone in the past year? By whom?" "Do you feel safe in your current relationship?" "Is a previous partner making you feel unsafe now?"',
      'Do not confront the abuser',
      'Refer every survivor to the MSW or Social Welfare; Psychiatry if psychotic or suicidal; give the NGO leaflets (AWAM, WAO)',
      'Unsafe at home with no support: a temporary shelter through the MSW or JKM. An Interim Protection Order needs a police report',
      'Adults may refuse a police report: do not force it, help when they are ready, and never delay treatment for it'],
      gap:'Source: MOH OSCC Policy 2015, Domestic Violence Act 1994 (amended 2012).'},
    child:{end:'refer', title:'Suspected child abuse, under 18', items:[
      'Treat life threats first. Do not clean the child before the forensic examination',
      'Refer every suspected case to the Paediatric team on call and inform the specialist on call. HOs must not manage these cases alone',
      'SCAN cases planned by the paeds registrar must be discussed with a paediatrician: write the paediatrician\'s name in the clerking. SCAN team referral line 011-6384 8719 (paeds registrar)',
      'Report to the Child Protector (JKM) on Borang 9: mandatory under the Child Act 2001 (s27); not reporting is an offence',
      'Police report: urgently for sexual abuse within 72 hours, or physical abuse or neglect with a risk to life. The MO lodges it if the parent is unwilling or the abuse may be within the family. Statutory rape (16 and under): an urgent police report by the MO or specialist',
      'Do not: examine the genitals unless trained; interview for disclosure; show shock or anger; criticise the alleged abuser in front of the child; promise secrecy; tell the parents you will report when abuse within the family is suspected',
      'Physical abuse: document the number, site, size, shape, colour and pattern of injuries (bruises cannot be dated by colour); check the ears, mouth and frenulum and the fundi; platelets and a coagulation screen if bruised; skeletal survey under 2 years',
      'Admit: all child sexual abuse; abuse within the family or a child under 12; any safety concern; after-hours presentations',
      'Beaten by a teacher: write the teacher\'s name in the clerking (for the KPM investigation)'],
      gap:'Sources: MOH Child Abuse Guideline 2009; MOH OSCC Policy 2015; REMINDER for OSCC, 26 Jun 2026. The 2009 drug regimens are out of date and not shown: check them with ID or the paediatric team.'},
    docs:{end:'neutral', title:'Notes, forms and police reports', items:[
      'Write "survivor states" or "survivor reports", in their own words and without judgement. Never conclude "rape" (a legal term) and never write "no evidence of sexual abuse"',
      'Record the time of the examination, findings with diagrams, legible names with stamps, the police report number, the IO and the JKM officer',
      'Police report: do not write "cover report" or "rujukan hospital"; write "untuk siasatan lanjut pihak polis"',
      'Borang 9: complete it fully in Malay, with 2 contactable phone numbers and the full address (JKM visits the home, and the form is used in court)',
      'Hand evidence directly to the police officer and record the officer\'s name'],
      gap:'Sources: REMINDER for OSCC, 26 Jun 2026; MOH Child Abuse Guideline 2009; MOH OSCC Policy 2015.'}
  },
  refs:['MOH OSCC Policy and Guidelines for Hospitals, July 2015, MOH/P/PAK/290.15(G4)','MOH Guideline on child abuse and neglect, 2009, MOH/P/PAK/130.07(GU)','REMINDER for OSCC (Google Doc), MO Drive, 26 Jun 2026']
};

/* ---------- Blood gases, blood requests and toxicology samples ---------- */
P['blood-tests'] = {
  title:'Blood gases, GXM and drug levels', src:'MO Drive, Jun 2026', grp:'rules', sub:'protocol', isnew:true,
  lead:'When to run a blood gas, how to take a GXM sample that the blood bank accepts, and which tubes to use for drug levels.',
  start:'menu',
  nodes:{
    menu:{q:'Which test?', opts:[['Blood gas: run one or not?','gas'],['GXM or GSH sample','gxm'],['Why blood requests are rejected','reject'],['Drug levels and methanol','tox']]},
    gas:{end:'neutral', title:'When to run an ABG or VBG (POCT)', items:[
      'Run one for: SpO2 under 90% on arrival (ABG if you need the PaO2, otherwise VBG); shock (SBP under 90, MAP under 65, shock index over 1, pulse pressure under 30 or over 60), including dengue shock; altered mental state or seizures; DKA or HHS; ESRF with APO, ECG changes or missed dialysis; ECG changes suggesting a calcium, potassium or acid–base problem; poisoning',
      'Not just to check electrolytes: send those to the lab, unless there is an unstable arrhythmia or an arrest',
      'Dengue: only in dengue shock, not for warning signs',
      'DKA: do not repeat the gas after every 10 ml/kg bolus; wait for a 2 L positive balance (except in CKD or CCF)',
      'DXT over 11 with serum ketones of 3 or less: DKA is ruled out, so no gas unless the patient looks like DKA (acidotic breathing)',
      'Suspected HHS: send serum osmolality to the lab instead of a gas',
      'Instead of a gas: heart rate and perfusion for acidosis, perfusion for lactate, the ECG or a lab potassium. The EP decides in every case'],
      gap:'Sources: Notes on indications for ABG; Indications of ABG/VBG (POCT) in ETD HKL (MO Drive, Jun 2026).'},
    gxm:{end:'neutral', title:'GXM or GSH sample and the pre-transfusion checklist', items:[
      'The pre-transfusion checklist HKL/PKU-18-02 is mandatory: the MO who takes the sample fills it in, signs it and attaches it to the blood request before it goes to the porter',
      'Ask the patient\'s full name and IC (MyKad or passport) number with open questions, and check them against the wristband and the case note. Unconscious: confirm with relatives. Never use bed numbers',
      'Explain the indication and possible complications, and take consent (the first transfusion of this admission)',
      'One patient at a time. Label the bottle at the bedside straight after taking the blood; never leave it unlabelled',
      'Handwritten labels only: no pre-printed labels and no stamp on the label. The form and the label must match',
      'EDTA tube, 3–4 ml for an adult; bag it in biohazard plastic with the forms'],
      gap:'Sources: memo (55)HKL/UPK/123/3-2, Mar 2026; Quick guide for blood sampling (Transfusion Practice Guidelines 2016).'},
    reject:{end:'neutral', title:'Why the blood bank rejects a request', items:[
      'Form PER-SS-BT 105: one form for each blood or component type, sent with a sample',
      'Form rejected if: incomplete; no diagnosis; unreadable; details do not match the label; no signature or stamp of the person who took the blood or the requesting doctor; no carbonised copy; no PDN MO order code when stock is low',
      'Sample rejected if: leaking; wrong tube; grossly haemolysed; no label, or an incomplete or pre-printed label; under 3 ml for an adult; no mother\'s sample for a baby under 4 months'],
      gap:'Source: Rejection criteria for blood request sample and request form (PDN, Jun 2026).'},
    tox:{end:'neutral', title:'Drug levels and methanol', items:[
      'Paracetamol and salicylate levels: together in 1 plain (red-top) tube',
      'Benzodiazepine level: a separate plain tube',
      'Suspected methanol (GI or CNS symptoms or blurred vision, alcohol in the last 5 days, and a high anion gap acidosis with 2 of: pH under 7.3, HCO3 under 20, osmolal gap over 10): take 3 ml of blood in a grey-top (fluoride) tube and urine before any treatment, write "methanol" on the form (a routine screen tests only ethanol) and keep the bottle',
      'Methanol: uptriage, and notify the public health unit within 24 hours'],
      gap:'Sources: TDM PCM, salicylate, BZD (MO Drive, Toxicology); MOH methanol poisoning outbreak guideline, 2015.'}
  },
  see:[['#paracetamol-overdose','Paracetamol overdose pathway'],['#dengue','Dengue fever pathway']],
  refs:['Notes on indications for ABG; Indications of ABG/VBG (POCT) in ETD HKL (MO Drive, Jun 2026)','Memo (55)HKL/UPK/123/3-2: Pelaksanaan borang senarai semak pre-transfusi, Mar 2026','Quick guide for blood sampling, Transfusion Practice Guidelines 2016','Rejection criteria for blood request sample and request form (PDN)','TDM PCM, salicylate, BZD (MO Drive)','MOH guideline: methanol poisoning outbreak, 2015']
};

/* ---------- Animal bites and rabies ---------- */
P['animal-bites'] = {
  title:'Animal bites and rabies (ABC)', src:'Rabies protocol, Oct 2022', grp:'rules', sub:'protocol', isnew:true,
  lead:'Animal bites with a rabies risk go to the Animal Bite Clinic (ABC), after the first steps in the ED.',
  start:'risk',
  nodes:{
    risk:{q:'Bite or scratch from an animal that can carry rabies?', hint:'Mainly dogs; bats, foxes, monkeys and cats also carry the risk.', opts:[['Yes','abc'],['No','wound']]},
    abc:{end:'refer', title:'First steps, then refer to the ABC', items:[
      'MO: do the initial risk assessment (the checklist in the protocol) and the emergency care',
      'Fill in the animal bite notification form, and counsel the patient on the early signs of rabies and what to do',
      'EP: decides other referrals by the injury (orthopaedic, surgical), prescribes the post-exposure rabies vaccine, and RIG for urgent cases in the ED (the ID physician assesses the need for RIG)',
      'The SN or MA gives the first vaccine dose in the ED and fills in the rabies vaccination card',
      'Refer to the ABC with a copy of the notification form. The patient brings the referral letter, the copy of the form and the vaccine prescription to the Physician Clinic counter',
      'ABC: Physician Clinic, SCACC level 2. Monday to Thursday 2–4 pm, Friday 3–4:30 pm, closed on weekends and public holidays. Doses due then are given in the ED or primary care',
      'ABC phone: 03-2615 5555 ext 1017 / 1178'],
      gap:'Source: Protocol on the management of rabies and the ABC, HKL (Pharmacy, ID Unit and ED), Oct 2022. The risk checklist and the vaccine and RIG schedules are pictures in the protocol and are not copied here.'},
    wound:{end:'neutral', title:'Not a rabies-risk bite', items:['Manage the wound as usual; the ABC takes only bites with a rabies risk']}
  },
  refs:['Protocol on management of rabies and Animal Bite Clinic, HKL, Oct 2022 (MO Drive, Infectious Diseases / Rabies)']
};

/* ---------- Infection alerts ---------- */
P['infection-alerts'] = {
  title:'Infection alerts: TB, Mpox, Nipah, MERS', src:'MO Drive, 2023–2026', grp:'rules', sub:'protocol', isnew:true,
  lead:'Patients who need a mask, the Decon Room or a notification form, and where they go next.',
  start:'menu',
  nodes:{
    menu:{q:'Which infection?', opts:[['Suspected TB','tb'],['Unexplained rash: Mpox','mpox'],['Nipah virus','nipah'],['MERS-CoV patient under investigation','mers'],['COVID-19 screening','covid'],['Notifying an infection','notify']]},
    tb:{check:'all', q:'Suspected TB?', hint:'Give a surgical mask to anyone with fever and cough at once. Known PTB goes to the isolation area (Decon).', items:['At least 1 symptom: cough for 2 weeks or more, fever, loss of weight or appetite, night sweats or haemoptysis','At least 1 CXR feature: upper lobe or apical consolidation, cavitation, miliary shadows or a unilateral pleural effusion'], opts:[['Both present','tbfit'],['Not both','tbno']]},
    tbfit:{q:'Fit for discharge?', info:['Clinically stable (all): temperature 38 °C or less, HR 100 or less, RR 24 or less, SBP 90 or more, SpO2 over 91%, eating and taking oral medicine, normal mental state','Safe at home (all): self-caring or a reliable carer, no other illness needing admission, no functional restriction, easy access to care, not a special group (extremes of age, pregnancy, comorbidities)','CRB-65 helps: 0 low risk, likely home; 1–2 consider hospital referral; 3–4 urgent admission'], opts:[['Fit for discharge','tbkk'],['Not fit for discharge','tbtx']]},
    tbkk:{end:'discharge', title:'Refer to the KK as an outpatient', items:['Refer to the nearest Klinik Kesihatan for TB workup']},
    tbtx:{q:'Fit for transfer to IPR?', hint:'On oxygen support, haemodynamically stable, no inotropes.', opts:[['Yes','tbipr'],['No','tbadm']]},
    tbipr:{end:'refer', title:'Refer to the IPR specialist on call', items:['The MO in charge refers to the IPR specialist on call','If accepted: prepare the patient and the documents; an SN goes with the patient; inform the PHC team for the ambulance and staff; use proper PPE']},
    tbadm:{end:'admit', title:'Keep in ED isolation and admit', items:['Continue care in ED isolation','Refer the medical team and admit to ward 25A or 19'], gap:'Source: Management of patients with suspected TB (Appendix 2) and suspected TB criteria, MO Drive.'},
    tbno:{end:'neutral', title:'TB less likely', items:['Continue emergency care, or redirect to the KK as appropriate']},
    mpox:{check:'any', q:'Suspected or probable Mpox?', hint:'For a patient at triage with an unexplained skin rash. Tick any that applies.', items:['Contact with a probable or confirmed case in the 21 days before onset, with fever over 38.5 °C, headache, myalgia, back pain or profound weakness','Unexplained acute rash, mucosal lesions or lymphadenopathy (vesicles, pustules or scabs, often oral, anal or genital) with an epidemiological link in the last 21 days','The same kind of rash with multiple casual sexual partners in the last 21 days'], opts:[['Yes','mpdecon'],['None','mpno']]},
    mpdecon:{step:'Send to the ETD Decon Room', items:['Stabilise; the Decon MO does the full clerking and examination','Diagnosis doubtful: consult the EP on duty, who consults the Dermatology specialist on call if still unsure','No skin lesion sampling in the ED'], next:'mpadm'},
    mpadm:{check:'any', q:'Any reason to admit?', items:['Altered mental state','Haemodynamically unstable','Hypoxia','Severe pain (score over 6)','Secondary infection needing IV antimicrobials or surgery','Mucocutaneous disease affecting swallowing or the airway','Eye involvement','Extensive skin disease','Pregnant','Severely immunocompromised','Complex anogenital disease risking urinary or bowel obstruction','Uncontrolled comorbidities','Not suitable for home surveillance'], opts:[['Yes, present','mpin'],['None','mpout']]},
    mpin:{end:'admit', title:'Admit to the isolation ward', items:['Refer the GIM specialist on call','Dermatology samples the lesions in the ward']},
    mpout:{end:'discharge', title:'Discharge with the Mpox bundle', items:['Office hours (working day, 8 am–4 pm): same-day Dermatology Clinic referral; phone the Dermatology MO on call','After hours: Dermatology Clinic the next working day; phone the Dermatology MO on call','Notification form within 24 hours, with an active phone number and the full current address (home or hotel)','Medicines, MC for 7 days, and a referral letter to the Dermatology Clinic (SCACC level 6, room 18)','Explain: the lesions are sampled at the Dermatology Clinic, the PKD gives the result within 7 days, and a positive result brings a home surveillance order'], gap:'Source: HKL Mpox clinical pathway, updated Sept 2024 (replaces the Aug 2023 flow).'},
    mpno:{end:'neutral', title:'Mpox unlikely', items:['Manage the rash as usual; discuss with the EP if unsure']},
    nipah:{end:'refer', title:'Suspected Nipah virus', items:[
      'Think of it with fever, headache, myalgia and drowsiness, then confusion, seizures or coma; it can also cause a respiratory infection. Spread from fruit bats; it can kill within 24–48 hours of brain symptoms. Ask about travel (an outbreak in West Bengal, India, in Jan 2026 included health workers)',
      'Start infection prevention measures at once and send the patient to the Decon Room; stabilise',
      'Refer Medical or Anaesthesia as needed. The ED MO fills in the notification form',
      'Admit: a BMU bed for ward SW28, or the ward ID advises; transfer by the route in the UKI flow chart. Not admitted: treat and discharge with MC or home isolation advice, and inform the UKA',
      'Samples are taken after admission, except blood needed for resuscitation in the ED',
      'Questions: Infection Control Unit (UKI) ext 6319 / 5621'],
      gap:'Source: UKI memo HKL/UKI/98/242/1 and flow chart, 3 Mar 2026.'},
    mers:{end:'refer', title:'MERS-CoV patient under investigation (PUI)', items:[
      'PUI referred from a KK, GP or private hospital: stable cases go to ward 4B, Hospital Putrajaya (specialist to specialist), not the ED; unstable cases (need NIV or ventilation, or haemodynamically unstable) come to the ETD Decon Room, then ward 28',
      'PUI found in the ETD: the Decon Room. Stable: Hospital Putrajaya ward 4B through the GIM specialist. Unstable: ward 28',
      'Escort: the medical MO (8 am–2 pm the MAU pool; 2 pm–8 am the MO on call 3B), an SN from ward 21, and an EMS ambulance from PHC'],
      gap:'Source: PUI MERS-CoV flow charts (MO Drive, undated). The case definition is not in the file: check the current MOH definition.'},
    covid:{end:'neutral', title:'COVID-19 screening in the ED', items:['Screen only symptomatic patients who need ward admission or surgery'], gap:'Source: letter HKL/JK/98/140/3, 23 May 2023 (HOD meeting 3/2023).'},
    notify:{end:'neutral', title:'Notifying an infection', items:[
      'Complete the communicable disease notification form: write the patient\'s IC number, and sign and stamp it with your name',
      'Take it to the Shift Supervisor room and record it in the Notification Record Book (your proof)',
      'The PPP U32 shift supervisor checks it, and the forms go to the UKA twice a day (8 am and 4 pm)',
      'Dengue: notify after a positive combo test; late notification can be fined RM1,000. The announcement asks that every combo test done is notified, so order it only when it is indicated',
      'Hang the red dengue tag so the diagnosis is not lost when the patient moves zones'],
      gap:'Sources: memo HKL/JK/98/188/3/(4)23, 3 Mar 2023; dengue announcement (MO Drive).'}
  },
  see:[['#pneumonia','Community acquired pneumonia pathway'],['#dengue','Dengue fever pathway']],
  refs:['Suspected TB criteria 1 and 2; Management of patients with suspected TB (MO Drive, Infectious Diseases / Tuberculosis)','HKL Mpox clinical pathway, updated Sept 2024','UKI memo HKL/UKI/98/242/1 and Nipah flow chart, 3 Mar 2026; ASEAN disease alert no 3, 23 Jan 2026','PUI MERS-CoV flow charts (MO Drive)','Letter HKL/JK/98/140/3: COVID-19 screening in the ED, 23 May 2023','Memo HKL/JK/98/188/3/(4)23: notification of communicable diseases, 3 Mar 2023','Dengue announcement (MO Drive, Dengue)']
};

/* ---------- Trauma walk-ins ---------- */
P['trauma-walkins'] = {
  title:'Trauma walk-ins: T-RACS and HIT CT', src:'T-RACS policy, May 2025', grp:'rules', sub:'protocol', isnew:true,
  lead:'A walk-in trauma patient can be sicker than they look. Check the T-RACS criteria first, then the high-impact trauma CT criteria.',
  start:'tracs',
  nodes:{
    tracs:{check:'any', q:'Any T-RACS Tier 1 criterion?', items:['SpO2 under 90%','RR under 10 or over 30','SBP under 100','Pulse over 120','GCS 12 or less','Child too quiet or inconsolable, or with unexplained abnormal vital signs','Visible injury in more than 1 body region','Exsanguinating external bleeding','Flail chest or open chest wound','Suspected unstable pelvic fracture','Hard signs of spinal cord injury','Positive FAST'], opts:[['Yes, any','act'],['None','hit']]},
    act:{end:'admit', title:'Activate T-RACS Tier 1 and move to Resus now', items:['Tier 1 is the ED team led by the EP, with a radiographer; the EP responds within 5 minutes','Transfer the patient to ED Resus immediately','Tier 2 specialties come through the HKL operator ("T-RACS activation in ED Resus HKL") within 30 minutes; children and pregnant patients go through the HTA operator','Fill in the T-RACS check-in book'], gap:'Source: Trauma Team (T-RACS) HKL Policy, updated May 2025; Tier 2 started 2 May 2025.'},
    hit:{q:'High-impact mechanism plus any physiological or anatomical criterion?', hint:'For patients 18 and over. The EP on duty decides.', info:['Mechanism: collision over 50 km/h; fall over 3 m; pedestrian, cyclist or motorcyclist against a car or larger; a death in the same vehicle; ejection; roll-over; extrication over 15 minutes; explosion','Physiological: SpO2 under 90; GCS under 13; SBP under 100; RR over 30; pulse over 120; age over 65; on anticoagulants','Anatomical: visible injury in more than 1 region; suspected unstable pelvic fracture; flail or open chest; hard signs of spinal cord injury; positive FAST'], opts:[['Yes','ct'],['No','minor']]},
    ct:{end:'refer', title:'Ask the EP for a HIT whole-body CT', items:['The EP fills in and signs the HIT request and the radiology form PER.SS-RA301; an HO or MO signature alone is not valid','Phone Radiology: ROTD ext 7122; Radiology MO EDCT ext 5928; CT main counter ext 7109','Consent is mandatory (next of kin, or 2 specialists if unconscious). Pregnancy status in women of childbearing age. 18G cannula, ideally antecubital. IV hydrocortisone 200 mg if an allergy is known or uncertain. A renal profile is not mandatory','A TLS-trained ED MO goes with the patient; ask for the preliminary report 1 hour later','Request it as soon as the criteria are met: a later CT or MRI is hard to get'], gap:'Sources: HIT protocol, ETD and Radiology HKL, 23 Dec 2021; trauma announcement, 15 Aug 2023.'},
    minor:{end:'neutral', title:'Continue the trauma survey', items:['Examine the CNS (upper and lower limbs) as part of the survey, and re-examine any patient passed over to you','Unstable C-spine: use head immobilisers; a collar alone is not enough','Pain out of proportion: think of ischaemia or compartment syndrome; check the distal pulses before and after manipulation','Do not discharge a patient who cannot walk; localised bony tenderness with a normal X-ray is treated as a fracture, with a follow-up X-ray'], gap:'Sources: trauma announcement, 15 Aug 2023; Million Ringgit Habits, ETD HKL.'}
  },
  refs:['Trauma Team (T-RACS) HKL Policy, updated May 2025; TRACS update, 2 May 2025','High Impact Trauma (HIT) CT protocol, ETD and Radiology HKL, 23 Dec 2021','Trauma announcements, 15 Aug 2023 (MO Drive, ATLS)']
};

/* ---------- Children ---------- */
P['children'] = {
  title:'Children in the ED', src:'Paeds folder, MO Drive', grp:'rules', sub:'protocol', isnew:true,
  lead:'Where to triage a child, and the department\'s quick doses for asthma, croup, dehydration and swallowed objects.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', opts:[['Where to triage a child (PAT)','pat'],['Asthma: MDI doses','asthma'],['Croup','croup'],['Diarrhoea and dehydration','dehyd'],['Swallowed foreign body','fb']]},
    pat:{check:'any', q:'Any reason to keep the child in the ETD?', items:['Critical: arrest, airway compromise, severe respiratory distress, shock, altered mental state, polytrauma or seizures','An OSCC case, a trauma case or an asthma case','Needs isolation (MERS-CoV, diphtheria, Ebola and similar)','A medical case with any abnormal PAT sign: appearance (tone, alertness, consolability, gaze, speech or cry), breathing (colour, tripod position, nasal flaring, tracheal tug, recession, abdominal breathing, stridor) or circulation (CRT 2 seconds or more, mottling)','The primary team prefers the ETD'], opts:[['Yes, any','etd'],['None','ped']]},
    etd:{end:'neutral', title:'Triage to ETD HKL', items:['Isolation cases go to the ETD isolation room through the infectious disease pathway']},
    ped:{end:'refer', title:'Triage to PEDWCH', items:['The paediatric ED at the Women and Children Hospital, when the primary team is likely to review the child there'], gap:'Source: Paediatric Assessment Triangle triage form, ETD HKL, version 9 Sep 2019.'},
    asthma:{end:'neutral', title:'Children\'s asthma: MDI with spacer and mask', items:[
      'Use an MDI with a spacer and mask, labelled with the child\'s name',
      'Mild or moderate: salbutamol 4–6 puffs under 6 years, 8–10 puffs over 6 years',
      'Improved: observe 60 minutes, then discharge with an action plan: the whole set (MDI, spacer and mask), oral prednisolone 1 mg/kg/day (max 30–40 mg) for 3 days, salbutamol 2–4 puffs every 4 hours until well, then as needed; TCA KK in 2 days if not improving',
      'Not improved: start prednisolone 1 mg/kg, uptriage to SARI, repeat every 20 minutes (max 3 cycles in 1 hour), oxygen 8 L/min by face mask; still not improved: treat as severe',
      'Severe: under 6 years salbutamol 4–6 puffs plus ipratropium 4 puffs; over 6 years salbutamol 8–10 puffs plus ipratropium 8 puffs; 3 cycles in the first hour; prednisolone 1 mg/kg; oxygen 8 L/min. Not improved: treat as life-threatening, with nebuliser and standard IV treatment'],
      gap:'Source: paediatric asthma posters, mild to moderate and severe (MO Drive, ARDS / Asthma).'},
    croup:{end:'neutral', title:'Croup', items:['Dexamethasone 0.3–0.6 mg/kg, or prednisolone 1–2 mg/kg','Nebulised budesonide 2 mg','Nebulised adrenaline 1:1000, 0.5 ml/kg (max 5 ml)'], gap:'Source: Paediatrics 101, Dr Alza\'s simple notes (department teaching notes). Check the doses against the Paediatric Protocols.'},
    dehyd:{end:'neutral', title:'Diarrhoea: the SOAP dehydration check', items:['Check 4 signs: S, sunken eyes; O, offer water (how the child drinks); A, activeness; P, pinch (skin turgor)','Fewer than 2 signs: under 5% dehydrated','2 or more signs: 5–10%','All 4 signs: over 10%','ORS 10 ml/kg after each loose stool; moderate dehydration: 75 ml/kg over 4 hours'], gap:'Source: Paediatrics 101, Dr Alza\'s simple notes (department teaching notes).'},
    fb:{q:'What was swallowed?', hint:'X-ray series for a foreign body: neck, chest and abdomen. A button battery needs an X-ray at once.', info:['High risk: button battery; long over 6 cm or wide over 2.5 cm; magnet; sharp object; super-absorbent gel ball; or a child with a GI abnormality or previous oesophageal surgery'], opts:[['Button battery','bb'],['Another high-risk object','fbhi'],['Low-risk object','fbx']]},
    bb:{q:'Where is the battery on the X-ray?', opts:[['Oesophagus','bboes'],['Stomach or beyond, with symptoms or a magnet','fbhi'],['Stomach or beyond, no symptoms','bbhome']]},
    bboes:{end:'refer', title:'Urgent: refer Paediatric Surgery', items:['A button battery in the oesophagus needs urgent removal']},
    bbhome:{end:'discharge', title:'Home with advice, and Paediatric Surgery clinic', items:['Home advice: normal diet, check the stools for 10–14 days, come back if it has not passed by 2 weeks','Paediatric Surgery clinic (Monday)']},
    fbhi:{end:'refer', title:'Refer Paediatric Surgery urgently', items:['High-risk object: urgent Paediatric Surgery referral']},
    fbx:{q:'Where is the object on the X-ray?', opts:[['Oesophagus','fboes'],['Stomach or beyond','fbhome']]},
    fboes:{end:'refer', title:'Refer for early removal', items:['An object in the oesophagus needs early removal: refer Paediatric Surgery']},
    fbhome:{end:'discharge', title:'Home with advice', items:['Normal diet','Check the stools for 10–14 days','Come back if it has not passed by 2 weeks'], gap:'Source: Foreign body ingestion algorithm, Paediatric ED HTA, 8 Sep 2020.'}
  },
  see:[['#asthma-zone','Asthma Zone flow'],['#oscc--child','Suspected child abuse']],
  refs:['Paediatric Assessment Triangle triage form, ETD HKL, 9 Sep 2019','Paediatric asthma posters (MO Drive, ARDS / Asthma)','Paediatrics 101, Dr Alza\'s simple notes (MO Drive, Paeds Emergency)','Foreign body ingestion algorithm, PED HTA, 8 Sep 2020']
};

/* ---------- Safe practice ---------- */
P['safe-practice'] = {
  title:'Safe practice: Million Ringgit Habits', src:'ETD HKL, Jan 2026', grp:'rules', sub:'protocol', isnew:true,
  lead:'Habits drawn from court cases with million-ringgit awards, plus the department\'s medicolegal tips. Use them before every discharge.',
  start:'menu',
  nodes:{
    menu:{q:'Which situation?', opts:[['Before any discharge','dc'],['Abdominal pain','abd'],['Limbs and fractures','limb'],['Subtle stroke, dengue and children','subtle'],['Notes, consent and records','notes'],['Imaging CDs from outside','cd'],['Code Blue outside the ED','blue']]},
    dc:{end:'neutral', title:'Before any discharge', items:['Give safety-net advice and document it: "Return immediately if pain or symptoms worsen"','Came back within 48 hours, or after several GP visits: admit','Observation cases: record the last vital signs before discharge','Ask about allergies, and document "no allergic history" if there is none','Confused patients: bed rails up','Time-sensitive organs (heart, brain, limb, testis, ovary): act fast and document the urgency','Explain, and document what you explained'], links:[['#tools','Open the discharge safety check']]},
    abd:{end:'neutral', title:'Abdominal pain', items:['Examine all 4 quadrants (inspect, palpate, percuss, auscultate) and document tenderness, guarding, rebound and bowel sounds','Right iliac fossa: Rovsing, obturator and psoas signs','Discharge only when the pain score is 0, with a clear diagnosis and safety-net advice','A "gastroenteritis" that will not settle may be an atypical appendicitis: FBC ± Alvarado score','Women: severe lower abdominal pain out of proportion: think of a twisted ovarian cyst. Record the LMP of every woman of reproductive age and think of ectopic pregnancy, whatever her marital status','Men: examine the testes (torsion window 6 hours)','Epigastric pain: ECG ± amylase'], gap:'Sources: Million Ringgit Habits, ETD HKL; KKM circular on ectopic pregnancy, 31 May 2018.'},
    limb:{end:'neutral', title:'Limbs and fractures', items:['Pain out of proportion: think of ischaemia or compartment syndrome','Check the distal pulses before and after manipulation, and refer early','Do not discharge a patient who cannot walk: ask "has the patient been to the toilet?" and document "patient can walk independently"','Localised tenderness with a normal X-ray: treat as a fracture, explain, arrange a follow-up X-ray and document it']},
    subtle:{end:'neutral', title:'Subtle stroke, dengue and children', items:['Stroke can be subtle: persistent dizziness, sudden blurred vision, numbness, subtle weakness (even one limb). Lower your threshold to scan or admit','Elderly with a new altered mental state: think of an acute-on-chronic subdural haematoma','Fever with no source: consider dengue, do at least an FBC and document the warning signs (abdominal pain, vomiting, diarrhoea)','Admit any febrile infant under 3 months; low threshold to admit children who keep going back to the GP; give precise fluids with a micro-chamber']},
    notes:{end:'neutral', title:'Notes, consent and records', items:['Courts judge the records, the communication and the conduct: "If it is not written, it is not done"','Record timings, vital signs, counselling and the follow-up advice given','Consent: specific, with the risks documented, and fresh consent for any additional procedure','Explain complications and prognosis; patients who feel ignored complain','Never alter records, back-date an entry, or discuss the case in casual messages afterwards: courts trust documents more than doctors\' memories'], gap:'Source: Medicolegal tip of the day (MO Drive, Jun 2026).'},
    cd:{end:'neutral', title:'Imaging CDs from another hospital', items:['Import the CD so it can go back to the patient: Desktop, then Radiant DICOM Viewer, then Local Archive, then Import CD','The images stay archived for the primary team, which avoids repeat imaging and radiation'], gap:'Source: (Radiology) How to use CD viewer (MO Drive).'},
    blue:{end:'neutral', title:'Code Blue outside the ED', items:['In-hospital emergency or arrest outside the ED: call the ED Call Centre on ext 5333 (03-2615 5333); Call Centre 2 is ext 6700','SCACC: Anaesthesia ext 1133 / 1134 and MECC 5333; after 5 pm, 5333','The ED Code Blue team (EP on call, Red or Yellow Zone MO, runner SN, treatment room MA, attendant) responds within 10 minutes'], gap:'Source: Code Blue Manual, ETD HKL, 2019.'}
  },
  see:[['#gz-rules--reas','Before you admit, discharge or transfer'],['#trauma-walkins','Trauma walk-ins']],
  refs:['Million Ringgit Habits: pearls to lower medico-legal risk in emergency medicine, ETD HKL (file dated 29 Dec 2025 to 2 Jan 2026)','Medicolegal tip of the day (MEDICOLEGAL.jpg), MO Drive, Jun 2026','KKM circular BPKK KKM.600-30/3/5 Jld.2 (9): ectopic pregnancy, 31 May 2018','(Radiology) How to use CD viewer (MO Drive)','Code Blue Manual, ETD HKL, 2019']
};

/* ---------- Department notes on ebook pathways (supplementary; the ebook text is unchanged) ---------- */
P['dengue'].dept = [
  {h:'Green Zone timings', src:'Dengue SOP and Contingency Plan ETD HKL 2.0, Oct 2023', items:[
    'Triage: abnormal ABCD, MTS 1–2 or morbid obesity to Red; warning signs or MTS 3 to Yellow; a special population (IHD, hypertension, diabetes) to the Green Zone (MTS 4); none of these to the UCC or the nearest KK (MTS 5)',
    'The MO sees the patient within 60–90 minutes',
    'Results: dengue combo POCT 30 minutes; FBC 45 minutes; renal profile, electrolytes, LFT and AST 60–90 minutes',
    'Decide on admission within 3–4 hours; the patient waits in the Yellow Observation Ward. A bed wait over 4 hours: inform the BMU and the medical team',
    'New warning signs or shock markers: uptriage and tell the EP in charge at once',
    'More than 1 dengue patient in a zone: use the dengue corner. Hang a red dengue tag on every dengue patient']},
  {h:'Discharge criteria (all must be met)', src:'Dengue SOP 2.0, Oct 2023', table:{head:['Area','Criterion'], rows:[
    ['Well-being','Walks independently; drinks 2–3 L a day; passes urine every 4–6 hours, at least 600 ml in 24 hours'],
    ['Warning signs','None: no lethargy or restlessness, abdominal pain, persistent vomiting or diarrhoea, or bleeding'],
    ['Vital signs','Normal CCTVR; BP in the normal range; pulse pressure over 20 and under 50 mmHg; HR under 90 (allow for temperature); shock index under 1'],
    ['Bloods','HCT under 40 (women, and men over 60) or under 45 (men under 60); platelets over 50,000; no platelet drop over 20,000 in 6 hours; no rapid Hb drop'],
    ['Social','A reliable carer; can come back; no transport or money problem']]}},
  {h:'Give and record', src:'Dengue SOP 2.0; dengue announcement; memo HKL/JK/98/188/3/(4)23, 3 Mar 2023', items:[
    'Give the dengue home care leaflet, the outpatient dengue monitoring card and a clinic appointment with a referral letter',
    'Notify after a positive combo test (late notification can be fined RM1,000), and record the time you referred to the primary team']}
];
P['dengue'].see = [['#calc-dengue','Shock index and pulse pressure check'],['#infection-alerts--notify','Notifying an infection']];

P['acs'].dept = [
  {h:'Low-risk chest pain: Trop T and the stress test', src:'Low Risk Chest Pain Protocol manual, ED HKL; stress test reminder', items:[
    'Trop T 14 ng/L or more is positive. Send each Trop T alone in its own tube, labelled STAT',
    'Discharge when symptoms have resolved, with no new ECG change or arrhythmia, Trop T under 14 and TIMI under 2',
    'Stress test (ETT) within 1 week: Thursdays only, 2:30–4:30 pm at SCACC level 8. Fill in both the form and the book (both at Yellow Obs) so ED staff stand by',
    'Positive: clopidogrel 300 mg plus enoxaparin 40 mg SC or fondaparinux 2.5 mg, and admit (medical)',
    'ED follow-up at 30 days for MACE; after a negative ETT stop aspirin unless the CAD risk is high',
    'MOs inform the EP on duty when admitting']},
  {h:'Ticagrelor (Brilinta) loading in the ED', src:'Usage of Tab Brilinta (suggested by CCU)', items:[
    'Ticagrelor 180 mg loading for a Malaysian citizen with: high-risk NSTEMI (TIMI 3 or more); recurrent ischaemia (2 or more episodes a day); previous PCI; clopidogrel failure; an extensive anterior infarct; or a young patient with an anterior MI',
    'Every Brilinta prescription needs the EP\'s countersignature (if no EP is around, write which EP agreed) and "(Sample)" on the prescription']},
  {h:'Talking to patients about IJN', src:'STEMI network IJN update (Head of ED, IJN)', items:[
    'Refer STEMI to IJN as usual through HISNET; the COVID referral stamp is no longer used',
    'Do not tell patients the treatment is free: the IJN Assessment Unit (Unit Taksiran) sets the charge by means, with discounts up to 100%',
    'Suggested words: "Encik, rawatan terbaik untuk selamatkan jantung adalah dengan proses masukkan belon dan besi \'stent\' di IJN oleh Pakar Jantung. Bagi caj, Unit Taksiran IJN akan tentukan bayaran ikut kemampuan. Diskaunnya boleh hingga 100%. Tapi semua ini ditentukan Unit Taksiran IJN."']}
];
P['acs'].see = [['#emacc','EMACC follow-up'],['#outpatient-referral','MAU FAST clinic']];

P['stroke-tia'].dept = [
  {h:'Code Stroke, ext 5999', src:'Latest Code Stroke Pathway; Stroke update with pathway, Aug 2023', items:[
    'Acute stroke (BEFAST) with onset under 9 hours: inform MECC and Resus 1 or 2; resuscitate and stabilise (ABC, DXT and treat hypoglycaemia, vital signs); rule out mimics',
    'Dial ext 5999 (customer service operator) and say CODE STROKE. Give the patient\'s name, your location and extension, COVID status (clean or dirty), and the name of the ETD MO caring for the patient',
    'The operator activates Neuromedical, Radiology and Anaesthesia. Wait for Radiology to call your zone before you send the patient to the CT suite',
    'Imaging: under 4.5 hours CT and CTA brain; 4.5–9 hours CT, CTA and CT perfusion',
    'Fill in the Code Stroke Google Form straight after activating (bookmarked on zone computers, or the QR code)',
    'If the operator cannot reach the Radiology MO, call the ROTD directly (ext 7122)',
    'Onset 9 hours or more: the usual stroke protocol']},
  {h:'Discharge medicines for Neuro patients', src:'Neuromedical patients discharge medications (MO Drive)', items:[
    'Give the prescribed medicines (DAPT, statin) until the next Neuro TCA, and write the TCA on the prescription',
    'The ED pharmacy supplies 2 weeks and returns the prescription; the patient collects the rest at the SCACC pharmacy']}
];
P['stroke-tia'].see = [['#safe-practice--subtle','Subtle stroke: lower your threshold'],['#outpatient-referral','Post-stroke workup at MAU FAST']];

P['abdominal-pain'].dept = [
  {h:'Women of reproductive age', src:'KKM circular BPKK KKM.600-30/3/5 Jld.2 (9), 31 May 2018', items:['Record the LMP of every woman of reproductive age','Keep a high suspicion of ectopic pregnancy whatever her marital status, and confirm or exclude it by history, examination and tests']},
  {h:'Before you send the patient home', src:'Million Ringgit Habits, ETD HKL', items:['Examine all 4 quadrants and document the findings; in the right iliac fossa check Rovsing, obturator and psoas signs','Discharge only when the pain score is 0, with a clear diagnosis and safety-net advice','Men: examine the testes. Epigastric pain: ECG ± amylase']}
];
P['abdominal-pain'].see = [['#safe-practice--abd','Abdominal pain habits'],['#emacc','EMACC review within 3 days']];

P['paracetamol-overdose'].dept = [
  {h:'Drug level tubes', src:'TDM PCM, salicylate, BZD (MO Drive, Toxicology)', items:['Paracetamol and salicylate levels: together in 1 plain (red-top) tube','Benzodiazepine level: a separate plain tube']}
];
P['paracetamol-overdose'].see = [['#blood-tests--tox','Drug levels and methanol']];

P['renal-colic'].dept = [
  {h:'Department ureteric colic pathway', src:'Ureteric colic pathway (MO Drive, Urology)', items:[
    'Refer Urology urgently also for: severe colic (pain that will not settle, persistent vomiting, worsening despite treatment), renal insufficiency or AKI, or hydronephrosis of any grade',
    'Pregnant patients are seen by O&G first',
    'On-call Urology reviews within 1 hour of referral',
    'POCUS for hydronephrosis by the EP within 30 minutes of the provisional diagnosis',
    'Discharge bundle: referral letter to the KK, discharge advice and aftercare notes, and the KUB X-ray film',
    'Stones passed within 4 weeks: 98% of those under 5 mm, 60% of 5–7 mm, 39% of over 7 mm']}
];
P['renal-colic'].see = [['#emacc','EMACC follow-up'],['#em-watch','EM Watch']];

P['pneumonia'].see = [['#infection-alerts--tb','Suspected TB'],['#outpatient-referral','MAU FAST clinic for CURB-65 0–1']];
P['mild-tbi'].see = [['#gz-rules--reas','CT brain and going home: EP review'],['#safe-practice--cd','Imaging CDs from outside']];
P['behavioural-disturbance'].see = [['#referral-rules--psy','Psychiatry referral'],['#yellow-zone','Yellow Zone PSY corner']];
P['cellulitis'].see = [['#em-watch','EM Watch takes cellulitis'],['#mau-admission','MAU takes cellulitis']];
P['asthma'].see = [['#asthma-zone','Asthma Zone flow (Nov 2025)'],['#children--asthma','Children\'s asthma doses']];
P['hypertensive-urgency'].see = [['#emacc','EMACC within 1 week'],['#em-watch','EM Watch']];
P['scrotal-pain'].see = [['#safe-practice--abd','Torsion window: 6 hours']];
