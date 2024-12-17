import Image from "next/image";

interface PesantrenProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfile: any
}

const PesantrenProfile: React.FC<PesantrenProfileProps> = ({
  headingProfile
}) => {
  return (
    <div className="flex flex-col md:justify-between md:items-center md:flex-row bg-gray-50 py-6 px-6 md:px-14">
      {headingProfile.image && (
      <div className="mb-4 md:mb-0">
        <Image
          src={`https:${headingProfile.image.fields.file.url}`}
          alt={headingProfile.image.fields.title}
          width={headingProfile.image.fields.file.details.image.width || 1000}
          height={headingProfile.image.fields.file.details.image.height || 1000}
          className="w-44 h-auto"
        />
      </div>
      )}
      <div className="md:w-3/4 md:px-6">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-2 py-1 px-1 rounded-sm">
           {headingProfile.title} :
          </h2>
        </div>
        <p className="mb-4 text-sm md:text-base text-green-900">
          {headingProfile.description}
        </p>
        <p className="font-bold text-base text-green-700 ">
          {headingProfile.name}
        </p>
      </div>
      {headingProfile.eventImages && (
      <div className="grid grid-cols-2 md:flex md:flex-col md:space-y-8 pt-5 space-x-2 md:space-x-0">
     
        {headingProfile.eventImages.map(
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: { sys: { id: any; }; fields: { file: { url: any; details: { image: { width: number; height: number; }; }; }; title: string; }; }) => {
          const id = item.sys.id;
          const imageUrl = item.fields.file.url;
          const altText = item.fields.title || "Pesantren Image";
          const width = item.fields.file.details.image.width || 1000;
          const height = item.fields.file.details.image.height || 1000;
          return (
            <Image
              key={id}
              src={`https:${imageUrl}`}
              alt={altText}
              height={height}
              width={width}
              className="w-auto h-auto md:h-40 shadow-sm"
            />
          );
        })}
      </div>
      )}
    </div>
  );
};

export default PesantrenProfile;
