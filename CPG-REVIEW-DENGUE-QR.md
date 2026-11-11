# The dengue Quick Reference (4th edition) against the app

Reviewed on 11 Nov 2026. Review only: nothing in the app was changed. Nothing here comes from memory: every line is quoted from the Quick Reference, the full CPG, or the app's own text.

Short names used below: **QR** is the Quick Reference; **CPG** is the full guideline (144 pages); **the entry** is the app's `dengue-cpg`; **the ebook pathway** is the app's `dengue` (ebook pages 31 to 32).

## 1. The document

| | |
|---|---|
| Title on the cover | "Quick Reference for Healthcare Providers: Management of Dengue in Adults". The running head on every page adds "(Fourth Edition)". |
| Publisher | The page 2 box names the Clinical Practice Guidelines Secretariat, Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia, Putrajaya. The cover carries four logos: Kementerian Kesihatan Malaysia, Academy of Medicine of Malaysia, Malaysian Society of Infection Control & Infectious Diseases, and Persatuan Pakar-Pakar Perubatan Keluarga Malaysia. |
| Date | **No date is printed anywhere in it.** The file name says 2026. The PDF's own properties say it was created on 11 Oct 2026 (Adobe InDesign) and last changed on 27 Oct 2026. |
| Pages | 12 (the cover, then pages numbered 2 to 12). Each page is 312 x 539 points, a narrow pocket format. Pages 5, 10, 11 and 12 are printed sideways. |
| Copyright or reproduction wording | **None is printed in it.** There is no copyright line, ISBN or statement of intent. Page 2 says only: "This Quick Reference provides key messages & a summary of the main recommendations in the Clinical Practice Guidelines (CPG) Management of Dengue in Adults (Fourth Edition). Details of the evidence supporting these recommendations can be found in the above CPG", and lists www.moh.gov.my, www.acadmed.org.my and https://mymahtas.moh.gov.my. |
| The full CPG's wording, for comparison | CPG page ii (not in the QR): "The copyright owner of this publication is MaHTAS. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context." Whether this covers the Quick Reference is not stated in either document. |
| The file | Google Drive id `13lJ7CLeGtF-wHslrW6gesJ92hQ-dLXhL`, "2026 - Management of Dengue in Adults (4th Edition) - Quick Reference [757].pdf", 874,521 bytes. |

### How it was read

- The Drive connector's text was read first. It is jumbled (columns mixed, pages 5 and 10 to 12 nearly empty), so it was not relied on.
- The same file is already on this PC in the AMM folder (`Infectious Diseases/2026 - Management of Dengue in Adults (4th Edition) - Quick Reference [757].pdf`): the same name and the same 874,521 bytes as Drive reports, SHA-256 `2492686b…6008ca0`, the hash in the folder's `Download manifest.csv`. That copy was used, so the file was not downloaded again. The bytes of the Drive copy were not compared.
- It was copied to `sources/dengue-qr/pdf/` (git-ignored) and every page rendered at 3000 px high into `sources/dengue-qr/pages/`. All 12 pages were read from the images. The sideways pages 5, 10 and 12 were also cropped upright (`sources/dengue-qr/crops/`).
- Every ≥, ≤, <, >, ½ and arrow was read on the page image and then checked in the PDF's own text layer (read with pdf.js), which keeps most of them. It does not carry the "≥" of "≥65 years old" on page 5 or the raised 9 of "10⁹/L" on page 7: those two were read from the image and the upright crop only.
- For section 4 these CPG pages were rendered and read beside the QR: xiv to xvi (Algorithms 1 to 3), 9 (Figure 7), 12 (Table 1), 14 (Table 3), 20 (Table 5), 28 (Table 6), 29 to 30 (Table 7), 35 (Table 8) and 109 (Appendix 8). Algorithm 4 (page xvii), the key recommendations (pages i to iii), pages 25 to 26, 43, 49, 54, 83 and Appendix 11 (page 114) were compared from the CPG's text layer.

### Not read

- The eight ultrasound pictures on page 12 are pictures: only their labels were read.
- The QR code at the top of page 12 was not scanned or followed.

## 2. Every line of the Quick Reference against the entry and the dengue calculators

**How to read the marks**

- **IN**: the entry (or a dengue calculator) carries the same statement with the same numbers. It may be in the CPG's fuller wording.
- **IN (part)**: part of the line is there and part is not. The note says which.
- **MISSING**: not in the entry or a calculator. All of `src/parts/data*.js` and `engine.js` were searched for each missing line, not only `data4.js`. The calculators `dassess`, `dvitals`, `dfluid`, `drdt` and `duo` were read in `engine.js`, with the two older ones in the Dengue group (`dengue`, the SOP shock index, and `weight`).
- **DIFFERENT**: the entry says something else on the same point. Both are quoted, and the note says whether it is wording only or clinical.
- **n** is the number of printed lines the row covers. The totals at the end add up n.
- Tabs are the entry's reference tabs (Groups and zones, Fluids, Tests, Shock, Course and care). Steps are named by their key, for example `ws`.

### Page 2: Key messages

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 1 | 1. "Dengue should be suspected in all patients presenting with acute febrile illness." | 1 | MISSING | Not in the entry. The triage starts at "First ask: fever or history of fever" (`ask`), which is not the same statement. |
| 2 | 2. "Dengue Rapid Diagnostic Test (RDT) with combined NS1 Antigen/IgM/IgG markers is the first-line investigation for diagnosis of dengue." | 1 | IN | Tests tab, Diagnosis (Recommendation 1); `#calc-drdt`. |
| 3 | 3. "Prescribe oral fluid therapy (200 ml/hour) while patients are awake." | 1 | IN | Course and care tab, Outpatient care; the leaflet. |
| 4 | 3. "Ensure the patient passes urine 4 to 6 times each day." | 1 | IN | Course and care tab, Outpatient care ("4 to 6 times per day, with urination occurring at least once every 6 hours"); `#calc-duo` flags more than 6 hours. |
| 5 | 3. "Advise patients to recognise warning signs in critical phase." | 1 | IN | `pc` outcome; the leaflet's warning signs. |
| 6 | 3. "Avoid NSAIDs and corticosteroids." | 1 | IN | `mnsaid`, `mster` (Recommendation 3). |
| 7 | 4. "Point-of-care ultrasound (PoCUS) should be considered to detect early plasma leakage and assess haemodynamics in patients at risk of deteriorating." | 1 | IN | Tests tab, Tests in the emergency department (Recommendation 4): "detection of early plasma leakage". Haemodynamic assessment by PoCUS is named only in Algorithm 4. |
| 8 | 5. "Febrile Phase: Prioritise oral fluids; calculate required IV fluids using the Holliday-Segar formula." | 1 | IN | Fluids tab, Febrile phase (Recommendation 6) and Holliday-Segar; `#calc-dfluid`. |
| 9 | 5. "Critical Phase (without shock): Administer a total fluid quota over 48 hours, frequently adjusting rates based on clinical signs rather than using a fixed rate." | 1 | IN (part) | The quota over 48 hours is in (Fluids tab, Recommendation 7). The adjusting half is not quoted as a rule: the nearest lines are "Frequent monitoring of CCTVR, BP, pulse pressure, HCT, and urine output will determine the subsequent IV fluid requirement" (p44) and the pitfall "Excessive and prolonged fixed or graded fluid regimens in clinically stable patients" (p40). |
| 10 | 5. "Dengue Shock: Crystalloids is the preferred fluid for resuscitation. Colloids can be considered for persistent shock but should not be used as maintenance fluid." | 1 | IN | Shock tab, Not responding to the first resuscitation (Recommendation 8). |
| 11 | 5. "Fluid responsiveness and tolerance should be evaluated with dynamic indices." | 1 | MISSING | Nothing in the entry on fluid responsiveness, fluid tolerance or dynamic indices. |
| 12 | 6. "Suspect occult bleeding if the patient remains haemodynamically unstable despite receiving adequate fluid resuscitation." | 1 | IN | Tests tab, Bleeding and transfusion (Recommendation 9). |
| 13 | 6. "Transfuse packed red blood cells promptly for clinically significant (overt) bleeding, without waiting for haematocrit to drop." | 1 | IN | The same note. |
| 14 | 6. "Routine prophylactic platelet or plasma transfusions are not recommended in the absence of active bleeding." | 1 | IN | The same note. |
| 15 | 7. "Promptly refer severe dengue patients to the Intensive Care Unit (ICU)." | 1 | IN (part) | Groups and zones tab: Group C, "Intensive Care Unit: requires emergency treatment". Shock tab: "Patients with dengue shock must be managed in HDU or ICU". The recommendation itself (prompt referral of all severe dengue) is not quoted. |
| 16 | 7. "If shock persists despite fluid resuscitation, noradrenaline is the preferred vasopressor." | 1 | MISSING | The entry names noradrenaline only inside Algorithm 4's inotrope list ("inotropes (noradrenaline/dobutamine/adrenaline/milrinone)"). The statement that it is the preferred vasopressor is not there. |
| 17 | 7. "Sodium bicarbonate should not be used routinely in all patients with dengue-associated AKI and metabolic acidosis." | 1 | MISSING | Not in the entry. |
| 18 | 8. "Pregnant patients require hospitalisation and multidisciplinary management." | 1 | IN | Groups and zones tab, Special populations (Recommendation 11); `ws` hint; `green` outcome. |
| 19 | 8. "Obese patients in shock require cautious fluid management calculated using their adjusted body weight." | 1 | IN | Special populations, last line. |
| 20 | 8. "Fluid management must be highly individualised and closely monitored for patients with heart failure, end-stage kidney disease, and liver cirrhosis." | 1 | IN | Special populations. |
| 21 | 8. "Maintain a high index of suspicion for dengue in acutely unwell elderly patients who present with leucopenia, even without classical features like fever or rash." | 1 | IN | Special populations ("even in the absence of classical dengue features", the CPG's wording). |
| 22 | 9. "Dengue vaccination may be considered in all adults, particularly those with comorbidities who are at increased risk of severe dengue, unless contraindicated." | 1 | MISSING | The entry covers vaccination only for reading a test (Tests tab; `#calc-drdt`). |

The box under the key messages (what the QR is, the three websites, the secretariat's address) is described in section 1 and is not counted.

### Page 3: Clinical course, and classification of dengue severity

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 23 | Two courses: "Without plasma leakage" (febrile, then convalescent) and "With plasma leakage (warning sign)" (febrile, critical, convalescent) | 1 | IN (part) | Course and care tab, Course of illness, gives the three phases and "A subset of patients may develop severe plasma leakage". It does not say that a course without leakage has no critical phase. |
| 24 | "Febrile (fever) phase 2-7 days" | 1 | IN | Course of illness: "usually lasts 2 - 7 days". |
| 25 | "Critical (plasma leaking) phase 24-48 hours" | 1 | IN | Key indicators of the critical phase: "peaks at approximately 24 hours after onset and usually resolves within 48 hours"; Shock tab: "plasma leakage can persist for 24 - 48 hours". |
| 26 | "Convalescent (recovery) phase 2-5 days" | 1 | MISSING | The entry lists the features of recovery but gives no length. |
| 27 | Diagram: With warning signs and Without warning signs, each leading to Severe dengue ("Severe Plasma Leakage; Severe Bleeding; Severe Organ Impairment") | 1 | IN | Groups and zones tab, first note and Group C. |
| 28 | DNWS: "Person who lives or has travelled to areas with dengue transmission in the last 14 days and presents with fever, usually of 2 to 7 days duration, and at least 2 of the following criteria": nausea / vomiting; rash; headache/ retro-orbital pain; myalgia / arthralgia; petechiae; leukopenia | 7 | IN | Groups and zones tab, the case definition, word for word. |
| 29 | DWWS: "Dengue case near or in critical phase, that presents with one or more of the following signs" | 1 | IN | Group B2 note. |
| 30 | "Lack of clinical improvement or worsening symptoms during the period when fever subsides" | 1 | DIFFERENT | Wording, and the triage step is narrower. `ws` (Appendix 7): "Worsening of symptoms when fever subsided". Group B2 note (Table 6): "Lack of clinical improvement or worsening of symptoms when fever subsides". |
| 31 | "Intense abdominal pain or tenderness" | 1 | IN | `ws`; Group B2 note. |
| 32 | "Persistent vomiting (>three times per day)" | 1 | IN | `ws` "Persistent vomiting (> 3x per day)"; Group B2 note ">three times per day". |
| 33 | "Lethargy, restlessness, irritability or confusion" | 1 | IN | `ws`; Group B2 note. |
| 34 | "Fluid accumulation" | 1 | IN | The same. |
| 35 | "Postural hypotension" | 1 | IN | The same. |
| 36 | "Liver enlargement >2 cm" | 1 | IN | The same. |
| 37 | "Reduced or absent urine output for 4–6 hours" | 1 | IN | `ws`: "Reduced or absence of urine output for 4-6 hours". |
| 38 | "Bleeding manifestation" | 1 | DIFFERENT | Wording, and the triage step is narrower. `ws` (Appendix 7): "Mucosal bleed". Group B2 note (Table 6): "Bleeding manifestation". |
| 39 | "Laboratory findings: Rising haematocrit with rapidly falling platelet count" | 1 | DIFFERENT | Clinical: the triage step adds a figure the QR does not print. `ws` (Appendix 7): "Lab: Rising hematocrit > 20% from the baseline with rapid falling platelet count". Group B2 note (Table 6): "Progressive increase in haematocrit with drop in platelets". |
| 40 | Severe dengue: "Dengue case that has one or more of the following manifestations: Severe plasma leakage leading to shock or respiratory distress" | 1 | IN | Groups and zones tab. |
| 41 | "Severe bleeding which is significant enough to require medical intervention" | 1 | IN | The same. |
| 42 | "Severe organ involvement (liver impairment, myocarditis, etc.)" | 1 | DIFFERENT | Wording only. The entry's Table 3 note: "severe organ involvement (liver impairment, myocarditis, encephalitis, etc.)", as CPG Table 3 prints (see section 4). |
| 43 | "Requires strict monitoring and immediate medical intervention" | 1 | IN | The same note. |

### Page 4: MTS with dengue classification, and the rapid test table

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 44 | Level 1 Resuscitation, Red: "Decompensated dengue shock syndrome"; "Immediate resuscitation, ICU admission (Group C)" | 1 | IN | Groups and zones tab, Table 8; `red12`; `#calc-dassess`. |
| 45 | Level 2 Emergency, Red: "Compensated dengue shock syndrome"; "Emergency treatment, IV fluid therapy and admission (Group C)" | 1 | IN | The same; `red2`. |
| 46 | Level 3 Urgent, Yellow: "Dengue with warning signs or without warning sign but unstable co-morbidity"; "IV fluid therapy, admission, management of associated conditions (Group B2)" | 1 | IN | The same; `yellow`. |
| 47 | Level 4 Early care, Green: "Dengue without warning signs with stable comorbidity"; "Observation or admission, management of associated conditions (Group B1)" | 1 | IN | The same; `green`. |
| 48 | Level 5 Routine care, Outpatient: "Dengue without warning signs, comorbidity and social risk"; "At-home outpatient management with follow-up (Group A)" | 1 | IN | The same; `pc`. |
| 49 | Rapid test, fever less than 5 days: NS1+ IgM− IgG− "Acute dengue infection"; + + − "Acute dengue infection"; + − + "Acute dengue infection or secondary infection"; − − − "Not dengue, but if history suggestive of dengue, repeat RDT" | 4 | IN | Tests tab, Table 5; `#calc-drdt`. |
| 50 | Fever more than 5 days: + + − "Acute dengue infection. High risk for severe dengue"; − + − "Acute or recent dengue infection"; − + + "Acute, recent or secondary dengue"; − − + "Unable to rule out secondary dengue, proceed with dengue IgG high-titre"; − − − "Not dengue infection" | 5 | IN | The same. |

### Page 5: Dengue management based on severity

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 51 | Group A (DNWS): stable general well-being (able to drink adequately, good urine output and able to ambulate); absence of warning signs in critical phase; haemodynamically stable; stable blood investigation; absence of unstable comorbidities or social factors. Management: "Outpatient monitoring" | 6 | IN | Groups and zones tab, Group A; `pc`. |
| 52 | Group B1, presence of comorbidities: hypertension; diabetes mellitus; asthma/ COPD; chronic kidney disease; chronic liver disease; peptic ulcer disease or gastritis of any etiology; being treated with anticoagulants/ antiplatelet | 7 | IN | Group B1 note; `cm` step. |
| 53 | Group B1 comorbidities: "Haemolytic diseases"; "others" | 2 | IN (part) | In the Group B1 note (Table 6). Not in the `cm` triage step, which follows Appendix 7. |
| 54 | "*Unstable comorbidities must be referred for assessment" | 1 | IN | Group B1 note; `green`. |
| 55 | Group B1, high risk group: "Pregnancy"; "≥65 years old"; "Obesity" | 3 | DIFFERENT | **Clinical.** The QR places these in Group B1: "Possible referral to hospital", which page 4 puts at MTS level 4, Green. The entry's triage step `ws` sends "High risk: pregnancy", "High risk: > 65 years old" and "High risk: morbid obesity" to **Yellow Zone, MTS level 3**. It does so from CPG Appendix 7, which the QR does not print, and by Krishna's decision of 9 Nov 2026 (CPG-REVIEW.md, point 1). The Group B1 note quotes Table 6 as the QR does, and the `ws` hint states the conflict. The wording differs too: "≥65" against "> 65"; "Obesity" against "morbid obesity". |
| 56 | Group B1, high risk group: "Patients with special needs" | 1 | IN | Group B1 note. The `cm` step has Appendix 7's "Social risk: handicapped". |
| 57 | Group B1, social risk: "The patient lives alone or far from health facilities"; "Does not have transportation" | 2 | IN | Group B1 note; `cm`. |
| 58 | Group B1 management: "Possible referral to hospital. May require close observation and treatment of their associated condition." | 1 | IN | Group B1 note; `green`. |
| 59 | Group B2 (DWWS), signs 1 to 10: lack of clinical improvement or worsening of symptoms when fever subsides; intense abdominal pain or tenderness; persistent vomiting (>three times per day); lethargy, restlessness, irritability or confusion; fluid accumulation; postural hypotension (lipothymia); liver enlargement >2 cm; progressive increase in haematocrit with drop in platelets; bleeding manifestation; reduced or absence of urine output 4-6 hours | 10 | IN | Group B2 note, word for word. (The triage step words three of them as Appendix 7 does: rows 30, 38 and 39.) |
| 60 | Group B2 management: "Admit to hospital" | 1 | IN | Group B2 note; `yellow`. |
| 61 | Group C (SD): "Every dengue case that has one or more of the following manifestations": severe plasma leakage leading to shock or respiratory distress; severe bleeding which is significant enough to require medical intervention | 2 | IN | Group C note. |
| 62 | Group C: "Severe organ involvement (liver impairment, myocarditis, encephalitis etc.)" | 1 | DIFFERENT | Wording only. The entry's Group C note: "Severe organ involvement (liver impairment, myocarditis, etc.)", as CPG Table 6 prints (see section 4). |
| 63 | Group C management: "Intensive Care Unit. Requires emergency treatment" | 1 | IN | Group C note. |
| 64 | "The decision for referral and admission must not be based on a single clinical parameter instead should depend on the total assessment of the patient." | 1 | IN | Group C note; `cm` hint. |

### Page 6: Dengue clinical assessment in primary care, and the fluid quota

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 65 | History: "Day of illness and date of fever onset." | 1 | IN (part) | `#calc-dassess` asks the day of illness; the Tests tab's Diagnosis note has "the day of fever". The date of onset is not asked for. |
| 66 | History: "Symptoms suggestive of dengue and living in/travelling to a dengue endemic area" | 1 | IN | The case definition; `ask` ("Ask about the outbreak locality too"). |
| 67 | History: "Presence of dengue warning signs" | 1 | IN | `ws`. |
| 68 | History: "Daily function such as daily activity, oral fluid intake and urine output." | 1 | IN | Group A ("able to drink adequately, good urine output and able to ambulate"). |
| 69 | History: "Comorbidities" | 1 | IN | `cm`. |
| 70 | History: "Special group populations such as pregnancy, elderly > 65 years old" | 1 | IN | `ws`. |
| 71 | History: "Social factors affecting follow-up and access to care" | 1 | IN | `cm`. |
| 72 | History: "Dengue vaccination status and date of vaccination." | 1 | IN (part) | Only as the 30-day tick in `#calc-drdt` and the Diagnosis note. Not listed as a history item. |
| 73 | Examination: "General condition, mental status and Glasgow Coma Scale, hydration status" | 1 | IN (part) | `life` has first look (ABCD) and "Unresponsive, seizure, altered mental status". The Glasgow Coma Scale and hydration status are not named. |
| 74 | Examination: "Haemodynamic status such as blood pressure, pulse pressure, pulse rate, respiratory rate and temperature." | 1 | IN | `vit`; `#calc-dvitals`. |
| 75 | Examination: "Anthropometry such as weight, height and BMI" | 1 | IN | `#calc-dfluid` (weight, height, BMI over 27.5). |
| 76 | Examination: "Assessment of CCTVR (Colour, Capillary Refill Time (CRT), Temperature, Pulse Volume, Pulse Rate)." | 1 | IN | `life` info; Shock tab, CRT method. |
| 77 | Examination: "Assessment of shock." | 1 | IN | `life`, `vit`; Shock tab, Table 1. |
| 78 | Examination: "Respiratory status (tachypnoea, pleural effusion)" | 1 | IN (part) | `vit` has the respiratory rate; pleural effusion is under PoCUS only. Not listed as an examination. |
| 79 | Examination: "Abdominal examination (tenderness, hepatomegaly, ascites)" | 1 | IN (part) | The findings are warning signs in `ws` (abdominal tenderness, liver enlargement, fluid accumulation). Not listed as an examination. |
| 80 | Examination: "Assess bleeding tendency (skin, mucosa, injection sites)" | 1 | IN (part) | `life` "Active bleeding"; `ws` "Mucosal bleed". Skin and injection sites are not named. |
| 81 | Investigations: "Point-of-care test for dengue (Dengue Rapid Diagnostic Test)." | 1 | IN | `vit` info ("POCT: rapid dengue test"); Tests tab. |
| 82 | Investigations: "If unable to perform, patients should be referred to nearest facility where it can be done." | 1 | MISSING | Not in the entry. |
| 83 | Investigations: "Full Blood Count (FBC)"; "AST (if available)"; "Ultrasound (PoCUS - if trained and available)" | 3 | IN | `vit` info; Tests tab, Tests in the emergency department. |
| 84 | Diagnosis: "Suspected dengue: Fever + ≥2 symptoms +/- supportive lab findings"; "Confirmed dengue: laboratory evidence of dengue infection" | 2 | IN | Tests tab, Diagnosis. |
| 85 | "A complete diagnosis should include the following": day of dengue fever; dengue phase: febrile, critical or recovery; classification of dengue; presence of shock; comorbidities or special populations | 5 | IN | Tests tab, Diagnosis (it adds "compensated or decompensated", from the CPG). |
| 86 | Management: "Notify the district health office" | 1 | IN | `pc`; Course and care tab, Notification. |
| 87 | Management: "Determine suitability for outpatient management (Group A), referral (Group B1) or admission (Group B2 and C)." | 1 | IN | The triage route and the group notes. |
| 88 | Group A: "Arrange daily follow-up and monitoring until patient is afebrile for 24 - 48 hours without antipyretics"; "Provide Outpatient Dengue Monitoring Record (Appendix 5)"; "Educate the patient on DOs and DON'Ts, warning signs and fluid intake."; "Advise immediate return if the patient has warning signs." | 4 | IN | `pc`. |
| 89 | Fluid quota: "For the entire critical phase, the recommended total fluid volume is Maintenance + 5% deficit, where a 5% deficit is equivalent to 50ml/kg. This fluid quota includes both oral and intravenous fluid intake." | 1 | IN | Fluids tab, The fluid quota. |
| 90 | "Not all patients will require the full fluid quota Maintenance + 5% deficit; many may need less as the rate, peak, and duration of plasma leakage vary between individuals." | 1 | IN | The same note, in the CPG page 43 wording. |
| 91 | "5% deficit represents the expected plasma volume loss during critical phase" | 1 | MISSING | Not in the entry. |
| 92 | "Crystalloid is the intravenous fluid of choice for maintenance therapy." | 1 | IN (part) | Not stated. The entry has "may require IV infusion of crystalloids" (p44) and, twice, that colloids are not for maintenance (p40, Recommendation 8). |
| 93 | "This entire amount is to be administered over 48 hours." | 1 | IN | Fluids tab (Recommendation 7; and page 43's "the maximum fluid to be given over 48 hours"). |

### Page 7: Predictors, the shock table, and indicators of effective fluid resuscitation

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 94 | Predictors, patient's factor: older age; overweight/obesity (BMI >25 kg/m²); type-2 DM with poor glycaemic control, presence of one or more co-morbidities | 3 | IN | Groups and zones tab, Predictors of severe dengue. |
| 95 | Clinical signs: presence of multiple warning signs; gastrointestinal bleeding; clinical features suggestive of plasma leakage; altered mental status; in-hospital complications e.g., acute kidney injury or pneumonia | 5 | IN | The same. |
| 96 | Laboratory markers: early decline in platelet count in febrile phase, severe thrombocytopenia (platelet count <50 × 10⁹/L), leucocytosis or rising haematocrit with rapid drop in platelet; early elevation of AST/ALT in febrile phase or severe hepatitis >1000 U/L; prolonged PT | 3 | IN | The same. |
| 97 | Imaging: gallbladder wall oedema/ increased gallbladder wall thickness, pleural effusion, ascites and/or organomegaly | 1 | IN | The same. |
| 98 | "Severe dengue is predicted by a combination of the above factors." | 1 | MISSING | The entry lists the factors without this closing line. |
| 99 | Table: normal circulation, compensated shock, decompensated/ hypotensive shock. Eight rows: consciousness; CRT (≤3sec, >3 sec, >3 sec); peripheries; heart rate; blood pressure; pulse pressure (normal, 20 - 30 mmHg, <20 mmHg); respiratory rate; urine output | 8 | IN | Shock tab, Table 1, every cell. |
| 100 | "All these parameters should be interpreted collectively and not in isolation" | 1 | MISSING | The whole box (CPG Table 14, page 49) is absent from the entry. |
| 101 | A. Clinical parameters: improvement of general well-being/mental state; warm peripheries with stable BP; capillary refill time ≤ 3sec; improving pulse pressure; reducing tachycardia; improving urine output; less tachypnoea | 7 | MISSING | The entry has only the algorithms' footnote: "Status of improvement: assessed by reevaluating the patient's clinical condition, vital signs, CCTVR, and urine output". |
| 102 | B. Laboratory parameters: appropriate decrease in HCT; improvement in metabolic acidosis and lactate | 2 | MISSING | Not in the entry. |

### Page 8: Algorithm 1 and the quota table

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 103 | "start IV crystalloid 3-5ml/kg/hr for 1 hour"; improvement: "Gradual reduction of IV crystalloid", "IV crystalloid 2-3ml/kg/hr for 1-2 hour"; improvement: "reduce to 1-2ml/kg/hr or maintenance fluid", "stop IV fluid if able to tolerate orally" | 4 | IN | Fluids tab, Algorithm 1; `#calc-dfluid` gives each rate in ml/hr. |
| 104 | No improvement: "Is the patient in shock"; yes: "Refer Algorithm 2/3/4"; no: "take FBC/VBG/lactate; increase fluid regimen to 5-7ml/kg/hr while awaiting result and titrate accordingly"; then improvement back to the reduction, or no improvement to Algorithm 2/3/4 | 3 | IN | The same. |
| 105 | "*Status of improvement: assessed by reevaluating the patient's clinical condition, vital signs, CCTVR, and urine output."; "FBC should be taken every 4-12 hourly in critical phase"; "Total fluid given should be within fluid quota for 48 hours (M+5%)" | 3 | IN | The same. |
| 106 | Table, body weight 30 to ≥ 70 kg: quota 3200, 3600, 3900, 4300, 4700, 5000, 5400, 5700, 6000 ml; R1, R2, R3, R5 and R7 in ml/hr for each weight | 9 | IN | Fluids tab, Fluid quota and rates by weight: all 9 rows and 54 figures match. `#calc-dfluid` reads this table. |
| 107 | "*weight limit at 70kg" | 1 | IN | The same; Fluids tab, Weight for fluid therapy. |

### Page 9: Algorithm 2, compensated shock

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 108 | "(systolic pressure maintained but has signs of reduced perfusion)"; signs: "tachycardia, cold peripheries, CRT >3sec, PP 20-30mmHg, low pulse volume" | 2 | IN | Shock tab, Algorithm 2. |
| 109 | "Fluid resuscitation with crystalloid 10 ml/kg/hr for 1 hour"; "Obtain FBC, RP, LFT, RBS, PT/APTT, CK, VBG, Lactate/HCO3 GXM before fluid resuscitation." | 2 | IN | The same. |
| 110 | Improvement: "IV crystalloid 5-7ml/kg/hr for 1-2 hours"; "3-5ml/kg/hr for 2-4 hours; then reduce to 2-3ml/kg/hr for 2-4 hours"; fluid can be further reduced; "Monitor HCT 4-6 hourly"; shock may recur; "if HCT rise ≥20%, consider increase fluid regimen"; if HCT decreases, consider transfusion (Refer Algorithm 4); "Consider to stop IV fluid at 48 hours of plasma leakage" | 9 | IN | The same. |
| 111 | No improvement: "Repeat HCT and run another 10ml/kg/hr crystalloid while waiting for result"; HCT up ≥20% or unchanged: "Continue 2nd bolus 10ml/kg/hr crystalloid"; "#Unchanged = HCT rise or drops <20%" | 3 | IN | The same. |
| 112 | Still no improvement: "repeat HCT and IV colloid 10-20ml/kg/hr for 1 hour"; improvement: "switch to crystalloid" | 2 | IN | The same. |
| 113 | HCT down ≥20%, or no improvement after the colloid: "Refer Algorithm 4. Consider significant occult/overt bleed" | 2 | IN | The same. |
| 114 | "*Status of improvement…" | 1 | IN | Under Algorithm 1 in the entry. |
| 115 | "Point of care ultrasound if available" | 1 | MISSING | Not in the entry's Algorithm 2 summary. PoCUS is in the Tests tab and Algorithm 4. |

### Page 10: Algorithm 3, decompensated shock

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 116 | "(hypotension with signs of reduced perfusion)"; signs: "tachycardia/bradycardia, cold clammy, CRT >3sec, PP<20mmHg, thready pulse volume" | 2 | IN | Shock tab, Algorithm 3. |
| 117 | "Fluid resuscitation with 20 ml/kg crystalloid within 15 - 30 minutes"; "Obtain HCT/FBC, RP, LFT, RBS, PT/APTT, CK, Lactate/HCO3, GXM before fluid resuscitation." | 2 | IN | The same. |
| 118 | Improvement: "IV crystalloid 10ml/kg/hr for 1 hour"; "5-7 ml/kg/hr for 2-4 hours; then reduce to 3-5 ml/kg/hr for 2-4 hours; then reduce to 2-3 ml/kg/hr for 2-4 hours"; fluid can be further reduced; "Monitor HCT 2-4 hourly or more frequent as indicated"; shock may recur; HCT rise ≥20%; HCT decrease; stop IV fluid at 48 hours of plasma leakage | 10 | IN | The same ("Act on the HCT as in Algorithm 2"). |
| 119 | No improvement: "Repeat HCT and run second bolus 10 - 20 ml/kg colloid/crystalloid while waiting for result" | 1 | IN | The same. |
| 120 | HCT up ≥ 20%: "Continue 2nd bolus of fluid (colloid/crystalloid) 10-20 ml/kg over ½ to 1 hour"; then improvement back, or no improvement to Algorithm 4 | 2 | IN | The same. |
| 121 | HCT down ≥ 20%: "Consider significant occult/overt bleed. Initiate transfusion with packed red cells and /or blood components", then Algorithm 4 | 1 | IN | The same. |
| 122 | "HCT unchanged": refer to Algorithm 4; "#Unchanged = HCT rise or drops <20%" | 2 | IN | The same. |
| 123 | "*Status of improvement…" | 1 | IN | Under Algorithm 1 in the entry. |
| 124 | "Point of care ultrasound if available" | 1 | MISSING | Not in the entry's Algorithm 3 summary. |

### Page 11: Algorithm 4, refractory shock

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 125 | "Persistent shock": "PoCUS and haemodynamic assessment to determine type of shock and requirement of fluid" | 1 | IN | Shock tab, Algorithm 4. |
| 126 | Hypovolaemic, bleeding and leaking: look for source of bleeding (e.g. OGDS); evidence of leaking (USG, chest X-ray); check for coagulopathy; transfuse packed red cells and blood components | 4 | IN | The same. |
| 127 | Distributive: septic shock, antibiotics + vasopressors; cytokine storm, vasopressors + consider steroids; acute liver failure, supportive management + vasopressors | 3 | IN | The same. |
| 128 | Cardiogenic: myocardial dysfunction, inotropes (noradrenaline/ dobutamine/ adrenaline/ milrinone); cardiac arrhythmias, anti-arrhythmia agents | 2 | IN | The same. |
| 129 | Obstructive: cardiac tamponade, pericardiocentesis after expert consultation | 1 | IN | The same. |
| 130 | "Patient may have more than one type of shock" | 1 | IN | The same. |

### Page 12: PoCUS guided dengue management (CPG Appendix 8)

| # | QR line | n | Mark | Where in the app, or what differs |
|---|---|---|---|---|
| 131 | Phases: "Febrile phase (Day 2 - 7)"; "Critical phase (Day 3 - 7)" | 2 | IN | Course and care tab ("usually lasts 2 - 7 days"; "usually between days 3 and 7 of illness"); `#calc-dassess` uses days 3 to 7. |
| 132 | "Recovery phase (Day 7 onwards)" | 1 | MISSING | No day is given for recovery. |
| 133 | Potential complications, critical phase: leaking; bleeding; shock; organ dysfunction | 1 | IN (part) | Course of illness: "severe plasma leakage resulting in hypovolaemia, shock and multiorgan failure". Bleeding is elsewhere in the entry. Not laid out by phase. |
| 134 | Potential complications: febrile phase, dehydration; recovery phase, reabsorption and fluid overload | 2 | MISSING | Not stated by phase. (The pitfalls note warns against IV fluids continued into the recovery phase.) |
| 135 | Findings: "Pleural effusion"; "Ascites" | 2 | IN | Tests tab; Key indicators of the critical phase. |
| 136 | Finding: "GBWT >3 mm" | 1 | MISSING | The entry has "gall bladder wall oedema" and "thickened gallbladder wall" without the 3 mm figure. |
| 137 | Findings: "Small / flat IVC (<1.5 cm)"; "Hyperdynamic heart with small LV, RV"; "Low LVOT VTI"; "Reduced cardiac function"; "Dilated IVC (poor variability)"; "B-lines (fluid overload)" | 6 | MISSING | None is in the entry. |
| 138 | PoCUS guided management: screen for early leakage (febrile); detect leakage; assess hemodynamics; differentiate type of shock (critical) | 4 | IN | Tests tab ("detection of early plasma leakage"; Recommendation 4); Algorithm 4. |
| 139 | PoCUS guided management: assess volume; guide fluids (febrile); guide fluids / blood / vasoactives; serial reassessment (critical); confirm resolution; detect fluid overload; de-escalate fluids (recovery) | 7 | MISSING | Not in the entry. |
| 140 | "Important: signs can coexist and overlap across different phases, clinical judgement and serial PoCUS are essential." | 1 | MISSING | Not in the entry. |
| 141 | PoCUS use: when clinically indicated; by trained operators; where resources are available | 3 | IN | Tests tab: "guided by clinical indication, ultrasound availability and operator competency". |
| 142 | "PoCUS complements clinical assessment. Always integrate with clinical judgment and patient context" | 1 | IN (part) | Tests tab calls it "an adjunctive bedside tool". The instruction to integrate it with clinical judgement is not quoted. |
| 143 | PoCUS can help to: "Identify plasma leakage and complications" | 1 | IN | Tests tab. |
| 144 | PoCUS can help to: "Detect hypovolemia early"; "Guide fluid therapy and monitor response"; "Support safe de-escalation during recovery" | 3 | MISSING | Not in the entry. |

The page's abbreviations and its two WHO references (2009 and 2025) are not counted.

### Totals

144 rows covering 283 printed lines.

| Mark | Rows | Printed lines |
|---|---|---|
| IN | 104 | 219 |
| IN (part) | 13 | 14 |
| MISSING | 21 | 42 |
| DIFFERENT | 6 | 8 |

No dose, rate, threshold or table figure that the QR prints is contradicted by a number in the entry or in a dengue calculator. The eight DIFFERENT lines (six rows) are about wording or about where a patient is placed; none is a dose.

### In the entry and the calculators, but not printed in the Quick Reference

The QR is silent on these. Silence is not agreement or disagreement.

- **Appendix 7, the systematic triage** that the entry's triage route and `#calc-dassess` are built on: the life-threatening features list, and the seven unstable vital signs (BP < 90/60 mmHg, MAP < 65 mmHg, pulse pressure < 30 mmHg, shock index > 1, heart rate > 100/min, respiratory rate > 20/min, SpO2 < 95%). So `#calc-dvitals` has no counterpart in the QR.
- Chapter 13's absolute discharge criteria (the `dc` route), and the urine ranges `#calc-duo` uses (0.5 ml/kg/hour minimum, 0.5 to 1 optimal, 0.5 to 1.5 at discharge).
- The medicines route (paracetamol not over 4 g a day, antiplatelets, anticoagulants, antibiotics, statin, metformin, SGLT2 inhibitor).
- The home care leaflet (Appendix 5B), in both languages. The QR names "Appendix 5" but does not contain it.
- Holliday-Segar's figures (Tables 11 and 12), the BMI > 27.5 cut-off and the ideal and adjusted body weight formulas (Table 13).
- The median haematocrit values, "≥20% from baseline", and "a platelet count below 100 × 10⁹/L".
- The CRT method (Appendix 6), notification within 24 hours, the ICD-11 codes, transfer to hospital, and the special population notes beyond the four in key message 8.

## 3. The Quick Reference against the ebook pathway (`dengue`, ebook pages 31 to 32)

The ebook pathway cites the CPG 3rd edition (2015). It stays as written (standing rule 5). Since the round in `data14.js` its first step carries a hint that the guide follows the CPG, 4th edition, for dengue and that the pathway below is the ebook's as printed; that hint is the guide's, not the ebook's, and is left out of the comparison. These are the points where it and the QR say different things. The first table is the ebook's own printed nodes. Nodes that come from department documents are in the second table.

### The ebook's printed pathway

| # | Topic | Ebook pathway | Quick Reference |
|---|---|---|---|
| 1 | Shock: capillary refill | "Delayed CRT over 2 seconds" | Normal circulation "CRT≤3sec"; compensated and decompensated shock "CRT>3 sec" (p7); "CRT >3sec" (p9, p10); "Capillary refill time ≤ 3sec" as a sign of effective resuscitation (p7) |
| 2 | Shock: blood pressure | "Hypotension" is one of four signs of shock, any one of which sends the patient to the critical area | Hypotension belongs to decompensated shock only. Compensated shock has "Normal systolic pressure with raised diastolic pressure" and "Narrowing pulse pressure (20 - 30 mmHg)"; decompensated has "Narrowed pulse pressure (<20 mmHg)" (p7) |
| 3 | Shock: other signs | "Poor pulse volume"; "Shock index over 1" | "low pulse volume" (p9) and "thready pulse volume" (p10). The QR does not print a shock index. It adds tachycardia, cool peripheries, tachypnoea, reduced urine output, and lethargy, restlessness, irritability or confusion (p7) |
| 4 | Shock: where and what | "Triage to critical area: dengue shock"; "Start bolus as per protocol (refer to algorithm A and B)"; "Urgent referral to medical and anaesthetic team"; then "Admit critical care area" | MTS level 1 or 2, Red; "Immediate resuscitation, ICU admission (Group C)" or "Emergency treatment, IV fluid therapy and admission (Group C)" (p4). Algorithm 2: "crystalloid 10 ml/kg/hr for 1 hour" (p9). Algorithm 3: "20 ml/kg crystalloid within 15 - 30 minutes" (p10). The ebook prints no volumes, and its algorithm letters (A, B, C) are the 3rd edition's |
| 5 | Shock: no improvement | "Consider another cause of shock (algorithm C)" | Algorithm 4: PoCUS and haemodynamic assessment for hypovolaemic, distributive, cardiogenic and obstructive shock (p11); "noradrenaline is the preferred vasopressor" (p2) |
| 6 | Warning sign: abdomen | "Abdominal pain or tenderness" | "Intense abdominal pain or tenderness" (p3, p5) |
| 7 | Warning sign: vomiting | "Persistent vomiting (over 2 times in 24 hours)" | "Persistent vomiting (>three times per day)" (p3, p5) |
| 8 | Warning sign: diarrhoea | "Persistent diarrhoea (over 2 times in 24 hours)" | Not a warning sign in the QR |
| 9 | Warning sign: fluid | "Third space fluid accumulation (ascites, pleural or pericardial effusion)" | "Fluid accumulation" (p3, p5) |
| 10 | Warning sign: bleeding | "Spontaneous bleeding tendency" | "Bleeding manifestation" (p3, p5) |
| 11 | Warning sign: liver | "Tender liver" | "Liver enlargement >2 cm" (p3, p5) |
| 12 | Warning sign: mental state | "Lethargy, restlessness or confusion" | "Lethargy, restlessness, irritability or confusion" (p3, p5) |
| 13 | Warning sign: blood | "Raised HCT with rapid drop in platelets (HCT thresholds: male under 60 years 46%, male over 60 years 42%, female 40%)" | "Rising haematocrit with rapidly falling platelet count" (p3); "Progressive increase in haematocrit with drop in platelets" (p5). The QR prints no haematocrit thresholds |
| 14 | Warning signs only in the QR | Not in the ebook | "Lack of clinical improvement or worsening symptoms during the period when fever subsides"; "Postural hypotension"; "Reduced or absent urine output for 4–6 hours" (p3, p5) |
| 15 | When warning signs count | Asked of any patient not in shock | "Dengue case near or in critical phase, that presents with one or more of the following signs" (p3, p5) |
| 16 | Warning signs: fluids | "Dengue with warning signs: start graded bolus as per protocol" | Algorithm 1: "start IV crystalloid 3-5ml/kg/hr for 1 hour", then 2-3, then 1-2 ml/kg/hr or maintenance; the total "within fluid quota for 48 hours (M+5%)" (p8). Key message 5: "frequently adjusting rates based on clinical signs rather than using a fixed rate" (p2). The ebook prints no rates |
| 17 | Warning signs: who is admitted | "Refer medical for admission" | Group B2: "Admit to hospital" (p5); MTS level 3, Yellow: "IV fluid therapy, admission, management of associated conditions" (p4). The same outcome |
| 18 | No warning signs: who is admitted | Home only if all four criteria are met; one of them is "No other criteria for admission (comorbidities, pregnancy, social factors)". Otherwise "Refer medical for admission" | Comorbidities, the high risk group (pregnancy, ≥65 years old, obesity, patients with special needs) and social risk are Group B1: "Possible referral to hospital. May require close observation and treatment of their associated condition" (p5); MTS level 4, Green: "Observation or admission" (p4). Only an unstable comorbidity goes to level 3 (p4). Key message 8: "Pregnant patients require hospitalisation" (p2). So the ebook admits every such patient; the QR admits the pregnant patient and makes the rest a possible referral, observation or admission |
| 19 | Home criteria | "Able to tolerate orally well, good urine output, no history of bleeding"; "No warning sign"; "Stable serial HCT"; "No other criteria for admission" | Group A: "Stable general well-being (able to drink adequately, good urine output and able to ambulate)"; "Absence of warning signs in critical phase"; "Haemodynamically stable"; "Stable blood investigation"; "Absence of unstable comorbidities or social factors" (p5). Only the ebook has "no history of bleeding" and "stable serial HCT". Only the QR has "able to ambulate" and "haemodynamically stable". The ebook excludes any comorbidity; the QR an unstable one |
| 20 | Discharge | "Discharge with dengue monitoring record and home care advice" | "Notify the district health office"; "Arrange daily follow-up and monitoring until patient is afebrile for 24 - 48 hours without antipyretics"; "Provide Outpatient Dengue Monitoring Record"; "Educate the patient on DOs and DON'Ts, warning signs and fluid intake"; "Advise immediate return if the patient has warning signs" (p6). The ebook prints no daily follow-up and no notification |
| 21 | Advice: oral fluids | "adequate fluid intake (more than 8 glasses or 2 litres for an average person)" | "oral fluid therapy (200 ml/hour) while patients are awake" (p2) |
| 22 | Advice: urine | Nothing | "Ensure the patient passes urine 4 to 6 times each day" (p2) |
| 23 | Advice: medicines | "Don't take NSAIDs (painkillers); if already taking them, consult your doctor" | "Avoid NSAIDs and corticosteroids" (p2). Corticosteroids are not in the ebook |
| 24 | Obese patient | "Obese patient (BMI over 27.5 kg/m²): use adjusted body weight", with the adjusted and ideal body weight formulas | "Obese patients in shock require cautious fluid management calculated using their adjusted body weight" (p2). The QR prints no formula and no BMI cut-off for it; its only BMI figure is the predictor "BMI >25 kg/m²" (p7). Its "*weight limit at 70kg" (p8) is not in the ebook |
| 25 | Diagnosis | "Fever with positive dengue serology, or clinically dengue" | The combined NS1/IgM/IgG rapid test is first line, read by days of fever (p2, p4); "Suspected dengue: Fever + ≥2 symptoms +/- supportive lab findings" (p6) |
| 26 | Source | "CPG Management of Dengue Infection in Adults, 3rd edition 2015" | The 4th edition |

**The ebook prints, and the QR does not print at all:** paracetamol "not more than 4 g a day"; tepid sponging; mosquito repellent, nets and breeding places; "Antibiotics are not required"; "Don't use massage, cupping or quasa"; the ideal body weight formulas.

### Nodes and notes in `dengue` that come from department documents

These are not the ebook's. They are listed so the comparison is complete.

| Topic | In `dengue` (source) | Quick Reference |
|---|---|---|
| Direct admission to the Observation Ward | Warning signs only, referred from a Klinik Kesihatan, normal CCTVR and vital signs, "Platelet over 50,000", not morbidly obese: straight to the Observation Ward (memo of 23 Mar 2023) | Nothing on observation wards, and no platelet cut-off for placement. The only platelet figure the QR prints is the predictor "platelet count <50 × 10⁹/L" (p7) |
| Morbid obesity at triage | "abnormal ABCD, MTS 1–2 or morbid obesity to Red" (Dengue SOP 2.0, Oct 2023) | "Obesity" is in the Group B1 high risk group: possible referral (p5), level 4, Green (p4) |
| Stable comorbidity | "a special population (IHD, hypertension, diabetes) to the Green Zone (MTS 4)" (SOP 2.0) | The same placement: level 4, Green (p4) |
| No warning sign, no comorbidity | "to the UCC or the nearest KK (MTS 5)" (SOP 2.0) | Level 5, "Outpatient": "At-home outpatient management with follow-up (Group A)" (p4) |
| Discharge criteria | Drinks 2–3 L a day; urine every 4–6 hours, at least 600 ml in 24 hours; pulse pressure over 20 and under 50 mmHg; HR under 90; shock index under 1; HCT under 40 or 45; platelets over 50,000; no platelet drop over 20,000 in 6 hours (SOP 2.0) | None of these figures. The QR has Group A's five criteria (p5), 200 ml an hour (p2) and urine 4 to 6 times a day (p2) |
| MAU | "dengue fever is an exclusion for MAU admission" (department note) | Nothing |

## 4. The Quick Reference against the full CPG

The QR is a summary, so most differences are omissions. These are the places where its words differ from the CPG's on the same point.

1. **Severe organ involvement, swapped.** QR page 3 (the classification table): "(liver impairment, myocarditis, etc.)". CPG Table 3 (p14): "(liver impairment, myocarditis, encephalitis, etc.)". QR page 5 (Group C): "(liver impairment, myocarditis, encephalitis etc.)". CPG Table 6 (p28): "(liver impairment, myocarditis, etc.)". So each document names encephalitis in one table and not the other, and they are opposite. The entry follows the CPG.
2. **Key message 1** ("Dengue should be suspected in all patients presenting with acute febrile illness") is not a sentence of the CPG. A search of the CPG's text for "suspected in all" and "acute febrile" found only Table 2's title and one sentence about differential diagnosis (both p13) and a clinical question in the appendices (p97).
3. **Key messages reworded from the key recommendations (CPG pages i to iii):**
   - Urine: QR "Ensure the patient passes urine 4 to 6 times each day". CPG: "The frequency of urination should be at least 4 to 6 times a day."
   - Oral fluids: the QR drops "Patients requiring fluid restriction should follow an individualised fluid regimen."
   - NSAIDs and corticosteroids: the QR drops "In patients already receiving these medications, continuation should be guided by clinical judgement and individual clinical indications."
   - Critical phase: QR "frequently adjusting rates based on clinical signs rather than using a fixed rate". CPG: "IV fluid adjustment should be done frequently based on clinical response guided by hemodynamic status (… CCTVR), vital signs, urine output, laboratory markers (haematocrit), and evidence of ongoing plasma leakage." The words "rather than using a fixed rate" are the QR's.
   - Fluid responsiveness: QR "Fluid responsiveness and tolerance should be evaluated with dynamic indices". CPG: "Fluid administration in patients with dengue shock should be guided by dynamic assessment of fluid responsiveness using appropriate bedside parameters."
   - Bleeding: QR "clinically significant (overt) bleeding". CPG: "clinically significant bleeding". "(overt)" is the QR's.
   - Vasopressor: QR "If shock persists despite fluid resuscitation, noradrenaline is the preferred vasopressor". CPG: "Vasopressor may be used in dengue patient with persistent shock despite adequate fluid resuscitation. Noradrenaline is the preferred vasopressor."
   - Sodium bicarbonate: the QR keeps the first sentence of CPG page 54 and drops the next: "However, in patients with severe metabolic acidaemia (arterial pH ≤7.20) accompanied by moderate-to-severe AKI, intravenous sodium bicarbonate may be considered".
   - Elderly: QR "even without classical features like fever or rash". CPG: "even in the absence of classical dengue features". "like fever or rash" is the QR's.
   - Left out of the key messages altogether: testing within 30 days of vaccination; refractory shock ("other causes of shock should be aggressively identified"); high-flow nasal cannula, non-invasive and mechanical ventilation; DKA/HHS; hypertension.
4. **Table 7 (QR page 6) is shortened from CPG pages 29 to 30:**
   - Symptoms: the CPG's examples "(e.g. fever, nausea, vomiting, rash, body aches and pain …)" are dropped.
   - Warning signs: the CPG's "such as intense abdominal pain, lethargy, restlessness, irritability or confusion, reduced or absent urine output for 4-6 hours, bleeding manifestations or persistent vomiting (>3 times over 24 hours)" is dropped. With it goes the CPG's third wording of the vomiting threshold.
   - Comorbidities: the CPG's list (obesity, heart failure, ESKD, chronic lung disease, diabetes mellitus, hypertension, ischemic heart disease, COPD) is dropped.
   - Special groups: CPG "pregnancy, elderly > 65 years old and infant"; the QR drops "and infant".
   - CCTVR: the CPG's "Refer to Appendix 6 on Capillary Refill Time Assessment" is dropped.
   - The test: CPG "Point-of-care test for dengue (Rapid Combo Test or NS1 antigen)… referred to the nearest healthcare facility"; QR "(Dengue Rapid Diagnostic Test)… referred to nearest facility".
   - Complete diagnosis: the CPG's sub-lists "DNWS; DWWS (during critical phase); Severe dengue" and "not in shock, compensated shock or decompensated shock" are dropped.
   - "Refer to Table 6" becomes "Refer to Table on Dengue Severity and Management". "Appendix 5" is still cited, though the QR does not contain it.
   - The CPG's note (suspected and confirmed case definitions) and sources are dropped.
5. **Table 6 (QR page 5):** the title is misprinted "DDENGUE MANAGEMENT BASED ON SEVERITY". "Stable blood investigation" for the CPG's "Stable blood investigations"; "etiology" for "aetiology". The "Adapted from" sources are dropped. Otherwise the same, apart from point 1.
6. **Predictors (QR page 7):** QR "Severe dengue is predicted by a combination of the above factors." CPG page 26: "Severe dengue is predicted by a combination of patient vulnerability and early clinical deterioration, laboratory abnormalities, underlying comorbidities, and ultrasound evidence of plasma leakage with outbreak locality contributing to mortality risk." The list above it is the same.
7. **Indicators of effective fluid resuscitation (QR page 7; CPG Table 14, p49):** the QR prints one line, "Warm peripheries with stable BP". The CPG prints two, "Warm peripheries" and, after the capillary refill line, "Stable BP". So the QR has seven clinical parameters and the CPG eight.
8. **Fluid quota box (QR page 6; CPG Appendix 11, p114):** the QR adds "This entire amount is to be administered over 48 hours" as a fourth "Important consideration"; in the CPG it is in a separate box, "The fluid quota calculation". The QR leaves out the worked example for 60 kg and page 43's "The fluid quota is the maximum fluid to be given over 48 hours". On the crystalloid line, the QR and Appendix 11 say "for maintenance therapy"; CPG page 43 says only "crystalloid is the intravenous fluid of choice".
9. **Table 8 (QR page 4):** the heading keeps the asterisk after "PAHO 2020 Recommended Management", and neither document has a footnote for it. The sources are dropped.
10. **The same in both, compared line by line:** Figure 7 (clinical course); Table 3 apart from point 1; Table 5 (all nine rows and every plus and minus mark); Table 8; Table 1 (all 24 cells); Algorithms 1, 2 and 3 with every rate and threshold, and the quota table (all 54 figures); Algorithm 4 (from the CPG's text layer); Appendix 8 (the PoCUS sheet).
11. **Not in the QR at all:** Appendix 7 (the systematic triage and its vital sign thresholds); chapter 13 (discharge criteria); the medicines section (9.1.2); Appendix 5 (the monitoring record and the leaflet); Tables 11 to 13 (maintenance fluid and body weight formulas); Appendix 6 (CRT method); the copyright line and the statement of intent; references.

**What this means for the app.** The entry was built from the full CPG, so on points 1 to 9 it carries the CPG's wording, not the QR's. None of the nine changes a dose, a rate or a threshold. Point 7 does not affect the app, because the box is missing from it either way.

## 5. What would have to change for the app's dengue topic to follow the Quick Reference

In order of clinical weight. This is a list of differences, not a recommendation. Two standing points sit above it: the ebook pathway stays as written (rule 5), and row 55 is a decision Krishna has already made.

1. **Where the high risk group goes (row 55).** The QR prints only Tables 6 and 8, which put pregnancy, ≥65 years old and obesity in Group B1: possible referral, MTS level 4, Green. The entry's triage step and `#calc-dassess` send "pregnancy", "> 65 years old" and "morbid obesity" to Yellow, MTS level 3, from Appendix 7, by Krishna's decision of 9 Nov 2026. To follow the QR alone, that step would move to the level 4 question. This is for Krishna: the QR's own key message 8 still says pregnant patients require hospitalisation, and the CPG's Appendix 7 has not changed. The QR adds nothing new to the conflict already recorded in CPG-REVIEW.md, point 1.
2. **Add the three shock and ICU messages that are missing (rows 11, 16, 17):** noradrenaline is the preferred vasopressor when shock persists; sodium bicarbonate should not be used routinely in dengue-associated AKI and metabolic acidosis (with the CPG's page 54 exception, if the CPG wording is used); fluid responsiveness and tolerance by dynamic indices.
3. **Add the indicators of effective fluid resuscitation (rows 100 to 102):** the nine-line box, with "interpreted collectively and not in isolation". It is what "improvement" means in Algorithms 1 to 3.
4. **Warning signs at the triage step (rows 30, 38, 39).** The QR's list has "Lack of clinical improvement or worsening symptoms…", "Bleeding manifestation", and a rising haematocrit with no figure. The step has Appendix 7's "Worsening of symptoms when fever subsided", "Mucosal bleed" and "> 20% from the baseline". To follow the QR, the step would use the Table 3 wording. The Group B2 note already has the Table 6 wording.
5. **Fluid quota and critical phase wording (rows 9, 91, 92):** the 5% deficit as the expected plasma volume loss; crystalloid as the fluid of choice for maintenance; and adjusting rates frequently on clinical signs.
6. **Smaller additions (rows 1, 22, 26, 82, 98):** suspect dengue in every acute febrile illness; dengue vaccination may be considered in all adults; the convalescent phase lasts 2 to 5 days; refer to the nearest facility if the rapid test cannot be done; severe dengue is predicted by a combination of the factors.
7. **The PoCUS sheet (rows 115, 124, 132, 134, 136, 137, 139, 140 and 144, and in part 133 and 142):** the phase days, the findings with their two figures (GBWT >3 mm; small or flat IVC <1.5 cm), what PoCUS guides in each phase, and "Point of care ultrasound if available" under Algorithms 2 and 3. Its ultrasound pictures would need the copyright question in section 1 settled first, since the QR prints no reproduction wording of its own.
8. **Table 7's history and examination lists (rows 65, 72, 73, 78 to 80):** the entry uses Table 7 for diagnosis and management only. The lists would go in as a note.
9. **Nothing to change:** encephalitis (rows 42, 62). The entry follows the full CPG, and the QR disagrees with the CPG in both tables.
10. **The ebook pathway:** no change (rule 5). The 26 differences in section 3 extend the table in CPG-REVIEW.md and Still to confirm, item 9. The ones that item does not yet name are: hypotension as a sign of any shock (row 2); who is admitted without warning signs (row 18); the home criteria (row 19); daily follow-up and notification (row 20); and corticosteroids (row 23).
