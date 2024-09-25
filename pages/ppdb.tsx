import Layout from "@/components/layout";
import About from "@/section/About";
import PpdbHeader from "@/section/PpdbHeader";
import RegistrationProcess from "@/section/RegistrationProcess";

export default function Ppdb() {
  return (
    <Layout>
     <PpdbHeader/>
     <About/>
     <RegistrationProcess/>
    </Layout>
  );
}
