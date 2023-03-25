/* Components */
import Head from "next/head";
import Link from "next/link";
import { Movies, SearchMovies } from "@/components";
import { useState } from "react";

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );
  const popularMovies = await res.json();

  return {
    props: { popularMovies: popularMovies.results },
  };
}

export default function Home({ popularMovies }) {
  const [searchMovies, setSearchMovies] = useState("");

  return (
    <>
      <Head>
        <title>next-movies - Home</title>
      </Head>

      <h1>Working</h1>

      <Link href="/details/1">Outra página</Link>

      <input
        type="search"
        name="searchMovie"
        onChange={(e) => setSearchMovies(e.target.value)}
      />

      {(searchMovies && <SearchMovies movieName={searchMovies} />) || (
        <Movies type="popular" />
      )}

      {popularMovies &&
        popularMovies.map((movie) => <p key={movie.title}>{movie.title}</p>)}
    </>
  );
}
