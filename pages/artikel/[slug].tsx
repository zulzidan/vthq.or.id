import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/components/layout";
import SingleBlog from "@/components/SingleBlog";
import TitleOfPage from "@/components/TitleOfPage";
import { BlogArticle, fetchArticlePost, fetchArticlePosts, fetchArticlePostsWithExcludedArticle } from "@/contentful/blogArticle";
import RecomendationBlog from "@/section/RecomendationBlog";


export const getStaticPaths: GetStaticPaths = async () => {

  const articles = await fetchArticlePosts({preview: false})

  const paths = articles.map((article) => ({
    params: {slug: article.slug}
  }))

  return {
    paths,
    fallback: 'blocking',
  };
};

interface ContentProps {
  article: BlogArticle;
  articles: BlogArticle[];
}

const ContentDetail = ({ article, articles }: ContentProps) => {
  return (
    <Layout>
      <TitleOfPage title="Artikel" />
      <SingleBlog article={article} titlePage="artikel" />
      <RecomendationBlog articles={articles} nameOfContext="artikel"/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const article = await fetchArticlePost({slug: slug, preview: false})
  const articles = await fetchArticlePostsWithExcludedArticle({excludedSlug: slug, preview: false})

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
      articles
    },
    revalidate: 10,
  };
};

export default ContentDetail;
