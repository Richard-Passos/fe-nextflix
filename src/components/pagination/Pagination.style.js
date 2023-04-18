/* Logic */
import styled from "styled-components";

export const MainContainer = styled.section`
  width: 90%;
  min-height: 50vh;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  .none-media-found {
    padding-top: 1rem;
    font-size: 2em;
    text-align: center;
    line-height: normal;
  }
`;
