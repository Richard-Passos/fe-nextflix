/* Components */
import { CarouselContainer } from "./Carousel.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Link from "next/link";
import { MediaCard } from "../media-card";
import { PersonCard } from "../person-card";

/* Logic */
import { v4 as uuidv4 } from "uuid";

export default function Carousel({ title, slides, link, type = "media" }) {
  return (
    <CarouselContainer>
      <h2 className="title">{title.replaceAll(/[_-]/g, " ")}</h2>
      {link && (
        <Link href={link} className="btn-show-all">
          Show All
        </Link>
      )}

      <Splide
        options={{
          rewind: true,
          padding: "1.5rem",
          autoWidth: true,
          autoHeight: true,
          gap: "1.5rem",
          focus: "center",
          drag: "free",
          updateOnMove: true,
          pagination: type === "media" ? true : false,
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={uuidv4()}>
            {type === "media" ? (
              <MediaCard media={slide} />
            ) : (
              <PersonCard person={slide} />
            )}
          </SplideSlide>
        ))}
      </Splide>
    </CarouselContainer>
  );
}
