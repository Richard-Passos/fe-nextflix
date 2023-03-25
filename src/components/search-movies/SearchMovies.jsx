import { useEffect, useState } from "react";
import { ButtonsContainer, MoviesContainer } from "./SearchMovies.style";

/* Logic */
import { searchMovies } from "@/services/TMDB_API";

export default function SearchMovies({ movieName }) {
  const [movies, setMovies] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    searchMovies(setMovies, movieName, setTotalPages, currPage);
  }, [movieName, currPage]);
  return (
    <>
      <MoviesContainer>
        {movies &&
          movies.map((movie, i) => <p key={movie.title + i}>{movie.title}</p>)}
      </MoviesContainer>
      <ButtonsContainer>
        {createPaginationBtns(totalPages, currPage, setCurrPage)}
      </ButtonsContainer>
    </>
  );
}

const createPaginationBtns = (totalPages, currPage, setState) => {
  const MAX_BTNS = 9;
  const btnsOnLeft = 4;
  let currBtnsCount = 1;

  const btnsValue = [];

  for (let i = currPage < 5 ? 1 : currPage; i <= totalPages; i++) {
    if (currBtnsCount <= MAX_BTNS) {
      if (currPage < 5) {
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
      onClick={(e) => setState(e.target.value)}
      disabled={Number(num) === Number(currPage)}
    >
      {num}
    </button>
  ));
};
