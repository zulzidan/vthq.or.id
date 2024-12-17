import React from "react"
import Image from "next/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface GaleryActivityProps {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     galery: any;
}
const GaleryActivity: React.FC<GaleryActivityProps> = ({galery}) => {
     return (
          <Dialog>
          <DialogTrigger>
            <div className="w-auto h-auto">
              {galery && (
                <Image
                src={`https:${galery.file.url}`}
                alt={galery.title}
                width={galery.file.details.image.width}
                height={galery.file.details.image.height}
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
            {galery && (
                <Image
                src={`https:${galery.file.url}`}
                alt={galery.title}
                width={galery.file.details.image.width}
                height={galery.file.details.image.height}
                className="w-auto h-auto rounded-sm shadow-lg"
              />
              )}
            </div>
          </DialogContent>
        </Dialog>
     )
}

export default GaleryActivity;