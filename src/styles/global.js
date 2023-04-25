import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    height: -webkit-fill-available;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    height: -webkit-fill-available;
  }
`;
