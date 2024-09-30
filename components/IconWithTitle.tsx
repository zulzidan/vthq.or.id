import React from "react";
import {
  BookHalf,
  CalendarCheck,
  People,
  Journal,
  Mortarboard,
  Globe,
  Bookmarks,
  MoonStars,
  Trophy,
  Heart,
  Bicycle,
  ChatSquareText,
} from "react-bootstrap-icons";

const iconMap: { [key: string]: JSX.Element } = {
  "Simaan Akbar": <BookHalf className="w-6 h-6" />,
  "Simaan Pekanan": <CalendarCheck className="w-6 h-6"/>,
  "Ekstrakulikuler": <People className="w-6 h-6"/>,
  "Study Club": <Journal className="w-6 h-6"/>,
  Tarbiyah: <Mortarboard className="w-6 h-6"/>,
  "Rihlah Akbar": <Globe className="w-6 h-6"/>,
  "Daurah Takhassus": <Bookmarks className="w-6 h-6"/>,
  "Safari Ramadhan": <MoonStars className="w-6 h-6"/>,
  "Musabaqah Hifzhil Quran": <Trophy className="w-6 h-6"/>,
  "Bakti Sosial": <Heart className="w-6 h-6"/>,
  "Porsani": <Bicycle className="w-6 h-6"/>,
  "Konsultasi Syariah": <ChatSquareText className="w-6 h-6"/>,
};

interface Arg {
  id: number;
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
            <div className="w-10">
            {iconMap[arg.title] || null}
            </div>  
            <div className="max-w-sm">
              <h1 className="text-xs break-words md:text-base font-bold whitespace-normal">{arg.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconWithTitle;
