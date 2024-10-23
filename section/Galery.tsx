import React from "react";
import GaleryActivity from "@/components/GaleryActivity";
import { GaleryActivity as GaleryActivityType} from "@/contentful/galeryActivity";

interface GaleryProps {
  galleries: GaleryActivityType[];
}

const Galery: React.FC<GaleryProps> = ({ galleries }) => {
  if (!galleries) {
    return (
      <div className="w-full mx-auto px-6 md:px-16 py-6">
      <p>Galery Not Found</p>
      </div>
    )
  }
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
          {galleries.map((image, index) => (
            <GaleryActivity galery={image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galery;