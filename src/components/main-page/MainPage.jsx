/* Components */
import { Container } from "./MainPage.style";
import { Movies } from "../movies";
import { Series } from "../series";
import Link from "next/link";

export default function MainPage({ popularM, popularS }) {
  return (
    <Container>
      {popularM && popularM.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      <Link href="/movie/popular">Show all</Link>
      {popularS && popularS.map((serie) => <p key={serie.id}>{serie.name}</p>)}
      <Link href="/tv/popular">Show all</Link>
      <Movies classification="top_rated" />
      <Series classification="top_rated" />
      <Movies classification="upcoming" />
    </Container>
  );
}
