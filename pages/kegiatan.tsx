import Layout from "@/components/layout";
import ActivityLayout from "@/section/ActivityLayout";
import TitleOfPage from "@/components/TitleOfPage";
import { GetStaticProps } from "next";
import { BlogActivity, fetchActivityPosts } from "@/contentful/blogActivity";
import CarouselShadcn from "@/section/CarouselShadcn";
import { getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";

interface KegiatanProps {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     welcomeImagesKegiatan: any
     articles: BlogActivity[]
}

const Kegiatan:React.FC<KegiatanProps> = ({welcomeImagesKegiatan, articles}) => {
     return(
          <Layout>
               <TitleOfPage title="Kegiatan"/>
               <CarouselShadcn welcomeImages={welcomeImagesKegiatan}/>
               <ActivityLayout articles={articles}/>
          </Layout>
     )
}

export const getStaticProps: GetStaticProps = async () => {

     const welcomeImagesKegiatan = await getWelcomeImageSlidersBySlug("kegiatan")
     const articles = await fetchActivityPosts({preview: false})

     return {
       props: {
          welcomeImagesKegiatan,
         articles,
       },
       revalidate: 10,
     };
   };
export default Kegiatan