import React from "react";
import IconWithTitle from "../components/IconWithTitle";
import { bestPrograms } from "@/data/bestPrograms";

const BestPrograms: React.FC = () => {
  return (
    <div className="w-full px-6 md:px-16 py-6">
       <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
        <h2 className="text-base font-bold text-green-700 mt-1">
          PROGRAM UNGGULAN
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div>
          <IconWithTitle args={bestPrograms}/>
      </div>
    </div>
  );
};

export default BestPrograms;
