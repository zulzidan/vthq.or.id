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

export const CarouselShadcn: React.FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex-grow w-full h-[267px]">
          <CarouselItem>
              <Image
                src={"/images/welcome1.jpg"}
                alt="carousel Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
          </CarouselItem>
          <CarouselItem>
              <Image
                src={"/images/welcome1.jpg"}
                alt="carousel Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-20" />
      <CarouselNext className="absolute right-20" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
          SLIDE SELAMAT DATANG DI <br />
          PONDOK PESANTREN VILLA TAHFIZH <br />
          HIMMATUL QURAN MALINO
        </h1>
      </div>
    </Carousel>
  );
};

export default CarouselShadcn;
