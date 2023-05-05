/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: min(72rem, 98vw);
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > .title {
    margin-left: 6%;
    font-size: 1.4em;
    text-transform: capitalize;

    position: relative;

    ::before {
      content: "";
      height: 100%;
      border-inline: 0.1rem solid ${({ theme }) => theme.colors.primary};

      position: absolute;
      top: -0.1rem;
      left: -1rem;
    }
  }

  .splide {
    margin-top: -1.5rem;
    padding-inline: 0;

    .splide__slide {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      @media screen and (min-width: 735px) {
        width: 72rem !important;
        height: 15rem !important;
      }
    }

    .splide__arrow {
      margin-block: -1.25rem;

      svg {
        fill: ${({ theme }) => rgba(theme.colors.oppositeTheme, 0.25)};

        :hover {
          fill: ${({ theme }) => theme.colors.oppositeTheme};
        }
      }
    }
  }
`;
