import ProgramWithList from "@/components/ProgramWithList";
import { allPrograms } from "@/data/dummyPrograms";
import React from "react";

const Programs:React.FC = () => {
     return (
          <section>
               {allPrograms.map((programs, index) => {
                    return (
                         <ProgramWithList program={programs} key={index}/>
                    )
               })}
          </section>
     )
}

export default Programs;