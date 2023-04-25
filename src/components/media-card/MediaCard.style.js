/* Style */
import { lighten, rgba, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 17.5rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.theme};
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.3s;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  :hover {
    color: ${({ theme }) =>
      theme.title === "light"
        ? lighten(0.5, theme.colors.text)
        : shade(0.5, theme.colors.text)};
  }

  .card-title {
    padding: 0 1.5rem;
    font-size: 1.4em;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .container {
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  small {
    font-size: 1.2em;
  }

  .icon-favorite-container {
    width: 6rem;
    margin-right: -1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transition: 0.3s;

      :hover {
        cursor: pointer;
        color: ${() => rgba("hsl(341, 100%, 50%)", 0.5)};
      }

      &.fav {
        color: hsl(341, 100%, 50%);
      }
    }
  }
`;
