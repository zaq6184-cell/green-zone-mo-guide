/* ================= 10 Nov 2026 round: Code Blue, the emergency colour codes and the medical interpreters =================
   Code Blue: the HKL Code Blue Manual 2022/2024, 5th edition (Emergency Rapid Response System for Medical Emergencies in
   Hospital Kuala Lumpur; Code Blue Committee, Emergency and Trauma Department), given by the guide owner on 10 Nov 2026.
   Quoted as printed with its section and page numbers. Its foreword and the committee's names are not copied.
   The colour codes: the card "HKL Emergency Color Codes: Rapid Response Guide", shared the same day. It prints no issuer
   or date, and a person in charge for each code, whose names are left out.
   The interpreters: the HKL Director's memo HKL/UEML/98/133, 9 July 2026, with its flow chart (Lampiran 1). */

P['code-blue'] = {
  title:'Code Blue and the emergency codes', src:'Code Blue Manual 2022/2024', grp:'rules', sub:'protocol', isnew:true,
  hero:'codeblue', heroj:'t-garnet',
  kw:'cardiac arrest collapse collapsed fainted unconscious unresponsive resuscitation cpr bls acls aed defibrillator crash cart trolley mecc call centre fire bomb cbrne hostage violence suicide self-harm forensic dead body',
  lead:'Someone collapses or is unwell anywhere in the hospital grounds: who to call, who comes and what to do until they arrive. Activate Code Blue on ext 5333 (03-2615 5333); in SCACC, Anaesthesia on ext 1133 / 1134 with 5333. The team arrives within 10 minutes. From the HKL Code Blue Manual 2022/2024 (5th edition, Emergency and Trauma Department), with the hospital\'s other emergency colour codes.',
  see:[['#numbers', 'Numbers to know'], ['#safe-practice', 'Safe practice']],
  start:'role',
  nodes:{
    role:{q:'What is happening?', hint:'Code Blue covers any person in the hospital grounds: patients, relatives, visitors or the public (12, p20). It is for a medical emergency, such as chest pain, stroke, syncope, seizures or a traumatic fall, or a cardio-respiratory arrest: unresponsive, pulseless or not breathing (1.0, p6).', fig:'cbcall', opts:[
      ['Someone collapses or is unwell, outside the ED', 'where'],
      ['A Code Blue call: you are on the ED Code Blue team', 'team'],
      ['Resuscitation has failed: death at the scene', 'death'],
      ['Fire, bomb, violence or self-harm: the other codes', 'codes']]},
    where:{q:'Where is the patient?', hint:'Tap a block on the map to see who responds there, and the number (Appendix ii, Response Locations By Block).', fig:'cbmap', opts:[
      ['SCACC, office hours (Zone 2)', 'z2'],
      ['SCACC, after office hours (after 1700 hr)', 'z2ah'],
      ['Anywhere else in the hospital grounds (Zone 1)', 'z1'],
      ['An in-patient, in the ward', 'ward']]},
    z1:{q:'Initial assessment: is the patient stable?', hint:'Appendix iii: the Code Blue System excluding SCACC (Zone 1). In the Woman and Child Hospital (WCH) and the Paediatric Institute, the WCH code blue team responds: 03-2600 1050 (Table 1, p11).', opts:[['Stable', 'z1s'], ['Not stable', 'bls']]},
    z1s:{q:'Does the patient require stabilisation?', hint:'Appendix iii.', opts:[['Yes, and the patient is unable to walk', 'walkno'], ['Yes, and the patient is able to walk', 'walk'], ['No', 'dc']]},
    bls:{step:'Start BLS and activate Code Blue: ext 5333', fig:'cbchain', items:[
      'Activate the Code Blue by contacting the call center 03-2615 5333 / ext 5333, or instruct someone to do it for you (5.2a, p15)',
      'Ask for further assistance via the nearest ward or staff, especially if the site has no primary responder assigned to it. If none is available, stay with the patient and assist with whatever resources are available while waiting for the secondary Code Blue team (5.2b)',
      'Inform the party in charge of the area, for example the medical officer on call or in charge of a ward, to attend to the site immediately (5.2c)',
      'BLS-trained staff initiate BLS while waiting for the Code Blue team: airway positioning, rescue breathing, chest compression (5.2d)',
      'No BLS-trained staff: wait for experienced help to arrive and keep the site clear from crowding, with crowd and traffic control if possible (5.2e)',
      'If a cardiac monitor, manual defibrillator or AED is available, attach it to determine the need for rapid defibrillation: done by experienced staff or staff trained in ACLS (5.2f)',
      'Resuscitated before the team arrives: place the patient in the recovery position and monitor the vital signs (5.2g)'], next:'nca'},
    nca:{step:'In a non-clinical area: bring the patient to the nearest designated Code Blue resuscitation area', items:[
      'Then continue resuscitation and stabilisation until the Code Blue team or the ERT (emergency response team) arrives (Appendix iii)',
      'Each department initiates resuscitation and basic life support for victims in its workplace and surrounding area, while advanced life support care comes from the ED (3.0, p9 – 10)'], next:'ten'},
    ten:{q:'Has the Code Blue team arrived within 10 minutes?', hint:'The response time from the Code Blue call to the team\'s arrival at the scene is ≤ 10 minutes (5.3c, p16), and it is the system\'s performance indicator (13, p21).', fig:'cbclock', opts:[
      ['Yes: the team is here', 'arrive'],
      ['Not yet, over 10 minutes, and BLS-trained staff are with the patient', 'stay'],
      ['Not yet, over 10 minutes, and no one here is BLS-trained', 'move']]},
    stay:{step:'Stay and play: continue CPR until the team arrives', items:[
      'If the staff attending to the collapsed victim is trained in BLS, they should continue resuscitation/CPR (stay & play) until the arrival of the Code Blue Team even if the arrival time is more than 10 minutes (5.4e, p17)',
      'Adequately skilled primary responders may also use the stay & play concept and initiate ACLS if the crash cart is available (3.0, p10)'], next:'arrive'},
    move:{end:'refer', title:'Over 10 minutes and no one BLS-trained: start the transfer to the ED', items:[
      'If the arrival of the Code Blue team takes more than 10 minutes, the staff attending to the victim should initiate transfer of the victim to the ED for further resuscitation if the staff is not trained in BLS (5.4d, p17)',
      'If resuscitation equipment or skilled personnel are unavailable, transporting outpatient victims to the ED as soon as possible using a stretcher takes precedence (3.0, p10)'],
      gap:'Source: Code Blue Manual 2022/2024, sections 3.0 and 5.4.'},
    arrive:{step:'The Code Blue team takes over', items:[
      'The team takes over the resuscitation; the staff at the scene stay around to provide additional assistance if required (5.3d, p16)',
      'The team leader consults the primary managing team or the staff in charge to decide the victim\'s disposition, for example whether to send the patient to the ED for further assessment and definitive care (5.2h, p15)',
      'Transfer from the site to other destinations is decided between the Code Blue team and the medical personnel in charge of the site (5.3e)',
      'The primary responder and the Code Blue team record the pertinent data on the Code Blue Record Clerking Sheet, Code_blue/CS-01 (5.3f; the Record tab)'], next:'dispo'},
    dispo:{q:'Where does the patient go next?', hint:'Definitive care depends on the location of the victim and consultation between the ED Code Blue team and the staff in charge of the site (5.4a, p16).', opts:[
      ['An out-patient, visitor or member of the public', 'toed'],
      ['An in-patient (a ward resident)', 'ward'],
      ['Stable, and needs no further medical help', 'dc'],
      ['Resuscitation unsuccessful: death at the scene', 'death']]},
    toed:{end:'refer', title:'Transfer to the ED (ED HKL)', items:[
      'Medical emergencies in any other area, clinical and non-clinical, are attended by the Primary Responder and the Code Blue team; these patients are usually transported to the ED for further resuscitation and definitive care, as these places usually do not have adequate infrastructure and equipment for advanced care (5.4c, p17)',
      'Record the pertinent data on the Code Blue Record Clerking Sheet, Code_blue/CS-01 (5.3f, p16)',
      'The patient refuses? The clerking sheet has a Discharge Against Medical Advice section, signed by the patient, the Code Blue team and a witness (Appendix vii, p28; the Record tab)'],
      gap:'Source: Code Blue Manual 2022/2024, sections 5.3 and 5.4, and Appendices iii, iv and vii.'},
    ward:{end:'neutral', title:'An in-patient: the ward\'s team and Anaesthesia', items:[
      'An in-patient (ward resident) who collapses in the ward: the Primary Responder still carries out the Code Blue response; definitive management is decided by the in-charge managing team or the on-call medical officers and the anaesthesia team once they have arrived (5.4b, p16)',
      'Further management is in the ward, but the patient may be transferred to the ICU, CCU or other specialised areas for referrals, investigations or other treatment if the need arises (5.4b)',
      'Anaesthesia covers ICU, HDW, CCU, CRW and the wards (in-patient residents): 03-2615 6510 (Table 1, p11)',
      'A ward resident brought to another area (the radiology suite, SCACC clinics, the canteen) and found in pulseless arrest: activate Code Blue (5.4g, p17)'],
      gap:'Source: Code Blue Manual 2022/2024, section 5.4 and Table 1.'},
    dc:{end:'discharge', title:'No further help needed: deactivate the code', items:[
      'Stable, and requires no stabilisation: discharge (Appendices iii and iv)',
      'A Code Blue can be deactivated by either the primary or the secondary responder (Code Blue Team) if the patient does not require further medical assistance (1.0, p7)'],
      gap:'Source: Code Blue Manual 2022/2024, section 1.0 and Appendices iii and iv.'},
    walk:{end:'refer', title:'Able to walk: advise to go to ED HKL, and deactivate the code', items:[
      'If the patient is able to walk: advise to go to ED HKL and deactivate the code (Appendix iii, Zone 1; Appendix iv, SCACC)'],
      gap:'Source: Code Blue Manual 2022/2024, Appendices iii and iv.'},
    walkno:{end:'refer', title:'Unable to walk: activate the Code Blue team, 5333', items:[
      'If the patient is unable to walk: activate the Code Blue team, 5333 (Appendix iii); in SCACC: activate Code Blue EDHKL 5333 (Appendix iv)',
      'ED Call Center 1: ext 5333; direct line 03-2615 5333 (14, p21)'],
      gap:'Source: Code Blue Manual 2022/2024, Appendices iii and iv.'},
    z2:{q:'SCACC: initial assessment. Is the patient stable?', hint:'Appendix iv: the Code Blue System in SCACC (Zone 2). Each level has a gazetted First Responder with the knowledge and skill of BLS and high-quality CPR (4.2, p12).', fig:'cbscacc', opts:[['Stable', 'z2s'], ['Not stable', 'z2c']]},
    z2s:{q:'Does the patient require stabilisation?', hint:'Appendix iv.', opts:[['Yes, and the patient is unable to walk', 'walkno'], ['Yes, and the patient is able to walk', 'walk'], ['No', 'dc']]},
    z2c:{q:'Is the patient conscious?', hint:'Appendix iv.', opts:[['Conscious', 'z2ed'], ['Not conscious', 'z2p']]},
    z2ed:{end:'refer', title:'Conscious: activate Code Blue EDHKL, 5333', items:[
      'Activate Code Blue EDHKL 5333 (Appendix iv)',
      'The ED Code Blue team transfers the patient to the ED, for the continuum of medical care by the ED and the respective primary team (5.1, p14)'],
      gap:'Source: Code Blue Manual 2022/2024, Appendix iv and section 5.1.'},
    z2p:{q:'Is there a pulse?', hint:'Appendix iv.', opts:[['Pulse present', 'z2an'], ['No pulse', 'z2cpr']]},
    z2cpr:{step:'No pulse: initiate CPR', fig:'cbchain', items:[
      'Initiate CPR (Appendix iv)',
      'The Primary Responder of that floor or clinic provides BLS and at the same time activates the Anaesthesia Code Blue team (1133/1134) and the ED Call Center (5333) (5.1, p14)',
      'If a cardiac monitor, manual defibrillator or AED is available, attach it to determine the need for rapid defibrillation (5.2f, p15)'], next:'z2an'},
    z2an:{step:'Anaesthesiology Code Blue: ext 1133 / 1134, with the ED on 5333', items:[
      'The SCACC Code Blue System is reached on ext 1133/1134 (Anaesthesia, Level 7), which activates the secondary response by the Anaesthesia team; at the same time the Medical Emergency Call Center (MECC), Emergency and Trauma Department, is alerted of Code Blue at 5333 (4.2, p12)',
      'The emergency medical response is initiated by the Anaesthesia Code Blue team and continued by the ED Code Blue team (5.1, p14)'], next:'z2t'},
    z2t:{end:'refer', title:'EDHKL for transport: 5333', items:[
      'MECC provides the advanced medical resuscitation transfer of the patient from SCACC to the Emergency and Trauma Department, for more definitive care from a primary team (4.2, p12)',
      'Record the pertinent data on the Code Blue Record Clerking Sheet, Code_blue/CS-01 (5.3f, p16)'],
      gap:'Source: Code Blue Manual 2022/2024, section 4.2 and Appendix iv.'},
    z2ah:{step:'SCACC after 1700 hr: call the ED Call Centre, 5333', items:[
      'After office hours (after 1700 hr) the lobby staff, security and the dialysis unit continue to operate: any Code Blue activation at SCACC is directed to MECC (5333) (4.2, p12)',
      'The dialysis unit staff are the Primary Responder, and the Emergency and Trauma Department Code Blue team is the Secondary Responder (4.2)'], next:'bls'},
    team:{step:'On the ED Code Blue team: go now, with the kit', fig:'cbteam', items:[
      'Stop your current tasks, collect the resuscitation kit (equipment bag) and rush to the site of the medical emergency immediately, by the shortest route available (5.3a – b, p16)',
      'Arrive within 10 minutes of the Code Blue call (5.3c)',
      'The ED team: Emergency Physician on call (1); Red/yellow zone medical officer (1); Red/yellow zone paramedic runner staff nurse and treatment room MA (2); attendant/porter (1) (6.0, p19)',
      'Each member has a designated responsibility: team leader, airway manager, chest compression, intravenous line, drug preparation or defibrillation (6.0)',
      'The mobile resuscitation kit/bag holds an AED, airway equipment, suction, oxygen, resuscitation drugs (adrenaline, atropine and lignocaine) and an IV setup; called to an area without an emergency trolley, the team brings the crash cart or the mobile kit (1.0, p7; the Team and kit tab)',
      'The kit is kept in a secure place; its key is the responsibility of the Medical Assistant In Charge, stationed in Call Center 2, ext 6700 (6.0)'], next:'arrive'},
    death:{end:'neutral', title:'Death at the scene: the primary team declares it, then Forensic, ext 6695', items:[
      'If resuscitation of an out-patient is unsuccessful (the victim dies at the scene), death must be declared by the primary team/responder, with further communication with the Forensic Department on the transfer of the body (5.4f, p17)',
      'If death is declared by the primary team, the body is transferred directly to Forensic: 6695 (Appendix v, p26)',
      'Forensic Department: ext 6695 (14, p21)'],
      gap:'Source: Code Blue Manual 2022/2024, section 5.4 and Appendix v.'},
    codes:{end:'neutral', title:'The hospital\'s emergency colour codes', fig:'cbcodes', figOnly:true, items:[
      'Code Black: a bomb threat, or a chemical, biological, radiological, nuclear or explosive (CBRNE) incident: ext 5441',
      'Code Silver: an armed threat or hostages: ext 5441',
      'Code Gray: physical violence involving visitors or staff: ext 5441',
      'Code Orange: a fire, or a large-scale facility emergency (mass disaster): ext 6000',
      'Code Blue: anyone found unconscious or in cardiac arrest: ext 5333; in SCACC, 1133',
      'Code Purple: a psychiatric emergency, to report attempted suicide or self-harm: ext 5441'],
      gap:'Source: the card HKL Emergency Color Codes: Rapid Response Guide, shared by the guide owner on 10 Nov 2026. It prints no issuer or date, and names a person in charge for each code (not copied here): check the extensions against the hospital\'s own circular. Listed under Still to confirm.'}
  },
  notesFoot:'From the Code Blue Manual 2022/2024, 5th edition (Emergency Rapid Response System for Medical Emergencies in Hospital Kuala Lumpur; Code Blue Committee, Emergency and Trauma Department, HKL), as printed, with its section and page numbers. The colour codes are from the hospital\'s rapid response card, as their note says. The foreword and the committee\'s names are not copied.',
  notes:[
    {l:'Who covers where', notes:[
      {h:'Zone 1: everywhere except SCACC', src:'Table 1: Emergency Response Team and Code Blue Team excluding SCACC, p11 (rows as printed; the table has no row 9)', table:{head:['Emergency response team', 'Code Blue team', 'Area of coverage', 'Contact number'], rows:[
        ['Emergency', 'Emergency', 'As Primary or Secondary responder (exclude in patient or ward staff)', '03-2615 5333'],
        ['Anaesthesia', 'Anaesthesia', 'ICU, HDW, CCU, CRW, Wards (In patient residents)', '03-2615 6510'],
        ['Woman and Child Hospital (WCH)', 'WCH code blue team', 'WCH and Paediatric Institute', '03-2600 1050'],
        ['Maternity Hospital', 'Emergency', 'Maternity Hospital', 'None printed'],
        ['Orthopaedic outpatient Clinic response team', 'Emergency', 'Orthopaedic outpatient clinic, Wisma Kayu area, mosque & surrounding area (during office hours)', '03-2615 5525'],
        ['Nephrology & Urology Department response team', 'Emergency', 'Nephrology & Urology Institute, Research & Finance blocks', '03-2615 5381 (Nephrology); 03-2615 6231 (Urology)'],
        ['Nuclear Medicine / Radiotherapy response team', 'Emergency', 'Oncology & Radiotherapy Institute', '03-2615 6816'],
        ['Neurosurgery / Neuromedical / Psychiatry response team', 'Emergency', 'Institut Kaji-saraf TAR', '03-2615 6656 / 5193'],
        ['Radiology response team', 'Emergency', 'Radiology department', '03-2615 7019 / 5928']]}},
      {h:'Where the ED (ETD) responds', src:'Section 3.0, p9', items:['Staff and public canteens', 'Main hospital lobby', 'Physiotherapy Unit', 'Occupational Therapy Unit', 'Forensic Department', 'Pathology Department', 'Dietetic & Food Unit', 'Radicare area', 'Emergency Department area after office hours', 'Ground floor and first floor of main hospital block and overall coverage of the entire hospital grounds (On public holidays)']},
      {h:'Zone 2: SCACC, level by level', src:'Table 2: SCACC Code Blue System, p13. The Code Blue team on every level: Anaesthesia & Emergency', fig:'cbscacc', table:{head:['Level', 'Emergency response team', 'Area of coverage', 'Extension'], rows:[
        ['1', 'Orthopaedic', 'Orthopaedic Clinic, Foyer, Lobby, X-ray Department, Pathology lab & Cafeteria 1st floor', '1007 / 1104'],
        ['2', 'Surgery; Physician Clinic (PC); Dental Clinic', 'Surgery Clinic / Welfare Unit / Cafeteria 2nd floor, Medical Clinic, Dental Clinic', '1021 / 1023'],
        ['3', 'Nephrology; Urology', 'Dialysis Unit / Nephrology Clinic / Urology Clinic', '1035 / 1036'],
        ['4', 'Psychiatry; Pharmacy', 'Psychiatry Clinic, Satellite Pharmacy Area 1', '1043 / 1044'],
        ['5', 'Neurosurgery; Neurology', 'Neurosurgery Clinic, Neurology Clinic', '1046 / 1047'],
        ['6', 'Ophthalmology; Otorhinolaryngology; Dermatology; Plastic & Reconstructive Surgery; Oncology Day Care', 'Respective Clinics', '1478 / 5561'],
        ['7', 'Anaesthesia/Pain Clinic; Endoscopy & Daycare Clinic; Cytotoxic-Drug Reconstitution', 'Anaesthesia OT & All Other Floors (As Secondary Responder)', '1133 / 1134'],
        ['8', 'Daycare Medical / Surgical / TSSU / OT / RHU', 'Anaesthesia', '1695; 1704']]}},
      {h:'SCACC after office hours', src:'Section 4.2, p12', items:['After office hours (after 1700 hr), the lobby staff, security and the dialysis unit continue to operate', 'Any Code Blue activation after office hours at SCACC should be directed to MECC (5333)', 'The dialysis unit staff are the Primary Responder, and the Emergency and Trauma Department Code Blue Team is the Secondary Responder']},
      {h:'The Code Blue phone directory', src:'Section 14, Hospital Kuala Lumpur Code Blue Phone Directory, p21', items:['Emergency Department Call Center 1: Ext 5333', 'Emergency Department Call Center 2: Ext 6700', 'Anaesthesia (SCACC): Ext 1133/1134', 'Direct line: 03-2615-(5333/6700/1133/1134)', 'Forensic Department: Ext 6695']}
    ]},
    {l:'Team and kit', notes:[
      {h:'Who comes', src:'Section 6.0, Code Blue team composition, p19', fig:'cbteam', items:[
        'The Code Blue team is available all the time',
        'Primary Responder, members trained in at least Basic Life Support (BLS), 5 members: Specialist (1); Medical officers (2); Paramedics, Staff Nurse or Medical Assistant (2)',
        'ED Code Blue response team, members trained in BLS, ACLS and Advanced Trauma Life Support (ATLS), 5 members: Emergency Physician on call (1); Red/yellow zone medical officer (1); Red/yellow zone paramedic runner staff nurse & treatment room MA (2); Attendant/porter (1)',
        'Anaesthesia Code Blue Team, 3 members: Specialist (1); Medical Officer (1); Medical Assistant (1)',
        'Each member has a designated responsibility such as the team leader, airway manager, chest compression, intravenous line, drug preparation and defibrillation; each designated team member must be contactable at all times']},
      {h:'After each Code Blue', src:'Section 6.0, p19', items:['Crash equipment (including the AED, portable oxygen tank and foldable wheelchair/transport trolley) and drugs are checked and restocked after each code blue response', 'Code Blue kit/equipment is kept in a secure place and readily available; the key is under the responsibility of the Medical Assistant In Charge, stationed in Call Center 2: Ext 6700']},
      {h:'The mobile resuscitation kit/bag', src:'Section 1.0, p7', items:['AED (Automated External Defibrillator)', 'Airway equipment', 'Suction', 'Oxygen', 'Resuscitation drugs: adrenaline, atropine and lignocaine', 'An IV (intravenous) setup, to optimise the patient before transfer to a designated primary management area', 'Areas where patients are routinely admitted or visited should have a crash cart or emergency trolley (intubation set, bag-valve-masks, venous branulas, airway adjuncts and resuscitation drugs)']},
      {h:'Basic resuscitation kit, for hospital staff and primary response teams', src:'Section 5.5e, p18', items:['Dextrostix and glucometer', 'Bag-valve mask', 'AED (designated areas)', 'Disposable and sterile gloves', 'Oro-pharyngeal and naso-pharyngeal airways', 'The maintenance of these kits is the responsibility of the staff working where they are placed (5.5f)']},
      {h:'Advanced resuscitation kit (crash cart)', src:'Appendix vi, p27: a modified bag with pockets for resuscitation equipment and drugs', table:{head:['No', 'Equipment', 'Quantity'], rows:[
        ['1', 'Automated External Defibrillator (AED)', '1'],
        ['2', 'Portable oxygen cylinder', '1'],
        ['3', 'Oxygen tubing', '1'],
        ['4', 'Nebuliser mask set', '1'],
        ['5', 'High flow mask', '1'],
        ['6', 'Bag-Valve Mask (BVM)', '1'],
        ['7', 'Pocket mask', '1'],
        ['8', 'Oro-pharyngeal airway', '1'],
        ['9', 'Naso-pharyngeal airway', '1'],
        ['10', 'Portable suction', '1'],
        ['11', 'Stethoscope', '1'],
        ['12', 'Intravenous drip setup: a) Cannulas (14G, 16G, 18G, 20G); b) Intravenous giving set (tubing); c) Isotonic saline', 'a) 5 for each size; b) 2 set; c) 2 bottles'],
        ['13', 'Syringes (5ml, 10ml, 20ml)', '5 for each'],
        ['14', 'Needles (20G, 18G, 16G)', '5 for each'],
        ['15', 'Drugs: Adrenaline, Atropine, Lignocaine, Verapamil, Adenosine, Naloxone, Flumazenil, Sodium Bicarbonate, Hydrocortisone, Dextrose 50 %, water for injection, Combivent nebuliser solution, Salbutamol MDI, Aspirin, GTN', 'None printed'],
        ['16', 'Additional drugs, as assessed for individual cases; ex: Bronchial Asthma (Terbutaline, Magnesium sulphate); Seizures (Rectal & IV Diazepam); Intubation (IV Midazolam)', 'None printed'],
        ['17', 'Intubation equipment: a) Laryngoscope; b) Endotracheal tube', 'a) 2; b) 2 for each size'],
        ['18', 'Disposable and sterile gloves', '5 pairs each'],
        ['19', 'Scissors', '1 pair'],
        ['20', 'Scalpel blades', '5 pieces'],
        ['21', 'Gauze, crepe bandages, ribbon gauze and plaster strips (durapore/micropore)', 'None printed'],
        ['22', 'Methylated sterile spirit swabs', '20 pieces']]}},
      {h:'Training', src:'Sections 5.5 and 7.0, p17 – 20', items:['All personnel shall be required to undertake training required to be a certified BLS Provider (5.5a)', 'All personnel are required to be able to operate the AED machine independently (5.5b)', 'BLS or ACLS certification for team members is required (7.0)', 'BLS, ACLS and ALS courses are also provided to staff from the hospital\'s departments and units: contact the Code Blue Committee (7.0)']}
    ]},
    {l:'Record', notes:[
      {h:'Code Blue Record Clerking Sheet (Code_blue/CS-01)', src:'Appendix vii, p28 (version 2019). The primary responder and the Code Blue team record the pertinent data on it (5.3f, p16)', fig:'cbsheet', items:[
        'Patient demographic data: name, sex, race; date and time; primary responder area',
        'Type of emergency: 1. Medical emergency (chest pain / syncope / stroke / seizures / hypoglycaemia); 2. Cardio respiratory arrest (unresponsive / pulseless / not breathing), with the times CPR commenced and of ROSC; 3. Trauma (fall with / without fracture)',
        'Observations: time, BP, HR, SpO2, GCS, drugs/dosage, IV fluids/volume',
        'To be filled by the Code Blue team: IC no, age and the Code Blue activation time; the observations; airway (intubated, suction, ETT/LMA); breathing (regular, irregular, arrest, NpO2, HFMO2); ECG, DXT and others; diagnosis',
        'Attending clinician: the 1st responder and the 2nd responder/Code Blue team, each with name, designation, contact number and signature',
        'To be filled in the event of discharge against medical advice (DAMA)']},
      {h:'Discharge against medical advice (DAMA), on the same sheet', src:'Appendix vii, p28', items:['Saya dengan ini melepaskan pihak hospital dan petugas ambulans kecemasan daripada sebarang tanggungjawab atas keputusan saya', 'In English, the guide\'s translation: I hereby release the hospital and the emergency ambulance staff from any responsibility for my decision', 'Name, IC no and signature of the patient, the Code Blue team and a witness']}
    ]},
    {l:'Bystander poster', notes:[
      {h:'Ada situasi kecemasan di kawasan hospital?', src:'Appendix i, Poster for Bystander, p22 (Jawatankuasa CODE BLUE, Hospital Kuala Lumpur, 2016), as printed', items:['Pengsan/pitam · Serangan jantung · Trauma', '1. Jangan panik!', '2. Minta bantuan staf kesihatan berhampiran: doktor, jururawat, penolong pegawai perubatan; atau pergi ke wad/klinik berhampiran untuk mendapatkan bantuan', '3. Maklumkan masalah & lokasi kecemasan', 'EXT. 5333 / 03-26155333', 'Tindakan pantas anda mampu menyelamatkan nyawa!']},
      {h:'The same poster in English', src:'The guide\'s translation of the poster above', items:['An emergency in the hospital grounds? Fainting, a heart attack or an injury', '1. Do not panic', '2. Ask the nearest health staff for help (a doctor, a nurse or an assistant medical officer), or go to the nearest ward or clinic for help', '3. Say what the problem is and where the emergency is', 'Ext 5333 / 03-2615 5333', 'Your quick action can save a life']},
      {h:'When the public finds someone', src:'Section 5.1, Alert system, p14', items:['A bystander raises the alarm: any hospital personnel nearby (Primary Responder) attends to initiate BLS and at the same time activates the call center at 5333', 'If the medical emergency is witnessed by a lay person or the public, the nearest clinic or ward is activated, followed by the call center for the Code Blue team', 'The 5333 number is provided to all members of the Primary Responder and Code Blue teams, the wards, the clinical and non-clinical areas including the multi-storey car park, and the auxiliary police']}
    ]},
    {l:'Emergency codes', notes:[
      {h:'The hospital\'s emergency colour codes', src:'HKL Emergency Color Codes: Rapid Response Guide, the card shared by the guide owner on 10 Nov 2026. It prints no issuer or date; the person in charge it names for each code is not copied here', fig:'cbcodes'}
    ]}
  ],
  refs:['Code Blue Manual 2022/2024, 5th edition: Emergency Rapid Response System for Medical Emergencies in Hospital Kuala Lumpur. Code Blue Committee, Emergency and Trauma Department, Hospital Kuala Lumpur (committee of 2022). Tables 1 and 2; Appendices i to vii, with the Code Blue Record Clerking Sheet, Code_blue/CS-01 (version 2019).', 'HKL Emergency Color Codes: Rapid Response Guide (a card; no issuer or date printed), shared 10 Nov 2026.']
};

/* ---------- The medical interpreter service: the HKL Director's memo of 9 July 2026 ---------- */
P['interpreter'] = {
  title:'Medical interpreters', src:'HKL memo, 9 Jul 2026', grp:'rules', sub:'protocol', isnew:true,
  hero:'interp',
  kw:'interpreter translator translation language chinese bengali bangla nepal bangladesh foreigner foreign worker jurubahasa operator switchboard',
  lead:'For a patient or family who does not understand the hospital\'s language: medical interpreters for Mandarin, Tamil, Nepali and Bangladeshi, through the HKL operator on line 0. From the Director\'s memo of 9 July 2026 (the Patient and Family Rights Committee) and its flow chart.',
  see:[['#safe-practice--notes', 'Notes, consent and records'], ['#numbers', 'Numbers to know']],
  start:'lang',
  nodes:{
    lang:{q:'Which language does the patient or family speak?', hint:'The service covers Bahasa Mandarin, Tamil, Nepal and Bangladesh (memo, paragraph 2).', opts:[['Mandarin · 华语', 'call'], ['Tamil · தமிழ்', 'call'], ['Nepali · नेपाली', 'call'], ['Bangladeshi · বাংলা', 'call'], ['Another language', 'other']]},
    call:{step:'Call line 0, the HKL operator (IbuSawat HKL)', fig:'interp', items:[
      'The health staff member from the clinical department, division or unit that needs the service calls line 0, IbuSawat HKL (Lampiran 1, step 2)',
      'The operator\'s customer service officer (telephonist) calls the medical interpreter for that language, from the list of medical interpreters appointed by HKL management (step 3)'], next:'talk'},
    talk:{end:'neutral', title:'Talk through the interpreter, on the line or in person', items:[
      'The line is put through to the medical interpreter, to communicate (Lampiran 1, step 4)',
      'The requester and the medical interpreter talk, for the interpreter to attend in person (step 5)',
      'Questions about the service: the Medical Officer of the Quality and Medicolegal Subunit, Risk Management and Clinical Surveillance Unit (memo, paragraph 3)'],
      gap:'Source: memo HKL/UEML/98/133, 9 Jul 2026, from the Director of HKL, and its flow chart (Lampiran 1). The interpreters\' terms of reference (Lampiran 2) were not in the copy seen: listed under Still to confirm.'},
    other:{end:'neutral', title:'Another language: not covered by the memo', items:[
      'The memo\'s service covers Mandarin, Tamil, Nepali and Bangladeshi',
      'Questions about the service: the Medical Officer of the Quality and Medicolegal Subunit, Risk Management and Clinical Surveillance Unit (memo, paragraph 3)'],
      gap:'The memo does not say what to do for other languages.'}
  },
  notesFoot:'From the HKL Director\'s memo HKL/UEML/98/133 of 9 July 2026 and its flow chart (Lampiran 1), in Malay as printed with the guide\'s English. The signatures, stamps and registration numbers on the memo are not copied.',
  notes:[
    {l:'The memo', notes:[
      {h:'Pemakluman perkhidmatan Jurubahasa Perubatan (Interpreter) Hospital Kuala Lumpur', src:'Memo HKL/UEML/98/133, 9 Julai 2026, from the Director of HKL to the distribution list; received by the ED on 14 Jul 2026 and passed on to all its specialists, medical officers, PPK, PPP and nurses', items:[
        'Untuk makluman, pihak Jawatankuasa Patient and Family Rights Hospital Kuala Lumpur (HKL) ini telah menyediakan perkhidmatan Jurubahasa Perubatan (Interpreter) sebagai satu medium penghubung antara kakitangan kesihatan dan pesakit/waris pesakit yang tidak memahami bahasa pengantar hospital. Penyediaan perkhidmatan Jurubahasa Perubatan ini melibatkan Bahasa Mandarin/Tamil/Nepal/Bangladesh. Terma rujukan Jurubahasa Perubatan adalah seperti di Lampiran 2.',
        'Sehubungan itu, bersama-sama ini disertakan Carta Alir Perkhidmatan Jurubahasa Perubatan HKL seperti di Lampiran 1. Sekiranya terdapat sebarang pertanyaan, sila hubungi Pegawai Perubatan Subunit Kualiti dan Medikolegal, Unit Pengurusan Risiko dan Survelan Klinikal.']},
      {h:'The same memo in English', src:'The guide\'s translation of paragraphs 2 and 3', items:[
        'The HKL Patient and Family Rights Committee has set up a medical interpreter service, to link health staff with patients or their families who do not understand the hospital\'s language. It covers Mandarin, Tamil, Nepali and Bangladeshi. The interpreters\' terms of reference are in Lampiran 2.',
        'The flow chart of the service is in Lampiran 1. For any questions, contact the Medical Officer of the Quality and Medicolegal Subunit, Risk Management and Clinical Surveillance Unit.']}
    ]},
    {l:'Flow chart', notes:[
      {h:'Carta alir perkhidmatan Jurubahasa Perubatan, Hospital Kuala Lumpur', src:'Lampiran 1, as printed', fig:'interp', items:[
        'Mula',
        '1. Pihak Jabatan Klinikal/Bahagian/Unit memerlukan perkhidmatan Jurubahasa Perubatan',
        '2. Kakitangan Kesihatan dari Jabatan Klinikal/Bahagian/Unit terlibat menghubungi Talian 0 (IbuSawat HKL)',
        '3. Pegawai Perkhidmatan Pelanggan (Telefonis) IbuSawat HKL menghubungi Jurubahasa Perubatan yang berkaitan mengikut senarai Jurubahasa Perubatan yang telah dilantik oleh pihak pengurusan HKL',
        '4. Talian disambung kepada Jurubahasa Perubatan untuk berkomunikasi',
        '5. Komunikasi antara pemohon dan Jurubahasa Perubatan untuk hadir ke lapangan',
        'Tamat']},
      {h:'The same flow chart in English', src:'The guide\'s translation of Lampiran 1', items:[
        '1. A clinical department, division or unit needs a medical interpreter',
        '2. A health staff member from that department, division or unit calls line 0 (IbuSawat HKL, the hospital operator)',
        '3. The operator\'s customer service officer (telephonist) calls the medical interpreter for the language, from the list of interpreters appointed by HKL management',
        '4. The line is put through to the interpreter, to communicate',
        '5. The requester and the interpreter talk, for the interpreter to attend in person']}
    ]}
  ],
  refs:['Pemakluman perkhidmatan Jurubahasa Perubatan (Interpreter) Hospital Kuala Lumpur: memo HKL/UEML/98/133, 9 Julai 2026, Director of Hospital Kuala Lumpur; Lampiran 1, Carta Alir Perkhidmatan Jurubahasa Perubatan Hospital Kuala Lumpur. Received by the Emergency and Trauma Department on 14 Jul 2026.']
};

/* The older Code Blue step in Safe practice now points here, with the manual's current edition */
P['safe-practice'].nodes.blue = {end:'neutral', title:'Code Blue outside the ED', items:['In-hospital emergency or arrest outside the ED: activate Code Blue on the ED Call Centre, ext 5333 (03-2615 5333); Call Centre 2 is ext 6700', 'SCACC: Anaesthesia ext 1133 / 1134 and the ED on 5333; after 1700 hr, 5333', 'The ED Code Blue team (EP on call, Red or Yellow Zone MO, runner SN, treatment room MA, attendant) arrives within 10 minutes', 'Death at the scene: the primary team declares it, and the body goes directly to Forensic, ext 6695'], links:[['#code-blue', 'Code Blue, step by step'], ['#code-blue--codes', 'The other emergency codes']], gap:'Source: Code Blue Manual 2022/2024, 5th edition, ETD HKL.'};
P['safe-practice'].refs = P['safe-practice'].refs.map(r => r === 'Code Blue Manual, ETD HKL, 2019' ? 'Code Blue Manual 2022/2024, 5th edition, ETD HKL' : r);

/* The rabies protocol (Krishna, 10 Nov 2026, sent again as MANAGEMENT_OF_RABIES__ABC_HKL.pdf, the same file): download it as well as open it */
P['animal-bites'].docs = [['https://drive.google.com/uc?export=download&id=1k8Yh8oSoEMw3MPJ02kf19ujBnxCXMsX8', 'Download the protocol (PDF)']];
P['animal-bites'].nodes.abc.links.push(['https://drive.google.com/uc?export=download&id=1k8Yh8oSoEMw3MPJ02kf19ujBnxCXMsX8', 'Download the protocol']);

/* The rabies protocol's own banner: an amber glass paw print and a vaccine vial (Flow Studio, 10 Nov 2026) */
P['animal-bites'].hero = 'rabies';
