/* Components */
import { CarouselContainer, ButtonsContainer } from "./Carousel.style";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Card } from "../card";
import { ArrowRightShort, ArrowLeftShort } from "@styled-icons/bootstrap";

/* Logic */
import { useEffect, useRef, useState } from "react";

export default function Carousel({ children, title, medias }) {
  const carousel = useRef();

  const [fixCarouselBug, setFixCarouselBug] = useState(null);
  useEffect(() => {
    setFixCarouselBug("");
  }, []); /* Carousel din't work correctly without it */

  console.log(carousel);

  return (
    <CarouselContainer ref={carousel}>
      <CarouselProvider
        visibleSlides={getVisibleSlides(carousel.current?.offsetWidth)}
        step={getVisibleSlides(carousel.current?.offsetWidth) - 1}
        naturalSlideWidth={200}
        naturalSlideHeight={350}
        totalSlides={medias.length}
        infinite
      >
        <h2 className="carousel-title">{title.replaceAll(/[_-]/g, " ")}</h2>

        {children}

        <Slider>
          {medias.map((media, i) => (
            <Slide index={i} key={`key-slide-${i}`}>
              <Card
                title={media.title ?? media.name}
                release_date={media.release_date ?? media.first_air_date}
                type={media.release_date ? "movie" : "tv"}
                id={media.id}
                src={
                  media.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${
                        media.poster_path ?? media.backdrop_path
                      }`
                    : "/images/noImgFound.jpg"
                }
              />
            </Slide>
          ))}
        </Slider>

        <ButtonsContainer>
          <ButtonBack></ButtonBack>
          <ArrowLeftShort className="carousel__back-button" />

          <ButtonNext></ButtonNext>
          <ArrowRightShort className="carousel__next-button" />
        </ButtonsContainer>
      </CarouselProvider>
    </CarouselContainer>
  );
}

const getVisibleSlides = (width) => {
  const examinedWidths = [];
  for (let i = 0; i < 30; i++) {
    examinedWidths.push({ width: 110 * i, slides: 0.5 * i });
    /* Each multiple of 110 will receive + 0.5 slide*/
  }

  return examinedWidths.find((obj) => obj.width > width)?.slides - 0.5;
};
