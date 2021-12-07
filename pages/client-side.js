import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";
import Layout from "../components/Layout";

export default function ClientSide() {
  return (
    <Layout>
      <Head>
        <title>Client Side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Client Side Rendering</h1>

      <ClientOnly>
        <Countries />
      </ClientOnly>
    </Layout>
  );
}
