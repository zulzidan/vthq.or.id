import React from "react";
import Image from "next/image";
import { dummyImages } from "@/data/dummyImages";

const Galery: React.FC = () => {
  return (
  <section>
    <div className="w-full px-6 md:px-16 py-6">
    <div className="sm:flex sm:space-x-10 block items-center align-middle pb-4">
        <h2 className="text-2xl font-bold text-green-700 mt-1">
          GALERY KEGIATAN
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 py-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dummyImages.map((image) => {
          return (
            <div key={image.id} className="w-auto h-auto">
              <Image
                src={image.imageUrl}
                alt={image.title}
                width={2363}
                height={2363}
                className="w-auto h-auto rounded-sm shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default Galery;
