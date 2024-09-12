import React from 'react';

const Cta: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-800 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Bagian Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            MARI BERGABUNG BERSAMA KAMI DEMI MEWUJUDKAN GENERASI QUR'ANI PENERUS AGAMA DAN BANGSA
          </h1>
          <p className="text-lg mb-4">
            Assalamu'alaikum sahabat Qur'an... <br />
            Villa Tahfizh Himmatul Quran Malino kembali membuka <span className="font-bold">Penerimaan Peserta Didik Baru Tahun Ajaran 2025/2026</span> untuk jenjang Wustha (SMP) dan SMA.
          </p>
          <a href="#" className="inline-block mt-4 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-green-800 transition-colors duration-300">
            Info Selengkapnya
          </a>
        </div>

        {/* Bagian Kosong (untuk gambar atau hiasan di kanan, jika ada) */}
        <div className="lg:w-1/2 hidden lg:block">
          {/* Ini bisa diisi gambar atau konten lainnya jika diinginkan */}
        </div>
      </div>
    </section>
  );
};

export default Cta;

