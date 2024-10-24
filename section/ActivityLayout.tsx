import React from "react";
import ArticleCardRound from "@/components/ArticleCardRound";
import { BlogArticle } from "@/contentful/blogArticle";

interface ActivityLayoutProps {
     articles: BlogArticle[]
}

const ActivityLayout: React.FC<ActivityLayoutProps> = ({articles}) => {
     return (
          <section className="py-6 mt-8 px-6 md:px-14 max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {articles.map((activity, index) => {
                         return (
                              <ArticleCardRound article={activity} nameOfContext="kegiatan" key={index}/>
                         )
                    })}
               </div>
          </section>
     )
}

export default ActivityLayout;