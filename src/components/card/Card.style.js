/* Logic */
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  height: 30rem;
  padding-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.theme};
  border: 0.1rem solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  overflow: hidden;
  transition: 0.3s;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  :hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;

    img {
      scale: 1.1;
    }
  }

  .image-container {
    width: 20rem;
    height: 25rem;
    overflow: hidden;
  }

  .hide-img {
    position: absolute;
    z-index: -1;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon-favorite-container {
    width: 6rem;
    padding-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-favorite {
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.3s;

    :hover {
      color: hsl(341, 100%, 50%);
    }
  }

  img {
    transition: 0.5s;
  }

  p {
    padding: 0 1.5rem;
    font-size: 1.4em;
    font-weight: bold;
    line-height: 2rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  small {
    padding: 0 1.5rem;
    font-size: 1.2em;
  }
`;
