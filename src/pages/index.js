/* Components */
import Head from "next/head";
import Link from "next/link";
import { MainPage, SearchMovies } from "@/components";
import { useState } from "react";

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export async function getStaticProps() {
  const resPopularMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );
  const popularMovies = await resPopularMovies.json();

  const resPopularSeries = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );
  const popularSeries = await resPopularSeries.json();

  return {
    props: {
      popularMovies: popularMovies.results,
      popularSeries: popularSeries.results,
    },
  };
}

export default function Home({ popularMovies, popularSeries }) {
  const [searchMovies, setSearchMovies] = useState("");

  return (
    <>
      <Head>
        <title>NextFlix - Home</title>
      </Head>

      <h1>Working</h1>

      <Link href="/details/1">Outra página</Link>

      <input
        type="search"
        name="searchMovie"
        onChange={(e) => setSearchMovies(e.target.value)}
      />

      {(searchMovies && <SearchMovies movieName={searchMovies} />) || (
        <MainPage popularM={popularMovies} popularS={popularSeries} />
      )}

      {}
    </>
  );
}
