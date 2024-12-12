import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import { getMisi, getStrukturOrganisasiImage, getVisi } from "@/contentful/allFetch";
import { fetchHistoryDescrition, HistoryDescription } from "@/contentful/historyDescription";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";
import BlogHeader from "@/section/BlogHeader";
import History from "@/section/History";
import OrganisationStructure from "@/section/OrganisationStructure";
import VisionMission from "@/section/VisionMission";
import { GetStaticProps } from "next";
import React from "react";

interface ProfileProps {
  historyDescription: HistoryDescription
  welcomeImages: WelcomeImageSliders[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  misi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strukturOrganisasiImage: any
}

const Profile: React.FC<ProfileProps> = ({historyDescription, welcomeImages, visi, misi, strukturOrganisasiImage}) => {
  return (
    <Layout>
      <TitleOfPage title="Profil"/>
     <BlogHeader nameOfContext="PROFIL" welcomeImages={welcomeImages}/>
      <History historyDescription={historyDescription}/>
      <VisionMission visi={visi} misi={misi}/>
      <OrganisationStructure strukturOrganisasiImage={strukturOrganisasiImage}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const historyDescription = await fetchHistoryDescrition({preview: false})
  const welcomeImages = await fetchWelcomeImageSliders({preview: false})
  const visi = await getVisi()
  const misi = await getMisi()
  const strukturOrganisasiImage = await getStrukturOrganisasiImage()


  return {
    props: {
      historyDescription,
      welcomeImages,
      visi,
      misi,
      strukturOrganisasiImage
    },
    revalidate: 10,
  }
}

export default Profile;
