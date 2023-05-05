/* Style */
import { rgba } from "polished";
import { pulse } from "../../utils";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: 17.5rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.theme};
  font-size: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .title {
    padding: 0 1.5rem;
    font-size: 1.4em;
    transition: color 0.3s;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    :hover {
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }

  > div {
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  small {
    font-size: 1.2em;
  }

  svg {
    --color: hsl(341, 100%, 50%);

    margin-right: 0.5rem;

    :hover {
      cursor: pointer;
      color: var(--color);
      transition: color 0.3s;
    }

    &.fav {
      color: var(--color);
      fill: var(--color);
      transition: fill 0.3s;

      animation: ${pulse} 1s;
    }
  }

  :hover {
    transform: translate(-0.15rem, -0.3rem);
  }
`;
