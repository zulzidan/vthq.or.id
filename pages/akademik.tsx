import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { GetStaticProps } from "next";
import { getKurikulumDescription, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import CarouselShadcn from "@/section/CarouselShadcn";

interface PpdbProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesAkademik: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kurikulumDescription: any
}

const Ppdb: React.FC<PpdbProps> = ({welcomeImagesAkademik, kurikulumDescription}) => {
  return (
    <Layout>
       <TitleOfPage title="Akademik"/>
       <CarouselShadcn welcomeImages={welcomeImagesAkademik}/>
       <Curiculum kurikulumDescription={kurikulumDescription}/>
       <Programs/>
       <TittleAndButtonLink/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesAkademik = await getWelcomeImageSlidersBySlug("akademik")
  const kurikulumDescription = await getKurikulumDescription()

  return {
    props: {
      welcomeImagesAkademik,
      kurikulumDescription
    },
    revalidate: 10,
  }
}

export default Ppdb;
