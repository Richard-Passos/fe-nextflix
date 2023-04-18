/* Style */
import { lighten, rgba, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 17.5rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.theme};
  border: 0.1rem solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0 1.3rem 2.7rem -0.5rem,
    rgba(0, 0, 0, 0.3) 0 0.8rem 1.6rem -0.8rem;
  overflow: hidden;
  transition: 0.3s;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .image-container {
    width: 17.5rem;
    height: 23rem;
    overflow: hidden;

    position: relative;

    .details-p {
      font-size: 1.4em;
      transition: 0.5s;
      opacity: 0;

      position: absolute;
      top: calc((100% - 7.5rem) / 2);
      left: calc((100% - 7.5rem) / 2);
      z-index: 2;
    }

    .details-btn {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};
      border-radius: 2rem;
      font-size: 1.6em;
      transition: 0.3s;
      overflow: hidden;

      position: absolute;
      inset: 100% 5rem;
      z-index: 2;

      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          rgba(theme.colors.primaryLighter, 0.2)};
      }
    }

    :before {
      content: "";
      width: 100%;
      height: 0;
      transition: 0.3s;

      background-color: ${({ theme }) => rgba(theme.colors.themeDarker, 0.9)};

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    :hover {
      :before {
        height: 100%;
      }

      .details-p {
        opacity: 1;
      }

      .details-btn {
        inset: 44% 15% 43%;
      }
    }
  }

  .card-title {
    padding: 0 1.5rem;
    font-size: 1.4em;
    transition: 0.3s;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    :hover {
      color: ${({ theme }) =>
        theme.title === "light"
          ? lighten(0.25, theme.colors.text)
          : shade(0.25, theme.colors.text)};
    }
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
    }

    .fav {
      color: hsl(341, 100%, 50%) !important;
    }
  }
`;
