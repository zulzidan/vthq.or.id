export type DonationImage = {
     title: string
     imageUrl: string
     typeBank: string
     nameOfAccount: string
     alt: string
     accountNumber: string
}

export const dummyDonationImage: DonationImage[] = [
     {
          title: "Donasi Pembangunan Masjid",
          accountNumber: "(451) 7270720198",
          typeBank: "BSI",
          nameOfAccount: "a.n. Masjid Ilman Nafian",
          alt:"Donasi Pembangunan Masjid",
          imageUrl: "/images/DONASI PEMBANGUNAN MASJID (NEW).jpg"
     },
     {
          title: "Donasi Buka Puasa",
          accountNumber: "(451) 7181230902",
          typeBank: "BSI",
          nameOfAccount: "a.n. IFHTOR YYS VTHQ",
          alt:"Donasi Buka Puasa",
          imageUrl: "/images/donasi buka puasa.jpg"
     },
]