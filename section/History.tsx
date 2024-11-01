import React from "react";
import Image from "next/image";
import PimpinanImage from "@/public/images/PIMPINAN PONDOK.jpg";
import { HistoryDescription } from "@/contentful/historyDescription";

interface HistoryProps {
  historyDescription: HistoryDescription
}
const History: React.FC<HistoryProps> = ({historyDescription}) => {
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
          <h2 className="text-base font-bold mb-2 py-1 px-6 rounded-sm">Sejarah :</h2>
        </div>
          <p className="mb-4 text-sm md:text-base text-green-900">
            {/* Villa Tahfizh Himmatul Quran adalah lembaga pendidikan pesantren Al-Qur&apos;an yang berikhtiar melahirkan generasi Al-Qur&apos;an yang berakhlak mulia dan beraqidah shohihah. Generasi Al-Qur&apos;an yang berpadu pada dirinya kepribadian dengan 3 kompetensi utama yaitu: <span className="text-green-900  font-semibold">Afektif (ruhiyah), Kognitif ( kecerdasan) dan Psikomotorik (ketrampilan dan skill).</span>  Ikhtiar itu adalah upaya maksimal yang dilakukan oleh Villa Tahfizh Himmatul Quran dalam meramu dan menerapkan proses pembelajaran dan pembinaan agar melahirkan pribadi santri yang berakhlak, cerdas dan terampil sebagai peserta didik. */}
            {historyDescription.description}
          </p>
          <p className="font-bold text-base text-green-700 ">Ir. H Muhammad Taufan Djafry, Lc., M.H.I</p>
        </div>
      </div>
      </section>
    );
  };


export default History;
