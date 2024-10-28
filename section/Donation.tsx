import React from "react";
import DonationImageCard from "@/components/DonationImageCard";
import { dummyDonationImage } from "@/data/dummyDonationImage";

const Donation: React.FC = () => {
  return (
     <section className="py-6 mt-8 px-6 md:px-14 max-w-screen-2xl mx-auto">
          <p className="py-8 text-center md:text-2xl font-bold">INFORMASI DONASI</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {dummyDonationImage.map((donationInfo, index) => (
          <DonationImageCard donationInfo={donationInfo} key={index}/>
          ))}
     </div>
</section>
  )
};

export default Donation;
