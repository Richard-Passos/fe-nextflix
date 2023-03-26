/* Components */
import { ButtonsContainer, MainContainer } from "./Pagination.style";
import { Card } from "../card";

/* Logic */
import { useEffect, useRef, useState } from "react";
import { getMedia, searchContent } from "@/services/TMDB_API";

export default function Pagination(props) {
  const [medias, setMedias] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  const mainContent = useRef();

  useEffect(() => {
    props.name
      ? searchContent(setMedias, props.name, setTotalPages, currPage)
      : getMedia(
          setPaginate,
          props.mediaType,
          props.classification,
          setTotalPages,
          currPage
        );
  }, [props.name || (props.mediaType, props.classification), currPage]);

  return (
    <>
      <MainContainer ref={mainContent}>
        {(medias?.length &&
          medias.map((media) => (
            <Card
              key={`key-pagination-${media.id}`}
              title={media.name || media.title}
              src={
                media.backdrop_path
                  ? "https://image.tmdb.org/t/p/original" +
                    (media.poster_path ?? media.backdrop_path)
                  : "/images/noImgFound.jpg"
              }
              release_date={media.release_date || media.first_air_date}
            />
          ))) || (
          <h2 className="none-media-found">None media matched your query.</h2>
        )}
      </MainContainer>

      <ButtonsContainer>
        <button
          className="prev-btn"
          onClick={() => {
            setCurrPage((prevPage) => --prevPage);
            window.scrollTo(0, 0);
          }}
          disabled={currPage === 1}
        >
          {"<"}
        </button>

        <div>
          {mainContent.current &&
            createPaginationBtns(
              totalPages,
              currPage,
              setCurrPage,
              mainContent.current.offsetWidth
            )}
        </div>

        <button
          className="next-btn"
          onClick={() => {
            setCurrPage((prevPage) => ++prevPage);
            window.scrollTo(0, 0);
          }}
          disabled={currPage === totalPages}
        >
          {">"}
        </button>
      </ButtonsContainer>
    </>
  );
}

const createPaginationBtns = (
  totalPages,
  currPage,
  setCurrPage,
  windowWidth
) => {
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
    <button
      key={`key-paginationBtn-${num}`}
      value={num}
      onClick={(e) => {
        setCurrPage(e.target.value);
        window.scrollTo(0, 0);
      }}
      disabled={Number(num) === Number(currPage)}
    >
      {num}
    </button>
  ));
};
