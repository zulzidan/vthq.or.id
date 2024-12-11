interface VideoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  youtubeLink: any
}
const Video:React.FC<VideoProps> = ({youtubeLink}) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-4">
      <div className="w-full md:w-3/4">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg"
          src={youtubeLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
