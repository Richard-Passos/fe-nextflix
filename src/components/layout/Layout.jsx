/* Components */
import Head from "next/head";
import { LayoutContainer } from "./Layout.style";
import { Footer } from "../footer";

/* Logic */
import { createContext } from "react";
import { darkTheme, lightTheme } from "@/styles/theme";

export default function Layout({ children, classN, themeState }) {
  const { theme, setTheme } = themeState;

  const toggleTheme = () => {
    const themeToAply = theme.title === "light" ? darkTheme : lightTheme;

    setTheme(themeToAply);
    localStorage.setItem("THEME", JSON.stringify(themeToAply));
  };

  return (
    <>
      <Head>
        <meta name="description" content="movies with search and pagination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <LayoutContainer className={classN}>
        <themeContext.Provider value={{ theme, toggleTheme }}>
          {children}
          <Footer />
        </themeContext.Provider>
      </LayoutContainer>
    </>
  );
}

export const themeContext = createContext();
