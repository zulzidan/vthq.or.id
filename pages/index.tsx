import Article from "@/section/Article";
import BestPrograms from "@/section/BestPrograms";
import Carousel from "@/section/Carousel";
import Cta from "@/section/Cta"
import Galery from "@/section/Galery";
import Layout from "@/components/layout";
import PesantrenProfile from "@/section/PesantrenProfile";
import StudentInfo from "@/section/StudentInfo";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <PesantrenProfile />
      <Article/>
      <BestPrograms/>
      <Galery/>
      <StudentInfo/>
      <Cta />
    </Layout>
  );
}
