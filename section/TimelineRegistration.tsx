import React from "react";
import Timeline from "../components/Timeline";

const TimelineRegistration: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-green-500 to-green-800 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-lg md:text-2xl font-bold">TIMELINE PENDAFTARAN</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-28 bg-gray-100 relative">
            <div className="h-1 w-6 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      <Timeline/>
    </section>
  );
};

export default TimelineRegistration;
