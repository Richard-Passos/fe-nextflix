/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const CarouselContainer = styled.div`
  max-width: 97vw;
  margin: 0 auto;

  .carousel {
    position: relative;
  }

  .carousel__slider-tray--horizontal {
    width: ${(props) =>
      `calc(${props.cardsCount} * (${props.cardWidth}px + ${props.cardGap}px))`} !important;
    height: ${({ cardHeight }) => `calc(${cardHeight}px + 4.5rem)`} !important;
    margin-left: 0.7rem;
    transition: 0.5s;

    display: flex;
    align-items: flex-end;
    gap: ${({ cardGap }) => `${cardGap}px`};
  }

  .carousel__slide,
  .carousel__inner-slide {
    width: ${({ cardWidth }) => `${cardWidth}px`} !important;
    padding: 0 !important;
  }

  .carousel-title {
    font-size: 1.6em;
    text-transform: capitalize;

    position: absolute;
    top: 1rem;
    left: calc(1% + 2rem);

    ::before {
      content: "";
      width: 0.2rem;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};

      position: absolute;
      top: 0%;
      left: -1rem;
    }
  }

  .btn-show-all {
    padding: 1rem 2rem;
    background-color: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.oppositeTheme};
    border-radius: 2rem;
    font-size: 1.2em;
    transition: 0.3s;

    position: absolute;
    top: 0;
    right: 1%;
    z-index: 1;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.themeLighter};
    }
  }
`;

export const ArrowsContainer = styled.div`
  .prev-arrow,
  .next-arrow {
    padding: 0;
    color: inherit;
    background-color: ${({ theme }) => rgba(theme.colors.theme, 0.5)};
    border: none;
    border-radius: 50%;
    transition: 0.3s ease-in;
    overflow: hidden;

    position: absolute;
    top: calc((100% - 5rem) / 2);
    z-index: 1;

    svg {
      background-color: ${({ theme }) => rgba(theme.colors.theme, 0.5)};
    }

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.5)};
    }
  }

  .prev-arrow {
    left: -50%;
  }
  .next-arrow {
    right: -50%;
  }

  ${CarouselContainer}:hover & {
    .prev-arrow {
      left: 1%;
    }

    .next-arrow {
      right: 1%;
    }
  }

  @media screen and (max-width: 768px) {
    .prev-arrow {
      left: 1%;
    }

    .next-arrow {
      right: 1%;
    }
  }
`;
