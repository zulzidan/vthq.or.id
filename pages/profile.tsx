import Layout from "@/components/layout";
import CarouselShadcn from "@/section/CarouselShadcn";
import History from "@/section/History";
import PesantrenProfile from "@/section/PesantrenProfile";
import TeacherProfile from "@/section/TeacherProfile";
import VisionMission from "@/section/VisionMission";


export default function Profile() {
  return (
    <Layout>
      <CarouselShadcn/>
      <PesantrenProfile/>
      <History/>
      <VisionMission/>
      <TeacherProfile/>
    </Layout>
  );
}
