import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import { dummyActivity } from "@/data/dummyActivity";
import { Activity } from "@/types/activity";
import SingleBlog from "@/components/SingleBlog";

interface ContentProps {
     article: Activity;
   }
   
const ContentDetail = ({ article }: ContentProps) => {
  useRouter();
  return (
     <Layout>
         <SingleBlog article={article}/>
     </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const idNumber = Number(id)

  const article = dummyActivity.find((p) => p.id === idNumber);

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

}

export default ContentDetail;
