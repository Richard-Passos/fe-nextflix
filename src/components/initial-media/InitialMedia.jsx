/* Components */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, MainImage, IllustrationImage } from "./InitialMedia.style";
import Link from "next/link";
import { Image } from "@/utils";

/* Logic */
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";

export default function InitialMedia({ initialMedias }) {
  const mainCarousel = useRef();
  const thumbCarousel = useRef();

  useEffect(() => {
    if (mainCarousel.current)
      mainCarousel.current.sync(thumbCarousel.current.splide);
  }, [mainCarousel, thumbCarousel]);

  return (
    <Container>
      <MainImage>
        <Splide
          ref={mainCarousel}
          options={{
            type: "fade",
            rewind: true,
            perPage: 1,
            autoplay: true,
            interval: 5000,
          }}
        >
          {initialMedias.map((media) => (
            <SplideSlide key={uuidv4()}>
              <Link
                href={`/${media.title ? "movie" : "tv"}/details/${media.id}`}
              >
                <picture className="image-container">
                  <source
                    srcSet={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
                    media="(min-width: 600px)"
                  />

                  <Image
                    src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                    fill
                    sizes="(min-width: 0px) 90vw"
                    priority
                    alt="Initial image"
                  />
                </picture>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </MainImage>

      <IllustrationImage>
        <Splide
          ref={thumbCarousel}
          options={{
            type: "fade",
            pagination: false,
            arrows: false,
          }}
        >
          {initialMedias.map((media) => (
            <SplideSlide key={uuidv4()}>
              <picture>
                <source
                  srcSet={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
                  media="(min-width: 600px)"
                />

                <Image
                  src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                  fill
                  sizes="(min-width: 0px) 100vw"
                  priority
                  alt="Illustration image"
                />
              </picture>
            </SplideSlide>
          ))}
        </Splide>
      </IllustrationImage>
    </Container>
  );
}
