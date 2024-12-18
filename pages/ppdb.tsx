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
import { getInformasiPpdbBanner, getInstructionSectionBySlug, getRegistrationFlow, getTentangKamiContent } from "@/contentful/allFetch";

interface PpdbProps {
  timelineFields: TimeLineFields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registrationFlow: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tentangKamiContent: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  alurPendaftaran: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPendaftaran: any
}

const Ppdb: React.FC<PpdbProps> = ({timelineFields, informasiPpdbBanner, registrationFlow, tentangKamiContent, alurPendaftaran, informasiPendaftaran}) => {
  return (
    <Layout>
       <TitleOfPage title="Pendaftaran"/>
     <PpdbHeader informasiPpdbBanner={informasiPpdbBanner}/>
     <About tentangKamiContent={tentangKamiContent}/>
     <RegistrationProcess registrationFlow={registrationFlow}/>
     <TimelineRegistration timelineFields={timelineFields}/>
     <RegistrationMethod pendaftaran={alurPendaftaran}/>
     <RegistrationInfo kontakPendaftaran={informasiPendaftaran}/>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timelineFieldsFrom: any = await getTimeLinePendaftaran()
  const informasiPpdbBanner = await getInformasiPpdbBanner()
  const registrationFlow = await getRegistrationFlow()
  const tentangKamiContent = await getTentangKamiContent()
  const alurPendaftaran = await getInstructionSectionBySlug("alur-pendaftaran")
  const informasiPendaftaran = await getInstructionSectionBySlug("informasi-pendaftaran")

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
      timelineFields: timelineFields,
      informasiPpdbBanner: informasiPpdbBanner,
      registrationFlow: registrationFlow,
      tentangKamiContent: tentangKamiContent,
      alurPendaftaran: alurPendaftaran,
      informasiPendaftaran: informasiPendaftaran
  },
  revalidate: 10,
};
};
export default Ppdb;