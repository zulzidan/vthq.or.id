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

interface PpdbProps {
  timelineFields: TimeLineFields
}

const Ppdb: React.FC<PpdbProps> = ({timelineFields}) => {
  return (
    <Layout>
       <TitleOfPage title="Pendaftaran"/>
     <PpdbHeader/>
     <About/>
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
      timelineFields
  },
};
};
export default Ppdb;