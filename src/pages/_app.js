/* Components */
import { GlobalStyle, ResetStyle } from "@/styles";
import { Layout } from "@/components";
import { Lato } from "next/font/google";

/* Logic */
import { createContext, useState } from "react";
import { lightTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
    <ResetStyle />
      <GlobalStyle />

      <setThemeContext.Provider value={{ theme, setTheme }}>
        <Layout classN={lato.className}>
          <Component {...pageProps} />
        </Layout>
      </setThemeContext.Provider>
    </ThemeProvider>
  );
}

export const setThemeContext = createContext();
