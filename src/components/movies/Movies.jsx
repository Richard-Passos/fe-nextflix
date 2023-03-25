/* Components */
import { MoviesContainer } from "./Movies.style";

/* Logic */
import { useEffect, useState } from "react";
import { getMoviesOrSeries } from "@/services/TMDB_API";

export default function Movies({ classification }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesOrSeries(setMovies, "movie", classification);
  }, []);
  return (
    <MoviesContainer>
      {movies &&
        movies.map((movie) => (
          <p key={`key-movie-${movie.id}-${classification}`}>{movie.title}</p>
        ))}
    </MoviesContainer>
  );
}
