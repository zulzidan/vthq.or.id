import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section>
      <div className="flex px-6 md:px-14 py-6 space-y-10 lg:space-y-0 flex-col lg:flex-row md:justify-between lg:gap-6">
        <div className="w-full lg:max-w-2xl">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1">VISION</h2>
            <div className="flex-grow">
              <hr className="bg-green-600 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col text-sm md:text-base lg:block md:ml-28 text-justify">
            <ul className="list-disc list-inside space-y-4">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam. adncjjvnfnncjc ncjnnnn</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquaskfnaknfasnfianifanm.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qsksnfksfnisfiasfiauisquam.</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:max-w-2xl">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1">MISSION</h2>
            <div className="flex-grow">
              <hr className="bg-green-600 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex text-sm md:text-base flex-col lg:block md:ml-28 text-justify">
          <ul className="list-disc list-inside space-y-4">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam. adncjjvnfnncjc ncjnnnn</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquaskfnaknfasnfianifanm.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qsksnfksfnisfiasfiauisquam.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
