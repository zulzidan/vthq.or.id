import React from "react";
import { TelephoneFill } from "react-bootstrap-icons";

const RegistrationInfo: React.FC = () => {
  return (
     <section className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-6 px-6 md:px-16 mb-4">
     <div className="text-center">
       <div className="text-center mb-6">
        <h2 className="text-lg md:text-2xl font-bold">INFORMASI PENDAFTARAN</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-28 bg-gray-400 relative">
            <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
       <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly space-y-4 md:space-y-0 mt-4">
          <a href="https://wa.me/+6285756052150">
          <div className="flex space-x-4 items-center">
          <TelephoneFill/>
          <div>
          <p className="font-bold text-green-600 text-xl hover:text-yellow-600">0857 5605 2150</p>
          <p className="text-xs text-left">(Ketua Panitia)</p>
          </div>
          </div>
          </a>
          <a href="https://wa.me/+6285756052150">
          <div className="flex space-x-4 items-center">
          <TelephoneFill/>
          <div>
          <p className="font-bold text-green-600 text-left text-xl hover:text-yellow-600">0857 5605 2150</p>
          <p className="text-xs text-left">(Humas Himmatul Quran)</p>
          </div>
          </div>
          </a>
       </div>
     </div>
     </section>
   );
};

export default RegistrationInfo;
