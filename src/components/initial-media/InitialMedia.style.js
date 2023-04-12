/* Style */
import { rgba } from "polished";
import { ArrowsContainer as ArrowsCarousel } from "../carousel";

/* Logic */
import styled from "styled-components";

export const InitialMediaContainer = styled.section`
  /* Placeholder */
  width: 90%;
  height: min(150vw, 100vh);
  margin: calc(-10vh - 10rem + 2.5vh) auto -8rem;

  @media screen and (min-width: 600px) {
    width: 80%;
    height: clamp(60rem, 87vh, 70rem);
  }

  .details-link {
    height: 100%;

    display: inherit;
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
    height: min(147vw, 97vh);
    filter: saturate(2);

    inset: 0;
    z-index: -1;

    @media screen and (min-width: 600px) {
      height: clamp(57rem, 84vh, 67rem);
    }
  }

  ::after {
    height: min(150vw, 100vh);
    border-radius: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0 1.3rem 2.7rem -0.5rem,
      rgba(0, 0, 0, 0.3) 0 0.8rem 1.6rem -0.8rem;
    filter: saturate(1.5);
    pointer-events: none;

    inset: 2.5vh 5%;

    @media screen and (min-width: 600px) {
      height: clamp(60rem, 87vh, 70rem);

      inset-inline: 10%;
    }
  }
`;

export const ArrowsContainer = styled(ArrowsCarousel)`
  .prev-arrow,
  .next-arrow {
    opacity: 0;

    top: calc((min(150vw, 100vh) + 2.5vh - 5rem) / 2);

    @media screen and (min-width: 600px) {
      top: calc((clamp(60rem, 87vh, 70rem) + 2.5vh - 5rem) / 2);
    }
  }

  .prev-arrow {
    left: 1%;
  }
  .next-arrow {
    right: 1%;
  }

  ${InitialMediaContainer}:hover & {
    .prev-arrow,
    .next-arrow {
      opacity: 1;
    }
  }
`;
