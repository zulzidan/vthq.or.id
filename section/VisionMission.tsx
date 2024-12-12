import React from "react";

interface VissionMissionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  misi: any
}
const VisionMission: React.FC<VissionMissionProps> = ({visi, misi}) => {
  return (
    <section className="px-6 md:px-14 py-6 ">
      <div className="flex mx-auto max-w-screen-2xl space-y-10 lg:space-y-0 flex-col lg:flex-row md:justify-between lg:gap-6">
        <div className="w-full lg:max-w-2xl">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1">VISION</h2>
            <div className="flex-grow">
              <hr className="bg-gradient-to-r from-green-500 to-green-800 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col text-sm md:text-base lg:block md:ml-32 lg:ml-28">
            <ul className="list-disc list-inside space-y-4">
              
              {visi.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (item: { sys: { id: any; }; fields: { visi: any; }; }) => {
                const id = item.sys.id
                const visi = item.fields.visi
                return(
                  <li key={id}>{visi}</li>
                )
              })}
              {/* <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam. adncjjvnfnncjc ncjnnnn</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquaskfnaknfasnfianifanm.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qsksnfksfnisfiasfiauisquam.</li> */}
            </ul>
          </div>
        </div>

        <div className="w-full lg:max-w-2xl">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1">MISSION</h2>
            <div className="flex-grow">
              <hr className="bg-gradient-to-tr from-green-500 to-green-800 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex items-end text-sm md:text-base flex-col lg:block md:ml-32">
          <ul className="list-disc list-inside space-y-4">

          {misi.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (item: { sys: { id: any; }; fields: { misi: any; }; }) => {
                const id = item.sys.id
                const misi = item.fields.misi
                return(
                  <li key={id}>{misi}</li>
                )
              })}
              {/* <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam. adncjjvnfnncjc ncjnnnn</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquaskfnaknfasnfianifanm.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qsksnfksfnisfiasfiauisquam.</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
