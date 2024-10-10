import React from "react";

import Image from "next/image";
import Logo from "@/public/logo.png";

import { JournalText, Heart, Briefcase, CashStack, TelephoneFill, Youtube, Instagram, Facebook, Envelope, GeoAlt } from "react-bootstrap-icons";

// interface FooterProps {
//   imageAlt: string;
// }

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
            <h3 className="text-base lg:text-xl font-bold mb-4">ABOUT US:</h3>
            <ul className="space-y-2">
              <a href="#" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
                <JournalText className="w-4 h-4"/>
                <li>Visi dan Misi</li>
              </a>
              <a href="#" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
                <Heart className="w-4 h-4"/>
                <li>Layanan Keummatan</li>
              </a>
              <a href="#" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
                <Briefcase className="w-4 h-4"/>
                <li>Job Vacancy</li>
              </a>
              <a href="#" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
                <CashStack className="w-4 h-4"/>
                <li>Informasi Donasi</li>
              </a>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-base lg:text-xl font-bold mb-4">CONTACT US:</h3>
            <ul className="space-y-2">
            <a href="himmatulquranmalino@gmail.com" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
              <Envelope className="w-4 h-4"/>
              <li>himmtatulquranmalino@gmail.com</li>
            </a>
            <a href="https://maps.app.goo.gl/J7FLeaZF6NKd2c2t7" target="_blank" className="hover:underline text-xs md:text-base flex-grow flex space-x-2 md:space-x-4 items-center">
            <GeoAlt className="w-4 h-4"/>
            <li className="w-fit">Jln. Batulapisi Luar Kel. Malino Kec. Tinggimoncong Kab. Gowa - Sulawesi Selatan</li>
            </a>
            <a href="https://wa.me/+6281244679866" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
            <TelephoneFill className="w-4 h-4"/>
              <li>+82812-4467-9866</li>
            </a>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base lg:text-xl font-bold mb-4">
              SOCIAL MEDIA:
            </h3>
            <ul className="space-y-2">
              <a href="https://www.instagram.com/tahfizhhimmatulquran/" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
              <Instagram className="w-4 h-4"/>
                <li>tahfizhimmatulquran</li>
              </a>
              <a href="https://web.facebook.com/01Villa/?_rdc=1&_rdr" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
                <Facebook className="w-4 h-4"/>
                <li>Villa Tahfizh</li>
              </a>
              <a href="https://www.youtube.com/@himmahtv134" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4 justify-center md:justify-normal items-center">
              <Youtube className="w-4 h-4"/>
                <li>Himmah TV</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 font-semibold p-6 text-center text-xs md:text-sm">
        &copy; 2022 - Infokom Villa Tahfizh Himmatul Quran Malino
      </div>
    </footer>
  );
};

export default Footer;
