/* Components */
import { Container } from "./MainPage.style";
import { Medias } from "../medias";
import Link from "next/link";
import { Carousel } from "../carousel";

export default function MainPage({ popularM, popularS }) {
  return (
    <Container>
      <Carousel medias={popularM}>
        <Link href="/movie/popular" className="btn-show-all">
          Show all
        </Link>
      </Carousel>

      <Carousel medias={popularS}>
        <Link href="/tv/popular" className="btn-show-all">
          Show all
        </Link>
      </Carousel>

      <Medias type="movie" classification="top_rated" />
      <Medias type="tv" classification="top_rated" />
      <Medias type="movie" classification="upcoming" />
    </Container>
  );
}
