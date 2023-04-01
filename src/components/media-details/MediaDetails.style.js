/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const DetailsContainer = styled.section`
  height: 51rem;
  margin-top: -5rem;
  padding: 0 9rem;
  isolation: isolate;

  background: no-repeat left calc((50vw - 17rem) - 34rem) top calc(-8vh) / cover
    url(${({ backgroundImage }) => backgroundImage});

  position: relative;

  display: flex;
  align-items: center;

  .background-gradient {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => rgba(theme.colors.dark, 1)} calc((50vw - 17rem) - 34rem),
      ${({ theme }) => rgba(theme.colors.dark, 0.5)} 50%,
      ${({ theme }) => rgba(theme.colors.dark, 0.5)} 100%
    );

    position: absolute;
    inset: 0;
    z-index: -1;
  }

  .poster-img {
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .modal-video {
    width: clamp(0rem, 90vw, 81.6rem);
    height: calc(clamp(0rem, 90vw, 81.6rem) / 2);
    border-radius: 1rem !important;

    position: absolute;
    inset: calc((100% - clamp(0rem, 90vw, 81.6rem) / 2) / 2)
      calc((100% - clamp(0rem, 90vw, 81.6rem)) / 2);

    & iframe {
      width: 100% !important;
      height: 100% !important;
      border-radius: 1rem !important;

      position: absolute;
    }

    .modal-video-movie-wrap {
      padding: 0 !important;
    }

    .modal-video-close-btn {
      width: 5rem;
      height: 5rem;
      background-color: transparent;
      border: none;
      border-radius: 1rem;

      position: absolute;
      top: calc(-51rem * 0.1);
      right: 0;

      :before,
      :after {
        content: "";
        width: 0.25rem;
        height: 3rem;
        background-color: ${({ theme }) => theme.colors.light};

        position: absolute;
        top: calc((100% - 3rem) / 2);
        left: calc((100% - 0.25rem) / 2);
      }

      :before {
        transform: rotate(-45deg);
      }
      :after {
        transform: rotate(45deg);
      }
    }
  }
`;

export const Details = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div {
    width: 100%;
    padding: 2.5rem;
    background-color: red;
  }
`;
