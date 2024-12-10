import Image from "next/image";
import SimaanFarid from "@/public/images/simaan-farid.jpg";
import SimaanRayyan from "@/public/images/simaan-rayyan.jpg";

interface PesantrenProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pesantrenProfile: any
}

const PesantrenProfile:React.FC<PesantrenProfileProps> = ({pesantrenProfile}) => {
  return (
    <div className="flex flex-col md:justify-between md:items-center md:flex-row bg-gray-50 py-6 px-6 md:px-14">
      <div className="mb-4 md:mb-0">
        <Image
          src={`https:${pesantrenProfile.pimpinanImage.fields.file.url}`}
          alt={pesantrenProfile.pimpinanImage.fields.title}
          width={200}
          height={200}
          className="w-44 h-auto"
        />
      </div>
      <div className="md:w-3/4 md:px-6">
      <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
        <h2 className="text-base font-bold mb-2 py-1 px-1 rounded-sm">Sambutan Pimpinan :</h2>
      </div>
        <p className="mb-4 text-sm md:text-base text-green-900">
          {pesantrenProfile.pimpinanSpeech}
        </p>
        <p className="font-bold text-base text-green-700 ">
          {pesantrenProfile.pimpinanName}
          </p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-col md:space-y-8 pt-5 space-x-2 md:space-x-0">
        <Image
          src={SimaanFarid}
          alt="Simaan Hafalan"
          className="w-auto h-auto md:h-40 shadow-sm"
        />
        <Image
          src={SimaanRayyan}
          alt="Simaan Hafalan"
          className="w-auto h-auto md:h-40 shadow-sm"
        />
      </div>
    </div>
  );
};

export default PesantrenProfile;