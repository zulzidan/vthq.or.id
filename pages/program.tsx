import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import BlogHeader from "@/section/BlogHeader";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";
import { GetStaticProps } from "next";
import { getKurikulumDescription } from "@/contentful/allFetch";

interface PpdbProps {
  welcomeImages: WelcomeImageSliders[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kurikulumDescription: any
}

const Ppdb: React.FC<PpdbProps> = ({welcomeImages, kurikulumDescription}) => {
  return (
    <Layout>
       <TitleOfPage title="Program"/>
       <BlogHeader nameOfContext="PROGRAM" welcomeImages={welcomeImages}/>
       <Curiculum kurikulumDescription={kurikulumDescription}/>
       <Programs/>
       <TittleAndButtonLink/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImages = await fetchWelcomeImageSliders({preview: false})
  const kurikulumDescription = await getKurikulumDescription()

  return {
    props: {
      welcomeImages,
      kurikulumDescription
    },
    revalidate: 10,
  }
}

export default Ppdb;
