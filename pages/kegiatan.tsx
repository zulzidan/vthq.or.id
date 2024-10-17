import Layout from "@/components/layout";
import BlogHeader from "@/section/BlogHeader";
import ActivityLayout from "@/section/ActivityLayout";
import TitleOfPage from "@/components/TitleOfPage";

export default function Kegiatan() {
     return(
          <Layout>
                <TitleOfPage title="Kegiatan"/>
               <BlogHeader nameOfContext="kegiatan"/>
               <ActivityLayout/>
          </Layout>
     )
}