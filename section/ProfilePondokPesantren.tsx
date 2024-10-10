import * as React from "react";
import Image from "next/image";

export const ProfilePondokPesantren: React.FC = () => {
  return (
      <div className="w-full h-[267px] m-0 relative">
          <Image
            src="/images/welcome1.jpg"
            alt="backroundImage"
            fill
            quality={100}
            priority
            className="object-cover object-right brightness-50"
          />
          <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
            <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
              PROFIL <br />
              PONDOK PESANTREN VILLA TAHFIZH <br />
              HIMMATUL QURAN MALINO
            </h1>
          </div>
        </div>
  );
};

export default ProfilePondokPesantren;
