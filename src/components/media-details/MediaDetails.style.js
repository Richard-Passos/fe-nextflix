/* Style */
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  margin-top: -8rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  .go-back {
    background: none;
    border: none;
    transition: color 0.3s;

    position: fixed;
    top: 1.3rem;
    z-index: 11;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }
`;

export const Main = styled.div`
  min-height: 52.5rem;
  padding: 5rem clamp(2.5rem, 3vw, 5rem);

  background: no-repeat left calc(51vw - 51rem) center / cover fixed
    url(${({ bgImage }) => bgImage});

  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;

  .bg-gradient {
    background-image: linear-gradient(
      to right,
      ${rgba(`hsl(235, 30%, 20%)`, 1)} calc(51vw - 51rem),
      ${rgba(`hsl(235, 30%, 20%)`, 0.84)} 50%
    );

    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media screen and (max-width: 940px) {
    .bg-gradient:after {
      content: "";
      background-color: ${rgba(`hsl(235, 30%, 20%)`, 0.1)};
      backdrop-filter: blur(1rem);
      box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.08);

      position: absolute;
      inset: 50% 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding-inline: clamp(1rem, 3.5vw, 3rem);
  }
`;
