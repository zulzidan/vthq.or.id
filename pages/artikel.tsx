import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import BlogHeader from "@/section/BlogHeader";
import BlogLayout from "@/section/BlogLayout";

export default function Artikel() {
     return(
          <Layout>
                <TitleOfPage title="Artikel"/>
               <BlogHeader nameOfContext="artikel"/>
               <BlogLayout/>
          </Layout>
     )
}