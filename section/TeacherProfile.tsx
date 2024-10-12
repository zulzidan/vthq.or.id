import React from "react";
import Image from "next/image";
import { TeacherProfileType } from "@/types/teacherProfile";

interface ProfileCardProps {
     profile: TeacherProfileType;
   }

const TeacherProfile: React.FC<ProfileCardProps> = ({
     profile
}) => {
  return (
     <section className="px-6 md:px-14 py-6">
    <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6 justify-center max-w-screen-lg mx-auto">
      <Image
        src={profile.imageUrl}
        alt={profile.title}
        width={463}
        height={667}
        className="w-full rounded-2xl mb-4"
        />
     <div className="md:mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{profile.name}</h2>
      <p className="text-lg text-gray-500 mb-4">{profile.title}</p>
      <p className="text-sm text-gray-700">{profile.description}</p>
      </div>
    </div>
     </section>
  );
};

export default TeacherProfile;
