import React from "react";
import Layout from "@/components/layout";
import TitleOfPage from "@/components/TitleOfPage";
import Donation from "@/section/Donation";

const Donasi: React.FC = () => {
  return (
    <Layout>
      <TitleOfPage title="Donasi"/>
      <Donation/>
    </Layout>
  );
}

export default Donasi;