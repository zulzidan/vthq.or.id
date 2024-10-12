import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TeacherProfileType } from "@/types/teacherProfile";

interface CardProps {
  profile: TeacherProfileType;
}

const CardProfile: React.FC<CardProps> = ({ profile }) => {
  return (
    <Link href={`/profile/${profile.id}`}>
    <div className="w-32 sm:w-36 flex flex-col">
      <Image 
        className="w-full h-full rounded-xl hover:rounded-tl-sm hover:rounded-br-sm transition-all object-cover"
        src={profile.imageUrl}
        alt={profile.name}
        width={2363}
        height={2363}
      />
      <div className="px-6 py-2">
        <div className="font-bold text-sm mb-1 text-center">{profile.name}</div>
        <div className="text-xs font-bold text-center">{(profile.title)}</div>
      </div>
    </div>
    </Link>
  );
};

export default CardProfile;
