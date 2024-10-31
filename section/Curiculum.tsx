import React from "react";
import Image from "next/image";
import PimpinanImage from "@/public/images/PIMPINAN PONDOK.jpg";

const Curiculum: React.FC = () => {
    return (
      <section className="py-6 px-6 md:px-14">
      <div className="flex flex-col md:justify-evenly md:items-center md:flex-row bg-gray-50 mx-auto max-w-screen-2xl">
        <div className="mb-4 md:mb-0">
          <Image
            src={PimpinanImage}
            alt="Pimpinan Pondok"
            className="w-44 h-auto"
          />
        </div>
        <div className="md:w-3/4 md:px-6">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-2 py-1 px-6 rounded-sm">Kurikulum :</h2>
        </div>
          <p className="mb-4 text-sm md:text-base text-green-900">
          Dalam menjalankan proses pembelajaran, Villa Tahfizh Himmatul Quran Malino mengkombinasikan kurikulum pondok yang terdiri dari tahfizh, bahasa arab dan diniyah dengan kurikulum nasional (pembelajaran umum). Program tahfizh dan bahasa arab diberikan porsi dan alokasi waktu yang lebih besar sebagai ciri khas pondok dan sesuai dengan yang tercantum dalam visi dan misi VTHQ.
          </p>
          <p className="font-bold text-base text-green-700 ">Ir. H Muhammad Taufan Djafry, Lc., M.H.I</p>
        </div>
      </div>
      </section>
    );
  };


export default Curiculum;
