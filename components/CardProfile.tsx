import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  name: string;
}

const CardProfile: React.FC<CardProps> = ({ imageUrl, name }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        className="w-full h-36 md:h-52 object-cover"
        src={imageUrl}
        alt={name}
        width={2363}
        height={2363}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2 text-center">{name}</div>
      </div>
    </div>
  );
};

export default CardProfile;
