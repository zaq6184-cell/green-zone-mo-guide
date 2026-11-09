/* ================= Academy CPG round (9 Nov 2026): national CPGs from the Academy of Medicine of Malaysia list =================
   Krishna asked on 9 Nov 2026 for the CPGs on the Academy of Medicine of Malaysia list (https://www.acadmed.org.my/index.cfm?&menuid=67)
   to be reviewed and the ones the Green Zone needs added, interactive; he chose the six recommended in CPG-RUN-THROUGH.md. These two
   are built from the official MaHTAS PDFs (mymahtas2.moh.gov.my, downloaded 9 Nov 2026), each reviewed line by line
   (CPG-REVIEW-ASTHMA.md, CPG-REVIEW-GOUT.md). Every item names its printed CPG page. Copyright MaHTAS: reproduced with
   acknowledgement, not changed. Quoted as printed, including the CPGs' own spelling. Neither replaces the ebook (rule 5):
   where they differ is an open item. */

/* ----- CPG Management of Asthma in Adults, 2nd edition (MaHTAS, 2024) -----
   Severity is graded by Table 9 (p37), the table Recommendation 8 points to; where Algorithms 3 and 4 differ, both are quoted.
   The action plan (Appendix 5) is an English-only template with blanks, so it is a reference tab, not a leaflet. The ebook's
   asthma pathway (citing the 2017 edition) stays as written. Printed page = PDF page minus 19; the algorithms are p xi to xiv. */
P['asthma-cpg'] = {
  title:'Asthma in adults: CPG 2nd edition', grp:'cpg', src:'CPG Asthma in Adults, 2nd ed. (2024)', isnew:true, hero:'asthcpg',
  lead:'The national guideline (2024): grade an exacerbation by Table 9, treat it by the emergency department algorithm, then admit, refer or discharge with an action plan. Drugs, the action plan and the treatment steps are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Asthma in Adults, 2nd edition (MaHTAS, 2024), for adults (≥18 years old). It excludes asthma-COPD overlap syndrome and in-patient asthma care (p vii). The ebook pathway cites the 1st edition (2017).', opts:[
      ['Grade and treat an exacerbation (Algorithm 4)','risk'],
      ['Admit, or ready to go home? (7.4 and 7.5)','adm'],
      ['Pregnant patient (8.2)','preg'],
      ['Refer to a respiratory physician? (chapter 9)','ref']]},

    /* Algorithm 4, Management of asthma exacerbation in emergency department (p xiv), graded by Table 9 (p37) */
    risk:{step:'Assess the risk of asthma-related death with the clinical evaluation', items:[
      'A focused history should include time of onset, trigger factors, severity of symptoms, risk factors for asthma-related death, allergies and current asthma medications including doses, adherence pattern and response to treatment (7.1, p36)',
      'Table 8 (p36), related to asthma exacerbation: previous exacerbations requiring mechanical ventilation and intubation; frequency of hospitalisation or emergency visits in the past year',
      'Related to asthma control: currently using or having recently stopped using oral corticosteroids; not currently using ICS; poor adherence to ICS-containing medications; over-use of SABAs; poor adherence to a written asthma action plan; lack of a written asthma action plan',
      'Related to co-morbidity e.g. pneumonia, diabetes and arrhythmias',
      'Others: psychological, psychiatric and social conditions that cause difficult treatment adherence; confirmed food allergy or anaphylaxis'], next:'lt'},
    lt:{check:'any', q:'Any life-threatening feature?', hint:'Table 9 (p37): Not all parameters need to be met to classify the severity. Classify using the most severe parameters. SpO2 <90%, PaO2 <60 mmHg, confusion, drowsiness and hypotension are printed for severe too: by that note they are listed here. Whether one alone makes an exacerbation life-threatening is still to confirm.',
      items:['Level of consciousness: confused/drowsy/coma','Speech: unable to speak','Respiratory rate: <12/min','Pulse rate: bradycardia/cardiac arrest','Blood pressure: hypotension','Use of accessory muscles: paradoxical chest movement/absent','Breath sounds: silent chest','Oxygen saturation (SpO2): <90%','PaO2: < 60 mmHg','PaCO2: >45 mmHg'],
      opts:[['Yes, present','ltx'],['None','sv']]},
    sv:{check:'any', q:'Any severe feature?', hint:'Table 9 (p37). Listed: the severe cells no other column shares. Alert, normal blood pressure, wheezing and PaCO2 <40 mmHg or normal are printed for milder grades too; the cells shared with life-threatening were asked at the step before.',
      items:['Speech: speaks in words','Respiratory rate: >25/min','Pulse rate: >120/min','Use of accessory muscles: very evident'],
      opts:[['Yes, present','svt'],['None','md']]},
    md:{check:'any', q:'Any moderate feature?', hint:'Table 9 (p37). Left out: alert, normal blood pressure and wheezing (printed for mild too) and PaCO2 <40 mmHg (printed for severe too). An SpO2 of 95% is in both mild (≥95%) and moderate (90 – 95%). Algorithms 3 and 4 print mild as SpO2 <95% with accessory muscle use present; Table 9 prints ≥95% and absent. Mild and moderate share one treatment box in Algorithm 4.',
      items:['Speech: speaks in phrases','Respiratory rate: >20/min','Pulse rate: 100 – 120/min','Use of accessory muscles: present','Oxygen saturation (SpO2): 90 – 95%','PaO2: <80 mmHg'],
      opts:[['Yes, present: moderate','mmt'],['None: mild','mmt']]},
    mmt:{step:'Mild or moderate: initial management (Algorithm 4, p xiv)', items:[
      'SABA 4 - 10 puffs by pMDI + spacer (preferable patient\'s own) or via nebuliser, repeat every 20 minutes for 1 hour',
      'In mild to moderate asthma exacerbations, pressurised metered dose inhaler via spacer is the preferred method of delivery (p39)',
      'Nebulised salbutamol (Appendix 9, p86): 2.5 to 5 mg every 20 minutes for the first hour (3 doses)',
      'Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat (the Prednisolone by weight calculator works out the range)',
      'The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily (p40)',
      'Controlled oxygen (if available): target saturation 93 to 95%',
      'Pregnant: early referral to critical care is recommended for moderate to severe asthma exacerbations (8.2, p50)'], next:'mmr'},
    mmr:{q:'Clinical improvement?', hint:'A footnote on Algorithm 4 (p xiv) reads: Improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air. The algorithm does not mark which arrow it belongs to. Monitoring and evaluation of severity of asthma exacerbation should include mental status, vital signs and respiratory assessment (Recommendation 13, p42).',
      opts:[['Clinical improvement','dc'],['No clinical improvement','svt']]},
    svt:{step:'Severe, or no improvement: treatment (Algorithm 4, p xiv)', items:[
      'SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour',
      'Nebulised salbutamol (Appendix 9, p86): 2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 to 10 mg every 1 to 4 hours as needed, or 10 to 15 mg/hour by continuous nebulisation',
      'Ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours',
      'Controlled oxygen: target saturation 93 to 95%',
      'Consider HFNC',
      'IV hydrocortisone 100 mg stat',
      'IV magnesium sulphate 2 g infusion over 20 minutes (single dose)'], next:'svr'},
    svr:{q:'Clinical improvement?', hint:'Algorithm 4 footnote (p xiv): improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air. In severe or life-threatening asthma, monitor vital signs continuously or at least every 15 – 30 minutes (7.3), and arterial blood gases should be done (Recommendation 13, p42).',
      opts:[['Clinical improvement','svadm'],['No clinical improvement','ltx']]},
    svadm:{end:'admit', title:'Monitoring and evaluation, then refer for admission', items:[
      'Monitoring and evaluation: conscious level, SpO2, PR, BP; PaO2 and PaCO2; CXR for complication and alternative diagnosis',
      'All patients with progressive deterioration following initial treatment and those with severe or life-threatening asthma should be admitted (7.4, p42)',
      'Vital signs: monitor continuously or at least every 15 – 30 minutes, including SpO2, respiratory rate, heart rate and blood pressure (7.3, p42)',
      'A rising or normal PaCO2 may indicate impending respiratory arrest (7.3, p42)'],
      links:[['#asthma-zone','Asthma Zone flow: uptriage to R1']],
      gap:'CPG Algorithm 4 (p xiv), 7.3 to 7.4 (p41–42) and Recommendation 14 (p43). The algorithm gives this branch no discharge route. The CPG assigns no zone or MTS level: in the Green Zone, the Asthma Zone flow (memo, 13 Nov 2025) has the uptriage.'},
    ltx:{end:'refer', title:'Life-threatening: treat, and refer early to critical care', items:[
      'SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour',
      'Ipratropium bromide nebulizer 0.5 mg every 4 - 6 hours',
      'Controlled oxygen: target saturation 93 to 95%',
      'Consider early intubation: patients with signs of respiratory distress, worsening hypoxaemia, hypercapnia or altered mental status or also failure to respond to maximal medical therapy',
      'IV hydrocortisone 100 mg stat (if not given earlier)',
      'IV magnesium sulphate 2 g infusion over 20 minutes (single dose) (if not given earlier)',
      'Early referral to critical care',
      'pMDI with spacer should not be used in life-threatening asthma (p39)',
      'Then monitoring and evaluation (conscious level, SpO2, PR, BP; PaO2 and PaCO2; CXR for complication and alternative diagnosis), and refer for admission and/or critical care'],
      links:[['#asthma-zone','Asthma Zone flow: uptriage to R1']],
      gap:'CPG Algorithm 4 (p xiv), 7.2 (p38–39) and Recommendation 14 (p43). Parenteral β2-agonists: only for ventilated patients or those with life-threatening asthma in critical care settings who do not respond to other treatments (p39). The CPG assigns no zone or MTS level.'},

    /* 7.4 Criteria for admission (p42–43), 7.5 Criteria for discharge and Recommendation 14 (p43) */
    adm:{check:'any', q:'Must the patient be admitted?', hint:'7.4 (p42). Grade the severity by Table 9: Grade and treat, or the Severity tab.',
      items:['Severe or life-threatening asthma','Progressive deterioration following initial treatment'],
      opts:[['Yes, present','admx'],['None','dc']]},
    admx:{end:'admit', title:'Admit', items:[
      'All patients with progressive deterioration following initial treatment and those with severe or life-threatening asthma should be admitted (7.4)',
      'Early referral to critical care team should be considered for patients with asthma exacerbation who respond poorly to optimal treatment (Recommendation 14)'],
      links:[['#asthma-zone','Asthma Zone flow: uptriage to R1']], gap:'CPG 7.4 (p42–43) and Recommendation 14 (p43).'},
    dc:{check:'all', q:'May the patient go home with an asthma action plan?', hint:'Recommendation 14 (p43). There are no specific parameters that assure safe discharge of patients with exacerbation; the decision is usually the result of the doctor\'s clinical observation of the patient\'s condition (7.5).',
      items:['Resolution of symptoms after treatment','Able to follow their prescribed treatment at home'],
      opts:[['Both met','dcf'],['Not both met','nohome']]},
    dcf:{check:'any', q:'Any other factor that may be considered for admission?', hint:'7.4 (p42).',
      items:['Older age','Use of more than eight SABA puffs in previous 24 hours','Past history of severe exacerbations (e.g. intubations, asthma admissions)','Past history of unscheduled clinic and emergency department visits requiring use of OCS','Living alone/socially isolated','Psychological problems','Physical disability'],
      opts:[['Yes, present','consider'],['None','home']]},
    consider:{end:'admit', title:'Consider admission', items:[
      'These are other factors that may be considered for admission (7.4)',
      'Patients may be discharged from hospital if they can follow their prescribed treatment at home, have few symptoms or need less reliever medications (7.5)'],
      gap:'CPG 7.4 (p42) and 7.5 (p43). The CPG leaves the decision to the doctor, and gives no age for older age.'},
    home:{end:'discharge', title:'Discharge with an asthma action plan and a follow-up plan', items:[
      'Continue prednisolone (5 - 7 days)',
      'The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily or 200 mg of intravenous hydrocortisone in divided doses. This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction (p40)',
      'Continue usual treatment',
      'These patients should continue their maintenance inhaled corticosteroids (Recommendation 11, p40)',
      'AAP: the AAP should be completed and explained to the patient by the attending healthcare provider (5.2, p13). The templates are in the Action plan tab',
      'Ensure follow-up at primary care clinic within 1 - 2 weeks',
      'The follow-up plan should include a referral letter to a clinic for the patient to be seen within seven days (7.5, p43)',
      'Discuss strategies to improve asthma management, including medications adherence, proper inhaler techniques and an asthma action plan (7.5): the Inhaler and spacer tab'],
      links:[['#asthma-zone','Asthma Zone: department discharge'],['#asthma','Ebook pathway'],['#calc-apef','Action plan PEF zones']],
      gap:'CPG Algorithm 4 (p xiv), 7.2 (p40), 7.5 and Recommendation 14 (p43). Algorithm 4 asks for follow-up within 1 - 2 weeks; 7.5 asks for a clinic within seven days. Algorithm 4 says continue usual treatment and does not say whether to start ICS-containing therapy in a patient not on it, although SABA should not be used as monotherapy (Recommendation 5, p25) and all asthma patients should be on ICS-containing therapy (Recommendation 6, p31).'},
    nohome:{end:'neutral', title:'Does not meet Recommendation 14 for discharge', items:[
      'Patients with asthma may be discharged with asthma action plan if they have resolution of symptoms after treatment and are able to follow their prescribed treatment at home (Recommendation 14)',
      'Patients may be discharged from hospital if they can follow their prescribed treatment at home, have few symptoms or need less reliever medications (7.5)'],
      gap:'CPG 7.5 and Recommendation 14 (p43). The two wordings differ (resolution of symptoms, or few symptoms), and the CPG does not say what to do for a patient who improved but meets neither: it is not in the source.'},

    /* 8.2 Pregnancy and breastfeeding (p49–51), Recommendation 16 (p51) */
    preg:{end:'neutral', title:'Pregnancy: treat an exacerbation as in a non-pregnant patient', items:[
      'The treatment of asthma exacerbations is the same as in non-pregnant patients',
      'Prompt treatment with bronchodilators, oxygen and systemic corticosteroids is needed to avoid foetal hypoxia',
      'Magnesium sulphate can be administered if indicated',
      'Oxygen saturation should be maintained between 94 and 98%',
      'Continuous foetal monitoring should be considered',
      'Early referral to critical care is recommended for moderate to severe asthma exacerbations',
      'ICS is safe and remains the preferred long-term maintenance and should be continued; inhaled β2-agonists and LTRA are safe and should be continued; step-down treatment should be deferred until after delivery',
      'During labour: in patients who are on prednisolone exceeding 7.5 mg/day for more than 2 weeks prior to delivery, IV hydrocortisone 100 mg every 6 to 8 hours should be administered during labour to prevent adrenal insufficiency',
      'Asthma patients should be encouraged to breastfeed and their asthma medications should be continued during lactation',
      'Asthma in pregnancy is an indication for referral (chapter 9, p58)'],
      links:[['#asthma-cpg--ref','Referral to a respiratory physician']],
      gap:'CPG 8.2 (p50), Recommendation 16 (p51) and chapter 9 (p58). The target in pregnancy, 94 and 98%, differs from Algorithm 4 (93 to 95%).'},

    /* Chapter 9, Referral (p58) */
    ref:{check:'any', q:'Any indication for referral to a respiratory physician?', hint:'Chapter 9 (p58): timely referral to a respiratory physician or physicians experienced in asthma management.',
      items:['Difficulty in confirming the diagnosis of asthma','Severe or uncontrolled asthma','Severe or life-threatening asthma exacerbations','Asthma in pregnancy','Frequent unscheduled healthcare visits for exacerbations','Frequent bursts or ongoing use of OCS','Asthma with multiple co-morbidities','Asthma with concurrent food allergy or anaphylaxis','Suspected occupational asthma'],
      opts:[['Yes, present','refy'],['None','refn']]},
    refy:{end:'refer', title:'Refer to a respiratory physician or a physician experienced in asthma management', items:[
      'Timely referral to a respiratory physician or physicians experienced in asthma management is essential',
      'Suspected occupational asthma: refer to a specialist for further evaluation; confirmed cases should be notified to the Department of Occupational Safety and Health (Recommendation 17, p53)'],
      links:[['#outpatient-referral','Clinic referrals from the ED']],
      gap:'CPG chapter 9 (p58). It does not say how soon, or to which clinic: in HKL, use the department\'s referral routes.'},
    refn:{end:'neutral', title:'No referral indication in chapter 9', items:[
      'Following asthma exacerbation, all patients should be given a follow-up plan upon discharge (Recommendation 14)',
      'The follow-up plan should include a referral letter to a clinic for the patient to be seen within seven days (7.5)'],
      gap:'CPG chapter 9 (p58), 7.5 and Recommendation 14 (p43).'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Severity', notes:[
      {h:'Table 9: classification of severity of asthma exacerbation', src:'CPG p37, adapted from GEMA 5.3 (2023). Note: Not all parameters need to be met to classify the severity. Classify using the most severe parameters.', table:{head:['Clinical parameters','Mild','Moderate','Severe','Life-threatening'], rows:[
        ['Level of consciousness','Alert','Alert','Alert/confused/drowsy','Confused/drowsy/coma'],
        ['Speech','Normal','Speaks in phrases','Speaks in words','Unable to speak'],
        ['Respiratory rate','Normal/','>20/min','>25/min','<12/min'],
        ['Pulse rate','<100/min','100 – 120/min','>120/min','Bradycardia/cardiac arrest'],
        ['Blood pressure','Normal','Normal','Normal/hypotension','Hypotension'],
        ['Use of accessory muscles','Absent','Present','Very evident','Paradoxical chest movement/absent'],
        ['Breath sounds','Wheezing','Wheezing','Wheezing','Silent chest'],
        ['Oxygen saturation (SpO2)','≥95%','90 – 95%','<90%','<90%'],
        ['PaO2','Normal','<80 mmHg','<60 mmHg','< 60 mmHg'],
        ['PaCO2','Normal','<40 mmHg','<40 mmHg or normal','>45 mmHg']]}},
      {h:'Where the algorithms print it differently', src:'Algorithms 3 and 4 (p xiii and xiv) against Table 9 (p37). Each is quoted as printed.', items:[
        'Mild SpO2: <95% (Algorithms 3 and 4); ≥95% (Table 9)',
        'Mild use of accessory muscles: Present (Algorithms 3 and 4); Absent (Table 9)',
        'Mild respiratory rate: Normal (Algorithms 3 and 4); Normal/ (Table 9, with nothing after the slash)',
        'Moderate PaCO2: <40 mmHg or normal (Algorithm 3); <40 mmHg (Algorithm 4 and Table 9)',
        'Printed in two columns: SpO2 <90% and PaO2 <60 mmHg (severe and life-threatening); 95% (mild ≥95% and moderate 90 – 95%); normal PaCO2 (mild, and severe <40 mmHg or normal); PaCO2 <40 mmHg (moderate and severe)',
        'Table 9 has no PEF row, although the text before it says symptoms, signs and lung function measurements (PEF/FEV1) are used to classify; PEF or FEV1 may not be applicable to be used in acute asthma exacerbation (p37)']},
      {h:'Assessment, monitoring and evaluation', src:'CPG 7.1 (p36–37), Recommendation 8 (p38), 7.3 (p41–42), Recommendation 13 (p42) and chapter 3 (p4). Table 8, the risk factors for asthma-related death, is the first step of Grade and treat.', items:[
        'Rapid clinical assessment of severity should be performed for all asthma exacerbation. Treatment should be initiated immediately based on severity of asthma exacerbation (Recommendation 8).',
        'The physical examination includes vital signs assessment, evaluation of severity and, consideration of complications (e.g. pneumothorax) and differential diagnoses (e.g. heart failure).',
        'Chest X-ray (CXR) is not routinely indicated in all patients with asthma exacerbation. It should be considered in patients with atypical symptoms, suspected complications or diagnostic uncertainty in asthma management.',
        'Restlessness is an early sign of hypoxia.',
        'Oxygen saturation levels of <90% indicates the need for aggressive management. Saturation should be assessed before oxygen is commenced or five minutes after oxygen is removed or when saturation stabilises.',
        'Arterial blood gas (ABG) measurement is not routinely required. It should be considered for patients with PEFR <50% or those who do not respond to initial treatment or are deteriorating.',
        'A PaO2<60 mmHg and a normal or increased PaCO2 (especially >45 mmHg) indicates respiratory failure.',
        'Chest X-ray should be considered in patients who do not respond to treatment or if an alternative diagnosis or complication e.g. pneumothorax, pneumomediastinum or pneumonia is suspected (7.3).',
        'Severe or life-threatening: vital signs, monitor continuously or at least every 15 – 30 minutes, including SpO2, respiratory rate, heart rate and blood pressure; mental status, monitor for any signs of lethargy, restlessness or other changes indicating hypoxia or hypercapnia, or confusion; auscultation, regularly check for changes in breath sounds, rhonchi or silent chest. A rising or normal PaCO2 may indicate impending respiratory arrest.',
        'In severe and life-threatening asthma arterial blood gases should be done (Recommendation 13).',
        'Whenever possible, PEFR should be recorded before treatment is initiated. It should be monitored at 1-hour post treatment and at regular intervals until a clear response has occurred or a plateau is reached (p4).']}
    ]},
    {l:'Drugs', notes:[
      {h:'Oxygen', src:'CPG 7.2 (p38) and Recommendation 9 (p39)', items:[
        'Patients with asthma exacerbation are often hypoxaemic and may require oxygen therapy.',
        'Oxygen saturation of ≥94% should be maintained in all hypoxic asthma patients.',
        'In asthma exacerbation in emergency department, high flow nasal cannula should be considered over conventional oxygen therapy.',
        'Algorithm 4 (p xiv): controlled oxygen, target saturation 93 to 95% (if available, in the mild and moderate box). Consider HFNC is printed in the severe box only.',
        'Pregnancy: oxygen saturation should be maintained between 94 and 98% (p50).']},
      {h:'β2-agonists', src:'CPG 7.2 and Recommendation 10 (p39)', items:[
        'Inhaled β2-agonists is the first-line treatment in asthma exacerbation.',
        'In mild to moderate asthma exacerbations, pressurised metered dose inhaler via spacer is the preferred method of delivery. In severe and life-threatening exacerbations, continuous delivery of nebulised oxygen-driven β2-agonists should be used.',
        'Oral SABA should not be used in asthma exacerbation due to their systemic side effects.',
        'pMDI with spacer should not be used in life-threatening asthma.',
        'There is no current evidence supporting the routine use of parenteral β2-agonists in patients with asthma exacerbation. It should only be reserved for ventilated patients or those with life-threatening asthma in critical care settings who do not respond to other treatments.']},
      {h:'Nebuliser doses in an exacerbation', src:'CPG Appendix 9 H (p85–86). The comment is printed in one cell beside the three. Disclaimer: The information on common asthma medications in this section only serves as a general guide and is not all-inclusive. Doses may be different depending on formulation.', table:{head:['Drug','Asthma exacerbation'], rows:[
        ['Salbutamol 0.5 % nebulising solution','2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 to 10 mg every 1 to 4 hours as needed, or 10 to 15 mg/hour by continuous nebulisation'],
        ['Ipratropium bromide 0.0125% nebulising solution (125 µg/ml); Ipratropium bromide 0.025% nebulising solution (250 µg/ml)','500 µg; repeated doses can be administered (4 to 6 hourly). The time interval between the doses may be determined by the physician. It is advisable not to exceed the recommended daily dose. Daily doses exceeding 2 mg should only be given under medical supervision'],
        ['Ipratropium bromide 0.5 mg and salbutamol 2.5 mg/unit dose vial (UDV)','1 UDV every 4 to 6 hours'],
        ['Comment','Recommend to dilute the drug solution dose to a final volume of 4 – 5 ml in jet nebuliser unless the nebulizer is specifically designed for a small fill volume']]}},
      {h:'Ipratropium bromide', src:'CPG 7.2 (p39), Algorithms 3 and 4 (p xiii and xiv)', items:[
        'A Cochrane systematic review demonstrated that combined inhaled therapy (ipratropium bromide + SABA) was more effective than SABA alone in adult patients with asthma exacerbation presenting to ED in terms of lower risk of hospitalisation, improved FEV1 and improved PEF.',
        'Algorithm 4 gives ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours in the severe and life-threatening boxes; Algorithm 3 (primary care) gives 0.5 mg stat.']},
      {h:'Systemic corticosteroids', src:'CPG 7.2 (p39–40) and Recommendation 11 (p40)', items:[
        'Systemic corticosteroids should be given in all patients with asthma exacerbation.',
        'The medication should always be administered as early as possible. This is important especially in patients not responding to initial treatment with SABA, develop exacerbation while on OCS or has history of previous exacerbations requiring OCS.',
        'The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily or 200 mg of intravenous hydrocortisone in divided doses. This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction.',
        'Administration of corticosteroids by oral, intramuscular (IM) or IV route provides similar biological results, but oral route is less invasive and cheaper.',
        'Algorithm 4: prednisolone 0.5 - 1 mg/kg with a maximum of 50 mg stat (mild and moderate); IV hydrocortisone 100 mg stat (severe and life-threatening).',
        'The CPG gives no formula for the ideal body weight, and no interval for the divided doses of hydrocortisone.']},
      {h:'Inhaled corticosteroids', src:'CPG 7.2 (p40)', items:[
        'Asthma patients should continue their maintenance inhaled corticosteroids (via pMDI or DPI) when prescribed with systemic corticosteroids.',
        'There is insufficient evidence to support the use of nebulised corticosteroids in asthma exacerbation in emergency department.']},
      {h:'Magnesium sulphate', src:'CPG 7.2 and Recommendation 12 (p41)', items:[
        'A single dose of 2 g intravenous magnesium sulphate infusion over 20 minutes should be considered in acute severe and life-threatening asthma.',
        'There is no retrievable evidence of benefit from repeated dosing of magnesium sulphate in asthma exacerbation. Repeated doses could cause hypermagnesemia with muscle weakness and respiratory fatigue.',
        'Nebulised magnesium sulphate is not recommended for treatment in adults with acute asthma.',
        'The CPG gives no diluent or volume for the infusion.']},
      {h:'Aminophylline', src:'CPG 7.2 (p41)', items:[
        'IV aminophylline has limited effectiveness apart from unfavourable AEs compared with standard therapy. Therefore, it should not be routinely used in asthma exacerbation. Consultation with a senior physician is advisable if its use is required.']},
      {h:'Reliever inhaler', src:'CPG Appendix 9 A (p79)', items:[
        'Salbutamol 100 µg/dose inhaler, pMDI: for relief of acute bronchospasm, 1 to 2 inhalations.',
        'Salbutamol 100 and 200 µg/dose inhaler, Easyhaler® (DPI): for relief of acute bronchospasm, 1 inhalation as a single starting dose; may be increased to 2 inhalations if necessary.']},
      {h:'Medicines to use with caution', src:'CPG 6.2.2 (p35) and 8.6 (p56)', items:[
        'Aspirin and non-steroidal anti-inflammatory drugs (NSAIDs) are generally not contraindicated in asthma unless there is a history of adverse reactions to these medications. Patients should be asked on any previous reactions to these agents. Where NSAIDs is indicated for other medical indications, a selective COX2 inhibitors (e.g. celecoxib or etoricoxib) and paracetamol may be used as an alternative.',
        'Non-selective β-blockers including eyedrops can exacerbate asthma symptoms by inducing bronchospasm. If indicated, initiation of oral or eyedrops β-blockers should be done with caution, on a case by case basis and under close monitoring. However, cardio-selective β-blockers are not absolutely contraindicated as it has not been shown to affect FEV1 or asthma exacerbation in mild to moderate asthma.',
        'Potential interactions of COVID-19 and asthma medications should be assessed in particular ritonavir-boosted nirmatrelvir (paxlovid) with ICS-salmeterol or ICS-vilanterol which can cause increased cardiac toxicity of LABA (8.6).']}
    ]},
    {l:'Action plan', notes:[
      {h:'A. Suggested asthma action plan template', src:'CPG Appendix 5A (p71), printed in English only. Note: The use of pMDI with spacer is encouraged. The form also has spaces for the name, IC number, doctor, hospital or clinic, best PEF, date, and the names and colours of the reliever and the controller.', table:{head:['Asthma control','Reliever','Controller'], rows:[
        ['WELL: No cough, wheeze, chest tightness or shortness of breath AND Sleep well at night AND Able to perform usual activities OR PEFR: ____ to ____l/min (80% to 100% of personal best)','No need to use reliever except before exercise (if needed)','Dose: ___ inhalations ___ times a day'],
        ['GETTING WORSE: If you have ANY of these: Cough, wheeze, chest tightness or shortness of breath; Waking up at night due to asthma symptoms; Able to perform some, but not all usual activities OR PEFR: ____ to ____l/min (50% to 79% of personal best)','Take 2 to 4 inhalations every 20 minutes for a total 3 times and assess symptoms. If symptoms or PEFR improve: lengthen interval to every 3 – 4 hours as needed; duration may be further lengthened based on continued good response. If symptoms worsen or persist: Proceed to ALERT management','Dose: ___ inhalations ___ times a day'],
        ['ALERT: If you have ANY of these: Worsening cough, wheeze, chest tightness or shortness of breath; Difficulty walking or talking; Need to use reliever more frequently than every 4 hours OR PEFR: Below ____l/min (less than 50% of personal best)','Proceed to nearest hospital or clinic or dial 999 IMMEDIATELY AND DURING TRANSFER: With spacer – increase dose up to 10 inhalations every 20 minutes; Without spacer – take 2 inhalations every 5 minutes','Dose: ___ inhalations ___ times a day']]}},
      {h:'B. Suggested asthma action plan template: MART (maintenance-and-reliever therapy)', src:'CPG Appendix 5B (p72), printed in English only. The WELL and GETTING WORSE descriptions are the same as in template A. Note: The use of pMDI with spacer is encouraged.', table:{head:['Asthma control','Reliever','Controller'], rows:[
        ['WELL','No need to use reliever except before exercise (if needed)','Take _____ inhalations _____ times a day'],
        ['GETTING WORSE','DON\'T WAIT. Take one inhalation as needed (Maximum 12 inhalations a day including controller dose). If symptoms worsen or persist: Proceed to ALERT management','Take _____ inhalations _____ times a day'],
        ['ALERT: If you have any of these: Worsening symptoms (cough, wheeze, chest tightness or shortness of breath) OR Difficulty walking or talking; Need to use reliever more than every 4 hours OR PEFR: Below_____l/min (less than 50% of personal best)','Proceed to the nearest hospital or clinic or dial 999 IMMEDIATELY AND Take one inhalation every 1 to 3 minutes up to 6 inhalations (Maximum 12 inhalations a day including controller dose)','Take _____ inhalations _____ times a day']]}},
      {h:'Using the action plan', src:'CPG 5.2 (p13–14) and Recommendation 3 (p15)', items:[
        'AAP contains action (decision) points which guide patients in making short-term adjustments to their treatment based on their symptoms and/or PEFR.',
        'The AAP should be completed and explained to the patient by the attending healthcare provider to ensure patients understand how to manage their asthma effectively.',
        'In PEFR-based plans, personal best PEFR should be used for the action point. The best PEFR is the patient\'s known personal best under stable conditions i.e. not measured during an exacerbation. In patients without known personal best, the predicted value may be used (the peak expiratory flow nomogram, Appendix 4, p70).',
        'Patients are advised to seek further medical assistance if symptoms persist despite following the AAP.',
        'Regular medical reviews in asthma patients are preferred over self-adjustment of medications aided by asthma action plan (Recommendation 3).']}
    ]},
    {l:'Inhaler and spacer', notes:[
      {h:'pMDI and spacer (VHC)', src:'CPG Appendix 6 (p73–74). Inhaler techniques must be checked and corrected, if necessary, at every single opportunity. Ensure no foreign object in the mouthpiece and the inhaler is not empty or expired.', items:[
        'Priming, pMDI: Remove cap, shake inhaler well and release several puffs into air (varies from product to product; refer to manufacturer\'s recommendations). Spacer: Pre-wash is not necessary for antistatic spacer. However, non-antistatic spacer needs to be pre-washed (soak) with diluted mild detergent (do not rinse) and air-dried before first use to reduce electrostatic charge. Wipe mouthpiece before use.',
        'When to prime: before first-time use; when not used for 5 – 7 days.',
        '1. Remove pMDI cap and spacer\'s mouthpiece cap (if any). Shake pMDI well. Insert pMDI upright into back of spacer. 2. Sit upright or stand in an erect position. 3. Exhale slowly and fully (away from inhaler). 4. Slightly tilt chin up.',
        '5a. Spacer with mouthpiece: Place mouthpiece gently between teeth (without biting). Ensure a tight lip seal around mouthpiece. 5b. Spacer with facemask: Apply mask to face and ensure an effective seal over mouth and nose.',
        '6a. Tidal Breathing Method (for VHC only): Inhale slowly and deeply through mouth, pressing canister down ONCE at start of inhalation. Inhale and exhale slowly 5 times through mouth. Remove spacer from face/mouth.',
        '6b. Single Breath Method: Inhale slowly and deeply through mouth, pressing canister down ONCE at start of inhalation. Remove spacer from face/mouth and hold breath for 5 - 10 seconds or as long as comfortable. Exhale slowly (away from inhaler).',
        '7. Repeat the steps (if needed) starting with shaking pMDI. Wait 30 - 60 seconds before repeating. Remove pMDI from spacer. Replace cap(s) after use.',
        'Cleaning: Clean spacer once a week; cleaning instruction varies (refer to manufacturer\'s recommendations).',
        'After each inhalation of ICS, rinse mouth with water, gargle and spit out the water.',
        'Shaking pMDI well immediately before each actuation is important for delivering the correct dose. VHC are spacers that incorporate a one-way-valve. Tidal breathing can only be performed with VHCs.']},
      {h:'Spacers and nebulisers', src:'CPG 8.6 (p56)', items:[
        'If clinically indicated, nebuliser use should not be discouraged especially in life-threatening asthma and adherence to recommended safety measures should be emphasised.',
        'The use of pMDI with spacer is an alternative to nebulisers. It should be either single patient use or autoclaved if manufacturer permits.',
        'If a commercial spacer is not available or unaffordable, homemade or custom-made spacers e.g. plastic bottles may be used but should not be regarded as equivalent replacements due to their variable sizes, shapes and existing electrostatic charge on the devices\' wall.']}
    ]},
    {l:'Treatment steps', notes:[
      {h:'Every patient on ICS-containing therapy', src:'CPG Recommendations 2 (p11), 5 (p25), 6 (p31) and 7 (p35)', items:[
        'All asthma patients should be on inhaled corticosteroids (ICS)-containing therapy.',
        'Short-acting β2-agonist should always be taken together with inhaled corticosteroids.',
        'Inhaled short-acting β2-agonists (SABA) should not be used as monotherapy; inhaled SABA may be used as reliever therapy with regular inhaled corticosteroids (ICS); inhaled SABA overuse (≥3 canisters/year) should be avoided; oral SABA should not be used.',
        'Anti-inflammatory reliever (AIR) therapy (either ICS with formoterol or ICS with SABA) may be used as a reliever therapy. Inhaled long-acting β2-agonists (LABA) without ICS should not be used as reliever monotherapy.',
        'Theophylline should not be used for treatment of asthma.',
        'Asthma patients who smoke or vape should be strongly encouraged to quit at every clinic visit.']},
      {h:'Algorithm 1: initiation of asthma treatment', src:'CPG p xi. Confirmed asthma: assess for asthma control, assess for risk factors for asthma exacerbation and address modifiable risk factors.', items:[
        'Well-controlled asthma (ACT ≥20 or ‘NO’ to all GINA questionnaire): maintenance low-dose ICS + PRN SABA OR PRN ICS-formoterol OR PRN ICS-SABA.',
        'Not well controlled, with symptoms most days OR night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LLN: maintenance low-dose ICS-LABA OR low-to-medium-dose ICS.',
        'Not well controlled, with daily symptoms OR night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LLN: maintenance medium-to-high-dose ICS-LABA OR medium-dose ICS-LABA with add-on LAMA. The text on p9 joins the FEV1 criterion here with AND.',
        'Reliever: SABA OR ICS-SABA OR ICS-formoterol (if maintenance includes ICS-formoterol), e.g. budesonide-formoterol or beclometasone diproprionate-formoterol.',
        'Reassess asthma symptoms at 3 - 6 months. Inhaler technique and adherence to treatment should be assessed at every clinic/hospital visit and before escalating treatment.',
        'Refer to Table 7 for ICS dosing category. LTRA may be added to maintenance therapy if the patient has concurrent allergic rhinitis.']},
      {h:'Algorithm 2: step up and step down', src:'CPG p xii and 4.2 (p10–11)', items:[
        'Maintenance, from the lowest step: PRN ICS-formoterol or low-dose ICS with PRN SABA or low-dose ICS with PRN ICS-SABA or PRN ICS-SABA; low-dose ICS-LABA or medium-dose ICS; medium-dose ICS-LABA; medium-dose ICS-LABA+LAMA or high-dose ICS-LABA (phenotypic assessment); high-dose ICS-LABA+LAMA (consider single inhaler high-dose ICS-LABA-LAMA); refer respiratory physician and discuss within MDT for consideration of biologics (alternative treatment: add-on low-dose azithromycin or OCS).',
        'Reliever: ICS-formoterol (if maintenance contains ICS-formoterol), maximum total dose 12 puffs/day, OR ICS-SABA OR SABA.',
        'Consider a short-term step up (for 1 - 2 weeks) with Asthma Action Plan (AAP) in situations with identifiable triggers e.g. during viral infection or allergen exposure.',
        'Early referral to respiratory physicians should be considered in patients with high-risk of exacerbation or has history of severe asthma exacerbation.']},
      {h:'Table 7: ICS doses, total daily ICS dose (µg)', src:'CPG p27, from GINA 2024. Where the CPG prints one value across two or three columns, it is repeated here.', table:{head:['Inhaled corticosteroids (alone or in combination with LABA)','Low','Medium','High'], rows:[
        ['Beclometasone dipropionate (pMDI, standard particle, HFA)','200 - 500','>500 - 1000','>1000'],
        ['Beclometasone dipropionate (DPI or pMDI, extrafine particle, HFA)','100 - 200','>200 - 400','>400'],
        ['Budesonide (DPI, or pMDI, standard particle, HFA)','200 - 400','>400 - 800','>800'],
        ['Ciclesonide (pMDI, extrafine particle, HFA)','80 - 160','>160 - 320','>320'],
        ['Fluticasone furoate (DPI)','100','100','200'],
        ['Fluticasone propionate (DPI)','100 - 250','>250 - 500','>500'],
        ['Fluticasone propionate (pMDI, standard particle, HFA)','100 - 250','>250 - 500','>500'],
        ['Mometasone furoate (DPI)','Depends on DPI device - refer to product information','Depends on DPI device - refer to product information','Depends on DPI device - refer to product information'],
        ['Mometasone furoate (pMDI, standard particle, HFA)','200 - 400','200 - 400','>400']]}},
      {h:'Statement of intent', src:'CPG, front matter', items:[
        'These clinical practice guidelines (CPG) are meant to be guides for clinical practice, based on the best available evidence at the time of development. The guidelines should not override the responsibility of the practitioners to make decisions appropriate to the circumstances of the individual. This should be done in consultation with the patients and their families or guardians, taking into account the management options available locally.']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Asthma in Adults (Second Edition). Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2024. Available at https://mymahtas.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Table 9 is adapted in the CPG from: Plaza Moral V, Alobid I, Álvarez Rodríguez C, et al. GEMA 5.3. Spanish Guideline on the Management of Asthma. Open Respir Arch. 2023;5(4):100277. Table 7 is from: Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2024.',
    'Appendix 9 sources, as the CPG lists them (p86): drug information databases (Lexicomp), Formulari Ubat KKM (FUKKM), medication package insert, Micromedex and the electronic Medicines Compendium (eMC).'],
  see:[['#asthma','Bronchial asthma (ebook pathway)'],['#asthma-zone','Asthma Zone flow (Nov 2025)']]
};

/* The ebook pathway points to the newer national guideline (a link only: its content stays as written) */
P['asthma'].see = [...(P['asthma'].see || []), ['#asthma-cpg', 'Asthma CPG, 2nd edition (2024)']];

/* The Asthma Zone flow points to the national guideline too */
P['asthma-zone'].see = [...(P['asthma-zone'].see || []), ['#asthma-cpg', 'Asthma CPG, 2nd edition (2024)']];

/* ----- CPG Management of Gout, 2nd edition (MaHTAS, 2021), for adults (p vi) -----
   Printed page = PDF page minus 17; the algorithm is p xi. Greek mu is written as the micro sign, apostrophes are plain,
   citation numbers are dropped and table cells are joined with semicolons. */
P['gout-cpg'] = {
  title:'Gout: CPG 2nd edition', grp:'cpg', src:'CPG Gout, 2nd ed. (2021)', isnew:true, hero:'goutcpg',
  lead:'The national guideline for adults (2021): is it a gout flare, treat it, keep or start urate-lowering therapy, and send home with the right referral. Doses and tables are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Gout, 2nd edition (MaHTAS, 2021). Printed page numbers; the algorithm is on p xi.', opts:[['Hot, swollen joint: is it a gout flare? (algorithm, chapter 9)','feat'],['Treat the flare: choose a drug (Recommendation 8, Appendix 5B)','rx'],['Urate-lowering therapy: keep it, stop it or start it','ult'],['Going home: referral and advice (chapter 16)','go']]},

    /* Algorithm (p xi), 5.1 (p10) and chapter 9, Differential diagnoses (p21) */
    feat:{q:'Clinical features of gout?', hint:'Algorithm (p xi), for acute monoarthritis/oligoarthritis. It lists these features but does not say how many are needed.',
      info:['Involvement of the first metatarsophalangeal joint, ankle or midfoot','Redness, extreme pain and loss of function in the affected joint','Time to maximal pain <24 hours and complete resolution of symptoms within 14 days','Recurrence of typical attacks increase the likelihood of diagnosis','Clinical evidence of tophus (present in chronic gouty arthritis)','Precipitants include acute medical or surgical illness, dehydration, alcohol and purine-rich food from animal sources (p10)','Other than arthritis, bursitis and tendinitis, systemic features e.g. fever can be present (p10)'],
      opts:[['Yes, the features fit gout','ddx'],['No','oth']]},
    ddx:{q:'Have the other causes been considered?', hint:'Chapter 9 (p21): other causes of acute monoarthritis/oligoarthritis should be considered before making a diagnosis of gout. The CPG gives supportive features, not a rule, and a gout flare can also bring fever (p10).',
      info:['Septic arthritis (key differential diagnosis): commonly involves knee joint (other sites are hip, shoulder, ankle, wrist); acutely painful/tender, hot, swollen, erythematous and immobile joint; presence of systemic features e.g. fever, ill or septic-looking; risk factors e.g. concomitant bacteraemia, recent intra-articular injection; leukocytosis and raised C-reactive protein','Acute calcium pyrophosphate crystal arthritis: age >60 years old; involvement of a degenerative joint; radiography of affected joint may show presence of chondrocalcinosis','Psoriatic arthritis: presence of psoriasis, nail dystrophy (e.g. pitting, onycholysis or crumbling)','Reactive arthritis: recent genitourinary or gastrointestinal (GI) infection; presence of urethral discharge or ulcer, rash on soles, conjunctivitis'],
      opts:[['Septic arthritis suspected','sep'],['Another cause is more likely','oth'],['Gout is the likely diagnosis','dx']]},
    sep:{end:'neutral', title:'Septic arthritis suspected: outside this CPG', items:['Septic arthritis is the key differential diagnosis of gout (chapter 9, p21)','Other causes of acute monoarthritis/oligoarthritis - manage accordingly (algorithm, p xi)','Prednisolone carries a caution for active infections (Appendix 5B, p72)'],
      gap:'The CPG gives no pathway for suspected septic arthritis: not when to aspirate, what to send the fluid for besides crystals, antibiotics, admission or referral. Still to confirm with the department.'},
    oth:{end:'neutral', title:'Other causes of acute monoarthritis/oligoarthritis: manage accordingly', items:['Other causes of acute monoarthritis/oligoarthritis - manage accordingly (algorithm, p xi)'],
      gap:'Chapter 9 (p21) lists them; the CPG does not cover their management.'},
    dx:{step:'Diagnosis of gout: confirm with crystals where possible', items:['Demonstration of monosodium urate (MSU) crystals in synovial fluid or tophus aspirate under polarised light microscopy should be performed to confirm the diagnosis of gout (Recommendation 3, p19)','If confirmation of the presence of MSU crystals is not possible, the diagnosis may be made based on typical clinical manifestations','A diagnosis of gout can be reasonably made in a hyperuricaemic patient who presents with acute monoarthritis of the first MTP joint (p21)','MSU crystals remained stable in SF stored at room temperature for 24 - 48 hours and should be refrigerated (at 4ºCelcius) if analysis was to be delayed (p14)','Normal SU during gout flare does not exclude the diagnosis of gout. Repeat SU ≥2 weeks after resolution of flare if highly suspicious of gout (algorithm, p xi)','Investigations: baseline SU, other blood/urine/imaging study as indicated (algorithm). Table 3 is in the Diagnosis tab'], next:'rx'},

    /* 12.2b, Gout flare (p35–37), Recommendation 8 (p37), 12.2d (p39–40) and Appendix 5B (p68–72) */
    rx:{q:'Treat the flare: which drug?', hint:'Recommendation 8 (p37): Gout flare should be treated promptly and adequately. In gout flare, the following monotherapy may be used: colchicine, nonsteroidal anti-inflammatory drugs/cyclooxygenase-2 inhibitors, corticosteroids. The choice of drug will be guided by patient\'s comorbidities.',
      info:['Kidney disease: colchicine should be avoided in severe CKD as its safety in this group has not been established; NSAIDs should also be avoided in CKD due to its potential nephrotoxic effect; corticosteroids may be used in gout flares with severe CKD (p39)','Non-pharmacological: topical ice during gout flare (algorithm, p xi); during gout flare, the affected joints should be rested, elevated and exposed in a cool environment (p30)'],
      opts:[['Colchicine','col'],['NSAID or COX-2 inhibitor','nsaid'],['Prednisolone','pred'],['Triamcinolone into the joint or the muscle','tri'],['Pregnant or breastfeeding','preg'],['Monotherapy is not enough','combo']]},
    col:{check:'any', q:'Colchicine: any of these?', hint:'The contraindications in Appendix 5B (p68), and severe CKD (p39, p69). The doses come next.',
      items:['Concomitant use of drugs that are both P-glycoprotein and CYP3A4 inhibitors in patients with renal or hepatic impairment','Concomitant use of P-glycoprotein or CYP3A4 inhibitors in patients with renal or hepatic impairment','Patients with both renal and hepatic impairment','Blood dyscrasia','Severe CKD (p39), or CrCl <30, renal replacement therapy (p69)'],
      opts:[['Yes, present','colno'],['None','col2']]},
    colno:{end:'neutral', title:'Colchicine: contraindicated, or avoid in severe CKD', items:['Colchicine should be avoided in severe CKD as its safety in this group has not been established (p39)','CrCl <30, renal replacement therapy: consider alternative therapy (p69)','Corticosteroids may be used in gout flares with severe CKD (p39)'],
      links:[['#gout-cpg--pred','Prednisolone'],['#gout-cpg--tri','Triamcinolone']], gap:'CPG Appendix 5B (p68–69) and 12.2d (p39). The CPG does not say which drug to use when colchicine is contraindicated for another reason.'},
    col2:{q:'Colchicine: does either apply?', hint:'Appendix 5B (p68–70).', opts:[['Neither','coldose'],['Takes a CYP3A4 or P-glycoprotein inhibitor, now or in the last 14 days','cyp'],['Already on colchicine prophylaxis','onprop']]},
    coldose:{end:'neutral', title:'Colchicine for the flare', items:['Initial dose: 1 mg, then 0.5 mg after 1 hour. No further tablets should be taken for 12 hours.','After 12 hours, treatment can be resumed if necessary with a maximum dose of 0.5 mg every 8 hours until symptoms are relieved.','The course of treatment should end when symptoms are relieved or when a total of 6 mg (12 tablets) has been taken. After completion of a course, another course should not be started for at least 3 days (72 hours).','CrCl >60 - 89 or 30 - 60: no dosage adjustment, monitor closely for AE (p68–69)','Hepatic impairment: the table is in the Flare drugs tab (p69)','Interactions: CYP3A4 inhibitor/P-glycoprotein inhibitor, increased risk of toxicity; statin/fibrates/digoxin/ciclosporin, increased risk of myopathy and rhabdomyolysis'],
      gap:'CPG Appendix 5B (p68–69). The trials in 12.2b used 1.2 mg then 0.6 mg (p35); the doses above are the Appendix doses. The renal table has no row for a CrCl of 90 or more.'},
    cyp:{end:'neutral', title:'Colchicine with a CYP3A4 or P-glycoprotein inhibitor', items:['With renal or hepatic impairment, concomitant use of P-glycoprotein or CYP3A4 inhibitors is a contraindication (p68)','Potent CYP3A4 inhibitor e.g. clarithromycin, ketoconazole, itraconazole and certain protease inhibitors: 0.5 mg at first sign of flare, followed by 0.25 mg one hour later','Moderate CYP3A4 inhibitor e.g. diltiazem, erythromycin, fluconazole, verapamil: 1 mg at first sign of flare','P-glycoprotein inhibitor e.g. cyclosporin, ranolazine: 0.5 mg at first sign of flare','Do not repeat courses of colchicine therapy until 3 days have elapsed.','Use of colchicine to treat gout flares is not recommended in patients receiving prophylactic dose of colchicine and CYP3A4 inhibitors.'],
      gap:'CPG Appendix 5B (p70), for patients receiving or have recently (within 14 days) received the inhibitor. The CPG does not define renal impairment for the contraindication; its renal table starts at CrCl >60 - 89 (p68). The prophylaxis doses are in the Flare drugs tab.'},
    onprop:{end:'neutral', title:'A flare during colchicine prophylaxis', items:['Do not exceed 1 mg at the first sign of flare, followed by 0.5 mg 1 hour later, wait for 12 hours and then resume prophylactic dose.','Initiate prophylactic dose at least 12 hours after treatment dose and continue until gout flare resolves.','Use of colchicine to treat gout flares is not recommended in patients with renal impairment (CrCl <80 ml/min) already receiving prophylactic colchicine (p69)','Use of colchicine to treat gout flares is not recommended in patients with hepatic impairment already receiving prophylactic colchicine (p69)','Use of colchicine to treat gout flares is not recommended in patients receiving prophylactic dose of colchicine and CYP3A4 inhibitors (p70)','Do not stop ULT during attack (algorithm, p xi)'],
      links:[['#gout-cpg--pred','Prednisolone'],['#gout-cpg--nsaid','NSAID or COX-2 inhibitor']], gap:'CPG Appendix 5B (p68–70). Its 80 ml/min cut-off is not one of the renal table\'s bands (>60 - 89, 30 - 60, <30).'},
    nsaid:{check:'any', q:'NSAID or COX-2 inhibitor: any of these?', hint:'The contraindications in Appendix 5B (p71), with CKD and pregnancy from 12.2d (p39–40).',
      items:['Hypersensitivity to NSAIDs','Perioperative pain in the setting of coronary artery bypass graft surgery','History of GI bleeding, perforation or ulceration related to NSAIDs therapy','Current GI bleeding, perforation or ulceration','Severe hepatic or renal impairment','Severe cardiac failure','CKD: NSAIDs should also be avoided in CKD due to its potential nephrotoxic effect (p39)','Pregnancy at 20 weeks or beyond: FDA recommends to avoid NSAIDs in pregnancy at 20 weeks or beyond, and NSAIDs should be avoided in the third trimester (p40)'],
      opts:[['Yes, present','nsno'],['None','nsdose']]},
    nsno:{end:'neutral', title:'NSAIDs contraindicated or to be avoided: choose another drug', items:['Corticosteroids may be used in gout flares with severe CKD (p39)','In pregnancy and breastfeeding: colchicine may be used; corticosteroids may be used with caution (p40)'],
      links:[['#gout-cpg--col','Colchicine'],['#gout-cpg--pred','Prednisolone'],['#gout-cpg--preg','Pregnancy and breastfeeding']], gap:'CPG Appendix 5B (p71) and 12.2d (p39–40).'},
    nsdose:{end:'neutral', title:'NSAID or COX-2 inhibitor for the flare', items:['Ibuprofen 400 - 800 mg TDS (maximum: 3200 mg/day)','Diclofenac 50 mg BD/TDS','Naproxen 550 - 1100 mg in 2 divided doses (275 mg tablet)','Naproxen 750 mg initially, then 250 mg TDS (250 mg tablet)','Meloxicam maximum 15 mg/day','Celecoxib 400 mg stat followed by 200 mg BD subsequently','Etoricoxib 120 mg/day','Interactions: antiplatelets/anticoagulants/corticosteroids, increased risk of GI bleeding; lithium, NSAIDs may increase serum concentration of lithium; methotrexate, increased levels and risk of toxicity of methotrexate'],
      gap:'CPG Appendix 5B (p71). The CPG gives no duration for an NSAID course in a flare and does not mention gastroprotection.'},
    pred:{end:'neutral', title:'Prednisolone for the flare', items:['Flare treatment: 30 to 40 mg/day once daily or in 2 divided doses for 5 days.','If a longer duration is needed for more severe flare, a gradual taper over 7 to 10 days is an option.','A slower taper (e.g. over 14 to 21 days) maybe required, particularly in patients with multiple recent flares.','Caution: active infections','Contraindications: hypersensitivity to prednisolone; concomitant administration with live vaccines or live attenuated virus vaccines (with immunosuppressive doses of corticosteroids)','Corticosteroids may be used in gout flares with severe CKD (p39)','Interactions: CYP3A4 inhibitors (e.g. ketoconazole) may increase serum concentration of prednisolone; CYP3A4 inducers (e.g. phenobarbitone, rifampicin) may decrease serum concentration of prednisolone; NSAIDs, increased risk of GI bleeding; anticoagulant, increased risk of bleeding; loop diuretics, enhances hypokalemic effect of loop diuretics'],
      gap:'CPG Appendix 5B (p71–72). Its caution for active infections is the only place the CPG touches infection and steroids; it does not say to exclude septic arthritis first.'},
    tri:{end:'neutral', title:'Triamcinolone into the joint or the muscle', items:['Intra-articular. Large joint: 40 mg as a single dose. Medium joint: 30 mg as a single dose. Small joint: 10 mg as a single dose','Intramuscular: 40 to 80 mg as a single dose; May repeat at ≥48-hour intervals if there is no flare resolution','There is no direct evidence from randomised trials on the use of intra-articular corticosteroids in gout. Evidence extrapolated from studies on osteoarthritis and rheumatoid arthritis suggests it may be a safe and effective option in gout flare (p36–37).','Contraindications: hypersensitivity to triamcinolone; bleeding diastheses'],
      gap:'CPG Appendix 5B (p72). The CPG gives no technique for aspirating or injecting a joint, and does not say what to exclude before an injection. Recent intra-articular injection is among the risk factors it lists for septic arthritis (p21).'},
    preg:{end:'neutral', title:'A flare in pregnancy or breastfeeding', items:['There is paucity of evidence in the treatment of gout in pregnancy. Medications are used only when benefits clearly outweigh the risks.','Colchicine may be used in pregnancy and breastfeeding for the treatment of rheumatological conditions including gout.','NSAIDs should be avoided in the third trimester while non-selective NSAIDs are preferred over COX-2 specific inhibitors in the first two trimesters of pregnancy. However, NSAIDs may be used in breastfeeding.','In addition, FDA recommends to avoid NSAIDs in pregnancy at 20 weeks or beyond as they can cause rare but serious kidney injury to the unborn baby.','Corticosteroids may be used with caution in pregnancy and breastfeeding. Non-fluorinated corticosteroids (prednisone, prednisolone) are preferred over fluorinated corticosteroids (dexamethasone, betamethasone) as the former do not cross the placenta at low to moderate doses unlike the latter.','Topical ice is safe for gout flare in pregnant patients.','Gout in pregnancy: referral of gout patients to a rheumatologist may be considered (Recommendation 12, p46)'],
      gap:'CPG 12.2d(ii) (p39–40) and Appendix 5C (p73, in the Pregnancy tab). Appendix 5C restricts NSAIDs to the first and second trimester, while the text quotes the FDA advice to avoid them from 20 weeks.'},
    combo:{end:'neutral', title:'Response to monotherapy is insufficient', items:['Combination of the above may be used in gout flare if response to monotherapy is insufficient (Recommendation 8, p37).','Gout flare that fails to resolve despite treatment as recommended by the CPG: referral of gout patients to a rheumatologist may be considered (Recommendation 12, p46)'],
      links:[['#gout-cpg--rh','Rheumatology referral criteria'],['#mau-admission','Admission to MAU']], gap:'The CPG does not say which combination to use, how long to wait before judging the response, or when a flare needs admission. The MAU flow chart lists acute gout flare among the diagnoses MAU will consider.'},

    /* Urate-lowering therapy: algorithm (p xi), 12.2a (p30–35), chapter 13 (p40), 15.3 (p43) and Appendix 5A (p63–65) */
    ult:{q:'Urate-lowering therapy (ULT): which applies?', hint:'Allopurinol is the first-line therapy (Recommendation 7, p35).', opts:[['On allopurinol or febuxostat, now a flare','keep'],['Rash, eye redness, or oral or genital ulcers on allopurinol','scar'],['On colchicine prophylaxis, now a flare','onprop'],['Not on ULT: is it indicated?','ind']]},
    keep:{end:'neutral', title:'Keep the urate-lowering therapy going', items:['Do not stop ULT during attack (algorithm, p xi)','Health education includes continuance of ULT during flare (p27)','ULT should be continued long-term in gout patients to prevent recurrence of gout (chapter 13, p40)'],
      links:[['#gout-cpg--rx','Treat the flare']], gap:'CPG algorithm (p xi), 12.1a (p27) and chapter 13 (p40). Doses and interactions of allopurinol and febuxostat are in the Urate-lowering tab.'},
    scar:{end:'neutral', title:'Skin reaction on allopurinol: prompt discontinuation', items:['Educate patients to be alert to symptoms and signs e.g. rash, pruritus or other allergic skin reactions, unexplained eye redness and oral or genital ulcers.','Emphasise the importance of prompt discontinuation of the drug at their first occurrence and to seek medical advice early.','The most serious AE is severe cutaneous adverse reaction (SCAR) which can be fatal (p31)','The median time from starting allopurinol to developing AHS was 30 days (range 1 - 1080 days) and 90% of AHS cases occurred within the first 180 days (p32)','Hypersensitivity or intolerance to allopurinol: referral of gout patients to a rheumatologist may be considered (Recommendation 12, p46)'],
      links:[['#gout-cpg--rh','Rheumatology referral criteria']], gap:'CPG 15.3 (p43), 12.2a (p31–32) and Appendix 5A (p63). The CPG does not cover the emergency care of SCAR, SJS, TEN or DRESS.'},
    ind:{check:'any', q:'Is ULT indicated?', hint:'Algorithm (p xi) and 12.2a (p30), which join these with OR.', items:['Recurrent gout flares (≥2 flares in 12 months)','Presence of ≥1 tophi','Presence of radiographic damage attributable to gout'], opts:[['Yes, present','ulty'],['None','cond']]},
    cond:{check:'any', q:'Is ULT conditionally recommended?', hint:'The ACR conditional recommendations in 12.2a (p31), also in the algorithm (p xi).', items:['Previously had >1 flare but infrequent (<2 flares/year)','First gout flare with concomitant CKD stage ≥3','First gout flare with SU >540 µmol/L','First gout flare with presence of urolithiasis'], opts:[['Yes, present','ultc'],['None','ultn']]},
    ulty:{end:'refer', title:'ULT is indicated', items:['Allopurinol is the first-line therapy. It should be started at low dose and increased gradually (Recommendation 7, p35).','Initiation dose of allopurinol should be based on eGFR (p35): the table is in the Urate-lowering tab','The CPG DG opines that ULT can be initiated during a flare as long as the flare is being appropriately managed (p31)','Prophylaxis for gout flares should be used for at least three to six months when initiating urate-lowering therapy (Recommendation 9, p38).','Treat-to-target strategy aiming for serum urate of <360 µmol/L should be applied in the treatment of all gout patients (Recommendation 4, p26).'],
      links:[['#gz-rules--gout','Green Zone gout referrals']], gap:'The CPG does not say whether ULT should be started in the emergency department. The Green Zone refers gout to the Klinik Kesihatan (Green Zone rules).'},
    ultc:{end:'refer', title:'ULT is conditionally recommended', items:['ACR conditionally recommends ULT initiation for gout patients with their first gout flare based on the following indications: moderate to severe CKD (stage ≥3) OR SU concentration >9 mg/dL (540 µmol/L) OR urolithiasis (p31)','ACR also conditionally recommends initiating ULT for gout patients who previously experienced >1 flare but have infrequent flares (<2/year) (p31)'],
      links:[['#gout-cpg--ulty','Starting ULT'],['#gz-rules--gout','Green Zone gout referrals']], gap:'CPG 12.2a (p31). The CPG does not say whether ULT should be started in the emergency department.'},
    ultn:{end:'neutral', title:'No indication for ULT now', items:['Continue to monitor for possible indications in future (algorithm, p xi)'], gap:'CPG algorithm (p xi).'},

    /* Chapter 16, Referral (p45–46), Recommendation 12 (p46); 12.1 Non-pharmacological treatment (p27–30) */
    go:{q:'Going home: which applies?', hint:'In HKL, gout is managed at primary care: refer to the nearest Klinik Kesihatan (Green Zone rules). The CPG lists who may need a specialist.', opts:[['Check the rheumatology referral criteria (Recommendation 12)','rh'],['Tophus complications, or urolithiasis (16.2)','surg'],['Home with advice and a Klinik Kesihatan referral','kk']]},
    rh:{check:'any', q:'Any of these? Then referral to a rheumatologist may be considered', hint:'Recommendation 12 (p46). Items 2 to 5 are listed under: refractory to conventional therapy despite drug adherence.',
      items:['Unclear diagnosis with atypical clinical presentations, including suspected gout in women with onset before menopause, or in men with early onset at age <30 years without predisposing risk factors for gout','Gout flare that fails to resolve despite treatment as recommended by the CPG','Recurrent flares although SU target of <360 µmol/L is achieved','Failure to achieve SU target of <360 µmol/L after a trial of at least three months of allopurinol at a maximally tolerated dose','Tophaceous gout with progressive joint damage, active symptoms or growing tophi despite medical treatment','Complicated gout with destructive joint changes','Hypersensitivity or intolerance to allopurinol','Gout in pregnancy'],
      opts:[['Yes, present','rheum'],['None','kk']]},
    rheum:{end:'refer', title:'Referral to a rheumatologist may be considered', items:['Referral of gout patients to a rheumatologist may be considered for these indications (Recommendation 12, p46)','In HKL, gout is managed at primary care, and only complex cases go to Rheumatology (Green Zone rules)'],
      links:[['#gz-rules--gout','Green Zone gout referrals']], gap:'CPG 16.1 (p45) and Recommendation 12 (p46). The CPG does not say how urgent the referral is, or whether it is made from the emergency department.'},
    surg:{end:'refer', title:'Tophus complications: orthopaedic or surgical care. Urolithiasis: a urologist', items:['Current or impending debilitating complications of tophaceous deposits: uncontrolled infection including discharging sinus; ulceration with risk of infection; entrapment neuropathy e.g. carpal tunnel syndrome at the wrist; major joint destruction; joint instability; impaired joint motion that affects activities of daily living, work or safety; functional impairment e.g. the inability to wear shoes or clothing (16.2, p45–46)','Surgical management for tophi is generally considered as a last resort (p45)','Gout with urolithiasis should be assessed by a urologist (Recommendation 12, p46)'],
      links:[['#gz-rules--gout','Green Zone gout referrals']], gap:'CPG 16.2 (p45–46) and Recommendation 12 (p46). The CPG does not say how to manage an infected tophus in the emergency department.'},
    kk:{end:'discharge', title:'Home with advice; follow up at the Klinik Kesihatan', items:['Gout flare: occurs abruptly with joint pain peaking in intensity within 24 hours and resolves spontaneously within 1 - 2 weeks (5.1, p10)','Health education: pathophysiology of gout; recognition of gout flare; existence of effective treatments; prompt treatment of gout flare and its principles; compliance to ULT including T2T strategy; continuance of ULT during flare; healthy lifestyle; associated comorbidities (p27)','Ice packs may be used during gout flare. Ice packs should always be applied over a cloth and not directly onto the skin of the affected joint (Recommendation 6, p30; Appendix 4, p62)','During gout flare, the affected joints should be rested, elevated and exposed in a cool environment (p30)','Lifestyle: reduce weight in those who are obese/overweight; limit intake of purine-rich food especially of animal origin except omega-3 polyunsaturated fatty acid-rich fish; limit intake of all types of alcohol (beer, wine and liquor); limit intake of high-fructose corn syrup (Recommendation 5, p30)','If clinical suspicion of gout is high, SU may be repeated two weeks or more after complete resolution of flare (p15)','Gout is managed at primary care: refer to the nearest Klinik Kesihatan (Green Zone rules)'],
      links:[['#gz-rules--gout','Green Zone gout referrals'],['#gz-rules--kk','Redirect to a KK or GP']], gap:'CPG 12.1 (p27–30), 7.3 (p15) and Appendices 3C and 4. The CPG gives no follow-up interval after a flare, no return advice and no patient leaflet; the diet and medicine advice is in the Diet and medicines tab.'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Flare drugs', notes:[
      {h:'Colchicine by creatinine clearance', src:'Appendix 5B (p68–69). *Use of colchicine to treat gout flares is not recommended in patients with renal impairment (CrCl <80 ml/min) already receiving prophylactic colchicine.', table:{head:['CrCl (ml/min)','Gout flare treatment*','Gout flare prophylaxis'], rows:[
        ['>60 - 89','No dosage adjustment, monitor closely for AE','No dosage adjustment, monitor closely for AE'],
        ['30 - 60','No dosage adjustment, monitor closely for AE','Limit dose to 0.5 mg daily'],
        ['<30, renal replacement therapy','Consider alternative therapy','Consider alternative therapy']]}},
      {h:'Colchicine in hepatic impairment', src:'Appendix 5B (p69). **Use of colchicine to treat gout flares is not recommended in patients with hepatic impairment already receiving prophylactic colchicine.', table:{head:['Hepatic impairment','Gout flare treatment**','Gout flare prophylaxis'], rows:[
        ['Mild to moderate','No dosage adjustment, monitor closely for AE','No dosage adjustment, monitor closely for AE'],
        ['Severe','Dosage adjustment not required but may be considered; treatment course should not be repeated more frequently than every 14 days','Consider dosage adjustment']]}},
      {h:'Colchicine with a CYP3A4 or P-glycoprotein inhibitor, now or in the last 14 days', src:'Appendix 5B (p70). ***Do not repeat courses of colchicine therapy until 3 days have elapsed.', table:{head:['Recent or concomitant therapy','Gout flare treatment***','Gout flare prophylaxis'], rows:[
        ['Potent CYP3A4 inhibitor e.g. clarithromycin, ketoconazole, itraconazole and certain protease inhibitors','0.5 mg at first sign of flare, followed by 0.25 mg one hour later','0.25 mg OD or every other day'],
        ['Moderate CYP3A4 inhibitor e.g. diltiazem, erythromycin, fluconazole, verapamil','1 mg at first sign of flare','0.25 mg BD, 0.5 mg OD or 0.25 mg OD'],
        ['P-glycoprotein inhibitor e.g. cyclosporin, ranolazine','0.5 mg at first sign of flare','0.25 mg OD or every other day']]}},
      {h:'Colchicine for flare prophylaxis', src:'Appendix 5B (p68) and 12.2d (p39)', items:['0.5 mg OD or BD. Prophylactic therapy may be beneficial for at least the first 3 to 6 months of ULT therapy.','Colchicine at a reduced dose is a recommended prophylaxis treatment in gout patients with CKD.']}
    ]},
    {l:'Diagnosis', notes:[
      {h:'Serum urate', src:'7.3 (p15)', items:['Diagnosis of gout should not be made based on hyperuricaemia alone.','The cut-off SU level to diagnose hyperuricaemia based on urate saturation threshold is a SU concentration of >6.8 mg/dL (408 µmol/L) at physiological pH and body temperature.']},
      {h:'Plain radiograph', src:'7.4 (p15)', items:['Changes in plain radiograph take several years to develop. Thus, utility of plain radiograph is limited in early gout but may be helpful in supporting the diagnosis in later stages.']},
      {h:'Table 3: baseline investigations in gout', src:'p20', table:{head:['Investigations','Rationale'], rows:[
        ['Full blood count (FBC)','To exclude infection or lymphoproliferative/myeloproliferative disorders'],
        ['Renal profile (RP)','To exclude renal disease leading to hyperuricaemia, renal disease secondary to chronic nephropathy, urolithiasis'],
        ['Liver function test (LFT)','Baseline prior to commencement of treatment'],
        ['SU','Presence of hyperuricaemia is supportive of gout'],
        ['Fasting blood sugar (FBS)','To detect the presence of diabetes/insulin resistance'],
        ['Fasting serum lipid (FSL)','To detect hyperlipidaemia'],
        ['Full and microscopic examination of urine (Urine FEME)','Presence of blood and/or protein may suggest renal disorders'],
        ['Plain radiography of affected joint(s)','To detect abnormalities caused by gout'],
        ['Ultrasound of the kidneys, ureters and bladder (USG KUB)','To detect urolithiasis or renal parenchymal disease'],
        ['Electrocardiogram (ECG)','To detect CHD']]}}
    ]},
    {l:'Urate-lowering', notes:[
      {h:'Allopurinol: starting dose by kidney function', src:'Appendix 5A (p63)', table:{head:['eGFR (ml/min/1.73m²)','Initial dose','Dose increment'], rows:[
        ['>60','100 mg daily','Increase by 100 mg every 4 weeks* if tolerated until SU target is reached or to a maximum of 900 mg daily'],
        ['30 - 60','50 mg daily','Increase by 50 mg every 4 weeks if tolerated until SU target is reached or to a maximum of 900 mg daily**'],
        ['<30','50 mg every other day','Increase to 50 mg every day after 4 weeks, then increase by 50 mg every 4 weeks thereafter if tolerated until SU target is reached or to a maximum of 900 mg daily**']]}},
      {h:'Allopurinol: the rest of Appendix 5A', src:'p63–64', items:['Initial: 100 mg/day, adjusted in increments of 100 mg every 2 - 4 weeks according to SU concentration until target is achieved. Maintenance: ≥300 mg/day are usually needed to reach the desired SU target. Maximum: 900 mg/day. Frequency: Once daily in a single dose or in 2 or 3 divided doses if >300 mg/day','*More rapid titration e.g. every 2 weeks is possible, although this needs to be balanced against the increased risk of adverse effects','**Consider referral to or discussion with rheumatologist if SU targets are not achieved or increase in dose is not tolerated','Contraindication: hypersensitivity to allopurinol. Caution: HLA-B*58:01-positive patient']},
      {h:'Febuxostat', src:'Appendix 5A (p65)', items:['Initial: 40 mg OD; if SU level is >6.0 mg/dL (360 µmol/L) after 2 - 4 weeks, 80 mg OD may be considered. Maintenance: 40 mg or 80 mg OD, dose may be increased to 120 mg OD if clinically indicated','Renal impairment: CrCl ≥30 ml/min, no adjustment; CrCl 15-29 ml/min, maximum dose 40 mg OD','Black box warning: gout patients with established CV disease treated with febuxostat had a higher rate of CV death compared with those treated with allopurinol in a CV outcomes study. Consider the risks and benefits when prescribing febuxostat or continuing treatment.','Contraindications: hypersensitivity to febuxostat; concomitant use of azathioprine/mercaptopurine due to increase in toxicity']}
    ]},
    {l:'Pregnancy', notes:[
      {h:'Appendix 5C: treatment of gout in pregnancy and lactation', src:'CPG p73, without probenecid, benzbromarone and pegloticase. Category C (US FDA, p74): use with caution if benefits outweigh risks.', table:{head:['Drug','Pregnancy','Lactation'], rows:[
        ['Allopurinol','Category C','Limited human data; potential toxicity'],
        ['Febuxostat','Category C','No human data; potential toxicity'],
        ['Colchicine','Category C','Limited human data; probably compatible'],
        ['NSAID: ibuprofen','Restricted to first and second trimester','Compatible'],
        ['NSAID: diclofenac','Restricted to first and second trimester','No human data; probably compatible'],
        ['NSAID: naproxen','Restricted to first and second trimester','Limited human data; probably compatible'],
        ['NSAID: meloxicam','Restricted to first and second trimester','No human data; probably compatible'],
        ['COX-2 inhibitor: celecoxib','Should be avoided','Limited human data'],
        ['COX-2 inhibitor: etoricoxib','Should be avoided','No data'],
        ['Prednisolone','Category C','Compatible'],
        ['Triamcinolone','Category C','No human data; probably compatible']]}}
    ]},
    {l:'Diet and medicines', notes:[
      {h:'Dietary recommendations for gout', src:'Appendix 3C (p60–61)', items:['Fluid intake of at least two litres a day unless on fluid restriction.','Healthy, balanced diet as in DASH diet recommendations.','Restriction advised, animal-based purine-rich foods: meat extract (e.g. Bovril), bouillon, broth, consommé, gravy; internal organs (brain, heart, sweetbread, kidney); seafood (e.g. shellfish, scallop, shrimp, lobster); goose; red meat (e.g. beef, pork, mutton)','Restriction advised, fructose/sugar: high-fructose corn syrup; sugar-sweetened beverages; high intake of fruit juices; honey; sugars, syrups, sweets; desserts; processed tomato sauce and chilli sauce; fruit jam','Restriction advised: alcoholic beverages (e.g. beer, wine, liquor)','No restriction required, n-3 PUFA-rich fish: anchovies; mackerel (ikan kembung, tenggiri, makarel); herring (ikan parang); sardines (ikan sardin, tamban); salmon; trout','No restriction required, plant-based purine-rich foods: soy-based food and non-soy legumes e.g. peas, beans, lentils; spinach; mushrooms; cauliflower; oats; nuts and seeds']},
      {h:'Medicines and the risk of gout', src:'Table 1 (p5) and 12.1c (p29)', items:['Increase risk: diuretics; non-losartan angiotensin II receptor blockers; angiotensin-converting enzyme (ACE) inhibitors; β-blockers; cyclosporine. Reduce risk: losartan; calcium channel blockers','Medications that increase risk of gout should be discontinued or replaced with alternatives if possible. The decision to discontinue a medication should be made based on consideration of its benefits weighed against risks in patients.','The CPG DG recommends that aspirin if taken for appropriate indications should not be discontinued in gout patients as there are limited alternatives.']},
      {h:'Ice packs', src:'Appendix 4 (p62)', items:['Use of ice pack for gout flare affecting first toe. Wrap towel around ice pack. Place wrapped ice pack around affected joint.']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Gout (Second Edition). Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2021. e-ISBN 978-967-2887-28-7. Available at http://www.moh.gov.my','Copyright MaHTAS. Content reproduced with acknowledgement to MaHTAS, not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.','Appendix 5 is adapted in the CPG from the Ministry of Health Medicines Formulary 2021 and other drug references (p74–75).'],
  see:[['#gz-rules--gout','Green Zone rules: gout referrals'],['#mau-admission','Admission to MAU (acute gout flare is on its list)'],['#pain','Pain (ebook pathway): the CPG does not cover paracetamol or opioids']]
};

/* The Green Zone gout rule (department letter of 29 Nov 2024) points to the national guideline: a link only, its wording stays */
P['gz-rules'].nodes.gout.links = [...(P['gz-rules'].nodes.gout.links || []), ['#gout-cpg', 'Gout CPG, 2nd edition (2021)']];
