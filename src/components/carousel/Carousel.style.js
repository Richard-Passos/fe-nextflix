/* Style */
import { rgba } from "polished";

/* Logic */
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;

  .splide {
    .splide__slide {
      padding: 0.1rem;
      border-radius: 1rem;
      overflow: hidden;
      opacity: 0.5;
      transition: 0.3s;

      ::before {
        content: "";
        width: 200%;
        height: 50%;
        border-radius: 1rem;
        background-color: transparent;
        transform: rotate(45deg);

        position: absolute;
        top: 25%;
        left: -50%;
        z-index: -1;
      }

      &.is-active,
      :hover {
        opacity: 1;

        :before {
          background-color: ${({ theme }) => theme.colors.primary};

          animation: ${rotate} 5s ease-out infinite;
        }
      }
    }

    .splide__arrow {
      top: calc(50% - 1.25rem);

      svg {
        fill: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
      }

      :hover {
        svg {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .splide__pagination {
      bottom: -1rem;

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

      @media screen and (min-width: 540px) {
        bottom: 0;
      }
    }
  }

  > .title {
    font-size: 1.4em;
    text-transform: capitalize;

    position: absolute;
    top: -0.5rem;
    left: 3rem;

    ::before {
      content: "";
      width: 0.2rem;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};

      position: absolute;
      top: 0;
      left: -1rem;
    }
  }

  .btn-show-all {
    font-size: 1.4em;
    font-weight: bold;

    position: absolute;
    top: -0.5rem;
    right: 3rem;
    z-index: 10;

    :before {
      content: "";
      height: 0.1rem;
      background-color: ${({ theme }) => theme.colors.text};
      transition: 0.3s;

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
`;
