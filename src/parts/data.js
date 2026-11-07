const P = {};

/* ---------- Abdominal pain (p10–11) ---------- */
P['abdominal-pain'] = {
  title:'Abdominal pain', page:'10–11',
  lead:'Primary survey first: general appearance, airway, breathing, circulation and focused abdominal findings.',
  start:'unstable',
  nodes:{
    unstable:{q:'Haemodynamically unstable, toxic appearance or peritoneal sign?', opts:[['Yes','resus'],['No','secondary']]},
    resus:{step:'Resuscitation, then secondary survey', items:['Resuscitate','Focused history and examination','Adequate pain control','Emergent tests: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM'], next:'dx'},
    secondary:{step:'Secondary survey', items:['Focused history and examination','Adequate pain control','Emergent tests as needed: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM'], next:'dc'},
    dc:{check:'all', q:'Does the patient meet all discharge criteria?', items:['Symptom free','Stable','No signs of haemodynamic instability','Responsive to treatment','No psychosocial issue','No logistic issue'], opts:[['All met','home'],['Not all met','dx']]},
    dx:{q:'Specific condition diagnosed?', hint:'See the red-flag diagnosis table below.', opts:[['Yes','admit'],['No','nodx']]},
    admit:{end:'admit', title:'Admit', items:['Keep NBM','IV drip','± antibiotic','Urgent referral','± imaging']},
    nodx:{end:'neutral', title:'Not covered by the ebook', items:['The ebook does not show this branch. Discuss with the EP on duty.']},
    home:{end:'discharge', title:'Discharge with appropriate follow-up', items:['Give the discharge advice below','Follow-up at EMACC or EMWATCH in 24 to 48 hours']}
  },
  advice:['Return to hospital immediately if pain worsens or new symptoms appear, such as vomiting, diarrhoea, fever or bleeding from the back passage','Avoid caffeine, fatty foods and spicy foods','Take simple analgesia such as paracetamol and anti-reflux medications','Return for follow-up at EMACC or EMWATCH in 24 to 48 hours'],
  tables:[{title:'Red flags: who and what to think of', head:['Patient','Consider'], rows:[
    ['Female of childbearing age, e.g. vaginal bleed or discharge','Ectopic pregnancy, miscarriage, ovarian torsion, PID'],
    ['Elderly over 65, heart or peripheral vascular disease, or AF','AAA, mesenteric ischaemia'],
    ['Pain out of proportion in the elderly','Mesenteric ischaemia'],
    ['Immunodeficiency, e.g. HIV, chronic steroids','Occult infection'],
    ['Abdominal surgical history','Intestinal obstruction, hernia complications'],
    ['Sudden onset of severe pain','MI, perforated viscus, ruptured AAA, ovarian cyst torsion'],
    ['Adolescent male','Testicular torsion'],
    ['Alcohol abuse','Pancreatitis, hepatic cirrhosis'],
    ['Fever','Appendicitis, biliary sepsis, diverticulitis, pancreatitis, intra-abdominal sepsis']]}],
  refs:['Karrar S. Abdominal pain. iEM 2020','Non-specific abdominal pain (patient information), NHS','International Emergency Medicine Education Project','UpToDate']
};

/* ---------- Acute gastroenteritis (p17–18) ---------- */
const ageConcerns = ['Age over 65 years','Diarrhoea more than 7 days','Persistent GI losses','Poorly controlled comorbidity','Immunocompromising condition','Poor oral intake','Unable to ambulate, too lethargic','Concern about adherence to therapy','Cognitive or functional impairment','Concern about social issue (poor support)'];
P['gastroenteritis'] = {
  title:'Acute gastroenteritis (adult)', page:'17–18',
  lead:'For a clinical diagnosis of AGE in an adult.',
  start:'shock',
  nodes:{
    shock:{q:'Signs of shock?', opts:[['Yes','resus'],['No','dehyd']]},
    resus:{end:'admit', title:'Resuscitate accordingly and admit', items:[]},
    dehyd:{check:'any', q:'Clinical signs of dehydration?', items:['Dry mucous membranes','Decreased skin turgor','Altered mental status (confusion, lethargy)','Tachycardia','Orthostatic hypotension','Syncope or pre-syncope'], opts:[['Yes, present','rehyd'],['None','pc1']]},
    rehyd:{step:'Rehydrate and investigate', items:['Intravenous fluid repletion','Oral rehydration salts if possible','Blood investigations: FBC, RP'], next:'improve'},
    improve:{q:'Clinical improvement and normal renal function?', opts:[['Yes','pc2'],['No','admit']]},
    admit:{end:'admit', title:'Admit', items:[]},
    pc1:{check:'any', q:'Any practical concerns?', items:ageConcerns, opts:[['Yes, present','pcadmit'],['None','opd']]},
    pc2:{check:'any', q:'Any other practical concerns?', items:ageConcerns, opts:[['Yes, present','pcadmit'],['None','opd']]},
    pcadmit:{end:'admit', title:'Consider admission', items:['Outpatient management applies only if there are no practical concerns.']},
    opd:{end:'discharge', title:'Outpatient management', items:['Discharge with ORS and symptomatic relief','Empirical antibiotics are not recommended','Give the discharge advice below','TCA EMWATCH or nearest healthcare facility']}
  },
  advice:['Continue taking prescribed medications as directed','Drink plenty of fluid (ORS, clear soups, diluted fruit juices) to prevent dehydration','Avoid caffeinated, alcoholic and sugary drinks, as they can worsen diarrhoea','Get plenty of rest','Hand hygiene, especially after using the toilet and before eating','Seek medical help for persistent vomiting or inability to keep fluids down, blood in stools or persistent high fever, or severe abdominal pain or worsening symptoms'],
  concerns:ageConcerns,
  refs:['Graves NS. Acute gastroenteritis. Prim Care 2013;40(3):727–41','Paediatric protocol for Malaysian Hospitals, 4th edition','UpToDate','National Antimicrobial Guideline, 4th edition, 2024']
};

/* ---------- Biliary disease (p24) ---------- */
P['biliary'] = {
  title:'Biliary disease', page:'24',
  lead:'Right hypochondriac or epigastric pain, or known gallstone disease.',
  start:'start',
  nodes:{
    start:{step:'Investigate and control pain', items:['Send FBC, LFT, amylase','Pain control: NSAIDs and opioids'], next:'pain'},
    pain:{q:'Pain resolved?', opts:[['Yes','dc'],['No','gastro']]},
    dc:{check:'all', q:'Are all discharge criteria present?', items:['Good pain resolution after a period of observation','No fever, jaundice, pain or altered consciousness','Abdomen soft, non-tender, no signs of peritonism','Normal blood investigations'], opts:[['All present','home'],['Not all present','gastro']]},
    gastro:{end:'admit', title:'Refer to gastro team for admission', items:[]},
    home:{end:'discharge', title:'Discharge with outpatient referral for further investigation', items:['Give the discharge advice below']}
  },
  advice:['Return to hospital immediately if you develop recurrent pain, fever, yellowish discolouration of the skin or whites of the eyes, dark yellow-brown urine or pale white stool','Take a low-fat diet','Take simple analgesia such as paracetamol','Return for follow-up at the respective clinic'],
  refs:['Abraham et al. Surgical and nonsurgical management of gallstones. Am Fam Physician 2014;89(10):795–802','Approach to the management of gallstones. UpToDate, Jul 2022','Biliary colic: care instructions. MyHealth.Alberta.ca']
};

/* ---------- Cellulitis (p30) ---------- */
const genConcerns = ['Poorly controlled comorbidity','Poor oral intake','Unable to ambulate, too lethargic','Concern about adherence to therapy','Cognitive or functional impairment','Mental illness','Concern about social issue (poor support)'];
P['cellulitis'] = {
  title:'Acute cellulitis', page:'30',
  lead:'For a patient presenting with limb redness.',
  start:'lts',
  nodes:{
    lts:{check:'any', q:'Any life-threatening signs?', items:['In sepsis or shock','Suspected necrotising fasciitis (bullae, severe pain)','Suspected DVT (history, clinical presentation, USG 2-point compression test)','Suspected meningococcal rash','Groin or inguinal redness'], opts:[['Yes, present','admit'],['None','abx']]},
    admit:{end:'admit', title:'Admit', items:[]},
    abx:{q:'Already completed a course of antibiotics?', opts:[['Yes','partial'],['No','pc']]},
    partial:{end:'admit', title:'Admit and treat as partially treated cellulitis', items:[]},
    pc:{check:'any', q:'Any practical concerns?', items:genConcerns, opts:[['Yes, present','pcadmit'],['None','opd']]},
    pcadmit:{end:'admit', title:'Consider admission', items:['The ebook advises considering admission when any practical concern is present.']},
    opd:{end:'discharge', title:'Manage as outpatient', items:['Discharge with antibiotics and symptomatic relief medicine','TCA EMWATCH, EMACC, PC clinic or KK','Come to the nearest health facility if the condition worsens'], gap:'The ebook does not name an antibiotic for outpatient cellulitis. If IV antibiotics are planned and no bed is free, see the IV antibiotic / CCA memo (30 Jun 2026).'}
  },
  advice:['Discharge with antibiotics and symptomatic relief medicine','TCA EMWATCH, EMACC, PC clinic or KK','Come to the nearest health facility if the condition worsens'],
  concerns:genConcerns,
  refs:['HKL ED Clinical Pathway ebook, p30']
};

/* ---------- Renal colic (p53–54) ---------- */
P['renal-colic'] = {
  title:'Renal colic', page:'53–54',
  lead:'Start with the history and examination.',
  start:'susp',
  nodes:{
    susp:{q:'Clinical picture and history suggestive of ureteric colic?', opts:[['Yes','pain'],['No','alt']]},
    alt:{end:'neutral', title:'Consider an alternative diagnosis', items:[]},
    pain:{step:'Pain management', items:['NSAIDs'], next:'urgent'},
    urgent:{check:'any', q:'Any urgent indication for urology referral?', items:['Fever, urosepsis or pyelonephritis','Frank haematuria or anuria','Pregnant','Comorbidities: single kidney, transplanted kidney, autoimmune disease, heart disease, diabetes mellitus'], opts:[['Yes, present','uro'],['None','pocus']]},
    pocus:{q:'POCUS: hydronephrosis?', opts:[['Present','kub'],['Absent','resolve']]},
    kub:{step:'Urgent KUB ultrasound by the radiology team', items:[], next:'uro'},
    resolve:{q:'Symptoms resolved?', opts:[['Yes','home'],['No','uro']]},
    uro:{end:'refer', title:'Refer urology team', items:[]},
    home:{end:'discharge', title:'Discharge with discharge bundle', items:['Early TCA for KUB ultrasound','Urology referral','Give the discharge advice below']}
  },
  advice:['Stay hydrated: drink 6 to 8 glasses of water a day as directed, to help decrease pain and flush blockages from the urinary tract','Strain urine every time you pass urine, and bring any stones passed to the doctor for investigation','Take regular pain medications as directed by the doctor','Seek help at the nearest hospital if pain, fever or vomiting worsens, or for changes in urine: less urine, cloudiness, foul smell','Keep active; kidney stones are more common if you are not active or sit much of the day','Rest, and abstain from alcohol and seafood'],
  refs:['Carta Alir Pengurusan Pesakit Suspek Mengalami Batu Ureter, Jabatan Kecemasan & Trauma HKL','Tintinalli']
};

/* ---------- Mild traumatic brain injury (p25–26) ---------- */
P['mild-tbi'] = {
  title:'Mild traumatic brain injury', page:'25–26',
  lead:'Mild TBI with GCS 13 to 15.',
  start:'ct',
  nodes:{
    ct:{check:'any', q:'Any criteria for immediate CT brain?', items:['GCS under 15, 2 hours after injury','Vomiting more than 2 times','Evidence of skull fracture or signs of basal skull fracture','Focal neurological deficit (problems restricted to one part of the body or activity, visual changes, abnormal reflexes, problems walking)','Post-traumatic seizure','Symptomatic patient on anticoagulant and/or antiplatelet','Altered behaviour (drug misuse, alcohol consumption)'], opts:[['Yes, present','ct1'],['None','obs']]},
    ct1:{q:'Perform CT brain. Is the CT brain normal?', opts:[['Normal','pta'],['Abnormal','neuro']]},
    obs:{q:'Mild TBI observation and PTA assessment (A-WPTAS). More than 4 hours since injury and under 18 points on PTA?', opts:[['Yes','ct2'],['No','pta']]},
    ct2:{q:'CT brain result?', opts:[['Normal','pta'],['Abnormal','neuro']]},
    neuro:{end:'refer', title:'Refer neurosurgical team', items:[]},
    pta:{step:'PTA charting', items:['Continue PTA charting for a minimum of 6 hours since injury'], next:'dc', kind:'observe'},
    dc:{check:'all', q:'Are the safe discharge criteria fulfilled?', items:['Responsible care-taker present','Easy access to emergency response (e.g. 999)','Lives within a reasonable distance of medical care','Transport available, and a responsible person to facilitate transfer','Not under drug or alcohol influence','No signs or symptoms of raised ICP','No neurological deficit','GCS 15/15','Normal CT brain (if done)','Clinically well, tolerating orally and ambulating'], opts:[['All fulfilled','home'],['Not all','extobs']]},
    extobs:{end:'admit', title:'Admit for extended observation', items:['Inform the neuro rehab team']},
    home:{end:'discharge', title:'Discharge with head injury advice', items:['TCA EMWATCH or EMACC to review the formal CT brain report','If CT brain is normal and PTA was over 4 hours: refer for formal cognitive assessment at the Neuro Rehab Clinic (HKL/HRC)','HKL ext 7099 · HRC concussion clinic: neuro.hrc@moh.gov.my, 03-9145 3400 ext 3401','Referral letter with GCS and A-WPTAS score on arrival and at discharge, and the CT brain report','Upload the referral letter in cHeart or pick up at Unit Rekod; scan the A-WPTAS QR code']}
  },
  advice:['After a concussion, the patient should be accompanied by a responsible adult if possible','Go to the nearest Emergency Department for: loss of consciousness, disorientation, new deafness, imbalance, blurred or double vision, weakness of any limb, excessive sleepiness or drowsiness, vomiting, bleeding from either ear, fitting, or severe headache not relieved by painkillers','Do stay within reach of a telephone, rest, sleep regularly, and take painkillers such as paracetamol for headache','Don\'t stay at home alone for 48 hours after leaving hospital','Don\'t drink alcohol or take recreational drugs','Don\'t take aspirin or sleeping tablets','Don\'t play or train for any contact sport for at least 3 weeks without consulting your doctor','Don\'t drive'],
  refs:['Concussion and mild brain injury management. Headway Brain Injury Association','UpToDate','Mild TBI and PTA observation and pathway management, HKL']
};

/* ---------- Acute behavioural disturbance (p5–9) ---------- */
const organic = ['Substance intoxication (alcohol, serotonin syndrome, anticholinergic syndrome, neuroleptic malignant syndrome)','Hypoxia','Metabolic disturbance: hypoglycaemia, hyponatraemia, thyroid storm','Sepsis and CNS infection','Seizures, e.g. temporal lobe epilepsy','Head injury or other trauma','Poorly controlled pain','Other medical emergency or toxidrome'];
const BARS = {title:'Behavioural Activity Rating Scale (BARS)', head:['Score','Description'], rows:[['1','Difficult or unable to rouse'],['2','Asleep but responds normally to verbal or physical contact'],['3','Drowsy, appears sedated'],['4','Quiet and awake (normal level of activity)'],['5','Signs of overt activity (physical or verbal), calms down with instructions'],['6','Extremely or continuously active, not requiring restraint'],['7','Violent, requires restraint']]};
P['behavioural-disturbance'] = {
  title:'Acute behavioural disturbance', page:'5–9',
  lead:'Acute abnormal behaviour. Management of aggression follows the ABCDE pathway: Assessment, Behaviour stabilisation, Choice of medication, Documentation, Event reporting.',
  start:'abc',
  nodes:{
    abc:{q:'Stable ABC?', opts:[['Yes','viol'],['No','manage']]},
    manage:{end:'neutral', title:'Manage accordingly', items:[]},
    viol:{q:'Violent, or history of violence?', opts:[['Yes','weapon'],['No (non-violent, BARS 4)','nvorg']]},
    weapon:{q:'In possession of a weapon?', opts:[['Yes','grey'],['No','ab']]},
    grey:{end:'refer', title:'Call Polis Bantuan for help and activate CODE GREY', items:[]},
    ab:{step:'A and B: alert, assess, stabilise', items:['A: alert the team leader and team','Assess the overall situation and risk (BARS)','B: behavioural stabilisation, breakaway','De-escalation techniques (see the table below)'], next:'bars'},
    bars:{q:'BARS score?', hint:'See the BARS table below.', opts:[['1 to 3','org'],['5 to 6','org'],['7','meds']]},
    meds:{step:'C: choice of medication, control and restraint', items:['See the medication table below','Monitor for restraint risks: suffocation (prone position), aspiration, injury, hyperthermia, lactic acidosis, raised CK, escape'], next:'org'},
    org:{check:'any', q:'Evidence of organicity?', items:organic, opts:[['Yes, present','manage'],['None','psy']]},
    psy:{end:'observe', title:'Psychiatry MO review within 45 minutes', items:['D: documentation; monitor as per the observation chart for agitated or aggressive patients','E: event: incident reporting and RCA if required','Then disposition']},
    nvorg:{check:'any', q:'Non-violent patient: evidence of organicity?', items:organic, opts:[['Yes, present','manage'],['None','office']]},
    office:{q:'Within office hours?', opts:[['Yes','clinic'],['No','psy2']]},
    clinic:{end:'refer', title:'Send to psychiatric clinic or KK', items:[]},
    psy2:{end:'observe', title:'Psychiatry MO review within 45 minutes', items:['Then disposition']}
  },
  tables:[BARS,
    {title:'Medication', head:['Drug','Starting dose','Max dose','Notes'], rows:[
      ['Haloperidol','PO 5–10 mg, repeat in 30–60 min if needed; IM 5–10 mg, repeat in 30–60 min if needed. Paediatric PO 0.01–0.1 mg/kg 12-hourly, IM 0.025–0.075 mg/kg/dose; over 12 years: adult dose (usual 2.5–5 mg)','20 mg daily (paediatric 0.5 mg daily PO, 2.5 mg daily IM)','Acute dystonia, parkinsonism, NMS, seizure'],
      ['Olanzapine','PO 5–10 mg','20 mg daily','As for first-generation antipsychotics'],
      ['Risperidone','PO 0.5–1.0 mg; paediatric PO 0.02 mg/kg bd/tds','16 mg daily (paediatric 0.15 mg/kg)','As for first-generation antipsychotics'],
      ['Midazolam','IM 0.07–0.1 mg/kg (usual 5 mg); paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)','–','Respiratory depression, cardiac arrest, paradoxical agitation'],
      ['Diazepam','PO/IV 5–10 mg, repeat in 30–60 min if needed; paediatric IV/PR 0.1–0.4 mg/kg, PO 0.04–0.2 mg/kg bd/tds','20–60 mg; 10 mg (IV), 20 mg (PR)','Half-life 3–7 days'],
      ['Lorazepam','PO 1–2 mg, repeat in 30–60 min','4–8 mg; elderly or frail half the adult dose','Half-life 12.9 h'],
      ['Ketamine','IM 4 mg/kg; IV 0.5–2 mg/kg over 60 s','–','Hypertension, tachycardia, hypersalivation, laryngospasm, emergence phenomenon']]},
    {title:'Reversal agents', head:['Drug','Indication','Dose','Caution'], rows:[
      ['Flumazenil','Benzodiazepine overdose','IV 0.2 mg over 30 s; if no response repeat after 1 min, titrate to response or max 3 mg','Seizures, autonomic instability, arrhythmia'],
      ['Orphenadrine','Acute dystonia from antipsychotics','IM/IV 60 mg bd (max 120 mg/day); paediatric PO 1–2 mg/kg tds','Anticholinergic symptoms'],
      ['Diphenhydramine','Acute dystonia (paediatric)','1–2 mg/kg tds/qid','Sedation, dizziness, anticholinergic symptoms']]},
    {title:'De-escalation techniques', head:['Domain'], rows:[['Respect personal space'],['Do not be provocative'],['Establish verbal contact'],['Be concise'],['Identify wants and feelings'],['Listen closely'],['Agree, or agree to disagree'],['Set clear limits'],['Offer choices and optimism'],['Debrief patient and staff']]},
    {title:'Richmond Agitation-Sedation Scale (RASS)', head:['Score','Term','Description'], rows:[['+4','Combative','Combative, violent, immediate danger to staff'],['+3','Very agitated','Pulls or removes tubes or catheters; aggressive'],['+2','Agitated','Frequent non-purposeful movement, fights ventilator'],['+1','Restless','Anxious, apprehensive, movements not aggressive or vigorous'],['0','Alert and calm',''],['−1','Drowsy','Not fully alert, sustained awakening to voice (eye opening and contact over 10 s)'],['−2','Light sedation','Briefly awakens to voice (eye contact under 10 s)'],['−3','Moderate sedation','Movement or eye opening to voice, no eye contact'],['−4','Deep sedation','No response to voice, movement or eye opening to physical stimulation'],['−5','Unrousable','No response to voice or physical stimulation']]}],
  refs:['RCEM Acute Behavioural Disturbance in Emergency Departments 2022','Guidelines on management of aggressive patients in Ministry of Health facilities 2016','Richmond et al. Verbal de-escalation of the agitated patient. West J Emerg Med 2012;13(1):17–25','MIMS 2023',"Tintinalli's Emergency Medicine, 9th edition, Toxicology section 15"]
};

/* ---------- ACS and Obsess protocol (p12–14) ---------- */
P['acs'] = {
  title:'Acute coronary syndrome and Obsess protocol', page:'12–14',
  lead:'Patient with chest pain or an angina-equivalent symptom. Start with an ECG.',
  start:'ecg',
  nodes:{
    ecg:{q:'ECG findings?', opts:[['Suggestive of STEMI','stemi'],['Suggestive of ACS or NSTEMI','nstemi'],['Normal, old changes or no dynamic changes','oc']]},
    stemi:{step:'Consult EP on the floor', items:[], next:'ijn'},
    ijn:{q:'Fulfils IJN referral criteria, patient consented, and accepted for transfer?', hint:'IJN hotline 03-2617 8996.', opts:[['Yes, for transfer','ijnt'],['Not for transfer','lysis']]},
    ijnt:{end:'refer', title:'Transfer to IJN', items:[]},
    lysis:{step:'Update EP on the floor and proceed with thrombolysis', items:[], next:'ccu'},
    ccu:{end:'refer', title:'CCU referral', items:[]},
    nstemi:{step:'Start ACS treatment', items:['Serial ECG','Troponin T'], next:'trop'},
    trop:{q:'Troponin T elevated?', opts:[['Yes','nst'],['No','ua']]},
    nst:{end:'refer', title:'Treat as NSTEMI: CCU referral', items:[]},
    ua:{end:'admit', title:'Treat as unstable angina: admit medical ward', items:[]},
    oc:{check:'all', q:'Fulfils the criteria for the Obsess protocol?', items:['Over 18 years old','TIMI under 1','No high-risk factor','No evidence of trauma causing the symptom','Not pregnant','No underlying malignancy or palliative care','No other pathology causing the chest pain'], opts:[['All met','obs'],['Not all met','noobs']]},
    noobs:{end:'neutral', title:'Not suitable for the Obsess protocol', items:['The ebook does not show this branch. Discuss with the EP on duty.']},
    obs:{step:'Obsess protocol', items:['Start T aspirin 300 mg','Serial ECG','Vital signs hourly','Monitor pain score'], next:'onset', kind:'observe'},
    onset:{q:'Time since onset of chest pain?', opts:[['Under 2 hours','t2'],['2 to 4 hours','t24'],['Over 4 hours','t4']]},
    t2:{step:'Troponin T at 2 hours after onset (T=0)', items:[], next:'tq1'},
    t24:{step:'Troponin T on admission (T=0)', items:[], next:'tq1'},
    t4:{step:'Troponin T on admission (T=4)', items:[], next:'tq3'},
    tq1:{q:'Troponin T positive?', opts:[['Yes','pos'],['No','rep']]},
    rep:{step:'Repeat troponin T 2 hours later (T=2)', items:[], next:'tq2'},
    tq2:{q:'Troponin T positive?', opts:[['Yes','pos'],['No','home']]},
    tq3:{q:'Troponin T positive?', opts:[['Yes','pos'],['No','home']]},
    pos:{end:'admit', title:'Load with clopidogrel 300 mg and admit medical ward', items:[]},
    home:{end:'discharge', title:'Allow discharge', items:['T aspirin 150 mg od','Follow-up at 30 days','Stress test within 1 week (TCA 1/52); low-risk chest pain can be referred to MAU FAST clinic with ECG copy']}
  },
  advice:['Compliance to medication','Stop smoking and alcohol intake','Diet modification and an appropriate exercise regimen','Aim for a BMI under 25','TCA stat for any cardiac symptoms (chest pain, shortness of breath, diaphoresis, failure symptoms)','Avoid illicit drug use'],
  refs:['CPG Management of STEMI, 4th edition 2019, MOH/PAK/420.19(GU)-e','Obsess Protocol for Low Risk Chest Pain Patient, ED & Trauma, HKL']
};

/* ---------- Anaphylaxis (p15–16) ---------- */
P['anaphylaxis'] = {
  title:'Anaphylaxis', page:'15–16',
  lead:'Work through airway, breathing and circulation after the first IM adrenaline.',
  start:'ana',
  nodes:{
    ana:{q:'Anaphylaxis?', opts:[['Yes','first'],['No','allergic']]},
    allergic:{end:'neutral', title:'Treat as allergic reaction', items:[]},
    first:{step:'Immediate treatment', items:['Remove allergen','Administer oxygen','Administer IM adrenaline','Monitor blood pressure, pulse oximetry, ECG'], next:'air'},
    air:{q:'Airway?', opts:[['Patent','br'],['Partial obstruction','airp'],['Complete obstruction','airalg']]},
    airp:{step:'Partial obstruction', items:['Repeat IM adrenaline if no response','Nebulised adrenaline, repeat every 10 minutes','IV hydrocortisone'], next:'br'},
    airalg:{end:'refer', title:'Refer airway algorithm', items:[]},
    br:{q:'Breathing?', opts:[['Adequate','circ'],['Wheeze','brw'],['Apnoea','airalg']]},
    brw:{step:'Wheeze', items:['Repeat IM adrenaline if no response','Nebulised salbutamol, repeat if required','IV hydrocortisone'], next:'circ'},
    circ:{q:'Circulation?', opts:[['Adequate','h1'],['Shock','shock'],['Pulseless','acls']]},
    shock:{step:'Shock', items:['Lie the patient flat with legs raised','Repeat IM adrenaline if no response','IV adrenaline after 2 doses of IM adrenaline','Crystalloid','Consider IV glucagon in a patient on a beta-blocker'], next:'h1'},
    acls:{end:'refer', title:'ACLS protocol', items:[]},
    h1:{step:'IV hydrocortisone and IV chlorpheniramine', items:[], next:'res'},
    res:{q:'Resolved?', opts:[['Resolved','obsq'],['Unresolved','icu']]},
    icu:{end:'admit', title:'Medical or ICU admission', items:[]},
    obsq:{q:'Observation: which group fits?', info:['Good response: responded within 5–10 min to a single adrenaline dose given within 30 min of onset, AND complete resolution, AND adequate supervision after discharge, AND has unused adrenaline auto-injectors and has been trained to use them','Higher risk: severe reaction needing 2 or more adrenaline doses, previous biphasic reaction, severe asthma or severe respiratory compromise, possible continuing absorption of allergen, late-night presentation, logistic issues, or poor support'], opts:[['Good response','d6'],['Higher risk','d12']]},
    d6:{end:'discharge', title:'Discharge after a minimum of 6 hours from symptom resolution', items:['Give the discharge advice below','TCA EMWATCH in 1 to 2 days']},
    d12:{end:'discharge', title:'Discharge after a minimum of 12 hours from symptom resolution', items:['Give the discharge advice below','TCA EMWATCH in 1 to 2 days']}
  },
  advice:['Return to hospital if symptoms recur: swollen lips, eyes or face; hives or itchy rash; abdominal pain or vomiting; sudden breathing difficulty, cough or hoarse voice; foreign body sensation in the throat; unconsciousness','Risk of recurrence within 72 hours','Use an auto-injector, if available, if symptoms recur (depends on availability and access)','Avoid allergens','Always carry an allergy card','TCA EMWATCH in 1 to 2 days'],
  tables:[{title:'Drugs in anaphylaxis', head:['Drug','Dose'], rows:[['IM adrenaline','500 mcg (0.5 mg); 0.5 ml of 1:1000 at the mid outer thigh, may repeat every 5–15 min up to 2 doses'],['IV adrenaline','Bolus 100 mcg over 5–10 min: 0.1 mg (0.1 ml of 1:1000) in 10 ml NS, infuse over 5–10 min. Infusion 1 mcg/min: 1 mg (1 ml of 1:1000) in 500 ml NS at 0.5 ml/min'],['IV fluids','10–20 ml/kg NS bolus'],['Glucagon','1 mg IV every 5 min until hypotension resolves, then 5–15 mcg/min infusion'],['Salbutamol','2.5–5 mg nebulised; 6–8 puffs MDI with aerochamber'],['Hydrocortisone','200 mg IV'],['Chlorpheniramine','10–20 mg IV over 1 min'],['Ranitidine','50 mg IV (as printed in the ebook)']]}],
  refs:['Emergency treatment of anaphylactic reactions. Resuscitation Council UK, May 2021',"Tintinalli's Emergency Medicine, 9th edition",'World Allergy Organization Anaphylaxis Guidance 2020',"Discharge instructions for anaphylactic shock. Saint Luke's"]
};

/* ---------- Bronchial asthma (p19–23) ---------- */
const wardAsthma = ['Nebulised salbutamol 1:3 every 1 hour, reassess after each cycle','Nebulised Atrovent (ipratropium) 500 mcg or nebulised Combivent 1 vial, every 4–6 hourly','IV hydrocortisone 100 mg TDS'];
P['asthma'] = {
  title:'Bronchial asthma', page:'19–23',
  lead:'Acute exacerbation of asthma: assess severity first.',
  start:'sev',
  nodes:{
    sev:{q:'Severity?', hint:'See the severity table below.', opts:[['Mild','bay'],['Moderate','ccz'],['Severe','cczs'],['Life threatening','cczs']]},
    bay:{step:'To Asthma Bay', items:[], next:'m1'},
    ccz:{step:'To Critical Care Zone', items:['The ebook sends moderate asthma to the Critical Care Zone (p19) and treats it with the mild/moderate algorithm (p20)'], next:'m1'},
    cczs:{step:'To Critical Care Zone', items:[], next:'s1'},
    m1:{step:'Bronchodilator', items:['MDI salbutamol 4–6 puffs (400–600 mcg) with spacer, or nebulised salbutamol 1:3','Reassess after 10 minutes'], next:'mr1'},
    mr1:{q:'Responds to treatment?', opts:[['Yes','dc'],['No','m2']]},
    dc:{check:'all', q:'Meets the criteria for discharge?', items:['Symptoms improved','SpO2 over 95% on room air','Adequate resources at home and no logistic issue','PEF over 80% predicted or best'], opts:[['All met','home'],['Not all met','m2']]},
    home:{end:'discharge', title:'Discharge with asthma action plan', items:['Written Asthma Action Plan (Malaysia CPG 2017)','MDI salbutamol 4–6 puffs PRN','T prednisolone 30 mg OD for 5 days','If symptoms persist despite regular MDI, come back','Continue asthma follow-up']},
    m2:{step:'Repeat bronchodilator, add anticholinergic and steroid', items:['MDI salbutamol 4–6 puffs (400–600 mcg) with spacer or nebulised salbutamol 1:3; reassess after 10 minutes; may repeat up to 3 times','For moderate asthma consider: nebulised Atrovent 500 mcg, or nebulised Combivent 1 vial, or MDI Atrovent 4 puffs (80 mcg); reassess after 10 minutes','Systemic steroid: T prednisolone 30 mg or IV hydrocortisone 200 mg'], next:'mr2'},
    mr2:{q:'Responds to treatment?', opts:[['Yes','mobs'],['No','s1']]},
    mobs:{end:'observe', title:'Admit or observe for frequent reassessment', items:['MDI salbutamol 6 puffs (600 mcg) with spacer or nebulised salbutamol 1:3, every 1 hour, reassess after each cycle','Nebulised Atrovent 500 mcg, or Combivent 1 vial, or MDI Atrovent 4 puffs, every 4–6 hourly','IV hydrocortisone 100 mg TDS']},
    s1:{step:'Severe or life-threatening treatment', items:['Nebulised salbutamol 1:3 continuous for 1 hour','SC Bricanyl (terbutaline) 0.5 ml (0.25 mg)','Nebulised Atrovent 500 mcg or Combivent 1 vial; may repeat every 20 minutes (up to 3 times)','IV hydrocortisone 200 mg if not yet given','Consider IV MgSO4 2.47 g in 20 cc NS over 20 minutes'], next:'sr1'},
    sr1:{q:'Responds to treatment?', opts:[['Yes','ward'],['No','irf']]},
    ward:{end:'admit', title:'Admit to ward', items:wardAsthma},
    irf:{q:'Impending respiratory failure?', opts:[['Yes','icu'],['No','s2']]},
    s2:{step:'Continue and watch closely', items:['Watch closely for worsening respiratory effort','Nebulised salbutamol 1:3 continuous for 1 hour','Nebulised Atrovent 500 mcg or Combivent 1 vial, every 4–6 hourly','IV hydrocortisone 100 mg TDS'], next:'sr2'},
    sr2:{q:'Responds to treatment?', opts:[['Yes','ward'],['No','icu']]},
    icu:{end:'admit', title:'Admit ICU or HDW', items:['Consider mechanical ventilation with an obstructive ventilation strategy','Nebulised salbutamol 1:3 continuous for 1 hour via T-piece connector; suction after each nebulisation','IVI ketamine or IVI propofol (refer drug dilution file)','Nebulised Atrovent 500 mcg or Combivent 1 vial every 20 minutes (up to 3 times)','IV hydrocortisone 100 mg TDS','IV antibiotic']}
  },
  tables:[{title:'Severity', head:['','Life threatening','Severe','Moderate','Mild'], rows:[
    ['Clinical features','Drowsy or confused, cyanosed, poor respiratory effort, silent chest','Sits forward, speaks in words, uses accessory muscles, agitated','Prefers sitting to lying, speaks in phrases, no accessory muscles, not agitated','Walking, speaks in sentences, no accessory muscles, not agitated'],
    ['Respiratory rate','','Over 30','20–30','Not or mildly tachypnoeic'],
    ['Heart rate','','Over 120','100–120','Under 100'],
    ['SpO2','','Under 90%','90–95%','Over 95%'],
    ['PEF','','Under 50% best or predicted','Over 50% predicted or best','Over 80% predicted or best']]}],
  refs:['GINA Pocket Guide 2023','Malaysia CPG Management of Asthma 2017',"Marino's The ICU Book, 4th edition",'Tintinalli, 10th edition']
};

/* ---------- Community acquired pneumonia (p27) ---------- */
P['pneumonia'] = {
  title:'Community acquired pneumonia', page:'27',
  lead:'For a patient diagnosed with CAP.',
  start:'o2',
  nodes:{
    o2:{q:'Requires inotropes or oxygen support?', opts:[['Yes','admit'],['No','curb']]},
    admit:{end:'admit', title:'Admit', items:[]},
    curb:{check:'score', q:'CURB-65 score', items:[['Confusion',1],['Urea over 7',1],['Respiratory rate 30/min or more',1],['SBP under 90 mmHg',1],['Age over 65 years',1]], suggest:s => s>=2 ? 1 : 0, opts:[['Score 0–1 (under 3% risk of death)','psi'],['Score 2 or more (over 10% risk of death)','admit']]},
    psi:{q:'Pneumonia Severity Index (PSI) class?', info:['Demographics: age, gender, nursing home','Comorbidities: neoplasia, liver disease, CHF, cerebrovascular disease, renal disease','Vital signs and examination: mental confusion, RR, SBP, temperature, HR','Laboratory and imaging: pH, urea, Na, glucose, haematocrit, pleural effusion, oxygenation'], opts:[['Class I or II','pc'],['Class III','brief'],['Class IV or V','admitpsi']]},
    pc:{check:'any', q:'Any practical concerns?', items:genConcerns, opts:[['Yes, present','pcadmit'],['None','opd']]},
    pcadmit:{end:'admit', title:'Consider admission', items:['The ebook advises considering admission when any practical concern is present.']},
    opd:{end:'discharge', title:'Manage as outpatient', items:['Discharge with antibiotics and symptomatic relief medicine','TCA EMWATCH, EMACC, PC clinic or KK; CURB-65 0–1 can be referred to MAU FAST clinic with a copy of the CXR','Come to the nearest health facility if the condition worsens'], gap:'The ebook does not name an outpatient antibiotic for CAP.'},
    brief:{end:'observe', title:'Brief observation and KIV discharge', items:[], gap:'The ebook chart also lists class III under admit.'},
    admitpsi:{end:'admit', title:'Admit', items:[], gap:'The ebook chart labels this branch "Class III or IV"; class V is not shown.'}
  },
  advice:['Discharge with antibiotics and symptomatic relief medicine','TCA EMWATCH, EMACC, PC clinic or KK','Come to the nearest health facility if the condition worsens'],
  concerns:genConcerns,
  refs:['HKL ED Clinical Pathway ebook, p27','MAU FAST clinic referral criteria (CAP with CURB score 0–1)']
};

/* ---------- CVA and TIA (p28–29) ---------- */
P['stroke-tia'] = {
  title:'CVA and TIA', page:'28–29',
  lead:'Stroke symptoms or BEFAST positive: Balance loss, Eyesight changes, Facial drooping, Arm weakness, Speech disturbance, Time.',
  start:'time',
  nodes:{
    time:{q:'How long have the symptoms lasted?', opts:[['Under 9 hours','asp'],['Over 9 hours','ct'],['Resolved within 24 hours (TIA)','tia']]},
    asp:{step:'Activate the Acute Stroke Protocol', items:['Send the patient for CT brain (acute stroke protocol)'], next:'lys'},
    lys:{q:'For thrombolysis?', opts:[['Yes','alt'],['No','cva']]},
    alt:{step:'Thrombolysis with IV alteplase', items:[], next:'nmw'},
    nmw:{end:'admit', title:'Admit neuromedical ward', items:[]},
    ct:{q:'CT brain result?', opts:[['No ICB','cva'],['Evidence of ICB','ns']]},
    ns:{end:'refer', title:'Refer neurosurgical', items:[]},
    cva:{end:'admit', title:'CVA: start aspirin and statin, neuromedical review', items:[]},
    tia:{step:'Transient ischaemic attack: CT brain', items:[], next:'abcd'},
    abcd:{q:'ABCD2 score?', opts:[['High (over 3)','cva'],['Low (0 to 3)','tiadc']]},
    tiadc:{end:'discharge', title:'Allow discharge with early neuromedical review', items:['Post-stroke work-up (echo, Holter) can be arranged through MAU FAST clinic after neuromedical review']}
  },
  advice:['Compliance to antiplatelet (aspirin)','TCA stat to the nearest hospital if symptoms recur','Control of BP and sugar','Stop smoking and alcohol','Exercise and achieve ideal body weight','Avoid illicit drug use','Always be accompanied by a responsible adult for daily activities'],
  refs:['CPG Management of Ischaemic Stroke, 3rd edition 2020, MOH/P/PAL/445.20(GU)-e','Acute Stroke Protocol, Hospital Kuala Lumpur','NHS: Treatment of transient ischaemic attack']
};

/* ---------- Dengue fever (p31–32) ---------- */
P['dengue'] = {
  title:'Dengue fever', page:'31–32',
  lead:'Fever with positive dengue serology, or clinically dengue.',
  start:'shock',
  nodes:{
    shock:{check:'any', q:'Signs of shock?', items:['Delayed CRT over 2 seconds','Poor pulse volume','Shock index over 1','Hypotension'], opts:[['Yes, present','ds'],['None','warn']]},
    ds:{step:'Triage to critical area: dengue shock', items:['Start bolus as per protocol (refer to algorithm A and B)','Urgent referral to medical and anaesthetic team'], next:'imp'},
    imp:{q:'Clinical improvement?', opts:[['Yes','cca'],['No','other']]},
    other:{step:'Consider another cause of shock (algorithm C)', items:[], next:'cca'},
    cca:{end:'admit', title:'Admit critical care area', items:[]},
    warn:{check:'any', q:'Any dengue warning signs?', items:['Abdominal pain or tenderness','Persistent vomiting (over 2 times in 24 hours)','Persistent diarrhoea (over 2 times in 24 hours)','Third space fluid accumulation (ascites, pleural or pericardial effusion)','Spontaneous bleeding tendency','Tender liver','Lethargy, restlessness or confusion','Raised HCT with rapid drop in platelets (HCT thresholds: male under 60 years 46%, male over 60 years 42%, female 40%)'], opts:[['Yes, present','owq'],['None','home']]},
    owq:{check:'all', q:'Eligible for direct admission to the Observation Ward (OW)?', hint:'Department memo, 23 Mar 2023: the triager sends these patients straight to OW without Yellow Zone review. All must be met.', items:['Referred from a Klinik Kesihatan (not a private clinic or hospital)','Dengue with warning signs only','Normal CCTVR and vital signs','Platelet over 50,000','Not morbidly obese'], opts:[['All met','ow'],['Not all met','gb']]},
    ow:{end:'observe', title:'Admit directly to the Observation Ward (OW)', items:['Bypasses the Yellow Zone','OW keeps at least 3 beds on the morning shift and 6 on the evening shift, with a medical officer from 10 am to 10 pm'], gap:'Not in the ebook: from memo HKL/JK/98/188/3(6)23, 23 Mar 2023.'},
    gb:{step:'Dengue with warning signs: start graded bolus as per protocol', items:[], next:'med'},
    med:{end:'admit', title:'Refer medical for admission', items:['Dengue fever is an exclusion for MAU admission']},
    home:{check:'all', q:'Fulfils the criteria to be treated at home?', items:['Able to tolerate orally well, good urine output, no history of bleeding','No warning sign','Stable serial HCT','No other criteria for admission (comorbidities, pregnancy, social factors)'], opts:[['All met','dc'],['Not all met','med']]},
    dc:{end:'discharge', title:'Discharge with dengue monitoring record and home care advice', items:[]}
  },
  advice:['Do: adequate bed rest','Do: adequate fluid intake (more than 8 glasses or 2 litres for an average person)','Do: take paracetamol (not more than 4 g a day)','Do: tepid sponging','Do: use mosquito repellent or rest under a mosquito net, even in the daytime','Do: look for and remove mosquito breeding places in and around the home',"Don't take NSAIDs (painkillers); if already taking them, consult your doctor","Antibiotics are not required","Don't use massage, cupping or quasa"],
  tables:[{title:'Important points', head:['Item','Formula'], rows:[['Obese patient (BMI over 27.5 kg/m²)','Use adjusted body weight'],['Adjusted body weight','Ideal body weight + 0.4 × (actual weight − ideal body weight)'],['Ideal body weight, female','45.5 kg + 0.91 × (height in cm − 152)'],['Ideal body weight, male','50.0 kg + 0.91 × (height in cm − 152)']]}],
  refs:['CPG Management of Dengue Infection in Adults, 3rd edition 2015, MOH/P/PAK/302.15(GU)']
};

/* ---------- Deep vein thrombosis (p33–35) ---------- */
const anticoag = ['SC fondaparinux (if creatinine clearance over 30): under 50 kg 5 mg once a day; 50–100 kg 7.5 mg once a day; over 100 kg 10 mg once a day','or SC Clexane 1 mg/kg every 12 hours (creatinine clearance over 30), 1 mg/kg once a day (creatinine clearance under 30)','Consult EP in an obese patient'];
P['dvt'] = {
  title:'Deep vein thrombosis', page:'33–35',
  lead:'Suspected lower or upper limb DVT.',
  start:'limb',
  nodes:{
    limb:{q:'Which limb?', opts:[['Lower limb','wells'],['Upper limb','ul']]},
    wells:{check:'score', q:'Wells score', items:[['Active cancer',1],['Immobility over 3 days or major surgery within 4 weeks',1],['Calf swelling over 3 cm compared with the other calf',1],['Collateral (non-varicose) superficial veins present',1],['Entire leg swollen',1],['Localised tenderness along the deep venous system',1],['Pitting oedema, greater in the symptomatic leg',1],['Paralysis, paresis or recent plaster immobilisation of the lower extremity',1],['Previously documented DVT',1],['Alternative diagnosis to DVT as likely or more likely',-2]], suggest:s => s>=3 ? 2 : (s>=1 ? 1 : 0), opts:[['Low risk (−2 to 0)','dd'],['Moderate risk (1 to 2)','ddm'],['High risk (3 or more)','cp']]},
    ddm:{step:'D-dimer', items:['Start interim anticoagulant while waiting for D-dimer (moderate and high risk)'], next:'ddq'},
    dd:{step:'D-dimer', items:[], next:'ddq'},
    ddq:{q:'D-dimer positive?', opts:[['Positive','cp2'],['Negative','kk']]},
    kk:{end:'discharge', title:'Discharge to nearest Klinik Kesihatan with advice', items:[]},
    cp:{step:'2-point compression test', items:['Start interim anticoagulant while waiting (high risk)'], next:'cpq'},
    cp2:{step:'2-point compression test', items:[], next:'cpq'},
    cpq:{q:'2-point compression test positive?', opts:[['Positive','dvt'],['Negative','us']]},
    us:{step:'Send for formal ultrasound', items:[], next:'usq'},
    usq:{q:'Formal ultrasound positive?', opts:[['Positive','dvt'],['Negative','other']]},
    other:{end:'neutral', title:'Consider other diagnosis and stop interim anticoagulant', items:['Admit to the ward after considering other diagnoses']},
    dvt:{end:'admit', title:'DVT confirmed: start anticoagulation', items:anticoag, gap:'The ebook does not state the disposition after a confirmed DVT.'},
    ul:{step:'Compression ultrasound from basilic and brachial veins to axillary veins', items:['Clinical signs of DVT with risk factors: in-dwelling catheter, old age, malignancy, hormonal therapy, pregnancy, trauma, immobilisation, obesity, previous DVT'], next:'ulq'},
    ulq:{q:'Ultrasound positive?', opts:[['Positive','dvt'],['Negative','ctv']]},
    ctv:{step:'CT venography', items:[], next:'ctq'},
    ctq:{q:'CT venography positive?', opts:[['Positive','dvt'],['Negative','other']]}
  },
  advice:['Return to hospital if the swelling increases','Return to hospital if you develop shortness of breath'],
  refs:['Modi S, et al. World J Emerg Surg 2016;11:24','coreem.net: DVT','NHS Kent and Medway: pathway for the management of DVT in primary care']
};

/* ---------- Heart failure (p36–37) ---------- */
P['heart-failure'] = {
  title:'Heart failure', page:'36–37',
  lead:'Suspected heart failure: rapid ABC assessment, focused history and examination, FBC, RP, troponin T, serial ECG, CXR; consider cardiac and lung POCUS.',
  start:'rd',
  nodes:{
    rd:{q:'Severe respiratory distress (severe congestion)?', opts:[['Yes','hr1'],['No','hypo']]},
    hr1:{end:'admit', title:'High risk: ICU or CCU', items:['Secure ABC, O2 supplement','Consider NIV (HACOR score); if NIV fails, consider intubation','If hypertensive: IVI GTN','IV diuretics','Find and treat triggers','ICU or CCU admission']},
    hypo:{q:'Hypotensive (low-flow state)?', opts:[['Yes','hr2'],['No','cong']]},
    hr2:{end:'admit', title:'High risk: ICU or CCU', items:['O2 supplement','Start vasopressor or inotropes','IV diuretics once perfusion improves','Refer CCU','Find and treat triggers','ICU or CCU admission']},
    cong:{q:'Stable heart failure: congestion?', opts:[['Yes (warm wet, moderate risk)','mod'],['No (warm dry, low risk)','dc']]},
    mod:{step:'Moderate risk: treat and observe', items:['O2 supplement','IV diuretics','Identify heart failure triggers and give specific treatment','Emergency observation'], next:'rec', kind:'observe'},
    rec:{q:'Recovery?', opts:[['Yes','dc'],['No','madm']]},
    madm:{end:'admit', title:'Medical admission', items:[]},
    dc:{check:'all', q:'Meets the safe discharge criteria?', items:['Normal BP and HR','Good diuresis','Rapid resolution of symptoms in ED','Normal RP, Hb, troponin and ECG','Low Emergency Heart Failure Mortality Risk Grade (EHMRG) score, available on MDCalc'], opts:[['All met','home'],['Not all met','madm']]},
    home:{end:'discharge', title:'Discharge with follow-up with the primary team for cardiac work-up', items:['CCF work-up can be referred to MAU FAST clinic with CXR and ECG']}
  },
  advice:['Heart failure diet: low sodium, carbohydrate and sugar','Lifestyle change: exercise, stop smoking and alcohol','Return to hospital immediately if heart failure symptoms worsen','Good control of comorbidities and compliance to medications'],
  refs:['Lee DS, et al. Emergency heart failure mortality risk grade (ACUTE study). Circulation 2019;139(9):1146–56','CPG Management of Heart Failure 2023, 5th edition, NHAM','2022 AHA/ACC/HFSA guideline for the management of heart failure. JACC 2022;79(17):e263–421']
};

/* ---------- Hypertensive urgency (p38–40) ---------- */
P['hypertensive-urgency'] = {
  title:'Hypertensive urgency', page:'38–40',
  lead:'Severe hypertension: BP over 180/110 mmHg. Target: a 10–20 mmHg reduction, not below 160/100 mmHg.',
  start:'tod',
  nodes:{
    tod:{check:'any', q:'New or progressive target organ damage?', items:['Acute coronary symptoms','Acute aortic dissection','Hypertensive encephalopathy','Intracranial haemorrhage or ischaemic stroke','Acute renal failure','Eclampsia or pre-eclampsia'], opts:[['Yes, present','emerg'],['None','rest']]},
    emerg:{end:'refer', title:'Hypertensive emergency', items:['Manage as hypertensive emergency']},
    rest:{step:'Hypertensive urgency: rest and recheck', items:['Rest in a quiet place (isolated if possible)','No active talking or listening','Address acute pain or emotional distress','Check BP every 30 minutes for 2 hours'], next:'q1', kind:'observe'},
    q1:{q:'BP reduction achieved?', hint:'10–20 mmHg reduction, not below 160/100 mmHg.', opts:[['Yes','home'],['No','mono']]},
    mono:{step:'Start antihypertensive monotherapy', items:['See Table 1.0 below','Continue non-pharmacological intervention','Check BP every 30 minutes for 2 hours'], next:'q2'},
    q2:{q:'BP reduction achieved?', opts:[['Yes','home'],['No','type']]},
    type:{q:'Newly diagnosed or chronic hypertension?', opts:[['Newly diagnosed','opt'],['Chronic','comb']]},
    opt:{step:'Optimise monotherapy dosing', items:['Check BP every 30 minutes for 2 hours'], next:'q3'},
    comb:{step:'Consider combination therapy', items:['ACEi + CCB, ACEi + thiazide diuretic, ARB + CCB, or ARB + thiazide diuretic','Continue POM if available','Check BP every 30 minutes for 2 hours'], next:'q3'},
    q3:{q:'BP reduction achieved?', opts:[['Yes','home'],['No','refer']]},
    refer:{end:'refer', title:'Refer medical for antihypertensive optimisation', items:[]},
    home:{end:'discharge', title:'Allow discharge with care bundle plan', items:['Young hypertension for investigation: refer to Physician\'s Clinic HKL']}
  },
  advice:['Home BP monitoring (if available), or a BP check by a healthcare provider at least 3 times a week; record the value','If BP is over 180/110 mmHg, repeat after 5 minutes of rest. If the second reading is the same or higher, or you have symptoms, seek medical help','Take antihypertensives as prescribed and keep enough supply until the next prescription','Keep clinic follow-up (EMWATCH the next day); bring the memo, referral and current medications','Call 999 or go to the nearest medical centre for chest pain, difficulty breathing or altered mental status','Healthy eating: fruit, vegetables, low-fat dairy; less salt and red meat; stop smoking; limit alcohol; regular aerobic exercise and weight control'],
  tables:[
    {title:'Table 1.0: antihypertensives in ED (* preferred)', head:['Drug','Type','Starting dose','Onset (h)','Max dose','Peak (h)'], rows:[['Captopril *','ACEi','12.5/25 mg stat then bd','0.4','50 mg tds','1–1.5'],['Perindopril *','ACEi','4 mg od','1–2','8 mg od','1'],['Amlodipine *','CCB','5 mg od','24–48','10 mg od','6–12'],['Felodipine *','CCB','5 mg od','2–5','10 mg od','2.5–5'],['Nifedipine *','CCB','5 mg tds','0.3','20 mg tds','0.5–1'],['Frusemide *','Loop diuretic','20 mg od','0.5–1','80 mg/day','1–2'],['Hydrochlorothiazide *','Thiazide diuretic','12.5 mg od','2','50 mg od','4'],['Losartan','ARB','50 mg od','6','100 mg od','1'],['Valsartan','ARB','80 mg od','2','320 mg od','2–4'],['Atenolol','Beta-blocker','25 mg od','1','100 mg od','2–4'],['Metoprolol','Beta-blocker','50 mg bd','1','200 mg bd','1.5–2'],['Bisoprolol','Beta-blocker','2.5–5 mg','1–2','20 mg/day','2–4']]},
    {title:'Table 1.1: contraindications', head:['Drug','Compelling','Possible'], rows:[['Thiazide diuretics','Gout','Metabolic syndrome, glucose intolerance, pregnancy, hypercalcaemia, hypokalaemia'],['Beta-blockers','Asthma, high-grade SA/AV block, bradycardia HR under 60','Metabolic syndrome, glucose intolerance, athletes'],['Calcium channel blockers','','Tachyarrhythmia, heart failure (HFrEF stage III–IV), severe leg oedema'],['ACE inhibitors','Pregnancy, previous angioneurotic oedema, K over 5.5, bilateral renal artery stenosis','Women of child-bearing potential'],['ARBs','Pregnancy, K over 5.5, bilateral renal artery stenosis','Women of child-bearing potential']]}],
  refs:['VA NEPHRON-D. N Engl J Med 2013;369:1892–1903','ONTARGET. N Engl J Med 2008;358:1547–59','CPG Hypertension Malaysia 2018','ESC/ESH Guidelines 2018','MIMS 2023']
};

/* ---------- Hyperglycaemia (p41–42) ---------- */
P['hyperglycaemia'] = {
  title:'Hyperglycaemia', page:'41–42',
  lead:'BG over 7.8 mmol/L in an inpatient with no history of DM, or random BG over 11 mmol/L.',
  start:'crisis',
  nodes:{
    crisis:{q:'DKA or HHS?', info:['DKA: capillary BG over 11 mmol/L, capillary ketone over 3 mmol/L or urine ketone over 2+, venous pH under 7.3 or HCO3 under 15','HHS: capillary BG over 30 mmol/L, serum osmolality over 320 mOsm/kg, pH over 7.3, HCO3 over 15 mmol/L, normal or nil urine or serum ketone'], opts:[['DKA','dka'],['HHS','hhs'],['Neither','dm']]},
    dka:{end:'admit', title:'DKA', items:['Manage as DKA; DKA and HHS are exclusions for MAU']},
    hhs:{end:'admit', title:'HHS', items:['Manage as HHS; DKA and HHS are exclusions for MAU']},
    dm:{q:'Pre-existing diabetes?', opts:[['Yes','known'],['No','bg']]},
    known:{step:'BG over 10 mmol/L, asymptomatic', items:['Restart old medication if known','If unsure or unknown, start a basal-bolus insulin regimen based on TDD (Table 1.0)','IV fluids only if signs of dehydration','Capillary BG hourly','Aim BG 7.8–10 mmol/L'], next:'k4'},
    k4:{q:'BG after 4 hours?', opts:[['Under 10 mmol/L','khome'],['Over 15 mmol/L','top']]},
    khome:{end:'discharge', title:'Discharge with action plan', items:[]},
    top:{step:'Top up', items:['Consider a top-up dose (call ED pharmacist during office hours) or start IVI insulin','BG hourly'], next:'k8'},
    k8:{q:'BG after another 4 hours?', opts:[['Over 10 mmol/L','kadm'],['10 mmol/L or below','khome2']]},
    kadm:{end:'admit', title:'Admit', items:[]},
    khome2:{end:'discharge', title:'Discharge with action plan', items:[], gap:'The ebook shows only the "over 10, admit" branch at this step.'},
    bg:{q:'Blood glucose?', opts:[['Over 20 mmol/L','sc'],['15–20 mmol/L','mtf'],['Under 15 mmol/L','kk']]},
    sc:{step:'Start SC insulin', items:['BG hourly until stable','Aim BG 7.8–10 mmol/L'], next:'sc4'},
    sc4:{q:'BG trend after 4 hours?', opts:[['Decreasing','scdc'],['Increasing','ivi']]},
    scdc:{end:'discharge', title:'Allow discharge with PO metformin', items:['Memo to KK or primary care to review']},
    ivi:{end:'admit', title:'Start IVI insulin and admit', items:['Search for reversible causes','Continue hourly BG check']},
    mtf:{end:'discharge', title:'Discharge with action plan', items:['Start PO metformin 500 mg OD for 1 week if no contraindication','If metformin is contraindicated, call ED pharmacy for a substitute','Memo to KK or primary care to review']},
    kk:{end:'discharge', title:'Refer KK or primary care as outpatient for DM work-up', items:['Discharge with action plan']}
  },
  advice:['If starting metformin, warn about nausea, anorexia and diarrhoea (usually mild, less if taken with or after meals)','If home glucose monitoring is available, record the sugar trend for the next TCA','Ensure the memo and medication are given on discharge','Educate the patient and carer on signs of hyper- and hypoglycaemia','If Type 1 diabetes is suspected, refer to the endocrine team','Adherence to medication and follow-up; healthy lifestyle','Seek urgent help or call 999 for severe dehydration, lethargy, persistent vomiting or abdominal pain, confusion or seizures'],
  tables:[
    {title:'Table 1.0: total daily insulin dose', head:['TDD (unit/kg/day)','Patient profile'], rows:[['0.2–0.3','Elderly, renal failure, risk of hypoglycaemia'],['0.4','Not meeting the above criteria, BG 7.8–11.1 mmol/L'],['0.5','Not meeting the above criteria, BG 11.2–22.2 mmol/L']]},
    {title:'Contraindications for metformin', head:['Contraindication'], rows:[['Decompensated heart failure'],['Renal disease, eGFR under 45 ml/min/1.73m²'],['Chronic liver disease'],['Hypoperfusion'],['Lactic acidosis'],['COPD']]}],
  refs:['Practical Guide to Inpatient Glycaemic Care, 2nd edition 2020, Malaysian Endocrine & Metabolic Society']
};

/* ---------- Hypoglycaemia (p43–44) ---------- */
P['hypoglycaemia'] = {
  title:'Hypoglycaemia', page:'43–44',
  lead:'BG under 3.9 mmol/L, with autonomic or neuroglycopenic symptoms, reversed by carbohydrate.',
  start:'route',
  nodes:{
    route:{q:'Patient alert, with no risk of aspiration?', opts:[['Yes (alert)','r15'],['No (not alert or aspiration risk)','iv']]},
    r15:{step:'Rule of 15s', items:['Give 15 g of quick-acting carbohydrate (see the table below)','Reassess in 15 minutes'], next:'r15q'},
    r15q:{q:'BG after 15 minutes?', opts:[['3.9 mmol/L or above','lc'],['Still under 3.9, first round','r15'],['Still under 3.9 after 2 rounds','persist']]},
    persist:{end:'admit', title:'Persistent hypoglycaemia despite rule of 15 twice: admit', items:['Start IV dextrose, e.g. D5% 150 ml/h or D10% 75 ml/h (lower rate if high risk of volume overload)','Aim BG 7.8–10 mmol/L','Find and correct reversible causes','Sulfonylurea-induced: consider octreotide and consult endocrinologist','Possible adrenal insufficiency: IV hydrocortisone 100 mg qid','Send refractory hypoglycaemia work-up']},
    iv:{step:'Establish IV line', items:['IV D50% 20–50 ml over 3 minutes, or IV D20% 75–100 ml over 20 minutes, or IV D10% 150 ml bolus','No IV access: IM glucagon 1 mg'], next:'lc'},
    lc:{step:'Once BG is back above 3.9 mmol/L', items:['Give 15–20 g of long-acting carbohydrate (see the table below)','Repeat BG hourly until stable','If BG 4.5 mmol/L or above for at least 2 readings, monitor BG 4–6 hourly','Find the reversible cause of hypoglycaemia','Assess the risk of recurrence'], next:'risk'},
    risk:{check:'any', q:'Any high-risk features?', items:['Long-acting hypoglycaemic agent','Recurrent hypoglycaemia during observation','Unable to tolerate orally','Poor social or home support','Comorbidities, e.g. renal or hepatic'], opts:[['Yes, present','adm'],['None','dc']]},
    adm:{end:'admit', title:'Admit', items:[]},
    dc:{check:'all', q:'Meets the discharge criteria?', items:['Brief duration','Full neurological recovery','Tolerating orally','Low risk of recurrence: no major cause needing admission; accidental with cause addressed; not on long-acting insulin or oral agents; adequate home monitoring','Primary care follow-up arranged: memo with the event, investigations and medicine changes; medications; hypoglycaemia action plan'], opts:[['All met','home'],['Not all met','adm']]},
    home:{end:'discharge', title:'Discharge with hypoglycaemia action plan', items:[]}
  },
  advice:['Avoid driving, cycling, swimming or heavy machinery for the next 24–48 hours','Hypoglycaemia awareness may be reduced for 48–72 hours: check blood sugar before meals, exercise and driving','Always carry quick-acting carbohydrate (hard candy, dextrose tablets)','Record all glucose readings and bring them to the next check-up','Seek medical help if a hypo causes unconsciousness or seizures, does not improve with quick-acting carbohydrate, or blood sugar stays low'],
  tables:[{title:'Carbohydrate examples', head:['Quick-acting (15 g)','Long-acting'], rows:[['1 tablespoon honey','3–4 biscuits'],['3 tablespoons table sugar dissolved in water','1 slice of bread'],['150–200 ml fruit juice','200 ml milk (if on NG feeding)'],['3 hard candies','Regular meal'],['2 tablespoons raisins','IV D5% infusion (NBM or NG tube)'],['3–4 glucose tablets','']]}],
  refs:['CPG Management of Type 2 Diabetes Mellitus, 6th edition 2020',"Goldfrank's Toxicologic Emergencies, 9th edition",'Alsahli M, Gerich JE. Hypoglycemia. Endocrinol Metab Clin North Am 2013;42(4):657–76','AACE/ADA consensus on inpatient glycemic control. Diabetes Care 2009;32(6):1119–31','Practical Guide to Inpatient Glycaemic Care, 2nd edition 2020']
};

/* ---------- Pain management (p45–50) ---------- */
P['pain'] = {
  title:'Pain management', page:'45–50',
  lead:'Pain assessment and the morphine pain protocol, for awake or non-awake adults.',
  start:'chest',
  nodes:{
    chest:{q:'Presenting with chest pain?', opts:[['Yes','cp'],['No','awake']]},
    cp:{end:'refer', title:'Refer to the EDHKL chest pain algorithm and treat ACS', items:['See the ACS and Obsess protocol pathway']},
    awake:{q:'Is the patient cooperative and awake?', opts:[['Yes','selfs'],['No','vent']]},
    selfs:{step:'Pain assessment with the MOH self-reported pain scale (0–10)', items:[], next:'ps'},
    vent:{q:'Is the patient mechanically ventilated?', opts:[['Yes','cpot'],['No','painad']]},
    cpot:{step:'Pain assessment with CPOT', items:['See the CPOT table below'], next:'ps'},
    painad:{step:'Pain assessment with PAINAD (geriatric, dementia) or FLACC (non-communicative)', items:['See the tables below'], next:'ps'},
    ps:{q:'Pain score over 6?', opts:[['Yes (severe)','mp'],['No','np']]},
    np:{step:'Non-pharmacological treatment plus analgesia', items:['Refer to the analgesic ladder below','Reassess in 30 minutes to 1 hour'], next:'re'},
    re:{q:'Pain score on reassessment?', opts:[['Under 4 (mild)','mild'],['4 to 6 (moderate)','np'],['Over 6 (severe)','mp']]},
    mild:{end:'discharge', title:'Regularise analgesia and review PRN', items:['Consider discharge (EMACC, EMWATCH or OPC)','Non-awake patients: EP review for discharge (non-ventilated only)','TCA stat to the nearest facility if pain persists']},
    mp:{step:'Consult EP: morphine pain protocol', items:['Prepare morphine in saline 1 mg/ml','Refer APS or consider regional anaesthesia if needed'], next:'sed'},
    sed:{q:'Sedation score under 2?', hint:'0 none (alert), 1 mild (sometimes drowsy), 2 moderate (often drowsy, easily rousable), 3 unrousable, S sleeping and easily rousable.', opts:[['Yes','rr'],['No','epc']]},
    rr:{q:'Respiratory rate over 8?', opts:[['Yes','bp'],['No','epc']]},
    bp:{q:'Patient normotensive?', opts:[['Yes','age'],['No','epc']]},
    age:{q:'Is the patient 60 years old or below?', opts:[['Yes','m1'],['No','m05']]},
    m1:{step:'Administer IV morphine 1 mg (1 ml)', items:['Reassess in 5 minutes'], next:'again'},
    m05:{step:'Administer IV morphine 0.5 mg (0.5 ml)', items:['Reassess in 5 minutes'], next:'again'},
    again:{q:'Pain score still over 6?', opts:[['Yes','sed'],['No','mild']]},
    epc:{end:'refer', title:'Consult EP to stabilise the patient', items:['Consider other non-opioid strong analgesia','Refer APS','Regional anaesthesia','In anaphylaxis, liver or kidney disease, discuss the mode of treatment with the EP']}
  },
  tables:[
    {title:'MOH analgesic ladder', head:['Pain score','Analgesia'], rows:[['Mild 1–3','Paracetamol and/or NSAIDs, COX-2 inhibitors, PRN and/or regular'],['Moderate 4–6','Weak opioid (e.g. tramadol, dihydrocodeine) combined with paracetamol and/or NSAIDs, COX-2, PRN and/or regular'],['Severe 7–10','Strong opioid (e.g. morphine, oxycodone) combined with paracetamol and/or NSAIDs, COX-2, PRN and/or regular'],['Uncontrolled','Refer to Acute Pain Service for PCA, epidural and other pain interventions'],['Any','May consider adjuvants for acute neuropathic and uncontrolled pain']]},
    {title:'Choice of analgesia', head:['Drug','Dosage','Caution'], rows:[['Paracetamol (PO/IV)','Over 50 kg: 500 mg–1 g 6–8 hourly, max 4 g/day. Under 50 kg: 15 mg/kg/dose, max 60 mg/kg/day','Hepatic impairment (preferred in elderly)'],['Diclofenac (PO/IM)','50–150 mg daily, 8–12 hourly, max 200 mg/day; do not give IV','GI ulcer, asthma, bleeding disorder, renal dysfunction, IHD, cerebrovascular disease, IBD'],['Mefenamic acid (PO)','250–500 mg 8 hourly','As for diclofenac'],['Celecoxib (PO)','400 mg BD in acute pain (48 h); 200–400 mg daily longer term; elderly 100 mg daily; not under 18','IHD, cerebrovascular disease, sulphonamide hypersensitivity, uncontrolled hypertension'],['Tramadol (PO/IV)','50–100 mg 6–8 hourly, max 400 mg/day','Seizure risk (high dose, CKD); elderly start 50 mg, max 300 mg/day'],['Morphine (SC/IV/PO)','SC: under 65 years 5–10 mg 4-hourly; over 65 years 2.5–5 mg 4-hourly. IV: follow the morphine pain protocol. Oral IR: 5–10 mg 4-hourly; elderly 2.5–5 mg 4–6 hourly','Acute asthma, respiratory depression, head injury; renal or hepatic dysfunction: reduce initial dose to 1/2–1/3'],['Fentanyl (IV/IM)','50–100 mcg; IVI per EDHKL dilution guideline','Renal or hepatic dysfunction: reduce initial dose to 1/2–1/3'],['Ketamine (IM/IV)','Analgesia 0.1–0.3 mg/kg; 0.2–0.5 mg/kg (labelled "recreational" in the ebook); partial dissociation 0.4–0.8 mg/kg; full dissociation 1–2 mg/kg','Avoid in IHD']]},
    {title:'Discharge and APS referral', head:['Discharge criteria from ED','Referral criteria to Acute Pain Service HKL'], rows:[['Pain score under 3','Persistent severe pain despite maximal pain therapy in ED'],['Cause of pain identified','Underlying chronic pain'],['Cause of pain treated','Previous follow-up under APS HKL']]},
    {title:'Non-pharmacological treatment', head:['Method','Use'], rows:[['Splints and slings','Immobilise injured parts for stability and pain relief'],['Comfort items','Blankets, pillows'],['Distraction','Conversation, music, visual distraction'],['Relaxation','Deep breathing, progressive muscle relaxation'],['Positioning','Adjust position to minimise discomfort'],['Ice therapy','Cold packs for acute injuries'],['Heat therapy','Heat packs for muscle spasm']]},
    {title:'FLACC (non-communicative)', head:['Category','0','1','2'], rows:[['Face','No particular expression or smile','Occasional grimace or frown, withdrawn','Frequent to constant quivering chin, clenched jaw'],['Legs','Normal position or relaxed','Uneasy, restless, tense','Kicking or legs drawn up'],['Activity','Lying quietly, moves easily','Squirming, shifting, tense','Arched, rigid or jerking'],['Cry','No cry','Moans or whimpers, occasional complaint','Crying steadily, screams or sobs'],['Consolability','Content, relaxed','Reassured by touch or talk, distractable','Difficult to console']]},
    {title:'PAINAD (geriatric and dementia)', head:['Category','0','1','2'], rows:[['Breathing','Normal','Occasional laboured breathing, short hyperventilation','Noisy laboured breathing, long hyperventilation, Cheyne-Stokes'],['Negative vocalisation','None','Occasional moan or groan, low-level negative speech','Repeated calling out, loud moaning or groaning, crying'],['Facial expression','Smiling or inexpressive','Sad, frightened, frown','Grimacing'],['Body language','Relaxed','Tense, distressed pacing, fidgeting','Rigid, fists clenched, knees pulled up, pulling or pushing away, striking out'],['Consolability','No need to console','Distracted or reassured by voice or touch','Unable to console, distract or reassure']]},
    {title:'CPOT (critical care)', head:['Category','0','1','2'], rows:[['Facial expression','Relaxed','Tense','Grimacing'],['Body movement','Absent, normal position','Protection','Agitation'],['Muscle tension','Relaxed','Tense, rigid','Very tense or rigid'],['Ventilator compliance (intubated)','Tolerating ventilator or movements','Coughing but tolerating','Fighting ventilator'],['Vocalisation (extubated)','Normal, silent','Sighing or moaning','Crying or sobbing']]}],
  refs:['MOH Malaysia. Pain as the 5th Vital Sign Guideline, 3rd edition 2018','MOH Malaysia. Introduction to Pain Free Programme 2020','MOH Malaysia. Pain as the 5th Vital Sign: Training Module for Doctors 2020','Scarth E, Smith S. Drugs in Anaesthesia and Intensive Care, 5th edition 2016','Vijayan R. Drugs for the Management of Pain. Pharmacological Basis of Acute Care 2015','Morphine protocol adapted from Acute Pain Service, Royal Adelaide Hospital']
};

/* ---------- Paracetamol overdose (p51–52) ---------- */
P['paracetamol-overdose'] = {
  title:'Paracetamol overdose', page:'51–52',
  lead:'Acute immediate-release paracetamol ingestion over 150 mg/kg. Consult the EP if the level is double the treatment line.',
  start:'time',
  nodes:{
    time:{q:'Time since ingestion?', opts:[['Under 2 hours','ac'],['2 to 8 hours','lvl'],['8 to 24 hours','nac'],['Over 24 hours','nac24']]},
    ac:{step:'Activated charcoal', items:[], next:'lvl'},
    lvl:{q:'Measure serum paracetamol and LFT at 4–8 hours after ingestion. Will the results be back within 8 hours of ingestion?', opts:[['Yes, within 8 hours','nomo'],['No, after 8 hours','nac']]},
    nomo:{q:'Plot on the nomogram: above the treatment line?', opts:[['Yes','admit'],['No','nomed']]},
    nac:{step:'Commence N-acetylcysteine infusion', items:['Measure serum paracetamol concentration and LFT'], next:'nacq'},
    nacq:{q:'Paracetamol above the nomogram line, or ALT 50 U/L or more?', opts:[['Yes','admit'],['No','nomed']]},
    nac24:{step:'Commence N-acetylcysteine infusion', items:['Measure serum paracetamol concentration and LFT'], next:'nacq24'},
    nacq24:{q:'Paracetamol over 10 mg/L (66 µmol/L), or ALT 50 U/L or more?', opts:[['Yes','admit'],['No','nomed']]},
    admit:{end:'admit', title:'Full dose N-acetylcysteine infusion and admit', items:[]},
    nomed:{end:'discharge', title:'Medical treatment not required', items:['Refer psychiatry if the overdose was intentional','Discharge with advice after psychiatry clearance']}
  },
  advice:['Return to hospital immediately for abdominal pain, nausea or vomiting, yellow skin or eyes, confusion, or difficulty passing urine','Return to hospital if you develop suicidal thoughts','Do not keep medicines in open or easily reached places'],
  refs:['Chiew et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. MJA 2019','6th Clinical Toxicology Course Perak, CEP 2020','myhealth.gov.my: paracetamol poisoning']
};

/* ---------- SVT (p55–56) ---------- */
P['svt'] = {
  title:'Supraventricular tachycardia', page:'55–56',
  lead:'Heart rate over 150 bpm, regular, narrow QRS under 0.12 s. Based on NCORT guidelines.',
  start:'abcde',
  nodes:{
    abcde:{step:'Primary assessment (ABCDE)', items:['Maintain airway; O2 if SpO2 under 95%','Monitor vital signs','12-lead ECG','IV access; blood gas and electrolytes'], next:'unst'},
    unst:{check:'any', q:'Signs of instability?', items:['Shock','Syncope','Ischaemic chest pain','Severe heart failure'], opts:[['Yes, present','cv'],['None','vagal']]},
    cv:{end:'admit', title:'Unstable: consult EP for synchronised cardioversion, then admit', items:['Sedation if the patient is conscious','70–120 J (biphasic), up to 3 attempts; lower voltage in the frail or elderly','If refractory: correct the underlying cause, ensure good pad contact, IV amiodarone, alternative pad position (anterior-posterior), 4th synchronised shock after amiodarone, seek expert help','Admit for evaluation and cardiac monitoring']},
    vagal:{step:'Vagal manoeuvres', items:['Standard Valsalva or modified Valsalva'], next:'v1'},
    v1:{q:'Reverted to sinus rhythm?', opts:[['Yes','dcq'],['No','ad']]},
    ad:{step:'Adenosine (1st line)', items:['6 mg rapid IV bolus; if unsuccessful, repeat with 12 mg, then 18 mg','Caution in asthma; avoid in WPW with AF','Reduce dose by 50% via central line or in patients on carbamazepine or dipyridamole'], next:'v2'},
    v2:{q:'Reverted to sinus rhythm?', opts:[['Yes','dcq'],['No','hf']]},
    hf:{q:'Evidence of heart failure?', hint:'If adenosine is ineffective, consult EP.', opts:[['No','vera'],['Yes','amio']]},
    vera:{step:'No heart failure', items:['Verapamil 2–2.5 mg IV over 2 minutes (2nd line)','Esmolol 0.5 mg/kg/min over 1 minute then 0.05 mg/kg/min over 4 minutes (3rd line)','Consider synchronised cardioversion','Caution: a CCB together with a beta-blocker may cause severe hypotension and bradycardia'], next:'dcq'},
    amio:{step:'Heart failure', items:['Amiodarone 150 mg IV, then maintenance (see the drug table)','Consider synchronised cardioversion'], next:'dcq'},
    dcq:{check:'all', q:'Fulfils all three discharge criteria?', items:['Recurrent SVT (as printed in the ebook)','No signs of acute coronary syndrome','No signs of left ventricular failure'], opts:[['All met','home'],['Not all met','adm']]},
    adm:{end:'admit', title:'Admit for evaluation and cardiac monitoring', items:[]},
    home:{end:'discharge', title:'Discharge', items:['Arrange follow-up with MAU FAST clinic for further investigation, with a copy of the ECG']}
  },
  advice:['Short attacks that are not bothersome may not need treatment','For longer or uncomfortable episodes, try simple manoeuvres lying or sitting: take a deep breath and strain as if passing a bowel movement; or blow hard against your thumb in your mouth; or gently massage one side of the neck for 15 seconds (only if no known arterial disease)','If an attack lasts more than 20 minutes or causes significant discomfort, return to the Emergency Department','Reduce smoking, caffeine, alcohol, drugs or any known trigger','A specialist appointment will be arranged for further tests and treatment (medication or catheter ablation)'],
  tables:[{title:'Drugs used to terminate SVT', head:['Drug','Dose','Precautions'], rows:[['Adenosine','6 mg rapid IV push (1–2 s) through a large vein, 20 ml NS flush; if ineffective in 1–2 min, 12 mg, then 18 mg. Reduce dose by 50% via central line or with carbamazepine or dipyridamole','Transient chest discomfort, nausea, flushing; caution in asthma; avoid in WPW'],['Verapamil','2–2.5 mg IV over 2 min; if ineffective, 5–10 mg every 15–30 min; max 20 mg','Cardiovascular collapse in ventricular tachycardia; reduced contractility in severe LV dysfunction'],['Amiodarone','Loading 150 mg in 50 ml D5% over 30 min (max 30 mg/min); maintenance 360 mg over 6 h (1 mg/min), then 540 mg over 18 h (0.5 mg/min)','Hypotension, bradycardia, heart block; cumulative over 2.2 g with hypotension; phlebitis (large vein)'],['Esmolol','Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min; repeat loading if HR not controlled in 5 min, maintenance 0.1 mg/kg/min; 3rd bolus if needed, then 0.15 mg/kg/min; max 0.3 mg/kg/min','With CCB: severe bradycardia and hypotension; continuous BP and HR monitoring']]}],
  refs:['ESC Guidelines for the management of SVT 2019','Advanced Life Support Training Manual 2022, MOH Malaysia','Quick Dosing & Dilution Guide of Common IV Drugs in the ED 2018, HKL']
};

/* ---------- Syncope (p57–58) ---------- */
P['syncope'] = {
  title:'Syncope', page:'57–58',
  lead:'Transient loss of consciousness with loss of postural tone, then a spontaneous return to baseline neurological function, needing no resuscitation.',
  start:'true',
  nodes:{
    true:{q:'Is this syncope?', opts:[['Yes','hx'],['No','alt']]},
    alt:{end:'neutral', title:'Manage the alternative condition', items:['For example seizure, stroke or head trauma']},
    hx:{step:'Assess', items:['History','Examination','ECG','Diagnostic tests as indicated, e.g. troponin'], next:'risk'},
    risk:{check:'any', q:'Any dangerous cause or high-risk factor?', items:['Cardiac cause: arrhythmia, ischaemic heart disease, valvular heart disease, pericardial effusion or tamponade, Brugada, WPW, HOCM','Pulmonary embolism','Neurological: subarachnoid haemorrhage, subclavian steal, TIA','Haemorrhage: GI bleed, trauma, ruptured ectopic, ruptured ovarian cyst','History of cardiac disease, e.g. heart failure','Family history of sudden death','Older age with comorbidities','Shortness of breath with the event or during ED evaluation','Persistent low BP (SBP under 90 mmHg)','Abnormal ECG (arrhythmia, LBBB, ischaemia)','Haematocrit under 30','High-sensitivity troponin elevated'], opts:[['Yes, present','adm'],['None','home']]},
    adm:{end:'admit', title:'Admission for evaluation and cardiac monitoring', items:[]},
    home:{end:'discharge', title:'Observation and discharge', items:['Reflex syncope (vasovagal, carotid hypersensitivity, situational), medication-related, or orthostatic hypotension (a fall of 20 mmHg systolic or 10 mmHg diastolic on standing)','Follow-up at EMWATCH, EMACC or PC clinic']}
  },
  advice:['Return to hospital immediately if you collapse or faint with exertion; with headache, chest pain, palpitations or shortness of breath; or with more episodes at home','Avoid triggers such as prolonged standing in queues or hot weather','Take adequate fluid','Take medications as prescribed','Avoid activities where fainting may endanger life, such as climbing heights, swimming or driving','Sit for 1–2 minutes before standing in the morning or getting up from a chair if prone to dizziness'],
  refs:['Emergency department approach to an adult patient with syncope. UpToDate','Syncope discharge advice. NHS City Hospitals Sunderland 2010','Syncope. MyHealth KKM']
};

/* ---------- Acute scrotal pain (p59–63) ---------- */
P['scrotal-pain'] = {
  title:'Acute scrotal pain', page:'59–63',
  lead:'Physical examination by the ED medical officer no later than 30 minutes from arrival. Patients 12 and over go to urology; under 12 go to paediatric surgery.',
  start:'tt',
  nodes:{
    tt:{q:'Testicular torsion?', opts:[['Yes','onset'],['No, another diagnosis','dx']]},
    onset:{q:'Onset of pain under 6 hours?', opts:[['Yes','urgent'],['No','semi']]},
    urgent:{end:'refer', title:'Urgent referral to urology or paediatric surgery', items:['Seen by on-call specialist or MO within 30 minutes of referral','Emergency operation within 1 hour of review, and ward admission']},
    semi:{step:'Semi-urgent referral to urology or paediatric surgery', items:['Seen within 1–2 hours of referral','± urgent scrotal ultrasound: ordered only by the primary team, done within 1 hour of request'], next:'tt2'},
    tt2:{q:'Testicular torsion confirmed?', opts:[['Yes','op'],['No','bundle']]},
    op:{end:'refer', title:'Emergency operation and ward admission', items:[]},
    bundle:{end:'discharge', title:'Discharge with discharge bundle (only if authorised by urology or paediatric surgery)', items:['Medication: analgesia, antibiotics','After-care instructions, e.g. non-pharmacotherapy, physiotherapy','Follow-up at urology clinic, paediatric surgery or EMWATCH','Letters or memos on treatment given']},
    dx:{q:'Which diagnosis?', opts:[["Fournier's gangrene",'fg'],['Scrotal abscess','abs'],['Acute epididymitis or epididymo-orchitis','epi']]},
    fg:{end:'refer', title:'Semi-urgent referral to urology or paediatric surgery (KIV scrotal ultrasound)', items:['Adult 1st line: IV piperacillin-tazobactam 4.5 g stat and qid, or IV ceftriaxone 2 g stat and OD plus IV metronidazole 500 mg stat and tds; 2nd line: IV Unasyn 3 g stat and qid','Paediatric: Group A strep: IV benzylpenicillin 200,000–300,000 units/kg in 4–6 divided doses plus IV clindamycin 20–40 mg/kg/day in 3–4 doses; non-strep: IV cloxacillin 20–40 mg/kg/day in 3–4 doses']},
    abs:{end:'refer', title:'Semi-urgent referral to urology or paediatric surgery (KIV scrotal ultrasound)', items:['1st line: IV amoxicillin-clavulanate 1.2 g stat and tds, or IV ampicillin-sulbactam 3 g stat and qid, or IV cefuroxime 750 mg qid; 2nd line: IV ceftriaxone 2 g od']},
    epi:{end:'refer', title:'Non-urgent referral to urology or paediatric surgery', items:['Primary team reviews within 4 hours of referral; no paediatric patient is discharged without primary team review','Non-STD related: PO ciprofloxacin 500 mg BD for 2 weeks','STD related (gonorrhoea, chlamydia): IM ceftriaxone 500 mg stat plus PO azithromycin 500 mg stat plus PO doxycycline 100 mg bd for 14 days; start if high risk (no rapid kit in ED)','Paediatric (only if pyuria or positive culture or GU abnormality): PO cephalexin 25–50 mg tds/qid','If authorised for home: give the discharge bundle']}
  },
  advice:['Take regular pain medications','Limit activity until pain decreases; rest; do not sit for long periods','Use cold packs on the testicles as directed','Tuck a folded towel under the testicles when sitting or lying to ease pain and swelling','Avoid sex until antibiotics are finished or your doctor says it is safe; use condoms','Seek help at the nearest hospital for worsening pain, fever, vomiting or colour change of the testicles','No acute testicular pain should be discharged before being seen by an Emergency Physician, urologist or paediatric surgeon'],
  refs:['Rupp TJ, Leslie SW. Epididymitis. StatPearls 2023','Azmat CE, Vaitla P. Orchitis. StatPearls 2022','Auerbach J, et al. Fournier gangrene in the ED. Open Access Emerg Med 2020;12:353–64','Norton KS, et al. Management of Fournier\'s gangrene. Am Surg 2002;68(8):709–13',"Tintinalli's Emergency Medicine, 9th edition, chapter 93",'Pais VM. Fournier gangrene treatment and management. Medscape']
};

/* ---------- Green zone rules from the HKL ED MO Drive (memos and notes) ---------- */
P['gz-rules'] = {
  title:'Green Zone rules', src:'MO Drive memos', grp:'rules',
  lead:'Department memos and notes for MOs working in the Green Zone. Pick the rule you need.',
  start:'menu',
  nodes:{
    menu:{q:'Which rule do you need?', opts:[['Patient flow and the green slip','flow'],['Patients who should not wait outside','wait'],['Before you admit, discharge or transfer','reas'],['External referrals','ext'],['Disposition is delayed','delay'],['Dengue with warning signs, referred from KK','dengue'],['Gout','gout']]},
    flow:{end:'neutral', title:'Green zone patient flow and the green slip', items:[
      'Consultation room (MO): complete the green treatment slip (slip hijau) and attach the patient\'s queue number',
      'Ask the patient to put the slip in the Red Box and wait in the waiting tent; send to the X-ray counter if an X-ray is needed',
      'Treatment room (PPP): takes the slip from the Red Box, calls the queue number, does the procedures the MO ordered, documents each one and tells the patient the next step of the plan',
      'Pending lab results, observation or referral: PPP escorts the patient to the CCA (Chair Centric Area) and passes over to Yellow Zone Extension staff',
      'CCA: staff seat the patient, write details on the whiteboard, record vital signs on the slip, monitor, and send the patient back to the doctor\'s room when observation ends',
      'The MO calls the queue number again once the lab results are back',
      'To finish: attach the slip to the BHT, complete the documentation, follow the appointment flow chart if the patient needs a TCA, and give discharge advice',
      'The slip goes with the patient to the CCA and is returned to the Green Zone MO'],
      gap:'Source: memo HKL/JK/98/188/3(31)22, 20 Dec 2022, effective 19 Dec 2022.'},
    wait:{end:'neutral', title:'Patients who should not wait outside the Green Zone', items:[
      'Do not keep these patients waiting outside: the elderly, NSTEMI or ACS, and any illness that needs stat medication and monitoring',
      'Send them to the CCA, the rooms in front of R2, the corridor next to R2, or any other zone with space',
      'If you cannot find space, speak to the EP in charge',
      'A designated MA and HO cover the CCA, the R2 rooms and the corridor; let them know and they will start immediate management and monitoring',
      'CCA now extends to the 2 rooms beside the Asthma Zone and takes Green Zone cases waiting for workup, pending results or admission; the Green Zone MO who sent the patient stays responsible, and the BHT goes with the patient',
      'The R2 corridor can take Yellow Zone overflow; chairs can be used for patients who need minimal monitoring',
      'Green Zone TL: monitor admissions and tell the EP in charge if many are pending or a case needs immediate management',
      'Document who you pass a patient over to if anything is pending; patients planned for admission who are still waiting at the end of your shift must be passed over to the next MO'],
      gap:'Source: "Green Zone Warrior" note, Green Zone folder, MO Drive.'},
    reas:{end:'neutral', title:'Before you admit, discharge or transfer', items:[
      'Reassess every patient treated in a clinical zone before admitting them to a ward, transferring them to another zone, or discharging them, including reviewing blood results and imaging',
      'Patients who came within 24 hours: ask the TL, a master student or the EP to look at the case; they may need longer observation instead of a fast discharge',
      'If a CT brain was ordered and you plan to discharge: ask the EP to review, and give an EMWATCH or EMACC appointment'],
      gap:'Sources: memo HKL/JK/98/188/3(10)24, 9 Jul 2024; "Green Zone Warrior" note.'},
    ext:{end:'neutral', title:'External referrals', items:[
      'For any external referral (private or government hospital): take the details and the patient\'s current condition',
      'Discuss with the EP before accepting the patient to your zone',
      'Stable cases that could bypass the ED should go straight to the ward, for example a stable neurosurgical patient coming for a VP shunt',
      'If unsure, liaise with the EP',
      'HKL accepts interhospital transfers only for step-up care; the referral should be specialist to specialist (an MO may refer from a non-specialist hospital), and the HKL specialist must accept and confirm a bed with the Bed Management Unit before transfer'],
      gap:'Sources: "Green Zone Warrior" note; HKL Interhospital Referral and Transfer Policy, 2019.'},
    delay:{end:'neutral', title:'Disposition is delayed', items:[
      'If a patient involving several disciplines has been waiting a long time because no disposition has been decided, inform the Emergency Physician'],
      gap:'Source: memo HKL/JK/98/188/3(17)23, 1 Sep 2023.'},
    dengue:{check:'all', q:'Direct admission to the Observation Ward (OW), bypassing the Yellow Zone?', hint:'The triager identifies these patients. All criteria must be met.', items:['Referred from a Klinik Kesihatan (not a private clinic or hospital)','Dengue with warning signs only','Normal CCTVR and vital signs','Platelet over 50,000','Not morbidly obese'], opts:[['All met','ow'],['Not all met','dnot']]},
    ow:{end:'observe', title:'Admit directly to the Observation Ward (OW)', items:['Goes from triage straight to OW without Yellow Zone review','OW keeps at least 3 beds on the morning shift and 6 on the evening shift, with a medical officer from 10 am to 10 pm'], gap:'Source: memo HKL/JK/98/188/3(6)23, 23 Mar 2023.'},
    dnot:{end:'neutral', title:'Manage through the usual dengue pathway', items:['Not eligible for direct OW admission; see the Dengue fever pathway']},
    gout:{end:'refer', title:'Refer gout patients to the Klinik Kesihatan', items:[
      'Gout is managed at primary care: refer to the nearest Klinik Kesihatan',
      'Only complex cases go to Rheumatology, as listed in the CPG Management of Gout (2nd edition):',
      'Diagnostic: unclear diagnosis or atypical presentation, including suspected gout in women before menopause or men under 30 without risk factors',
      'Therapeutic: refractory despite adherence; flare not resolving despite CPG treatment; recurrent flares despite serum urate under 360 µmol/L; urate target not reached after 3 months of allopurinol at the maximum tolerated dose; tophaceous gout with progressive joint damage, active symptoms or growing tophi; destructive joint changes; allopurinol hypersensitivity or intolerance',
      'Special group: gout in pregnancy',
      'Consider surgery for tophi with uncontrolled infection, entrapment neuropathy or risk of permanent joint damage',
      'Gout with urolithiasis: assess by a urologist'],
      gap:'Source: HKL Medical Department letter (377)HKL/PBTN/98/100/29, 29 Nov 2024.'}
  },
  refs:['Memo HKL/JK/98/188/3(31)22: Penambahbaikan proses kerja pengurusan dan perawatan pesakit Zon Hijau, 20 Dec 2022','Green Zone Warrior (MO Drive, Green Zone folder)','Memo HKL/JK/98/188/3(10)24: Penambahbaikan bagi kes-kes kemasukan pesakit ke wad, discaj dan pemindahan, 9 Jul 2024','Memo HKL/JK/98/188/3(17)23: Penambahbaikan bagi kes-kes rujukan, 1 Sep 2023','Memo HKL/JK/98/188/3(6)23: Kemasukan terus pesakit denggi ke wad pemerhatian, 23 Mar 2023','Pemakluman rujukan pesakit gout ke Klinik Kesihatan, 29 Nov 2024']
};

P['asthma-zone'] = {
  title:'Asthma Zone flow', src:'Asthma zone memo', grp:'rules',
  lead:'Work flow in the Asthma Zone, from the triage counter to discharge or uptriage.',
  start:'tri',
  nodes:{
    tri:{step:'Receive from the triage counter: secondary triage in the Asthma Zone', items:['A: look, listen, feel','B: focused history (known asthma or COPD?)','C: rapid assessment of severity (see the Bronchial asthma pathway for the severity table)'], next:'crit'},
    crit:{q:'Critical?', opts:[['Critical','rz'],['Not critical','neb']]},
    rz:{end:'admit', title:'Manage as a Red or Amber Zone case', items:['Uptriage to Red or Amber Zone']},
    neb:{step:'Definitive treatment in the Asthma Zone', items:['Initial assessment and nebuliser by the AMO on duty in the Asthma Zone','Maximum 2 nebulisers in the Asthma Zone','Record BP, HR, RR, SpO2 and PEFR after each treatment on the Acute Respiratory Distress clerking sheet (HKL/JK/PK 01-02)','If urgent bloods (FBC, ABG) are needed, uptriage to the appropriate clinical zone'], next:'rev'},
    rev:{step:'Reassessment by the dedicated MO from the Amber Zone', items:['Every patient treated in the Asthma Zone is reassessed by the Amber Zone MO'], next:'resp'},
    resp:{q:'Recovered after up to 2 nebulisers?', opts:[['Recovered','risk'],['Not recovered or worse','up']]},
    up:{end:'admit', title:'Uptriage to Amber or Red Zone', items:['Continue treatment in Amber or Red Zone, or admit to ward','Refer to the MO on duty for further treatment','On the clerking sheet, record the zone and the MO in charge there']},
    risk:{step:'Record risk factors for asthma or COPD-related death on the clerking sheet', items:['Near-fatal asthma or COPD needing intubation and ventilation','Hospitalisation or emergency care for asthma or COPD in the last 12 months','Not using ICS, or poor adherence','Currently using or recently stopped oral steroids','Overuse of SABA (more than 1 canister a month)','Psychiatric disease or serious psychosocial problems','Confirmed food allergy'], next:'dc'},
    dc:{end:'discharge', title:'Discharge and update the asthma card', items:['Inhaler technique reviewed','Current medication reviewed','Advice on avoiding precipitants','Smoking cessation advice','Referral letter given','Follow-up arranged: OPD, PC or KK','Write all prescribed medications on the clerking sheet']}
  },
  tables:[{title:'Asthma Bay MDI regimen (poster for non-PUI patients with respiratory symptoms; check it is still current)', head:['Group','Treatment'], rows:[
    ['Mild or moderate, first line','MDI salbutamol with spacer 4–6 puffs (400–600 mcg); reassess after 10 minutes; if improved, discharge with an asthma action plan'],
    ['Not improving','MO evaluation with RR, SpO2, HR, BP; MDI salbutamol 8–10 puffs (800–1000 mcg), then MDI ipratropium 4 puffs (80 mcg); IV hydrocortisone 200 mg; consider nebulisation; repeat up to 3 cycles, titrating up to 6–8 puffs; if not improved, uptriage to SARI'],
    ['Severe','Evaluation by AMO; repeat cycles every 10 minutes until response; IV hydrocortisone 200 mg; consider MDI ipratropium; oxygen; consider nebulisation; disposition ICU or ward'],
    ['Life-threatening','Nebulisation; IV hydrocortisone 200 mg; IVI MgSO4 2.47 g; IV aminophylline (for COAD); IV antibiotic; consider NIV or mechanical ventilation; disposition ICU'],
    ['Regularised MDI','Salbutamol 6–10 puffs hourly via spacer, then 4–10 puffs every 2–4 hours; add ipratropium 4 puffs every 4 hours'],
    ['Notes','Label the spacer and give it to the patient; the MDI goes with the patient on discharge or admission and is not reused; nasal cannula oxygen can continue during MDI; change a Venturi mask to nasal cannula 4 L/min during MDI; PEFR if resources allow']]}],
  refs:['Carta aliran kerja di Zon Asma (MO Drive)','Polisi perawatan pesakit di Zon Asma (MO Drive)','Asthma management flow poster, ED & Trauma HKL','Acute Respiratory Distress clerking sheet HKL/JK/PK 01-02, issue 03, 11 Jun 2018']
};

P['emacc'] = {
  title:'EMACC follow-up', src:'EMACC SOP 2018', grp:'rules',
  lead:'Emergency Medicine After Care Clinic: a short-term safety net for patients discharged from the ED who need early review but cannot get a timely appointment.',
  start:'elig',
  nodes:{
    elig:{check:'all', q:'Eligible for EMACC?', items:['Adult, 18 years or older, being discharged from the ED','Cannot get an appointment within 14 days at their primary or specialty clinic, or has no regular clinic','A medical or trauma condition that fits EMACC (see the table below)','Does not need admission'], opts:[['All met','first'],['Not all met','usual']]},
    usual:{end:'neutral', title:'Arrange the usual follow-up', items:['Not for EMACC: give follow-up at the primary or specialty clinic as usual']},
    first:{q:'Could you get a timely appointment at the patient\'s own primary or specialty clinic?', hint:'The SOP asks you to try that first, using the referring department\'s usual process.', opts:[['Yes','usual'],['No','book']]},
    book:{end:'refer', title:'Book an EMACC appointment', items:[
      'Call 03-2615 5555 ext 7040 and speak to the EMACC MO in charge',
      'After office hours, weekends or public holidays: the MO in charge reviews the case on the next working day and calls the patient',
      'Put the patient\'s file in the EMACC box; maximum 40 patients a day',
      'Write the details in the EMACC appointment book',
      'Tell the patient and next of kin the date, time and place',
      'Write on the discharge card: the diagnosis, the reason for EMACC follow-up, and the patient\'s and next of kin\'s phone numbers',
      'Clinic: Green Zone, Monday to Friday 9 am to 4 pm, closed on weekends and public holidays',
      'First review within 1 week; EMACC discharges the patient back to the community, OPD or specialist clinic within 6 weeks'],
      gap:'SOP dated 1 Feb 2018: confirm the extension and clinic hours are still current.'}
  },
  tables:[{title:'EMACC cases and review timing (SOP appendix)', head:['Case','Review in EMACC'], rows:[
    ['Hypertensive urgency','Within 1 week for BP review; renal profile if started on captopril'],
    ['Low-risk chest pain after OBSSES','Within 2 weeks to review symptoms, repeat ECG and EST result; discharge on aspirin 150 mg OD if no contraindication; EST within 1 week, or refer to PC if EST is contraindicated'],
    ['Uncontrolled DM (blood sugar over 11, not DKA or HHS, not needing admission)','Within 1 week if no timely primary clinic appointment'],
    ['Heart failure, improved with ED treatment and not needing admission','Within 1 week; repeat renal profile if frusemide or ACE inhibitor started; suspected new HF also refer to PC'],
    ['Renal colic, improved, normal renal profile','First episode with normal KUB X-ray: EMACC review. Recurrent episodes: arrange KUB ultrasound, then EMACC to review symptoms and result'],
    ['Non-specific abdominal pain (7 days or less, no diagnosis, normal workup, improved)','Within 3 days; discuss every case with the EP in charge'],
    ['Trauma: 2 or fewer uncomplicated rib fractures, undisplaced closed fracture, minor dislocation, suspected fracture with normal X-ray, soft tissue injury with significant swelling, large laceration (especially diabetic)','Within 3 days for wound check and pain review; repeat X-ray if needed; MC until the EMACC appointment'],
    ['Blood results to review (for example TFT)','As arranged']]}],
  refs:['Emergency Medicine After Care Clinic (EMACC) Standard Operating Procedure, ETD HKL, 1 Feb 2018 (MO Drive, Clinical / EMACC)']
};

P['referral-rules'] = {
  title:'Referral rules', src:'MO Drive memos', grp:'rules',
  lead:'Who to refer to, and how, for the referrals Green Zone MOs make most.',
  start:'menu',
  nodes:{
    menu:{q:'Which referral?', opts:[['Orthopaedics and joint dislocation','ortho'],['Physician Clinic (PC)','pc'],['GI bleed, cholecystitis or jaundice','gi'],['Admission to General Medicine','med'],['Psychiatry','psy'],['Other departments and clinics','dept'],['Transfer to IPR','ipr']]},
    ortho:{end:'refer', title:'Orthopaedic referrals', items:[
      'Joint dislocation, including the shoulder: refer to the on-call Orthopaedic team before or after reduction, not to the Orthopaedic clinic',
      'Clinic referrals from the ED go to the Orthopaedic clinic at Wisma Kayu (not SCACC)',
      'From the Green Zone, write the treatment notes in duplicate (carbon copy): the original with a patient ID sticker goes into the Orthopaedic file, the copy stays in the ED notes',
      'Only the Orthopaedic file and the X-ray films go with the patient to the Orthopaedic consultation room',
      'Record every Orthopaedic referral in the Orthopaedic referral register book'],
      gap:'Sources: joint dislocation reminder 26 Jun 2023; Orthopaedic Department letter 17 Jan 2018; memo HKL/JK/98/188/3(29)22, 20 Dec 2022.'},
    pc:{end:'refer', title:'Physician Clinic (PC) referral', items:['If the patient has an ECG, attach it to the referral letter','Document the referral in the BHT'], gap:'Source: PC referral note, 28 Aug 2023.'},
    gi:{end:'refer', title:'GI bleed, cholecystitis and jaundice', items:[
      'Non-variceal upper or lower GI bleed with a medical cause: refer to Gastroenterology',
      'GI bleed with a surgical cause (for example cancer or trauma): refer to General Surgery',
      'Cholecystitis without jaundice, gallbladder empyema or perforation: refer to and admit under General Surgery',
      'Painful or painless jaundice: refer to Gastroenterology, admit to a medical ward'],
      gap:'Source: Combined Endoscopy Unit letter HKL/JBA/98/214, Dec 2018.'},
    med:{end:'refer', title:'Admission to General Medicine', items:[
      'Do not admit to a General Medicine ward without referring to the Medical specialist or MO on call',
      'This includes cases a surgical primary team declined and suggested for a medical ward, for example intra-abdominal, breast or gluteal abscess, large pressure sore, diabetic foot ulcer, ulcer from peripheral vascular disease, intracranial haemorrhage, recurrent UTI from obstructive uropathy',
      'The department involved calls the Medical on-call specialist or MO to agree the ward; Medicine offers a buddy system to co-manage patients in other wards'],
      gap:'Sources: Director\'s memo HKL/PENG/98/100/1/JLD8 (12), Jan 2026; General Medicine letter (363)HKL/PBTN/98/100/29-01, 14 Nov 2024.'},
    psy:{end:'refer', title:'Psychiatry referral', items:[
      'Known psychiatric history with a relapse and no other medical problem: refer directly to the Psychiatry MO on call, without bloods or CT first',
      'No psychiatric history but mental symptoms: refer to the on-call MO, who sees the patient without asking for bloods first',
      'CT brain only for: unknown history or no information, new illness at an unusual age, neurological symptoms, or a suspected organic cause (bleed, tumour, infection); a CT asked for by Psychiatry needs their specialist\'s approval',
      'A verbal CT report, or a normal CT confirmed by the EP on duty and documented, is enough before the admission decision; non-urgent CT can be done after admission to the psychiatric ward',
      'The Psychiatry on-call MO should see the patient within 45 minutes and cannot decline or delay a referral because their shift is ending',
      'Psychiatry asks that an MO, not only an HO, examines the patient before referral',
      'Psychiatry patients who need an X-ray: send the request form first and Radiology will call the patient'],
      gap:'Source: minutes of the ED, Psychiatry and Radiology meeting, 7 Feb 2023.'},
    dept:{end:'refer', title:'Other departments and clinics', items:[
      'Dependent patients should not be sent to the ENT or Eye clinic for review',
      'Gynaecology cases in the ED should not be sent to HTA for a scan',
      'Patients from specialist clinics should not be sent to the ED for treatment (for example a nebuliser); inform the EP if another department asks you to do this',
      'If a patient involving several disciplines is waiting a long time with no disposition, inform the EP'],
      gap:'Sources: interdepartment referral reminder, 17 May 2022; memo HKL/JK/98/188/3(17)23, 1 Sep 2023.'},
    ipr:{check:'all', q:'Meets the criteria for transfer to IPR (respiratory)?', items:['Haemodynamically stable','Not on inotropic support','On minimal oxygen support (Venturi mask 40% at most)'], opts:[['All met','iprok'],['Not all met','iprno']]},
    iprok:{end:'refer', title:'Suitable for transfer to IPR', items:['Follow the ED HKL approach to respiratory cases for IPR referral'], gap:'Source: Flow 3, Approach to respiratory cases in ED HKL to IPR (2021). Only the transfer criteria could be read from the file; the flow chart itself is an image.'},
    iprno:{end:'neutral', title:'Not suitable for IPR transfer', items:['Manage in HKL']}
  },
  refs:['Joint dislocation referral reminder, 26 Jun 2023','Orthopaedic Department letter: ED referrals to Wisma Kayu clinic, 17 Jan 2018','Memo HKL/JK/98/188/3(29)22: Orthopaedic referral system, 20 Dec 2022','PC referral note, 28 Aug 2023','Combined Endoscopy Unit: GI bleed and cholecystitis referrals, Dec 2018','Director\'s memo: admission to General Medicine from the ED, Jan 2026','Minutes: management of psychiatric patients in the ED, 7 Feb 2023','Interdepartment referral and transfer reminder, 17 May 2022','Approach to respiratory cases in ED HKL to IPR, 2021','HKL Interhospital Referral and Transfer Policy, 2019']
};


