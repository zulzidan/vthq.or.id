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
import { getApaKataMereka, getInformasiPesertaDidik, getInformasiPpdbBanner, getPesantrenImageGallery, getPesantrenProfileContent} from "@/contentful/allFetch";

interface HomeProps {
  galleries: GaleryActivityType[]
  article: BlogArticle[]
  activity: BlogActivity[]
  welcomeImages: WelcomeImageSliders[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pesantrenProfile: any
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pesantrenImageProfile: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPesertaDidik: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apaKataMereka: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  informasiPpdbBanner: any
}

const Home: React.FC<HomeProps> = ({galleries, article, activity, welcomeImages, pesantrenProfile, pesantrenImageProfile, informasiPesertaDidik, apaKataMereka, informasiPpdbBanner}) => {
  return (
    <Layout>
      <TitleOfPage title="Home"/>
      <CarouselShadcn welcomeImages={welcomeImages}/>
      <PesantrenProfile pesantrenProfile={pesantrenProfile} pesantrenImageProfile={pesantrenImageProfile}/>
      <Article activity={activity} article={article}/>
      <BestPrograms/>
      <Galery galleries={galleries}/>
      <StudentInfo informasiPesertaDidik={informasiPesertaDidik}/>
      <Reviews apaKataMereka={apaKataMereka}/>
      <Video/>
      <PpdbHeader informasiPpdbBanner={informasiPpdbBanner}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const galleries = await fetchGaleryActivities({preview: false})
  const article = await fetchArticlePosts({preview: false})
  const activity = await fetchActivityPosts({preview: false})
  const welcomeImages = await fetchWelcomeImageSliders({preview: false})
  const pesantrenProfile = await getPesantrenProfileContent()
  const pesantrenImageProfile = await getPesantrenImageGallery()
  const informasiPesertaDidik = await getInformasiPesertaDidik()
  const apaKataMereka = await getApaKataMereka()
  const informasiPpdbBanner = await getInformasiPpdbBanner()

  return {
    props: {
      galleries,
      article,
      activity,
      welcomeImages,
      pesantrenProfile,
      pesantrenImageProfile,
      informasiPesertaDidik,
      apaKataMereka,
      informasiPpdbBanner
    },
    revalidate: 10,
  };
};


export default Home;