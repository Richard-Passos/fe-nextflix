/* Style */
import NextImage from "next/image";

/* Logic */
import styled, { keyframes } from "styled-components";

const loader = keyframes`
   from {
    background-position: -100% 0;
  }
  to {
    background-position: 100% 0;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => width / 10}rem;
  height: ${({ height }) => height / 10}rem;
  overflow: hidden;
  isolation: isolate;

  position: relative;

  ::before,
  ::after {
    content: "";

    position: absolute;
    inset: 0;
    z-index: 1;
  }

  ::before {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.themeDarker},
      ${({ theme }) => theme.colors.theme},
      ${({ theme }) => theme.colors.themeDarker}
    );
    background-size: 200%;
    opacity: ${({ isImageLoad }) => (isImageLoad ? 0 : 1)};
    animation: ${loader} 1s infinite reverse;
  }

  ::after {
    content: "";
    border-bottom: 0.1rem solid hsl(235, 30%, 35%);

    z-index: -1;
  }
`;

export const MyImage = styled(NextImage)`
  width: ${({ width }) => width / 10}rem;
  height: ${({ height }) => height / 10}rem;
`;
