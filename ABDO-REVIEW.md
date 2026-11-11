# Abdominal pain handbook against the app: line-by-line review

Checked 12 Nov 2026. The printed handbook ("Abdominal pain in the ED", reviewed v2, 12 Nov 2026, 29 pages) and its 2-page quick reference were read from the page images (`sources/abdo/hb-pages/p01.png` to `p29.png`, `sources/abdo/qr-pages/p01.png`, `p02.png`), block by block. Each block was compared with the app entry `abdo-handbook` as built (`sources/abdo/built-entry.md`, with `src/parts/data16.js` for the tabs, the 3D figure and the read-aloud), and with the deliberate changes recorded in `sources/abdo/SOURCE-CHECK.md`.

Statuses:
- SAME: wording identical, or only capitalisation, punctuation, a label prefix ("Look before touching: ...") or a split at semicolons.
- SHORTENED: some words dropped (quoted).
- CHANGED (intended): one of the deliberate changes: a number changed or left out after the source check, with a "Left out or changed" note in the node's gap; the paracetamol line pointing to the ebook; the "Department pathway:" lines.
- CHANGED (other): meaning, wording, link or figure differs and it is not one of the intended changes.
- MISSING: not in the app (the printed page images under Printed pages still show it).
- MOVED: in the app, but where a user who needs it would not look.

Running headers, page footers, section kickers ("01 | RECOGNISE DANGER") and table column headers are not counted. Each page's "Evidence: [...]" line is not counted; the Note column says whether the app's gap carries the same list.

## Handbook p. 1 (cover)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Abdominal pain in the ED" | entry title "Abdominal pain in the ED: the visual handbook" | SAME | |
| Subtitle | "A practical visual handbook for emergency assessment and safe decision-making" | not shown | MISSING | Only "the visual handbook" in the title. |
| Hero | "Stabilise. Find the threat. Reassess." / "Treat the patient while you work out the diagnosis." | `lead` | SAME | |
| Cover figure | torso with organs | not shown | MISSING | Decorative; no fix needed. |
| At the bedside / For teaching | "Start with the pathway on p. 2. ... Sources: pp. 25-29." | menu options | not counted | Page pointers; the menu replaces them. |
| Malaysian context box | "Uses MOH guidance for pain care, antimicrobials, obstetrics and the 2026 fourth-edition adult dengue CPG, supported by international specialty guidance. English clinical notes include a Malay discharge script." | not shown | MISSING | The lead says only "in a Malaysian context". |
| Scope and use | "Primarily adults with acute non-traumatic abdominal pain. Children and pregnancy have dedicated cautions. This is an educational synthesis, not an official MOH/HKL protocol. Apply local triage, ..." | `lead`; `menu` hint quotes from "an educational synthesis" to "persists." | SHORTENED | Dropped: "Children and pregnancy have dedicated cautions." |
| Revision note | "Source-checked revision 2: 12 November 2026. This review is not independent clinical peer review. Original schematic graphics; no patient images. References support recommendations; checklists and cases are teaching aids." | `src` "reviewed v2, 12 Nov 2026"; QR tab footer "Source-checked revision 2, 12 November 2026" | SHORTENED | Dropped: "This review is not independent clinical peer review." (a caveat worth keeping), "Original schematic graphics; no patient images." and "checklists and cases are teaching aids" (the gaps say only "A teaching aid, not an official MOH/HKL protocol"). |

## Handbook p. 2 (bedside pathway; identical to quick reference p. 1)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "The first decision is severity" | menu "Bedside pathway: the first decision is severity" | SAME | |
| Subtitle | "Run stabilisation and diagnostic assessment in parallel. Reassess whenever the story changes." | `sev` hint | SAME | |
| First look + first touch | "Vitals, mental state, perfusion, glucose and pain score. Shock can occur with preserved blood pressure." | `sev` info | SAME | |
| Decision | "Unstable, peritonitic, bleeding, or a time-critical concern?" | `sev` q | SAME | |
| Branch labels | "YES / UNCERTAIN"; "NO - CURRENTLY STABLE" | `sev` options | SAME | |
| Resuscitate + call | "Monitored area; ABCDE; IV access; targeted fluids/blood; early analgesia. Call ED senior ... must not delay source control." | `resus` | SAME | Split into three items. |
| Focused assessment | "History, whole-patient examination, pregnancy test when relevant, ECG/glucose as indicated. Rank: ..." | `focus` | SAME | |
| Reassess + check that the data fit | "Repeat vitals, perfusion, pain and abdominal examination. Review every result. Persistent pain, ..." | `reas` q and info | SAME | |
| Admit / intervene | "Threat, organ dysfunction, evolving focal signs or treatment needs." | `adm` item 1 | SAME | |
| Observe | "Diagnosis uncertain; serial examination and a timed senior review." | `obs` item 1 | SAME | |
| Discharge | "Low risk after reassessment; oral intake, follow-up and return advice." | `dcq` hint | SAME | |
| Evidence | [5,7-10,14,15,21] | `resus`, `focus` | | Same list. `adm`, `obs`, `dcq`, `dis` carry p. 22's list [5,7,8,15,17,23]. |

## Handbook p. 3 (patterns that cannot wait)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Patterns that cannot wait" | menu option | SAME | |
| Subtitle | "A normal temperature, white cell count or single blood pressure does not clear a patient." | `danger` hint | SAME | |
| Bleeding / vascular | "Collapse, syncope, pallor, back pain, GI bleeding or pregnancy-related pain: consider AAA, ectopic pregnancy and major haemorrhage." | `danger` item | SAME | |
| Peritonitis | "Involuntary guarding, rigidity or pain with movement: ... Call surgery early." | `danger` item | SAME | |
| Ischaemia | "Severe pain with few early signs, especially with AF or vascular disease: ... request urgent CTA." | `danger` item | SAME | |
| Infected obstruction | "Fever/organ dysfunction plus urinary obstruction or biliary obstruction: antibiotics and urgent drainage assessment." | `danger` item | SAME | |
| Strangulation / torsion | "Obstruction with continuous pain, tender irreducible hernia, sudden unilateral pelvic pain or testicular pain: urgent specialty review." | `danger` item | SAME | |
| Systemic mimic | "Epigastric pain with sweating/dyspnoea; abdominal pain with deep breathing or acidosis: evaluate ACS and DKA ..." | `danger` item | SAME | |
| Escalate on physiology or clinical concern | "Hypotension or a falling BP, altered consciousness, ... Do not wait for every classic feature." | `esc` only | MOVED | Wording SAME, but shown only after "One or more present". A user who answers "None of these" (yet has a falling BP or oliguria) never sees it. |
| Evidence | [8,14,17,20,21,24,28,30] | `esc` | | Same list. |

## Handbook p. 4 (the first 10 minutes)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "The first 10 minutes" | left out; `stab` step "Stabilise: assess, and act while assessing" | CHANGED (intended) | Gap note on `stab` (N2). But the `ap1` link is still labelled "The first 10 minutes" (fix 1). |
| Subtitle | "A suggested workflow, not a national timing target. Allocate tasks and document response." | `stab` item 1 | SAME | |
| Table header | "Assess / Act while assessing" | `stab` step title | SAME | |
| A / B | "Airway, respiratory rate, work of breathing and SpO2. ... titrate to the appropriate target." | `stab` | SAME | |
| C | "Monitor; obtain two IV lines when shock/bleeding is likely." | `stab`: "Monitor; obtain IV lines when shock/bleeding is likely." | CHANGED (intended) | "two" left out (N3), with gap note. |
| D / E | "Glucose, consciousness, temperature and pain score. Expose sufficiently ..." | `stab` | SAME | |
| Parallel actions | "Analgesia, antiemetic if needed, pregnancy test when relevant, early ECG if ACS is plausible. Keep nil by mouth ..." | `stab` | SAME | |
| If IV resuscitation is needed | "a typical adult crystalloid bolus is 500 mL over less than 15 min, then reassess. Use smaller aliquots in frailty/cardiorenal disease. Mild dehydration may be managed orally. [27,35]" | `fluid` item 1 | CHANGED (intended) | "Use smaller aliquots in frailty/cardiorenal disease." left out (N6), with gap note. 500 mL / 15 min as printed. |
| Bleeding or special pathway | "Major bleeding needs blood-product and haemorrhage pathways. ... [4,21,28]" | `fluid` | SAME | |
| Make every bolus a decision | "Record the indication, volume, rate and response. ... Septic shock may need early vasopressor support. [9]" | `fluid` | SAME | |
| Evidence | [4,5,9,21,28,35] | `stab`, `fluid` | | Same list. |

## Handbook p. 5 (history)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Ask questions that change risk" | `hx` step | SAME | |
| Subtitle | "Start open-ended, then clarify chronology and associated symptoms." | `hx` item 1 | SAME | |
| When and how? | "Exact onset; sudden maximal pain or gradual progression? ... pain-free interval?" | `hx` | SAME | |
| Where and where next? | "Site, migration, radiation to back/shoulder/groin; ... descriptive label." | `hx` | SAME | |
| GI / urinary? | "Vomiting: bilious or bloody? Last stool and flatus? ..." | `hx` | SAME | |
| Pregnancy / pelvic? | "Last menstrual period, ... Ask privately and obtain consent for testing." | `hx` | SAME | |
| Risk / exposure? | "Previous operations or hernia; AF, ... dengue exposure." | `hx` | SAME | |
| Medicines? | "Anticoagulants, NSAIDs, steroids, ... previous contrast reactions." | `hx` | SAME | |
| Write one problem representation | "Example: "Older adult with AF, abrupt severe diffuse pain and little tenderness, currently maintaining BP." ..." | `hx` | SAME | |
| Evidence | [5-8,14,15,28,29] | `hx` | | Same list. |

## Handbook p. 6 (examination)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "A soft abdomen is only one finding" | `ex` step "Examine the whole patient: a soft abdomen is only one finding" | SAME | |
| Subtitle | "Explain, consent, offer a chaperone for intimate examinations, and reassess after analgesia." | `ex` item 1 | SAME | |
| Look before touching | "General appearance, hydration, jaundice, ... restlessness can occur with colic." | `ex` | SAME | |
| Palpate gently | "Start away from pain. ... without repeatedly provoking rebound." | `ex` | SAME | |
| Complete the exam | "Assess groins and hernial orifices, renal angles and bladder. ... peripheral pulses." | `ex` | SAME | |
| Select intimate exams | "Rectal examination when bleeding, impaction ... do not delay resuscitation or referral." | `ex` | SAME | |
| Signs support a hypothesis | "Murphy, McBurney, Rovsing, psoas and obturator ... safely excludes urgent pathology." | `ex` | SAME | |
| Repeat and compare | "Document findings before and after treatment. ... more than one examination." | `ex` | SAME | |
| Cirrhosis + ascites + acute illness | "an ascitic neutrophil count at least 250 cells/mm3 supports treatment. [31]" | `exend` and `mi5`: ">250 cells/mm3" | CHANGED (intended) | N7, with gap note on both nodes. |
| Evidence | [6-8,22-24,31] | `ex` | | Same list. |

## Handbook p. 7 (a map of possibilities)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "A map of possibilities" | menu "Where is the pain? A map of possibilities" | SAME | |
| Subtitle | "Anterior view: the patient's RIGHT is on the LEFT of the page. Schematic regions only." | `loc` hint | SAME | |
| Figure | flat torso with organs, regions 1 to 9, "RIGHT" over page-left, "LEFT" over page-right | `loc` fig `abdo3d`: the guide's own 3D glass torso, nine panels, no organs | CHANGED (other) | Laterality checked and correct: "Patient's right" label is on the screen's left (`.a3-sr{left:10px}`); in the front frame region 1 spans x 140 to 274 of 720 (`app/abdo3d/regions.json`, i=12) and `front-lit/r1.webp` lights the top-left panel; region 3 top-right, 7 bottom-left, 9 bottom-right. The turn's aria text matches the yaw note. No fix needed; organs are not drawn. |
| Location is a clue | "The numbered regions below correspond to the schematic. Organs and pain can overlap." | `loc` hint and every `rg` node: "Location is a clue. Organs and pain can overlap." | SHORTENED | Dropped: "The numbered regions below correspond to the schematic." (harmless with the figure). |
| Referred pain | "shoulder-tip pain may reflect diaphragmatic irritation; back radiation can occur with pancreatic or aortic disease." | `loc` hint, `rg1`-`rg9` | SAME | |
| Migration | "early appendicitis may begin centrally before localising." | `loc` hint, `rg1`-`rg9` | SAME | |
| 1 Right upper | "Biliary / liver disease / Kidney / lung base" | `rg1` | SAME | |
| 2 Epigastrium | "Peptic / pancreatic / biliary / **ACS / aortic disease**" | `rg2` | SAME | Print sets the second line in bold; the app does not (also region 5). |
| 3 Left upper | "Spleen / stomach / pancreas / Kidney / lung base" | `rg3` | SAME | |
| 4 Right flank | "Stone / pyelonephritis / Retrocaecal appendix" | `rg4` | SAME | |
| 5 Central | "Early appendix / obstruction / **Ischaemia / AAA**" | `rg5` | SAME | Bold lost (see region 2). |
| 6 Left flank | "Stone / pyelonephritis / Colon / retroperitoneum" | `rg6` | SAME | |
| 7 Right lower | "Appendix / ileitis / hernia / Ectopic / torsion / stone" | `rg7` | SAME | |
| 8 Suprapubic | "Bladder / retention / PID / Ectopic / pelvic cause" | `rg8` | SAME | |
| 9 Left lower | "Diverticulitis / colitis / Ectopic / torsion / stone" | `rg9` | SAME | |
| Diffuse pain | "consider gastroenteritis, obstruction, peritonitis, ischaemia, DKA and systemic infection. Name a likely diagnosis, a dangerous alternative and an extra-abdominal mimic." | `rgd` (also the last line of each `rg`, and `exend`) | SAME | |
| Evidence | [6,10-12,14,15,17,18,20,26] | `rg1`-`rg9`, `rgd` | | Same list. |

## Handbook p. 8 (tests)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Order tests to answer a question" | `tests` title | SAME | |
| Subtitle | "No universal "abdominal panel". Choose according to illness severity and working differential." | `inv` hint | SAME | |
| Bedside glucose | "Add blood ketones and VBG for diabetes, SGLT2 use, ... Near-normal glucose does not exclude DKA." | `tests` | SAME | |
| UPT / serum beta-hCG | "Test when pregnancy is possible. ... A single hCG value cannot locate a pregnancy." | `tests` | SAME | |
| ECG ± troponin | "Use for plausible cardiac/epigastric presentations, ... follow the serial ACS pathway." | `tests` | SAME | |
| FBC ± CRP | "Anaemia, infection, platelets and trends. ... underestimate acute blood loss." | `tests` | SAME | |
| Renal profile / LFT | "Dehydration, AKI, ... without delaying life-saving imaging." | `tests` | SAME | |
| Lipase | "enzyme activity at least 3 times the upper limit, compatible imaging. [40]" | `tests`: "enzyme activity >3 times the upper limit, compatible imaging. [18,40]" | CHANGED (intended) | N10, with gap note; [18] added to the citation, as the gap explains. |
| VBG / lactate | "Acidosis and hypoperfusion in an unwell patient. Normal lactate does not exclude early mesenteric ischaemia." | `tests` | SAME | |
| Urine / other tests | "Urinalysis ± culture for urinary causes; ... stool tests for selected diarrhoeal illness." | `tests` | SAME | |
| Interpret in context | "pyuria can accompany nearby inflammation; ... Never use one reassuring result as a discharge rule." | `tests` | SAME | |
| Evidence | [7-9,14,15,18,28,31] | `tests` | | Same list. |

## Handbook p. 9 (imaging)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Match the scan to the threat" | `img` title | SAME | |
| Subtitle | "Tell radiology the suspected diagnosis and the question that needs answering." | `img` item 1 | SAME | |
| Biliary / RUQ | "Ultrasound first for suspected biliary disease" / "Equivocal scan with ongoing concern: ..." | `img` | SAME | |
| Adult RLQ / diffuse serious pain | "CT abdomen-pelvis, usually with IV contrast" / "Protocol depends on suspected pathology. Children/pregnancy often begin with US." | `img` | SAME | |
| Mesenteric ischaemia / aortic emergency | "Urgent CT angiography" / "Explicitly request the vascular protocol. Do not substitute routine non-contrast CT." | `img` | SAME | |
| Suspected renal colic | "Low-dose non-contrast CT in adults" / "Ultrasound first in pregnancy/children. Fever, AKI or atypical symptoms change urgency." | `img` | SAME | |
| Early-pregnancy or pelvic cause | "Pelvic US, usually TVUS when appropriate" / "Resuscitate and call O&G first if unstable; ..." | `img` | SAME | |
| Obstruction / perforation | "CT if clinically appropriate and stable enough" / "Normal plain films do not exclude either; ..." | `img` | SAME | |
| Pregnancy box | "Use US or MRI when they can answer the question promptly. Necessary CT should not be withheld ... [36]" | `img` | SAME | |
| If the patient is unstable | "Bedside US may guide immediate treatment. ... A scan queue must not become the management plan." | `img` | SAME | |
| Evidence | [10-12,14,16,19,20,21,36] | `img` | | Same list. |

## Handbook p. 10 (POCUS)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "POCUS answers focused questions" | `pocus` title | SAME | |
| Subtitle | "Use only within your competence. Save findings, ..." | `pocus` item 1 | SAME | |
| Aorta | "Is the aorta aneurysmal? ... A non-diagnostic study is not negative." | `pocus` | SAME | |
| Free fluid | "Is there intraperitoneal fluid in a shocked patient? ... or an early ectopic." | `pocus` | SAME | |
| Heart / lungs | "Can cardiac dysfunction, pericardial fluid or pulmonary congestion ... dynamic response." | `pocus` | SAME | |
| Biliary / renal | "Look for gallbladder abnormalities or hydronephrosis. ... does not exclude a ureteric stone." | `pocus` | SAME | |
| Pelvis | "Can a definite intrauterine pregnancy be identified? ... urgent O&G review." | `pocus` | SAME | |
| Dengue | "Look for pleural fluid, ascites and gallbladder wall oedema ... [4]" | `pocus` | SAME | |
| Write the limitation | "Prefer "Aorta incompletely visualised; AAA not excluded" to "US normal". ..." | `pocus` | SAME | |
| Evidence | [4,11,15,17,21,22,32,33] | `pocus` | | Same list. |

## Handbook p. 11 (pain relief)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Treat pain early, then reassess" | `pain` title | SAME | |
| Subtitle | "Analgesia does not need to wait for a surgeon or a final diagnosis. Adult examples below." | `pain` item 1 | SAME | |
| Paracetamol, practical use | "Typical adult at least 50 kg: 1 g PO every 6 h as needed; maximum 4 g/24 h from all products." | `pain`: "for the dose, use the HKL ebook's table (Pain management) or Analgesia by weight." | CHANGED (intended) | N12/N13; the gap quotes the printed line and the reason. |
| Paracetamol, safety check | "Use a lower/weight-based regimen for low body weight or hepatic risk; check previous doses. IV if oral route is unsuitable, per formulary." | `pain` | SAME | |
| Titrated IV morphine | "MOH 2020 Appendix 2 uses 1 mg if age <60, or 0.5 mg if 60 or older, reassessed at 5-min intervals while severe pain persists." + safety check | `pain` | SAME | Numbers as printed. Followed by an intended "Department pathway:" line (ebook: "60 years old or below", confirmed in `data.js` line 501). |
| IV fentanyl | "MOH lists 25-50 micrograms as an initial alternative when morphine is unsuitable." + safety check | `pain` | SAME | Followed by an intended "Department pathway:" line (ebook 50–100 mcg, confirmed in `data.js` line 509). |
| NSAID | "First-line option for renal colic when safe; ..." / "Avoid with AKI/dehydration, ... avoid in suspected dengue." | `pain` | SAME | |
| Supportive care | "Treat nausea when present; ... Consider NG decompression for significant obstructive vomiting/distension." | `pain` | SAME | |
| Reassess the diagnosis as well as the pain | "Review pain, vital signs and examination after treatment. ... Pain relief alone cannot prove a benign cause. [25]" | `pain` | SAME | |
| Evidence | [1,4,16,25] | `pain` | | Same list. |

## Handbook p. 12 (antibiotics)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Antibiotics are only part of treatment" | `abx` title | SAME | |
| Subtitle | "Choose the syndrome, assess severity, check allergy/renal function and plan source control." | `abx` item 1 | SAME | |
| Sepsis timing, 2026 international guidance | "... start antimicrobials immediately, ideally within 1 hour. ... antibiotics within 3 hours if concern persists. ... [9]" | `abx` | SAME | |
| NAG row 1 | "Community biliary infection, without sepsis" / "Amoxicillin/clavulanate 1.2 g IV every 6 h." | `abx` | SAME | |
| NAG row 2 | "Biliary infection with sepsis / organ failure" / "Piperacillin/tazobactam 4.5 g IV every 6-8 h. NAG specifies 3-4 h infusion ..." | `abx` | SAME | |
| NAG row 3 | "Complicated appendicitis/diverticulitis without sepsis: alternative" / "Ceftriaxone 2 g IV every 24 h PLUS metronidazole 500 mg IV every 8 h." | `abx` | SAME | |
| Prescribing boundary | "Examples are for adults with usual organ function, ... severe beta-lactam allergy needs an alternative plan. [2]" | `abx` | SAME | |
| Resuscitate to response | "Conditional SSC recommendation: at least 30 mL/kg crystalloid in the first 3 h ... Balanced crystalloid is preferred. [9]" | `abx` | SAME | |
| Control the source | "Drain an infected obstruction, ... do not wait for antibiotics to solve a mechanical problem." | `abx` | SAME | |
| Evidence | [2,9,17,20,30] | `abx` | | Same list. |

## Handbook p. 13 (appendicitis and diverticulitis)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Appendicitis and diverticulitis" | `app` q, menu option | SAME | |
| Subtitle | "Use clinical evolution, risk assessment and imaging together." | `app` hint | SAME | |
| Appendicitis box | "Pain may migrate from central abdomen to the right lower quadrant, ... Diarrhoea or urinary findings do not exclude it." | `app` info | SAME | |
| Diverticulitis box | "Often left-sided pain and bowel change; right-sided disease also occurs. ..." | `app` info | SAME | |
| Peritonism, shock or organ dysfunction | "Immediate senior/surgical review; resuscitation, nil by mouth and antibiotics when indicated." | `ap1` | SAME | |
| Stable but focal persistent pain | "Use the local imaging pathway and obtain surgical input. Do not discharge on a normal WBC/CRP alone." | `ap2` | SAME | |
| Risk score used | "AIR/AAS or another locally adopted score can support appendicitis risk stratification; ..." | `ap3` | SAME | |
| Uncomplicated disease confirmed | "Selected appendicitis patients may receive antibiotics under a surgical plan. For diverticulitis, ... ensure follow-up. [2,26]" | `ap4` | SAME | Split in two items. |
| Avoid the "low score = safe" shortcut | "Escalate persistent localised tenderness, ... Non-operative treatment is a selected management pathway with explicit follow-up, not a default ED discharge decision." | `ap3` (whole box); first sentence also on `ap2`, second also on `ap4` | SAME | |
| Evidence | [2,7,12,13,26] | `ap1`-`ap4` | | Same list. |

## Handbook p. 14 (biliary disease or pancreatitis)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Biliary disease or pancreatitis?" | `up` title | SAME | |
| Subtitle | "Epigastric pain still needs consideration of ACS, perforation and vascular causes." | `up` item 1 | SAME | |
| Figure | liver, gallbladder, bile duct, pancreas, "Schematic; not to scale" | not shown | MISSING | Optional. |
| Biliary colic | "Episodic pain that settles, without systemic illness: analgesia, US and follow-up." | `up` | SAME | |
| Cholecystitis | "Persistent RUQ pain/tenderness ± fever: US, bloods, surgical review and indicated antibiotics." | `up` | SAME | |
| Cholangitis | "Systemic illness with biliary obstruction/cholestasis: ... The full triad may be absent." | `up` | SAME | |
| Pancreatitis: two of three | "lipase/amylase at least 3 times the upper limit" | `up`: "lipase/amylase >3 times the upper limit" | CHANGED (intended) | N10, with gap note. |
| Initial pancreatitis care | "Analgesia; moderate, reassessed crystalloid therapy, preferably lactated Ringer solution; ... [18,39]" | `up` | SAME | |
| When to escalate | "... CT if diagnosis is unclear or failure to improve after 48-72 h. No routine prophylactic antibiotics for sterile pancreatitis. [18,39]" | `up` | SAME | |
| Cholangitis footer | "moderate/severe disease needs early/urgent drainage; ... urgent ERCP pathway, usually within 24 h. [30,39]" | `up` | SAME | |
| Evidence | [2,11,18,30,39] | `up` | | Same list. |

## Handbook p. 15 (obstruction and perforation)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Obstruction and perforation" | `sbo` title | SAME | |
| Subtitle | "Do not wait for every textbook sign before referring." | `sbo` item 1 | SAME | |
| Suspect obstruction | "Colicky pain, vomiting, distension and reduced stool/flatus. ..." | `sbo` | SAME | |
| Suspect perforation | "Sudden severe pain, pain with movement, guarding/rigidity or sepsis. ..." | `sbo` | SAME | |
| Obstruction: initial package | "Nil by mouth, IV fluid/electrolyte replacement, ... [19]" | `sbo` | SAME | |
| Strangulation / ischaemia: call now | "Continuous or worsening pain, peritonism, shock, fever, metabolic acidosis ... [19]" | `sbo` | SAME | |
| Perforation: CT when appropriate; source control early | "Start resuscitation and broad-spectrum IV antibiotics; ... a normal film cannot exclude perforation. [20]" | `sbo` | SAME | |
| Do not miss the groin | "An acutely painful irreducible hernia needs urgent surgical review. ... observation afterwards. [41]" | `sbo` | SAME | |
| Evidence | [8,19,20] | `sbo` | | Same list. |

## Handbook p. 16 (vascular and bleeding threats)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Think beyond inflammation" | `vas` title "Vascular and bleeding threats: think beyond inflammation" | SAME | |
| Subtitle | "These diagnoses can deteriorate before laboratory abnormalities become obvious." | `vas` item 1 | SAME | |
| Abdominal aortic aneurysm | "New abdominal/back/flank pain with collapse or syncope, ... avoid delaying definitive care. [21]" | `vas` | SAME | |
| Acute mesenteric ischaemia | "Disproportionately severe pain, AF, atherosclerosis or low-flow states ... [14]" | `vas` | SAME | |
| Major GI bleeding | "Haematemesis, melena or brisk rectal bleeding ... endoscopy immediately after resuscitation. [34]" | `vas` | SAME | |
| Senior decision required | "Bleeding resuscitation and blood pressure targets depend on the cause. ... [21]" | `vas` | SAME | |
| Do not reassure yourself | "A normal early Hb, temporary pain relief or a soft abdomen ... Recheck physiology and the clinical story." | `vas` | SAME | |
| Evidence | [14,20,21,32,34] | `vas` | | Same list. |

## Handbook p. 17 (flank, urinary and scrotal pain)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "A stone plus infection is an emergency" | `flk` hint | SAME | |
| Subtitle | "Separate uncomplicated colic from sepsis, threatened renal function and alternative diagnoses." | `flk` hint | SAME | |
| Typical colic, no red flags | "Analgesia: NSAID if safe. NICE recommends low-dose non-contrast CT within 24 h in adults; ... [16]" | `fk1` | SAME | Followed by an intended "Department pathway:" line (ebook renal colic pp. 53-54). |
| Fever/sepsis with urinary obstruction | "Cultures and immediate IV antibiotics; ... Delay definitive stone treatment until sepsis resolves. [17]" | `fk2` | SAME | |
| Anuria / obstruction threatening renal function | "... arrange urgent drainage as indicated. Anuria alone is not an indication for antibiotics: assess for infection. [17,42]" | `fk3` | CHANGED (intended) | Last sentence left out (Q9), with gap note. |
| Uncontrolled pain or vomiting | "Urgent reassessment and urology input; ..." | `fk4` | SAME | |
| Older patient with first "renal colic" | "Consider AAA and other vascular/abdominal causes before committing to the stone pathway. [21]" | `fk5` | SAME | |
| Testicular torsion box | "Ask about and examine the scrotum when relevant, ... Do not wait for ultrasound when clinical suspicion is high. [24]" | `fk6` | SAME | |
| Before discharging colic | "Confirm stable observations, controlled symptoms, adequate oral intake and urine output, ... require urgent return." | `fk1` | SAME | |
| Evidence | [16,17,21,24,42] | `fk1`-`fk6` | | Same list. |

## Handbook p. 18 (pregnancy and pelvic pain)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "First establish pregnancy possibility" | `preg` hint | SAME | |
| Subtitle | "Pain can precede vaginal bleeding. Atypical symptoms do not exclude ectopic pregnancy." | `preg` hint | SAME | |
| Unstable or significant bleeding / peritonism | "Resuscitate, crossmatch and call O&G immediately. ... [3]" | `preg` q; `pg0` | SAME | |
| Pregnancy possible | "UPT; serum beta-hCG if needed. ... heterotopic pregnancy. [15]" | `pg1` | SAME | |
| Positive test; no pregnancy located on TVUS | "Treat as pregnancy of unknown location. ... a single hCG value cannot establish location." | `pg2` | SAME | |
| Follow-up for unknown location | "O&G-led plan: two hCG tests near 48 h apart, not earlier, ... Give written 24-hour access/return instructions; ... [15]" | `pg3` | SAME | |
| Sudden unilateral pelvic pain ± vomiting | "Consider adnexal torsion even with preserved Doppler flow. ... [22]" | `pg4` | SAME | |
| Pelvic pain with discharge / cervical or adnexal tenderness | "Consider PID after dangerous alternatives. ... favours admission. [37]" | `pg5` | SAME | |
| Later pregnancy / postpartum | "Consider abruption, labour, uterine complications and pre-eclampsia/HELLP ... [3]" | `pg6` | SAME | |
| Evidence | [3,15,22,36,37] | `pg0`-`pg6` | | Same list. |

## Handbook p. 19 (dengue and tropical differentials)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Dengue and tropical differentials" | `deng` title | SAME | |
| Subtitle | "A falling fever does not necessarily mean recovery." | `deng` item 1 | SAME | |
| Dengue + abdominal pain = reassess severity | "In a compatible febrile illness, intense abdominal pain/tenderness or persistent vomiting is a warning feature. ... [4]" | `deng` | SAME | |
| CCTVR tiles | "Colour / Capillary refill / Skin temperature / Pulse volume / Pulse rate" | `deng`: "CCTVR: Colour, Capillary refill, skin Temperature, pulse Volume, pulse Rate." | SAME | |
| Assess and trend | "CCTVR plus BP/pulse pressure, breathing, mental state and urine output. ... [4]" | `deng` | SAME | |
| Use the dengue pathway | "POCUS can support assessment of leakage and fluid tolerance. ... Do not use a generic sepsis fluid volume as a dengue prescription. [4]" | `deng` | SAME | |
| Leptospirosis: ask about exposure | "Floodwater, freshwater recreation or contaminated environments ... [29]" | `deng` | SAME | |
| Avoid anchoring | "a positive dengue test does not exclude appendicitis, cholangitis, ectopic pregnancy ..." | `deng` | SAME | |
| Evidence | [4,29] | `deng` | | Same list. |

## Handbook p. 20 (important mimics)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Look above, below and outside the gut" | `mim` q | SAME | |
| Subtitle | "Abdominal pain can be the presenting symptom of a systemic emergency." | `mim` hint | SAME | |
| Epigastric discomfort, diaphoresis, dyspnoea, vascular risk | "ACS: ECG early and serial testing according to clinical risk. Do not let an antacid response rule it out." | `mi1` | SAME | |
| Pleuritic symptoms, hypoxia, cough or fever | "Lower-lobe pneumonia; pulmonary embolism when clinically plausible. ..." | `mi2` | SAME | |
| Diabetes/SGLT2 use, vomiting, tachypnoea, dehydration | "DKA: blood ketones, glucose, VBG/electrolytes. Euglycaemic DKA can occur. ..." | `mi3` | SAME | |
| Steroid dependence, hypotension, vomiting, electrolyte disturbance | "Consider adrenal crisis; ... without waiting for test results. [38]" | `mi4` | SAME | |
| Cirrhosis with ascites and acute deterioration | "SBP: prompt diagnostic paracentesis and medical review; pain/fever may be limited." | `mi5` | SAME | `mi5` adds the p. 6 line (>250, intended). |
| Dermatomal pain/rash or pain linked to movement | "Zoster or abdominal-wall pain may explain symptoms, but first assess for urgent intra-abdominal causes." | `mi6` | SAME | |
| Diarrhoea does not guarantee gastroenteritis | "Consider appendicitis, ischaemia, inflammatory colitis and drug-related illness. ... [27]" | `mi7` (as the clue "Diarrhoea") | SAME | |
| If pain persists after correcting a metabolic abnormality | "re-examine and investigate a coexisting abdominal cause. A medical diagnosis and a surgical diagnosis can coexist. [28]" | `mim` hint | SAME | |
| Evidence | [5,7,8,27,28,31,38] | `mi1`-`mi4`, `mi6` | | Same list; `mi5` gives [31] and `mi7` [27] (their boxes' own references). |

## Handbook p. 21 (patients who need extra caution)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Patients who need extra caution" | menu option, `caut` q | SAME | |
| Subtitle | "A mild-looking examination can coexist with serious disease." | `caut` hint | SAME | |
| Older people / frailty | "Look for vague symptoms, confusion, falls, ... when serious pathology remains possible." | `ca1` | SAME | |
| Immunocompromised | "Steroids, chemotherapy or transplant treatment may blunt fever and peritonism. ..." | `ca2` | SAME | |
| Pregnancy | "Changed anatomy and physiology alter presentation. ... [3,36]" | `ca3` | SAME | |
| Recent surgery / procedure | "Consider leak, obstruction, bleeding, abscess or a procedure complication. ..." | `ca4` | SAME | |
| Children: use a paediatric pathway | "Bilious vomiting, distension, shock, peritonism, ... repeated examination is valuable. [23,24]" | `ca5` | SAME | |
| Practical paediatric rules | "Use weight-based medicines/fluids, ... Adult drug doses in this handbook do not apply. [23]" | `ca5` | SAME | |
| Evidence | [3,8,22-24,26,36] | `ca1`, `ca2`, `ca4` | | Same list; `ca3` [3,36], `ca5` [23,24]. |

## Handbook p. 22 (reassessment and disposition)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Reassessment is a treatment step" | `reas` hint | SAME | |
| Subtitle | "Set a review time and a responsible clinician. Repeat attendance is new information." | `reas` hint | SAME | |
| Admit / urgent specialty (2 cells) | "Shock, peritonism, organ dysfunction, ... another time-critical diagnosis." / "Persistent vomiting/dehydration, uncontrolled pain, ... or unreliable follow-up." | `adm` items 2 and 3 | SAME | |
| Observe / review (2 cells) | "Uncertain diagnosis, evolving pain, ..." / "Serial vitals/examination, response to treatment and result review; ..." | `obs` items 2 and 3 | SAME | |
| Discharge only if (2 cells) | "Stable repeat observations; reassuring reassessment; urgent causes reasonably excluded." / "Oral fluids tolerated; symptoms manageable with oral treatment; safe support, clear follow-up and understandable return advice." | `dcq` checklist (6 items) | SAME | Split at semicolons (intended). But see fix 3 on where "Not all met" leads. |
| If the scan is negative but the patient is not well | "Review whether the right study/protocol was used, ... may still be needed. [8]" | `obs` | SAME | |
| A diagnosis of uncertainty is acceptable; an unclear plan is not | ""Non-specific abdominal pain" can be used ... often within 12-24 h if unresolved, according to risk and local access. [7]" | `dis` | SAME | Followed by an intended "Department pathway:" line (ebook p. 11: EMACC or EMWATCH in 24 to 48 hours, confirmed in `data.js` line 16). |
| Before the patient leaves | "Repeat and document vital signs and abdominal findings. ... ask the patient to repeat the plan back." | `dis` | SAME | |
| Evidence | [5,7,8,15,17,23] | `adm`, `obs`, `dis` | | Same list. |

## Handbook p. 23 (document and hand over)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Make the next action explicit" | `adm` item 4: "Hand over with a short structured handover (ISBAR) and make the next action explicit." | SHORTENED | Reworded into an app sentence on `adm`; not on the `disp`, `isbar` or `script` nodes. |
| Subtitle | "Use a short structured handover and a discharge explanation the patient understands." | `adm` item 4 (reworded) | SHORTENED | Dropped: "and a discharge explanation the patient understands". |
| ISBAR I / S | ""I am the ED MO. This patient needs urgent review for possible mesenteric ischaemia."" | `isbar` | SAME | |
| ISBAR B | ""Older adult with AF; severe diffuse pain started suddenly. No previous similar episode."" | `isbar` | SAME | |
| ISBAR A | ""BP is currently maintained, ... Monitoring and analgesia have started."" | `isbar` | SAME | |
| ISBAR R | ""Please review urgently. I am discussing CTA with radiology. ... Who will review, and by when?"" | `isbar` | SAME | |
| Minimum record | "Time/onset and key negatives; risk factors; ... disposition and follow-up ownership." | `rec` | SAME | |
| Malay discharge script, adapt to the patient | ""Punca sakit perut anda belum dapat dipastikan sepenuhnya. Datang semula ... Jangan tunggu tarikh temujanji jika keadaan semakin teruk."" | `script` node and Malay script tab | SAME | Every word checked; split into four lines. |
| Complete the plan | ""Semakan semula: [tarikh/masa] di [tempat]. Jika rebah atau terlalu lemah untuk datang dengan selamat, hubungi 999."" | `script` node and tab, lines 5 and 6 | SAME | Heading "Complete the plan" not shown. "999" is kept, although SOURCE-CHECK N34 rates it NOT IN SOURCE (uncited) and the node has no gap note (fix 5). |
| Document understanding | "Document understanding, language/interpreter needs, transport and the agreed review arrangement. This script is a teaching template, not an official MOH patient leaflet." | `script` item 7; tab note | SAME | |
| Evidence | [7,8,15] | `isbar`, `rec` | | Same list; the `script` gap gives the page only. |

## Handbook p. 24 (six short cases)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "Six short cases for the junior MO" | menu "Six short cases" | SHORTENED | "for the junior MO" dropped; no fix needed. |
| Subtitle | "Pause before reading the answer. Ask: what is dangerous, what is next, and what could falsely reassure me?" | `cases` hint | SAME | Each case's hint rephrases it as "... falsely reassure you?" (no fix needed). |
| Case 1 | "AF, severe pain, soft abdomen" / "A 74-year-old has abrupt diffuse pain; lactate is normal." / "Next: urgent senior review and CTA ... [14]" | `cs1`, `cs1a` | SAME | |
| Case 2 | "Pregnancy test positive, empty uterus" / "A stable patient has pelvic pain and no pregnancy located on TVUS." / "Next: O&G-led ... [15]" | `cs2`, `cs2a` | SAME | |
| Case 3 | ""Renal colic" with fever" / "A patient has flank pain, fever and obstructed collecting system." / "Next: cultures, ... [17]" | `cs3`, `cs3a` | SAME | |
| Case 4 | "Fever settles, abdominal pain worsens" / "Suspected dengue with vomiting, cold extremities and reduced urine." / "Next: assess perfusion/CCTVR ... [4]" | `cs4`, `cs4a` | SAME | |
| Case 5 | "SGLT2 drug, vomiting, normal-ish glucose" / "Abdominal pain and deep breathing occur during an acute illness." / "Next: blood ketones and VBG; ... [28]" | `cs5`, `cs5a` | SAME | |
| Case 6 | "Boy with lower abdominal pain" / "Sudden pain and vomiting, no obvious abdominal diagnosis." / "Next: assess testes; ... [24]" | `cs6`, `cs6a` | SAME | |
| Four questions to ask on every shift | "Did I identify the dangerous alternative? Did I treat symptoms promptly? Did I repeat the examination and observations? Does someone clearly own the next step?" | `cs6a` only | MOVED | Shown only after the answer to case 6; a user who does one case never sees it. |
| Evidence | [4,8,14,15,17,24,28] | each answer gives its own reference | | [8] is not shown on any case (minor). |

## Handbook pp. 25 to 29 (linked references)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Heading line (each page) | "Numbered references throughout the handbook. Rechecked 12 November 2026." | Sources tab, note heading | SAME | Counted once. |
| Introduction (p. 25) | "Targeted review of official Malaysian publications and international specialty guidelines. This is not a systematic review. Algorithms are an educational synthesis; ..." | Sources tab, two items | SAME | |
| [1], [2], [3] | MOH pain management 2020; NAG A4; MOH obstetrics handbook 2024 | Sources tab | SAME | Text and URL identical (`hb-links.txt`). |
| [4] | "MaHTAS, MOH Malaysia. Management of Dengue in Adults, 4th ed. (2026). Full text read via the PDF linked by PKD Melaka Tengah. Chapters 4, 8, 9; Appendix 8." Link: drive.google.com/file/d/1IFsj4.../view | Sources tab: "... Chapters 4, 8, 9; Appendix 8. In this guide: the Dengue CPG entry." Link: `#dengue-cpg` | CHANGED (other) | "Full text read via the PDF linked by PKD Melaka Tengah." dropped and the printed Drive link replaced by the app's own entry. Not one of the listed intended changes (fix 6). |
| [5] to [9] (p. 25) | ACI ECAT; ACI assessment; RCEMLearning; RCEM laparotomy 2024; SSC 2026 | Sources tab | SAME | Text and URLs identical. |
| [10] to [18] (p. 26) | ACR x3; WSES appendicitis; WSES AMI; NG126; NG118; EAU; ACG | Sources tab | SAME | 9 references; text and URLs identical. |
| [19] to [26] (p. 27) | Bologna ASBO; WSES ulcer; NG156; ACOG 783; RCH x2; RCEM pain; WSES diverticulitis | Sources tab | SAME | 8 references; identical. |
| [27] to [34] (p. 28) | IDSA; Umpierrez; NAG A16; Tokyo 2018; BSG/BASL; ACEP x2; CG141 | Sources tab | SAME | 8 references; identical. |
| [35] to [42] (p. 29) | CG174; ACOG 723; CDC PID; SfE adrenal; ACG highlights; Banks (Atlanta); HerniaSurge; NG148 | Sources tab | SAME | 8 references; identical. [40]'s own annotation still reads "at least three times the upper limit" while `tests` and `up` now show ">3 times" (fix 7). |
| How to keep the notes current (p. 29) | "Recheck live MOH NAG recommendations before prescribing. ... This synthesis is not an endorsement by any cited organisation." | Sources tab | SAME | |

## Quick reference p. 1

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Whole page | identical to handbook p. 2, including its Evidence line | as handbook p. 2 | SAME | Checked side by side; counted once. |

## Quick reference p. 2 (back page)

| Block | Printed (short quote) | In the app (node or tab) | Status | Note |
|---|---|---|---|---|
| Title | "The checks that prevent a miss" | menu option, `trig`, Quick reference tab | SAME | |
| Subtitle | "Adult non-traumatic abdominal pain. Use with the full handbook and local departmental pathways." | `trig` hint; tab note | SAME | |
| Shock / syncope / significant bleed | "ABCDE, monitored care, IV access/crossmatch; consider AAA or ruptured ectopic; senior/specialty now." | `tg1`; tab table | SAME | |
| Peritonism / tender irreducible hernia | "Urgent surgical review. ... If strangulation is suspected, do not attempt hernia reduction." | `tg2`; tab | SAME | |
| Severe pain with few early signs | "Consider mesenteric ischaemia; urgent CTA. A normal lactate cannot rule it out." | `tg3`; tab | SAME | |
| Pregnancy possible / pelvic pain | "Pregnancy test, appropriate pelvic US; unstable = O&G immediately. ..." | `tg4`; tab | SAME | |
| Fever/sepsis + urinary obstruction | "Cultures, immediate IV antibiotics and urgent urology/drainage. ..." | `tg5`; tab | SAME | |
| Anuria / obstructed solitary kidney | "Immediate senior/urology review; urgent assessment of obstruction and renal function. Antibiotics only when infection is suspected." | `tg6`; tab | CHANGED (intended) | Last sentence left out (Q9); the gap note is on `tg6`. The tab table row has no note of its own. |
| Jaundice + systemic illness | "Consider cholangitis; antibiotics and early biliary drainage assessment." | `tg7`; tab | SAME | |
| Epigastric pain / deep breathing | "Think ACS or DKA: ECG/appropriate troponin pathway; glucose, ketones and VBG when indicated." | `tg8`; tab | SAME | |
| Suspected dengue + worsening pain | "Assess CCTVR, BP/pulse pressure, HCT trend and urine output; escalate. Avoid NSAIDs; use the dengue fluid pathway." | `tg9`; tab | SAME | |
| Before discharge | "Repeat observations and examination. ... assign ownership of pending results." | `dis` item 2; tab | SAME | |
| Selected original sources | five linked names: NAG; "MOH adult dengue CPG, 4th ed. 2026"; WSES mesenteric ischaemia; EAU urolithiasis; NICE ectopic pregnancy | tab, as plain text | SHORTENED | The five links are not carried (the QR's NICE link is the NG126 overview, not [15]'s chapter page). |
| Footer | "Teaching aid, not an official MOH/HKL protocol. Source-checked revision 2, 12 November 2026. Adult doses, special populations and detailed caveats are in the handbook." | tab, last item | SAME | |

## Summary

### Counts (284 printed blocks)

| Status | Count | Where |
|---|---|---|
| SAME | 260 | |
| SHORTENED | 7 | p1 scope and use; p1 revision note; p7 "Location is a clue"; p23 title; p23 subtitle; p24 title; QR p2 selected sources (links) |
| CHANGED (intended) | 9 | p4 title; p4 "two" IV lines; p4 "smaller aliquots"; p6 >250; p8 >3 times; p11 paracetamol; p14 >3 times; p17 anuria sentence; QR p2 anuria sentence |
| CHANGED (other) | 2 | p7 figure (replaced by the 3D torso; laterality correct, no fix); ref [4] (annotation and link) |
| MISSING | 4 | p1 subtitle; p1 cover figure; p1 Malaysian context box; p14 biliary figure |
| MOVED | 2 | p3 "Escalate on physiology"; p24 "Four questions" |

Each reference [1] to [42] counts as one block (grouped in the table above), and quick reference p. 1 counts as one block because it is identical to handbook p. 2. Not counted: the p. 1 page pointers (replaced by the menu), running headers, kickers, table column headers and Evidence lines. Every page's evidence list is in the app's gaps, except p. 24 (each case carries its own reference only; [8] does not appear).

### Numbers

Every number in the app matches the print, except the intended changes: "two" IV lines left out; ">250 cells/mm3" for "at least 250"; ">3 times the upper limit" for "at least 3 times" (twice); the paracetamol line replaced by a pointer to the ebook. Checked as printed: 500 mL over less than 15 min; 1 mg if age <60, 0.5 mg if 60 or older, 5-min intervals; 25-50 micrograms; within 1 hour, within 3 hours; 1.2 g IV every 6 h; 4.5 g IV every 6-8 h; 3-4 h infusion; ceftriaxone 2 g IV every 24 h with metronidazole 500 mg IV every 8 h; 30 mL/kg in the first 3 h; 48-72 h; within 24 h (ERCP, NICE CT); near 48 h apart; 24-hour access; 12-24 h; 74-year-old; 999. The "Department pathway:" numbers were spot-checked against the ebook data (`data.js`): EMACC or EMWATCH in 24 to 48 hours (line 16), "60 years old or below" (line 501), fentanyl 50–100 mcg (line 509).

### Laterality and figures

No laterality error. The `loc` hint keeps "the patient's RIGHT is on the LEFT of the page"; the 3D torso labels "Patient's right" on the screen's left; region 1 (Right upper) is the top-left panel in the front frame and in `front-lit/r1.webp`; regions 3, 4, 7 and 9 sit where the print puts them; the turn's aria text agrees with the yaw note in `regions.json`. The print's organ drawings (p. 1, p. 7) and the biliary schematic (p. 14) are not reproduced; the printed pages still show them.

### To fix

1. **`ap1` link label "The first 10 minutes"** (`#abdo-handbook--stab`). The title was left out on purpose (SOURCE-CHECK N2, gap note on `stab`), but this link still prints it. Relabel, for example "Stabilise first", as the menu does.
2. **`script` gap: "Listen to it read aloud in the Malay script tab below."** No `READ['abdo-script-ms']` exists in `src/parts` (only the reference in `data16.js` line 469), and there is no Malay script audio in `app/audio/` (only `adv-abdo-en.mp3`). `engine.js` line 1392 shows the Listen bar only when the READ entry exists, so the tab has none and the sentence is untrue. Remove it, or record the narration first. Under the narration rule, Malay goes to VoiceStudio, and that needs Krishna's go-ahead. The comments on `data16.js` lines 70 and 468 say the same.
3. **`dcq` "Not all met" goes to `obs` (Observe) only.** This routing is the app's own. The print's Admit column covers some of the same failures: "Persistent vomiting/dehydration, uncontrolled pain, high-risk comorbidity, failed outpatient plan or unreliable follow-up". A patient who fails "Oral fluids tolerated" or "Safe support, clear follow-up ..." is sent to Observe where the print says Admit / urgent specialty. Route "Not all met" back to `reas`, or to a choice of Admit or Observe.
4. **`adm` item "Hand over with a short structured handover (ISBAR) and make the next action explicit."** This is app wording made from p. 23's title and subtitle, and it drops "and a discharge explanation the patient understands". Quote p. 23 as printed instead, for example as the hint of `disp` or `isbar`: "Make the next action explicit. Use a short structured handover and a discharge explanation the patient understands."
5. **"hubungi 999" (p. 23) has no note.** SOURCE-CHECK N34 rates it NOT IN SOURCE (uncited), the same class as N2 ("The first 10 minutes"), which was left out with a gap note. Krishna to decide: keep it with a note on the `script` node and tab (it is the Malaysian emergency number, not a dose), or treat it like N2.
6. **Reference [4] changed.** "Full text read via the PDF linked by PKD Melaka Tengah." is dropped, and the printed Drive link (drive.google.com/file/d/1IFsj4pQrGJi5k5QYGy_uPoxFZuJqTWpC/view) is replaced by `#dengue-cpg`. This is not among the listed intended changes. If it is deliberate (SOURCE-CHECK could not identify the Drive file's owner), record it in a note; otherwise restore the printed wording and keep the in-app link as an addition.
7. **Reference [40]'s annotation** still reads "pancreatic enzyme activity at least three times the upper limit", while `tests` and `up` show ">3 times". Either add a short note to the Sources tab (the handbook's description of [40], which could not be read), or leave it, knowing the app shows both wordings.

### Worth considering (not errors)

- p. 1: "This review is not independent clinical peer review." is not shown anywhere. It qualifies "reviewed v2", which the app repeats in `src`, the menu hint and the QR footer. Add it to the menu hint or `notesFoot`. Also missing: "Children and pregnancy have dedicated cautions."; the Malaysian context box; the subtitle "A practical visual handbook for emergency assessment and safe decision-making".
- p. 3 "Escalate on physiology or clinical concern" is only on `esc`, after "One or more present". Show it on `danger` itself (as info), so that "None of these" does not skip it.
- p. 24 "Four questions to ask on every shift" is only on `cs6a`. Put it on the `cases` hint as well.
- Quick reference p. 2: the five "Selected original sources" are plain text in the tab; the print links them. The links are already in the Sources tab as [2], [4], [14], [17] and [15], except the NG126 overview page.
- p. 7: the print sets "ACS / aortic disease" (region 2) and "Ischaemia / AAA" (region 5) in bold, marking the dangerous alternatives. The app does not.
- p. 14: the biliary schematic (gallbladder, bile duct, pancreas) is not drawn in the app.
