import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { welcomeImage } from "@/data/dummyWelcomeImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ArticleHeaderProps {
     nameOfContext: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({nameOfContext}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        
      ]}
      className="w-full"
    >
      <CarouselContent className="w-full min-h-[40vh] m-0">
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
           <p className="uppercase">{nameOfContext}</p>
          </h1>
        </div>
        </CarouselItem>
               )
          })}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-5 md:left-20 text-white disabled:opacity-0" />
      <CarouselNext className="absolute right-5 md:right-20 text-white disabled:opacity-0" /> */}
    </Carousel>
  );
};

export default ArticleHeader;