/* Logic */
import styled from "styled-components";
import { rgba } from "polished";

export const CarouselContainer = styled.div`
  .carousel {
    position: relative;
  }

  .carousel__slider-tray--horizontal {
    width: calc(20 * (20rem + 2rem)) !important;
    height: 34.5rem !important;
    margin: 0 0 -2rem 1rem;
    transition: 0.5s;

    display: flex;
    align-items: flex-end;
    gap: 2rem;
  }

  .carousel__slide {
    width: 25rem !important;
    padding: 0 !important;
  }

  .carousel-title {
    font-size: 1.6em;
    text-transform: capitalize;

    position: absolute;
    top: 1rem;
    left: 2%;

    ::before {
      content: "";
      width: 0.2rem;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};

      position: absolute;
      top: 0%;
      left: -4%;
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
    z-index: 10;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.themeLighter};
    }
  }
`;

export const ButtonsContainer = styled.div`
  .carousel__back-button,
  .carousel__next-button {
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

  .carousel__back-button {
    left: -50%;
  }
  .carousel__next-button {
    right: -50%;
  }

  ${CarouselContainer}:hover & {
    .carousel__back-button {
      left: 1%;
    }

    .carousel__next-button {
      right: 1%;
    }
  }
`;
