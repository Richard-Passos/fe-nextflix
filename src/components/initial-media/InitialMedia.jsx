/* Components */
import { InitialMediaContainer, ArrowsContainer } from "./InitialMedia.style";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@styled-icons/boxicons-regular";

/* Logic */
import { useEffect, useState } from "react";

export default function InitialMedia({ initialMedias }) {
  const lastMediaIndex = 4;
  const [currMediaIndex, setCurrMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrMediaIndex((prevState) =>
          prevState === lastMediaIndex ? 0 : ++prevState
        ),
      10000
    ); /* Switch image each 10s */

    return () => clearInterval(interval);
  }, []);

  return (
    <InitialMediaContainer
      phoneUrl={initialMedias[currMediaIndex].poster_path}
      desktopUrl={initialMedias[currMediaIndex].backdrop_path}
    >
      <Link
        className="details-link"
        href={`/details/${
          initialMedias[currMediaIndex].title ? "movie" : "tv"
        }/${initialMedias[currMediaIndex].id}`}
      ></Link>

      <ArrowsContainer>
        <button
          className="prev-arrow"
          onClick={() =>
            setCurrMediaIndex((prevState) =>
              prevState === 0 ? lastMediaIndex : --prevState
            )
          }
        >
          <ChevronLeft size="5rem" />
        </button>

        <button
          className="next-arrow"
          onClick={() =>
            setCurrMediaIndex((prevState) =>
              prevState === lastMediaIndex ? 0 : ++prevState
            )
          }
        >
          <ChevronRight size="5rem" />
        </button>
      </ArrowsContainer>
    </InitialMediaContainer>
  );
}
