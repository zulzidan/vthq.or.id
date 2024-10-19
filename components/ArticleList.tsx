import React from "react";
import ArticleCardFlex from "./ArticleCardFlex";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface ArticleListProps {
  data: Article[];
  titleSubArticle: string;
  nameOfContext: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ data, titleSubArticle, nameOfContext }) => {

  const displayedArticle = data.slice(0, 3)
  return (
    <div className="w-full lg:max-w-2xl">
      <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
        <h2 className="text-lg font-bold text-green-700 mt-1">
          {titleSubArticle}
        </h2>
        <div className="flex-grow" >
        <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {displayedArticle.map((article) => {
          return (
            <ArticleCardFlex article={article} nameOfContext={nameOfContext} key={article.id}/>
          )
        })}
      </div>
    </div>
  );
};

export default ArticleList;