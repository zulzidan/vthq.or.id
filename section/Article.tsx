import React from 'react';
import { dummyArticles } from '@/data/dummyArticle';
import ArticleList from '../components/ArticleList';

const Article: React.FC = () => {

  return (
    <div className="flex px-6 md:px-14 py-6 flex-col lg:flex-row md:justify-between lg:gap-6">
     <ArticleList articles={dummyArticles} titleSubArticle={"ARTIKEL"}/>
     <ArticleList articles={dummyArticles} titleSubArticle={"KEGIATAN"}/>
    </div>
  );
};

export default Article;