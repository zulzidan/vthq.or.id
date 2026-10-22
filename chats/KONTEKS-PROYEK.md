# Konteks proyek VTHQ dan pekerjaan tertunda

Diperbarui sampai percakapan 17 Oktober 2026 pukul 11.37.25. Klien adalah Kak Sofi atau Shofian, pengelola website Villa Tahfizh Himmatul Quran Malino. Website menggunakan domain `vthq.or.id`; nama folder repositori masih `himmatulquran.or.id`.

**Pekerjaan yang sudah disepakati dan dibayar adalah perpanjangan domain serta email satu tahun dan tambahan carousel flyer dakwah di homepage, total Rp850.000.** Pengembangan SPMB dengan admin sudah ditawarkan sekitar Rp6,5 juta dan masih dibahas dengan pimpinan.

## Sumber utama

- [Riwayat panjang dan pembaruan percakapan](_chat%202.txt), mencakup pembangunan awal pada 2024 hingga pembahasan SPMB pada 2026.
- [Ekspor dengan lampiran](WhatsApp%20Chat%20-%20Sofi%20%281%29/_chat.txt), mencakup permintaan tambahan, pembayaran, dan balasan terakhir pukul 11.37.25.
- [Bukti transfer 17 Oktober 2026](WhatsApp%20Chat%20-%20Sofi%20%281%29/00000027-PHOTO-2026-10-17-06-57-51.jpg): nominal transfer Rp850.000, biaya transaksi Rp2.500, total debit Rp852.500. Nilai pembayaran proyek adalah Rp850.000.
- ZIP `WhatsApp Chat - Sofi 2.zip` berisi ekspor lama tanpa gambar. Gunakan folder dengan lampiran untuk memeriksa referensi visual dan bukti transfer.

## Riwayat kesepakatan

| Tanggal | Pembahasan | Nilai dan status |
| --- | --- | --- |
| 8 September 2024 | Website informasi yayasan; PPDB menjadi prioritas awal | Rp3.000.000 termasuk domain dan hosting, DP 30% atau Rp900.000 |
| 13 September 2024 | Opsi subdomain PPDB | Klien memilih menggabungkan PPDB dengan website utama |
| 2 Oktober 2024 | Formulir langsung di website dan kebutuhan dashboard sempat dijelaskan | Klien memilih Google Forms sementara, terpisah untuk SMP dan SMA |
| 21 sampai 24 Desember 2024 | Penyerahan pengelolaan konten melalui Contentful dan permintaan pelunasan | Klien mengirim gambar pembayaran; nominal gambar tidak tersedia dalam ekspor lama |
| 3 dan 14 April 2025 | Integrasi Sihimmah dengan website VTHQ | Penawaran sekitar Rp5.000.000; persetujuan dan realisasinya belum terkonfirmasi |
| 29 September 2025 | Daftar guru di Profil dan flyer dakwah di Home | Penawaran Rp400.000 untuk keduanya; klien akan menyampaikan ke pimpinan |
| 2 Oktober 2025 | Perpanjangan website | Pengembang mengonfirmasi sudah selesai dalam chat |
| 27 September 2026 | Perpanjangan domain/email dan carousel flyer dakwah | Rp600.000 + Rp250.000 = Rp850.000; klien menjawab “Oke dek” |
| 17 Oktober 2026 pukul 06.57 | Pembayaran paket perpanjangan dan carousel | Gambar bukti transfer Rp850.000 tersedia |
| 17 Oktober 2026 pukul 06.58 | Pengembang menjanjikan pemrosesan perpanjangan dan pengerjaan carousel | Penyelesaian teknis keduanya masih perlu diperiksa |
| 17 Oktober 2026 pukul 10.57 | Estimasi SPMB dengan admin disampaikan | Sekitar Rp6.500.000; cakupan awal disebutkan di bawah |
| 17 Oktober 2026 pukul 11.32 | Klien akan berbicara dengan pimpinan | Klien mengatakan “Karena lumayan itu harganya”; belum ada persetujuan, penolakan, atau permintaan diskon |
| 17 Oktober 2026 pukul 11.37 | Pengembang menjanjikan rincian fitur untuk bahan pertimbangan | Cakupan dapat disesuaikan jika sekolah menyampaikan kisaran anggaran |

## Carousel flyer dakwah

### Kebutuhan yang disepakati

Tambahkan satu bagian flyer dakwah pada homepage. Flyer ditampilkan sebagai slide atau carousel horizontal yang dapat digeser, dengan tombol kiri dan kanan. Biaya tambahan yang disepakati adalah Rp250.000 dan sudah masuk pembayaran Rp850.000.

Pada 27 September 2026 pukul 05.57, Kak Sofi meminta “tambah lagi satu bagian di antaranya ini slide flyer dakwah”. Pada pukul 06.00, beliau menjelaskan “foto flyer dakwah yang modelnya ada tombol geser ke samping”. Penawaran pukul 06.30 menyebut carousel, geser ke samping, dan tombol kiri serta kanan secara eksplisit.

### Referensi visual

- [Area homepage yang ditunjuk klien](WhatsApp%20Chat%20-%20Sofi%20%281%29/00000010-PHOTO-2026-09-27-05-57-09.jpg) memperlihatkan bagian Artikel/Kegiatan, Program Unggulan, dan awal Galeri Kegiatan. Screenshot tidak memberi penanda posisi sisipan yang pasti.
- [Contoh kartu flyer](WhatsApp%20Chat%20-%20Sofi%20%281%29/00000012-PHOTO-2026-09-27-06-00-49.jpg) memperlihatkan lima poster tegak berjajar. Kontennya dokumentasi kegiatan; klien meminta pola tampilan tersebut untuk flyer dakwah.
- [Referensi tambahan tahun 2025](WhatsApp%20Chat%20-%20Sofi%20%281%29/-0000011-PHOTO-2025-09-29-10-05-11.jpg) memperlihatkan Galeri Kegiatan dengan kartu poster. Referensi ini tidak menetapkan carousel dakwah telah dibuat.

Screenshot tersebut merupakan referensi tampilan. Berkas flyer dakwah asli dan urutan tampilnya masih perlu tersedia sebelum pengisian konten final.

### Implementasi carousel pada kode lokal

Setelah peninjauan chat, pengguna meminta implementasi carousel. Kode sudah ditambahkan pada [DakwahFlyers](../section/DakwahFlyers.tsx), [pengambilan aset flyer](../contentful/dakwahFlyers.ts), dan [tipe data flyer](../types/dakwahFlyer.ts), lalu dihubungkan ke homepage setelah Artikel/Kegiatan dan sebelum Program Unggulan.

Carousel menyediakan geser horizontal, tombol kiri/kanan, fokus serta navigasi keyboard, dan poster utuh pada ponsel maupun desktop. Bagian tanpa konten disembunyikan; satu poster tampil tanpa tombol navigasi. Sumber konten kini adalah maksimal 100 entri content type `dakwahFlyer` yang sudah dipublish dan pilihan `enabled` aktif. Angka urutan terkecil tampil lebih dahulu, lalu entri terbaru jika urutannya sama.

Percobaan ulang Management API pada 17 Oktober 2026 berhasil setelah pengguna memperbarui konfigurasi token. Implementasi awal memakai tag publik `flyerDakwah`. Atas permintaan pengguna, pengelolaan konten kemudian diganti menjadi content type khusus agar klien mengisi entri seperti konten website lainnya. Tag lama tetap ada, tetapi tidak lagi digunakan oleh carousel.

Content type [Flyer Dakwah](https://app.contentful.com/spaces/cfmuur2nfkrl/environments/master/content_types/dakwahFlyer/fields) sudah dibuat dan dipublish dengan lima kolom: Judul flyer, Gambar flyer, Deskripsi gambar, Urutan tampilan, dan Tampilkan di website. Semua kolom memiliki petunjuk pengisian dalam bahasa Indonesia. Definisi model disimpan di [dakwahFlyer.json](../contentful/models/dakwahFlyer.json).

Entri [Contoh Flyer Dakwah Taklim Umum](https://app.contentful.com/spaces/cfmuur2nfkrl/environments/master/entries/contoh-flyer-dakwah) memakai aset poster kegiatan `0926-taklim umum`, sesuai pilihan pengguna. Awalnya contoh dibuat sebagai draft; setelah pengguna meminta satu contoh dipublish, entri diaktifkan dengan `enabled: true` dan dipublish. Klien dapat menduplikasinya, mengganti gambar/judul/deskripsi, mengatur urutan, memilih Tampilkan, lalu publish gambar dan entri. Konten baru dikelola klien mengikuti [panduan README](../README.md).

Verifikasi CMA memastikan model dan contoh sudah dipublish, gambar contoh sudah dipublish sebelumnya, dan kelima kolom memiliki petunjuk. Query Delivery API untuk entri aktif menghasilkan satu flyer dengan gambar yang teresolusi. Homepage produksi lokal berhasil menampilkan judul bagian dan poster contoh setelah regenerasi ISR.

Perubahan carousel dan panduan dikomit sebagai `da76689` dan dikirim ke `origin/main`. Deployment awal gagal karena Project Settings masih menggunakan Node.js 20.x yang sudah dihentikan Vercel. Setelah pengguna memberikan log kegagalan, konfigurasi `engines.node` pada `package.json` dan lockfile diatur ke `24.x`, lalu dikirim pada commit `dd659bd`. Deployment [ASAcdrwrzeyvY9TVpmniashPY2NX](https://vercel.com/muhzulzidans-projects/himmatulquran-or-id/ASAcdrwrzeyvY9TVpmniashPY2NX) berhasil.

Pemeriksaan produksi 17 Oktober 2026 pukul 13.00 WITA mengonfirmasi `https://www.vthq.or.id/` dan alias Vercel menggunakan build baru `3H_AK71GhSLPN7cJD0yae`, merespons HTTP 200, dan menampilkan satu flyer. Screenshot browser desktop 1440 x 1000 dan ponsel 390 x 844 memperlihatkan bagian Flyer Dakwah sebelum Program Unggulan, tanpa error JavaScript yang teramati. Hasil dan empat screenshot disusun dalam [PDF pemeriksaan produksi](../output/pdf/pemeriksaan-produksi-vthq.pdf).

Pemeriksaan ulang pukul 13.32 WITA kembali mengonfirmasi satu poster termuat utuh di desktop dan ponsel, HTTP 200, dan tanpa error JavaScript yang teramati. [Panduan klien empat halaman](../output/pdf/panduan-flyer-dakwah-vthq.pdf) mencakup dua screenshot produksi terbaru, tautan entri contoh, cara menduplikasi dan mengisi kelima kolom, publish gambar dan entri, pengaturan urutan, penyembunyian flyer, serta bantuan jika konten belum terlihat. Screenshot terpisah tersedia di `output/pdf/screenshots/desktop-flyer-terbaru.png` dan `mobile-flyer-terbaru.png`.

Validasi implementasi: `npm run build` berhasil, termasuk lint, pemeriksaan tipe, dan pembuatan 130 halaman. Pemeriksaan render server lolos untuk nol, satu, dan enam poster; query SDK ke Contentful juga berhasil. Hasil homepage produksi lokal memuat properti flyer dan menyembunyikan bagian kosong. Pemeriksaan visual dan interaksi pada browser belum dilakukan karena tidak ada browser yang tersedia pada sesi ini. Build mengeluarkan peringatan ukuran data halaman dari konten yang sudah ada serta rekomendasi dependensi gambar opsional.

### Temuan sebelum implementasi

- [Homepage](../pages/index.tsx) saat ini merender banner, profil, artikel/kegiatan, program unggulan, galeri kegiatan, informasi peserta didik, ulasan, video, dan banner PPDB. Belum ada pemanggilan bagian khusus flyer dakwah.
- [Carousel banner](../section/CarouselShadcn.tsx) sudah menggunakan Embla dengan autoplay, gambar latar gelap, dan teks sambutan. Tampilan banner ini berbeda dari kebutuhan poster dakwah.
- [Komponen carousel dasar](../components/ui/carousel.tsx) menyediakan carousel horizontal serta navigasi dan dapat dipakai kembali.
- [Galeri kegiatan](../section/Galery.tsx) menampilkan grid dua, tiga, atau lima kolom. Galeri ini belum menyediakan carousel untuk flyer dakwah.
- [Pengambilan media Contentful](../contentful/allFetch.ts) menyediakan `getMediaWithTag`, yang mengembalikan fields aset dengan batas sepuluh aset. Tag, urutan, dan kebutuhan jumlah flyer perlu ditetapkan jika pola ini dipakai.

Temuan ini berlaku untuk checkout lokal yang diperiksa pada 17 Oktober 2026. Status website yang sudah terpasang dan isi Contentful belum diperiksa.

### Rencana yang menjadi dasar implementasi

1. Buat bagian tersendiri berjudul Flyer Dakwah. Posisi awal yang masuk akal adalah setelah Artikel/Kegiatan dan sebelum Program Unggulan; ini pilihan implementasi berdasarkan area screenshot, belum instruksi posisi yang eksplisit.
2. Gunakan carousel yang sudah tersedia, dengan beberapa poster terlihat pada desktop dan tata letak yang sesuai untuk ponsel.
3. Pertahankan rasio poster agar teks tidak terpotong, sediakan geser horizontal dan tombol kiri/kanan, serta pastikan tombol dapat digunakan dengan keyboard.
4. Gunakan Contentful untuk pengelolaan flyer agar sejalan dengan pengelolaan konten website. Implementasi akhir menggunakan content type Flyer Dakwah sesuai permintaan pengguna, menggantikan mekanisme tag aset awal.
5. Tangani kondisi tanpa flyer atau hanya satu flyer, lalu periksa tampilan ponsel dan desktop. Jangan menampilkan bukti transfer atau screenshot percakapan sebagai konten publik.
6. Setelah pemasangan selesai, siapkan kabar penyelesaian untuk klien. Pengiriman pesan tetap memerlukan instruksi pengguna.

Autoplay, pembesaran gambar, unduhan flyer, kategori, dan penjadwalan publikasi belum diminta dalam kesepakatan ini.

## Perpanjangan domain dan email

Pembayaran Rp600.000 untuk satu tahun sudah tercakup dalam transfer Rp850.000. Dalam chat pukul 06.48, pengembang menyebut masa aktif domain berakhir 16 Oktober 2026. Pada pukul 06.58 pengembang menyatakan akan memprosesnya dan memberi kabar setelah selesai.

Tindak lanjutnya adalah memeriksa panel penyedia domain/email, masa aktif, serta akses website dan email. Pembayaran dari klien tidak dengan sendirinya membuktikan proses perpanjangan pada penyedia sudah selesai.

## SPMB dengan admin

Kak Sofi meminta harga pada 17 Oktober 2026 pukul 08.43 dan mengonfirmasi kebutuhan admin pada pukul 09.58. Pada pukul 10.57 pengembang sudah menyampaikan estimasi sekitar Rp6,5 juta dengan cakupan awal:

- Formulir pendaftaran SMP dan SMA.
- Login admin.
- Melihat dan mencari data pendaftar.
- Download Excel.
- Mengubah status pendaftaran.

Upload berkas dan cetak bukti pendaftaran disebut sebagai kebutuhan tambahan yang bisa dihitungkan. Pengaturan periode, notifikasi, pembayaran, akun calon santri, jumlah admin, migrasi data lama, jadwal pengerjaan, termin pembayaran, dan masa dukungan belum disepakati. Jangan menganggap fitur dari rekomendasi paket sebelumnya otomatis termasuk penawaran yang sudah dikirim.

Kak Sofi akan membicarakan harga dengan pimpinan karena dinilai cukup besar. Balasan terakhir pengembang menyatakan akan membuat rincian fitur dan dapat menyesuaikan cakupan dengan anggaran sekolah. Pekerjaan berikutnya untuk SPMB adalah menyusun rincian penawaran; pembangunan sistem masih menunggu kesepakatan.

## Permintaan daftar guru

Daftar guru di bawah struktur organisasi pada halaman Profil diminta pada September 2025. Penawaran Rp400.000 saat itu mencakup daftar guru dan flyer dakwah, lalu klien menyatakan akan menyampaikan kepada pimpinan.

Kesepakatan Rp850.000 tahun 2026 mencakup perpanjangan dan carousel flyer dakwah. Daftar guru tidak disebut dalam cakupan pembayaran tersebut. [Halaman Profil lokal](../pages/profil.tsx) belum merender bagian daftar guru terpisah; perlakukan permintaan ini sebagai usulan lama yang perlu ditindaklanjuti jika klien masih menginginkannya.

## Kondisi teknis proyek

Checkout ini menggunakan Next.js 14.2.8 dengan Pages Router, React 18, TypeScript, Tailwind, dan Contentful. Rute PPDB berada di [pages/ppdb.tsx](../pages/ppdb.tsx); tombol pendaftaran pada [RegistrationMethod](../section/RegistrationMethod.tsx) menerima tautan dari Contentful. Riwayat 2024 mengonfirmasi penggunaan Google Forms; tautan CMS saat ini belum diperiksa langsung.

Belum ditemukan implementasi dashboard pendaftar, autentikasi admin SPMB, atau integrasi Neon/PostgreSQL pada kode dan dependensi yang diperiksa. Neon dalam ringkasan awal bukan fakta teknis yang sudah terverifikasi. Deployment produksi Vercel terverifikasi berhasil untuk commit `dd659bd`, menggunakan Node.js 24.x.

## Urutan pekerjaan

1. Pastikan perpanjangan domain dan email yang sudah dibayar selesai.
2. Serahkan panduan pengelolaan Flyer Dakwah kepada klien. Carousel, model CMS, contoh terpublikasi, dan deployment produksi sudah selesai serta terverifikasi; klien dapat mengisi konten berikutnya sendiri.
3. Susun rincian fitur SPMB yang sudah dijanjikan untuk pembahasan dengan pimpinan.
4. Tindak lanjuti daftar guru bila klien mengaktifkan kembali permintaan tersebut.

Harga Rp5 juta untuk Sihimmah adalah riwayat penawaran proyek berbeda. Harga itu tidak membuktikan sekolah telah menyetujui anggaran SPMB. Kondisi keuangan pribadi pengembang tidak menjadi bagian cakupan atau tagihan klien.
