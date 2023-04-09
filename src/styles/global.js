import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }
`;
