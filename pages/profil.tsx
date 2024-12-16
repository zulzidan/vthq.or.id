import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import { getMisi, getStrukturOrganisasiImage, getVisi, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import { fetchHistoryDescrition, HistoryDescription } from "@/contentful/historyDescription";
import CarouselShadcn from "@/section/CarouselShadcn";
import History from "@/section/History";
import OrganisationStructure from "@/section/OrganisationStructure";
import VisionMission from "@/section/VisionMission";
import { GetStaticProps } from "next";
import React from "react";

interface ProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesProfil: any

  historyDescription: HistoryDescription
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  misi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strukturOrganisasiImage: any
}

const Profile: React.FC<ProfileProps> = ({welcomeImagesProfil ,historyDescription, visi, misi, strukturOrganisasiImage}) => {
  return (
    <Layout>
      <TitleOfPage title="Profil"/>
      <CarouselShadcn welcomeImages={welcomeImagesProfil}/>
      <History historyDescription={historyDescription}/>
      <VisionMission visi={visi} misi={misi}/>
      <OrganisationStructure strukturOrganisasiImage={strukturOrganisasiImage}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesProfil = await getWelcomeImageSlidersBySlug("profil")
  const historyDescription = await fetchHistoryDescrition({preview: false})
  const visi = await getVisi()
  const misi = await getMisi()
  const strukturOrganisasiImage = await getStrukturOrganisasiImage()


  return {
    props: {
      welcomeImagesProfil,
      historyDescription,
      visi,
      misi,
      strukturOrganisasiImage
    },
    revalidate: 10,
  }
}

export default Profile;
