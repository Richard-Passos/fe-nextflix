/* Components */
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
