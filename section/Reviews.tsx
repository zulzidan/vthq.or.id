import React from "react";
import { dummyProfiles } from "@/data/dummyProfile";
import Profile from "@/components/Profile";

const Reviews: React.FC = () => {
  return (
    <section className="py-6 px-6 md:px-14">
      <div className="sm:flex sm:space-x-10 block items-center align-middle pb-8">
        <h2 className="text-2xl font-bold text-green-700 mt-1">
          INFORMASI PESERTA DIDIK
        </h2>
        <div className="flex-grow">
          <hr className="bg-green-600 py-1" />
        </div>
      </div>
      <div className="space-y-10">
          {dummyProfiles.map((profile)=>{
               return(
                    <Profile
                     key={profile.id}
                     id={profile.id}
                     description={profile.description}
                     imageAlt={profile.imageAlt}
                     imageUrl={profile.imageUrl}
                     name={profile.name}
                     title={profile.title}
                     who={profile.who}
                    />
               )
          })}
      </div>
    </section>
  );
};

export default Reviews;
