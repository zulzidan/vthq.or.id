import React from "react";

import Image from "next/image";
import Logo from "@/public/logo.png";

interface FooterProps {
  imageAlt: string;
}

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full bg-gray-900 py-4 px-4 md:py-20 text-white font-semibold">
        <div className="container grid grid-cols-1 mx-auto md:flex md:justify-between gap-8">
          <div className="text-center">
            <Image
              src={Logo}
              alt={"Logo"}
              className="h-12 md:h-16 w-auto mx-auto mb-4"
            />
            <p className="text-xs">معهد همة القرآن لتحفيظ القرآن بمالينو</p>
            <h2 className="text-xs font-bold">PONDOK PESANTREN</h2>
            <h2 className="text-xs font-bold">VILLA TAHFIZH</h2>
            <h2 className="text-xs font-bold">HIMMATUL QURAN MALINO</h2>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg lg:text-3xl font-bold mb-4">ABOUT US:</h3>
            <ul className="space-y-16">
              <a href="#" className="hover:underline">
                <li>Visi dan Misi</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Layanan Keummatan</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Job Vacancy</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Informasi Donasi</li>
              </a>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg lg:text-3xl font-bold mb-4">CONTACT US:</h3>
            <a href="#" className="hover:underline">
              <p>himmtatulquran.malino@gmail.com</p>
            </a>
            <a href="#" className="hover:underline">
              <p>Jln. Batulapisi Luar Kel. Malino Kec. Tinggimoncong</p>
              <p>Kab. Gowa - Sulawesi Selatan</p>
            </a>
            <a href="#" className="hover:underline">
              <p>+82812-4467-9866</p>
            </a>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg lg:text-3xl font-bold mb-4">
              SOCIAL MEDIA:
            </h3>
            <ul className="space-y-2">
              <a href="#" className="hover:underline">
                <li>tahfizhimmatulquran</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Villa Tahfizh</li>
              </a>
              <a href="#" className="hover:underline">
                <li>Himmah TV</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 font-semibold p-6 text-center">
        &copy; 2022 - Infokom Villa Tahfizh Himmatul Quran Malino
      </div>
    </footer>
  );
};

export default Footer;
