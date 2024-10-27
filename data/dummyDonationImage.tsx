export type DonationImage = {
     typeBank: string
     imageUrl: string
     alt: string
     accountNumber: string
}

export const dummyDonationImage: DonationImage[] = [
     {
          typeBank: "BRI",
          accountNumber: "123456789",
          alt:"BRI Bank Account",
          imageUrl: "https://placehold.co/2363x2363/jpg"
     },
     {
          typeBank: "SYARIAH",
          accountNumber: "123456789",
          alt:"SYARIAH Bank Account",
          imageUrl: "https://placehold.co/2363x2363/jpg"
     },
     {
          typeBank: "BCA",
          accountNumber: "123456789",
          alt:"BCA Bank Account",
          imageUrl: "https://placehold.co/2363x2363/jpg"
     },
]