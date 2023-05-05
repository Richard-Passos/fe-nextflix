/* Logic */
import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
  isolation: isolate;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8rem;

  .carousels {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;
