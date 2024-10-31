import Layout from "@/components/layout";
import BlogHeader from "@/section/BlogHeader";
import ActivityLayout from "@/section/ActivityLayout";
import TitleOfPage from "@/components/TitleOfPage";
import { GetStaticProps } from "next";
import { BlogActivity, fetchActivityPosts } from "@/contentful/blogActivity";

interface ArticlesProps {
     articles: BlogActivity[]
}

const Kegiatan:React.FC<ArticlesProps> = ({articles}) => {
     return(
          <Layout>
                <TitleOfPage title="Kegiatan"/>
               <BlogHeader nameOfContext="kegiatan"/>
               <ActivityLayout articles={articles}/>
          </Layout>
     )
}

export const getStaticProps: GetStaticProps = async () => {

     const articles = await fetchActivityPosts({preview: false})
     return {
       props: {
         articles,
       },
       revalidate: 10,
     };
   };
export default Kegiatan