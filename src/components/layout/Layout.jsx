/* Components */
import Head from "next/head";
import { Header } from "../header";
import { Children } from "react";
import { Footer } from "../footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="movies with search and pagination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}
