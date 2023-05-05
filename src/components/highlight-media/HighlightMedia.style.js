/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

const height = `
  height: clamp(40rem, 150vw, 70rem);

  @media screen and (min-width: 600px) {
    height: clamp(30rem, 50vw, 60rem);
  }
`;

export const Container = styled.section`
  ${height}
  margin-block: -14rem 2rem;

  picture {
    width: 100%;
    height: 100%;
    filter: saturate(1.5);

    position: relative;
  }
`;

export const Main = styled.div`
  @media screen and (min-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }

  a {
    width: 100%;
    ${height}

    display: inline-block;

    img {
      border-radius: 2rem;
    }
  }

  .splide {
    @media screen and (max-width: 600px) {
      padding-inline: 1rem;

      .splide__arrow {
        opacity: 0;
      }
    }

    .splide__arrow {
      margin-inline: -3rem;

      top: calc(50% - 1.25rem);

      svg {
        fill: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
      }

      :hover svg {
        fill: ${({ theme }) => theme.colors.oppositeTheme};
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
        width: 4rem;
        overflow: hidden;
        background-color: ${({ theme }) =>
          rgba(theme.colors.oppositeTheme, 0.25)};

        :before {
          content: "";
          width: 0%;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.oppositeTheme};

          position: absolute;
          top: 0;
          left: 0;
        }

        :hover {
          background-color: ${({ theme }) =>
            rgba(theme.colors.oppositeTheme, 0.5)};
        }
      }
    }

    [aria-live="off"] + .splide__pagination .is-active {
      ::before {
        width: 100%;
        transition: width 5s linear;
      }
    }
  }
`;

export const Illustration = styled.div`
  position: absolute;
  inset-inline: 0;

  display: inline-block;

  .splide {
    padding: 0;
  }

  picture {
    ${height}
  }
`;
