import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { GetStaticProps } from "next";
import { getHeadingProfileBySlug, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import CarouselShadcn from "@/section/CarouselShadcn";

interface ProgramProps {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesProgram: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileProgram: any
}

const Program: React.FC<ProgramProps> = ({welcomeImagesProgram, headingProfileProgram}) => {
  return (
    <Layout>
       <TitleOfPage title="Program"/>
       <CarouselShadcn welcomeImages={welcomeImagesProgram}/>
       <Curiculum kurikulumProfileData={headingProfileProgram}/>
       <Programs/>
       <TittleAndButtonLink/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesProgram = await getWelcomeImageSlidersBySlug("program")
  const headingProfileProgram = await getHeadingProfileBySlug("program")

  return {
    props: {
      welcomeImagesProgram,
      headingProfileProgram
    },
    revalidate: 10,
  }
}

export default Program;
