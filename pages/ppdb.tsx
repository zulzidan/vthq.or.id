import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import About from "@/section/About";
import PpdbHeader from "@/section/PpdbHeader";
import RegistrationInfo from "@/section/RegistrationInfo";
import RegistrationMethod from "@/section/RegistrationMethod";
import RegistrationProcess from "@/section/RegistrationProcess";
import TimelineRegistration from "@/section/TimelineRegistration";

export default function Ppdb() {
  return (
    <Layout>
       <TitleOfPage title="Pendaftaran"/>
     <PpdbHeader/>
     <About/>
     <RegistrationProcess/>
     <TimelineRegistration/>
     <RegistrationMethod/>
     <RegistrationInfo/>
    </Layout>
  );
}
