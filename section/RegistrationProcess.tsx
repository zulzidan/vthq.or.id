import React from 'react';
import { FaRegClipboard, FaHandHoldingUsd, FaSearch, FaBullhorn } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRegClipboard size={40} className="text-white mb-4" />,
    title: 'Pendaftaran',
    description: 'Isi biodata melalui website ini dengan data yang lengkap dan akurat.',
  },
  {
    icon: <FaHandHoldingUsd size={40} className="text-white mb-4" />,
    title: 'Pembayaran',
    description: 'Lakukan pembayaran pendaftaran melalui nomor rekening yang tercantum dalam formulir.',
  },
  {
    icon: <FaSearch size={40} className="text-white mb-4" />,
    title: 'Seleksi',
    description: 'Ikuti seluruh rangkaian seleksi masuk Pondok yang telah ditetapkan oleh pelaksana.',
  },
  {
    icon: <FaBullhorn size={40} className="text-white mb-4" />,
    title: 'Pengumuman',
    description: 'Hasil Pengumuman akan diumumkan oleh pelaksana sesuai dengan waktu yang telah ditetapkan.',
  },
];

const RegistrationProcess = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">ALUR PENDAFTARAN</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-16 bg-gray-400 relative">
            <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-green-700 text-white p-6 rounded-lg text-center shadow-md">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegistrationProcess;
