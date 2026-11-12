/* ================= Snakebite: MOH Guideline: Management of Snakebite, summarised (10 Nov 2026) =================
   Source: Ministry of Health Malaysia, "Guideline: Management of Snakebite", MOH/P/PAK/341.17(GU), ISBN 978-967-0769-79-0
   (back cover, picture only). No edition, year or review date is printed; the PDF was made on 8 Aug 2017 and the MyBIS record
   (mybis.gov.my/pb/1548) lists it as 2017. 113 PDF pages; printed page = PDF page minus 9 for PDF 10 to 112. It prints no
   copyright or reproduction terms, so it is summarised in the guide's own words with printed page numbers and nothing is quoted
   at length (Krishna's decision of 9 Nov 2026 for such guidelines). Numbers are exactly as printed.
   Species, first aid and naming facts also come from "Land Snakes of Medical Significance in Malaysia", 2nd edition, July 2017
   (Ahmad Khaldun Ismail et al., with the Malaysian Society on Toxinology; ALL RIGHTS RESERVED): facts only, in the guide's own
   words, cited as "MST book" with its page. Its antivenom doses are not used here (the review lists where they differ).
   Reviewed line by line: CPG-REVIEW-SNAKEBITE.md. Read from page images: the flowcharts (p93, p94), Tables 2, 3, 5 and 7 to 17,
   7.2 (p65 to 67), 7.3.1 (p69), 7.5 and 7.6 (p75), the 20WBCT (p39), 4.8 (p44), 6.1 (p53), 6.6 (p58), the RPP box (p50),
   the anticholinesterase doses (p56 to 57) and Appendices 1 and 2. The guideline has no first-aid section.
   No ebook pathway covers snakebite (rule 5): the differences with the ebook's anaphylaxis and pain pathways are in the review.

   For the integrator (not active here):
   - add 'data9.js' to the parts lists in build.js and check-data.js;
   - '#calc-snake20' and '#calc-snakeav' (in see and in node links) pass okHref only once CALCS has snake20 and snakeav;
   - CATS: add 'snakebite-moh' to a group, for example 'meta' (Sugar, poisoning and pain) or 'injury';
   - hero 'snakecpg' is already in TILE_KEYS and app/tiles;
   - fig keys ptosis, wbct, obs, avgive, react and rpp are new: until FIGS has them, figHTML draws nothing (see the review);
   - the own:true footer and KIND_G say "the CPG": this is an MOH guideline (GU), not a CPG;
   - CONFIRM in engine.js, item 6 ("A readable copy of the Malaysian snakebite guideline"): answered by Krishna's copy. */
P['snakebite-moh'] = {
  title:'Snakebite: MOH guideline 2017', grp:'cpg', own:true, isnew:true, hero:'snakecpg',
  src:'MOH Guideline: Management of Snakebite (2017), summarised',
  lead:'The Ministry of Health guideline on snakebite: where the patient goes, who to observe and for how long, the 20-minute whole blood clotting test, when antivenom is indicated, which product and how many vials by snake, reactions, venom in the eye, and follow-up. It triages possible envenoming to the Red Zone and asymptomatic patients to the Yellow Zone (p53): no snakebite stays in the Green Zone. No year or review date is printed (the PDF dates from August 2017). Summarised in the guide\'s own words, with page numbers: it gives no permission to reproduce it.',
  kw:'snake snakebite snake bite bitten ular gigitan ular dipatuk ular venom venomous envenoming envenomation antivenom antivenin anti venom AVS pit viper ular kapak cobra ular senduk spitting cobra king cobra ular tedung krait ular katam ular katang coral snake ular pantai sea snake ular laut keelback python ular sawa Malayan pit viper green pit viper Wagler venom ophthalmia eye 20WBCT WBCT whole blood clotting test clotting RPP ptosis paralysis neostigmine NPAV HPAV QSMI CSL RECS serum sickness compartment',
  doc:{href:'https://moh.gov.my/moh/resources/Penerbitan/Garis%20Panduan/Garis%20Panduan%20Umum(KKM)/Guideline%20Management%20Of%20Snakebite.pdf', t:'The guideline, PDF on the Ministry of Health site'},
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'Ministry of Health Guideline: Management of Snakebite, MOH/P/PAK/341.17(GU). Printed page numbers.', opts:[
      ['Bitten by a snake, or may have been: start here','sx'],
      ['Antivenom: which product and how many vials','which'],
      ['A reaction to antivenom','rx'],
      ['Venom sprayed into the eyes','eye'],
      ['Going home: who can, and the follow-up','home']]},

    /* Triage and resuscitation: 6.1 to 6.3 (p53 to 54); signs from 4.2 to 4.4 (p31 to 35) and Table 12 (p41 to 42) */
    sx:{check:'any', q:'Any sign of envenoming now?', hint:'Look at the bite and the whole patient (4.2 to 4.4, p31 to 35; Table 12, p41 to 42). Krait and sea snake bites are often painless and go unnoticed while the venom acts (p26 to 27); a krait bite may show nothing before a sudden paralysis (p35).', fig:'ptosis',
      items:['Pain, swelling, bruising or blisters at the bite, or swelling spreading up the limb',
        'Bleeding from the bite, gums, nose or a needle site; blood in the urine, vomit or sputum',
        'Drooping eyelids, double vision, weak eye movements, or trouble swallowing or speaking',
        'Weak or paradoxical breathing, or a weak neck (the broken neck sign)',
        'Low blood pressure, shock, an irregular pulse or collapse',
        'Muscle pain and tenderness all over, dark urine, or little or no urine',
        'Early, non-specific: nausea, vomiting, abdominal pain or drowsiness',
        'A tender, enlarged lymph node draining the bitten limb'],
      opts:[['Yes, any sign','red'],['None yet','yel']]},
    red:{step:'Move the patient to the Red Zone and call the EP', items:[
      'Possible local or systemic envenoming goes to the critical (Red) zone (6.1, p53)',
      'ABCDE: airway; breathing effort; circulation, looking for shock and bleeding; conscious level and muscle weakness; exposure (6.2, p53)',
      'Oxygen as needed; an oropharyngeal airway only without a gag reflex; if the breathing muscles fail, bag-valve-mask, then a definitive airway (6.3, p53 to 54)',
      'Two large-bore IV cannulas; a cardiac monitor; BP, pulse, RR, SpO2, pain score and PEFR every 5-15 minutes while acute; urine output hourly (6.3.6 to 6.3.8, p54)',
      'A specialist may be called in at any point (Appendix 3, p93). RECS gives 24-hour phone advice (p3); no number is printed'],
      next:'hx'},
    yel:{step:'No sign yet: out of the Green Zone, and keep watching', items:[
      'Asymptomatic patients go to the semi-critical (Yellow) zone (6.1, p53): tell the EP and move the patient',
      'Signs can come late: a coagulopathy may be delayed (4.2.3, p31), and a krait bite can show nothing before paralysis (p35)',
      'Start the serial checks now: vital signs, pain score, the bite and the draining nodes (Table 10, p34)'],
      next:'hx'},

    /* History and first aid: Table 9 (p30 to 31), 6.4 (p54 to 55) */
    hx:{step:'History, and the first aid already done', items:[
      'When: the exact time of the bite, to time the signs. Where: the place hints at the species and the antivenom (Table 9, p30)',
      'How: what the patient was doing; the snake on the ground or in a tree; hooding or spitting; how many bites; what became of the snake; a description or photo (Table 9, p30)',
      'First aid: a tourniquet, cutting, suction or traditional medicine; treatment at a clinic (Table 9, p30). How or when to take a tourniquet off is not in the guideline: ask the EP',
      'Allergies, a past snakebite or antivenom, past anaphylaxis, work with snakes (p31)',
      'Keep the bitten limb still, in a neutral position or level with the heart (6.4.1 to 6.4.2, p54)',
      'If a pit viper is possible: no IM injections, aspirin or NSAIDs (6.4.4, 6.4.7, p55; 6.5.2.2, p56). Tetanus as indicated, by MOH guidance (6.4.5, p55)'],
      next:'snake'},
    snake:{q:'What bit the patient?', hint:'Name a species only when an expert has identified it from the snake (alive or dead) or a good photo; from a description alone it is an unidentified snakebite (Table 13, p43). Local names can mislead (p7). The Identify tab lists the species.',
      opts:[['A snake an expert identified as non-venomous','nv'],
        ['A venomous snake, identified','labs'],
        ['A snake, species not identified','labs'],
        ['An animal, unseen, or not sure what caused the wound','labs']]},

    /* Discharge after a non-venomous bite: 4.8.2 (p44) */
    nv:{check:'all', q:'Non-venomous: all three met before discharge?', hint:'4.8.2 (p44). Two non-front-fanged snakes are exceptions: the gold-ringed cat snake (Boiga) can injure tissue, and the red-necked keelback can cause a coagulopathy (p44). Pythons are non-venomous (Table 6, p13) but can tear tissue widely (6.5.5, p57).',
      items:['A trained expert positively identified the snake as a non-venomous species','The patient\'s condition matches what a bite by that species does','No significant tissue injury needing more treatment, such as a laceration or bleeding that persists'],
      opts:[['All three met','nvdc'],['Not all','labs']]},
    nvdc:{end:'discharge', title:'Non-venomous snake, confirmed: discharge', items:[
      'Non-front-fanged snakes cause mechanical injury only: treat the wound and the symptoms (p44)',
      'With no signs of envenoming, blood tests may not be needed (4.5, p38)',
      'Extensive tissue injury, as after a python bite: consider antibiotics covering aerobes and anaerobes (6.5.5, p57). Tetanus as indicated (6.4.5, p55)',
      'Give the discharge advice'],
      gap:'4.8.2 (p44). The guideline sets no observation time before this discharge and gives no return advice for it.'},

    /* Investigations: 4.5 (p38), 20WBCT 4.5.9 (p39), Table 11 (p40) */
    labs:{step:'Bloods now, and a 20WBCT if the lab cannot do clotting', fig:'wbct', items:[
      'FBC, PT, aPTT and INR, CK, renal profile, liver function, urinalysis and an ECG; fibrinogen and D-dimer if available (4.5, p38)',
      'Repeat them for 48 hours by snake: the Observation tab (Table 11, p40)',
      'No laboratory clotting profile? A 20WBCT for an unidentified bite or a suspected pit viper (4.5.9, p39): the 20WBCT tab',
      'No arterial puncture if a coagulopathy is suspected (4.5.8, p38)'],
      next:'env'},

    /* Indications for antivenom: 7.2 (p65 to 67) */
    env:{check:'any', q:'Is antivenom indicated? Any one of these', hint:'Any one of these after a proven or suspected snakebite (7.2, p65 to 67). Give it as soon as it is indicated: it can reverse systemic envenoming even weeks on, and within a few hours it can prevent local necrosis (p65). Do not decide on a 20WBCT alone: read it with the patient\'s condition and the laboratory clotting profile (4.5.9, p39).',
      items:['Spontaneous systemic bleeding',
        'Clotting abnormal on a 20WBCT or a laboratory test such as the PT',
        'Platelets below 100 × 10⁹/L',
        'Ptosis, external ophthalmoplegia or other paralysis',
        'Hypotension, shock, an arrhythmia or an abnormal ECG',
        'Little or no urine, or a rising creatinine or urea',
        'Dark brown urine, a positive urine dipstick, haemolysis, or muscle aches with hyperkalaemia',
        'Other laboratory evidence of systemic envenoming',
        'Swelling of more than half the bitten limb within 48 hours, with no tourniquet on; or swelling after a bite on a finger or toe',
        'Swelling spreading fast: after a hand or foot bite, past the wrist or ankle in a few hours',
        'A swollen, tender lymph node that drains the bitten limb, with other signs of envenoming'],
      opts:[['One or more','which'],['None','obs']]},
    obs:{end:'admit', title:'No antivenom indication yet: admit and observe', fig:'obs', items:[
      'Observe and admit: any envenoming, a venomous snake, an unidentified snakebite or an unidentified animal bite (4.8.1, p44)',
      'Species unknown: at least 24 hours of close observation (4.2, p31)',
      'Serial assessment for the first 48 hours on the snakebite chart, at least hourly for the first 12 hours (chapter 5, p46; Appendix 2, p91)',
      'Watch the eyelids, eye movements, swallowing, speech, neck and breathing; bleeding; dark urine; the spread of the swelling (RPP), the pain score and the nodes (5.1 to 5.4, p46 to 47)',
      'Pain: paracetamol by mouth every 4-6 hours if mild; titrated IV opioids if moderate to severe; no aspirin or NSAIDs if a coagulopathy may develop (6.5.2, p56)',
      'An antivenom indication appears: give antivenom without delay (7.2, p65)'],
      links:[['#snakebite-moh--env','Antivenom indications'],['#mau-admission','Admission to MAU (it lists snake bite)'],['#referral-rules--med','Admission to General Medicine']],
      gap:'4.8.1 (p44), 4.2 (p31), chapter 5 (p46), Appendix 2 (p91). No observation time is given when the species is known, nor a length for the "suitable observation period" before discharge (9.1.1, p83). An injury of unknown cause is not on the 4.8.1 list. Which HKL ward takes these patients: still to confirm.'},

    /* Antivenom by snake: 7.1 (p62 to 65), Tables 14 to 16 (p67 to 74), 7.3.1 (p69), 7.5 and 7.6 (p75) */
    which:{q:'Antivenom: which snake?', hint:'The choice is for a doctor trained in snakebite: confirm it with the EP (7.3.1, p69). By the species when an expert has identified it, by the syndrome when not (p65): monovalent for a confirmed species, polyvalent when uncertain (p64). Hospitals stock different antivenoms: ask the pharmacist (7.3, p67). How to give it: the Antivenom tab.',
      opts:[
        ['Not identified: go by the syndrome','syn'],
        ['Monocled cobra or equatorial spitting cobra','cob'],
        ['King cobra','king'],
        ['Malayan krait or banded krait','krait'],
        ['Red-headed krait','rhk'],
        ['Sea snake','sea'],
        ['Malayan pit viper (Peninsular Malaysia)','mpv'],
        ['A green pit viper, or the Kinabalu brown pit viper','gpv'],
        ['Wagler\'s or Bornean keeled pit viper','wag'],
        ['Coral snake','coral'],
        ['Red-necked keelback','keel'],
        ['Another snake, or an exotic pet','other']]},
    syn:{q:'Species unknown: which syndrome?', hint:'By the signs (Table 12, p41 to 42): paralysis with cobras, kraits, coral snakes and sea snakes; spontaneous bleeding with pit vipers; muscle pain, trismus, dark urine and kidney injury with sea snakes; severe pain, spreading swelling and blisters with cobras and pit vipers. In Malaysian studies the species was unknown in more than half of bites (p2).',
      opts:[['Paralysis (neurotoxic)','synn'],['Bleeding or clotting (haematotoxic)','synh'],['Muscle breakdown and dark urine (myotoxic)','synm'],['Local swelling only','synl']]},
    synn:{end:'refer', title:'Paralysis, species unknown: QSMI Neuro Polyvalent', fig:'avgive', items:[
      'Polyvalent antivenom is usually for an uncertain species; the neuro polyvalent is raised against the monocled cobra, king cobra, banded krait and Malayan krait (p64; Table 14, p67)',
      'Starting dose for an unidentified bite: not in the guideline. It gives 5 vials only for the red-headed krait, and up to 10 vials for confirmed elapid envenoming (Tables 15 and 16, p71, p73; p65)',
      'It covers sea snake venom only weakly, in animals; nothing is known to work against coral snakes (p64)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75)',
      'Neostigmine may help after a cobra bite, not a krait; antivenom first (6.5.4, p56). Krait and sea snake paralysis may not reverse: if it is not halted, urgent intubation and ventilation (7.5.5, p75)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'p64 to 65; Tables 14 to 16 (p67 to 74). Not in the guideline: the polyvalent dose for an unidentified bite. Ask the EP or RECS.'},
    synh:{end:'refer', title:'Bleeding or clotting, species unknown: QSMI Haemato Polyvalent', fig:'avgive', items:[
      'Polyvalent antivenom is usually for an uncertain species; the haemato polyvalent is raised against the Malayan pit viper, the white-lipped green pit viper and the Russell\'s viper (p64; Table 14, p67)',
      'Starting dose for an unidentified bite: not in the guideline. It is the second choice for every pit viper in Tables 15 and 16, with no dose of its own (p71 to 74)',
      'The red-necked keelback also causes a severe coagulopathy, and needs another antivenom (6.8, p59)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Still unclotted 6 hours after the infusion ended: repeat the starting dose; bleeding still brisk: repeat within 1-2 hours (7.6.1 to 7.6.2, p75)',
      'Blood products do not replace antivenom: only for life-threatening bleeding until antivenom is available (6.4.9, p55). Tranexamic acid and vitamin K do not work (6.5.6, p57)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'p64; Tables 14 to 16 (p67 to 74). Not in the guideline: the polyvalent dose for an unidentified bite. Ask the EP or RECS.'},
    synm:{end:'refer', title:'Muscle breakdown, species unknown: think of a sea snake', items:[
      'Generalised muscle pain, trismus, myoglobinuria and kidney injury point to a sea snake; coral snakes can cause muscle pain too (Table 12, p42)',
      'Sea snake suspected: CSL Polyvalent Sea Snake Antivenom (the Sea snake answer). Coral snakes: no antivenom (p64)',
      'Urine FEME and myoglobin after a sea snake or unidentified marine animal bite (5.6.1, p51); renal profile 6-hourly, CK 4 to 6-hourly (Table 11, p40); early hyperkalaemia (4.5.3, p38)'],
      links:[['#snakebite-moh--sea','Sea snake antivenom'],['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 11, 12 and 15. The guideline does not say how to tell a sea snake bite from a coral snake bite when neither was seen.'},
    synl:{end:'refer', title:'Local swelling only, species unknown: ask the EP', items:[
      'Severe pain, spreading swelling and blisters come with cobras and pit vipers; necrosis mainly with cobras (Table 12, p41)',
      'Keep checking clotting and the neurological signs: a coagulopathy or paralysis points to the syndrome (Table 12, p41 to 42; p65)',
      'Track the spread of the swelling (RPP) and the pain score (5.4.8, p48 to 50). Antivenom within a few hours can prevent local necrosis (p65)'],
      gap:'Not in the guideline: which antivenom for local envenoming when the snake is unknown (7.2.2, p66 to 67). Ask the EP or RECS.'},
    cob:{end:'refer', title:'Cobra: QSMI Cobra Antivenin', fig:'avgive', items:[
      'For the monocled cobra; it also covers the equatorial spitting cobra (Table 15, p70, p72; Table 16, p73)',
      'Starting dose: 5-10 vials for local envenoming, 10 vials for systemic; the next dose after 1-2 hours, by the signs (Table 15, p70; Table 16, p73)',
      'Second choice: QSMI Neuro Polyvalent Snake Antivenom (Tables 15 and 16)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75)',
      'Cobra paralysis may improve from 30 minutes, usually over hours (7.5.5, p75); neostigmine may help (6.5.4, p56). ECG for arrhythmia (4.5.7, p38)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16; 7.3.1, 7.5 and 7.6. The monocled cobra does not live in Borneo (p74). No maximum dose is given.'},
    king:{end:'refer', title:'King cobra: QSMI King Cobra Antivenin', fig:'avgive', items:[
      'Starting dose: 10 vials; the next dose after 1-2 hours, by the signs (Table 15, p70; Table 16, p73)',
      'Second choice: QSMI Neuro Polyvalent Snake Antivenom (Tables 15 and 16). Cobra antivenom does not reliably cover the king cobra (p64)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16; 7.3.1 and 7.6. No maximum dose is given.'},
    krait:{end:'refer', title:'Krait: QSMI Malayan Krait or Banded Krait Antivenin', fig:'avgive', items:[
      'Each krait has its own antivenin; neither reliably covers the other (p64)',
      'Starting dose: 5 vials; the next dose after 1-2 hours, by the signs (Table 15, p71; Table 16, p73)',
      'Second choice: blank for both in Table 15 (p71); QSMI Neuro Polyvalent for the banded krait in Table 16 (p73). The neuro polyvalent is raised against both kraits (p64)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75)',
      'Krait paralysis may not reverse: if it is not halted, urgent intubation and ventilation (7.5.5, p75). Neostigmine helps cobras, not kraits (6.5.4, p56)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16; 7.5 and 7.6. The Malayan krait does not live in Borneo (p74). No maximum dose is given.'},
    rhk:{end:'refer', title:'Red-headed krait: QSMI Neuro Polyvalent', fig:'avgive', items:[
      'First choice: QSMI Neuro Polyvalent Snake Antivenom, which cross-neutralises it; no second choice (Table 15, p71; Table 16, p73)',
      'Starting dose: 5 vials; the next dose after 1-2 hours, by the signs (Tables 15 and 16)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75). If paralysis is not halted, urgent intubation and ventilation (7.5.5, p75)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16; 7.5 and 7.6. No maximum dose is given.'},
    sea:{end:'refer', title:'Sea snake: CSL Polyvalent Sea Snake Antivenom', fig:'avgive', items:[
      'CSL (Australia, branded Seqirus); no second choice. Cobra antivenoms cover sea snake venom only weakly, in animals (Tables 15 and 16; p64)',
      'Starting dose: 1-3 vials; the next dose after 1-2 hours, by the signs (Table 15, p71; Table 16, p73)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Paralysis or circulation worse: repeat the starting dose after 1-2 hours (7.6.3, p75). If paralysis is not halted, urgent intubation and ventilation (7.5.5, p75)',
      'Muscle breakdown: renal profile 6-hourly, CK 4 to 6-hourly, urine FEME and myoglobin; urine output hourly and its colour; early hyperkalaemia (Table 11, p40; 5.6.1, p51; 6.3.8, p54; 4.5.3, p38)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16; 7.5 and 7.6. No maximum dose is given.'},
    mpv:{end:'refer', title:'Malayan pit viper: QSMI Malayan Pit Viper Antivenin', fig:'avgive', items:[
      'Starting dose: 4 vials; the next dose at 6 hours, by the signs (Table 15, p71)',
      'Second choice: QSMI Haemato Polyvalent Snake Antivenom (Table 15, p71). Green pit viper antivenom does not cover it (p64)',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Still unclotted 6 hours after the infusion ended: repeat the starting dose; bleeding still brisk: repeat within 1-2 hours (7.6.1 to 7.6.2, p75)',
      'Gum bleeding usually stops within 15-30 minutes, and clotting returns in 3-9 hours (7.5, p75)',
      'Clotting profile 6-hourly; no IM injections, aspirin, NSAIDs or arterial puncture (4.5, p38; 6.4.4, p55; 6.5.2.2, p56). Blood products only for life-threatening bleeding until antivenom is available (6.4.9, p55); tranexamic acid and vitamin K do not work (6.5.6, p57)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Table 15 (p71); 7.5 and 7.6 (p75). The guide follows Table 15\'s 4 vials, the guide owner\'s decision of 10 Nov 2026; the guideline\'s own case photo shows a patient given 3 vials in all (p37). Not in Borneo (p74). No maximum dose is given.'},
    gpv:{end:'refer', title:'Green pit vipers: QSMI Green Pit Viper Antivenin', fig:'avgive', items:[
      'For the Hagen\'s, white-lipped, mangrove, Thai peninsula, Tioman island and Cameron pit vipers (Peninsular), and the Kinabalu brown, Kinabalu green, Sumatran and Bornean palm pit vipers (Sabah and Sarawak) (Table 15, p72; Table 16, p73 to 74)',
      'Starting dose: 3 vials; the next dose at 6 hours, by the signs. Second choice: QSMI Haemato Polyvalent (Tables 15 and 16)',
      'Printed blank, so ask the EP or an expert: the leaf-nose palm, Sumatran and mountain pit vipers in Table 15 (p71), the Sabah green pit viper in Table 16 (p73); the beautiful pit viper (Table 5, p12) has no row',
      'Adrenaline ready first; IV, slowly for 10-15 minutes, done within an hour; watch for at least an hour after (7.3.1, p69)',
      'Still unclotted 6 hours after the infusion ended: repeat the starting dose; bleeding still brisk: repeat within 1-2 hours (7.6.1 to 7.6.2, p75)',
      'Clotting profile 6-hourly; no IM injections, aspirin, NSAIDs or arterial puncture (4.5, p38; 6.4.4, p55; 6.5.2.2, p56)'],
      links:[['#calc-snakeav','Antivenom by snake']],
      gap:'Tables 15 and 16 (p71 to 74). Green pit viper antivenom and the haemato polyvalent are thought to cross-neutralise most Trimeresurus species (p65). No maximum dose is given.'},
    wag:{end:'admit', title:'Wagler\'s or Bornean keeled pit viper: no antivenom', items:[
      'No antivenom is available, and it is usually not indicated (Table 15, p71; Table 16, p73); none has been shown to work against Wagler\'s pit viper venom, whose bites are generally not lethal (p65)',
      'Expect pain and swelling, and with Wagler\'s also oedema, redness and mild bleeding; no coagulopathy (Tables 3 and 5, p10, p12; Table 8, p28)',
      'Admit for observation and treat the symptoms (4.8.1, p44)'],
      gap:'Tables 3, 5, 8, 15 and 16; p65. No observation time is given for these bites.'},
    coral:{end:'admit', title:'Coral snake: no antivenom; consider neostigmine', items:[
      'No antivenom is known to work against Asian coral snakes (p64; Tables 15 and 16)',
      'If paralysis develops, consider neostigmine with atropine (Table 15, p71): the test and the doses are in the Antivenom tab (6.5.4, p56 to 57)',
      'Coral snakes can also cause muscle pain and tenderness (Table 12, p42)',
      'If the breathing muscles fail: bag-valve-mask, then a definitive airway (6.3.4, p54)'],
      gap:'Tables 15 and 16; 6.5.4 (p56 to 57), adapted from the WHO South-East Asia guideline of 2016. No observation time is given for coral snake bites.'},
    keel:{end:'refer', title:'Red-necked keelback: anti-yamakagashi antivenom', items:[
      'Its bite can cause a severe coagulopathy (6.8, p59)',
      'Its antivenom is the anti-yamakagashi antivenom, sourced from Japan; no second choice and no dose in the guideline (6.8, p59; Tables 15 and 16, p72, p74)',
      'Get expert help early: the EP or a specialist, RECS and the pharmacist (Appendix 3, p93; p3; 7.3, p67)',
      'Blood products only for life-threatening bleeding until antivenom is available (6.4.9, p55)'],
      gap:'6.8 (p59); Tables 15 and 16. Not in the guideline: the dose, and how to get the antivenom in time.'},
    other:{end:'refer', title:'Another snake, or an exotic pet: ask an expert', items:[
      'A snake not in the tables: consult an expert for the choice of antivenom (Table 15, p72; Table 16, p74)',
      'An exotic species from a zoo, pet shop or illegal collection: hospitals stock antivenom for local snakes only; get expert help, and the pharmaceutical services can help source one (6.7, p58)',
      'The gold-ringed cat snake (Boiga dendrophila) can envenom the bite site badly through its grooved rear fangs (Table 7, p22)',
      'Never the Indian polyvalent antivenom: it is not appropriate for Malaysian snakes (p68)'],
      gap:'Tables 15 and 16 notes; 6.7 (p58). RECS gives 24-hour advice (p3), but no contact is printed.'},

    /* Venom ophthalmia: 6.9 (p60) and 6.4.6 (p55) */
    eye:{end:'refer', title:'Venom in the eyes: irrigate, then urgent ophthalmology', items:[
      'Irrigate at once with plenty of normal saline (5-10 litres), water or Ringer\'s lactate; with no water or saline, milk or another bland fluid (6.4.6, p55; 6.9, p60)',
      'Look for a bite as well (p60)',
      'Then: fluorescein for corneal abrasion; tetracaine or adrenaline 0.5% eye drops for pain, but not for long; atropine or scopolamine drops for ciliary spasm; a topical antibiotic if corneal erosion is not excluded (p60)',
      'No topical steroids, which help the venom melt the cornea, and no topical antivenom (p60)',
      'Urgent ophthalmology referral for a slit lamp examination (p60)'],
      gap:'6.9 (p60), mostly from the equatorial spitting cobra, which can spray venom 1 metre or more (p6). Systemic envenoming from the eye has not been documented (p60). Which HKL team sees it out of hours: still to confirm.'},

    /* Antivenom reactions: 7.7 and Table 17 (p76 to 77) */
    rx:{q:'When did the reaction start?', hint:'Table 17 (p76 to 77). No routine premedication: hydrocortisone and antihistamines only for signs of allergy (6.4.3, p55); adrenaline is drawn up before every infusion (7.3.1, p69).', fig:'react',
      opts:[['2 to 180 minutes after starting: itch, hives, cough, vomiting, a fast pulse, or worse','rxe'],['1-2 hours after: rigors, fever, a fall in blood pressure','rxp'],['1 to 12 days later: fever, rash, joint pains','rxl']]},
    rxe:{end:'neutral', title:'Early reaction: stop, adrenaline, then restart slowly', items:[
      'Stop the antivenom; restart it more slowly once the reaction is treated and settled (7.7, p76)',
      'Adrenaline IM at the first sign: adult 0.5 mg, child 0.01 mg/kg, of 1 mg/ml (1 in 1,000). Repeat every 5-10 minutes, or an IV infusion if worse; with a coagulopathy, no IM: go straight to IV (Table 17, p76)',
      'Adrenaline infusion, adult: 1 mcg/min, 1 mg (1 ml of 1:1000) in 500 ml NS at 0.5 ml/min, as the ebook gives it for anaphylaxis (ebook p15 to 16). Child: ask the EP',
      'Chlorpheniramine IV: adult 10 mg, child 0.2 mg/kg. Ranitidine IV: adult 50 mg, child 1 mg/kg (Table 17, p76)',
      'Hydrocortisone IV 2-4 mg/kg, for a child at most 200 mg; it can prevent a delayed or recurrent reaction (Table 17, p76)',
      'IV fluids for hypovolaemia (Table 17, p76)'],
      links:[['#anaphylaxis','Ebook: anaphylaxis']],
      gap:'The adult infusion follows the ebook, the guide owner\'s decision of 10 Nov 2026: Table 17 prints it as 1 microgm/kg/min (p76), which is not used. Neither source gives a child\'s infusion. No adult maximum is printed for hydrocortisone.'},
    rxp:{end:'neutral', title:'Pyrogenic reaction: cool, antipyretic, fluids', items:[
      'Shaking chills, fever, vasodilatation and falling blood pressure 1-2 hours after; febrile convulsions in children (Table 17, p76)',
      'Cool the patient and give an antipyretic, such as paracetamol by mouth or suppository; IV fluids for hypovolaemia (Table 17, p76)'],
      gap:'Table 17 (p76) shares one treatment cell between early and pyrogenic reactions: it does not say whether the adrenaline, antihistamines and hydrocortisone apply here.'},
    rxl:{end:'neutral', title:'Late (serum sickness) reaction', items:[
      '1-12 days after antivenom, 7 on average: fever, nausea, vomiting, diarrhoea, itch, recurring hives, joint and muscle pains, swollen nodes and joints; rarely nerve, kidney or brain involvement (Table 17, p77)',
      'Chlorpheniramine by mouth for 5 days: adult 2 mg six-hourly; child 0.25 mg/kg/day in divided doses (Table 17, p77)',
      'No response in 24-48 hours: prednisolone for 5-7 days, adult 30-60 mg/day, child 0.7-1 mg/kg/day, in divided doses (Table 17, p77)'],
      gap:'Table 17 (p77) calls it a 5-day course of prednisolone but gives 5-7 days. Where the reaction is managed is not said; patients are asked to come back if it develops (9.1.2.1, p83).'},

    /* Going home: 4.8.2 (p44), chapter 9 (p83 to 87) */
    home:{q:'Going home: which patient?', hint:'4.8.2 (p44) and chapter 9 (p83 to 87).',
      opts:[['Non-venomous snake, identified by an expert','nv'],['Observed, with no envenoming at all','dcobs'],['After envenoming or antivenom','fu']]},
    dcobs:{end:'discharge', title:'No envenoming after observation: discharge', items:[
      'No sign or symptom of envenoming: home after a suitable observation period (9.1.1, p83); for an unknown species, at least 24 hours (4.2, p31)',
      'A frightening bite can leave post-traumatic stress even without envenoming: a psychiatrist or counsellor as needed (9.2.2, p86 to 87)',
      'Give the discharge advice'],
      gap:'9.1.1 (p83) gives no observation time when the species is known, and the guideline gives no return advice for these patients.'},
    fu:{end:'discharge', title:'After envenoming or antivenom: follow-up', items:[
      'Follow-up at a suitable time (9.1.2, p83). After antivenom: come back if an antivenom-related illness develops (p83); a late reaction comes 1-12 days after (Table 17, p77)',
      'After a pit viper envenoming: blood tests 5-7 days after discharge, for recurrence, mostly a coagulopathy found on testing, sometimes petechiae, rarely bleeding (9.1.2.1, p83 to 84)',
      'Wounds after surgery: daily dressings, watching the healing and for infection; diabetes and immune deficiency slow healing. Plastic surgery, orthopaedics, physiotherapy or occupational therapy as needed (9.1.2.2, p84)',
      'Fear, poor sleep and reluctance to return to work are common: counselling, a psychiatrist or counsellor as needed (9.2.2, p86 to 87)',
      'Give the discharge advice'],
      gap:'Chapter 9 (p83 to 87). The guideline does not say who arranges the blood tests at 5-7 days: in HKL, still to confirm.'}
  },

  notes:[
    {l:'First aid', notes:[
      {h:'Before hospital: what the guideline says', src:'The guideline has no first-aid section (p27, p30, p54, p66, p94)', items:[
        'A pressure bandage is generally not for cobra and pit viper bites, which often cause severe tissue necrosis (p27)',
        'Ask about a tourniquet, cutting, suction or traditional medicine (Table 9, p30); judge the swelling with no tourniquet on (p66). Taking a tourniquet off is not covered',
        'In hospital, keep the bitten limb still, in a neutral position or level with the heart (6.4, p54)',
        'A health clinic assesses, resuscitates, identifies the snake and refers to a hospital if needed (Appendix 4, p94)']},
      {h:'Do and do not', src:'MST book (Land Snakes of Medical Significance in Malaysia, 2017), p46, in the guide\'s own words', items:[
        'Do: keep calm and move as little as possible; keep the bitten limb still; go to the nearest hospital with emergency care',
        'Do not: cut, suck, burn or massage the bite; tie a ligature; use ice or an electric shock; apply or swallow herbal remedies; go to a traditional healer or snake charmer']},
      {h:'The snake', src:'MOH guideline p7 to 8; MST book p9', items:[
        'Do not try to catch it: that puts others at risk. Killing it may be illegal; many species are protected (p7)',
        'Photos: from above, from below, and the head close up from above and the sides (p7)',
        'A dead snake: handle it with great care, as one that looks dead may not be, and a dead snake can still inject venom (MST book, p9). Preserve it in 10% formaldehyde or 70% alcohol, sealed airtight (p8)']}
    ]},
    {l:'Identify', notes:[
      {h:'How to identify the snake', src:'2.2 (p7 to 8), 4.7 (p43) and Table 7 (p22 to 23)', items:[
        'An expert should verify the species, from the snake or good photos; a local name alone can mislead (p7 to 8)',
        'No snake or photo: show the patient the Malaysian Society on Toxinology image gallery, not random internet pictures (p8)',
        'Diagnosis: unidentified injury, unidentified animal bite, unidentified snakebite, the named species, or venom ophthalmia, plus any local or systemic envenoming (Table 13, p43)',
        'Harmless look-alikes: gold-ringed cat snake (banded krait); banded wolf snake (Malayan krait, young spitting cobra); pink-headed reed snake (red-headed krait, Malayan blue coral); red-tailed green ratsnake (some green pit vipers) (Table 7)']},
      {h:'What each group does', src:'Table 12 (p41 to 42), Tables 2 to 5 (p9 to 12), chapter 3 (p25 to 28)', items:[
        'Cobras: severe pain, spreading swelling, blisters and necrosis; paralysis. The equatorial spitting cobra also sprays venom into the eyes (p6)',
        'King cobra: pain, swelling and tissue damage; paralysis',
        'Kraits: little or nothing at the bite, often painless; paralysis (p26 to 27)',
        'Coral snakes: paralysis; muscle pain and tenderness',
        'Pit vipers: severe pain, spreading swelling, bruising, blisters, sometimes necrosis; spontaneous bleeding; consumptive coagulopathy with low platelets; no paralysis. Wagler\'s and Bornean keeled: pain and swelling only',
        'Sea snakes: little at the bite, often painless; paralysis; muscle breakdown with trismus, dark urine, kidney injury and hyperkalaemia',
        'Red-necked keelback: severe coagulopathy (p59). Gold-ringed cat snake: significant local envenoming (p22)']},
      {h:'Malaysian venomous snakes', src:'Tables 2 to 5 (p9 to 12) and 15 to 16 (p70 to 74), local names as printed. The MST book differs: it calls the Malayan krait ular katam tebu and the banded krait ular katam belang (p11 to 12)', table:{head:['Snake','Where','Local name'], rows:[
        ['Monocled cobra, Naja kaouthia','Peninsular','Ular senduk'],
        ['Equatorial spitting cobra, Naja sumatrana','Both','Ular senduk sembur; ular senduk in Sabah and Sarawak'],
        ['King cobra, Ophiophagus hannah','Both','Ular tedung selar'],
        ['Malayan krait, Bungarus candidus','Peninsular','None printed'],
        ['Banded krait, B. fasciatus','Both','Ular katang tebu'],
        ['Red-headed krait, B. flaviceps','Both','Ular katang kepala merah'],
        ['Coral snakes: banded, Malayan blue, spotted (Calliophis species)','Both','None printed'],
        ['Sea snakes, for example Hydrophis schistosus','Both','Ular laut'],
        ['Malayan pit viper, Calloselasma rhodostoma','Peninsular','Ular kapak bodoh'],
        ['Mountain pit viper, Ovophis convictus','Peninsular','Ular kapak gunung'],
        ['Mangrove, Tioman island and Cameron pit vipers (Trimeresurus)','Peninsular','Ular kapak bakau; ular kapak Tioman; ular kapak Cameron'],
        ['Thai peninsula, Hagen\'s green and leaf-nose palm pit vipers (Trimeresurus)','Peninsular','None printed'],
        ['Sumatran pit viper, T. sumatranus','Both','None printed'],
        ['Wagler\'s (temple) pit viper, Tropidolaemus wagleri','Peninsular','Ular kapak tokong'],
        ['Kinabalu brown, Sabah green, Kinabalu green, Bornean palm, beautiful and Bornean keeled pit vipers','Sabah and Sarawak','None printed'],
        ['Red-necked keelback, Rhabdophis subminiatus','Both','None printed']]}}
    ]},
    {l:'20WBCT', notes:[
      {h:'How to do it', src:'4.5.9 (p39)', fig:'wbct', items:[
        'For when the laboratory cannot do a clotting profile: a quick bedside test when the bite is unidentified or a pit viper is suspected',
        'Put 2 ml of freshly drawn venous blood into a small, dry glass tube, new or heat-cleaned',
        'Leave it undisturbed at room temperature for 20 minutes, then tip it once',
        'Still liquid: a coagulopathy is possible. Repeat as needed',
        'Some small studies question its sensitivity and specificity, but it has served well without a laboratory']},
      {h:'What the result means', src:'4.5.9 (p39), 7.2.1.1 (p66), 7.5.3 and 7.6.1 (p75)', items:[
        'Do not decide antivenom on the 20WBCT alone: read it with the patient\'s condition, and confirm with the laboratory clotting profile (p39)',
        'Yet a coagulopathy on the 20WBCT is also listed as an antivenom indication (p66)',
        'After an adequate dose, clotting usually returns in 3-9 hours (p75)',
        'Still not clotting, or not clotting again, 6 hours after the infusion ended: repeat the starting dose (p75)',
        'Not in the guideline: whether a partial clot counts, a schedule for repeat tests, or what to use without a glass tube']}
    ]},
    {l:'Antivenom', notes:[
      {h:'Which product, and the starting dose', src:'Tables 14 to 16 (p67 to 74), arranged by product. QSMI: the Thai Red Cross institute in Bangkok (p63). Next doses go by the clinical signs (p72, p74)', table:{head:['Antivenom','For','Starting dose; next dose'], rows:[
        ['QSMI Cobra Antivenin','Monocled cobra; equatorial spitting cobra','Local envenoming 5-10 vials, systemic 10 vials; next after 1-2 hours'],
        ['QSMI King Cobra Antivenin','King cobra','10 vials; next after 1-2 hours'],
        ['QSMI Malayan Krait Antivenin','Malayan krait','5 vials; next after 1-2 hours'],
        ['QSMI Banded Krait Antivenin','Banded krait','5 vials; next after 1-2 hours'],
        ['QSMI Neuro Polyvalent Snake Antivenom','Red-headed krait; second choice for the cobras, king cobra and (Sabah and Sarawak) banded krait','Red-headed krait 5 vials; next after 1-2 hours. No dose as a second choice'],
        ['CSL Polyvalent Sea Snake Antivenom','Sea snakes','1-3 vials; next after 1-2 hours'],
        ['QSMI Malayan Pit Viper Antivenin','Malayan pit viper','4 vials; next at 6 hours'],
        ['QSMI Green Pit Viper Antivenin','Green pit vipers (Trimeresurus) and the Kinabalu brown pit viper','3 vials; next at 6 hours'],
        ['QSMI Haemato Polyvalent Snake Antivenom','Second choice for the pit vipers','No dose given'],
        ['Anti-yamakagashi antivenom (Japan)','Red-necked keelback','No dose given'],
        ['None','Coral snakes; Wagler\'s and Bornean keeled pit vipers','Coral: consider neostigmine with atropine. Those pit vipers: usually not indicated']]},
        items:['Elapid antivenoms neutralise less per vial: up to 10 vials to start in confirmed envenoming (p65)',
          'Not in Borneo: the Malayan pit viper, monocled cobra and Malayan krait (p74)',
          'Never the Indian polyvalent antivenom: not appropriate for Malaysian snakes (p68)']},
      {h:'How to give it', src:'7.3.1 (p69), 6.6 (p58), 6.4.3 and 6.5.1 (p55)', fig:'avgive', items:[
        'The choice is for a doctor trained in snakebite management in Malaysia (p69)',
        'Adrenaline drawn up before starting: adult 0.5 mg, child 0.01 mg/kg, of 1 mg/ml (1 in 1,000) (p69)',
        'No routine hydrocortisone or antihistamine beforehand, only for signs of allergy (6.4.3, p55); sedating antihistamines blur the neurological assessment (6.5.1.1, p55)',
        'IV only. Reconstitute each vial with the solution supplied or 10 ml water for injection; swirl gently, never shake (p69)',
        'Dilute: adult 250-500 ml normal saline or D5%; child 5-10 ml/kg. Fluid a concern (a child, renal or heart failure): dilute in 5-10 ml/kg, or give it undiluted (p69; 6.6.3 to 6.6.4, p58)',
        'Run at 1-2 ml/min for 10-15 minutes; with no reaction, faster, to finish within an hour (p69)',
        'Monitor during the infusion and for at least an hour after, charting the vital signs (p69)',
        'The same dose at every age, in pregnancy and with comorbidities; no contraindication (6.6.1 to 6.6.2, p58)']},
      {h:'After the dose', src:'7.5 and 7.6 (p75); recurrence p63', items:[
        'Usually: bleeding stops within 15-30 minutes; clotting returns in 3-9 hours; blood pressure may rise within 30-60 minutes; cobra paralysis may improve from 30 minutes, usually over hours; dark urine clears within hours, but watch renal function for days',
        'Krait and sea snake paralysis does not respond like this: if antivenom does not halt it, urgent intubation and ventilation',
        'Repeat the starting dose: still unclotted, or unclotted again, 6 hours after the infusion ended; within 1-2 hours if bleeding stays brisk; after 1-2 hours if paralysis or the circulation worsens, with full support',
        'No maximum dose or number of repeats is given. Signs can return when the antivenom clears faster than the venom (p63)']},
      {h:'Reactions and their treatment', src:'7.7 and Table 17 (p76 to 77); the menu\'s reaction route has each one', fig:'react', items:[
        'Early, 2-180 minutes after starting (itch, hives, cough, vomiting, a fast pulse; a few, hypotension, bronchospasm or angio-oedema): stop the antivenom; adrenaline IM, adult 0.5 mg, child 0.01 mg/kg, repeated every 5-10 minutes or an IV infusion if worse, IV straight away with a coagulopathy; chlorpheniramine, ranitidine and hydrocortisone IV; restart the antivenom more slowly',
        'Pyrogenic, 1-2 hours after (rigors, fever, a fall in blood pressure): cool the patient, an antipyretic, IV fluids',
        'Late, 1-12 days after: chlorpheniramine by mouth for 5 days; prednisolone if no response in 24-48 hours',
        'Adrenaline infusion: for an adult the guide follows the ebook\'s 1 mcg/min (ebook p15 to 16), the guide owner\'s decision of 10 Nov 2026; Table 17 prints 1 microgm/kg/min. Child: ask the EP']},
      {h:'Neostigmine for paralysis', src:'6.5.4 (p56 to 57), adapted from the WHO South-East Asia guideline of 2016', items:[
        'May help in neurotoxic envenoming, especially from cobras, not kraits, and in coral snake bites; antivenom first (p56; Table 15, p71)',
        'Record baseline signs. Atropine IV, adult 0.6 mg, child 50 µg/kg (or glycopyrronium); then neostigmine IM, adult 0.02 mg/kg, child 0.04 mg/kg. Or edrophonium by slow IV injection, adult 10 mg, child 0.25 mg/kg (p56 to 57)',
        'Watch 30-60 minutes after neostigmine, 10-20 minutes after edrophonium, for less ptosis and better peak flow, FEV1 or expiratory pressure (p57)',
        'A clear response: neostigmine 0.5-2.5 mg every 1-3 hours, at most 10 mg in 24 hours (child 0.01-0.04 mg/kg every 2-4 hours), IM, IV or SC, with atropine. By mouth: atropine 0.6 mg twice a day, with neostigmine 15 mg or pyridostigmine 60 mg, each four times a day (p57)']}
    ]},
    {l:'Observation', notes:[
      {h:'Who to observe, for how long, and discharge', src:'4.8 (p44), 4.2 (p31), chapter 5 (p46), 6.3.8 (p54), Appendix 2 (p91), 9.1.1 (p83)', fig:'obs', items:[
        'Observe and admit: any envenoming, a venomous snake, an unidentified snakebite or an unidentified animal bite (4.8.1). Species unknown: at least 24 hours (4.2)',
        'Serial assessment for the first 48 hours on the snakebite chart, at least hourly for the first 12 hours (chapter 5; Appendix 2). While acute: vital signs, pain score and PEFR every 5-15 minutes; temperature 4-hourly; urine output hourly (6.3.8)',
        'Home: a non-venomous snake identified by an expert, with a matching picture and no significant wound (4.8.2); or no envenoming after a suitable observation period, which is not defined (9.1.1)']},
      {h:'Blood tests in the first 48 hours', src:'Table 11 (p40), Appendix 1 (p90), 5.6 (p51), arranged by snake', items:[
        'Pit viper or unidentified: FBC, clotting profile and CK 6-hourly; renal profile at baseline; liver function at baseline, then serial if abnormal; D-dimer and fibrinogen if there is a coagulopathy',
        'Cobra, krait or coral: FBC daily; clotting at baseline only unless indicated (p90); CK 6-hourly; renal profile and liver function at baseline',
        'Sea snake: FBC daily; clotting at baseline; CK 4 to 6-hourly; renal profile 6-hourly; liver function at baseline; serial urine FEME, with urine myoglobin',
        'Appendix 1: bloods every 4-6 hours through the first 24 to 48 hours (p90). D-dimer and fibrinogen do not change the antivenom decision (p51)']},
      {h:'Measuring the swelling: RPP', src:'5.4.8 (p48 to 50) and Table 10 (p34)', fig:'rpp', items:[
        'Mark the proximal edge of the swelling with a small strip of micropore tape, labelled with the date and time; never a permanent marker (p34, p50)',
        'At a fixed interval, for example every 2 or 3 hours, tape the new edge and measure between the distal borders of the two tapes (p50)',
        'RPP is that distance over the interval, in cm per hour: 2.5 cm in 4 hours is 0.6 cm/h (p49)',
        'Keep only the two latest tapes (p49). Limb girth adds nothing (p50). Score the pain at each check (p50)',
        'No RPP value that calls for antivenom is given']},
      {h:'Paralysis: how to look for it', src:'4.2.4 (p32) and 5.1 (p46)', fig:'ptosis', items:[
        'Paralysis descends, and ptosis comes first (p32)',
        'Ptosis: hold a finger or pen in front of the patient, ask them to follow it with the eyes only, and move it slowly up: the upper lids lift less, or not at all (p32)',
        'External ophthalmoplegia: the same test; an eye cannot follow in some directions; double vision (p32)',
        'Also: fixed dilated pupils, the broken neck sign, difficulty swallowing, regurgitation, loss of voice, paradoxical breathing (p46)']},
      {h:'The bitten limb: compartment syndrome', src:'Chapter 8 (p79 to 81) and 6.5.5 (p57)', items:[
        'Rare after snakebite; envenoming mimics it with superficial swelling and raised pressure under the skin (p79)',
        'No fasciotomy until antivenom is fully optimised and clotting corrected (p79)',
        'Confirm by measured tissue pressure and serial examination. Over 40 mmHg (less in children) risks ischaemic necrosis in orthopaedic practice, though fasciotomy may not save muscle the venom has damaged (p80)',
        'Fingers, hand and foot: only with clear neurological or vascular compromise on serial examination and Doppler (p80)',
        'Surgery only after a multidisciplinary expert consultation; debride necrosis once it is demarcated (p80 to 81). Antibiotics for necrosis or extensive injury, covering aerobes and anaerobes (p57)']}
    ]},
    {l:'Children', notes:[
      {h:'Children and pregnancy', src:'6.6 (p58), 7.3.1 (p69), 7.4 (p70), Table 17 (p76 to 77), 6.5.4 (p56 to 57), p80 and p31', items:[
        'Antivenom: the same dose at every age, and no contraindication (p58). Some severely envenomed children may need a larger volume of antivenom, given their lower volume of distribution (7.4, p70)',
        'Dilute in 5-10 ml/kg of normal saline or D5% (p69), or give it undiluted if volume is a concern (p58)',
        'Adrenaline 0.01 mg/kg IM, of 1 mg/ml, drawn up before the infusion (p69)',
        'Reactions: chlorpheniramine 0.2 mg/kg IV, ranitidine 1 mg/kg IV, hydrocortisone 2-4 mg/kg IV, at most 200 mg; febrile convulsions in a pyrogenic reaction. Late: chlorpheniramine 0.25 mg/kg/day, then prednisolone 0.7-1 mg/kg/day for 5-7 days, in divided doses (Table 17)',
        'Neostigmine test: atropine 50 µg/kg IV, neostigmine 0.04 mg/kg IM, or edrophonium 0.25 mg/kg slow IV; then neostigmine 0.01-0.04 mg/kg every 2-4 hours (p56 to 57)',
        'Compartment pressure: the 40 mmHg threshold is lower in children (p80)',
        'Pregnancy: bleeding may show as an antepartum haemorrhage (p31); antivenom has no contraindication (p58)']}
    ]}
  ],
  advice:[
    'After antivenom: come back if you get fever, itching or hives, joint or muscle pains, swollen glands, or nausea, vomiting or diarrhoea. This can start 1 to 12 days after the treatment, about a week on average (9.1.2.1, p83; Table 17, p77)',
    'After a pit viper bite treated with antivenom: have your blood tested again 5 to 7 days after you go home, because clotting problems can come back, sometimes with small red spots or bleeding (9.1.2.1, p83 to 84)',
    'Wound care: keep your dressing appointments and watch for infection; diabetes and a weak immune system can slow healing (9.1.2.2, p84)',
    'Feeling afraid, sleeping badly or not wanting to go back to work after a bite is common: ask for help, as counselling is available (9.2.2, p86 to 87)',
    'If you are ever bitten again: keep calm, move as little as possible, keep the bitten limb still and go to the nearest hospital with emergency care. Do not cut, suck, burn, massage or tie the bite, use ice, or use herbal remedies (MST book, p46)',
    'Do not try to catch or kill the snake. A clear photo, taken with care, helps the doctor identify it (p7)'],
  refs:['Ministry of Health Malaysia. Guideline: Management of Snakebite. MOH/P/PAK/341.17(GU). ISBN 978-967-0769-79-0. Putrajaya. No year printed: the PDF dates from August 2017, and MyBIS lists it as 2017. Available at moh.gov.my.',
    'Summarised, not reproduced: the guideline states no reuse terms. Read the full guideline for the wording. Its photographs are copyright of their photographers.',
    'Ahmad Khaldun Ismail, Teo Eng Wah, Indraneil Das, Taksa Vasaruchapong and Scott A. Weinstein. Land Snakes of Medical Significance in Malaysia, 2nd edition, July 2017, with the support of the Malaysian Society on Toxinology. ISBN 978-967-0250-26-7. All rights reserved: used for facts only, in the guide\'s own words (the MST book).',
    'Remote Envenomation Consultation Services (RECS): 24-hour phone advice from emergency physicians, named in the guideline (p iii, p vi, p vii, p3, p67) without a contact.'],
  see:[['#calc-snake20','20-minute whole blood clotting test'],['#calc-snakeav','Antivenom by snake'],['#anaphylaxis','Anaphylaxis (ebook pathway)'],['#animal-bites','Other animal bites and rabies'],['#mau-admission','Admission to MAU: it lists snake bite'],['#referral-rules--med','Admission to General Medicine'],['#yellow-zone--flow','Yellow Zone patient flow'],['#gz-rules--wait','Patients who should not wait outside'],['#children--pat','Where to triage a child']]
};

/* Links from related entries (links only: their content stays as written). Guarded, so the file also loads on its own. */
if (P['mau-admission']) P['mau-admission'].see = [...(P['mau-admission'].see || []), ['#snakebite-moh', 'Snakebite: MOH guideline 2017']];
if (P['anaphylaxis']) P['anaphylaxis'].see = [...(P['anaphylaxis'].see || []), ['#snakebite-moh--rxe', 'Snakebite: a reaction to antivenom']];
if (P['animal-bites']) P['animal-bites'].see = [...(P['animal-bites'].see || []), ['#snakebite-moh', 'Snakebite: MOH guideline 2017']];

/* An MOH guideline, not a CPG: its own footer and outcome label */
P['snakebite-moh'].notesFoot = 'From the MOH Guideline: Management of Snakebite (2017), with its page numbers, in the guide\'s own words: it prints no permission to reproduce it, so nothing here is quoted. Facts from Land Snakes of Medical Significance in Malaysia (2nd edition, 2017; all rights reserved) are cited as the MST book.';
P['snakebite-moh'].kinds = {neutral:'What the guideline says'};
