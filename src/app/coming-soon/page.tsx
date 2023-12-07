'use-client'

import Head from "next/head";
import Header from "../../components/Header";
import ComingSoon from "../../components/ComingSoon";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="text-black">
      <Head>
        <title>Invest Clever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ComingSoon />
      <Footer />
    </div>
  );
}