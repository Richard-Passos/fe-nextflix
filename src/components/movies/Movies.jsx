/* Components */
import { MoviesContainer } from "./Movies.style";

/* Logic */
import { useEffect, useState } from "react";
import { getMedia } from "@/services/TMDB_API";
import Link from "next/link";

export default function Movies({ classification }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMedia(setMovies, "movie", classification);
  }, []);
  return (
    <>
      <MoviesContainer>
        {movies &&
          movies.map((movie) => (
            <p key={`key-movie-${movie.id}-${classification}`}>{movie.title}</p>
          ))}
      </MoviesContainer>
      <Link href={`/movie/${classification}`}>Show all</Link>
    </>
  );
}
