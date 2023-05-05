/* Components */
import { Container, Main, Illustration } from "./HighlightMedia.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import NextImage from "next/image";
import { IMG_ORIGIN_PATH } from "@/utils";

/* Logic */
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function HighlightMedia({ medias }) {
  const mainCarousel = useRef();
  const thumbCarousel = useRef();

  useEffect(() => {
    mainCarousel.current &&
      mainCarousel.current.sync(thumbCarousel.current.splide);
  }, [mainCarousel, thumbCarousel]);

  const picture = (backdrop_path, poster_path) => (
    <picture>
      <source
        srcSet={IMG_ORIGIN_PATH + backdrop_path}
        media="(min-width: 600px)"
      />

      <NextImage
        src={IMG_ORIGIN_PATH + poster_path}
        alt="Highlight media"
        fill
        priority
      />
    </picture>
  );

  return (
    <Container>
      <Illustration>
        <Splide
          ref={thumbCarousel}
          options={{
            type: "fade",
            pagination: false,
            arrows: false,
          }}
        >
          {medias.map(({ backdrop_path, poster_path }) => (
            <SplideSlide key={uuidv4()}>
              {picture(backdrop_path, poster_path)}
            </SplideSlide>
          ))}
        </Splide>
      </Illustration>

      <Main>
        <Splide
          ref={mainCarousel}
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 5000,
          }}
        >
          {medias.map(({ title, id, backdrop_path, poster_path }) => (
            <SplideSlide key={uuidv4()}>
              <Link href={`/${title ? "movie" : "tv"}/details/${id}`}>
                {picture(backdrop_path, poster_path)}
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Main>
    </Container>
  );
}
