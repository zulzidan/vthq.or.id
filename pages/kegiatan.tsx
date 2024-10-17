import Layout from "@/components/layout";
import BlogHeader from "@/section/BlogHeader";
import ActivityLayout from "@/section/ActivityLayout";

export default function Kegiatan() {
     return(
          <Layout>
               <BlogHeader nameOfContext="kegiatan"/>
               <ActivityLayout/>
          </Layout>
     )
}