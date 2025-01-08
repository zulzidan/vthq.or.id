import React from "react";
import ArticleCardRound from "@/components/ArticleCardRound";
import { BlogArticle } from "@/contentful/blogArticle";

interface RecomendationBlogProps {
  articles: BlogArticle[];
}

const RecomendationBlog: React.FC<RecomendationBlogProps> = ({ articles }) => {
  return (
    <section className="py-6 mt-8 px-6 md:px-14 max-w-screen-2xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-4 py-1 px-6 ">Rekomendasi :</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((activity, index) => {
          return (
            <ArticleCardRound
              article={activity}
              nameOfContext="kegiatan"
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecomendationBlog;
