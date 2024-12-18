import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { GetStaticProps } from "next";
import { getAllProgramsBySlug, getHeadingProfileBySlug, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import CarouselShadcn from "@/section/CarouselShadcn";
import { Program as ProgramTypes } from "@/types/program";
interface ProgramProps {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesProgram: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileProgram: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  programTahfizh: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pembelajaranDiniyah: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  brtm: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  programBahasaArab: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pembelajaranUmum: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pengelolaanPerpustakaan: any
}

const Program: React.FC<ProgramProps> = ({welcomeImagesProgram, headingProfileProgram, programTahfizh, pembelajaranDiniyah, brtm, programBahasaArab, pembelajaranUmum, pengelolaanPerpustakaan}) => {
  
  const ProgramsTahfizh: ProgramTypes = {
    titleProgram: programTahfizh.titleOfProgram,
    listPrograms: programTahfizh.name
  };

  const PengelolaanPerpustakaan: ProgramTypes = {
    titleProgram: pengelolaanPerpustakaan.titleOfProgram,
    listPrograms: pengelolaanPerpustakaan.name
  };
  
  const PembelajaranUmum: ProgramTypes = {
    titleProgram: pembelajaranUmum.titleOfProgram,
    listPrograms: pembelajaranUmum.name
  };
  
  const ProgramBahasaArab: ProgramTypes = {
    titleProgram: programBahasaArab.titleOfProgram,
    listPrograms: programBahasaArab.name
  };
  
  const BRTM: ProgramTypes = {
    titleProgram: brtm.titleOfProgram,
    listPrograms: brtm.name
  };
  
  const PembelajaranDiniyah: ProgramTypes = {
    titleProgram: pembelajaranDiniyah.titleOfProgram,
    listPrograms: pembelajaranDiniyah.name
  };


  const allPrograms: ProgramTypes[] = [
    ProgramsTahfizh,
    ProgramBahasaArab,
    PembelajaranDiniyah,
    PembelajaranUmum,
    BRTM,
    PengelolaanPerpustakaan
];

  return (
    <Layout>
       <TitleOfPage title="Program"/>
       <CarouselShadcn welcomeImages={welcomeImagesProgram}/>
       <Curiculum kurikulumProfileData={headingProfileProgram}/>
       <Programs allPrograms={allPrograms}/>
       <TittleAndButtonLink/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesProgram = await getWelcomeImageSlidersBySlug("program")
  const headingProfileProgram = await getHeadingProfileBySlug("program")
  const programTahfizh = await getAllProgramsBySlug("program-tahfizh")
  const pembelajaranDiniyah = await getAllProgramsBySlug("pembelajaran-diniyah")
  const brtm = await getAllProgramsBySlug("brtm")
  const programBahasaArab = await getAllProgramsBySlug("program-bahasa-arab")
  const pembelajaranUmum = await getAllProgramsBySlug("pembelajaran-umum")
  const pengelolaanPerpustakaan = await getAllProgramsBySlug("pengelolaan-perpustakaan")

  return {
    props: {
      welcomeImagesProgram,
      headingProfileProgram,
      programTahfizh: programTahfizh,
      pembelajaranDiniyah: pembelajaranDiniyah,
      brtm: brtm,
      programBahasaArab: programBahasaArab,
      pembelajaranUmum: pembelajaranUmum,
      pengelolaanPerpustakaan: pengelolaanPerpustakaan
    },
    revalidate: 10,
  }
}

export default Program;
