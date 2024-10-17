import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Layout from "@/components/layout";
import TeacherProfile from "@/section/TeacherProfile";
import { profileData } from "@/data/profileData";
import { TeacherProfileType } from "@/types/teacherProfile";
import TitleOfPage from "@/components/TitleOfPage";

interface ContentProps {
     profile: TeacherProfileType;
   }
   
const ContentDetail = ({ profile }: ContentProps) => {
  useRouter();
  return (
     <Layout>
       <TitleOfPage title="Profil"/>
          <TeacherProfile profile={profile} />
     </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const profile = profileData.find((p) => p.id === id);

  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile,
    },
  };

}

export default ContentDetail;
