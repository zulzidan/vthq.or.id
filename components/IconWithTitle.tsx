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
  "Simaan Akbar": <BookHalf />,
  "Simaan Pekanan": <CalendarCheck />,
  "Ekstrakulikuler": <People />,
  "Study Club": <Journal />,
  Tarbiyah: <Mortarboard />,
  "Rihlah Akbar": <Globe />,
  "Daurah Takhassus": <Bookmarks />,
  "Safari Ramadhan": <MoonStars />,
  "Musabaqah Hifzhil Quran": <Trophy />,
  "Bakti Sosial": <Heart />,
  "Porsani": <Bicycle />,
  "Konsultasi Syariah": <ChatSquareText />,
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
