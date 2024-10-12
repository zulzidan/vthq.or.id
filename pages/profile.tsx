import Layout from "@/components/layout";
import History from "@/section/History";
import ProfilePondokPesantren from "@/section/ProfilePondokPesantren";
import TeacherProfiles from "@/section/TeacherProfiles";
import VisionMission from "@/section/VisionMission";


export default function Profile() {
  return (
    <Layout>
      <ProfilePondokPesantren/>
      <History/>
      <VisionMission/>
      <TeacherProfiles/>
    </Layout>
  );
}
