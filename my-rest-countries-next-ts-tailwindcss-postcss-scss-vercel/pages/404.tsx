import React from 'react'
// import s from "@assets/NotFound.page.css"
import { Header, Footer, NotFound } from "@components/index";
import styleHome from "@assets/Home.module.css";
import Head from "next/head";

const FourZeroFour = () => {
  return (
    <div className={styleHome.container}>
      <Head>
        <title>Countries ALL</title>
        <meta name="description" content="Developed by Besik Kavzhardze" />
        <link rel="/favicon.ico" />
      </Head>
      <Header />
        <NotFound returnHome={true} />
      <Footer />
  </div>
  )
}

export default FourZeroFour