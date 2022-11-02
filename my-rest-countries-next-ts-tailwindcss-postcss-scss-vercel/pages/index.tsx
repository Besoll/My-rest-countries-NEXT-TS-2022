import { Header, Footer, Main } from "@components/index";
import s from "@assets/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Countries ALL</title>
        <meta name="description" content="Developed by Besik Kavzhardze" />
        <link rel="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
