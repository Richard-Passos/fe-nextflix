/* Components */
import Head from "next/head";
import Link from "next/link";
import { Header, MainPage, Pagination } from "@/components";
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
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <>
      <Head>
        <title>NextFlix - Home</title>
      </Head>

      <Header input setState={setSearchMovie} />

      {(searchMovie && <Pagination name={searchMovie} />) || (
        <MainPage popularM={popularMovies} popularS={popularSeries} />
      )}
    </>
  );
}
