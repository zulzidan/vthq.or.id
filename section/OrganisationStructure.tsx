import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { dummyImages } from "@/data/dummyImages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrganisationStructure: React.FC = () => {
  return (
    <section className="bg-gray-100 px-6 md:px-14 py-6">
      <div className="mx-auto max-w-screen-2xl">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-4 py-1 px-6 rounded-sm">
            Struktur Organisasi:
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
          <CarouselContent className="max-w-sm">
            {dummyImages.map((image) => {
              return (
                <CarouselItem
                  className="relative basis-11/12 ml-4"
                  key={image.id}
                >
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 md:left-20 text-white disabled:opacity-0" />
          <CarouselNext className="absolute right-5 md:right-20 text-white disabled:opacity-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default OrganisationStructure;
