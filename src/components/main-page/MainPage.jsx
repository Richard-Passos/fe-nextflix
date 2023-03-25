/* Components */
import { Container } from "./MainPage.style";
import { Movies } from "../movies";
import { Series } from "../Series";

export default function MainPage({ popularM, popularS }) {
  return (
    <Container>
      {popularM && popularM.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      <Container />
      {popularS && popularS.map((serie) => <p key={serie.id}>{serie.name}</p>)}
      <Movies classification="top_rated" />
      <Series classification="top_rated" />
      <Movies classification="upcoming" />
    </Container>
  );
}
