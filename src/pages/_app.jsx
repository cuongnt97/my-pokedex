import React, { Component } from "react";
import Layout from "./_layout";
import Background from "@/components/Background";

import "../scss/index.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Pokedex</title>
      </Head>
      <Background />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
