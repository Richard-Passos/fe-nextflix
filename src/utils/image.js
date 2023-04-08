/* Logic */
import styled from "styled-components";
import NextImage from "next/image";

export const Image = styled(NextImage)`
  width: ${({ width }) => width / 10}rem;
  height: ${({ height }) => height / 10}rem;
`;
