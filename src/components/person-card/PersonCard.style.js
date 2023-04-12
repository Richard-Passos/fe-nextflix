/* Style */
import Link from "next/link";
import { lighten, shade } from "polished";

/* Logic */
import styled from "styled-components";

export const CardContainer = styled(Link)`
  width: 10rem;
  height: 15rem;
  overflow: hidden;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .image-container {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      margin-top: -1.5rem;
      scale: 0.8;
    }
  }

  h4,
  p {
    margin: 0 auto;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h4 {
    font-size: 1.2em;
  }

  :hover {
    color: ${({ theme }) =>
      theme.title === "light"
        ? lighten(0.5, theme.colors.text)
        : shade(0.5, theme.colors.text)};
  }
`;
