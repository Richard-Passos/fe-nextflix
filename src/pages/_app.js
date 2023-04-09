/* Components */
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";
import { Lato } from "next/font/google";

/* Logic */
import { useEffect, useState } from "react";
import { lightTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    localStorage.getItem("THEME") &&
      setTheme(JSON.parse(localStorage.getItem("THEME")));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout classN={lato.className} themeState={{ theme, setTheme }}>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
