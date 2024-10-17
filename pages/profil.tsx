import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import History from "@/section/History";
import OrganisationStructure from "@/section/OrganisationStructure";
import ProfilePondokPesantren from "@/section/ProfilePondokPesantren";
import VisionMission from "@/section/VisionMission";


export default function Profile() {
  return (
    <Layout>
       <TitleOfPage title="Profil"/>
      <ProfilePondokPesantren/>
      <History/>
      <VisionMission/>
      <OrganisationStructure/>
    </Layout>
  );
}
