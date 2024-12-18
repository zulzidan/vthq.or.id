import React from "react";
import { TelephoneFill } from "react-bootstrap-icons";
interface RegistrationInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kontakPendaftaran: any
}
const RegistrationInfo: React.FC<RegistrationInfoProps> = ({kontakPendaftaran}) => {
  return (
     <section id="kontak" className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-6 px-6 md:px-16 mb-4">
     <div className="text-center">
       <div className="text-center mx-auto mb-6">
        <h2 className="text-lg md:text-2xl text-center font-bold uppercase">{kontakPendaftaran.titleOfContent}</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-28 bg-gray-400 relative">
            <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
       <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly space-y-4 md:space-y-0 mt-4">
        {kontakPendaftaran.button.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (button: any, index: number) => {
          return (
            <a href={button.fields.link} key={index}>
            <div className="flex space-x-4 items-center">
            <TelephoneFill/>
            <div>
            <p className="font-bold text-green-600 text-left text-xl md:text-2xl hover:text-yellow-600">{button.fields.title}</p>
            <p className="text-xs text-left">({button.fields.optionalReferencesOfTitle})</p>
            </div>
            </div>
            </a>
          )
        })}
       {/* https://wa.me/+6285756052150 */}
          {/* <a href={`https://wa.me}`}>
          <div className="flex space-x-4 items-center">
          <TelephoneFill/>
          <div>
          <p className="font-bold text-green-600 text-xl md:text-2xl hover:text-yellow-600">{}</p>
          <p className="text-xs text-left">()</p>
          </div>
          </div>
          </a> */}
          {/* https://wa.me/+6281244679866 */}
          {/* <a href={`https://wa.me/$`}>
          <div className="flex space-x-4 items-center">
          <TelephoneFill/>
          <div>
          <p className="font-bold text-green-600 text-left text-xl md:text-2xl hover:text-yellow-600"></p>
          <p className="text-xs text-left">()</p>
          </div>
          </div>
          </a> */}
       </div>
     </div>
     </section>
   );
};

export default RegistrationInfo;
