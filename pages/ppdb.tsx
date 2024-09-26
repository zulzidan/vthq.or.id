import Layout from "@/components/layout";
import About from "@/section/About";
import PpdbHeader from "@/section/PpdbHeader";
import RegistrationProcess from "@/section/RegistrationProcess";
import TimelineRegistration from "@/section/TimelineRegistration";

export default function Ppdb() {
  return (
    <Layout>
     <PpdbHeader/>
     <About/>
     <RegistrationProcess/>
     <TimelineRegistration/>
    </Layout>
  );
}
