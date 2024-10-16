import React from "react";
import { dummyArticles } from "@/data/dummyArticle";
import { dummyActivity } from "@/data/dummyActivity";
import ArticleList from "@/components/ArticleList";

const Article: React.FC = () => {

  return (
    <div className="flex px-6 md:px-14 py-6 space-y-10 lg:space-y-0 flex-col lg:flex-row md:justify-between lg:gap-6">
     <ArticleList data={dummyArticles} titleSubArticle={"ARTIKEL"} nameOfContext={"artikel"}/>
     <ArticleList data={dummyActivity} titleSubArticle={"KEGIATAN"} nameOfContext={"kegiatan"} />
    </div>
  );
};

export default Article;