import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-4">
      <div className="w-full md:w-3/4">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src="https://www.youtube.com/embed/ppxmPkZ64Pc?si=OIBTusS8ut2Rz06O"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
