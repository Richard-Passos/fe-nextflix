/* Components */
import { Container } from "./Carousel.style";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { MediaCard } from "@/components";

/* Logic */
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";

export default function Carousel({ title, slides, link }) {
  const splideSlides = useMemo(
    () =>
      slides.map((slide) => (
        <SplideSlide key={uuidv4()}>
          <MediaCard media={slide} />
        </SplideSlide>
      )),
    [slides]
  );

  return (
    <Container>
      <h2 className="title">{title.replaceAll(/[_-]/g, " ")}</h2>

      {link && (
        <Link href={link} className="btn-show-all">
          Show All
        </Link>
      )}

      <Splide
        options={{
          rewind: true,
          focus: "center",
          updateOnMove: true,
          drag: false,
          autoWidth: true,
          autoHeight: true,
          padding: "1.25rem",
          gap: "1.5rem",
        }}
      >
        {splideSlides}
      </Splide>
    </Container>
  );
}
