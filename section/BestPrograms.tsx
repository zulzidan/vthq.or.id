import React from "react";
import IconWithTitle from "../components/IconWithTitle";

interface BestProgramsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bestProgramsData:any
}

const BestPrograms: React.FC<BestProgramsProps> = ({bestProgramsData}) => {
  return (
    <div className="w-full px-6 md:px-16 py-6">
       <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
        <h2 className="text-base font-bold text-green-700 mt-1 uppercase">
          {bestProgramsData.titleOfProgram}
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div>
          <IconWithTitle programsName={bestProgramsData.name}/>
      </div>
    </div>
  );
};

export default BestPrograms;
