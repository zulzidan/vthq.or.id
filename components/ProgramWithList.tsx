import { Program } from "@/types/program";
import React from "react";

interface ProgramWithListProps {
    program: Program
}

const ProgramWithList: React.FC<ProgramWithListProps> = ({program}) => {
     return (
          <section className="px-6 md:px-14 py-6 ">
      <div className="mx-auto max-w-screen-2xl space-y-10 lg:gap-6">
        <div className="w-full">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1 uppercase">{program.titleProgram}</h2>
            <div className="flex-grow">
              <hr className="bg-gradient-to-r from-green-500 to-green-800 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col text-sm md:text-base lg:block md:ml-32 lg:ml-28">
            <ul className="list-disc list-inside space-y-4">
               {program.listPrograms.map((program, index) => (
                    <li key={index}>{program}</li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
     )
}
export default ProgramWithList;