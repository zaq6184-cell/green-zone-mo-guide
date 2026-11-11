/* ================= Abdominal pain in the ED: the visual handbook (12 Nov 2026) =================
   Krishna, 12 Nov 2026: "review in detail line by line this 2 pdf on the approach to abdominal pain in emergency department.
   add it fully, incorporate it into the app, make it interactive and premium". The two PDFs are his own teaching handbook,
   made with AI ("Approach to Abdominal Pain in the Emergency Department - Malaysia-context visual handbook", 29 pages, and its
   2-page quick reference; reviewed v2, 12 Nov 2026). Rules 8 and 5 were quoted back; he chose "Checked, as printed": the
   handbook is quoted as printed with its page, every dose and number checked against the source it cites first
   (sources/abdo/SOURCE-CHECK.md, ABDO-REVIEW.md), anything that cannot be confirmed left out with a gap and an open item.
   It does not replace the ebook's own Abdominal pain pathway (pp. 10-11), which stays as printed; where the two differ is
   an open item. Credit (his choice): "Teaching handbook prepared for the Green Zone guide (AI-assisted synthesis)".
   Bracketed numbers [n] are the handbook's own reference numbers: the Sources tab lists them with their links. */
const HB_SRC = 'Teaching handbook prepared for the Green Zone guide (AI-assisted synthesis), reviewed v2, 12 Nov 2026';
const hbp = (pg, refs) => 'Handbook p. ' + pg + (refs ? '. Its evidence: [' + refs + '] (Sources tab)' : '') + '. A teaching aid, not an official MOH/HKL protocol.';
const hbx = s => ' Left out or changed after checking the sources it cites: ' + s;
const HB_REFS = [
  ['[1] MOH Malaysia. Pain Management in Emergency & Trauma Department, 2nd ed. (2020). Abdominal pain and renal colic; Appendix 2 morphine protocol, printed pp. 20, 22, 42.', 'https://www.moh.gov.my/images/04-penerbitan/penerbitan-klinikal/Program-Bebas-Kesakitan/Pain_Management_in_ETD_2020_2nd_Ed._.pdf'],
  ['[2] MOH Malaysia. National Antimicrobial Guideline, 4th ed. (2024), live A4 chapter. Gastrointestinal and hepatobiliary infections; online update banner Jan 2026.', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a4-gastrointestinal-infections'],
  ['[3] MOH Malaysia. Handbook of Obstetrics Guideline (2024). Early-pregnancy bleeding, pregnancy of unknown location and obstetric emergencies.', 'https://www.moh.gov.my/images/04-penerbitan/penerbitan-klinikal/perkhidmatan-OG-dan-pediatrik/FINAL_DRAF_LAYOUT_Handbook_of_Obstetrics_Guideline_PDF_compressed.pdf'],
  ['[4] MaHTAS, MOH Malaysia. Management of Dengue in Adults, 4th ed. (2026). Full text read via the PDF linked by PKD Melaka Tengah. Chapters 4, 8, 9; Appendix 8. (The printed link is another site\'s Drive copy; here it opens this guide\'s own Dengue CPG entry.)', '#dengue-cpg'],
  ['[5] NSW Agency for Clinical Innovation. Adult ECAT: Abdominal pain (updated 2024). Front-door assessment, red flags and early treatment; nursing protocol used for assessment principles.', 'https://aci.health.nsw.gov.au/ecat/adult/abdominal-pain'],
  ['[6] NSW Agency for Clinical Innovation. Adult abdominal assessment. Pain location, referred symptoms and examination.', 'https://aci.health.nsw.gov.au/ecat/adult/assessment/abdominal'],
  ['[7] RCEMLearning. Abdominal Pain without Shock. Differential diagnosis, investigations, reassessment and discharge. Indexed text accessed; site in maintenance.', 'https://www.rcemlearning.org/reference/abdominal-pain-without-shock/'],
  ['[8] RCEM. Adults who may require emergency laparotomy (2024). Early senior/surgical review, high-risk groups, timely CT and negative-scan pathways.', 'https://rcem.ac.uk/wp-content/uploads/2024/10/RCEM-Advisory-Statement-regarding-the-management-of-adults-presenting-to-the-Emergency-Department-who-may-require-an-emergency-laparotomy-2-2.pdf'],
  ['[9] Surviving Sepsis Campaign. Adult international guidelines (2026). Antibiotic timing, balanced crystalloid, reassessment, vasopressors and source control. DOI: 10.1097/CCM.0000000000007075.', 'https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026'],
  ['[10] American College of Radiology. Acute Nonlocalized Abdominal Pain. Appropriateness criteria; variants for acute nonlocalised pain.', 'https://acsearch.acr.org/docs/69467/Narrative/'],
  ['[11] American College of Radiology. Right Upper Quadrant Pain (2022). Ultrasound for suspected biliary disease; further imaging after equivocal studies.', 'https://acsearch.acr.org/docs/69474/Narrative/'],
  ['[12] American College of Radiology. Right Lower Quadrant Pain (2022). CT with IV contrast in adults; ultrasound/MRI options including pregnancy.', 'https://acsearch.acr.org/docs/69357/Narrative/'],
  ['[13] Podda M, et al. WSES Jerusalem appendicitis guidelines, 2025 edition (published 2026). JAMA Surgery 161:283-295. DOI: 10.1001/jamasurg.2025.6218. Indexed abstract used; full text not accessible.', 'https://doi.org/10.1001/jamasurg.2025.6218'],
  ['[14] Bala M, et al. WSES acute mesenteric ischaemia guidelines (2022). Urgent CTA; limitations of lactate and other biomarkers. DOI: 10.1186/s13017-022-00443-x.', 'https://link.springer.com/article/10.1186/s13017-022-00443-x'],
  ['[15] NICE NG126. Ectopic pregnancy and miscarriage (updated June 2026). Pregnancy of unknown location: symptoms take priority; hCG cannot determine location.', 'https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy'],
  ['[16] NICE NG118. Renal and ureteric stones: assessment and management (2019). Urgent imaging; NSAIDs first line for appropriate patients.', 'https://www.nice.org.uk/guidance/ng118/chapter/recommendations'],
  ['[17] European Association of Urology. Urolithiasis guideline (2026). Infected obstruction/anuria: urgent decompression and immediate antibiotics.', 'https://uroweb.org/guidelines/urolithiasis/chapter/guidelines'],
  ['[18] Tenner S, et al. American College of Gastroenterology: Acute pancreatitis (2024). Diagnosis, selective CT, lactated Ringer solution, nutrition and antibiotics. DOI: 10.14309/ajg.0000000000002645.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/'],
  ['[19] ten Broek RPG, et al. Bologna adhesive small bowel obstruction guideline, 2017 update (2018). CT, decompression, fluid replacement and operative red flags. DOI: 10.1186/s13017-018-0185-2.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/'],
  ['[20] Tarasconi A, et al. WSES perforated and bleeding peptic ulcer guidelines (2020). CT for suspected perforation; urgent surgical and resuscitative care. DOI: 10.1186/s13017-019-0283-9.', 'https://link.springer.com/article/10.1186/s13017-019-0283-9'],
  ['[21] NICE NG156. Abdominal aortic aneurysm: diagnosis and management (2020). Immediate aortic ultrasound, vascular discussion and transfer.', 'https://www.nice.org.uk/guidance/ng156/chapter/Recommendations'],
  ['[22] ACOG Committee Opinion 783. Adnexal torsion in adolescents (2019). Urgent assessment; Doppler flow alone does not exclude torsion. Adolescent-specific evidence.', 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/08/adnexal-torsion-in-adolescents'],
  ['[23] Royal Children\'s Hospital Melbourne. Abdominal pain - acute. Paediatric assessment, serial examination, analgesia and referral.', 'https://www.rch.org.au/clinicalguide/guideline_index/Abdominal_pain/'],
  ['[24] Royal Children\'s Hospital Melbourne. Acute scrotal pain or swelling (updated Jan 2026). Torsion/irreducible hernia need urgent surgical evaluation; avoid imaging delay.', 'https://www.rch.org.au/clinicalguide/guideline_index/Acute_Scrotal_Pain_or_Swelling/'],
  ['[25] RCEM. Management of Acute Pain in Adults in the ED (2024). Pain reassessment; paracetamol, opioid monitoring and prescribing cautions.', 'https://rcem.ac.uk/wp-content/uploads/2024/10/Management_of_Acute_Pain_in_Adults_2024_v1.pdf'],
  ['[26] Sartelli M, et al. WSES acute colonic diverticulitis guidelines (2020). CT classification; selective antibiotics; complicated disease. DOI: 10.1186/s13017-020-00313-4.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7206757/'],
  ['[27] IDSA. Clinical Practice Guideline for Infectious Diarrhea (2017). Rehydration, stool-test indications and selective antimicrobials.', 'https://www.idsociety.org/practice-guideline/infectious-diarrhea'],
  ['[28] Umpierrez GE, et al. Hyperglycemic Crises in Adults With Diabetes: Consensus Report (2024). ADA/EASD/JBDS/AACE/DTS. Euglycaemic DKA, ketones and acidosis. DOI: 10.2337/dci24-0032.', 'https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A'],
  ['[29] MOH Malaysia. National Antimicrobial Guideline: A16 Tropical Infections. Leptospirosis exposure and severity-based treatment; live online reference.', 'https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a16-tropical-infections'],
  ['[30] Miura F, et al. Tokyo Guidelines 2018: Initial management of acute biliary infection. Cholangitis resuscitation and severity-based biliary drainage. DOI: 10.1002/jhbp.509.', 'https://onlinelibrary.wiley.com/doi/full/10.1002/jhbp.509'],
  ['[31] BSG/BASL. Guidelines on the management of ascites in cirrhosis (2021). Diagnostic paracentesis, ascitic neutrophils and spontaneous bacterial peritonitis.', 'https://gut.bmj.com/content/70/1/9'],
  ['[32] American College of Emergency Physicians. Sonoguide: Abdominal Aortic Aneurysm (2020). Systematic aortic views and limitations of focused ultrasound.', 'https://www.acep.org/sonoguide/basic/aorta'],
  ['[33] American College of Emergency Physicians. Sonoguide: RUSH (2021). Focused ultrasound in undifferentiated shock; integrate with clinical findings.', 'https://www.acep.org/sonoguide/advanced/rush/'],
  ['[34] NICE CG141. Acute upper gastrointestinal bleeding in over 16s. Unstable severe bleeding: endoscopy immediately after resuscitation.', 'https://www.nice.org.uk/guidance/cg141/chapter/Recommendations'],
  ['[35] NICE CG174. Intravenous fluid therapy in adults in hospital. Crystalloid resuscitation and reassessment of response/overload.', 'https://www.nice.org.uk/guidance/cg174/chapter/recommendations'],
  ['[36] ACOG Committee Opinion 723. Diagnostic imaging during pregnancy and lactation (2017). Ultrasound/MRI preferred when appropriate; necessary CT should not be withheld.', 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/10/guidelines-for-diagnostic-imaging-during-pregnancy-and-lactation'],
  ['[37] CDC. STI Treatment Guidelines: Pelvic Inflammatory Disease (2021). Clinical suspicion, testing and indications for inpatient treatment.', 'https://www.cdc.gov/std/treatment-guidelines/pid.htm'],
  ['[38] Society for Endocrinology. Adrenal crisis emergency guidance. Prompt recognition and emergency steroid/fluid treatment; do not delay for diagnostic tests.', 'https://www.endocrinology.org/clinical-practice/clinical-guidance/adrenal-crisis/'],
  ['[39] ACG. Acute Pancreatitis Guideline Highlights (2024). Official visual summary: fluids, early feeding, selective antibiotics and biliary treatment.', 'https://webfiles.gi.org/links/journals/AJG-Clinical-Guidelines-Highlights-Acute-Pancreatitis-2024-FINAL.pdf'],
  ['[40] Banks PA, et al. Revised Atlanta classification of acute pancreatitis (2013). Diagnostic criteria: two of three; pancreatic enzyme activity at least three times the upper limit. DOI: 10.1136/gutjnl-2012-302779. (Not read for this guide: its page sits behind a bot check. ACG 2024 [18] prints "greater than 3 times the upper limit of normal", which the steps show.)', 'https://gut.bmj.com/content/62/1/102'],
  ['[41] HerniaSurge Group. Update of international guidelines for groin hernia management (2023). Acutely irreducible hernia: reduction only without suspicion of bowel ischaemia; emergency surgery for suspected strangulation. DOI: 10.1093/bjsopen/zrad080.', 'https://academic.oup.com/bjsopen/article/7/5/zrad080/7325871'],
  ['[42] NICE NG148. Acute kidney injury: prevention, detection and management. Urgent urology referral for pyonephrosis, obstructed solitary kidney, bilateral obstruction or complications of obstruction-related AKI.', 'https://www.nice.org.uk/guidance/ng148/chapter/Recommendations']
];
const HB_TRIG = [
  ['Shock / syncope / significant bleed', 'ABCDE, monitored care, IV access/crossmatch; consider AAA or ruptured ectopic; senior/specialty now.'],
  ['Peritonism / tender irreducible hernia', 'Urgent surgical review. Resuscitate, nil by mouth and antibiotics when indicated. If strangulation is suspected, do not attempt hernia reduction.'],
  ['Severe pain with few early signs', 'Consider mesenteric ischaemia; urgent CTA. A normal lactate cannot rule it out.'],
  ['Pregnancy possible / pelvic pain', 'Pregnancy test, appropriate pelvic US; unstable = O&G immediately. Unknown location needs an explicit O&G follow-up plan.'],
  ['Fever/sepsis + urinary obstruction', 'Cultures, immediate IV antibiotics and urgent urology/drainage. Sepsis with an obstructing stone requires urgent decompression.'],
  ['Anuria / obstructed solitary kidney', 'Immediate senior/urology review; urgent assessment of obstruction and renal function.'],
  ['Jaundice + systemic illness', 'Consider cholangitis; antibiotics and early biliary drainage assessment.'],
  ['Epigastric pain / deep breathing', 'Think ACS or DKA: ECG/appropriate troponin pathway; glucose, ketones and VBG when indicated.'],
  ['Suspected dengue + worsening pain', 'Assess CCTVR, BP/pulse pressure, HCT trend and urine output; escalate. Avoid NSAIDs; use the dengue fluid pathway.']
];
const HB_QR_GAP = 'Quick reference, back page (p. 2). Its selected original sources: MOH National Antimicrobial Guideline; MOH adult dengue CPG, 4th ed. 2026; WSES mesenteric ischaemia; EAU urolithiasis; NICE ectopic pregnancy. A teaching aid, not an official MOH/HKL protocol.';
/* The Malay discharge script, as printed on p. 23; it is read aloud from the Malay script tab */
const HB_SCRIPT = [
  'Punca sakit perut anda belum dapat dipastikan sepenuhnya.',
  'Datang semula ke Jabatan Kecemasan dengan segera jika sakit bertambah teruk, pitam, demam, muntah berterusan, tidak boleh minum, muntah atau najis berdarah, perut membuncit, susah bernafas atau air kencing berkurang.',
  'Jika ada kemungkinan hamil dan sakit atau pendarahan bertambah, datang segera.',
  'Jangan tunggu tarikh temujanji jika keadaan semakin teruk.',
  'Semakan semula: [tarikh/masa] di [tempat].',
  'Jika rebah atau terlalu lemah untuk datang dengan selamat, hubungi 999.'
];
/* The nine regions of p. 7, numbered as printed (the patient's right on the left of the page) */
const HB_REGIONS = [
  ['1 | Right upper', ['Biliary / liver disease', 'Kidney / lung base'], [['up','Biliary disease or pancreatitis'],['flk','Flank, urinary and scrotal pain']]],
  ['2 | Epigastrium', ['Peptic / pancreatic / biliary', 'ACS / aortic disease'], [['up','Biliary disease or pancreatitis'],['mim','Important mimics'],['vas','Vascular and bleeding threats']]],
  ['3 | Left upper', ['Spleen / stomach / pancreas', 'Kidney / lung base'], [['up','Biliary disease or pancreatitis'],['flk','Flank, urinary and scrotal pain'],['mim','Important mimics']]],
  ['4 | Right flank', ['Stone / pyelonephritis', 'Retrocaecal appendix'], [['flk','Flank, urinary and scrotal pain'],['app','Appendicitis and diverticulitis']]],
  ['5 | Central', ['Early appendix / obstruction', 'Ischaemia / AAA'], [['app','Appendicitis and diverticulitis'],['sbo','Obstruction and perforation'],['vas','Vascular and bleeding threats']]],
  ['6 | Left flank', ['Stone / pyelonephritis', 'Colon / retroperitoneum'], [['flk','Flank, urinary and scrotal pain'],['app','Appendicitis and diverticulitis'],['vas','Vascular and bleeding threats']]],
  ['7 | Right lower', ['Appendix / ileitis / hernia', 'Ectopic / torsion / stone'], [['app','Appendicitis and diverticulitis'],['preg','Pregnancy and pelvic pain'],['sbo','Obstruction, perforation and the groin']]],
  ['8 | Suprapubic', ['Bladder / retention / PID', 'Ectopic / pelvic cause'], [['preg','Pregnancy and pelvic pain'],['flk','Flank, urinary and scrotal pain']]],
  ['9 | Left lower', ['Diverticulitis / colitis', 'Ectopic / torsion / stone'], [['app','Appendicitis and diverticulitis'],['preg','Pregnancy and pelvic pain'],['flk','Flank, urinary and scrotal pain']]]
];
const HB_LOC = 'Location is a clue. Organs and pain can overlap. Referred pain: shoulder-tip pain may reflect diaphragmatic irritation; back radiation can occur with pancreatic or aortic disease. Migration: early appendicitis may begin centrally before localising.';
const hbl = (k, t) => ['#abdo-handbook--' + k, t];

P['abdo-handbook'] = {
  title:'Abdominal pain in the ED: the visual handbook', grp:'cpg', kind:'Handbook', isnew:true, hero:'abdohb',
  src:HB_SRC,
  lead:'Stabilise. Find the threat. Reassess. Treat the patient while you work out the diagnosis: a teaching handbook for junior MOs on adult acute non-traumatic abdominal pain, in a Malaysian context, with its quick reference.',
  kw:'abdominal pain handbook visual handbook quick reference acute abdomen surgical abdomen severity red flags appendicitis diverticulitis biliary colic cholecystitis cholangitis pancreatitis Atlanta lipase bowel obstruction perforation strangulated hernia irreducible hernia mesenteric ischaemia AAA aortic aneurysm GI bleed ectopic pregnancy pregnancy of unknown location PUL adnexal torsion ovarian torsion testicular torsion PID renal colic stone infected obstruction anuria SBP spontaneous bacterial peritonitis ascites POCUS ultrasound CTA CT imaging lactate morphine fentanyl paracetamol NSAID antibiotics NAG sepsis leptospirosis dengue CCTVR mimic DKA euglycaemic SGLT2 ACS adrenal crisis zoster nonspecific abdominal pain NSAP ISBAR handover sakit perut skrip discaj',
  kinds:{neutral:'What the handbook says'},
  notesFoot:'Quoted from the handbook as printed, with its page; its doses and numbers were checked against the sources it cites. It calls itself an educational synthesis, not an official MOH/HKL protocol. The HKL ebook\'s Abdominal pain pathway (pp. 10-11) stays the department\'s pathway.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?',
      hint:'A teaching handbook made with AI, quoted as printed and checked against its sources: "an educational synthesis, not an official MOH/HKL protocol". The HKL ebook\'s Abdominal pain pathway stays the department\'s; much of this goes beyond the Green Zone. Scope and use: the Sources tab.',
      opts:[
      ['Bedside pathway: the first decision is severity','sev'],
      ['The checks that prevent a miss','trig'],
      ['Patterns that cannot wait','danger'],
      ['Stabilise first','stab'],
      ['History and examination','hx'],
      ['Where is the pain? A map of possibilities','loc'],
      ['Tests, imaging and focused ultrasound','inv'],
      ['Pain relief and antibiotics','tx'],
      ['By presentation','pres'],
      ['Patients who need extra caution','caut'],
      ['Disposition, handover and the Malay script','disp'],
      ['Six short cases','cases']]},

    /* ---------- p. 2: the bedside pathway ---------- */
    sev:{q:'Unstable, peritonitic, bleeding, or a time-critical concern?',
      info:['First look + first touch: Vitals, mental state, perfusion, glucose and pain score. Shock can occur with preserved blood pressure.'],
      hint:'Run stabilisation and diagnostic assessment in parallel. Reassess whenever the story changes. (Handbook p. 2)',
      opts:[['Yes / uncertain','resus'],['No: currently stable','focus']]},
    resus:{step:'Resuscitate + call', items:[
      'Monitored area; ABCDE; IV access; targeted fluids/blood; early analgesia.',
      'Call ED senior and relevant specialty now.',
      'Focused bedside imaging must not delay source control.',
      hbp(2, '5,7-10,14,15,21')], next:'reas'},
    focus:{step:'Focused assessment', items:[
      'History, whole-patient examination, pregnancy test when relevant, ECG/glucose as indicated.',
      'Rank: most likely cause, dangerous alternative, important mimic.',
      'Select tests to answer these questions.',
      hbp(2, '5,7-10,14,15,21')], next:'reas'},
    reas:{q:'Reassess + check that the data fit: where now?',
      info:['Repeat vitals, perfusion, pain and abdominal examination. Review every result.', 'Persistent pain, discordant findings or deterioration: senior review, further imaging or observation.'],
      hint:'Reassessment is a treatment step. Set a review time and a responsible clinician. Repeat attendance is new information. (Handbook pp. 2 and 22)',
      opts:[['Admit / intervene','adm'],['Observe','obs'],['Discharge','dcq']]},
    adm:{end:'admit', title:'Admit / intervene', items:[
      'Threat, organ dysfunction, evolving focal signs or treatment needs.',
      'Admit / urgent specialty: Shock, peritonism, organ dysfunction, significant bleeding, infected obstruction, torsion or another time-critical diagnosis.',
      'Admit / urgent specialty: Persistent vomiting/dehydration, uncontrolled pain, high-risk comorbidity, failed outpatient plan or unreliable follow-up.',
      'Make the next action explicit. Use a short structured handover and a discharge explanation the patient understands. (p. 23)'],
      links:[hbl('isbar','ISBAR example'),hbl('rec','Minimum record'),['#abdominal-pain--admit','Ebook: admit (p. 11)'],['#referral-rules','Referral rules']],
      gap:hbp('2 and 22', '5,7,8,15,17,23')},
    obs:{end:'observe', title:'Observe', items:[
      'Diagnosis uncertain; serial examination and a timed senior review.',
      'Observe / review: Uncertain diagnosis, evolving pain, discordant results or persistent symptoms despite initial treatment.',
      'Observe / review: Serial vitals/examination, response to treatment and result review; senior input and explicit next action if not improving.',
      'If the scan is negative but the patient is not well: Review whether the right study/protocol was used, revisit the differential and discuss with the senior/radiologist. Observation, repeat examination or further targeted investigation may still be needed. [8]'],
      links:[['#em-watch','EM Watch'],['#yellow-zone','Yellow Zone']],
      gap:hbp('2 and 22', '5,7,8,15,17,23')},
    dcq:{check:'all', q:'Discharge only if: all of these?',
      hint:'Discharge: low risk after reassessment; oral intake, follow-up and return advice. (Handbook pp. 2 and 22)',
      items:['Stable repeat observations', 'Reassuring reassessment', 'Urgent causes reasonably excluded', 'Oral fluids tolerated', 'Symptoms manageable with oral treatment', 'Safe support, clear follow-up and understandable return advice'],
      opts:[['All met','dis'],['Not all met: observe or review','obs'],['Not all met: admit / urgent specialty','adm']]},
    dis:{end:'discharge', title:'Discharge', items:[
      'Before the patient leaves: Repeat and document vital signs and abdominal findings. Review pending results and name who will act on them. Explain the working diagnosis, medication plan, review location/time and emergency return triggers; ask the patient to repeat the plan back.',
      'Before discharge (quick reference): Repeat observations and examination. Check that dangerous causes have been reasonably excluded, symptoms are controlled, oral intake is adequate and follow-up is feasible. Give written return advice; assign ownership of pending results.',
      'A diagnosis of uncertainty is acceptable; an unclear plan is not. "Non-specific abdominal pain" can be used after appropriate assessment. Record what has been excluded, what remains possible and how deterioration will be detected. Arrange a time-bound review, often within 12-24 h if unresolved, according to risk and local access. [7]',
      'Department pathway: the HKL ebook (p. 11) gives follow-up at EMACC or EMWATCH in 24 to 48 hours. Follow the department\'s pathway; the difference is under Still to confirm.'],
      links:[hbl('script','Malay discharge script'),['#abdominal-pain--home','Ebook: discharge with follow-up'],['#emacc','EMACC follow-up'],['#safe-practice','Safe practice: before discharge']],
      gap:hbp('22; quick reference p. 2', '5,7,8,15,17,23')},

    /* ---------- Quick reference, back page ---------- */
    trig:{q:'The checks that prevent a miss: which trigger?',
      hint:'Adult non-traumatic abdominal pain. Use with the full handbook and local departmental pathways. (Quick reference, back page)',
      opts:HB_TRIG.map((t, i) => [t[0], 'tg' + (i + 1)])},

    /* ---------- p. 3: patterns that cannot wait ---------- */
    danger:{check:'any', q:'Any pattern that cannot wait?',
      hint:'A normal temperature, white cell count or single blood pressure does not clear a patient. (Handbook p. 3)',
      info:['Escalate on physiology or clinical concern: Hypotension or a falling BP, altered consciousness, poor peripheral perfusion, respiratory distress, oliguria, rising lactate, worsening pain or repeat attendance all justify prompt senior reassessment. Do not wait for every classic feature.'],
      items:[
        'Bleeding / vascular: collapse, syncope, pallor, back pain, GI bleeding or pregnancy-related pain: consider AAA, ectopic pregnancy and major haemorrhage.',
        'Peritonitis: involuntary guarding, rigidity or pain with movement: consider perforation, infarction or advanced inflammation. Call surgery early.',
        'Ischaemia: severe pain with few early signs, especially with AF or vascular disease: think mesenteric ischaemia; request urgent CTA.',
        'Infected obstruction: fever/organ dysfunction plus urinary obstruction or biliary obstruction: antibiotics and urgent drainage assessment.',
        'Strangulation / torsion: obstruction with continuous pain, tender irreducible hernia, sudden unilateral pelvic pain or testicular pain: urgent specialty review.',
        'Systemic mimic: epigastric pain with sweating/dyspnoea; abdominal pain with deep breathing or acidosis: evaluate ACS and DKA alongside abdominal causes.'],
      opts:[['One or more present','esc'],['None of these','sev']]},
    esc:{end:'admit', title:'Act on the pattern, and escalate', items:[
      'Each pattern ticked carries its own first action, as printed beside it.',
      'Escalate on physiology or clinical concern: Hypotension or a falling BP, altered consciousness, poor peripheral perfusion, respiratory distress, oliguria, rising lactate, worsening pain or repeat attendance all justify prompt senior reassessment. Do not wait for every classic feature.'],
      links:[hbl('vas','Vascular and bleeding threats'),hbl('sbo','Obstruction and perforation'),hbl('flk','A stone plus infection'),hbl('preg','Pregnancy and pelvic pain'),hbl('mim','Important mimics')],
      gap:hbp(3, '8,14,17,20,21,24,28,30')},

    /* ---------- p. 4: the first 10 minutes ---------- */
    stab:{step:'Stabilise: assess, and act while assessing', items:[
      'A suggested workflow, not a national timing target. Allocate tasks and document response.',
      'A / B: Airway, respiratory rate, work of breathing and SpO2. Support ventilation and give oxygen when indicated; titrate to the appropriate target.',
      'C: Pulse, BP trend, skin temperature/colour, capillary refill and mental state. Monitor; obtain IV lines when shock/bleeding is likely. Send urgent targeted bloods; crossmatch if bleeding.',
      'D / E: Glucose, consciousness, temperature and pain score. Expose sufficiently to inspect abdomen, back and groins while preserving dignity.',
      'Parallel actions: Analgesia, antiemetic if needed, pregnancy test when relevant, early ECG if ACS is plausible. Keep nil by mouth if surgery, obstruction or urgent procedure is likely.',
      hbp(4, '4,5,9,21,28,35') + hbx('the page\'s title, "The first 10 minutes" (uncited), and "two" IV lines (none of its sources gives a number).')], next:'fluid'},
    fluid:{end:'neutral', title:'If IV resuscitation is needed: make every bolus a decision', items:[
      'For hypovolaemia requiring resuscitation, a typical adult crystalloid bolus is 500 mL over less than 15 min, then reassess. Mild dehydration may be managed orally. [27,35]',
      'Bleeding or special pathway: Major bleeding needs blood-product and haemorrhage pathways. Suspected ruptured AAA needs urgent vascular advice. Dengue, DKA and cardiac dysfunction require their own fluid strategy. [4,21,28]',
      'Make every bolus a decision: Record the indication, volume, rate and response. Persistent shock: re-evaluate the cause, seek critical-care support and avoid repeated unassessed fluid loading. Septic shock may need early vasopressor support. [9]'],
      links:[['#dengue-cpg','Dengue CPG: fluids'],['#hyperglycaemia','Hyperglycaemia and DKA'],hbl('sev','Back to the bedside pathway')],
      gap:hbp(4, '4,5,9,21,28,35') + hbx('"Use smaller aliquots in frailty/cardiorenal disease": NICE CG174 lowers volumes for maintenance fluids only, not for resuscitation boluses.')},

    /* ---------- pp. 5 and 6: history and examination ---------- */
    hx:{step:'Ask questions that change risk', items:[
      'Start open-ended, then clarify chronology and associated symptoms.',
      'When and how? Exact onset; sudden maximal pain or gradual progression? What happened first: pain, vomiting, fever or diarrhoea? Was there a pain-free interval?',
      'Where and where next? Site, migration, radiation to back/shoulder/groin; constant or colicky; pain on movement. Severity and functional effect matter more than a descriptive label.',
      'GI / urinary? Vomiting: bilious or bloody? Last stool and flatus? Melena/rectal blood? Dysuria, haematuria, retention or low urine output?',
      'Pregnancy / pelvic? Last menstrual period, pregnancy possibility, contraception, vaginal bleeding/discharge, prior ectopic, fertility treatment. Ask privately and obtain consent for testing.',
      'Risk / exposure? Previous operations or hernia; AF, vascular disease, diabetes, renal disease, cirrhosis, malignancy, immunosuppression. Recent travel, floodwater, shared meals, dengue exposure.',
      'Medicines? Anticoagulants, NSAIDs, steroids, immunosuppressants, recent antibiotics, insulin omission and SGLT2 inhibitors. Allergies and previous contrast reactions.',
      'Write one problem representation. Example: "Older adult with AF, abrupt severe diffuse pain and little tenderness, currently maintaining BP." This description keeps mesenteric ischaemia visible even when the abdomen feels soft.',
      hbp(5, '5-8,14,15,28,29')], next:'ex'},
    ex:{step:'Examine the whole patient: a soft abdomen is only one finding', items:[
      'Explain, consent, offer a chaperone for intimate examinations, and reassess after analgesia.',
      'Look before touching: General appearance, hydration, jaundice, rash, scars, distension, hernias and breathing. Reluctance to move may suggest peritoneal irritation; restlessness can occur with colic.',
      'Palpate gently: Start away from pain. Localise tenderness; assess involuntary guarding, rigidity and masses. Gentle percussion or cough may reveal peritonism without repeatedly provoking rebound.',
      'Complete the exam: Assess groins and hernial orifices, renal angles and bladder. Examine testes when lower pain is unexplained or symptoms suggest torsion. Check chest, heart and peripheral pulses.',
      'Select intimate exams: Rectal examination when bleeding, impaction or relevant pathology is suspected. Pelvic/speculum examination when it will change management; do not delay resuscitation or referral.',
      'Signs support a hypothesis: Murphy, McBurney, Rovsing, psoas and obturator findings can support localisation. No single sign, including normal bowel sounds, safely excludes urgent pathology.',
      'Repeat and compare: Document findings before and after treatment. Older, immunocompromised and pregnant patients may have muted or altered signs. The trend can matter more than one examination.',
      hbp(6, '6-8,22-24,31')], next:'exend'},
    exend:{end:'neutral', title:'Then name three: likely, dangerous, mimic', items:[
      'Name a likely diagnosis, a dangerous alternative and an extra-abdominal mimic.',
      'Cirrhosis + ascites + acute illness: Consider spontaneous bacterial peritonitis even without dramatic tenderness. Arrange diagnostic paracentesis promptly with cell count/differential and culture; an ascitic neutrophil count >250 cells/mm3 supports treatment. [31]'],
      links:[hbl('loc','Where is the pain?'),hbl('inv','Tests and imaging'),hbl('mim','Important mimics')],
      gap:hbp('6 and 7', '6,7,8,31') + hbx('the handbook prints "at least 250 cells/mm3"; BSG/BASL [31] prints ">250 cells/mm3", which is shown here.')},

    /* ---------- p. 7: the nine regions, with the 3D map ---------- */
    loc:{q:'Where is the pain?', fig:'abdo3d',
      hint:'Anterior view: the patient\'s RIGHT is on the LEFT of the page. Schematic regions only. ' + HB_LOC + ' (Handbook p. 7)',
      opts:HB_REGIONS.map((r, i) => [r[0], 'rg' + (i + 1)]).concat([['Diffuse pain','rgd']])},
    rgd:{end:'neutral', title:'Diffuse pain', items:[
      'Diffuse pain: consider gastroenteritis, obstruction, peritonitis, ischaemia, DKA and systemic infection.',
      'Name a likely diagnosis, a dangerous alternative and an extra-abdominal mimic.'],
      links:[hbl('sbo','Obstruction and perforation'),hbl('vas','Vascular and bleeding threats'),hbl('mim','Important mimics'),['#gastroenteritis','Ebook: gastroenteritis']],
      gap:hbp(7, '6,10-12,14,15,17,18,20,26')},

    /* ---------- pp. 8 to 10: tests, imaging, ultrasound ---------- */
    inv:{q:'Which?', hint:'No universal "abdominal panel". Choose according to illness severity and working differential. (Handbook p. 8)',
      opts:[['Tests: order to answer a question','tests'],['Imaging: match the scan to the threat','img'],['Focused ultrasound (POCUS)','pocus']]},
    tests:{end:'neutral', title:'Order tests to answer a question', items:[
      'Bedside glucose (metabolic problem?): Add blood ketones and VBG for diabetes, SGLT2 use, tachypnoea or unexplained illness. Near-normal glucose does not exclude DKA.',
      'UPT / serum beta-hCG (could this be pregnancy?): Test when pregnancy is possible. If urine testing is negative but suspicion remains, consider serum testing. A single hCG value cannot locate a pregnancy.',
      'ECG ± troponin (could this be ACS?): Use for plausible cardiac/epigastric presentations, especially with vascular risk, sweating, dyspnoea or shock; follow the serial ACS pathway.',
      'FBC ± CRP: Anaemia, infection, platelets and trends. Normal inflammatory markers do not exclude early appendicitis or serious pathology; an initial Hb can underestimate acute blood loss.',
      'Renal profile / LFT: Dehydration, AKI, electrolyte disturbance, cholestasis or hepatitis; guide treatment and contrast planning without delaying life-saving imaging.',
      'Lipase: Order for compatible upper pain. Revised Atlanta diagnosis requires two of: typical pain, enzyme activity >3 times the upper limit, compatible imaging. [18,40]',
      'VBG / lactate: Acidosis and hypoperfusion in an unwell patient. Normal lactate does not exclude early mesenteric ischaemia.',
      'Urine / other tests: Urinalysis ± culture for urinary causes; blood cultures for sepsis; coagulation/crossmatch for bleeding. Paracentesis for suspected SBP; stool tests for selected diarrhoeal illness.',
      'Interpret in context: pyuria can accompany nearby inflammation; haematuria neither proves nor excludes a stone. Never use one reassuring result as a discharge rule.'],
      links:[hbl('img','Imaging'),['#abdominal-pain','Ebook: emergent tests (p. 10)'],['#blood-tests','Blood tests in the Green Zone']],
      gap:hbp(8, '7-9,14,15,18,28,31') + hbx('the handbook prints "at least 3 times"; ACG 2024 [18] prints "greater than 3 times the upper limit of normal", which is shown here; [40] could not be read (a bot check on its page).')},
    img:{end:'neutral', title:'Match the scan to the threat', items:[
      'Tell radiology the suspected diagnosis and the question that needs answering.',
      'Biliary / RUQ: Ultrasound first for suspected biliary disease. Caveat: equivocal scan with ongoing concern: further imaging and senior discussion.',
      'Adult RLQ / diffuse serious pain: CT abdomen-pelvis, usually with IV contrast. Caveat: protocol depends on suspected pathology. Children/pregnancy often begin with US.',
      'Mesenteric ischaemia / aortic emergency: Urgent CT angiography. Caveat: explicitly request the vascular protocol. Do not substitute routine non-contrast CT.',
      'Suspected renal colic: Low-dose non-contrast CT in adults. Caveat: ultrasound first in pregnancy/children. Fever, AKI or atypical symptoms change urgency.',
      'Early-pregnancy or pelvic cause: Pelvic US, usually TVUS when appropriate. Caveat: resuscitate and call O&G first if unstable; an indeterminate scan needs a follow-up plan.',
      'Obstruction / perforation: CT if clinically appropriate and stable enough. Caveat: normal plain films do not exclude either; urgent surgical involvement can precede CT.',
      'Pregnancy: protect the mother by making the diagnosis. Use US or MRI when they can answer the question promptly. Necessary CT should not be withheld when delay would be harmful. Discuss with the senior clinician and radiologist. [36]',
      'If the patient is unstable: Bedside US may guide immediate treatment. Decide with the relevant specialty whether CT is safe and useful, or whether theatre/intervention/transfer is the priority. A scan queue must not become the management plan.'],
      links:[hbl('pocus','Focused ultrasound'),['#xray-guide--ab','Abdominal film: when it is indicated']],
      gap:hbp(9, '10-12,14,16,19,20,21,36')},
    pocus:{end:'neutral', title:'POCUS answers focused questions', items:[
      'Use only within your competence. Save findings, acknowledge limitations and seek definitive imaging when needed.',
      'Aorta: Is the aorta aneurysmal? Examine its accessible length. POCUS can detect AAA; it cannot reliably exclude rupture or dissection. A non-diagnostic study is not negative.',
      'Free fluid: Is there intraperitoneal fluid in a shocked patient? Interpret with pregnancy, trauma and other causes. No free fluid does not exclude retroperitoneal bleeding or an early ectopic.',
      'Heart / lungs: Can cardiac dysfunction, pericardial fluid or pulmonary congestion help explain shock or limit further fluids? Integrate with perfusion and dynamic response.',
      'Biliary / renal: Look for gallbladder abnormalities or hydronephrosis. Gallstones alone do not prove cholecystitis; absent hydronephrosis does not exclude a ureteric stone.',
      'Pelvis: Can a definite intrauterine pregnancy be identified? An empty uterus or indeterminate view is not a location diagnosis. Suspected torsion still requires urgent O&G review.',
      'Dengue: Look for pleural fluid, ascites and gallbladder wall oedema as adjuncts to plasma-leakage assessment. Combine with CCTVR, haematocrit and urine output. [4]',
      'Write the limitation: Prefer "Aorta incompletely visualised; AAA not excluded" to "US normal". Do not rule out appendicitis, ischaemia or torsion from a generic negative bedside scan.'],
      links:[['#dengue-cpg','Dengue CPG'],hbl('vas','AAA and bleeding')],
      gap:hbp(10, '4,11,15,17,21,22,32,33')},

    /* ---------- pp. 11 and 12: pain relief, antibiotics ---------- */
    tx:{q:'Which?', opts:[['Pain relief: treat pain early, then reassess','pain'],['Antibiotics and source control','abx']]},
    pain:{end:'neutral', title:'Treat pain early, then reassess', items:[
      'Analgesia does not need to wait for a surgeon or a final diagnosis. Adult examples below.',
      'Paracetamol: for the dose, use the HKL ebook\'s table (Pain management) or Analgesia by weight. Safety check: Use a lower/weight-based regimen for low body weight or hepatic risk; check previous doses. IV if oral route is unsuitable, per formulary.',
      'Titrated IV morphine: MOH 2020 Appendix 2 uses 1 mg if age <60, or 0.5 mg if 60 or older, reassessed at 5-min intervals while severe pain persists. Safety check: Only with an approved monitored protocol. Recheck BP, respiration and sedation before each repeat. Reduce/seek alternatives in frailty, renal impairment or instability.',
      'Department pathway: the HKL ebook\'s morphine protocol (Pain management) gives 1 mg at 60 years old or below and 0.5 mg above 60. At exactly 60 the two differ: follow the ebook; the difference is under Still to confirm.',
      'IV fentanyl: MOH lists 25-50 micrograms as an initial alternative when morphine is unsuitable. Safety check: Titrate under local protocol; monitor airway, ventilation, sedation and BP. Do not confuse micrograms with milligrams.',
      'Department pathway: the HKL ebook\'s table (Pain management) lists fentanyl IV/IM 50–100 mcg. The difference is under Still to confirm.',
      'NSAID: First-line option for renal colic when safe; choose a locally approved preparation. Safety check: Avoid with AKI/dehydration, GI bleeding/ulcer risk, relevant allergy or pregnancy; avoid in suspected dengue.',
      'Supportive care: Treat nausea when present; choose antiemetic by contraindications and local formulary. Use nil by mouth for likely surgery/obstruction; allow oral fluids when clinically appropriate. Consider NG decompression for significant obstructive vomiting/distension.',
      'Reassess the diagnosis as well as the pain: Review pain, vital signs and examination after treatment. New sedation or respiratory depression requires immediate review. Pain relief alone cannot prove a benign cause. [25]'],
      links:[['#pain','Ebook: pain management (pp. 45-51)'],['#calc-analgesia','Analgesia by weight'],['#renal-colic','Ebook: renal colic']],
      gap:hbp(11, '1,4,16,25') + hbx('the paracetamol line ("Typical adult at least 50 kg: 1 g PO every 6 h as needed; maximum 4 g/24 h from all products"): MOH 2020 [1] prints 1 g 4-hourly prn (max 4 g/24 h) on its abdominal pain page and 6-hourly elsewhere, and RCEM [25] applies the 50 kg threshold to IV paracetamol only. Morphine 1 mg/0.5 mg, the 5-minute loop and fentanyl 25-50 micrograms were confirmed in MOH 2020 (printed pp. 20, 22 and 42).')},
    abx:{end:'neutral', title:'Antibiotics are only part of treatment', items:[
      'Choose the syndrome, assess severity, check allergy/renal function and plan source control.',
      'Sepsis timing (2026 international guidance): Possible/probable/definite septic shock, or probable/definite sepsis without shock: start antimicrobials immediately, ideally within 1 hour. Possible sepsis without shock: rapid time-limited assessment, with antibiotics within 3 hours if concern persists. Collect cultures first when this will not meaningfully delay treatment. [9]',
      'MOH NAG adult example, community biliary infection, without sepsis: Amoxicillin/clavulanate 1.2 g IV every 6 h.',
      'MOH NAG adult example, biliary infection with sepsis / organ failure: Piperacillin/tazobactam 4.5 g IV every 6-8 h. NAG specifies 3-4 h infusion for q8h regimens and for cholangitis; follow local administration guidance.',
      'MOH NAG adult example, complicated appendicitis/diverticulitis without sepsis: alternative: Ceftriaxone 2 g IV every 24 h PLUS metronidazole 500 mg IV every 8 h.',
      'Prescribing boundary: Examples are for adults with usual organ function, not a universal abdominal-pain prescription. Confirm indication, loading/infusion method, renal adjustment, allergy, resistance risk and local availability. Check the live NAG; severe beta-lactam allergy needs an alternative plan. [2]',
      'Resuscitate to response: Conditional SSC recommendation: at least 30 mL/kg crystalloid in the first 3 h for sepsis-induced hypoperfusion/shock. Individualise volume, monitor fluid tolerance and reassess frequently. Balanced crystalloid is preferred. [9]',
      'Control the source: Drain an infected obstruction, remove/repair an infected or perforated focus, or obtain urgent surgical treatment. Call the team early; do not wait for antibiotics to solve a mechanical problem.'],
      links:[['#gz-rules--ivab','IV antibiotics, no bed free'],hbl('up','Cholangitis'),hbl('app','Appendicitis and diverticulitis')],
      gap:hbp(12, '2,9,17,20,30')},

    /* ---------- pp. 13 to 20: by presentation ---------- */
    pres:{q:'Which presentation?', opts:[
      ['Focal lower pain: appendicitis and diverticulitis','app'],
      ['Upper pain: biliary disease or pancreatitis','up'],
      ['Obstruction, perforation and the groin','sbo'],
      ['Vascular and bleeding threats','vas'],
      ['Flank, urinary and scrotal pain','flk'],
      ['Pregnancy and pelvic pain','preg'],
      ['Dengue and tropical differentials','deng'],
      ['Important mimics','mim']]},
    app:{q:'Appendicitis or diverticulitis: which decision?',
      info:['Appendicitis: Pain may migrate from central abdomen to the right lower quadrant, with anorexia or vomiting. Retrocaecal/pelvic positions and pregnancy can change the pattern. Diarrhoea or urinary findings do not exclude it.',
        'Diverticulitis: Often left-sided pain and bowel change; right-sided disease also occurs. CT helps confirm the diagnosis and identify abscess, perforation or another cause.'],
      hint:'Use clinical evolution, risk assessment and imaging together. (Handbook p. 13)',
      opts:[['Peritonism, shock or organ dysfunction','ap1'],['Stable but focal persistent pain','ap2'],['Risk score used','ap3'],['Uncomplicated disease confirmed','ap4']]},
    ap1:{end:'admit', title:'Immediate senior/surgical review', items:['Immediate senior/surgical review; resuscitation, nil by mouth and antibiotics when indicated.'],
      links:[hbl('abx','Antibiotics and source control'),hbl('stab','Stabilise first')], gap:hbp(13, '2,7,12,13,26')},
    ap2:{end:'refer', title:'Local imaging pathway and surgical input', items:['Use the local imaging pathway and obtain surgical input. Do not discharge on a normal WBC/CRP alone.',
      'Avoid the "low score = safe" shortcut: Escalate persistent localised tenderness, worsening symptoms, uncertain imaging, frailty or immunosuppression.'],
      links:[hbl('img','Imaging'),['#abdominal-pain','Ebook: abdominal pain, with the department notes']], gap:hbp(13, '2,7,12,13,26')},
    ap3:{end:'neutral', title:'A score supports, it does not decide', items:['AIR/AAS or another locally adopted score can support appendicitis risk stratification; it does not replace judgement or imaging in an atypical/high-risk patient.',
      'Avoid the "low score = safe" shortcut: Escalate persistent localised tenderness, worsening symptoms, uncertain imaging, frailty or immunosuppression. Non-operative treatment is a selected management pathway with explicit follow-up, not a default ED discharge decision.'],
      gap:hbp(13, '2,7,12,13,26')},
    ap4:{end:'neutral', title:'Uncomplicated disease confirmed', items:['Selected appendicitis patients may receive antibiotics under a surgical plan.',
      'For diverticulitis, no-antibiotic care is for selected low-risk immunocompetent patients without systemic inflammation. MOH NAG favours antibiotics with systemic signs, older age, significant comorbidity or immunocompromise; ensure follow-up. [2,26]',
      'Non-operative treatment is a selected management pathway with explicit follow-up, not a default ED discharge decision.'],
      gap:hbp(13, '2,7,12,13,26')},
    up:{end:'neutral', title:'Biliary disease or pancreatitis?', items:[
      'Epigastric pain still needs consideration of ACS, perforation and vascular causes.',
      'Biliary colic: Episodic pain that settles, without systemic illness: analgesia, US and follow-up.',
      'Cholecystitis: Persistent RUQ pain/tenderness ± fever: US, bloods, surgical review and indicated antibiotics.',
      'Cholangitis: Systemic illness with biliary obstruction/cholestasis: resuscitate, antibiotics and urgent drainage review. The full triad may be absent.',
      'Pancreatitis, two of three: Revised Atlanta criteria: compatible pain; lipase/amylase >3 times the upper limit; characteristic imaging. Typical pain plus a qualifying enzyme rise usually makes immediate diagnostic CT unnecessary. [18,40]',
      'Initial pancreatitis care: Analgesia; moderate, reassessed crystalloid therapy, preferably lactated Ringer solution; assess organ dysfunction and biliary cause. Begin oral feeding early as tolerated in mild disease. [18,39]',
      'When to escalate: Shock, hypoxia, oliguria or other organ failure needs higher-level care. CT if diagnosis is unclear or failure to improve after 48-72 h. No routine prophylactic antibiotics for sterile pancreatitis. [18,39]',
      'Cholangitis: moderate/severe disease needs early/urgent drainage; mild disease failing initial treatment also needs drainage review. Pancreatitis with cholangitis needs an urgent ERCP pathway, usually within 24 h. [30,39]'],
      links:[['#biliary','Ebook: biliary colic'],hbl('abx','Biliary antibiotics (NAG)'),['#acs','Ebook: ACS']],
      gap:hbp(14, '2,11,18,30,39') + hbx('the handbook prints "at least 3 times"; ACG 2024 [18] prints "greater than 3 times the upper limit of normal", which is shown here; [40] could not be read.')},
    sbo:{end:'neutral', title:'Obstruction and perforation', items:[
      'Do not wait for every textbook sign before referring.',
      'Suspect obstruction: Colicky pain, vomiting, distension and reduced stool/flatus. Ask about surgery, hernia and cancer. Early or partial obstruction may still allow stool or diarrhoea.',
      'Suspect perforation: Sudden severe pain, pain with movement, guarding/rigidity or sepsis. Signs may be modest in older people or those taking steroids.',
      'Obstruction, initial package: Nil by mouth, IV fluid/electrolyte replacement, analgesia and surgical review. Consider NG decompression for vomiting/distension and aspiration risk. CT helps find the transition point, cause and complications. [19]',
      'Strangulation / ischaemia, call now: Continuous or worsening pain, peritonism, shock, fever, metabolic acidosis or concerning CT findings are red flags. Peritonitis, strangulation or ischaemia make routine conservative observation unsafe. [19]',
      'Perforation, CT when appropriate; source control early: Start resuscitation and broad-spectrum IV antibiotics; urgent surgical review. If CT is not promptly available, chest/abdominal radiography may show free air, but a normal film cannot exclude perforation. [20]',
      'Do not miss the groin: An acutely painful irreducible hernia needs urgent surgical review. Do not attempt reduction when strangulation/bowel ischaemia is suspected: arrange emergency surgery. Reduction in suitable cases without these features requires an experienced clinician and observation afterwards. [41]'],
      links:[hbl('abx','Antibiotics and source control'),['#xray-guide--ab','Abdominal film']],
      gap:hbp(15, '8,19,20')},
    vas:{end:'neutral', title:'Vascular and bleeding threats: think beyond inflammation', items:[
      'These diagnoses can deteriorate before laboratory abnormalities become obvious.',
      'Abdominal aortic aneurysm: New abdominal/back/flank pain with collapse or syncope, especially with vascular risk: consider symptomatic or ruptured AAA. Obtain bedside aortic US and contact vascular surgery immediately if AAA is found or suspicion persists despite an unavailable/non-diagnostic scan. CTA only if clinically appropriate; avoid delaying definitive care. [21]',
      'Acute mesenteric ischaemia: Disproportionately severe pain, AF, atherosclerosis or low-flow states raise suspicion. Later peritonitis suggests advanced injury. Request urgent CTA and surgical/vascular input; normal lactate cannot exclude early disease. Do not delay CTA solely to await renal tests when ischaemia is suspected. [14]',
      'Major GI bleeding: Haematemesis, melena or brisk rectal bleeding may accompany pain. Assess perfusion, anticoagulants and liver disease; obtain IV access, crossmatch and activate the bleeding pathway when needed. Severe unstable upper GI bleeding requires endoscopy immediately after resuscitation. [34]',
      'Senior decision required: Bleeding resuscitation and blood pressure targets depend on the cause. Suspected ruptured AAA may use a restrictive resuscitation strategy while definitive treatment is arranged. [21]',
      'Do not reassure yourself: A normal early Hb, temporary pain relief or a soft abdomen cannot independently exclude a major bleed or bowel ischaemia. Recheck physiology and the clinical story.'],
      links:[hbl('pocus','POCUS: the aorta'),hbl('isbar','ISBAR: suspected mesenteric ischaemia')],
      gap:hbp(16, '14,20,21,32,34')},
    flk:{q:'Flank, urinary or scrotal pain: which presentation?',
      hint:'A stone plus infection is an emergency. Separate uncomplicated colic from sepsis, threatened renal function and alternative diagnoses. (Handbook p. 17)',
      opts:[['Typical colic, no red flags','fk1'],['Fever/sepsis with urinary obstruction','fk2'],['Anuria / obstruction threatening renal function','fk3'],['Uncontrolled pain or vomiting','fk4'],['Older patient with first "renal colic"','fk5'],['Lower abdominal or scrotal pain in a boy or young man','fk6']]},
    fk1:{end:'neutral', title:'Typical colic, no red flags', items:['Analgesia: NSAID if safe. NICE recommends low-dose non-contrast CT within 24 h in adults; US first in pregnancy/children. Adapt to local imaging access. [16]',
      'Department pathway: the HKL ebook (Renal colic, pp. 53-54) uses POCUS for hydronephrosis, an urgent KUB ultrasound by the radiology team, and an early TCA for KUB ultrasound at discharge. Follow the ebook; the difference is under Still to confirm.',
      'Before discharging colic: Confirm stable observations, controlled symptoms, adequate oral intake and urine output, and a clear imaging/follow-up plan. Fever, rigors, anuria, worsening pain or persistent vomiting require urgent return.'],
      links:[['#renal-colic','Ebook: renal colic'],hbl('pain','Pain relief')], gap:hbp(17, '16,17,21,24,42')},
    fk2:{end:'admit', title:'Infected obstruction: an emergency', items:['Cultures and immediate IV antibiotics; urgent urology and drainage. Sepsis with an obstructing stone requires urgent decompression by stent or nephrostomy. Delay definitive stone treatment until sepsis resolves. [17]'],
      links:[hbl('abx','Sepsis timing')], gap:hbp(17, '16,17,21,24,42')},
    fk3:{end:'refer', title:'Obstruction threatening renal function', items:['Immediate senior/urology review for obstructed solitary kidney, bilateral obstruction or complications of obstruction-related AKI; arrange urgent drainage as indicated. [17,42]'],
      gap:hbp(17, '16,17,21,24,42') + hbx('"Anuria alone is not an indication for antibiotics: assess for infection": EAU [17] places "start antibiotics immediately" under the management of sepsis and anuria together, so the line is not shown.')},
    fk4:{end:'refer', title:'Uncontrolled pain or vomiting', items:['Urgent reassessment and urology input; consider admission/intervention if symptoms remain uncontrolled.'],
      gap:hbp(17, '16,17,21,24,42')},
    fk5:{end:'neutral', title:'Older patient with a first "renal colic"', items:['Consider AAA and other vascular/abdominal causes before committing to the stone pathway. [21]'],
      links:[hbl('vas','AAA'),hbl('pocus','POCUS: the aorta')], gap:hbp(17, '16,17,21,24,42')},
    fk6:{end:'refer', title:'Testicular torsion can present as lower abdominal pain', items:['Ask about and examine the scrotum when relevant, particularly in boys/young men. Sudden pain, nausea/vomiting or an abnormal testicular lie requires urgent surgical/urology review. Do not wait for ultrasound when clinical suspicion is high. [24]'],
      links:[['#scrotal-pain','Ebook: scrotal pain']], gap:hbp(17, '16,17,21,24,42')},
    preg:{q:'Pregnancy possible: unstable, significant bleeding or peritonism?',
      hint:'First establish pregnancy possibility. Pain can precede vaginal bleeding. Atypical symptoms do not exclude ectopic pregnancy. (Handbook p. 18)',
      opts:[['Yes','pg0'],['No: stable patient','pgq'],['Later pregnancy or postpartum','pg6']]},
    pg0:{end:'admit', title:'Resuscitate, crossmatch and call O&G immediately', items:['Resuscitate, crossmatch and call O&G immediately. Consider ruptured ectopic or another haemorrhagic cause. Bedside imaging must not delay definitive care. [3]'],
      gap:hbp(18, '3,15,22,36,37')},
    pgq:{q:'Stable patient: which situation?', opts:[['Pregnancy possible','pg1'],['Positive test; no pregnancy located on TVUS','pg2'],['Follow-up for unknown location','pg3'],['Sudden unilateral pelvic pain ± vomiting','pg4'],['Pelvic pain with discharge / cervical or adnexal tenderness','pg5']]},
    pg1:{end:'neutral', title:'Pregnancy possible', items:['UPT; serum beta-hCG if needed. Pelvic US/TVUS with consent and expertise. Assess uterus and adnexae: an intrauterine pregnancy does not exclude a coexisting heterotopic pregnancy. [15]'],
      links:[['#abdominal-pain','Ebook: abdominal pain, with the department notes']], gap:hbp(18, '3,15,22,36,37')},
    pg2:{end:'refer', title:'Pregnancy of unknown location', items:['Treat as pregnancy of unknown location. Ectopic remains possible until resolved. Symptoms override hCG trends; a single hCG value cannot establish location.'],
      links:[hbl('pg3','Follow-up for unknown location')], gap:hbp(18, '3,15,22,36,37')},
    pg3:{end:'refer', title:'Follow-up for unknown location', items:['O&G-led plan: two hCG tests near 48 h apart, not earlier, with repeat US as indicated. Give written 24-hour access/return instructions; worsening symptoms need immediate review, without waiting for repeat hCG. [15]'],
      gap:hbp(18, '3,15,22,36,37')},
    pg4:{end:'refer', title:'Consider adnexal torsion', items:['Consider adnexal torsion even with preserved Doppler flow. Urgent O&G assessment; imaging alone cannot safely settle a strong clinical suspicion. [22]'],
      gap:hbp(18, '3,15,22,36,37')},
    pg5:{end:'neutral', title:'Consider PID after dangerous alternatives', items:['Consider PID after dangerous alternatives. Obtain relevant STI tests; treat under local guidance. Severe illness, abscess, pregnancy or uncertain surgical diagnosis favours admission. [37]'],
      gap:hbp(18, '3,15,22,36,37')},
    pg6:{end:'refer', title:'Later pregnancy / postpartum', items:['Consider abruption, labour, uterine complications and pre-eclampsia/HELLP (especially RUQ/epigastric pain with hypertension). Seek early obstetric assessment and continue to evaluate non-obstetric causes. [3]'],
      gap:hbp(18, '3,15,22,36,37')},
    deng:{end:'neutral', title:'Dengue and tropical differentials', items:[
      'A falling fever does not necessarily mean recovery.',
      'Dengue + abdominal pain = reassess severity: In a compatible febrile illness, intense abdominal pain/tenderness or persistent vomiting is a warning feature. Look for worsening condition as fever settles, bleeding, fluid accumulation, oliguria and altered behaviour. Assess for admission and escalate promptly. [4]',
      'CCTVR: Colour, Capillary refill, skin Temperature, pulse Volume, pulse Rate.',
      'Assess and trend: CCTVR plus BP/pulse pressure, breathing, mental state and urine output. Check FBC/haematocrit, dengue rapid testing and glucose; add organ-function/coagulation/gas tests in severe illness. [4]',
      'Use the dengue pathway: POCUS can support assessment of leakage and fluid tolerance. Fluids must follow phase, perfusion and response. Avoid NSAIDs. Do not use a generic sepsis fluid volume as a dengue prescription. [4]',
      'Leptospirosis, ask about exposure: Floodwater, freshwater recreation or contaminated environments with a febrile systemic illness should prompt consideration. Check for renal, hepatic and respiratory involvement; follow the MOH tropical-infection pathway and seek senior/medical review. [29]',
      'Avoid anchoring: a positive dengue test does not exclude appendicitis, cholangitis, ectopic pregnancy or another surgical problem. Persistent focal peritonism still needs the appropriate assessment.'],
      links:[['#dengue-cpg','Dengue CPG: triage and fluids'],['#calc-dassess','Dengue one-screen assessment'],['#infection-alerts','Infection alerts']],
      gap:hbp(19, '4,29')},
    mim:{q:'Look above, below and outside the gut: which clue?',
      hint:'Abdominal pain can be the presenting symptom of a systemic emergency. If pain persists after correcting a metabolic abnormality: re-examine and investigate a coexisting abdominal cause. A medical diagnosis and a surgical diagnosis can coexist. [28] (Handbook p. 20)',
      opts:[['Epigastric discomfort, diaphoresis, dyspnoea, vascular risk','mi1'],['Pleuritic symptoms, hypoxia, cough or fever','mi2'],['Diabetes/SGLT2 use, vomiting, tachypnoea, dehydration','mi3'],['Steroid dependence, hypotension, vomiting, electrolyte disturbance','mi4'],['Cirrhosis with ascites and acute deterioration','mi5'],['Dermatomal pain/rash or pain linked to movement','mi6'],['Diarrhoea','mi7']]},
    mi1:{end:'neutral', title:'ACS', items:['ACS: ECG early and serial testing according to clinical risk. Do not let an antacid response rule it out.'], links:[['#acs','Ebook: ACS'],['#acs-cpg','ACS CPG']], gap:hbp(20, '5,7,8,27,28,31,38')},
    mi2:{end:'neutral', title:'Pneumonia or pulmonary embolism', items:['Lower-lobe pneumonia; pulmonary embolism when clinically plausible. Examine the chest and use the relevant risk pathway.'], links:[['#pneumonia','Ebook: pneumonia'],['#vte-cpg','VTE CPG']], gap:hbp(20, '5,7,8,27,28,31,38')},
    mi3:{end:'neutral', title:'DKA, including euglycaemic DKA', items:['DKA: blood ketones, glucose, VBG/electrolytes. Euglycaemic DKA can occur. Treat by the DKA pathway and look for a precipitant.'], links:[['#hyperglycaemia','Ebook: hyperglycaemia'],['#t2dm-cpg','T2DM CPG']], gap:hbp(20, '5,7,8,27,28,31,38')},
    mi4:{end:'admit', title:'Consider adrenal crisis', items:['Consider adrenal crisis; obtain senior input and begin the emergency steroid/resuscitation pathway without waiting for test results. [38]'], gap:hbp(20, '5,7,8,27,28,31,38')},
    mi5:{end:'neutral', title:'Spontaneous bacterial peritonitis', items:['SBP: prompt diagnostic paracentesis and medical review; pain/fever may be limited.', 'Cirrhosis + ascites + acute illness: an ascitic neutrophil count >250 cells/mm3 supports treatment. [31] (p. 6)'], gap:hbp('20 and 6', '31') + hbx('the handbook prints "at least 250"; BSG/BASL [31] prints ">250 cells/mm3", which is shown here.')},
    mi6:{end:'neutral', title:'Zoster or abdominal-wall pain', items:['Zoster or abdominal-wall pain may explain symptoms, but first assess for urgent intra-abdominal causes.'], gap:hbp(20, '5,7,8,27,28,31,38')},
    mi7:{end:'neutral', title:'Diarrhoea does not guarantee gastroenteritis', items:['Consider appendicitis, ischaemia, inflammatory colitis and drug-related illness. Uncomplicated watery diarrhoea usually needs rehydration rather than antibiotics. Fever, blood, severe tenderness, sepsis or immunocompromise can justify stool testing and a broader work-up. [27]'], links:[['#gastroenteritis','Ebook: gastroenteritis']], gap:hbp(20, '27')},

    /* ---------- p. 21: extra caution ---------- */
    caut:{q:'Patients who need extra caution: which?', hint:'A mild-looking examination can coexist with serious disease. (Handbook p. 21)',
      opts:[['Older people / frailty','ca1'],['Immunocompromised','ca2'],['Pregnancy','ca3'],['Recent surgery / procedure','ca4'],['Children','ca5']]},
    ca1:{end:'neutral', title:'Older people / frailty', items:['Look for vague symptoms, confusion, falls, reduced intake and functional decline. Seek collateral history. Lower the threshold for senior review, CT and admission when serious pathology remains possible.'], gap:hbp(21, '3,8,22-24,26,36')},
    ca2:{end:'neutral', title:'Immunocompromised', items:['Steroids, chemotherapy or transplant treatment may blunt fever and peritonism. Consider neutropenic infection/enterocolitis; escalate promptly and follow the neutropenic sepsis pathway.'], gap:hbp(21, '3,8,22-24,26,36')},
    ca3:{end:'neutral', title:'Pregnancy', items:['Changed anatomy and physiology alter presentation. Consider obstetric and non-obstetric causes together. Early O&G involvement and appropriate imaging protect both mother and fetus. [3,36]'], links:[hbl('preg','Pregnancy and pelvic pain')], gap:hbp(21, '3,36')},
    ca4:{end:'neutral', title:'Recent surgery / procedure', items:['Consider leak, obstruction, bleeding, abscess or a procedure complication. Contact the relevant surgical team early; establish the operation and date.'], gap:hbp(21, '3,8,22-24,26,36')},
    ca5:{end:'refer', title:'Children: use a paediatric pathway', items:['Bilious vomiting, distension, shock, peritonism, episodic severe pain with lethargy, or scrotal symptoms require urgent review. Think malrotation/volvulus, intussusception, appendicitis and torsion. Young children may present atypically; repeated examination is valuable. [23,24]',
      'Practical paediatric rules: Use weight-based medicines/fluids, age-adjusted vital signs and paediatric/surgical advice. Most well children do not need a broad test panel. Ultrasound is often first-line when imaging is indicated. Adult drug doses in this handbook do not apply. [23]'],
      links:[['#children','Children in the Green Zone'],['#scrotal-pain','Ebook: scrotal pain']], gap:hbp(21, '23,24')},

    /* ---------- pp. 22 and 23: disposition, handover, the Malay script ---------- */
    disp:{q:'Which?', opts:[['Where does the patient go?','reas'],['Handover: ISBAR','isbar'],['The minimum record','rec'],['Malay discharge script','script']]},
    isbar:{end:'neutral', title:'ISBAR example: suspected mesenteric ischaemia', items:[
      'I / S: "I am the ED MO. This patient needs urgent review for possible mesenteric ischaemia."',
      'B: "Older adult with AF; severe diffuse pain started suddenly. No previous similar episode."',
      'A: "BP is currently maintained, but pain is severe despite little tenderness. I am concerned despite a normal initial lactate. Monitoring and analgesia have started."',
      'R: "Please review urgently. I am discussing CTA with radiology. If deterioration occurs, we will move to resuscitation. Who will review, and by when?"'],
      links:[['#handover','Handing over (TAG Warrior Course)'],['#communication','Communication on shift']],
      gap:hbp(23, '7,8,15')},
    rec:{end:'neutral', title:'Minimum record', items:['Time/onset and key negatives; risk factors; complete observations and examination; pregnancy assessment; working differential; tests and results; treatment/dose/response; senior/specialty discussions; reassessment; disposition and follow-up ownership.'],
      gap:hbp(23, '7,8,15')},
    script:{end:'neutral', title:'Malay discharge script: adapt to the patient', items:HB_SCRIPT.concat(['Document understanding, language/interpreter needs, transport and the agreed review arrangement. This script is a teaching template, not an official MOH patient leaflet.']),
      links:[['#interpreter','Medical interpreters']],
      gap:'Handbook p. 23. Fill in the review date, time and place. The Malay script tab below holds it to copy, and reads it aloud in Bahasa Melayu (all but the review line, which you fill in). 999 is the emergency number the ebook names in its mild head injury discharge criteria; the handbook cites no source for it.'},

    /* ---------- p. 24: six short cases ---------- */
    cases:{q:'Pick a case', hint:'Pause before reading the answer. Ask: what is dangerous, what is next, and what could falsely reassure me? Four questions to ask on every shift: Did I identify the dangerous alternative? Did I treat symptoms promptly? Did I repeat the examination and observations? Does someone clearly own the next step? (Handbook p. 24)',
      opts:[['1 | AF, severe pain, soft abdomen','cs1'],['2 | Pregnancy test positive, empty uterus','cs2'],['3 | "Renal colic" with fever','cs3'],['4 | Fever settles, abdominal pain worsens','cs4'],['5 | SGLT2 drug, vomiting, normal-ish glucose','cs5'],['6 | Boy with lower abdominal pain','cs6']]},
    cs1:{q:'A 74-year-old has abrupt diffuse pain; lactate is normal.', hint:'What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs1a']]},
    cs2:{q:'A stable patient has pelvic pain and no pregnancy located on TVUS.', hint:'What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs2a']]},
    cs3:{q:'A patient has flank pain, fever and obstructed collecting system.', hint:'What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs3a']]},
    cs4:{q:'Suspected dengue with vomiting, cold extremities and reduced urine.', hint:'What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs4a']]},
    cs5:{q:'Abdominal pain and deep breathing occur during an acute illness.', hint:'An SGLT2 drug, vomiting, normal-ish glucose. What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs5a']]},
    cs6:{q:'Sudden pain and vomiting, no obvious abdominal diagnosis.', hint:'A boy with lower abdominal pain. What is dangerous, what is next, and what could falsely reassure you?', opts:[['Show the answer','cs6a']]},
    cs1a:{end:'neutral', title:'Urgent senior review and CTA', items:['Next: urgent senior review and CTA for possible mesenteric ischaemia. Normal lactate does not clear it. [14]'], links:[hbl('cs2','Next case'),hbl('vas','Vascular threats')], gap:hbp(24, '14')},
    cs2a:{end:'neutral', title:'O&G-led pregnancy-of-unknown-location plan', items:['Next: O&G-led pregnancy-of-unknown-location plan. A single hCG or empty uterus cannot exclude ectopic. [15]'], links:[hbl('cs3','Next case'),hbl('pg2','Pregnancy of unknown location')], gap:hbp(24, '15')},
    cs3a:{end:'neutral', title:'Cultures, IV antibiotics and urgent urology/drainage', items:['Next: cultures, IV antibiotics and urgent urology/drainage. Sepsis with obstruction requires urgent decompression. [17]'], links:[hbl('cs4','Next case'),hbl('fk2','Infected obstruction')], gap:hbp(24, '17')},
    cs4a:{end:'neutral', title:'Assess perfusion and severe dengue; escalate', items:['Next: assess perfusion/CCTVR and severe dengue; escalate and use the dengue fluid pathway. [4]'], links:[hbl('cs5','Next case'),['#dengue-cpg','Dengue CPG']], gap:hbp(24, '4')},
    cs5a:{end:'neutral', title:'Blood ketones and VBG', items:['Next: blood ketones and VBG; consider euglycaemic DKA and a coexisting trigger. [28]'], links:[hbl('cs6','Next case'),hbl('mi3','DKA')], gap:hbp(24, '28')},
    cs6a:{end:'neutral', title:'Assess the testes', items:['Next: assess testes; suspected torsion requires urgent surgical review without waiting for ultrasound. [24]',
      'Four questions to ask on every shift: Did I identify the dangerous alternative? Did I treat symptoms promptly? Did I repeat the examination and observations? Does someone clearly own the next step?'],
      links:[hbl('cases','All six cases'),hbl('fk6','Testicular torsion')], gap:hbp(24, '24')}
  },
  notes:[
    {l:'Quick reference', notes:[
      {h:'The checks that prevent a miss', src:'Quick reference, back page (p. 2). Adult non-traumatic abdominal pain. Use with the full handbook and local departmental pathways.', table:{head:['Trigger','Immediate thought / action'], rows:HB_TRIG}},
      {h:'Before discharge', src:'Quick reference, back page (p. 2)', items:['Repeat observations and examination. Check that dangerous causes have been reasonably excluded, symptoms are controlled, oral intake is adequate and follow-up is feasible. Give written return advice; assign ownership of pending results.']},
      {h:'Selected original sources', src:'Quick reference, back page (p. 2); the full bibliography is in the Sources tab', items:['MOH National Antimicrobial Guideline', 'MOH adult dengue CPG, 4th ed. 2026', 'WSES mesenteric ischaemia', 'EAU urolithiasis', 'NICE ectopic pregnancy', 'Teaching aid, not an official MOH/HKL protocol. Source-checked revision 2, 12 November 2026. Adult doses, special populations and detailed caveats are in the handbook.']}]},
    {l:'Sources', notes:[
      {h:'Scope and use', src:'Handbook p. 1', items:['Primarily adults with acute non-traumatic abdominal pain. Children and pregnancy have dedicated cautions. This is an educational synthesis, not an official MOH/HKL protocol. Apply local triage, formulary, referral and imaging pathways; involve your senior when risk or uncertainty persists.', 'Source-checked revision 2: 12 November 2026. This review is not independent clinical peer review. Original schematic graphics; no patient images. References support recommendations; checklists and cases are teaching aids.', 'Malaysian context: Uses MOH guidance for pain care, antimicrobials, obstetrics and the 2026 fourth-edition adult dengue CPG, supported by international specialty guidance. English clinical notes include a Malay discharge script.']},
      {h:'Evidence and further reading', src:'Handbook pp. 25 to 29: numbered references throughout the handbook, rechecked 12 November 2026', items:['Targeted review of official Malaysian publications and international specialty guidelines. This is not a systematic review.', 'Algorithms are an educational synthesis; local capability and approved protocols determine implementation.'], refs:HB_REFS},
      {h:'How to keep the notes current', src:'Handbook p. 29', items:['Recheck live MOH NAG recommendations before prescribing. Update the dengue, obstetric and local referral pathways when your department adopts a revised version. This synthesis is not an endorsement by any cited organisation.']}]}
  ],
  /* The Malay script tab, read aloud (READ['abdo-script-ms']) */
  script:{h:'Malay discharge script: adapt to the patient', read:'abdo-script-ms', lines:HB_SCRIPT,
    note:'Handbook p. 23. Fill in the review date, time and place before you give it. Document understanding, language/interpreter needs, transport and the agreed review arrangement. This script is a teaching template, not an official MOH patient leaflet.'},
  /* Printed pages: the handbook's own pages, and the quick reference's back page (its front page is handbook p. 2) */
  pages:{dir:'abdo', name:'Handbook', list:Array.from({length:29}, (_, i) => ['p' + String(i + 1).padStart(2, '0'), 'p. ' + (i + 1)]).concat([['q02', 'Quick reference, back']]),
    pdf:[['https://drive.google.com/file/d/137AMrXJFdi7xS4lUv2kQbmv5wsnQtkyS/view', 'Full handbook (PDF)'], ['https://drive.google.com/file/d/19MXO-Ez-MImg0pMi9RO8ydA3Y74spVsF/view', 'Quick reference (PDF)']]},
  see:[['#abdominal-pain','HKL ebook: Abdominal pain (pp. 10-11)'],['#renal-colic','Ebook: renal colic'],['#biliary','Ebook: biliary colic'],['#gastroenteritis','Ebook: gastroenteritis'],['#scrotal-pain','Ebook: scrotal pain'],['#pain','Ebook: pain management'],['#dengue-cpg','Dengue CPG']]
};
/* The trigger outcomes of the quick reference */
HB_TRIG.forEach((t, i) => { P['abdo-handbook'].nodes['tg' + (i + 1)] = {end:'neutral', title:t[0], items:[t[1]], links:[hbl('trig','Another trigger'),hbl('sev','The bedside pathway')], gap:HB_QR_GAP + (i === 5 ? hbx('"Antibiotics only when infection is suspected": EAU [17] places "start antibiotics immediately" under sepsis and anuria together.') : '')}; });
/* The region outcomes of p. 7 */
HB_REGIONS.forEach((r, i) => { P['abdo-handbook'].nodes['rg' + (i + 1)] = {end:'neutral', title:r[0], items:r[1].concat([HB_LOC, 'Name a likely diagnosis, a dangerous alternative and an extra-abdominal mimic.']), links:r[2].map(l => hbl(l[0], l[1])), gap:hbp(7, '6,10-12,14,15,17,18,20,26')}; });
/* The ebook's pathway points to the handbook; the ebook stays the department's pathway (rule 5) */
if (P['abdominal-pain']) P['abdominal-pain'].see = (P['abdominal-pain'].see || []).concat([['#abdo-handbook','Visual handbook: abdominal pain in the ED (teaching)']]);
