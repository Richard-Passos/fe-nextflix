/* Style */
import { rgba } from "polished";
import { pulse } from "@/utils";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .poster-img {
    max-width: 100%;
    border-radius: 2rem;

    flex: 0 0 auto;

    :after {
      content: "";
      border: 0.1rem solid hsl(235, 30%, 35%);

      position: absolute;
      inset: 0;
    }
  }

  .text-details {
    max-width: min((100% - 31.5rem), 95rem);

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .title {
      height: 4.5rem;
      margin-bottom: -2.5rem;
      font-size: 3em;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .fav-icon {
      margin-left: 0.5rem;
      transition: 0.3s;

      :hover {
        cursor: pointer;
        color: ${() => rgba("hsl(341, 100%, 50%)", 0.5)};
      }

      &.is-fav {
        color: hsl(341, 100%, 50%);
        fill: hsl(341, 100%, 50%);

        animation: ${pulse} 1s;
      }
    }
  }

  .trailer-container {
    .trailer-btn {
      padding: 1.2rem 2.4rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 2rem;
      box-shadow: 0 0.8rem 2.4rem
        ${({ theme }) => rgba(theme.colors.primary, 0.25)};
      overflow: hidden;
      isolation: isolate;

      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      svg {
        fill: ${({ theme }) => theme.colors.light};
      }

      ::before {
        content: "";
        width: 20rem;
        height: 20rem;
        background-color: ${({ theme }) =>
          rgba(theme.colors.primaryLighter, 0.5)};
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.5s;

        position: absolute;
        z-index: -1;
      }

      :hover {
        cursor: pointer;

        ::before {
          transform: scale(1);
        }
      }
    }

    .not-found {
      color: ${({ theme }) => rgba(theme.colors.light, 0.5)};
      font-size: 1.4em;
    }
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;
    align-items: flex-start;

    .text-details {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 426px) {
    align-items: center;

    .trailer-container,
    .rating {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const DFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  h4 {
    font-size: 1.2em;
  }

  p {
    line-height: normal;
  }

  [role="separator"] {
    height: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.ligth};
  }

  &.small {
    h4 {
      font-size: 1em;
    }

    p {
      text-transform: lowercase;
    }
  }

  &.column {
    flex-direction: column;

    p {
      text-indent: 0.5rem;
    }
  }

  :not(.column) {
    align-items: center;
  }
`;
