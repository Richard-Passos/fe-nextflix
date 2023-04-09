/* Components */
import { InitialMediaContainer, ButtonsContainer } from "./InitialMedia.style";
import { ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";
import Link from "next/link";

/* Logic */
import { useEffect, useState } from "react";

export default function InitialMedia({ initialMedias }) {
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
    <InitialMediaContainer
      phoneUrl={initialMedias[currentMediaIndex].poster_path}
      desktopUrl={initialMedias[currentMediaIndex].backdrop_path}
    >
      <Link
        className="details-link"
        href={`/details/${
          initialMedias[currentMediaIndex].release_date ? "movie" : "tv"
        }/${initialMedias[currentMediaIndex].id}`}
      ></Link>

      <ButtonsContainer>
        <button
          className="prev-btn"
          onClick={() =>
            setCurrentMediaIndex((prevState) =>
              prevState === 0 ? lastMediaIndex : --prevState
            )
          }
        ></button>
        <ChevronLeft className="prev-btn" />

        <button
          className="next-btn"
          onClick={() =>
            setCurrentMediaIndex((prevState) =>
              prevState === lastMediaIndex ? 0 : ++prevState
            )
          }
        ></button>
        <ChevronRight className="next-btn" />
      </ButtonsContainer>
    </InitialMediaContainer>
  );
}
