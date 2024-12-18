import ProgramWithList from "@/components/ProgramWithList";
import { Program } from "@/types/program";
import React from "react";

interface ProgramsProps {
     allPrograms: Program[]
}

const Programs:React.FC<ProgramsProps> = ({allPrograms}) => {
     return (
          <section className="md:grid md:grid-cols-2">
               {allPrograms.map((programs, index) => {
                    return (
                         <ProgramWithList program={programs} key={index}/>
                    )
               })}
          </section>
     )
}

export default Programs;