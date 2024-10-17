import Layout from "@/components/layout";
import BlogHeader from "@/section/BlogHeader";
import BlogLayout from "@/section/BlogLayout";

export default function Artikel() {
     return(
          <Layout>
               <BlogHeader nameOfContext="artikel"/>
               <BlogLayout/>
          </Layout>
     )
}