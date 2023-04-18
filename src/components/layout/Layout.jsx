/* Components */
import Head from "next/head";
import { LayoutContainer } from "./Layout.style";
import { Header } from "../header";
import { Footer } from "../footer";

/* Logic */
import { toggleTheme } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

export default function Layout({ children, classN }) {
  /* Control appTheme state */
  const { theme } = useSelector((state) => state.appTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!theme?.title) dispatch(toggleTheme("first-time"));
  }, []);

  /*  */

  if (theme.title)
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="movies with search and pagination"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <LayoutContainer className={classN}>
          <Header />
          {children}
          <Footer />
        </LayoutContainer>
      </ThemeProvider>
    );
}
