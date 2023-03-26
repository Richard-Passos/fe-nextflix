/* Logic */
import styled from "styled-components";
import { lighten, shade } from "polished";

export const MainContainer = styled.section`
  width: auto;
  max-width: 80%;
  min-height: 85vh;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 4rem;

  .none-media-found {
    padding-top: 1rem;
    font-size: 2em;
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 100%;
  padding: 1rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  /* .prev-btn,
  .next-btn {
    position: absolute;

    &.prev-btn {
      left: 0;
    }
    &.next-btn {
      right: 0;
    }
  } */

  div {
    max-width: 80%;
    padding: 0 1rem;
    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.themeLighter};
    color: inherit;
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    font-size: 1.2em;
    font-weight: bold;
    overflow: hidden;
    transition: 0.3s;

    flex: 0 0 auto;
    :hover {
      cursor: pointer;
      border-color: ${({ theme }) => theme.colors.oppositeTheme};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.theme};
      color: ${({ theme }) =>
        theme.title === "light"
          ? lighten(0.5, theme.colors.text)
          : shade(0.5, theme.colors.text)};

      :hover {
        cursor: not-allowed;
        border-color: transparent;
      }
    }
  }
`;
