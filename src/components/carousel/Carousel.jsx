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
import { useRef } from "react";

export default function Carousel({ children, medias }) {
  const carousel = useRef();
  const width = carousel.current?.offsetWidth;

  return (
    <CarouselContainer ref={carousel}>
      <CarouselProvider
        visibleSlides={getVisibleSlides(width)}
        step={1}
        naturalSlideWidth={250}
        naturalSlideHeight={300}
        totalSlides={medias.length}
        infinite
      >
        {children}

        <Slider>
          {medias.map((media, i) => (
            <Slide index={i} key={`key-slide-${i}`}>
              <Card
                src={
                  media.backdrop_path
                    ? "https://image.tmdb.org/t/p/original" +
                      (media.poster_path ?? media.backdrop_path)
                    : "/images/noImgFound.jpg"
                }
                title={media.title ?? media.name}
                release_date={media.release_date || media.first_air_date}
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
  for (let i = 0; i < 20; i++) {
    examinedWidths.push({ width: 135 * i, slides: 0.5 * i });
    /* Each multiple of 135 will receive + 0.5 slide*/
  }

  return examinedWidths.find((obj) => obj.width > width)?.slides - 0.5;
};
