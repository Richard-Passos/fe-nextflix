/* Components */
import nProgress from "nprogress";
import "@/styles/loading.css";
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";
import { DM_Sans } from "next/font/google";

/* Logic */
import Router from "next/router";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";

/* Set loading animation between pages */
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
/*  */

const dM_Sans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ResetStyle />
        <GlobalStyle />

        <Layout className={dM_Sans.className}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
