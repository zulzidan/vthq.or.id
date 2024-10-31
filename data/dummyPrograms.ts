import { Program } from "@/types/program";

export const ProgramsTahfizh: Program = {
    titleProgram: "Program Tahfizh",
    listPrograms: [
        "Halaqah Qur'an",
        "Sima'an Pekanan",
        "Sima'an Akbar",
        "Musabaqah Hifzhul Qur'an",
        "Ujian Al-Qur'an"
    ]
};

export const ProgramsBahasaArab: Program = {
    titleProgram: "Program Bahasa Arab",
    listPrograms: [
        "Mufradat Harian",
        "Halaqah Muhadatsa",
        "Study Club Bahasa Arab",
        "Syahadah"
    ]
};

export const ProgramsDiniyah: Program = {
    titleProgram: "Pembelajaran Diniyah",
    listPrograms: [
        "Al-Qur'an",
        "Bahasa Arab",
        "Hadits",
        "Fiqih",
        "Aqidah",
        "Akhlak",
        "Sirah"
    ]
};

export const ProgramsUmum: Program = {
    titleProgram: "Pembelajaran Umum",
    listPrograms: [
        "Mengacu pada kurikulum 2013",
        "Study Club Matematika dan Bahasa Inggris"
    ]
};

export const ProgramsBRTM: Program = {
    titleProgram: "BRTM",
    listPrograms: [
        "Ta'lim rutin",
        "Pelatihan Imam dan Khutbah"
    ]
};

export const ProgramsPerpustakaan: Program = {
    titleProgram: "Pengelolaan Perpustakaan",
    listPrograms: [
        "Pelayanan Perpustakaan",
        "Bedah Buku",
        "Duta Perpustakaan"
    ]
};


export const allPrograms: Program[] = [
    ProgramsTahfizh,
    ProgramsBahasaArab,
    ProgramsDiniyah,
    ProgramsUmum,
    ProgramsBRTM,
    ProgramsPerpustakaan
];
