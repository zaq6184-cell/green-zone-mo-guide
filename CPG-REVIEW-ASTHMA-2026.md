# Asthma in Adults CPG, 2nd edition: the corrected web version against the guide

Reviewed 25 Nov 2026 for `P['asthma-cpg']` (`src/parts/data5.js`), the calculators `apred` and `apef`, their `CALC_FACTS` lines and the two asthma items of `CONFIRM` (`src/parts/engine.js`). Read only: nothing under `src/` or `app/` was changed. The proposed edits at the end are checked to apply (see "How it was checked").

- **Old:** `sources/CPG Management of Asthma in Adults (2nd Edition, 2024).pdf`, the copy `asthma-cpg` was built from (112 PDF pages; made 15 Apr 2025, last modified 9 May 2025).
- **New:** `sources/asthma-2026/asthma-cpg-update-june-2026.pdf` (112 PDF pages; made 15 Apr 2025, **last modified 15 Oct 2025**; now encrypted with the standard security handler, RC4 128-bit (its permissions were not read); the text is still extractable).
- **New quick reference:** `sources/asthma-2026/asthma-qr-update-oct-2025.pdf` (8 pages; last modified 15 Oct 2025).

## Summary

**Yes, something clinical changes for the guide: the oxygen saturation thresholds in the exacerbation algorithms and Table 9.** No dose, drug, interval, admission criterion, referral indication, action plan band or calculator number changes. The only criteria that change are SpO2 thresholds, including the room-air SpO2 in the improvement footnote that leads to discharge. Both calculators and all 11 `CALC_FACTS` lines are unchanged. No page number moves: both files have 112 pages, and every change sits on the page it was on.

What changes for the guide:

1. **Oxygen target in Algorithms 3 and 4 (p xiii, xiv):** "target saturation 93 to 95%" becomes "target saturation ≥94%" in every box: mild and moderate, severe and life-threatening, in both algorithms. It now agrees with Recommendation 9 (p39). The guide quotes 93 to 95% in four places.
2. **Moderate SpO2:** "90 – 95%" becomes "90 – 94%" in Table 9 (p37) and in both algorithms. The guide's moderate checklist and its Table 9 tab both print 90 – 95%.
3. **Mild SpO2 in Algorithms 3 and 4:** "<95%" becomes "≤95%" (read on a 300 dpi crop). Table 9 still prints mild "≥95%", and the quick reference (the file labelled "Update Oct 2025"; it prints no date) prints "≥95%" in both its algorithms. The algorithms' "≤95%" still overlaps moderate (90 – 94%) and severe (<90%), so it may be a typo for "≥95%". This is a point for Still to confirm, not one the guide can settle.
4. **The improvement footnote:** "SpO2 >94% under room air" becomes "SpO2 ≥94% under room air". **Both "clinical improvement" arrows now carry the asterisk**, in both algorithms: in Algorithm 4, mild and moderate box to Discharge, and severe box to Monitoring and evaluation; in Algorithm 3, to Discharge, and from the severe box to Refer to hospital for admission. This settles point 14 of `CPG-REVIEW-ASTHMA.md`, and the `mmr` hint, which says the algorithm does not mark the arrow, is now wrong.
5. **Algorithm 1 (p xi):** the second column now joins FEV1 with AND ("Daily Symptoms OR Night-time awakening ≥ 1 a week AND FEV1 <80% of predicted or LLN"), as the text on p9 always did. The guide's note on the difference goes. The algorithm's boxes also now say "Step-up" and "step-down" where they said "Escalate" and "deescalate" (the guide does not quote those boxes).
6. **p39 (7.2, ipratropium):** "combined inhaled therapy (ipratropium bromide + SABA)" now prints "(ipratropium bromide - SABA)". This is probably the CPG's new hyphen style (ICS-LABA) applied where a plus was meant. The guide quotes the sentence, so quoting as printed means taking the hyphen; that wording is Krishna's call.
7. **p42 (7.3):** "Chest X-ray should be considered" now prints "CXR should be considered". It is the same meaning, but the guide quotes the sentence.

Found on the way (in both versions, so not an update change): the Appendix 4 nomogram (p70) **does** print regression formulae on the chart ("Male P.E.F. (L/min) = -72.1 + 9.8 H (ins) - 1.2 A (yrs.)"; "Female ... = 159 + 5 H (ins.) - A (yrs.)"; SD ± 59.4 and ± 46.3. These are read from a scan: the decimal points and the female line are not reliably legible). The `apef` gap says "a picture with no formula", and so does `CPG-REVIEW-ASTHMA.md` (d)2. Pair E3 corrects the wording only. Building the formulae in would be a new calculator feature, and that is Krishna's call (rule 8 admits them, since the CPG prints them).

**Counts.**
- **CPG changes:** 12 substantive (A1 to A12 below; 7 of them touch text the guide uses) and 19 groups of editorial changes (B; one of them, the CXR wording on p42, is in a line the guide quotes).
- **Guide lines affected:** 17 (15 in `data5.js`, 2 `CONFIRM` lines in `engine.js`), plus 1 pre-existing error in the `apef` gap.
- **Find and replace pairs:** 17 required (D1 to D14, where D5 replaces 2 occurrences, and E1, E2 and E4), 2 optional (D15, E3) and 3 for `OPEN-ITEMS.md` (O1 to O3).

## Provenance and copyright

- **No update note is printed anywhere.** The cover (PDF 1) is pixel-identical to the old one. Page 3 still says "These guidelines were issued in 2024 and will be reviewed in a minimum period of four years (2028)". The eISBN on page 2 is unchanged (978-967-2887-83-6).
- **Dates:** the CPG file's own modification date is 15 Oct 2025, the same day as the quick reference. Nothing in the file shows it to be a June 2026 release, so it cannot be confirmed as "the June 2026 update". **Check the MaHTAS page for a later file:** if one exists, this diff is incomplete.
- So this is most likely **the corrected web version of the same 2nd edition**, not a new edition. Page 3 says so of itself: "in the event of errors or omissions, corrections will be published in the web version of this document, which will be the definitive version at all time." The guide keeps the title "2nd edition (2024)".
- **Copyright (PDF page 2), unchanged word for word** (the page's text is identical in both files): "The copyright owner of this publication is MaHTAS. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context." The guide's `refs[1]` stays as it is.
- **The quick reference prints no copyright or reproduction wording.** It names MaHTAS as the CPG secretariat and carries the logos of the Ministry of Health, the Malaysian Thoracic Society and the Academy of Medicine. Its content is a summary of the CPG.

## Every change in the CPG (old against new)

Pages: printed page = PDF page − 19; p xi to xiv = PDF 15 to 18. Thresholds marked "image" were read on 300 dpi crops of the new file, because the text extract can drop ≥ and ≤.

### A. Substantive

| # | Where (printed, PDF) | Old | New | Used by the guide? |
|---|---|---|---|---|
| A1 | Algorithm 4, p xiv (PDF 18): mild and moderate box, severe box, life-threatening box | "Controlled oxygen (if available): target saturation 93 to 95%"; "Controlled oxygen: target saturation 93 to 95%" (twice) | "Controlled oxygen (if available): target saturation ≥94%"; "Controlled oxygen: target saturation ≥94%" (twice) (image) | Yes: `mmt`, `svt`, `ltx`, Drugs tab Oxygen note, `preg` gap, CONFIRM 12 |
| A1 | Algorithm 3, p xiii (PDF 17): the same three boxes | "target saturation 93 to 95%" | "target saturation ≥94%" (image) | Quoted only in CONFIRM 12 |
| A2 | Table 9, p37 (PDF 56): SpO2, moderate | "90 – 95%" | "90 – 94%" (image) | Yes: `md` items, Severity tab Table 9, `md` hint, Severity note |
| A2 | Algorithms 3 and 4 (PDF 17, 18): SpO2, moderate | "90 – 95%" | "90 – 94%" (image) | Severity note |
| A3 | Algorithms 3 and 4 (PDF 17, 18): SpO2, mild | "<95%" | "≤95%" (image). Table 9 keeps "≥95%" | `md` hint, Severity note, CONFIRM 12 |
| A4 | Algorithms 3 and 4: footnote | "*Improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air" | "*Improvement of symptoms (not needing continuous SABA) and SpO2 ≥94% under room air" (image) | Yes: `mmr` and `svr` hints, CONFIRM 11 and 12 |
| A5 | Algorithms 3 and 4: the arrows | "clinical improvement" (no asterisk on either arrow) | "clinical improvement*" on both arrows (Algorithm 3: "Clinical improvement*") | Yes: `mmr` hint |
| A6 | Algorithm 1, p xi (PDF 15): second column | "Daily Symptoms OR Night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LLN" | "Daily Symptoms OR Night-time awakening ≥ 1 a week AND FEV1 <80% of predicted or LLN" | Yes: Treatment steps tab |
| A7 | Algorithm 1, p xi | "Escalate as per Algorithm 2"; "Continue current therapy or deescalate as per Algorithm 2" | "Step-up as per Algorithm 2"; "Continue current therapy or step-down as per Algorithm 2" | No |
| A8 | 7.2, p39 (PDF 58) | "combined inhaled therapy (ipratropium bromide + SABA) was more effective than SABA alone" | "combined inhaled therapy (ipratropium bromide - SABA) was more effective than SABA alone" (image) | Yes: Drugs tab Ipratropium note |
| A9 | 6.1, p22 (PDF 41): ACQ table | Header "ACT Score"; first band "0 – 0.75" | Header "ACQ Score"; first band "<0.75". Table 6, ACQ-5 recall: "1 weeks" to "1 week" | No (settles part of point 29 of the old review) |
| A10 | Appendix 3, p69 (PDF 88): diurnal PEF variability example | 9/4 and 12/4 rows "23.0 %"; total "143.3%"; mean "20.47 %"; "significant if the reading is >20% in adults" | "23.1 %" twice; total "143.5%"; mean "20.5 %"; "significant if the reading is ≥20% in adults" (image) | No (settles the >20% against ≥20% part of point 29) |
| A11 | 3, p7 (PDF 26): airway obstruction | "FEV1/FVC <0.7 / <LLN" | "FEV1/FVC <0.7 or <LLN" | No |
| A12 | Reference 52, p63 (PDF 82) | The Malaysian Thoracic Society, Recommendations on Inhalational Therapy During the COVID-19 Pandemic, 2020 | The Malaysian Society of Infectious Diseases and Chemotherapy (MSIDC), Guidelines for Adult Immunisation, 3rd Edition, 2020. It now matches the vaccination text on p35 that cites it | No |

### B. Editorial (no change of meaning)

Algorithm 2, p xii: "#" set as a superscript. Algorithms 3 and 4: "x-ray" to "X-ray" in the abbreviations. p12–13 (PDF 31–32): bullet glyphs and a superscript reference. p14 (PDF 33): "overprescribed" to "over prescribed", reflowed. p15 (PDF 34): "soft-mist" to "soft mist". p25 (PDF 44) and p41 (PDF 60): β2 set with a subscript, superscript references. p26 (PDF 45), p31 (PDF 50), p67 (PDF 86): "ICS/formoterol", "ICS/LABA", "salmeterol/ICS" and similar to the hyphen style ("ICS-formoterol", "ICS-LABA", "ICS-salmeterol"). p30 (PDF 49): "ROB" to "RoB". p38 (PDF 57): "pO2" to "PaO2". p42 (PDF 61): "Chest X-ray" to "CXR", subscripts (quoted by the guide, so pair D11). p46 (PDF 65): "gastrooesophageal" to "gastroesophageal". p54–55 (PDF 73–74): superscript references. p70 (PDF 89): the nomogram is a fresh scan of the same chart, which no longer clips the instruction above it (values and formulae the same). p73 (PDF 92): a QR code added, "Video Teknik Penggunaan Inhaler: Metered Dose Inhaler (MDI)". p77 (PDF 96): "doktor:" added in the Malay TAI. p79 (PDF 98): "200 to 400" to "200 - 400 µg twice/day" (an ICS dosage cell). p81 (PDF 100): the stray "If patients" overlaid on the Nexthaler MART cell removed. p83–84 (PDF 102–103): "Breezhaler® (DPI)" product labels and "Trimbow® (pMDI)" added; "ICS/LABA/LAMA" to "ICS-LABA-LAMA". p90 (PDF 109): "x-ray" to "X-ray".

### Pages with no change

Every other page is identical, including all the pages that carry the guide's doses and decision criteria: p36 to 43 apart from those listed (Table 8, Recommendations 8 to 14, admission and discharge: PDF 55 to 62), p40 (prednisolone and hydrocortisone), p41 (magnesium, aminophylline, ABG), p50 to 51 (pregnancy), p56 (COVID-19 and spacers), p58 (referral), and Appendices 5, 6 and 9 H (PDF 90, 91, 93, 104, 105). Appendices 5 and 6 and the Appendix 9 tables have no text layer, so they were compared as images and are pixel-identical at 120 dpi.

## The quick reference ("Update Oct 2025") against the guide

The guide does not quote the quick reference. It only links to it from the CPG shelf (`qrd` in `CPG_SHELF`, a Drive copy of the earlier file). Where it differs from the corrected CPG, the guide follows the CPG:

| Quick reference (page) | CPG, corrected web version | For the guide |
|---|---|---|
| ED and primary care algorithms (p6, p7): mild SpO2 "≥95%", mild accessory muscle use "Absent" | Algorithms 3 and 4: mild "≤95%", "Present"; Table 9: "≥95%", "Absent" | The QR agrees with Table 9, which the guide grades by. Still to confirm (pair E2) |
| ED algorithm (p7), severe box: "Ipratropium bromide nebuliser 0.5 mg stat"; no "Consider HFNC" (the abbreviations still list HFNC) | Algorithm 4, severe box: "Ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours"; "Consider HFNC" | The guide keeps Algorithm 4. Still to confirm (pair E4) |
| Initiation (p4): "Continue current therapy or deescalate as per Algorithm 2"; "Step up as per Algorithm 2" | "step-down", "Step-up" | Wording only (pair E4 mentions it) |
| Initiation (p4): "Daily symptoms OR Night-time awakening ≥ 1 a week AND FEV1 <80%" | The same (A6) | Agrees |
| Oxygen "≥94%", moderate "90 – 94%", footnote "SpO2 ≥94%", the asterisks on both arrows | The same | Agrees |
| Medications (p8): salbutamol pMDI "1 to 2 puffs PRN (max. 8 puffs/day)"; budesonide-formoterol MART "Total max. dose: 12 puffs/day"; beclometasone-formoterol MART "Total max. dose: 8 puffs/day (up to 12 puffs/day based on GINA)" | Appendix 9 A (p79) prints no daily maximum for the salbutamol pMDI | The guide's reliever line (Appendix 9 A) is unchanged. The QR's "max. 8 puffs/day" is a QR-only number, and is not added under rule 8 |
| Referral (p8): the nine indications | Chapter 9 (p58), the same nine | Agrees |
| Key messages, investigations, ACT (p2, p3) | Not used by the guide | None |

## Line-by-line: `asthma-cpg`, the two calculators, `CALC_FACTS` and the CONFIRM items

Each string is listed as the guide holds it, with the page it cites and that page's PDF number (a bracketed page is inherited from the node's own source line). **Status:** "unchanged" means no word of its source passage changed. This was established by the full word-level diff of all 112 pages plus a pixel comparison of every page (see "How it was checked"). It does not mean the string is a verbatim quote, since many lines are the guide's own labels or commentary. "Moved" never occurs: no page number changed. The text column is cut at 110 characters. Calculator outputs whose wording is computed at run time are covered by the calculator's note and its `CALC_FACTS` lines.

**Eye check of the rows that cite a changed page.** 172 "unchanged" rows cite a PDF page on which something changed (15, 16, 17, 18, 32 to 34, 44, 50, 56 to 58, 60, 61, 89, 92, 98). Each was read against that page's full list of changes above. None quotes or depends on a changed passage:
- On p37 only the moderate SpO2 cell changed.
- On p39 only the ipratropium sentence changed.
- On p42 only the CXR sentence changed, plus subscripts.
- On p31 only bullets 2 to 4 of Recommendation 6 changed; the guide quotes bullets 1 and 5.
- The Algorithm 4 discharge box and the monitoring box are unchanged (300 dpi crop).
- Moderate PaCO2 is still "<40 mmHg or normal" in Algorithm 3 and "<40 mmHg" in Algorithm 4.


| # | Where | Text (start) | Page cited, and PDF page | Status |
|---|---|---|---|---|
| 1 | entry.title | Asthma in adults: CPG 2nd edition |  | unchanged |
| 2 | entry.lead | The national guideline (2024): grade an exacerbation by Table 9, treat it by the emergency department algor... |  | unchanged |
| 3 | entry.src | CPG Asthma in Adults, 2nd ed. (2024) |  | unchanged |
| 4 | entry.see[0] | Bronchial asthma (ebook pathway) |  | unchanged |
| 5 | entry.see[1] | Asthma Zone flow (Nov 2025) |  | unchanged |
| 6 | menu.q | What do you need? | (p vii = PDF 11) | unchanged |
| 7 | menu.hint | CPG Management of Asthma in Adults, 2nd edition (MaHTAS, 2024), for adults (≥18 years old). It excludes ast... | p vii = PDF 11 | unchanged |
| 8 | menu.opts[0] | Grade and treat an exacerbation (Algorithm 4) |  | unchanged |
| 9 | menu.opts[1] | Admit, or ready to go home? (7.4 and 7.5) |  | unchanged |
| 10 | menu.opts[2] | Pregnant patient (8.2) |  | unchanged |
| 11 | menu.opts[3] | Refer to a respiratory physician? (chapter 9) |  | unchanged |
| 12 | risk.step | Assess the risk of asthma-related death with the clinical evaluation |  | unchanged |
| 13 | risk.items[0] | A focused history should include time of onset, trigger factors, severity of symptoms, risk factors for ast... | p36 = PDF 55 | unchanged |
| 14 | risk.items[1] | Table 8 (p36), related to asthma exacerbation: previous exacerbations requiring mechanical ventilation and ... | p36 = PDF 55 | unchanged |
| 15 | risk.items[2] | Related to asthma control: currently using or having recently stopped using oral corticosteroids; not curre... |  | unchanged |
| 16 | risk.items[3] | Related to co-morbidity e.g. pneumonia, diabetes and arrhythmias |  | unchanged |
| 17 | risk.items[4] | Others: psychological, psychiatric and social conditions that cause difficult treatment adherence; confirme... |  | unchanged |
| 18 | lt.q | Any life-threatening feature? | (p37 = PDF 56) | unchanged |
| 19 | lt.hint | Table 9 (p37): Not all parameters need to be met to classify the severity. Classify using the most severe p... | p37 = PDF 56 | unchanged |
| 20 | lt.items[0] | Level of consciousness: confused/drowsy/coma | (p37 = PDF 56) | unchanged |
| 21 | lt.items[1] | Speech: unable to speak | (p37 = PDF 56) | unchanged |
| 22 | lt.items[2] | Respiratory rate: <12/min | (p37 = PDF 56) | unchanged |
| 23 | lt.items[3] | Pulse rate: bradycardia/cardiac arrest | (p37 = PDF 56) | unchanged |
| 24 | lt.items[4] | Blood pressure: hypotension | (p37 = PDF 56) | unchanged |
| 25 | lt.items[5] | Use of accessory muscles: paradoxical chest movement/absent | (p37 = PDF 56) | unchanged |
| 26 | lt.items[6] | Breath sounds: silent chest | (p37 = PDF 56) | unchanged |
| 27 | lt.items[7] | Oxygen saturation (SpO2): <90% | (p37 = PDF 56) | unchanged |
| 28 | lt.items[8] | PaO2: < 60 mmHg | (p37 = PDF 56) | unchanged |
| 29 | lt.items[9] | PaCO2: >45 mmHg | (p37 = PDF 56) | unchanged |
| 30 | lt.opts[0] | Yes, present |  | unchanged |
| 31 | lt.opts[1] | None |  | unchanged |
| 32 | sv.q | Any severe feature? | (p37 = PDF 56) | unchanged |
| 33 | sv.hint | Table 9 (p37). Listed: the severe cells no other column shares. Alert, normal blood pressure, wheezing and ... | p37 = PDF 56 | unchanged |
| 34 | sv.items[0] | Speech: speaks in words | (p37 = PDF 56) | unchanged |
| 35 | sv.items[1] | Respiratory rate: >25/min | (p37 = PDF 56) | unchanged |
| 36 | sv.items[2] | Pulse rate: >120/min | (p37 = PDF 56) | unchanged |
| 37 | sv.items[3] | Use of accessory muscles: very evident | (p37 = PDF 56) | unchanged |
| 38 | sv.opts[0] | Yes, present |  | unchanged |
| 39 | sv.opts[1] | None |  | unchanged |
| 40 | md.q | Any moderate feature? | (p37 = PDF 56) | unchanged |
| 41 | md.hint | Table 9 (p37). Left out: alert, normal blood pressure and wheezing (printed for mild too) and PaCO2 <40 mmH... | p37 = PDF 56 | CHANGED (D1) |
| 42 | md.items[0] | Speech: speaks in phrases | (p37 = PDF 56) | unchanged |
| 43 | md.items[1] | Respiratory rate: >20/min | (p37 = PDF 56) | unchanged |
| 44 | md.items[2] | Pulse rate: 100 – 120/min | (p37 = PDF 56) | unchanged |
| 45 | md.items[3] | Use of accessory muscles: present | (p37 = PDF 56) | unchanged |
| 46 | md.items[4] | Oxygen saturation (SpO2): 90 – 95% | (p37 = PDF 56) | CHANGED (D2) |
| 47 | md.items[5] | PaO2: <80 mmHg | (p37 = PDF 56) | unchanged |
| 48 | md.opts[0] | Yes, present: moderate |  | unchanged |
| 49 | md.opts[1] | None: mild |  | unchanged |
| 50 | mmt.step | Mild or moderate: initial management (Algorithm 4, p xiv) | p xiv = PDF 18 | unchanged |
| 51 | mmt.items[0] | SABA 4 - 10 puffs by pMDI + spacer (preferable patient's own) or via nebuliser, repeat every 20 minutes for... | (p xiv = PDF 18) | unchanged |
| 52 | mmt.items[1] | In mild to moderate asthma exacerbations, pressurised metered dose inhaler via spacer is the preferred meth... | p39 = PDF 58 | unchanged |
| 53 | mmt.items[2] | Nebulised salbutamol (Appendix 9, p86): 2.5 to 5 mg every 20 minutes for the first hour (3 doses) | p86 = PDF 105 | unchanged |
| 54 | mmt.items[3] | Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat (the Prednisolone by weight calculator works out t... | (p xiv = PDF 18) | unchanged |
| 55 | mmt.items[4] | The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum... | p40 = PDF 59 | unchanged |
| 56 | mmt.items[5] | Controlled oxygen (if available): target saturation 93 to 95% | (p xiv = PDF 18) | CHANGED (D3) |
| 57 | mmt.items[6] | Pregnant: early referral to critical care is recommended for moderate to severe asthma exacerbations (8.2, ... | p50 = PDF 69 | unchanged |
| 58 | mmr.q | Clinical improvement? | (p xiv = PDF 18; p42 = PDF 61) | unchanged |
| 59 | mmr.hint | A footnote on Algorithm 4 (p xiv) reads: Improvement of symptoms (not needing continuous SABA) and SpO2 >94... | p xiv = PDF 18; p42 = PDF 61 | CHANGED (D4) |
| 60 | mmr.opts[0] | Clinical improvement |  | unchanged |
| 61 | mmr.opts[1] | No clinical improvement |  | unchanged |
| 62 | svt.step | Severe, or no improvement: treatment (Algorithm 4, p xiv) | p xiv = PDF 18 | unchanged |
| 63 | svt.items[0] | SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour | (p xiv = PDF 18) | unchanged |
| 64 | svt.items[1] | Nebulised salbutamol (Appendix 9, p86): 2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5... | p86 = PDF 105 | unchanged |
| 65 | svt.items[2] | Ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours | (p xiv = PDF 18) | unchanged |
| 66 | svt.items[3] | Controlled oxygen: target saturation 93 to 95% | (p xiv = PDF 18) | CHANGED (D5) |
| 67 | svt.items[4] | Consider HFNC | (p xiv = PDF 18) | unchanged |
| 68 | svt.items[5] | IV hydrocortisone 100 mg stat | (p xiv = PDF 18) | unchanged |
| 69 | svt.items[6] | IV magnesium sulphate 2 g infusion over 20 minutes (single dose) | (p xiv = PDF 18) | unchanged |
| 70 | svr.q | Clinical improvement? | (p xiv = PDF 18; p42 = PDF 61) | unchanged |
| 71 | svr.hint | Algorithm 4 footnote (p xiv): improvement of symptoms (not needing continuous SABA) and SpO2 >94% under roo... | p xiv = PDF 18; p42 = PDF 61 | CHANGED (D6) |
| 72 | svr.opts[0] | Clinical improvement |  | unchanged |
| 73 | svr.opts[1] | No clinical improvement |  | unchanged |
| 74 | svadm.links[0] | Asthma Zone flow: uptriage to R1 |  | unchanged |
| 75 | svadm.title | Monitoring and evaluation, then refer for admission | (p xiv = PDF 18; p41–42 = PDF 60–61; p43 = PDF 62) | unchanged |
| 76 | svadm.items[0] | Monitoring and evaluation: conscious level, SpO2, PR, BP; PaO2 and PaCO2; CXR for complication and alternat... | (p xiv = PDF 18; p41–42 = PDF 60–61; p43 = PDF 62) | unchanged |
| 77 | svadm.items[1] | All patients with progressive deterioration following initial treatment and those with severe or life-threa... | p42 = PDF 61 | unchanged |
| 78 | svadm.items[2] | Vital signs: monitor continuously or at least every 15 – 30 minutes, including SpO2, respiratory rate, hear... | p42 = PDF 61 | unchanged |
| 79 | svadm.items[3] | A rising or normal PaCO2 may indicate impending respiratory arrest (7.3, p42) | p42 = PDF 61 | unchanged |
| 80 | svadm.gap | CPG Algorithm 4 (p xiv), 7.3 to 7.4 (p41–42) and Recommendation 14 (p43). The algorithm gives this branch n... | p xiv = PDF 18; p41–42 = PDF 60–61; p43 = PDF 62 | unchanged |
| 81 | ltx.links[0] | Asthma Zone flow: uptriage to R1 |  | unchanged |
| 82 | ltx.title | Life-threatening: treat, and refer early to critical care | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 83 | ltx.items[0] | SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 84 | ltx.items[1] | Ipratropium bromide nebulizer 0.5 mg every 4 - 6 hours | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 85 | ltx.items[2] | Controlled oxygen: target saturation 93 to 95% | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | CHANGED (D5) |
| 86 | ltx.items[3] | Consider early intubation: patients with signs of respiratory distress, worsening hypoxaemia, hypercapnia o... | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 87 | ltx.items[4] | IV hydrocortisone 100 mg stat (if not given earlier) | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 88 | ltx.items[5] | IV magnesium sulphate 2 g infusion over 20 minutes (single dose) (if not given earlier) | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 89 | ltx.items[6] | Early referral to critical care | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 90 | ltx.items[7] | pMDI with spacer should not be used in life-threatening asthma (p39) | p39 = PDF 58 | unchanged |
| 91 | ltx.items[8] | Then monitoring and evaluation (conscious level, SpO2, PR, BP; PaO2 and PaCO2; CXR for complication and alt... | (p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58) | unchanged |
| 92 | ltx.gap | CPG Algorithm 4 (p xiv), 7.2 (p38–39) and Recommendation 14 (p43). Parenteral β2-agonists: only for ventila... | p xiv = PDF 18; p38–39 = PDF 57–58; p43 = PDF 62; p39 = PDF 58 | unchanged |
| 93 | adm.q | Must the patient be admitted? | (p42 = PDF 61) | unchanged |
| 94 | adm.hint | 7.4 (p42). Grade the severity by Table 9: Grade and treat, or the Severity tab. | p42 = PDF 61 | unchanged |
| 95 | adm.items[0] | Severe or life-threatening asthma | (p42 = PDF 61) | unchanged |
| 96 | adm.items[1] | Progressive deterioration following initial treatment | (p42 = PDF 61) | unchanged |
| 97 | adm.opts[0] | Yes, present |  | unchanged |
| 98 | adm.opts[1] | None |  | unchanged |
| 99 | admx.links[0] | Asthma Zone flow: uptriage to R1 |  | unchanged |
| 100 | admx.title | Admit | (p42–43 = PDF 61–62; p43 = PDF 62) | unchanged |
| 101 | admx.items[0] | All patients with progressive deterioration following initial treatment and those with severe or life-threa... | (p42–43 = PDF 61–62; p43 = PDF 62) | unchanged |
| 102 | admx.items[1] | Early referral to critical care team should be considered for patients with asthma exacerbation who respond... | (p42–43 = PDF 61–62; p43 = PDF 62) | unchanged |
| 103 | admx.gap | CPG 7.4 (p42–43) and Recommendation 14 (p43). | p42–43 = PDF 61–62; p43 = PDF 62 | unchanged |
| 104 | dc.q | May the patient go home with an asthma action plan? | (p43 = PDF 62) | unchanged |
| 105 | dc.hint | Recommendation 14 (p43). There are no specific parameters that assure safe discharge of patients with exace... | p43 = PDF 62 | unchanged |
| 106 | dc.items[0] | Resolution of symptoms after treatment | (p43 = PDF 62) | unchanged |
| 107 | dc.items[1] | Able to follow their prescribed treatment at home | (p43 = PDF 62) | unchanged |
| 108 | dc.opts[0] | Both met |  | unchanged |
| 109 | dc.opts[1] | Not both met |  | unchanged |
| 110 | dcf.q | Any other factor that may be considered for admission? | (p42 = PDF 61) | unchanged |
| 111 | dcf.hint | 7.4 (p42). | p42 = PDF 61 | unchanged |
| 112 | dcf.items[0] | Older age | (p42 = PDF 61) | unchanged |
| 113 | dcf.items[1] | Use of more than eight SABA puffs in previous 24 hours | (p42 = PDF 61) | unchanged |
| 114 | dcf.items[2] | Past history of severe exacerbations (e.g. intubations, asthma admissions) | (p42 = PDF 61) | unchanged |
| 115 | dcf.items[3] | Past history of unscheduled clinic and emergency department visits requiring use of OCS | (p42 = PDF 61) | unchanged |
| 116 | dcf.items[4] | Living alone/socially isolated | (p42 = PDF 61) | unchanged |
| 117 | dcf.items[5] | Psychological problems | (p42 = PDF 61) | unchanged |
| 118 | dcf.items[6] | Physical disability | (p42 = PDF 61) | unchanged |
| 119 | dcf.opts[0] | Yes, present |  | unchanged |
| 120 | dcf.opts[1] | None |  | unchanged |
| 121 | consider.title | Consider admission | (p42 = PDF 61; p43 = PDF 62) | unchanged |
| 122 | consider.items[0] | These are other factors that may be considered for admission (7.4) | (p42 = PDF 61; p43 = PDF 62) | unchanged |
| 123 | consider.items[1] | Patients may be discharged from hospital if they can follow their prescribed treatment at home, have few sy... | (p42 = PDF 61; p43 = PDF 62) | unchanged |
| 124 | consider.gap | CPG 7.4 (p42) and 7.5 (p43). The CPG leaves the decision to the doctor, and gives no age for older age. | p42 = PDF 61; p43 = PDF 62 | unchanged |
| 125 | home.links[0] | Asthma Zone: department discharge |  | unchanged |
| 126 | home.links[1] | Ebook pathway |  | unchanged |
| 127 | home.links[2] | Action plan PEF zones |  | unchanged |
| 128 | home.title | Discharge with an asthma action plan and a follow-up plan | (p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50) | unchanged |
| 129 | home.items[0] | Continue prednisolone (5 - 7 days) | (p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50) | unchanged |
| 130 | home.items[1] | The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum... | p40 = PDF 59 | unchanged |
| 131 | home.items[2] | Continue usual treatment | (p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50) | unchanged |
| 132 | home.items[3] | These patients should continue their maintenance inhaled corticosteroids (Recommendation 11, p40) | p40 = PDF 59 | unchanged |
| 133 | home.items[4] | AAP: the AAP should be completed and explained to the patient by the attending healthcare provider (5.2, p1... | p13 = PDF 32 | unchanged |
| 134 | home.items[5] | Ensure follow-up at primary care clinic within 1 - 2 weeks | (p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50) | unchanged |
| 135 | home.items[6] | The follow-up plan should include a referral letter to a clinic for the patient to be seen within seven day... | p43 = PDF 62 | unchanged |
| 136 | home.items[7] | Discuss strategies to improve asthma management, including medications adherence, proper inhaler techniques... | (p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50) | unchanged |
| 137 | home.gap | CPG Algorithm 4 (p xiv), 7.2 (p40), 7.5 and Recommendation 14 (p43). Algorithm 4 asks for follow-up within ... | p xiv = PDF 18; p40 = PDF 59; p43 = PDF 62; p25 = PDF 44; p31 = PDF 50 | unchanged |
| 138 | nohome.title | Does not meet Recommendation 14 for discharge | (p43 = PDF 62) | unchanged |
| 139 | nohome.items[0] | Patients with asthma may be discharged with asthma action plan if they have resolution of symptoms after tr... | (p43 = PDF 62) | unchanged |
| 140 | nohome.items[1] | Patients may be discharged from hospital if they can follow their prescribed treatment at home, have few sy... | (p43 = PDF 62) | unchanged |
| 141 | nohome.gap | CPG 7.5 and Recommendation 14 (p43). The two wordings differ (resolution of symptoms, or few symptoms), and... | p43 = PDF 62 | unchanged |
| 142 | preg.links[0] | Referral to a respiratory physician |  | unchanged |
| 143 | preg.title | Pregnancy: treat an exacerbation as in a non-pregnant patient | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 144 | preg.items[0] | The treatment of asthma exacerbations is the same as in non-pregnant patients | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 145 | preg.items[1] | Prompt treatment with bronchodilators, oxygen and systemic corticosteroids is needed to avoid foetal hypoxia | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 146 | preg.items[2] | Magnesium sulphate can be administered if indicated | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 147 | preg.items[3] | Oxygen saturation should be maintained between 94 and 98% | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 148 | preg.items[4] | Continuous foetal monitoring should be considered | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 149 | preg.items[5] | Early referral to critical care is recommended for moderate to severe asthma exacerbations | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 150 | preg.items[6] | ICS is safe and remains the preferred long-term maintenance and should be continued; inhaled β2-agonists an... | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 151 | preg.items[7] | During labour: in patients who are on prednisolone exceeding 7.5 mg/day for more than 2 weeks prior to deli... | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 152 | preg.items[8] | Asthma patients should be encouraged to breastfeed and their asthma medications should be continued during ... | (p50 = PDF 69; p51 = PDF 70; p58 = PDF 77) | unchanged |
| 153 | preg.items[9] | Asthma in pregnancy is an indication for referral (chapter 9, p58) | p58 = PDF 77 | unchanged |
| 154 | preg.gap | CPG 8.2 (p50), Recommendation 16 (p51) and chapter 9 (p58). The target in pregnancy, 94 and 98%, differs fr... | p50 = PDF 69; p51 = PDF 70; p58 = PDF 77 | CHANGED (D7) |
| 155 | ref.q | Any indication for referral to a respiratory physician? | (p58 = PDF 77) | unchanged |
| 156 | ref.hint | Chapter 9 (p58): timely referral to a respiratory physician or physicians experienced in asthma management. | p58 = PDF 77 | unchanged |
| 157 | ref.items[0] | Difficulty in confirming the diagnosis of asthma | (p58 = PDF 77) | unchanged |
| 158 | ref.items[1] | Severe or uncontrolled asthma | (p58 = PDF 77) | unchanged |
| 159 | ref.items[2] | Severe or life-threatening asthma exacerbations | (p58 = PDF 77) | unchanged |
| 160 | ref.items[3] | Asthma in pregnancy | (p58 = PDF 77) | unchanged |
| 161 | ref.items[4] | Frequent unscheduled healthcare visits for exacerbations | (p58 = PDF 77) | unchanged |
| 162 | ref.items[5] | Frequent bursts or ongoing use of OCS | (p58 = PDF 77) | unchanged |
| 163 | ref.items[6] | Asthma with multiple co-morbidities | (p58 = PDF 77) | unchanged |
| 164 | ref.items[7] | Asthma with concurrent food allergy or anaphylaxis | (p58 = PDF 77) | unchanged |
| 165 | ref.items[8] | Suspected occupational asthma | (p58 = PDF 77) | unchanged |
| 166 | ref.opts[0] | Yes, present |  | unchanged |
| 167 | ref.opts[1] | None |  | unchanged |
| 168 | refy.links[0] | Clinic referrals from the ED |  | unchanged |
| 169 | refy.title | Refer to a respiratory physician or a physician experienced in asthma management | (p58 = PDF 77) | unchanged |
| 170 | refy.items[0] | Timely referral to a respiratory physician or physicians experienced in asthma management is essential | (p58 = PDF 77) | unchanged |
| 171 | refy.items[1] | Suspected occupational asthma: refer to a specialist for further evaluation; confirmed cases should be noti... | p53 = PDF 72 | unchanged |
| 172 | refy.gap | CPG chapter 9 (p58). It does not say how soon, or to which clinic: in HKL, use the department's referral ro... | p58 = PDF 77 | unchanged |
| 173 | refn.title | No referral indication in chapter 9 | (p58 = PDF 77; p43 = PDF 62) | unchanged |
| 174 | refn.items[0] | Following asthma exacerbation, all patients should be given a follow-up plan upon discharge (Recommendation... | (p58 = PDF 77; p43 = PDF 62) | unchanged |
| 175 | refn.items[1] | The follow-up plan should include a referral letter to a clinic for the patient to be seen within seven day... | (p58 = PDF 77; p43 = PDF 62) | unchanged |
| 176 | refn.gap | CPG chapter 9 (p58), 7.5 and Recommendation 14 (p43). | p58 = PDF 77; p43 = PDF 62 | unchanged |
| 177 | notes/Severity/Table 9: classification of severity of asthma exacerbation.src | CPG p37, adapted from GEMA 5.3 (2023). Note: Not all parameters need to be met to classify the severity. Cl... | p37 = PDF 56 | unchanged |
| 178 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 1 | Level of consciousness / Alert / Alert / Alert/confused/drowsy / Confused/drowsy/coma | (p37 = PDF 56) | unchanged |
| 179 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 2 | Speech / Normal / Speaks in phrases / Speaks in words / Unable to speak | (p37 = PDF 56) | unchanged |
| 180 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 3 | Respiratory rate / Normal/ / >20/min / >25/min / <12/min | (p37 = PDF 56) | unchanged |
| 181 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 4 | Pulse rate / <100/min / 100 – 120/min / >120/min / Bradycardia/cardiac arrest | (p37 = PDF 56) | unchanged |
| 182 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 5 | Blood pressure / Normal / Normal / Normal/hypotension / Hypotension | (p37 = PDF 56) | unchanged |
| 183 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 6 | Use of accessory muscles / Absent / Present / Very evident / Paradoxical chest movement/absent | (p37 = PDF 56) | unchanged |
| 184 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 7 | Breath sounds / Wheezing / Wheezing / Wheezing / Silent chest | (p37 = PDF 56) | unchanged |
| 185 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 8 | Oxygen saturation (SpO2) / ≥95% / 90 – 95% / <90% / <90% | (p37 = PDF 56) | CHANGED (D8) |
| 186 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 9 | PaO2 / Normal / <80 mmHg / <60 mmHg / < 60 mmHg | (p37 = PDF 56) | unchanged |
| 187 | notes/Severity/Table 9: classification of severity of asthma exacerbation row 10 | PaCO2 / Normal / <40 mmHg / <40 mmHg or normal / >45 mmHg | (p37 = PDF 56) | unchanged |
| 188 | notes/Severity/Where the algorithms print it differently.src | Algorithms 3 and 4 (p xiii and xiv) against Table 9 (p37). Each is quoted as printed. | p xiii = PDF 17; p37 = PDF 56 | unchanged |
| 189 | notes/Severity/Where the algorithms print it differently[0] | Mild SpO2: <95% (Algorithms 3 and 4); ≥95% (Table 9) | (p xiii = PDF 17; p37 = PDF 56) | CHANGED (D9) |
| 190 | notes/Severity/Where the algorithms print it differently[1] | Mild use of accessory muscles: Present (Algorithms 3 and 4); Absent (Table 9) | (p xiii = PDF 17; p37 = PDF 56) | unchanged |
| 191 | notes/Severity/Where the algorithms print it differently[2] | Mild respiratory rate: Normal (Algorithms 3 and 4); Normal/ (Table 9, with nothing after the slash) | (p xiii = PDF 17; p37 = PDF 56) | unchanged |
| 192 | notes/Severity/Where the algorithms print it differently[3] | Moderate PaCO2: <40 mmHg or normal (Algorithm 3); <40 mmHg (Algorithm 4 and Table 9) | (p xiii = PDF 17; p37 = PDF 56) | unchanged |
| 193 | notes/Severity/Where the algorithms print it differently[4] | Printed in two columns: SpO2 <90% and PaO2 <60 mmHg (severe and life-threatening); 95% (mild ≥95% and moder... | (p xiii = PDF 17; p37 = PDF 56) | CHANGED (D10) |
| 194 | notes/Severity/Where the algorithms print it differently[5] | Table 9 has no PEF row, although the text before it says symptoms, signs and lung function measurements (PE... | p37 = PDF 56 | unchanged |
| 195 | notes/Severity/Assessment, monitoring and evaluation.src | CPG 7.1 (p36–37), Recommendation 8 (p38), 7.3 (p41–42), Recommendation 13 (p42) and chapter 3 (p4). Table 8... | p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23 | unchanged |
| 196 | notes/Severity/Assessment, monitoring and evaluation[0] | Rapid clinical assessment of severity should be performed for all asthma exacerbation. Treatment should be ... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 197 | notes/Severity/Assessment, monitoring and evaluation[1] | The physical examination includes vital signs assessment, evaluation of severity and, consideration of comp... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 198 | notes/Severity/Assessment, monitoring and evaluation[2] | Chest X-ray (CXR) is not routinely indicated in all patients with asthma exacerbation. It should be conside... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 199 | notes/Severity/Assessment, monitoring and evaluation[3] | Restlessness is an early sign of hypoxia. | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 200 | notes/Severity/Assessment, monitoring and evaluation[4] | Oxygen saturation levels of <90% indicates the need for aggressive management. Saturation should be assesse... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 201 | notes/Severity/Assessment, monitoring and evaluation[5] | Arterial blood gas (ABG) measurement is not routinely required. It should be considered for patients with P... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 202 | notes/Severity/Assessment, monitoring and evaluation[6] | A PaO2<60 mmHg and a normal or increased PaCO2 (especially >45 mmHg) indicates respiratory failure. | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 203 | notes/Severity/Assessment, monitoring and evaluation[7] | Chest X-ray should be considered in patients who do not respond to treatment or if an alternative diagnosis... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | CHANGED (D11) |
| 204 | notes/Severity/Assessment, monitoring and evaluation[8] | Severe or life-threatening: vital signs, monitor continuously or at least every 15 – 30 minutes, including ... | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 205 | notes/Severity/Assessment, monitoring and evaluation[9] | In severe and life-threatening asthma arterial blood gases should be done (Recommendation 13). | (p36–37 = PDF 55–56; p38 = PDF 57; p41–42 = PDF 60–61; p42 = PDF 61; p4 = PDF 23) | unchanged |
| 206 | notes/Severity/Assessment, monitoring and evaluation[10] | Whenever possible, PEFR should be recorded before treatment is initiated. It should be monitored at 1-hour ... | p4 = PDF 23 | unchanged |
| 207 | notes/Drugs/Oxygen.src | CPG 7.2 (p38) and Recommendation 9 (p39) | p38 = PDF 57; p39 = PDF 58 | unchanged |
| 208 | notes/Drugs/Oxygen[0] | Patients with asthma exacerbation are often hypoxaemic and may require oxygen therapy. | (p38 = PDF 57; p39 = PDF 58) | unchanged |
| 209 | notes/Drugs/Oxygen[1] | Oxygen saturation of ≥94% should be maintained in all hypoxic asthma patients. | (p38 = PDF 57; p39 = PDF 58) | unchanged |
| 210 | notes/Drugs/Oxygen[2] | In asthma exacerbation in emergency department, high flow nasal cannula should be considered over conventio... | (p38 = PDF 57; p39 = PDF 58) | unchanged |
| 211 | notes/Drugs/Oxygen[3] | Algorithm 4 (p xiv): controlled oxygen, target saturation 93 to 95% (if available, in the mild and moderate... | p xiv = PDF 18 | CHANGED (D12) |
| 212 | notes/Drugs/Oxygen[4] | Pregnancy: oxygen saturation should be maintained between 94 and 98% (p50). | p50 = PDF 69 | unchanged |
| 213 | notes/Drugs/β2-agonists.src | CPG 7.2 and Recommendation 10 (p39) | p39 = PDF 58 | unchanged |
| 214 | notes/Drugs/β2-agonists[0] | Inhaled β2-agonists is the first-line treatment in asthma exacerbation. | (p39 = PDF 58) | unchanged |
| 215 | notes/Drugs/β2-agonists[1] | In mild to moderate asthma exacerbations, pressurised metered dose inhaler via spacer is the preferred meth... | (p39 = PDF 58) | unchanged |
| 216 | notes/Drugs/β2-agonists[2] | Oral SABA should not be used in asthma exacerbation due to their systemic side effects. | (p39 = PDF 58) | unchanged |
| 217 | notes/Drugs/β2-agonists[3] | pMDI with spacer should not be used in life-threatening asthma. | (p39 = PDF 58) | unchanged |
| 218 | notes/Drugs/β2-agonists[4] | There is no current evidence supporting the routine use of parenteral β2-agonists in patients with asthma e... | (p39 = PDF 58) | unchanged |
| 219 | notes/Drugs/Nebuliser doses in an exacerbation.src | CPG Appendix 9 H (p85–86). The comment is printed in one cell beside the three. Disclaimer: The information... | p85–86 = PDF 104–105 | unchanged |
| 220 | notes/Drugs/Nebuliser doses in an exacerbation row 1 | Salbutamol 0.5 % nebulising solution / 2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 ... | (p85–86 = PDF 104–105) | unchanged |
| 221 | notes/Drugs/Nebuliser doses in an exacerbation row 2 | Ipratropium bromide 0.0125% nebulising solution (125 µg/ml); Ipratropium bromide 0.025% nebulising solution... | (p85–86 = PDF 104–105) | unchanged |
| 222 | notes/Drugs/Nebuliser doses in an exacerbation row 3 | Ipratropium bromide 0.5 mg and salbutamol 2.5 mg/unit dose vial (UDV) / 1 UDV every 4 to 6 hours | (p85–86 = PDF 104–105) | unchanged |
| 223 | notes/Drugs/Nebuliser doses in an exacerbation row 4 | Comment / Recommend to dilute the drug solution dose to a final volume of 4 – 5 ml in jet nebuliser unless ... | (p85–86 = PDF 104–105) | unchanged |
| 224 | notes/Drugs/Ipratropium bromide.src | CPG 7.2 (p39), Algorithms 3 and 4 (p xiii and xiv) | p xiii = PDF 17; p39 = PDF 58 | unchanged |
| 225 | notes/Drugs/Ipratropium bromide[0] | A Cochrane systematic review demonstrated that combined inhaled therapy (ipratropium bromide + SABA) was mo... | (p xiii = PDF 17; p39 = PDF 58) | CHANGED (D13) |
| 226 | notes/Drugs/Ipratropium bromide[1] | Algorithm 4 gives ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours in the severe and life-threatening... | (p xiii = PDF 17; p39 = PDF 58) | unchanged |
| 227 | notes/Drugs/Systemic corticosteroids.src | CPG 7.2 (p39–40) and Recommendation 11 (p40) | p39–40 = PDF 58–59; p40 = PDF 59 | unchanged |
| 228 | notes/Drugs/Systemic corticosteroids[0] | Systemic corticosteroids should be given in all patients with asthma exacerbation. | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 229 | notes/Drugs/Systemic corticosteroids[1] | The medication should always be administered as early as possible. This is important especially in patients... | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 230 | notes/Drugs/Systemic corticosteroids[2] | The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum... | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 231 | notes/Drugs/Systemic corticosteroids[3] | Administration of corticosteroids by oral, intramuscular (IM) or IV route provides similar biological resul... | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 232 | notes/Drugs/Systemic corticosteroids[4] | Algorithm 4: prednisolone 0.5 - 1 mg/kg with a maximum of 50 mg stat (mild and moderate); IV hydrocortisone... | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 233 | notes/Drugs/Systemic corticosteroids[5] | The CPG gives no formula for the ideal body weight, and no interval for the divided doses of hydrocortisone. | (p39–40 = PDF 58–59; p40 = PDF 59) | unchanged |
| 234 | notes/Drugs/Inhaled corticosteroids.src | CPG 7.2 (p40) | p40 = PDF 59 | unchanged |
| 235 | notes/Drugs/Inhaled corticosteroids[0] | Asthma patients should continue their maintenance inhaled corticosteroids (via pMDI or DPI) when prescribed... | (p40 = PDF 59) | unchanged |
| 236 | notes/Drugs/Inhaled corticosteroids[1] | There is insufficient evidence to support the use of nebulised corticosteroids in asthma exacerbation in em... | (p40 = PDF 59) | unchanged |
| 237 | notes/Drugs/Magnesium sulphate.src | CPG 7.2 and Recommendation 12 (p41) | p41 = PDF 60 | unchanged |
| 238 | notes/Drugs/Magnesium sulphate[0] | A single dose of 2 g intravenous magnesium sulphate infusion over 20 minutes should be considered in acute ... | (p41 = PDF 60) | unchanged |
| 239 | notes/Drugs/Magnesium sulphate[1] | There is no retrievable evidence of benefit from repeated dosing of magnesium sulphate in asthma exacerbati... | (p41 = PDF 60) | unchanged |
| 240 | notes/Drugs/Magnesium sulphate[2] | Nebulised magnesium sulphate is not recommended for treatment in adults with acute asthma. | (p41 = PDF 60) | unchanged |
| 241 | notes/Drugs/Magnesium sulphate[3] | The CPG gives no diluent or volume for the infusion. | (p41 = PDF 60) | unchanged |
| 242 | notes/Drugs/Aminophylline.src | CPG 7.2 (p41) | p41 = PDF 60 | unchanged |
| 243 | notes/Drugs/Aminophylline[0] | IV aminophylline has limited effectiveness apart from unfavourable AEs compared with standard therapy. Ther... | (p41 = PDF 60) | unchanged |
| 244 | notes/Drugs/Reliever inhaler.src | CPG Appendix 9 A (p79) | p79 = PDF 98 | unchanged |
| 245 | notes/Drugs/Reliever inhaler[0] | Salbutamol 100 µg/dose inhaler, pMDI: for relief of acute bronchospasm, 1 to 2 inhalations. | (p79 = PDF 98) | unchanged |
| 246 | notes/Drugs/Reliever inhaler[1] | Salbutamol 100 and 200 µg/dose inhaler, Easyhaler® (DPI): for relief of acute bronchospasm, 1 inhalation as... | (p79 = PDF 98) | unchanged |
| 247 | notes/Drugs/Medicines to use with caution.src | CPG 6.2.2 (p35) and 8.6 (p56) | p35 = PDF 54; p56 = PDF 75 | unchanged |
| 248 | notes/Drugs/Medicines to use with caution[0] | Aspirin and non-steroidal anti-inflammatory drugs (NSAIDs) are generally not contraindicated in asthma unle... | (p35 = PDF 54; p56 = PDF 75) | unchanged |
| 249 | notes/Drugs/Medicines to use with caution[1] | Non-selective β-blockers including eyedrops can exacerbate asthma symptoms by inducing bronchospasm. If ind... | (p35 = PDF 54; p56 = PDF 75) | unchanged |
| 250 | notes/Drugs/Medicines to use with caution[2] | Potential interactions of COVID-19 and asthma medications should be assessed in particular ritonavir-booste... | (p35 = PDF 54; p56 = PDF 75) | unchanged |
| 251 | notes/Action plan/A. Suggested asthma action plan template.src | CPG Appendix 5A (p71), printed in English only. Note: The use of pMDI with spacer is encouraged. The form a... | p71 = PDF 90 | unchanged |
| 252 | notes/Action plan/A. Suggested asthma action plan template row 1 | WELL: No cough, wheeze, chest tightness or shortness of breath AND Sleep well at night AND Able to perform ... | (p71 = PDF 90) | unchanged |
| 253 | notes/Action plan/A. Suggested asthma action plan template row 2 | GETTING WORSE: If you have ANY of these: Cough, wheeze, chest tightness or shortness of breath; Waking up a... | (p71 = PDF 90) | unchanged |
| 254 | notes/Action plan/A. Suggested asthma action plan template row 3 | ALERT: If you have ANY of these: Worsening cough, wheeze, chest tightness or shortness of breath; Difficult... | (p71 = PDF 90) | unchanged |
| 255 | notes/Action plan/B. Suggested asthma action plan template: MART (maintenance-and-reliever therapy).src | CPG Appendix 5B (p72), printed in English only. The WELL and GETTING WORSE descriptions are the same as in ... | p72 = PDF 91 | unchanged |
| 256 | notes/Action plan/B. Suggested asthma action plan template: MART (maintenance-and-reliever therapy) row 1 | WELL / No need to use reliever except before exercise (if needed) / Take _____ inhalations _____ times a day | (p72 = PDF 91) | unchanged |
| 257 | notes/Action plan/B. Suggested asthma action plan template: MART (maintenance-and-reliever therapy) row 2 | GETTING WORSE / DON'T WAIT. Take one inhalation as needed (Maximum 12 inhalations a day including controlle... | (p72 = PDF 91) | unchanged |
| 258 | notes/Action plan/B. Suggested asthma action plan template: MART (maintenance-and-reliever therapy) row 3 | ALERT: If you have any of these: Worsening symptoms (cough, wheeze, chest tightness or shortness of breath)... | (p72 = PDF 91) | unchanged |
| 259 | notes/Action plan/Using the action plan.src | CPG 5.2 (p13–14) and Recommendation 3 (p15) | p13–14 = PDF 32–33; p15 = PDF 34 | unchanged |
| 260 | notes/Action plan/Using the action plan[0] | AAP contains action (decision) points which guide patients in making short-term adjustments to their treatm... | (p13–14 = PDF 32–33; p15 = PDF 34) | unchanged |
| 261 | notes/Action plan/Using the action plan[1] | The AAP should be completed and explained to the patient by the attending healthcare provider to ensure pat... | (p13–14 = PDF 32–33; p15 = PDF 34) | unchanged |
| 262 | notes/Action plan/Using the action plan[2] | In PEFR-based plans, personal best PEFR should be used for the action point. The best PEFR is the patient's... | p70 = PDF 89 | unchanged |
| 263 | notes/Action plan/Using the action plan[3] | Patients are advised to seek further medical assistance if symptoms persist despite following the AAP. | (p13–14 = PDF 32–33; p15 = PDF 34) | unchanged |
| 264 | notes/Action plan/Using the action plan[4] | Regular medical reviews in asthma patients are preferred over self-adjustment of medications aided by asthm... | (p13–14 = PDF 32–33; p15 = PDF 34) | unchanged |
| 265 | notes/Inhaler and spacer/pMDI and spacer (VHC).src | CPG Appendix 6 (p73–74). Inhaler techniques must be checked and corrected, if necessary, at every single op... | p73–74 = PDF 92–93 | unchanged |
| 266 | notes/Inhaler and spacer/pMDI and spacer (VHC)[0] | Priming, pMDI: Remove cap, shake inhaler well and release several puffs into air (varies from product to pr... | (p73–74 = PDF 92–93) | unchanged |
| 267 | notes/Inhaler and spacer/pMDI and spacer (VHC)[1] | When to prime: before first-time use; when not used for 5 – 7 days. | (p73–74 = PDF 92–93) | unchanged |
| 268 | notes/Inhaler and spacer/pMDI and spacer (VHC)[2] | 1. Remove pMDI cap and spacer's mouthpiece cap (if any). Shake pMDI well. Insert pMDI upright into back of ... | (p73–74 = PDF 92–93) | unchanged |
| 269 | notes/Inhaler and spacer/pMDI and spacer (VHC)[3] | 5a. Spacer with mouthpiece: Place mouthpiece gently between teeth (without biting). Ensure a tight lip seal... | (p73–74 = PDF 92–93) | unchanged |
| 270 | notes/Inhaler and spacer/pMDI and spacer (VHC)[4] | 6a. Tidal Breathing Method (for VHC only): Inhale slowly and deeply through mouth, pressing canister down O... | (p73–74 = PDF 92–93) | unchanged |
| 271 | notes/Inhaler and spacer/pMDI and spacer (VHC)[5] | 6b. Single Breath Method: Inhale slowly and deeply through mouth, pressing canister down ONCE at start of i... | (p73–74 = PDF 92–93) | unchanged |
| 272 | notes/Inhaler and spacer/pMDI and spacer (VHC)[6] | 7. Repeat the steps (if needed) starting with shaking pMDI. Wait 30 - 60 seconds before repeating. Remove p... | (p73–74 = PDF 92–93) | unchanged |
| 273 | notes/Inhaler and spacer/pMDI and spacer (VHC)[7] | Cleaning: Clean spacer once a week; cleaning instruction varies (refer to manufacturer's recommendations). | (p73–74 = PDF 92–93) | unchanged |
| 274 | notes/Inhaler and spacer/pMDI and spacer (VHC)[8] | After each inhalation of ICS, rinse mouth with water, gargle and spit out the water. | (p73–74 = PDF 92–93) | unchanged |
| 275 | notes/Inhaler and spacer/pMDI and spacer (VHC)[9] | Shaking pMDI well immediately before each actuation is important for delivering the correct dose. VHC are s... | (p73–74 = PDF 92–93) | unchanged |
| 276 | notes/Inhaler and spacer/Spacers and nebulisers.src | CPG 8.6 (p56) | p56 = PDF 75 | unchanged |
| 277 | notes/Inhaler and spacer/Spacers and nebulisers[0] | If clinically indicated, nebuliser use should not be discouraged especially in life-threatening asthma and ... | (p56 = PDF 75) | unchanged |
| 278 | notes/Inhaler and spacer/Spacers and nebulisers[1] | The use of pMDI with spacer is an alternative to nebulisers. It should be either single patient use or auto... | (p56 = PDF 75) | unchanged |
| 279 | notes/Inhaler and spacer/Spacers and nebulisers[2] | If a commercial spacer is not available or unaffordable, homemade or custom-made spacers e.g. plastic bottl... | (p56 = PDF 75) | unchanged |
| 280 | notes/Treatment steps/Every patient on ICS-containing therapy.src | CPG Recommendations 2 (p11), 5 (p25), 6 (p31) and 7 (p35) | p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54 | unchanged |
| 281 | notes/Treatment steps/Every patient on ICS-containing therapy[0] | All asthma patients should be on inhaled corticosteroids (ICS)-containing therapy. | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 282 | notes/Treatment steps/Every patient on ICS-containing therapy[1] | Short-acting β2-agonist should always be taken together with inhaled corticosteroids. | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 283 | notes/Treatment steps/Every patient on ICS-containing therapy[2] | Inhaled short-acting β2-agonists (SABA) should not be used as monotherapy; inhaled SABA may be used as reli... | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 284 | notes/Treatment steps/Every patient on ICS-containing therapy[3] | Anti-inflammatory reliever (AIR) therapy (either ICS with formoterol or ICS with SABA) may be used as a rel... | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 285 | notes/Treatment steps/Every patient on ICS-containing therapy[4] | Theophylline should not be used for treatment of asthma. | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 286 | notes/Treatment steps/Every patient on ICS-containing therapy[5] | Asthma patients who smoke or vape should be strongly encouraged to quit at every clinic visit. | (p11 = PDF 30; p25 = PDF 44; p31 = PDF 50; p35 = PDF 54) | unchanged |
| 287 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment.src | CPG p xi. Confirmed asthma: assess for asthma control, assess for risk factors for asthma exacerbation and ... | p xi = PDF 15 | unchanged |
| 288 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[0] | Well-controlled asthma (ACT ≥20 or ‘NO’ to all GINA questionnaire): maintenance low-dose ICS + PRN SABA OR ... | (p xi = PDF 15) | unchanged |
| 289 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[1] | Not well controlled, with symptoms most days OR night-time awakening ≥ 1 a week OR FEV1 <80% of predicted o... | (p xi = PDF 15) | unchanged |
| 290 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[2] | Not well controlled, with daily symptoms OR night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LL... | p9 = PDF 28 | CHANGED (D14) |
| 291 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[3] | Reliever: SABA OR ICS-SABA OR ICS-formoterol (if maintenance includes ICS-formoterol), e.g. budesonide-form... | (p xi = PDF 15) | unchanged |
| 292 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[4] | Reassess asthma symptoms at 3 - 6 months. Inhaler technique and adherence to treatment should be assessed a... | (p xi = PDF 15) | unchanged |
| 293 | notes/Treatment steps/Algorithm 1: initiation of asthma treatment[5] | Refer to Table 7 for ICS dosing category. LTRA may be added to maintenance therapy if the patient has concu... | (p xi = PDF 15) | unchanged |
| 294 | notes/Treatment steps/Algorithm 2: step up and step down.src | CPG p xii and 4.2 (p10–11) | p xii = PDF 16; p10–11 = PDF 29–30 | unchanged |
| 295 | notes/Treatment steps/Algorithm 2: step up and step down[0] | Maintenance, from the lowest step: PRN ICS-formoterol or low-dose ICS with PRN SABA or low-dose ICS with PR... | (p xii = PDF 16; p10–11 = PDF 29–30) | unchanged |
| 296 | notes/Treatment steps/Algorithm 2: step up and step down[1] | Reliever: ICS-formoterol (if maintenance contains ICS-formoterol), maximum total dose 12 puffs/day, OR ICS-... | (p xii = PDF 16; p10–11 = PDF 29–30) | unchanged |
| 297 | notes/Treatment steps/Algorithm 2: step up and step down[2] | Consider a short-term step up (for 1 - 2 weeks) with Asthma Action Plan (AAP) in situations with identifiab... | (p xii = PDF 16; p10–11 = PDF 29–30) | unchanged |
| 298 | notes/Treatment steps/Algorithm 2: step up and step down[3] | Early referral to respiratory physicians should be considered in patients with high-risk of exacerbation or... | (p xii = PDF 16; p10–11 = PDF 29–30) | unchanged |
| 299 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg).src | CPG p27, from GINA 2024. Where the CPG prints one value across two or three columns, it is repeated here. | p27 = PDF 46 | unchanged |
| 300 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 1 | Beclometasone dipropionate (pMDI, standard particle, HFA) / 200 - 500 / >500 - 1000 / >1000 | (p27 = PDF 46) | unchanged |
| 301 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 2 | Beclometasone dipropionate (DPI or pMDI, extrafine particle, HFA) / 100 - 200 / >200 - 400 / >400 | (p27 = PDF 46) | unchanged |
| 302 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 3 | Budesonide (DPI, or pMDI, standard particle, HFA) / 200 - 400 / >400 - 800 / >800 | (p27 = PDF 46) | unchanged |
| 303 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 4 | Ciclesonide (pMDI, extrafine particle, HFA) / 80 - 160 / >160 - 320 / >320 | (p27 = PDF 46) | unchanged |
| 304 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 5 | Fluticasone furoate (DPI) / 100 / 100 / 200 | (p27 = PDF 46) | unchanged |
| 305 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 6 | Fluticasone propionate (DPI) / 100 - 250 / >250 - 500 / >500 | (p27 = PDF 46) | unchanged |
| 306 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 7 | Fluticasone propionate (pMDI, standard particle, HFA) / 100 - 250 / >250 - 500 / >500 | (p27 = PDF 46) | unchanged |
| 307 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 8 | Mometasone furoate (DPI) / Depends on DPI device - refer to product information / Depends on DPI device - r... | (p27 = PDF 46) | unchanged |
| 308 | notes/Treatment steps/Table 7: ICS doses, total daily ICS dose (µg) row 9 | Mometasone furoate (pMDI, standard particle, HFA) / 200 - 400 / 200 - 400 / >400 | (p27 = PDF 46) | unchanged |
| 309 | notes/Treatment steps/Statement of intent.src | CPG, front matter |  | unchanged |
| 310 | notes/Treatment steps/Statement of intent[0] | These clinical practice guidelines (CPG) are meant to be guides for clinical practice, based on the best av... |  | unchanged |
| 311 | refs[0] | Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Asthma in Adults (Second Edition).... |  | optional (D15): note the corrected web version |
| 312 | refs[1] | Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not... |  | unchanged |
| 313 | refs[2] | Table 9 is adapted in the CPG from: Plaza Moral V, Alobid I, Álvarez Rodríguez C, et al. GEMA 5.3. Spanish ... |  | unchanged |
| 314 | refs[3] | Appendix 9 sources, as the CPG lists them (p86): drug information databases (Lexicomp), Formulari Ubat KKM ... | p86 = PDF 105 | unchanged |
| 315 | calc apred.t | Asthma: prednisolone by weight |  | unchanged |
| 316 | calc apred.src | Asthma CPG 2nd ed., p xiv and p40 | p xiv = PDF 18; p40 = PDF 59 | unchanged |
| 317 | calc apred.sub | The CPG's prednisolone range in an asthma exacerbation: 0.5 to 1 mg/kg, maximum 50 mg, for 5 to 7 days. |  | unchanged |
| 318 | calc apred.note | Asthma CPG 2nd ed. (MaHTAS 2024), Algorithm 4 (p xiv): Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg ... | p xiv = PDF 18; p40 = PDF 59 | unchanged |
| 319 | calc apred.gap | The CPG uses the ideal body weight (p40) but gives no formula for it, and Algorithm 4 writes mg/kg without ... | p40 = PDF 59 | unchanged |
| 320 | calc apef.t | Asthma action plan: PEF zones |  | unchanged |
| 321 | calc apef.src | Asthma CPG 2nd ed., Appendix 5 |  | unchanged |
| 322 | calc apef.sub | The three PEFR zones for the CPG's written asthma action plan, from the personal best. |  | unchanged |
| 323 | calc apef.note | Asthma CPG 2nd ed., Appendix 5A (p71), the same in 5B: WELL, PEFR: ____ to ____l/min (80% to 100% of person... | p71 = PDF 90; p13 = PDF 32; p70 = PDF 89; p41 = PDF 60 | unchanged |
| 324 | calc apef.gap | The plan's bands leave readings between 79% and 80% of personal best, and above 100%, without a zone. The p... | p37 = PDF 56 | pre-existing error, found on the way (E3) |
| 325 | calc apred output | Course / Can be stopped without gradual reduction (p40) | p40 = PDF 59 | unchanged |
| 326 | calc apef output | Check the number /  |  | unchanged |
| 327 | calc apef output | WELL / 80% to 100% of personal best |  | unchanged |
| 328 | calc apef output | GETTING WORSE / 50% to 79% of personal best |  | unchanged |
| 329 | calc apef output | ALERT / Less than 50% of personal best |  | unchanged |
| 330 | CALC_FACTS | Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat |  | unchanged |
| 331 | CALC_FACTS | ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily |  | unchanged |
| 332 | CALC_FACTS | This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction |  | unchanged |
| 333 | CALC_FACTS | Continue prednisolone (5 - 7 days) |  | unchanged |
| 334 | CALC_FACTS | The CPG gives no formula for the ideal body weight |  | unchanged |
| 335 | CALC_FACTS | PEFR: ____ to ____l/min (80% to 100% of personal best) |  | unchanged |
| 336 | CALC_FACTS | PEFR: ____ to ____l/min (50% to 79% of personal best) |  | unchanged |
| 337 | CALC_FACTS | PEFR: Below ____l/min (less than 50% of personal best) |  | unchanged |
| 338 | CALC_FACTS | In patients without known personal best, the predicted value may be used |  | unchanged |
| 339 | CALC_FACTS | It should be considered for patients with PEFR <50% |  | unchanged |
| 340 | CALC_FACTS | PEF or FEV1 may not be applicable to be used in acute asthma exacerbation |  | unchanged |
| 341 | REMIND asthma-cpg--mmt | 20 min: repeat every 20 minutes for 1 hour |  | unchanged |
| 342 | REMIND asthma-cpg--svt | 20 min: repeat every 20 minutes for 1 hour |  | unchanged |
| 343 | REMIND asthma-cpg--ltx | 20 min: repeat every 20 minutes for 1 hour |  | unchanged |
| 344 | CONFIRM | Which asthma source the Green Zone follows where the ebook (built from the 2017 CPG) and the Asthma in Adul... |  | CHANGED (E1) |
| 345 | CONFIRM | Points inside the asthma CPG (2nd edition) itself: Table 9 prints SpO2 <90% and PaO2 <60 mmHg under both se... |  | CHANGED (E2, E4) |

## Proposed edits: exact find and replace pairs

Apply the pairs in this order (D4 before D6). Each find string is copied from the files as committed at HEAD (729629c), with their en dashes, ≥ signs and straight quotes, and its count was checked.

The two kinds of pair:
- **Quoted:** the new text is the CPG as printed. It must be taken exactly as printed, because the copyright allows reproduction only unchanged.
- **Commentary:** the guide's own words, rewritten because the fact behind them changed. The wording is a proposal.

The quoted text comes from A1 (D3, D5, D12), A2 (D2, D8), A4 (D4, D6), A6 (D14), A8 (D13) and p42 (D11).

**State of the working tree.** While this review was running, the D pairs (D15 included) and O1 to O3 appeared in the working tree. They were applied by someone else: this review edited nothing. `OPEN-ITEMS.md` there carries an earlier draft of O2 and O3 that dates the quick reference "October 2025". The quick reference prints no date, so the text below says "the current quick reference" instead. E1 to E4 were not yet applied. `engine.js` also has other uncommitted work, and the E find strings occur once in both HEAD and the working tree.

### Required: src/parts/data5.js and src/parts/engine.js

**D1** · `data5.js` · commentary · occurs 1

Find:

```
An SpO2 of 95% is in both mild (≥95%) and moderate (90 – 95%). Algorithms 3 and 4 print mild as SpO2 <95% with accessory muscle use present; Table 9 prints ≥95% and absent.
```

Replace with:

```
Table 9 prints mild SpO2 ≥95% and moderate 90 – 94%. Algorithms 3 and 4 print mild as SpO2 ≤95% with accessory muscle use present; Table 9 prints ≥95% and absent.
```

**D2** · `data5.js` · quoted · occurs 1

Find:

```
'Oxygen saturation (SpO2): 90 – 95%','PaO2: <80 mmHg'
```

Replace with:

```
'Oxygen saturation (SpO2): 90 – 94%','PaO2: <80 mmHg'
```

**D3** · `data5.js` · quoted · occurs 1

Find:

```
'Controlled oxygen (if available): target saturation 93 to 95%',
```

Replace with:

```
'Controlled oxygen (if available): target saturation ≥94%',
```

**D4** · `data5.js` · quoted + commentary · occurs 1

Find:

```
and SpO2 >94% under room air. The algorithm does not mark which arrow it belongs to.
```

Replace with:

```
and SpO2 ≥94% under room air. The asterisk marks both clinical improvement arrows: from the mild and moderate box to discharge, and from the severe box to monitoring and evaluation.
```

**D5** · `data5.js` · quoted (replace all: svt and ltx) · occurs 2 (replace all)

Find:

```
'Controlled oxygen: target saturation 93 to 95%',
```

Replace with:

```
'Controlled oxygen: target saturation ≥94%',
```

**D6** · `data5.js` · quoted · occurs 1

Find:

```
improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air
```

Replace with:

```
improvement of symptoms (not needing continuous SABA) and SpO2 ≥94% under room air
```

**D7** · `data5.js` · commentary · occurs 1

Find:

```
The target in pregnancy, 94 and 98%, differs from Algorithm 4 (93 to 95%).
```

Replace with:

```
The target in pregnancy, between 94 and 98%, has an upper limit that Algorithm 4 (≥94%) does not.
```

**D8** · `data5.js` · quoted · occurs 1

Find:

```
['Oxygen saturation (SpO2)','≥95%','90 – 95%','<90%','<90%']
```

Replace with:

```
['Oxygen saturation (SpO2)','≥95%','90 – 94%','<90%','<90%']
```

**D9** · `data5.js` · commentary · occurs 1

Find:

```
'Mild SpO2: <95% (Algorithms 3 and 4); ≥95% (Table 9)',
```

Replace with:

```
'Mild SpO2: ≤95% (Algorithms 3 and 4); ≥95% (Table 9). Moderate SpO2 is 90 – 94% in all three',
```

**D10** · `data5.js` · commentary · occurs 1

Find:

```
; 95% (mild ≥95% and moderate 90 – 95%); normal PaCO2
```

Replace with:

```
; normal PaCO2
```

**D11** · `data5.js` · quoted · occurs 1

Find:

```
'Chest X-ray should be considered in patients who do not respond to treatment
```

Replace with:

```
'CXR should be considered in patients who do not respond to treatment
```

**D12** · `data5.js` · quoted · occurs 1

Find:

```
controlled oxygen, target saturation 93 to 95% (if available
```

Replace with:

```
controlled oxygen, target saturation ≥94% (if available
```

**D13** · `data5.js` · quoted (flag: likely a typo in the print) · occurs 1

Find:

```
(ipratropium bromide + SABA)
```

Replace with:

```
(ipratropium bromide - SABA)
```

**D14** · `data5.js` · quoted + commentary removed · occurs 1

Find:

```
≥ 1 a week OR FEV1 <80% of predicted or LLN: maintenance medium-to-high-dose ICS-LABA OR medium-dose ICS-LABA with add-on LAMA. The text on p9 joins the FEV1 criterion here with AND.
```

Replace with:

```
≥ 1 a week AND FEV1 <80% of predicted or LLN: maintenance medium-to-high-dose ICS-LABA OR medium-dose ICS-LABA with add-on LAMA.
```

**E1** · `engine.js` · commentary (CONFIRM 11) · occurs 1

Find:

```
a discharge SpO2 over 95% or over 94%;
```

Replace with:

```
a discharge SpO2 over 95% or 94% and above;
```

**E2** · `engine.js` · commentary (CONFIRM 12) · occurs 1

Find:

```
mild SpO2 is ≥95% in Table 9 but <95% in Algorithms 3 and 4; four oxygen targets (93 to 95%, ≥94%, >94% for improvement, 94 to 98% in pregnancy);
```

Replace with:

```
mild SpO2 is ≥95% in Table 9 but ≤95% in Algorithms 3 and 4, and the current quick reference prints ≥95% and accessory muscle use absent; oxygen targets of ≥94% (the algorithms, Recommendation 9 and the improvement footnote) and 94 to 98% in pregnancy;
```

**E4** · `engine.js` · commentary (CONFIRM 12, appended) · occurs 1

Find:

```
and follow-up within 1 to 2 weeks or within seven days.',
```

Replace with:

```
and follow-up within 1 to 2 weeks or within seven days. The current quick reference differs from the CPG in its emergency department algorithm too: ipratropium bromide 0.5 mg stat in the severe box (the CPG: every 4 - 6 hours), no Consider HFNC, and deescalate where the CPG now says step-down; the guide follows the CPG.',
```

### Optional

**D15** · `data5.js` · optional: reference line · occurs 1

Find:

```
Medical Development Division; 2024. Available at https://mymahtas.moh.gov.my',
```

Replace with:

```
Medical Development Division; 2024; web version as corrected (copy last modified 15 Oct 2025, read 25 Nov 2026). Available at https://mymahtas.moh.gov.my',
```

**E3** · `engine.js` · optional: found on the way, not an update change · occurs 1

Find:

```
The predicted value comes only from the Appendix 4 nomogram, a picture with no formula.
```

Replace with:

```
The predicted value comes from the Appendix 4 nomogram, a scanned chart for Chinese adults in Singapore; the regression formulae printed on it (height in inches, age in years) are not built in.
```

### OPEN-ITEMS.md (kept in step with CONFIRM, as CLAUDE.md asks)

**O1** · `OPEN-ITEMS.md` · doc (item 11) · occurs 1

Find:

```
a discharge SpO2 over 95% or over 94%;
```

Replace with:

```
a discharge SpO2 over 95% or 94% and above;
```

**O2** · `OPEN-ITEMS.md` · doc (item 12) · occurs 1

Find:

```
mild SpO2 ≥95% in Table 9 but <95% in Algorithms 3 and 4; four oxygen targets;
```

Replace with:

```
mild SpO2 ≥95% in Table 9 but ≤95% in Algorithms 3 and 4 (the current quick reference prints ≥95%); oxygen targets of ≥94% and, in pregnancy, 94 to 98%;
```

**O3** · `OPEN-ITEMS.md` · doc (item 12, appended) · occurs 1

Find:

```
hydrocortisone 100 mg stat or 200 mg a day; follow-up within 1 to 2 weeks or within seven days.
```

Replace with:

```
hydrocortisone 100 mg stat or 200 mg a day; follow-up within 1 to 2 weeks or within seven days. The current quick reference differs from the CPG in its emergency department algorithm too: ipratropium bromide 0.5 mg stat in the severe box (the CPG: every 4 - 6 hours), no Consider HFNC, and deescalate where the CPG now says step-down; the guide follows the CPG.
```


## Also to do with these edits (not find and replace)

- **What's new:** CLAUDE.md asks a round that changes an entry's content to give `at` addresses, so a new `V8` round should name `#asthma-cpg` (and `#asthma-cpg--mmt`, `--svt`, `--ltx`, `--md` if steps are listed). It can then show as Changed to MOs who have opened it.
- **Tests:** no test in `test.js` asserts any of the changed strings (checked by grep). The walk to "Discharge with an asthma action plan" and the prednisolone check (`30–50 mg | 5 to 7 days`) are unaffected. Run `npm run all` after applying the edits.
- **`CPG-REVIEW-ASTHMA.md`:** its (b) points 1, 5, 8, 14, 28 and 29, its (c) rows for SpO2, oxygen and discharge criteria, its (d)2 "picture with no formula" and (d)3 SpO2 bands, and its (e) rows 5, 10, 11, 15, 24 to 27, 29 and 47 to 48 describe the 2024 file. Add a dated note pointing here, rather than rewriting the record.
- **The CPG shelf** (`CPG_SHELF` in `engine.js`, `drive:'1pkxXZSQHmoCxIw2X4XLfXBf4OZDAQC0s'`, `qrd:'1i1Gl8R4N1lwJ3oeyxfcKrYQchX1Gv-yM'`) opens Krishna's Drive copies of the earlier files. Replacing them with these files is a write to Google Drive, so it needs his go-ahead (rule 1). The test at `test.js:720` checks the Drive id, so keep the same file id (upload a new version) or update the test.
- **Not proposed:** quoting the quick reference anywhere, the QR-only salbutamol maximum of 8 puffs a day, and building the nomogram's regression formulae into `apef`. These are his calls.

## How it was checked

- **Text:** PyMuPDF 1.28.2 (installed into `C:\Users\user\tools\pylib`, run with `PYTHONPATH` set) extracted all 112 pages of both files and all 8 of the quick reference. A word-level diff ran page by page with whitespace and bullet glyphs collapsed, using `difflib.SequenceMatcher` without autojunk. 31 pages differ in their text layer, 24 of them in words (the rest in spacing and bullet glyphs).
- **Images:** every page of both files was rendered at 120 dpi in grey. 78 pages are byte-identical. The 34 that differ are those 31 plus PDF 16, 89 and 100 (a superscript, the rescanned nomogram, a removed overlay). Each of those was looked at side by side. The outlined pages without a text layer (Appendices 5, 6 and 9; PDF 90, 91, 93, 104, 105) are byte-identical apart from PDF 92 (the QR code), 98 (one dosage cell), 100 (the stray text), 102 and 103 (product labels).
- **Thresholds** were read on 300 dpi crops of the new file: Algorithm 4 (SpO2 row, the three oxygen boxes, the footnote, both asterisked arrows), Algorithm 3 (the same), Table 9 (the SpO2 row), Algorithm 1 (AND), p39 (the hyphen), p69 (≥20%), the nomogram's formulae, and the quick reference's ED algorithm and medicines page.
- **The guide's strings:** 201 sentence pieces of `asthma-cpg` and the calculators were found verbatim in both files. 3 were found only in the old file: the two footnote hints and the CXR line, all covered by the pairs. None was found only in the new file. The remaining pieces are the guide's labels and commentary.
- **The pairs** were checked read-only in the scratchpad, by `verify.cjs`, against HEAD copies of `data5.js` and `OPEN-ITEMS.md` and the working-tree `engine.js`, as follows:
  - Each find string occurs exactly the stated number of times in the real file.
  - Applied in order to copies, both edited `.js` copies pass `node --check`.
  - All 11 `CALC_FACTS` asthma lines are still in the edited `data5.js`.
  - None of "93 to 95", ">94%", "90 – 95%", "<95%", "ipratropium bromide + SABA", "does not mark which arrow" or "joins the FEV1" is left in the `asthma-cpg` block.
  - No replacement names the guide owner or uses an em dash.
  - The COPD CPG lines in `data7.js` that print "93-95%" are a different guideline and are left alone.
