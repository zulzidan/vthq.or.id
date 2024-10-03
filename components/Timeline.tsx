import React from "react";

const Timeline: React.FC = () => {
  return (
     <section className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-6 px-6 md:px-16">
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pendaftaran</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: 26 September - 13 November 2024</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Ujian</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: 14 - 17 November 2024</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pengumuman</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: 1 Desember 2024</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pendaftaran Ulang</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: 1 - 15 Desember 2024</span>
        </li>
      </ul>
     </section>
  );
};

export default Timeline;
