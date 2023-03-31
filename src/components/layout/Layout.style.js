/* Logic */
import styled from "styled-components";

export const LayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  color: ${({ theme }) => theme.colors.text};
  isolation: isolate;

  display: flex;
  flex-direction: column;
  gap: 10rem;

  .carousels {
    display: flex;
    flex-direction: column;
    gap: 5rem;
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
