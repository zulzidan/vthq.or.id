import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import About from "@/section/About";
import PpdbHeader from "@/section/PpdbHeader";
import RegistrationInfo from "@/section/RegistrationInfo";
import RegistrationMethod from "@/section/RegistrationMethod";
import RegistrationProcess from "@/section/RegistrationProcess";
import TimelineRegistration from "@/section/TimelineRegistration";
import { TimeLineFields } from "../components/Timeline";
import { GetStaticProps } from "next";
import { getTimeLinePendaftaran } from "@/contentful/timelinePendaftaran";
import { getInformasiPpdbBanner, getTentangKamiContent } from "@/contentful/allFetch";

interface PpdbProps {
  timelineFields: TimeLineFields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tentangKamiContent: any
}

const Ppdb: React.FC<PpdbProps> = ({timelineFields, informasiPpdbBanner, tentangKamiContent}) => {
  return (
    <Layout>
       <TitleOfPage title="Pendaftaran"/>
     <PpdbHeader informasiPpdbBanner={informasiPpdbBanner}/>
     <About tentangKamiContent={tentangKamiContent}/>
     <RegistrationProcess/>
     <TimelineRegistration timelineFields={timelineFields}/>
     <RegistrationMethod/>
     <RegistrationInfo/>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timelineFieldsFrom: any = await getTimeLinePendaftaran()
  const informasiPpdbBanner = await getInformasiPpdbBanner()
  const tentangKamiContent = await getTentangKamiContent()

  if (!timelineFieldsFrom) {
    return {
      notFound: true,
    };
  }

  const timelineFields: TimeLineFields = {
    TanggalPendaftaran: timelineFieldsFrom.tanggalPendaftaran,
    TanggalUjian: timelineFieldsFrom.tanggalUjian,
    TanggalPengumuman: timelineFieldsFrom.tanggalPengumuman,
    TanggalPendaftaranUlang: timelineFieldsFrom.tanggalPendaftaranUlang,
  };

  return {
    props: { 
      timelineFields,
      informasiPpdbBanner,
      tentangKamiContent
  },
  revalidate: 10,
};
};
export default Ppdb;