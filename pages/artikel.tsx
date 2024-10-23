import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import ArticleLayout from "@/section/ArticleLayout";
import ArticleHeader from "@/section/ArticleHeader";
import { GetStaticProps } from "next";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";

interface ArticlesProps {
     articles: BlogArticle[]
}

const Artikel: React.FC<ArticlesProps> = ({articles}) => {
     return(
          <Layout>
                <TitleOfPage title="Artikel"/>
               <ArticleHeader nameOfContext="artikel"/>
               <ArticleLayout articles={articles}/>
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

export default Artikel