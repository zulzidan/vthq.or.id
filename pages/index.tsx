import React from "react";
import BestPrograms from "@/section/BestPrograms";
import Galery from "@/section/Galery";
import Layout from "@/components/layout";
import PesantrenProfile from "@/section/PesantrenProfile";
import StudentInfo from "@/section/StudentInfo";
import Reviews from "@/section/Reviews";
import Video from "@/section/Video";
import CarouselShadcn from "@/section/CarouselShadcn";
import Article from "@/section/Article";
import PpdbHeader from "@/section/PpdbHeader";
import TitleOfPage from "@/components/TitleOfPage";
import DakwahFlyers from "@/section/DakwahFlyers";
import { getDakwahFlyers } from "@/contentful/dakwahFlyers";
import type { DakwahFlyer } from "@/types/dakwahFlyer";
import type { GetStaticProps } from "next";
import { BlogActivity, fetchActivityPosts } from "@/contentful/blogActivity";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";
import { getAllProgramsBySlug, getApaKataMereka, getHeadingProfileBySlug, getInformasiPesertaDidik, getInformasiPpdbBanner, getMediaWithTag, getWelcomeImageSlidersBySlug, getYoutubeLink} from "@/contentful/allFetch";

interface HomeProps {
  dakwahFlyers: DakwahFlyer[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesHome: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileHome: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bestProgramsData: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  galleriesKegiatan: any

  article: BlogArticle[]
  activity: BlogActivity[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPesertaDidik: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apaKataMereka: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  youtubeLink: any
}

const Home: React.FC<HomeProps> = ({ welcomeImagesHome, headingProfileHome, bestProgramsData, galleriesKegiatan, article, activity, informasiPesertaDidik, apaKataMereka, informasiPpdbBanner, youtubeLink, dakwahFlyers}) => {
  return (
    <Layout>
      <TitleOfPage title="Home"/>
      <CarouselShadcn welcomeImages={welcomeImagesHome}/>
      <PesantrenProfile headingProfile={headingProfileHome}/>
      <Article activity={activity} article={article}/>
      <DakwahFlyers flyers={dakwahFlyers}/>
      <BestPrograms bestProgramsData={bestProgramsData}/>
      <Galery galleries={galleriesKegiatan}/>
      <StudentInfo informasiPesertaDidik={informasiPesertaDidik}/>
      <Reviews apaKataMereka={apaKataMereka}/>
      <Video youtubeLink={youtubeLink}/>
      <PpdbHeader informasiPpdbBanner={informasiPpdbBanner}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesHome = await getWelcomeImageSlidersBySlug("home")
  const headingProfileHome = await getHeadingProfileBySlug("home")
  const bestProgramsData = await getAllProgramsBySlug("program-unggulan")
  const galleriesKegiatan = await getMediaWithTag("galleryKegiatan")
  const dakwahFlyers = await getDakwahFlyers()

  const article = await fetchArticlePosts({preview: false})
  const activity = await fetchActivityPosts({preview: false})
  const informasiPesertaDidik = await getInformasiPesertaDidik()
  const apaKataMereka = await getApaKataMereka()
  const informasiPpdbBanner = await getInformasiPpdbBanner()
  const youtubeLink = await getYoutubeLink()

  return {
    props: {
      dakwahFlyers,
      welcomeImagesHome: welcomeImagesHome,
      headingProfileHome: headingProfileHome,
      bestProgramsData: bestProgramsData,
      galleriesKegiatan: galleriesKegiatan,
      article: article,
      activity: activity,
      informasiPesertaDidik: informasiPesertaDidik,
      apaKataMereka: apaKataMereka,
      informasiPpdbBanner: informasiPpdbBanner,
      youtubeLink: youtubeLink
    },
    revalidate: 10,
  };
};


export default Home;
