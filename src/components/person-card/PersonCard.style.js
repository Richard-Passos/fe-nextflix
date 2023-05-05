/* Style */
import Link from "next/link";
import { rgba } from "polished";

/* Logic */
import styled from "styled-components";

export const Container = styled(Link)`
  width: min(35rem, 100%);
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.theme};
  font-size: 1.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.themeLighter};
  border-radius: 2rem;
  overflow: hidden;
  transition: color 0.3s;

  display: flex;

  .img {
    position: relative;

    flex: 0 0 auto;

    ::after {
      content: "";
      border-right: 0.1rem solid hsl(235, 30%, 35%);

      position: absolute;
      inset: 0;
    }
  }

  .text-info {
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    .name {
      font-size: 1.2em;
    }

    .job,
    .department {
      color: ${({ theme }) => rgba(theme.colors.text, 0.85)};
    }
  }

  :hover {
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  }
`;
