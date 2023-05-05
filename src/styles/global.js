/* Logic */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    scroll-behavior: smooth;

    @media screen and (min-width: 1900px) {
      font-size: clamp(70%, 0.65vw, 100%);
    }
  }
`;
