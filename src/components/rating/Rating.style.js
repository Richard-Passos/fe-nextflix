/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.25rem;

    .fill {
      color: #f1d045;
      fill: #f1d045;
    }
  }

  p {
    margin-top: 0.25rem;
  }
`;
