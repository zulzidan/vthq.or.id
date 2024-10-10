import Layout from "@/components/layout";
import History from "@/section/History";
import ProfilePondokPesantren from "@/section/ProfilePondokPesantren";
import TeacherProfile from "@/section/TeacherProfile";
import VisionMission from "@/section/VisionMission";


export default function Profile() {
  return (
    <Layout>
      <ProfilePondokPesantren/>
      <History/>
      <VisionMission/>
      <TeacherProfile/>
    </Layout>
  );
}
