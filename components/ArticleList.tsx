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
     <div className="grid grid-cols-2 items-center align-middle pb-4">
      <h2 className="text-2xl font-bold text-green-700 mt-1">{title}</h2>
      <hr  className="bg-green-600 py-2 w-full" />
     </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start space-x-4">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={96}
                height={96}
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