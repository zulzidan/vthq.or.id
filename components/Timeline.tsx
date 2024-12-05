import React from "react";

export type TimeLineFields = {
  TanggalPendaftaran: string;
  TanggalUjian: string;
  TanggalPengumuman: string;
  TanggalPendaftaranUlang: string;
}

interface TimelineProps {
  timelineFields: TimeLineFields
}

const Timeline: React.FC<TimelineProps> = ({timelineFields}) => {

  return (
     <section className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-6 px-6 md:px-16">
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pendaftaran</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: {timelineFields.TanggalPendaftaran}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Ujian</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: {timelineFields.TanggalUjian}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pengumuman</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: {timelineFields.TanggalPengumuman}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold text-yellow-400 text-sm md:text-lg lg:text-xl">Pendaftaran Ulang</span>
          <span className="text-right text-sm md:text-lg lg:text-xl">: {timelineFields.TanggalPendaftaranUlang}</span>
        </li>
      </ul>
     </section>
  );
};

export default Timeline;