/* Style */

/* Logic */
import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  height: clamp(50rem, 185vw, 80rem);
  margin-block: -16rem -10rem;

  position: relative;

  @media screen and (min-width: 600px) {
    height: clamp(40rem, 60vw, 70rem);
  }

  picture {
    width: 100%;
    height: 100%;
    filter: saturate(1.5);

    position: relative;

    display: inherit;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 80%;
  }

  a {
    width: 100%;
    height: clamp(40rem, 150vw, 70rem);

    @media screen and (min-width: 600px) {
      height: clamp(30rem, 50vw, 60rem);
    }

    display: inline-block;

    img {
      border-radius: 2rem;
    }
  }

  .splide {
    .splide__arrow {
      margin-inline: 1.5rem;
      top: calc(50% - 1.25rem);

      @media screen and (min-width: 600px) {
        margin-inline: -3rem;
      }

      svg {
        fill: ${({ theme }) => theme.colors.oppositeTheme};
      }

      :hover {
        svg {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }

      ::before {
        content: "";
        width: 5rem;
        height: 5rem;
        background-color: ${({ theme }) => rgba(theme.colors.theme, 0.5)};
        border-radius: 50%;

        position: absolute;
        z-index: -1;
      }
    }

    .splide__pagination {
      bottom: 0;

      .splide__pagination__page {
        background-color: ${({ theme }) =>
          rgba(theme.colors.oppositeTheme, 0.5)};

        :hover {
          background-color: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
        }

        &.is-active {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

export const IllustrationImage = styled.div`
  width: 100%;

  position: absolute;
  top: 0;
  z-index: -1;

  display: inline-block;

  .splide {
    padding: 0;
  }

  picture {
    height: clamp(40rem, 150vw, 70rem);

    @media screen and (min-width: 600px) {
      height: clamp(30rem, 50vw, 60rem);
    }
  }
`;
