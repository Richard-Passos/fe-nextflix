/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const MediaContainer = styled.section`
  /* Placeholder */
  height: 150vw;
  max-height: 100vh;
  margin: clamp(-20rem, calc(-7vh - 10rem), -15rem) 0 -8rem;

  @media screen and (min-width: 600px) {
    width: 80%;
    max-width: 140rem;
    min-height: 70rem;
    height: 70rem;
  }
  /*  */

  &.switching-img:before,
  &.switching-img:after {
    top: -100%;
  }

  ::before {
    content: "";
    height: 150vw;
    max-height: 100vh;
    border-radius: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: 0.5s;

    background: no-repeat center / cover
      url(https://image.tmdb.org/t/p/original${({ phoneUrl }) => phoneUrl});
    filter: saturate(1.5);

    position: absolute;
    top: 2.5vh;
    left: 5%;
    right: 5%;
    z-index: 0;

    @media screen and (min-width: 600px) {
      min-height: 70rem;
      height: 70rem;

      left: 10%;
      right: 10%;

      background-image: url(https://image.tmdb.org/t/p/original${({
        desktopUrl,
      }) => desktopUrl});
    }
  }

  :after {
    content: "";
    width: 100%;
    height: 147vw;
    max-height: 97vh;
    transition: 0.5s;

    background: no-repeat center / cover
      url(https://image.tmdb.org/t/p/original${({ phoneUrl }) => phoneUrl});
    filter: saturate(2);

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (min-width: 600px) {
      min-height: 67rem;
      height: 67rem;

      background-image: url(https://image.tmdb.org/t/p/original${({
        desktopUrl,
      }) => desktopUrl});
    }
  }
`;

export const ButtonsContainer = styled.div`
  .prev-btn,
  .next-btn {
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => rgba(theme.colors.theme, 0.5)};
    border: none;
    border-radius: 50%;
    transition: 0.3s ease-in;

    position: absolute;
    top: 45%;
    z-index: 1;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    }
  }
  svg {
    pointer-events: none;
  }

  .prev-btn {
    left: -50%;
  }
  .next-btn {
    right: -50%;
  }

  ${MediaContainer}:hover & {
    .prev-btn {
      left: 1%;
    }

    .next-btn {
      right: 1%;
    }
  }
`;
