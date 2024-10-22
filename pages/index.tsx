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

interface HomeProps {
  galleries: GaleryActivityType[];
}

const Home: React.FC<HomeProps> = ({galleries}) => {
  return (
    <Layout>
      <TitleOfPage title="Home"/>
      <CarouselShadcn/>
      <PesantrenProfile />
      <Article/>
      <BestPrograms/>
      <Galery galleries={galleries}/>
      <StudentInfo/>
      <Reviews/>  
      <Video/>
      <PpdbHeader/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const galleries = await fetchGaleryActivities({preview: false})

  return {
    props: {
      galleries,
    },
    revalidate: 10,
  };
};


export default Home;