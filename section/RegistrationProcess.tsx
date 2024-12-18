import { FaRegClipboard, FaHandHoldingUsd, FaSearch, FaBullhorn } from "react-icons/fa";

const iconMap: { [key: string]: JSX.Element } = {
  "Pendaftaran": <FaRegClipboard size={40} className="text-white mb-4" />,
  "Pembayaran": <FaHandHoldingUsd size={40} className="text-white mb-4" />,
  "Seleksi": <FaSearch size={40} className="text-white mb-4" />,
  "Pengumuman": <FaBullhorn size={40} className="text-white mb-4" />
};

interface RegistrationProcessProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registrationFlow: any
}

const RegistrationProcess: React.FC<RegistrationProcessProps> = ({registrationFlow}) => {
  return (
    <section className="py-6 px-6 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-lg md:text-2xl font-bold uppercase">{registrationFlow.title}</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-28 bg-gray-400 relative">
            <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {registrationFlow.steps.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (step: any, index: number) => {
          return(
            <div key={index} className="bg-gradient-to-l from-green-500 to-green-800 text-white p-6 rounded-lg text-center shadow-md">
            <div className="flex justify-center">
            {iconMap[step.fields.titleOfContent] || null}
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">{step.fields.stepTitle}</h3>
            <p className="text-xs md:text-sm">{step.fields.description}</p>
          </div>
          )
        })}
        {/* {steps.map((step, index) => (
          <div key={index} className="bg-gradient-to-l from-green-500 to-green-800 text-white p-6 rounded-lg text-center shadow-md">
            <div className="flex justify-center">
            {step.icon}
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-xs md:text-sm">{step.description}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default RegistrationProcess;
