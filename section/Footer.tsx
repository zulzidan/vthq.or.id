import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

import { JournalText, Heart, Briefcase, CashStack, TelephoneFill, Youtube, Instagram, Facebook, Envelope, GeoAlt } from "react-bootstrap-icons";

// interface FooterProps {
//   imageAlt: string;
// }

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full bg-gray-900 py-6 px-6 md:py-20 text-white font-semibold">
        <div className="container grid grid-cols-1 mx-auto lg:flex md:justify-between gap-8">
          <div className="text-center hidden lg:block">
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
          <Link href="/" className='flex gap-4 items-center lg:hidden'>
                        <Image src={Logo} alt="Logo pesantren" className='h-8 sm:h-10 lg:h-18 xl:h-20 w-auto' priority />
                        <p className='text-xs lg:text-base text-stone-50 leading-5 font-bold'>
                        معهد همة القرآن لتحفيظ القرآن بمالينو
                            <br />
                            Pondok Pesantren Villa Tahfizh 
                            <br />
                            Himmatul Quran Malino
                        </p>
                    </Link>
          <div className="text-start">
            <h3 className="text-base lg:text-xl font-bold mb-4">ABOUT US:</h3>
            <ul className="space-y-2">
              <Link href="/profil" className="hover:underline text-xs flex md:text-base space-x-2 md:space-x-4">
                <JournalText className="w-4 h-4"/>
                <li>Visi dan Misi</li>
              </Link>
              <Link href="#" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
                <Heart className="w-4 h-4"/>
                <li>Layanan Keummatan</li>
              </Link>
              <Link href="/ppdb/#kontak" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
                <Briefcase className="w-4 h-4"/>
                <li>Job Vacancy</li>
              </Link>
              <Link href="/donasi" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
                <CashStack className="w-4 h-4"/>
                <li>Informasi Donasi</li>
              </Link>
            </ul>
          </div>
          <div className="text-start">
            <h3 className="text-base lg:text-xl font-bold mb-4">CONTACT US:</h3>
            <ul className="space-y-2">
            <a href="mailto:himmatulquranmalino@gmail.com" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
              <Envelope className="w-4 h-4"/>
              <li>himmtatulquranmalino@gmail.com</li>
            </a>
            <a href="https://maps.app.goo.gl/J7FLeaZF6NKd2c2t7" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
            <GeoAlt className="w-4 h-4"/>
            <li className="w-fit">Jln. Batulapisi Luar Kel. Malino Kec. Tinggimoncong Kab. Gowa - Sulawesi Selatan</li>
            </a>
            <a href="https://wa.me/+6281244679866" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
            <TelephoneFill className="w-4 h-4"/>
              <li>+82812-4467-9866</li>
            </a>
            </ul>
          </div>

          <div className="text-start">
            <h3 className="text-base lg:text-xl font-bold mb-4">
              SOCIAL MEDIA:
            </h3>
            <ul className="space-y-2">
              <a href="https://www.instagram.com/tahfizhhimmatulquran/" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
              <Instagram className="w-4 h-4"/>
                <li>tahfizhimmatulquran</li>
              </a>
              <a href="https://web.facebook.com/01Villa/?_rdc=1&_rdr" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
                <Facebook className="w-4 h-4"/>
                <li>Villa Tahfizh</li>
              </a>
              <a href="https://www.youtube.com/@himmahtv134" target="_blank" className="hover:underline text-xs md:text-base flex space-x-2 md:space-x-4">
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
