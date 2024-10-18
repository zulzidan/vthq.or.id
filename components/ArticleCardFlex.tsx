import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";

interface ArticleCardFlexProps {
  article: Article;
  nameOfContext: string;
}
const ArticleCardFlex: React.FC<ArticleCardFlexProps> = ({
  article,
  nameOfContext,
}) => {
  return (
    <div>
      <Link href={`/${nameOfContext}/${article.id}`} key={article.id} passHref>
        <div className="flex items-start space-x-4">
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
            <p className="text-xs text-gray-600 line-clamp-3 ">
              {article.excerpt}
            </p>
            <a
              href={`/${nameOfContext}/${article.id}`}
              className="text-blue-500 text-xs hover:underline"
            >
              Baca Selengkapnya...
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCardFlex;
