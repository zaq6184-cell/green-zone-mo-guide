# Review: CPG Management of Avulsed Permanent Anterior Teeth, 3rd edition (Oral Health Programme, MOH, December 2019)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *Knocked-out permanent front tooth: CPG 2019* (`#avulsed-tooth-cpg`) in the new Injuries and teeth group, with Storage, Time, Replanting and Follow-up tabs. Its reference tabs acknowledge the Oral Health Programme, the CPG's copyright holder. No calculator was built.

For the Green Zone MO Guide, entry `avulsed-tooth-cpg`. Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Avulsed Permanent Anterior Teeth*, 3rd edition. Published by the Oral Health Technology Section, Oral Health Programme, Ministry of Health Malaysia, Putrajaya. Issued December 2019, "will be reviewed in 2024 or earlier" (PDF page 3), so it is now overdue. ISBN 978-967-16632-5-7; MOH/P/PAK/435.19(GU)-e. It updates and supplants the 2010 edition, *Management of Avulsed Permanent Anterior Teeth in Children* (November 2010) (PDF page 3; p i). File read: `...\AMM Clinical Practice Guidelines\Dental & Oral Health\2019 - Management of Avulsed Permanent Anterior Teeth (3rd Edition) [429].pdf`, 60 PDF pages, not modified. "3rd edition" and "December 2019" are printed only on the cover, which is an image.
- **Copyright (PDF page 3):** "The copyright owner of this publication is Oral Health Programme (OHP), Ministry of Health Malaysia. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to OHP is included and the content is not changed, not sold, nor used to promote or endorse any product or service and not used inappropriately or misleading context." So the acknowledgement names **OHP, not MaHTAS**. The draft's `refs` carry it. The app's reference-tab footer (`tabsOf` in `engine.js`) hard-codes "Reproduced with acknowledgement to MaHTAS"; the draft adds a field `ack` for it (see "For the integrator" at the end).
- **Page offset:** printed arabic page = PDF page − 17 (p1 = PDF 18; p39 = PDF 56). Front matter in roman = PDF page − 5 (p i = PDF 6; the three algorithms, p viii to x = PDF 13 to 15; key messages p xi = PDF 16; recommendations p xii = PDF 17). PDF 1 is the cover, PDF 2 and 57 to 59 are blank, PDF 3 is the publisher, copyright, statement of intent and review page, PDF 4 to 5 the contents, PDF 60 the back cover. Every page cited below and in the draft is the printed page; the copyright page has no printed number and is cited as PDF page 3.
- **Method:** text from PyMuPDF's text layer (it keeps <, >, ±, ° and the en dashes). Every printed page has a text layer. The algorithms (p viii to x), Tables 1 and 2 (p9), Table 3 (p11 to 12), Appendix 3 (p34), Appendix 4 (p35) and Appendix 6 (p38) keep their words but lose their layout in the text layer, so each was also read from page images rendered at 150 dpi; Appendix 3's accessibility column was read at 400 dpi and checked against the text spans' coordinates. PDF 28 (p11) is a page that was replaced in the file (its size is 421 × 596 points against 421 × 595, it carries Figure 4 as an embedded image, and its text layer is out of order): Table 3 was read from the image only. pdftotext was not used. A script then searched every quoted fragment of 18 characters or more in the draft against the text layer (411 fragments); every fragment that was meant as a quote was found, except those noted in (e).
- **Scope (p iii to iv):** "These guidelines are applicable to all patients with avulsed permanent anterior teeth." Inclusion: "Patients with traumatically avulsed permanent anterior teeth". Exclusion: "Patients with avulsed permanent anterior teeth associated with comminuted alveolar fractures" and "Patients with avulsed permanent anterior teeth due to other causes than trauma such as periodontal disease and pathology". Users include **medical officers** and **Accident and Emergency Physicians** (p iv). Settings: "Outpatient and inpatient settings in all healthcare facilities" and the site of incidents (p iv). The 3rd edition widened the scope from children to all avulsed permanent anterior teeth (p i).
- **What the CPG does not have:** no quick reference, no leaflet, no Bahasa Melayu text; nothing on **primary (milk) teeth**; **no tetanus** recommendation; **no drug doses** at all; no triage level; no named referral team beyond "nearest dental clinic or hospital".
- **Size:** `JSON.stringify(P['avulsed-tooth-cpg']).length` = 30,594. Left out by scope (dental clinic work, not an ED decision): 4.4 v (the delayed replantation technique), the box-by-box clinic algorithm branches (Table 3 carries the same time branches; their one difference is point 12), 5.4 to 5.7 (root canal treatment, intracanal medicaments, obturation materials, root surface contamination and treatment, splint types), Recommendations 3 and 5, chapter 7 (management of complications), Appendix 5 and the 6.2 narrative. Nothing the ED needs was cut.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the ED | In the draft? |
|---|---|---|---|
| Cover, publisher, copyright, statement of intent, review (PDF 1, 3) | 3rd edition, December 2019; review due 2024; supplants the 2010 guidelines; copyright to OHP | Dates, copyright | Menu hint, `refs` |
| Levels of evidence, guidelines development (p i to ii) | USPSTF 2001 levels; GRADE; development group of paediatric dental, dental public health and restorative specialists, dental officers and a dental therapist; search to June 2019; eight clinical questions | The widened scope (all patients, not only children) | `lead` ("in children and adults") |
| Objectives, clinical questions, target population, users, settings (p iii to iv) | Inclusion and exclusion; users include MOs and A&E physicians | Scope | Menu hint, `excl` |
| Development group, reviewers (p v to vii) | Names and posts | Two members work at Jabatan Pergigian Pediatrik, Hospital Wanita dan Kanak-Kanak, Kuala Lumpur (p v); an Emergency Physician (Hospital Tuanku Jaafar) was an internal reviewer (p vi): see (c) | No (names not needed) |
| Algorithm at the site of incident (p viii) | Contraindication? → replantation into socket possible? → prepare → replant → nearest dental clinic or hospital; or storage medium / clean plastic bag → nearest dental clinic or hospital. Footnotes: contraindications, preparing the tooth, during replantation | The ED's own decision, and what to tell a caller | Yes: `ci`, `poss`, `prep`, `replant`, `store`, `noreplant`, `phone` |
| Algorithms at the dental clinic, immature root (p ix) and mature root (p x) | Branches by extra-alveolar time; normal saline, or 1% sodium hypochlorite and extra-oral pulp treatment; footnote: verify position with radiograph, splint for at least 7 days, prescribe antibiotic, analgesic and mouthwash; complications → Dental Specialist | What happens after referral; why the times matter | `late` (the >60 minute boxes), `replant`, `pre`, `abxn`, Replanting tab (footnote and follow-up boxes) |
| Key messages (p xi), recommendations (p xii) | Repeated from the chapters | | Quoted from the chapters |
| 1 Introduction (p1 to 2), Figures 1 to 3 | Definition; prevalence (children 68%); causes; in a local study more than 80% of cases were referred to the Paediatric Dental Specialist from the A&E department; avulsion among the common outcomes of domestic violence | Definition; domestic violence | `excl`, Time tab ("What to record"), OSCC see-also links |
| 2 Emergency management at site of incidents (p2 to 4), Recommendation 1 (p4) | Replant within 15 minutes; six steps for patients, parents, teachers, paramedics and bystanders; storage order; plastic bag; buccal sulcus not recommended | Core | `menu`, `phone`, `prep`, `replant`, `store`, Storage tab |
| 3 Contraindications for replantation (p4), Recommendation 2 (p5) | Absolute contraindications; case-by-case reasons | Core | `ci`, `poss`, `noreplant` |
| 4.1 to 4.3 Consent, pre-operative assessment, imaging; Key Message 1 (p5 to 6) | Consent above 18 years or parent; five assessments; intraoral periapical radiograph; CBCT for complex trauma | What to record and hand over | `pre`, Time tab, Replanting tab |
| 4.4 Replantation technique (p6 to 7) | i to iii for all; iv immediate or early (<15 minutes dry or <60 minutes in medium); v delayed (>60 minutes) | The professional technique, if an MO replants; the time categories | `eat` (categories), `prep` (i to iii), Replanting tab (i to iv); v left out |
| 4.5 Splinting (p7) | At least 7 days; at least 4 weeks with an alveolar bone fracture | What to tell the patient | `fu`, Replanting tab |
| 4.6 Post-operative care (p7) | Systemic antibiotics (see 5.8); oral analgesics named; 0.12% chlorhexidine; home care advice | Prescription and advice | `abxy`, `abxn`, `fu`, `advice` |
| 5 Prognostic factors (p7 to 8), 5.1 Extra-alveolar time (p8) | Factors that do and may not affect prognosis; dry time <15 minutes, total <60 minutes; dry time is the best predictor | Why time matters; what to record | `eat`, Time tab, `abxn` |
| 5.2 Storage medium, Tables 1 and 2 (p8 to 10), Key Message 2 (p10) | Preparation of each medium; temperature; efficacy against accessibility | Core | `store`, Storage tab |
| 5.3 Tooth maturity (p10) | Immature against mature; apex closed or nearly closed (<1mm) | Prognosis | Time tab (Table 3 source line) |
| 5.4 Root canal treatment, Table 3 and Recommendation 3 (p10 to 13) | Prognosis good, guarded or poor by maturity and time; timing of pulp extirpation; intracanal medicaments; obturation | Table 3's prognosis, to tell the patient; the delayed tooth | `late`, Time tab (Table 3). Recommendation 3 and 5.4.2 to 5.4.3 left out (dental) |
| 5.5 Contamination of root surface (p13 to 14) | Washing; sodium hypochlorite on delayed teeth | Dental | No |
| 5.6 Type and duration of splinting (p14) | Splint types; at least 7 days locally | Dental | No (4.5 carries the ED-relevant line) |
| 5.7 Root surface treatment (p15) | No recommendation | No | No |
| 5.8 Systemic antibiotics (p15) | Four conditions; penicillin-based antibiotics if indicated, per the National Antibiotic Guidelines 2017 | Core | `abx`, `abxy`, `abxn` |
| 6 Follow-up and monitoring, 6.1 intervals, Key Message 3, Recommendation 4 (p15 to 16) | Reviews from 1 week to 5 years; sensibility tests and radiographs after the first month | What to tell the patient | `fu`, `advice`, Follow-up tab |
| 6.2 Complications (p17 to 18) | Pulpal necrosis; inflammatory and replacement root resorption; tooth loss; survival 70 – 83% | Recognising a returning patient | Follow-up tab (Appendix 6 and the text's timings), Time tab (survival) |
| 7 Management of complications (p18 to 22), Recommendation 5 (p20) | Pulp treatment, autotransplantation, decoronation, ridge preservation, interim prostheses | No (dental, long term) | No |
| 8 Implementing the guidelines (p22 to 24) | Facilitators, barriers; audit indicator: retention rate of replanted teeth over 2 years | No | No |
| References (p25 to 31) | 79 references | To name the sources quoted | `refs` (National Antibiotic Guidelines 2017; IADT 2012) |
| Appendices 1 and 2 (p32 to 33) | Search strategy; eight clinical questions | No | No |
| Appendix 3 (p34) | Characteristics, efficacy and accessibility of 15 storage media | The fullest storage lookup | Storage tab, whole table |
| Appendix 4 (p35 to 36) | Dental trauma data collection form | The four avulsion items, the medical history (including immunization) and the management already given (including a tetanus injection) | Time tab ("What to record"); identity fields not reproduced (rule 4) |
| Appendix 5 (p37) | Review parameters | Dental | No |
| Appendix 6 (p38) | Complications, timing, clinical and radiographic findings | Recognising a returning patient | Follow-up tab, whole table |
| Acknowledgements, disclosure, funding (p39) | | No | No |

---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; the ones that change an ED decision are also in a node's `gap` or hint.

**Contraindications and scope**

1. **Three wordings of the contraindication.** The site algorithm (p viii): "Do not replant if the person suffers: Other concomitant injury to the surrounding areas, the head or other part of the body; Medical problem". Chapter 3 (p4), "absolutely contraindicated": "Where other injuries are more severe and warrant preferential emergency treatment and / or intensive care (such as severe head injury or poly-trauma)" and "Patients with compromised medical history that would be put at risks by replantation of a tooth (such as immunodeficiency, congenital cardiac defects and bleeding dyscrasia)". Recommendation 2 (p5): "severe concomitant injuries or are severely medically compromised". Read literally, the algorithm stops replantation for any injury nearby (a cut lip) and any medical problem; the text needs the other injuries to be more severe. The draft's checklist (`ci`) uses chapter 3 and shows the algorithm's wording in the hint.
2. **No storage on the contraindication branch.** The algorithm's "Yes" to a contraindication goes straight to "Go to nearest dental clinic or hospital as soon as possible" (p viii), with no storage step; p3 stores any tooth that cannot be replanted "for any reason". The draft quotes p3 in `noreplant`.
3. **Alveolar fracture, three places.** The exclusion criteria (p iv) leave out teeth "associated with comminuted alveolar fractures"; chapter 3 (p4) lists "The alveolar socket has major comminutions or fractures" as a case-by-case reason; 4.5 (p7) extends splinting to at least 4 weeks "if there is a concomitant alveolar bone fracture".
4. **Medical problems.** For a compromised medical history the text says "it is prudent to discuss the treatment options with the medical physician in charge" (p4); the site algorithm, for lay people, simply says do not replant.
5. **Primary teeth, and telling them apart.** Not mentioned anywhere. The CPG gives no age or sign to tell a primary from a permanent tooth. It also says nothing on a tooth that cannot be found; its only mention of swallowing or aspiration is the warning against the buccal sulcus (p4).
6. **Informed consent** is from "patients (above 18 years old) / parents/ caretaker/ guardians" (p5): a patient of exactly 18 is in neither group.

**Time**

7. **A gap between the two categories.** 4.4 (p6) defines "immediate or early replantation (<15 minutes extra-alveolar dry time or <60 minutes stored in recommended storage medium)" and "delayed replantation (>60 minutes extra-alveolar dry time or stored in recommended storage medium)". A tooth dry for 15 to 60 minutes is in neither. The clinic algorithms place it: immature root ">15 min EAT" (p ix), mature root "<60 min EAT or in SM" (p x). The draft's middle option is labelled as coming from the algorithms.
8. **Exactly 15 and exactly 60 minutes** fall in no category (every threshold is < or >). Said in the `eat` hint.
9. **Kept in a good medium for more than 60 minutes.** 4.4 v (p6) and the immature root algorithm (">60 min EAT or SM", p ix) call it delayed (sodium hypochlorite, extra-oral pulp treatment before replanting); p12 asks for early pulp extirpation before replantation only for a tooth "stored dry, or in unsuitable storage medium for more than 60 minutes"; the mature root algorithm's question "<60 min EAT or in SM" (p x) sends any tooth "in SM" down the Yes branch; and Table 3 (p11) puts "in storage medium" in both the <60 and the >60 mature columns. In `late`'s gap.
10. **"EAT" is not "dry time".** The algorithms' legend defines EAT as "extra-alveolar time" (p ix to x); the text separates "extra-alveolar dry time" from "total extra-alveolar time (dry time and time in storage medium)" (5.1, p8). The algorithm's "<15 min EAT" matches the text's "<15 minutes extra-alveolar dry time".
11. **Overlapping boxes.** In the immature root algorithm (p ix), the "No" arrow splits into ">15 min EAT" and ">60 min EAT or SM": a tooth dry for 90 minutes fits both.
12. **Immature root, dry >15 minutes: two treatments.** The algorithm (p ix): replant, then "Immediate IO pulp extirpation and obturation". Table 3 (p12): "Early pulp extirpation intra-orally between 7 to14 days", in line with Recommendation 3 ("within 7 to 14 days" for a guarded prognosis, p12). Shown in the Replanting tab's source line.
13. **No time limit at the scene.** The site algorithm (p viii) replants whenever "Replantation into socket is possible", at any time; the clinic algorithms and p12 treat a tooth out for more than 60 minutes **before** replanting it. The CPG does not say what a non-dental clinician should do with such a tooth. This is the main open point for the ED (`late`).
14. **Mature root is never "good".** Table 3 (p11) gives a mature root a guarded prognosis even within 60 minutes, while p3 says replantation within 15 minutes "gives a favourable long-term prognosis". Not a contradiction (different measures), but worth knowing before telling a patient.
15. **Pulp extirpation timing, three versions (dental):** "day 1 or day 2" better than "day 3 - 14" (p11); "within 14 days compared with after 14 days" (p10); "within 7 to 14 days" (Recommendation 3, p12; mature root algorithm "7-14 days", p x).

**Storage**

16. **The "most recommended" order against the efficacy ratings.** p3: "Tooth socket; Fresh milk; Normal saline; Patient's saliva", then "Other storage medium such as coconut water, propolis and green tea can also be considered". Table 2 (p9) rates normal saline and saliva **poor**, coconut water and egg **good**, propolis and green tea **excellent**; Appendix 3 (p34) rates saliva **very poor**. The order seems to weigh accessibility, but the CPG does not say so. In `store`'s gap.
17. **Table 2 against Appendix 3.** Accessibility of milk: "++" (Table 2) against "+" (Appendix 3); normal saline: "++" against "+"; propolis and green tea: "-" (less available) against "--" (Appendix 3's legend has "- - least available", printed with a space for HBSS, Viaspan, Euro-Collins and MEM). Saliva's efficacy: "Poor" (Table 2) against "Very poor" (Appendix 3). Shown in the Appendix 3 source line.
18. **Plastic bag.** The algorithm offers it in the same box as the media ("Place in suitable storage medium (fresh milk/saline/ patient's saliva) or place in a clean plastic bag", p viii); p4 and p9 only "In the event that the above media are unavailable".
19. **Buccal sulcus.** The same passage offers and discourages it: "The tooth may also be placed in the buccal sulcus ... However, this is not recommended for fear of accidental swallowing or aspiration, especially in a young child" (p4).
20. **"Fresh milk"** (p3, p viii) against Table 1's "Pasteurized fresh or UHT milk, cold, low-fat, non-flavoured. NOT condensed or powdered milk" (p9). Table 1's footnote "Do not use hot water or milk to store the tooth" reads as hot water or hot milk; the draft quotes the whole footnote so it cannot be read as "no milk".
21. **Water.** A 10-second rinse with "normal saline or tap water" is allowed (p3, p viii); as a storage medium water is "Very poor" (Appendix 3). Consistent, but only Appendix 3 says it.

**Where to go**

22. **Three destinations.** Step vi: "Go to the nearest dental clinic as soon as possible" (p3); the algorithm: "nearest dental clinic or hospital" (p viii); p3 and p8: "nearest dental clinic or hospital emergency service". No time beyond "as soon as possible", and no team is named. In `replant`, `store` and `phone`.

**Treatment**

23. **Antibiotics, three positions.** The clinic algorithms (p ix to x): "Prescribe antibiotic, analgesic and mouthwash" for every replanted tooth; 4.6 (p7): these "can be carried out"; 5.8 (p15): "may be indicated in the following conditions" (four); chapter 5 (p8) lists systemic antibiotics among the factors that "may not affect the prognosis". The draft makes 5.8 the checklist (`abx`) and shows the others.
24. **No doses anywhere.** 5.8 names "penicillin V or ampicillin or amoxicillin" and cites the National Antibiotic Guidelines 2nd Edition 2017 (ref 54) without a regimen; no duration; no choice for penicillin allergy. 4.6 names paracetamol, ibuprofen, naproxen and diclofenac without doses (its reference 35 is a review of acute pain management in children).
25. **Tetanus** appears only in the Appendix 4 form ("Medical history (including immunization and regular medication)"; previous management "ie tetanus injection, analgesics, antibiotics, radiographs, replantation etc", p35). No recommendation.

**Follow-up and wording**

26. **Timings of complications.** Inflammatory root resorption "can usually be diagnosed at 8 months (between 5 and 12 months)" (p17) against Appendix 6's "5 months – 2 years" (p38); replacement resorption "14 months (range between 6 – 24 months)" (p18) against "6 months – 2 years"; pulpal necrosis "as early as two weeks ... during the early two-year period" (p17) against "2 weeks – 2 years". Close, but the upper ends differ for inflammatory resorption. In the Appendix 6 source line.
27. **No return advice.** The home care advice is three lines (p7); there is no list of symptoms that should bring the patient back early, though Appendix 6 lists the clinical findings of each complication.
28. **Slips:** 7.1 (p18) says monitor during follow-ups "(refer to section 1.1)", which does not exist (6.1 is meant); the box on p16 is headed "Recommendations 4"; the contents (PDF 5) list "7.2 Replacement Root Resorption and Ankylosis", the heading (p19) says "or"; "Tables of contents" (PDF 4 to 5). The audit indicator (p24) is the retention rate of replanted teeth over 2 years.

---

## (c) The app's related entries against this CPG

The app has **no dental entry**. The related entries were read in `src/parts/data.js` (ebook) and `data2.js`, `data3.js` (department). Their wording stays; nothing below is resolved. Each row is an open question for Krishna.

Context, a fact rather than a verdict: two of the CPG's development group work at Jabatan Pergigian Pediatrik, Aras 3, Hospital Wanita dan Kanak-Kanak, Jalan Raja Muda Abdul Aziz, Kuala Lumpur (p v), and the CPG cites a local study in which more than 80% of avulsion cases in children were referred to the Paediatric Dental Specialist from the A&E department (p1). Whether that hospital is the one the department's triage rule calls PEDWCH, these documents do not say.

| Item | App says (entry) | CPG says (page) | Open question |
|---|---|---|---|
| Who takes the tooth | Nothing: no dental or oral and maxillofacial team in `referral-rules`, `outpatient-referral`, `gz-rules` or `emacc` | "Go to nearest dental clinic or hospital as soon as possible" (p viii); "nearest dental clinic or hospital emergency service" (p3, p8); complications: "Refer to Dental Specialist" (p ix to x) | Which HKL dental team takes a knocked-out permanent tooth from the ED, in and out of office hours, for adults and for children, and how fast? |
| Who replants in the ED | Nothing | Recommendation 1 applies to everyone: "immediately replanted into its socket preferably within 15 minutes" (p4); the site steps are for lay people (p2 to 3); the technique with local anaesthesia and splinting is in clinical management (4.4 to 4.5, p6 to 7); the dental clinic algorithms do the rest (p ix to x) | Does the ED MO replant (site steps, or 4.4 with local anaesthesia), or store the tooth and call the dental team? And for a tooth out for more than 60 minutes (point 13)? |
| Triage | `gz-rules`, `children--pat`: no rule for dental trauma. A child who is "a trauma case" stays in the ETD rather than PEDWCH | No triage level; "Time is a critical factor" (p3); dry time <15 minutes and total time <60 minutes (p8) | Should a walk-in with a knocked-out tooth be fast-tracked from MTS 4 or 5? Is a child with one a "trauma case" for the ETD? |
| Severe injuries first | `trauma-walkins`: T-RACS Tier 1 criteria and HIT CT; no mention of teeth | Replantation absolutely contraindicated "where other injuries are more severe and warrant preferential emergency treatment and / or intensive care (such as severe head injury or poly-trauma)" (p4); the algorithm stops for any concomitant injury (p viii) | No conflict. Who stores the tooth for a T-RACS patient, since the algorithm's contraindication branch has no storage step? |
| Head injury | `mild-tbi` (ebook), `head-injury-cpg`: nothing on teeth | "severe head injury" (p4); "concomitant injury to ... the head" (p viii) | Does a mild head injury (GCS 15) stop replantation in the ED? The two wordings differ (point 1) |
| Antibiotics | Nothing for dental injuries | Penicillin-based "(e.g. penicillin V or ampicillin or amoxicillin) ... if indicated" (p15); no doses | Which department source gives the dose, the duration and the choice for penicillin allergy? |
| Analgesia | `pain` (ebook p45 to 50): the adult analgesic ladder and the morphine protocol; the Analgesia by weight calculator | Paracetamol, ibuprofen, naproxen and diclofenac for mild pain; "combination with other agents, most commonly the opioid group" for moderate or severe pain (p7); no doses | No conflict for adults (the draft links `#pain`). For children, the app has no analgesic doses (the Child doses calculator covers asthma, croup and fluids) |
| Tetanus | `oscc`: "tetanus for soiled wounds" (sexual assault, OSCC policy 2015); `diabetic-foot-cpg`: tetanus status assessed | None; only form fields (Appendix 4, p35) | Tetanus advice for a knocked-out tooth needs a department source |
| Mouthwash and advice | Nothing | 0.12% chlorhexidine twice daily for 1 week; avoid biting on splinted teeth; soft diet; good oral hygiene (p7) | Does the ED give this, or the dental team after splinting? |
| Follow-up | `emacc`: adults only; trauma reviews within 3 days for wound check and pain; no dental cases | Reviews at 1 week, 2 weeks, 1 month, 3 months, 6 months, every 6 months until 2 years, yearly until 5 years, with sensibility tests and radiographs after the first month (p16): dental reviews | Confirm that follow-up is with the dental team and not EMACC |
| Domestic violence, child abuse | `oscc`: domestic violence; child abuse ("check the ears, mouth and frenulum") | "Avulsion has also been reported as one of the common outcomes of domestic violence among women, children, adolescents and the elderly of both genders" (p1) | Consistent; the draft links `#oscc--dv` and `#oscc--child` and quotes p1 in the Time tab |
| Telephone advice | Nothing | The site steps "(For patients / parents / teachers / paramedics and bystanders)" (p2) | Does the ED give advice by phone, and should callers come to the ED or go to a dental clinic? |

---

## (d) Calculator candidates

The Calculators view reads its numbers from the pathway data. The facts file lists 22 phrases (all present in the draft, checked with `JSON.stringify(P[id]).includes(s)`), in case one is wanted. **Recommendation: build none.** The ED decision (replant or store, and refer) does not change with the minutes beyond what the stepper asks; the CPG's own categories leave gaps that a calculator would have to decline (points 7 to 9 and 11). A link to `#calc-analgesia` would also fail `okHref` in `check-data.js` (it accepts only the listed calculator routes), so the draft links `#pain` instead.

### 1. Time and storage lookup (not worth building)

| Input | Values |
|---|---|
| Dry time | minutes |
| Time in a storage medium, and which medium | minutes; a medium from Appendix 3 |
| Root | immature / mature / not known |

| Output | Source text (page) |
|---|---|
| Category | "<15 minutes extra-alveolar dry time or <60 minutes stored in recommended storage medium" and ">60 minutes extra-alveolar dry time or stored in recommended storage medium" (4.4, p6) |
| Prognosis and the dental team's plan | Table 3 (p11 to 12) |
| The medium's efficacy and accessibility | Table 2 (p9), Appendix 3 (p34) |

It would have to decline for: dry time 15 to 60 minutes (not in 4.4, point 7); exactly 15 or 60 minutes (point 8); more than 60 minutes in a good medium (point 9); an unknown root maturity (the MO cannot see the apex without a radiograph); a medium rated differently in Table 2 and Appendix 3 (points 16 and 17). Most inputs end in "not in the source" or "ask the dental team", and the output changes nothing the MO does. The Time tab's Table 3 already shows the lookup.

### 2. Storage medium lookup (a table tab instead: done)

Appendix 3's 15 media with efficacy and accessibility, plus Tables 1 and 2, are in the Storage tab. A picker would add nothing to a 15-row table.

### 3. Follow-up dates (not worth building)

Seven review points from the replantation date (p16). The dental team books these; the CPG gives no day 0 other than "post-replantation".

### 4. Antibiotic or analgesic doses (cannot be built)

The CPG gives no doses (point 24).

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (scripted search of every fragment, whitespace and apostrophes normalised, citation markers removed, then read in context). "Image" = read from a rendered page image, because the layout is lost in the text layer. Section and recommendation numbers, page numbers and the years in link labels to other app entries (for example "CPG 2015") are not listed.

| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | 2019, December 2019 | title, src, lead, refs | PDF 3; cover | Text ("issued in December 2019"); cover image, 80 dpi |
| 2 | 3rd edition | src, menu hint, refs | Cover | Image, 80 dpi ("(3RD EDITION)"); not in the text layer |
| 3 | Review due 2024 | menu hint | PDF 3 | Text ("will be reviewed in 2024 or earlier") |
| 4 | 2010; November 2010 | refs | PDF 3; p i | Text |
| 5 | ISBN 978-967-16632-5-7 | refs | PDF 3 | Text ("ISBN: 978-967-16632-5-7") |
| 6 | MOH/P/PAK/435.19(GU)-e | refs | PDF 1 | Text (cover text layer) and image |
| 7 | Preferably within 15 minutes | lead, menu hint | p4 (Recommendation 1), p xii | Text |
| 8 | Within the first 15 minutes | phone | p3 | Text |
| 9 | Within 15 minutes gives a favourable long-term prognosis | Time tab | p3 | Text |
| 10 | 10 seconds | prep, phone | p3, p viii | Text and image, 150 dpi |
| 11 | <15 minutes extra-alveolar dry time or <60 minutes stored in recommended storage medium | eat, Replanting tab | p6 | Text and image, 150 dpi |
| 12 | >60 minutes extra-alveolar dry time or stored in recommended storage medium | eat | p6 | Text and image, 150 dpi |
| 13 | Dry for >15 minutes but <60 minutes | eat (our label) | p ix (">15 min EAT"), p x ("<60 min EAT") | Text and images, 150 dpi |
| 14 | Extra-alveolar dry time: <15 minutes; total extra-alveolar time: <60 minutes | Time tab | p8 | Text and image, 150 dpi |
| 15 | More than 60 minutes (stored dry, or in unsuitable storage medium) | late | p12 | Text |
| 16 | >60 min EAT or SM; <60 min EAT or in SM; 1% sodium hypochlorite for 15 min | late | p ix, p x | Text and images, 150 dpi |
| 17 | Table 3 cells: <15 min, >15 min, >60 min, <60 min; Good, Guarded*, Poor; 7 to14 days | late, Time tab | p11 to 12 | Image, 150 dpi (the p11 text layer is out of order) |
| 18 | Splint for at least 7 days | replant, pre, fu, Replanting tab | p ix to x, p7 | Text and images |
| 19 | At least 4 weeks (alveolar bone fracture) | fu, Replanting tab | p7 | Text |
| 20 | 0.12% chlorhexidine twice daily for 1 week | abxy, abxn, fu, advice | p7 | Text and image, 150 dpi |
| 21 | 26 ± 2°C | store, Storage tab | p9 | Text (± and ° in the text layer) and image, 150 dpi |
| 22 | 0.9% sodium chloride | Storage tab | p9 | Text and image |
| 23 | 10 – 50% (propolis) | Storage tab | p9 | Text (en dash) and image |
| 24 | 5 min (green tea) | Storage tab | p9 | Text and image |
| 25 | Table 2 cells: ++, +, - | Storage tab | p9 | Image, 150 dpi |
| 26 | Appendix 3 accessibility: - -, --, +, ++ | Storage tab | p34 | Image, 400 dpi, and text span coordinates |
| 27 | National Antibiotic Guidelines 2nd Edition in 2017 | abxy, refs | p15, ref 54 (p29) | Text |
| 28 | IADT guidelines, 2012 | refs | ref 57 (p29) | Text |
| 29 | Apex closed or nearly closed (<1mm) | Time tab | p10 | Text |
| 30 | Survival 70 – 83% | Time tab | p18 | Text (en dash) |
| 31 | 1 week; 2 weeks; 1 month; 3 months; 6 months; every 6 months until 2 years; yearly thereafter until 5 years | fu, advice, Follow-up tab | p16 | Text and image, 150 dpi |
| 32 | After the first month | fu, Follow-up tab | p16 | Text |
| 33 | Five years (Recommendation 4) | fu, Follow-up tab | p16 | Text and image |
| 34 | 2 weeks – 2 years; 5 months – 2 years; 6 months – 2 years | Follow-up tab | p38 | Text (en dashes) and image, 150 dpi |
| 35 | Grade >1; grade 0; pocket depth >3mm | Follow-up tab | p38 | Text and image |
| 36 | 8 months (between 5 and 12 months) | Follow-up tab | p17 | Text |
| 37 | 14 months (range between 6 – 24 months) | Follow-up tab | p18 | Text (en dash) |
| 38 | Above 18 years old (consent) | Replanting tab | p5 | Text |
| 39 | Four conditions (5.8) | abx, abxn | p15 | Text (counted) |

Quotes that are not one continuous run of the text layer, all checked by eye against the page: "Of utmost importance is the prevention of tooth being dried" crosses from p2 to p3; the definition of avulsion (p1) drops "(Figure 1, 2 and 3)" and its citation number; quotes drop citation numbers and evidence levels throughout; algorithm boxes are joined with semicolons in the order of the arrows; list items joined into one line keep their printed words and order.

---

## What could not be verified

- **The definitive version.** The CPG says corrections are published in its web version, "the definitive version at all times" (PDF page 3). The copy read is the Academy of Medicine file (producer iLovePDF, modified 7 Apr 2021), in which p11 was replaced; it was not compared with the MOH or OHD website copy.
- **"3rd edition"** is printed only on the cover image (and in the file name), not in the text layer.
- **The National Antibiotic Guidelines 2017** regimen the CPG relies on was not available to check.
- **"Ricetral"** and the ® marks (Viaspan, Euro-Collins, Gatorade) are as printed (image); not checked further.
- **Seven points need the guide owner or the department**, not the CPG: the HKL dental team (in and out of hours, adults and children); whether the ED MO replants; what to do with a tooth out for more than 60 minutes; MTS fast-tracking; antibiotic doses and penicillin allergy; tetanus; and where a caller should go.

---
