import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/components/layout";
import SingleBlog from "@/components/SingleBlog";
import TitleOfPage from "@/components/TitleOfPage";
import { BlogActivity, fetchActivityPost, fetchActivityPosts, fetchActivityPostsWithExcludedActivity } from "@/contentful/blogActivity";
import ActivityLayout from "@/section/ActivityLayout";

interface ContentProps {
  article: BlogActivity;
}

export const getStaticPaths: GetStaticPaths = async () => {

  const articles = await fetchActivityPosts({preview: false})

  const paths = articles.map((article) => ({
    params: {slug: article.slug}
  }))

  return {
    paths,
    fallback: 'blocking',
  };
};

interface ContentProps {
  article: BlogActivity;
  articles: BlogActivity[]
}

const ContentDetail = ({ article, articles }: ContentProps) => {
  return (
    <Layout>
      <TitleOfPage title="Kegiatan" />
      <SingleBlog article={article} titlePage="kegiatan" />
      <ActivityLayout articles={articles}/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const article = await fetchActivityPost({slug: slug, preview: false})
  const articles = await fetchActivityPostsWithExcludedActivity({exlcudedActivity: slug, preview: false})

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

