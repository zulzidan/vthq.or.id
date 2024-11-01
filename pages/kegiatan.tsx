import Layout from "@/components/layout";
import BlogHeader from "@/section/BlogHeader";
import ActivityLayout from "@/section/ActivityLayout";
import TitleOfPage from "@/components/TitleOfPage";
import { GetStaticProps } from "next";
import { BlogActivity, fetchActivityPosts } from "@/contentful/blogActivity";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";

interface ArticlesProps {
     articles: BlogActivity[]
     welcomeImages: WelcomeImageSliders[]
}

const Kegiatan:React.FC<ArticlesProps> = ({articles, welcomeImages}) => {
     return(
          <Layout>
                <TitleOfPage title="Kegiatan"/>
               <BlogHeader nameOfContext="kegiatan" welcomeImages={welcomeImages}/>
               <ActivityLayout articles={articles}/>
          </Layout>
     )
}

export const getStaticProps: GetStaticProps = async () => {

     const articles = await fetchActivityPosts({preview: false})
     const welcomeImages = await fetchWelcomeImageSliders({preview: false})

     return {
       props: {
         articles,
         welcomeImages,
       },
       revalidate: 10,
     };
   };
export default Kegiatan