import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import { fetchHistoryDescrition, HistoryDescription } from "@/contentful/historyDescription";
import History from "@/section/History";
import OrganisationStructure from "@/section/OrganisationStructure";
import ProfilePondokPesantren from "@/section/ProfilePondokPesantren";
import VisionMission from "@/section/VisionMission";
import { GetStaticProps } from "next";
import React from "react";

interface ProfileProps {
  historyDescription: HistoryDescription
}

const Profile: React.FC<ProfileProps> = ({historyDescription}) => {
  return (
    <Layout>
       <TitleOfPage title="Profil"/>
      <ProfilePondokPesantren/>
      <History historyDescription={historyDescription}/>
      <VisionMission/>
      <OrganisationStructure/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const historyDescription = await fetchHistoryDescrition({preview: false})

  return {
    props: {
      historyDescription,
    },
    revalidate: 10,
  }
}

export default Profile;
