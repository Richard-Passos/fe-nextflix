/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  gap: 5rem 0;

  .d-flex {
    display: flex;
    justify-content: space-evenly;
    gap: 5rem 0;

    @media screen and (max-width: 1130px) {
      flex-wrap: wrap;
    }
  }

  .text-container {
    padding: 4rem 1rem;
    background-color: ${({ theme }) => theme.colors.theme};
    border: 0.2rem solid ${({ theme }) => theme.colors.themeLighter};
    box-shadow: 0 3rem 10.3rem rgba(0, 0, 0, 0.1);

    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2.5rem 5rem;

    @media screen and (min-width: 1130px) {
      max-width: 45rem;
      padding-inline: 4rem;
      border-radius: 4rem;

      gap: 2.5rem clamp(2.5rem, 2.5vw, 5rem);
    }
  }
`;

export const Column = styled.div`
  font-size: 1.4rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h4 {
    font-size: 1.2em;
  }

  p {
    color: ${({ theme }) => rgba(theme.colors.text, 0.85)};
  }

  a:hover {
    text-decoration: underline;
  }

  div {
    text-align: center;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    [role="separator"] {
      height: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.oppositeTheme};
    }
  }

  :last-child {
    min-width: 100%;
  }
`;
