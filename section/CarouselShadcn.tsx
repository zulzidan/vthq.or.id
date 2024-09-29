import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { welcomeImage } from "@/data/dummyWelcomeImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselShadcn: React.FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="w-full h-[267px] m-0">
          {welcomeImage.map((welcome) => {
               return (
        <CarouselItem className="relative w-full" key={welcome.id}>
          <Image
            src={welcome.imageUrl}
            alt={welcome.title}
            fill
            quality={100}
            priority
            className="object-cover object-right brightness-50"
          />
          <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
          <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
            SLIDE SELAMAT DATANG DI <br />
            PONDOK PESANTREN VILLA TAHFIZH <br />
            HIMMATUL QURAN MALINO
          </h1>
        </div>
        </CarouselItem>
               )
          })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 md:left-20 text-white" />
      <CarouselNext className="absolute right-5 md:right-20 text-white" />
    </Carousel>
  );
};

export default CarouselShadcn;


//THIS WITH BUTTON NO EXCEDED

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import { welcomeImage } from "@/data/dummyWelcomeImage";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export const CarouselShadcn: React.FC = () => {
//   const [canScrollNext, setCanScrollNext] = React.useState(true);
//   const [canScrollPrev, setCanScrollPrev] = React.useState(false);

//   const handleSelect = (carouselApi) => {
//     setCanScrollNext(carouselApi.canScrollNext());
//     setCanScrollPrev(carouselApi.canScrollPrev());
//   };

//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 5000,
//         }),
//       ]}
//       className="w-full"
//       onSelect={handleSelect} // Listen for select events
//     >
//       <CarouselContent className="w-full h-[267px] m-0">
//         {welcomeImage.map((welcome) => (
//           <CarouselItem className="relative w-full" key={welcome.id}>
//             <Image
//               src={welcome.imageUrl}
//               alt={welcome.title}
//               fill
//               quality={100}
//               priority
//               className="object-cover brightness-50"
//             />
//             <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
//               <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
//                 SLIDE SELAMAT DATANG DI <br />
//                 PONDOK PESANTREN VILLA TAHFIZH <br />
//                 HIMMATUL QURAN MALINO
//               </h1>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>

//       {canScrollPrev && (
//         <CarouselPrevious className="absolute left-5 md:left-20 text-white" />
//       )}
//       {canScrollNext && (
//         <CarouselNext className="absolute right-5 md:right-20 text-white" />
//       )}
//     </Carousel>
//   );
// };

// export default CarouselShadcn;
