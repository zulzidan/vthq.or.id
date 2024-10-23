import React from "react";
import ArticleCardRound from "@/components/ArticleCardRound";
import { BlogArticle } from "@/contentful/blogArticle";

interface ArticleLayoutProps {
     articles: BlogArticle[]
}
const ArticleLayout: React.FC<ArticleLayoutProps> = ({articles}) => {
     return (
          <section className="py-6 mt-8 px-6 md:px-14 max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => {
                         return (
                              <ArticleCardRound article={article} nameOfContext="artikel" key={index}/>
                         )
                    })}
               </div>
          </section>
     )
}

export default ArticleLayout;