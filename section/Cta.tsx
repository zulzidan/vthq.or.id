import Link from 'next/link';
import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-800 text-white py-16">
      <div className="container px-6 md:px-14 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:max-w-3xl text-left">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            MARI BERGABUNG BERSAMA KAMI DEMI MEWUJUDKAN GENERASI QUR&apos;ANI PENERUS AGAMA DAN BANGSA
          </h1>
          <p className="text-xs md:text-base lg:text-lg mb-4">
            Assalamu&apos;alaikum sahabat Qur&apos;san... <br />
            Villa Tahfizh Himmatul Quran Malino kembali membuka <span className="font-bold">Penerimaan Peserta Didik Baru Tahun Ajaran 2025/2026</span> untuk jenjang Wustha (SMP) dan SMA.
          </p>
          <Link href="/ppdb" className="inline-block mt-4 px-4 py-1 md:px-6 md:py-3 border text-xs md:text-base border-white rounded-full text-white hover:bg-white hover:text-green-800 transition-colors duration-300">
            Info Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;

