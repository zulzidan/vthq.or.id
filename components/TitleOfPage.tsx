import React from "react";
import Head from "next/head";

interface TitleOfPageProps {
     title: string;
}
const TitleOfPage: React.FC<TitleOfPageProps> = ({title}) => {
     return (
          <Head>
               <title>{title}</title>
          </Head>
     )
}

export default TitleOfPage;