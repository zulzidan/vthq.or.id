import React from "react"
import { Galery } from "@/types/galery"
import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface GaleryActivityProps {
     image: Galery;
}
const GaleryActivity: React.FC<GaleryActivityProps> = ({image}) => {
     return (
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
     )
}

export default GaleryActivity;