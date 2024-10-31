import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import BlogHeader from "@/section/BlogHeader";
import Programs from "@/section/Programs";

export default function Ppdb() {
  return (
    <Layout>
       <TitleOfPage title="Akademik"/>
       <BlogHeader nameOfContext="AKADEMIK"/>
       <Programs/>
    </Layout>
  );
}
