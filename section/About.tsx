interface TentangKamiProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tentangKamiContent: any
}

const About:React.FC<TentangKamiProps> = ({tentangKamiContent}) => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-white px-6">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 uppercase">{tentangKamiContent.tag}</h2>
      <div className="flex justify-center mb-4">
        <div className="h-1 w-28 bg-gray-400 relative">
          <div className="h-1 w-6 bg-green-500 absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      <p className="text-center max-w-screen-xl text-xm lg:text-base font-bold text-gray-700">

        {tentangKamiContent.description}
        {/* Villa Tahfizh Himmatul Quran Malino merupakan salah satu lembaga pendidikan Qur&apos;ani yang resmi berdiri sejak tahun 2019. Saat ini VTHQ berada di dua payung hukum, yaitu Kementerian Agama untuk tingkat Wustha (SMP) dan Kementerian Pendidikan dan Kebudayaan untuk tingkat SMA. */}
      </p>
    </section>
  );
};

export default About;
