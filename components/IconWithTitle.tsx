import Image from "next/image";
import React from "react";

interface Arg {
  id: number;
  iconUrl: string;
  title: string;
}

interface IconWithTitleProps {
  args: Arg[];
}

const IconWithTitle: React.FC<IconWithTitleProps> = ({ args }) => {
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-2 items-center lg:grid-cols-3 gap-6">
      {args.map((arg) => {
        return (
          <div key={arg.id} className="flex items-center space-x-4 lg:space-x-10">
            <div className="h-10 md:h-10 w-auto ">
              <Image
                src={arg.iconUrl}
                alt={arg.title}
                width={113}
                height={111}
                className="rounded-full w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold">{arg.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconWithTitle;
