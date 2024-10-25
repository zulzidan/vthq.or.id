import React from "react";
import ArticleList from "@/components/ArticleList";
import { BlogArticle } from "@/contentful/blogArticle";
import { BlogActivity } from "@/contentful/blogActivity";

interface ArticleProps {
  article: BlogArticle[]
  activity: BlogActivity[]
}

const Article: React.FC<ArticleProps> = ({activity, article}) => {

  return (
    <div className="flex px-6 md:px-14 py-6 space-y-10 lg:space-y-0 flex-col lg:flex-row md:justify-between lg:gap-6">
     <ArticleList data={article} titleSubArticle={"ARTIKEL"} nameOfContext={"artikel"}/>
     <ArticleList data={activity} titleSubArticle={"KEGIATAN"} nameOfContext={"kegiatan"} />
    </div>
  );
};

export default Article;