import Article from "@/components/Article";
import BestPrograms from "@/components/BestPrograms";
import Carousel from "@/components/Carousel";
import Cta from "@/components/Cta";
import Galery from "@/components/Galery";
import Layout from "@/components/layout";
import PesantrenProfile from "@/components/PesantrenProfile";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <PesantrenProfile />
      <Article/>
      <BestPrograms/>
      <Galery/>
      <Cta />
    </Layout>
  );
}
