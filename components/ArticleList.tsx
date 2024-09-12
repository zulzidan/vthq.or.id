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
  title: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, title }) => {
  return (
    <div className="w-full lg:max-w-2xl">
     <div className="grid lg:grid-flow-col items-center align-middle pb-4">
      <h2 className="text-2xl font-bold text-green-700 mt-1">{title}</h2>
      <hr  className="bg-green-600 py-1" />
     </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="grid md:flex items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:w-24 md:h-24 flex-shrink-0">
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