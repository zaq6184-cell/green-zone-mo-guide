# Review: CPG Management of Rhinosinusitis in Adolescents and Adults (MaHTAS, 2016)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *Rhinosinusitis (sinusitis): CPG 2016* (`#sinusitis-cpg`) in the Breathing and allergy group. No calculator was built.

For the Green Zone MO Guide, entry `sinusitis-cpg`. Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Rhinosinusitis in Adolescents and Adults.* Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. Issued 2016, "will be reviewed in 2020 or sooner" (statement of intent, PDF page 2). ISBN 978-967-0769-63-9 (PDF page 2). File read: `...\AMM Clinical Practice Guidelines\Otorhinolaryngology\2016 - Management of Rhinosinusitis in Adolescents and Adults [845].pdf`, 51 PDF pages (Acrobat, created 2 Mar 2017), not modified. The quick reference (`... - Quick Reference [846].pdf`, 8 pages, created 21 Jul 2017) was read to compare; nothing in the draft comes from it. The Academy folder holds no newer edition, so the review date has passed with no replacement.
- **Copyright (PDF page 2):** MaHTAS owns it. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context. So the main brief applies (quote as printed, acknowledge), not the own-words addendum. The draft's `refs` carry the acknowledgement. Two parts come from third parties: Appendix 3 (SNOT-22, "Reproduced with permission from Washington University") is left out of the draft; Appendix 4 is "Adapted from Malaysian Official Portal MyHealth", a government portal, and is quoted with that source named.
- **Page offset:** printed arabic page = PDF page − 16 (p1 = PDF 17; p12 = PDF 28; p31 = PDF 47; p34 = PDF 50). Front matter in roman = PDF page − 5 (p i = PDF 6; Algorithms 1 to 5 = p vii to xi = PDF 12 to 16). PDF 1 is the cover, PDF 2 the copyright page and statement of intent, PDF 3 the key recommendations and PDF 4 to 5 the contents: none of these four carries a printed number, so the draft cites "key recommendations" without a page. PDF 51 is the back cover. Every page cited below and in the draft is the printed page.
- **Population (p iii):** all adolescents and adults (patients aged >12 years old) with rhinosinusitis. Healthcare settings: outpatient, inpatient and community (p iii). The CPG gives two sets of algorithms: for "Primary Care and Non-ORL Centre" (Algorithms 1 and 2) and for the "ORL Centre" (Algorithms 4 and 5); Algorithm 3 is the referral criteria between them. It never places an emergency department in a hospital that has ORL, such as HKL (point 30).
- **Advice and leaflet:** no leaflet and no Bahasa Melayu text. The only patient-facing text is Appendix 4, Proper use of nasal spray (p29–30), quoted in the draft's `advice` field (the Discharge advice button on every discharge outcome, with Copy). The CPG gives no return advice beyond Appendix 4's nosebleed line. The app shows the Discharge advice button on every `end:'discharge'` outcome, so `cold` (common cold, no spray prescribed) also offers the nasal spray technique: that is the app's behaviour, not an oversight. The `*` and `**` footnote markers quoted from Algorithm 3 (`urg`, `earlyx`) show as literal asterisks, as they do in `head-injury-cpg`.
- **Size:** `JSON.stringify(P['sinusitis-cpg']).length` = 31,469 (brief: about 30,000). A first, fuller draft was 41,652; it was brought down by scope, not by trimming quotes: the referral lists, ARS definitions and the full ABRS box are no longer repeated in tabs because they are the stepper's checklists and hints; Table 3 is summarised in the oral-steroid note; the three fluoroquinolone rows of Appendix 5 and mometasone's allergic rhinitis and nasal polyposis doses are named but not reproduced. Nothing an MO needs on shift was left out.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the ED | In the draft? |
|---|---|---|---|
| Copyright, statement of intent (PDF 2) | Reproduction terms; issued 2016, review 2020 | Terms; the passed review date | `refs`; menu hint ("due for review in 2020") |
| Key recommendations (PDF 3, unnumbered) | Ten recommendations, shortened from the chapters | Two differ in wording from the chapters (points 2, 20) | Not as a block; the chapter versions are quoted, the differences noted where they matter (`back` hint, `cont` gap) |
| Levels of evidence, development, objectives (p i–iii) | USPSTF 2001 levels; GRADE; search to 28 Feb 2015; EPOS 2012 as the main reference; target population >12 years | Population | Menu hint |
| Development group, review committee, external reviewers (p iv–vi) | Names | One DG member is a pharmacist at Hospital Kuala Lumpur (p iv); no ED physician is on either list | No |
| Algorithm 1, ARS for primary care and non-ORL centre (p vii) | Symptom entry box; duration split; common cold, mild, moderate, severe by VAS; treatment per severity; "Improvement within 3 days"; referral | The ED's main decision | Yes: `dx`, `dur`, `cold`, `mild`, `sev`, `mod`, `sevr`, `abx`, `back`, `cont`, `nimp`, `mildst`, `mildref` |
| Algorithm 2, CRS for primary care and non-ORL centre (p viii) | ≥2 symptoms for ≥12 weeks; topical steroids and nasal irrigation; re-evaluate after four weeks; refer if no improvement | A walk-in with months of symptoms | Yes: `crs`, `crsx` |
| Algorithm 3, indications of referral to ORL centre (p ix) | Early (within 2 weeks) and urgent (within 24 hours) referral, ARS and CRS | Core: the red flags | Yes: `rf`, `early`, `crs`, `urg`, `earlyx`; its differences from 6.1 and 6.2 in hints and gaps |
| Algorithm 4, ARS for ORL centre (p x) | What ORL does for moderate ARS after 14 days, severe ARS after 3 days, and complications | What happens after the ED refers | Yes: `urg`, `nimp` |
| Algorithm 5, CRS for ORL centre (p xi) | Nasal endoscopy, skin prick test, oral steroids, macrolides, CT, surgery | No | No |
| 1 to 3, introduction, epidemiology, risk factors (p1–2) | Definition of RS; prevalence; smoking, asthma, GERD, family history | Context | No (risk factors dropped from `crsx` for size) |
| 4.1 Clinical diagnosis, 4.1.1 acute vs chronic, Figure 1 (p3–4) | EPOS definition needing endoscopy or CT; ARS by duration; VAS severity; CRS by duration | Core | Yes: `dur`, `sev`, `notrs`, Diagnosis tab |
| 4.1.2 Viral vs bacterial (p4–5) | 0.5 - 2.0% bacterial; signs do not discriminate; the ABRS box | Core: the antibiotic decision | Yes: `abx`, `abxn`, Diagnosis tab |
| 4.2 Anterior rhinoscopy and nasal endoscopy, Figures 2 to 7 (p5–8), Recommendation 1 (p9) | Rhinoscopy in primary care; endoscopy at ORL centres | Examination | Yes: `dx` hint, Diagnosis tab. Figures not used |
| 4.3 Imaging, Recommendation 2 (p9) | No plain X-ray; CT and MRI indications | Do not X-ray; when CT | Yes: `dx` hint, `urg`, Diagnosis tab (Tests) |
| 4.4 Laboratory tests, Recommendation 3 (p9–11) | No nasal swab; culture at 72 hours non-response; EDMMC; bacteriology | Do not swab | Yes: `dx` hint, `back` hint, Diagnosis tab |
| 5 Differential diagnosis (p12) | Allergic rhinitis, rhinosinusitis, allergic fungal rhinosinusitis | Look-alikes | Yes: Diagnosis tab, as a table |
| 6.1 and 6.2 Referral, Figure 8 (p12–13) | Early (within one week) and urgent (within 24 hours) referral | Core | Yes: `rf`, `early`, `crs`, outcomes. Figure 8 is a patient photograph: not used |
| 7 Management, 7.1.1 Antibiotics, Tables 1 and 2 (p14–16), Recommendation 4 (p16) | Evidence; NSAR resistance 2010–2014; preferred antibiotics and doses | Core | Yes: `abxy`, `cont`, Drugs tab. The NSAR tables are left out (point 17) |
| 7.1.2 Corticosteroids, Recommendation 5 (p16–17) | INS in ARS and CRS; oral steroids not given in ARS locally | Core | Yes: outcomes, Drugs tab |
| 7.1.3 Saline irrigation, Recommendation 6, Figure 9 (p17–18) | Adjunct in RS | Yes | `mild`, Drugs tab. Figure 9 is a drawing |
| 7.1.4 Antihistamine, Recommendation 7 (p18) | Antihistamines when allergic rhinitis symptoms | Yes | `mod`, Drugs tab |
| 7.1.5 Other medications, Table 3 (p18–19) | Analgesics, decongestants (boxed caution), mucolytics, antivirals; relevance table | Yes | `cold`, Drugs tab; Table 3 named in the oral-steroid note |
| 7.2 Surgery, Recommendation 8 (p20) | FESS; surgery for complicated ARS | Indications for surgery in ARS | `urg`, `nimp` |
| 8 CAM, 9 Implementing (p21–22) | Insufficient evidence for CAM; audit indicators | No | No |
| References (p23–25) | 52 references | To name EPOS | `refs` |
| Appendix 1 and 2 (p26–27) | Search strategy; 24 clinical questions | No | No |
| Appendix 3, SNOT-22 (p28) | Symptom questionnaire, reproduced with permission | No (third-party; outpatient tool) | No |
| Appendix 4, Proper use of nasal spray (p29–30) | Priming, use, tips | Discharge advice | Yes: `advice` |
| Appendix 5, Medication dosage (p31–32) | Antibiotics, oral and intranasal steroids, from the MOH Medicines Formulary 3/2015 | Doses | Yes: Drugs tab and outcomes; fluoroquinolone rows named only |
| Abbreviations, acknowledgement, disclosure, funding (p33–34) | | No | No |

---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; those that change an ED decision are also in the node's `gap` or hint.

**Numbering and wording**

1. **The contents page misprints six page numbers** (PDF 5, checked on the image): References "19" (printed p23–25); Appendix 1 "23" (p26); Appendix 2 "26" (p27); Appendix 3 "27" (p28); Appendix 4 "28" (p29–30); Appendix 5 "27" (p31–32). The chapters and algorithms are listed correctly. Appendix 5 is titled "in RS" in the contents and "IN ARS" on its page, but it also gives CRS doses.
2. **Key recommendations against the chapters.** INS "should be considered for 2 - 3 weeks in acute rhinosinusitis" (key recommendations) against "14 - 21 days" (Recommendation 5, p17): the same span in other units. The culture recommendation gains "In otorhinolaryngology centres" (key recommendations) that Recommendation 3 (p11) does not have. The antibiotic key recommendation leaves out the drugs and doses that Recommendation 4 (p16) gives. The key recommendations leave out Recommendations 2 (imaging) and 7 (antihistamines).
3. **Printed slips, kept as printed in the draft:** "Recommendations 4" (p16) for Recommendation 4; "The preferred antibiotics is" (p16); "ophtalmoplegia" (p12, p ix); "otorhinolaringology" (key recommendations, p9); "Nasal polyphosis" (p32); "following the used of nasal sprays" and "clear the mucous" (p30); "symptoms rhinosinusitis" (p29); fever "(>38ºC)" with the ordinal sign º (U+00BA), not a degree sign (p5).

**Definition, duration and severity**

4. **Mild ARS sits under the common cold branch.** Algorithm 1 (p vii) draws "Common cold" and "Mild* ARS VAS = 0 to 3" side by side under "Symptoms <5 days or improving thereafter", with no rule to choose between them, while 4.1.1 (p3) says symptoms under five days are "acute viral RS or commonly known as common cold" and that ARS needs "worsening of symptoms after five days or symptoms persist after 10 days". The right-hand branch ("Symptoms increasing after 5 days or persistent after 10 days") has boxes only for moderate and severe ARS, so mild symptoms that increase after 5 days or persist after 10 days have no box. The draft offers both left-hand options and sends a VAS of 0 to 3 on the right-hand branch to the mild outcome, with the gap stated.
5. **Day 5 and days 5 to 10.** "<5 days" against "after 5 days" leaves day 5 itself unplaced, and symptoms of 5 to 10 days that neither improve nor increase fit neither branch (Algorithm 1; Figure 1, p4).
6. **Twelve weeks.** ARS "less than 12 weeks" (p3) and "<12 weeks" (boxed statement, p4); CRS "more than 12 weeks" (p3) but "≥12 weeks" (boxed statement, p4; Algorithm 2, p viii). Exactly 12 weeks is CRS by p4 and Algorithm 2, and neither by p3.
7. **The clinical definition needs tests the ED does not do.** 4.1 (p3) defines rhinosinusitis by symptoms AND endoscopic signs, CT changes or a past history of CRS; "Nasal endoscopy is not required in diagnosing ARS in primary care" (p6), and Algorithm 1 works from symptoms and anterior rhinoscopy. The p3–4 route for primary care (a past medical history is sufficient) is written for CRS. An ARS diagnosis made by Algorithm 1 therefore does not meet the full 4.1 definition.
8. **Two symptom wordings.** Algorithm 1: nasal obstruction or *purulent/greenish* nasal discharge, ± facial pain, *headache*, ± smell disturbance. 4.1 (p3): nasal blockage/obstruction/congestion or nasal discharge (anterior/posterior nasal drip), ± facial pain/pressure, ± reduction or loss of smell. The draft's checklist follows Algorithm 1 and quotes 4.1 in `notrs`.
9. **The VAS has no wording.** "Total severity visual analogue scale (VAS) score (0-10) cm" (p3); the CPG gives no question or anchors. The bands are closed and complete (mild = 0 - 3, moderate = >3 - 7, severe = >7 - 10): 3 is mild and 7 is moderate.

**Bacterial or viral, and the antibiotic**

10. **The ABRS criteria in three wordings.** Algorithm 1 footnote (p vii): at least 3 of purulent/greenish nasal discharge; severe local pain; fever; elevated ESR/CRP; "double sickening". Box (p5): at least three of discoloured discharge (with unilateral predominance) and purulent secretion in the nasal cavity; severe local pain (with unilateral predominance); fever (>38ºC); elevated ESR/CRP; deterioration of symptoms and signs. Figure 1 (p4, image): at least 3 of discoloured discharge; severe local pain; fever; elevated ESR/CRP; double sickening (becoming worse again after initial recovery). Only the box sets a fever threshold; only Figure 1 defines double sickening; none gives a cut-off for "elevated" ESR or CRP, or says whether to send them. The draft's checklist is the box; the other two are in its hint.
11. **Who gets an antibiotic.** Algorithm 1 considers one only in severe ARS (VAS >7 to 10) with at least 3 criteria; Recommendation 4 (p16) allows one "in acute bacterial rhinosinusitis" at any severity; Table 3 (p19) prints "Antibiotic: ARS Yes"; the quick reference says "Antibiotic should be considered in patients with severe ARS". Moderate ARS with three or more criteria is not settled (`mod` gap).
12. **The criteria are adopted against the evidence the CPG cites.** The common signs and symptoms "do not help to distinguish a bacterial from a viral infection" and >10 days was not associated with bacterial RS (p5), yet the DG and RC adapted the EPOS features "despite the lack of evidence" (p5).
13. **Course length, four versions.** Recommendation 4 (p16): five to seven days for amoxicillin and for amoxicillin/clavulanate. Appendix 5 (p31): amoxicillin 5 - 10 days; amoxicillin and clavulanic acid 5 - 7 days. Text (p15): three to seven days as efficacious as six to 10 days. Algorithm 1 (p vii): "Continue treatment 7 - 14 days" after improvement, without saying whether that includes the antibiotic or counts from the start (`abxy`, `cont` gaps).
14. **Dose forms.** Recommendation 4's amoxicillin 500 mg 8-hourly lies inside Appendix 5's 250 - 500 mg PO q8hr; Appendix 5 also offers 500 - 875 mg PO q12hr. Amoxicillin/clavulanate 625 mg 8-hourly (Recommendation 4) matches Appendix 5's 500/125 mg PO q8hr; Appendix 5 also offers 875/125 mg PO q12hr.
15. **Penicillin allergy.** No alternative is named. Appendix 5 lists "Penicillin allergy" as a special precaution for amoxicillin *and* for cefuroxime axetil, and "Allergy to beta-lactam antibiotics" for amoxicillin/clavulanate; the macrolides and the three fluoroquinolones ("(Use with caution)") are listed without a stated place (`abxy` gap).
16. **No renal or hepatic doses.** Appendix 5 lists renal and hepatic impairment as precautions but gives no adjusted dose.
17. **The resistance data are old.** Tables 1 and 2 (p15) give NSAR resistance for 2010–2014, and the preferred antibiotics rest on the National Antibiotics Guidelines, second edition 2014 (p15). Not in the draft.
18. **The quick reference (2017) differs from the CPG** (nothing in the draft is taken from it): clarithromycin "CRS: 250 mg PO q12hr" appears only in the quick reference; it drops the three fluoroquinolones and rewrites several special precautions (azithromycin: prolonged QT, myasthenia gravis, renal and hepatic impairment; amoxicillin without pregnancy and lactation); its summary table prints "Addition of oral corticosteroids to antibiotics: No" against Table 3's "Yes" for ARS and CRS, "Topical steroids: Yes, mainly in post-viral ARS" and "Analgesics: Yes, in viral and post-viral ARS"; its key message 7 says endoscopically-directed middle meatal culture "should be used" where Recommendation 3 says "may be used ... by otorhinolaryngologists".

**Steroids**

19. **Oral steroids in ARS, five positions.** Appendix 5 (p32): "Oral steroids (prednisolone): 30 mg daily for 7 days in ARS and 25 mg daily for 14 days in CRS". 7.1.2 (p17): effective in trials, but "In local practice, oral steroids are not given due to the possibility of exacerbation of bacterial infection". Recommendation 5 (p17): "Short-term oral corticosteroids should ONLY be given in chronic rhinosinusitis at Otorhinolaryngology centre". Table 3 (p19): addition of oral corticosteroids to antibiotics, ARS Yes and CRS Yes. Quick reference: No. The draft never recommends an oral steroid for ARS; the Appendix 5 dose sits in a Drugs tab note with the other four positions, and the `mod`, `abxy` and `abxn` gaps say that local practice does not give them in ARS.
20. **Topical steroid duration.** 14 - 21 days (Recommendation 5), 2 - 3 weeks (key recommendations) and Algorithm 1's "Continue treatment 7 - 14 days" after improvement.
21. **Which spray.** Algorithm 1 says "topical steroid" without a name. Only mometasone furoate has an acute rhinosinusitis dose in Appendix 5 (2 sprays in each nostril twice daily, total 400 mcg/day, p32), and "Higher doses of mometasone furoate led to better improvement of symptoms" (p16). Fluticasone propionate's indications include "Management of associated sinus pain and pressure", with its allergic rhinitis dose; budesonide has only rhinitis and nasal polyp doses.
22. **Appendix 5's age bands and units.** Budesonide "Adults and children 6 years and older", fluticasone "(≥12 years)" (≥ only on the image), mometasone "Adults and children over 12 years" (for allergic rhinitis), against the CPG's >12 years. Mometasone's allergic rhinitis line, "100 mcg/day (2 sprays) to each nostril once daily" with a "Maximum 200 mcg (4 sprays) once daily", does not say per nostril or in total (not in the draft).

**Referral**

23. **Early referral: one week or two.** 6.1 and 6.2 (p12–13): "within one week". Algorithm 3 (p ix) and the quick reference: "within 2 weeks" (`early` hint, `earlyx` and `mildref` gaps).
24. **The early referral lists differ.** ARS: Algorithm 3 adds "immunodeficiencies" as its own item and leaves out "anatomical defects causing obstruction"; 6.1 ties immunocompromise to persistent symptoms. CRS: Algorithm 3 adds "immunodeficiencies". The draft's checklists use the 6.1 and 6.2 lists and add "Immunodeficiencies (Algorithm 3)".
25. **The urgent lists differ in wording.** 6.1 "severe frontal/retro-orbital headache", "forehead swelling (subperiosteal abscess)", "neurological manifestations"; Algorithm 3 "severe frontal headache", "forehead swelling", "neurological manifestation". CRS: 6.2 "in particular immunocompromised patients"; Algorithm 3 "(lower threshold for immune-compromised patients ...)".
26. **Moderate ARS that does not improve: 3 days or 14.** Algorithm 1 (p vii) sends moderate and severe ARS to "Refer to specialist" when there is no "Improvement within 3 days"; Algorithm 4 (p x) receives "Moderate ARS with no improvement of symptoms after 14 days of treatment" (`nimp` gap). For mild ARS, Algorithm 1 gives "Consider referral to specialist" after 14 days, and Algorithm 4 has no box for it.
27. **Surgery timing.** Algorithm 4: "Consider surgery if medical therapy fails after 48 hours"; 7.2 (p20): "no clinical improvement after 24 - 48 hours of intravenous antibiotics", or an orbital or intracranial abscess on CT.
28. **The referral chapter is expert opinion.** "There is no specific criteria for referral based on current available evidence" (p12).
29. **Septicaemia and intracranial signs** are on the urgent referral list with "within 24 hours" (p12), but the CPG names no intravenous antibiotic, gives no sepsis or resuscitation steps, and does not say who orders the CT before referral (`urg` gap).
30. **The ED's place.** The algorithms split "Primary Care and Non-ORL Centre" from "ORL Centre"; an ED inside a hospital with an ORL department (HKL) is neither, so the CPG does not say whether the Green Zone follows Algorithm 1 to the end or refers to its own ORL team at once.

**Tests**

31. **Culture.** Recommendation 3 (p11): culture "may be considered" after 72 hours without response to antibiotics; p10: after failure of first- and second-line antibiotics, sinus or meatal culture "is recommended"; the key recommendations place it in ORL centres.
32. **CT indications, two lists.** Recommendation 2 (p9): medical therapy fails; surgery is planned; complications are suspected. Text (p9): failed medical therapy; planned for surgery; atypical or severe disease, i.e. unilateral symptoms, blood-stained discharge, displacement of the eye and severe pain. Recommendation 2 leaves out atypical or severe disease.

**Symptom relief and advice**

33. **Saline irrigation** "should be used" (Recommendation 6, p17) and "is recommended to be used in ARS" (p17), but the CPG gives no recipe, volume, frequency or device; Figure 9 (p18) is a drawing of a child, outside the >12 population.
34. **No doses for symptom relief.** Analgesics: paracetamol or NSAIDs, "based on the severity of pain" (p18); decongestants: topical not beyond two weeks, oral with caution (boxed statement, p19), "In local context, decongestants is prescribed in ARS" (p19); no drug or dose for either.
35. **Antihistamines.** Recommendation 7 (p18) lists sneezing, nasal itchiness, nasal obstruction and rhinorrhoea as symptoms suggestive of allergic rhinitis, but nasal obstruction is also a rhinosinusitis symptom (chapter 5, p12, prints + for both); no antihistamine is named or dosed.
36. **Return advice.** None, beyond Appendix 4: "If you experience any nosebleed following the used of nasal sprays, stop using the nasal spray and seek medical attention" (p30). The 3-day review in Algorithm 1 has no place or instruction to the patient (`mod` gap).
37. **Appendix 4's cross-references.** Steps refer to Pictures A to E and "Repeat step 4 in the other nostril" (p30). The `advice` list drops the picture callouts and the step numbers (the app numbers the list itself) and reads "Repeat in the other nostril"; every other line is as printed.

---

## (c) The app's related entries against this CPG

There is no ebook pathway on rhinosinusitis, so no ebook content conflicts with this CPG (rule 5 is untouched). The related entries are department rules and the ebook's pain chapter. Nothing below is resolved; each line is an open question for Krishna.

| App entry (source) | What it says | What the CPG says (page) | Open question |
|---|---|---|---|
| `referral-rules`, node `dept` (interdepartment referral reminder, 17 May 2022) | "Dependent patients should not be sent to the ENT or Eye clinic for review" | Early referral to an ORL centre within one week (6.1, 6.2, p12–13) or within 2 weeks (Algorithm 3, p ix); urgent within 24 hours (p12) | How does the Green Zone refer a patient to ORL: on-call team for the urgent list, clinic for early referral? Which time does HKL use for early referral? What counts as "dependent" here? The draft links `urg`, `nimp` and `earlyx` to this node and quotes the reminder in a gap, labelled as the department's |
| `outpatient-referral` (FAST clinic criteria, draft, Aug 2023) | MAU FAST, Physician's Clinic, specialty clinic or KK; no ENT or ORL row | Algorithms 1 and 2 are written for primary care: review at 3 days (ARS) and re-evaluation after four weeks (CRS) | Where does a Green Zone patient have Algorithm 1's 3-day review and Algorithm 2's four-week re-evaluation: KK, GP, a return to the ED? The draft adds a link-only see-also from this entry to `#sinusitis-cpg--early` |
| `emacc` (EMACC SOP, 1 Feb 2018) | Adults 18 and over; a fixed list of case types, none of them sinusitis | No venue for the 3-day review | Is EMACC ever used for a severe ARS review? (Not linked in the draft) |
| `children`, node `pat` (PAT triage form, 9 Sep 2019) | Where to triage a child: ETD or PEDWCH; the app's text gives no upper age | The CPG covers patients aged >12 years (p iii) | Is a 13 to 17-year-old with sinusitis seen in the Green Zone or at PEDWCH? The draft links `#children--pat` in `see` |
| `pain` (ebook p45–50) and the analgesia calculator | MOH analgesic ladder and doses; pain score bands mild 1–3, moderate 4–6, severe 7–10 | Analgesics like paracetamol or NSAIDs, chosen by severity of pain, no doses (p18) | No conflict: the CPG has no doses, so the draft links `#pain` from `cold`, `mild`, `mod` and `abxn`. Caution for the MO: the CPG's VAS (mild 0 - 3, moderate >3 - 7, severe >7 - 10) is a total symptom score that decides the treatment, not the ebook's pain score, and its bands differ. The calculator link must go in `CALC_SEE` in `engine.js` (`'sinusitis-cpg':[['#calc-analgesia', 'Analgesia by weight']]`): a `#calc-analgesia` link inside the data fails `okHref` in `check-data.js` |
| `gz-rules`, node `ivab` (IV antibiotic memo, 30 Jun 2026) | IV antibiotics on a chair in the CCA when no bed: Augmentin, cefuroxime, ceftriaxone or Unasyn only | Intravenous antibiotics for severe ARS not improving within 3 days and for complications, at the ORL centre (Algorithm 4); no drug named | If ORL asks the ED to start IV antibiotics while a bed is found, does this rule apply? Not linked in the draft, so the CPG entry does not appear to name a drug |
| `asthma`, `asthma-cpg`, `anaphylaxis` | Asthma and allergy | Asthma is a risk factor for CRS (OR 3.47, p2) and a predisposing factor to consider at the ORL centre (Algorithm 5, p xi); allergic rhinitis is the main look-alike (p12) and antihistamines Recommendation 7 | Nothing actionable in the ED; no see-also proposed |

Reverse links in the draft (link only, wording unchanged, rule 6): `P['referral-rules'].see` and `P['outpatient-referral'].see` gain `#sinusitis-cpg--early`.

---

## (d) Calculator candidates

**Recommendation: build none.** The doses are fixed (no weight), and the two decisions with numbers are already checklists in the stepper: the severity band by VAS (`sev`) and at least three of the five ABRS criteria (`abx`, a score checklist that suggests the answer). A separate calculator would add a screen without adding a decision. The 33 phrases a future check would read are in the calculator facts, each confirmed with `JSON.stringify(P['sinusitis-cpg']).includes(s)`.

### 1. Severity and antibiotic check (not worth building now)

| Input | Values |
|---|---|
| Symptom course | <5 days or improving; increasing after 5 days or persistent after 10 days; ≥12 weeks |
| VAS (0 to 10) | number |
| ABRS criteria (box, p5) | five ticks |

| Output | Source text (page) |
|---|---|
| Common cold | "If the duration of symptoms is less than five days, it is diagnosed as acute viral RS or commonly known as common cold" (p3) |
| Mild, moderate, severe | "mild = 0 - 3; moderate = >3 - 7; severe = >7 - 10" (p3); "Moderate* ARS VAS >3 to 7", "Severe* ARS VAS >7 to 10" (p vii) |
| Moderate: symptomatic relief + topical steroid | Algorithm 1 (p vii) |
| Severe with ≥3 criteria: consider amoxicillin 500 mg 8-hourly or amoxicillin/clavulanate 625 mg 8-hourly for five to seven days | Algorithm 1; box (p5); Recommendation 4 (p16) |
| Topical steroid: mometasone 2 sprays in each nostril twice daily (total 400 mcg/day), 14 - 21 days | Appendix 5 (p32); Recommendation 5 (p17) |

Where it must decline or show a note instead of choosing:

- Mild VAS with symptoms increasing after 5 days or persisting after 10 days (no box, point 4); day 5 exactly, and days 5 to 10 without change (point 5); exactly 12 weeks (point 6).
- Moderate ARS with three or more criteria (point 11).
- Penicillin allergy (point 15); renal impairment (point 16).
- ESR or CRP not sent: the criterion cannot be counted, and the CPG gives no cut-off for "elevated" (point 10).
- Course length: show five to seven days (Recommendation 4) beside Appendix 5's 5 - 10 days for amoxicillin (point 13).
- Never output an oral steroid for ARS (point 19).

### 2. Referral timer (not worth building)

Urgent: within 24 hours; early: within one week (6.1, 6.2) or within 2 weeks (Algorithm 3). One line each, already in `rf`, `early` and `earlyx`, and the CPG's two early times would leave it unable to give one date (point 23).

### 3. Not worth building

- A course-end or review date: Algorithm 1 does not say what day 0 is for "7 - 14 days" or the 3-day review (points 13, 20).
- SNOT-22 (Appendix 3, p28): an outpatient questionnaire, reproduced in the CPG with Washington University's permission; not for the ED.

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (scripted search over all 51 pages, whitespace and bullet glyphs normalised, then read in context). "Image" = read from a rendered page image at the dpi shown, because the page has no text layer there or the text layer drops a sign. Each row is one distinct figure or group of figures. A script (`checknums.js`) found 115 distinct number phrases in the draft's JSON: 113 occur in the text layer; of the two that do not, "≥12 years" is row 23 (image) and "2022" is the date of the department note in `earlyx` (row 42), which comes from the app, not the CPG.

| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | 2016 (issue), 2020 (review) | title, src, lead, menu hint, refs | PDF 2 (unnumbered) | Text |
| 2 | >12 years old; "over 12" | header comment, menu hint, lead | p iii | Text |
| 3 | ISBN 978-967-0769-63-9 | refs | PDF 2 | Text |
| 4 | ≥2 symptoms | `dx` | p vii | Text; arrows read on the image, 200 dpi |
| 5 | <5 days; after 5 days; after 10 days | `dur`, `cold`, `mild`, `mildst`, `back`, facts | p vii | Text; image 200 dpi |
| 6 | less than five days; after 10 days; less than 12 weeks | `dur` hint, facts | p3 | Text |
| 7 | VAS = 0 to 3; >3 to 7; >7 to 10 | `dur`, `sev`, facts | p vii | Text |
| 8 | (0-10) cm; mild = 0 - 3; moderate = >3 - 7; severe = >7 - 10 | `sev` hint, facts | p3 | Text |
| 9 | Improvement within 3 days; continue treatment 7 - 14 days | `mod`, `abxy`, `abxn`, `back`, `cont`, facts | p vii | Text; image 200 dpi (which boxes feed the diamond) |
| 10 | No improvement after 10 days or worsening after 5 days; after 14 days treatment | `mild`, `back`, `mildst`, `mildref`, facts | p vii | Text; image 200 dpi |
| 11 | At least 3 of (Algorithm 1 footnote) | `sevr`, `abx` hint, `abxn`, facts | p vii | Text |
| 12 | At least three symptoms/signs; fever (>38ºC) | `abx`, facts | p5 | Text (º is U+00BA) |
| 13 | At least 3 of; double sickening defined (Figure 1) | `abx` hint | p4 | Image, 200 dpi (no text layer in the figure) |
| 14 | 0.5 - 2.0% | `abxn` | p4 | Text |
| 15 | >10 days (not associated with bacterial RS) | Diagnosis tab | p5 | Text |
| 16 | Amoxicillin 500 mg 8-hourly; amoxicillin/clavulanate 625 mg 8-hourly; five to seven days | `abxy`, `cont`, facts | p16 | Text |
| 17 | 2009; 34%; 7 to 15 days; RR=0.66, 95% CI 0.44 to 0.98; 80% | `abxy` | p14 | Text |
| 18 | OR=2.10, 95% CI 1.60 to 2.77; NNH=9 | `abxy` | p14 | Text |
| 19 | Appendix 5 antibiotics: 250 - 500 mg PO q8hr x 5 - 10 days; 500 - 875 mg PO q12hr x 5 - 10 days; 500/125 mg PO q8hr x 5 - 7 days; 875/125 mg PO q12hr x 5 - 7 days; cefuroxime axetil 250 - 500 mg PO q12hr x 5 - 10 days; azithromycin 500 mg PO q24hr x 3 days; clarithromycin 250 - 500 mg PO q12hr x 7 - 14 days; bradycardia (<50 bpm) | `abxy` gap, Drugs tab | p31 | Text; image upright, 300 dpi (row order and bullets) |
| 20 | Medicines Formulary - 3/2015 | Drugs tab sources, refs | p32 | Text |
| 21 | 72 hours | `back` hint, Diagnosis tab, facts | p11; key recommendations | Text |
| 22 | 14 - 21 days; 16 - 52 weeks | `mod`, `sevr`, `cont`, `mildst`, `crsx`, facts | p17 | Text |
| 23 | Fluticasone 50 mcg/dose; (≥12 years); 2 sprays in each nostril once daily; maximum daily dose 4 sprays in each nostril | Drugs tab | p32 | Image, upright 300 dpi: the text layer prints "( 12 years)" |
| 24 | Mometasone 50 mcg/dose; 2 sprays in each nostril twice daily (total 400 mcg/day) | `mod`, `sevr`, `mildst`, Drugs tab, facts | p32 | Text; image upright 300 dpi |
| 25 | Budesonide 64 mcg/dose; 6 years and older; 2 sprays once daily or 1 spray twice daily; nasal polyps 2 sprays twice daily | Drugs tab | p32 | Text; image upright 300 dpi |
| 26 | Prednisolone 30 mg daily for 7 days (ARS); 25 mg daily for 14 days (CRS) | `mod`, `abxy` and `abxn` gaps, Drugs tab, facts | p32 | Text; image upright 300 dpi |
| 27 | 30 mg/day for seven days; up to 12 days | Drugs tab | p17 | Text |
| 28 | 2 - 3 weeks (INS) | `cont` gap | key recommendations (PDF 3) | Text; image 200 dpi |
| 29 | Within 24 hours (urgent) | `rf`, `urg`, facts | p12, p13, p ix | Text; image 200 dpi |
| 30 | Within one week (early) | `early`, `earlyx`, `mildref`, `crs`, facts | p12, p13 | Text |
| 31 | Within 2 weeks (early, Algorithm 3) | `early`, `earlyx`, `mildref`, facts | p ix | Text; image 200 dpi |
| 32 | ≥4 episodes per year | `early`, facts | p12 (Algorithm 3: "≥4 per year") | Text |
| 33 | >3 sinus infections/year | `crs`, facts | p13, p ix | Text |
| 34 | After 48 hours (Algorithm 4); 24 - 48 hours of intravenous antibiotics | `urg`, `nimp` | p x; p20 | Text; image 200 dpi |
| 35 | Within 3 days; after 14 days of treatment (Algorithm 4) | `nimp` | p x | Text; image 200 dpi |
| 36 | ≥12 weeks; more than 12 weeks | `dur`, `crs`, `crsx` gap, facts | p viii, p4; p3 | Text; image 200 dpi |
| 37 | Re-evaluation after four weeks | `crsx` | p viii | Text; image 200 dpi |
| 38 | Two weeks (topical decongestants) | `cold`, Drugs tab, facts | p19 | Text |
| 39 | 3 - 5 times; 1 - 2 weeks; ¼ or ½ inch | `advice` | p29, p30 | Text; image 200 dpi |
| 40 | EPOS 2012; Rhinology 2012;50(1):1-12 | refs | p vii, p3, p19, p23 | Text |
| 41 | Section, figure and recommendation numbers and every page cite | throughout | footers | Checked against each page footer (offset above) |
| 42 | 17 May 2022 (department note: dependent patients not to the ENT or Eye clinic) | `earlyx` gap | the app's `referral-rules` node `dept` (data.js), not the CPG | Copied from the app's own source line |


---

## What could not be verified

- **Corrections.** The CPG says errors are corrected in its web version (PDF 2). The copy read is the Academy of Medicine file (PDF created 2 Mar 2017); it was not compared with the MaHTAS or MOH website version.
- **Figure 1** (p4) is an image: its box was read at 200 dpi; small print ("* : becoming worse again after initial recovery") is clear at that size.
- **The EPOS 2012 originals** behind Algorithms 1, 2 and 4 and the ABRS box were not available, so whether "Mild ARS" under the common cold branch (point 4) is the CPG's own change cannot be said.
- **Who reviews at 3 days**, how HKL routes urgent and early ORL referrals, the age at which PAT triage stops, and whether the department's IV antibiotic rule applies to rhinosinusitis: these need the department, not the CPG.
- **Formulary:** whether HKL's ED stocks mometasone, fluticasone or budesonide nasal spray (which decides the dose the MO uses) is not in any source read.

---
