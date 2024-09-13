import React from "react";
import IconWithTitle from "../components/IconWithTitle";
import { bestPrograms } from "@/data/bestPrograms";

const BestPrograms: React.FC = () => {
  return (
    <div className="w-full px-6 md:px-16 py-6">
      <div className="grid lg:grid-flow-col items-center align-middle pb-4">
        <h2 className="text-2xl font-bold text-green-700 mt-1">
          PROGRAM UNGGULAN
        </h2>
        <hr className="bg-green-600 py-1" />
      </div>
      <div>
          <IconWithTitle args={bestPrograms}/>
      </div>
    </div>
  );
};

export default BestPrograms;
