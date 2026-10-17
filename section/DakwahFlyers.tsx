import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { DakwahFlyer } from "@/types/dakwahFlyer";

interface DakwahFlyersProps {
  flyers: DakwahFlyer[];
}

export default function DakwahFlyers({ flyers }: DakwahFlyersProps) {
  if (flyers.length === 0) return null;

  return (
    <section className="px-6 py-6 md:px-16" aria-labelledby="flyer-dakwah-heading">
      <Carousel
        opts={{ align: "start", slidesToScroll: 1 }}
        aria-labelledby="flyer-dakwah-heading"
        tabIndex={0}
        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-4"
      >
        <div className="mb-6 flex items-center gap-4 sm:gap-8">
          <h2
            id="flyer-dakwah-heading"
            className="shrink-0 text-base font-bold uppercase text-green-700"
          >
            Flyer Dakwah
          </h2>
          <div className="h-2 flex-1 bg-green-600" aria-hidden="true" />
          {flyers.length > 1 && (
            <div className="flex shrink-0 gap-2">
              <CarouselPrevious
                type="button"
                aria-label="Flyer sebelumnya"
                className="static h-11 w-11 translate-y-0 border-green-700 text-green-700 hover:bg-green-50 hover:text-green-800"
              />
              <CarouselNext
                type="button"
                aria-label="Flyer berikutnya"
                className="static h-11 w-11 translate-y-0 border-green-700 text-green-700 hover:bg-green-50 hover:text-green-800"
              />
            </div>
          )}
        </div>
        <CarouselContent className="-ml-4 pb-3 md:-ml-6">
          {flyers.map((flyer, index) => (
            <CarouselItem
              key={flyer.id}
              aria-label={`${index + 1} dari ${flyers.length}`}
              className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3 md:pl-6 xl:basis-1/5"
            >
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border border-gray-100 bg-white shadow-md">
                <Image
                  src={flyer.url}
                  alt={flyer.description || flyer.title}
                  width={flyer.width}
                  height={flyer.height}
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 85vw"
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
