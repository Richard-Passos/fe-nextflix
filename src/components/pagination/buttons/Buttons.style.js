/* Style */
import { lighten, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  width: min(71.76rem, 100vw - 3rem);
  margin: 0 auto;
  padding-top: 3rem;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  button {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.themeLighter};
    color: inherit;
    font-size: 1.2em;
    font-weight: bold;
    border: 0.1rem solid transparent;
    border-radius: 1rem;
    transition: 0.3s;

    a {
      width: 5rem;
      height: 3.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    :hover {
      cursor: pointer;
      border-color: ${({ theme }) => theme.colors.oppositeTheme};
    }
  }

  button:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.theme};
    color: ${({ theme }) =>
      theme.title === "light"
        ? lighten(0.5, theme.colors.text)
        : shade(0.5, theme.colors.text)};
  }

  .Wrapper {
    width: 100%;
    overflow: hidden;

    > div {
      display: flex;
      gap: 1.5rem;

      @media screen and (max-width: 747.6px) {
        position: relative;
        left: calc(
          (
              100% - 58.44rem +
                (
                  ${({ maxBtns, currPage }) =>
                    13.3 * currPage > 5
                      ? 0
                      : Math.ceil(maxBtns / 2) - currPage}rem
                )
            ) / 2
        );
      }
    }
  }
`;
