/* Components */
import Head from "next/head";
import { LayoutContainer } from "./Layout.style";
import { Footer } from "../footer";

export default function Layout({ children, classN }) {
  return (
    <>
      <Head>
        <meta name="description" content="movies with search and pagination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <LayoutContainer className={classN}>
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
}
