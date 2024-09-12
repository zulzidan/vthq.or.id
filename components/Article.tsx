import React from 'react';
import { dummyArticles } from '@/data/dummyArticle';
import ArticleList from './ArticleList';

const Article: React.FC = () => {

  return (
    <div className="flex px-14 py-6 flex-col lg:flex-row md:justify-evenly lg:gap-6">
     <ArticleList articles={dummyArticles} title={"ARTIKEL"}/>
     <ArticleList articles={dummyArticles} title={"KEGIATAN"}/>
    </div>
  );
};

export default Article;