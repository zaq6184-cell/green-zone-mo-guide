/* 24 Nov 2026: Malay versions of the seven discharge advice tabs (the `advice` arrays of mild-tbi, dengue, asthma-zone,
   gastroenteritis, renal-colic, abdominal-pain and hypoglycaemia) and of the five patient journey stops (the `say` lines of
   JOURNEY in engine.js), for the Malay read-aloud. Translation approved by Krishna on 24 Nov 2026 ("Approved, publish"), as drafted: the English stays the source (rules 5
   and 8); one Malay line per English line, in the same order, every drug name, dose, number and time kept as printed. Where each
   line was unsure: narration/ADVICE-MS-REVIEW.md. */
const ADVICE_MS = {
  'mild-tbi':[
    'Selepas gegaran otak, pesakit sebaiknya ditemani oleh seorang dewasa yang bertanggungjawab, jika boleh',
    'Pergi ke Jabatan Kecemasan yang terdekat jika berlaku: hilang kesedaran, keliru, pekak yang baru berlaku, hilang imbangan badan, penglihatan kabur atau berganda, lemah pada mana-mana tangan atau kaki, terlalu mengantuk atau sentiasa mahu tidur, muntah, berdarah dari mana-mana telinga, sawan, atau sakit kepala yang teruk dan tidak hilang dengan ubat tahan sakit',
    'Pastikan telefon sentiasa dekat dengan anda, berehat, tidur dengan teratur, dan ambil ubat tahan sakit seperti paracetamol untuk sakit kepala',
    'Jangan tinggal seorang diri di rumah selama 48 jam selepas keluar dari hospital',
    'Jangan minum arak atau mengambil dadah',
    'Jangan ambil aspirin atau pil tidur',
    'Jangan bermain atau berlatih sukan yang melibatkan perlanggaran badan sekurang-kurangnya 3 minggu tanpa berbincang dengan doktor anda',
    'Jangan memandu'
  ],
  'dengue':[
    'Lakukan: rehat secukupnya',
    'Lakukan: minum air secukupnya (lebih daripada 8 gelas atau 2 liter bagi orang biasa)',
    'Lakukan: ambil paracetamol (tidak melebihi 4 g sehari)',
    'Lakukan: lap badan dengan kain yang dibasahkan dengan air suam',
    'Lakukan: guna ubat penghalau nyamuk atau berehat di dalam kelambu, walaupun pada waktu siang',
    'Lakukan: cari dan hapuskan tempat pembiakan nyamuk di dalam dan di sekitar rumah',
    'Jangan ambil NSAIDs (ubat tahan sakit); jika anda sudah mengambilnya, rujuk doktor anda',
    'Antibiotik tidak diperlukan',
    'Jangan berurut, berbekam atau buat gua sha'
  ],
  'asthma-zone':[
    'Ubat pencegah (MDI budesonide) setiap hari; ubat pelega (MDI salbutamol) apabila perlu',
    'Semakin teruk (terjaga pada waktu malam, bertambah teruk ketika selesema): ambil ubat pelega setiap 4 jam, teruskan ubat pencegah, dan datang ke hospital jika tidak bertambah baik, dengan membawa MDI dan spacer',
    'Teruk (berdehit yang tidak reda, sesak nafas, susah bercakap): terus datang ke hospital atau hubungi ambulans, dan ambil 4 sedutan ubat pelega setiap 4 minit dalam perjalanan',
    'Basuh spacer seminggu sekali dengan air sabun, bilas dan biarkan ia kering sendiri; jangan lap dengan kain atau tisu, dan jangan berus bahagian dalamnya',
    'Kenali pencetus asma anda: asap, bulu haiwan, udara sejuk, habuk, senaman dan jangkitan'
  ],
  'gastroenteritis':[
    'Teruskan mengambil ubat yang diberi oleh doktor seperti yang diarahkan',
    'Minum banyak air (ORS, sup jernih, jus buah yang dicairkan) untuk mengelakkan kekurangan air dalam badan',
    'Elakkan minuman berkafein, beralkohol dan bergula, kerana ia boleh memburukkan cirit-birit',
    'Rehat secukupnya',
    'Jaga kebersihan tangan, terutamanya selepas menggunakan tandas dan sebelum makan',
    'Dapatkan rawatan jika muntah berterusan atau setiap kali minum dimuntahkan semula, terdapat darah dalam najis atau demam tinggi yang berterusan, atau sakit perut yang teruk atau simptom semakin teruk'
  ],
  'renal-colic':[
    'Minum air secukupnya: minum 6 hingga 8 gelas air sehari seperti yang diarahkan, untuk membantu mengurangkan sakit dan mengeluarkan sumbatan dari saluran kencing',
    'Tapis air kencing setiap kali anda membuang air kecil, dan bawa batu yang keluar kepada doktor untuk diperiksa',
    'Ambil ubat tahan sakit secara berkala seperti yang diarahkan oleh doktor',
    'Dapatkan bantuan di hospital yang terdekat jika sakit, demam atau muntah bertambah teruk, atau jika air kencing berubah: kencing berkurang, keruh, berbau busuk',
    'Kekal aktif; batu karang lebih kerap berlaku jika anda kurang aktif atau banyak duduk sepanjang hari',
    'Berehat, dan jauhi arak dan makanan laut'
  ],
  'abdominal-pain':[
    'Datang semula ke hospital dengan segera jika sakit bertambah teruk atau timbul simptom baru, seperti muntah, cirit-birit, demam atau berdarah dari dubur',
    'Elakkan kafein, makanan berlemak dan makanan pedas',
    'Ambil ubat tahan sakit biasa seperti paracetamol, dan ubat anti-refluks',
    'Datang semula untuk rawatan susulan di EMACC atau EMWATCH dalam masa 24 hingga 48 jam'
  ],
  'hypoglycaemia':[
    'Elakkan memandu, berbasikal, berenang atau mengendalikan jentera berat untuk 24–48 jam yang akan datang',
    'Anda mungkin kurang dapat merasakan tanda gula darah rendah selama 48–72 jam: periksa gula darah sebelum makan, bersenam dan memandu',
    'Sentiasa bawa karbohidrat yang cepat bertindak (gula-gula keras, tablet dekstrosa)',
    'Catat semua bacaan gula darah dan bawa catatan itu semasa pemeriksaan yang akan datang',
    'Dapatkan rawatan jika gula darah rendah (hipo) menyebabkan pengsan atau sawan, tidak pulih dengan karbohidrat yang cepat bertindak, atau gula darah kekal rendah'
  ]
};
const JOURNEY_MS = [
  'Pesakit bergerak sehala. Triaj, kemudian triaj sekunder, kemudian ECG, cucian luka atau balutan jika perlu, dan seterusnya kepada anda.',
  'Anda mengisi slip hijau. Untuk diagnosis, buka laluannya.',
  'Bilik rawatan memanggil nombor giliran, menjalankan setiap arahan, dan merekodkannya.',
  'Menunggu keputusan? Hantar pesakit ke CCA. Warga emas, pesakit ACS, atau sesiapa yang memerlukan ubat segera, tidak sekali-kali menunggu di luar.',
  'Sebelum discaj, nilai semula pesakit dan semak setiap keputusan. Selepas CT otak, minta EP menyemak, dan tempah susulan EMACC atau EMWATCH. Tidak pasti, atau keputusan disposisi tersekat? Hubungi EP yang bertugas.'
];
