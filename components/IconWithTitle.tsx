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
          <div key={arg.id} className="flex items-center space-x-1 lg:space-x-10">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-800 to-yellow-300">
            </div>
            <div>
              <h1 className="text-xs md:text-base font-bold">{arg.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconWithTitle;
