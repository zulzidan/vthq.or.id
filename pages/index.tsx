import Article from "@/section/Article";
import BestPrograms from "@/section/BestPrograms";
import Cta from "@/section/Cta"
import Galery from "@/section/Galery";
import Layout from "@/components/layout";
import PesantrenProfile from "@/section/PesantrenProfile";
import StudentInfo from "@/section/StudentInfo";
import Reviews from "@/section/Reviews";
import Video from "@/section/Video";
import CarouselShadcn from "@/section/CarouselShadcn";

export default function Home() {
  return (
    <Layout>
      <CarouselShadcn/>
      <PesantrenProfile />
      <Article/>
      <BestPrograms/>
      <Galery/>
      <StudentInfo/>
      <Reviews/>  
      <Video/>
      <Cta />
    </Layout>
  );
}
