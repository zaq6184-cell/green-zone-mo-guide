/* ================= 12 Nov 2026: the ED extension directory =================
   Source: "Nombor Sambungan Jabatan – ED", a one-page list of the department's extensions that the guide owner gave on
   12 Nov 2026. It prints no issuer or date, so it is a department note (standing rule 6) with that source and date, and
   its extensions are as printed, read from the picture at full size. Room names are as printed (including "Dekontiminasi");
   kw holds the words people type in English, for search only. The first group has no heading in the picture: "ED areas"
   is the guide's own label. Three extensions are printed for two rooms each (6699, 6590, 5346): marked on the rows and
   under Still to confirm. Rows cross-refer to the guide's own numbers where they meet: Resus (the MAU critical patient
   flow's "ED Resus" card), MECC 5333 (the ED Call Centre in the Code Blue Manual) and 6700 (its Call Centre 2). */
const EXTDIR = {
  src:'Nombor Sambungan Jabatan – ED (the department\'s extension list, no issuer or date printed), given by the guide owner on 12 Nov 2026',
  top:['Kaunter Pro / Triage Sekunder / Green Zone', ['6705'], 'green zone secondary triage pro counter'],
  groups:[
    {k:'areas', h:'ED areas', j:'t-sapphire', rows:[
      ['Bilik Prosedur', ['6589'], 'procedure room'],
      ['Green Zone', ['6705'], 'green zone'],
      ['Yellow Zone (A+B)', ['6799', '6798'], 'yellow zone'],
      ['Resus I', ['5339', '5326', '7557'], 'resuscitation red zone', 'The guide\'s ED Resus card (MAU critical patient flow) gives 5339 / 5326'],
      ['Resus II', ['5324', '5360'], 'resuscitation amber zone', 'The ED Resus card calls these the Amber Zone'],
      ['ISO 1', ['7427', '7428'], 'isolation'],
      ['ISO 2A', ['2908'], 'isolation'],
      ['ISO 2B', ['5329'], 'isolation'],
      ['ISO 3 / Tent', ['5364'], 'isolation tent'],
      ['Observation Ward', ['5359'], 'observation ward ow'],
      ['Bilik Dekontiminasi', ['5363'], 'decontamination dekontaminasi'],
      ['Bilik Mawar', ['7425'], 'mawar'],
      ['CMSA', ['6703'], 'cmsa'],
      ['MECC', ['5333', '5375'], 'call centre code blue', '5333 is the ED Call Centre for Code Blue (Code Blue Manual)'],
      ['MECC SV', ['5330'], 'call centre supervisor']]},
    {k:'ops', h:'Operations & Support', j:'t-garnet', rows:[
      ['Bilik Porter PPK', ['6699'], 'porter attendant ppk', 'The same number is printed for Pejabat Rekod Kecemasan'],
      ['Kaunter Xray Kecemasan', ['7129'], 'x-ray xray radiography counter'],
      ['Farmasi Kecemasan', ['6518', '6100'], 'pharmacy emergency pharmacy'],
      ['Kaunter Pendaftaran Kecemasan', ['5338'], 'registration counter'],
      ['Dewan Bedah Kecemasan: Kaunter AE OT', ['6701', '6277', '6278'], 'emergency operating theatre ot counter'],
      ['Dewan Bedah Kecemasan: Bilik Sister', ['6712', '5331'], 'emergency operating theatre ot sister']]},
    {k:'office', h:'Pejabat Pengurusan', j:'t-bronze', rows:[
      ['Pejabat Rekod Kecemasan', ['6699'], 'medical records office', 'The same number is printed for Bilik Porter PPK'],
      ['Pejabat Ketua Jabatan', ['5320'], 'head of department hod office'],
      ['PA HOD', ['5341', '5322'], 'personal assistant head of department'],
      ['Bilik Penyelia (CDC2)', ['6700'], 'supervisor call centre 2', 'Call Centre 2 in the Code Blue Manual'],
      ['Pejabat Pengurusan (Penyelia/Matron)', ['5346'], 'management office supervisor matron', 'The same number is printed for Bilik Ketua Jururawat'],
      ['Stor Kecemasan', ['5373'], 'store']]},
    {k:'docs', h:'Doctors & PPK (YM)', j:'t-plum', rows:[
      ['Bilik Pegawai Perubatan (YM): MOIC', ['6590'], 'medical officer in charge doctors room', 'The same number is printed for Bilik PPK (YM)'],
      ['Bilik Ketua Jururawat', ['5346'], 'head nurse sister in charge', 'The same number is printed for Pejabat Pengurusan (Penyelia/Matron)'],
      ['Bilik PPK (YM)', ['6590'], 'ppk room', 'The same number is printed for the MOIC']]},
    {k:'ucc', h:'UCC / PHC', j:'t-teal', rows:[
      ['Kaunter Daftar', ['5436'], 'registration counter ucc'],
      ['Kaunter PRO', ['5473'], 'pro counter ucc'],
      ['Bilik Konsultasi', ['5465'], 'consultation room ucc'],
      ['PHC / Interfasiliti / Intrafasiliti', ['6158', '6765'], 'phc interfacility intrafacility transfer']]}
  ]
};
