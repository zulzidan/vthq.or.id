import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import BlogHeader from "@/section/BlogHeader";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";
import { GetStaticProps } from "next";

interface PpdbProps {
  welcomeImages: WelcomeImageSliders[]
}

const Ppdb: React.FC<PpdbProps> = ({welcomeImages}) => {
  return (
    <Layout>
       <TitleOfPage title="Akademik"/>
       <BlogHeader nameOfContext="AKADEMIK" welcomeImages={welcomeImages}/>
       <Curiculum/>
       <Programs/>
       <TittleAndButtonLink/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImages = await fetchWelcomeImageSliders({preview: false})

  return {
    props: {
      welcomeImages,
    },
    revalidate: 10,
  }
}

export default Ppdb;
