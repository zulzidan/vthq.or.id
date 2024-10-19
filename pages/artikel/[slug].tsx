import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import { dummyArticles } from "@/data/dummyArticle";
import { Activity } from "@/types/activity";
import SingleBlog from "@/components/SingleBlog";
import TitleOfPage from "@/components/TitleOfPage";

interface ContentProps {
  article: Activity;
}

const ContentDetail = ({ article }: ContentProps) => {
  return (
    <Layout>
      <TitleOfPage title="Kegiatan" />
      <SingleBlog article={article} titlePage="kegiatan" />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const article = dummyArticles.find((activity) => activity.slug === slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default ContentDetail;
