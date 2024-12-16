import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselShadcnProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImages: any
}

export const CarouselShadcn: React.FC<CarouselShadcnProps> = ({welcomeImages}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
        
      ]}
      className="w-full"
    >
      <CarouselContent className="w-full min-h-[40vh] m-0">
          {welcomeImages.images.map(
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (image: { sys: { id: React.Key | null | undefined; }; image: any; fields: { file: { url: any; }; title: string; }; }) => {
               return (
        <CarouselItem className="relative w-full" key={image.sys.id}>
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            fill
            quality={100}
            priority
            className="object-cover object-right brightness-50"
          />
          <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
          <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
            {welcomeImages.text}
            {/* SELAMAT DATANG DI <br />
            PONDOK PESANTREN VILLA TAHFIZH <br />
            HIMMATUL QURAN MALINO */}
          </h1>
        </div>
        </CarouselItem>
               )
          })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 md:left-20 text-white disabled:opacity-0" />
      <CarouselNext className="absolute right-5 md:right-20 text-white disabled:opacity-0" />
    </Carousel>
  );
};

export default CarouselShadcn;

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { WelcomeImageSliders } from "@/contentful/imageSliders";

// interface CarouselShadcnProps {
//   welcomeImages: WelcomeImageSliders[]
// }

// export const CarouselShadcn: React.FC<CarouselShadcnProps> = ({welcomeImages}) => {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 5000,
//         }),
        
//       ]}
//       className="w-full"
//     >
//       <CarouselContent className="w-full min-h-[40vh] m-0">
//           {welcomeImages.map((welcome, index) => {
//                return (
//         <CarouselItem className="relative w-full" key={index}>
//           {welcome.image && (
//           <Image
//             src={`https:${welcome.image.src}`}
//             alt={welcome.image.alt}
//             fill
//             quality={100}
//             priority
//             className="object-cover object-right brightness-50"
//           />
//           )}
//           <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
//           <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
//             SELAMAT DATANG DI <br />
//             PONDOK PESANTREN VILLA TAHFIZH <br />
//             HIMMATUL QURAN MALINO
//           </h1>
//         </div>
//         </CarouselItem>
//                )
//           })}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-5 md:left-20 text-white disabled:opacity-0" />
//       <CarouselNext className="absolute right-5 md:right-20 text-white disabled:opacity-0" />
//     </Carousel>
//   );
// };

// export default CarouselShadcn;