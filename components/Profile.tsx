import React from 'react';
import Image from 'next/image';

interface ProfileProps {
     id: number;
     imageUrl: string;
     imageAlt: string;
     title: string;
     name: string;
     who: string;
     description: string;
}

const Profile: React.FC<ProfileProps> = ({imageAlt, imageUrl, description, name, who, title}) => {
  return (
    <div className="flex flex-col md:justify-evenly md:flex-row bg-gray-50">
      <div className="mb-4 md:mb-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={113}
          height={111}
        />
      </div>
      <div className="md:w-3/4 md:px-6">
      <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
        <h2 className="text-base font-bold mb-2 py-1 px-1 rounded-sm">{title}</h2>
      </div>
        <p className="mb-4 text-xs text-gray-700">
          {description}
        </p>
        <p className="font-bold text-sm text-gray-900">{name}</p>
        <p className="text-xs">({who})</p>
      </div>
    </div>
  );
};

export default Profile;