import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import { getHeadingProfileBySlug, getMisi, getStrukturOrganisasiImage, getVisi, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import CarouselShadcn from "@/section/CarouselShadcn";
import History from "@/section/History";
import OrganisationStructure from "@/section/OrganisationStructure";
import VisionMission from "@/section/VisionMission";
import { GetStaticProps } from "next";
import React from "react";

interface ProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesProfil: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileProfil: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  misi: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strukturOrganisasiImage: any
}

const Profile: React.FC<ProfileProps> = ({welcomeImagesProfil , headingProfileProfil, visi, misi, strukturOrganisasiImage}) => {
  return (
    <Layout>
      <TitleOfPage title="Profil"/>
      <CarouselShadcn welcomeImages={welcomeImagesProfil}/>
      <History historyData={headingProfileProfil}/>
      <VisionMission visi={visi} misi={misi}/>
      <OrganisationStructure strukturOrganisasiImage={strukturOrganisasiImage}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesProfil = await getWelcomeImageSlidersBySlug("profil")
  const headingProfileProfil = await getHeadingProfileBySlug("profil")
  const visi = await getVisi()
  const misi = await getMisi()
  const strukturOrganisasiImage = await getStrukturOrganisasiImage()


  return {
    props: {
      welcomeImagesProfil,
      headingProfileProfil,
      visi,
      misi,
      strukturOrganisasiImage
    },
    revalidate: 10,
  }
}

export default Profile;
