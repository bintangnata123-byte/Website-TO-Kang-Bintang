const paket1 = {
  bahasaIndonesia: [
    // --- GRUP 1: TEKS INFORMASI TUNGGAL (SOAL 1-3) ---
    {
      id: 1,
      tipe: "PG",
      stimulus: "<b>Bacalah teks berikut untuk menjawab soal nomor 1 s.d. 3!</b><br><br><b>Urban Farming: Solusi Ketahanan Pangan di Lahan Sempit</b><br>Keterbatasan lahan pertanian di wilayah perkotaan mendorong masyarakat mengadopsi konsep <i>urban farming</i> atau pertanian perkotaan. Metode ini memanfaatkan pekarangan rumah, dinding vertikal, hingga atap bangunan untuk menanam sayuran dan buah-buahan. Teknik yang populer digunakan meliputi hidroponik, akuaponik, dan vertikultur. Hidroponik menanam tumbuhan menggunakan larutan nutrisi mineral dalam air tanpa media tanah, sehingga penggunaan air dapat dihemat hingga 80 persen dibandingkan pertanian konvensional.<br><br>Selain menghasilkan bahan pangan segar yang bebas pestisida kimia, pertanian perkotaan berperan memperbaiki kualitas iklim mikro. Keberadaan tanaman hijau di sela-sela beton bangunan mampu menyerap karbon dioksida dan menurunkan suhu udara lokal akibat efek pulau bahang perkotaan (<i>urban heat island</i>). Dari sisi ekonomi, keluarga dapat menekan pengeluaran belanja dapur harian sekaligus memperoleh penghasilan tambahan jika hasil panen dijual ke tetangga atau komunitas sekitar. Tantangan utama penerapan metode ini terletak pada biaya instalasi awal serta konsistensi perawatan nutrisi tanaman.",
      pertanyaan: "Berdasarkan teks tersebut, keunggulan utama teknik hidroponik dibandingkan pertanian konvensional terletak pada aspek ...",
      opsi: [
        "A. bebas dari kebutuhan cahaya matahari secara langsung",
        "B. penghematan konsumsi air hingga delapan puluh persen",
        "C. biaya instalasi awal yang jauh lebih murah dan praktis",
        "D. tidak memerlukan pemantauan nutrisi secara berkala"
      ],
      kunci: "B",
      pembahasan: "Pada paragraf pertama disebutkan secara eksplisit bahwa hidroponik menggunakan larutan nutrisi dalam air sehingga penggunaan air dapat dihemat hingga 80 persen dibandingkan pertanian konvensional."
    },
    {
      id: 2,
      tipe: "PGK_MCMA",
      stimulus: "(Mengacu pada teks 'Urban Farming: Solusi Ketahanan Pangan di Lahan Sempit')",
      pertanyaan: "Manakah dampak positif penerapan <i>urban farming</i> bagi lingkungan dan ekonomi keluarga berdasarkan teks? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Mengurangi suhu udara lokal akibat efek pulau bahang perkotaan.",
        "Menghilangkan sepenuhnya kebutuhan pupuk dan nutrisi bagi tanaman.",
        "Menekan pengeluaran rutin rumah tangga untuk membeli sayuran.",
        "Menyediakan bahan pangan segar yang terbebas dari pestisida kimia."
      ],
      kunci: [0, 2, 3],
      pembahasan: "Paragraf kedua menyebutkan tiga manfaat utama: menurunkan suhu udara lokal (opsi 1), menekan pengeluaran belanja dapur (opsi 3), dan menghasilkan pangan bebas pestisida kimia (opsi 4). Opsi 2 salah karena hidroponik tetap butuh larutan nutrisi."
    },
    {
      id: 3,
      tipe: "PGK_KATEGORI",
      stimulus: "(Mengacu pada teks 'Urban Farming: Solusi Ketahanan Pangan di Lahan Sempit')",
      pertanyaan: "Tentukan <b>Sesuai</b> atau <b>Tidak Sesuai</b> untuk setiap pernyataan evaluasi berikut berdasarkan isi teks!",
      pernyataan: [
        "Seseorang yang tinggal di rumah tanpa halaman tanah tetap dapat menerapkan pertanian perkotaan.",
        "Pertanian perkotaan sama sekali tidak memiliki kendala dalam proses penerapannya oleh pemula.",
        "Penghijauan di atap bangunan berkontribusi dalam menyerap gas karbon dioksida di perkotaan."
      ],
      kategori: ["Sesuai", "Tidak Sesuai"],
      kunci: ["Sesuai", "Tidak Sesuai", "Sesuai"],
      pembahasan: "1) Sesuai, karena bisa memakai dinding vertikal atau atap dengan hidroponik. 2) Tidak Sesuai, karena paragraf 2 menyebut tantangan biaya instalasi awal dan konsistensi perawatan. 3) Sesuai dengan kalimat kedua paragraf 2."
    },

    // --- GRUP 2: TEKS FIKSI CERPEN (SOAL 4-6) ---
    {
      id: 4,
      tipe: "PG",
      stimulus: "<b>Bacalah kutipan cerita berikut untuk menjawab soal nomor 4 s.d. 6!</b><br><br><b>Jam Dinding Tua di Ruang Tengah</b><br>Setiap pukul lima sore, dentang jam dinding kayu di ruang tengah selalu memecah kesunyian rumah Nenek Sari. Bagi Raka, cucunya yang baru pindah dari kota, suara berisik itu awalnya terasa mengganggu konsentrasi belajarnya. Ia sering melirik jam tua berbandul kuningan tersebut dengan kening berkerut. Menurut Raka, benda kuno itu sudah selayaknya diganti dengan jam digital yang senyap dan modern.<br><br>Suatu sore, listrik di seluruh desa padam akibat badai petir. Ponsel Raka kehabisan daya, sementara tugas sekolahnya harus selesai sebelum pukul delapan malam. Dalam temaram cahaya lilin, Raka panik karena tidak tahu sudah pukul berapa. Tepat saat itu, jam tua di dinding berdentang enam kali dengan gagah. Nenek Sari tersenyum hangat sambil menyodorkan secangkir teh jahe. 'Benda tua tidak selalu usang, Nak. Ia tetap setia bekerja saat teknologi modern tertidur,' ujar Nenek lembut. Raka terdiam, menatap bandul kuningan yang terus berayun teratur.",
      pertanyaan: "Perubahan sikap tokoh Raka terhadap jam dinding tua milik neneknya dalam cerita tersebut adalah ...",
      opsi: [
        "dari merasa takut menjadi sangat kagum pada keindahannya",
        "dari merasa terganggu menjadi menyadari nilai kegunaannya",
        "dari ingin memperbaiki menjadi berniat menjualnya ke kolektor",
        "dari tidak peduli menjadi kesal karena suaranya terlalu pelan"
      ],
      kunci: "B",
      pembahasan: "Pada awal cerita Raka merasa suara jam mengganggu dan ingin menggantinya, namun setelah listrik padam ia menyadari bahwa jam mekanik tua itu tetap berguna saat perangkat digital mati."
    },
    {
      id: 5,
      tipe: "PGK_MCMA",
      stimulus: "(Mengacu pada kutipan cerita 'Jam Dinding Tua di Ruang Tengah')",
      pertanyaan: "Unsur latar dan sudut pandang yang tergambar dalam kutipan cerita tersebut adalah ... (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Latar waktu terjadi pada sore hingga menjelang malam hari.",
        "Menggunakan sudut pandang orang pertama pelaku utama ('aku').",
        "Latar suasana berubah dari sunyi yang mengganggu menjadi hangat dan reflektif.",
        "Menggunakan sudut pandang orang ketiga serba tahu."
      ],
      kunci: [0, 2, 3],
      pembahasan: "Cerita menyebut pukul lima sore dan menjelang pukul delapan malam (opsi 1 benar), suasana berubah dari terganggu menjadi hangat saat Nenek memberi teh (opsi 3 benar), dan narator menyebut nama tokoh 'Raka' dan 'Nenek Sari' sehingga menggunakan sudut pandang orang ketiga (opsi 4 benar)."
    },
    {
      id: 6,
      tipe: "PGK_KATEGORI",
      stimulus: "(Mengacu pada kutipan cerita 'Jam Dinding Tua di Ruang Tengah')",
      pertanyaan: "Tentukan <b>Setuju</b> atau <b>Tidak Setuju</b> terhadap pesan moral dan refleksi berikut berdasarkan cerita!",
      pernyataan: [
        "Kemajuan teknologi modern sepenuhnya menggantikan fungsi benda-benda tradisional di segala situasi.",
        "Ucapan Nenek Sari menyindir Raka secara kasar agar tidak meremehkan barang peninggalan orang tua.",
        "Cerita ini mengajarkan pembaca untuk menghargai ketangguhan dan nilai guna benda lama sebelum menyingkirkannya."
      ],
      kategori: ["Setuju", "Tidak Setuju"],
      kunci: ["Tidak Setuju", "Tidak Setuju", "Setuju"],
      pembahasan: "1) Tidak Setuju, cerita justru menunjukkan saat listrik mati teknologi modern tidak berfungsi. 2) Tidak Setuju, Nenek berbicara dengan tersenyum hangat dan lembut, bukan kasar. 3) Setuju, sesuai amanat utama cerita."
    },

    // --- GRUP 3: TEKS INFORMASI JAMAK / PERBANDINGAN (SOAL 7-9) ---
    {
      id: 7,
      tipe: "PG",
      stimulus: "<b>Bacalah dua teks berikut untuk menjawab soal nomor 7 s.d. 9!</b><br><br><b>Teks 1 (Artikel Ilmiah Populer)</b><br>Konsumsi gula berlebih pada remaja meningkatkan risiko resistensi insulin dan obesitas dini. Badan kesehatan merekomendasikan batas konsumsi gula harian maksimal 50 gram atau setara empat sendok makan. Minuman kemasan berpemanis sering kali menyumbang lebih dari separuh batas harian tersebut hanya dalam satu botol berukuran 350 mililiter.<br><br><b>Teks 2 (Kampanye Media Sosial)</b><br><i>'Haus pas pulang sekolah? Jangan langsung sambar minuman manis kekinian! Tahu nggak sih, segelas boba atau teh kemasan favoritmu bisa mengandung 7 sendok makan gula sekaligus? Yuk, mulai bawa botol minum isi air mineral dari rumah. Selain hemat uang jajan, tubuhmu juga tetap bugar dan bebas dari lonjakan gula darah!'</i>",
      pertanyaan: "Perbedaan utama gaya penyajian bahasa antara Teks 1 dan Teks 2 adalah ...",
      opsi: [
        "Teks 1 menggunakan bahasa baku dan informatif, sedangkan Teks 2 menggunakan bahasa santai dan persuasif.",
        "Teks 1 berisi opini pribadi penulis, sedangkan Teks 2 menyajikan data statistik hasil penelitian medis.",
        "Teks 1 ditujukan khusus untuk orang tua, sedangkan Teks 2 ditujukan bagi produsen minuman kemasan.",
        "Teks 1 menggunakan majas perbandingan, sedangkan Teks 2 menggunakan istilah teknis kesehatan."
      ],
      kunci: "A",
      pembahasan: "Teks 1 menggunakan bahasa baku, objektif, dan istilah medis ('resistensi insulin'), sedangkan Teks 2 memakai sapaan akrab ('nggak sih', 'Yuk') yang mengajak pembaca (persuasif)."
    },
    {
      id: 8,
      tipe: "PGK_MCMA",
      stimulus: "(Mengacu pada Teks 1 dan Teks 2)",
      pertanyaan: "Manakah informasi yang selaras dan saling mendukung di antara kedua teks tersebut? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Satu porsi minuman manis kemasan dapat melampaui atau mendekati batas aman gula harian.",
        "Membawa botol air mineral dari rumah dapat menghemat pengeluaran uang jajan pelajar.",
        "Konsumsi minuman berpemanis secara berlebihan berdampak buruk bagi kesehatan tubuh.",
        "Batas maksimal konsumsi gula harian remaja adalah tujuh sendok makan per hari."
      ],
      kunci: [0, 2],
      pembahasan: "Kedua teks sama-sama menyoroti tingginya kandungan gula dalam satu porsi minuman kemasan (opsi 1) dan bahayanya bagi kesehatan (opsi 3). Opsi 2 hanya ada di Teks 2, sedangkan opsi 4 keliru karena batasnya 4 sendok makan."
    },
    {
      id: 9,
      tipe: "PGK_KATEGORI",
      stimulus: "(Mengacu pada Teks 1 dan Teks 2)",
      pertanyaan: "Tentukan <b>Benar</b> atau <b>Salah</b> untuk setiap pernyataan perbandingan isi kedua teks berikut!",
      pernyataan: [
        "Kandungan gula dalam segelas minuman boba pada Teks 2 melebihi batas rekomendasi harian pada Teks 1.",
        "Kedua teks sama-sama menyarankan penggantian minuman manis dengan jus buah tanpa gula.",
        "Teks 2 lebih efektif menarik perhatian remaja karena menggunakan kalimat sapaan langsung dan ajakan praktis."
      ],
      kategori: ["Benar", "Salah"],
      kunci: ["Benar", "Salah", "Benar"],
      pembahasan: "1) Benar, 7 sendok makan (Teks 2) melebihi batas 4 sendok makan (Teks 1). 2) Salah, Teks 2 menyarankan air mineral, Teks 1 tidak menyebut pengganti spesifik. 3) Benar."
    },

    // --- GRUP 4: TEKS PUISI (SOAL 10-12) ---
    {
      id: 10,
      tipe: "PG",
      stimulus: "<b>Bacalah puisi berikut untuk menjawab soal nomor 10 s.d. 12!</b><br><br><b>Pelita di Ujung Dermaga</b><br><i>Di bawah langit kelabu yang menggantung rendah,<br>Perahu-perahu kayu tertambat lelah setelah membelah gelombang.<br>Namun di ujung dermaga tua itu,<br>Sebuah lentera kecil tetap menyala, menolak padam ditiup angin malam.<br>Ia adalah mata bagi nelayan yang tersesat di pekat samudra,<br>Menuntun pulang langkah-langkah rindu menuju pelukan keluarga.</i>",
      pertanyaan: "Makna kata kias <i>pelita</i> atau <i>lentera kecil</i> dalam puisi tersebut melambangkan ...",
      opsi: [
        "kemewahan hidup masyarakat pesisir yang bekerja di pelabuhan",
        "harapan dan petunjuk arah yang memberi keselamatan di tengah kesulitan",
        "kemarahan alam terhadap para nelayan yang melaut saat cuaca buruk",
        "teknologi modern yang menggantikan peran bintang di langit malam"
      ],
      kunci: "B",
      pembahasan: "Lentera kecil yang 'menolak padam' dan 'menjadi mata bagi nelayan yang tersesat' melambangkan harapan dan penuntun jalan di tengah gelapnya tantangan."
    },
    {
      id: 11,
      tipe: "PGK_MCMA",
      stimulus: "(Mengacu pada puisi 'Pelita di Ujung Dermaga')",
      pertanyaan: "Citraan dan majas yang digunakan penyair untuk menghidupkan suasana dalam puisi tersebut adalah ... (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Citraan penglihatan melalui frasa 'langit kelabu' dan 'pekat samudra'.",
        "Majas personifikasi pada larik 'Perahu-perahu kayu tertambat lelah'.",
        "Citraan pendengaran melalui suara gemuruh petir yang menyambar dermaga.",
        "Majas metafora saat menyamakan lentera sebagai 'mata bagi nelayan'."
      ],
      kunci: [0, 1, 3],
      pembahasan: "Langit kelabu/pekat samudra = citraan penglihatan (1); perahu tertambat lelah = personifikasi (2); lentera adalah mata = metafora (4). Tidak ada suara gemuruh petir dalam teks (3 salah)."
    },
    {
      id: 12,
      tipe: "PGK_KATEGORI",
      stimulus: "(Mengacu pada puisi 'Pelita di Ujung Dermaga')",
      pertanyaan: "Tentukan <b>Sesuai</b> atau <b>Tidak Sesuai</b> untuk setiap interpretasi suasana dan nilai dalam puisi berikut!",
      pernyataan: [
        "Puisi menggambarkan suasana putus asa karena cuaca buruk menghalangi nelayan pulang.",
        "Larik terakhir memunculkan nuansa haru dan kehangatan ikatan keluarga.",
        "Sikap lentera yang 'menolak padam' mencerminkan keteguhan dalam memberi manfaat bagi sesama."
      ],
      kategori: ["Sesuai", "Tidak Sesuai"],
      kunci: ["Tidak Sesuai", "Sesuai", "Sesuai"],
      pembahasan: "1) Tidak Sesuai, karena lentera justru menuntun nelayan pulang dengan selamat. 2) Sesuai ('menuju pelukan keluarga'). 3) Sesuai."
    },

    // --- GRUP 5: TEKS PROSEDUR / EKSPOSISI (SOAL 13-15) ---
    {
      id: 13,
      tipe: "PG",
      stimulus: "<b>Bacalah teks berikut untuk menjawab soal nomor 13 s.d. 15!</b><br><br><b>Mengenali Jejak Digital dan Keamanan Data Pribadi</b><br>Setiap aktivitas yang dilakukan pengguna di internet, mulai dari mengunggah foto, menulis komentar, hingga mengisi formulir daring, akan meninggalkan rekam jejak yang disebut jejak digital. Jejak digital terbagi menjadi dua jenis, yakni jejak digital aktif dan jejak digital pasif. Jejak digital aktif tercipta ketika pengguna secara sadar membagikan informasi, misalnya mengirim surel atau mengunggah status di media sosial. Sebaliknya, jejak digital pasif terekam tanpa disadari pengguna, seperti riwayat pencarian, alamat IP, dan lokasi geografis yang dikumpulkan oleh situs web melalui kuki (<i>cookies</i>).<br><br>Jejak digital bersifat permanen dan sulit dihapus sepenuhnya meskipun unggahan asli telah ditarik. Informasi pribadi seperti tanggal lahir, nama ibu kandung, dan nomor induk kependudukan sangat rentan disalahgunakan oleh pelaku kejahatan siber untuk peretasan akun atau penipuan. Oleh karena itu, pengguna internet perlu menerapkan autentikasi dua faktor, menggunakan kata sandi yang kuat, serta memilah informasi sebelum mengunggahnya ke ruang publik digital.",
      pertanyaan: "Perbedaan mendasar antara jejak digital aktif dan jejak digital pasif menurut teks terletak pada ...",
      opsi: [
        "jenis perangkat gawai yang digunakan saat mengakses internet",
        "tingkat kesadaran pengguna saat data atau informasi tersebut terekam",
        "kemudahan menghapus riwayat data dari server situs web penyedia layanan",
        "kecepatan penyebaran informasi ke seluruh pengguna media sosial"
      ],
      kunci: "B",
      pembahasan: "Paragraf pertama menjelaskan bahwa jejak aktif dibuat secara sadar oleh pengguna, sedangkan jejak pasif terekam tanpa disadari pengguna."
    },
    {
      id: 14,
      tipe: "PGK_MCMA",
      stimulus: "(Mengacu pada teks 'Mengenali Jejak Digital dan Keamanan Data Pribadi')",
      pertanyaan: "Manakah aktivitas berikut yang termasuk kategori <b>jejak digital aktif</b> berdasarkan penjelasan teks? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Mengunggah foto kegiatan sekolah ke akun media sosial pribadi.",
        "Situs belanja daring merekam alamat IP perangkat pengunjung secara otomatis.",
        "Menuliskan ulasan atau komentar pada kolom diskusi video daring.",
        "Mengirimkan berkas tugas melalui surat elektronik (surel) kepada guru."
      ],
      kunci: [0, 2, 3],
      pembahasan: "Mengunggah foto (1), menulis komentar (3), dan mengirim surel (4) dilakukan secara sadar oleh pengguna sehingga termasuk jejak digital aktif. Perekaman alamat IP otomatis adalah jejak pasif."
    },
    {
      id: 15,
      tipe: "PGK_KATEGORI",
      stimulus: "(Mengacu pada teks 'Mengenali Jejak Digital dan Keamanan Data Pribadi')",
      pertanyaan: "Tentukan <b>Benar</b> atau <b>Salah</b> mengenai langkah pencegahan penyalahgunaan data berdasarkan teks!",
      pernyataan: [
        "Menghapus foto KTP yang sudah terlanjur diunggah ke media sosial publik menjamin data tersebut hilang 100% dari internet.",
        "Mengaktifkan fitur autentikasi dua faktor membantu melindungi akun dari risiko peretasan.",
        "Membagikan tanggal lahir lengkap di profil terbuka meningkatkan kerentanan terhadap kejahatan siber."
      ],
      kategori: ["Benar", "Salah"],
      kunci: ["Salah", "Benar", "Benar"],
      pembahasan: "1) Salah, paragraf 2 menegaskan jejak digital bersifat permanen dan sulit dihapus sepenuhnya meski unggahan asli ditarik. 2) Benar. 3) Benar."
    }
  ],

  matematika: [
    {
      id: 1,
      tipe: "PG",
      elemen: "Bilangan",
      pertanyaan: "Hasil dari $\\left(2^3 \\times 2^{-5}\\right)^{-2} + \\sqrt{144} : 3$ adalah ...",
      opsi: ["A. $8$", "B. $12$", "C. $20$", "D. $32$"],
      kunci: "C",
      pembahasan: "$\\left(2^{3 + (-5)}\\right)^{-2} + 12 : 3 = (2^{-2})^{-2} + 4 = 2^4 + 4 = 16 + 4 = 20$."
    },
    {
      id: 2,
      tipe: "PG",
      elemen: "Bilangan",
      pertanyaan: "Jarak dua kota pada peta adalah $6\\text{ cm}$. Jika peta tersebut menggunakan skala $1 : 1.500.000$, maka jarak sebenarnya kedua kota tersebut adalah ...",
      opsi: ["A. $9\\text{ km}$", "B. $45\\text{ km}$", "C. $90\\text{ km}$", "D. $900\\text{ km}$"],
      kunci: "C",
      pembahasan: "Jarak sebenarnya $= 6 \\times 1.500.000\\text{ cm} = 9.000.000\\text{ cm} = 90\\text{ km}$."
    },
    {
      id: 3,
      tipe: "PGK_MCMA",
      elemen: "Bilangan",
      pertanyaan: "Diketahui tiga bilangan pecahan: $P = \\frac{5}{8}$, $Q = 65\\%$, dan $R = 0,6$. Manakah pernyataan yang benar mengenai ketiga bilangan tersebut? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Urutan bilangan dari yang terkecil adalah $R, P, Q$.",
        "Selisih antara bilangan terbesar dan terkecil adalah $0,05$.",
        "Hasil penjumlahan $P + R$ lebih besar daripada $1,25$.",
        "Bentuk desimal dari $P$ adalah $0,625$."
      ],
      kunci: [0, 1, 3],
      pembahasan: "$P = 0,625$; $Q = 0,65$; $R = 0,60$. Urutan terkecil: $R (0,60) < P (0,625) < Q (0,65)$ (Opsi 1 & 4 benar). Selisih terbesar dan terkecil $= 0,65 - 0,60 = 0,05$ (Opsi 2 benar). $P + R = 0,625 + 0,60 = 1,225 < 1,25$ (Opsi 3 salah)."
    },
    {
      id: 4,
      tipe: "PG",
      elemen: "Aljabar",
      pertanyaan: "Bentuk sederhana dari $3(2x - 4y) - 2(x - 5y)$ adalah ...",
      opsi: ["A. $4x - 2y$", "B. $4x - 22y$", "C. $8x - 2y$", "D. $8x - 22y$"],
      kunci: "A",
      pembahasan: "$3(2x - 4y) - 2(x - 5y) = 6x - 12y - 2x + 10y = (6x - 2x) + (-12y + 10y) = 4x - 2y$."
    },
    {
      id: 5,
      tipe: "PG",
      elemen: "Aljabar",
      pertanyaan: "Harga $3$ buku tulis dan $2$ pensil adalah $\\text{Rp}19.000,00$, sedangkan harga $2$ buku tulis dan $5$ pensil adalah $\\text{Rp}20.000,00$. Jika Rina membeli $1$ buku tulis dan $1$ pensil, ia harus membayar sebesar ...",
      opsi: ["A. $\\text{Rp}6.500,00$", "B. $\\text{Rp}7.000,00$", "C. $\\text{Rp}7.500,00$", "D. $\\text{Rp}8.000,00$"],
      kunci: "B",
      pembahasan: "$3b + 2p = 19.000$ dan $2b + 5p = 20.000$. Eliminasi $b$: $6b + 4p = 38.000$ dikurangi $6b + 15p = 60.000 \\Rightarrow -11p = -22.000 \\Rightarrow p = 2.000$. Substitusi: $3b + 4.000 = 19.000 \\Rightarrow b = 5.000$. Jadi $b + p = 5.000 + 2.000 = \\text{Rp}7.000,00$."
    },
    {
      id: 6,
      tipe: "PGK_KATEGORI",
      elemen: "Aljabar",
      pertanyaan: "Diketahui barisan aritmetika memiliki suku ke-3 sama dengan $11$ dan suku ke-7 sama dengan $23$. Tentukan <b>Benar</b> atau <b>Salah</b> untuk setiap pernyataan berikut!",
      pernyataan: [
        "Beda antar suku pada barisan tersebut adalah $3$.",
        "Suku pertama ($U_1$) dari barisan tersebut adalah $4$.",
        "Jumlah $10$ suku pertama ($S_{10}$) barisan tersebut adalah $185$."
      ],
      kategori: ["Benar", "Salah"],
      kunci: ["Benar", "Salah", "Benar"],
      pembahasan: "$b = \\frac{U_7 - U_3}{7 - 3} = \\frac{23 - 11}{4} = 3$ (Benar). $U_1 = U_3 - 2b = 11 - 6 = 5$ (Pernyataan 2 Salah). $S_{10} = \\frac{10}{2}(2(5) + 9(3)) = 5(10 + 27) = 185$ (Benar)."
    },
    {
      id: 7,
      tipe: "PGK_MCMA",
      elemen: "Aljabar",
      pertanyaan: "Suatu fungsi $f$ didefinisikan dengan rumus $f(x) = 4 - 2x$ dengan daerah asal (domain) $D = \\{-1, 0, 1, 2, 3\\}$. Manakah pernyataan yang benar mengenai fungsi tersebut? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Daerah hasil (range) fungsi $f$ adalah $\\{-2, 0, 2, 4, 6\\}$.",
        "Nilai dari $f(-1) + f(3)$ adalah $4$.",
        "Bayangan dari $2$ oleh fungsi $f$ adalah $0$.",
        "Grafik fungsi memotong sumbu-$X$ di titik $(2, 0)$."
      ],
      kunci: [0, 1, 2, 3],
      pembahasan: "$f(-1)=6, f(0)=4, f(1)=2, f(2)=0, f(3)=-2$. Range $= \\{-2, 0, 2, 4, 6\\}$ (Benar). $f(-1)+f(3) = 6 + (-2) = 4$ (Benar). $f(2)=0$ (Benar), sehingga memotong sumbu-$X$ di $(2,0)$ (Benar)."
    },
    {
      id: 8,
      tipe: "PG",
      elemen: "Geometri dan Pengukuran",
      pertanyaan: "Sebuah tangga yang panjangnya $10\\text{ m}$ disandarkan pada dinding vertikal. Jika jarak ujung bawah tangga ke dinding adalah $6\\text{ m}$, maka tinggi dinding yang dicapai ujung atas tangga adalah ...",
      opsi: ["A. $4\\text{ m}$", "B. $7\\text{ m}$", "C. $8\\text{ m}$", "D. $9\\text{ m}$"],
      kunci: "C",
      pembahasan: "Menggunakan Teorema Pythagoras: $t = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ m}$."
    },
    {
      id: 9,
      tipe: "PG",
      elemen: "Geometri dan Pengukuran",
      pertanyaan: "Titik $A(-3, 5)$ dicerminkan terhadap garis $x = 2$, kemudian hasilnya ditranslasikan oleh $T = \\begin{pmatrix} -4 \\\\ 2 \\end{pmatrix}$. Koordinat bayangan akhir titik $A$ adalah ...",
      opsi: ["A. $(3, 7)$", "B. $(7, 7)$", "C. $(3, 3)$", "D. $(-1, 7)$"],
      kunci: "A",
      pembahasan: "Refleksi terhadap $x = 2$: $A'(2(2) - (-3), 5) = A'(7, 5)$. Translasi $T(-4, 2)$: $A''(7 + (-4), 5 + 2) = A''(3, 7)$."
    },
    {
      id: 10,
      tipe: "PGK_KATEGORI",
      elemen: "Geometri dan Pengukuran",
      pertanyaan: "Sebuah taman berbentuk lingkaran berdiameter $28\\text{ m}$. Di tengah taman terdapat kolam berbentuk persegi dengan panjang sisi $8\\text{ m}$, sedangkan sisanya ditanami rumput ($\\pi = \\frac{22}{7}$). Tentukan <b>Benar</b> atau <b>Salah</b> untuk pernyataan berikut!",
      pernyataan: [
        "Luas seluruh area taman tersebut adalah $616\\text{ m}^2$.",
        "Luas area taman yang ditanami rumput adalah $552\\text{ m}^2$.",
        "Keliling tepi luar taman lingkaran tersebut adalah $44\\text{ m}$."
      ],
      kategori: ["Benar", "Salah"],
      kunci: ["Benar", "Benar", "Salah"],
      pembahasan: "$r = 14\\text{ m}$. Luas lingkaran $= \\frac{22}{7} \\times 14 \\times 14 = 616\\text{ m}^2$ (Benar). Luas rumput $= 616 - (8 \\times 8) = 616 - 64 = 552\\text{ m}^2$ (Benar). Keliling $= \\frac{22}{7} \\times 28 = 88\\text{ m}$ (Pernyataan 3 Salah)."
    },
    {
      id: 11,
      tipe: "PG",
      elemen: "Geometri dan Pengukuran",
      pertanyaan: "Sebuah prisma tegak memiliki alas berbentuk segitiga siku-siku dengan panjang sisi siku-sikunya $6\\text{ cm}$ dan $8\\text{ cm}$. Jika tinggi prisma tersebut $15\\text{ cm}$, maka volume prisma adalah ...",
      opsi: ["A. $240\\text{ cm}^3$", "B. $360\\text{ cm}^3$", "C. $480\\text{ cm}^3$", "D. $720\\text{ cm}^3$"],
      kunci: "B",
      pembahasan: "Luas alas $= \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$. Volume prisma $= \\text{Luas alas} \\times t = 24 \\times 15 = 360\\text{ cm}^3$."
    },
    {
      id: 12,
      tipe: "PGK_MCMA",
      elemen: "Geometri dan Pengukuran",
      pertanyaan: "Dua segitiga $\\triangle ABC$ dan $\\triangle PQR$ diketahui sebangun dengan perbandingan sisi $AB : PQ = 2 : 3$. Manakah pernyataan berikut yang benar? (Pilih lebih dari satu jawaban benar)",
      opsi: [
        "Besar sudut-sudut yang bersesuaian pada kedua segitiga sama besar.",
        "Jika panjang $BC = 8\\text{ cm}$, maka panjang sisi $QR$ yang bersesuaian adalah $12\\text{ cm}$.",
        "Perbandingan keliling $\\triangle ABC$ dan $\\triangle PQR$ adalah $2 : 3$.",
        "Perbandingan luas $\\triangle ABC$ dan $\\triangle PQR$ adalah $2 : 3$."
      ],
      kunci: [0, 1, 2],
      pembahasan: "Pada dua bangun sebangun: sudut bersesuaian sama besar (1 Benar), $QR = \\frac{3}{2} \\times 8 = 12\\text{ cm}$ (2 Benar), perbandingan keliling sama dengan perbandingan sisi $2:3$ (3 Benar), sedangkan perbandingan luas adalah $2^2 : 3^2 = 4 : 9$ (4 Salah)."
    },
    {
      id: 13,
      tipe: "PG",
      elemen: "Data dan Peluang",
      pertanyaan: "Data nilai ulangan Matematika 9 siswa adalah: $7, 8, 6, 9, 7, 10, 8, 7, 8$. Modus dan median dari data tersebut berturut-turut adalah ...",
      opsi: ["A. $7$ dan $7$", "B. $7$ dan $8$", "C. $8$ dan $7$", "D. $8$ dan $8$"],
      kunci: "B",
      pembahasan: "Data terurut: $6, 7, 7, 7, 8, 8, 8, 9, 10$. Nilai $7$ dan $8$ sama-sama muncul 3 kali (bimodus: $7$ dan $8$). Median (data ke-5) adalah $8$. Pada opsi yang tersedia paling tepat adalah $7$ dan $8$ (Opsi B)."
    },
    {
      id: 14,
      tipe: "PG",
      elemen: "Data dan Peluang",
      pertanyaan: "Dalam sebuah kantong terdapat $6$ kelereng merah, $9$ kelereng biru, dan $5$ kelereng hijau. Jika diambil satu kelereng secara acak, peluang terambilnya kelereng berwarna biru adalah ...",
      opsi: ["A. $0,30$", "B. $0,45$", "C. $0,50$", "D. $0,60$"],
      kunci: "B",
      pembahasan: "Total kelereng $n(S) = 6 + 9 + 5 = 20$. Peluang biru $P(B) = \\frac{9}{20} = 0,45$."
    },
    {
      id: 15,
      tipe: "PGK_KATEGORI",
      elemen: "Data dan Peluang",
      pertanyaan: "Rata-rata nilai ulangan harian dari $18$ siswa adalah $75$. Ketika nilai dua siswa susulan (Andi dan Budi) digabungkan, rata-rata kelas naik menjadi $76$. Diketahui nilai Andi $6$ poin lebih tinggi dari nilai Budi. Tentukan <b>Benar</b> atau <b>Salah</b> untuk pernyataan berikut!",
      pernyataan: [
        "Jumlah total nilai Andi dan Budi adalah $170$.",
        "Nilai ulangan Andi adalah $88$.",
        "Nilai ulangan Budi adalah $80$."
      ],
      kategori: ["Benar", "Salah"],
      kunci: ["Benar", "Benar", "Salah"],
      pembahasan: "Total nilai awal $= 18 \\times 75 = 1.350$. Total nilai 20 siswa $= 20 \\times 76 = 1.520$. Jumlah nilai Andi + Budi $= 1.520 - 1.350 = 170$ (Benar). Karena $A - B = 6$ dan $A + B = 170$, maka $2A = 176 \\Rightarrow A = 88$ (Benar) dan $B = 82$ (Pernyataan 3 Salah)."
    }
  ]
};