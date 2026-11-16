/* ================= 16 Nov 2026: calculators built into the guide in place of MDCalc links =================
   At Krishna's "A, B and C as recommended" (CALC-RESEARCH.md) and "Alvarado, the syncope rules, qSOFA, NEWS2, CIWA and
   burns: install this calculator". Copying MDCalc or PEMCalc is not allowed, even with credit, so each score is rebuilt from
   its own source (standing rule 8): every number below was read on the page named in its step, on 16 Nov 2026.
   Group A, sources the guide already admits: the head injury CPG 2015 (Canadian CT Head Rule p26, Canadian C-spine Rule
   Appendix 6 p55, NEXUS Appendix 7 p56: quoted, MaHTAS allows it) and the VTE CPG 2013 (PE Wells score, Table 3.1.2 p45,
   and its PE algorithm p47: in the guide's own words, as that entry is). TIMI and HEART are already in P['acs-cpg'], and the
   Ottawa ankle, foot and knee rules in P['xray-guide'].
   Group B, two CPGs admitted for their scores: the atrial fibrillation CPG 2012 (Tables 12 and 14: no reproduction terms, so
   facts in the guide's own words) and the abdominal trauma CPG 2025 (Table 6, MEWS: quoted).
   Group C, each score's own paper or its owner's page, in the guide's own words with credit (P['ed-scores']).
   The calculators read their items from here (CALCS in engine.js, with CALC_FACTS). */

/* ---- Head injury CPG 2015: the Canadian CT Head Rule, the Canadian C-spine Rule and NEXUS ---- */
Object.assign(P['head-injury-cpg'].nodes, {
  cthr:{check:'any', q:'Canadian CT Head Rule: any high-risk factor?', hint:'Head injury CPG 2015, p26 (boxed). CT Head Rule is only applicable for patients with minor head injuries: witnessed loss of consciousness, definite amnesia or witnessed disorientation in a patient with a GCS score of 13 - 15 (p26). The CPG\'s own decision on a head CT, and how soon, is Algorithm 3.',
    items:['GCS score <15 at two hours after injury', 'Suspected open or depressed skull fracture', 'Any sign of basal skull fracture (haemotympanum, ‘racoon’ eyes, cerebrospinal fluid otorrhoea/rhinorrhoea, Battle’s sign)', 'Vomiting ≥2 episodes', 'Age ≥65 years'],
    opts:[['Any one: high risk (for neurological intervention)','cthrhi'],['None','cthrm']]},
  cthrm:{check:'any', q:'Canadian CT Head Rule: any medium-risk factor?', hint:'Head injury CPG 2015, p26.',
    items:['Amnesia before impact >30 minutes', 'Dangerous mechanism (pedestrian struck by motor vehicle, occupant ejected from motor vehicle, fall from height >3 feet or 5 stairs)'],
    opts:[['Any one: medium risk (for brain injury on CT)','cthrmid'],['None','cthrlo']]},
  cthrhi:{end:'neutral', title:'Canadian CT Head Rule: high risk (for neurological intervention)', items:['A. High risk (for neurological intervention), as the CPG prints the rule (p26)', 'The CPG prints the rule\'s risk groups without an action of its own: decide the CT and how soon by Algorithm 3'], links:[['#head-injury-cpg--imm','Head CT: Algorithm 3']], gap:'Head injury CPG 2015, p26. Patients on anticoagulation or antiplatelet therapy have a positive head CTs of 29% despite having a GCS score of 15 (p26).'},
  cthrmid:{end:'neutral', title:'Canadian CT Head Rule: medium risk (for brain injury on CT)', items:['B. Medium risk (for brain injury on CT), as the CPG prints the rule (p26)', 'Decide the CT and how soon by Algorithm 3'], links:[['#head-injury-cpg--imm','Head CT: Algorithm 3']], gap:'Head injury CPG 2015, p26.'},
  cthrlo:{end:'neutral', title:'Canadian CT Head Rule: no high- or medium-risk factor', items:['None of the rule\'s factors (p26)', 'The CPG prints only the two risk groups; its CT decision is Algorithm 3, which has risk factors of its own (anticoagulation, for example)'], links:[['#head-injury-cpg--imm','Head CT: Algorithm 3']], gap:'Head injury CPG 2015, p26.'},
  ccr1:{check:'any', q:'Canadian C-spine Rule: any high risk factor which mandates radiography?', hint:'Appendix 6 (p55): for alert (GCS=15) and stable trauma patients where cervical spine injury is concern. Source printed there: Stiell IG, Clement CM, McKnight RD, et al. The Canadian C-spine rule versus the NEXUS low-risk criteria in patients with trauma. N Engl J Med. 2003 349(26):2510-2518.',
    items:['Age >65 years old', 'Dangerous mechanism: fall from elevation >3 feet/5 stairs; axial load to head e.g. diving; MVC high speed (>100km/hour), rollover, ejection; motorised recreational vehicles; bicycle collision', 'Paraesthesia in extremities'],
    opts:[['Yes, any one','ccrx'],['No','ccr2']]},
  ccr2:{check:'any', q:'Any low risk factor which allows safe assessment of range of motion?', hint:'Appendix 6 (p55).',
    items:['Simple rear-end MVC (it excludes: pushed into oncoming traffic; hit by bus/large truck; rollover; hit by high speed vehicle)', 'Sitting position in ED', 'Ambulatory at any time', 'Delayed onset of neck pain (i.e. not immediate onset of neck pain)', 'Absence of midline c-spine tenderness'],
    opts:[['Yes, any one','ccr3'],['No','ccrx']]},
  ccr3:{q:'Able to actively rotate neck? 45° left and right', hint:'Appendix 6 (p55).', opts:[['Able','ccrok'],['Unable','ccrx']]},
  ccrx:{end:'neutral', title:'Radiography (Canadian C-spine Rule)', items:['Radiography (Appendix 6, p55)'], gap:'Head injury CPG 2015, Appendix 6 (p55).'},
  ccrok:{end:'neutral', title:'No radiography (Canadian C-spine Rule)', items:['No Radiography (Appendix 6, p55)'], gap:'Head injury CPG 2015, Appendix 6 (p55): for alert (GCS=15) and stable trauma patients only.'},
  nexus:{check:'all', q:'NEXUS: does the patient meet all five low-risk criteria?', hint:'Appendix 7 (p56): cervical-spine radiography is indicated for patients with trauma unless they meet all of the following criteria. Criteria are from Hoffman and colleagues.',
    items:['No posterior midline cervical-spine tenderness', 'No evidence of intoxication', 'A normal level of alertness', 'No focal neurologic deficit', 'No painful distracting injuries'],
    info:['Midline posterior bony cervical-spine tenderness is present if the patient reports pain on palpation of the posterior midline neck from the nuchal ridge to the prominence of the first thoracic vertebra, or if the patient evinces pain with direct palpation of any cervical spinous process.',
      'Patients should be considered intoxicated if they have either of the following: a recent history provided by the patient or an observer of intoxication or intoxicating ingestion, or evidence of intoxication on physical examination such as an odour of alcohol, slurred speech, ataxia, dysmetria, or other cerebellar findings, or any behaviour consistent with intoxication.',
      'An altered level of alertness can include any of the following: a GCS score of 14 or less; disorientation to person, place, time, or events; an inability to remember three objects at five minutes; a delayed or inappropriate response to external stimuli; or other findings.',
      'A focal neurologic deficit is any focal neurologic finding on motor or sensory examination.',
      'No precise definition of a painful distracting injury is possible. This category includes any condition thought by the clinician to be producing pain sufficient to distract the patient from a second (neck) injury.'],
    opts:[['All five met','nexok'],['Any one not met','nexx']]},
  nexok:{end:'neutral', title:'NEXUS: all five low-risk criteria met', items:['Low probability of cervical injury: NEXUS does not call for radiography (Appendix 7, p56)'], gap:'Head injury CPG 2015, Appendix 7 (p56). Source printed there: Stiell IG, et al. N Engl J Med. 2003 349(26):2510-2518.'},
  nexx:{end:'neutral', title:'NEXUS: cervical-spine radiography is indicated', items:['Cervical-spine radiography is indicated for patients with trauma unless they meet all of the criteria (Appendix 7, p56)'], gap:'Head injury CPG 2015, Appendix 7 (p56).'}
});
P['head-injury-cpg'].nodes.menu.opts.push(['Canadian CT Head Rule (p26)','cthr'], ['Neck: Canadian C-spine Rule (Appendix 6)','ccr1'], ['Neck: NEXUS low-risk criteria (Appendix 7)','nexus']);

/* ---- VTE CPG 2013: the PE Wells score and the CPG's PE algorithm, in the guide's own words ---- */
Object.assign(P['vte-cpg'].nodes, {
  pewells:{check:'score', q:'PE Wells score: tick what applies', hint:'Table 3.1.2 (p45). The CPG notes the Wells criteria were well tested in managing non-pregnant patients with suspected PE (p47). PE likely above 4 points; PE unlikely at 4 points or fewer.',
    items:[['Clinical signs and symptoms of DVT (at least leg swelling and pain on palpation of the deep veins)', 3], ['An alternative diagnosis is less likely than PE', 3], ['Heart rate over 100 beats/min', 1.5], ['Immobilisation or surgery in the previous 4 weeks', 1.5], ['Previous DVT or PE', 1.5], ['Haemoptysis', 1], ['Malignancy (on treatment, treated in the last 6 months, or palliative)', 1]],
    suggest:s => s > 4 ? 0 : 1, opts:[['PE likely (more than 4 points)','pelik'],['PE unlikely (4 points or fewer)','peunl']]},
  pelik:{step:'PE likely: cover with LMWH, and a CTPA the same day', items:['Cover the patient with LMWH and arrange a CT pulmonary angiogram (CTPA) on the same day or within the next 24 hours (p47)', 'A ventilation-perfusion scan still has a role with allergy to iodinated contrast or a suspected peripheral PE; few centres in Malaysia have one (p47)'], next:'peq'},
  peq:{q:'CTPA result?', hint:'Algorithm for PE diagnosis (p47).', opts:[['Positive','petx'],['Negative: bilateral compression ultrasound (CUS) next','pecus']]},
  pecus:{q:'Bilateral CUS result?', hint:'Algorithm for PE diagnosis (p47).', opts:[['Positive','petx'],['Negative','pedc']]},
  petx:{end:'admit', title:'Diagnose PE and treat', items:['Diagnose PE and treat (algorithm, p47)'], links:[['#vte-cpg--tx','Treatment: the entry\'s VTE steps']], gap:'VTE CPG 2013, p47.'},
  pedc:{end:'discharge', title:'CTPA and CUS negative: discharge to the health clinic', items:['If the CTPA and then the bilateral CUS are negative, the patient can be discharged to the health clinic (p47)'], gap:'VTE CPG 2013, p47.'},
  peunl:{end:'neutral', title:'PE unlikely: exclude PE', items:['In the CPG\'s algorithm a PE Wells score of 4 or less leads straight to "Exclude PE" (p47), with no D-dimer step', 'The CPG notes that the whole blood agglutination D-dimer used in most Malaysian laboratories is not sensitive in ruling out VTE (p46)'], links:[['#ed-scores--perc','PERC rule (Kline 2008)'], ['#ed-scores--ddimer','Age-adjusted D-dimer (ADJUST-PE)']], gap:'VTE CPG 2013, p46 and p47.'}
});
P['vte-cpg'].nodes.menu.opts.push(['Suspected PE: Wells score (Table 3.1.2)','pewells']);

/* ---- Scores and rules from their own sources ---- */
const NEWS2_ROWS = [
  ['Respiration rate (per minute)', [['≤8', 3], ['9–11', 1], ['12–20', 0], ['21–24', 2], ['≥25', 3]]],
  ['SpO2 Scale 1 (%)', [['≤91', 3], ['92–93', 2], ['94–95', 1], ['≥96', 0]]],
  ['SpO2 Scale 2 (%)', [['≤83', 3], ['84–85', 2], ['86–87', 1], ['88–92, or ≥93 on air', 0], ['93–94 on oxygen', 1], ['95–96 on oxygen', 2], ['≥97 on oxygen', 3]]],
  ['Air or oxygen?', [['Air', 0], ['Oxygen', 2]]],
  ['Systolic blood pressure (mmHg)', [['≤90', 3], ['91–100', 2], ['101–110', 1], ['111–219', 0], ['≥220', 3]]],
  ['Pulse (per minute)', [['≤40', 3], ['41–50', 1], ['51–90', 0], ['91–110', 1], ['111–130', 2], ['≥131', 3]]],
  ['Consciousness', [['Alert', 0], ['CVPU', 3]]],
  ['Temperature (°C)', [['≤35.0', 3], ['35.1–36.0', 1], ['36.1–38.0', 0], ['38.1–39.0', 1], ['≥39.1', 2]]]
];
const MEWS_ROWS = [
  ['Systolic blood pressure (mmHg)', [['<70', 3], ['71 - 80', 2], ['81 - 100', 1], ['101 - 199', 0], ['≥200', 2]]],
  ['Heart rate (beats/min)', [['<40', 2], ['41 - 50', 1], ['51 - 100', 0], ['101 - 110', 1], ['111 - 129', 2], ['≥130', 3]]],
  ['Respiratory rate (breath/min)', [['<9', 2], ['9 - 14', 0], ['15 - 20', 1], ['21 - 29', 2], ['≥30', 3]]],
  ['Temperature (°C)', [['<35', 2], ['35.1 - 38.4', 0], ['≥38.5', 2]]],
  ['Neurological status', [['Alert', 0], ['Reacting to voice', 1], ['Reacting to pain', 2], ['Unresponsive', 3]]]
];
/* CIWA-Ar, as the scale is printed (Sullivan et al. 1989): "The CIWA-Ar is not copyrighted and may be reproduced freely." */
const CIWA_ROWS = [
  ['Nausea and vomiting', 'Ask "Do you feel sick to your stomach? Have you vomited?" Observation.', ['no nausea and no vomiting', 'mild nausea with no vomiting', '', '', 'intermittent nausea with dry heaves', '', '', 'constant nausea, frequent dry heaves and vomiting']],
  ['Tactile disturbances', 'Ask "Have you any itching, pins and needles sensations, any burning, any numbness, or do you feel bugs crawling on or under your skin?" Observation.', ['none', 'very mild itching, pins and needles, burning or numbness', 'mild itching, pins and needles, burning or numbness', 'moderate itching, pins and needles, burning or numbness', 'moderately severe hallucinations', 'severe hallucinations', 'extremely severe hallucinations', 'continuous hallucinations']],
  ['Tremor', 'Arms extended and fingers spread apart. Observation.', ['no tremor', 'not visible, but can be felt fingertip to fingertip', '', '', 'moderate, with patient\'s arms extended', '', '', 'severe, even with arms not extended']],
  ['Auditory disturbances', 'Ask "Are you more aware of sounds around you? Are they harsh? Do they frighten you? Are you hearing anything that is disturbing to you? Are you hearing things you know are not there?" Observation.', ['not present', 'very mild harshness or ability to frighten', 'mild harshness or ability to frighten', 'moderate harshness or ability to frighten', 'moderately severe hallucinations', 'severe hallucinations', 'extremely severe hallucinations', 'continuous hallucinations']],
  ['Paroxysmal sweats', 'Observation.', ['no sweat visible', 'barely perceptible sweating, palms moist', '', '', 'beads of sweat obvious on forehead', '', '', 'drenching sweats']],
  ['Visual disturbances', 'Ask "Does the light appear to be too bright? Is its color different? Does it hurt your eyes? Are you seeing anything that is disturbing to you? Are you seeing things you know are not there?" Observation.', ['not present', 'very mild sensitivity', 'mild sensitivity', 'moderate sensitivity', 'moderately severe hallucinations', 'severe hallucinations', 'extremely severe hallucinations', 'continuous hallucinations']],
  ['Anxiety', 'Ask "Do you feel nervous?" Observation.', ['no anxiety, at ease', 'mild anxious', '', '', 'moderately anxious, or guarded, so anxiety is inferred', '', '', 'equivalent to acute panic states as seen in severe delirium or acute schizophrenic reactions']],
  ['Headache, fullness in head', 'Ask "Does your head feel different? Does it feel like there is a band around your head?" Do not rate for dizziness or lightheadedness. Otherwise, rate severity.', ['not present', 'very mild', 'mild', 'moderate', 'moderately severe', 'severe', 'very severe', 'extremely severe']],
  ['Agitation', 'Observation.', ['normal activity', 'somewhat more than normal activity', '', '', 'moderately fidgety and restless', '', '', 'paces back and forth during most of the interview, or constantly thrashes about']],
  ['Orientation and clouding of sensorium', 'Ask "What day is this? Where are you? Who am I?"', ['oriented and can do serial additions', 'cannot do serial additions or is uncertain about date', 'disoriented for date by no more than 2 calendar days', 'disoriented for date by more than 2 calendar days', 'disoriented for place/or person']]
];
const rowLine = ([h, bands]) => h + ': ' + bands.map(([b, s]) => b + ' scores ' + s).join('; ');
/* The Canadian Syncope Risk Score's estimated risk of a serious adverse event within 30 days, by total (Figure 2) */
const CSRS_RISK = [[-3, '0.4', 'Very Low'], [-2, '0.7', 'Very Low'], [-1, '1.2', 'Low'], [0, '1.9', 'Low'], [1, '3.1', 'Medium'], [2, '5.1', 'Medium'], [3, '8.1', 'Medium'], [4, '12.9', 'High'], [5, '19.7', 'High'], [6, '28.9', 'Very High'], [7, '40.3', 'Very High'], [8, '52.8', 'Very High'], [9, '65.0', 'Very High'], [10, '75.5', 'Very High'], [11, '83.6', 'Very High']];
/* The AF CPG's adjusted stroke rate by CHA2DS2-VASc score (Table 12c, %/year) */
const CHADS_RATE = ['0%', '1.30%', '2.20%', '3.20%', '4.00%', '6.70%', '9.80%', '9.60%', '6.70%', '15.20%'];
const RULE_OF_NINES = [['Head (front 4.5%, back 4.5%)', 9], ['Right arm', 9], ['Left arm', 9], ['Anterior torso', 18], ['Back', 18], ['Right leg', 18], ['Left leg', 18], ['Genitalia', 1]];

/* Children's heart and breathing rates: Fleming S, Thompson M, Stevens R, et al. Lancet 2011;377:1011-8 (PMC3789232),
   web appendix p12, Web Tables 4 (breathing rate) and 5 (heart rate), read 16 Nov 2026. Written by a script from the appendix's
   text layer and checked against its page image; not retyped. Each row: [age band, 1st, 10th, 25th centile, median, 75th, 90th,
   99th centile]. 'Birth' (heart rate only) is the immediate neonatal period. The calculator shows only the band picked. */
const FLEMING_RR = [['0–3 m', 25, 34, 40, 43, 52, 57, 66],
  ['3–6 m', 24, 33, 38, 41, 49, 55, 64],
  ['6–9 m', 23, 31, 36, 39, 47, 52, 61],
  ['9–12 m', 22, 30, 35, 37, 45, 50, 58],
  ['12–18 m', 21, 28, 32, 35, 42, 46, 53],
  ['18–24 m', 19, 25, 29, 31, 36, 40, 46],
  ['2–3 y', 18, 22, 25, 28, 31, 34, 38],
  ['3–4 y', 17, 21, 23, 25, 27, 29, 33],
  ['4–6 y', 17, 20, 21, 23, 25, 27, 29],
  ['6–8 y', 16, 18, 20, 21, 23, 24, 27],
  ['8–12 y', 14, 16, 18, 19, 21, 22, 25],
  ['12–15 y', 12, 15, 16, 18, 19, 21, 23],
  ['15–18 y', 11, 13, 15, 16, 18, 19, 22]];
const FLEMING_HR = [['Birth', 90, 107, 116, 127, 138, 148, 164],
  ['0–3 m', 107, 123, 133, 143, 154, 164, 181],
  ['3–6 m', 104, 120, 129, 140, 150, 159, 175],
  ['6–9 m', 98, 114, 123, 134, 143, 152, 168],
  ['9–12 m', 93, 109, 118, 128, 137, 145, 161],
  ['12–18 m', 88, 103, 112, 123, 132, 140, 156],
  ['18–24 m', 82, 98, 106, 116, 126, 135, 149],
  ['2–3 y', 76, 92, 100, 110, 119, 128, 142],
  ['3–4 y', 70, 86, 94, 104, 113, 123, 136],
  ['4–6 y', 65, 81, 89, 98, 108, 117, 131],
  ['6–8 y', 59, 74, 82, 91, 101, 111, 123],
  ['8–12 y', 52, 67, 75, 84, 93, 103, 115],
  ['12–15 y', 47, 62, 69, 78, 87, 96, 108],
  ['15–18 y', 43, 58, 65, 73, 83, 92, 104]];
const FLEMING_C = ['1st centile', '10th centile', '25th centile', 'median', '75th centile', '90th centile', '99th centile'];

P['ed-scores'] = {
  title:'Scores and rules from their own sources', grp:'cpg', own:true, isnew:true,
  src:'Named sources, one on each step',
  lead:'The emergency scores the Green Zone uses that its ebook and department documents do not define, each rebuilt from its own source in the guide\'s own words and credited to its authors: the CPGs that print them (atrial fibrillation 2012, abdominal trauma 2025), or the score\'s own paper or owner. Every number was read on the page named on its step (16 Nov 2026). Each has its calculator.',
  kw:'score scores rule rules calculator mdcalc abcd2 ottawa sah subarachnoid thunderclap perc d-dimer ddimer adjust-pe alvarado mantrels san francisco canadian syncope risk score csrs qsofa news2 mews cha2ds2-vasc chads has-bled hasbled ciwa ciwa-ar rule of nines parkland tbsa apls fleming centiles',
  start:'menu',
  nodes:{
    menu:{q:'Which score or rule?', hint:'Each step names its source and page, and gives the score\'s limits. A score supports the doctor\'s judgement; it does not replace the ebook\'s pathway or a department protocol, and where the two differ the step says so.', opts:[
      ['ABCD2 score (after a TIA)','abcd2'],
      ['Ottawa SAH rule (acute headache)','sah'],
      ['PERC rule (suspected PE)','perc'],
      ['Age-adjusted D-dimer (suspected PE)','ddimer'],
      ['San Francisco Syncope Rule','sfsr'],
      ['Canadian Syncope Risk Score','csrs'],
      ['Alvarado score (appendicitis)','alvarado'],
      ['qSOFA (suspected infection)','qsofa'],
      ['NEWS2 (adults)','news2'],
      ['MEWS (abdominal trauma CPG 2025)','mews'],
      ['CHA2DS2-VASc (AF CPG 2012)','chads'],
      ['HAS-BLED (AF CPG 2012)','hasbled'],
      ['CIWA-Ar (alcohol withdrawal)','ciwa'],
      ['Burns: size and fluids (TBSA, Parkland)','bsz'],
      ['Weight from age, 1 to 10 years','wtage'],
      ['Fleming centiles: heart and breathing rates by age (children)','vitals']]},

    /* ABCD2: Johnston SC et al. Lancet 2007;369:283-92 (abstract, PMID 17258668) */
    abcd2:{check:'score', q:'ABCD2 score: tick what applies', hint:'Johnston et al., Lancet 2007 (abstract): a unified score for the early risk of stroke after a TIA, validated in four groups of patients seen in emergency departments and clinics in the USA and UK. Take one clinical feature (unilateral weakness 2, or speech impairment without weakness 1) and one duration (60 min or longer 2, or 10 to 59 min 1). In the abstract: score 0 to 3 low risk (2-day stroke risk 1.0%), 4 to 5 moderate (4.1%), 6 to 7 high (8.1%). The ebook\'s TIA route calls over 3 high.',
      items:[['Age 60 years or older', 1], ['Blood pressure 140/90 mm Hg or higher', 1], ['Clinical feature: unilateral weakness', 2], ['Clinical feature: speech impairment without weakness', 1], ['Duration 60 min or longer', 2], ['Duration 10 to 59 min', 1], ['Diabetes', 1]],
      suggest:s => s > 3 ? 1 : 0, opts:[['Score 0 to 3 (the ebook: low)','abcdlo'],['Score 4 or more (the ebook: high, over 3)','abcdhi']]},
    abcdlo:{end:'discharge', title:'ABCD2 0 to 3: the ebook\'s low score', items:['Johnston et al.: low risk, 2-day stroke risk 1.0%', 'The ebook\'s TIA route: allow discharge with early neuromedical review'], links:[['#stroke-tia--tiadc','Ebook: TIA, low ABCD2']], gap:'Johnston SC et al. Lancet 2007;369:283-92 (abstract); the ebook\'s stroke and TIA pathway.'},
    abcdhi:{end:'admit', title:'ABCD2 4 or more: the ebook\'s high score', items:['Johnston et al.: score 4 to 5 moderate risk (2-day stroke risk 4.1%), 6 to 7 high risk (8.1%)', 'The ebook\'s TIA route: ABCD2 over 3 goes the CVA way'], links:[['#stroke-tia--cva','Ebook: CVA step']], gap:'Johnston SC et al. Lancet 2007;369:283-92 (abstract); the ebook\'s stroke and TIA pathway.'},

    /* Ottawa SAH rule: Perry JJ et al. JAMA 2013;310:1248-55 (abstract); CMAJ 2017;189:E1379-85 (Figure 1, methods) */
    sah:{check:'any', q:'Ottawa SAH rule: any one of these?', hint:'For alert patients over 15 with a new acute severe nontraumatic headache that reaches maximum intensity within 1 hour of onset (CMAJ 2017, Figure 1). Not for patients with new neurological deficits, previous aneurysms, SAH or brain tumours, or a history of similar headaches (3 or more episodes over 6 months or more). The 2013 paper (JAMA, abstract) writes the age as 40 years or older; the 2017 figure prints over 40: the step uses 40 or older.',
      items:['Age 40 years or older', 'Symptom of neck pain or stiffness', 'Witnessed loss of consciousness', 'Onset during exertion', 'Thunderclap headache (peak pain instantly)', 'Limited neck flexion on examination'],
      opts:[['Any one: investigation required for SAH','sahyes'],['None of them','sahno']]},
    sahyes:{end:'refer', title:'Investigation required for SAH (Ottawa SAH rule)', items:['Investigate for subarachnoid haemorrhage', 'In the 2017 validation (6 Canadian emergency departments, 1153 patients, 67 with SAH) the rule was 100% sensitive (95% CI 94.6% to 100%), with a specificity of 13.6%'], gap:'Perry JJ et al. JAMA 2013;310:1248-55; Perry JJ et al. CMAJ 2017;189:E1379-85. The ebook has no headache pathway: refer by the department\'s usual route.'},
    sahno:{end:'neutral', title:'None: investigation for SAH not required by the rule', items:['The rule applies only to the patients described on the previous step: alert, no new neurological deficit, headache peaking within 1 hour', 'It was derived and validated in Canadian emergency departments (2013, 2017)'], gap:'Perry JJ et al. JAMA 2013;310:1248-55; CMAJ 2017;189:E1379-85 (Figure 1).'},

    /* PERC: Kline JA et al. J Thromb Haemost 2008;6:772-80 (abstract, PMID 18318689); derivation 2004;2:1247-55 */
    perc:{check:'all', q:'PERC: low suspicion of PE, and all eight of these?', hint:'Kline et al., 2008 (abstract): only with a low suspicion for PE, a gestalt pretest probability under 15%. PERC is not in the VTE CPG (2013), whose route for a suspected PE is the Wells score.',
      items:['Age under 50 years', 'Pulse under 100 beats/min', 'SaO2 95% or higher', 'No haemoptysis', 'No oestrogen use', 'No surgery or trauma needing hospital admission within 4 weeks', 'No previous venous thromboembolism', 'No unilateral leg swelling'],
      opts:[['All eight, with low suspicion: PERC negative','percneg'],['Any one not met','percpos']]},
    percneg:{end:'neutral', title:'Low suspicion and PERC negative', items:['In the 2008 multicentre study (13 emergency departments, 8138 patients), 16 of 1666 patients with low suspicion and PERC negative (1.0%) had venous thromboembolism or died within 45 days', 'The VTE CPG has no PERC step: its route for a suspected PE is the Wells score'], links:[['#vte-cpg--pewells','VTE CPG: PE Wells score']], gap:'Kline JA et al. J Thromb Haemost 2008;6:772-80 (abstract).'},
    percpos:{end:'neutral', title:'PERC positive: the rule does not exclude PE', items:['Go on with the VTE CPG\'s PE Wells score'], links:[['#vte-cpg--pewells','VTE CPG: PE Wells score']], gap:'Kline JA et al. J Thromb Haemost 2008;6:772-80 (abstract).'},

    /* Age-adjusted D-dimer: Righini M et al. JAMA 2014;311:1117-24 (abstract, PMID 24643601) */
    ddimer:{end:'neutral', title:'Age-adjusted D-dimer cut-off (ADJUST-PE)', items:['For a patient 50 years or older: cut-off = age × 10 µg/L', 'Under 50: the conventional cut-off of 500 µg/L', 'Only with a non-high (Geneva) or unlikely (two-level Wells) clinical probability', 'ADJUST-PE (19 European centres, 3346 patients): 1 of 331 patients with a D-dimer between 500 µg/L and their age-adjusted cut-off, left untreated, had a thromboembolic event within 3 months (0.3%)', 'The study used highly sensitive D-dimer assays. The VTE CPG notes the whole blood agglutination D-dimer used in most Malaysian laboratories is not sensitive in ruling out VTE (p46): check your laboratory\'s assay first'],
      links:[['#vte-cpg--pewells','VTE CPG: PE Wells score']], gap:'Righini M et al. JAMA 2014;311:1117-24 (abstract). The VTE CPG\'s PE algorithm (p47) has no D-dimer step.'},

    /* San Francisco Syncope Rule: Quinn JV et al. Ann Emerg Med 2004;43:224-32; 2006;47:448-54 (abstracts) */
    sfsr:{check:'any', q:'San Francisco Syncope Rule: any one of these?', hint:'Quinn et al. (abstracts): for patients with syncope or near syncope in the emergency department. The 2006 validation excluded trauma, alcohol- or drug-associated loss of consciousness and definite seizures.',
      items:['History of congestive heart failure', 'Haematocrit under 30%', 'Abnormal ECG (new changes or non-sinus rhythm)', 'Complaint of shortness of breath', 'Systolic blood pressure under 90 mm Hg at triage'],
      opts:[['Any one: not low risk','sfhi'],['None of them','sflo']]},
    sfhi:{end:'neutral', title:'San Francisco Syncope Rule: positive', items:['At risk of a serious outcome by the rule', 'The rule was 96% sensitive for serious outcomes within 7 days in its derivation (2004), and 98% sensitive and 56% specific within 30 days in its validation (2006)'], links:[['#syncope','Ebook: syncope'], ['#calc-syncope','The ebook\'s syncope risk check']], gap:'Quinn JV et al. Ann Emerg Med 2004;43:224-32 and 2006;47:448-54 (abstracts). The ebook\'s syncope pathway is the department\'s route.'},
    sflo:{end:'neutral', title:'San Francisco Syncope Rule: negative', items:['None of the five: low risk by the rule', 'In the 2006 validation the rule missed about 2% of serious outcomes within 30 days (98% sensitive)'], links:[['#syncope','Ebook: syncope'], ['#calc-syncope','The ebook\'s syncope risk check']], gap:'Quinn JV et al. Ann Emerg Med 2006;47:448-54 (abstract).'},

    /* Canadian Syncope Risk Score: Thiruganasambandamoorthy V et al. CMAJ 2016;188:E289-98 (Figure 2 and methods) */
    csrs:{check:'score', q:'Canadian Syncope Risk Score: tick what applies', hint:'CMAJ 2016, Figure 2: adults (16 and over) seen within 24 hours of syncope. The study excluded loss of consciousness over 5 minutes, a change in mental status from baseline, an obvious witnessed seizure, major trauma needing admission, intoxication with alcohol or drugs, a language barrier, and head trauma causing loss of consciousness. The ED diagnosis is one or the other, or neither. The paper derived the score: its validation was not read here.',
      items:[['Predisposition to vasovagal symptoms (triggered by being in a warm crowded place, prolonged standing, fear, emotion or pain)', -1], ['History of heart disease (coronary or valvular heart disease, cardiomyopathy, congestive heart failure, non-sinus rhythm or arrhythmia, or device implantation)', 1], ['Any systolic pressure reading < 90 or > 180 mm Hg, from triage until disposition', 2], ['Elevated troponin level (> 99th percentile of normal population)', 2], ['Abnormal QRS axis (< −30° or > 100°)', 1], ['QRS duration > 130 ms', 1], ['Corrected QT interval > 480 ms', 2], ['Diagnosis in emergency department: vasovagal syncope', -2], ['Diagnosis in emergency department: cardiac syncope', 2]],
      info:['Estimated risk of a serious adverse event within 30 days, by total score (Figure 2): ' + CSRS_RISK.map(([s, r, c]) => s + ': ' + r + '% (' + c + ')').join('; ')],
      suggest:s => s <= -2 ? 0 : s <= 0 ? 1 : s <= 3 ? 2 : s <= 5 ? 3 : 4,
      opts:[['−3 to −2: very low','csvl'],['−1 to 0: low','csl'],['1 to 3: medium','csm'],['4 to 5: high','csh'],['6 to 11: very high','csvh']]},
    csvl:{end:'neutral', title:'Canadian Syncope Risk Score: very low (−3 to −2)', items:['Estimated 30-day risk of a serious adverse event: 0.4% at −3, 0.7% at −2 (Figure 2)'], links:[['#syncope','Ebook: syncope']], gap:'Thiruganasambandamoorthy V et al. CMAJ 2016;188:E289-98, Figure 2.'},
    csl:{end:'neutral', title:'Canadian Syncope Risk Score: low (−1 to 0)', items:['Estimated 30-day risk: 1.2% at −1, 1.9% at 0 (Figure 2)'], links:[['#syncope','Ebook: syncope']], gap:'CMAJ 2016;188:E289-98, Figure 2.'},
    csm:{end:'neutral', title:'Canadian Syncope Risk Score: medium (1 to 3)', items:['Estimated 30-day risk: 3.1% at 1, 5.1% at 2, 8.1% at 3 (Figure 2)'], links:[['#syncope','Ebook: syncope']], gap:'CMAJ 2016;188:E289-98, Figure 2.'},
    csh:{end:'neutral', title:'Canadian Syncope Risk Score: high (4 to 5)', items:['Estimated 30-day risk: 12.9% at 4, 19.7% at 5 (Figure 2)'], links:[['#syncope','Ebook: syncope']], gap:'CMAJ 2016;188:E289-98, Figure 2.'},
    csvh:{end:'neutral', title:'Canadian Syncope Risk Score: very high (6 to 11)', items:['Estimated 30-day risk: from 28.9% at 6 to 83.6% at 11 (Figure 2)'], links:[['#syncope','Ebook: syncope']], gap:'CMAJ 2016;188:E289-98, Figure 2.'},

    /* Alvarado: Alvarado A. Ann Emerg Med 1986;15:557-64; points and strata from Ohle R et al. BMC Med 2011;9:139, Figure 1 (CC BY) */
    alvarado:{check:'score', q:'Alvarado score: tick what applies', hint:'Ohle et al., BMC Medicine 2011, Figure 1 (a systematic review of 42 studies, open access under CC BY): the score of Alvarado (1986), 10 points. Its strata: 1 to 4, 5 to 6, 7 to 10. The ebook\'s abdominal pain pathway stays the department\'s route (rule 5).',
      items:[['Migration of pain', 1], ['Anorexia', 1], ['Nausea', 1], ['Tenderness in right lower quadrant', 2], ['Rebound pain', 1], ['Elevated temperature', 1], ['Leucocytosis', 2], ['Shift of white blood cell count to the left', 1]],
      suggest:s => s >= 7 ? 2 : s >= 5 ? 1 : 0, opts:[['Score 1 to 4','alv1'],['Score 5 to 6','alv5'],['Score 7 to 10','alv7']]},
    alv1:{end:'neutral', title:'Alvarado 1 to 4', items:['Predicted appendicitis 30%; the review\'s figure links this stratum with discharge', 'A cut point of 5 was a good rule-out in every group (sensitivity 99% overall, 96% men, 99% women, 99% children)'], links:[['#abdominal-pain','Ebook: abdominal pain'], ['#abdo-handbook','Abdominal pain handbook']], gap:'Ohle R et al. BMC Med 2011;9:139. The score is well calibrated in men, inconsistent in children, and over-predicts appendicitis in women across all strata of risk.'},
    alv5:{end:'observe', title:'Alvarado 5 to 6', items:['Predicted appendicitis 66%; the review\'s figure links this stratum with observation or admission'], links:[['#abdominal-pain','Ebook: abdominal pain'], ['#abdo-handbook','Abdominal pain handbook']], gap:'Ohle R et al. BMC Med 2011;9:139. It over-predicts appendicitis in women, and in children in the intermediate and high strata.'},
    alv7:{end:'refer', title:'Alvarado 7 to 10', items:['Predicted appendicitis 93%; the review\'s figure links this stratum with surgery', 'At a cut point of 7: sensitivity 82%, specificity 81% (all studies)'], links:[['#abdominal-pain','Ebook: abdominal pain'], ['#abdo-handbook','Abdominal pain handbook']], gap:'Ohle R et al. BMC Med 2011;9:139.'},

    /* qSOFA: Singer M et al. JAMA 2016;315:801-10; Seymour CW et al. JAMA 2016;315:762-74 (abstracts) */
    qsofa:{check:'score', q:'qSOFA: tick what applies', hint:'Sepsis-3 (Singer et al., JAMA 2016, abstract): in out-of-hospital, emergency department or general ward settings, adults with suspected infection who have at least 2 of these are more likely to have poor outcomes typical of sepsis. One point each (Seymour et al.).',
      items:[['Respiratory rate 22/min or greater', 1], ['Altered mentation', 1], ['Systolic blood pressure 100 mm Hg or less', 1]],
      suggest:s => s >= 2 ? 0 : 1, opts:[['2 or more','qs2'],['0 or 1','qs0']]},
    qs2:{end:'refer', title:'qSOFA 2 or more', items:['More likely to have poor outcomes typical of sepsis (Sepsis-3)'], gap:'Singer M et al. JAMA 2016;315:801-10; Seymour CW et al. JAMA 2016;315:762-74 (abstracts).'},
    qs0:{end:'neutral', title:'qSOFA 0 or 1', items:['The Sepsis-3 abstracts describe a score of 2 or more only'], gap:'Singer M et al. JAMA 2016;315:801-10 (abstract).'},

    /* NEWS2: Royal College of Physicians 2017, Charts 1, 2 and 4, and the executive summary */
    news2:{q:'NEWS2: total score?', hint:'Royal College of Physicians, NEWS2 (2017), Chart 1. Not for children (under 16) or women who are pregnant (executive summary). Use SpO2 Scale 2 only for a patient with confirmed hypercapnic respiratory failure and a prescribed target of 88 to 92%; otherwise Scale 1. Consciousness is scored on ACVPU, where C is new confusion (including disorientation, delirium or any acute reduction in GCS score): anything but Alert scores 3.',
      info:NEWS2_ROWS.map(rowLine), rows:NEWS2_ROWS,
      opts:[['0 to 4, no single 3','nw0'],['A 3 in any single parameter','nw3'],['5 or 6','nw5'],['7 or more','nw7']]},
    nw0:{end:'neutral', title:'NEWS2 0 to 4: low clinical risk', items:['Score 0: minimum 12 hourly monitoring', 'Score 1 to 4: minimum 4 to 6 hourly; the registered nurse decides whether to monitor more often or escalate'], gap:'Royal College of Physicians. National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS. Updated report of a working party. London: RCP, 2017 (Charts 2 and 4).'},
    nw3:{end:'observe', title:'NEWS2: a 3 in a single parameter (low to medium risk)', items:['Minimum 1 hourly monitoring', 'The registered nurse informs the medical team, who review and decide whether to escalate care'], gap:'RCP, NEWS2, 2017 (Charts 2 and 4).'},
    nw5:{end:'refer', title:'NEWS2 5 or 6: medium risk, the key threshold for urgent response', items:['Minimum 1 hourly monitoring', 'Urgent assessment by a clinician or team with competence in the care of acutely ill patients, in an area with monitoring'], gap:'RCP, NEWS2, 2017 (Charts 2 and 4).'},
    nw7:{end:'admit', title:'NEWS2 7 or more: high risk, emergency response', items:['Continuous monitoring of vital signs', 'Emergency assessment by a team with critical care competencies, including advanced airway skills; consider transfer to a higher-dependency unit or ICU'], gap:'RCP, NEWS2, 2017 (Charts 2 and 4).'},

    /* MEWS: abdominal trauma CPG 2025, Table 6, p57 (quoted; MaHTAS allows it) */
    mews:{q:'MEWS (Modified Early Warning Score): total?', hint:'Management of Abdominal Trauma in Adults CPG (2025), Table 6, p57. Severely injured abdominal trauma patients are indicated for admission to ICU/HDW; the CRASH or MEWS score is useful in aiding identification of such patients for early ICU/HDW referral (p57). A value between two printed bands (a systolic of exactly 70, a temperature of exactly 35.0) is in no band of the table.',
      info:MEWS_ROWS.map(rowLine), rows:MEWS_ROWS,
      opts:[['MEWS 0 to 2','mew0'],['MEWS 3 or 4','mew3'],['MEWS 5 or more','mew5']]},
    mew0:{end:'neutral', title:'MEWS 0 to 2', items:['The CPG\'s note gives no action below 3'], gap:'Abdominal trauma CPG 2025, Table 6 (p57).'},
    mew3:{end:'observe', title:'MEWS 3 or 4', items:['Patients with a MEWS of 3 or 4 were transferred to the HDU (the CPG\'s note on Table 6)'], gap:'Abdominal trauma CPG 2025, Table 6 (p57).'},
    mew5:{end:'admit', title:'MEWS 5 or more', items:['A MEWS score of ≥5 was considered criteria for ICU admission (the CPG\'s note on Table 6)'], gap:'Abdominal trauma CPG 2025, Table 6 (p57).'},

    /* AF CPG 2012, Table 12 (p29) and Table 14 (p42): in the guide's own words (the CPG gives no permission to reproduce) */
    chads:{check:'score', q:'CHA2DS2-VASc: tick what applies', hint:'Management of Atrial Fibrillation CPG (2012), Table 12 (p29), for non-valvular AF. Maximum score 9: age gives 0, 1 or 2 points, so tick one age row at most. Adjusted stroke rate by score (%/year): ' + CHADS_RATE.map((r, i) => i + ', ' + r).join('; ') + '.',
      items:[['Congestive heart failure or LV dysfunction', 1], ['Hypertension', 1], ['Age 75 or over', 2], ['Diabetes mellitus', 1], ['Stroke, TIA or thromboembolism', 2], ['Vascular disease', 1], ['Age 65 to 74', 1], ['Female sex', 1]],
      suggest:s => s >= 2 ? 2 : s === 1 ? 1 : 0, opts:[['Score 0','chad0'],['Score 1','chad1'],['Score 2 or more','chad2']]},
    chad0:{end:'neutral', title:'CHA2DS2-VASc 0: no risk factors', items:['Either aspirin 75 to 325 mg daily or no antithrombotic therapy; the CPG prefers no antithrombotic therapy to aspirin (Table 12)'], gap:'AF CPG 2012, Table 12 (p29).'},
    chad1:{end:'neutral', title:'CHA2DS2-VASc 1: one clinically relevant non-major risk factor', items:['Either an oral anticoagulant (OAC) or aspirin 75 to 325 mg daily; the CPG prefers OAC to aspirin (Table 12)'], gap:'AF CPG 2012, Table 12 (p29).'},
    chad2:{end:'neutral', title:'CHA2DS2-VASc 2 or more', items:['One major risk factor or two or more clinically relevant non-major ones: an oral anticoagulant (OAC) (Table 12)', 'Weigh the bleeding risk too: HAS-BLED'], links:[['#ed-scores--hasbled','HAS-BLED (CPG 2012)']], gap:'AF CPG 2012, Table 12 (p29).'},
    hasbled:{check:'score', q:'HAS-BLED: tick what applies', hint:'AF CPG 2012, Table 14 (p42), adapted there from Pisters et al. One point each; renal and liver function count one each, and drugs and alcohol one each (maximum 9). The footnote defines: hypertension, systolic blood pressure .160 mmHg; abnormal kidney function, chronic dialysis, renal transplantation or serum creatinine ≥200 mmol/L; abnormal liver function, chronic hepatic disease (e.g. cirrhosis) or bilirubin .2 x upper limit of normal with AST/ALT/ALP .3 x upper limit normal; bleeding, previous bleeding history or predisposition (e.g. bleeding diathesis, anaemia); labile INRs, unstable or high INRs or poor time in therapeutic range (e.g. <60%); drugs, such as antiplatelet agents or NSAIDs. A symbol before 160, 2 and 3 is lost in the CPG\'s print, and the creatinine unit is printed mmol/L: both are under Still to confirm.',
      items:[['Hypertension', 1], ['Abnormal renal function', 1], ['Abnormal liver function', 1], ['Stroke', 1], ['Bleeding history or predisposition', 1], ['Labile INRs', 1], ['Elderly (age over 65 years)', 1], ['Drugs (antiplatelet agents, NSAIDs)', 1], ['Alcohol abuse', 1]],
      suggest:s => s >= 3 ? 0 : 1, opts:[['Score 3 or more','hbhi'],['Score 0 to 2','hblo']]},
    hbhi:{end:'observe', title:'HAS-BLED 3 or more: high risk', items:['A score of 3 or more indicates high risk: some caution and regular review are needed after starting antithrombotic therapy, whether OAC or aspirin (keypoint, p42)'], gap:'AF CPG 2012, Table 14 and keypoint (p42).'},
    hblo:{end:'neutral', title:'HAS-BLED 0 to 2', items:['The CPG names 3 or more as high risk and sets no action below it (p42)'], gap:'AF CPG 2012, p42.'},

    /* CIWA-Ar: Sullivan JT et al. Br J Addict 1989;84:1353-7, the scale as printed ("not copyrighted and may be reproduced freely") */
    ciwa:{q:'CIWA-Ar: total score?', hint:'The Clinical Institute Withdrawal Assessment for Alcohol, revised (Sullivan et al., 1989), as the scale is printed: ten items, nine scored 0 to 7 and orientation 0 to 4; maximum possible score 67. Record the pulse, taken for one minute, and the blood pressure with it. The scale prints one cut-off only.',
      info:CIWA_ROWS.map(([h, how, d]) => h + ' (' + how + '): ' + d.map((t, i) => t ? i + ' ' + t : '').filter(Boolean).join('; ')), rows:CIWA_ROWS,
      opts:[['Under 10','cw0'],['10 or more','cw10']]},
    cw0:{end:'neutral', title:'CIWA-Ar under 10', items:['Patients scoring less than 10 do not usually need additional medication for withdrawal (the scale\'s note)'], gap:'Sullivan JT et al. Br J Addict 1989;84:1353-7, the scale as reproduced by the San Francisco VA Medical Center.'},
    cw10:{end:'observe', title:'CIWA-Ar 10 or more', items:['The scale prints no cut-off above 10, and the guide\'s sources give no withdrawal regimen: treat and refer by the department\'s practice'], gap:'Sullivan JT et al. Br J Addict 1989;84:1353-7. Not in the ebook: see Still to confirm.'},

    /* Burns: the Victorian Adult Burns Service (Alfred Health), and the Royal Children's Hospital Melbourne */
    bsz:{step:'Burn size: the total body surface area (TBSA)', items:['Do not count erythema (epidermal burns) in the TBSA (RCH; the Lund and Browder chart\'s own note)',
        'Adults, rule of nines (VicBurns poster, for adults only): ' + RULE_OF_NINES.map(([r, p]) => r + ' ' + p + '%').join('; '),
        'Palm: the palmar surface of the patient\'s own hand, from the distal wrist crease to the closed tips of all five digits, is 1% of TBSA (VicBurns)',
        'Children: use a paediatric chart such as Lund and Browder, with its age table (RCH). The guide does not reproduce it: the chart it found could not be read clearly enough to check every value'],
      next:'bfl'},
    bfl:{q:'Above the threshold for IV fluid resuscitation?', hint:'VicBurns: begin fluid resuscitation for burns over 20% TBSA in adults, and over 10% TBSA in children under 16. RCH (children): give IV fluid if over 10% TBSA.',
      opts:[['Yes: adult over 20%, or child under 16 over 10%','bfx'],['No','bmin']]},
    bfx:{end:'refer', title:'IV fluids by the Parkland formula, and the burns team', items:['Count the volume from the time of the burn, not from arrival (RCH; VicBurns)',
        'RCH modified Parkland: 3 × TBSA% × weight (kg) = ml for the first 24 hours; half of it in the first 8 hours, less any IV fluid already given, over (8 − hours since the burn), counting no more than 7 hours; the other half over the next 16 hours',
        'VicBurns: 3 to 4 ml/kg/%TBSA over 24 hours, half in the first 8 hours and half in the next 16; 4 ml with suspected inhalation injury, electrical injury or other trauma. Its adult poster prints 4 ml × TBSA% × kg',
        'Hartmann\'s solution is the fluid of choice; if unavailable, sodium chloride 0.9% (RCH). VicBurns: Normal Saline or Hartmann\'s Solution. Children also get maintenance fluids through a separate line (RCH)',
        'Then titrate by urine output: children 1 ml/kg/hr; adults 0.5 to 1 ml/kg/hr (or 30 to 50 ml/hr) (RCH). Below target, raise the rate by 10 to 20%; above it, lower it by 10 to 20%',
        'In Victoria, burns over 20% TBSA, high voltage electrical injuries (over 1000 volts) and inhalation injury are severe burns (VicBurns)'],
      gap:'Victorian Adult Burns Service, VicBurns pages (fluid resuscitation, urine output, burn assessment; read 16 Nov 2026) and its Rule of Nine poster (last updated 8 May 2012); Royal Children\'s Hospital Melbourne, Clinical Practice Guideline: Burns (last updated April 2026) and its guide to prescribing resuscitation fluids. The department\'s own burns referral route is not in the guide: see Still to confirm.'},
    bmin:{end:'neutral', title:'Below the fluid threshold: when to call the burns team', items:['Children (RCH): consider the paediatric burns service for complex burns: over 5% TBSA; over 5% full thickness; the face, ears, eyes, neck, hands, feet, genitalia, perineum or a major joint, even under 5%; any inhalation or airway injury; a circumferential burn; a chemical or electrical mechanism; trauma or spinal cord injury with it; under 12 months old; suspected child abuse',
        'Adults (VicBurns): over 20% TBSA, high voltage electrical injury (over 1000 volts) and inhalation injury are severe burns'],
      gap:'Royal Children\'s Hospital Melbourne, CPG Burns (April 2026); VicBurns (read 16 Nov 2026). The department\'s own burns referral route is not in the guide: see Still to confirm.'},

    /* Weight from age: Luscombe M, Owens B. Arch Dis Child 2007;92:412-5 (abstract, PMID 17213259) */
    wtage:{end:'neutral', title:'A child\'s weight from age (1 to 10 years)', items:['The formula then in use: weight (kg) = 2 × (age + 4)', 'Luscombe and Owens (one UK emergency department, 2005, 17,244 children aged 1 to 10): that formula underestimated measured weight by a mean of 18.8%; weight (kg) = 3 × age + 7 was the most accurate (mean underestimate 2.48%)', 'Weigh the child whenever you can: both formulas come from British children, and the paper covers ages 1 to 10 only'],
      links:[['#calc-kids','Child doses by weight']], gap:'Luscombe M, Owens B. Arch Dis Child 2007;92:412-5 (abstract).'},

    /* Fleming S, et al. Lancet 2011;377:1011-8 (PMC3789232) and its web appendix, Web Tables 4 and 5 (p12) */
    vitals:{end:'neutral', title:'Fleming centiles: a child\'s heart and breathing rates by age', items:[
      'Centiles of heart rate and breathing rate in healthy children from birth to 18 years, from a systematic review of 69 studies: heart rate from 59 studies (143,346 children) and breathing rate from 20 (3,881 children)',
      'The web appendix gives the 1st, 10th, 25th, 50th, 75th, 90th and 99th centiles for 13 age bands from birth to 18 years; heart rate also has a row for birth, the immediate neonatal period. The calculator shows the band you pick and where a rate sits in it',
      'The paper does not say which centile makes a rate abnormal. It gives several centiles so that guidelines and early warning scores can choose cut-offs for their setting, weighing how far the illness to be detected moves the vital signs against the cost of misclassifying healthy and unwell children',
      'Use a rate as part of the whole assessment of the child. Heart rate may be higher with fever or anxiety, and a manual count may underestimate it',
      'Most measurements were in awake children. Heart rates in asleep children tended to be lower, but not significantly (P = 0.06)',
      'The age bands share their ends (0 to 3 months, 3 to 6 months): the paper does not say which band a child exactly on a boundary falls in',
      'The paper gives no blood pressure or SpO2'],
      links:[['#calc-vitals','Check a child\'s heart and breathing rates'], ['#children','Children in the ED']],
      gap:'Fleming S, Thompson M, Stevens R, et al. Lancet 2011;377:1011-8, and its web appendix (Web Tables 4 and 5, p12). The department\'s own paediatric ranges are not in the guide: see Still to confirm.'}
  },
  refs:['Johnston SC, Rothwell PM, Nguyen-Huynh MN, et al. Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack. Lancet 2007;369:283-92. https://pubmed.ncbi.nlm.nih.gov/17258668/',
    'Perry JJ, Stiell IG, Sivilotti ML, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA 2013;310:1248-55. https://pubmed.ncbi.nlm.nih.gov/24065011/',
    'Perry JJ, Sivilotti MLA, Sutherland J, et al. Validation of the Ottawa Subarachnoid Hemorrhage Rule in patients with acute headache. CMAJ 2017;189:E1379-85. https://www.cmaj.ca/content/189/45/E1379',
    'Kline JA, Courtney DM, Kabrhel C, et al. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost 2008;6:772-80. https://pubmed.ncbi.nlm.nih.gov/18318689/',
    'Righini M, Van Es J, Den Exter PL, et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism: the ADJUST-PE study. JAMA 2014;311:1117-24. https://pubmed.ncbi.nlm.nih.gov/24643601/',
    'Quinn JV, Stiell IG, McDermott DA, et al. Derivation of the San Francisco Syncope Rule to predict patients with short-term serious outcomes. Ann Emerg Med 2004;43:224-32; Quinn J, McDermott D, Stiell I, et al. Prospective validation of the San Francisco Syncope Rule. Ann Emerg Med 2006;47:448-54. https://pubmed.ncbi.nlm.nih.gov/16631985/',
    'Thiruganasambandamoorthy V, Kwong K, Wells GA, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ 2016;188:E289-98. https://www.cmaj.ca/content/188/12/E289',
    'Alvarado A. A practical score for the early diagnosis of acute appendicitis. Ann Emerg Med 1986;15:557-64; Ohle R, O\'Reilly F, O\'Brien KK, et al. The Alvarado score for predicting acute appendicitis: a systematic review. BMC Med 2011;9:139 (CC BY). https://bmcmedicine.biomedcentral.com/articles/10.1186/1741-7015-9-139',
    'Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016;315:801-10; Seymour CW, et al. Assessment of clinical criteria for sepsis. JAMA 2016;315:762-74. https://pubmed.ncbi.nlm.nih.gov/26903338/',
    'Royal College of Physicians. National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS. Updated report of a working party. London: RCP, 2017. https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/',
    'Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Abdominal Trauma in Adults. MaHTAS, 2025. Table 6, p57.',
    'Ministry of Health Malaysia and the Academy of Medicine Malaysia. Clinical Practice Guidelines on Management of Atrial Fibrillation, 2012. Tables 12 (p29) and 14 (p42), summarised in the guide\'s own words.',
    'Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict 1989;84:1353-7. The scale as reproduced at https://web.stanford.edu/~ashford/CIWA2.htm',
    'Victorian Adult Burns Service (Alfred Health), VicBurns: https://www.vicburns.org.au/ (burn assessment, fluid resuscitation, urine output, referrals) and its Rule of Nine poster for adults (last updated 8 May 2012).',
    'The Royal Children\'s Hospital Melbourne. Clinical Practice Guideline: Burns, acute management (last updated April 2026), https://www.rch.org.au/clinicalguide/guideline_index/Burns/, and A Guide to Prescribing Resuscitation Fluids in Major Burns.',
    'Luscombe M, Owens B. Weight estimation in resuscitation: is the current formula still valid? Arch Dis Child 2007;92:412-5. https://pubmed.ncbi.nlm.nih.gov/17213259/',
    'Fleming S, Thompson M, Stevens R, Heneghan C, Plüddemann A, Maconochie I, Tarassenko L, Mant D. Normal ranges of heart rate and respiratory rate in children from birth to 18 years: a systematic review of observational studies (author manuscript, Europe PMC). Lancet 2011;377:1011-8, and its web appendix (Web Tables 4 and 5). https://pmc.ncbi.nlm.nih.gov/articles/PMC3789232/']
};
P['ed-scores'].kinds = {neutral:'What the source says'};
P['ed-scores'].notesFoot = 'Each score is in the guide\'s own words from the source named on its step, read on 16 Nov 2026, and credited to its authors. Two are quoted because their owners allow it: MEWS (abdominal trauma CPG 2025, MaHTAS) and the CIWA-Ar items (the scale states it is not copyrighted). Nothing is copied from MDCalc or any other calculator site. A score supports judgement; it does not replace the ebook\'s pathway or a department protocol.';
P['stroke-tia'].see = [...(P['stroke-tia'].see || []), ['#ed-scores--abcd2', 'ABCD2 score (Johnston 2007)']];
P['syncope'].see = [...(P['syncope'].see || []), ['#ed-scores--sfsr', 'San Francisco Syncope Rule'], ['#ed-scores--csrs', 'Canadian Syncope Risk Score']];
P['abdominal-pain'].see = [...(P['abdominal-pain'].see || []), ['#ed-scores--alvarado', 'Alvarado score']];
P['children'].see = [...(P['children'].see || []), ['#ed-scores--vitals', 'Heart and breathing rates by age (Fleming 2011)']];
