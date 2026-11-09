/* ================= Academy CPG round, part 2 (9 Nov 2026): head injury, ACS, diabetic foot, foreign body in children =================
   Built from the PDFs in Krishna's Academy CPG folder (AMM Clinical Practice Guidelines, 109 PDFs; the same set is in his Google
   Drive), each reviewed line by line (CPG-REVIEW-HEAD-INJURY.md, CPG-REVIEW-ACS.md, CPG-REVIEW-DIABETIC-FOOT.md,
   CPG-REVIEW-FB-CHILDREN.md). Every item names its printed CPG page. Copyright: MaHTAS for head injury, diabetic foot and foreign
   body ingestion; the National Heart Association of Malaysia and the Academy of Medicine Malaysia for ACS. Each allows reproduction
   with acknowledgement, unchanged. Quoted as printed, including the CPGs' own spelling. None replaces the ebook or the department's
   notes (rules 5 and 6): where they differ is an open item. */

/* ----- CPG Early Management of Head Injury in Adults (MaHTAS, 2015), for adults 18 and above (p iv) -----
   84 PDF pages, ISBN 978-967-0769-45-5; reviewed line by line (headinjury-review.md). Printed page = PDF page minus 19;
   the algorithms are p viii to xiv. Blue boxes in the CPG are Recommendations; yellow boxes are cited as "boxed statement".
   Quoted as printed; apostrophes are plain; no identity fields from the forms (rule 4). The ebook's mild TBI pathway stays
   the department's (rule 5): where they differ is an open item. */
P['head-injury-cpg'] = {
  title:'Head injury in adults: CPG 2015', grp:'cpg', src:'CPG Early Management of Head Injury in Adults (2015)', isnew:true, hero:'headcpg',
  lead:'The national guideline (2015): decide on a head CT and how soon, observe in the ED or admit, and send home with verbal and written advice. Triage, severity, the observation schedules and the advice card are in the steps and tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Early Management of Head Injury in Adults (MaHTAS, 2015), for adult patients presenting with head injury (18 years old and above); not neurosurgery, rehabilitation or multisystem injuries (p iv). Printed page numbers; the algorithms are on p viii to xiv. It was due for review in 2019.', opts:[
      ['Head CT: who, and how soon? (Algorithm 3)','imm'],
      ['Aged 65 or over, or on an anticoagulant or antiplatelet','hr'],
      ['Observe in the ED, then admit or home (Recommendations 7 and 10)','obs7'],
      ['Ready to go home? (p24 and chapter 11)','dcc'],
      ['After the CT: neuro-trauma referral or the ward (Algorithm 1b)','ctdone'],
      ['Triage: which zone? (Algorithm 2)','t1'],
      ['Severity by GCS (chapter 3)','sev'],
      ['Cervical spine imaging (Algorithm 4)','cs1']]},

    /* Algorithm 3, Selection of adults with head injury for head CT (p xii), adapted from NICE 2014 */
    imm:{check:'any', q:'Any risk factor for an immediate scan?', hint:'Algorithm 3 (p xii), for adults present to the ED with head injury. Ensure patient\'s airway secured and hemodynamically stable before CT scan. The timing for CT scan in MHI for local context is based on expert opinion of CPG DG (p26).',
      items:['GCS <13 on initial management','GCS <15 at 2 hours after injury','Open, penetrating, suspected open, close or depressed skull fracture','Any sign of basal skull fracture (haemotympanum, \'raccoon\' eyes, cerebrospinal fluid leakage from the ear or nose, or Battle\'s sign)','Post-traumatic seizure','Focal neurological deficit','Vomiting ≥2 since the head injury','Patient on anticoagulant and/or antiplatelet or bleeding disorder with symptoms such as diffuse headache, loss of consciousness, amnesia or vomiting'],
      opts:[['Yes, present','ctnow'],['None','urg']]},
    urg:{check:'any', q:'Any risk factor for an urgent scan?', hint:'Algorithm 3 (p xii). Patients with MHI on anticoagulation and/or antiplatelet should be considered for head CT (Recommendation 12, p27).',
      items:['Age ≥65 years old','A history of bleeding/clotting disorder or on anticoagulant and/or antiplatelet','Dangerous mechanism of injury (a pedestrian or cyclist struck by a motor vehicle, an occupant ejected from a motor vehicle or a fall from height >1 metre or 5 stairs)','More than 30 minutes retrograde amnesia of events immediately before the head injury','Previous cranial surgery','History of epilepsy'],
      opts:[['Yes, present','ct68'],['None','low']]},
    ctnow:{step:'Perform head CT within 1 to 2 hours of risk factor being identified', items:[
      'A provisional/preliminary verbal radiology report should be made available within 1 hour of the CT taking place (depends on local setting) (Algorithm 3, p xii)',
      'Ensure patient\'s airway secured and hemodynamically stable before CT scan',
      'Head Computed Tomography (CT) for patient with a Glasgow Coma Scale <15 should have cervical spine CT at the same setting (Recommendation 14, p30)',
      'Head chart at least hourly, including while awaiting computed tomography (Recommendation 6, p17): the Observation tab'], next:'ctdone'},
    ct68:{step:'Perform head CT within 6 to 8 hours of the head injury', items:[
      'A provisional/preliminary verbal radiology report should be made available within 1 hour of the CT taking place (depends on local setting) (Algorithm 3, p xii)',
      'Aged 65 or over, or on an anticoagulant or antiplatelet: admit directly to ward irrespective of CT findings (boxed statement, p19). Its own step is on the menu',
      'Algorithm 3 does not say what to do if a risk factor appears while the patient waits for this scan, or when the patient arrives more than 8 hours after the injury'], next:'ctdone'},

    /* Recommendation 11 and the low risk list (p23–24); Recommendation 7 (p18); Algorithm 1b (p x) */
    low:{check:'all', q:'Low risk mild head injury, living with a reliable care giver?', hint:'Recommendation 11 (p24): patient with low risk mild head injury and who is living with a reliable care giver can be discharged home safely without observation from emergency department. Low risk as listed on p23–24; Table 1 (p5) uses low risk for another group.',
      items:['GCS of 15','No clinical finding (amnesia, vomiting, diffuse headache and LOC)','No neurological deficit','No skull fracture','No risk factors (coagulopathy, age >60 years, previous neurosurgery, pre-trauma epilepsy and/or alcohol and/or drug misuse)','Living with a reliable care giver'],
      opts:[['All met','dcc'],['Not all met','obs7']]},
    obs7:{check:'all', q:'Can the patient be safely observed in the ED?', hint:'Recommendation 7 (p18): patients with mild head injury in whom computed tomography scan is not indicated and with all the following criteria can be safely observed in emergency department for a minimum of six hours. For hospital without observation ward, these patients may be admitted.',
      items:['Glasgow Coma Scale score 15 on arrival or two hours later','No neurological abnormality','Age <65 years old','Not on any anticoagulant or antiplatelet therapy','No history of coagulopathy','No multiple injuries','Not intoxicated and not under influence of psychotropic drugs'],
      opts:[['All met','edobs'],['Not all met','wardx']]},
    edobs:{step:'Observe in the ED for a minimum of six hours', kind:'observe', items:[
      'A minimum of six hours: Recommendations 7 (p18) and 9 (p22)',
      'Parameters (Recommendation 8, p20): Glasgow Coma Scale and Score; vital signs (respiratory rate and oxygen saturation, pulse rate, blood pressure, pain score, temperature); neurological deficits (pupil size and reactivity, limb movement, unusual behaviour, temperament or speech impairment); other symptoms such as persistent vomiting, seizure, amnesia and diffuse headache',
      'Patients with head injury should be monitored with findings recorded immediately using head chart. Any deterioration should prompt immediate re-evaluation of the patients by the attending doctor (Recommendation 9)',
      'Observations may be performed and documented hourly in head injury patients (Recommendation 9). The CPG\'s three schedules are in the Observation tab',
      'The risk of rapid deterioration due to intracranial complications is high during the first six hours and diminishes after that (p21)'], next:'dur'},
    dur:{check:'any', q:'During observation: any of these?', hint:'Risk factors during observation, Algorithm 3 (p xii): if present, perform head CT within 1 to 2 hours of risk factor being identified.',
      items:['GCS <15','Post-traumatic seizure','Focal neurological deficit','Vomit ≥2 since the head injury','Worsening diffuse headache','Abnormal behaviour','Amnesia'],
      opts:[['Yes, present','ctnow'],['None','r10']]},

    /* Recommendation 10 and 6.3.4, Admission after observation in ED (p22–23) */
    r10:{check:'any', q:'After six hours of observation: any reason to admit?', hint:'Recommendation 10 (p23). *Patients should have a head CT before admission. **Transport issue, no communication, stay in remote area, suspected abuse case or other factors affecting the monitoring and safety of patients. Whether the six hours count from the injury or from arrival, the CPG does not say.',
      items:['Clinically significant abnormalities on head computed tomography (CT) imaging','Glasgow Coma Scale Score <15*','Worrying signs (e.g. vomit ≥2 times, seizure, diffuse headache, amnesia, abnormal behaviour or neurological deficit)*','Other body system injuries requiring admission','Social problem** including no supervision by a responsible adult'],
      opts:[['Yes, present','adm'],['None','dcc']]},
    adm:{end:'admit', title:'Admit to ward', items:[
      'Patients with mild head injury who have been observed for six hours in emergency department should be admitted to ward if they have any of these (Recommendation 10, p23)',
      'Patients should have a head CT before admission: the footnote to a GCS score <15 and to worrying signs',
      'Patients with persistent impaired consciousness or neurological impairment will need continued observation and in-patient care (p22)',
      'The in-patient observation schedules (p21) are in the Observation tab'],
      links:[['#head-injury-cpg--ctnow','Head CT within 1 to 2 hours'],['#mild-tbi--extobs','Ebook: admit for extended observation']],
      gap:'CPG Recommendation 10 (p23) and 6.3.4 (p22–23). It does not say which team admits, or for how long the ward observes.'},
    wardx:{end:'admit', title:'Not for ED observation: admit for ward observation', items:[
      'Patients with MHI who are ≥65 years old and/or on anticoagulant/antiplatelet should be admitted directly to ward irrespective of CT findings (boxed statement, p19)',
      'Algorithm 1b (p x): indication for observation, then admit for ward observation? Yes: ward observation. No: ED observation',
      'The criteria for admitting patients to hospital following a head injury include other sources of concern to the clinician (e.g. anticoagulant use, drug or alcohol intoxication, other injuries, shock, suspected non-accidental injury, meningism, cerebrospinal fluid leak), and social problems or cannot be supervised by a responsible adult (p23)'],
      links:[['#head-injury-cpg--hr','Aged 65 or over, or on an anticoagulant']],
      gap:'CPG Recommendation 7 (p18–19), Algorithm 1b (p x) and 6.3.4 (p23). Algorithm 1b gives no criteria for its admit for ward observation decision, and the CPG does not say what to do for each Recommendation 7 criterion that is not met.'},

    /* The discharge criteria (boxed statement, p24, adapted from SIGN 2009), chapters 11 and 12 (p41–42) */
    dcc:{check:'all', q:'Criteria to be met prior to discharge?', hint:'Boxed statement (p24), adapted from SIGN 2009: criteria to be met by patients of head injury prior to discharge. Carers should understand the given discharge advice (p41). Aged 65 or over, or on an anticoagulant or antiplatelet: admit directly to ward irrespective of CT findings (boxed statement, p19).',
      items:['Presence of a willing responsible adult for at least 24-hour observation','Verbal and written discharge advice given to responsible care givers and discussed prior to discharge','Easy access to an emergency response system e.g. 999','Living within reasonable access to medical care','Availability of home transport'],
      opts:[['All met','home'],['Not all met','soc']]},
    home:{end:'discharge', title:'Discharge with head injury advice (verbal and written) and follow-up if necessary', items:[
      'All patients or their care givers should be given verbal and written discharge advice. This must be documented. They should be asked to repeat the advice to ensure that they understand the content upon discharge (p41)',
      'Alarming features to highlight: GCS <15 (unable to open eyes spontaneously, disorientated or unable to obey command); vomiting; headache; amnesia; seizure; neurological deficit (p41)',
      'Head injury discharge advice form should be comprehensible. It should include instructions to recognise alarming features and phone contact number of local healthcare facilities (Recommendation 19, p41). The CPG\'s form, Appendix 5, is in the Advice card tab',
      'Mild head injury may have follow-up via clinic visit or telephone call within 48 hours (Recommendation 20, p42)',
      'For MHI, oral analgesic such as paracetamol, non-steroidal anti-inflammatory drugs and tramadol can be used provided there is no definite contraindication (p32)'],
      links:[['#mild-tbi--home','Ebook: discharge and follow-up'],['#gz-rules--reas','CT brain and going home: EP review']],
      gap:'CPG Algorithm 1b (p x), chapters 11 and 12 (p41–42) and 8.1 (p32). The CPG does not name a clinic for follow-up. The ebook pathway gives the department\'s: EMWATCH or EMACC, and the Neuro Rehab Clinic.'},
    soc:{end:'neutral', title:'A discharge criterion is not met', items:[
      'Social problems or cannot be supervised by a responsible adult: one of the criteria for admitting patients to hospital following a head injury (p23)',
      'Recommendation 10 (p23) admits after six hours of ED observation for a social problem including no supervision by a responsible adult'],
      gap:'CPG p23–24. The CPG does not say what to do when another discharge criterion is missing.'},

    /* Older or anticoagulated patients: boxed statement (p19), Algorithm 3 (p xii), p18, p26, p29 */
    hr:{end:'admit', title:'Aged 65 or over, or on an anticoagulant or antiplatelet: head CT, and admit to ward', items:[
      'Patients with MHI who are ≥65 years old and/or on anticoagulant/antiplatelet should be admitted directly to ward irrespective of CT findings (boxed statement, p19)',
      'Urgent scan, head CT within 6 to 8 hours of the head injury: age ≥65 years old; a history of bleeding/clotting disorder or on anticoagulant and/or antiplatelet (Algorithm 3, p xii)',
      'Immediate scan, head CT within 1 to 2 hours of risk factor being identified: patient on anticoagulant and/or antiplatelet or bleeding disorder with symptoms such as diffuse headache, loss of consciousness, amnesia or vomiting (Algorithm 3)',
      'Patients with minor head injury (GCS 15), ≥65 years old, on low dose aspirin with systolic blood pressure <150 mmHg and presenting with initial negative primary head CT, should have a routine repeat head CT within 12 - 24 hours to accurately identify head injury or such patients should be subjected to a prolonged hospital observation for at least 48 hours (p18)',
      'There is insufficient evidence to recommend routine repeat head CT in MHI (boxed statement, p29)',
      'Intracranial bleeding on an anticoagulant: stop and reverse (Recommendation 16, p36), in the Anticoagulants tab'],
      links:[['#head-injury-cpg--imm','Head CT: Algorithm 3'],['#mild-tbi','Ebook: mild TBI pathway']],
      gap:'CPG p18–19 and p29, Algorithm 3 (p xii) and Recommendation 16 (p36). Triage (Algorithm 2, p xi) puts older adults and anticoagulation at Step 4: Yellow zone. The CPG names warfarin, aspirin and clopidogrel only and does not cover the newer oral anticoagulants. The ebook pathway asks for a CT only in a symptomatic patient on these drugs and lets a patient with a normal CT go home: where they differ is an open item.'},

    /* Algorithm 1b, General management of adults with isolated head injury in hospital with CT scan (p x) */
    ctdone:{q:'After the CT: any indication for neuro-trauma referral?', hint:'Algorithm 1b (p x) asks this, but neither the algorithm nor the text lists the indications. What the CPG says nearby is below.',
      info:['Patients with MHI can be safely observed for six hours without neurosurgical consultation if they have the following features: ICH of ≤4 mm; normal neurological examination; no skull fracture; not on any warfarin, aspirin or clopidogrel; not intoxicated (p21)','Mild head injury needing urgent surgery other than cranial surgery: positive findings on CT, discuss with neurosurgeon (Algorithm 5, p xiv)','Teleconsultation should be used in the management of head injury if available (Recommendation 18, p40)'],
      opts:[['Yes, an indication','nsx'],['No indication','wardct']]},
    nsx:{end:'refer', title:'Refer to hospital with neuro-trauma services', items:[
      'Indication for neuro-trauma referral: refer to hospital with neuro-trauma services (Algorithm 1b, p x)',
      'Head chart at least hourly, including while awaiting transfer to another ward/hospital (Recommendation 6, p17)',
      'Intracranial bleeding on an anticoagulant: Recommendation 16, in the Anticoagulants tab',
      'Mannitol, hypertonic saline or frusemide may be used to reduce intracranial pressure in head injury after consultation with a specialist. Diuretics should not be used in hypotensive patients (Recommendation 15, p34)'],
      links:[['#mild-tbi--neuro','Ebook: refer neurosurgical team']],
      gap:'CPG Algorithm 1b (p x). The CPG does not list the indications for neuro-trauma referral, or say how to refer in a hospital that has neurosurgery. The ebook pathway refers an abnormal CT brain to the neurosurgical team.'},
    wardct:{end:'admit', title:'No indication for neuro-trauma referral: ward observation (Algorithm 1b)', items:[
      'After a CT scan brain ± spine with no indication for neuro-trauma referral, Algorithm 1b (p x) goes to ward observation, then discharge with head injury advice (verbal and written) and follow-up if necessary',
      'The criteria for admitting patients to hospital following a head injury include patients with new, clinically significant abnormalities on imaging, and patients whose GCS has not returned to 15 after imaging, regardless of the imaging results (p23)'],
      links:[['#head-injury-cpg--r10','Recommendation 10: admit or home'],['#head-injury-cpg--hr','Aged 65 or over, or on an anticoagulant'],['#mild-tbi--pta','Ebook: normal CT, PTA charting']],
      gap:'Algorithm 1b (p x) sends every CT without an indication for neuro-trauma referral to ward observation; the text (p23) and Recommendation 10 admit after a CT for clinically significant abnormalities, a GCS below 15 or the other listed reasons. For a normal CT with GCS 15, under 65 and on no anticoagulant or antiplatelet, the CPG does not settle which applies: an open item. The ebook sends a normal CT brain to PTA charting and the safe discharge criteria.'},

    /* Algorithm 2, Triaging of adults with suspected head injury in pre-hospital care or emergency department (p xi), Recommendation 5 (p16) */
    t1:{check:'any', q:'Step 1, measure vital signs and level of consciousness: any of these?', hint:'Algorithm 2 (p xi), adapted from the 2011 US field triage guidelines; Recommendation 5 (p16). Its zones are not MTS levels: how they match the department\'s zones is still to confirm.',
      items:['Airway obstruction','GCS <13','RR <10 or >30 breaths/minute','SBP <90 mmHg','HR <60 beats/minute or >110 beats/minute','SpO2 <90% on room air'],
      opts:[['Yes, present','red'],['None','t2']]},
    t2:{check:'any', q:'Step 2, assess anatomy of injury: any of these?', hint:'Algorithm 2 (p xi).',
      items:['All penetrating injuries to head, neck, torso and extremities proximal to elbow and knee','Chest wall instability/deformity (flail chest)','Two or more proximal long-bone fractures','Crushed, degloved or mangled or pulseless extremity','Amputation proximal to wrist and ankle','Pelvic fractures','Open or depressed skull fracture','Paralysis'],
      opts:[['Yes, present','red'],['None','t3']]},
    t3:{check:'any', q:'Step 3, assess mechanism of injury and evidence of high-energy impact: any of these?', hint:'Algorithm 2 (p xi), each bullet as printed.',
      items:['Falls: >6 metres (one storey is equal to 3 metres)','High-risk auto crash, intrusion: >30 cm occupant site or >46 cm any site','High-risk auto crash: ejection (partial or complete) from vehicle','High-risk auto crash: death in same passenger compartment','High-risk auto crash: vehicle telemetry data consistent with high risk of injury','Auto vs pedestrian/bicyclist','Thrown, run over, or with significant (>30 km/h) impact','Motorcycle crash >30 km/h'],
      opts:[['Yes, present','ry'],['None','t4']]},
    t4:{check:'any', q:'Step 4, assess special patients or system considerations: any of these?', hint:'Algorithm 2 (p xi). The older adults bullet has three sub-points; whether age 65 or over alone counts, the algorithm does not say.',
      items:['Older adults: risk of injury/death increases with age ≥65 years','Older adults: SBP <110 mmHg might represent shock after age of 65 years old','Older adults: low impact mechanisms (e.g. ground level falls) might results in severe injury','Anticoagulation and bleeding disorders','Burns','Pregnancy >20 weeks','Emergency Medical Staff clinical judgement'],
      opts:[['Yes, present','yellow'],['None','green']]},
    red:{end:'refer', title:'Red zone', items:[
      'Steps 1 and 2 attempts to identify the most injured patients (Algorithm 2, p xi)',
      'Initial assessment and management of patients with head injury in ED includes: airway patency and cervical spine protection; breathing (to detect any intrathoracic injury); circulation and haemorrhage control; disability including GCS, pupil size and reaction to light; exposure including log roll (Recommendation 6, p17)'],
      links:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT']],
      gap:'CPG Algorithm 2 (p xi) and Recommendation 6 (p17). The CPG names zones, not MTS levels; in HKL, the triage is by MTS and T-RACS has its own activation criteria.'},
    ry:{end:'refer', title:'Red zone or Yellow zone (Step 3)', items:[
      'A yes at Step 3 points to two boxes, red zone and yellow zone (Algorithm 2, p xi)',
      'A Reassess box links the Step 3 and Step 4 yes arrows'],
      links:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT']],
      gap:'CPG Algorithm 2 (p xi). It does not say how to choose between the two zones after Step 3.'},
    yellow:{end:'refer', title:'Yellow zone (Step 4)', items:[
      'Special patients or system considerations (Algorithm 2, p xi)',
      'Aged 65 or over, or on an anticoagulant or antiplatelet: admit directly to ward irrespective of CT findings (boxed statement, p19)'],
      links:[['#head-injury-cpg--hr','Aged 65 or over, or on an anticoagulant'],['#head-injury-cpg--imm','Head CT: Algorithm 3']],
      gap:'CPG Algorithm 2 (p xi). Whether these patients leave the Green Zone is still to confirm.'},
    green:{step:'Green zone: no at Steps 1 to 4 (Algorithm 2, p xi)', items:['Next, the head CT decision (Algorithm 3, p xii)','Triage of patients suspected of head injury in pre-hospital care or on arrival in emergency department should follow a four-step algorithm based on physiologic abnormalities, anatomic injuries, mechanism of injuries, co-morbidities and age (Recommendation 5, p16)'], next:'imm'},

    /* Chapter 3, Classification of severity (p5), Table 1 and Appendix 3 (p52) */
    sev:{q:'Presenting GCS?', hint:'Chapter 3 (p5) and Appendix 3 (p52). GCS score can be influenced by alcohol intoxication, sedative medications, hypoxia and hypotension (p6). Document and communicate each response, for example E4V4M5 (p20). The scale is in the Severity tab.',
      opts:[['GCS 13 - 15: mild head injury (MHI)','mhi'],['GCS 9 - 12: moderate head injury','modsev'],['GCS 3 - 8: severe head injury','modsev']]},
    mhi:{step:'Mild head injury (MHI): GCS 13 - 15', items:[
      'The MHI group can be subdivided into two types as shown in Table 1 (p5): cerebral concussion, GCS 15, and mild head injury, GCS 13 - 15. Table 1 is in the Severity tab',
      'Mild head injury: with or without imaging evidence of brain injury; requires a LOC (≤30 minutes) or post-traumatic amnesia (≤24 hours)',
      'Any assessment of GCS should be repeated after resuscitation from cardiopulmonary insult or recovery from intoxication and sedation in patients with head injury (p6)'], next:'imm'},
    modsev:{end:'refer', title:'Moderate or severe head injury: resuscitate and hand on', items:[
      'Initial assessment and management in ED: the primary survey and head chart (Recommendation 6, p17)',
      'GCS <13: red zone (Algorithm 2, p xi); GCS <13 on initial management: immediate head CT (Algorithm 3, p xii)',
      'In patients with head injury with GCS of ≤8, intubation is recommended for airway protection (p16)',
      'Intubate and ventilate patients with TBI if: GCS ≤8 or significant drop of total GCS score ≥2 or motor component ≥1; unstable fractures of the facial skeleton; copious bleeding into mouth (e.g. from skull base fracture); hypoxaemia; seizure; respiratory irregularities; hyperventilation causing hypocarbia (keep ET CO2 35 - 40 mmHg) (before transfer, p13)',
      'Phenytoin should be given as prophylaxis against early post-traumatic seizure in head injury with risk factors (Recommendation 15, p34); the risk factors are listed on p33',
      'Moderate to severe head injury should have scheduled clinic follow-up (Recommendation 20, p42)'],
      links:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT']],
      gap:'CPG chapters 3 and 5 to 9. Resuscitation, transfer, drugs (Appendix 11, p60–61) and extubation are beyond the Green Zone and are not included here.'},

    /* Algorithm 4, Selection of adults with head injury for imaging of the cervical spine (p xiii), Recommendation 14 (p30) */
    cs1:{check:'any', q:'Is one or more of these risk factors present?', hint:'Algorithm 4 (p xiii), adapted from NICE 2014. *Dangerous mechanism: fall from elevation >1 metre/5 stairs; axial load to head e.g. diving; MVC high speed (>100 km/hour); rollover, ejection; motorised recreational vehicles; bicycle collision. All patients with head injury are presumed to have cervical spine injury until proven otherwise (p29).',
      info:['Cervical spine immobilisation should be carried out in TBI patients with any of the following risk factors: GCS <15 on initial assessment by the healthcare professional; paraesthesia in the extremities; neck pain or tenderness; focal neurological deficit; any other clinical suspicion of cervical spine injury (p8)'],
      items:['Initial assessment GCS <13','Intubated patients','A definitive diagnosis of cervical spine injury is required urgently (e.g. before surgery)','Other body areas are being scanned for head injury or multi-region trauma','Alert and stable, a suspicion of cervical spine injury, and age ≥65 years old','Alert and stable, a suspicion of cervical spine injury, and dangerous mechanism of injury*','Alert and stable, a suspicion of cervical spine injury, and focal peripheral neurological deficit or paraesthesia'],
      opts:[['Yes, present','csct'],['None','cs2']]},
    csct:{end:'neutral', title:'Perform CT cervical spine within 1 - 2 hours of risk factor being identified', items:[
      'A provisional written/verbal radiology report should be made available within 1 - 2 hours of the CT taking place (Algorithm 4, p xiii)',
      'Head Computed Tomography (CT) for patient with a Glasgow Coma Scale <15 should have cervical spine CT at the same setting (Recommendation 14, p30)',
      'Maintain cervical spine immobilisation until full risk assessment including clinical assessment (and imaging if deemed necessary) indicates it is safe to remove the immobilisation device (p8)'],
      gap:'CPG Algorithm 4 (p xiii) and Recommendation 14 (p30). Recommendation 14 asks for a cervical spine CT with every head CT below GCS 15; Algorithm 4 starts at GCS <13.'},
    cs2:{check:'any', q:'Any factor that allows safe assessment of range of movement of cervical spine?', hint:'Algorithm 4 (p xiii). **Simple rear-end MVC excludes: pushed into oncoming traffic; hit by bus/large truck; rollover; hit by high speed vehicle. ***Delayed: i.e. not immediate onset of neck pain.',
      items:['Simple rear-end motor vehicle collision (MVC)**','Sitting position in ED','Ambulatory at any time','Delayed onset of neck pain***','Absence of midline c-spine tenderness'],
      opts:[['Yes, present','cs3'],['None','csxr']]},
    cs3:{q:'Can the patient actively rotate the neck to 45 degrees to the left and right on assessment?', hint:'Algorithm 4 (p xiii).', opts:[['Yes','csno'],['No','csxr']]},
    csno:{end:'neutral', title:'No imaging/further imaging required', items:['No imaging/further imaging required (Algorithm 4, p xiii)','Canadian Cervical Spine Rule (CCR) or National Emergency X-radiography Utilization Study (NEXUS) criteria may be used as selection criteria for cervical radiograph in alert and stable head injury patients (Recommendation 14, p30); the CPG prints them as Appendices 6 and 7 (p55–56)'],
      gap:'CPG Algorithm 4 (p xiii). Appendix 6 prints age >65 and a fall from >3 feet/5 stairs, where Algorithm 4 prints ≥65 and >1 metre/5 stairs.'},
    csxr:{q:'Three-view cervical spine X-rays, within 1 hour of risk factor being identified: technically inadequate, suspicious or definitely abnormal?', hint:'Algorithm 4 (p xiii): perform three-view cervical spine X-rays within 1 hour of risk factor being identified.',
      opts:[['Yes','csct'],['No','csok']]},
    csok:{end:'neutral', title:'Consider further imaging (CT/MRI) if symptoms persist', items:['Consider further imaging (CT/MRI) if symptoms persist (Algorithm 4, p xiii)'], gap:'CPG Algorithm 4 (p xiii).'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Severity', notes:[
      {h:'Severity by the presenting GCS', src:'Chapter 3 (p5) and Appendix 3 (p52)', items:['Mild head injury (MHI): GCS 13 - 15','Moderate head injury: GCS 9 - 12','Severe head injury: GCS 3 - 8']},
      {h:'Appendix 3: Glasgow Coma Scale and Score', src:'p52. The score is the cumulative sum of the scale in each component. When using GCS, document and communicate each response, written as E4V4M5 (p20).', table:{head:['Component','Response and score'], rows:[
        ['Eye Opening Response','Spontaneous 4; To voice/sound 3; To pressure/pain 2; None 1'],
        ['Verbal Response','Orientated 5; Confused 4; Words 3; Sounds 2; None 1'],
        ['Motor Response','Obeys commands 6; Localising 5; Flexion withdrawal 4; Abnormal flexion 3; Extension 2; None 1']]}},
      {h:'Table 1: classification of MHI', src:'p5. One cell spans the medium and high risk columns, as printed.', table:{head:['Group','As printed'], rows:[
        ['Cerebral concussion, GCS 15','Should only be used if there is no imaging evidence of brain injury. With or without history of LOC. Can be further subdivided into grades 1 to 3'],
        ['Grade 1','History of confusion; no history of LOC; concussion symptoms resolve in <15 minutes'],
        ['Grade 2','History of confusion; no history of LOC; concussion symptoms last >15 minutes'],
        ['Grade 3','History of LOC either brief (seconds) or prolonged (minutes)'],
        ['Mild head injury, GCS 13 - 15','With or without imaging evidence of brain injury. Requires a LOC (≤30 minutes) or post-traumatic amnesia (≤24 hours). Can be further subdivided according to the risk of deterioration and expected outcome'],
        ['Low risk','GCS 15. With one or more of the clinical findings'],
        ['Medium risk','GCS 14 - 15. With neurological deficits or skull fracture or risk factors with/without clinical findings (one cell with high risk)'],
        ['High risk','GCS 13. With neurological deficits or skull fracture or risk factors with/without clinical findings (one cell with medium risk)'],
        ['Clinical findings','LOC, amnesia, diffuse headache, vomiting'],
        ['Risk factors','Coagulopathy, alcohol consumption and/or drug misuse, age ≥65 years old, previous cranial surgery and history of pre-trauma epilepsy']]}},
      {h:'Concussion symptoms', src:'Table 1 (p5): divided into four categories', items:['Physical: headache, fuzzy or blurry vision, sensitivity to noise and/or light, dizziness, feeling tired and lacking energy, and problems with balance','Cognition/memory: difficulty thinking clearly, feeling slowed down, trouble concentrating, and difficulty remembering new information','Emotional/mood: irritability, inexplicable sadness, nervousness and/or anxiety','Sleep disturbances: interruptions in normal sleep patterns']}
    ]},
    {l:'CT and imaging', notes:[
      {h:'Head CT: statements and Recommendation 12', src:'7.1 and 7.2 (p25–27). Algorithm 3\'s risk factors are in the Head CT steps.', items:[
        'Canadian Computed Tomography Head Rule (CCTHR) may be used to decide on the need of Computed Tomography (CT) of the head in mild head injury (MHI) (Recommendation 12).',
        'Patients with MHI on anticoagulation and/or antiplatelet should be considered for head CT (Recommendation 12).',
        'Urgency for head CT in head injury patients should be based on severity of the injury and risk factors. Patient\'s cardiopulmonary status should be stabilised before performing head CT (Recommendation 12).',
        'There is no retrievable evidence on the timing of head CT. SIGN lists factors for immediate (within one hour) and urgent (within eight hours) CT scan; the CPG\'s timings are the expert opinion of its DG (p26).',
        'In MHI group with GCS of 15, asymptomatic and no neurological deficit, external evidences of head injury especially skull fracture is an indication for head CT prior to a definitive management plan (p27).']},
      {h:'Canadian CT Head Rule', src:'Boxed on p26. CCTHR is not applicable in the presence of seizure, penetrating skull injury, focal neurological deficit and use of anticoagulant (p25).', items:[
        'CT Head Rule is only applicable for patients with minor head injuries and any of the following:',
        'A. High risk (for neurological intervention): GCS score <15 at two hours after injury; suspected open or depressed skull fracture; any sign of basal skull fracture (haemotympanum, \'racoon\' eyes, cerebrospinal fluid otorrhoea/rhinorrhoea, Battle\'s sign); vomiting ≥2 episodes; age ≥65 years',
        'B. Medium risk (for brain injury on CT): amnesia before impact >30 minutes; dangerous mechanism (pedestrian struck by motor vehicle, occupant ejected from motor vehicle, fall from height >3 feet or 5 stairs)',
        'Minor head injury is defined as witnessed loss of consciousness, definite amnesia or witnessed disorientation in a patient with a GCS score of 13 - 15.']},
      {h:'Skull X-ray', src:'7.2 (p27–28) and Recommendation 13 (p28)', items:[
        'Skull x-ray may be considered in mild head injury patients who do not fulfil the criteria for head CT (Recommendation 13). The patients should undergo CT scan of head if skull x-ray is positive.',
        'A normal skull x-ray does not exclude ICH and may miss a fracture.']},
      {h:'Repeat head CT', src:'7.3 (p28–29) and p18', items:[
        'The findings suggest that it is unnecessary to repeat a CT scan after MHI when neurological status remain unchanged or improves (p28).',
        'There is insufficient evidence to recommend routine repeat head CT in MHI (boxed statement, p29).',
        'Aged 65 or over on low dose aspirin with an initial negative CT (p18 and p29): quoted in the 65 or over step.']}
    ]},
    {l:'Observation', notes:[
      {h:'What to observe', src:'Recommendations 6 (p17), 8 (p20) and 9 (p22); 6.3.2 (p19). Appendix 4 (p53) is the CPG\'s head chart.', items:[
        'Head chart which includes serial GCS, blood pressure, pulse rate and pupil size should be done at least hourly on patients with head injury in ED including while awaiting computed tomography or transfer to another ward/hospital (Recommendation 6).',
        'Monitor for signs of intracranial hypertension such as decreased pupillary response to light, hypertension with bradycardia, posturing or respiratory abnormalities (Recommendation 6).',
        'Head chart clinical events: vomit ≥2x; seizure; diffuse headache; amnesia; abnormal behaviour (Appendix 4).']},
      {h:'How often: the three schedules, as printed', src:'p21 and Recommendation 9 (p22). There is insufficient evidence on method, frequency and duration of observation/assessment of head injury in ED (p20). Quoted separately because they differ.', table:{head:['Where','Frequency'], rows:[
        ['In-patients with GCS 15/15 (p21)','Patients with head injury, who warrant admission, should have neurological observations carried out at least in the following frequency starting after initial assessment in the ED: half hourly for two hours; hourly for four hours; two hourly for six hours; four hourly thereafter until agreed to be no longer necessary'],
        ['In-patients with GCS <15/15 (p21)','Perform and record observation on a half-hourly basis until GCS 15 has been achieved. Thereafter, the minimum frequency of observation are as follows: half-hourly for two hours; hourly for next four hours; 2-hourly thereafter; should there be any deterioration at any time after the initial 2-hour period, observations should revert to half-hourly and follow the original frequency schedule'],
        ['Recommendation 9 (p22)','Observations may be performed and documented hourly in head injury patients. Should there be any deterioration at any time after the initial 2-hour period, the minimum frequency of observation respectively are as follows until GCS 15 is achieved: half-hourly for first two hours; hourly for next four hours; 2-hourly for six hours; 4-hourly thereafter until no longer necessary and/or fit for discharge']]}},
      {h:'How long', src:'6.3.3 (p21–22) and Recommendations 7 and 9: a minimum of six hours in the ED, counted from a start the CPG does not give', items:[
        'The risk of rapid deterioration due to intracranial complications is high during the first six hours and diminishes after that. Therefore, observations should be more frequent during this period (p21).',
        'ED observation ward: these patients should have a pre-defined care plan within stipulated time frame of eight hours or prerogative of EP in charge as clinically indicated (p22).']}
    ]},
    {l:'Advice card', notes:[
      {h:'Appendix 5: discharge advice for head injury', src:'CPG p54, printed in English only; chapter 11 asks for the form in multiple local languages where possible (p41). The form also has spaces for the patient\'s and care giver\'s names, contact number, date, IC/RN, the name of doctor, an emergency contact and a witness.', items:[
        'If any of the following alarming symptoms are present, you or your care giver should immediately contact the hospital for advice.',
        'If within the next 24 hours you experience/as observed by care giver:',
        'Fainting or sleepiness','Increasing confusion, inability to recognise time, place or people','Change in behaviour','Constant headache which is worsening','Vomiting','Inability to remember new events','Jerking or seizures, abnormal speech','Blood or fluid coming out of the ear','Inability to move any part of your body']},
      {h:'What you should and should not do', src:'Appendix 5 (p54)', table:{head:['DO','DON\'T (until advised by your doctor)'], rows:[
        ['Take paracetamol for headache','Take sleeping pills and anticoagulants/ antiplatelets'],
        ['Take your usual medications','Take alcohol'],
        ['Mild exercise when you feel better','Play contact sport'],
        ['Take rest or a few days off from work','Drive']]}},
      {h:'Giving the advice', src:'Chapter 11 (p41) and chapter 12 (p42)', items:[
        'The discharge form should include phone contact number of the hospital in the event of a emergency or related queries.',
        'Patients with minor head injury can be followed up by telephone conversation within 48 hours on their ability to recall alarming features and well-being (p42).']}
    ]},
    {l:'Anticoagulants', notes:[
      {h:'Antiplatelets and anticoagulants', src:'9.1 and 9.2 (p35–37) and Recommendation 16 (p36). The CPG gives no doses for vitamin K, fresh frozen plasma, prothrombin complex concentrate or recombinant factor VIIa.', items:[
        'There is insufficient evidence to recommend routine transfusion of platelet in patients with MHI and on antiplatelet therapy (boxed statement, p35).',
        'The important aspect of management of anticoagulant-associated ICH is urgent reversal of coagulopathy with rapid decrease of the International Normalized Ratio (INR) to a value of <1.4, preferably to <1.2 (p35).',
        'However there is no specific target INR for adequate reversal in ICH patients on warfarin (p35).',
        'Vitamin K has slow onset of action. It carries a risk of allergic reaction. Hence it should be given slowly to all patients with warfarin-associated ICH (p36).',
        'Anticoagulants should be immediately stopped and reversed in patients with intracranial bleeding by using vitamin K (only for warfarin), fresh frozen plasma, prothrombin complex concentrate or recombinant factor VIIa as indicated and there should be consultation on this matter among relevant specialties (Recommendation 16).',
        'There is insufficient evidence on when to restart antiplatelet and anticoagulant in patients with head injury. If there is an urgent need for anticoagulation but risk of bleeding is still considered reasonably high, decision on when and how to start anticoagulant should be decided by a multidisciplinary team (boxed statement, p37).',
        'The advice card (Appendix 5, p54) tells patients not to take anticoagulants/ antiplatelets until advised by the doctor.']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Early Management of Head Injury in Adults. Putrajaya: Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division; 2015. ISBN 978-967-0769-45-5. MOH/P/PAK/304.15(GU). Available at http://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Adapted in the CPG: Algorithm 2 from Sasser SM, et al. Guidelines for field triage of injured patients (MMWR Recomm Rep. 2012;61(RR-1):1-20); Algorithms 3 and 4 from NICE, Triage, assessment, investigation and early management of head injury in children, young people and adults (2014); the discharge criteria (p24) from SIGN, Early management of patients with a head injury (2009).'],
  see:[['#mild-tbi','Mild traumatic brain injury (ebook pathway)'],['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT'],['#gz-rules--reas','CT brain and going home: EP review']]
};

/* The ebook pathway points to the national guideline (a link only: its content stays as written) */
P['mild-tbi'].see = [...(P['mild-tbi'].see || []), ['#head-injury-cpg', 'Head injury CPG (2015)']];

/* ----- CPG Management of Acute Coronary Syndromes, 1st edition (2026) -----
   Issued by the MOH, the National Heart Association of Malaysia (NHAM) and the Academy of Medicine Malaysia (p1); it joins
   the STEMI and NSTE-ACS CPGs (p8). Copyright NHAM and the Academy of Medicine Malaysia: reproduced with acknowledgement, not
   changed. Printed page = PDF page minus 2. Quoted as printed, with the CPG's US spelling and typing slips; citation numbers
   dropped. It does not replace the ebook (rule 5); the differences are in acs-review.md. The DG's message (p2) is cited
   as a source only (rule 3). */
P['acs-cpg'] = {
  title:'ACS: CPG 1st edition', grp:'cpg', src:'CPG Management of ACS, 1st ed. (2026)', isnew:true, hero:'acscpg',
  lead:'The national guideline (2026), joining the STEMI and NSTE-ACS guidelines: ECG within 10 minutes, the zone, the troponin rule-out, risk and first drugs. ECG, troponin, scores and fibrinolysis are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Acute Coronary Syndromes, 1st edition (2026), for all patients (18 years and older) presenting with chest pain (p12). Key Recommendation #8 (p26): any patient presenting with chest pain and suspected of having ACS based on the initial assessment and ECG, should require at least a monitored (YELLOW or MTS LEVEL 3) or critical (RED or MTS Level 1 & 2) zone. These patients should NOT be triaged to a green/non-critical zone.', opts:[
      ['Chest pain: ECG and category in the first 10 minutes (6.1)','tri'],
      ['Possible NSTE-ACS: the troponin rule-out (Flowchart 6)','ro'],
      ['Definite NSTE-ACS: risk and disposition (Tables 4 and 8)','nste'],
      ['STEMI: choose the reperfusion (Table 25)','stemi'],
      ['First drugs in the ED (7.1)','rx'],
      ['Going home: who, and with what follow-up','home']]},

    /* 6.1 Triage and rapid initial assessment (p82–83), Flowchart 2 (p35), Table 16 (p58) */
    tri:{step:'Chest pain: ECG within 10 minutes, then the zone (6.1)', items:[
      'A 12-lead ECG should be performed within 10 minutes of arrival and compared with previous or pre-hospital ECGs if available (p83)',
      'Obtain a focused history, assess risk factors, and record vital signs upon arrival (p83)',
      'If chest pain is present, and/or there are clinical features and/or ECG changes suggestive of ischemic pain, they require at least a monitored (YELLOW or MTS level 3) or critical (RED or MTS level 1 and 2) zone, depending on severity (p82)',
      'Be vigilant for chest pain equivalent symptoms (e.g., epigastric pain, isolated arm, neck, or jaw pain) in high-risk populations (older persons, diabetic, or female patients). These patients should also have an immediate ECG (p82)'], next:'cat'},
    cat:{q:'Clinical features and ECG: which fits?', hint:'Flowchart 2 (p35) and 6.2 (p83–84); Table 16 (p58) is below. Evaluation is a continuous process: a patient may move from “very low likelihood” of ACS to definite NSTE-ACS or even STEMI (p84).',
      info:['Anginal chest pain has traditionally been described as a central pain or pressure, aggravated by emotional or physical stress and relieved by rest or nitroglycerin. It may radiate to the jaw or down the left or both arms',
        'A change in the usual pattern of angina: increasing in frequency and/or intensity; occurring on minimal exertion or at rest; longer duration; not relieved with 1 tab nitroglycerin',
        'Chest Pain Equivalent includes dyspnea (50%), unexplained sweating (25%), nausea and vomiting (24%), syncope and presyncope (19%), fatigue and epigastric discomfort of a burning quality. Atypical Sites include epigastrium, interscapular region, back, jaw or arm pain only without chest symptoms'],
      opts:[['ST elevation in 2 contiguous leads with ischaemic symptoms: STEMI','stemi'],['No ST elevation, but ECG signs of an occlusion MI (Table 20)','omi'],['Obvious ischaemic ECG changes, e.g. ST depression: definite NSTE-ACS','nste'],['Normal or non-diagnostic ECG, ACS still possible','ro'],['Very low likelihood of ACS, or another cause','nc']]},
    omi:{end:'refer', title:'Possible occlusion MI without ST elevation: Very-High-Risk', items:[
      'Occasionally the typical ECG changes of ST elevation may be absent and other ECG criteria may raise the suspicion of an acutely occluded coronary artery. These patients will also benefit from early revascularization (Key Message #5, p20)',
      'Table 4 (p42) counts these as Very-High-Risk: admit to a monitored bed/ critical care (Table 8, p44)',
      'Patients presenting with ischemic-type chest pains > 30 minutes and continuing to have chest pains but with a non-interpretable ST segment on the ECG, such as those with bundle branch block (both RBBB and new onset or presumed new onset LBBB) or ventricular pacing may be considered for a PCI strategy if resources are available. These patients should not be given fibrinolysis (p94)'],
      links:[['#acs--stemi','Ebook: consult EP on the floor'],['#acs-cpg--rx','First drugs']],
      gap:'CPG Key Message #5 (p20), Tables 4, 8 and 20 (p42–44, p63) and p94. Table 20 is in the ECG tab. The CPG does not say who reads these signs in the ED or whom to call.'},

    /* 6.2.1 STEMI (p83), Table 25 (p95; also Table 2, p39), Key Recommendations #9 (p26–27) */
    stemi:{step:'STEMI: critical zone and reperfusion now (6.2.1)', items:[
      'Patients who have chest symptoms and ECG changes of STEMI should be triaged immediately. These patients require a critical (RED or MTS Level 1 or 2) zone (p83)',
      'We should not, however, wait for the results of the cardiac biomarkers before initiating definitive treatment (Key Message #5, p20)',
      'Reperfusion therapy is indicated in all patients with symptoms of ischemia of <12hours duration and persistent ST-segment elevation (Key Recommendations #9, p26)',
      'Flowchart 3 (p36): continuous ECG monitoring; sublingual glyceryl trinitrate (GTN) (if no contraindication); aspirin + clopidogrel (or ticagrelor); analgesia; oxygen [if oxygen saturation (SpO2) < 94%]',
      'Patients with inferior STEMI should have an ECG recording of the right precordial lead (V3R and V4R) to identify concomitant right ventricular (RV) involvement (p59)'], next:'ons'},
    ons:{q:'Time from onset of symptoms to STEMI diagnosis?', hint:'Table 25 (p95). Within 3 hours and 3 to 12 hours both include 3 hours, and exactly 24 hours is in neither very late band, as printed.',
      opts:[['Within 3 hours (early presentation)','e3'],['3 to 12 hours (late presentation)','l12'],['More than 12 hours (very late presentation)','vl']]},
    e3:{check:'any', q:'Within 3 hours: is primary PCI the preferred strategy?', hint:'Table 25 (p95): if both treatment options are readily available, they are equally effective. In the following situations, however, primary PCI is the preferred strategy. Appendix IX is in the Fibrinolysis tab.',
      items:['Fibrinolytic therapy is contraindicated','High-risk: large infarcts','High-risk: anterior infarcts','High-risk: hypotension and cardiogenic shock','High-risk: significant arrhythmias','High-risk: older patients (≥ 75 years of age)','High-risk: post-revascularization (post-CABG/post-PCI)','High-risk: post-infarct angina','PCI time delay (DBT minus (-) DNT) is less than 60 minutes'],
      opts:[['Yes, present: primary PCI','ppci'],['None: both are equally effective','eq']]},
    ppci:{end:'refer', title:'Primary PCI is the preferred strategy', items:[
      'High-risk patients: Primary PCI is preferred. Consider pharmaco-invasive therapy if patient is unstable before transfer (Table 25)',
      'Primary PCI is however preferred if the onset of ischemic symptoms < 12 hours and: fibrinolytic therapy is contraindicated irrespective of time delay from FMC; cardiogenic shock irrespective of time delay (p27)',
      'If the patient presents at a PCI center, then the time from FMC (First Medical Contact) to wire crossing should be ≤ 90 minutes. If transferred from a center with no PCI facilities, the time from FMC to wire crossing should be ≤ 120 minutes (including transfer delay) (Key Recommendations #9, p26–27)',
      'High-risk unstable patients should be taken to the nearest hospital for stabilization first (p26)'],
      links:[['#acs--ijn','Ebook: IJN referral'],['#acs-cpg--rxs','STEMI drugs']], gap:'CPG Table 25 (p95) and p26–27. The IJN referral criteria are the department\'s (ebook), not the CPG\'s.'},
    eq:{end:'refer', title:'Within 3 hours: primary PCI and fibrinolysis are equally effective', items:[
      'In the golden hour, when symptom duration is within 1 to 2 hours, prompt FT may provide clinical benefit compared with primary PCI and should be considered a potentially preferable option (p96)',
      'When fibrinolytic therapy is administered, the Door to Needle time (DNT) should be ≤ 30 minutes (Key Recommendations #9, p26)',
      'Whenever possible, patients given fibrinolytic therapy should be considered for a pharmaco-invasive PCI. (elective angiogram within 2-24 hours post fibrinolysis)'],
      links:[['#acs--stemi','Ebook: consult EP on the floor'],['#acs-cpg--rxs','STEMI drugs']],
      gap:'CPG Table 25 (p95), p96 and p26. Flowchart 3 (p36) prints the pharmaco-invasive window as 3-24 hours.'},
    l12:{end:'refer', title:'3 to 12 hours: primary PCI is preferred', items:[
      'Primary PCI is preferred. The STEMI diagnosis to wire crossing should be within 90 minutes if the patient presents at a PCI-capable facility (Table 25)',
      'If transferred from a center with no PCI facilities, the time from STEMI diagnosis to wire crossing should be ≤ 120 minutes (including transfer delay). This is made up of: DIDO of non-PCI-capable hospital: ≤ 30mins. Transport time to PCI-capable center: ≤ 60mins. The door of PCI-capable center to wire crossing: ≤ 30 minutes',
      'If the time delay to primary PCI is > 120 minutes, the best option is to give fibrinolytic therapy and arrange to transfer the patient to a PCI-capable center for a pharmaco-invasive strategy'],
      links:[['#acs--ijn','Ebook: IJN referral'],['#acs--lysis','Ebook: thrombolysis']],
      gap:'CPG Table 25 (p95) and p26–27. Table 25 counts the 90 and 120 minutes from STEMI diagnosis; Key Recommendations #9 counts them from FMC.'},
    vl:{end:'refer', title:'More than 12 hours: very late presentation', items:[
      'Very late presentation (> 12 hours < 24 hours): Primary PCI is the preferred strategy and would still be beneficial in patients with persistent ischemic symptoms, hemodynamic and/or electrical instability. Primary PCI and fibrinolytic therapy are not routinely recommended in asymptomatic and hemodynamically stable patients',
      'Very late presentation (> 24 hours): Both Primary PCI and fibrinolytic therapy are not recommended'],
      links:[['#acs--stemi','Ebook: consult EP on the floor']], gap:'CPG Table 25 (p95). Exactly 24 hours is in neither band as printed.'},

    /* 6.2.2.1 Definite NSTE-ACS (p83), Table 4 (p42), Table 8 (p44) */
    nste:{step:'Definite NSTE-ACS: admit, then risk-stratify by Table 4', items:[
      'Patients with chest pain and/or chest pain equivalents who have obvious ECG changes of ACS- e.g. ST segment depression, new ECG changes compared to previous ECGs - should be admitted and treated appropriately (6.2.2.1, p83)',
      'All patients with NSTE-ACS should be risk stratified at admission, using Clinical Features, Table 4, pg 42 (Key Message #9, p21)'], next:'vhr'},
    vhr:{check:'any', q:'Very-High-Risk criteria? (Table 4)', hint:'Table 4 (p42), adapted from the 2011 ESC guidelines.',
      items:['Hemodynamic instability or cardiogenic shock','Recurrent or ongoing chest pain refractory to medical treatment','Recurrent dynamic ST-T wave changes +/- intermittent ST-elevation','Life-threatening arrhythmias or cardiac arrest','Acute heart failure','Mechanical complications of MI','ECG features (beside ST segment elevation) indicative of an Occlusion MI (Table 20, in the ECG tab)'],
      opts:[['Yes, present','vh'],['None','hrc']]},
    hrc:{check:'any', q:'High-Risk criteria? (Table 4)', hint:'Table 4 (p42). The TIMI score is under the rule-out; GRACE is not scored here (Scores tab).',
      items:['Rise or fall in cardiac troponins compatible with MI','Dynamic ST - or T-wave changes (symptomatic or silent)','GRACE score > 140','TIMI for UA/NSTEMI risk score > 4'],
      opts:[['Yes, present','hi'],['None','irc']]},
    irc:{check:'any', q:'Intermediate-Risk criteria? (Table 4)', hint:'Table 4 (p42). Low-Risk Criteria: any characteristics not mentioned above.',
      items:['Diabetes mellitus','LVEF < 40% or congestive heart failure','Early post-infarction angina','Prior revascularization (PCI/CABG)','GRACE risk score 109 - 140','TIMI risk score 3 & 4'],
      opts:[['Yes, present','im'],['None: Low-Risk','lo']]},
    vh:{end:'refer', title:'Very-High-Risk: monitored bed or critical care, urgent invasive strategy', items:[
      'Admit to a monitored bed/ critical care (Table 8)',
      'Wherever possible, individuals with very-high-risk criteria should undergo an invasive strategy as soon as possible, preferably < 24-48 hours of admission',
      'The Very-High-Risk and High-Risk NSTE-ACS patients should be considered for transfer to a PCI-capable center as soon as possible (p91)'],
      links:[['#acs-cpg--rxn','NSTE-ACS drugs'],['#acs--nstemi','Ebook: NSTE-ACS route']], gap:'CPG Tables 4 and 8 (p42–44) and p91. The ebook refers NSTEMI to CCU.'},
    hi:{end:'refer', title:'High-Risk: monitored bed or critical care, early invasive strategy', items:[
      'Admit to a monitored bed/ critical care (Table 8)',
      'Consider early (within < 24-48 hours) invasive strategy'],
      links:[['#acs-cpg--rxn','NSTE-ACS drugs'],['#acs--nstemi','Ebook: NSTE-ACS route']], gap:'CPG Tables 4 and 8 (p42–44). The ebook refers NSTEMI to CCU.'},
    im:{end:'admit', title:'Intermediate-Risk: admit, invasive strategy this admission', items:['Admit (Table 8)','Consider early (this admission) invasive strategy'],
      links:[['#acs-cpg--rxn','NSTE-ACS drugs']], gap:'CPG Tables 4 and 8 (p42–44).'},
    lo:{end:'discharge', title:'Low-Risk: discharge, investigate as an outpatient', items:[
      'Patients with no recurrence of symptoms and none of the criteria as listed in Table 4, pg 42 are to be considered at low risk of ischemic events. Allow discharge and carry out further cardiac investigations as outpatient (Table 8, p44)',
      'They should have non-invasive assessment for inducible or silent ischemia',
      'All patients should receive optimal medical therapy consisting of DAPT, high intensity statins and where indicated, anti-ischemic agents (p28)'],
      links:[['#acs--home','Ebook: Obsess discharge'],['#outpatient-referral','MAU FAST clinic']],
      gap:'CPG Table 8 (p44) and p28. Table 4\'s High-Risk criteria include a rise or fall in cardiac troponins compatible with MI, so this end needs the troponin results. The CPG does not say how soon the outpatient test should be, or in which clinic. The ebook admits unstable angina to the medical ward.'},

    /* Flowchart 6, the "rule out" protocol (p41 and p87), 6.2.2.2.1 (p84–88), Table 9 (p45) */
    ro:{step:'Possible NSTE-ACS: the rule-out protocol (Flowchart 6)', items:[
      'These patients have normal or non-diagnostic ECGs and/or are at high risk for ACS. They need to be evaluated using a “rule out ACS Pathways” (p84)',
      'These “rule out” algorithms should only be used in conjunction with all available clinical information, including detailed assessment of chest pain characteristics and ECGs, and should be applied only following exclusion of STEMI or other life-threatening conditions (p84)',
      'Clinicians should be familiar with the 99th percentile URL and the lower limit of detection (LoD) of the cTn assay used in their respective hospitals, including the age and sex specific limits (p24). It is inappropriate to label cTn results as positive and negative (p66)'], next:'assay'},
    assay:{q:'Which troponin is it?', hint:'Flowchart 6 (p41 and p87): preferably hs-cTn. Its footnote sets the score by the assay: *If cTn use HEART score for scoring and for hs-cTn use modified HEART score or TIMI UA/NSTEMI score.',
      opts:[['hs-cTn (high-sensitivity troponin)','h0'],['cTn (conventional troponin)','c0']]},
    h0:{q:'First hs-cTn result?', hint:'Flowchart 6 (p41, p87). A first value above the 99th percentile goes straight to ADMIT, without a repeat. A value exactly at the 99th percentile, or taken exactly 2 hours from onset, is not placed.',
      opts:[['> 99th percentile','tadm'],['< 99th percentile, hs-cTn measured > 2 hours from symptom onset','hpf'],['< 99th percentile, hs-cTn measured < 2 hours from symptom onset','hrep']]},
    hrep:{step:'Repeat hs-cTn 2 hours later (Flowchart 6)', items:[
      'Repeat cTn 3 hours later or hs-cTn 2 hours later (Flowchart 6). Key Recommendations #3 (p24): repeated 1-2 hours later (for hs-cTn) or 3-6 hours later (for cTn)',
      '**If initial baseline cTn (or hs-cTn) is > 99th percentile, a change of > 20% is significant. If the baseline is ≤ 99th percentile URL, a change of at least 50% is required to be significant (Flowchart 6)'], next:'h2'},
    h2:{q:'Repeat hs-cTn result?', hint:'Flowchart 6 prints the admit box as > 50% change (p41) and ≥ 50% change (p87). It places only these two combinations.',
      opts:[['> 99th percentile and ≥ 50% change in levels within a 3-hour period','tadm'],['< 99th percentile and < 50% change in levels within a 3-hour period','hpf'],['Any other combination','tmix']]},
    hpf:{q:'Pain free? Then the score', hint:'Flowchart 6: pain free and a low score is discharged; still having pain and/or a higher score is the indeterminate group. With hs-cTn the footnote allows the modified HEART score or the TIMI UA/NSTEMI score.',
      opts:[['Pain free: score TIMI for UA/NSTEMI','timi'],['Pain free: score modified HEART','heart'],['Still having pain','ind']]},
    c0:{q:'First cTn result?', hint:'Flowchart 6 (p41, p87). A first value above the 99th percentile goes straight to ADMIT, without a repeat.',
      opts:[['> 99th percentile','tadm'],['< 99th percentile, cTn measured > 6 hours from symptom onset','cpf'],['< 99th percentile, cTn measured under 6 hours from symptom onset','cgap']]},
    cgap:{step:'A cTn under 6 hours from onset: not in Flowchart 6', items:[
      'Not in the source: both boxes of Flowchart 6 (p41, p87) print cTn measured > 6 hours from symptom onset, so it gives no route for a cTn taken earlier. The text repeats cTn 3-6 hours later (p24, p67); the flowchart, 3 hours later. Still to confirm with the department',
      'For cTns, it should be at least 6 hours after symptom onset. Too early a measurement could result in a false negative (Key Recommendations #3, p24)',
      'They may be repeated 1-2 hours later (for hs-cTn) or 3-6 hours later (for cTn) if the first measurement is non-diagnostic and the clinical suspicion of MI and/or the pretest probability of MI is high'], next:'crep'},
    crep:{step:'Repeat cTn 3 hours later (Flowchart 6)', items:[
      'Repeat cTn 3 hours later or hs-cTn 2 hours later (Flowchart 6)',
      '**If initial baseline cTn (or hs-cTn) is > 99th percentile, a change of > 20% is significant. If the baseline is ≤ 99th percentile URL, a change of at least 50% is required to be significant (Flowchart 6)'], next:'c2'},
    c2:{q:'Repeat cTn result?', hint:'Flowchart 6 prints the admit box as > 50% change (p41) and ≥ 50% change (p87). It places only these two combinations.',
      opts:[['> 99th percentile and ≥ 50% change in levels within a 3-hour period','tadm'],['< 99th percentile and < 50% change in levels within a 3-hour period','cpf'],['Any other combination','tmix']]},
    cpf:{q:'Pain free? Then the HEART score', hint:'Flowchart 6: with cTn the footnote uses the HEART score.', opts:[['Pain free: score HEART','heart'],['Still having pain','ind']]},
    timi:{check:'score', q:'TIMI risk score for UA/NSTEMI', hint:'Appendix IV (p164): the sum of the presence of 7 variables at admission. Flowchart 6: TIMI for UA/NSTEMI score 0 or 1 is discharged; ≥ 2 is the indeterminate group. Appendix IV and Table 7 call ≤ 2 Low Risk, so a TIMI of 2 is low risk there but not for the rule-out. The ebook\'s Obsess protocol asks for TIMI under 1.',
      items:[['Age 65 years or older',1],['At least 3 risk factors for CAD: Family history of premature CAD, Hypertension 140/90 or on antihypertensives, Low HDL cholesterol (< 40mg/dL), Current cigarette smoker, Diabetes mellitus',1],['Known CAD (coronary stenosis of ≥ 50%)',1],['Use of aspirin in prior 7 days',1],['ST - segment deviation (≥ 0.5mm) on ECG',1],['At least 2 anginal episodes in prior 24 hours',1],['Elevated serum cardiac biomarkers',1]],
      suggest:s => s>=2 ? 1 : 0, opts:[['TIMI for UA/NSTEMI score 0 or 1','dch'],['TIMI for UA/NSTEMI score ≥ 2','ind']]},
    heart:{q:'HEART score: total?', hint:'Appendix III (p163): add the five rows (0 to 10). # In Modified Heart Score, the hs-cTn is used instead of cardiac troponins. The CPG does not define the History or ECG grades, and exactly 3 risk factors is in no row: not in the source.',
      info:['History: Highly suspicious 2; Moderately suspicious 1; Slightly suspicious 0',
        'ECG: Significant ST segment depression 2; Non specific repolarization disturbances 1; Normal 0',
        'Age: ≥ 65 years 2; > 45 - < 65 years 1; ≤ 45 years 0',
        'Risk factors (the row is printed as History): > 3 Risk Factors* or h/o atherosclerotic disease** 2; 1 - 2 Risk Factors 1; No known Risk Factors 0',
        'Troponins#: ≥ 3 x normal 2; >1 - < 3 x normal 1; ≤ normal limit 0',
        '* Currently treated diabetes mellitus, current or recent smoker, diagnosed and/or treated hypertension, diagnosed hypercholesterolemia, family history of coronary artery disease, obesity (body mass index >30). ** Coronary revascularization, myocardial infarction, stroke, or peripheral arterial disease, irrespective of the risk factors for coronary artery disease'],
      opts:[['HEART score ≤ 3','dch'],['HEART score > 3','ind']]},
    tadm:{end:'admit', title:'Above the 99th percentile: admit (Flowchart 6)', items:[
      'ADMIT (Flowchart 6, p41 and p87), then risk-stratify by Table 4 and give the first drugs',
      'Elevations beyond 5-fold the URL have high (> 90%) positive predictive value (PPV) for acute Type 1 MI. Elevations up to 3-fold the URL have only limited (50 - 60%) PPV for MI and may be associated with a broad spectrum of other conditions (p66)',
      'A cTn elevation is not exclusive for ACS (p68): the definition of MI and Appendix VI are in the Troponin tab'],
      links:[['#acs-cpg--nste','Risk by Table 4'],['#acs-cpg--rx','First drugs'],['#acs--nstemi','Ebook: NSTE-ACS route']],
      gap:'Flowchart 6 admits a first value above the 99th percentile without a repeat, while Table 9 (p45) puts elevated cTn without a significant rise and/or fall in the indeterminate group. The department\'s own troponin cut-off is in the ebook pathway\'s department notes.'},
    tmix:{end:'neutral', title:'A result Flowchart 6 does not place', items:[
      'Table 9 (p45), indeterminate group: elevated cTn /hs-cTn levels but without a significant rise and/or fall; mildly raised cTn levels or equivocal results and patients who cannot be confidently ruled out or ruled in for MI',
      'Rule-in-MI - significant rise and/or fall of cTn with at least one value greater than the 99th percentile URL in combination with other clinical criteria (p68)'],
      links:[['#acs-cpg--ind','Indeterminate group'],['#acs-cpg--tadm','Admit']],
      gap:'Flowchart 6 places only > 99th percentile with ≥ 50% change (admit) and < 99th percentile with < 50% change (to the score). Table 21 is in the Troponin tab. The CPG does not say which applies.'},
    dch:{end:'discharge', title:'Ruled out: discharge from the ED with an early outpatient consult', items:[
      'Discharge from ED with early outpatient cardiology (in the absence of cardiology- internal medicine) counsult (Flowchart 6, p41 and p87)',
      'Rule out does not equate to discharge. It requires consideration of: other causes of chest pain; early out-patient assessment for possible stable CAD; optimization of care in patients with known CAD (p69)',
      'About 1.6-3.3% of ACS patients are, however, “missed” by the Heart Score. As such, clinical judgement is still important prior to discharging the patient from the ED. Persistent or recurrent symptoms during the ED stay should prompt patient re-evaluation (p88)'],
      links:[['#acs--home','Ebook: Obsess discharge'],['#outpatient-referral','MAU FAST clinic'],['#emacc','EMACC follow-up']],
      gap:'Flowchart 6, p69 and p88. The CPG gives no time frame for the early consult, no discharge drugs and no return advice for a ruled-out patient; its message to the public is in the Advice tab. The department\'s route (aspirin, stress test within 1 week, MAU FAST clinic, follow-up at 30 days) is on the ebook pathway.'},
    ind:{end:'observe', title:'Indeterminate group: observe, investigate, admit or refer (Table 9)', items:[
      'Ongoing/recurrent chest symptoms without significant ECG changes or cTn elevations. In these patients, alternative causes for their chest symptoms should be excluded. Elevated cTn /hs-cTn levels but without a significant rise and/or fall. Mildly raised cTn levels or equivocal results (Table 9, p45)',
      'The indeterminate group of patients represent a wide range of patients that have been shown to have mortality rates comparable to the “rule in” patients (p88)',
      'If the likelihood of underlying CAD is high, they should be started on: antiplatelet agents and high intensity statins and appropriate anti-ischemic therapy',
      'Depending on the clinical status of the patient and available facilities, they may be: admitted; observed in the observational area of the ED; referred for an early cardiology (or in the absence of cardiology, internal medicine) out-patient consult',
      'They should be given an appointment in the cardiology or general medical outpatient clinic (p89)'],
      gap:'CPG Table 9 (p45) and 6.2.2.4 (p88–89). The CPG does not say how to choose between admission, ED observation and an early clinic, or how long to observe.'},
    nc:{end:'neutral', title:'Very low likelihood of ACS, or another cause', items:[
      'These can be treated accordingly and be discharged from ED. They, however, need to be advised on the need for further investigations to determine the nature of their chest pain (p84)',
      'Some of these can be life threatening. Non-coronary cardiac causes of chest pain: aortic dissection; pulmonary embolism; pericarditis and myocarditis (6.2.3, p89)',
      'Non-cardiovascular causes: gastrointestinal; musculoskeletal; pulmonary (e.g. pneumonia, pleuritis, pneumothorax); other etiologies (e.g. herpes zoster, panic attack)',
      'The relief of symptoms after nitrate administration is not specific for angina, neither is relief with proton pump inhibitors and/or antacids indicative that it is non-cardiac (p56)'],
      gap:'CPG p84, p89 and p56. The CPG lists the other causes but does not cover their management.'},

    /* 7.1 General measures (p93), with chapter 8 (p103–113), 10.2 (p123), 14.2 (p140–141) and Appendix X (p170–174) */
    rx:{step:'First drugs in the ED (7.1, p93)', items:[
      'Continuous cardiac monitoring with defibrillation capability',
      'Oxygen Therapy: administer oxygen to maintain an oxygen saturation of ≥ 94%',
      'Intravenous Access - Establish at least one large-bore i.v. line (preferably two)',
      'Obtain blood samples: cardiac biomarkers (preferably hs-cTn, cTns, CKMB ); full blood count; renal profile; glucose; lipid profile',
      'Sublingual GTN (0.3-0.6mg tablet or 0.4-0.8mg spray) every 5 minutes (up to three doses) if SBP ≥ 90mmHg',
      'If pain persists: i.v. morphine (3-5mg slow bolus every 5-15 minutes, titrated). Advice co-administration of an anti-emetic (i.v. metoclopramide 10mg or promethazine 25mg)',
      'Consider i.v. fentanyl (50mcg in titrated doses) if hypotension is a concern',
      'Aspirin 300mg (chewable or soluble) if not taken prior AND Clopidogrel 300mg (or 600mg if primary PCI is planned). This is preferred if fibrinolytic therapy is to be administered. OR Ticagrelor 180mg (only for PCI)',
      'High intensity statin therapy (atorvastatin 40-80mg or rosuvastatin 20-40mg daily) should be initiated as soon as possible after the diagnosis of ACS. Statins should be initiated as early as possible after hospital admission, preferably in ER (p109)'], next:'rxw'},
    rxw:{q:'Then: which applies?', hint:'The CPG prints oxygen as ≥ 94% (p93), > 94% (p25, p122) and if SpO2 < 94% (Flowchart 3); GTN as SBP ≥ 90mmHg (p93) and > 90mmHg (p25), and the GTN tablet as 0.3-0.6mg (p93) and 0.5 mg (Appendix X, p174). Each is quoted where it is used.',
      opts:[['NSTE-ACS: antiplatelets and anticoagulant','rxn'],['STEMI: fibrinolysis or primary PCI','rxs'],['Older than 75 years','rxo'],['A reason to hold or change a drug','rxci']]},
    rxn:{end:'neutral', title:'NSTE-ACS: antiplatelets and anticoagulant', items:[
      'All patients with NSTE-ACS should receive loading doses of: 300 mg aspirin + (Plus) 300-600mg clopidogrel or 180mg ticagrelor. We advocate pre-treatment in all patients with NSTE-ACS (Key Recommendations #12, p29)',
      'This is followed by a maintenance dose of 75-150mg daily of aspirin long-term and 75mg of clopidogrel daily or 90mg twice daily ticagrelor',
      'Those treated medically (without an invasive strategy) should be on s.c. LMWH or s.c. fondaparinux for 2-8 days or until hospital discharge (p99)',
      'Appendix X (p170): enoxaparin 1 mg/kg b.i.d. subcutaneously for a minimum of 2 days (Stage 4 & 5: 1mg/kg OD); fondaparinux 2.5 mg/d subcutaneously (Stage 4 & 5: Not recommended if CrCl < 20mL/min)'],
      links:[['#acs--nst','Ebook: NSTEMI, CCU referral']],
      gap:'CPG p29, p99 and Appendix X. 7.1 (p93) gives Ticagrelor 180mg (only for PCI), while Key Recommendations #12 offers it to all NSTE-ACS. Fondaparinux: avoid if CrCL < 30mL/minute (p144), or not recommended if CrCl < 20mL/min (Appendix X). The department\'s own doses are in the ebook pathway\'s department notes.'},
    rxs:{end:'neutral', title:'STEMI: antiplatelets and anticoagulant', items:[
      'Fibrinolytic therapy: 300mg aspirin + (Plus) loading dose 75mg of clopidogrel (> 75 years of age) or 300mg clopidogrel (≤ 75 years of age) (p28). Ticagrelor: (not for patients undergoing fibrinolysis) (Table 10, p46)',
      'After the fibrinolytic agent: Heparin (UFH) - i.v. 60U/kg bolus (maximum of 4000U) followed by an i.v. infusion of 12U/kg with a maximum of 1000U/h for 24-48h. Target aPTT: 1.5 to 2.0 x control, or',
      'Enoxaparin: Age < 75 year - 30mg i.v. bolus, followed in 15 min by 1mg/kg s.c. bid; Age ≥ 75 year - no bolus, 0.75mg/kg s.c. bid; CrCl < 30mL/min - 1mg/kg s.c. daily. Either one of these agents should be given immediately after the completion of fibrinolysis and continued for at least 48 hours',
      'Primary PCI: 300 mg aspirin + (Plus) 300 - 600mg clopidogrel or 180mg ticagrelor (p29). We advocate pre-treatment with DAPT prior to PCI in STEMI (p105)'],
      links:[['#acs--lysis','Ebook: thrombolysis'],['#acs--ijn','Ebook: IJN referral']],
      gap:'CPG p28–29, p96, p105 and Table 10 (p46). Fondaparinux 2.5mg daily is an alternative (p29). Fibrinolytic doses and contraindications are in the Fibrinolysis tab. Appendix X (p170) prints another UFH regimen (IV bolus 70-100U/kg, aPTT of 60-80s) without saying when it applies.'},
    rxo:{end:'neutral', title:'Older than 75 years: what the CPG prints', items:[
      'Clopidogrel: Loading dose is 75mg if > 75 years of age (p25); 75mg of clopidogrel (> 75 years of age) with fibrinolytic therapy (p28); 75 mg if > 75 years and fibrinolysis is given (Appendix X)',
      'For persons > 75 years of age, the loading dose of clopidogrel is omitted (p117, pharmaco-invasive strategy)',
      'The need for a loading dose must be individualized. When given as part of a fibrinolytic strategy, the loading dose in patients > 75 years is 75mg (p141)',
      'Enoxaparin: Age ≥ 75 year - no bolus, 0.75mg/kg s.c. bid (p28); a reduced dose of enoxaparin of 0.75-1.0mg/kg twice daily should be used in patients aged ≥75 years (p141)',
      'Tenecteplase: reduce to half dose in patients ≥ 75 years of age (Table 26, p97); 50% of the recommended dose in those > 75 years of age (p140)'],
      gap:'CPG p25, p28, p97, p117, p140–141 and Appendix X (p170). The CPG words the clopidogrel loading dose over 75 years four ways and the tenecteplase age two ways; each is quoted and none is chosen. Still to confirm with the department.'},
    rxci:{end:'neutral', title:'Hold or change a drug', items:[
      'Relative contraindications to nitrate therapy: hypotension (SBP < 90mmHg); right ventricular infarction; recent use of phosphodiesterase-5 inhibitors such as sildenafil or tadalafil (24-48 hours, depending on the agent\'s half-life) (p112)',
      'Morphine should be withheld in the presence of hypotension. (SBP ≤ 90mmHg) (p123)',
      'The use of i.v. β-blockers is not advocated (p110)',
      'In those patients who are allergic to aspirin, the available options include: more potent P2Y12 inhibitors (ticagrelor) alone; cilostazol with clopidogrel; triflusal with clopidogrel; aspirin desensitisation (p104)',
      'Proton pump inhibitors (PPI) in combination with DAPT should be considered for patients who are at high risk of gastrointestinal bleeds (p104)'],
      gap:'CPG p104, p110, p112, p123. The phosphodiesterase inhibitor window is also printed as within the last 24 to 48 hours (p25) and within 48 hours (p77, p174). Morphine is 3-5mg in 7.1 (p93) and 5-10mg in 10.2 (p123). The CPG names no PPI or dose.'},

    home:{q:'Going home: which applies?', hint:'Rule out does not equate to discharge (p69). These are the CPG\'s routes out of the ED.',
      opts:[['Ruled out by Flowchart 6: pain free with a low score','dch'],['Low-Risk NSTE-ACS by Table 4','lo'],['Indeterminate group (Table 9)','ind'],['Very low likelihood of ACS, or another cause','nc']]}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'ECG', notes:[
      {h:'ST elevation: the cut-offs', src:'CPG Table 17 (p61) and Key Message #5 (p20). Key Message #5 prints > 1 mm; Tables 17 and 18 print a minimum of, or ≥, 0.1 mV.', items:[
        'The cut-off points for new or presumed new ST segment elevation at the J point (in the absence of Left Ventricular Hypertrophy (LVH) and LBBB) is: the presence of a minimum of 0.1mV ST segment elevation in all leads except leads V2-V3; a cut-off point of a minimum of 0.25mV (in males < 40 years), 0.2mV (in males aged 40 years or more) and 0.15mV in females is used in leads V2-V3.',
        'STEMI is diagnosed when there is: ST elevation of > 1 mm in 2 contiguous leads, in a patient with ischemic type chest pains of > 30 minutes and supported by a rise and fall in cardiac biomarkers (Key Message #5).',
        'New or presumed new onset Left Bundle Branch Block (LBBB) is no longer considered a “STEMI Equivalent” (p60).']},
      {h:'Table 18: STEMI locations and cut-offs (in the absence of LVH or LBBB)', src:'CPG p62. *At the fifth intercostal space, V7 at the left posterior axillary line, V8 at the left midscapular line, and V9 at the left paraspinal border.', table:{head:['Location','Leads','ECG findings'], rows:[
        ['Anteroseptal','V1 - V3','ST elevation in leads V2-3: ≥ 0.25 mV (in males < 40 years), ≥ 0.2 mV (in males ≥ 40 years), ≥ 0.15 mV in females; Q wave'],
        ['Extensive anterior','V1 - V6','ST elevation of ≥ 0.1 mV in all leads except leads V2-V3 (V2-3 as above); Q wave'],
        ['Posterior','V7 - V9*','ST elevation ≥ 0.05 mV (≥ 0.1 mV in men < 40 years)'],
        ['Posterior','V1 - V2','Reciprocal ST depression; tall, broad R waves (> 30ms); upright T waves; dominant R wave (R/S ratio > 1) in V2'],
        ['Anterolateral','I, AVL, V5 - V6','ST elevation of ≥ 0.1 mV; Q wave'],
        ['Anteroapical MI','V3, V4','ST elevation of ≥ 0.1 mV'],
        ['High Lateral','I, AVL','ST elevation of ≥ 0.1 mV'],
        ['Inferior','II, III, AVF','ST elevation of ≥ 0.1 mV; Q wave'],
        ['Right Ventricular (RV)','V3R and V4R','ST elevation ≥ 0.5 mm (≥ 1 mm in men < 30 years old).']]}},
      {h:'Table 20: additional ECG criteria indicative of an occlusion MI in a person with ischemic chest pain', src:'CPG p63, adapted from Tziakas et al. (2021). Table 4 counts these as Very-High-Risk.', items:[
        'Non-coronary specific signs: total number of leads showing ST-segment depression (>3); total ST-segment depression sum (≥ 6 mm); ST-segment depression > 2 mm in any lead; presence of Q waves in ≥ 2 contiguous leads; hyperacute T waves; ‘Shark-fin’ - triangular waveform ECG pattern- a pattern characterized by a giant R wave and fusion of the QRS complex, ST segment, and T wave; transient ST-segment elevation; low QRS voltage',
        'LAD specific signs: hyperacute T waves; De Winter\'s sign; Wellens\' sign (Type A & Type B); ‘Shark-fin’; new RBBB; resting U-wave inversion',
        'Left Circumflex specific signs: ST-segment depression and/or T-wave inversion in inferolateral leads; ST-segment depression in V1-V3 leads; ST-segment elevation in V7-V8 leads; prominent R-waves in V1-V2 (R/S > 1) with upright T waves V1-V3',
        'RCA specific signs: the same four as the left circumflex, and ST-segment elevation in lead V4R; ST-segment elevation in lead V1; deep ST-segment depression in lateral leads (I + aVL ≥ 2 mm & ST depression aVL > I); QRS prolongation or epsilon wave in lead V4R',
        'LM specific signs: ST-segment elevation in aVR lead; ST-segment depression in all leads; ST-elevation in lead aVR ≥ V1; ‘Shark-fin’ - triangular waveform ECG pattern-or a “tombstone pattern”. (V2-V6 & ± inferior leads)',
        'Other high-risk signs: new RBBB; myocardial infarction on new or presumed new onset LBBB: concordant ST elevation ≥ 1 mm in ≥ 1 lead; concordant ST depression ≥ 1 mm in ≥ 1 lead of V1-V3; proportionally excessive discordant STE in ≥ 1 lead anywhere with ≥ 1 mm STE, as defined by ≥ 25% of the depth of the preceding S-wave (Smith - modified Sgarbossa criteria); AV conduction abnormalities']}
    ]},
    {l:'Troponin', notes:[
      {h:'When to take it, and when to repeat', src:'CPG Key Recommendations #3 (p24), 3.4 (p64–67) and Flowchart 6. The single hs-cTn is printed as at least 2-3 hours (p24), at least 3 hours (p67) and > 2 hours (Flowchart 6).', items:[
        'These cardiac biomarkers (troponins and CK-MB) should be measured at the time of first assessment. They may be repeated 1-2 hours later (for hs-cTn) or 3-6 hours later (for cTn) if the first measurement is non-diagnostic and the clinical suspicion of MI and/or the pretest probability of MI is high.',
        'If only a single hs-cTn measurement is to be made, it should be obtained at least 2-3 hours after the onset of symptoms. For cTns, it should be at least 6 hours after symptom onset.',
        'If the measurement is made ≥ 6 hours after the onset of symptoms and the cTn level is < 99th percentile URL, it has a good negative predictive value to exclude a diagnosis of MI (p67).']},
      {h:'Table 21: change from baseline to make a diagnosis of MI', src:'CPG p65. Flowchart 6 footnote: if initial baseline cTn (or hs-cTn) is > 99th percentile, a change of > 20% is significant; if the baseline is ≤ 99th percentile URL, a change of at least 50% is required to be significant. Table 17 note (p61): a change of 50-60% is necessary.', table:{head:['Baseline cTn (or hs-cTn)','Change to define an MI (delta within a 3- hour period)'], rows:[
        ['> 99th percentile URL','> URL + > 20% from baseline'],
        ['≤ 99th percentile URL','> URL + > 50% from baseline (suggested to overcome biological and analytical variations)']]}},
      {h:'Reading a result', src:'CPG 2.1 (p52–53) and 3.4 (p64–68)', items:[
        'MI is diagnosed when there is a rise and/or fall in cardiac troponins, with at least one value above the 99th percentile of the URL (upper reference limit), and accompanied with at least one of the following: clinical history consistent with chest pain of ischemic origin of > 30 minutes; ECG changes of ischemia/infarction and/or the development of pathological Q-waves; imaging evidence of new loss of viable myocardium or new regional wall motion abnormality; identification of an intracoronary (IC) thrombus by angiography or autopsy.',
        'The 99th percentile URL, depending on the assay used, may also vary depending on the age of the patient and sex (p67).',
        'In chronic myocardial injury, the levels tend to be stable. (< 20% change in levels between serial samples) (p65).',
        'The consensus in making a diagnosis of ACS in patients with CKD, is a baseline troponin level > the 99th percentile and a change (delta) of > 20% from baseline in serial testing (p68).',
        'The POC cTn kits that are widely available at present, have lower analytical sensitivity and too wide CoV to detect cTn at the 99th percentile URL (p66).']},
      {h:'Appendix VI: troponin raised in the absence of overt ischemic heart disease', src:'CPG p166, adapted from Thygesen et al. (2010). Some of the list.', items:[
        'Tachy - or bradyarrhythmias; aortic dissection and severe aortic valve disease; acute and chronic HF without significant concomitant CAD; cardiac contusion; myocarditis; severe pulmonary embolism or pulmonary hypertension; renal failure; severe acute neurological disease e.g. stroke, trauma; sepsis; acute respiratory failure']}
    ]},
    {l:'Scores', notes:[
      {h:'Table 7: NSTE-ACS risk by score', src:'CPG p43: risk score, with the predicted probability of events. End points: HEART, MI, PCI, CABG and death at 30 days; TIMI, all-cause mortality, MI and severe recurrent ischemia prompting urgent revascularization through 14 days; GRACE 1.0, death at 6 months and in-hospital mortality. The items: TIMI and HEART are under the rule-out.', table:{head:['','HEART','TIMI for UA/NSTEMI','GRACE 1.0: death at 6 months','GRACE 1.0: in-hospital mortality'], rows:[
        ['High Risk','≥ 7 (72.7%)','≥ 5 (26.2 - 40.9%)','> 118 (> 8%)','> 140 (> 3%)'],
        ['Intermediate Risk','4 - 6 (20.3%)','3 - 4 (13.2 - 19.9)','89 - 118 (3 - 8%)','109 - 140 (1 - 3%)'],
        ['Low Risk','0 - 3 (2.5%)','0 - 2 (4.7 - 8.3%)','≤ 88 (< 3%)','≤ 108 (< 1)']]}},
      {h:'Using the scores', src:'CPG Appendices III and IV (p163–164), 6.2.2.2 (p85–88) and Flowchart 6. Checked against the page images, 9 Nov 2026.', items:[
        'HEART Score from 0 to 10 places the patient into risk categories: Low Risk (0 - 3): potentially can be discharged early with high confidence. Moderate Risk (4 - 6): may require further evaluation and observation. High Risk (7 - 10): requires urgent or emergent intervention (Appendix III).',
        'The HEART score is the commonest risk score used in our EDs although there have been no validation studies in our local population (p85).',
        'The TIMI score, although commonly used, was not designed for application to undifferentiated patients presenting with chest pain and suspected ACS (p88). TIMI 2 is Low Risk in Appendix IV and Table 7, but Flowchart 6 discharges only TIMI 0 or 1.',
        'GRACE: Table 4 uses GRACE score > 140, but Appendix V (p165) prints only the 6-month post-discharge card, whose systolic pressure bands overlap (100 - 139.9 and 120 - 139.9). The guide does not reproduce it.']}
    ]},
    {l:'Fibrinolysis', notes:[
      {h:'Table 26: fibrinolytic agents available in Malaysia', src:'CPG p97. Alteplase is left out: its 30-minute dose is printed as 0.75mg/kg i.v. over 30 min (up to 5 mg), and a 5 mg ceiling on 0.75 mg/kg would cap the dose of anyone over about 7 kg. Still to confirm with the department.', table:{head:['Drug','Initial treatment (dose and dilution)','Notes'], rows:[
        ['Streptokinase (non-fibrin specific)','1.5 mega units in 100ml normal saline or 5% dextrose over 1 hour','The utilisation of this agent for reinfarction is less effective if given between 3 days and 1 or even 4 years after the first administration'],
        ['Tenecteplase (TNK-tPA) (fibrin specific)','Single i.v. bolus over 5 secs: 30mg (6000 U) if < 60kg; 35mg (7000 U) if 60 to < 70kg; 40mg (8000 U) if 70 to < 80kg; 45mg (9000 U) if 80 to < 90kg; 50mg (10 000 U) if ≥ 90 kg','It is recommended to reduce to half dose in patients ≥ 75 years of age']]}},
      {h:'Appendix IX: contraindications to fibrinolytic therapy', src:'CPG p169', items:[
        'Absolute: history of intracranial bleeding at any time; history of ischemic stroke within 6 months; known structural cerebral vascular lesion (e.g. arteriovenous malformation); known intracranial neoplasm; active bleeding or bleeding diathesis (excluding menses); recent major surgery trauma/head injury within the preceding month; suspected aortic dissection; gastrointestinal bleeding within the past month.',
        'Relative: severe refractory hypertension on presentation (SBP > 180/110mmHg); ischemic stroke more than 6 months; transient ischemic attack within 6 months; history of chronic, severe uncontrolled hypertension; infective endocarditis; current use of anticoagulant in therapeutic doses [International Normalised Ratio (INR) > 2] or direct oral anticoagulant (DOAC); recent major surgery < 3 weeks; traumatic or prolonged Cardio Pulmonary Resuscitation (CPR) > 10 minutes; recent internal bleeding (e.g. gastrointestinal or urinary tract hemorrhage) within 4 weeks; non-compressible vascular puncture; active peptic ulcer.',
        'Others: pregnancy or within 1 week postpartum; prior exposure (> 5 days and within 12 months of first usage) to streptokinase (if planning to use the same agent).',
        'Failed fibrinolysis: the treatment of choice for these patients is rescue PCI. Patients should not receive a second dose of a fibrinolytic agent (p99).']}
    ]},
    {l:'Advice', notes:[
      {h:'Table 1: message to the general public', src:'CPG Table 1 (p33), 5.1 (p77) and Key Recommendations #5 (p24). Printed in English only, for the public: there is no Bahasa Melayu version and no discharge leaflet.', items:[
        'Recognizing the 5 common heart attack symptoms: chest/ epigastric discomfort; jaw, neck, or back discomfort; arm or shoulder discomfort; weakness or light-headedness; shortness of breath.',
        'Seek immediate medical attention at the nearest hospital. Call for an ambulance (dial 999) or if there is an anticipated delay, get someone to take you immediately. Do not drive yourself.',
        'If not on regular aspirin and with no history of allergy, chew and swallow 300mg aspirin immediately. Taking an aspirin should not delay seeking medical attention (p77).',
        'Patients with known CHD, history of previous PCI and/or CABG and chest pain suggestive of ACS should take one dose of GTN either as a sublingual tablet or spray.',
        'Patients with ischemic-type chest pain should go to the nearest hospital rather than a clinic.']}
    ]}
  ],
  refs:['National Heart Association of Malaysia, Academy of Medicine Malaysia and Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Acute Coronary Syndromes (ACS), 1st Edition. Kuala Lumpur: National Heart Association of Malaysia; 2026. MOH/P/PAK/613.25(GU) - e. eISBN 978-967-11794-9-9. Available at http://www.moh.gov.my and http://www.acadmed.org.my',
    'Copyright © 2026 National Heart Association of Malaysia. The owners of this publication are the National Heart Association of Malaysia (NHAM) and the Academy of Medicine Malaysia. Content reproduced with a copyright acknowledgement to the owners: not changed in any form or method, not sold, not used to promote or endorse any product or service, and not used in any inappropriate or misleading context.',
    'Disclaimer (p1): users are strongly advised to exercise independent clinical judgement in each individual case. To be reviewed in 2031 or earlier if important new evidence becomes available.',
    'Scores as the CPG cites them: Six AJ et al. Neth Heart J. 2008;16(6):191-196 (HEART). Antman EM et al. JAMA 2000; 284: 835-42 (TIMI for UA/NSTEMI).'],
  see:[['#acs','Acute coronary syndrome and Obsess protocol (ebook pathway)'],['#calc','Calculators: Obsess protocol check (Heart group)'],['#outpatient-referral','MAU FAST clinic'],['#emacc','EMACC follow-up']]
};

/* The ebook pathway points to the national guideline (a link only: its content stays as written) */
P['acs'].see = [...(P['acs'].see || []), ['#acs-cpg', 'ACS CPG, 1st edition (2026)']];

/* ----- CPG Management of Diabetic Foot, 2nd edition (MaHTAS, 2018), for all patients with diabetes mellitus who are at risk or have developed diabetic foot (p vi) -----
   Printed page = PDF page minus 17 (p1 is PDF 18); front matter = PDF page minus 5 (Algorithm A is p x, Algorithm B p xi).
   Quoted as printed, including the CPG's own spelling (Amoxycillin, Sulphametoxazole, "by on gram stain"). Apostrophes and quotation
   marks are plain, citation numbers are dropped and table cells are joined with semicolons. Appendix 9 prints piperacillin/tazobactam
   as "4.5 mg" in its moderate row: quoted as printed and flagged. Appendix 6 (patient education) is printed in English only, so it is
   the Discharge advice list, not a leaflet. The ebook has no diabetic foot pathway; its cellulitis pathway (p30) stays as written. */
P['diabetic-foot-cpg'] = {
  title:'Diabetic foot: CPG 2nd edition', grp:'cpg', src:'CPG Diabetic Foot, 2nd ed. (2018)', isnew:true, hero:'footcpg',
  lead:'The national guideline (2018): check for general illness and a limb-threatening problem, grade the ulcer by the University of Texas classification, then treat or refer by Algorithm B. Antibiotics, wound care and foot care are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Diabetic Foot, 2nd edition (MaHTAS, 2018), for all patients with diabetes mellitus who are at risk or have developed diabetic foot (p vi). It has no emergency department pathway.', opts:[
      ['Active foot problem: admit, refer or treat (Algorithm B)','gen'],
      ['Infected foot: how severe, which antibiotic (Appendix 9)','sev'],
      ['Hot, red, swollen foot: could it be Charcot? (chapter 7)','cn'],
      ['Going home: wound care and foot care advice','home'],
      ['No active problem: risk and follow-up (Algorithm A, Table 1)','hi']]},

    /* Algorithm B, Active foot problems (p xi), with chapter 3, Referral (p10) */
    gen:{check:'any', q:'General illness?', hint:'Algorithm B (p xi): Refer urgently for admission if patients present with general illness (e.g. sepsis or diabetic emergencies) irrespective of foot problems. The CPG gives no criteria for sepsis.',
      info:['Active foot problems (Table 1, p8), any of: ulceration; infection; critical limb ischaemia; gangrene; suspicion of an acute Charcot neuroarthropathy, or an unexplained hot, red, swollen foot with or without pain'],
      items:['Sepsis','Diabetic emergencies','Other general illness'],
      opts:[['Yes, present','admx'],['None','thr']]},
    admx:{end:'admit', title:'Refer urgently for admission', items:[
      'Refer urgently for admission if patients present with general illness (e.g. sepsis or diabetic emergencies) irrespective of foot problems (Algorithm B, p xi)',
      'For moderate and severe infections, broad spectrum antibiotics are used initially until C&S results are available (p19)'],
      links:[['#diabetic-foot-cpg--sev','Grade the infection'],['#diabetic-foot-cpg--sevx','Severe infection'],['#hyperglycaemia','DKA or HHS (ebook)']],
      gap:'CPG Algorithm B (p xi) and p19. The CPG does not define sepsis, SIRS or a diabetic emergency, and names no admitting team.'},
    thr:{check:'any', q:'Limb-threatening or life-threatening foot problem?', hint:'Chapter 3 (p10): should be referred urgently and managed under specialist care. Examples of such conditions include the first four; necrotising fasciitis is from Appendix 9 (p52).',
      items:['Ulceration with fever or any signs of sepsis','Critical limb ischaemia: rest pain with ulcers or tissue loss attributed to arterial occlusive disease (p6)','Clinical concern that there is a deep-seated soft tissue or bone infection (with or without ulceration)','Gangrene (with or without ulceration)','Necrotising fasciitis'],
      opts:[['Yes, present','urg'],['None','ulc']]},
    urg:{end:'refer', title:'Refer urgently and manage under specialist care', items:[
      'Patients with a limb-threatening or life-threatening diabetic foot problem should be referred urgently and managed under specialist care (chapter 3, p10)',
      'Critical limb ischaemia: Patients with this condition should be referred urgently to specialist care (p6). Revascularisation should be offered in diabetic patients with peripheral arterial disease (Recommendation 11, p23)',
      'Necrotising fasciitis: Early aggressive surgical debridement essential; With septicaemia/severe infection refer to ICU guidelines (Appendix 9, p52)',
      'Active: Urgent referral within 24 hours to multidisciplinary foot care team (Table 2, p10)'],
      links:[['#diabetic-foot-cpg--sev','Grade the infection'],['#referral-rules--med','Admission to General Medicine']],
      gap:'CPG chapter 3 (p10), p6, Table 2, Recommendation 11 and Appendix 9. The CPG names no specialty, does not say whether to admit and gives no features of necrotising fasciitis. Which HKL team takes the referral: still to confirm.'},
    ulc:{q:'Ulcer? Grade it by the University of Texas classification', hint:'University of Texas Classification is the preferred classification for diabetic foot (Recommendation 2, p9). Full table: the Classification tab (Appendix 5, p41).',
      info:['Grade 0: Pre- or post-ulcerative lesion completely epithelialised','Grade I: Superficial wound, not involving tendon, capsule or bone','Grade II: Wound penetrating to tendon or capsule','Grade III: Wound penetrating to bone or joint','Stage B: With infection. Stage C: With ischaemia. Stage D: With infection and ischaemia'],
      opts:[['Without ulcer (UT 0)','ut0'],['With ulcer','pul']]},
    ut0:{q:'Without ulcer (UT 0): suspected Charcot neuroarthropathy?', hint:'Chapter 7 (p27): CN can be mistaken for cellulitis at early stage. It should be suspected in diabetes patients with inflamed foot, profound neuropathy and foot structural abnormalities in the absence of fever and elevated erythrocyte sedimentation rate.',
      opts:[['Suspected','cnr'],['Not suspected','ut0op']]},
    ut0op:{end:'discharge', title:'Without ulcer (UT 0): manage as outpatient by Foot Protection Services', items:[
      'Without ulcer (UT 0): Manage as outpatient by Foot Protection Services (Algorithm B, p xi)',
      'Foot protection team provides service in prevention of diabetic foot problems for low, moderate and high risk feet and management of simple active diabetic foot problems in the community that do not require admission (3.1, p10)',
      'Antibiotics should not be used unless there are local or systemic symptoms of infection (p19)'],
      links:[['#diabetic-foot-cpg--home','Going home: wound care'],['#cellulitis','Acute cellulitis (ebook)']],
      gap:'CPG Algorithm B (p xi) and 3.1 (p10). Table 2 (p10) and p8 ask for review within 24 hours for every active problem; the CPG does not reconcile them. Appendix 9 grades erythema around an ulcer only. HKL\'s route to Foot Protection Services: still to confirm.'},
    pul:{q:'Ischaemia: are the foot pulses palpable?', hint:'Algorithm B (p xi) prints ischaemia as pulses not palpable, without naming the pulses. Vascular assessment includes mandatory palpation of the femoral, popliteal, posterior tibial and dorsalis pedis artery pulses (p6).',
      opts:[['Not palpable: ischaemia (UT IC/IIC/IIIC, or ID/IID/IIID with infection)','mdt'],['Palpable','infq']]},
    infq:{q:'Infection, and how deep?', hint:'Algorithm B (p xi) splits infected ulcers by depth and the need for surgery. Antibiotics should not be used unless there are local or systemic symptoms of infection (p19).',
      opts:[['Infection: superficial ulcer not requiring surgical intervention (UT IB)','ibm'],['Infection: deep ulcer requiring surgical intervention (UT IIB/IIIB)','mdt'],['No infection: superficial (UT IA)','ia'],['No infection: wound to tendon, capsule, bone or joint (UT IIA/IIIA)','iia']]},
    ibm:{check:'all', q:'Mild infection? (Appendix 9)', hint:'Appendix 9 (p50). Algorithm B gives oral antibiotics for UT IB, and the oral regimens are printed for mild infections only. The CPG does not say whether a, b and c must all be present.',
      items:['a. Local infection involving skin and subcutaneous tissues','b. Erythema<2 cm around the ulcer','c. No systemic signs'],
      opts:[['All met','ib'],['Not all met','sev']]},
    ib:{end:'discharge', title:'Oral antibiotics, then manage as outpatient by Foot Protection Services (UT IB)', items:[
      'Preferred: Cephalexin 500 mg PO q6h OR Amoxycillin/Clavulanate 625 mg PO q8h',
      'Alternative: Clindamycin 300 - 450 mg PO q8h OR Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h',
      'Duration:1 - 2 weeks (Appendix 9, p50)',
      'Antibiotics should not be given for >14 days for the treatment of mild soft tissue infection in diabetic foot (p19)',
      'Antibiotic used for treatment should be based on the most recent culture and sensitivity (C&S) report (p19)'],
      links:[['#diabetic-foot-cpg--home','Going home: wound care']],
      gap:'CPG Algorithm B (p xi), Appendix 9 (p50) and p19. The CPG does not say when to use the alternatives or which component the mg/kg of trimethoprim/sulphametoxazole refers to. HKL\'s route to Foot Protection Services: still to confirm.'},
    ia:{end:'discharge', title:'Superficial ulcer (UT IA): manage as outpatient by Foot Protection Services', items:[
      'Superficial (UT IA): Manage as outpatient by Foot Protection Services (Algorithm B, p xi)',
      'Antibiotics should not be given for prevention of infections in diabetic foot (p19)',
      'Off-loading should be offered to patients with plantar diabetic foot ulcer (Recommendation 14, p25)'],
      links:[['#diabetic-foot-cpg--home','Going home: wound care']],
      gap:'CPG Algorithm B (p xi), p19 and Recommendation 14. Table 2 (p10) and p8 ask for review within 24 hours for every active problem; Algorithm B does not.'},
    iia:{end:'neutral', title:'Deep ulcer without infection or ischaemia (UT IIA or IIIA): not in Algorithm B', items:[
      'Algorithm B (p xi) has no box for UT IIA or IIIA',
      'Osteomyelitis may be present in a person with diabetes mellitus despite normal inflammatory markers, plain radiographs or probe-to-bone testing (p7)',
      'Clinical concern that there is a deep-seated soft tissue or bone infection (with or without ulceration) is one of the limb-threatening or life-threatening examples (chapter 3, p10)'],
      links:[['#diabetic-foot-cpg--mdt','Refer to the foot care team'],['#diabetic-foot-cpg--urg','Refer urgently']],
      gap:'Not in the source: Algorithm B gives no route for a deep ulcer without infection or ischaemia; Table 2 (p10) sends every active problem to the multidisciplinary foot care team within 24 hours. Still to confirm with the department.'},
    mdt:{end:'refer', title:'Refer to the multidisciplinary foot care team', items:[
      'Algorithm B (p xi): deep ulcer requiring surgical intervention (UT IIB/IIIB), ischaemia (UT IC/IIC/IIIC), and infection and ischaemia (UT ID/IID/IIID): Refer Multidisciplinary Foot Care Team',
      'Active: Urgent referral within 24 hours to multidisciplinary foot care team (Table 2, p10)',
      'The multidisciplinary foot care team in the hospital is led by the orthopaedic surgeon and/or physician (p11)',
      'Surgical debridement by trained healthcare providers should be considered in diabetic foot ulcer which: fails to respond to non-surgical debridement; is deep and infected at presentation (Recommendation 12, p23)',
      'Revascularisation should be offered in diabetic patients with peripheral arterial disease (Recommendation 11, p23)'],
      links:[['#diabetic-foot-cpg--sev','Grade the infection'],['#referral-rules--ortho','Orthopaedic referrals'],['#referral-rules--med','Admission to General Medicine']],
      gap:'CPG Algorithm B, Table 2, 3.2 (p11) and Recommendations 11 and 12. The CPG does not say whether to admit. Which HKL team takes the referral: still to confirm. If a surgical team declines and suggests a medical ward, refer to the Medical on call first (Director\'s memo, Jan 2026).'},

    /* Chapter 7, Charcot neuroarthropathy (p27–28), Recommendation 15 */
    cn:{q:'Could it be Charcot neuroarthropathy?', hint:'Chapter 7 (p27): CN can be mistaken for cellulitis at early stage. It should be suspected in diabetes patients with inflamed foot, profound neuropathy and foot structural abnormalities in the absence of fever and elevated erythrocyte sedimentation rate. CN is difficult to differentiate from osteomyelitis.',
      opts:[['Suspected','cnr'],['Not suspected: active foot problem steps','gen']]},
    cnr:{end:'refer', title:'Suspected Charcot neuroarthropathy: refer to the orthopaedic surgeons', items:[
      'Charcot neuroarthropathy should be referred to the orthopaedic surgeons for immediate treatment (Recommendation 15, p28)',
      'MRI is useful tools to differentiate CN from osteomyelitis and should be done early in suspected patient (p27)',
      'In acute phase of CN, immobilise the foot using off-loading modalities e.g. crutches, wheelchair and walking frame to reduce oedema and skin temperature (p27)'],
      links:[['#referral-rules--ortho','Orthopaedic referrals']],
      gap:'CPG chapter 7 (p27–28) and Recommendation 15. The CPG does not say how soon immediate is, or give an ESR cut-off. On-call Orthopaedic team or the clinic: not in our sources.'},

    /* Appendix 9, Types of infections in diabetic foot and suggestions of treatment (p50–54), with 5.1c (p19) */
    sev:{q:'How severe is the infection? (Appendix 9)', hint:'Appendix 9 (p50–51), adapted from the National Antibiotic Guideline (2014). The CPG does not define SIRS or say whether a, b and c must all be present; erythema of exactly 2 cm is in neither band.',
      info:['Mild infections: a. Local infection involving skin and subcutaneous tissues; b. Erythema<2 cm around the ulcer; c. No systemic signs','Moderate infections: a. Deep tissue infection; b. Erythema >2 cm around ulcer; c. No Systemic Inflammatory Response Syndrome (SIRS)','Severe infections: All of the above and presence of SIRS'],
      opts:[['Mild','mild'],['Moderate','mod'],['Severe','sevx'],['Necrotising fasciitis','nf'],['Osteomyelitis','om'],['Suppurative wound infection','sup']]},
    mild:{end:'neutral', title:'Mild infection: oral antibiotics', items:[
      'Preferred: Cephalexin 500 mg PO q6h OR Amoxycillin/Clavulanate 625 mg PO q8h',
      'Alternative: Clindamycin 300 - 450 mg PO q8h OR Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h',
      'Duration:1 - 2 weeks. Antibiotics should not be given for >14 days for the treatment of mild soft tissue infection in diabetic foot (p19)'],
      links:[['#diabetic-foot-cpg--ulc','Grade the ulcer (Algorithm B)']],
      gap:'CPG Appendix 9 (p50) and p19. Where to treat depends on the ulcer: Algorithm B gives oral antibiotics and outpatient care for UT IB. The CPG never states that UT IB is a mild infection.'},
    mod:{end:'neutral', title:'Moderate infection: IV antibiotics', items:[
      'Preferred: Ampicillin/Sulbactam 1.5 - 3 g IV q6 - 8h OR Ceftriaxone 1 – 2 g q24h ±Metronidazole 500mg IV q8h',
      'If pseudomonas is suspected: Piperacillin/Tazobactam 4.5 mg IV q6-8h (printed in mg in this row; the severe and necrotising fasciitis rows print 4.5 g)',
      'Alternative: Ciprofloxacin 400 mg IV q8-12h PLUS Clindamycin 600mg IV q8h',
      'Duration: usually 2-4 weeks; modify according to clinical response.',
      'If proven osteomyelitis: at least 4-6 weeks. Shorter duration if the entire infected bone are removed (3 to 5 days may be sufficient).',
      'If antibiotic-resistant organisms are likely, treat as severe infection.'],
      links:[['#diabetic-foot-cpg--sevx','Severe infection'],['#gz-rules--ivab','IV antibiotics when no bed is free']],
      gap:'CPG Appendix 9 (p51). Ceftriaxone is printed without a route. The CPG does not say whether a moderate infection needs admission. The IV antibiotic memo (30 Jun 2026) allows only Augmentin, cefuroxime, ceftriaxone or Unasyn on a chair in the CCA.'},
    sevx:{end:'neutral', title:'Severe infection: IV antibiotics', items:[
      'Preferred: Piperacillin/Tazobactam 4.5 g IV q6-8h',
      'Alternative: Cefepime 1-2g IV q8h',
      'Add Vancomycin 1 g IV q12h if high risk for MRSA',
      'MRSA: Vancomycin 15-20 mg/kg IV q8-12h; alternative Linezolid 600mg IV/PO q12h',
      'Duration of treatment: 4-6 weeks.'],
      links:[['#diabetic-foot-cpg--admx','Refer urgently for admission']],
      gap:'CPG Appendix 9 (p51). Vancomycin is printed two ways: 1 g IV q12h as the add-on, 15-20 mg/kg IV q8-12h for MRSA. No renal dose adjustment, no criteria for SIRS and no definition of high risk for MRSA.'},
    nf:{end:'refer', title:'Necrotising fasciitis: early aggressive surgical debridement', items:[
      'Polymicrobial infections (Primarily occurs in patients who are immunocompromised or have certain chronic diseases e.g. diabetes mellitus): Piperacillin/Tazobactam 4.5 g IV q8h; alternative Cefotaxime 2 g IV q6h PLUS Metronidazole 500 mg IV q8h',
      'Group A streptococcus: Benzylpenicillin 2 – 4 MU IV q4h PLUS Clindamycin 600 - 900 mg IV q8h; alternative Ampicillin/Sulbactam 1.5 g IV q8h PLUS Clindamycin 600 - 900 mg IV q8h',
      'Add Vancomycin 1 g IV q12h if high risk for MRSA',
      'Early aggressive surgical debridement essential',
      'With septicaemia/severe infection refer to ICU guidelines'],
      links:[['#cellulitis','Acute cellulitis (ebook)']],
      gap:'CPG Appendix 9 (p52). No clinical features of necrotising fasciitis, and no surgical team named. The ebook\'s cellulitis pathway admits suspected necrotising fasciitis (bullae, severe pain).'},
    om:{end:'refer', title:'Osteomyelitis', items:[
      'Acute osteomyelitis (Staphylococcus aureus (80%), Group A Streptococcus pyogenes, Rarely gram negative bacilli). No open wound: Cloxacillin 2 g IV q6h. If gram negative bacilli by on gram stain: Ciprofloxacin 400mg IV q24h OR Ceftriaxone 2g IV q24h',
      'Penicillin Allergy: Clindamycin 300-600 mg IV q8h followed by oral therapy (same dose)',
      'Duration: initial IV therapy for 2-4 weeks, followed by oral therapy, to complete minimum of six weeks',
      'Chronic osteomyelitis (After three months of appropriate antibiotic therapy or presence of dead bone on X-ray): Empirical treatment is not indicated; Thorough surgical debridement required (removal of dead bone/ orthopaedic hardware); Minimum length six weeks but usually >3 months'],
      links:[['#diabetic-foot-cpg--urg','Deep-seated bone infection: refer urgently']],
      gap:'CPG Appendix 9 (p53) and chapter 3 (p10). The acute regimen is printed for no open wound; under an ulcer the CPG gives only the moderate-infection duration (at least 4-6 weeks, p51). Ciprofloxacin is printed q24h here and q8-12h on p51. Imaging: the Assessment tab.'},
    sup:{end:'neutral', title:'Suppurative wound infection', items:[
      'If there is surrounding cellulitis and/or presence of systemic symptoms: Cloxacillin 500 mg PO/IV q6h',
      'If gram negative organisms suspected or known to be involved: Gentamicin 5 mg/kg IV q24h OR As a monotherapy: Cefuroxime 1.5 g IV q8h',
      'Change antibiotics accordingly after C&S result is available',
      'Topical antibiotics are not recommended for treatment of wound infections as they may result in the emergence of resistant organisms',
      'Patient\'s tetanus immunisation status should be assessed in all cases'],
      gap:'CPG Appendix 9 (p54). It does not say whether gentamicin is given with cloxacillin, and gives no tetanus regimen. Section 5.1 (p18) lists seven topical antibiotics that may be used in diabetic foot.'},

    /* 5.2 Wound management (p19–25), Recommendations 8, 9 and 14, Appendices 6 and 10 */
    home:{end:'discharge', title:'Going home: wound care, off-loading and foot care advice', items:[
      'Basic wound contact dressing is the minimal dressing for diabetic ulcer in the absence of advanced wound dressings. It uses gauze with or without paraffin coating (p19). Review interval: daily (Appendix 10, p55)',
      'NICE guidelines recommend that debridement of DFU in either hospital or community should only be done by healthcare professionals with relevant training and skills (p23)',
      'Off-loading should be offered to patients with plantar diabetic foot ulcer (Recommendation 14, p25). Other available off-loading options include use of assistive devices e.g. crutches, wheelchair, walking frames and canes (p24)',
      'Appropriate analgesia should be considered in painful diabetic foot (Recommendation 8, p19)',
      'Urgent care is needed when there is presence of pain, noticeably red or discoloured areas, unusually hot areas, discharges, bad smell, an ulcer or blister or if feeling generally unwell with difficulty controlling sugar levels (Appendix 6, p43): the Discharge advice tab'],
      links:[['#pain','Analgesia doses (ebook)'],['#em-watch','EM Watch'],['#emacc','EMACC follow-up']],
      gap:'CPG 5.2 (p19–25), Appendices 6 and 10. No follow-up interval for an active problem treated as an outpatient, and no analgesic doses. Advanced dressings: the Wound care tab. The ebook\'s cellulitis follow-up is EM Watch, EMACC, PC clinic or KK.'},

    /* Algorithm A, Screening of diabetic foot (p x), Table 1 (p8), Table 2 (p10), chapter 6 (p26) */
    hi:{check:'any', q:'No active problem. High risk?', hint:'Table 1 (p8). Algorithm A (p x) asks only about previous ulceration, amputation or renal replacement therapy; Table 1 also counts the three combinations below.',
      items:['Previous ulceration','Previous amputation','On renal replacement therapy','Neuropathy and non-critical limb ischaemia','Neuropathy with callus and/or deformity','Non-critical limb ischaemia with callus and/or deformity'],
      opts:[['Yes, present','high'],['None','md']]},
    md:{check:'any', q:'Moderate risk?', hint:'Table 1 (p8): any of the following.', items:['Deformity','Neuropathy','Non-critical limb ischaemia'], opts:[['Yes, present','modr'],['None','lw']]},
    lw:{q:'Callus?', hint:'Table 1 (p8): low risk is callus alone; normal is no abnormalities.', opts:[['Callus alone: low risk','low'],['No abnormalities: normal','norm']]},
    high:{end:'refer', title:'High risk: early referral within two weeks to foot protection services', items:[
      'High risk: Early referral within two weeks to foot protection services (Table 2, p10)',
      'Monitoring (chapter 6, p26): no immediate concern, 1 - 2 months; immediate concern, 1 - 2 weeks',
      'Patient education should be an integral part in the management of diabetic foot at least annually and more frequent in higher risk patients (Recommendation 4, p12)'],
      gap:'CPG Tables 1 and 2, Algorithm A and chapter 6. Footwear: the Foot care tab. The CPG does not define immediate concern. HKL\'s route to Foot Protection Services: still to confirm.'},
    modr:{end:'refer', title:'Moderate risk: referral within three months to foot protection services', items:[
      'Moderate risk: Referral within three months to foot protection services (Table 2, p10)',
      'Monitoring: 3 - 6 months (chapter 6, p26)'],
      gap:'CPG Tables 1 and 2, Algorithm A and chapter 6. HKL\'s route to Foot Protection Services: still to confirm.'},
    low:{end:'discharge', title:'Low risk (callus alone): total contact insole, foot care education, yearly screening', items:[
      'Algorithm A (p x): total contact insole; foot care education; yearly screening',
      'Normal/Low risk: No referral needed. Yearly review at primary care (Table 2, p10)',
      'Never self-treat corns or calluses. No "bathroom surgery" or medicated pads. Visit your clinic for appropriate treatment (Appendix 6, p43)'],
      gap:'CPG Algorithm A, Table 2 and Appendix 6. Monitoring: annually (chapter 6, p26).'},
    norm:{end:'discharge', title:'Normal findings: foot care education and yearly screening', items:[
      'Algorithm A (p x): foot care education; yearly screening',
      'Normal/Low risk: No referral needed. Yearly review at primary care (Table 2, p10)'],
      gap:'CPG Algorithm A and Table 2.'}
  },

  /* Appendix 6, Patient education for foot care (p42–43): English only, as printed. Quotation marks and apostrophes made plain. */
  advice:[
    'Take proper care of diabetes by taking medications, following diet plan, exercising regularly, monitoring blood sugar regularly and attending appointments with the doctors. Ensure HbA1c, blood pressure, cholesterol and weight are under control.',
    'Do not smoke as it restricts blood flow in the feet. Get help in smoking cessation if necessary.',
    'Check feet every day in a brightly lit space looking at the top and bottom of the feet, heels, and between each toe. Check for cuts, blisters, redness, swelling or nail problems. Use a magnifying hand mirror to look at the bottom of feet or ask someone else to check it.',
    'Keep feet clean by washing them daily with a mild soap. Use only lukewarm (below 37°C) and not hot water. Do not soak feet as this can cause dry skin. Dry by blotting or patting and carefully dry between the toes.',
    'Keep skin soft and smooth by moisturising feet but not between the toes. Use a moisturiser daily to keep dry skin from itching or cracking over the dry areas – usually the top, the heel area and the soles. Massage the cream using small circular movements. But don\'t moisturise between the toes which could risk an infection to occur.',
    'Cut toenails carefully after washing and drying feet. Cut them straight across and file the sharp edges. Don\'t cut nails too short, as this could lead to ingrown toenails.',
    'Never self-treat corns or calluses. No "bathroom surgery" or medicated pads. Visit your clinic for appropriate treatment.',
    'Wear clean, dry socks that are not too tight and are light coloured. Change socks daily. Make sure there are no holes. Consider socks made specifically for patients with diabetes with extra cushioning, no elastic tops, higher than the ankle and are made from fibers that wick moisture away from the skin. Avoid socks that have seams as they can cause rubbing or irritation leading to a blister or callus.',
    'Keep feet warm and dry and, protect feet from hot and cold temperatures. Wear shoes at the beach or on hot pavements to protect feet from getting burnt. Don\'t put feet into hot water. Never use hot water bottles, heating pads or electric blankets as these can cause burns.',
    'Never walk barefoot indoors or outdoors. Always wear appropriate shoes or slippers to avoid cuts or scratches over feet. Avoid shoes with narrow box, high heels, stilettos or footwear that have straps with no back support. Shake out shoes and feel the inside before wearing.',
    'Put feet up when sitting. Keep the blood flowing to feet by wiggling toes and moving ankles for five minutes, 2 - 3 times a day. Don\'t cross legs for long periods of time.',
    'Exercise regularly to improve circulation and balance and, reduce the risk of falling. Wear athletic shoes that give support and are made for specific activities.',
    'Periodic foot examinations are necessary when visiting diabetes clinics. Get sense of feeling and pulses checked at least once a year.',
    'Seek treatment if there is presence of calluses or ingrown toenails. Urgent care is needed when there is presence of pain, noticeably red or discoloured areas, unusually hot areas, discharges, bad smell, an ulcer or blister or if feeling generally unwell with difficulty controlling sugar levels.'],

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Classification', notes:[
      {h:'University of Texas classification of diabetic foot', src:'CPG Appendix 5 (p41) and the table under Algorithm B (p xi), from Lavery, Armstrong and Harkless (1996). University of Texas Classification is the preferred classification for diabetic foot (Recommendation 2, p9).', table:{head:['','Grade 0','Grade I','Grade II','Grade III'], rows:[
        ['Stage A','Pre- or post-ulcerative lesion completely epithelialised','Superficial wound, not involving tendon, capsule or bone','Wound penetrating to tendon or capsule','Wound penetrating to bone or joint'],
        ['Stage B','With infection','With infection','With infection','With infection'],
        ['Stage C','With ischaemia','With ischaemia','With ischaemia','With ischaemia'],
        ['Stage D','With infection and ischaemia','With infection and ischaemia','With infection and ischaemia','With infection and ischaemia']]}},
      {h:'Algorithm B: active foot problems', src:'CPG p xi. *Refer urgently for admission if patients present with general illness (e.g. sepsis or diabetic emergencies) irrespective of foot problems.', table:{head:['Active foot problem*','Algorithm B'], rows:[
        ['Without ulcer (UT 0)','Manage as outpatient by Foot Protection Services'],
        ['With ulcer: superficial (UT IA)','Manage as outpatient by Foot Protection Services'],
        ['Infection: superficial ulcer not requiring surgical intervention (UT IB)','Oral antibiotics, then manage as outpatient by Foot Protection Services'],
        ['Infection: deep ulcer requiring surgical intervention (UT IIB/IIIB)','Refer Multidisciplinary Foot Care Team'],
        ['Ischaemia (pulses not palpable) (UT IC/IIC/IIIC)','Refer Multidisciplinary Foot Care Team'],
        ['Infection and ischaemia (UT ID/IID/IIID)','Refer Multidisciplinary Foot Care Team'],
        ['UT IIA or IIIA','No box in Algorithm B']]}},
      {h:'Table 1: diabetic foot risk stratification', src:'CPG p8, from NICE (2015). Patients with active diabetic foot problem should be referred urgently and seen within 24 hours in secondary/tertiary care (p8).', table:{head:['Diabetic foot risk','Findings'], rows:[
        ['Normal','No abnormalities'],
        ['Low Risk','Callus alone'],
        ['Moderate Risk','Any of the following: deformity; neuropathy; non-critical limb ischaemia'],
        ['High Risk','One of the following: previous ulceration; previous amputation; on renal replacement therapy; neuropathy and non-critical limb ischaemia; neuropathy with callus and/or deformity; non-critical limb ischaemia with callus and/or deformity'],
        ['Active Diabetic Foot Problem','Any of the following: ulceration; infection; critical limb ischaemia; gangrene; suspicion of an acute Charcot neuroarthropathy, or an unexplained hot, red, swollen foot with or without pain']]}},
      {h:'Where the CPG words it differently', src:'Each is quoted as printed, with its page.', items:[
        'Where an active problem goes: outpatient care by Foot Protection Services for UT 0, IA and IB (Algorithm B, p xi); "Urgent referral within 24 hours to multidisciplinary foot care team" (Table 2, p10); "referred urgently and seen within 24 hours in secondary/tertiary care" (p8)',
        'Ischaemia: "pulses not palpable" (Algorithm B); critical limb ischaemia, "rest pain with ulcers or tissue loss attributed to arterial occlusive disease" (p6); PAD excluded when ABI is 0.9 - 1.3, toe brachial index is ≥0.75 or there are triphasic pedal Doppler arterial waveforms (p4)',
        'Capillary refill: "(>2 seconds)" (p5); "Capillary refill >3 seconds" (Appendix 4, p40)',
        'Topical antibiotics: seven "may be used in diabetic foot" (p18); "not recommended for treatment of wound infections" (Appendix 9, p54)']}
    ]},
    {l:'Antibiotics', notes:[
      {h:'Principles', src:'CPG 5.1c and Recommendation 8 (p19). Necrotising fasciitis, osteomyelitis and suppurative wound infections (p52–54) are in the Infected foot steps.', items:[
        'Antibiotics should not be used unless there are local or systemic symptoms of infection. Local treatment including surgical debridement is important to be considered as part of the management. Antibiotic used for treatment should be based on the most recent culture and sensitivity (C&S) report.',
        'If more than one regimen is appropriate, regimen with lowest cost should be selected. For moderate and severe infections, broad spectrum antibiotics are used initially until C&S results are available.',
        'Antibiotics should not be given for: prevention of infections in diabetic foot; >14 days for the treatment of mild soft tissue infection in diabetic foot.',
        'Antibiotics should be used as an adjunct to surgical debridement in infected diabetic foot (Recommendation 8).']},
      {h:'Appendix 9.1: diabetic foot infection', src:'CPG p50–51, adapted from the National Antibiotic Guideline, 2nd edition (MoH, 2014). The moderate row prints piperacillin/tazobactam in mg; it is quoted as printed.', table:{head:['Infection','Preferred','Alternative','Comments'], rows:[
        ['Mild: a. Local infection involving skin and subcutaneous tissues; b. Erythema<2 cm around the ulcer; c. No systemic signs','Cephalexin 500 mg PO q6h OR Amoxycillin/Clavulanate 625 mg PO q8h','Clindamycin 300 - 450 mg PO q8h OR Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h','Duration:1 - 2 weeks'],
        ['Moderate: a. Deep tissue infection; b. Erythema >2 cm around ulcer; c. No Systemic Inflammatory Response Syndrome (SIRS)','Ampicillin/Sulbactam 1.5 - 3 g IV q6 - 8h OR Ceftriaxone 1 – 2 g q24h ±Metronidazole 500mg IV q8h. If pseudomonas is suspected: Piperacillin/Tazobactam 4.5 mg IV q6-8h','Ciprofloxacin 400 mg IV q8-12h PLUS Clindamycin 600mg IV q8h','Duration: usually 2-4 weeks; modify according to clinical response. If proven osteomyelitis: at least 4-6 weeks. Shorter duration if the entire infected bone are removed (3 to 5 days may be sufficient). If antibiotic-resistant organisms are likely, treat as severe infection.'],
        ['Severe: All of the above and presence of SIRS','Piperacillin/Tazobactam 4.5 g IV q6-8h','Cefepime 1-2g IV q8h','Add Vancomycin 1 g IV q12h if high risk for MRSA. Duration of treatment: 4-6 weeks.'],
        ['MRSA','Vancomycin 15-20 mg/kg IV q8-12h','Linezolid 600mg IV/PO q12h','']]}},
      {h:'Topical antimicrobials', src:'CPG 5.1b (p17–18). Appendix 9 (p54) does not recommend topical antibiotics for wound infections.', items:[
        'Iodine dressing is commonly used in infected wound in the local setting. Although there is no recent evidence on chlorhexidine, it has been widely used as wound antiseptics locally.',
        'The following topical antibiotics may be used in diabetic foot: bacitracin C; metronidazole; neomycin; fusidic acid; mupirocin; silver sulphadiazine; gentamicin.']}
    ]},
    {l:'Assessment', notes:[
      {h:'Examination', src:'CPG 2.2 (p5–6)', items:[
        'Skin changes due to vascular insufficiency such as skin atrophy, nail atrophy, diminished pedal hair, prolonged capillary refill time (>2 seconds) and reduced skin temperature are important to be looked for during skin assessment.',
        'Vascular assessment includes mandatory palpation of the femoral, popliteal, posterior tibial and dorsalis pedis artery pulses.',
        'Probe-to-bone test: exploring the wound for palpable bone with a sterile blunt metal probe. A positive test is defined as palpating a hard or gritty substance that is presumed to be bone or joint space. It has a sensitivity and specificity of 87% and 83% respectively.']},
      {h:'Neuropathy and arterial disease', src:'CPG 2.1 (p2–4), Recommendation 1 (p5) and Appendices 3 and 4 (p38–40)', items:[
        'The examination uses a 5.07/10-g monofilament. Inability to sense the touch/pressure indicates loss of protective sensation (LOPS). Neuropathy should be assessed with 10-g monofilament and one other modality (e.g. pin prick, vibration sense with 128-Hz tuning fork, etc.).',
        'Appendix 3 marks ten monofilament sites; the assessment form prints "Abnormal monofilament test ( >3/10 )" (Appendix 4, p40).',
        'Palpation of foot pulses should be the initial screening method for PAD. PAD can be excluded when: ankle brachial index (ABI) is 0.9 - 1.3; toe brachial index is ≥0.75; there is presence of triphasic pedal Doppler arterial waveforms (PDAW).',
        'The results of ABI may be misleading due to calcification of the arteries which give higher pressure ratio. On the assessment form: use either DPA or PTA whichever higher (Appendix 4).']},
      {h:'Tests and imaging', src:'CPG 2.3 (p6–7)', items:[
        'There is no evidence on laboratory investigation in supporting the diagnosis of diabetic foot except in active infection. The CPG lists no blood tests.',
        'Conventional radiography is the initial imaging modality for diabetic foot. Possible findings are osteolysis, arterial calcification, gas shadow, malalignment and peri-articular fragmentation.',
        'Features of osteomyelitis may not be visualised in plain radiographs until 10 - 21 days after the initial infection.',
        'It is important to note that osteomyelitis may be present in a person with diabetes mellitus despite normal inflammatory markers, plain radiographs or probe-to-bone testing.',
        'Magnetic resonance imaging (MRI) is the primary imaging modality for investigating infection in diabetic foot. In the diagnosis of osteomyelitis, MRI can be considered when it is not detected by plain radiograph.']}
    ]},
    {l:'Wound care', notes:[
      {h:'Dressings', src:'CPG 5.2a (p19–20) and Recommendation 9 (p20)', items:[
        'Advanced wound dressings are used for dry, sloughy and/or wet wound. Silver-impregnated dressings should be reserved for use in wounds with or at risk of high bioburden or local infection.',
        'Healthcare providers may consider the cost of dressings and patient\'s preference when choosing the type of dressings for the patients.']},
      {h:'Appendix 10: types of wound dressing', src:'CPG p55–56, adapted from the MoH Wound Care Manual (2014). The advantages and disadvantages columns are left out. Others (collagen, matrix and regenerative dressings): not widely used.', table:{head:['Dressing','Indications','Contraindications','Review intervals'], rows:[
        ['Gauze/basic absorbent with paraffin or similar (antiseptics or antibiotics)','All wounds','Allergy','Daily'],
        ['Hydrogel','Sloughy wound; dry wounds','Highly exudative wounds; allergy','1 - 2 days'],
        ['Alginate','Moderately or highly exudative wounds; need for haemostasis','Dry wounds; allergy','2 - 3 days'],
        ['Hydrofibre','Moderately or highly exudative wounds','Allergy','2 - 5 days'],
        ['Foam','Moderately or highly exudative wounds','Dry wounds; wounds that need frequent review','2 - 3 days'],
        ['Hydrocolloid','Mildly to moderately exudative wounds','Dry wounds; infection; highly exudative wounds','2 - 3 days'],
        ['Silver','Infective wounds','Allergy','3 - 5 days']]}},
      {h:'Debridement and off-loading', src:'CPG 5.2b–c (p23–25), Recommendations 12 and 14', items:[
        'Debridement is a process of removing necrotic or foreign tissue from a wound to promote healing. There are three common types of debridement which are autolytic, mechanical and sharp (surgical).',
        'Non-removable off-loading devices are more effective in healing DFUs compared with removable devices. All patients with diabetic foot who has amputation should be referred for rehabilitation (Recommendation 14).']}
    ]},
    {l:'Referral and follow-up', notes:[
      {h:'Table 2: recommended referral schedule', src:'CPG p10. Refer to Table 1 on diabetic foot risk stratification.', table:{head:['Risk','Referral'], rows:[
        ['Normal/Low risk','No referral needed. Yearly review at primary care'],
        ['Moderate risk','Referral within three months to foot protection services'],
        ['High risk','Early referral within two weeks to foot protection services'],
        ['Active','Urgent referral within 24 hours to multidisciplinary foot care team']]}},
      {h:'Foot protection team and multidisciplinary foot care team', src:'CPG 3.1 and 3.2 (p10–11), Recommendation 3 (p11)', items:[
        'Foot protection team should be led by a Family Medicine Specialist or physician with special training in diabetic foot problems.',
        'The multidisciplinary foot care team in the hospital is led by the orthopaedic surgeon and/or physician. Subsequent referral to other specialty is made according to the main problem presented by the patient.',
        'Active or complicated diabetic foot problems should be preferably managed by a multidisciplinary foot care team (Recommendation 3).']},
      {h:'Monitoring and follow-up', src:'CPG chapter 6 (p26), modified from NICE (2015)', table:{head:['Risk','Frequency'], rows:[
        ['Low Risk','Annually'],['Moderate Risk','3 - 6 months'],['High Risk, no immediate concern','1 - 2 months'],['High Risk, immediate concern','1 - 2 weeks']]}}
    ]},
    {l:'Foot care', notes:[
      {h:'Footwear', src:'CPG 4.3 and Table 4 (p14), Appendix 7 (p45)', items:[
        'Patients and caregivers should be educated on the appropriate footwear (covered shoes with breathable material) to prevent foot ulceration. It is not advisable to wear thong slippers or shoes with toe box which is too tight or too loose.',
        'Foot ulceration: prescribe appropriate off-loading devices for ulcer healing (Table 4).',
        'Features of an ideal footwear for diabetic foot at risk: firm heel counter; insole; breathable material; rocker bottom; outsole; spacious toe box; seamless interior; laced shoe or velcro closure.']},
      {h:'Foot care education checklist', src:'CPG Appendix 4 (p40). The patient wording is in the Discharge advice tab.', items:[
        'Foot hygiene; nail care; foot wear advice; routine foot check; emollient use; wound care; recognising active foot problems (e.g. infection/erythema/ulcer); things to avoid (e.g. massage/soak/reflexology/self-treatment).']},
      {h:'Pain', src:'CPG 5.1a (p17) and Recommendation 8 (p19). The CPG gives no doses for these; the ebook\'s pain pathway has them. Neuropathic pain drugs are in Appendix 8 (p46–49).', items:[
        'For mild to moderate pain, the WHO analgesic ladder recommends using simple analgesics (e.g. paracetamol or non-steroidal anti-inflammatory drugs). Additional weak opioids (e.g. tramadol or dihydrocodeine) should be considered in moderate pain. Strong opioids (e.g. morphine) should be offered to patients with moderate to severe pain.',
        'In neuropathic pain, adjuvants are used at all steps of the analgesic ladder. Examples of the adjuvants are antidepressant (e.g. amitriptyline or duloxetine) and anticonvulsant (e.g. gabapentin or pregabalin).']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Diabetic Foot (Second Edition). Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2018. MOH/P/PAK/411.18(GU)-e. ISBN 978-967-2173-61-8. Available at http://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'As the CPG credits them: Table 1 and the monitoring table from NICE, Diabetic Foot Problems (2015); Appendix 5 from Lavery LA, Armstrong DG, Harkless LB, J Foot Ankle Surg 1996;35(6):528-531; Appendix 6 modified from JKWPKL&P, Panduan Penjagaan Kaki Bagi Pesakit Diabetes (2012, unpublished); Appendix 9 adapted from the National Antibiotic Guideline, 2nd edition (MoH, 2014); Appendix 10 adapted from the MoH Wound Care Manual (2014).'],
  see:[['#cellulitis','Acute cellulitis (ebook pathway)'],['#mau-admission','Admission to MAU (diabetic foot ulcer is on its list)'],['#referral-rules--med','Admission to General Medicine'],['#pain','Pain (ebook): analgesia doses']]
};

/* The ebook's cellulitis pathway points to the national guideline (a link only: its content stays as written) */
P['cellulitis'].see = [...(P['cellulitis'].see || []), ['#diabetic-foot-cpg', 'Diabetic foot CPG, 2nd edition (2018)']];

/* ----- CPG Management of Foreign Body Ingestion in Children (MaHTAS, 2025), for patients ≤18 years old (p iii) -----
   Printed page = PDF page minus 20; front matter = PDF page minus 4 (Algorithms 1 to 6 are p xi to xvi). The algorithms and
   the tables on p10–12, p24 and p46–61 have no text layer: read from page images. Food bolus, corrosive and inhaled objects are
   outside the CPG (p iii). Advice is printed in English only: no leaflet. Quoted as printed; apostrophes are plain. The
   department's step (P['children'], node fb) stays as written: the differences are in CPG-REVIEW-FB-CHILDREN.md. */
P['fb-children-cpg'] = {
  title:'Swallowed foreign body in children: CPG 2025', grp:'cpg', src:'CPG Foreign Body Ingestion in Children (2025)', isnew:true, hero:'fbcpg',
  lead:'The national guideline (2025) for children up to 18: red flags first, then the first X-ray, then what to do for each kind of object and where it lies, with the times for endoscopy. Admission, discharge, follow-up and imaging are in the steps and tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Foreign Body Ingestion in Children (MaHTAS, 2025), for patients ≤18 years old. Printed page numbers; the algorithms are p xi to xvi.', opts:[
      ['Swallowed something: triage and first X-ray (Algorithm 1)','rf'],
      ['Button battery (Algorithm 2)','bb'],
      ['Magnets (Algorithms 4 and 5)','mag'],
      ['Sharp object (Algorithm 3)','sh'],
      ['Coin, blunt object or cylindrical battery (Algorithm 5)','bl'],
      ['Water beads or other superabsorbent polymer (Algorithm 6)','sap'],
      ['Admit, observe or home? (4.1 and Recommendation 4)','adm'],
      ['Food bolus, corrosive or inhaled object','excl']]},

    /* Algorithm 1, Initial management (p xi), with chapter 2, Triage (p3–4) */
    rf:{check:'any', q:'Red flag features?', hint:'Algorithm 1 (p xi). Danger signs should be identified to determine the triage categories (Recommendation 1, p4). The DG\'s categories (p4):',
      info:['Critical: drooling, stridor, hemodynamic instability, or suspected button battery ingestion','Acute: tachypnoea, wheezing, chest wall recession, tachycardia, dysphagia or chest pain','Urgent: history of choking episodes now back to baseline'],
      items:['Stridor, actively choking','Drooling','Wheeze or increased work of breathing','Tachycardia/appears unwell or pale','Hemodynamic instability','Haematemesis or malaena','Suspected button battery ingestion'],
      opts:[['Yes, present','crit'],['None','hr']]},
    crit:{end:'refer', title:'Triage to resuscitation/critical care area', items:[
      'Resuscitation & stabilisation of patient',
      'Inform In-House Specialist if available',
      'Immediate referral to ENT/ Paediatric Surgery or General Surgery/ Gastroenterology/ Anesthesiology/ICU if indicated',
      'Immediate imaging if available',
      'Button battery: the administration of honey should not delay the referral or transfer of the patient (p18)'],
      links:[['#fb-children-cpg--bb','Button battery (Algorithm 2)'],['#fb-children-cpg--honey','Honey while waiting']],
      gap:'CPG Algorithm 1 (p xi) and chapter 2 (p3–4). The CPG names an area, not an MTS level or zone. Algorithm 2 starts from a confirmed battery: the CPG does not say what to do when a suspected battery is not seen, beyond that the radiograph must include the entire neck, chest and abdomen (p9).'},
    hr:{check:'any', q:'High risk foreign body, or a child at high risk of impaction or obstruction?', hint:'Section 3.1 (p6), the red flags of the Royal Children\'s Hospital Melbourne guideline, to which Algorithm 1 refers. The algorithm asks this before the X-ray.',
      items:['Button battery lodged in oesophagus','Magnet + metal object or >1 magnet','Sharp objects in the oesophagus e.g. fish bone, pins or needles','Lead-based objects that fail to transit through the stomach','Large objects (>60 mm long and/or >20 mm wide)','Expandable foreign bodies e.g. superabsorbent polymers (water beads, expandable toys)','Multi-component objects e.g. toys with lights, motors and batteries','Objects impacted in the oropharynx require urgent ENT evaluation','Child with pre-existing gastrointestinal tract abnormalities (e.g. strictures) or congenital malformations (repaired or unrepaired)','Child with eosinophilic oesophagitis','Child with neuromuscular disease'],
      opts:[['Yes, present','urg'],['None','ro']]},
    ro:{q:'Foreign body likely to be radio-opaque? (From history)', hint:'Algorithm 1 (p xi). Overall sensitivity of CXR: 100% for coins; 56% for non-coin foreign bodies; 80% for non-coin metallic objects; 33% for fish and chicken bones (p7).', opts:[['Yes','xr'],['No','urg']]},
    xr:{step:'Initial X-ray (Neck AP and lateral, chest AP, abdomen AP)', items:[
      'Plain radiographs should be the first-line imaging modality for most foreign body ingestion in children (Recommendation 2, p13)',
      'Button battery: AP view, "double halo" sign; lateral view, "step-off" sign (help distinguish a BB from regular coins) (p10, Figure 1)',
      'Two-view (AP and lateral) radiographs are paramount to diagnose button battery ingestion and confirm its location; the radiograph must include the entire neck, chest and abdomen to ensure no button battery is missed (ESPGHAN, p9)'], next:'seen'},
    seen:{q:'Foreign body seen?', hint:'Algorithm 1 (p xi).', opts:[['Yes','urg'],['No','sym']]},
    sym:{q:'Symptomatic?', hint:'Algorithm 1 (p xi). Common presenting symptoms: gagging, choking, coughing; vomiting, drooling, dysphagia, odynophagia, globus sensation (p5). In those unable to provide reliable history (younger patients and those with mental impairment) with these symptoms, suspect oesophageal foreign body ingestion (p6).', opts:[['Yes','urg'],['No','home1']]},
    urg:{end:'refer', title:'Urgent referral to Paediatric Surgery/General Surgery/ENT/ Gastroenterology', items:[
      'Refer algorithms for management of specific type of foreign body ingestion (Algorithm 1)',
      'Indications for consultations/referrals (chapter 4, p16): symptomatic foreign body ingestion; suspected/unwitnessed foreign body ingestion; all suspected or confirmed button battery ingestion; failure of foreign body passage on follow-up; complications resulting from foreign body ingestion',
      'In cases suspected child abuse / criminal intent, referral to SCAN (Suspected Child Abuse and Neglect) or OSCC (One Stop Crisis Centre) is required (p16)'],
      links:[['#fb-children-cpg--bb','Button battery'],['#fb-children-cpg--mag','Magnets'],['#fb-children-cpg--sh','Sharp object'],['#fb-children-cpg--bl','Coin or blunt object'],['#fb-children-cpg--sap','Superabsorbent polymer'],['#oscc--child','Suspected child abuse']],
      gap:'CPG Algorithm 1 (p xi) and chapter 4 (p16). The object algorithms send some asymptomatic children home; the CPG does not say whether the ED or the specialist applies them. Its emergent, urgent and elective times are for endoscopy (p4), not referral.'},
    home1:{end:'discharge', title:'Discharge with advice', items:[
      'Caregivers of children with foreign body ingestion should be advised to seek urgent medical attention if any of the following symptoms are present: respiratory distress; abdominal pain or distension; persistent vomiting; fever; inability to tolerate oral intake; gastrointestinal bleeding (e.g., haematemesis or melaena) (Recommendation 5, p31)'],
      links:[['#fb-children-cpg--dc','Discharge criteria (Recommendation 4)']],
      gap:'CPG Algorithm 1 (p xi) and Recommendations 4 and 5 (p29–31). Chapter 4 (p16) lists suspected/unwitnessed ingestion among the indications for referral, yet Algorithm 1 sends this child home, with no follow-up.'},

    /* Algorithm 2, Button battery (p xii), Recommendation 3 (p25), 5.1 Adjunct treatment (p18) */
    bb:{q:'Confirmed button battery: where is it, and is the child symptomatic?', hint:'Algorithm 2 (p xii). Imaging: in chest, plain chest X-ray (AP & lateral); in abdomen, plain abdominal X-ray (AP supine) (p13). Emergent: <2 hours from presentation, regardless of Nil Per Oral [NPO]. Urgent: ≤24 hours from presentation, following usual NPO guidelines (p4).',
      opts:[['Oesophagus','bboes'],['Stomach or duodenum, symptomatic','emerg'],['Stomach or duodenum, asymptomatic','bbage'],['Beyond the duodenum, symptomatic','sxbd'],['Beyond the duodenum, asymptomatic','bbbda'],['Honey while waiting for endoscopy (5.1)','honey']]},
    bboes:{end:'refer', title:'Emergent endoscopic removal', items:[
      'Emergent: <2 hours from presentation, regardless of Nil Per Oral [NPO] (Algorithm 2, p xii)',
      'Endoscopic removal should be done for all foreign body ingestion in children lodged in oesophagus, regardless of symptoms (Recommendation 3, p25)',
      'Mitigation strategies using honey can be considered in specific cases while waiting for endoscopy; the administration of honey should not delay the referral or transfer of the patient (ESPGHAN, p18)',
      'Audit indicator: button battery removal from the oesophagus within 2 hours of arrival to referral centre; target of 60% (p38)',
      'After removal (Algorithm 2): oesophageal mucosal injury or perforation, consider bronchoscopy'],
      links:[['#fb-children-cpg--honey','Honey while waiting']],
      gap:'CPG Algorithm 2 (p xii), Recommendation 3 (p25), 5.1 (p18) and 8.3 (p38). Referral decisions need to be made to the appropriate specialty based on the availability of the resources at local settings (p16).'},
    bbage:{check:'any', q:'Child aged <5 years, or button battery ≥20 mm in diameter?', hint:'Recommendation 3 (p25), for asymptomatic children with a button battery in the stomach; Algorithm 2 prints: Age <5 years old and/or BB ≥20mm. The CPG gives no rule for a battery of unknown size.',
      items:['Child aged <5 years','Button battery ≥20 mm in diameter'],
      opts:[['Yes, either','bburg'],['Neither: aged ≥5 years, battery <20 mm','bbfu']]},
    bburg:{end:'refer', title:'Urgent endoscopic removal within 24 hours', items:[
      'Urgent endoscopic removal within 24 hours should be done for all asymptomatic children with button battery in the stomach if: child aged <5 years, OR button battery ≥20 mm in diameter (Recommendation 3, p25)',
      'Urgent: ≤24 hours from presentation, following usual NPO guidelines (p4)',
      'Endoscopic removal of gastric button battery ingestion within 12 hours can be considered regardless of symptoms or age group, given the risk of gastric mucosal damage (p22)'],
      gap:'CPG Recommendation 3 (p25), Algorithm 2 (p xii) and p22. Recommendation 3 says stomach; Algorithm 2 and the treatment table say stomach & duodenum. The NASPGHAN table the CPG quotes prints, for ≥5 yrs old and BB >20 mm, repeat X-ray in 48 hours (p10).'},
    bbfu:{end:'discharge', title:'Discharge with follow-up X-ray at 10 - 14 days', items:[
      'In asymptomatic children aged ≥5 years with <20 mm button battery in the stomach, repeat abdominal X-ray at 10 - 14 days. If the button battery is still in the stomach, endoscopic removal should be done (Recommendation 3, p25)',
      'Outpatient observation may be considered in asymptomatic cases with button batteries in the stomach, provided: no history of prior oesophageal disease; no co-ingestion with magnet; reliable follow-up is ensured (National Button Battery Task Force, p28)',
      'Button battery ingestion: hospital admission should be considered for patients who face difficulties accessing healthcare facilities (5.2, p19)'],
      links:[['#fb-children-cpg--dc','Discharge criteria and advice']],
      gap:'CPG Algorithm 2 (p xii), Recommendations 3 and 6 (p25, p33). The treatment table (p24) calls this observation. The CPG does not say whether 10 - 14 days counts from ingestion or presentation; it also quotes 7 - 14 days (ESPGHAN, p9) and retrieval if in the stomach >48 hours (p32).'},
    bbbda:{end:'discharge', title:'Allow spontaneous passage, discharge home with advice', items:[
      'Beyond duodenum, not symptomatic (Algorithm 2, p xii)',
      'Once the button battery has passed beyond the oesophagus, and patients are asymptomatic at diagnosis, these patients can be discharged safely with outpatient follow-up (ESPGHAN, p28)',
      'Follow-up AXR should be performed after 7 - 14 days to confirm passage unless parents have observed its passage in the stools (ESPGHAN, p32)'],
      links:[['#fb-children-cpg--dc','Discharge criteria and advice']],
      gap:'CPG Algorithm 2 (p xii) and 6.1 to 6.2 (p28–33). Algorithm 2 sets no age or size here; Recommendation 4 (p29) names only children ≥5 years of age with <20 mm button battery beyond the oesophagus for discharge. The DG says stool monitoring is not required to confirm passage (p33).'},
    honey:{end:'neutral', title:'Honey while waiting for endoscopy (button battery)', items:[
      'Mitigation strategies using honey can be considered in specific cases while waiting for endoscopy',
      'The administration of honey should not delay the referral or transfer of the patient',
      'Honey should be administered in 10 mL doses (2 teaspoons) every 10 minutes with a maximum of six doses',
      'The indications to administer honey immediately (provided it is readily available): a lithium button battery may have been ingested (if unknown type, assume it is a lithium button battery unless it is a hearing aid battery); child is ≥12 months of age; battery has been swallowed within 12 hours; child is able to swallow'],
      gap:'CPG 5.1 (p18): ESPGHAN\'s advice and the National Capital Poison Center\'s indications, as the CPG quotes them. The CPG makes no recommendation of its own on honey and does not say whether all four indications must apply.'},

    /* Magnets: Algorithm 4 (p xiv), Algorithm 5 for a single magnet (p xv), p8, p16, p28 */
    mag:{q:'Magnets: which?', hint:'Chest and abdominal radiographs [in supine anteroposterior (AP) view] to assess both the number and location of magnets (p8). Rare earth magnets are between five and ten times stronger than ceramic magnets (p8).',
      opts:[['Single magnet (Algorithm 5)','smag'],['Multiple magnets (Algorithm 4)','mm'],['A magnet plus another metallic object','magmet']]},
    smag:{step:'Single magnet: confirm it is single, then Algorithm 5', items:[
      'In case of a single magnet being identified on frontal/AP view abdominal radiograph (AXR), a lateral view should also be requested to confirm that only a single magnet was ingested (p8)',
      'All patients considered suitable for discharge after rare earth magnet ingestion require follow-up AXR after 6 - 12 hours (only repeat CXR if magnets are seen in chest on first image) (p8)',
      'Failure of the magnet to progress through the GIT (after a period of 6 - 12 hours confirmed by a radiologist) warrants an immediate discussion with a paediatric surgeon (p8)',
      'Suitable for discharge after magnet ingestion (Royal College of Emergency Medicine, p28): single magnet ingestion; accidental ingestion; no co-morbidities; tolerating oral intake; presents within 24 hours of ingestion; caregiver able to provide close observation'], next:'bl'},
    mm:{q:'Multiple magnets: where, and is the child symptomatic?', hint:'Algorithm 4 (p xiv).',
      opts:[['Oesophagus, symptomatic','emerg'],['Oesophagus, asymptomatic','urgent'],['Stomach or duodenum','urgent'],['Beyond the duodenum, symptomatic','sxbd'],['Beyond the duodenum, asymptomatic','mmobs']]},
    mmobs:{end:'admit', title:'In-patient observation, repeat X-ray within 8-12 hours', items:[
      'Multiple magnets beyond the duodenum, not symptomatic (Algorithm 4, p xiv)',
      'Progress: repeat X-Ray every 8 - 12 hours until spontaneous passage, discharge with advice. No progress: surgical removal',
      'Multiple magnet ingestion: if serial imaging in the ED shows no progression, repeat imaging is recommended within 8 - 12 hours after admission (5.2, p19)'],
      gap:'CPG Algorithm 4 (p xiv), 5.2 (p19) and the treatment table (p24). The CPG also quotes serial X-ray (4 - 6 hours) (NASPGHAN, p11) and follow-up AXR after 6 - 12 hours (p8).'},
    magmet:{end:'admit', title:'A magnet plus another metallic object: immediate admission', items:[
      'Those requiring immediate admission include: multiple magnets, or a magnet plus another metallic object (4.1, p16)',
      'High-risk foreign bodies include magnet + metal object or >1 magnet (3.1, p6): urgent referral (Algorithm 1)'],
      links:[['#fb-children-cpg--mm','Multiple magnets (Algorithm 4)']],
      gap:'CPG 3.1 (p6) and 4.1 (p16). No algorithm names a magnet with another metal object: Algorithm 4 is for multiple magnets and Algorithm 5 for a single magnet. Still to confirm which the referral team follows.'},

    /* Algorithm 3, Sharp foreign body (p xiii) */
    sh:{q:'Confirmed sharp object: where, and is the child symptomatic?', hint:'Algorithm 3 (p xiii). Radiopaque: plain X-ray. Radiolucent: USG abdomen; upper GI contrast study/CT/MRI (p13). PPV of radiographs is 100% for metallic objects (but lower for radiolucent object e.g., glass/bones/wood) (p11).',
      opts:[['Oesophagus','emerg'],['Stomach or duodenum, symptomatic','urgent'],['Stomach or duodenum, asymptomatic','shsta'],['Beyond the duodenum, symptomatic','sxbd'],['Beyond the duodenum, asymptomatic','shbda']]},
    shsta:{end:'observe', title:'May allow spontaneous passage: repeat AXR in 3 to 5 days', items:[
      'Endoscopic removal should be done for all sharp foreign bodies in the stomach, however those who are asymptomatic, spontaneous passage may be allowed (Recommendation 3, p25)',
      'Repeat AXR in 3 to 5 days, as in-patient or outpatient depending on ease of access to hospital. No progress: surgical / endoscopic removal (Algorithm 3, p xiii)',
      'Sharp object ingestion: daily abdominal X-ray may be considered for up to 3 days to monitor for movement or complications (5.2, p19)'],
      gap:'CPG Algorithm 3 (p xiii), Recommendation 3 (p25) and the treatment table (p24). Sharp objects are on the list for immediate admission (4.1, p16), yet the algorithm allows outpatient follow-up. The CPG does not define ease of access.'},
    shbda:{end:'observe', title:'Repeat AXR in 3 to 5 days', items:[
      'Asymptomatic patients with sharp objects ingestion beyond the duodenum requires repeat abdominal X-ray after 3 - 5 days and removal if there is no progression (Recommendation 3, p25)',
      'As in-patient or outpatient depending on ease of access to hospital. Progress: allow spontaneous passage, discharge with advice. No progress: surgical / endoscopic removal (Algorithm 3, p xiii)',
      'Asymptomatic children with sharp object ingestion beyond the duodenum may be considered for discharge with follow up if there is easy access to the appropriate level of care (p29)'],
      gap:'CPG Algorithm 3 (p xiii), Recommendation 3 (p25) and p29. Recommendation 4 does not name sharp objects for discharge. The NASPGHAN table gives daily AXR, with surgical removal if no progression in 3 days (p11).'},

    /* Algorithm 5, Coin/cylindrical battery/single magnet/blunt foreign body (p xv) */
    bl:{q:'Coin, single magnet, blunt object or cylindrical battery: where, and is the child symptomatic?', hint:'Algorithm 5 (p xv). FB series of radiographs (CXR/neck x-ray/AXR); lateral films are extremely helpful in differentiating the "step-off" of a button battery that will discriminate it from a coin (p12).',
      info:['Large objects unlikely to pass pylorus (diameter > 2 - 2.5 cm, length > 5 - 6 cm in children) require immediate admission (4.1, p16)','Cylindrical battery: the presence of prior abdominal surgery, a damaged or leaking battery, or any clinical symptoms should prompt urgent endoscopy for removal, or surgical consultation if the battery has migrated beyond endoscopic reach (p19)'],
      opts:[['Oesophagus, symptomatic','emerg'],['Oesophagus, asymptomatic','urgent'],['Stomach or duodenum, symptomatic','urgent'],['Stomach or duodenum, asymptomatic','blsta'],['Beyond the duodenum, symptomatic','sxbd'],['Beyond the duodenum, asymptomatic','blbda']]},
    blsta:{end:'discharge', title:'Allow spontaneous passage, discharge home with advice; follow up X-ray in 2-4 weeks', items:[
      'Stomach & duodenum, not symptomatic: allow spontaneous passage, discharge home with advice; follow up X-ray in 2-4 weeks; no progress, endoscopic removal (Algorithm 5, p xv)',
      'For blunt objects and coins, serial X-rays at least every 2 weeks and a retained foreign body beyond 4 weeks warrant intervention (DG, p33)',
      'Cylindrical battery: asymptomatic patients without abdominal complaints or evidence of battery casing damage can be managed conservatively with close monitoring and radiologic imaging. Non-urgent endoscopic retrieval may be considered if the cylindrical battery remains accessible endoscopically (p19)'],
      links:[['#fb-children-cpg--dc','Discharge criteria and advice']],
      gap:'CPG Algorithm 5 (p xv), the treatment table (p24) and p33. Admission for observation (4.1, p16) lists a foreign body beyond oesophagus but not yet passed the stomach. For cylindrical batteries the CPG quotes 7 to 14 days (p8) and 10 - 14 days (p32), not 2-4 weeks.'},
    blbda:{end:'discharge', title:'Allow spontaneous passage, discharge home with advice', items:[
      'Beyond duodenum, not symptomatic (Algorithm 5, p xv)',
      'Asymptomatic children with the following foreign body ingestion may be considered for discharge and follow-up: single magnet ingestion beyond the oesophagus; blunt object ingestion beyond the oesophagus (Recommendation 4, p29)',
      'For blunt objects: surgical removal should be considered if objects remain in the same location distal to the duodenum for >1 week (p32)'],
      links:[['#fb-children-cpg--dc','Discharge criteria and advice']],
      gap:'CPG Algorithm 5 (p xv), Recommendation 4 (p29) and p32. Algorithm 5 gives this branch no follow-up X-ray; outpatient follow-up is recommended within 1 - 3 weeks from the day of ingestion to confirm passage (p31).'},

    /* Outcomes shared by Algorithms 2 to 5 */
    emerg:{end:'refer', title:'Emergent endoscopic removal', items:[
      'Emergent: <2 hours from presentation, regardless of Nil Per Oral [NPO] (p4)',
      'For: a sharp object in the oesophagus (Algorithm 3); multiple magnets in the oesophagus, symptomatic (Algorithm 4); a coin, cylindrical battery, single magnet or blunt object in the oesophagus, symptomatic (Algorithm 5); a button battery in the stomach or duodenum, symptomatic (Algorithm 2)',
      'Endoscopic removal should be done for all foreign body ingestion in children lodged in: oesophagus, regardless of symptoms; stomach, presenting with symptoms (Recommendation 3, p25)'],
      gap:'CPG Algorithms 2 to 5 (p xii to xv), the treatment table (p24) and Recommendation 3 (p25).'},
    urgent:{end:'refer', title:'Urgent endoscopic removal', items:[
      'Urgent: ≤24 hours from presentation, following usual NPO guidelines (p4)',
      'For: multiple magnets in the oesophagus, asymptomatic, or in the stomach or duodenum (Algorithm 4); a sharp object in the stomach or duodenum, symptomatic (Algorithm 3); a coin, cylindrical battery, single magnet or blunt object in the oesophagus, asymptomatic, or in the stomach or duodenum, symptomatic (Algorithm 5)',
      'Endoscopic removal should be done for all foreign body ingestion in children lodged in: oesophagus, regardless of symptoms; stomach, presenting with symptoms (Recommendation 3, p25)'],
      gap:'CPG Algorithms 3 to 5 (p xiii to xv), the treatment table (p24) and Recommendation 3 (p25). The table leaves symptomatic multiple magnets in the stomach & duodenum blank; Algorithm 4 gives urgent removal.'},
    sxbd:{end:'refer', title:'Surgical / endoscopic removal', items:[
      'Symptomatic, beyond the duodenum (Algorithms 2 to 5)',
      'Surgical intervention should be done in children with foreign body ingestion when there is: foreign body-related complications (absolute indication); failure of conservative management or endoscopic removal; symptomatic patients with foreign body lodged beyond the duodenum (Recommendation 3, p25)'],
      gap:'CPG Algorithms 2 to 5 (p xii to xv) and Recommendation 3 (p25).'},

    /* Algorithm 6, Superabsorbent polymer (p xvi) */
    sap:{q:'Suspected superabsorbent polymer: paediatric surgical consult. Symptomatic?', hint:'Algorithm 6 (p xvi). Abdominal ultrasonography should be done for superabsorbent polymer objects (Recommendation 2, p13); plain X-ray is unlikely to be helpful (radiolucent) (p12).',
      opts:[['Symptomatic','sapsym'],['Not symptomatic','sapobs']]},
    sapsym:{end:'refer', title:'Transfer to referral center & imaging', items:[
      'FB confirmed: endoscopy/surgical removal. Not confirmed: discharge with advice (Algorithm 6, p xvi)',
      'Children with foreign body ingestion should be admitted and considered for intervention if any of the following apply: symptomatic; confirmed ingestion of superabsorbent polymer objects (p17)',
      'If upper endoscopy fails to locate the object, clinicians should maintain a high index of suspicion for distal bowel obstruction (NASPGHAN, p23)'],
      gap:'CPG Algorithm 6 (p xvi), p17 and p23.'},
    sapobs:{end:'admit', title:'Admit for observation', items:[
      'Develops symptoms: transfer to referral center & imaging. No symptoms: discharge with advice (Algorithm 6, p xvi)',
      'SAP objects generally do not require endoscopic removal in asymptomatic or mildly symptomatic children; clinical judgment remains paramount, especially in younger children or those presenting with persistent vomiting (p20)'],
      gap:'CPG Algorithm 6 (p xvi) and p20. The CPG gives no length of observation. The treatment table (p24) says observe or discharge with advice after paediatric surgical consult; NASPGHAN recommends emergent endoscopic removal in SAP object ingestion (p23).'},

    /* 4.1 Admission (p16–17), 6.1 Discharge, Recommendations 4 and 5 (p28–31) */
    adm:{check:'any', q:'Immediate admission?', hint:'4.1 (p16), criteria based on evidence.',
      items:['Symptomatic children','Evidence of complication (perforation, obstruction, bleeding, or suspected airway involvement)','Foreign body lodged in the oesophagus','Multiple magnets, or a magnet plus another metallic object','Sharp objects','Large objects unlikely to pass pylorus (diameter > 2 - 2.5 cm, length > 5 - 6 cm in children)'],
      opts:[['Yes, present','admi'],['None','admo']]},
    admi:{end:'admit', title:'Immediate admission', items:[
      'Children with foreign body ingestion should be admitted and considered for intervention if any of the following apply: symptomatic; foreign body in the oesophagus; multiple magnet ingestion; confirmed ingestion of superabsorbent polymer objects (p17)',
      'Then follow the algorithm for the object'],
      links:[['#fb-children-cpg--bb','Button battery'],['#fb-children-cpg--mag','Magnets'],['#fb-children-cpg--sh','Sharp object'],['#fb-children-cpg--bl','Coin or blunt object'],['#fb-children-cpg--sap','Superabsorbent polymer']],
      gap:'CPG 4.1 (p16–17). Algorithm 3 lets an asymptomatic sharp object be followed up as an outpatient, depending on ease of access to hospital (p xiii).'},
    admo:{check:'any', q:'Admission for observation?', hint:'4.1 (p16–17).',
      items:['Foreign body beyond oesophagus but not yet passed the stomach, especially if large or irregularly shaped','Unknown type of object or uncertain time of ingestion','Lack of radiographic progression after 24 - 48 hours','Children with previous GI surgery or anatomical abnormalities (e.g., strictures, congenital malformations)','Multiple foreign bodies of uncertain type','Any ingested object with potential chemical hazard (e.g., batteries that may leak, metallic items containing lead)'],
      opts:[['Yes, present','admob'],['None','dc']]},
    admob:{end:'admit', title:'Admission for observation', items:[
      'Conservative management refers to an inpatient watch-and-wait approach while awaiting definitive intervention, is often the initial approach for asymptomatic foreign body ingestion in children passed beyond the stomach (5.2, p19)',
      'Multiple magnet ingestion: if serial imaging in the ED shows no progression, repeat imaging is recommended within 8 - 12 hours after admission. Sharp object ingestion: daily abdominal X-ray may be considered for up to 3 days (5.2, p19)'],
      gap:'CPG 4.1 (p16–17) and 5.2 (p19). Algorithms 2 and 5 send home some children whose object is in the stomach, which this list admits for observation.'},
    dc:{check:'all', q:'May the child be safe for discharge?', hint:'Recommendation 4 (p29), from the Royal Children\'s Hospital Melbourne consensus (2024). A low-risk foreign body means it does not belong to a high-risk foreign body as listed in section 3.1.',
      items:['The child is well appearing','Pain-free','Not in respiratory distress','Able to eat and drink','With a reliable history and the ingested object is considered a low-risk foreign body'],
      opts:[['All met','dcok'],['Not all met','dcno']]},
    dcok:{end:'discharge', title:'May be safe for discharge: advise the caregiver', items:[
      'Asymptomatic children with the following foreign body ingestion may be considered for discharge and follow-up: children ≥5 years of age with <20 mm button battery ingestion beyond the oesophagus; single magnet ingestion beyond the oesophagus; blunt object ingestion beyond the oesophagus (Recommendation 4, p29)',
      'Caregivers of children with foreign body ingestion should be advised to seek urgent medical attention if any of the following symptoms are present: respiratory distress; abdominal pain or distension; persistent vomiting; fever; inability to tolerate oral intake; gastrointestinal bleeding (e.g., haematemesis or melaena) (Recommendation 5, p31)',
      'Caregivers of children with magnet ingestion should be advised to: remove all magnetic objects from the child\'s surroundings; avoid clothing with metallic buttons or belts with metal buckles; ensure no metal objects or magnetic objects are accessible to the child to prevent accidental re-ingestion (Recommendation 5, p31)'],
      gap:'CPG Recommendations 4 and 5 (p29–31), printed in English only. Outpatient follow-up is recommended within 1 - 3 weeks from the day of ingestion to confirm passage (p31); the CPG names no clinic.'},
    dcno:{end:'neutral', title:'Does not meet the discharge criteria', items:[
      'A child with foreign body ingestion may be safe for discharge if all the following clinical criteria are met (Recommendation 4, p29)',
      'Indications for consultations/referrals include: symptomatic foreign body ingestion; suspected/unwitnessed foreign body ingestion (chapter 4, p16)'],
      links:[['#fb-children-cpg--rf','Triage and first X-ray (Algorithm 1)']],
      gap:'CPG Recommendation 4 (p29) and chapter 4 (p16). Beyond referral, the CPG does not say what to do for a well child who misses one criterion: not in the source.'},

    excl:{end:'neutral', title:'Outside this CPG', items:[
      'Exclusion criteria: inhalation of a foreign body; food bolus ingestion; corrosive ingestion (p iii)',
      'This guideline focuses on non-edible objects, including button batteries, sharp objects, magnets, coins/blunt objects and superabsorbent polymer (SAP) objects (p1)',
      'Its high-risk list includes sharp objects in the oesophagus e.g. fish bone, pins or needles (p6)'],
      gap:'The CPG has no pathway for a food bolus, a corrosive or an inhaled foreign body: not in the source.'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Triage', notes:[
      {h:'Red flags', src:'CPG chapter 2 (p3–4) and Algorithm 1 (p xi)', items:[
        'Life-threatening foreign body ingestion should be suspected when a patient exhibits the following red flag features: stridor, actively choking; wheeze or increased work of breathing; tachycardia, appears unwell or pale; haematemesis or malaena (p3). Algorithm 1 adds drooling, hemodynamic instability and suspected button battery ingestion.',
        'Any children with danger signs must be moved to resuscitation, immediate emergency care or urgent attention; children without danger signs should proceed to registration and secondary triage; children should not be routinely triaged away (p3).',
        'Most button battery ingestions are not witnessed. The possibility of such ingestion should be considered in every patient with the following symptoms: wheezing or other noisy breathing; drooling; vomiting; chest pain or discomfort; abdominal pain; difficulty swallowing; decreased appetite or refusal to eat; coughing, choking or gagging with eating or drinking (p4).']},
      {h:'On examination', src:'CPG 3.1 (p5–6)', items:[
        'Hypoxaemia, tachycardia and hypertension may suggest prolonged, complete oesophageal obstruction.',
        'Neck swelling, tenderness, erythema or crepitus may suggest oropharyngeal or proximal oesophageal perforation.',
        'Peritonitis and signs of systemic illness may suggest distal oesophageal rupture.',
        'Symptoms with the highest likelihood of intervention: drooling, dysphagia, food refusal, retrosternal pain (p5).']},
      {h:'Appendix 3: paediatric danger signs', src:'CPG p46–47, adopted from the MoH Malaysian Triage Scale (2022). Generally, children, especially those below 8 years old should not be triaged at Level 5 - Routine. Infants, below 1 year old should be at Level 4 or higher (p47).', table:{head:['Triage','Level 1 Resuscitation','Level 2 Emergency','Level 3 Urgent'], rows:[
        ['Tone','Limp or Flaccid','Weak/Limited Movement','Movement or vigorously resisting examination; Good Muscle Tone'],
        ['Interactiveness','Unresponsive; Lethargic','Uninterested in surroundings or play','Alert; Attentiveness to the surroundings; Interest to play or reaching for item'],
        ['Consolability','No cry; Very weak cry','Crying or agitated, that is unrelieved by reassurance','Ability to be consoled or comforted by parent or caregiver'],
        ['Look/Gaze','Blank stare','Gaze fixed to a face','Looking around'],
        ['Speech/Cry','No speech; No cry','Weakly crying; High-pitched',''],
        ['Abnormal Airway Sounds','Snoring, Muffled or hoarseness in speech; Stridor, grunting or wheezing','Difficulty in swallowing; Wheezing; Drooling',''],
        ['Abnormal Positioning','Sniffing position, tripod position','Unable to walk; Refusal to lie down',''],
        ['Retractions','Head bobbing for infants','Supraclavicular, intercostal or substernal retractions; Increased work of breathing','Tachypnoea'],
        ['Flaring','','Nasal flaring on inspiration; Accessory muscles',''],
        ['Pallor','','Pale mucous membranes/sole/palm',''],
        ['Mottling, Cyanosis','Patchy or bluish skin discolouration','',''],
        ['Capillary Refil Time','Cold Peripheries; CRT >5 secs','CRT >2 secs','']]}}
    ]},
    {l:'Imaging', notes:[
      {h:'Imaging by suspected type of foreign body', src:'CPG p13: the DG opines that these should be done. The CPG prints both column headings as Suspected Type of Foreign Body.', table:{head:['Suspected type of foreign body','Imaging'], rows:[
        ['Button battery in chest','Plain Chest X-ray (AP & lateral)'],
        ['Button battery in abdomen','Plain Abdominal X-ray (AP supine)'],
        ['Magnets','Serial Plain X-rays: Chest: CXR-AP; Abdomen: AXR- AP & lateral'],
        ['Sharp objects','Radiopaque: Plain X-ray. Radiolucent: USG abdomen; Upper GI contrast study/CT/MRI'],
        ['Coins/Blunt objects','Serial Plain X-rays'],
        ['Superabsorbent polymer objects','Plain Abdominal X-ray / USG']]}},
      {h:'Recommendation 2', src:'CPG p13. The key recommendations (p i) print the ultrasound line for superabsorbent polymer objects only.', items:[
        'Plain radiographs should be the first-line imaging modality for most foreign body ingestion in children.',
        'Abdominal ultrasonography should be done for superabsorbent polymer objects and any sharp radiolucent object ingestion in children.',
        'Gastrointestinal (GI) contrast study and computed tomography scan (CT)/magnetic resonance imaging (MRI) should be done for suspected sharp radiolucent objects and complications of foreign body ingestion in children.']},
      {h:'What the X-rays show', src:'CPG 3.2 (p7) and Figures 1, 2 and 5 (p14–15)', items:[
        'A single frontal/AP chest radiograph (CXR) encompassing the entire length of the oesophagus was sufficient as the initial investigation of children presenting with a clear history of coin ingestion; sensitivity of 95.2% and specificity of 97.8%.',
        'Button battery: AP view with "double halo" sign; lateral view with "step-off" sign. Coins: absence of "double halo" sign.',
        'Multiple magnets in the bowel: (a) within bowel lumen in a linear arrangement, (b) 6 hours later, the magnets appear clustered together in a ring pattern suggestive of entero-enteral fistula formation.']}
    ]},
    {l:'Treatment table', notes:[
      {h:'Treatment by location and type of foreign body', src:'CPG p24, the DG\'s opinion. A cell the CPG prints across two rows is repeated. Superabsorbent polymer, any location: symptomatic, endoscopic/surgical removal; asymptomatic, observe or discharge with advice after paediatric surgical consult. Emergent: <2 hours from presentation, regardless of Nil Per Oral [NPO]. Urgent: ≤24 hours from presentation, following usual NPO guidelines. Elective: >24 hours from presentation, following usual NPO guidelines (p4).', table:{head:['Type of foreign body','Symptoms','Oesophagus','Stomach & duodenum','Beyond duodenum'], rows:[
        ['Blunt','Symptomatic','Emergent endoscopic removal','Urgent endoscopic removal','Surgical/ endoscopic removal'],
        ['Blunt','Asymptomatic','Urgent endoscopic removal','Allow spontaneous passage. Repeat X-ray in 2 - 4 weeks. If does not pass in 2 - 4 weeks for endoscopic removal','Allow spontaneous passage'],
        ['Button battery (BB)','Symptomatic','Emergent endoscopic removal','Emergent endoscopic removal','Surgical/ endoscopic removal'],
        ['Button battery (BB)','Asymptomatic','Emergent endoscopic removal','Age <5 years old and/or BB ≥20 mm - urgent endoscopic removal. Age ≥5 years old and BB <20 mm - observation Repeat X-ray at 10-14 days, remove if persist','Allow spontaneous passage with advice'],
        ['Magnet, single','Symptomatic','Emergent endoscopic removal','Urgent endoscopic removal','Surgical/ endoscopic removal'],
        ['Magnet, single','Asymptomatic','Urgent endoscopic removal','Allow spontaneous passage. Repeat X-ray in 2 - 4 weeks. If does not pass in 2 - 4 weeks, for endoscopic removal','Allow spontaneous passage'],
        ['Magnet, multiple','Symptomatic','Emergent endoscopic removal','Printed blank (Algorithm 4: urgent endoscopic removal)','Surgical/ endoscopic removal'],
        ['Magnet, multiple','Asymptomatic','Urgent endoscopic removal','Urgent endoscopic removal','In patient observation, repeat X-ray every 8-12 hours. If progress, repeat again X-ray every 8 - 12 hourly until spontaneous passage. If not progress, for surgical removal'],
        ['Sharp','Symptomatic','Emergent endoscopic removal','Urgent endoscopic removal','Surgical / endoscopic removal'],
        ['Sharp','Asymptomatic','Emergent endoscopic removal','May allow spontaneous passage with repeat X-ray in 3 to 5 days. If no progress, for endoscopic/surgical removal','Allow spontaneous passage, with repeat X-ray in 3 to 5 days. If no progress, for endoscopic/surgical removal']]}}
    ]},
    {l:'Follow-up', notes:[
      {h:'After conservative management', src:'CPG 6.2.1 (p31–33) and Recommendation 6 (p33)', items:[
        'In general, approximately 80% of foreign bodies were expelled by day 14 of ingestion and thus, outpatient follow-up is recommended within 1 - 3 weeks from the day of ingestion to confirm passage. However, the transit time is expected to be longer in regularly shaped objects >19.5 mm and irregularly shaped objects >22.5 mm (p31).',
        'The DG opines that asymptomatic child with retained foreign body ingestion should be followed up with serial imaging: for blunt objects and coins, serial X-rays at least every 2 weeks and a retained foreign body beyond 4 weeks warrant intervention; for sharp objects, to repeat X-ray in 3 to 5 days and for removal if no progress; stool monitoring is not required to confirm passage (p33).',
        'Children ≥5 years old with button battery <20 mm in size in stomach should be followed up with: repeated X-rays at 10 to 14 days; endoscopic removal if retained in the stomach (Recommendation 6).']},
      {h:'After removal', src:'CPG 6.2.2 (p33) and Recommendation 7 (p34)', items:[
        'In general, no follow-up is required after foreign body removal, as complications are uncommon and minimal, except in cases involving the removal of an oesophageal button battery.',
        'Follow-up endoscopic assessment [with or without gastrointestinal (GI) contrast study] should be done in symptomatic children with button battery ingestion following removal of foreign body. The key recommendations (p ii) print foreign body ingestion in place of button battery ingestion.']}
    ]},
    {l:'Advice', notes:[
      {h:'When to come back', src:'CPG Recommendation 5 (p31) and p30. Printed in English only.', items:[
        'Seek urgent medical attention if any of the following symptoms are present: respiratory distress; abdominal pain or distension; persistent vomiting; fever; inability to tolerate oral intake; gastrointestinal bleeding (e.g., haematemesis or melaena).',
        'In the event of clinical deterioration in children with foreign body ingestion, caregivers should be advised to return promptly to the ED for re-evaluation (p30).',
        'After magnet ingestion: remove all magnetic objects from the child\'s surroundings; avoid clothing with metallic buttons or belts with metal buckles; ensure no metal objects or magnetic objects are accessible to the child to prevent accidental re-ingestion.']},
      {h:'Prevention', src:'CPG Recommendation 8 (p36) and 7.3 (p35)', items:[
        'Purchase age-appropriate toys; keep small objects out of reach of young children; tape shut battery compartments on toys and all household products; store batteries and magnets in locked safety boxes out of reach of children; avoid purchasing rare earth magnets in households with young children.']},
      {h:'Keselamatan bahan permainan', src:'CPG Appendix 6 (p62), from the Buku Rekod Kesihatan Bayi dan Kanak-Kanak (0-6 Tahun): toy safety, printed in Bahasa Melayu only. Rujukan: Canadian Child Care Federation.', items:['Lebih besar daripada mulut anak','Struktur yang kukuh.','Tidak mudah ditanggal','Tiada bahagian/bucu tajam.','Tiada racun.','Tiada tali/wayar panjang.','Tidak boleh dikunyah.']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Foreign Body Ingestion in Children. Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2025. e-ISBN 978-629-7842-23-3. Available at https://mymahtas.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Sources the CPG quotes include The Royal Children\'s Hospital Melbourne (red flags, discharge criteria), ESPGHAN and the National Capital Poison Center (honey), NASPGHAN (imaging, p10–12), the Royal College of Emergency Medicine (magnets) and the MoH Malaysian Triage Scale (2022, Appendix 3).'],
  see:[['#children--fb','Children in the ED: swallowed foreign body (department)'],['#children--pat','Children in the ED: where to triage a child'],['#oscc--child','Suspected child abuse (OSCC)']]
};

/* The department's swallowed foreign body step points to the national guideline: a link only, its wording stays */
P['children'].see = [...(P['children'].see || []), ['#fb-children-cpg', 'Foreign body ingestion CPG (2025)']];
/* Where the CPG is stricter, the link sits on the step itself, as the gout rule's does: the department sends an asymptomatic
   button battery in the stomach or beyond home, where the CPG removes a gastric battery within 24 hours if the child is aged
   <5 years or the battery is ≥20 mm (Recommendation 3, p25). Which the Green Zone follows is open item 17. */
P['children'].nodes.bbhome.links = [...(P['children'].nodes.bbhome.links || []), ['#fb-children-cpg--bb', 'CPG 2025: battery in the stomach, under 5 or 20 mm or more']];
