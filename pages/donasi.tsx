import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Galery from "@/section/Galery";
import { GetStaticProps } from "next";
import { fetchGaleryActivities, GaleryActivity } from "@/contentful/galeryActivity";

interface DonasiProps {
     galleries: GaleryActivity[]
}

const Home: React.FC<DonasiProps> = ({galleries}) => {
  return (
    <Layout>
      <TitleOfPage title="Donasi"/>
      <section className="max-w-screen-2xl mx-auto">
          <Galery galleries={galleries}/>
      </section>
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