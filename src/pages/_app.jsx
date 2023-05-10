import React, { Component } from "react";
import Layout from "./_layout";
import Background from "@/components/Background";

import "../scss/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Background />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
