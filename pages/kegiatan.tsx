import Layout from "@/components/layout";
import BlogHeader from "@/section/ArticleHeader";
import ActivityLayout from "@/section/ActivityLayout";
import TitleOfPage from "@/components/TitleOfPage";
import { GetStaticProps } from "next";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";

interface ArticlesProps {
     articles: BlogArticle[]
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

     const articles = await fetchArticlePosts({preview: false})
     return {
       props: {
         articles,
       },
       revalidate: 10,
     };
   };
export default Kegiatan