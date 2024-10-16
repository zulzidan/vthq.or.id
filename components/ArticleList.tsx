import React from "react";
import Image from "next/image";

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
      <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col lg:block">
        {data.map((article) => (
          <div key={article.id} className="flex items-start space-x-4">
            <div className="lg:w-36 lg:h-36 h-auto w-20 flex-shrink-0">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={2363}
                height={2363}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-semibold mb-1">{article.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-3 ">{article.excerpt}</p>
              <a href={`/${nameOfContext}/${article.id}`} className="text-blue-500 text-xs hover:underline">See more...</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;