import StudentsCard from "@/components/StudentsCard";
import React from "react";

const StudentInfo: React.FC = () => {
  return (
    <section className="py-6 px-6 md:px-14">
      <div className="sm:flex sm:space-x-10 block items-center align-middle pb-8">
        <h2 className="text-2xl font-bold text-green-700 mt-1">
          INFORMASI PESERTA DIDIK
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 py-1" />
        </div>
      </div>
      <div className="grid gap-4 md:flex md:justify-evenly">
        <StudentsCard title="SMP: 118 Orang" />
        <StudentsCard title="SMA: 85 Orang" />
        <StudentsCard title="ALUMNI: 143 Orang" />
      </div>
    </section>
  );
};

export default StudentInfo;
