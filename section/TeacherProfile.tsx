import CardProfile from "@/components/CardProfile";
import React from "react";
const TeacherProfile: React.FC = () => {
  return (
    <section className="bg-gray-100 px-6 md:px-14 py-6">
     <div className="mx-auto max-w-screen-2xl">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-4 py-1 px-6 rounded-sm">
            Teacher Profile :
          </h2>
        </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        <CardProfile imageUrl="/images/1.jpg" name="Title Or Name" title="title"/>
        <CardProfile imageUrl="/images/1.jpg" name="Title Or Name" title="title"/>
        <CardProfile imageUrl="/images/1.jpg" name="Title Or Name" title="title"/>
        <CardProfile imageUrl="/images/1.jpg" name="Title Or Name" title="title"/>
        <CardProfile imageUrl="/images/1.jpg" name="Title Or Name" title="title"/>
      </div>
     </div>
    </section>
  );
};

export default TeacherProfile;
