import React from "react";
import Image from "next/image";
import { dummyImages } from "@/data/dummyImages";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const Galery: React.FC = () => {
  return (
    <section>
      <div className="w-full px-6 md:px-16 py-6">
        <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
          <h2 className="text-base font-bold text-green-700 mt-1">
            GALERY KEGIATAN
          </h2>
          <div className="flex-grow">
            <hr className="bg-green-600 h-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dummyImages.map((image) => {
            return (
              <>
                <Dialog key={image.id}>
                  <DialogTrigger>
                    <div className="w-auto h-auto">
                      <Image
                        src={image.imageUrl}
                        alt={image.title}
                        width={2363}
                        height={2363}
                        className="w-auto h-auto rounded-sm shadow-lg"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent aria-describedby={undefined} className="p-0 mx-auto max-w-sm border-none">
                    <VisuallyHidden.Root>
                      <DialogTitle></DialogTitle>
                    </VisuallyHidden.Root>
                    <div key={image.id} className="w-auto h-auto">
                      <Image
                        src={image.imageUrl}
                        alt={image.title}
                        width={2363}
                        height={2363}
                        className="w-auto h-auto rounded-sm shadow-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galery;
