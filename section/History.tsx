import React from "react";

const History: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="w-full px-6 md:px-16 py-6">
       <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
        <h2 className="text-lg font-bold text-green-700 mt-1">
         SEJARAH
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div className="lg:ml-32 text-justify text-sm md:text-base">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit qui porro quis adipisci dolores quasi veniam tenetur vero commodi! Corrupti veritatis possimus voluptates repudiandae neque, eaque quas harum accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit qui porro quis adipisci dolores quasi veniam tenetur vero commodi! Corrupti veritatis possimus voluptates repudiandae neque, eaque quas harum accusamus.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit qui porro quis adipisci dolores quasi veniam tenetur vero commodi! Corrupti veritatis possimus voluptates repudiandae neque, eaque quas harum accusamus.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit qui porro quis adipisci dolores quasi veniam tenetur vero commodi! Corrupti veritatis possimus voluptates repudiandae neque, eaque quas harum accusamus.</p>
      </div>
    </div>
    </section>
  );
};

export default History;
