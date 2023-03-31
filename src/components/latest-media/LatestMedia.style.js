/* Logic */
import styled from "styled-components";

export const MediaContainer = styled.section`
  width: 90%;
  height: 150vw;
  max-height: 100vh;
  margin: clamp(-20rem, calc(-7vh - 10rem), -15rem) auto -8rem;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  background: no-repeat center / cover
    url(https://image.tmdb.org/t/p/original${({ phoneUrl }) => phoneUrl});
  /* filter: saturate(1.5); */

  @media screen and (min-width: 600px) {
    width: 80%;
    max-width: 140rem;
    min-height: 70rem;
    height: 70rem;

    background-image: url(https://image.tmdb.org/t/p/original${({
      desktopUrl,
    }) => desktopUrl});
  }

  :after {
    content: "";
    width: 100%;
    height: 147vw;
    max-height: 97vh;

    background: no-repeat center / cover
      url(https://image.tmdb.org/t/p/original${({ phoneUrl }) => phoneUrl});
    /* filter: saturate(2); */

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (min-width: 600px) {
      min-height: 67rem;
      height: 67rem;

      background-image: url(https://image.tmdb.org/t/p/original${({
        desktopUrl,
      }) => desktopUrl});
    }
  }
`;
