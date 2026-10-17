# Himmatulquran.or.id

Website VTHQ dengan Next.js Pages Router dan Contentful.

## Pengembangan lokal

Gunakan Node.js 24.x, jalankan `npm ci`, lalu `npm run dev`. Konfigurasi Contentful mengikuti variabel lingkungan yang digunakan oleh `contentful/contentfulClient.ts`. Jalankan `npm run lint` dan `npm run build` sebelum deployment. Field `engines.node` pada `package.json` menetapkan versi Node.js untuk deployment Vercel.

## Mengelola flyer dakwah

Homepage menampilkan carousel Flyer Dakwah setelah Artikel/Kegiatan dan sebelum Program Unggulan. Setiap poster dikelola sebagai satu entri pada content type **Flyer Dakwah** (`dakwahFlyer`) di Contentful, environment `master`.

1. Buka **Content**, pilih **Add entry**, lalu pilih **Flyer Dakwah**. Anda juga dapat membuka entri **Contoh Flyer Dakwah - Taklim Umum** dan menggunakan menu **Duplicate**.
2. Isi **Judul flyer**, misalnya `Keutamaan Menuntut Ilmu`.
3. Pada **Gambar flyer**, pilih gambar di Media atau unggah poster baru. Gunakan JPEG, PNG, WebP, GIF, atau AVIF. Poster kegiatan pada entri contoh hanya contoh cara pengisian; ganti dengan flyer dakwah asli.
4. Isi **Deskripsi gambar** dengan penjelasan isi poster. Teks ini digunakan sebagai teks alternatif gambar; judul menjadi cadangan jika deskripsi kosong.
5. Isi **Urutan tampilan** dengan angka 1 sampai 9999. Angka lebih kecil tampil lebih dahulu; gunakan 10, 20, 30 agar mudah menyisipkan flyer baru. Jika angkanya sama, entri yang dibuat lebih baru tampil lebih dahulu.
6. Pada **Tampilkan di website**, pilih **Tampilkan**, lalu publish gambar dan entri. Gambar yang belum dipublish tidak akan tampil.
7. Untuk menyembunyikan flyer, pilih **Sembunyikan** dan publish perubahan, atau unpublish entri tersebut. Tidak perlu mengubah kode website atau memasang tag gambar.

Entri **Contoh Flyer Dakwah - Taklim Umum** sudah dipublish dengan pilihan **Tampilkan** atas permintaan pengguna, menggunakan poster dokumentasi kegiatan Taklim Umum yang sudah ada. Klien dapat menduplikasinya, mengganti judul/gambar/deskripsi, mengatur urutan, lalu publish. Untuk mengganti contoh dengan flyer asli, edit entri tersebut atau sembunyikan setelah flyer pengganti siap.

Halaman menggunakan ISR dengan interval 10 detik. Setelah perubahan di Contentful tersedia melalui Delivery API, akses ulang halaman untuk memicu pembaruan; permintaan berikutnya menerima hasil regenerasi.

Carousel mengambil maksimal 100 entri yang sudah dipublish dengan **Tampilkan di website** aktif. Bagian ini disembunyikan ketika tidak ada flyer yang memenuhi syarat. Satu flyer tampil tanpa tombol navigasi. Beberapa flyer bisa digeser secara horizontal, memakai tombol kiri/kanan, atau tombol panah keyboard saat carousel mendapat fokus. Poster ditampilkan utuh dengan `object-contain`.

Definisi model tersedia di `contentful/models/dakwahFlyer.json` dan tipe SDK ada di `contentful/types/TypeDakwahFlyer.ts`. Nama kolom dan petunjuk pengisian pada editor Contentful menggunakan bahasa Indonesia.

Tag publik `flyerDakwah` pernah dibuat saat implementasi awal berbasis tag, tetapi carousel kini menggunakan entri content type. Tag tersebut tidak diperlukan untuk pengisian baru. Tidak ada aset lama yang diubah atau dipublikasikan ulang saat pembuatan entri contoh.
