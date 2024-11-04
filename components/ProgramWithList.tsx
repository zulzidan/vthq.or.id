import React from "react";
import { Program } from "@/types/program";
import { 
  PeopleFill, 
  BookFill,
  Building, 
  TrophyFill,
  ClipboardCheckFill,
  JournalText,      
  ChatSquareText,   
  People,           
  Award,            
  Book,             
  Translate,        
  BookHalf,         
  Bank2,            
  Star,             
  Heart,            
  Clock,            
  Mortarboard,      
  Calculator,       
  MegaphoneFill,    
  PersonVideo3,              
  JournalBookmark,  
  Person,
  HandIndexFill
} from 'react-bootstrap-icons';

const iconMap: { [key: string]: JSX.Element } = {
  "Halaqah Qur'an": <PeopleFill className="w-6 h-6" />,
  "Sima'an Pekanan": <BookFill className="w-6 h-6" />,
  "Sima'an Akbar": <Building className="w-6 h-6" />,
  "Musabaqah Hifzhul Qur'an": <TrophyFill className="w-6 h-6" />,
  "Ujian Al-Qur'an": <ClipboardCheckFill className="w-6 h-6" />,
  "Mufradat Harian": <JournalText className="w-6 h-6" />,
  "Halaqah Muhadatsa": <ChatSquareText className="w-6 h-6" />,
  "Study Club Bahasa Arab": <People className="w-6 h-6" />,
  "Syahadah": <Award className="w-6 h-6" />,
  "Al-Qur'an": <Book className="w-6 h-6" />,
  "Bahasa Arab": <Translate className="w-6 h-6" />,
  "Hadits": <BookHalf className="w-6 h-6" />,
  "Fiqih": <Bank2 className="w-6 h-6" />,
  "Aqidah": <Star className="w-6 h-6" />,
  "Akhlak": <Heart className="w-6 h-6" />,
  "Sirah": <Clock className="w-6 h-6" />,
  "Mengacu pada kurikulum 2013": <Mortarboard className="w-6 h-6" />,
  "Study Club Matematika dan Bahasa Inggris": <Calculator className="w-6 h-6" />,
  "Ta'lim rutin": <MegaphoneFill className="w-6 h-6" />,
  "Pelatihan Imam dan Khutbah": <PersonVideo3 className="w-6 h-6" />,
  "Pelayanan Perpustakaan": <HandIndexFill className="w-6 h-6" />,
  "Bedah Buku": <JournalBookmark className="w-6 h-6" />,
  "Duta Perpustakaan": <Person className="w-6 h-6" />,
};

interface ProgramWithListProps {
    program: Program
}

const ProgramWithList: React.FC<ProgramWithListProps> = ({program}) => {
     return (
          <section className="px-6 md:px-14 py-6">
      <div className="mx-auto max-w-screen-2xl space-y-10 lg:gap-6">
        <div className="w-full">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1 uppercase">{program.titleProgram}</h2>
            <div className="flex-grow">
              <hr className="bg-gradient-to-r from-green-500 to-green-800 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col text-sm md:text-base lg:block lg:ml-28">
            <ul className="list-disc list-inside space-y-4">
               {program.listPrograms.map((program, index) => (
                     <div key={index} className="flex items-center space-x-1 lg:space-x-10">
                     <div className="w-10">
                     {iconMap[program] || null}
                     </div>  
                     <div className="max-w-sm">
                       <h1 className="text-xs break-words md:text-base font-bold whitespace-normal">{program}</h1>
                     </div>
                   </div>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
     )
}
export default ProgramWithList;