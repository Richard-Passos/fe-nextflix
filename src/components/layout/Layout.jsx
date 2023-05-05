/* Components */
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Container } from "./Layout.style";
import { Header, Footer } from "@/components";

/* Logic */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "@/redux";

export default function Layout({ children, className }) {
  /* Control appTheme state */
  const { theme } = useSelector(({ appTheme }) => appTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!theme.title) dispatch(toggleTheme());
  }, []);
  /*  */

  if (theme.title)
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="This website is the ideal destination for movie lovers. Here you will find an extensive list of films from all genres, from classic cinema to the latest productions. Easily navigate our intuitive interface and find detailed information about each film, including synopsis, cast, director, and duration. Additionally, we offer useful features such as the ability to create personalized lists of films to save your favorites."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/favicon.svg" />
        </Head>

        <Container className={className}>
          <Header />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    );
}
