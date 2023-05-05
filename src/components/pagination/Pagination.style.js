/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  .path {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: uppercase;

    position: absolute;
    top: -4.7rem;
    left: 10%;
  }
`;

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 30rem);
  padding: 0 clamp(1.5rem, 3vw, 5rem);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 1.5rem;

  .none-media-found {
    font-size: 2em;
    text-align: center;
    line-height: normal;
  }
`;
