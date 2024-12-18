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
import { getInformasiPpdbBanner, getKontakPendaftaran, getPendaftaran, getRegistrationFlow, getTentangKamiContent } from "@/contentful/allFetch";

interface PpdbProps {
  timelineFields: TimeLineFields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registrationFlow: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tentangKamiContent: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pendaftaran: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kontakPendaftaran: any
}

const Ppdb: React.FC<PpdbProps> = ({timelineFields, informasiPpdbBanner, registrationFlow, tentangKamiContent, pendaftaran, kontakPendaftaran}) => {
  return (
    <Layout>
       <TitleOfPage title="Pendaftaran"/>
     <PpdbHeader informasiPpdbBanner={informasiPpdbBanner}/>
     <About tentangKamiContent={tentangKamiContent}/>
     <RegistrationProcess registrationFlow={registrationFlow}/>
     <TimelineRegistration timelineFields={timelineFields}/>
     <RegistrationMethod pendaftaran={pendaftaran}/>
     <RegistrationInfo kontakPendaftaran={kontakPendaftaran}/>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timelineFieldsFrom: any = await getTimeLinePendaftaran()
  const informasiPpdbBanner = await getInformasiPpdbBanner()
  const registrationFlow = await getRegistrationFlow()
  const tentangKamiContent = await getTentangKamiContent()
  const pendaftaran = await getPendaftaran()
  const kontakPendaftaran = await getKontakPendaftaran()

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
      registrationFlow: registrationFlow,
      tentangKamiContent,
      pendaftaran,
      kontakPendaftaran
  },
  revalidate: 10,
};
};
export default Ppdb;