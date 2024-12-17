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
import type { GetStaticProps } from "next";
import { fetchGaleryActivities, GaleryActivity as GaleryActivityType} from "@/contentful/galeryActivity";
import { BlogActivity, fetchActivityPosts } from "@/contentful/blogActivity";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";
import { getAllProgramsBySlug, getApaKataMereka, getHeadingProfileBySlug, getInformasiPesertaDidik, getInformasiPpdbBanner, getWelcomeImageSlidersBySlug, getYoutubeLink} from "@/contentful/allFetch";

interface HomeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesHome: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileHome: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bestProgramsData: any

  galleries: GaleryActivityType[]
  article: BlogArticle[]
  activity: BlogActivity[]
  welcomeImages: WelcomeImageSliders[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPesertaDidik: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apaKataMereka: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  youtubeLink: any
}

const Home: React.FC<HomeProps> = ({ welcomeImagesHome, headingProfileHome, bestProgramsData, galleries, article, activity, informasiPesertaDidik, apaKataMereka, informasiPpdbBanner, youtubeLink}) => {
  return (
    <Layout>
      <TitleOfPage title="Home"/>
      <CarouselShadcn welcomeImages={welcomeImagesHome}/>
      <PesantrenProfile headingProfile={headingProfileHome}/>
      <Article activity={activity} article={article}/>
      <BestPrograms bestProgramsData={bestProgramsData}/>
      <Galery galleries={galleries}/>
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

  const galleries = await fetchGaleryActivities({preview: false})
  const article = await fetchArticlePosts({preview: false})
  const activity = await fetchActivityPosts({preview: false})
  const welcomeImages = await fetchWelcomeImageSliders({preview: false})
  const informasiPesertaDidik = await getInformasiPesertaDidik()
  const apaKataMereka = await getApaKataMereka()
  const informasiPpdbBanner = await getInformasiPpdbBanner()
  const youtubeLink = await getYoutubeLink()

  return {
    props: {
      welcomeImagesHome,
      headingProfileHome,
      bestProgramsData,
      galleries,
      article,
      activity,
      welcomeImages,
      informasiPesertaDidik,
      apaKataMereka,
      informasiPpdbBanner,
      youtubeLink
    },
    revalidate: 10,
  };
};


export default Home;