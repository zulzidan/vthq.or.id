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
    <div className="grid grid-cols-2 md:grid-cols-2 items-center lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {args.map((arg) => {
        return (
          <div key={arg.id} className="flex justify-center h-full items-center space-x-4 lg:space-x-10">
            <div className="h-10 w-auto">
              <Image
                src={arg.iconUrl}
                alt={arg.title}
                width={2363}
                height={2363}
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-bold">{arg.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconWithTitle;
