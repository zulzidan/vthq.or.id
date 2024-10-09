import React from "react";
import { Button } from "../components/ui/button";

const RegistrationMethod: React.FC = () => {
  return (
     <section className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-6 px-6 md:px-16">
     <div className="text-center">
       <div className="text-center mb-6">
        <h2 className="text-lg md:text-2xl font-bold">ALUR PENDAFTARAN</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-28 bg-gray-400 relative">
            <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
       <p className="text-md md:text-lg lg:text-xl font-bold mb-4">
         Pendaftaran dapat dilakukan dengan:
       </p>
 
       <p className="text-md md:text-lg lg:text-xl font-bold mb-4">
         Datang langsung ke kantor kami yang beralamat di
       </p>
       <p className="text-green-700 text-lg md:text-xl font-bold">
         Jl. Batulapisi Luar, Kel. Malino Kec. Tinggimoncong <br />
         Kab. Gowa, Sulawesi Selatan
       </p>
       <p className="text-md font-bold md:text-lg lg:text-xl mt-4">Atau melalui link berikut:</p>

       <div className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0 mt-4">
          <a href="https://forms.gle/FXKFhrT3k8i5MrK46">
         <Button className="bg-gradient-to-tr  from-green-500 w-60 md:w-72 md:text-base lg:text-lg to-green-800 text-white font-bold px-4 py-2 rounded-md hover:text-yellow-500 transition">
           Daftar untuk Wustha
         </Button>
          </a>
          <a href="https://forms.gle/ayChmGfDUzxi5iEe6">
         <Button className="bg-gradient-to-tr from-green-500 w-60 md:w-72 md:text-base lg:text-lg  to-green-800 text-white font-bold px-4 py-2 rounded-md hover:text-yellow-500 transition">
           Daftar untuk SMA
         </Button>
          </a>
       </div>
     </div>
     </section>
   );
};

export default RegistrationMethod;
