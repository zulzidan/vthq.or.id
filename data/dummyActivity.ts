import { Activity } from "@/types/activity";

export const dummyActivity: Activity[] = [
  {
    id: 1,
    title: "Seminar Motivasi Islam",
    slug: "seminar-motivasi-islam",
    href: "/activities/seminar-motivasi-islam",
    description: `Acara seminar ini bertujuan untuk memberikan motivasi dan pemahaman mendalam tentang pentingnya menguatkan iman dan motivasi diri dalam kehidupan sehari-hari. Dalam era modern yang penuh dengan tantangan, seringkali umat Muslim dihadapkan pada berbagai cobaan yang bisa menggerus keimanan dan semangat hidup. Melalui seminar ini, diharapkan peserta dapat memperoleh inspirasi serta strategi yang praktis dalam memperkuat keimanan mereka.`,
    date: "Okt 15, 2024",
    datetime: "2024-10-15",
    category: { title: "Seminar", href: "/categories/seminar" },
    author: {
      name: "Ustadz Rahmat Hidayat",
      role: "Motivator",
      href: "/authors/ustadz-rahmat",
      imageUrl: "/images/ustadz-rahmat.jpg",
    },
    imageUrl: "/images/1.jpg"
  },
  {
    id: 2,
    title: "Bakti Sosial Ramadhan",
    slug: "bakti-sosial-ramadhan",
    href: "/activities/bakti-sosial-ramadhan",
    description: `Kegiatan bakti sosial Ramadhan ini merupakan salah satu program unggulan yang bertujuan untuk menyebarkan kebahagiaan kepada masyarakat yang kurang mampu. Panitia bekerjasama dengan berbagai lembaga untuk menyalurkan bantuan dalam bentuk sembako, pakaian layak pakai, serta dana untuk anak yatim.`,
    date: "Apr 10, 2024",
    datetime: "2024-04-10",
    category: { title: "Bakti Sosial", href: "/categories/bakti-sosial" },
    author: {
      name: "Ustadz Abdullah",
      role: "Ketua Panitia",
      href: "/authors/ustadz-abdullah",
      imageUrl: "/images/ustadz-abdullah.jpg",
    },
    imageUrl: "/images/2.jpg"
  },
  {
    id: 3,
    title: "Kajian Tafsir Al-Qur'an",
    slug: "kajian-tafsir-al-quran",
    href: "/activities/kajian-tafsir-al-quran",
    description: `Kajian rutin ini membahas tafsir Al-Qur'an secara mendalam setiap minggunya, dipimpin oleh Ustadz Ahmad Fauzi. Dalam kajian ini, peserta akan menggali makna ayat-ayat Al-Qur'an dari segi linguistik dan sejarahnya.`,
    date: "Sep 5, 2024",
    datetime: "2024-09-05",
    category: { title: "Kajian", href: "/categories/kajian" },
    author: {
      name: "Ustadz Ahmad Fauzi",
      role: "Penceramah",
      href: "/authors/ustadz-ahmad",
      imageUrl: "/images/ustadz-ahmad.jpg",
    },
    imageUrl: "/images/3.jpg"
  },
  {
    id: 4,
    title: "Pelatihan Pemuda Islam",
    slug: "pelatihan-pemuda-islam",
    href: "/activities/pelatihan-pemuda-islam",
    description: `Pelatihan ini bertujuan untuk meningkatkan keterampilan dan kepemimpinan para pemuda Muslim dalam berbagai bidang, termasuk ekonomi, sosial, dan dakwah. Kegiatan ini melibatkan sejumlah tokoh muda inspiratif.`,
    date: "Nov 25, 2024",
    datetime: "2024-11-25",
    category: { title: "Pelatihan", href: "/categories/pelatihan" },
    author: {
      name: "Aisyah Rahman",
      role: "Penyelenggara",
      href: "/authors/aisyah-rahman",
      imageUrl: "/images/aisyah.jpg",
    },
    imageUrl: "/images/4.jpg"
  },
  {
    id: 5,
    title: "Pengajian Akbar",
    slug: "pengajian-akbar",
    href: "/activities/pengajian-akbar",
    description: `Pengajian Akbar ini diadakan setiap tahun dengan menghadirkan ulama-ulama besar dari berbagai daerah. Pada tahun ini, tema yang diangkat adalah "Meneguhkan Keimanan di Era Digital".`,
    date: "Des 12, 2024",
    datetime: "2024-12-12",
    category: { title: "Pengajian", href: "/categories/pengajian" },
    author: {
      name: "Ustadz Maulana",
      role: "Penceramah",
      href: "/authors/ustadz-maulana",
      imageUrl: "/images/ustadz-maulana.jpg",
    },
    imageUrl: "/images/5.jpg"
  },
  {
    id: 6,
    title: "Workshop Menulis Islami",
    slug: "workshop-menulis-islami",
    href: "/activities/workshop-menulis-islami",
    description: `Workshop ini bertujuan untuk melatih para penulis muda Muslim dalam menulis konten-konten Islami yang inspiratif dan informatif. Diharapkan peserta bisa menghasilkan karya yang bermanfaat bagi umat.`,
    date: "Jan 18, 2024",
    datetime: "2024-01-18",
    category: { title: "Workshop", href: "/categories/workshop" },
    author: {
      name: "Nabila Zahra",
      role: "Penulis",
      href: "/authors/nabila-zahra",
      imageUrl: "/images/nabila.jpg",
    },
    imageUrl: "/images/6.jpg"
  },
  {
    id: 7,
    title: "Diskusi Pemikiran Islam",
    slug: "diskusi-pemikiran-islam",
    href: "/activities/diskusi-pemikiran-islam",
    description: `Diskusi ini membahas perkembangan pemikiran Islam di era modern dan tantangan-tantangan yang dihadapi. Para pakar dan akademisi Muslim akan hadir untuk berbagi wawasan.`,
    date: "Feb 14, 2024",
    datetime: "2024-02-14",
    category: { title: "Diskusi", href: "/categories/diskusi" },
    author: {
      name: "Dr. Hafidz Ali",
      role: "Akademisi",
      href: "/authors/dr-hafidz",
      imageUrl: "/images/dr-hafidz.jpg",
    },
    imageUrl: "/images/7.jpg"
  },
  {
    id: 8,
    title: "Kursus Bahasa Arab",
    slug: "kursus-bahasa-arab",
    href: "/activities/kursus-bahasa-arab",
    description: `Kursus ini dirancang untuk membantu umat Muslim mempelajari bahasa Arab dasar hingga menengah agar dapat memahami Al-Qur'an dan hadits dengan lebih baik.`,
    date: "Mar 2, 2024",
    datetime: "2024-03-02",
    category: { title: "Kursus", href: "/categories/kursus" },
    author: {
      name: "Siti Aisyah",
      role: "Pengajar",
      href: "/authors/siti-aisyah",
      imageUrl: "/images/siti-aisyah.jpg",
    },
    imageUrl: "/images/8.jpg"
  }
];
