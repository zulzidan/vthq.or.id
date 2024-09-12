import React from 'react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface ArticleListProps {
  articles: Article[];
  titleSubArticle: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, titleSubArticle }) => {
  return (
    <div className="w-full lg:max-w-2xl">
     <div className="grid lg:grid-flow-col items-center align-middle pb-4">
      <h2 className="text-2xl font-bold text-green-700 mt-1">{titleSubArticle}</h2>
      <hr  className="bg-green-600 py-1" />
     </div>
      <div className="space-y-4 md:space-y-0 lg:space-y-6 md:gap-4 md:grid md:grid-cols-2 lg:block">
        {articles.map((article) => (
          <div key={article.id} className="grid lg:flex items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="lg:w-24 lg:h-24 flex-shrink-0">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={2363}
                height={2363}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.excerpt}</p>
              <a href="#" className="text-blue-500 text-sm hover:underline">See more...</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;