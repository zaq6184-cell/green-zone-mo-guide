# Head injury CPG (2015): line-by-line review for the Green Zone MO Guide

**In the app since 9 Nov 2026** (Academy CPG round): the entry *Head injury in adults: CPG 2015* (`#head-injury-cpg`) beside the ebook's mild TBI pathway, with five reference tabs (Severity, CT and imaging, Observation, Advice card, Anticoagulants) and a Glasgow Coma Scale calculator (`#calc-gcs`) read from Appendix 3. A CT criteria calculator was not built: the ebook's own (`#calc-head`) stays, and the differences are under Still to confirm in the app.

**Source:** *Clinical Practice Guidelines: Early Management of Head Injury in Adults*. Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. "These guidelines were issued in 2015 and will be reviewed in a minimum period of four years (2019)" (PDF page 2). ISBN 978-967-0769-45-5; publication code MOH/P/PAK/304.15(GU) on the cover, with the logos of the Ministry of Health, the Neurosurgical Association of Malaysia and the Academy of Medicine of Malaysia. No edition number is printed; the introduction calls it "this first evidence-based local CPG" (p1).

**File reviewed (read-only, not moved or changed):** `C:\Users\user\Documents\Codex\2026-11-09\dedicated-loop-would\outputs\AMM Clinical Practice Guidelines\Neurology & Neurosurgery\2015 - Early Management of Head Injury in Adults [779].pdf`. 84 PDF pages, 19,547,050 bytes; SHA-256 b49ff18cce86d0765f2ae6e60a50be5f2dddcf9c30a57933aeaa1d0e08ef01c7 (manifest).

**Copyright (PDF page 2):** "The copyright owner of this publication is MaHTAS. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context."

**Reviewed:** 9 Nov 2026, from the PyMuPDF text layer of every page (all 82 inner pages have one; the two covers are images), with page images for the cover, all seven algorithms (p viii to xiv), Table 1 (p5), the Recommendation 7 box and the box after it (p18–19), Recommendations 9 and 10 (p22–23), the discharge criteria box and Recommendation 11 (p24), Recommendation 17 (p38), Appendices 3 to 6 (p52–55), Appendix 11 (p60–61) and the back cover. Box colours were read from the PDF drawing layer.

## Is this the published MaHTAS version?

Nothing seen suggests an altered copy, but only MaHTAS's own file would confirm it byte for byte.

- **Matches the publication:** the cover title and code MOH/P/PAK/304.15(GU); the publisher block, copyright, ISBN, statement of intent and review update on PDF page 2; the back cover with the MaHTAS address and an ISBN barcode reading 9789670769455, the same ISBN. 84 pages, as the manifest says. The contents pages match the printed page numbers (Appendix 5 on p54, Appendix 11 on p60, abbreviations on p62), every page from p i to p64 is present in order, and p64 is blank. No watermark, "draft" mark, stamp, hospital header or handwriting.
- **To note:** the manifest's download link is a Google Drive file (`drive.usercontent.google.com`), found through the Hospital Raja Perempuan Zainab II CPG page (`jknkelantan.moh.gov.my/hrpz2`), not through MaHTAS or the Academy. The PDF's metadata says it was created and last modified on 17 Oct 2016 with Acrobat 11.0.3, a year after issue: consistent with a later web export or reprint, and not evidence of changed content. I did not download MaHTAS's file to compare (a download needs Krishna's go-ahead).
- **Currency:** the review date (2019) has passed. The Academy list read on 9 Nov 2026 still lists this 2015 CPG, with a Quick Reference (Academy file 780) that is not in the folder and was not reviewed.

## Page numbers

| What | PDF pages | Printed |
|---|---|---|
| Cover | 1 | unnumbered |
| Publisher, copyright, statement of intent, review update | 2 | unnumbered |
| Contents | 3 to 5 | unnumbered |
| Levels of evidence to external reviewers | 6 to 12 | i to vii |
| Algorithms 1, 1a, 1b, 2, 3, 4, 5 | 13 to 19 | viii to xiv (**PDF = roman value + 5**) |
| Chapters 1 to 13, references, appendices, abbreviations | 20 to 83 | 1 to 64 (**PDF = printed + 19**); p64 is blank |
| Back cover | 84 | unnumbered |

**Box styles.** The CPG prints its 20 Recommendations in blue boxes and key statements in yellow boxes (fill colours from the drawing layer: blue 0.78/0.92/0.99, yellow 1.0/0.99/0.84). The draft cites a yellow box as "boxed statement". This matters for one line: **"Patients with MHI who are ≥65 years old and/or on anticoagulant/antiplatelet should be admitted directly to ward irrespective of CT findings" is a yellow box at the top of p19, not part of Recommendation 7**, whose blue box closes on p18 before its footnote.

---

## (a) The CPG chapter by chapter

| Part | Printed pages | What matters to the ED | In the draft? |
|---|---|---|---|
| Statement of intent, review update | PDF 2 | "Priority of care in multisystem injuries is beyond the scope of this CPG." Review due 2019. | Copyright in `refs`; scope and review date in the `menu` hint |
| Levels of evidence, development, objectives, **target population** | i to iv | "Adult patients presenting with head injury (18 years old and above)". Excludes neurosurgery and post-operative care, rehabilitation, multisystem injuries. Settings: primary or secondary/tertiary care. | `menu` hint |
| Development group, review committee, external reviewers | v to vii | Two HKL neurosurgeons and an HKL anaesthesiologist took part. Nothing for the ED. | No |
| Algorithm 1, general management | viii | Health clinic, hospital without CT, hospital with CT. | No: HKL follows 1b |
| Algorithm 1a, hospital without CT | ix | Referral for CT. | No |
| **Algorithm 1b, hospital with CT** | x | CT, then "Indication for neuro-trauma referral"; no CT, then "Indication for observation", "Admit for ward observation", ED observation (Rec 7), "Requiring further observation" (Rec 10); discharge "with head injury advice (verbal and written) and follow-up if necessary". | Yes: `ctdone`, `nsx`, `wardct`, `wardx`, `home` |
| **Algorithm 2, triage** | xi | Four steps to Red, Yellow or Green zone. Older adults and anticoagulation are Step 4: Yellow zone. | Yes: `t1` to `t4`, `red`, `ry`, `yellow`, `green` |
| **Algorithm 3, head CT** | xii | Immediate (CT within 1 to 2 hours of the risk factor), urgent (within 6 to 8 hours of the injury) and observation risk factors; report within 1 hour. | Yes: `imm`, `urg`, `ctnow`, `ct68`, `dur` |
| Algorithm 4, cervical spine imaging | xiii | CT within 1 - 2 hours or three-view X-rays within 1 hour; the 45 degree rotation test. | Yes: `cs1` to `csok` |
| Algorithm 5, mild head injury needing urgent non-cranial surgery | xiv | Positive CT: discuss with neurosurgeon. | One line in `ctdone` |
| 1 Introduction | 1 to 2 | Background. | No |
| 2 Definition | 3 to 4 | Physiological and anatomical criteria; signs of skull base fracture. | No (size); the signs are in Algorithm 3's item |
| **3 Classification of severity, Table 1** | 5 | Mild 13 - 15, moderate 9 - 12, severe 3 - 8; Table 1 subdivides MHI. | Yes: `sev`, `mhi`, `modsev`, Severity tab |
| 4 Differential diagnoses | 6 | Intoxication, seizure, stroke, encephalopathies, neoplasm. | No (cut for size) |
| 5.1 GCS (Rec 1) | 6 to 7 | GCS is affected by alcohol, sedatives, hypoxia and hypotension; repeat after resuscitation or recovery. | `sev` hint, `mhi` |
| 5.2 Initial management (Rec 2) | 7 to 9 | SpO2 <90% to be avoided; airway at GCS ≤8; cervical immobilisation criteria; SBP <90 mmHg; MAP of 80 mmHg or more. | `modsev`; immobilisation in `cs1` |
| 5.3 Referral or discharge at primary care (Rec 3) | 9 to 11 | Primary care referral factors. Study figures on platelet counts and older patients on anticoagulants. | No (primary care); see (b) |
| 5.4 Transportation (Rec 4) | 11 to 14 | Intubate before transfer for GCS ≤8 or a drop of 2 or more; transfer targets. | Intubation line in `modsev` |
| **6.1 Triage (Rec 5)** | 15 to 16 | Algorithm 2. | Yes |
| **6.2 General treatment (Rec 6)** | 16 to 17 | Primary survey; secondary survey; head chart at least hourly in the ED. | `red`, Observation tab |
| **6.3.1 Who can be observed in the ED (Rec 7, boxed statement p19)** | 17 to 19 | Seven criteria; 65 and over or anticoagulated: admit. | Yes: `obs7`, `hr`, `wardx` |
| **6.3.2 Parameters (Rec 8)** | 19 to 20 | What to observe; E4V4M5. | `edobs`, `sev` hint |
| **6.3.3 Method, frequency, duration (Rec 9)** | 20 to 22 | Three observation schedules; six hours; eight-hour care plan in the ED observation ward. | Observation tab, `edobs` |
| **6.3.4 Admission after observation (Rec 10)** | 22 to 23 | Five admission criteria after six hours; the general admission list. | Yes: `r10`, `adm`, `wardx`, `wardct` |
| **6.3.5 Discharge without observation (Rec 11, discharge criteria box)** | 23 to 24 | Low risk MHI; five criteria before discharge. | Yes: `low`, `dcc`, `soc` |
| **7.1 Head CT (Rec 12)** | 25 to 27 | CCTHR, New Orleans and Scandinavian criteria; timing is DG opinion. | CT tab (CCTHR and Rec 12; NOC and Scandinavian left out) |
| 7.2 Skull X-ray (Table 2, Rec 13) | 27 to 28 | Only when CT is not available. | CT tab, two lines; Table 2 left out |
| 7.3 Repeat head CT | 28 to 29 | No routine repeat; the 65-and-over aspirin finding. | CT tab, `hr` |
| 7.4 Cervical imaging (Rec 14) | 29 to 30 | CCR or NEXUS; C-spine CT with head CT if GCS <15. | `cs1`, `csct`, `csno` |
| 8 Medication (Rec 15) | 31 to 34 | Oral analgesics for MHI; phenytoin for risk factors; diuretics after specialist consultation. | `home`, `modsev`, `nsx` (one line each) |
| **9.1 Reversal (Rec 16)** | 35 to 36 | Stop and reverse anticoagulants in intracranial bleeding; INR targets; platelets. | Anticoagulants tab, `hr` |
| 9.2 Restarting | 36 to 37 | Insufficient evidence; MDT decision. | Anticoagulants tab |
| 9.3 Non-cranial surgery (Rec 17) | 37 to 38 | Early surgery under GA is acceptable. | `ctdone` info only |
| 9.4 Safe extubation | 38 to 39 | ED extubation criteria. | No |
| 10 Teleconsultation (Rec 18) | 40 | Use if available. | `ctdone` info |
| **11 Discharge advice (Rec 19)** | 41 | Verbal and written advice, documented and repeated back; six alarming features; phone number on the form. | `home`, Advice card tab |
| **12 Follow-up (Rec 20)** | 42 | MHI: clinic visit or telephone call within 48 hours. | `home`, Advice card tab, `modsev` |
| 13 Implementing the guidelines | 43 | Audit indicator: isolated MHI treated as in-patient who died. | No |
| References | 44 to 48 | Sources of the adapted algorithms. | `refs` (adaptation sources only) |
| Appendices 1 and 2 | 49 to 51 | Search strategy, clinical questions. | No |
| **Appendix 3, GCS** | 52 | The scale and the severity bands. | Severity tab |
| Appendix 4, head chart | 53 | Chart with identity fields and paediatric columns; clinical events "vomit ≥2x, seizure, diffuse headache, amnesia, abnormal behaviour". | Clinical events in the Observation tab; identity fields not copied (rule 4) |
| **Appendix 5, discharge advice** | 54 | The patient card, **English only**. | Advice card tab (a notes tab, not a `leaflet`, because there is no Malay version); identity fields not copied |
| Appendices 6 and 7, CCR and NEXUS | 55 to 56 | Printed versions of the two rules. | Named in `csno`; not copied (size; the calculators already link MDCalc for both) |
| Appendices 8 to 10 | 57 to 59 | Transfer equipment and checklist; extubation criteria. | No |
| Appendix 11, drug doses | 60 to 61 | Midazolam, fentanyl, morphine, phenytoin, levetiracetam. | No: named in the `modsev` gap |
| Abbreviations, acknowledgement, disclosure, funding | 62 to 63 | Nothing for the ED. | No |

---

## (b) Points inside the CPG

Where its algorithms, text, boxes and tables disagree or leave a gap. Ordered by impact on the Green Zone; each checked on the page.

### Admission, observation and discharge

1. **Older or anticoagulated patients are admitted, whatever the CT.** "Patients with MHI who are ≥65 years old and/or on anticoagulant/antiplatelet should be admitted directly to ward irrespective of CT findings" (yellow box, p19). It is a key statement, not part of Recommendation 7 (blue box, p18). It agrees with Algorithm 3 (both are urgent CT factors, p xii) and Algorithm 2 (Step 4, Yellow zone, p xi). The CPG gives no exception for a normal CT. By its wording every antiplatelet counts, low-dose aspirin included, although p18 gives that group a different plan, a repeat CT or 48 hours of observation (point 16).
2. **After a CT, Algorithm 1b and the text disagree.** Algorithm 1b sends "CT scan brain ± spine" with no "Indication for neuro-trauma referral" to "ward observation", then discharge (p x). The text lists who is admitted after imaging: "patients with new, clinically significant abnormalities on imaging" and "patients whose GCS has not returned to 15 after imaging, regardless of the imaging results" (p23), and Recommendation 10 admits after six hours of ED observation only for its five reasons. Read literally, Algorithm 1b admits a patient under 65 with GCS 15 and a normal CT; the text does not.
3. **Two diamonds in Algorithms 1a and 1b have no criteria.** "Indication for observation" and "Admit for ward observation" carry no footnote (p ix, p x). Only ED observation (Rec 7) and "Requiring further observation" (Rec 10) are defined. The draft reads "Indication for observation" as the opposite of Recommendation 11's low risk, and says so in its hints.
4. **"Low risk" means two different groups.** Table 1: "Low Risk: GCS 15. With one or more of the clinical findings" (p5). 6.3.5: "Low risk patients are those with: GCS of 15; no clinical finding (amnesia, vomiting, diffuse headache and LOC) ..." (p23–24), and Recommendation 11 discharges low risk MHI without observation. A reader who takes Table 1's low risk to Recommendation 11 would send home a patient with LOC or vomiting without observation.
5. **Age cut-offs: >60, ≥65 and >65.**
   - >60: the low risk list, "no risk factors (coagulopathy, age >60 years, ...)" (p24); the New Orleans Criteria, "age >60 years" (p25); study text (p19, p22).
   - ≥65: Table 1 risk factors (p5), Recommendation 3 (p11), Recommendation 7 "age <65 years old" (p18), the boxed statement (p19), Algorithms 2, 3 and 4, and the CCTHR box (p26).
   - >65: Appendix 6 CCR, "Age >65 years old" (p55); study text (p30).
   - So a patient aged 61 to 64 cannot go home without observation (not low risk) but can be observed in the ED (Rec 7); at 65 the patient is admitted.
6. **"A minimum of six hours" has no start.** Recommendations 7 and 9 (p18, p22) and Recommendation 10 ("observed for six hours in emergency department", p23) do not say whether the hours run from the injury or from arrival. Algorithm 3 counts "GCS <15 at 2 hours after injury" from the injury. The ED observation ward needs "a pre-defined care plan within stipulated time frame of eight hours" (p22). Separately, "Patients with MHI and ICH of ≤4 mm ... can be safety observed for six hours without neurosurgical consultation" (p18, repeated p21): a CT-positive group, which Recommendation 10 would admit for "clinically significant abnormalities" if the bleed counts as significant. The CPG does not say.
7. **Three observation schedules.**
   - Recommendation 6: head chart "at least hourly" in the ED (p17).
   - p21, in-patients with GCS 15/15: half hourly for two hours; hourly for four hours; two hourly for six hours; four hourly thereafter.
   - p21, in-patients with GCS <15/15: half-hourly until GCS 15; then half-hourly for two hours; hourly for next four hours; 2-hourly thereafter; on deterioration after the first 2 hours, revert to half-hourly.
   - Recommendation 9 (p22): "may be performed and documented hourly", and after a deterioration, "until GCS 15 is achieved": half-hourly for two hours, hourly for four, "2-hourly for six hours", "4-hourly thereafter". That last pair is the GCS 15 schedule, applied to a patient below GCS 15.
   - The draft quotes all three side by side (Observation tab) and does not merge them.
8. **"Glasgow Coma Scale score 15 on arrival or two hours later" (Rec 7, p18).** "Or" lets a patient who is GCS 15 on arrival but not two hours later meet the wording, and "two hours later" may count from arrival, where Algorithm 3 counts from the injury. In practice a patient below 15 at 2 hours after injury already needs an immediate CT.
9. **The discharge criteria box sits in "discharge without observation".** "Criteria to be met by patients of head injury prior to discharge" (yellow box, p24, adapted from SIGN 2009) is placed in 6.3.5 but worded for every discharge. Its "willing responsible adult for at least 24-hour observation" matches Appendix 5's 24-hour alarm window; follow-up is "within 48 hours" (Rec 20, p42).
10. **Antiplatelets in the low risk list.** The low risk list names "coagulopathy" but not antiplatelet or anticoagulant drugs (p24); Recommendation 7 lists "not on any anticoagulant or antiplatelet therapy" and "no history of coagulopathy" separately (p18). The flow is safe only because Algorithm 3 sends these patients to an urgent CT first.
11. **Intoxication has no route.** It is not a CT factor in Algorithm 3. It excludes ED observation (Rec 7), is an admission concern (p23) and a primary care referral factor (Rec 3). "In patients with depressed conscious level, head injury need to be ruled out before diagnosis of intoxication is made" (p16), and GCS should be repeated after "recovery from intoxication" (p6). Nothing says when an intoxicated patient whose GCS cannot be judged needs a CT.

### Head CT

12. **CT timings are opinion, and differ from the source cited.** "There is no retrievable evidence on the timing of head CT. However, the Scottish International Guidelines Network (SIGN) guidelines list down factors for immediate (within one hour) and urgent (within eight hours) CT scan in head injury. The timing for CT scan in MHI for local context is based on expert opinion of CPG DG" (p26). Algorithm 3 prints "within 1 to 2 hours of risk factor being identified" and "within 6 to 8 hours of the head injury" (p xii). The report is due "within 1 hour of the CT taking place" for the head (Algorithm 3) and "within 1 - 2 hours" for the cervical spine (Algorithm 4). Not covered: a patient who arrives more than 8 hours after the injury with an urgent factor, and a risk factor that appears while an urgent scan is awaited.
13. **Two CT rules are endorsed.** Algorithm 3 (adapted from NICE 2014) is the CPG's own, but Recommendation 12 says "Canadian Computed Tomography Head Rule (CCTHR) may be used" (p27). They differ:
    - age ≥65 is CCTHR "High risk (for neurological intervention)" (p26) but only an urgent factor in Algorithm 3;
    - CCTHR "is not applicable in the presence of seizure, penetrating skull injury, focal neurological deficit and use of anticoagulant" (p25), and only to "minor head injury ... witnessed loss of consciousness, definite amnesia or witnessed disorientation" (p26); Algorithm 3 covers all adults with head injury;
    - fall height: "fall from height >3 feet or 5 stairs" (CCTHR, p26) against ">1 metre or 5 stairs" (Algorithm 3);
    - amnesia: "Amnesia before impact >30 minutes" against "More than 30 minutes retrograde amnesia of events immediately before the head injury".
    The New Orleans and Scandinavian criteria (p25–26) are listed without a recommendation.
14. **"With symptoms such as" is an open list.** The immediate factor reads "Patient on anticoagulant and/or antiplatelet or bleeding disorder with symptoms such as diffuse headache, loss of consciousness, amnesia or vomiting" (p xii). Other symptoms are left to judgement.
15. **Recommendation 12 is weaker than Algorithm 3.** "Patients with MHI on anticoagulation and/or antiplatelet should be considered for head CT" (p27) against an urgent CT in Algorithm 3. The draft quotes both.
16. **Repeat CT: a finding against a statement.** P18: "Patients with minor head injury (GCS 15), ≥65 years old, on low dose aspirin with systolic blood pressure <150 mmHg and presenting with initial negative primary head CT, should have a routine repeat head CT within 12 - 24 hours ... or ... prolonged hospital observation for at least 48 hours." P29 repeats the finding without the blood pressure condition, then the yellow box: "There is insufficient evidence to recommend routine repeat head CT in MHI."
17. **"Close" fracture.** Algorithm 3: "Open, penetrating, suspected open, close or depressed skull fracture" (p xii). P27 defines a closed fracture as one "diagnosed when skull depression is detected by scalp palpation", so "close" may mean that rather than every closed fracture. Quoted as printed.

### Triage

18. **Algorithm 2 against its own text.**
    - Step 1: "GCS <13" and "RR <10 or >30 breaths/minute" (p xi) against "GCS ≤13" and "RR <10 ... and >29" in 6.1 (p15). "HR <60 beats/minute or >110 beats/minute" is not in the text.
    - P16 says the "first presenting SBP <110 mmHg in hospital was a more clinically relevant definition of hypotension and hypoperfusion than SBP <90 mmHg"; Algorithm 2 keeps SBP <90 mmHg, and uses <110 only after 65.
    - A yes at Step 3 points to two boxes, RED ZONE and YELLOW ZONE, with no rule for choosing. A "Reassess" box links Steps 3 and 4.
    - "Auto vs pedestrian/bicyclist" is printed as a bullet of its own, apart from "Thrown, run over, or with significant (>30 km/h) impact", so it reads as a stand-alone criterion.
    - Step 4 "Older adults" has three sub-points; whether 65 or over alone counts is not said.
    - The zones are field-triage zones; no MTS level is given.
19. **Shock and blood pressure targets.** "Treatment includes fluid and vasopressors to maintain a mean arterial pressure (MAP) of 80 mmHg or more" (p8); "target MAP >80 mmHg" (p14); "BP MAP >80 mmHg?" (Appendix 9, p58). Not a Green Zone decision.

### Neurosurgery and anticoagulants

20. **No indications for neuro-trauma referral.** Algorithm 1b asks "Indication for neuro-trauma referral" (p x), but no footnote, recommendation or chapter lists them. Nearby: Algorithm 5 "Positive findings: Discuss with neurosurgeon" (p xiv); the six-hour observation without neurosurgical consultation for ICH ≤4 mm (p21); teleconsultation (Rec 18); MHI findings that "may eventually require neurosurgical intervention" (p9). The ebook's "Refer neurosurgical team" for an abnormal CT is the only rule the department has.
21. **INR targets disagree on one page.** "Urgent reversal of coagulopathy with rapid decrease of the International Normalized Ratio (INR) to a value of <1.4, preferably to <1.2" and, a few lines later, "there is no specific target INR for adequate reversal in ICH patients on warfarin" (p35); a study corrected INR "to a threshold of 1.3" (p36). No doses are given for vitamin K, FFP, PCC or factor VIIa. The newer oral anticoagulants are not mentioned anywhere (searched: dabigatran, rivaroxaban, apixaban, NOAC, DOAC). Platelet counts of "≤135,000/µL" and "≤95,000/µL" are reported as predictors (p10) with no action attached.
22. **The advice card stops every anticoagulant.** Appendix 5 lists under "DON'T (until advised by your doctor)": "Take sleeping pills and anticoagulants/ antiplatelets", and under DO: "Take your usual medications" (p54). 9.2 says "There is insufficient evidence on when to restart antiplatelet and anticoagulant in patients with head injury", with a multidisciplinary decision when anticoagulation is urgently needed (p37). A patient with a valve or a recent stent who reads the card would stop without a plan.

### Cervical spine

23. **Which GCS triggers a C-spine CT.** Recommendation 14: "Head Computed Tomography (CT) for patient with a Glasgow Coma Scale <15 should have cervical spine CT at the same setting" (p30). Algorithm 4 starts at "Initial assessment GCS <13" (p xiii). Immobilisation starts at "GCS <15 on initial assessment" (p8). Appendix 6 applies the CCR to "alert (GCS=15)" patients, and NEXUS counts "a GCS score of 14 or less" as altered alertness (p56).
24. **Algorithm 4 against Appendix 6.** "Age ≥65 years old" and "Fall from elevation >1 metre/5 stairs" (p xiii) against "Age >65 years old" and "Fall from elevation >3 feet/5 stairs" (p55).

### Advice, severity and the head chart

25. **Two alarm lists.** Chapter 11 lists six "alarming features": GCS <15 (unable to open eyes spontaneously, disorientated or unable to obey command); vomiting; headache; amnesia; seizure; neurological deficit (p41). Appendix 5 lists nine "alarming symptoms", including blood or fluid from the ear and inability to move any part of the body, which chapter 11 does not have. Chapter 11 asks for the hospital's phone number on the form, and for the form "in multiple local languages" where possible; Appendix 5 is English only and says "immediately contact the hospital for advice", not where to go.
26. **Table 1 does not classify every patient.** GCS 15 is in both "Low Risk" and "Medium Risk (GCS 14 - 15)", and the cell "With neurological deficits or skull fracture or risk factors with/without clinical findings" spans the medium and high risk columns (p5). A patient at GCS 13 or 14 without deficits, fracture or risk factors fits no group. Three definitions of mild or minor injury overlap: the MHI of Table 1 "Requires a LOC (≤30 minutes) or post-traumatic amnesia (≤24 hours)"; the CCTHR's "minor head injury" (p26); and the general definition of head injury (p3).
27. **The head chart has children's columns.** Appendix 4 includes "<1 YR" and "<2 YR" verbal and motor rows (p53) in a CPG for adults.

### Editorial (no clinical effect)

28. "can be safety observed" (p18); "close" (point 17); "'racoon' eyes" (p26), "'raccoon' eyes" (p xii) and "Raccoon's eyes" (p4); "CCHTR" for CCTHR (p25, p37); "Scottish International Guidelines Network" for SIGN (p26); "in the event of a emergency" (p41); "might results" (p xi); "hemodynamically" (p xii) beside "haemodynamic" elsewhere; "Patient who have been" (p22); "Recommendations 16" (p36); "ICP: intracranial cerebral pressure" (p62); Appendix 10's "FiO2 ≤0.40%" and "Pressure support ≤10 mmHg" (p59); Appendix 11's column "Adverse Reaction (>10%)" lists ranges that start below 10%, such as "drowsiness (9 - 48%)" (p60); phenytoin maintenance runs over the page break, "IV 100 mg given three times daily" then "Oral 300 mg ON for a total of seven days" (p60–61), leaving the route and length unclear. The contents name chapter 8 "Medication in initial management" and 9.3 "... Urgent Surgery other than Cranial Surgery"; the headings read "Medication for initial management" and "... Non-Life Threatening other than Cranial Surgery".

---

## (c) The ebook's mild TBI pathway, the `head` calculator and this CPG

The ebook pathway (`P['mild-tbi']`, ebook p25–26) is the department's pathway and stays as written. Differences are listed, not resolved.

| Item | Ebook pathway / `head` calculator | CPG 2015 (page) |
|---|---|---|
| Scope | "Mild TBI with GCS 13 to 15." | MHI: GCS 13 - 15 (p5); adults 18 and above (p iv). Same band. |
| GCS at 2 hours | "GCS under 15, 2 hours after injury": immediate CT. | "GCS <15 at 2 hours after injury": immediate (Algorithm 3, p xii). Same. Also "GCS <13 on initial management". |
| **Vomiting** | "Vomiting more than 2 times": immediate CT (3 or more). | "Vomiting ≥2 since the head injury": immediate (p xii); "vomit ≥2 times" admits after observation (Rec 10, p23); CCTHR "Vomiting ≥2 episodes" (p26). **2 or more.** |
| Skull fracture | "Evidence of skull fracture or signs of basal skull fracture." | "Open, penetrating, suspected open, close or depressed skull fracture"; "Any sign of basal skull fracture (haemotympanum, 'raccoon' eyes, cerebrospinal fluid leakage from the ear or nose, or Battle's sign)" (p xii). The CPG names the signs. |
| Focal deficit, seizure | Immediate CT. | Immediate (p xii). Same. |
| **On an anticoagulant or antiplatelet** | "Symptomatic patient on anticoagulant and/or antiplatelet": immediate CT. An asymptomatic patient has no CT criterion, and can be discharged after PTA charting. | Immediate CT "with symptoms such as diffuse headache, loss of consciousness, amnesia or vomiting"; **urgent CT within 6 to 8 hours even without symptoms**, also for "a history of bleeding/clotting disorder" (p xii); "should be admitted directly to ward irrespective of CT findings" (boxed statement, p19); Yellow zone (Algorithm 2, p xi). |
| **Age 65 and over** | No criterion. | Urgent CT (p xii); admit to ward irrespective of CT (p19); Yellow zone (p xi); CCTHR high risk (p26). |
| Dangerous mechanism, retrograde amnesia >30 minutes, previous cranial surgery, epilepsy | No criteria. | All urgent CT factors (p xii). |
| **Altered behaviour, intoxication** | "Altered behaviour (drug misuse, alcohol consumption)": immediate CT. | Not a CT factor at presentation. "Abnormal behaviour" during observation: CT within 1 to 2 hours (p xii). Intoxicated patients are not observed in the ED (Rec 7, p18) and are an admission concern (p23). |
| CT timing | "Perform CT brain", no time. | Within 1 to 2 hours of the risk factor, or within 6 to 8 hours of the injury; report within 1 hour (p xii). |
| **No CT criteria** | Observation and PTA assessment (A-WPTAS); CT if "More than 4 hours since injury and under 18 points on PTA". | No PTA scale anywhere in the CPG (searched: PTA, Westmead, post-traumatic amnesia). Low risk with a reliable care giver: home without observation (Rec 11, p24). Otherwise ED observation for a minimum of six hours (Rec 7) and CT within 1 to 2 hours for a risk factor during observation, which includes "Amnesia" (p xii). |
| **Observation** | "Continue PTA charting for a minimum of 6 hours since injury." | "A minimum of six hours" in the ED, start not stated (Rec 7, Rec 9); head chart at least hourly (Rec 6); three schedules (p21–22). |
| Discharge without observation | No route: every patient has PTA charting. | Low risk MHI (Rec 11, p23–24). |
| **Normal CT** | PTA charting for 6 hours, then the safe discharge criteria. | Algorithm 1b: ward observation (p x); the text admits after a CT only for listed reasons (p23, Rec 10); 65 and over or anticoagulated: admit irrespective of CT (p19). |
| Abnormal CT | "Refer neurosurgical team." | "Indication for neuro-trauma referral", not defined (p x); "clinically significant abnormalities on head CT" admit (Rec 10); ICH ≤4 mm and other features: six hours without neurosurgical consultation (p21). |
| **Discharge criteria** | Ten: responsible care-taker; access to 999; reasonable distance; transport and a responsible person; not under drugs or alcohol; no signs of raised ICP; no neurological deficit; GCS 15/15; normal CT (if done); clinically well, tolerating orally and ambulating. | Five (boxed statement, p24): a willing responsible adult **for at least 24-hour observation**; verbal and written advice given and discussed; easy access to 999; reasonable access to medical care; home transport. GCS, deficits and CT are covered by Recommendations 7 and 10 instead. |
| Criteria not met | "Admit for extended observation"; "Inform the neuro rehab team". | Admit to ward (Rec 10, p23; the list on p23). No neuro rehab step. |
| Follow-up | TCA EMWATCH or EMACC for the formal CT report; Neuro Rehab Clinic if CT normal and PTA over 4 hours. | "Mild head injury may have follow-up via clinic visit or telephone call within 48 hours" (Rec 20, p42). No clinic named. |
| Accompaniment | "Accompanied by a responsible adult if possible"; "Don't stay at home alone for 48 hours". | A responsible adult "for at least 24-hour observation" (p24); alarm symptoms "within the next 24 hours" (p54). |
| Where to go | "Go to the nearest Emergency Department for: ..." | "Immediately contact the hospital for advice" (p54); phone number on the form (Rec 19, p41). |
| Alarm symptoms | LOC, disorientation, new deafness, imbalance, blurred or double vision, limb weakness, excessive sleepiness, vomiting, bleeding from either ear, fitting, severe headache not relieved by painkillers. | Nine on Appendix 5 (p54), six in chapter 11 (p41): see point 25. Deafness, imbalance and double vision are not on either CPG list. |
| Medicines | "Don't take aspirin or sleeping tablets"; paracetamol for headache. | DON'T: "Take sleeping pills and anticoagulants/ antiplatelets"; DO: "Take your usual medications", "Take paracetamol for headache" (p54). For MHI: paracetamol, NSAIDs and tramadol "provided there is no definite contraindication" (p32). |
| Contact sport | "For at least 3 weeks without consulting your doctor." | "Play contact sport": DON'T until advised by your doctor (p54). No time given. |
| Driving, alcohol | "Don't drive"; no alcohol or recreational drugs. | DON'T "Drive", "Take alcohol" until advised (p54). |
| Rest and activity | Rest, sleep regularly; stay within reach of a telephone. | "Take rest or a few days off from work"; "Mild exercise when you feel better" (p54). |
| `head` calculator: CT field | Ticks the ebook's seven immediate CT items; verdict "Perform CT brain". | Would miss the six urgent factors and count two vomits as none; gives no timing. |
| `head` calculator: discharge field | All ten ebook criteria ticked: "All fulfilled: discharge with head injury advice". | The CPG admits a patient who is 65 or over or anticoagulated, whatever the CT (p19); the calculator would offer discharge. |
| `head` calculator: GCS | Links to MDCalc (outside site). | Appendix 3 prints the scale and bands (p52): an in-app GCS is now sourceable. |
| Cervical spine | Not covered. | Algorithm 4 (p xiii), Recommendation 14 (p30). |
| Triage zone | Not covered. | Algorithm 2 (p xi). |

**Department rules alongside (context only).** T-RACS Tier 1 (`trauma-walkins`, May 2025) shares GCS 12 or less, RR under 10 or over 30 and SpO2 under 90% with Algorithm 2's Step 1, but uses SBP under 100 (CPG: <90) and pulse over 120 (CPG: HR <60 or >110). The HIT CT protocol's fall over 3 m and age over 65 differ from Algorithm 2's falls ">6 metres" and Algorithm 3's age ≥65. The Green Zone rule `gz-rules--reas` asks for EP review and an EMWATCH or EMACC appointment when a CT brain was ordered and the patient is to go home (memo of 9 Jul 2024): the CPG has no equivalent.

---

## (d) Calculator candidates

Ranked. Every number below is quoted from the draft; the calculator facts has a line for each one a calculator would hard-code (the triage step's "GCS <13" is covered by the longer GCS <13 phrases).

### 1. GCS from Appendix 3: build now

- **Inputs:** eye, verbal and motor responses, picked from the CPG's words.
- **Numbers and source:** Appendix 3 (p52): Eye Opening Response "Spontaneous 4; To voice/sound 3; To pressure/pain 2; None 1"; Verbal Response "Orientated 5; Confused 4; Words 3; Sounds 2; None 1"; Motor Response "Obeys commands 6; Localising 5; Flexion withdrawal 4; Abnormal flexion 3; Extension 2; None 1" (cells joined in the draft's Severity tab). "The score is the cumulative sum of the scale in each component" (p52). Bands: "Mild head injury (MHI): GCS 13 - 15", "Moderate head injury: GCS 9 - 12", "Severe head injury: GCS 3 - 8" (p5, p52). Written as E4V4M5 (p20).
- **Output:** total, the E V M string, the band, and links to `#head-injury-cpg--mhi` or `--modsev`.
- **Must decline:** no total when a component cannot be scored; the head chart marks "EYE CLOSED DUE TO SWELLING (C)" and "ENDOTRACHEAL TUBE OR TRACHEOSTOMY (T)" (p53), and the CPG gives no rule for them. Show the caution "GCS score can be influenced by alcohol intoxication, sedative medications, hypoxia and hypotension" (p6).
- **Why first:** no conflict with the ebook (both use 13 to 15 for mild), it replaces an outside link, and it saves nothing.

### 2. Head CT by Algorithm 3: hold until the open items are decided

- **Inputs:** three checklists, read from the draft's `imm`, `urg` and `dur` nodes.
- **Numbers and source (Algorithm 3, p xii):** "GCS <13 on initial management"; "GCS <15 at 2 hours after injury"; "Vomiting ≥2 since the head injury"; "Age ≥65 years old"; "a fall from height >1 metre or 5 stairs"; "More than 30 minutes retrograde amnesia of events immediately before the head injury"; "Vomit ≥2 since the head injury"; verdicts "Perform head CT within 1 to 2 hours of risk factor being identified" and "Perform head CT within 6 to 8 hours of the head injury"; "within 1 hour of the CT taking place (depends on local setting)". With age 65 or an anticoagulant ticked, add the boxed statement (p19).
- **Must decline:** what counts as "symptoms such as" (open list, point 14); arrival more than 8 hours after the injury; a risk factor that appears while an urgent scan is awaited (point 12); a normal CT in a patient under 65 (point 2).
- **How to build it:** as a second panel of the `head` calculator, labelled CPG 2015, beside the ebook's panel, never in place of it. The two give different answers for two vomits, age 65 and an asymptomatic patient on aspirin.

### 3. ED observation, admission and discharge (Rec 7, Rec 10, Rec 11, p24): part of 2

- **Numbers and source:** "Glasgow Coma Scale score 15 on arrival or two hours later", "Age <65 years old", "can be safely observed in emergency department for a minimum of six hours" (Rec 7, p18); "No risk factors (coagulopathy, age >60 years, ...)", "GCS of 15" (p23–24); "Patients with mild head injury who have been observed for six hours in emergency department should be admitted to ward", "Glasgow Coma Scale Score <15*", "vomit ≥2 times" (Rec 10, p23); "Presence of a willing responsible adult for at least 24-hour observation" (p24); "Mild head injury may have follow-up via clinic visit or telephone call within 48 hours" (Rec 20, p42).
- **Must decline:** when the six hours start (point 6); "Indication for observation" (point 3); the normal-CT branch (point 2); the 61 to 64 age gap (point 5).
- **No timer:** a countdown would hold patient state; the step runner already works without one.

### 4. Triage zone by Algorithm 2: not now

- **Numbers and source (p xi):** "GCS <13"; "RR <10 or >30 breaths/minute"; "SBP <90 mmHg"; "HR <60 beats/minute or >110 beats/minute"; "SpO2 <90% on room air"; "Falls: >6 metres (one storey is equal to 3 metres)"; ">30 cm occupant site or >46 cm any site"; "Thrown, run over, or with significant (>30 km/h) impact"; "Motorcycle crash >30 km/h"; "risk of injury/death increases with age ≥65 years"; "SBP <110 mmHg might represent shock after age of 65 years old"; "Pregnancy >20 weeks".
- **Must decline:** Step 3 gives Red or Yellow with no rule; the zones are not MTS levels; "Older adults" (point 18). The department's T-RACS criteria already cover the vital-sign gate. The step runner (`t1` to `t4`) is enough.

### 5. Cervical spine by Algorithm 4: low priority

- **Numbers and source (p xiii, p30):** "Initial assessment GCS <13"; "Age ≥65 years old"; "fall from elevation >1 metre/5 stairs"; "MVC high speed (>100 km/hour)"; "Perform CT cervical spine within 1 - 2 hours of risk factor being identified"; "within 1 - 2 hours of the CT taking place"; "perform three-view cervical spine X-rays within 1 hour of risk factor being identified"; "actively rotate the neck to 45 degrees to the left and right"; Recommendation 14's "Glasgow Coma Scale <15".
- **Must decline:** show, not merge, the Appendix 6 differences (age >65, >3 feet) and the GCS 13 to 14 gap against Recommendation 14 (points 23, 24). The calculators already link MDCalc's Canadian C-spine and NEXUS; the step runner covers Algorithm 4.

### Observation schedules: a reference card, not a calculator

The three schedules (point 7) are quoted side by side in the Observation tab; their phrases are in the facts file so a later card can be tested. A timer is out (rule 4).

### Not candidates

- **Appendix 11 drug doses** (midazolam "0.05 - 0.1 mg/kg", fentanyl "0.5 - 2 µg/kg/h", morphine "0.05 - 0.1 mg/kg/hr", phenytoin loading "15 - 20 mg/kg IV infusion over 30 - 60 minutes" at no more than "50 mg/minute", levetiracetam "20 mg/kg IV (rounded to the nearest 250 mg ...)", p60–61): beyond the Green Zone, left out of the draft, and phenytoin's maintenance route and length are unclear (point 28). No phenytoin maximum loading dose is printed.
- **Anticoagulant reversal:** no doses in the CPG (point 21).
- **Head chart:** a form for patient data (rule 4).

**Recommendation:** build the Appendix 3 GCS calculator now. Build the Algorithm 3 CT panel (with candidate 3 inside it) only after Krishna rules on open items 1 to 6 below, and then beside the ebook's panel. Leave triage, cervical spine and drugs to the step runner.

---

## (e) Every number in the draft, checked

**Method.** `dump.cjs` lists every string in the draft (514). `verify4.py` takes every clause that carries a clinical number (digits, ≥ ≤ < >, or a number word such as six or half), leaving out labels like "Recommendation 10", "Step 3" and page citations, and looks for it, case-folded with whitespace and line-break hyphens joined, in the PyMuPDF text layer of each page. It then compares the page where the text is with the page the draft cites. Clauses the text layer cannot match (my own labels and gaps, joined table cells, quotes with a footnote mark moved) were checked by eye against the page image; the note says what was seen.

**Result: 148 number-bearing clauses.**
- 93 are verbatim in the text layer on the page the draft cites.
- 5 are verbatim on the right page, with the page cited on the next line of the same step.
- 50 were checked by eye: 15 are table cells joined from Appendix 3 (p52) and Table 1 (p5); the rest are my labels, gaps or joins, each with its page.
- None is on a different page from the one cited.

**Also checked:**
- Every criterion of every checklist (`imm`, `urg`, `low`, `obs7`, `dur`, `r10`, `dcc`, `t1` to `t4`, `cs1`, `cs2`) and every Appendix 5 line: 102 verbatim in the text layer; the rest by eye (the cervical immobilisation bullets joined with semicolons, p8; Algorithm 4's fifth bullet split into three, p xiii; the concussion symptom categories, p5).
- The 50 facts phrases: all present in `JSON.stringify(P['head-injury-cpg'])`.
- Symbols ≥ ≤ < > ± and ° on images: Algorithms 2, 3 and 4 (p xi to xiii), Table 1 (p5), p18, p19, p22, p23, p24, Appendices 3, 5, 6 and 11.
- PyMuPDF keeps ≥ and ≤ in this PDF's text layer (pdftotext was not used).

| # | Where in the draft | Number, in context | Printed page | Check |
|---|---|---|---|---|
| 1 | `nodes.menu.hint` | CPG Early Management of Head Injury in Adults (MaHTAS, 2015), for adult patients presenting with head injur... | p iv | By eye: Text layer: "Adult patients presenting with head injury (18 years old and above)", joined to the title |
| 2 | `nodes.menu.opts[1][0]` | Aged 65 or over, or on an anticoagulant or antiplatelet | p19, p xii | By eye: Own label for "≥65 years old" |
| 3 | `nodes.imm.items[0]` | GCS <13 on initial management | p xii | Text layer, verbatim on the cited page |
| 4 | `nodes.imm.items[1]` | GCS <15 at 2 hours after injury | p xii | Text layer, verbatim on the cited page |
| 5 | `nodes.imm.items[6]` | Vomiting ≥2 since the head injury | p xii | Text layer, verbatim on the cited page |
| 6 | `nodes.urg.items[0]` | Age ≥65 years old | p xii | Text layer, verbatim on the cited page |
| 7 | `nodes.urg.items[2]` | Dangerous mechanism of injury (a pedestrian or cyclist struck by a motor vehicle, an occupant ejected from ... | p xii | Text layer, verbatim on the cited page |
| 8 | `nodes.urg.items[3]` | More than 30 minutes retrograde amnesia of events immediately before the head injury | p xii | Text layer, verbatim on the cited page |
| 9 | `nodes.ctnow.step` | Perform head CT within 1 to 2 hours of risk factor being identified | p xii | Text layer verbatim; the page is cited on the next line of the same step |
| 10 | `nodes.ctnow.items[0]` | A provisional/preliminary verbal radiology report should be made available within 1 hour of the CT taking p... | p xii | Text layer, verbatim on the cited page |
| 11 | `nodes.ctnow.items[2]` | Head Computed Tomography (CT) for patient with a Glasgow Coma Scale <15 should have cervical spine CT at th... | p30 | Text layer, verbatim on the cited page |
| 12 | `nodes.ct68.step` | Perform head CT within 6 to 8 hours of the head injury | p xii | Text layer verbatim; the page is cited on the next line of the same step |
| 13 | `nodes.ct68.items[2]` | Algorithm 3 does not say what to do if a risk factor appears while the patient waits for this scan, or when... | p xii | By eye: Own words; the 8 hours is Algorithm 3's "within 6 to 8 hours of the head injury" (image) |
| 14 | `nodes.low.items[0]` | GCS of 15 | p23, p24 | Text layer, verbatim on the cited page |
| 15 | `nodes.low.items[4]` | No risk factors (coagulopathy, age >60 years, previous neurosurgery, pre-trauma epilepsy and/or alcohol and... | p24 | Text layer, verbatim on the cited page |
| 16 | `nodes.obs7.hint` | patients with mild head injury in whom computed tomography scan is not indicated and with all the following... | p18 | By eye: Text layer verbatim apart from the footnote asterisk after "department" (image) |
| 17 | `nodes.obs7.items[0]` | Glasgow Coma Scale score 15 on arrival or two hours later | p18 | Text layer, verbatim on the cited page |
| 18 | `nodes.obs7.items[2]` | Age <65 years old | p18 | Text layer, verbatim on the cited page |
| 19 | `nodes.edobs.step` | Observe in the ED for a minimum of six hours | p18, p22 | By eye: Own label for Recommendations 7 and 9, "for a minimum of six hours" |
| 20 | `nodes.edobs.items[0]` | A minimum of six hours | p18, p22 | Text layer, verbatim on the cited page |
| 21 | `nodes.edobs.items[0]` | Recommendations 7  and 9 | p18, p22 | By eye: Citation label only; "a minimum of six hours" is verbatim on both pages |
| 22 | `nodes.edobs.items[3]` | The CPG's three schedules are in the Observation tab | p21–22 | By eye: Own words, no number |
| 23 | `nodes.edobs.items[4]` | The risk of rapid deterioration due to intracranial complications is high during the first six hours and di... | p21 | Text layer, verbatim on the cited page |
| 24 | `nodes.dur.hint` | if present, perform head CT within 1 to 2 hours of risk factor being identified | p xii | By eye: Algorithm 3 box "Perform Head CT within 1 to 2 hours of risk factor being identified" (image) |
| 25 | `nodes.dur.items[0]` | GCS <15 | p xii | Text layer, verbatim on the cited page |
| 26 | `nodes.dur.items[3]` | Vomit ≥2 since the head injury | p xii | Text layer, verbatim on the cited page |
| 27 | `nodes.r10.q` | After six hours of observation | p23 | By eye: Own label for Recommendation 10, "observed for six hours" |
| 28 | `nodes.r10.hint` | Whether the six hours count from the injury or from arrival, the CPG does not say | p23 | By eye: Own words (gap) |
| 29 | `nodes.r10.items[1]` | Glasgow Coma Scale Score <15* | p23 | Text layer, verbatim on the cited page |
| 30 | `nodes.r10.items[2]` | vomit ≥2 times, seizure, diffuse headache, amnesia, abnormal behaviour or neurological deficit)* | p23 | Text layer, verbatim on the cited page |
| 31 | `nodes.adm.items[0]` | Patients with mild head injury who have been observed for six hours in emergency department should be admit... | p23 | By eye: Recommendation 10 verbatim to "if they have", then "any of these" added (image) |
| 32 | `nodes.adm.items[1]` | the footnote to a GCS score <15 and to worrying signs | p23 | By eye: Own words for the * footnote (image) |
| 33 | `nodes.wardx.items[0]` | Patients with MHI who are ≥65 years old and/or on anticoagulant/antiplatelet should be admitted directly to... | p19 | Text layer, verbatim on the cited page |
| 34 | `nodes.dcc.items[0]` | Presence of a willing responsible adult for at least 24-hour observation | p24 | Text layer, verbatim on the cited page |
| 35 | `nodes.home.items[1]` | GCS <15 (unable to open eyes spontaneously, disorientated or unable to obey command) | p41 | Text layer, verbatim on the cited page |
| 36 | `nodes.home.items[3]` | Mild head injury may have follow-up via clinic visit or telephone call within 48 hours | p42 | Text layer, verbatim on the cited page |
| 37 | `nodes.soc.items[1]` | Recommendation 10  admits after six hours of ED observation for a social problem including no supervision b... | p23 | By eye: Own summary of Recommendation 10's social problem bullet (image) |
| 38 | `nodes.hr.items[1]` | Urgent scan, head CT within 6 to 8 hours of the head injury | p xii | By eye: Label plus Algorithm 3 box "within 6 to 8 hours of the head injury" (image) |
| 39 | `nodes.hr.items[2]` | Immediate scan, head CT within 1 to 2 hours of risk factor being identified | p xii | By eye: Label plus Algorithm 3 box "within 1 to 2 hours of risk factor being identified" (image) |
| 40 | `nodes.hr.items[3]` | Patients with minor head injury (GCS 15), ≥65 years old, on low dose aspirin with systolic blood pressure <... | p18 | Text layer, verbatim on the cited page |
| 41 | `nodes.ctdone.info[0]` | Patients with MHI can be safely observed for six hours without neurosurgical consultation if they have the ... | p21 | Text layer, verbatim on the cited page |
| 42 | `nodes.ctdone.info[0]` | ICH of ≤4 mm | p21 | Text layer, verbatim on the cited page |
| 43 | `nodes.wardct.items[1]` | The criteria for admitting patients to hospital following a head injury include patients with new, clinical... | p23 | By eye: First two bullets of the p23 list joined into one sentence (image) |
| 44 | `nodes.wardct.gap` | the text  and Recommendation 10 admit after a CT for clinically significant abnormalities, a GCS below 15 o... | p23 | By eye: Own words (gap); "returned to 15" is p23 |
| 45 | `nodes.wardct.gap` | For a normal CT with GCS 15, under 65 and on no anticoagulant or antiplatelet, the CPG does not settle whic... | p18–19, p23 | By eye: Own words (gap) |
| 46 | `nodes.t1.items[1]` | GCS <13 | p xi | Text layer, verbatim on the cited page |
| 47 | `nodes.t1.items[2]` | RR <10 or >30 breaths/minute | p xi | Text layer, verbatim on the cited page |
| 48 | `nodes.t1.items[3]` | SBP <90 mmHg | p xi, p16 | Text layer, verbatim on the cited page |
| 49 | `nodes.t1.items[4]` | HR <60 beats/minute or >110 beats/minute | p xi | Text layer, verbatim on the cited page |
| 50 | `nodes.t1.items[5]` | SpO2 <90% on room air | p xi | Text layer, verbatim on the cited page |
| 51 | `nodes.t2.items[2]` | Two or more proximal long-bone fractures | p xi | Text layer, verbatim on the cited page |
| 52 | `nodes.t3.items[0]` | >6 metres (one storey is equal to 3 metres) | p xi | Text layer, verbatim on the cited page |
| 53 | `nodes.t3.items[1]` | >30 cm occupant site or >46 cm any site | p xi | Text layer, verbatim on the cited page |
| 54 | `nodes.t3.items[6]` | Thrown, run over, or with significant (>30 km/h) impact | p xi | Text layer, verbatim on the cited page |
| 55 | `nodes.t3.items[7]` | Motorcycle crash >30 km/h | p xi | Text layer, verbatim on the cited page |
| 56 | `nodes.t4.hint` | The older adults bullet has three sub-points | p xi | By eye: Own words; image of Algorithm 2 |
| 57 | `nodes.t4.hint` | whether age 65 or over alone counts, the algorithm does not say | p xi | By eye: Own words; image of Algorithm 2 |
| 58 | `nodes.t4.items[0]` | risk of injury/death increases with age ≥65 years | p xi | Text layer, verbatim on the cited page |
| 59 | `nodes.t4.items[1]` | SBP <110 mmHg might represent shock after age of 65 years old | p xi | Text layer, verbatim on the cited page |
| 60 | `nodes.t4.items[5]` | Pregnancy >20 weeks | p xi | Text layer, verbatim on the cited page |
| 61 | `nodes.red.items[0]` | Steps 1 and 2 attempts to identify the most injured patients | p xi | Text layer, verbatim on the cited page |
| 62 | `nodes.ry.items[0]` | A yes at Step 3 points to two boxes, red zone and yellow zone | p xi | By eye: Own description of the image |
| 63 | `nodes.ry.gap` | It does not say how to choose between the two zones after Step 3 | p xi | By eye: Own words (gap) |
| 64 | `nodes.green.items[1]` | Triage of patients suspected of head injury in pre-hospital care or on arrival in emergency department shou... | p16 | By eye: Recommendation 5 verbatim apart from the asterisk after "four-step algorithm" (image) |
| 65 | `nodes.sev.opts[0][0]` | GCS 13 - 15 | p5, p52 | Text layer, verbatim on the cited page |
| 66 | `nodes.sev.opts[1][0]` | GCS 9 - 12 | p5, p52 | Text layer, verbatim on the cited page |
| 67 | `nodes.sev.opts[2][0]` | GCS 3 - 8 | p5, p52 | Text layer, verbatim on the cited page |
| 68 | `nodes.mhi.items[0]` | The MHI group can be subdivided into two types as shown in Table 1 | p5 | Text layer, verbatim on the cited page |
| 69 | `nodes.mhi.items[0]` | cerebral concussion, GCS 15, and mild head injury, GCS 13 - 15 | p5 | By eye: Table 1 column headings (image) |
| 70 | `nodes.mhi.items[1]` | requires a LOC (≤30 minutes) or post-traumatic amnesia (≤24 hours) | p5 | Text layer verbatim; the page is cited on the next line of the same step |
| 71 | `nodes.modsev.items[2]` | In patients with head injury with GCS of ≤8, intubation is recommended for airway protection | p16 | Text layer, verbatim on the cited page |
| 72 | `nodes.modsev.items[3]` | GCS ≤8 or significant drop of total GCS score ≥2 or motor component ≥1 | p13 | Text layer, verbatim on the cited page |
| 73 | `nodes.modsev.items[3]` | hyperventilation causing hypocarbia (keep ET CO2 35 - 40 mmHg) | p13 | Text layer, verbatim on the cited page |
| 74 | `nodes.cs1.hint` | fall from elevation >1 metre/5 stairs | p xiii | Text layer, verbatim on the cited page |
| 75 | `nodes.cs1.hint` | MVC high speed (>100 km/hour) | p xiii | Text layer, verbatim on the cited page |
| 76 | `nodes.cs1.info[0]` | GCS <15 on initial assessment by the healthcare professional | p8 | Text layer, verbatim on the cited page |
| 77 | `nodes.cs1.items[0]` | Initial assessment GCS <13 | p xiii | Text layer, verbatim on the cited page |
| 78 | `nodes.cs1.items[4]` | Alert and stable, a suspicion of cervical spine injury, and age ≥65 years old | p xiii | By eye: Algorithm 4's fifth bullet split into three items, wording kept (image) |
| 79 | `nodes.csct.title` | Perform CT cervical spine within 1 - 2 hours of risk factor being identified | p xiii | Text layer verbatim; the page is cited on the next line of the same step |
| 80 | `nodes.csct.items[0]` | A provisional written/verbal radiology report should be made available within 1 - 2 hours of the CT taking ... | p xiii | Text layer, verbatim on the cited page |
| 81 | `nodes.csct.gap` | Recommendation 14 asks for a cervical spine CT with every head CT below GCS 15 | p30 | By eye: Own words (gap); Recommendation 14 prints "Glasgow Coma Scale <15" |
| 82 | `nodes.csct.gap` | Algorithm 4 starts at GCS <13 | p xiii | By eye: Own words (gap); Algorithm 4 prints "Initial assessment GCS <13" (image) |
| 83 | `nodes.cs3.q` | Can the patient actively rotate the neck to 45 degrees to the left and right on assessment? | p xiii | Text layer verbatim; the page is cited on the next line of the same step |
| 84 | `nodes.csno.gap` | Appendix 6 prints age >65 and a fall from >3 feet/5 stairs, where Algorithm 4 prints ≥65 and >1 metre/5 stairs | p55, p xiii | By eye: Own words (gap); "Age >65 years old" and ">3 feet/5 stairs" (p55), "Age ≥65 years old" and ">1 metre/5 stairs" (p xiii), both on images |
| 85 | `nodes.csxr.q` | Three-view cervical spine X-rays, within 1 hour of risk factor being identified | p xiii | By eye: Algorithm 4 box "Perform three-view cervical spine X-rays within 1 hour of risk factor being identified", turned into the question (image) |
| 86 | `nodes.csxr.hint` | perform three-view cervical spine X-rays within 1 hour of risk factor being identified | p xiii | Text layer, verbatim on the cited page |
| 87 | `notes[0].notes[0].items[0]` | GCS 13 - 15 | p5, p52 | Text layer, verbatim on the cited page |
| 88 | `notes[0].notes[0].items[1]` | GCS 9 - 12 | p5, p52 | Text layer, verbatim on the cited page |
| 89 | `notes[0].notes[0].items[2]` | GCS 3 - 8 | p5, p52 | Text layer, verbatim on the cited page |
| 90 | `notes[0].notes[1].table.rows[0][1]` | Spontaneous 4 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 91 | `notes[0].notes[1].table.rows[0][1]` | To voice/sound 3 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 92 | `notes[0].notes[1].table.rows[0][1]` | To pressure/pain 2 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 93 | `notes[0].notes[1].table.rows[0][1]` | None 1 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 94 | `notes[0].notes[1].table.rows[1][1]` | Orientated 5 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 95 | `notes[0].notes[1].table.rows[1][1]` | Confused 4 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 96 | `notes[0].notes[1].table.rows[1][1]` | Words 3 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 97 | `notes[0].notes[1].table.rows[1][1]` | Sounds 2 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 98 | `notes[0].notes[1].table.rows[2][1]` | Obeys commands 6 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 99 | `notes[0].notes[1].table.rows[2][1]` | Localising 5 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 100 | `notes[0].notes[1].table.rows[2][1]` | Flexion withdrawal 4 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 101 | `notes[0].notes[1].table.rows[2][1]` | Abnormal flexion 3 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 102 | `notes[0].notes[1].table.rows[2][1]` | Extension 2 | p52 | By eye: Appendix 3 table, response and score cells joined (image) |
| 103 | `notes[0].notes[2].table.rows[0][0]` | Cerebral concussion, GCS 15 | p5 | By eye: Table 1 headings and the merged cell (image) |
| 104 | `notes[0].notes[2].table.rows[1][0]` | Grade 1 | p5 | Text layer, verbatim on the cited page |
| 105 | `notes[0].notes[2].table.rows[1][1]` | concussion symptoms resolve in <15 minutes | p5 | Text layer, verbatim on the cited page |
| 106 | `notes[0].notes[2].table.rows[2][0]` | Grade 2 | p5 | Text layer, verbatim on the cited page |
| 107 | `notes[0].notes[2].table.rows[2][1]` | concussion symptoms last >15 minutes | p5 | Text layer, verbatim on the cited page |
| 108 | `notes[0].notes[2].table.rows[3][0]` | Grade 3 | p5 | Text layer, verbatim on the cited page |
| 109 | `notes[0].notes[2].table.rows[4][0]` | Mild head injury, GCS 13 - 15 | p5 | By eye: Table 1 headings and the merged cell (image) |
| 110 | `notes[0].notes[2].table.rows[4][1]` | Requires a LOC (≤30 minutes) or post-traumatic amnesia (≤24 hours) | p5 | Text layer, verbatim on the cited page |
| 111 | `notes[0].notes[2].table.rows[5][1]` | GCS 15 | p5 | Text layer, verbatim on the cited page |
| 112 | `notes[0].notes[2].table.rows[6][1]` | GCS 14 - 15 | p5 | Text layer, verbatim on the cited page |
| 113 | `notes[0].notes[2].table.rows[7][1]` | GCS 13 | p5 | Text layer, verbatim on the cited page |
| 114 | `notes[0].notes[2].table.rows[9][1]` | Coagulopathy, alcohol consumption and/or drug misuse, age ≥65 years old, previous cranial surgery and histo... | p5 | Text layer, verbatim on the cited page |
| 115 | `notes[0].notes[3].src` | divided into four categories | p5 | Text layer, verbatim on the cited page |
| 116 | `notes[1].notes[0].items[3]` | SIGN lists factors for immediate (within one hour) and urgent (within eight hours) CT scan | p26 | By eye: Shortened; "immediate (within one hour) and urgent (within eight hours)" verbatim |
| 117 | `notes[1].notes[0].items[4]` | In MHI group with GCS of 15, asymptomatic and no neurological deficit, external evidences of head injury es... | p27 | Text layer, verbatim on the cited page |
| 118 | `notes[1].notes[1].items[1]` | GCS score <15 at two hours after injury | p26 | Text layer, verbatim on the cited page |
| 119 | `notes[1].notes[1].items[1]` | vomiting ≥2 episodes | p26 | Text layer, verbatim on the cited page |
| 120 | `notes[1].notes[1].items[1]` | age ≥65 years | p26 | Text layer, verbatim on the cited page |
| 121 | `notes[1].notes[1].items[2]` | amnesia before impact >30 minutes | p26 | Text layer, verbatim on the cited page |
| 122 | `notes[1].notes[1].items[2]` | dangerous mechanism (pedestrian struck by motor vehicle, occupant ejected from motor vehicle, fall from hei... | p26 | Text layer, verbatim on the cited page |
| 123 | `notes[1].notes[1].items[3]` | Minor head injury is defined as witnessed loss of consciousness, definite amnesia or witnessed disorientati... | p26 | Text layer, verbatim on the cited page |
| 124 | `notes[1].notes[3].items[2]` | Aged 65 or over on low dose aspirin with an initial negative CT | p18, p29 | By eye: Own pointer to the quotes in the hr step |
| 125 | `notes[1].notes[3].items[2]` | quoted in the 65 or over step | p18, p29 | By eye: Own pointer to the quotes in the hr step |
| 126 | `notes[2].notes[0].src` | Recommendations 6 , 8  and 9 | - | By eye: Citation list only |
| 127 | `notes[2].notes[0].items[2]` | vomit ≥2x | p53 | Text layer, verbatim on the cited page |
| 128 | `notes[2].notes[1].h` | the three schedules, as printed | p21–22 | By eye: Own words, no number |
| 129 | `notes[2].notes[1].table.rows[0][0]` | In-patients with GCS 15/15 | p21 | Text layer, verbatim on the cited page |
| 130 | `notes[2].notes[1].table.rows[0][1]` | half hourly for two hours | p21 | Text layer, verbatim on the cited page |
| 131 | `notes[2].notes[1].table.rows[0][1]` | hourly for four hours | p21 | Text layer, verbatim on the cited page |
| 132 | `notes[2].notes[1].table.rows[0][1]` | two hourly for six hours | p21 | Text layer, verbatim on the cited page |
| 133 | `notes[2].notes[1].table.rows[0][1]` | four hourly thereafter until agreed to be no longer necessary | p21 | Text layer, verbatim on the cited page |
| 134 | `notes[2].notes[1].table.rows[1][0]` | In-patients with GCS <15/15 | p21 | Text layer, verbatim on the cited page |
| 135 | `notes[2].notes[1].table.rows[1][1]` | Perform and record observation on a half-hourly basis until GCS 15 has been achieved | p21 | Text layer, verbatim on the cited page |
| 136 | `notes[2].notes[1].table.rows[1][1]` | half-hourly for two hours | p21 | Text layer, verbatim on the cited page |
| 137 | `notes[2].notes[1].table.rows[1][1]` | hourly for next four hours | p21, p22 | Text layer, verbatim on the cited page |
| 138 | `notes[2].notes[1].table.rows[1][1]` | 2-hourly thereafter | p21 | Text layer, verbatim on the cited page |
| 139 | `notes[2].notes[1].table.rows[1][1]` | should there be any deterioration at any time after the initial 2-hour period, observations should revert t... | p21 | Text layer, verbatim on the cited page |
| 140 | `notes[2].notes[1].table.rows[2][1]` | Should there be any deterioration at any time after the initial 2-hour period, the minimum frequency of obs... | p22 | Text layer, verbatim on the cited page |
| 141 | `notes[2].notes[1].table.rows[2][1]` | half-hourly for first two hours | p22 | Text layer, verbatim on the cited page |
| 142 | `notes[2].notes[1].table.rows[2][1]` | 2-hourly for six hours | p22 | Text layer, verbatim on the cited page |
| 143 | `notes[2].notes[1].table.rows[2][1]` | 4-hourly thereafter until no longer necessary and/or fit for discharge | p22 | Text layer, verbatim on the cited page |
| 144 | `notes[2].notes[2].src` | a minimum of six hours in the ED, counted from a start the CPG does not give | p18, p22 | By eye: Own words (gap); "a minimum of six hours" is Recommendations 7 and 9 |
| 145 | `notes[2].notes[2].items[0]` | The risk of rapid deterioration due to intracranial complications is high during the first six hours and di... | p21 | Text layer, verbatim on the cited page |
| 146 | `notes[2].notes[2].items[1]` | these patients should have a pre-defined care plan within stipulated time frame of eight hours or prerogati... | p22 | Text layer, verbatim on the cited page |
| 147 | `notes[3].notes[0].items[1]` | If within the next 24 hours you experience/as observed by care giver | p54 | Text layer, verbatim on the cited page |
| 148 | `notes[3].notes[2].items[1]` | Patients with minor head injury can be followed up by telephone conversation within 48 hours on their abili... | p42 | Text layer, verbatim on the cited page |

---

## Open questions for Krishna (for Still to confirm)

1. **Patients 65 and over, or on an anticoagulant or antiplatelet, with a mild head injury.** The CPG gives an urgent CT within 6 to 8 hours even without symptoms and admits them to the ward whatever the CT (p19, p xii). The ebook asks for a CT only if they are symptomatic and lets them go home after a normal CT and 6 hours of PTA charting. Which does the Green Zone follow? Does low-dose aspirin count?
2. **Vomiting:** "more than 2 times" (ebook) or "≥2" (CPG)?
3. **The CPG's urgent CT factors** that the ebook does not have: age 65 or over, a history of bleeding or clotting disorder, dangerous mechanism (pedestrian or cyclist struck, ejection, fall from more than 1 metre or 5 stairs), retrograde amnesia over 30 minutes, previous cranial surgery, epilepsy. Do they apply in the Green Zone?
4. **Intoxication:** the ebook gives an immediate CT for altered behaviour from drugs or alcohol; the CPG does not, but will not observe intoxicated patients in the ED.
5. **Home without observation (Rec 11):** the ebook has no such route. Is it used in HKL?
6. **Observation:** PTA charting (A-WPTAS) for 6 hours since the injury (ebook) or ED observation for at least six hours with an hourly head chart (CPG, start not given)? And after a normal CT: PTA charting and home (ebook), or ward observation (CPG Algorithm 1b)?
7. **Discharge advice:** 24 hours (CPG) or 48 hours (ebook) with a responsible adult; aspirin (ebook) or all anticoagulants and antiplatelets (CPG) to stop; contact sport for 3 weeks or until advised; "go to the nearest ED" or "contact the hospital". The CPG card has no Malay version: does the department have one?
8. **Follow-up:** EMWATCH, EMACC and the Neuro Rehab Clinic (ebook), or a clinic visit or telephone call within 48 hours (CPG)?
9. **Triage:** Algorithm 2 puts older adults and anticoagulated patients in the Yellow zone. In HKL, by MTS, do they stay in the Green Zone?
10. **Neuro-trauma referral:** the CPG gives no indications. Is the ebook's "abnormal CT brain: refer the neurosurgical team" the department rule, including small bleeds (ICH ≤4 mm)?
11. **Cervical spine:** does the ED follow Algorithm 4 (CT within 1 - 2 hours, three-view X-rays within 1 hour) and Recommendation 14 (C-spine CT with every head CT below GCS 15)?
12. **Currency:** the CPG was due for review in 2019 and the Academy still lists the 2015 edition. Is a newer national head injury guideline in use, or the 2015 Quick Reference (Academy file 780)?

---
