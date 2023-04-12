/* Logic */
import styled from "styled-components";

export const LayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: rgba(0, 0, 0, 0.24) 0 0.3rem 0.8rem;
  overflow-x: hidden;
  isolation: isolate;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;

  .carousels {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .skeleton-container {
    max-width: 80%;
    min-height: 80vh;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem 4rem;
  }
`;
