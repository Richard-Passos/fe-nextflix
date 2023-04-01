/* Components */
import { ButtonsContainer, MainContainer } from "./Pagination.style";
import { Card } from "../card";
import Link from "next/link";

/* Logic */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Pagination({ medias, totalPages }) {
  const { query } = useRouter();

  const router = useRouter();
  const isSearch = router.pathname.match(/search/);

  const mainContent = useRef();

  const [fixPaginationBug, setFixPaginationBug] = useState(null);
  useEffect(() => {
    setFixPaginationBug("");
  }, []); /* Pagination din't work correctly without it */

  return (
    <>
      <MainContainer ref={mainContent}>
        {(medias?.length &&
          medias.map((media) => (
            <Card
              key={`key-pagination-${media.id}`}
              title={media.title ?? media.name}
              release_date={media.release_date ?? media.first_air_date}
              type={media.release_date ? "movie" : "tv"}
              id={media.id}
              src={
                media.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${
                      media.poster_path ?? media.backdrop_path
                    }`
                  : "/images/noImgFound.jpg"
              }
            />
          ))) || (
          <h2 className="none-media-found">None media matched your query.</h2>
        )}
      </MainContainer>

      <ButtonsContainer>
        <Link
          href={
            isSearch
              ? `/search/${query.currPage - 1}`
              : `/${query.media}/${query.classification}/${query.currPage - 1}`
          }
          className={query.currPage === "1" ? "disabled" : ""}
        >
          {"<"}
        </Link>

        <div>
          {mainContent.current &&
            createPaginationBtns(
              totalPages,
              isSearch,
              query,
              mainContent.current.offsetWidth
            )}
        </div>

        <Link
          href={
            isSearch
              ? `/search/${query.currPage - 1}`
              : `/${query.media}/${query.classification}/${
                  Number(query.currPage) + 1
                }`
          }
          className={Number(query.currPage) === totalPages ? "disabled" : ""}
        >
          {">"}
        </Link>
      </ButtonsContainer>
    </>
  );
}

const createPaginationBtns = (totalPages, isSearch, query, windowWidth) => {
  const { currPage } = query;

  const MAX_BTNS =
    windowWidth > 560 ? 9 : windowWidth > 345 ? 5 : windowWidth > 225 ? 3 : 2;
  const btnsOnLeft = Math.floor(MAX_BTNS / 2);
  let currBtnsCount = 1;

  const btnsValue = [];

  for (let i = currPage < btnsOnLeft + 1 ? 1 : currPage; i <= totalPages; i++) {
    if (currBtnsCount <= MAX_BTNS) {
      if (currPage < btnsOnLeft + 1) {
        btnsValue.push(i);
      } else {
        btnsValue.push(i - btnsOnLeft);
      }

      currBtnsCount++;
    }
  }

  return btnsValue.map((num) => (
    <Link
      key={`key-paginationBtn-${num}`}
      value={num}
      href={
        isSearch
          ? `/search/${num}`
          : `/${query.media}/${query.classification}/${num}`
      }
      className={num === Number(currPage) ? "disabled" : ""}
    >
      {num}
    </Link>
  ));
};
