/* Components */
import { useEffect } from "react";
import { MoviesContainer } from "./Movies.style";

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-pt-BR&page=1`
  );
  const popularMovies = await res.json();

  return {
    props: { a: "1123" },
  };
}

export default function Movies({ type }) {
  return <MoviesContainer></MoviesContainer>;
}
