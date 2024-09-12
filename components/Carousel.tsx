// import React from "react";
// import Image from "next/image";
// // import BackgrounImageWlcome from "@/public/SELAMAT DATANG.jpg";
// // import BackgroundImagePPDB from "@/public/PPDB.jpg";

// import { useState, useEffect } from "react";
// const Carousel: React.FC = () => {
//   const backgrounds = ["/images/SELAMAT DATANG.jpg", "/images/PPDB.jpg"];

//   // State untuk melacak background mana yang sedang aktif
//   const [currentBackground, setCurrentBackground] = useState(0);

//   // Ubah background setiap beberapa detik (contoh: 5 detik)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBackground((prevBackground) =>
//         prevBackground === backgrounds.length - 1 ? 0 : prevBackground + 1
//       );
//     }, 5000); // Durasi waktu antar pergantian (5000ms = 5 detik)

//     return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
//   }, [backgrounds.length]);
//   return (
//     <div className="relative w-full h-[267px]">
//       <Image
//         src={backgrounds[currentBackground]} // Path ke gambar
//         alt="Header Background"
//         layout={"fill"} // Menetapkan gambar agar memenuhi seluruh container
//         objectFit={"cover"} // Gambar akan menutupi area dengan proporsi yang tepat
//         quality={100} // Opsi untuk meningkatkan kualitas gambar
//         priority={true} // Preload gambar untuk mengoptimalkan waktu muat
//         className="transition-opacity duration-1000"
//       />
//       <div className="absolute inset-0 flex items-center justify-center text-center">
//         <h1 className="text-white font-bold text-2xl lg:text-3xl">
//           SLIDE SELAMAT DATANG DI <br />
//           PONDOK PESANTREN VILLA TAHFIZH <br />
//           HIMMATUL QURAN MALINO
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Carousel: React.FC = () => {
  const backgrounds = ["/images/SELAMAT DATANG.jpg", "/images/PPDB.jpg"];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) =>
        prevBackground === backgrounds.length - 1 ? 0 : prevBackground + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative w-full h-[267px]">
      {backgrounds.map((bg, index) => (
        <Image
          key={bg}
          src={bg}
          alt={`Header Background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={index === 0}
          className={`absolute top-0 left-0 transition-opacity duration-0 ${
            index === currentBackground ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white font-bold text-2xl lg:text-3xl">
          SLIDE SELAMAT DATANG DI <br />
          PONDOK PESANTREN VILLA TAHFIZH <br />
          HIMMATUL QURAN MALINO
        </h1>
      </div>
    </div>
  );
};

export default Carousel;