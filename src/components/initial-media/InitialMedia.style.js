/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const InitialMediaContainer = styled.section`
  /* Placeholder */
  width: 90%;
  height: 150vw;
  max-height: 100vh;
  margin: clamp(-20rem, calc(-10rem - 7.5vh), -15rem) auto -8rem;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    width: 80%;
    min-height: 70rem;
    height: 70rem;
  }

  .details-link {
    height: 150vw;
    max-height: 100vh;

    position: absolute;
    top: 2.5vh;
    left: 5%;
    right: 5%;

    display: inherit;

    @media screen and (min-width: 600px) {
      min-height: 70rem;
      height: 70rem;

      left: 10%;
      right: 10%;
    }
  }
  /*  */

  :before,
  :after {
    content: "";
    transition: 0.5s ease-out;

    background: no-repeat center / cover
      url(https://image.tmdb.org/t/p/original${({ phoneUrl }) => phoneUrl});

    position: absolute;

    @media screen and (min-width: 600px) {
      background-image: url(https://image.tmdb.org/t/p/original${({
        desktopUrl,
      }) => desktopUrl});
    }
  }

  ::before {
    height: 150vw;
    max-height: 100vh;
    border-radius: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    filter: saturate(1.5);

    top: 2.5vh;
    left: 5%;
    right: 5%;
    z-index: 0;

    @media screen and (min-width: 600px) {
      min-height: 70rem;
      height: 70rem;

      left: 10%;
      right: 10%;
    }
  }

  :after {
    width: 100%;
    height: 147vw;
    max-height: 97vh;
    filter: saturate(2);

    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (min-width: 600px) {
      min-height: 67rem;
      height: 67rem;
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
    opacity: 0;
    transition: 0.3s;

    position: absolute;
    top: calc((150vw + 2.5vh - 5rem) / 2);
    z-index: 1;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    }

    @media screen and (min-width: 600px) {
      top: calc((70rem + 2.5vh - 5rem) / 2);
    }
  }
  svg {
    pointer-events: none;
  }

  .prev-btn {
    left: 1%;
  }
  .next-btn {
    right: 1%;
  }

  ${InitialMediaContainer}:hover & {
    .prev-btn,
    .next-btn {
      opacity: 1;
    }
  }
`;