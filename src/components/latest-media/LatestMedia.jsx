/* Components */
import { MediaContainer, ButtonsContainer } from "./LatestMedia.style";
import { ArrowRightShort, ArrowLeftShort } from "@styled-icons/bootstrap";

/* Logic */
import { useEffect, useRef, useState } from "react";

export default function LatestMedia({ initialMedias }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const lastMediaIndex = 4;

  const mediaContainer = useRef();
  useEffect(() => {
    if (mediaContainer.current) {
      mediaContainer.current.classList.add("switching-img");

      setTimeout(
        () => mediaContainer.current.classList.remove("switching-img"),
        500
      );
    }
  }, [currentMediaIndex]);

  return (
    <MediaContainer
      ref={mediaContainer}
      phoneUrl={initialMedias[currentMediaIndex].poster_path}
      desktopUrl={initialMedias[currentMediaIndex].backdrop_path}
    >
      <ButtonsContainer>
        <button
          className="prev-btn"
          onClick={() =>
            setTimeout(
              () =>
                setCurrentMediaIndex((prevState) =>
                  prevState === 0 ? lastMediaIndex : --prevState
                ),
              500
            )
          }
        ></button>
        <ArrowLeftShort className="prev-btn" />

        <button
          className="next-btn"
          onClick={() =>
            setTimeout(
              () =>
                setCurrentMediaIndex((prevState) =>
                  prevState === lastMediaIndex ? 0 : ++prevState
                ),
              500
            )
          }
        ></button>
        <ArrowRightShort className="next-btn" />
      </ButtonsContainer>
    </MediaContainer>
  );
}
