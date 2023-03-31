/* Components */
import { MediaContainer, ButtonsContainer } from "./LatestMedia.style";
import { ArrowRightShort, ArrowLeftShort } from "@styled-icons/bootstrap";

/* Logic */
import { useEffect, useState } from "react";

export default function LatestMedia({ initialMedias }) {
  const lastMediaIndex = 4;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentMediaIndex((prevState) =>
          prevState === lastMediaIndex ? 0 : ++prevState
        ),
      10000
    ); /* Switch image each 10s */

    return () => clearInterval(interval);
  }, []);

  return (
    <MediaContainer
      phoneUrl={initialMedias[currentMediaIndex].poster_path}
      desktopUrl={initialMedias[currentMediaIndex].backdrop_path}
    >
      <ButtonsContainer>
        <button
          className="prev-btn"
          onClick={() =>
            setCurrentMediaIndex((prevState) =>
              prevState === 0 ? lastMediaIndex : --prevState
            )
          }
        ></button>
        <ArrowLeftShort className="prev-btn" />

        <button
          className="next-btn"
          onClick={() =>
            setCurrentMediaIndex((prevState) =>
              prevState === lastMediaIndex ? 0 : ++prevState
            )
          }
        ></button>
        <ArrowRightShort className="next-btn" />
      </ButtonsContainer>
    </MediaContainer>
  );
}
