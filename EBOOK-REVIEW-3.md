# Ebook review 3: pages 45 to 63 against the app

Review only, 11 Nov 2026. Nothing in the app was changed. The print is *The Clinical Pathway in Emergency for Medical Officer* (ETD HKL, 2025); the app is the six entries `pain`, `paracetamol-overdose`, `renal-colic`, `svt`, `syncope` and `scrotal-pain` in `src/parts/data.js`. Department notes (`dept`) and see-also links are not ebook content and are left out, except where said.

No medical knowledge was used to judge anything: each row only sets the printed words beside the app's words. Where the print looks odd (for example "Max 60mg/kg/dose", "Recurrent SVT", "Recreational"), the oddity is reported, not resolved.

## How it was read

- Every page from 45 to 63, and page 4, was read from `sources/ebook-pages/pNN.png`.
- Every dose, threshold, age, time, score and symbol below was then read again from a crop of `sources/ebook-pages-hi/pNN.png`. A crop is named by its page and its ffmpeg geometry `crop=w:h:x:y`, so it can be made again, for example "p50 800:1400:474:780".
- Read from the page image only, because they carry no dose, threshold or symbol: page 4, page 51 (references), the rest of page 54 (advice 4 to 6, references), the chart boxes of page 59 other than "ONSET PAIN <6 HOUR", and page 63.
- Nothing was illegible. Three things are printed imperfectly and are reported as printed: the first syncope reference ends "June 29 202" (the year is cut off); the antibiotic table on page 62 is a low-resolution picture with spell-check underlines, but every figure reads clearly at full size; the scrotal chart on page 59 is a low-resolution black and white picture, also legible.
- People's names in the references are not transcribed; a reference is named by its title and year.

Status words: SAME (same words, or only spelling and punctuation changed), CONDENSED (shorter or reworded, nothing of substance lost), LOST (a printed fact, number, condition, qualifier or step is missing from the app's version), MISSING (not in the app at all), DIFFERENT (the app says something else), MOVED (present, but attached to a different step than printed). A LOST marked "minor" is one descriptor or qualifier.

## Contents page and page numbers

Page 4 (Table of Contents) prints these starts: Pain Management 45, Paracetamol Overdose 52, Renal Colic 53, Supraventricular Tachycardia 55, Syncope 57, Acute Scrotal Pain 59.

| Pathway | Printed pages, from the pages themselves | App `page` | Right? |
|---|---|---|---|
| Pain management | 45 to 51 (51 is its reference list) | `45–50` | No: should be 45–51 |
| Paracetamol overdose | 52 only (chart, footnote, advice and references are all on 52) | `51–52` | No: should be 52 |
| Renal colic | 53 to 54 | `53–54` | Yes |
| Supraventricular tachycardia | 55 to 56 | `55–56` | Yes |
| Syncope | 57 to 58 | `57–58` | Yes |
| Acute scrotal pain | 59 to 63 | `59–63` | Yes |

The same two ranges are repeated in the comment lines of `data.js` (467, 505), in `data7.js` line 824 and in three calculators in `engine.js` (`src:'Ebook p45–50'` at lines 1820 and 2010, `src:'Ebook p51–52'` at line 2153).

---

## 1. Pain management: printed pages 45 to 51, app id `pain`, `page` field wrong (says 45–50)

### 1.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| PA-01 | 45 | flow | Title "Clinical Pathway For Pain Assessment In Cooperative And Awake Adult Patient (1)"; "Attend to patient" | CONDENSED | `awake` q, Yes branch | The chart title became a question (see 1.3). |
| PA-02 | 45 | flow | "Present with chest pain?" Yes | SAME | `chest` q | Printed on chart (1) only; the app asks it of every patient (see 1.3). |
| PA-03 | 45 | flow | "Refer to EDHKL Chest Pain Algorithm" then "Treat ACS" | CONDENSED | `cp` title | Two boxes in one outcome. |
| PA-04 | 45 | flow | "Pain assessment (MOH Pain Assessment Tool)" | CONDENSED | `selfs` step | |
| PA-05 | 45 | flow | "Pain Score >6?" Yes / No | SAME | `ps` q | p45 1700:1300:0:1250 |
| PA-06 | 45 | management | "Non-pharmacological treatment + Analgesia (refer analgesic ladder)" | SAME | `np` step, items[0] | |
| PA-07 | 45 | flow | "Reassessment 30min-1hour" | SAME | `np` items[1], `re` q | p45 1700:1200:0:2300 |
| PA-08 | 45 | flow | "PS 4-6 (Moderate)", back to the non-pharmacological box | SAME | `re` option 2 | |
| PA-09 | 45 | flow | "PS > 6 (Severe)", to Consult EP | SAME | `re` option 3 | |
| PA-10 | 45 | flow | "PS < 4 (mild)", to the green box | SAME | `re` option 1 | |
| PA-11 | 45 | management | Red box: "Consult EP Morphine Pain Protocol *Refer APS *Regional Anasthesia" | CONDENSED | `mp` step, items[1] | App: "Refer APS or consider regional anaesthesia if needed"; "consider" and "if needed" are the app's words for the printed asterisks, which have no key. |
| PA-12 | 45 | disposition | Green box: "Regularise analgesia Review PRN *Consider discharge (EMACC/EMWATCH/OPC)" | SAME | `mild` title, items[0] | |
| PA-13 | 45 | disposition | Discharge Plan: "Regularise analgesia" | SAME | `mild` title | |
| PA-14 | 45 | disposition | Discharge Plan: "TCA stat to nearest healthcare facility if pain persists" | CONDENSED | `mild` items[2] | |
| PA-15 | 45 | disposition | Discharge Plan: "TCA EMACC / EMWATCH (Malaysian-only) / Outpatient Department (Specific to diagnosis) / FAST Clinic" | LOST | `mild` items[0] | "(Malaysian-only)", "(Specific to diagnosis)" and "FAST Clinic" are not in the app. |
| PA-16 | 46 (small copy on 45) | other | "MOH Self-Reported Pain Assessment Tool": the SKALA KESAKITAN picture, 0 to 10 | LOST | `selfs` step ("self-reported pain scale (0–10)") | The picture, its end labels and "Adapted from IASP 2017" are not in the app. |
| PA-17 | 46 | drug table | MOH Analgesic Ladder: "MILD 1 - 3 PCM and/or NSAIDS, COX-2 PRN and/or regular" | SAME | table "MOH analgesic ladder" row 1 | p46 1820:1040:520:1280 |
| PA-18 | 46 | drug table | "MODERATE 4 – 6 Weak Opioid e.g. Tramadol, Dihydrocodeine Combined with PCM and/or NSAIDS, COX-2 PRN and/or regular" | SAME | row 2 | |
| PA-19 | 46 | drug table | "SEVERE 7 – 10 Strong opioid e.g. Morphine, Oxycodone Combined with …" | SAME | row 3 | |
| PA-20 | 46 | drug table | "UNCONTROLLED Refer to Acute Pain Service for: PCA, Epidural and other pain interventions" | SAME | row 4 | |
| PA-21 | 46 | drug table | "May consider adjuvants for acute neuropathic and uncontrolled pain" | SAME | row 5 ("Any") | |
| PA-22 | 46 | discharge criteria | "Pain score < 3" | SAME | table "Discharge and APS referral" row 1 | p46 1300:1050:220:2500 |
| PA-23 | 46 | discharge criteria | "Cause of pain has been identified" | SAME | row 2 | |
| PA-24 | 46 | discharge criteria | "Cause of pain has been treated" | SAME | row 3 | |
| PA-25 | 46 | disposition | Referral Criteria to Acute Pain Service HKL: "Persistent severe pain despite maximal pain therapy in ED" | SAME | row 1, column 2 | |
| PA-26 | 46 | disposition | "Underlying chronic pain" | SAME | row 2, column 2 | |
| PA-27 | 46 | disposition | "Previous follow up under APS HKL" | SAME | row 3, column 2 | |
| PA-28 | 46 | management | Non-Pharmacological Treatment: "Splint and Slings: immobilising injured body parts for stability and pain relief" | CONDENSED | table "Non-pharmacological treatment" row 1 | |
| PA-29 | 46 | management | "Comfort Items: blanket, pillows, or soothing scents to promote relaxation" | LOST | row 2 ("Blankets, pillows") | "soothing scents to promote relaxation" is not in the app. Minor. |
| PA-30 | 46 | management | "Distraction: engaging patients in conversation, offering music, or providing visual distractions" | CONDENSED | row 3 | |
| PA-31 | 46 | management | "Relaxation Technique: deep breathing exercises, progressive muscle relaxation" | CONDENSED | row 4 | |
| PA-32 | 46 | management | "Positioning: adjusting patients positioning to minimise discomfort" | CONDENSED | row 5 | |
| PA-33 | 46 | management | "Ice Therapy: applying cold packs for acute injuries or heat packs for muscle spasm" | CONDENSED | row 6 ("Cold packs for acute injuries") | The heat-pack half is kept in the next row only. |
| PA-34 | 46 | management | "Heat Therapy: applying heat packs for muscle spasm" | SAME | row 7 | |
| PA-35 | 47 | flow | Title "Clinical Pathway for Pain assessment in non-cooperative or non-awake adult patient (2)"; "Attend to patient" | CONDENSED | `awake` q, No branch | |
| PA-36 | 47 | flow | "Is the patient mechanically ventilated?" Yes / No | SAME | `vent` q | |
| PA-37 | 47 | flow | "Pain assessment CPOT" | SAME | `cpot` step | |
| PA-38 | 47 | flow | "Pain assessment PAINAD / FLACC" | SAME | `painad` step | |
| PA-39 | 47 | flow | "Cumulative Pain score 0-10" | MISSING | none: `cpot` and `painad` go straight to `ps` | p47 1900:1200:600:1050 |
| PA-40 | 47 | flow | "Is the Pain Score >6?" Yes / No | SAME | `ps` q (shared with chart 1) | |
| PA-41 | 47 | management | "Non-pharmacological treatment + Analgesia (refer analgesic ladder)" | SAME | `np` (shared) | |
| PA-42 | 47 | flow | "Reassessment 30min-1hour"; "PS 4-6 (Moderate)"; "PS > 6 (Severe)"; "PS < 4 (mild)" | SAME | `re` (shared) | p47 1900:1150:640:2250 |
| PA-43 | 47 | management | Red box: "Consult EP Morphine Pain Protocol *Refer APS *Regional Anasthesia" | CONDENSED | `mp` (shared) | As PA-11. |
| PA-44 | 47 | disposition | Green box: "Regularise analgesia Review PRN EP Review for discharge (non-ventiated only)" | SAME | `mild` title, items[1] | The app has one green outcome for both charts (see 1.3). |
| PA-45 | 47 | footnote | "Modified from MOH Pain Pathway for Doctors" | MISSING | none | Not in the nodes, the tables or the references. |
| PA-46 | 48 | other | Heading "MOH Observational Pain Assessment Tool" | CONDENSED | the three table titles | The heading itself is not shown. |
| PA-47 | 48 | signs | FLACC SCALE (Non-communicative), Face: 0 "No particular expression or smile"; 1 "Occasional grimace or frown, withdrawn, disinterested"; 2 "Frequent to constant quivering chin, clenched jaw" | LOST | table "FLACC (non-communicative)" row 1 | Score 1 drops "disinterested". Minor. p48 1950:1000:430:430 |
| PA-48 | 48 | signs | FLACC, Legs: "Normal position or relaxed"; "Uneasy, restless, tense"; "Kicking or legs drawn up" | SAME | row 2 | |
| PA-49 | 48 | signs | FLACC, Activity: 0 "Lying quietly, normal position, moves easily"; 1 "Squirming, shifting back and forth, tense"; 2 "Arched, rigid or jerking" | LOST | row 3 | Score 0 drops "normal position". Minor. |
| PA-50 | 48 | signs | FLACC, Cry: 0 "No cry (awake or sleep)"; 1 "Moans or whimpers, occasional complaint"; 2 "Crying steadily, scream or sobs, frequent complaints" | LOST | row 4 | Score 0 drops "(awake or sleep)"; score 2 drops "frequent complaints". Minor. |
| PA-51 | 48 | signs | FLACC, Consolability: 0 "Content, relaxed"; 1 "Reassured by occasional touching, hugging or being talked to, distractable"; 2 "Difficult to console" | LOST | row 5 | Score 1 drops "occasional" and "hugging". Minor. |
| PA-52 | 48 | signs | PAINAD SCALE (Geriatric & Dementia), Breathing: "Normal"; "Occasional labored breathing, short period of hyperventilation"; "Noisy labored breathing, long period of hyperventilation, Cheyne-Stokes respiration" | CONDENSED | table "PAINAD (geriatric and dementia)" row 1 | p48 1950:1000:430:1480 |
| PA-53 | 48 | signs | PAINAD, Negative vocalization: "None"; "Occasional moan or groan, low level of speech with a negative disapproving quality"; "Repeated troubled calling out, loud moaning or groaning, crying" | CONDENSED | row 2 | |
| PA-54 | 48 | signs | PAINAD, Facial expression: "Smiling or inexpressive"; "Sad, rightened, frown"; "Grimacing" | SAME | row 3 | The print's "rightened" is "frightened" in the app. |
| PA-55 | 48 | signs | PAINAD, Body language: "Relaxed"; "Tense, distressing pacing, fidgeting"; "Rigid, fist clenched, knees pulled up, pulling or pushing away, striking out" | SAME | row 4 | |
| PA-56 | 48 | signs | PAINAD, Consolability: "No need to console"; "Distracted or reassured by voice or touch"; "Unable to console, distract or reassure" | SAME | row 5 | |
| PA-57 | 48 | signs | CRITICAL-CARE PAIN OBSERVATION TOOL (CPOT), Facial expression: "Relaxed"; "Tense"; "Grimacing" | SAME | table "CPOT (critical care)" row 1 | p48 1950:1000:430:2540 |
| PA-58 | 48 | signs | CPOT, Body movement: "Absence of movements, normal position"; "Protection"; "Agitation" | SAME | row 2 | |
| PA-59 | 48 | signs | CPOT, Muscle tension: "Relaxed"; "Tense, rigid"; "Very tense or rigid" | SAME | row 3 | |
| PA-60 | 48 | signs | CPOT, Compliance with ventilator (intubated): "Tolerating ventilator or movements"; "Coughing but tolerating"; "Fighting ventilator" | SAME | row 4 | |
| PA-61 | 48 | signs | CPOT, Vocalization (extubated): "Normal, silent"; "Sighing or moaning"; "Crying or sobbing" | SAME | row 5 | |
| PA-62 | 49 | flow | Title "Morphine Pain Protocol"; "Attend to patient" | CONDENSED | `mp` step | |
| PA-63 | 49 | flow | First "Pain Score >6?": No, "Refer to Clinical Pathway for Pain (1) & (2)" | CONDENSED | implied: the app enters `mp` only from a score over 6 (`ps`, `re`) | p49 1300:1200:440:780 |
| PA-64 | 49 | management | "Prepare in saline morphine 1mg/mL" | SAME | `mp` items[0] | |
| PA-65 | 49 | flow | "Sedation score <2?" Yes / No | SAME | `sed` q | |
| PA-66 | 49 | signs | Sedation Score: "0 = none (patient is alert) 1 = mild (patient is sometimes drowsy) 2 = moderate (patient is often drowsy but easily arousable) 3 = unarousable S =patient is sleeping, easily arousable" | SAME | `sed` hint | p49 1528:800:1300:1200 |
| PA-67 | 49 | flow | "Respiratory rate >8?" Yes / No | SAME | `rr` q | p49 1920:850:480:2000 |
| PA-68 | 49 | flow | "Patient normotensive?" Yes / No | SAME | `bp` q | |
| PA-69 | 49 | flow | "Is the patient 60 years old and below?" Yes / No | SAME | `age` q | p49 1920:900:480:2800 |
| PA-70 | 49 | management | "Administer IV Morphine 1mg (1mL)" | SAME | `m1` step | |
| PA-71 | 49 | management | "Administer IV Morphine 0.5mg (0.5mL)" | SAME | `m05` step | |
| PA-72 | 49 | flow | "Reassessment in 5 minutes" | SAME | `m1` and `m05` items | |
| PA-73 | 49 | flow | "Take pain score" | CONDENSED | `again` q | Implied by the question. |
| PA-74 | 49 | flow | Second "Pain Score >6?": Yes, back to "Sedation score <2?" | SAME | `again` Yes to `sed` | |
| PA-75 | 49 | flow | Second "Pain Score >6?": No, "Refer to Clinical Pathway for Pain (1) & (2)" | DIFFERENT | `again` No goes to `mild` (the discharge outcome) | See 1.2. |
| PA-76 | 49 | management | Red box: "Consult EP To stabilise patient Consider other non-opioid strong analgesia *Refer APS *Regional Anasthesia" | SAME | `epc` title, items[0–2] | |
| PA-77 | 49 | other | Box: "In case of anaphylaxis, liver disease and kidney disease, to dicuss with EP regarding mode of treatment" | MOVED | `epc` items[3] | Printed as a free-standing note on the protocol page; in the app only on the `epc` outcome, which is reached only when the sedation, respiratory rate or blood pressure check fails. A user who goes on to give morphine never passes it. |
| PA-78 | 49 | footnote | "Adapted from Acute Pain Service, Royal Adelaide Hospital, South Australia" | CONDENSED | refs[5] | |
| PA-79 | 50 | drug table | Choice of Analgesia, Paracetamol (PO/IV), Dosage: ">50kg: 500mg – 1g, 6 – 8hrly Max 4g/day <50kg: 15mg/kg/dose, Max 60mg/kg/dose" | DIFFERENT | table "Choice of analgesia" row 1, Dosage | Print "Max 60mg/kg/dose"; app "max 60 mg/kg/day". See 1.2. |
| PA-80 | 50 | drug table | Paracetamol, Side effect: "Rare" | MISSING | none | The app's table has no Side effect column. |
| PA-81 | 50 | drug table | Paracetamol, Caution/CI: "Hepatic Impairment (preferred in elderly)" | SAME | row 1, Caution | |
| PA-82 | 50 | drug table | "Diclofenac Sodium (PO/IM) *do not give in IV": "50 – 150 mg daily, 8 – 12hrly Max 200mg/ day" | SAME | row 2 | |
| PA-83 | 50 | drug table | "Mefenamic Acid (PO)": "250mg – 500mg 8hrly" | SAME | row 3 | |
| PA-84 | 50 | drug table | Diclofenac and mefenamic acid, Side effect: "Peptic Ulcer GI bleed Platelet dysfunction Renal failure Hypertension Allergic reaction Increase in CV events" | MISSING | none | |
| PA-85 | 50 | drug table | Diclofenac and mefenamic acid, Caution/CI: "Gastroduodenal ulcer Asthma (bronchospasm) Bleeding disorder Renal dysfunction IHD Cerebrovascular disease Inflammatory bowel disease" | CONDENSED | rows 2 and 3, Caution | |
| PA-86 | 50 | drug table | Celecoxib (PO), Dosage: "400mg BD in acute pain (48hrs) 200-400mg daily (for longer term use) <18yrs: not recommended Elderly: 100mg daily" | CONDENSED | row 4, Dosage | |
| PA-87 | 50 | drug table | Celecoxib, Side effect: "Renal impairment Allergic reaction Hypertension Increase in CVS events" | MISSING | none | |
| PA-88 | 50 | drug table | Celecoxib, Caution/CI: six lines | LOST | row 4, Caution | Two of the six lines are not in the app. See 1.2. |
| PA-89 | 50 | drug table | Tramadol (PO/IV), Dosage: "50 – 100mg 6-8hrly Max 400mg/day" | SAME | row 5, Dosage | |
| PA-90 | 50 | drug table | Tramadol, Side effect: "Dizziness Nausea Vomiting Constipation Drowsiness" | MISSING | none | |
| PA-91 | 50 | drug table | Tramadol, Caution/CI: "Risk of seizures (high dose, especially CKD) Elderly: start low 50mg, Max 300mg/day (to avoid if possible)" | LOST | row 5, Caution | "(to avoid if possible)" is not in the app. |
| PA-92 | 50 | drug table | Morphine (SC/IV/PO), Dosage: "SC (Adults): <65 yrs: 5 -10 mg 4hrly >65 yrs: 2.5 - 5mg 4hrly IV: Follow Morphine pain Protocol Oral: Starting dose 5- 10mg 4hrly of IR Elderly: 2.5 - 5mg 4 - 6hrly of IR" | LOST | row 6, Dosage | Every number is the same; "(Adults)" and "Starting dose" are dropped. Minor. |
| PA-93 | 50 | drug table | Morphine, Side effect: "Nausea Vomiting Pruritus Sedation Constipation Respiratory depression Myoclonus" | MISSING | none | |
| PA-94 | 50 | drug table | Morphine, Caution/CI: "… Renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" | DIFFERENT | row 6, Caution | Print "by 1/2 to 1/3"; app "to 1/2–1/3". See 1.2. |
| PA-95 | 50 | drug table | Fentanyl (IV/IM), Dosage: "50-100mcg IVI: to follow EDHKL medication dilutional guideline" | SAME | row 7, Dosage | |
| PA-96 | 50 | drug table | Fentanyl, Side effect: "CVS- Bradycardia (others preserved) RS- respiratory depressant CNS- Seizure-like symptoms GI- decreases GI motility, spasm of the sphincter of Oddi" | MISSING | none | |
| PA-97 | 50 | drug table | Fentanyl, Caution/CI: "Renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" | DIFFERENT | row 7, Caution | As PA-94. |
| PA-98 | 50 | drug table | Ketamine (IM/IV), Dosage: "Analgesia: 0.1-0.3mg/kg Recreational: 0.2-0.5mg/kg Partial dissociation: 0.4-0.8mg/kg Fully dissociation: 1-2mg/kg" | SAME | row 8, Dosage | The app adds that the ebook labels the second range "recreational". |
| PA-99 | 50 | drug table | Ketamine, Side effect: "CVS- Increase sympathetic tone (tachycardia, hypertension) RS- Preserved airway reflexes, bronchodilator CNS- Dissociative effect Others- Hypersalivation, transient rashes, emergence delirium/nightmare" | MISSING | none | |
| PA-100 | 50 | drug table | Ketamine, Caution/CI: "Avoid in IHD" | SAME | row 8, Caution | |
| PA-101 | 51 | reference | 1. Ministry of Health Malaysia (2018), *Pain as the 5th Vital Sign Guideline: 3rd Edition*, with publisher and ISBN | CONDENSED | refs[0] | Publisher details and ISBN dropped. |
| PA-102 | 51 | reference | 2. Ministry of Health Malaysia (2020), *Introduction to Pain Free Programme MOH* | CONDENSED | refs[1] | |
| PA-103 | 51 | reference | 3. Ministry of Health Malaysia (2020), *Pain as the 5th Vital Sign: Training Module for Doctors* | CONDENSED | refs[2] | |
| PA-104 | 51 | reference | 4. *Drugs in Anaesthesia and Intensive Care* (5th ed.), 2016, with publisher and ISBN | CONDENSED | refs[3] | |
| PA-105 | 51 | reference | 5. *Drugs for the Management of Pain*, in *Pharmacological Basis of Acute Care* (pp. 149-160), 2015, with publisher and DOI | CONDENSED | refs[4] | Page range and DOI dropped. |

### 1.2 The LOST, MISSING and DIFFERENT rows in full

| # | Printed, exactly | App, exactly | Crop |
|---|---|---|---|
| PA-15 LOST | "TCA **EMACC** / **EMWATCH** (Malaysian-only) / **Outpatient Department** (Specific to diagnosis) / **FAST** Clinic" | "Consider discharge (EMACC, EMWATCH or OPC)" | p45 1500:800:1328:3000 |
| PA-16 LOST | "MOH Self-Reported Pain Assessment Tool"; picture "SKALA KESAKITAN" with boxes 0 1 2 3 4 5 6 7 8 9 10, a face at each end labelled "TIADA KESAKITAN" and "KESAKITAN YANG AMAT SANGAT", "Adapted from IASP 2017" | "Pain assessment with the MOH self-reported pain scale (0–10)" | page image p46 |
| PA-29 LOST | "**Comfort Items:** blanket, pillows, or soothing scents to promote relaxation" | "Comfort items / Blankets, pillows" | p46 1300:1050:1400:2500 |
| PA-39 MISSING | "Cumulative Pain score 0-10" (the box both assessment boxes lead to, before "Is the Pain Score >6?") | nothing | p47 1900:1200:600:1050 |
| PA-45 MISSING | "*Modified from MOH Pain Pathway for Doctors*" | nothing | p47 1900:700:900:3250 |
| PA-47 LOST | Face, 1: "Occasional grimace or frown, withdrawn, disinterested" | "Occasional grimace or frown, withdrawn" | p48 1950:1000:430:430 |
| PA-49 LOST | Activity, 0: "Lying quietly, normal position, moves easily"; 1: "Squirming, shifting back and forth, tense" | "Lying quietly, moves easily"; "Squirming, shifting, tense" | same |
| PA-50 LOST | Cry, 0: "No cry (awake or sleep)"; 2: "Crying steadily, scream or sobs, frequent complaints" | "No cry"; "Crying steadily, screams or sobs" | same |
| PA-51 LOST | Consolability, 1: "Reassured by occasional touching, hugging or being talked to, distractable" | "Reassured by touch or talk, distractable" | same |
| PA-75 DIFFERENT | After "Reassessment in 5 minutes" and "Take pain score": "Pain Score >6?" No, to the box "Refer to Clinical Pathway for Pain (1) & (2)" | `again`: "Pain score still over 6?" No goes to `mild`, the discharge outcome "Regularise analgesia and review PRN" with "Consider discharge (EMACC, EMWATCH or OPC)" | p49 1300:1200:440:780 |
| PA-79 DIFFERENT | "<50kg: 15mg/kg/dose, Max 60mg/kg/dose" | "Under 50 kg: 15 mg/kg/dose, max 60 mg/kg/day" | p50 800:1400:474:780 |
| PA-80 MISSING | Side effect: "Rare" | nothing | p50 1250:1400:1230:780 |
| PA-84 MISSING | Side effect: "Peptic Ulcer / GI bleed / Platelet dysfunction / Renal failure / Hypertension / Allergic reaction / Increase in CV events" | nothing | same |
| PA-87 MISSING | Side effect: "Renal impairment / Allergic reaction / Hypertension / Increase in CVS events" | nothing | same |
| PA-88 LOST | "IHD / Cerebrovascular Disease / Hypersensitivity to sulphonamides / Higher doses a/w higher incidence of GIT, CVS side effect / Patient with indication of cardiac protection require aspirin as supplement / Uncontrolled HPT" | "IHD, cerebrovascular disease, sulphonamide hypersensitivity, uncontrolled hypertension" | same |
| PA-90 MISSING | Side effect: "Dizziness / Nausea / Vomiting / Constipation / Drowsiness" | nothing | same |
| PA-91 LOST | "Risk of seizures (high dose, especially CKD) / Elderly: start low 50mg, / Max 300mg/day (to avoid if possible)" | "Seizure risk (high dose, CKD); elderly start 50 mg, max 300 mg/day" | same |
| PA-92 LOST | "**SC** (Adults): <65 yrs: 5 -10 mg 4hrly >65 yrs: 2.5 - 5mg 4hrly **IV:** Follow Morphine pain Protocol **Oral:** Starting dose 5- 10mg 4hrly of IR Elderly: 2.5 - 5mg 4 - 6hrly of IR" | "SC: under 65 years 5–10 mg 4-hourly; over 65 years 2.5–5 mg 4-hourly. IV: follow the morphine pain protocol. Oral IR: 5–10 mg 4-hourly; elderly 2.5–5 mg 4–6 hourly" | p50 800:1300:474:2080 |
| PA-93 MISSING | Side effect: "Nausea / Vomiting / Pruritus / Sedation / Constipation / Respiratory depression / Myoclonus" | nothing | p50 1250:1300:1230:2080 |
| PA-94 DIFFERENT | "Acute bronchial asthma (histamine) / Respiratory depression / Head injuries / Renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" | "Acute asthma, respiratory depression, head injury; renal or hepatic dysfunction: reduce initial dose to 1/2–1/3" | same |
| PA-96 MISSING | Side effect: "CVS- Bradycardia (others preserved) / RS- respiratory depressant / CNS- Seizure-like symptoms / GI- decreases GI motility, spasm of the sphincter of Oddi" | nothing | same |
| PA-97 DIFFERENT | "Renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" | "Renal or hepatic dysfunction: reduce initial dose to 1/2–1/3" | same |
| PA-99 MISSING | Side effect: "CVS- Increase sympathetic tone (tachycardia, hypertension) / RS- Preserved airway reflexes, bronchodilator / CNS- Dissociative effect / Others- Hypersalivation, transient rashes, emergence delirium/nightmare" | nothing | same |

Notes on three of them:

- **PA-79** also reaches the calculator "Analgesia by weight" (`engine.js` lines 1823 and 1828 and `CALC_FACTS` line 2354): it shows "max … mg a day (60 mg/kg/day)". The print's word is "dose".
- **PA-94 and PA-97:** "decreasing … by 1/2 to 1/3" and "reduce … to 1/2–1/3" are different sums. The print's word is "by". The print also says "Renal **and** hepatic"; the app says "Renal **or** hepatic". "(histamine)" is dropped.
- **PA-75:** on charts (1) and (2), a score that is not over 6 goes to "Non-pharmacological treatment + Analgesia" and a reassessment in 30 minutes to 1 hour, and only "PS < 4 (mild)" reaches the green box. The app sends every score of 6 or under after morphine straight to the green outcome.

### 1.3 ADDED: in the app's pathway, not printed on these pages

- `awake`: the question "Is the patient cooperative and awake?". The print has two separate charts, told apart by their titles.
- `chest` comes before `awake`, so the chest pain question is asked of non-awake patients too. It is printed on chart (1) only.
- `cp` item "See the ACS and Obsess protocol pathway".
- `mp` items[1]: "consider … if needed" (the print has "*Refer APS *Regional Anasthesia", asterisks without a key).
- `cpot` "See the CPOT table below", `painad` "See the tables below", and the labels "(geriatric, dementia)" and "(non-communicative)" on `painad` (taken from the table titles on page 48).
- `mild` items[1]: the label "Non-awake patients:".
- Ketamine row: the remark `(labelled "recreational" in the ebook)`.
- refs[5] "Morphine protocol adapted from Acute Pain Service, Royal Adelaide Hospital" is the page 49 footnote placed among the references.

### 1.4 The flow against the printed charts

1. Charts (1) and (2) are merged behind an added question (`awake`); the print's two start boxes and titles are gone.
2. The chest pain question gates both charts; it is printed on chart (1) only.
3. "Cumulative Pain score 0-10" (chart 2) has no node.
4. The two green boxes are one outcome (`mild`). Chart (1)'s box says "*Consider discharge (EMACC/EMWATCH/OPC)"; chart (2)'s says "EP Review for discharge (non-ventiated only)" and no clinic. The app shows the EMACC line to everyone, the EP review line with a "Non-awake patients:" label, and the Discharge Plan's "TCA stat" line (printed on page 45 only) to everyone.
5. Morphine protocol: the second "Pain Score >6?" No exit goes to the discharge outcome, not back to charts (1) and (2) (PA-75). The first "Pain Score >6?" check is not a node; the app enters the protocol only from a score over 6.
6. The anaphylaxis, liver and kidney disease note is on the `epc` outcome only (PA-77).
7. Outcome colours match: both "Consult EP" boxes are red (`mp` is a step that leads into the protocol; `epc` is a refer outcome), the green box is the discharge outcome, and "Treat ACS" is a plain box in print and a refer outcome in the app.

### 1.5 What the ebook prints for this pathway

- Presentation: not printed (only "Present with chest pain?").
- Signs: the three observational scales (FLACC, PAINAD, CPOT), the self-reported 0 to 10 scale, and the sedation score.
- Investigations: not printed.
- Management: the analgesic ladder, the non-pharmacological table, the morphine pain protocol and the Choice of Analgesia table (dosage, side effect, caution).
- Disposition: discharge criteria, the Discharge Plan, the two green boxes and the referral criteria to the Acute Pain Service.

---

## 2. Paracetamol overdose: printed page 52 only, app id `paracetamol-overdose`, `page` field wrong (says 51–52)

### 2.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| PO-01 | 52 | presentation | "Acute immediate release PCM ingestion >150mg/kg" | SAME | `lead` | In the lead, not a node. p52 1414:1100:1414:320 |
| PO-02 | 52 | flow | "<2 hours" | SAME | `time` option 1 | p52 1414:1100:0:320 |
| PO-03 | 52 | flow | "2-8 hours" | SAME | `time` option 2 | |
| PO-04 | 52 | flow | ">8-24 hours" | LOST | `time` option 3: "8 to 24 hours" | The ">" is dropped, so exactly 8 hours sits in two options ("2 to 8 hours" and "8 to 24 hours"). Minor. |
| PO-05 | 52 | flow | ">24 hours" | SAME | `time` option 4: "Over 24 hours" | |
| PO-06 | 52 | management | "Activated charcoal", then to the measuring diamond | SAME | `ac` step | |
| PO-07 | 52 | investigation | "Measure serum paracetamol concentration and LFT within 4-8 hours of ingestion" | SAME | `lvl` q | App: "at 4–8 hours after ingestion". |
| PO-08 | 52 | flow | Arrow "Results > 8 hours", to "Commence N-acetylcysteine infusion" | CONDENSED | `lvl` option "No, after 8 hours" | The app words the two arrow labels as "Will the results be back within 8 hours of ingestion?" (see 2.3). |
| PO-09 | 52 | flow | Arrow "Results < 8 hours", to "Plot serum paracetamol concentration on normogram" | SAME | `lvl` option "Yes, within 8 hours", `nomo` | |
| PO-10 | 52 | flow | "Above normogram treatment line" Yes / No | SAME | `nomo` q | p52 1414:1100:0:1380 |
| PO-11 | 52 | management | "Commence N-acetylcysteine infusion" | SAME | `nac`, `nac24` steps | |
| PO-12 | 52 | investigation | "Measure serum paracetamol concentration and LFT" | SAME | `nac` and `nac24` items | |
| PO-13 | 52 | flow | "Paracetamol concentration above the normogram line or ALT ≥ 50U/L" Yes / No | SAME | `nacq` q | p52 1414:1100:0:1380 |
| PO-14 | 52 | flow | "Paracetamol concentration > 10mg/L (66 umol/L) or ALT ≥ 50U/L" Yes / No | SAME | `nacq24` q | p52 1414:1100:1414:1380 |
| PO-15 | 52 | disposition | "Medical treatment not required Refer psychiatry if intentional overdose" (two boxes) | SAME | `nomed` title, items[0] | |
| PO-16 | 52 | disposition | Arrow "Psychiatry clearance", to green "Discharge with advice" (two boxes) | SAME | `nomed` items[1] | |
| PO-17 | 52 | disposition | Red "Full dose N-acetylcysteine infusion Admit" and red "Full dose N-acetylcysteine Admit" | SAME | `admit` | One outcome for the two red boxes. |
| PO-18 | 52 | footnote | "* To consult emergency physician if TDM PCM double the treatment line" | CONDENSED | `lead` | App: "Consult the EP if the level is double the treatment line." p52 1500:1150:60:2600 |
| PO-19 | 52 | discharge advice | "1. Return to hospital immediately if develop abdominal pain, feeling sick such as nausea or vomiting, yellowish discoloration of skin or eyes, confusion or difficulty passing urine" | CONDENSED | advice 1 | |
| PO-20 | 52 | discharge advice | "2. Return to hospital if you develop suicidal ideation" | SAME | advice 2 | |
| PO-21 | 52 | discharge advice | "3. Do not keep drug at open space or easy access area" | SAME | advice 3 | |
| PO-22 | 52 | reference | 1. "Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand", MJA, 2019 | SAME | refs[0] | |
| PO-23 | 52 | reference | 2. "6th Clinical Toxicology Course Perak. CEP. 2020" | SAME | refs[1] | |
| PO-24 | 52 | reference | 3. "http://www.myhealth.gov.my/en/paracetamol-poisoning/" | CONDENSED | refs[2] | The app gives the site and topic, not the full address. |

### 2.2 The LOST, MISSING and DIFFERENT rows in full

| # | Printed, exactly | App, exactly | Crop |
|---|---|---|---|
| PO-04 LOST | The four time boxes: "<2 hours", "2-8 hours", ">8-24 hours", ">24 hours" | "Under 2 hours", "2 to 8 hours", "8 to 24 hours", "Over 24 hours" | p52 1414:1100:0:320 and 1414:1100:1414:320 |

There is no MISSING or DIFFERENT row.

### 2.3 ADDED

- `lvl`: "Will the results be back within 8 hours of ingestion?". The print has only the arrow labels "Results > 8 hours" and "Results < 8 hours"; "be back" and "of ingestion" are the app's reading.
- Which diamond belongs to which branch. The print has one "Commence N-acetylcysteine infusion" box (fed by ">8-24 hours", ">24 hours" and "Results > 8 hours") and under it one wide "Measure serum paracetamol concentration and LFT" box, from which two arrows drop: one at its left end to the diamond "above the normogram line or ALT ≥ 50U/L", one at its right end, under the ">24 hours" column, to the diamond "> 10mg/L (66 umol/L) or ALT ≥ 50U/L". No label says which patients take which arrow. The app gives the left diamond to 8 to 24 hours and to late results (`nac`, `nacq`) and the right diamond to over 24 hours (`nac24`, `nacq24`). That follows the layout, but it is a reading.

### 2.4 The flow

Every box, arrow label and coloured outcome box is in the app. Apart from the reading above and the dropped ">" (PO-04), there is no mismatch.

### 2.5 What the ebook prints

- Presentation: "Acute immediate release PCM ingestion >150mg/kg", by time since ingestion.
- Signs: not printed.
- Investigations: serum paracetamol concentration and LFT (within 4-8 hours of ingestion; again after starting N-acetylcysteine), the nomogram, ALT.
- Management: activated charcoal; N-acetylcysteine infusion; the footnote on consulting the emergency physician.
- Disposition: full dose N-acetylcysteine and admit; or medical treatment not required, psychiatry if intentional, discharge with advice after psychiatry clearance.

---

## 3. Renal colic: printed pages 53 to 54, app id `renal-colic`, `page` field right

### 3.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| RC-01 | 53 | presentation | "Clinical and history suggestive of ureteric colic" Yes / No | SAME | `susp` q | |
| RC-02 | 53 | flow | "Consider alternative diagnosis" | SAME | `alt` | |
| RC-03 | 53 | management | "Pain management (NSAIDS)" | SAME | `pain` step | |
| RC-04 | 53 | flow | "*Any urgent indication for urology referral" Yes / No | SAME | `urgent` q | |
| RC-05 | 53 | signs | "* Urgent indication for urology referral: fever / urosepsis / pyelonephritis" | SAME | `urgent` items[0] | p53 1150:600:1480:3050 |
| RC-06 | 53 | signs | "frank hematuria / anuria" | SAME | `urgent` items[1] | |
| RC-07 | 53 | signs | "pregnant" | SAME | `urgent` items[2] | |
| RC-08 | 53 | signs | "comorbidities - single kidney / transplanted kidney / autoimmune disease / heart disease / diabetes mellitus" | SAME | `urgent` items[3] | |
| RC-09 | 53 | investigation | "POCUS: hydroneprosis" Present / Absent | SAME | `pocus` q | |
| RC-10 | 53 | investigation | "Urgent KUB USG by radiology team", then to "Refer urology team" | SAME | `kub` step | |
| RC-11 | 53 | flow | "Resolution of symptoms" Yes / No | SAME | `resolve` q | |
| RC-12 | 53 | disposition | Red "Refer urology team" | SAME | `uro` | |
| RC-13 | 53 | disposition | Green "Discharge with discharge bunde with early TCA KUB usg and urology referral" | SAME | `home` title, items[0–1] | p53 700:320:380:3140 |
| RC-14 | 54 | discharge advice | "1. Stay hydrated and drink 6-8 glasses of water per day as directed to help decrease pain and flush blockages from urinary tract." | SAME | advice 1 | p54 1500:500:350:820 |
| RC-15 | 54 | discharge advice | "2. Strain urine every time you urinate and to bring any stones that passed out to the doctor for investigation" | SAME | advice 2 | |
| RC-16 | 54 | discharge advice | "3. Take regular pain medications as directed by the doctor." | SAME | advice 3 | |
| RC-17 | 54 | discharge advice | "4. Seek help at nearest hospital upon worsening of pain, fever, vomiting, and changes in urine; decrease in urine output, cloudiness and foul smell." | SAME | advice 4 | |
| RC-18 | 54 | discharge advice | "5. Keep active. Kidney stones are more common if you are not active or sit much of the day." | SAME | advice 5 | |
| RC-19 | 54 | discharge advice | "6. Rest, alcohol and seafood abstinence" | SAME | advice 6 | |
| RC-20 | 54 | reference | 1. "Carta Alir Pengurusan Pesakit Suspek Mengalami Batu Ureter Jabatan Kecemasan & Trauma, Hospital Kuala Lumpur" | SAME | refs[0] | |
| RC-21 | 54 | reference | 2. "Tintinalli" | SAME | refs[1] | |

### 3.2 LOST, MISSING, DIFFERENT

None.

### 3.3 ADDED

- `lead`: "Start with the history and examination." Not printed.
- `home` items[2]: "Give the discharge advice below."

(The ebook's chart is one page with no times, doses or stone sizes. The review times, the extra urgent indications and the stone-passage figures in the app are in the department note, with its own source, not in the ebook pathway.)

### 3.4 The flow

Matches the printed chart box for box: the same questions in the same order, the same arrow labels (Yes / No, Present / Absent) and the same red and green boxes.

### 3.5 What the ebook prints

- Presentation: "Clinical and history suggestive of ureteric colic" only.
- Signs: only the list of urgent indications for urology referral.
- Investigations: POCUS for hydronephrosis; urgent KUB USG by the radiology team.
- Management: "Pain management (NSAIDS)", with no drug or dose.
- Disposition: refer urology team; or discharge with the discharge bundle, an early TCA for KUB USG and a urology referral.

---

## 4. Supraventricular tachycardia: printed pages 55 to 56, app id `svt`, `page` field right

### 4.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| SV-01 | 55 | definition | "Supraventricular Tachycardia Heart Rate > 150bpm Regular, Narrow QRS < 0.12s" | SAME | `lead` | p55 1800:660:880:290 |
| SV-02 | 55 | other | Picture: an ECG rhythm strip beside the first box | MISSING | none | A picture, no text. |
| SV-03 | 55 | management | "Primary assessment using ABCDE approach Maintain Airway and O2 support (if SPO2 < 95%) Monitor Vital Signs 12 lead ECG Obtain IV Access and check blood gas and electrolytes" | SAME | `abcde` | |
| SV-04 | 55 | flow | "Signs of Instability" Yes / No | SAME | `unst` q | |
| SV-05 | 55 | signs | "Signs Of Instability Shock Syncope Ischemic Chest Pain Severe Heart Failure" | SAME | `unst` items | p55 1400:950:280:1040 |
| SV-06 | 55 | management | "Unstable Consult EP for Synchronized Cardioversion" | SAME | `cv` title | |
| SV-07 | 55 | management | "Synchronized Cardioversion: Sedation if patient is conscious / 70-120J (biphasic) / Up to 3 attempts / Consider lower voltage in frail or elderly" | SAME | `cv` items[0–1] | |
| SV-08 | 55 | management | "If refractory, can consider": six bullets | LOST | `cv` items[2] | The fifth bullet loses "or alternative pad placement". See 4.2. |
| SV-09 | 55 | disposition | Red "ADMIT Admission for evaluation and cardiac monitoring" | SAME | `cv` items[3], `adm` | |
| SV-10 | 55 | management | "Stable Medication or Maneuver" | CONDENSED | `unst` option "None" to `vagal` | The box label is not shown. |
| SV-11 | 55 | management | "Vagal Maneuvers Standard Valsalva Or Modified Valsalva" | SAME | `vagal` | p55 1188:1280:1640:1050 |
| SV-12 | 55 | management | "If vagal maneuver ineffective Adenosine (1st line) (Caution in asthmatics, avoid in patient with WPW with AF) 6mg rapid IV bolus / If unsuccessful, repeat with 12mg then 18mg" | SAME | `ad` step, items[0–1] | |
| SV-13 | 55 | flow | "If ineffective, consult EP" | SAME | `hf` hint | |
| SV-14 | 55 | flow | "Heart Failure" No / Yes | SAME | `hf` q | p55 1578:800:1250:2330 |
| SV-15 | 55 | management | "No Evidence of Heart failure: Verapamil 2-2.5mg IV over 2 minutes (2nd line) / Esmolol 0.5mg/kg/min over 1 minute then 0.05mg/kg/min infusion over 4 minutes (3rd line) / Consider synchronized cardioversion" | SAME | `vera` items[0–2] | |
| SV-16 | 55 | management | "Evidence of Heart Failure: Amiodarone 150mg IV followed by maintainence (refer next page) / Consider synchronized cardioversion" | SAME | `amio` items | |
| SV-17 | 55 | other | Dark red box: "CAUTION Concomitant use of CCB and beta-blocker may cause severe hypotensive and bradycardia effects" | SAME | `vera` items[3] | Printed as a free-standing box in the middle of the chart; in the app it is on the no-heart-failure step. |
| SV-18 | 55 | discharge criteria | "Discharge Criteria (Fulfill all three) 1. Recurrent SVT, and 2. No signs of Acute Coronary Syndrome (ACS), and 3. No signs of Left Ventricular Failure" | SAME | `dcq` checklist | The app adds "(as printed in the ebook)" to item 1. p55 1300:680:1500:3140 |
| SV-19 | 55 | flow | Arrows "Does not fulfill discharge criteria" (to ADMIT) and "Fulfil discharge criteria" (to DISCHARGE) | SAME | `dcq` options | |
| SV-20 | 55 | disposition | Green "DISCHARGE Arrange follow up with MAU FAST CLINIC for further investigation with a copy of ECG included" | SAME | `home` | |
| SV-21 | 55 | footnote | "Based on National Committee On Resuscitation Training (NCORT) guidelines" | CONDENSED | `lead` | App: "Based on NCORT guidelines." |
| SV-22 | 56 | drug table | Drugs Used for Termination of SVT, Adenosine, Dosage and Administration: 1st, 2nd and 3rd dose | LOST | table "Drugs used to terminate SVT" row 1, Dose | The flush after the 2nd and 3rd doses, the wait before the 3rd dose and "(eg. Antecubital)" are not in the app. See 4.2. |
| SV-23 | 56 | drug table | Adenosine: "*Reduce dose by 50% if to be administered through central line or patients on carbamazepine/Dipyridamole" | SAME | table row 1; `ad` items[2] | p56 1100:900:480:130 |
| SV-24 | 56 | drug table | Adenosine, Side Effects and Precautions: three numbered points | LOST | row 1, Precautions | The reason in point 3 is not in the app. See 4.2. |
| SV-25 | 56 | drug table | Verapamil: "2 – 2.5mg IV over 2 minutes If not effective Repeated doses 5-10mg every 15-30 minutes Maximum dose of 20mg" | SAME | row 2, Dose | p56 1100:700:480:1000 |
| SV-26 | 56 | drug table | Verapamil, Side Effects and Precautions: two numbered points | LOST | row 2, Precautions | "critically reduced cardiac output" is not in the app. Minor. See 4.2. |
| SV-27 | 56 | drug table | Amiodarone: "Loading dose (IV Bolus): 150mg dilute to 50ml using D5% over 30minutes (Max infusion rate: 30mg/minutes) Maintainence Dose: 360mg over next 6 hours (1mg/minute) Then 540mg over 18 hours (0.5mg/minute)" | SAME | row 3, Dose | p56 1100:700:480:1000 |
| SV-28 | 56 | drug table | Amiodarone, Side Effects and Precautions: four numbered points | LOST | row 3, Precautions | Point 1 is not in the app. See 4.2. |
| SV-29 | 56 | drug table | Esmolol, Dosage and Administration | LOST | row 4, Dose | Two per-hour equivalents, "over 4 minutes" on the repeat infusion and "Titrate according to response" are not in the app. See 4.2. |
| SV-30 | 56 | drug table | Esmolol, Side Effects and Precautions: "1. Concomittant use of CCB with Beta-blocker may cause severe bradycardia and hypotension 2. Put patient on cardiac monitoring for continuous BP and HR monitoring" | SAME | row 4, Precautions | |
| SV-31 | 56 | discharge advice | "1. Attacks like this may occur again. If episodes last only a few minutes and are not bothersome, treatment may not be necessary" | LOST | advice 1 | "Attacks like this may occur again" is not in the app. |
| SV-32 | 56 | discharge advice | "2. If episodes are prolonged or cause discomfort, simple maneuvers can be attempted while lying or sitting down to prevent fall injuries:" and three bullets | LOST | advice 2 | Where on the neck to massage, and "to prevent fall injuries", are not in the app. Minor. See 4.2. |
| SV-33 | 56 | discharge advice | "3. If an attack lasts more than 20 minutes or causes significant discomfort, return to the Emergency Department." | SAME | advice 3 | p56 1400:900:90:2700 |
| SV-34 | 56 | discharge advice | "4. Reducing smoking, caffeine-containing drinks, alcohol, drugs, or any known triggers can help prevent attacks." | CONDENSED | advice 4 | |
| SV-35 | 56 | discharge advice | "5. A specialist appointment will be scheduled, where further tests may be conducted to determine the need for additional treatment, which may include medication (tablets) or catheter ablation (a procedure to correct electrical system issues)." | CONDENSED | advice 5 | |
| SV-36 | 56 | reference | 1. "European Society of Cardiology (ESC) Guidelines For The Management Of Patients With Supraventricular Tachycardia 2019" | SAME | refs[0] | p56 1700:260:90:3620 |
| SV-37 | 56 | reference | 2. "Advanced Life Support Training Manual 2022, Ministry of Health Malaysia" | SAME | refs[1] | |
| SV-38 | 56 | reference | 3. "Quick Dosing & Dilution Guide of Common Intravenous Drugs In The Emergency Department 2018, Hospital Kuala Lumpur" | SAME | refs[2] | |

### 4.2 The LOST, MISSING and DIFFERENT rows in full

| # | Printed, exactly | App, exactly | Crop |
|---|---|---|---|
| SV-02 MISSING | A rhythm strip picture (no words) | nothing | p55 1800:660:880:290 |
| SV-08 LOST | "**If refractory, can consider** • Correct underlying cause • Ensure good pad-chest wall contact • IV Amiodarone • Alternative pad-position (Anterior-Posterior) • Deliver the 4th synchronized cardioversion (after Amiodarone or alternative pad placement) • Seek expert help" | "If refractory: correct the underlying cause, ensure good pad contact, IV amiodarone, alternative pad position (anterior-posterior), 4th synchronised shock after amiodarone, seek expert help" | p55 1400:950:280:1960 |
| SV-22 LOST | "**1st dose** 6mg IV rapid push (1-2 seconds) through a large (eg. Antecubital) vein followed by a 20mL normal saline flush / If not effective in 1-2minutes, give / **2nd dose** 12mg rapid bolus followed by 20mLs NS flush / If not effective in 1-2minutes, give / **3rd dose** 18mg rapid bolus followed by 20mLs NS flush" | "6 mg rapid IV push (1–2 s) through a large vein, 20 ml NS flush; if ineffective in 1–2 min, 12 mg, then 18 mg." | p56 1100:900:480:130 |
| SV-24 LOST | "1. Transient unpleasant side effects, in particular nausea, flushing and chest discomfort 2. Caution if need to be given in asthmatic patient 3. Avoid in WPW syndrome as AV node bloackade may promote conduction across accessory pathway causing ventricular fibrillation" | "Transient chest discomfort, nausea, flushing; caution in asthma; avoid in WPW" | p56 700:1000:1560:130 |
| SV-26 LOST | "1. May cause cardiovascular collapse if given to a patient with ventricular tachycardia 2. May decrease myocardial contractility and critically reduced cardiac output in patients with severe LV dysfunction" | "Cardiovascular collapse in ventricular tachycardia; reduced contractility in severe LV dysfunction" | p56 700:1400:1560:1000 |
| SV-28 LOST | "1. To be administer using infusion pump/drop med/flow rate meter into a large bore branula 2. Can cause hypotension, bradycardia and heart block 3. Cumulative dose > 2.2g are associated with hypotension 4. Possible inflammation of veins following IV infusion (large peripheral veins should be used)" | "Hypotension, bradycardia, heart block; cumulative over 2.2 g with hypotension; phlebitis (large vein)" | same |
| SV-29 LOST | "**Loading dose:** 0.5mg/kg/minute over 1 minute Then 0.05mg/kg/minute infusion over 4 minutes / If HR not controlled in 5 minutes, Repeat **loading dose over 1 minute** and continue with Maintainence infusion **0.1mg/kg/minute over 4 minutes** / May administer 3rd bolus if required, then continue Maintainence dose at **0.15mg/kg/minute (9mg/kg/hour)** / Titrate according to response **Max dose: 0.3mg/kg/minute (18mg/kg/hour)**" | "Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min; repeat loading if HR not controlled in 5 min, maintenance 0.1 mg/kg/min; 3rd bolus if needed, then 0.15 mg/kg/min; max 0.3 mg/kg/min" | p56 1100:760:480:1650 |
| SV-31 LOST | "Attacks like this may occur again. If episodes last only a few minutes and are not bothersome, treatment may not be necessary" | "Short attacks that are not bothersome may not need treatment" | p56 1400:900:90:2700 and 1400:900:1300:2700 |
| SV-32 LOST | "If episodes are prolonged or cause discomfort, simple maneuvers can be attempted while lying or sitting down to prevent fall injuries: • Take a deep breath in and then strain, as if trying to pass a bowel movement • Take a deep breath in, place the tip of the thumb in the mouth, and blow hard against the thumb. • Gently massage the front part of one side of the neck around the pulse area for 15 seconds (only if there is no known arterial disease)." | "For longer or uncomfortable episodes, try simple manoeuvres lying or sitting: take a deep breath and strain as if passing a bowel movement; or blow hard against your thumb in your mouth; or gently massage one side of the neck for 15 seconds (only if no known arterial disease)" | same |

There is no DIFFERENT row. Every dose, energy, time and maximum the app does give for SVT is the printed one.

### 4.3 ADDED

- `v1` "Reverted to sinus rhythm?" after the vagal manoeuvres, and `v2` "Reverted to sinus rhythm?" after adenosine, each with a Yes route to the discharge criteria. Neither question is printed. The print says only "If vagal maneuver ineffective" (the heading of the adenosine box) and "If ineffective, consult EP" (above the Heart Failure diamond); it does not draw where a patient goes once the rhythm reverts.
- `vera` and `amio` both lead on to the discharge criteria. In print the two treatment boxes have no arrow out; the discharge criteria box is fed by the line from the bottom of the "Heart Failure" diamond.
- `dcq` item 1: the remark "(as printed in the ebook)".
- `cv` title: "then admit" (the print draws it as three boxes: synchronised cardioversion, "If refractory, can consider", ADMIT).

### 4.4 The flow

1. The two "Reverted to sinus rhythm?" questions and their Yes routes are the app's (4.3).
2. The route into "Discharge Criteria (Fulfill all three)" is drawn from the Heart Failure diamond; the app reaches it from the two treatment steps and from the two added questions.
3. The unstable arm is three boxes in print and one outcome (`cv`) in the app; all the text is there except the phrase in SV-08.
4. The "Stable Medication or Maneuver" box has no node of its own.
5. The CAUTION box is on one step (`vera`), not free-standing.
6. Coloured boxes match: red ADMIT is the admit outcome (reached from the unstable arm and from "Does not fulfill discharge criteria"), green DISCHARGE is the discharge outcome.

### 4.5 What the ebook prints

- Presentation: "Heart Rate > 150bpm Regular, Narrow QRS < 0.12s", with a rhythm strip.
- Signs: signs of instability (shock, syncope, ischaemic chest pain, severe heart failure).
- Investigations: vital signs, 12 lead ECG, blood gas and electrolytes.
- Management: synchronised cardioversion and what to consider if refractory; vagal manoeuvres; adenosine; verapamil and esmolol; amiodarone; the drug table with dosage, side effects and precautions.
- Disposition: the three discharge criteria, discharge with MAU FAST clinic follow-up and a copy of the ECG, or admission for evaluation and cardiac monitoring.

---

## 5. Syncope: printed pages 57 to 58, app id `syncope`, `page` field right

### 5.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| SY-01 | 57 | definition | "Definition: Transient loss of consciousness associated with loss of postural tone, followed by a spontaneous return to baseline neurologic function requiring no resuscitative efforts" | SAME | `lead` | |
| SY-02 | 57 | flow | "Syncope" Yes / No | SAME | `true` q | |
| SY-03 | 57 | flow | "Manage alternatives condition eg. seizure, stroke, head trauma" | SAME | `alt` | |
| SY-04 | 57 | investigation | "History Examination ECG Diagnostic test as indicated eg. troponin" | SAME | `hx` items | |
| SY-05 | 57 | flow | "†Dangerous cause or *High risk factors" Yes / No | SAME | `risk` q | |
| SY-06 | 57 | disposition | Red "Admission for evaluation and cardiac monitoring" | SAME | `adm` | |
| SY-07 | 57 | other | Box on the No arrow: "Reflex syncope Vasovagal Carotid hypersentitivity Situational / Medication related / # Orthostatic hypotension" | SAME | `home` items[0] | Printed as a box before the green box; in the app it is the first line of the outcome. |
| SY-08 | 57 | disposition | Green "Observation and discharge Follow up at EMWATCH/ EMACC or PC clinic" | SAME | `home` title, items[1] | |
| SY-09 | 57 | footnote | "# A condition described by a significant reduction in blood pressure that typically occurs upon standing or assuming upright posture ( reduction of 20mmHg or more …" | LOST | `home` items[0], in brackets | "or more" (twice) and "could be a symptom of another disease" are not in the app. See 5.2. |
| SY-10 | 58 | signs | "† Dangerous cause Cardiac disease Arrhythmia Ischemic heart disease Valcular heart disease Pericardial effusion/tamponade Brugada, WPW, HOCM" | SAME | `risk` items[0] | p58 800:1040:340:300 |
| SY-11 | 58 | signs | "Pulmonary embolism" | SAME | `risk` items[1] | |
| SY-12 | 58 | signs | "Neurological disease Subarachnoid hemorrhage Subclavian steal syndrome Transient ischemic attack" | SAME | `risk` items[2] | |
| SY-13 | 58 | signs | "Hemorrhage Gi bleed Trauma-associated Ruptured ectopic Ruptured ovarian cyst" | SAME | `risk` items[3] | |
| SY-14 | 58 | signs | "*High risk factors: History of cardiac disease eg. heart failure" | SAME | `risk` items[4] | p58 1220:620:1390:300 |
| SY-15 | 58 | signs | "Family history of sudden death" | SAME | `risk` items[5] | |
| SY-16 | 58 | signs | "Older age and associated comorbidities" | SAME | `risk` items[6] | |
| SY-17 | 58 | signs | "Shortness of breath with event or during ED evaluation" | SAME | `risk` items[7] | |
| SY-18 | 58 | signs | "Persistent low blood pressure (<90 mmHg systolic)" | SAME | `risk` items[8] | |
| SY-19 | 58 | signs | "Abnormal ECG findings (eg. arrhythmia, LBBB, ischemia)" | LOST | `risk` items[9]: "Abnormal ECG (arrhythmia, LBBB, ischaemia)" | "eg." is dropped, so the three read as the whole list. Minor. |
| SY-20 | 58 | signs | "Hematocrit < 30" | SAME | `risk` items[10] | |
| SY-21 | 58 | signs | "High sensitivity Troponin elevated" | SAME | `risk` items[11] | |
| SY-22 | 58 | discharge advice | "1. Return to hospital immediately if you experience collapse or fainting associated with any of the following: - Exertion or effort - Headache, chest pain, palpitations or shortness of breath - More episodes of fainting at home" | SAME | advice 1 | p58 1300:960:230:1840 |
| SY-23 | 58 | discharge advice | "2. Avoid precipitating factors such as prolonged standing in queues or hot weather" | SAME | advice 2 | |
| SY-24 | 58 | discharge advice | "3. Take adequate fluid." | SAME | advice 3 | |
| SY-25 | 58 | discharge advice | "4. Ensure compliance to medications as prescribed by doctor." | SAME | advice 4 | |
| SY-26 | 58 | discharge advice | "5. Avoid activities in which fainting may endanger life such as climbing to high places, swimming, driving" | SAME | advice 5 | |
| SY-27 | 58 | discharge advice | "6. Always sit for 1-2 minutes before standing in the morning or getting out of chair if you are prone to dizziness or blackout in this situation." | LOST | advice 6 | "or blackout" is not in the app. Minor. |
| SY-28 | 58 | reference | 1. "Emergency department approach to an adult patient with syncope. Uptodate.June 29 202" | CONDENSED | refs[0] | The print's date is cut off after "202"; the app gives no date. p58 1700:320:300:2980 |
| SY-29 | 58 | reference | 2. "Syncope discharge advice (Including A Guide To Falls Clinic). NHS. City Hospitals Sunderland. 2010." | CONDENSED | refs[1] | |
| SY-30 | 58 | reference | 3. "Syncope. MyHealth KKM." | SAME | refs[2] | |

### 5.2 The LOST, MISSING and DIFFERENT rows in full

| # | Printed, exactly | App, exactly | Crop |
|---|---|---|---|
| SY-09 LOST | "# A condition described by a significant reduction in blood pressure that typically occurs upon standing or assuming upright posture ( reduction of 20mmHg or more in systolic pressure or reduction of 10mmHg or more in diastolic pressure); could be a symptom of another disease" | "orthostatic hypotension (a fall of 20 mmHg systolic or 10 mmHg diastolic on standing)" | p57 1400:160:220:3410 and 1400:160:1500:3410 |
| SY-19 LOST | "Abnormal ECG findings (eg. arrhythmia, LBBB, ischemia)" | "Abnormal ECG (arrhythmia, LBBB, ischaemia)" | p58 1220:620:1390:300 |
| SY-27 LOST | "Always sit for 1-2 minutes before standing in the morning or getting out of chair if you are prone to dizziness or blackout in this situation." | "Sit for 1–2 minutes before standing in the morning or getting up from a chair if prone to dizziness" | p58 1300:960:230:1840 and 1300:960:1450:1840 |

There is no MISSING or DIFFERENT row.

### 5.3 ADDED

Nothing of substance. "Is this syncope?" is the app's wording of the start box, and the dagger list and the asterisk list are one checklist.

### 5.4 The flow

Matches the printed chart: the same boxes, arrow labels and red and green outcome boxes. The only change of place is SY-07.

### 5.5 What the ebook prints

- Presentation: the definition only.
- Signs: within the high risk factors (shortness of breath, persistent low blood pressure under 90 mmHg systolic); the orthostatic hypotension footnote.
- Investigations: history, examination, ECG, "Diagnostic test as indicated eg. troponin"; haematocrit and high sensitivity troponin appear in the high risk factors.
- Management: not printed.
- Disposition: admission for evaluation and cardiac monitoring; or observation and discharge with follow-up at EMWATCH, EMACC or PC clinic.

---

## 6. Acute scrotal pain: printed pages 59 to 63, app id `scrotal-pain`, `page` field right

### 6.1 Rows

| # | Page | Kind | Printed text (first words) | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| SC-01 | 59 | flow | "START", "ACUTE SCROTUM PAIN" | CONDENSED | title | |
| SC-02 | 59 | flow | "*PHYSICAL EXAMINATION BY EMERGENCY MEDICAL OFFICER" | SAME | `lead` | In the lead, not a node. |
| SC-03 | 59 | flow | "TESTICULAR TORSION?" YES / NO | SAME | `tt` q | |
| SC-04 | 59 | flow | "ONSET PAIN <6 HOUR" YES / NO | SAME | `onset` q | p59 1100:800:520:1540 |
| SC-05 | 59 | flow | "** URGENT REFERRAL TO UROLOGY/ PEDIATRIC SURGERY" | SAME | `urgent` title | |
| SC-06 | 59 | flow | "**** SEMI-URGENT REFERRAL TO UROLOGY/ PEDIATRIC SURGERY +/- SCROTUM ULTRASOUND" | SAME | `semi` step | |
| SC-07 | 59 | flow | Second "TESTICULAR TORSION?" YES / NO | SAME | `tt2` q | |
| SC-08 | 59 | disposition | "***EMERGENCY OPERATION & WARD ADMISSION", END | SAME | `urgent` items[1], `op` | |
| SC-09 | 59 | flow | "#DIAGNOSIS OTHER THAN TESTICULAR TORSION (NO OPERATION NEEDED)" | LOST | `tt` option "No, another diagnosis" | "(NO OPERATION NEEDED)" is not in the app. Minor. |
| SC-10 | 59 | flow | "NON-URGENT REFERRAL TO UROLOGY/ PEDIATRIC SURGERY" for every diagnosis other than torsion | DIFFERENT | `fg` and `abs`: "Semi-urgent referral …"; `epi`: "Non-urgent referral …" | The ebook's own two charts differ here; the app follows page 60. See 6.2. |
| SC-11 | 59 | disposition | "##DISCHARGE & 'DISCHARGE BUNDLE'", END (after the non-urgent referral) | CONDENSED | `epi` items[4] | App: "If authorised for home: give the discharge bundle"; the bundle's four items are listed only on `bundle`. |
| SC-12 | 59 | disposition | "WARD ADMISSION", END (after the non-urgent referral) | MISSING | none on the non-torsion side | The app's only "ward admission" is with the emergency operation. |
| SC-13 | 60 | flow | Title "Clinical Pathway For Non-testicular Torsion"; "Testicular torsion excluded?" No, red "Testicular torsion algorithm" | CONDENSED | `tt` q | |
| SC-14 | 60 | flow | "Focused history & clinical examination" | MISSING | none | `dx` asks "Which diagnosis?" directly. |
| SC-15 | 60 | presentation | Fournier's gangrene column, RISK FACTORS | MISSING | none | See 6.2. p60 640:2000:230:1300 |
| SC-16 | 60 | presentation | Fournier's gangrene column, Symptoms | MISSING | none | |
| SC-17 | 60 | signs | Fournier's gangrene column, Signs | MISSING | none | |
| SC-18 | 60 | presentation | Scrotal abscess column, RISK FACTORS | MISSING | none | p60 640:2000:1090:1300 |
| SC-19 | 60 | presentation | Scrotal abscess column, Symptoms | MISSING | none | |
| SC-20 | 60 | signs | Scrotal abscess column, Signs | MISSING | none | |
| SC-21 | 60 | presentation | Acute epididymitis / epididymo-orchitis column, RISK FACTORS | MISSING | none | p60 640:2000:1990:1300 |
| SC-22 | 60 | presentation | Acute epididymitis / epididymo-orchitis column, Symptoms | MISSING | none | |
| SC-23 | 60 | signs | Acute epididymitis / epididymo-orchitis column, Signs | MISSING | none | |
| SC-24 | 60 | flow | "FORNIER'S GANGRENE", to red "*** Semi-urgent referral to Urology / Paediatric surgery (KIV scrotal U/S)" | SAME | `dx` option 1, `fg` title | p60 1300:620:200:3240 |
| SC-25 | 60 | flow | "SCROTAL ABCESS", to the same red box | SAME | `dx` option 2, `abs` title | |
| SC-26 | 60 | flow | "ACUTE EPIDIDYMITIS / EPIDIDYMO-ORCHITIS", to red "# Non urgent referral to Urology/ Paediatric surgery" | SAME | `dx` option 3, `epi` title | p60 1300:620:1450:3240 |
| SC-27 | 60 | footnote | The mark "***" on the semi-urgent box of this chart | LOST | `fg`, `abs` | The two outcomes carry no time limit at all. On page 61 "***" is the one-hour theatre note and "****" is the semi-urgent note (seen within 1-2 hours); the print's marks do not agree, and the app shows neither on these outcomes. |
| SC-28 | 61 | footnote | "* Physical examination by Emergency Department medical officer should be performed and not later than 30 minutes from the time of arrival (in accordance with the department's triage protocol)." | CONDENSED | `lead` | The bracket is dropped. p61 1250:1100:330:520 |
| SC-29 | 61 | footnote | "** Immediate referral to an on-call specialist/ medical officer from Urology/ Paediatric Surgery should be seen within 30 minutes from referral time." | SAME | `urgent` items[0] | |
| SC-30 | 61 | footnote | "Patient who is more than 12 years old need to be referred to doctor from urology department, while patient who is under 12 years old needs to be referred to doctor from paediatric surgery department." | DIFFERENT | `lead`: "Patients 12 and over go to urology; under 12 go to paediatric surgery." | Print "more than 12"; app "12 and over". See 6.2. |
| SC-31 | 61 | footnote | "*** Upon review by primary team, and the patient MUST be in emergency operation theatre within 1 hour from review time." | LOST | `urgent` items[1] only | On `op` (torsion found after the semi-urgent referral) the one-hour limit is not shown, though the print marks the same "***EMERGENCY OPERATION" box for both routes. |
| SC-32 | 61 | footnote | "**** Semi-urgent referral to a on-call specialist/ medical officer … within 1-2 hours from referral time. An urgent scrotum ultrasound (sensitivity 96-100%, specificity 84-95%) …" | LOST | `semi` items | The sensitivity and specificity, and who the ultrasound is ordered from, are not in the app. See 6.2. |
| SC-33 | 61 | footnote | "# Upon clinical diagnosis which is other than testicular torsion, emergency medical officer has to refer to urology/ paediatric surgery medical officer on-call, and the primary team has to review patient within 4 hours from referral time. No paediatric patients can be discharge from emergency department without primary team evaluation." | SAME | `epi` items[0] | Shown on `epi` only, as page 60 marks it; page 59 puts the "#" on every diagnosis other than torsion. p61 1250:1150:330:1600 |
| SC-34 | 61 | footnote | "## If the patient is authorized to return home by Urology/ Paediatric Surgery doctor, emergency medical officer MUST ensure that the patient is given a 'Discharge Bundle' consisting of:" | SAME | `bundle` title, `epi` items[4] | |
| SC-35 | 61 | disposition | "i. Medication : Analgesia , Antibiotics" | SAME | `bundle` items[0] | |
| SC-36 | 61 | disposition | "ii. After care instructions (eg non pharmacotherapy, physiotherapy)" | SAME | `bundle` items[1] | |
| SC-37 | 61 | disposition | "iii. Follow-up dates at relevant clinics : Urology clinic/ Paediatric Surgery / EM watch" | SAME | `bundle` items[2] | |
| SC-38 | 61 | disposition | "iv. Letters/ memos regarding the treatment given." | SAME | `bundle` items[3] | |
| SC-39 | 62 | drug table | Antibiotic guides, column heads: "Disease", "Antibiotics", "Adult", "Paediatric/ adolescent" | LOST | `fg`, `abs`, `epi` items | "adolescent" is not in the app, and the abscess regimen is not labelled Adult. Minor. |
| SC-40 | 62 | drug table | Acute epididymitis / epididymo-orchitis, Adult: "Non-STD related PO Ciprofloxacin 500mg BD for 2 weeks" | SAME | `epi` items[1] | p62 820:820:890:620 |
| SC-41 | 62 | drug table | "STD – related (gonorrhea and chalmydia): IM Ceftriaxone 500mg STAT PLUS PO Azithromycin 500mg stat PLUS PO Doxycycline 100mg bd for 14 days *initiate if high risk (no rapid kit in ED)" | SAME | `epi` items[2] | |
| SC-42 | 62 | drug table | Paediatric/ adolescent: "Only if pyuria / positive culture/ underlying GU abnormality PO Cephalexin 25-50mg tds/qid" | SAME | `epi` items[3] | The print gives "25-50mg" with no per-kilogram unit; the app copies it so. p62 800:820:1670:620 |
| SC-43 | 62 | drug table | Fournier's gangrene, Adult: "1ST Line : IV Piperacillin tazobactam 4.5g stat & qid Or IV Ceftriaxone 2g stat & OD PLUS IV Metronidazole 500mg stat & tds 2nd line : IV Unasyn 3g stat & QID" | SAME | `fg` items[0] | p62 820:720:890:1400 |
| SC-44 | 62 | drug table | Fournier's gangrene, Paediatric/ adolescent: "Group A Strep. : IV Benzylpenicillin 200,000 – 300,000 units/kg in 4-6 divided doses PLUS IV Clindamycin 20-40mg/kg/day in 3-4 divided doses Non streptococcus Staph. A group : IV Cloxacillin 20-40mg/kg/day in 3-4 divided doses" | LOST | `fg` items[1] | Every number is the same; the label "Staph. A group :" is dropped. Minor. p62 800:720:1670:1400 |
| SC-45 | 62 | drug table | Scrotal abscess, Adult: "1st line : IV Amoxillin/clavulanate 1.2 g stat & tds Or IV Ampicillin/sulbactam 3g stat and qid Or IV Cefuroxime 750mg qid 2nd line : IV Ceftriaxone 2g od" | SAME | `abs` items[0] | The Paediatric/ adolescent cell is empty in print. p62 820:860:890:2090 |
| SC-46 | 62 | footnote | "*Based on antiobiotic guidelines Uptodate 2023." | MISSING | none | Not in the nodes or the references. p62 1300:140:380:2870 |
| SC-47 | 63 | discharge advice | "1. Take regular pain medications" | SAME | advice 1 | |
| SC-48 | 63 | discharge advice | "2. Limit your activity until your pain decreases. Get more rest while you heal. Do not sit for long periods of time." | CONDENSED | advice 2 | |
| SC-49 | 63 | discharge advice | "3. Place cold packs on your testicles to help ease your pain. Use cold packs as directed." | CONDENSED | advice 3 | |
| SC-50 | 63 | discharge advice | "4. Gently tuck a folded towel under your testicles to lift them as you sit in a chair or lie in bed. This will help ease your pain and decrease swelling." | CONDENSED | advice 4 | |
| SC-51 | 63 | discharge advice | "5. Avoid sexual activity until you have finished your antibiotics or until your doctor tells you it is safe to have sex. Use condoms to lower your risk of STIs." | CONDENSED | advice 5 | |
| SC-52 | 63 | discharge advice | "6. Seek help at nearest hospital upon worsening of pain, fever, vomiting, and changes in colour of the testicles." | SAME | advice 6 | |
| SC-53 | 63 | other | Bold note under the advice box: "*No acute testicular pain should be discharge from Emergency Department before seen by Emergency Physician, Urologist or Paediatric Surgeon." | MOVED | advice 7 | A rule for the doctor, placed in the patient's advice list (the list that Copy advice copies). It is not on any node or outcome. |
| SC-54 | 63 | reference | 1. "Epididymitis", StatPearls, updated 2023 May 30, with its address | CONDENSED | refs[0] | Addresses and dates of update are dropped in all six. |
| SC-55 | 63 | reference | 2. "Orchitis", StatPearls, updated 2022 Dec 3, with its address | CONDENSED | refs[1] | |
| SC-56 | 63 | reference | 3. "Fournier Gangrene in the Emergency Department: Diagnostic Dilemmas, Treatments and Current Perspectives", Open Access Emerg Med, 2020 | CONDENSED | refs[2] | |
| SC-57 | 63 | reference | 4. "Management of Fournier's gangrene: an eleven year retrospective analysis of early recognition, diagnosis, and treatment", The American surgeon, 2002 | CONDENSED | refs[3] | |
| SC-58 | 63 | reference | 5. *Tintinalli's Emergency Medicine* 9th edition, "Male Genital Problems", Chapter 93 (pp 591- 597), 2020 | CONDENSED | refs[4] | |
| SC-59 | 63 | reference | 6. "Fournier Gangrene Treatment & Management", with its Medscape address | CONDENSED | refs[5] | |

### 6.2 The LOST, MISSING and DIFFERENT rows in full

| # | Printed, exactly | App, exactly | Crop |
|---|---|---|---|
| SC-09 LOST | "#DIAGNOSIS OTHER THAN TESTICULAR TORSION (NO OPERATION NEEDED)" | option "No, another diagnosis" | page image p59 |
| SC-10 DIFFERENT | Page 59: "TESTICULAR TORSION?" NO, "#DIAGNOSIS OTHER THAN TESTICULAR TORSION (NO OPERATION NEEDED)", then "**NON-URGENT** REFERRAL TO UROLOGY/ PEDIATRIC SURGERY", then either "##DISCHARGE & 'DISCHARGE BUNDLE'" or "WARD ADMISSION". Page 60: Fournier's gangrene and scrotal abscess, "*** Semi-urgent referral to Urology / Paediatric surgery (KIV scrotal U/S)"; acute epididymitis / epididymo-orchitis, "# Non urgent referral to Urology/ Paediatric surgery" | `fg` and `abs`: "Semi-urgent referral to urology or paediatric surgery (KIV scrotal ultrasound)"; `epi`: "Non-urgent referral to urology or paediatric surgery" | page image p59; p60 1300:620:200:3240 and 1300:620:1450:3240 |
| SC-12 MISSING | "WARD ADMISSION" then "END" (one of the two boxes after the non-urgent referral) | nothing | page image p59 |
| SC-14 MISSING | "Focused history & clinical examination" | nothing | page image p60 |
| SC-15 MISSING | RISK FACTORS: "Immunocompromised e.g. Diabetics, alcoholics / Vascular diseases / Male / Post genitourinary procedufres" | nothing | p60 640:2000:230:1300 |
| SC-16 MISSING | Symptoms: "Systemic : hypotension, shock, multiorgan failure, fever, lethargy / Local : pain (out of proportion)" | nothing | same |
| SC-17 MISSING | Signs: "Swelling, dusky, erythema, fluctuant , gangrene / Late : bullae, crepitus , (clostridium sp.), abdominal wall extension" | nothing | same |
| SC-18 MISSING | RISK FACTORS: "Preceding small pustules, hair follicle infections, scrotal laceration / Immunocompromised : diabetes, IVDUs / Shavings" | nothing | p60 640:2000:1090:1300 |
| SC-19 MISSING | Symptoms: "Systemic : fever, lethargy / Local : scrotal , abdominal pain" | nothing | same |
| SC-20 MISSING | Signs: "Localised : superficial hair follicle wall swelling, round/ conical nodules, warm , erythema / Deep : diffuse swelling, fluctuant" | nothing | same |
| SC-21 MISSING | RISK FACTORS: "Young male : 20-40s ( STDs risk) repetitive trauma from sports / Elderly : retrograde urine flow, long term CBD, bladder outlet obstruction / Children : Mumps, viral infection" | nothing | p60 640:2000:1990:1300 |
| SC-22 MISSING | Symptoms: "UTI, scrotal pain, flank pain, urethral discharge" | nothing | same |
| SC-23 MISSING | Signs: "Scrotal swelling, ternderness over posterior & superior part of testis, erythema, induration, / Inguinal adenopathy / Induration / Genital warts / Cremasteric reflex : either present or absent / Testicular position: vertical lie(normal) / Phren's sign : may be present" | nothing | same |
| SC-27 LOST | "*** Semi-urgent referral to Urology / Paediatric surgery (KIV scrotal U/S)", where page 61 reads "*** Upon review by primary team, and the patient **MUST be in emergency operation** theatre **within 1 hour from review time.**" and "**** **Semi-urgent referral** … should be seen **within 1-2 hours from referral time**" | `fg` and `abs` titles: "Semi-urgent referral to urology or paediatric surgery (KIV scrotal ultrasound)", with the antibiotics and no time | p60 1300:620:200:3240; p61 1250:1100:330:520 |
| SC-30 DIFFERENT | "Patient who is more than 12 years old need to be referred to doctor from urology department, while patient who is under 12 years old needs to be referred to doctor from paediatric surgery department." | "Patients 12 and over go to urology; under 12 go to paediatric surgery." | p61 1250:1100:330:520 and 1250:1100:1380:520 |
| SC-31 LOST | "*** Upon review by primary team, and the patient **MUST be in emergency operation** theatre **within 1 hour from review time.**" | `urgent` items[1]: "Emergency operation within 1 hour of review, and ward admission"; `op`: "Emergency operation and ward admission", no items | same |
| SC-32 LOST | "**** **Semi-urgent referral** to a on-call specialist/ medical officer from Urology/ Paediatric Surgery should be seen **within 1-2 hours from referral time**. An **urgent scrotum ultrasound** (sensitivity 96-100%, specificity 84-95%) should **only be ordered by the primary team** to the on-call specialist/ medical officer of Radiology department. The **ultrasound must be performed within an hour** from requested time." | "Seen within 1–2 hours of referral"; "± urgent scrotal ultrasound: ordered only by the primary team, done within 1 hour of request" | p61 1250:1150:330:1600 and 1250:1150:1380:1600 |
| SC-39 LOST | Column heads "Adult" and "Paediatric/ adolescent" | `fg`: "Adult 1st line: …", "Paediatric: …"; `epi`: "Paediatric (only if …)"; `abs`: "1st line: …" with no "Adult" | page image p62 |
| SC-44 LOST | "**Non streptococcus** Staph. A group : IV Cloxacillin 20-40mg/kg/day in 3-4 divided doses" | "non-strep: IV cloxacillin 20–40 mg/kg/day in 3–4 doses" | p62 800:720:1670:1400 |
| SC-46 MISSING | "*Based on antiobiotic guidelines Uptodate 2023.*" | nothing | p62 1300:140:380:2870 |

Notes:

- **SC-10:** the app is the same as page 60 and different from page 59. Under page 59, Fournier's gangrene and a scrotal abscess would go to a non-urgent referral with the "#" note (reviewed within 4 hours), then to the discharge bundle or the ward. The app cannot show both; it shows page 60 and does not say that page 59 differs.
- **SC-30:** the print leaves a patient of exactly 12 unassigned ("more than 12", "under 12"). The app sends that patient to urology.
- **SC-15 to SC-23:** these nine boxes are all the ebook prints on how to tell the three diagnoses apart. The app keeps the three names only, as the options of "Which diagnosis?".

### 6.3 ADDED

- `dx`: the question "Which diagnosis?".
- `tt2`: "Testicular torsion **confirmed**?" (the print repeats "TESTICULAR TORSION?").
- `bundle` title: "(only if authorised by urology or paediatric surgery)"; `epi` items[4] "If authorised for home: give the discharge bundle". Both come from the "##" note.
- The antibiotics are placed inside the `fg`, `abs` and `epi` referral outcomes. In print they are a separate table, "Antibiotic guides", on page 62.
- `semi`: "± **urgent** scrotal ultrasound" (the chart says "+/- SCROTUM ULTRASOUND"; "urgent" is from the "****" note).

### 6.4 The flow

1. Torsion side (page 59): matches. Both routes reach the printed "***EMERGENCY OPERATION & WARD ADMISSION" box, but the app's `op` outcome leaves out the one-hour limit (SC-31).
2. Non-torsion side, page 59: one "NON-URGENT REFERRAL" for every other diagnosis, ending in the discharge bundle or "WARD ADMISSION". The app has no such single step, and no ward admission outcome (SC-10, SC-12).
3. Non-torsion side, page 60: "Testicular torsion excluded?", "Focused history & clinical examination" and nine boxes of risk factors, symptoms and signs are replaced by one question with three options (SC-14 to SC-23). The three end boxes and their two red referral boxes are in the app.
4. `fg` and `abs` show no time limit (SC-27).
5. The footnote marks do not agree between the print's own pages (page 60 puts "***" on the semi-urgent box; page 61 defines "****" as semi-urgent). This is the print's, reported as it is.
6. Colours: page 59 is black and white. On page 60 the red boxes are "Testicular torsion algorithm" and the two referrals; in the app these are refer outcomes.

### 6.5 What the ebook prints

- Presentation: risk factors and symptoms for Fournier's gangrene, scrotal abscess and acute epididymitis or epididymo-orchitis (page 60). Nothing for testicular torsion itself beyond "ONSET PAIN <6 HOUR".
- Signs: the signs boxes for the same three diagnoses (page 60). None for torsion.
- Investigations: "+/- SCROTUM ULTRASOUND" with its sensitivity and specificity; "(KIV scrotal U/S)".
- Management: the referral and review times, emergency operation within 1 hour of review, the antibiotic guides.
- Disposition: emergency operation and ward admission; discharge with the discharge bundle; ward admission; the note that no acute testicular pain is discharged before review by an Emergency Physician, Urologist or Paediatric Surgeon.

---

## Summary

| Pathway | Rows | SAME | CONDENSED | LOST | MISSING | DIFFERENT | MOVED |
|---|---|---|---|---|---|---|---|
| Pain management | 105 | 56 | 24 | 10 | 9 | 4 | 1 |
| Paracetamol overdose | 24 | 19 | 4 | 1 | 0 | 0 | 0 |
| Renal colic | 21 | 21 | 0 | 0 | 0 | 0 | 0 |
| Supraventricular tachycardia | 38 | 25 | 4 | 8 | 1 | 0 | 0 |
| Syncope | 30 | 25 | 2 | 3 | 0 | 0 | 0 |
| Acute scrotal pain | 59 | 21 | 14 | 6 | 12 | 2 | 1 |
| **All six** | **277** | **167** | **48** | **28** | **22** | **6** | **2** |

(The counts are taken from the row tables above by script.)

### Every DIFFERENT item, in order of clinical weight

1. **PA-79, paracetamol under 50 kg (page 50).** Print: "<50kg: 15mg/kg/dose, Max 60mg/kg/dose". App: "Under 50 kg: 15 mg/kg/dose, max 60 mg/kg/day". The calculator "Analgesia by weight" repeats the app's version.
2. **PA-94 and PA-97, morphine and fentanyl in renal and hepatic dysfunction (page 50).** Print: "needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount". App: "reduce initial dose to 1/2–1/3".
3. **PA-75, the morphine pain protocol's exit (page 49).** Print: once the pain score is no longer over 6, "Refer to Clinical Pathway for Pain (1) & (2)". App: straight to the discharge outcome.
4. **SC-10, referral for Fournier's gangrene and scrotal abscess (pages 59 and 60).** Page 59 prints a non-urgent referral for every diagnosis other than torsion; page 60 prints a semi-urgent referral for these two. The app follows page 60 and does not mention page 59.
5. **SC-30, the age rule (page 61).** Print: "more than 12 years old" to urology, "under 12 years old" to paediatric surgery. App: "12 and over" to urology.

### Every MISSING item, in order of clinical weight

1. **SC-15 to SC-23 (page 60):** the nine boxes of risk factors, symptoms and signs for Fournier's gangrene, scrotal abscess and acute epididymitis or epididymo-orchitis.
2. **PA-80, 84, 87, 90, 93, 96, 99 (page 50):** the whole "Side effect" column of the Choice of Analgesia table, for all eight drugs.
3. **SC-12 (page 59):** the "WARD ADMISSION" outcome for a diagnosis other than torsion.
4. **SC-14 (page 60):** "Focused history & clinical examination".
5. **PA-39 (page 47):** "Cumulative Pain score 0-10".
6. **SC-46 (page 62):** "*Based on antiobiotic guidelines Uptodate 2023."
7. **PA-45 (page 47):** "Modified from MOH Pain Pathway for Doctors".
8. **SV-02 (page 55):** the rhythm strip picture.

### LOST items that carry a number, dose or criterion

- **SV-29 esmolol (page 56):** "0.1mg/kg/minute **over 4 minutes**", "0.15mg/kg/minute **(9mg/kg/hour)**", "**Titrate according to response**", "Max dose: 0.3mg/kg/minute **(18mg/kg/hour)**".
- **SV-22 adenosine (page 56):** "followed by 20mLs NS flush" after the 2nd and the 3rd dose, the second "If not effective in 1-2minutes, give", and "(eg. Antecubital)".
- **SV-28 amiodarone (page 56):** "To be administer using infusion pump/drop med/flow rate meter into a large bore branula".
- **SV-08 (page 55):** "Deliver the 4th synchronized cardioversion (after Amiodarone **or alternative pad placement**)".
- **SV-24, SV-26 (page 56):** the reason to avoid adenosine in WPW; "critically reduced cardiac output" with verapamil.
- **SC-32 (page 61):** "(sensitivity 96-100%, specificity 84-95%)" and "to the on-call specialist/ medical officer of Radiology department".
- **SC-31 (page 61):** "within 1 hour from review time" is not on the `op` outcome.
- **SC-27 (pages 60 and 61):** no time limit on the Fournier's gangrene and scrotal abscess outcomes.
- **SC-44, SC-39 (page 62):** "Staph. A group"; "adolescent"; no "Adult" on the abscess regimen.
- **SY-09 (page 57):** "20mmHg **or more**", "10mmHg **or more**", "could be a symptom of another disease".
- **SY-19 (page 58):** "eg." in "Abnormal ECG findings (eg. arrhythmia, LBBB, ischemia)".
- **PA-15 (page 45):** "(Malaysian-only)", "Outpatient Department (Specific to diagnosis)", "FAST Clinic".
- **PA-88, PA-91, PA-92 (page 50):** two celecoxib cautions; tramadol "(to avoid if possible)"; morphine "(Adults)" and "Starting dose".
- **PA-47, 49, 50, 51 (page 48):** FLACC descriptors.
- **PO-04 (page 52):** the ">" of ">8-24 hours".

### MOVED

- **PA-77 (page 49):** the anaphylaxis, liver disease and kidney disease note is shown only on the "Consult EP to stabilise" outcome.
- **SC-53 (page 63):** the rule that no acute testicular pain is discharged before review is item 7 of the patient's discharge advice.

### Overall

- Renal colic, paracetamol overdose and syncope are the print, shortened: every box, threshold and outcome is there, and only qualifiers are gone.
- SVT has every dose, energy and time right in the flow, but its drug table and advice are condensed, and eight rows lose detail (most of it in the esmolol and adenosine rows).
- Pain management carries the charts and the scales, but three numbers or sums differ from the print, the protocol's exit differs, and the side effect column is gone.
- Acute scrotal pain is the most condensed: the whole of the page 60 chart except its three diagnosis names and two referral boxes is missing, the app silently follows page 60 where page 59 disagrees, and the age rule is worded differently.
