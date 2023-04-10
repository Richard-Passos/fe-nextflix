/* Style */
import { lighten, rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const DetailsContainer = styled.section`
  margin-top: -10rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const MainDetailsContainer = styled.div`
  height: 51rem;
  padding: 0 9rem;
  isolation: isolate;

  background: no-repeat left calc((51vw - 17rem) - 34rem) center / cover fixed
    url(${({ backgroundImage }) => backgroundImage});

  position: relative;

  display: flex;
  align-items: center;

  .background-gradient {
    background-image: linear-gradient(
      to right,
      ${rgba(`hsl(235, 30%, 20%)`, 1)} calc((50vw - 17rem) - 34rem),
      ${rgba(`hsl(235, 30%, 20%)`, 0.84)} 50%,
      ${rgba(`hsl(235, 30%, 20%)`, 0.84)} 100%
    );

    position: absolute;
    inset: 0;
    z-index: -1;
  }

  .modal-video {
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 1rem 0 1rem 1rem !important;

    position: absolute;
    inset: calc((100% - clamp(0rem, 90vw, 100rem) / 2) / 2)
      calc((100% - clamp(0rem, 90vw, 100rem)) / 2);
    z-index: 100;

    & iframe {
      width: 100% !important;
      height: 100% !important;
      border-radius: 1rem 0 1rem 1rem !important;

      position: absolute;
    }

    .modal-video-movie-wrap {
      padding: 0 !important;
    }

    .modal-video-close-btn {
      width: 10rem;
      height: 3.5rem;
      background-color: ${({ theme }) => theme.colors.dark};
      border: none;
      border-radius: 1rem 1rem 0 0;
      transition: 0.3s;

      position: absolute;
      top: -3.5rem;
      right: 0;

      :before,
      :after {
        content: "";
        width: 0.25rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.light};

        position: absolute;
        top: calc((100% - 2rem) / 2);
        left: calc((100% - 0.25rem) / 2);
      }

      :before {
        transform: rotate(-45deg);
      }
      :after {
        transform: rotate(45deg);
      }

      :hover {
        cursor: pointer;
        background-color: ${({ theme }) => lighten(0.1, theme.colors.dark)};
      }
    }
  }

  @media screen and (max-width: 1100px) {
    height: initial;
    padding: 4.5rem 9rem;

    .background-gradient:after {
      content: "";
      background-color: ${rgba(`hsl(235, 30%, 20%)`, 1)};

      position: absolute;
      inset: 50% 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3.5rem clamp(1rem, 3.5vw, 3rem);
  }
`;

export const MainDetails = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  gap: 4rem;

  .poster-container {
    width: 30rem;
    max-width: 100%;
    border-radius: 2rem;
    overflow: hidden;

    flex: 1 0 auto;

    @media screen and (max-width: 500px) {
      align-self: center;
    }
  }

  .poster-img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .text-details {
    min-width: 58rem;
  }

  .title {
    margin-bottom: -1.5rem;
    font-size: 3em;
  }

  .small-details-list {
    padding: 0 2rem;
    list-style: disc outside;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2.5rem;
  }

  .container-flex {
    display: flex;
    gap: 0.5rem;

    &.flex-column {
      flex-direction: column;
    }

    .creators-name:first-of-type {
      padding-left: 0.5rem;
    }

    div {
      display: flex;
      gap: 0.5rem;
    }
  }

  .rating-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    .favorite-btn-container {
      width: 4rem;
      height: 4rem;
      background-color: hsl(235, 30%, 20%);
      border-radius: 50%;

      position: relative;

      :hover {
        cursor: pointer;
      }

      svg {
        transition: 0.3s;
      }

      .fav {
        color: hsl(341, 100%, 50%);
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .overview-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .overview-title {
      font-size: 1.5em;
    }

    p {
      max-height: 15rem;
      line-height: normal;
      text-indent: 0.5rem;
      overflow-y: auto;
    }
  }

  .trailer-btn {
    padding: 0.8rem 1.6rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 2rem;
    font-weight: bold;
    overflow: hidden;
    isolation: isolate;
    transition: 0.3s;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    ::before {
      content: "";
      width: 0;
      height: 100%;
      background-color: ${({ theme }) =>
        rgba(theme.colors.primaryLighter, 0.1)};
      transition: 0.3s;

      position: absolute;
      right: 0;
      z-index: -1;
    }

    :hover {
      cursor: pointer;

      ::before {
        width: 100%;

        right: initial;
        left: 0;
      }
    }
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  img {
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    .text-details {
      min-width: initial;
    }
  }

  @media screen and (max-width: 376px) {
    font-size: clamp(1rem, 3.5vw, 1.4rem);

    .title,
    .trailer-container {
      text-align: center;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 0;

  .cast-container {
    overflow-x: hidden;
    position: relative;

    grid-column: span 3;

    ::before {
      content: "";
      width: 100%;
      height: 100%;
      box-shadow: ${({ theme }) => theme.colors.themeDarker} -5rem 0 2rem -2.5rem
        inset;
      pointer-events: none;

      position: absolute;
      z-index: 1;
    }
  }

  .details-container {
    padding: 1rem 2.4rem;
    overflow-x: hidden;

    grid-column: 4;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 0.8rem;

      h3 {
        font-size: 1.6em;
      }

      p,
      a {
        padding-left: 0.5rem;
        font-size: 1.4em;
      }

      a {
        color: ${({ theme }) => theme.colors.primary};

        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  .similar-movies {
    grid-column: span 4;
  }

  @media screen and (max-width: 768px) {
    .cast-container,
    .details-container {
      grid-column: span 5;
    }
  }
`;

export const SkelentonsContainer = styled.section`
  margin-top: -10rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 2.4rem;
  }
`;
