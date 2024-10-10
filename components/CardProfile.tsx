import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const CardProfile: React.FC<CardProps> = ({ imageUrl, name, title }) => {
  return (
    <div className="w-32 sm:w-36 flex flex-col">
      <Image 
        className="w-full h-full rounded-xl hover:rounded-tl-sm hover:rounded-br-sm transition-all object-cover"
        src={imageUrl}
        alt={name}
        width={2363}
        height={2363}
      />
      <div className="px-6 py-2">
        <div className="font-bold text-sm mb-1 text-center">{name}</div>
        <div className="text-xs font-bold text-center">{(title)}</div>
      </div>
    </div>
  );
};

export default CardProfile;
