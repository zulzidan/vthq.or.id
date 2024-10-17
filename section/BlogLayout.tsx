import React from "react";
import { dummyArticles } from "@/data/dummyArticle";
import ArticleCard from "@/components/ArticleCard";

const BlogLayout: React.FC = () => {
     return (
          <section className="py-6 mt-8 px-6 md:px-14 max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {dummyArticles.map((article) => {
                         return (
                              <ArticleCard article={article} nameOfContext="artikel" key={article.id}/>
                         )
                    })}
               </div>
          </section>
     )
}

export default BlogLayout;