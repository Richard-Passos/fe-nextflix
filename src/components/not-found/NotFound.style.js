/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  .info {
    text-align: center;

    h2 {
      margin-top: -3.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      .alert {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    p {
      font-size: 2.5em;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-left: 1rem;
      }

      :first-of-type {
        margin-top: -1.5rem;
      }
    }
  }

  .go-home {
    padding: 1.2rem 2.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.4em;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 3rem 10.3rem
      ${({ theme }) => rgba(theme.colors.primaryLighter, 0.15)};
    transition: 0.3s;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.oppositeTheme};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
