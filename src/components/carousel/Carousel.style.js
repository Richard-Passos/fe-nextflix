/* Style */
import { rgba } from "polished";

/* Logic */
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Container = styled.div`
  font-size: 1.4rem;

  position: relative;

  > .title {
    font-size: 1em;
    text-transform: capitalize;

    position: absolute;
    left: 4rem;
    z-index: 1;

    ::before {
      content: "";
      height: 100%;
      border-inline: 0.1rem solid ${({ theme }) => theme.colors.primary};

      position: absolute;
      top: -0.1rem;
      left: -1rem;
    }
  }

  .btn-show-all {
    font-weight: bold;

    position: absolute;
    right: 3rem;
    z-index: 1;

    :before {
      content: "";
      height: 0.1rem;
      background-color: ${({ theme }) => theme.colors.oppositeTheme};
      transition: inset-inline 0.3s;

      position: absolute;
      bottom: -0.25rem;
      inset-inline: 50%;
    }

    :hover {
      cursor: pointer;

      :before {
        inset-inline: 0;
      }
    }
  }

  .splide {
    .splide__slide {
      padding: 0.1rem;
      border-radius: 1rem;
      overflow: hidden;
      opacity: ${({ theme }) => (theme.title === "light" ? 0.8 : 0.5)};
      transition: opacity 0.3s;

      ::before {
        content: "";
        width: 200%;
        height: 50%;
        animation: ${rotate} 10s linear infinite;

        position: absolute;
        top: 25%;
        left: -50%;
      }

      :hover,
      &.is-active {
        opacity: 1;
      }

      &.is-active:before {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    .splide__arrow {
      width: 2.5rem;

      top: calc(50% - 1.25rem);

      svg {
        fill: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.25)};

        :hover {
          fill: ${({ theme }) => theme.colors.oppositeTheme};
        }
      }
    }

    .splide__pagination {
      @media screen and (max-width: 600px) {
        opacity: 0;
      }

      .splide__pagination__page {
        background-color: ${({ theme }) =>
          rgba(theme.colors.oppositeTheme, 0.25)};

        :hover {
          background-color: ${({ theme }) =>
            rgba(theme.colors.oppositeTheme, 0.5)};
        }

        &.is-active {
          background-color: ${({ theme }) => theme.colors.oppositeTheme};
        }
      }
    }
  }
`;
