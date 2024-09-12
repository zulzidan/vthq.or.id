import Article from "@/components/Article";
import Carousel from "@/components/Carousel";
import Cta from "@/components/Cta";
import Layout from "@/components/layout";
import PesantrenProfile from "@/components/PesantrenProfile";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <PesantrenProfile />
      <Article/>
      <Cta />
    </Layout>
  );
}
