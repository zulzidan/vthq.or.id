import React from "react";
import { dummyImages } from "@/data/dummyImages";
import GaleryActivity from "@/components/GaleryActivity";


const Galery: React.FC = () => {
  return (
    <section>
      <div className="w-full px-6 md:px-16 py-6">
        <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
          <h2 className="text-base font-bold text-green-700 mt-1">
            GALERY KEGIATAN
          </h2>
          <div className="flex-grow">
            <hr className="bg-green-600 h-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dummyImages.map((image) => {
            return (
              <GaleryActivity image={image} key={image.id}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galery;
