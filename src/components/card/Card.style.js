/* Style */
import { lighten, rgba, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  height: 30rem;
  padding-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.theme};
  border: 0.1rem solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  overflow: hidden;
  transition: 0.3s;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;

    .image-container {
      :after {
        height: 100%;
      }

      .details-p {
        opacity: 1;
      }

      .details-btn {
        inset: 43% 21%;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon-favorite-container {
    width: 6rem;
    padding-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-favorite {
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      color: hsl(341, 100%, 50%);
    }
  }

  .image-container {
    width: 20rem;
    height: 25rem;
    overflow: hidden;

    position: relative;

    :after {
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
      inset: 150% 10rem;
      z-index: 2;

      :hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          rgba(theme.colors.primaryLighter, 0.2)};
      }
    }
  }

  img {
    transition: 0.5s;
  }

  .card-title {
    padding: 0 1.5rem;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 2rem;
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

  small {
    padding: 0 1.5rem;
    font-size: 1.2em;
  }
`;
