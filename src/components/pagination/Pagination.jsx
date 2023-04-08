/* Components */
import { ButtonsContainer, MainContainer } from "./Pagination.style";
import { MediaCard } from "../media-card";
import Link from "next/link";

/* Logic */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Pagination({ medias, totalPages }) {
  console.log("file: Pagination.jsx:11  Pagination  medias", medias);
  const { query } = useRouter();

  const router = useRouter();
  const isSearch = router.pathname.match(/search/);

  const mainContent = useRef();

  const [initializeRef, setInitializeRef] = useState(false);
  useEffect(() => {
    setInitializeRef(true);
  }, []); /* Pagination don't work without it */

  return (
    <>
      <MainContainer ref={mainContent}>
        {medias.length ? (
          medias.map((media, i) => (
            <MediaCard key={`key-pagination-card-${i}`} media={media} />
          ))
        ) : (
          <h2 className="none-media-found">None media matched your query.</h2>
        )}
      </MainContainer>

      {medias.length ? (
        <ButtonsContainer>
          <Link
            href={
              isSearch
                ? `/search/${query.currPage - 1}`
                : `/${query.mediaTypeType}/${query.mediaClassification}/${
                    query.currPage - 1
                  }`
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
                : `/${query.mediaType}/${query.mediaClassification}/${
                    Number(query.currPage) + 1
                  }`
            }
            className={Number(query.currPage) === totalPages ? "disabled" : ""}
          >
            {">"}
          </Link>
        </ButtonsContainer>
      ) : null}
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
          : `/${query.mediaType}/${query.mediaClassification}/${num}`
      }
      className={num === Number(currPage) ? "disabled" : ""}
    >
      {num}
    </Link>
  ));
};
