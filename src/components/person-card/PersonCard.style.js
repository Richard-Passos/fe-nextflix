/* Style */
import { lighten, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 10rem;
  height: 15rem;
  padding-bottom: 1.5rem;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  overflow: hidden;
  transition: 0.3s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    .image-container {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        margin-top: -1rem;
      }
    }

    h4,
    h5 {
      margin: 0 auto;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    h4 {
      font-size: 1.2em;
      transition: 0.3s;

      :hover {
        color: ${({ theme }) =>
          theme.title === "light"
            ? lighten(0.25, theme.colors.text)
            : shade(0.25, theme.colors.text)};
      }
    }

    h5 {
      font-size: 1em;
      font-weight: 400;
    }
  }
`;
