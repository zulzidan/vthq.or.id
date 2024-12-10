import StudentsCard from "@/components/StudentsCard";
import React from "react";

interface StudentInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPesertaDidik: any
}

const StudentInfo: React.FC<StudentInfoProps> = ({informasiPesertaDidik}) => {
  return (
    <section className="py-6 px-6 md:px-14">
      <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
        <h2 className="text-base font-bold text-green-700 mt-1">
          INFORMASI PESERTA DIDIK
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div className="grid gap-4 md:flex md:justify-evenly">
        <StudentsCard title={`SMP: ${informasiPesertaDidik.smp} Orang`}/>
        <StudentsCard title={`SMA: ${informasiPesertaDidik.sma} Orang`} />
        <StudentsCard title={`ALUMNI: ${informasiPesertaDidik.alumni} Orang`} />
      </div>
    </section>
  );
};

export default StudentInfo;
