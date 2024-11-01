import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import ArticleLayout from "@/section/ArticleLayout";
import BlogHeader from "@/section/BlogHeader";
import { GetStaticProps } from "next";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";
import { fetchWelcomeImageSliders, WelcomeImageSliders } from "@/contentful/imageSliders";

interface ArticlesProps {
     articles: BlogArticle[]
     welcomeImages: WelcomeImageSliders[]
}

const Artikel: React.FC<ArticlesProps> = ({articles, welcomeImages}) => {
     return(
          <Layout>
                <TitleOfPage title="Artikel"/>
               <BlogHeader nameOfContext="ARTIKEL" welcomeImages={welcomeImages}/>
               <ArticleLayout articles={articles}/>
          </Layout>
     )
}

export const getStaticProps: GetStaticProps = async () => {

     const articles = await fetchArticlePosts({preview: false})
     const welcomeImages = await fetchWelcomeImageSliders({preview: false})

     return {
       props: {
         articles,
         welcomeImages,
       },
       revalidate: 10,
     };
   };

export default Artikel