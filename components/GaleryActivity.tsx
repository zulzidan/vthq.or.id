import React from "react"
import { GaleryActivity as GaleryActivityType } from "@/contentful/galeryActivity";
import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface GaleryActivityProps {
     galery: GaleryActivityType;
}
const GaleryActivity: React.FC<GaleryActivityProps> = ({galery}) => {
     return (
          <Dialog>
          <DialogTrigger>
            <div className="w-auto h-auto">
              {galery.image && (
                <Image
                src={`https:${galery.image.src}`}
                alt={galery.image.alt}
                width={2363}
                height={2363}
                className="w-auto h-auto rounded-sm shadow-lg"
              />
              )}
            </div>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined} className="p-0 mx-auto max-w-sm md:max-w-xl border-none">
            <VisuallyHidden.Root>
              <DialogTitle></DialogTitle>
            </VisuallyHidden.Root>
            <div className="w-auto h-auto">
            {galery.image && (
                <Image
                src={`https:${galery.image.src}`}
                alt={galery.image.alt}
                width={2363}
                height={2363}
                className="w-auto h-auto rounded-sm shadow-lg"
              />
              )}
            </div>
          </DialogContent>
        </Dialog>
     )
}

export default GaleryActivity;