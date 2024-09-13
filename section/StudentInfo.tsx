import StudentsCard from "@/components/StudentsCard";
import React from "react";

const StudentInfo: React.FC = () => {
  return (
    <section className="py-6 px-6 md:px-14">
      <div className="grid lg:grid-flow-col items-center align-middle pb-4">
        <h2 className="text-2xl font-bold text-green-700 mt-1">
          GALERY KEGIATAN
        </h2>
        <hr className="bg-green-600 py-1" />
      </div>
      <div className="flex justify-between">
        <StudentsCard title="SMP: 118 Orang" />
        <StudentsCard title="SMP: 118 Orang" />
        <StudentsCard title="SMP: 118 Orang" />
      </div>
    </section>
  );
};

export default StudentInfo;
