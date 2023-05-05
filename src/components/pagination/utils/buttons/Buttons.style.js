/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  --gap: 1rem;

  width: min(45rem, 100vw - 1.5rem);
  margin: 3.3rem auto 0;
  font-size: 1.4rem;

  display: flex;
  justify-content: space-between;
  gap: var(--gap);

  button {
    padding: 0;
    background-color: transparent;
    font-weight: bold;
    border: none;
    transition: transform 0.3s;

    a {
      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.arrow-left,
    &.number,
    &.arrow-right {
      transition: transform 0.3s;
    }

    :hover {
      cursor: pointer;

      &.arrow-left {
        transform: translateX(-0.5rem);
      }

      &.number {
        transform: translateY(-0.5rem);
      }

      &.arrow-right {
        transform: translateX(0.5rem);
      }
    }

    :disabled {
      color: ${({ theme }) => rgba(theme.colors.text, 0.25)};
      pointer-events: none;
    }
  }

  div {
    display: flex;
    gap: var(--gap);
  }
`;
