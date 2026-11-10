# Ebook review 2: pages 24 to 44 against the app

Reviewed 11 Nov 2026. A review only: nothing in the app was changed.

**Source:** *The Clinical Pathway in Emergency for Medical Officer*, Emergency & Trauma Department, Hospital Kuala Lumpur (2025), printed pages 24 to 44, read from the page images in `sources/ebook-pages/` and `sources/ebook-pages-hi/`.

**App:** the eleven ebook pathways in `src/parts/data.js` (`biliary`, `mild-tbi`, `pneumonia`, `stroke-tia`, `cellulitis`, `dengue`, `dvt`, `heart-failure`, `hypertensive-urgency`, `hyperglycaemia`, `hypoglycaemia`), read with `sources/ebook-dump.js` and from `data.js` itself.

**Method.** Print is compared with app and nothing else. No medical knowledge was used to judge either side: where the two differ, both are quoted and neither is called right. Printed text is quoted as printed, with its own spelling. Authors' names in reference lists are replaced by "[authors]".

**Pages.** The printed page number equals the image number on all 21 pages. All eleven `page` fields in the app are right.

**How the rows are counted.** One row per printed box, line or list. A list whose lines all have the same status is one row, with the number of lines in brackets. A line whose status differs from its neighbours has its own row.

**Status words.** SAME: same words, or only spelling, punctuation and word order changed. CONDENSED: shortened or reworded, nothing of substance lost. LOST: shortened so that a printed fact, number, condition or qualifier is missing. MISSING: not in the app at all. DIFFERENT: the app says something else. MOVED: present, but on a different step.

**Crops.** Every number, threshold and symbol below was read from the 2828 x 4000 set. A crop named `pNN_rc` is the tile `crop=1514:1434:x:y` of `sources/ebook-pages-hi/pNN.png` with x = c x 1314 and y = r x 1283 (r = 0 to 2, c = 0 or 1). Other crops give their own geometry. Nothing on these pages was illegible. One printed line is cut off by the page edge (page 39, the source note beside Table 1.1).

**Department notes** (`dept`) and the see-also links added by later data files are not ebook content and are left out. No ebook text on these pages was found only in a department note.

---

## 1. Biliary disease

Printed on page 24 ("Clinical Pathway For Biliary Disease"). App id `biliary`, `page:'24'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 24 | presentation | "Right hypocondriac / epigastric pain or known gallstone disease" | SAME | `lead` | Spelling corrected. |
| 2 | 24 | investigation | "Send FBC, LFT, amylase" (arrow label) | SAME | `start` item 1 | |
| 3 | 24 | management | "Pain control (NSAIDs and opioids)" | SAME | `start` item 2 | |
| 4 | 24 | flow | Diamond "Pain resolution": Yes, No | SAME | `pain` | |
| 5 | 24 | disposition | "Referral to gastro team for admission" (pink) | SAME | `gastro`, end admit | |
| 6 | 24 | flow | Diamond "*Discharge criteria fulfilled": Yes, No (No goes to the gastro box) | SAME | `dc` | |
| 7 | 24 | disposition | "Discharge with outpatient referral for further investigation" (green) | SAME | `home`, end discharge | |
| 8 | 24 | discharge criteria | "*Discharge Criteria (all must be present)" with 4 lines: "Good pain resolution after a period of observation", "Absence of fever, jaundice, pain , altered consciousness", "Abdomen soft, non-tender with no signs of peritonism", "Normal blood investigation" | SAME (4 lines) | `dc` items 1 to 4, `check:'all'` | |
| 9 | 24 | discharge advice | "1. Return to hospital immediately if develop recurrent pain, fever, yellowish discoloration of skin or whites of eyes, urine colour turn dark yellow-brown, pale white stool" | SAME | advice 1 | |
| 10 | 24 | discharge advice | "2. Take low-fat diet", "3. Take simple analgesia such as paracetamol", "4. Return for follow up at respective clinic" | SAME (3 lines) | advice 2 to 4 | |
| 11 | 24 | reference | "1. Surgical and nonsurgical management of gallstones. [authors] et al. Am Fam Physician. 2014;89(10):795-802" | SAME | ref 1 | |
| 12 | 24 | reference | "2. Approach to the management of gallstones. Uptodate. Jul 27 2022" | CONDENSED | ref 2 | The app gives "Jul 2022": the day is dropped. |
| 13 | 24 | reference | "3. Biliary colic: Care instructions. MyHealth.Alberta.ca" | SAME | ref 3 | |

**LOST, MISSING, DIFFERENT:** none.

**ADDED:** `home` item "Give the discharge advice below" (the app's own pointer to its Advice tab).

**Flow:** matches the printed chart: every box, both diamonds, all four arrow labels and both coloured outcomes.

**What the ebook prints.** Presentation: right hypochondriac or epigastric pain, or known gallstone disease. Signs: not printed (the discharge criteria name fever, jaundice, altered consciousness, a soft non-tender abdomen and peritonism). Investigations: FBC, LFT, amylase. Management: pain control (NSAIDs and opioids). Disposition: gastro team for admission, or discharge with outpatient referral.

---

## 2. Mild traumatic brain injury

Printed on pages 25 and 26 ("Clinical Pathway For Mild Traumatic Brain Injury"; the page 25 footer reads "Cerebral Concussion"). App id `mild-tbi`, `page:'25–26'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 25 | presentation | "Mild Traumatic Brain Injury GCS 13-15" | SAME | `lead` | |
| 2 | 25 | flow | Diamond "Fullful criteria for immediate CT brain*": Yes, No | SAME | `ct` | |
| 3 | 25 | investigation | "Perform CT Brain", then diamond "Normal CT Brain": Yes to PTA charting, No to Refer Neurosurgical Team | SAME | `ct1` | Box and diamond are one question in the app. |
| 4 | 25 | disposition | "Refer Neurosurgical Team" (pink) | SAME | `neuro`, end refer | |
| 5 | 25 | management | "Mild TBI observation and PTA assesment (A-WPTAS score)" (yellow) | SAME | `obs` (in the question) | |
| 6 | 25 | flow | Diamond ">4 hours since injury & <18 points for PTA": Yes to CT Brain, No to PTA charting | SAME | `obs` | Crop `crop=1500:900:1250:1150` of p25. |
| 7 | 25 | flow | Diamond "CT Brain": Abnormal to Refer Neurosurgical Team, Normal to PTA charting | SAME | `ct2` | |
| 8 | 25 | management | "For PTA charting, minimal 6 hours since injury" (yellow) | SAME | `pta` | |
| 9 | 25 | flow | Diamond "Fulfill Criteria for Discharge**": Yes, No | SAME | `dc` | |
| 10 | 25 | disposition | "Admit for extended observation / Inform neuro rehab team" (pink) | SAME | `extobs`, end admit | |
| 11 | 25 | disposition | Green box: "1. Discharge with Head Injury Advice", "2. TCA to EM Watch / EMACC to review formal CT brain report", "3. When CT brain normal and PTA > 4 hours, refer for Formal Cognitive Assessment at Neuro Rehab Clinic (HKL/HRC)" | SAME (3 lines) | `home` title, items 1 and 2 | Crop `crop=1000:950:1650:2520` of p25. |
| 12 | 25 | disposition | Green box bullets: "HKL – ext 7099", "HRC - Concussion clinic : neuro.hrc@moh.gov.my", "03-91453400 ext 3401", "referral letter (kindly provide details of GCS & A-WPTASscore on arrival & discharge ,CT brain report )", "upload referral letter in cHeart / pick up at Unit Rekod", "Scan AWPTAS QR code" | SAME (6 lines) | `home` items 3 to 5 | The page prints no QR code, and the app shows none. |
| 13 | 25 | signs | Table "Immediate indication for CT Brain*": "1. GCS <15, 2 hours after injury", "2. Vomiting > 2 times", "3. Evidence of skull fracture / signs of basal skull fracture" | SAME (3 lines) | `ct` items 1 to 3 | Crop `crop=1450:900:150:2680` of p25. |
| 14 | 25 | signs | "4. Focal neurological deficit" with its explanation (full text below) | LOST | `ct` item 4 | Six of the printed examples are missing. |
| 15 | 25 | signs | "5. Post traumatic seizure", "6. Symptomatic patient on anticoagulant and /or antiplatelet", "7. Altered behavior (drugs misuse / alcohol consumption)" | SAME (3 lines) | `ct` items 5 to 7 | |
| 16 | 25 | discharge criteria | Table "Safe Discharge Criteria**", heading "Social Factors" | CONDENSED | `dc` | The app lists the ten criteria in one list without the two headings. |
| 17 | 25 | discharge criteria | "1.Presence of responsible care taker", "2.Easy access to initiate an emergency response call (eg 999)" | SAME (2 lines) | `dc` items 1 and 2 | |
| 18 | 25 | discharge criteria | "3.Live within a reasonable distance / access to medical care" | CONDENSED | `dc` item 3 | App: "Lives within a reasonable distance of medical care". |
| 19 | 25 | discharge criteria | "4.Available transport and responsible person to facilitate transfer", "5. Not under drug/ alcohol influence" | SAME (2 lines) | `dc` items 4 and 5 | |
| 20 | 25 | discharge criteria | Heading "Clinical Factors" | CONDENSED | `dc` | As row 16. |
| 21 | 25 | discharge criteria | "1. No sign and symptoms of raised ICP", "2, No neurological deficit", "3. GCS 15/15" | SAME (3 lines) | `dc` items 6 to 8 | |
| 22 | 25 | discharge criteria | "4. Normal CT Brain" | SAME | `dc` item 9 | The app adds "(if done)": see ADDED. |
| 23 | 25 | discharge criteria | "5. Clinically well, able to tolerate orally and ambulate" | SAME | `dc` item 10 | |
| 24 | 26 | discharge advice | "After a concussion, if possible patient must be accompanied by responsible adult." | DIFFERENT | advice 1 | The app says "should be accompanied". |
| 25 | 26 | discharge advice | "Go to the nearest Emergency Department if have any of the following symptoms:" with 11 lines: "Loss of consciousness", "Disorientation", "New deafness", "Imbalance", "Blurring or double vision", "Weakness of any of the limbs", "Excessive sleepiness / drowsiness", "Vomiting", "Bleeding from any or both ears", "Fitting", "Severe headache not resolved with painkillers" | SAME (12 lines) | advice 2 | All eleven symptoms are there. "any or both ears" reads "either ear". |
| 26 | 26 | discharge advice | "Do and dont's": "1. Do make sure stay within reach of telephone" | SAME | advice 3 | |
| 27 | 26 | discharge advice | "2. Do have plenty of rest" | LOST | advice 3 | App: "rest". "plenty of" is dropped. |
| 28 | 26 | discharge advice | "3. Do take regular sleep", "4. Do take painkillers such as paracetamol for headache" | SAME (2 lines) | advice 3 | |
| 29 | 26 | discharge advice | "5. Don't stay at home alone for 48 hours after leaving hospital", "6. Don't drink alcohol or take recreational drugs", "7. Don't take aspirin or sleeping tablets", "8. Don't play or train for any contact sport for at least 3 weeks without consulting your doctors" | SAME (4 lines) | advice 4 to 7 | Crop `crop=1500:1300:200:900` of p26. |
| 30 | 26 | discharge advice | "9. Don't drive alone" | LOST | advice 8 | App: "Don't drive". "alone" is dropped. |
| 31 | 26 | reference | "1. Concussion and Mild Brain Injury Management - Headway Brain Injury Association", "2. Uptodate" | SAME (2 lines) | refs 1 and 2 | |
| 32 | 26 | reference | "3. Mild Traumatic Brain Injury and Post Traumatic Amnesia (PTA) Observation and Pathway Management HKL" | CONDENSED | ref 3 | Abbreviated to "Mild TBI and PTA observation and pathway management, HKL". |

**LOST, MISSING, DIFFERENT in full**

- Row 14, LOST (page 25, crop `crop=1450:900:150:2680`).
  Print: "4. Focal neurological deficit / Problems restricted to a particular part of the body or a particular activities (difficulties with understanding, speaking, reading or writing, decreased sensation, loss of balance general weakness, visual changes, abnormal reflexes, problems walking."
  App: "Focal neurological deficit (problems restricted to one part of the body or activity, visual changes, abnormal reflexes, problems walking)"
  Missing from the app: "difficulties with understanding, speaking, reading or writing", "decreased sensation", "loss of balance", "general weakness".
- Row 24, DIFFERENT (page 26). Print: "if possible patient must be accompanied by responsible adult." App: "the patient should be accompanied by a responsible adult if possible".
- Row 27, LOST (page 26). Print: "Do have plenty of rest". App: "Do stay within reach of a telephone, rest, sleep regularly, and take painkillers such as paracetamol for headache".
- Row 30, LOST (page 26, crop `crop=1500:1300:200:900`). Print: "9. Don't drive alone". App: "Don't drive".

**ADDED**

- `dc` item 9: "(if done)" after "Normal CT brain". The printed criterion is "4. Normal CT Brain" with no qualifier. (The printed chart does send some patients to discharge without a CT, through the No arm of the PTA diamond, but the words "if done" are the app's.)

**Flow:** matches the printed chart: the start box, five diamonds, the two yellow steps and three coloured outcomes, with every arrow label. The app joins "Perform CT Brain" to the "Normal CT Brain" diamond, and the yellow observation box to the PTA diamond; no branch is changed.

**What the ebook prints.** Presentation: mild TBI, GCS 13 to 15. Signs: the seven immediate indications for CT brain. Investigations: CT brain; A-WPTAS (PTA) charting. Management: observation and PTA charting for a minimum of 6 hours since injury. Disposition: refer neurosurgical team, admit for extended observation and inform the neuro rehab team, or discharge with head injury advice, a TCA to EM Watch or EMACC, and a Neuro Rehab Clinic referral when the CT is normal and PTA is over 4 hours.

---

## 3. Community acquired pneumonia

Printed on page 27 ("Clinical Pathway for Community Acquired Pneumonia (CAP)"). App id `pneumonia`, `page:'27'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 27 | presentation | "Diagnosed for CAP" | SAME | `lead` | |
| 2 | 27 | flow | Diamond "Require for inotropes? Need Oxygen support?": Yes to Admit, No to CURB-65 | SAME | `o2` | |
| 3 | 27 | disposition | "Admit" (pink, three boxes) | SAME | `admit`, `admitpsi` | |
| 4 | 27 | flow | "Calculate CURB-65 scoring" | SAME | `curb` | |
| 5 | 27 | signs | CURB-65 table: "C Confusion", "U Urea >7" | SAME (2 lines) | `curb` items 1 and 2 | Crop `p27_10`. |
| 6 | 27 | signs | "R Respiratory rate >30/min" | DIFFERENT | `curb` item 3 | App: "Respiratory rate 30/min or more". |
| 7 | 27 | signs | "B SBP < 90 mmHg", "65 Age > 65 years old" | SAME (2 lines) | `curb` items 4 and 5 | Crop `p27_10`. |
| 8 | 27 | flow | "Score 0 - 1 (<3% risk of death)", "Score 2 and above (>10% risk of death)" to Admit | SAME (2 lines) | `curb` options | Crop `p27_11`. |
| 9 | 27 | flow | "Calculate the PSI score" | SAME | `psi` | |
| 10 | 27 | signs | "Pneumonia Severity Index (PSI)" table: "Demographics: Age, Gender, Nursing Home", "Comorbidities: Neoplasia, Liver disease, CHF, Cerebrovascular disease, Renal disease", "Vital signs/Examination: Mental confusion, RR, SBP, Temperature, HR", "Laboratory/Imaging: pH, Urea, Na, Glucose, Hematocrit, Pleural effusion, Oxygenation" | SAME (4 lines) | `psi` info 1 to 4 | The ebook prints no PSI points and no class cut-offs; the app has none either. |
| 11 | 27 | flow | "Class I or II" to "Manage as outpatient** IF NO other practical concern*" (green) | SAME | `psi` option 1, `pc`, `opd` | The app asks the practical concerns as a question before the outcome. |
| 12 | 27 | flow | "Class III" to "Brief observation & KIV discharge" (uncoloured) | SAME | `psi` option 2, `brief`, end observe | |
| 13 | 27 | flow | "Class III or IV" to "Admit" (pink) | DIFFERENT | `psi` option 3, `admitpsi` | App option: "Class IV or V". The app's `gap` on `admitpsi` says so. |
| 14 | 27 | other | "Practical concerns :" with 7 lines: "Poorly controlled comorbidity", "Poor oral intake", "Unable to ambulate, too lethargic", "Concern about adherence to therapy", "Cognitive or functional impairment", "Mental illness", "Concern about social issue (poor support)" | SAME (7 lines) | `pc` items, `concerns` | |
| 15 | 27 | disposition | "CONSIDER ADMISSION IF HAVE POINTS ABOVE" | SAME | `pcadmit` | |
| 16 | 27 | discharge advice | "1. Discharge with antibiotics & symptomatic relief medicine", "2. TCA EMwatch/EMACC/PC clinic/KK", "3. To come to nearest health facility if worsening condition" | SAME (3 lines) | advice 1 to 3, `opd` items | |

The page prints no reference list. The "**" on "Manage as outpatient**" has no footnote on the page.

**LOST, MISSING, DIFFERENT in full**

- Row 6, DIFFERENT (page 27, crop `p27_10`). Print: "R Respiratory rate >30/min". App: "Respiratory rate 30/min or more". The print uses ">"; the app's wording includes a rate of exactly 30.
- Row 13, DIFFERENT (page 27, crop `p27_11`). Print: the three PSI branches are labelled "Class I or II", "Class III" and "Class III or IV". App: "Class I or II", "Class III", "Class IV or V". The app's own note: "The ebook chart labels this branch "Class III or IV"; class V is not shown." Class III appears twice in the print, and class V nowhere.

**ADDED**

- `curb`: one point for each CURB-65 item. The print lists the five items and the score bands but prints no points.
- `psi` option 3: "Class IV or V" (row 13).
- `opd` item 2, second half: "CURB-65 0–1 can be referred to MAU FAST clinic with a copy of the CXR". Not on page 27. The app's references name "MAU FAST clinic referral criteria (CAP with CURB score 0–1)" as its source, but the line itself carries no source.
- `pcadmit` item: "The ebook advises considering admission when any practical concern is present." (the app's own sentence).
- `gap` notes on `opd` ("The ebook does not name an outpatient antibiotic for CAP."), `brief` and `admitpsi` (the app's own notes).
- References: "HKL ED Clinical Pathway ebook, p27" and "MAU FAST clinic referral criteria (CAP with CURB score 0–1)". The page prints none.

**Flow:** one mismatch, the label of the third PSI branch (row 13). Otherwise every box and arrow is there. Colours: "Brief observation & KIV discharge" is an uncoloured box in the print and an "observe" outcome in the app.

**What the ebook prints.** Presentation: a patient diagnosed with CAP. Signs: the CURB-65 items and the four PSI headings, and the seven practical concerns. Investigations: not printed as a list (urea, and the PSI laboratory and imaging items, are named). Management: antibiotics and symptomatic relief medicine on discharge; no drug is named. Disposition: admit, brief observation and KIV discharge, or manage as outpatient.

---

## 4. CVA and TIA

Printed on pages 28 and 29 ("Clinical Pathway For Cerebrovascular Accident (CVA) And Transient Ischemic Attack (TIA)"). App id `stroke-tia`, `page:'28–29'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 28 | presentation | "Presented with Stroke symtoms / "BEFAST" positive" | SAME | `lead` | |
| 2 | 28 | signs | ""BEFAST"": "B - balance loss", "E- eyesight changes", "F - facial drooping", "A - arm weakness", "S - speech disturbance", "T - time" | SAME (6 lines) | `lead` | |
| 3 | 28 | flow | "Symptoms < 9 hours", "Symptoms > 9 hours" | SAME (2 lines) | `time` options 1 and 2 | Crop `crop=2500:520:180:1130` of p28. |
| 4 | 28 | flow | "Symptom lasted < 24 hours" | CONDENSED | `time` option 3 | App: "Resolved within 24 hours (TIA)". |
| 5 | 28 | management | "Activate Acute Stroke Protocol", "Send patient for CT brain Acute stroke Protocol" | SAME (2 lines) | `asp` | |
| 6 | 28 | flow | Diamond "For thrombolysis": Yes, No | SAME | `lys` | |
| 7 | 28 | management | "Thrombolysis with IV Alteplase" | SAME | `alt` | No dose is printed. |
| 8 | 28 | disposition | "Admit neuromedical ward" (pink) | SAME | `nmw`, end admit | |
| 9 | 28 | flow | Diamond "CT Brain": "No ICB", "Evidence of ICB" | SAME | `ct` | |
| 10 | 28 | disposition | "Refer Neurosurgical" (uncoloured) | SAME | `ns`, end refer | |
| 11 | 28 | flow | "Cerebral vascular accident (CVA)" | SAME | `cva` (in the title) | |
| 12 | 28 | disposition | "Start Aspirin & Statin / Neuromedical review" (pink) | SAME | `cva`, end admit | No dose is printed. The printed box does not say admit; see Flow. |
| 13 | 28 | flow | "Transient Ischemic Attack", "+ CT Brain" | SAME (2 lines) | `tia` | |
| 14 | 28 | flow | Diamond "ABCD2 score": "High score ( > 3 )", "Low score ( 0 - 3 )" | SAME | `abcd` | Crop `crop=1000:320:1740:2220` of p28. The ebook prints no ABCD2 items; the app has none. |
| 15 | 28 | disposition | "Allow discharge with early Neuromedical review" (green) | SAME | `tiadc`, end discharge | |
| 16 | 29 | discharge advice | "1. Advise on compliance to antiplatelet (Aspirin)", "2. TCA stat to nearest hospital if symptom recur", "3. Control of BP and sugar", "4. Smoking and alcohol cessation", "5. Exercise and achieve ideal body weight", "6. Avoid illicit drug use", "7. Always accompanied by responsible adult in doing daily activities" | SAME (7 lines) | advice 1 to 7 | |
| 17 | 29 | reference | "1. Clinical Practice Guidelines : Management of Ischemic Stroke 3rd edition 2020. MOH/P/PAL/445.20(GU)-e", "2. Acute Stroke Protocol, Kuala Lumpur Hospital" | SAME (2 lines) | refs 1 and 2 | |
| 18 | 29 | reference | "3. National Health Service - Treatment of Transient Ischemia Attack - https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/treatment/" | CONDENSED | ref 3 | The web address is dropped. |

**LOST, MISSING, DIFFERENT:** none.

**ADDED**

- `tiadc` item: "Post-stroke work-up (echo, Holter) can be arranged through MAU FAST clinic after neuromedical review". Not on pages 28 and 29, and the line names no source. (The same statement is in the app's `outpatient-referral` entry, from the MAU FAST clinic referral criteria, MO Drive.)
- `time`: the question "How long have the symptoms lasted?" (the app's own wording for the three printed boxes).

**Flow:** the branches match. Three points on outcomes:

- The print's "High score ( > 3 )" arrow goes straight to the pink box "Start Aspirin & Statin / Neuromedical review", past the "Cerebral vascular accident (CVA)" box. The app sends a high ABCD2 score to `cva`, whose title is "CVA: start aspirin and statin, neuromedical review", so a TIA with a high score lands on an outcome headed CVA.
- The app marks `cva` as an "admit" outcome. The printed box is pink like the other admission boxes, but its words are "Start Aspirin & Statin / Neuromedical review" only.
- "Refer Neurosurgical" is an uncoloured box in the print and a "refer" outcome in the app.

**What the ebook prints.** Presentation: stroke symptoms or BEFAST positive. Signs: the six BEFAST letters. Investigations: CT brain (under the acute stroke protocol, after 9 hours, and for TIA); the ABCD2 score. Management: acute stroke protocol, thrombolysis with IV alteplase, aspirin and statin (no doses). Disposition: admit neuromedical ward, neuromedical review, refer neurosurgical, or discharge with early neuromedical review.

---

## 5. Acute cellulitis

Printed on page 30 ("Clinical Pathway for Acute Cellulitis"). App id `cellulitis`, `page:'30'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 30 | presentation | "Limb Redness" | SAME | `lead` | |
| 2 | 30 | flow | Diamond "Any life threatening signs?": Yes to Admit, NO onwards | SAME | `lts` | |
| 3 | 30 | signs | "LIFE THREATENING SIGNS": "In Sepsis/Shock", "Suspect Nectrotizing Fasciitis (bullae, severe pain)", "Suspect DVT (by history, clinical presentation, USG 2-point-compression test)", "Suspect meninggococcal rashes", "Groin/inguinal redness" | SAME (5 lines) | `lts` items 1 to 5 | Spelling corrected. |
| 4 | 30 | disposition | "Admit" (pink) | SAME | `admit` | |
| 5 | 30 | flow | Diamond "Already completed course of antibiotics": YES, NO | SAME | `abx` | |
| 6 | 30 | disposition | "Admit / Treat as Partially Treated Cellulitis" (pink) | SAME | `partial`, end admit | |
| 7 | 30 | disposition | "Manage as outpatient** IF NO other practical concern*" (green) | SAME | `pc`, `opd` | The app asks the practical concerns as a question before the outcome. |
| 8 | 30 | other | "Practical concerns :" with the same 7 lines as page 27 | SAME (7 lines) | `pc` items, `concerns` | |
| 9 | 30 | disposition | "CONSIDER ADMISSION IF HAVE POINTS ABOVE" | SAME | `pcadmit` | |
| 10 | 30 | discharge advice | "1. Discharge with antibiotics & symptomatic relief medicine", "2. TCA EMwatch/EMACC/PC clinic/KK", "3. To come to nearest health facility if worsening condition" | SAME (3 lines) | advice 1 to 3, `opd` items | |

The page prints no reference list. The "**" on "Manage as outpatient**" has no footnote on the page.

**LOST, MISSING, DIFFERENT:** none.

**ADDED**

- `opd` `gap`: "The ebook does not name an antibiotic for outpatient cellulitis. If IV antibiotics are planned and no bed is free, see the IV antibiotic / CCA memo (30 Jun 2026)." The second sentence points to a department memo; it is labelled with the memo and its date.
- `pcadmit` item: "The ebook advises considering admission when any practical concern is present." (the app's own sentence).
- Reference: "HKL ED Clinical Pathway ebook, p30". The page prints none.

**Flow:** matches. The print draws an arrow from the green outpatient box down to the practical concerns box; the app asks the concerns first and then gives the outpatient outcome. No branch is changed.

**What the ebook prints.** Presentation: limb redness. Signs: the five life-threatening signs. Investigations: not printed (the "USG 2-point-compression test" is named inside a sign). Management: antibiotics and symptomatic relief medicine on discharge; no drug is named. Disposition: admit, admit as partially treated cellulitis, or manage as outpatient.

---

## 6. Dengue fever

Printed on pages 31 and 32 ("Clinical Pathway For Dengue Fever"). App id `dengue`, `page:'31–32'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 31 | presentation | "Fever with positive dengue serology / clinically dengue" | SAME | `lead` | |
| 2 | 31 | signs | "Signs of shock": "Delayed CRT > 2 sec", "Poor pulse volume", "Shock index > 1", "Hypotension" | SAME (4 lines) | `shock` items 1 to 4 | Crop `crop=1100:400:1750:480` of p31. |
| 3 | 31 | flow | Diamond "Sign of shock": Yes, No | SAME | `shock` | |
| 4 | 31 | flow | "Triage to critical area", "Dengue shock" | SAME (2 lines) | `ds` (title) | Two printed boxes, one step in the app. |
| 5 | 31 | management | "Start bolus as per protocol (refer to algorithm A & B ) / Urgent referral to medical and anaest team" | SAME | `ds` items 1 and 2 | Algorithms A, B and C are named but not printed on pages 31 and 32. The app's ebook pathway does not have them either. |
| 6 | 31 | flow | Diamond "Clinical improvement": Yes to "Admit critical care area", No to "Consider other cause of shock (Algorithm C)" | SAME | `imp`, `other` | |
| 7 | 31 | disposition | "Admit critical care area" (pink, two boxes) | SAME | `cca`, end admit | |
| 8 | 31 | flow | Diamond "Presence of dengue warning sign": Yes, No | SAME | `warn` | |
| 9 | 31 | management | "Dengue with warning sign", "Start graded bolus as per protocol" | SAME (2 lines) | `gb` | Reached in the app only after the added question `owq`: see ADDED and Flow. |
| 10 | 31 | disposition | "Refer medical for admission" (pink) | SAME | `med`, end admit | |
| 11 | 31 | discharge criteria | "Dengue with no warning sign", then "Fulfill criteria to be treated at home": "1. Able to tolerate orally well, good urine output, no history of bleeding", "2. No warning sign", "3. Stable serial HCT", "4. No other criteria for admission (co-morbidities, pregnancy, social factor)"; No to "Refer medical for admission", Yes to discharge | SAME (4 lines) | `home` items 1 to 4, `check:'all'` | Crop `crop=1300:800:1500:1700` of p31. |
| 12 | 31 | disposition | "Discharge with dengue monitoring record and home care advice" (green) | SAME | `dc`, end discharge | |
| 13 | 31 | other | "Important points": "In obese patient (BMI > 27.5 kg/m2) use adjusted body weight", "Adjusted body weight = Ideal body weight + 0.4 ( actual weight - ideal body weight )" | SAME (2 lines) | table "Important points", rows 1 and 2 | Crop `crop=1500:760:1100:2980` of p31. |
| 14 | 31 | other | "Ideal body weight formula : Female : 45.5 kg + 0.98 (height in cm - 152 )" | DIFFERENT | table "Important points", row 3 | App: 0.91. |
| 15 | 31 | other | "Male : 50.0 kg + 0.91 ( height in cm - 152 )" | SAME | table "Important points", row 4 | Same crop. |
| 16 | 32 | signs | "Warning signs": "1. Abdominal pain / tenderness", "2. Persistent vomiting ( > 2 times over 24 hours )", "3. Persistent diarrhoea ( > 2 times over 24 hours )", "4. Third space fluid accumulation (ascites, pleural or pericardial effusion)", "5. Spontaneus bleeding tendency", "6. Tender liver", "7. Lethargy / restlessness / confusion" | SAME (7 lines) | `warn` items 1 to 7 | Crop `p32_00`. |
| 17 | 32 | signs | "8. Raised HCT with rapid drop in platelet" with "Male < 60 years : 46%", "Male > 60 years : 42%", "Female : 40%" | SAME (4 lines) | `warn` item 8 | Crop `p32_00`. |
| 18 | 32 | discharge advice | "Do's": "1. Adequate bed rest", "2. Adequate fluid intake (more than 8 glasses or 2 liters for average person)", "3. Take paracetamol (not more than 4 gram / day)", "4. Tepid sponging" | SAME (4 lines) | advice 1 to 4 | Crop `p32_10`. |
| 19 | 32 | discharge advice | "5. If possible. use mosquito repellent or rest under mosquito net even during day time to prevent mosquito biites" | LOST | advice 5 | "If possible" is dropped (and the reason, "to prevent mosquito bites"). |
| 20 | 32 | discharge advice | "6. Look for mosquito breeding places in and around the home and eliminate them" | SAME | advice 6 | |
| 21 | 32 | discharge advice | "Don'ts": "1. Dont take NSAID (painkillers). If you already take this medication, please consult your doctor", "2. Antibiotic not required", "3. Do not massage / cupping / quasa" | SAME (3 lines) | advice 7 to 9 | |
| 22 | 32 | reference | "1. Clinical Practice Guidelines : Management of Dengue Infection in Adult (Third Edition 2015) MOH/P/PAK/302.15(GU)" | SAME | ref 1 | |

**LOST, MISSING, DIFFERENT in full**

- Row 14, DIFFERENT (page 31, crop `crop=1500:760:1100:2980` of `sources/ebook-pages-hi/p31.png`).
  Print: "Female : 45.5 kg + 0.98 (height in cm - 152 )"
  App: "Ideal body weight, female" : "45.5 kg + 0.91 × (height in cm − 152)"
  The print gives 0.98 for the female formula and 0.91 for the male formula. The app gives 0.91 for both.
- Row 19, LOST (page 32, crop `p32_10`). Print: "5. If possible. use mosquito repellent or rest under mosquito net even during day time to prevent mosquito biites". App: "Do: use mosquito repellent or rest under a mosquito net, even in the daytime".

**ADDED**

- `med` item: "Dengue fever is an exclusion for MAU admission". Not on pages 31 and 32, and the line names no source.
- From another document, labelled as such: the question `owq` ("Eligible for direct admission to the Observation Ward (OW)?", five conditions, hint "Department memo, 23 Mar 2023") and the outcome `ow` ("Admit directly to the Observation Ward (OW)", `gap`: "Not in the ebook: from memo HKL/JK/98/188/3(6)23, 23 Mar 2023."). Both are in the ebook pathway's own node list in `data.js`, not in a department note.

**Flow:** the printed boxes and arrows are all there, with one inserted branch. In the print, "Presence of dengue warning sign: Yes" leads to "Dengue with warning sign", "Start graded bolus as per protocol" and "Refer medical for admission". In the app, Yes leads first to the memo question `owq`; a patient who meets its five conditions ends at `ow` (Observation Ward) and does not reach the printed graded bolus and medical referral boxes. The app labels the question and the outcome as coming from the memo.

**What the ebook prints.** Presentation: fever with positive dengue serology, or clinically dengue. Signs: four signs of shock; eight warning signs with the HCT thresholds. Investigations: not printed as a list (serology, serial HCT and platelets are named). Management: bolus as per protocol (algorithms A and B, not printed here), graded bolus as per protocol, urgent referral to the medical and anaesthetic teams; the adjusted body weight formulas. Disposition: admit critical care area, refer medical for admission, or discharge with the dengue monitoring record and home care advice.

---

## 7. Deep vein thrombosis

Printed on pages 33 to 35 (page 33 "Clinical Pathway For Lower Limb Deep Vein Thrombosis", page 34 its Wells score, doses and advice, page 35 "Clinical Pathway For Upper Limb Deep Vein Thrombosis"). App id `dvt`, `page:'33–35'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 33 | presentation | "Suspected lower limb DVT in ED" | SAME | `lead`, `limb` option 1 | |
| 2 | 33 | flow | "Risk stratification (Wells Score)" with "HIGH RISK", "MODERATE RISK", "LOW RISK" | SAME | `wells` | |
| 3 | 33 | management | "Start interim anticoagulant while waiting for D-dimer for moderate and high risk" (italic note between the high and moderate arms) | CONDENSED | `ddm` item, `cp` item | The app puts it on both arms: "Start interim anticoagulant while waiting for D-dimer (moderate and high risk)" on the moderate arm, "Start interim anticoagulant while waiting (high risk)" on the high arm, which has no D-dimer in the print. No drug is named for the interim anticoagulant in the print or the app. |
| 4 | 33 | investigation | High risk: "2-point compression test", diamond "+VE": Yes to "*DVT confirmed", No to "Send for formal ultrasound" | SAME | `cp`, `cpq` | |
| 5 | 33 | investigation | Moderate risk: "D-Dimer"; low risk: "D-Dimer"; one shared diamond "+VE": Yes to "2-point compression test", No to "***Discharge with advice" | SAME | `ddm`, `dd`, `ddq` | |
| 6 | 33 | investigation | Second "2-point compression test", diamond "+VE": Yes to "*DVT confirmed", No to "Send for formal ultrasound" | SAME | `cp2`, `cpq` | |
| 7 | 33 | investigation | "Send for formal ultrasound", diamond "+VE": Yes to "*DVT confirmed", No to "**Consider other diagnosis / Stop interim anticoagulant" | SAME | `us`, `usq` | |
| 8 | 33 | disposition | "*DVT confirmed" (pink) | SAME | `dvt` | The app marks it "admit" and notes that the ebook states no disposition. |
| 9 | 33 | disposition | "**Consider other diagnosis / Stop interim anticoagulant" (uncoloured) | SAME | `other`, end neutral | |
| 10 | 33 | disposition | "***Discharge with advice" (green) | SAME | `kk`, end discharge | |
| 11 | 34 | signs | Wells table, 10 lines with points: "Active cancer" 1, "Immobility >3 days OR major surgery ≤4 weeks" 1, "Calf swelling >3 cm compared with other calf" 1, "Collateral (nonvaricose) superficial veins present" 1, "Entire leg swollen" 1, "Localized tenderness along deep venous system" 1, "Pitting edema, greater in symptomatic leg" 1, "Paralysis, paresis, or recent plaster immobilization of the lower extremity" 1, "Previously documented DVT" 1, "Alternative diagnosis to DVT as likely or more likely" -2 | SAME (10 lines) | `wells` items 1 to 10 | Crops `p34_00` (text) and `p34_01` (points). |
| 12 | 34 | signs | "-2–0 Low risk for DVT", "1–2 Moderate risk for DVT", "≥3 High risk for DVT" | SAME (3 lines) | `wells` options | Crop `p34_10`. |
| 13 | 34 | reference | "Adapted from: [author] et al. World J Emerg Surg. 2016;11:24." | SAME | ref 1 | |
| 14 | 34 | drug table | "*Start SC Fondaparinux (if creatinine clerance >30); <50kg - 5 mg, once a day / 50-100kg - 7.5mg, once a day / >100 kg - 10mg, once a day" | SAME (4 lines) | `dvt` item 1 | Crops `p34_10` and `p34_11`. |
| 15 | 34 | drug table | "or / Start SC Clexane ; 1mg/kg every 12 hours (creatinine clearance >30) / 1mg/kg, once a day (creatinine clearance <30)" | SAME (3 lines) | `dvt` item 2 | Crops `p34_10` and `p34_11`. |
| 16 | 34 | drug table | "Consult EP in obese patient" | SAME | `dvt` item 3 | |
| 17 | 34 | footnote | "**Admit to the ward after consider other diagnosis" | SAME | `other` item | |
| 18 | 34 | footnote | "***Discharge to nearest Klinik Kesihatan with advice" | SAME | `kk` title | |
| 19 | 34 | discharge advice | "1.Return to hospital if increase of swelling", "2.Return to hospital if develop shortness of breath" | SAME (2 lines) | advice 1 and 2 | |
| 20 | 35 | presentation | "† Suspected Upper Limb DVT" | SAME | `lead`, `limb` option 2 | |
| 21 | 35 | investigation | "Compression ultrasound from basilic & brachial veins to axillary veins", diamond "+VE": Yes to "*DVT confirmed", No to "CT Venography" | SAME | `ul`, `ulq` | |
| 22 | 35 | investigation | "CT Venography", diamond "+VE": Yes to "*DVT confirmed", No to "**Consider other diagnosis" | SAME | `ctv`, `ctq` | The No arm lands on the shared outcome `other`: see ADDED. |
| 23 | 35 | signs | "† Clinical signs of DVT with presence of risk factors:" "1. In-dwelling catheter", "2. Old age", "3. Malignancy", "4. Hormonal therapy", "5. Pregnancy", "6. Trauma", "7. Immobilisation", "8. Obesity", "9. Previous history of DVT" | SAME (10 lines) | `ul` item | Crop `p35_20`. |
| 24 | 35 | drug table | The fondaparinux and Clexane box again, with "Consult EP in obese patient" and "**Admit to the ward after consider other diagnosis" | SAME | `dvt` items, `other` item | Same words and numbers as page 34 (crop `p35_21`). The app holds them once. |
| 25 | 35 | reference | "1.https//:coreem.net > core > deep > venous > thrombosis > dvt", "2.NHS Kent and Medway: Pathway for the management of DVT in primary care." | SAME (2 lines) | refs 2 and 3 | |

**LOST, MISSING, DIFFERENT:** none.

**ADDED**

- `limb`: the question "Which limb?". The ebook prints two separate charts; the app joins them with a question of its own.
- `other` reached from the upper limb chart: the app's outcome reads "Consider other diagnosis and stop interim anticoagulant". On page 35 the box reads "**Consider other diagnosis" only, and the upper limb chart mentions no interim anticoagulant.
- `dvt` title: "DVT confirmed: start anticoagulation" (the print's box reads "*DVT confirmed"; "Start" is from the footnote).
- `dvt` `gap`: "The ebook does not state the disposition after a confirmed DVT." (the app's own note).

**Flow:** matches both printed charts, box for box. Outcome kinds: "*DVT confirmed" is pink in the print and "admit" in the app, with the app's note that the ebook states no disposition; "**Consider other diagnosis" is uncoloured in the print and "neutral" in the app; "***Discharge with advice" is green and "discharge".

**What the ebook prints.** Presentation: suspected lower limb DVT in ED; suspected upper limb DVT. Signs: the Wells score; for the upper limb, clinical signs of DVT with nine risk factors. Investigations: D-dimer, 2-point compression test, formal ultrasound; compression ultrasound and CT venography for the upper limb. Management: interim anticoagulant while waiting; SC fondaparinux by weight or SC Clexane by creatinine clearance; consult EP in an obese patient. Disposition: discharge to the nearest Klinik Kesihatan with advice, or admit to the ward after considering other diagnoses; none is printed for a confirmed DVT.

---

## 8. Heart failure

Printed on pages 36 and 37 ("Clinical Pathway For Heart Failure"). App id `heart-failure`, `page:'36–37'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 36 | presentation | "Suspect Heart Failure" | SAME | `lead` | |
| 2 | 36 | investigation | "Rapid ABC assessment / Focus History and Physical examination / Investigation - FBC /RP/ Trop T/ Serial ECG/ CXR / Consider Cardiac/Lung PoCUS" (grey box) | SAME (4 lines) | `lead` | In the app this is the line under the title, not a step in the runner. |
| 3 | 36 | flow | Diamond "Severe Respiratory Distress (Severe Congestion)": Yes, No | SAME | `rd` | |
| 4 | 36 | management | Heading "Initial Stabilization" (red frame round the two boxes below) | CONDENSED | `hr1`, `hr2` | The heading is not in the app; the two boxes are the items of the two high-risk outcomes. |
| 5 | 36 | management | "Secure ABC / O2 supplement / Consider NIV / HACOR score / If failed NIV consider intubation / If Hypertensive, IVI GTN / IV Diuretics / Find and treat Triggers / ICU/CCU admission" | SAME (9 lines) | `hr1` items 1 to 6 | Crop `crop=720:1350:180:530` of p36. No dose is printed. |
| 6 | 36 | flow | Diamond "Hypotensive (Low Flow state)": Yes, No | SAME | `hypo` | |
| 7 | 36 | management | "O2 supplement / Start vasopressor/inotropes / IV diuretics once perfusion improves / Refer CCU / Find and treat Triggers / ICU/CCU admission" | SAME (6 lines) | `hr2` items 1 to 6 | Same crop. |
| 8 | 36 | disposition | "High Risk", "ICU/CCU" (pink) | SAME | `hr1`, `hr2`, end admit | |
| 9 | 36 | flow | "Stable Heart Failure", diamond "Congestion": Yes to "Warm Wet" and "Moderate Risk", No to "Warm Dry" and "Low Risk" | SAME | `cong` | |
| 10 | 36 | management | "O2 supplement / IV diuretics", "Identify heart failure triggers with specific treatment", "Emergency Observation" | SAME (3 boxes) | `mod` items 1 to 4 | |
| 11 | 36 | flow | Diamond "Recovery": Yes to "*Safe Discharge Criteria", No to "Medical Admission" | SAME | `rec` | |
| 12 | 36 | disposition | "Medical Admission" (pink) | SAME | `madm`, end admit | |
| 13 | 36 | flow | "*Safe Discharge Criteria" (a box, with one arrow out) | SAME | `dc` | The app makes it a question with a second exit: see ADDED and Flow. |
| 14 | 36 | disposition | "Discharge with follow up with primary team for cardiac work up" (green) | SAME | `home`, end discharge | |
| 15 | 37 | discharge criteria | "* Safe Discharge Criteria": "Normal BP and HR" AND "Good diuresis" AND "Rapid resolution of symptoms in ED" AND "Normal RP/ Hb/ Troponin- ECG" AND "Low + Heart Failure Mortality Risk Grade (EHMRG) score" | SAME (5 lines) | `dc` items 1 to 5, `check:'all'` | Crop `crop=1150:1150:330:350` of p37. |
| 16 | 37 | footnote | "+ EHMRG score can be accessed through Mdcalc" | SAME | `dc` item 5 | |
| 17 | 37 | discharge advice | "1 . Advice on heart failure diet restriction (low sodium, carbohydrate,and sugar diet)", "2. Advice on lifestyle change (exercise/ stop smoking and alcohol intake)", "3. Return to hospital immediately if worsening heart failure symptoms", "4. Emphasis on good comorbids control and compliance to medications" | SAME (4 lines) | advice 1 to 4 | |
| 18 | 37 | reference | "1. [authors]. Prospective validation of the emergency heart failure mortality risk grade for acute heart failure: the ACUTE study. Circulation. 2019 Feb 26;139(9):1146-56." | CONDENSED | ref 1 | Title shortened; one author and "et al." kept. |
| 19 | 37 | reference | "2. Clinical Practice Guidelines Management of Heart Failure 2023 (5th edition); NHAM" | SAME | ref 2 | |
| 20 | 37 | reference | "3. [authors]. 2022 AHA/ACC/HFSA guideline for the management of heart failure: a report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Journal of the American College of Cardiology. 2022 May 3;79(17):e263-421." | CONDENSED | ref 3 | Authors and subtitle dropped. |

**LOST, MISSING, DIFFERENT:** none.

**ADDED**

- `dc` option "Not all met" leading to `madm` (medical admission). The print shows no arrow for a patient who does not meet the safe discharge criteria.
- `home` item: "CCF work-up can be referred to MAU FAST clinic with CXR and ECG". Not on pages 36 and 37, and the line names no source. (The same statement is in the app's `outpatient-referral` entry, from the MAU FAST clinic referral criteria, MO Drive.)
- `dc` item 5: "Emergency" before "Heart Failure Mortality Risk Grade" (the print's criterion line has no "Emergency"; its first reference does).

**Flow:** one mismatch. "*Safe Discharge Criteria" is a plain box in the print with a single arrow to the green discharge box. The app makes it a five-item check with two exits and sends "Not all met" to medical admission, a branch the print does not draw. Everything else matches: the app carries the two "Initial Stabilization" boxes as the items of its two high-risk outcomes.

**What the ebook prints.** Presentation: suspected heart failure. Signs: severe respiratory distress (severe congestion), hypotension (low-flow state), congestion (warm wet or warm dry). Investigations: FBC, RP, Trop T, serial ECG, CXR; consider cardiac and lung PoCUS; the HACOR and EHMRG scores are named. Management: the two stabilisation boxes; O2 supplement and IV diuretics; treat triggers; emergency observation. No dose is printed. Disposition: ICU or CCU, medical admission, or discharge with follow-up with the primary team.

---

## 9. Hypertensive urgency

Printed on pages 38 to 40 ("Clinical Pathway For Hypertensive Urgency"). App id `hypertensive-urgency`, `page:'38–40'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 38 | definition | "Severe hypertension BP > 180/110mmHg" | SAME | `lead` | Crop `crop=1800:1200:780:300` of p38. |
| 2 | 38 | flow | Diamond "Presents with new or progressive target organ damage*": Yes to "Hypertensive emergency", No to "Hypertensive urgency" | SAME | `tod` | |
| 3 | 38 | signs | "*Target organ damage:" "Acute coronary symptoms", "Acute aortic dissection", "Hypertensive encephalopathy", "Intracranial haemorrhage /ischaemic stroke", "Acute renal failure", "Eclampsia / Preeclampsia" | SAME (6 lines) | `tod` items 1 to 6 | Crop `crop=700:900:130:1440` of p38. |
| 4 | 38 | disposition | "Hypertensive emergency" (uncoloured) | SAME | `emerg`, end refer | The box prints nothing more; see ADDED. |
| 5 | 38 | management | "Hypertensive urgency", then "Rest in quiet place (isolated if possible) / No active talking/ listening / Address acute pain or emotional distress / Check BP every 30 minutes for 2 hours" | SAME (4 lines) | `rest` | |
| 6 | 38 | flow | Diamond 1: "BP reduction achieved? 10-20 mmHg reduction/ no less 160/100mmHg": Yes to discharge, No onwards | SAME | `q1` and its hint, `lead` | Crop `crop=1800:1200:780:1450` of p38. |
| 7 | 38 | management | "Start antihypertensive medication (monotherapy) a / Continue non pharmalogical intervention / Check BP every 30 minutes for 2 hours", with "a. Refer Table 1.0" | SAME (4 lines) | `mono` | |
| 8 | 38 | flow | Diamond 2: "BP reduction achieved? 10-20 mmHg reduction / no less 160/100 mmHg" | CONDENSED | `q2` | The app's second question reads "BP reduction achieved?" without the target; the target is in the `lead` and on `q1`. |
| 9 | 38 | flow | "Newly diagnosed Hypertension", "Chronic Hypertension" | SAME (2 lines) | `type` | |
| 10 | 38 | management | "Optimised monotherapy dosing / Check BP every 30 minutes for 2 hours" | SAME | `opt` | Crop `crop=2100:1150:400:2600` of p38. |
| 11 | 38 | management | "Consider combination therapy / Continue POM if available b / Check BP every 30 miunutes for 2 hours", with "b. ACEi + CCB / ACEi + Thiazide diuretics / ARBs + CCB / ARBs + Thiazide diuretics" | SAME (7 lines) | `comb` | Same crops. |
| 12 | 38 | flow | Diamond 3: "BP reduction achieved? 10-20 mmHg reduction / no less 160/100 mmHg": No, Yes | CONDENSED | `q3` | As row 8. |
| 13 | 38 | disposition | "Refer medical for antihypertensive optimisation" (pink) | SAME | `refer`, end refer | |
| 14 | 38 | disposition | "Allow discharge with care bundle plan" (green) | SAME | `home`, end discharge | |
| 15 | 39 | drug table | "Table 1.0 Antihypertensive medication in ED": header (Drug, Type, Starting Dose, Onset (hours), Maximum dose, Peak concentration (hours)) and 12 rows: Captopril, Perindopril, Amlodipine, Felodipine, Nifedipine, Frusemide, Hydrochlorothiazide, Losartan, Valsartan, Atenolol, Metoprolol, Bisoprolol | SAME (13 lines) | table "Table 1.0: antihypertensives in ED" | All 60 cells checked on crop `crop=1960:1250:370:600` of p39: every dose, frequency, onset, maximum and peak is the same. |
| 16 | 39 | drug table | Key: orange block "Preferred" (Captopril to Hydrochlorothiazide, 7 drugs) | SAME | the same 7 rows carry "*" | |
| 17 | 39 | drug table | "Table 1.1 : Contraindications to be considered for use of selected antihypertensive drugs": "Diuretics (thiazide/ thiazide – like)": compelling "Gout"; possible "Metabolic syndrome", "Glucose intolerance", "Pregnancy", "Hypercalcaemia", "Hypokalaemia" | SAME | table "Table 1.1", row 1 | Row label shortened to "Thiazide diuretics". Crops `crop=1500:900:440:2040` and `crop=1500:900:1300:2040` of p39. |
| 18 | 39 | drug table | "Beta blockers": compelling "Asthma", "Any high- grade SA/AV nodal block", "Bradycardia HR<60bpm"; possible "Metabolic syndrome", "Glucose intolerance", "Athletes and physically active patients" | LOST | table "Table 1.1", row 2 | App: "athletes". "and physically active patients" is dropped. |
| 19 | 39 | drug table | "Calcium channel blockers": possible "Tachyarrythmia", "Heart failure ( HFrEF, stage III, IV)", "Preexisting severe leg oedema" | LOST | table "Table 1.1", row 3 | App: "severe leg oedema". "Preexisting" is dropped. |
| 20 | 39 | drug table | "ACE inhibitors": compelling "Pregnancy", "Previous angioneurotic oedema", "Hyperkalaemia K+>5.5", "Bilateral renal artery stenosis"; possible "Women of child- bearing potential" | SAME | table "Table 1.1", row 4 | Crop `crop=1500:950:440:2880` of p39. |
| 21 | 39 | drug table | "Angiotensin receptor blocker": compelling "Pregnancy", "Hyperkalaemia ( K+> 5.5)", "Bilateral renal artery stenosis"; possible "Women of child -bearing potential" | SAME | table "Table 1.1", row 5 | Same crop. |
| 22 | 39 | footnote | "Adopted from ESC/ESH Guidelines 2018 for man" (beside Table 1.1; the line runs off the page edge) | MISSING | not on the table | "ESC/ESH Guidelines 2018" is in the app's references, but the table itself carries no source line. |
| 23 | 40 | discharge advice | "1. Blood pressure monitoring": "Home BP monitoring (if available) OR check by healthcare provider at least 3 times per week and record value." | SAME | advice 1 | Crops `crop=1400:900:290:480` and `crop=1400:600:1300:480` of p40. |
| 24 | 40 | discharge advice | "If BP > 180/110 mmHg , repeat after 5 minutes in a well rested condition. If second reading is higher or same as first one, OR have symptoms, seek medical help." | SAME | advice 2 | Same crops. |
| 25 | 40 | discharge advice | "2. Medication": "Take anti-hypertensive as prescribed.", "Ensure sufficient medication supply until next prescription renewal." | SAME (2 lines) | advice 3 | |
| 26 | 40 | discharge advice | "3. Follow up care": "Adhere to clinic follow up appointment. (EmWatch follow up the next day )", "Bring any memo/ referral/ current medications during follow-up." | SAME (2 lines) | advice 4 | |
| 27 | 40 | discharge advice | "4. When to call 999": "If experience chest pain, difficulty to breath or altered mental status, please call 999 or go to the nearest medical centre." | SAME | advice 5 | |
| 28 | 40 | discharge advice | "5. Lifestyle modifications": "Healthy eating with diet rich in fruits, vegetables and low-fat dairy products. Reduce salt intake and red meat.", "Smoking cessation.", "Regular aerobic exercise and body weight control." | SAME (3 lines) | advice 6 | |
| 29 | 40 | discharge advice | "Reduce alcohol consumption and avoid binge drinking." | LOST | advice 6 | App: "limit alcohol". "avoid binge drinking" is dropped. |
| 30 | 40 | reference | "1. [authors], VA NEPHRON-D Investigators. Combined angiotensin inhibition for the treatment of diabetic nephropathy. NEngl J Med 2013;369:1892–1903." | CONDENSED | ref 1 | Authors and title dropped. |
| 31 | 40 | reference | (unnumbered) "ONTARGET Investigators, [authors]. Telmisartan, ramipril, orboth in patients at high risk for vascular events. N Engl J Med 2008;358:1547–1559." | CONDENSED | ref 2 | Authors and title dropped. |
| 32 | 40 | reference | "2.CPG Hypertension Malaysia 2018", "3.ESC/ ESH Guidelines 2018", "4. MIMS 2023" | SAME (3 lines) | refs 3 to 5 | |

**LOST, MISSING, DIFFERENT in full**

- Row 18, LOST (page 39, crop `crop=1500:900:1300:2040`). Print, beta blockers, possible: "Metabolic syndrome / Glucose intolerance / Athletes and physically active patients". App: "Metabolic syndrome, glucose intolerance, athletes".
- Row 19, LOST (page 39, crops `crop=1500:950:440:2880` and `crop=1500:950:1300:2880`). Print, calcium channel blockers, possible: "Tachyarrythmia / Heart failure ( HFrEF, stage III, IV) / Preexisting severe leg oedema". App: "Tachyarrhythmia, heart failure (HFrEF stage III–IV), severe leg oedema".
- Row 22, MISSING (page 39, crop `crop=1500:900:1300:2040`). Print: "Adopted from ESC/ESH Guidelines 2018 for man" (cut off by the page edge after "man"). App: no source line on Table 1.1.
- Row 29, LOST (page 40). Print: "Reduce alcohol consumption and avoid binge drinking." App, advice 6: "Healthy eating: fruit, vegetables, low-fat dairy; less salt and red meat; stop smoking; limit alcohol; regular aerobic exercise and weight control".

**ADDED**

- `home` item: "Young hypertension for investigation: refer to Physician's Clinic HKL". Not on pages 38 to 40, and the line names no source. (The app's `outpatient-referral` entry, from the draft Physician's Clinic referral criteria in the MO Drive, covers the same clinic.)
- `emerg` item: "Manage as hypertensive emergency". The printed box reads "Hypertensive emergency" and nothing else.

**Flow:** matches the printed chart: the start box, four diamonds, the two branches for newly diagnosed and chronic hypertension, and three outcomes. "Hypertensive emergency" is an uncoloured box in the print and a "refer" outcome in the app. The print does not say what the "care bundle plan" is; the app does not either.

**What the ebook prints.** Presentation: severe hypertension, BP over 180/110 mmHg. Signs: six kinds of target organ damage. Investigations: not printed. Management: rest and recheck, monotherapy (Table 1.0), optimised monotherapy or combination therapy, each with BP every 30 minutes for 2 hours; the target of a 10 to 20 mmHg reduction, no less than 160/100 mmHg; Table 1.1 of contraindications. Disposition: hypertensive emergency, refer medical for antihypertensive optimisation, or discharge with care bundle plan.

---

## 10. Hyperglycaemia

Printed on pages 41 and 42 ("Clinical Pathway For Hyperglycemia"). App id `hyperglycaemia`, `page:'41–42'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 41 | definition | "Hyperglycaemia / BG>7.8mmol/L inpatient with no history of DM / or Random BG> 11 mmol/L" | SAME | `lead` | Crop `p41_00`. |
| 2 | 41 | signs | DKA diamond: "Capillary BG > 11mmol/L", "Capillary ketone > 3mmol OR urine ketone > 2+", "Venous pH < 7.3", "or HCO3 < 15"; Yes to "DKA" | SAME (4 lines) | `crisis` info 1 | Crop `p41_00`. The app writes "3 mmol/L" where the print has "3mmol". |
| 3 | 41 | signs | HHS diamond: "Capillary BG > 30mmol/L", "pH > 7.3, HCO3 > 15mmol/l", "Normal/ nil urine or serum ketone"; Yes to "HHS" | SAME (3 lines) | `crisis` info 2 | Crop `p41_01`. |
| 4 | 41 | signs | HHS diamond: "Serum osmolarity > 320mOsm/kg" | DIFFERENT | `crisis` info 2 | App: "serum osmolality over 320 mOsm/kg". The number and unit are the same; the word differs. |
| 5 | 41 | disposition | "DKA", "HHS" (two uncoloured boxes) | SAME (2 lines) | `dka`, `hhs` | The boxes print nothing more. The app marks both "admit" and adds a line: see ADDED. |
| 6 | 41 | flow | "No", then diamond "Pre - existing Diabetes?": Yes, No | SAME | `dm` | |
| 7 | 41 | flow | "BG > 10mmol/L / Asymptomatic" | SAME | `known` (title) | |
| 8 | 41 | management | "1. Restart old medication if known", "2. If unsure/unknown, start basal bolus insulin regime based on TDD requirement (Table1.0)" | SAME (2 lines) | `known` items 1 and 2 | Crop `p41_10`. |
| 9 | 41 | management | "3. May consider IV fluids only if signs dehydration present" | LOST | `known` item 3 | App: "IV fluids only if signs of dehydration". "May consider" is dropped. |
| 10 | 41 | management | "4. Capillary BG hourly", "5. Aim BG 7.8 – 10mmol/L" | SAME (2 lines) | `known` items 4 and 5 | Crop `p41_10`. |
| 11 | 41 | flow | "Post 4 hours": "BG > 15mmol/ L", "BG < 10mmol/L" to "Discharge with action plan" (green) | SAME | `k4`, `khome` | Crop `p41_10`. Neither the print nor the app has a branch for a BG between 10 and 15 at this step. |
| 12 | 41 | management | "1. Consider top up dose (call ED pharmacist during OH), or start IVI insulin", "2. BG hourly" | SAME (2 lines) | `top` | The app writes "OH" as "office hours". |
| 13 | 41 | flow | "Post 4hours": "BG > 10mmol/L" to "Admit" (pink) | SAME | `k8`, `kadm` | Crop `p41_20`. The app adds a second exit: see ADDED. |
| 14 | 41 | flow | No pre-existing diabetes: "BG>20mmol/l", "BG 15- 20mmol/L", "BG< 15mmol/L" | SAME (3 lines) | `bg` | Crops `p41_10`, `p41_11`. |
| 15 | 41 | management | "1. Start S/C insulin", "2. BG hourly until stable", "3. Aim 7.8-10mmol/L" | SAME (3 lines) | `sc` | Crop `p41_10`. |
| 16 | 41 | management | "Post 4hours": "1. If BG increasing in trend, start IVI insulin", "2. Search reversible causes", "3. Continue hourly BG check", to "Admit" (pink) | SAME (3 lines) | `sc4`, `ivi`, end admit | Crop `p41_20`. |
| 17 | 41 | disposition | "Post 4hours": "BG decreasing in trend" to "Allow discharge with PO MTF" (green) | SAME | `sc4`, `scdc` | Crop `p41_21`. The app adds a memo line here: see ADDED. |
| 18 | 41 | management | "1. Start PO MTF 500mg OD for 1 week if no contraindication*", "2. If contraindicated for MTF, to call ED pharmacy for substitute", "3. Memo to KK/ primary care to review", to "Discharge with action plan" (green) | SAME (3 lines) | `mtf` | Crop `p41_11`. |
| 19 | 41 | disposition | "Refer KK/ Primary care as outpatient for DM workup" to "Discharge with action plan" (green) | SAME | `kk` | |
| 20 | 41 | drug table | "* Contraindication for MTF :" "1. Decompensated heart failure", "2. Renal disease egfr < 45ml/min/1.73m2", "3. Chronic liver disease", "4. Hypoperfusion", "5. Lactic acidosis", "6. COPD" | SAME (6 lines) | table "Contraindications for metformin" | Crop `p41_21`. |
| 21 | 41 | footnote | "BG : blood glucose, MTF : Metformin , IVI : infusion" | MISSING | none | The app writes metformin in full; BG and IVI are used without a key. |
| 22 | 42 | drug table | "Table 1.0 Calculation of daily insulin doses": "Total daily insulin dose (unit/ kg/ day)" against "Patient profile": "0.2 - 0.3" "Elderly, renal failure, risk of hypoglycaemia"; "0.4" "Not meeting the above criteria, BG is 7.8 - 11.1mmol/L"; "0.5" "Not meeting the above criteria, BG is 11.2 - 22.2mmol/L" | SAME (3 lines) | table "Table 1.0: total daily insulin dose" | Crops `p42_00`, `p42_01`. |
| 23 | 42 | reference | "Adopted from Practical Guide to Inpatient glycaemic care 2nd edition 2020. Malaysian Endocrine & Metabolic Society" | SAME | ref 1 | |
| 24 | 42 | discharge advice | "Discharge Plan" 1: "If starting on Metformin, advice patients on potential side effects such as nausea, anorexia, diarrhoea (usually mild). These are minimised if metformin is taken together with/or after meals." | SAME | advice 1 | |
| 25 | 42 | discharge advice | "2. If self -test glucose monitoring available at home, to document blood sugar trend for reference in the next TCA.", "3. Ensure memo and medication is given upon discharge.", "4. To educate patient and caretaker on signs or symptoms of hyperglycaemia and hypoglycaemia." | SAME (3 lines) | advice 2 to 4 | |
| 26 | 42 | discharge advice | "5. If high index of suspicion for Type 1 diabetes, referral to endocrine team is required." | CONDENSED | advice 5 | App: "If Type 1 diabetes is suspected, refer to the endocrine team". |
| 27 | 42 | discharge advice | "Discharge Advice" 1: "Adherence to medications and follow ups is vital to prevent severe complication of hyperglycaemia" | CONDENSED | advice 6 | App: "Adherence to medication and follow-up"; the reason is dropped. |
| 28 | 42 | discharge advice | "2. Healthy lifestyle modifications are encouraged for good glycaemic control (e.g. improved diet, increased physical activity, cessation of smoking)." | LOST | advice 6 | App: "healthy lifestyle". The three examples are dropped. |
| 29 | 42 | discharge advice | "3. Seek immediate medical help / call 999 if develop signs or symptoms of hyperglycaemic crises such as: - severe dehydration - lethargy - persistent vomiting or abdominal pain - confusion - seizures" | SAME (6 lines) | advice 7 | |

The print keeps two lists apart: "Discharge Plan" (five lines addressed to the doctor) and "Discharge Advice" (three lines addressed to the patient). The app holds all eight in one Advice list.

**LOST, MISSING, DIFFERENT in full**

- Row 4, DIFFERENT (page 41, crop `p41_01`). Print: "Serum osmolarity > 320mOsm/kg". App: "serum osmolality over 320 mOsm/kg".
- Row 9, LOST (page 41, crop `p41_10`). Print: "3. May consider IV fluids only if signs dehydration present". App: "IV fluids only if signs of dehydration".
- Row 21, MISSING (page 41, crop `p41_20`). Print: "BG : blood glucose, MTF : Metformin , IVI : infusion". App: no key.
- Row 28, LOST (page 42). Print: "2. Healthy lifestyle modifications are encouraged for good glycaemic control (e.g. improved diet, increased physical activity, cessation of smoking)." App, advice 6: "Adherence to medication and follow-up; healthy lifestyle".

**ADDED**

- `dka` and `hhs` items: "Manage as DKA; DKA and HHS are exclusions for MAU" and "Manage as HHS; DKA and HHS are exclusions for MAU". The printed boxes read "DKA" and "HHS" only; the MAU statement is not on pages 41 and 42 and names no source. Both outcomes are marked "admit"; the print gives them no colour and no disposition.
- `k8` option "10 mmol/L or below" leading to `khome2` ("Discharge with action plan"). The print shows only "BG > 10mmol/L" to "Admit" at this step. The app's own note on `khome2` says so: "The ebook shows only the "over 10, admit" branch at this step."
- `scdc` item: "Memo to KK or primary care to review". In the print this line belongs to the BG 15 to 20 box only; the "Allow discharge with PO MTF" box has no memo line.
- `crisis` info 1: "/L" after "3 mmol" for the capillary ketone.

**Flow:** two points.

- The second 4-hour check for known diabetes (row 13) has one printed exit, "BG > 10mmol/L" to "Admit". The app has two (ADDED).
- The print draws the DKA and HHS diamonds side by side, with one "No" line from both to "Pre - existing Diabetes?". The app asks one question with three answers (DKA, HHS, Neither). No branch is changed.

Every other box, arrow label ("Post 4 hours", "Post 4hours") and coloured outcome matches.

**What the ebook prints.** Presentation: BG over 7.8 mmol/L in an inpatient with no history of DM, or random BG over 11 mmol/L. Signs: the DKA and HHS criteria. Investigations: capillary BG, capillary or urine ketone, venous pH, HCO3, serum osmolarity (inside the two diamonds). Management: restart old medication or basal bolus insulin by TDD (Table 1.0), IV fluids, top-up dose or IVI insulin, S/C insulin, PO metformin 500 mg OD for 1 week with its six contraindications. Disposition: DKA or HHS (no disposition printed), admit, discharge with action plan, discharge with PO MTF, or refer KK or primary care.

---

## 11. Hypoglycaemia

Printed on pages 43 and 44 ("Clinical Pathway for Hypoglycemia"). App id `hypoglycaemia`, `page:'43–44'`: right.

| # | Page | Kind | Printed text | Status | In the app | Note |
|---|---|---|---|---|---|---|
| 1 | 43 | definition | "Hypoglycaemia / -BG < 3.9mmol/L", "-Reversed by carbohydrate intake" | SAME (2 lines) | `lead` | Crops `p43_00`, `p43_01`. |
| 2 | 43 | definition | "-Presence of autonomic and neuroglycopenic symptoms" | DIFFERENT | `lead` | App: "with autonomic or neuroglycopenic symptoms". |
| 3 | 43 | flow | Diamond "Patient alert? / Risk of aspiration": the arrow labelled "No" goes to "Rule of 15s"; the arrow labelled "Yes" goes to "1. Establish IV line" | DIFFERENT | `route` | App: "Patient alert, with no risk of aspiration?", with "Yes (alert)" to the Rule of 15s and "No (not alert or aspiration risk)" to the IV line. The Yes and No are the reverse of the printed labels. |
| 4 | 43 | management | "Rule of 15s": "1. Give 15g of quick acting CHO", "2. Reassess patient in 15 minutes" | SAME (2 lines) | `r15` | Crop `p43_00`. |
| 5 | 43 | flow | Box "BG < 3.9 mmol/L" with a line back to "Rule of 15s" and an arrow down | SAME | `r15q` options 2 and 3 | The app adds a third exit: see ADDED. |
| 6 | 43 | flow | "If persistent hypoglycaemia, despite Rule of 15 TWICE" | SAME | `r15q` option 3, `persist` | |
| 7 | 43 | management | "1. Start IV dextrose solution² e.g. / D5% : 150ml/h / D10% : 75ml/h / (lower rate in patients high risk of volume overload)" | SAME (4 lines) | `persist` item 1 | Crop `p43_10`. The superscript "2" (a reference mark) is not in the app. |
| 8 | 43 | management | "2. Aim BG 7.8- 10mmol/L", "3. Find reversible causes of hypoglycaemia & rectify", "4. Sulfonylurea-induced hypoglycaemia: Consider Ocreotide . Consult Endocrinologist", "5. Possible adrenal insufficiency: Start IV hydrocortisone 100mg qid", "6. Send refractory hypoglycaemia workup" | SAME (5 lines) | `persist` items 2 to 6 | Crop `p43_10`. The app spells "octreotide". |
| 9 | 43 | disposition | "Admit" (pink, under the persistent hypoglycaemia box) | SAME | `persist`, end admit | |
| 10 | 43 | other | "Quick acting CHO": "1. 1 tablespoon honey", "2. 3 tablespoon table sugar dissolved in water", "3. 150-200ml of fruit juice", "4. 3 hard candies", "5. 2 tablespoons of raisins", "6. 3-4 glucose tablets" | SAME (6 lines) | table "Carbohydrate examples", column 1 | Crop `p43_20`. |
| 11 | 43 | other | "Long acting CHO": "1. 3-4 pieces of biscuits", "2. 1 slice of bread", "3. 200ml milk (if on NG feeding)", "4. Regular meal", "5. IV D5% infusion ( NBM/ NG tube)" | SAME (5 lines) | table "Carbohydrate examples", column 2 | Crop `p43_20`. |
| 12 | 43 | management | "1. Establish IV line / IV D50% 20-50ml over 3 minutes , or / IV D20% 75-100ml over 20 minutes / or / IV D10% 150ml bolus" | SAME (4 lines) | `iv` item 1 | Crop `p43_01`. |
| 13 | 43 | management | "2. No IV access : IM Glucagon 1mg" | SAME | `iv` item 2 | Crop `p43_01`. |
| 14 | 43 | flow | Box "BG < 3.9 mmol/L", between the IV box and the long acting CHO box | DIFFERENT | `lc` (title) | App: "Once BG is back above 3.9 mmol/L". |
| 15 | 43 | management | "1. Give 15g –20g long acting CHO", "2. Repeat BG hourly till stable", "3. If BG ≥ 4.5 mmol/L for minimum 2 readings, then monitor BG 4-6 hourly", "4. Find reversible cause of hypoglycaemia", "5. Assess for risk of recurrence" | SAME (5 lines) | `lc` items 1 to 5 | Crop `p43_11`. |
| 16 | 43 | signs | "High risk: 1. Long acting hyperglycaemia agent" | DIFFERENT | `risk` item 1 | App: "Long-acting hypoglycaemic agent". |
| 17 | 43 | signs | "2. Recurrent hypoglycaemia during observation", "3. Unable to tolerate orally", "4. Poor social / home support" | SAME (3 lines) | `risk` items 2 to 4 | |
| 18 | 43 | signs | "5. Comorbids eg. renal / hepatic failure" | LOST | `risk` item 5 | App: "Comorbidities, e.g. renal or hepatic". "failure" is dropped. |
| 19 | 43 | disposition | "Admit" (pink, under the high risk box) | SAME | `adm`, end admit | |
| 20 | 43 | flow | Diamond "Low risk : Absence of high risk and fulfil *discharge criteria": No to "Admit", Yes to discharge | SAME | `risk`, `dc` | Two questions in the app. |
| 21 | 43 | disposition | "Discharge with hypoglycemia action plan" (green) | SAME | `home`, end discharge | |
| 22 | 43 | footnote | "CHO: carbohydrate; BG: blood glucose; IV : intravenous; IM: intramuscular, NBM : nil by mouth; NG :nasogastric" | MISSING | none | The app writes carbohydrate in full; BG, IV, IM, NBM and NG are used without a key. |
| 23 | 44 | discharge criteria | "* Discharge criteria for symptomatic hypoglycaemic patients:" "1. Brief duration", "2. Regained full neurological recovery", "3. Tolerating orally" | SAME (3 lines) | `dc` items 1 to 3 | Crop `p44_00`. |
| 24 | 44 | discharge criteria | "4. Low risk of recurrence : - no major cause/ concurrent illness that warrants hospital admission" | LOST | `dc` item 4 | App: "no major cause needing admission". "concurrent illness" is dropped. |
| 25 | 44 | discharge criteria | "- hypoglycaemia accidental with cause identified and addressed" | CONDENSED | `dc` item 4 | App: "accidental with cause addressed". |
| 26 | 44 | discharge criteria | "- not on long-acting insulin or oral agents (if so, medical input may be required for dose adjustment)" | LOST | `dc` item 4 | The bracket is dropped. |
| 27 | 44 | discharge criteria | "- adequate home monitoring available (able to do home glucose monitoring, caretaker/ family available)" | LOST | `dc` item 4 | The bracket is dropped. |
| 28 | 44 | discharge criteria | "5. Follow up care at primary care arranged with: - memo to the primary care team entailing the event, investigations and any medicine adjustment made - medications - hypoglycaemia action plan" | SAME (4 lines) | `dc` item 5 | |
| 29 | 44 | discharge advice | "1. Patient is discouraged from driving motor/ vehicles, cycling, swimming, working heavy machinery in the next 24-48hours as it may endanger oneself and the public." | CONDENSED | advice 1 | Crop `p44_10`. The reason is dropped. |
| 30 | 44 | discharge advice | "2. Patient may not be able to recognize hypoglycaemic symptoms (unawareness) in the first 48-72hours of hypoglycaemic episode. Hence, blood sugar levels must be checked pre-meals, exercise or driving to avoid hypoglycaemic attack." | CONDENSED | advice 2 | Crop `p44_10`. App: "check blood sugar before meals, exercise and driving". |
| 31 | 44 | discharge advice | "3. Hypoglycaemic action plan : a) Always carry quick-acting carbohydrates handy (e.g. hard candy, dextrose tablet) should patient experience symptoms or recorded blood sugar is low." | CONDENSED | advice 3 | The "should patient..." clause is dropped. |
| 32 | 44 | discharge advice | "b) Record all blood glucose levels and present them to next medical check-up for dose adjustments by doctor." | CONDENSED | advice 4 | "for dose adjustments by doctor" is dropped. |
| 33 | 44 | discharge advice | "c) Call for medical assistance should hypoglycaemic episode is: - causing unconsciousness / seizures / confusion - not causing improvement of symptoms despite taking quick acting carbohydrates - persistent low blood glucose levels with or without symptoms or despite quick acting carbohydrates" | LOST | advice 5 | "confusion" and "with or without symptoms" are dropped. |
| 34 | 44 | reference | "1. Clinical Practice Guidelines. Management of Type 2 Diabetes Mellitus (6TH edition 2020)", "5. Practical Guide to Inpatient glycaemic care 2nd edition 2020. Malaysian Endocrine & Metabolic Society" | SAME (2 lines) | refs 1 and 5 | The app's ref 5 leaves out the society's name. |
| 35 | 44 | reference | "2. [author]. Antidiabetic and hypoglycemic agents. In: Goldfrank's Toxicologic Emergencies, 9th ed, [editors], McGraw-Hill, New York 2011. p.714.", "3. [authors] (2013). Hypoglycemia. Endocrinology and metabolism clinics of North America, 42(4), 657–676. https://doi.org/10.1016/j.ecl.2013.07.002", "4.[authors]. American Association of Clinical Endocrinologists and American Diabetes Association consensus statement on inpatient glycemic control. Diabetes Care. 2009;32(6):1119-1131." | CONDENSED (3 lines) | refs 2 to 4 | Chapter, publisher, page and DOI dropped; titles shortened. |

**LOST, MISSING, DIFFERENT in full**

- Row 2, DIFFERENT (page 43, crops `p43_00` and `p43_01`). Print: "-Presence of autonomic and neuroglycopenic symptoms". App: "BG under 3.9 mmol/L, with autonomic or neuroglycopenic symptoms, reversed by carbohydrate."
- Row 3, DIFFERENT (page 43, crops `p43_00` and `p43_01`).
  Print: one diamond holding two phrases, "Patient alert?" and "Risk of aspiration". Its left arrow is labelled "No" and goes to "Rule of 15s / 1. Give 15g of quick acting CHO / 2. Reassess patient in 15 minutes". Its right arrow is labelled "Yes" and goes to "1. Establish IV line / IV D50% 20-50ml over 3 minutes ...".
  App: "Patient alert, with no risk of aspiration?" with the options "Yes (alert)" to `r15` (Rule of 15s) and "No (not alert or aspiration risk)" to `iv` (Establish IV line).
  As printed, "No" leads to the oral route and "Yes" to the IV route. In the app, "Yes" leads to the oral route and "No" to the IV route, after the question was reworded. Which of the diamond's two phrases the printed Yes and No answer is not stated on the page: a question for the ebook's editors.
- Row 14, DIFFERENT (page 43, crops `p43_01` and `p43_11`). Print: a box "BG < 3.9 mmol/L" on the line from the IV box to "1. Give 15g –20g long acting CHO ...". App: the step is titled "Once BG is back above 3.9 mmol/L".
- Row 16, DIFFERENT (page 43, crop `p43_11`). Print: "High risk: 1. Long acting hyperglycaemia agent". App: "Long-acting hypoglycaemic agent".
- Row 18, LOST (page 43, crop `p43_21`). Print: "5. Comorbids eg. renal / hepatic failure". App: "Comorbidities, e.g. renal or hepatic".
- Row 22, MISSING (page 43, crop `p43_21`). Print: "CHO: carbohydrate; BG: blood glucose; IV : intravenous; IM: intramuscular, NBM : nil by mouth; NG :nasogastric". App: no key.
- Rows 24, 26 and 27, LOST (page 44, crops `p44_00` and `p44_01`).
  Print: "4. Low risk of recurrence : / - no major cause/ concurrent illness that warrants hospital admission / - hypoglycaemia accidental with cause identified and addressed / - not on long-acting insulin or oral agents (if so, medical input may be required for dose adjustment) / - adequate home monitoring available (able to do home glucose monitoring, caretaker/ family available)"
  App: "Low risk of recurrence: no major cause needing admission; accidental with cause addressed; not on long-acting insulin or oral agents; adequate home monitoring"
  Missing from the app: "concurrent illness"; "(if so, medical input may be required for dose adjustment)"; "(able to do home glucose monitoring, caretaker/ family available)".
- Row 33, LOST (page 44, crop `p44_10` for the first line). Print: "c) Call for medical assistance should hypoglycaemic episode is: / - causing unconsciousness / seizures / confusion / - not causing improvement of symptoms despite taking quick acting carbohydrates / - persistent low blood glucose levels with or without symptoms or despite quick acting carbohydrates". App: "Seek medical help if a hypo causes unconsciousness or seizures, does not improve with quick-acting carbohydrate, or blood sugar stays low".

**ADDED**

- `r15q` option "3.9 mmol/L or above" leading to `lc` (long-acting carbohydrate). On the Rule of 15s side the print has one box after the reassessment, "BG < 3.9 mmol/L", with a line back to the Rule of 15s and an arrow down to "If persistent hypoglycaemia, despite Rule of 15 TWICE". It draws no arrow from that side to the long acting CHO box.
- `r15q` option labels "first round" and "after 2 rounds" (the app's wording for the printed loop and "TWICE").
- Table heading "Quick-acting (15 g)": the print's heading is "Quick acting CHO"; the 15 g is from the Rule of 15s box.

**Flow:** three mismatches, all on page 43.

- The first diamond's Yes and No (row 3).
- The box before the long acting CHO step: "BG < 3.9 mmol/L" in the print, "back above 3.9 mmol/L" in the app (row 14).
- The app's added exit from the Rule of 15s to the long-acting carbohydrate step when BG is 3.9 or above (ADDED).

The rest matches: the loop back to the Rule of 15s, "TWICE", the two pink "Admit" boxes, the high-risk box, the low-risk diamond and the green discharge box. The app asks the high-risk features and the discharge criteria as two questions where the print has one diamond.

**What the ebook prints.** Presentation: BG under 3.9 mmol/L, autonomic and neuroglycopenic symptoms, reversed by carbohydrate intake. Signs: five high-risk features. Investigations: BG rechecks; a "refractory hypoglycaemia workup" is named but not listed. Management: the Rule of 15s with the quick and long acting carbohydrate lists; IV D50%, D20% or D10%, or IM glucagon 1 mg; IV dextrose infusion; octreotide and hydrocortisone 100 mg qid in the named cases. Disposition: admit, or discharge with the hypoglycaemia action plan when the five discharge criteria are met.

---

## Summary

### Counts

Rows are the table rows above (a list with one status throughout is one row). The 252 rows cover about 500 printed lines.

| Pathway | Pages | Rows | SAME | CONDENSED | LOST | MISSING | DIFFERENT | MOVED |
|---|---|---|---|---|---|---|---|---|
| Biliary disease | 24 | 13 | 12 | 1 | 0 | 0 | 0 | 0 |
| Mild traumatic brain injury | 25–26 | 32 | 24 | 4 | 3 | 0 | 1 | 0 |
| Community acquired pneumonia | 27 | 16 | 14 | 0 | 0 | 0 | 2 | 0 |
| CVA and TIA | 28–29 | 18 | 16 | 2 | 0 | 0 | 0 | 0 |
| Acute cellulitis | 30 | 10 | 10 | 0 | 0 | 0 | 0 | 0 |
| Dengue fever | 31–32 | 22 | 20 | 0 | 1 | 0 | 1 | 0 |
| Deep vein thrombosis | 33–35 | 25 | 24 | 1 | 0 | 0 | 0 | 0 |
| Heart failure | 36–37 | 20 | 17 | 3 | 0 | 0 | 0 | 0 |
| Hypertensive urgency | 38–40 | 32 | 24 | 4 | 3 | 1 | 0 | 0 |
| Hyperglycaemia | 41–42 | 29 | 23 | 2 | 2 | 1 | 1 | 0 |
| Hypoglycaemia | 43–44 | 35 | 19 | 6 | 5 | 1 | 4 | 0 |
| **Total** | 24–44 | **252** | **203** | **23** | **14** | **3** | **9** | **0** |

### DIFFERENT, in order of weight

The order is by how directly the line steers what is done: a route or branch first, then a number or threshold, then a word. It is not a judgement of which side is right.

1. **Hypoglycaemia, page 43, the first diamond.** Print: "Patient alert? / Risk of aspiration", with "No" to the Rule of 15s (oral carbohydrate) and "Yes" to "1. Establish IV line". App: "Patient alert, with no risk of aspiration?", with "Yes (alert)" to the Rule of 15s and "No (not alert or aspiration risk)" to the IV line. The app's Yes and No are the reverse of the printed labels.
2. **Hypoglycaemia, page 43, the box before the long acting carbohydrate step.** Print: "BG < 3.9 mmol/L". App: "Once BG is back above 3.9 mmol/L".
3. **Dengue, page 31, Important points.** Print: "Female : 45.5 kg + 0.98 (height in cm - 152 )". App: "45.5 kg + 0.91 × (height in cm − 152)".
4. **Pneumonia, page 27, CURB-65.** Print: "R Respiratory rate >30/min". App: "Respiratory rate 30/min or more".
5. **Pneumonia, page 27, the third PSI branch.** Print: "Class III or IV" to "Admit" (after "Class I or II" and "Class III"). App: "Class IV or V" to Admit, with a note that the ebook labels the branch "Class III or IV".
6. **Hypoglycaemia, page 43, high risk 1.** Print: "Long acting hyperglycaemia agent". App: "Long-acting hypoglycaemic agent".
7. **Hypoglycaemia, page 43, the start box.** Print: "-Presence of autonomic and neuroglycopenic symptoms". App: "with autonomic or neuroglycopenic symptoms".
8. **Hyperglycaemia, page 41, HHS.** Print: "Serum osmolarity > 320mOsm/kg". App: "serum osmolality over 320 mOsm/kg".
9. **Mild TBI, page 26, advice.** Print: "if possible patient must be accompanied by responsible adult." App: "should be accompanied by a responsible adult if possible".

### MISSING

1. **Hypertensive urgency, page 39.** "Adopted from ESC/ESH Guidelines 2018 for man" beside Table 1.1 (the line is cut off by the page edge). The app's Table 1.1 has no source line; the guideline is in its references.
2. **Hyperglycaemia, page 41.** The key "BG : blood glucose, MTF : Metformin , IVI : infusion".
3. **Hypoglycaemia, page 43.** The key "CHO: carbohydrate; BG: blood glucose; IV : intravenous; IM: intramuscular, NBM : nil by mouth; NG :nasogastric".

### LOST, in order of weight

1. **Mild TBI, page 25, CT indication 4.** The examples "difficulties with understanding, speaking, reading or writing", "decreased sensation", "loss of balance" and "general weakness" are not in the app.
2. **Hypoglycaemia, page 44, discharge criterion 4.** "concurrent illness"; "(if so, medical input may be required for dose adjustment)"; "(able to do home glucose monitoring, caretaker/ family available)" (three rows).
3. **Hyperglycaemia, page 41.** "3. May consider IV fluids only if signs dehydration present": the app drops "May consider".
4. **Hypoglycaemia, page 43, high risk 5.** "Comorbids eg. renal / hepatic failure": the app drops "failure".
5. **Hypoglycaemia, page 44, advice 3c.** "confusion" and "with or without symptoms" are not in the app.
6. **Mild TBI, page 26.** "9. Don't drive alone": the app says "Don't drive".
7. **Hypertensive urgency, page 39, Table 1.1.** "Athletes and physically active patients" (app: "athletes"); "Preexisting severe leg oedema" (app: "severe leg oedema").
8. **Hypertensive urgency, page 40.** "avoid binge drinking" (app: "limit alcohol").
9. **Hyperglycaemia, page 42.** "(e.g. improved diet, increased physical activity, cessation of smoking)" (app: "healthy lifestyle").
10. **Dengue, page 32.** "If possible." before the mosquito repellent line.
11. **Mild TBI, page 26.** "Do have plenty of rest" (app: "rest").

### ADDED to the ebook pathways

Branches the print does not draw:

- Hypoglycaemia: from the Rule of 15s to the long-acting carbohydrate step when BG is 3.9 mmol/L or above (`r15q`).
- Hyperglycaemia: "10 mmol/L or below" to "Discharge with action plan" at the second 4-hour check (`khome2`; the app notes it).
- Heart failure: "Not all met" from the safe discharge criteria to medical admission (`dc`).
- Dengue: the Observation Ward question and outcome (`owq`, `ow`), labelled as from the memo of 23 Mar 2023.
- DVT: the "Which limb?" question joining the two printed charts, and "stop interim anticoagulant" on the upper limb's "Consider other diagnosis" outcome.

Lines not in the ebook that name no source on the line:

- Pneumonia `opd`: "CURB-65 0–1 can be referred to MAU FAST clinic with a copy of the CXR" (its source is in the references).
- CVA and TIA `tiadc`: "Post-stroke work-up (echo, Holter) can be arranged through MAU FAST clinic after neuromedical review".
- Heart failure `home`: "CCF work-up can be referred to MAU FAST clinic with CXR and ECG".
- Dengue `med`: "Dengue fever is an exclusion for MAU admission".
- Hyperglycaemia `dka`, `hhs`: "Manage as DKA; DKA and HHS are exclusions for MAU" (and the HHS line); both marked "admit" where the print gives no disposition.
- Hypertensive urgency `home`: "Young hypertension for investigation: refer to Physician's Clinic HKL"; `emerg`: "Manage as hypertensive emergency".
- Hyperglycaemia `scdc`: "Memo to KK or primary care to review" (printed for the BG 15 to 20 branch only).
- Mild TBI `dc`: "(if done)" after "Normal CT brain".
- Pneumonia `curb`: one point per CURB-65 item; `psi`: "Class IV or V".

Outcome kinds the app chose where the print gives no colour or no disposition: CVA `cva` ("admit"; the printed pink box reads "Start Aspirin & Statin / Neuromedical review"), DVT `dvt` ("admit"; the app notes the ebook states none), hyperglycaemia `dka` and `hhs` ("admit"), hypertensive urgency `emerg` ("refer"), stroke `ns` ("refer").

### What neither the ebook nor the app prints

These are named on pages 24 to 44 without their content, so the app is not short of them: the PSI points and class cut-offs (page 27), the ABCD2 items (page 28), the alteplase, aspirin and statin doses (page 28), dengue algorithms A, B and C (page 31), the interim anticoagulant's drug (page 33), the HACOR and EHMRG scores and all heart failure doses (pages 36 and 37), the "care bundle plan" (page 38), the "action plan" for hyperglycaemia beyond the discharge plan (page 41), the "refractory hypoglycaemia workup" (page 43), and an antibiotic for pneumonia or cellulitis (pages 27 and 30). Pages 27 and 30 print no references.

### Page numbers and legibility

- All eleven `page` fields are right, and the printed page number equals the image number on every page from 24 to 44.
- Nothing was illegible. One line is cut off in the print itself (page 39, "Adopted from ESC/ESH Guidelines 2018 for man").
- The "**" on "Manage as outpatient**" (pages 27 and 30) has no footnote on either page.

### Overall

For pages 24 to 44 the app is not a condensed version of the ebook. It carries every printed box, branch and outcome of the eleven flowcharts, every score item (CURB-65, Wells), every dose and threshold (fondaparinux and Clexane, both hypertension tables cell by cell, the insulin table, the metformin box, every dextrose and glucagon line, the dengue thresholds), every discharge criterion and every advice line. 203 of 252 rows are the same; 23 are condensed without loss, most of them references and the reasons given in patient advice.

What separates the app from the print is small in volume and is listed above: 9 lines that say something else (4 of them in hypoglycaemia, page 43, where the app has reworded a chart whose printed labels are hard to follow), 14 lines that lost a qualifier or examples, 3 small omissions (two abbreviation keys and one table source line), and a set of additions (four added branches and about ten lines from the MAU and clinic criteria that sit inside the ebook pathways without a source on the line). The items to settle first are the first three under DIFFERENT.
