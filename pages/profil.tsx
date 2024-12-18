import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import { getHeadingProfileBySlug, getMediaWithTag, getTitleAndListsBySlug, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
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
  visiData: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  misiData: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  strukturOrganisasiImage: any
}

const Profile: React.FC<ProfileProps> = ({welcomeImagesProfil , headingProfileProfil, visiData, misiData, strukturOrganisasiImage}) => {
  return (
    <Layout>
      <TitleOfPage title="Profil"/>
      <CarouselShadcn welcomeImages={welcomeImagesProfil}/>
      <History historyData={headingProfileProfil}/>
      <VisionMission visi={visiData} misi={misiData}/>
      <OrganisationStructure strukturOrganisasiImage={strukturOrganisasiImage}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesProfil = await getWelcomeImageSlidersBySlug("profil")
  const headingProfileProfil = await getHeadingProfileBySlug("profil")
  const visi = await getTitleAndListsBySlug("visi")
  const misi = await getTitleAndListsBySlug("misi")
  const strukturOrganisasiImage = await getMediaWithTag("strukturOrganisasi")


  return {
    props: {
      welcomeImagesProfil,
      headingProfileProfil,
      visiData: visi,
      misiData: misi,
      strukturOrganisasiImage
    },
    revalidate: 10,
  }
}

export default Profile;
