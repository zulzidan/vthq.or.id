import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import ArticleLayout from "@/section/ArticleLayout";
import { GetStaticProps } from "next";
import { BlogArticle, fetchArticlePosts } from "@/contentful/blogArticle";
import CarouselShadcn from "@/section/CarouselShadcn";
import { getWelcomeImageSlidersBySlug } from "@/contentful/allFetch";

interface ArticlesProps {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     welcomeImagesArtikel: any
     articles: BlogArticle[]
}

const Artikel: React.FC<ArticlesProps> = ({welcomeImagesArtikel, articles}) => {
     return(
          <Layout>
               <TitleOfPage title="Artikel"/>
               <CarouselShadcn welcomeImages={welcomeImagesArtikel}/>
               <ArticleLayout articles={articles}/>
          </Layout>
     )
}

export const getStaticProps: GetStaticProps = async () => {

     const welcomeImagesArtikel = await getWelcomeImageSlidersBySlug("artikel")
     const articles = await fetchArticlePosts({preview: false})

     return {
       props: {
          welcomeImagesArtikel,
          articles,
       },
       revalidate: 10,
     };
   };

export default Artikel