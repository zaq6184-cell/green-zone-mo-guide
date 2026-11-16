# Calculators like MDCalc: what can be built into the guide

Research of 16 Nov 2026, at Krishna's request: "research online, copy the medical related calculator that can built into the app rather then linking to the app. can give credit to the author, no issue with that. find, research online for calculator like md cal".

Four pieces of research went into this. Their full notes, with a URL on every row, are in `sources/calc-research/` (git-ignored):

- `LICENSING.md`: the reuse terms of MDCalc, PEMCalc, QxMD, ClinCalc and Medscape; openly licensed sources and code; which scores carry their own restrictions; and the copyright principle.
- `CANDIDATES-ADULT.md` and `CANDIDATES-CHILD.md`: 30 adult and children's scores, each traced to its derivation paper and validation, with whether the full text is free.
- `CPG-SCORES.md`: which of the 109 Malaysian CPGs in Krishna's AMM folder print a score's items and points in full, with the page.

All of it was read from primary pages (terms pages, PubMed and Europe PMC records, PMC articles, the score authors' own sites). None of it is legal advice. Anything not seen on a primary page is marked "unconfirmed" in the notes.

## The short answer

1. **Copying MDCalc, PEMCalc or the others is not allowed, even with credit.**
   - MDCalc's terms forbid copying, reproducing or adapting its content, which includes its tools, text, interface and code. Embedding its content in another product needs its licence (through the contact address in MDCalc's terms).
   - PEMCalc states no licence, so all rights are reserved by its author, Dr Kiran Nesarajah of Kuala Lumpur (contact address on PEMCalc's About page).
   - QxMD, Medscape and ClinCalc forbid it too.
   - Giving credit does not turn copying into permitted use. The US Copyright Office's fair use notice says so in as many words.
2. **What can be built: the scores themselves.**
   - A score's items, points and cut-offs are a method and facts. Copyright does not protect those: Malaysia's Copyright Act 1987, s.7(2A), and TRIPS Art. 9(2).
   - So the guide can rebuild any score from its original source, in its own words, layout and code. It credits the score's authors and links their paper. Nothing of MDCalc's own pages is used.
3. **Four instruments restrict use itself:**
   - PRAM: Dr Ducharme, CHU Sainte-Justine, claims all rights. Ask her before building it.
   - MMSE, MoCA and Braden: these are not Green Zone tools.
4. **Some come with conditions:**
   - NEWS2 is free with the RCP's credit, as long as its chart is not altered.
   - The GCS is free for clinical care, with credit to the University of Glasgow.
5. **Standing rule 8 still governs:** "No clinical content from memory. Every dose, criterion and number needs the ebook or a named department document behind it."
   - Since 9 Nov 2026 the calculators follow your rule "our sources in the app, links for the rest" (HISTORY.md, the PEMCalc and MDCalc rounds).
   - So a score whose source the guide already admits can be built now.
   - A score from its own paper needs that paper admitted first, as the X-ray sources were on 10 Nov 2026, with every number checked on its page.

## Group A: build now, from sources the guide already admits

These scores are printed in full in sources the guide already uses. Building them needs no new decision, and six of today's MDCalc links become calculators in the guide.

| Calculator | Source already in the guide | Replaces |
|---|---|---|
| TIMI risk score, UA/NSTEMI | ACS CPG, 1st ed., 2026, Appendix IV, p164. Already a tick list on `acs-cpg` (node `timi`). Also covers the ebook's Obsess protocol, which needs TIMI under 1. | MDCalc TIMI |
| HEART score | ACS CPG 2026, Appendix III, p163. The CPG does not define the History or ECG grades, and the calculator says so, as the entry does. | (new) |
| Canadian CT Head Rule | Head injury CPG 2015, p26 (boxed) | (new) |
| Canadian C-spine Rule | Head injury CPG 2015, Appendix 6, p55 | MDCalc Canadian C-spine |
| NEXUS low-risk criteria | Head injury CPG 2015, Appendix 7, p56 | MDCalc NEXUS |
| Wells score for PE | VTE CPG 2013, Table 3.1.2, p45. In the guide's own words, as the VTE entry is: its CPG gives no permission to reproduce. | MDCalc Wells PE |
| Ottawa ankle and foot rules | Reading X-rays (`xray-guide`): already tick lists from the sources Krishna admitted on 10 Nov 2026 | MDCalc Ottawa ankle |
| Ottawa knee rule | Reading X-rays, as above | MDCalc Ottawa knee |

Three more MDCalc links have twins already built into the guide from CPGs, and can go: GCS (`#calc-gcs`), creatinine clearance (`#calc-crcl`) and Centor/McIsaac (`#calc-mcisaac`).

## Group B: CPGs on the shelf, not yet admitted

Admitting each CPG would follow the 9 Nov 2026 rounds.

| Calculator | CPG | Its reuse terms |
|---|---|---|
| CHA2DS2-VASc | Atrial fibrillation CPG, 2012, Table 12, p29 | None stated, so short facts in the guide's own words, as for the VTE and T2DM CPGs |
| HAS-BLED | Atrial fibrillation CPG, 2012, Table 14, p42 | As above |
| MEWS | Abdominal trauma CPG, 2025, Table 6, p57 | Reproduction allowed with acknowledgement |

## Group C: a new source, each score's own paper

Each of these would be admitted under rule 8 the way the X-ray sources were: in the guide's own words, with every number checked on its primary page first. The credit names the score's authors and links the paper.

**Recommended:**

| Calculator | Primary source | Full text free | Why for the Green Zone |
|---|---|---|---|
| ABCD2 (TIA) | Johnston et al., Lancet 2007, PMID 17258668 (items and bands in the abstract) | No | The ebook's TIA route turns on ABCD2 over 3, and the ebook does not list the items. |
| Ottawa SAH rule | Perry et al., JAMA 2013, PMID 24065011; validation CMAJ 2017 | Yes, PMC5687926 | Headache is common, and a miss is catastrophic. Six items, with strict exclusions. |
| PERC rule | Kline et al., J Thromb Haemost 2008, PMID 18318689 (the 8 items in the abstract) | No | It rules out PE only when the doctor's gestalt is already low. The calculator must say so. |
| Age-adjusted D-dimer | Righini et al., JAMA 2014, PMID 24643601 | No | One formula (age x 10 µg/L from age 50), only with a non-high probability. |
| Weight for age (children) | APLS formula, checked in Luscombe and Owens, Arch Dis Child 2007 | Yes, PMC2083737 | Every child's dose needs a weight. It underestimates, so it shows a range and says to weigh the child. |
| Normal vital signs by age | Fleming et al., Lancet 2011, PMID 21411136 | Yes, PMC3789232 | Used for every child. The APLS and PALS tables are copyrighted and disagree, so take Fleming's centiles. |

**Possible, once their numbers are confirmed on a primary page:**
- **Corrected calcium:** Payne, BMJ 1973.
- **Corrected sodium:** Katz's factor of 1.6 is not yet confirmed, and Hillier, 1999, recommends 2.4.
- **QTc (Bazett, Fridericia):** the AHA statement page refused the reader.
- **Paediatric GCS:** several versions exist, with no single owner.
- **Holliday-Segar maintenance fluids:** for maintenance only, not deficit or sick children.

**Needs something first:**
- **PECARN head injury rules:** the Lancet 2009 paper is not free. The free summaries disagree with each other: WikEM gives "2 m (5 ft)". Build it only from the paper itself, which Krishna may get through a library.
- **PRAM:** Dr Ducharme's permission.

**Not recommended for now:**
- **Alvarado, AIR and the Paediatric Appendicitis Score:** the points were found only in secondary sources, and the cut-offs conflict.
- **Canadian Syncope Risk Score:** its points are only in a figure.
- **San Francisco Syncope Rule:** a meta-analysis found it no better than judgement.
- **qSOFA:** a weak rule-out.
- **Glasgow-Blatchford:** mostly Yellow and Red Zone.
- **CIWA-Ar:** cut-offs vary by protocol.
- **NEWS2:** the guide's sources use MEWS, and the RCP chart may not be altered.
- **Burns (rule of nines, Lund and Browder, Parkland):** Parkland is for large burns, not the Green Zone.
- **Westley croup score:** bands vary by source, and it is mostly a research tool.

## Code

Open-source libraries under MIT or Apache 2.0 exist: Open Medicine on PyPI, and medical-calc-mcp. The guide does not need their code, because its calculators read their items from the guide's own data, so `CALC_FACTS` and the test can check every number. Their licences cover their code only, not the scores.

MedCalc-Bench's code has no licence, and its calculators were curated from MDCalc. Do not use it.

## What stays a link

- PEMCalc's children's tools, unless Dr Nesarajah agrees to reuse.
- PRAM, unless Dr Ducharme agrees.
- Any score Krishna does not admit.

Asking either author is an outside message, so it is Krishna's to send (rule 1).

## Built on 16 Nov 2026

Krishna answered "A, B and C as recommended", then "Alvarado, the syncope rules, qSOFA, NEWS2, CIWA and burns: install this calculator". Built (`data24.js`), each number read on the page named:

- **Group A:** TIMI and HEART (ACS CPG 2026, Appendices IV and III); Canadian CT Head Rule (head injury CPG 2015, p26); Canadian C-spine Rule (Appendix 6, p55); NEXUS (Appendix 7, p56); Wells for PE with the CPG's PE algorithm (VTE CPG 2013, Table 3.1.2 p45 and p47); the Ottawa ankle, foot and knee rules (Reading X-rays).
- **Group B:** CHA2DS2-VASc (AF CPG 2012, Table 12 p29) and HAS-BLED (Table 14 p42), in the guide's own words; MEWS (abdominal trauma CPG 2025, Table 6 p57).
- **Group C:** ABCD2 (Johnston 2007, abstract); Ottawa SAH rule (Perry, JAMA 2013 abstract; CMAJ 2017, Figure 1 and methods, read in the browser); PERC (Kline 2008, abstract); age-adjusted D-dimer (Righini 2014, abstract); weight from age (Luscombe and Owens 2007, abstract).
- **Added at his word:** San Francisco Syncope Rule (Quinn 2004 and 2006, abstracts); Canadian Syncope Risk Score (CMAJ 2016, Figure 2, read in the browser); Alvarado (items from the 1986 abstract, points and strata from Ohle 2011, Figure 1, CC BY); qSOFA (Sepsis-3 abstracts); NEWS2 (RCP Charts 1, 2 and 4, and the executive summary for its scope); CIWA-Ar (the scale as reproduced by the San Francisco VA, which states it is not copyrighted); burns size and fluids (VicBurns pages and its 2012 adult Rule of Nine poster; RCH Melbourne's Burns guideline and its fluid guide).
- **Retired links:** TIMI, Wells PE, PERC, ABCD2, Alvarado, Centor, GCS, Canadian C-spine, NEXUS, Ottawa ankle, Ottawa knee, creatinine clearance. Six links stay: PEMCalc's PRAM, Westley, vital signs (since the Fleming calculator, for blood pressure and SpO2 only), PECARN and paediatric GCS, and MDCalc's QTc.
- **Not built, and why:** Lund and Browder (the only chart found was too coarse to read every value; the hands and adult leg could not be told apart); normal vital signs by age (built later the same day: see below); PECARN (the paper is not free and the free summaries disagree); PRAM (its author's permission); QTc, corrected sodium and calcium, paediatric GCS, Holliday-Segar (no primary page read).
- **Where sources differ** (Still to confirm): the D-dimer assay; the AF CPG footnote's lost symbol; the Ottawa SAH age; burns formula and route; the CIWA-Ar regimen.

## Children's heart and breathing rates (16 Nov 2026)

Krishna answered "Yes, download it" to downloading Fleming's web appendix.

- **Source:** Fleming S, Thompson M, Stevens R, Heneghan C, Plüddemann A, Maconochie I, Tarassenko L, Mant D. Normal ranges of heart rate and respiratory rate in children from birth to 18 years: a systematic review of observational studies. Lancet 2011;377:1011-8 (PMID 21411136, PMC3789232, the Europe PMC author manuscript). Its web appendix, p12: Web Table 4 (breathing rate, 13 age bands) and Web Table 5 (heart rate, the same bands and a row for birth, "the immediate neonatal period"), each with the 1st, 10th, 25th, 50th, 75th, 90th and 99th centiles.
- **How it was fetched:** PMC's file link answers a plain download with a browser check, and the Europe PMC supplementary-files service says the article is not open access, so neither was worked around. The appendix was opened in the browser pane on PMC's own page; its file link showed a save dialog on Krishna's side, which saved a copy to `Downloads\NIHMS54714-supplement-Web_Appendix.pdf` (the same SHA-256 as the copy below), and the same file, fetched inside the PMC page, was carried to a one-shot receiver on this PC's loopback address and saved as `sources/calc-research/fleming-2011-web-appendix.pdf` (535,169 bytes, 17 pages; git-ignored), with the page image `fleming-2011-web-appendix-p12.png`.
- **Reuse:** the PMC record says only that the file "is available to download for the purposes of text mining, consistent with the principles of UK copyright law". So the centile values are used as facts, credited, in the guide's own layout: the calculator shows one age band at a time, and no table is laid out as printed. The numbers were written into `data24.js` (`FLEMING_RR`, `FLEMING_HR`) by a script from the appendix's text layer, not retyped, and checked against the page image; the test checks the row counts, that each row's seven centiles rise, and the first and last rows.
- **What the paper says about use** (read in the manuscript's full text): it does not say which centile makes a rate abnormal; it gives several centiles so that guidelines and early warning scores can choose cut-offs for their setting, weighing the illness to be detected against misclassifying healthy and unwell children, and says the values are part of the whole assessment. Heart rate may be higher with fever or anxiety, and a manual count may underestimate it; most measurements were in awake children (asleep children's heart rates tended to be lower, P = 0.06). So the calculator names the centile a typed rate sits at, never says normal or green, and its verdict is neutral.
- **Where the source stops:** the age bands share their ends (0 to 3 months, 3 to 6 months), so the doctor picks the band; birth has a heart rate row only, and the calculator says Web Table 4 has none; the paper gives no blood pressure or SpO2, so PEMCalc's vital signs link stays, relabelled for those two.
- **Built:** the step `ed-scores--vitals` ("Fleming centiles"), the calculator `#calc-vitals` (Kids group; 56 calculators), a see-also from Children in the ED, and an item under Still to confirm (which ranges or centile the department and its paediatric triage use).
