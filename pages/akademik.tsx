import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Curiculum from "@/section/Curiculum";
import Programs from "@/section/Programs";
import TittleAndButtonLink from "@/section/TittleAndButtonLink";
import { GetStaticProps } from "next";
import { getAllProgramsBySlug, getExternalLinkSectionSlug, getHeadingProfileBySlug, getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";
import CarouselShadcn from "@/section/CarouselShadcn";
import { Program as ProgramTypes } from "@/types/program";

interface PpdbProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  welcomeImagesAkademik: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headingProfileAkademik: any
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
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   externalLinkSectionData: any
}

const Ppdb: React.FC<PpdbProps> = ({welcomeImagesAkademik, headingProfileAkademik, programTahfizh, pembelajaranDiniyah, brtm, programBahasaArab, pembelajaranUmum, pengelolaanPerpustakaan, externalLinkSectionData}) => {

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
       <TitleOfPage title="Akademik"/>
       <CarouselShadcn welcomeImages={welcomeImagesAkademik}/>
       <Curiculum kurikulumProfileData={headingProfileAkademik}/>
       <Programs allPrograms={allPrograms}/>
       <TittleAndButtonLink externalLinkSectionData={externalLinkSectionData}/>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  const welcomeImagesAkademik = await getWelcomeImageSlidersBySlug("akademik")
  const headingProfileAkademik = await getHeadingProfileBySlug("akademik")
  const programTahfizh = await getAllProgramsBySlug("program-tahfizh")
  const pembelajaranDiniyah = await getAllProgramsBySlug("pembelajaran-diniyah")
  const brtm = await getAllProgramsBySlug("brtm")
  const programBahasaArab = await getAllProgramsBySlug("program-bahasa-arab")
  const pembelajaranUmum = await getAllProgramsBySlug("pembelajaran-umum")
  const pengelolaanPerpustakaan = await getAllProgramsBySlug("pengelolaan-perpustakaan")
  const externalLinkSectionData = await getExternalLinkSectionSlug("sihimma")

  return {
    props: {
      welcomeImagesAkademik,
      headingProfileAkademik,
      programTahfizh: programTahfizh,
      pembelajaranDiniyah: pembelajaranDiniyah,
      brtm: brtm,
      programBahasaArab: programBahasaArab,
      pembelajaranUmum: pembelajaranUmum,
      pengelolaanPerpustakaan: pengelolaanPerpustakaan,
      externalLinkSectionData: externalLinkSectionData
    },
    revalidate: 10,
  }
}

export default Ppdb;
