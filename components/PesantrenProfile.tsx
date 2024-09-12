import React from 'react';
import Image from 'next/image';
import PimpinanImage from "@/public/images/PIMPINAN PONDOK.jpg";
import SimaanFarid from "@/public/images/simaan-farid.jpg";
import SimaanRayyan from "@/public/images/simaan-rayyan.jpg";

const PesantrenProfile = () => {
  return (
    <div className="flex flex-col justify-between md:items-center md:flex-row bg-gray-50 py-6 px-14">
      <div className="mb-4 md:mb-0">
        <Image
          src={PimpinanImage}
          alt="Pimpinan Pondok"
        />
      </div>
      <div className="md:w-3/4 md:pl-6">
      <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
        <h2 className="text-xl font-bold mb-2 py-1 px-1 rounded-sm">Sambutan Pimpinan :</h2>
      </div>
        <p className="mb-4 text-sm text-green-900">
          Villa Tahfizh Himmatul Quran adalah lembaga pendidikan pesantren Al-Qur'an yang berikhtiar melahirkan generasi Al-Qur'an yang berakhlak mulia dan beraqidah shohihah. Generasi Al-Qur'an yang berpadu pada dirinya kepribadian dengan 3 kompetensi utama yaitu: <span className="text-green-900  font-semibold">Afektif (ruhiyah), Kognitif ( kecerdasan) dan Psikomotorik (ketrampilan dan skill).</span>  Ikhtiar itu adalah upaya maksimal yang dilakukan oleh Villa Tahfizh Himmatul Quran dalam meramu dan menerapkan proses pembelajaran dan pembinaan agar melahirkan pribadi santri yang berakhlak, cerdas dan terampil sebagai peserta didik.
        </p>
        <p className="font-bold text-green-700 ">Ir. H Muhammad Taufan Djafry, Lc., M.H.I</p>
      </div>
      <div className="flex flex-col space-y-2 pt-5 md:pt-0">
        <Image
          src={SimaanFarid}
          alt="Simaan Hafalan"
          className="w-auto h-auto md:h-32 shadow-sm"
        />
        <Image
          src={SimaanRayyan}
          alt="Simaan Hafalan"
          className="w-auto h-auto md:h-32 shadow-sm"
        />
      </div>
    </div>
  );
};

export default PesantrenProfile;