/* Components */
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";
import { Lato } from "next/font/google";

/* Logic */
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ResetStyle />
      <GlobalStyle />

      <PersistGate loading={null} persistor={persistor}>
        <Layout classN={lato.className}>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
