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

const OrganisationStructure: React.FC = () => {
     return (
          <section className="bg-gray-100 px-6 md:px-14 py-6">
     <div className="mx-auto max-w-screen-2xl">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-4 py-1 px-6 rounded-sm">
            Teacher Profile :
          </h2>
        </div>
        <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
        
      ]}
      className="w-full"
    >
      <CarouselContent className="w-full min-h-[40vh] m-0">
          {Array.from({ length: 8 }).map((_, index) => (
        <CarouselItem className="relative w-full basis-1/2 md:basis-1/4" key={index}>
          <Image
            src={"https://placehold.co/1960x1080/jpg"}
            alt={"Struktur Organisasi"}
            fill
            quality={100}
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute z-30 inset-0 flex items-center justify-center text-center">
          <h1 className="text-white font-bold text-sm md:text-2xl lg:text-2xl">
            {index}
          </h1>
        </div>
        </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 md:left-20 text-white disabled:opacity-0" />
      <CarouselNext className="absolute right-5 md:right-20 text-white disabled:opacity-0" />
    </Carousel>
     </div>
    </section>
     );
}

export default OrganisationStructure