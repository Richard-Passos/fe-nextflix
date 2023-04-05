/* Style */
import { lighten, rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const DetailsContainer = styled.section`
  height: 51rem;
  margin-top: -5rem;
  padding: 0 9rem;
  isolation: isolate;

  background: no-repeat left calc((51vw - 17rem) - 34rem) top calc(-8vh) / cover
    fixed url(${({ backgroundImage }) => backgroundImage});

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

  .poster-img {
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: center;
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

export const Details = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  gap: 4rem;

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

      svg {
        transition: 0.3s;
      }

      :hover {
        cursor: pointer;
        svg {
          color: hsl(341, 100%, 50%);
        }
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
    max-width: 100%;

    @media screen and (max-width: 500px) {
      align-self: center;
    }
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    .text-details {
      min-width: initial;
    }
  }

  @media screen and (max-width: 375.9px) {
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
