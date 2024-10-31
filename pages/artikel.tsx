import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import ArticleLayout from "@/section/ArticleLayout";
import BlogHeader from "@/section/BlogHeader";
import { GetStaticProps } from "next";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";

interface ArticlesProps {
     articles: BlogArticle[]
}

const Artikel: React.FC<ArticlesProps> = ({articles}) => {
     return(
          <Layout>
                <TitleOfPage title="Artikel"/>
               <BlogHeader nameOfContext="ARTIKEL"/>
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