export type Article = {
     id: number;
     title: string;             // Judul artikel
     slug: string;              // URL-friendly string untuk routing
     href: string;              // Link ke artikel
     description: string;       // Deskripsi singkat atau konten artikel
     date: string;              // Tanggal yang ditampilkan (format seperti 'Mar 16, 2020')
     datetime: string;          // Tanggal dalam format ISO (seperti '2020-03-16')
     category: {
       title: string;           // Kategori artikel
       href: string;            // Link ke kategori
     };
     author: {
       name: string;            // Nama penulis
       role: string;            // Peran penulis
       href: string;            // Link ke profil penulis
       imageUrl: string;        // URL gambar penulis
     };
     imageUrl: string;
   };
   