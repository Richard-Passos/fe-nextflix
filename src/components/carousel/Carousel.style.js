/* Logic */
import styled from "styled-components";
import { rgba } from "polished";

export const CarouselContainer = styled.div`
  .carousel {
    overflow: hidden;

    position: relative;
  }

  .carousel__slider-tray--horizontal {
    width: calc(20 * (25rem + 2rem)) !important;
    height: 57rem !important;
    margin-left: 1rem;
    transition: 0.5s;

    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .carousel__slide {
    width: 25rem !important;
    padding: 0 !important;
  }

  .btn-show-all {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.theme};
    border: 0.1rem solid ${({ theme }) => theme.colors.opossiteTheme};
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
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
  }

  .carousel__back-button,
  .carousel__next-button {
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => rgba(theme.colors.theme, 0.5)};
    border-radius: 50%;
    transition: 0.3s;

    position: absolute;
    top: 45%;
    z-index: 1;

    :hover {
      cursor: pointer;
    }
  }
  svg {
    pointer-events: none;
  }

  .carousel__back-button {
    left: 0.5%;
  }
  .carousel__next-button {
    right: 0.5%;
  }
`;
