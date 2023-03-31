/* Components */
import { MediaContainer, ButtonsContainer } from "./LatestMedia.style";
import { ArrowRightShort, ArrowLeftShort } from "@styled-icons/bootstrap";

/* Logic */
import { useEffect, useRef, useState } from "react";

export default function LatestMedia({ initialMedias }) {
  const lastMediaIndex = 4;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [switchMedia, setSwitchMedia] = useState({ boolean: false, to: "" });

  const mediaContainer = useRef();

  useEffect(() => {
    if (mediaContainer.current && switchMedia.boolean) {
      mediaContainer.current.classList.add("switching-img");

      setTimeout(() => {
        mediaContainer.current.classList.remove("switching-img");

        setCurrentMediaIndex((prevState) =>
          switchMedia.to === "next"
            ? prevState === lastMediaIndex
              ? 0
              : ++prevState
            : prevState === 0
            ? lastMediaIndex
            : --prevState
        );
      }, 500);
    }
  }, [switchMedia]);

  return (
    <MediaContainer
      ref={mediaContainer}
      phoneUrl={initialMedias[currentMediaIndex].poster_path}
      desktopUrl={initialMedias[currentMediaIndex].backdrop_path}
    >
      <ButtonsContainer>
        <button
          className="prev-btn"
          onClick={() => setSwitchMedia({ boolean: true, to: "prev" })}
        ></button>
        <ArrowLeftShort className="prev-btn" />

        <button
          className="next-btn"
          onClick={() => setSwitchMedia({ boolean: true, to: "next" })}
        ></button>
        <ArrowRightShort className="next-btn" />
      </ButtonsContainer>
    </MediaContainer>
  );
}
