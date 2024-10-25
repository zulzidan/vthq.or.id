import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/components/layout";
import SingleBlog from "@/components/SingleBlog";
import TitleOfPage from "@/components/TitleOfPage";
import { BlogActivity, fetchActivityPost, fetchActivityPosts } from "@/contentful/blogActivity";

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
}

const ContentDetail = ({ article }: ContentProps) => {
  return (
    <Layout>
      <TitleOfPage title="Kegiatan" />
      <SingleBlog article={article} titlePage="kegiatan" />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const article = await fetchActivityPost({slug: slug, preview: false})

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
};

export default ContentDetail;

