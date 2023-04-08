/* Components */
import { CarouselContainer, ButtonsContainer } from "./Carousel.style";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { MediaCard } from "../media-card";
import { PersonCard } from "../person-card";
import { ArrowRightShort, ArrowLeftShort } from "@styled-icons/bootstrap";

/* Logic */
import { useEffect, useRef, useState } from "react";

export default function Carousel({ children, title, slides, type = "media" }) {
  const carousel = useRef();

  /* Seting data to carousel */
  const CARD_WIDTH = carousel.current
    ? type === "media"
      ? 175 * (carousel.current.offsetWidth >= 2000 ? 1.6 : 1)
      : 100 * (carousel.current.offsetWidth >= 2000 ? 1.6 : 1)
    : 0;
  const CARD_HEIGHT = carousel.current
    ? type === "media"
      ? 300 * (carousel.current.offsetWidth >= 2000 ? 1.6 : 1)
      : 150 * (carousel.current.offsetWidth >= 2000 ? 1.6 : 1)
    : 0;
  const CARD_GAP = carousel.current
    ? 15 * (carousel.current.offsetWidth >= 2000 ? 1.6 : 1)
    : 0;
  /*  */

  const [initializeRef, setInitializeRef] = useState(false);
  useEffect(() => {
    setInitializeRef(true);
  }, []); /* Carousel don't work without it */

  useEffect(() => {
    document.querySelector("html").style.fontSize =
      carousel.current.offsetWidth >= 2000 ? "100%" : "62.5%";
  }, []);

  return (
    <CarouselContainer
      ref={carousel}
      cardsCount={slides.length}
      cardWidth={CARD_WIDTH}
      cardHeight={CARD_HEIGHT}
      cardGap={CARD_GAP}
    >
      {carousel.current ? (
        <div>
          <CarouselProvider
            visibleSlides={
              carousel.current?.offsetWidth / (CARD_WIDTH + CARD_GAP) -
              (CARD_WIDTH >= 175 ? 0.1 : 0.2)
            }
            step={carousel.current?.offsetWidth / (CARD_WIDTH + CARD_GAP) - 1}
            naturalSlideWidth={CARD_WIDTH}
            naturalSlideHeight={CARD_HEIGHT}
            totalSlides={slides.length}
            infinite
          >
            <h2 className="carousel-title">{title.replaceAll(/[_-]/g, " ")}</h2>
            {children}

            <Slider>
              {type === "media"
                ? slides.map((media, i) => (
                    <Slide index={i} key={`key-slide-${i}`}>
                      <MediaCard media={media} />
                    </Slide>
                  ))
                : slides.map((person, i) => (
                    <Slide index={i} key={`key-slide-${i}`}>
                      <PersonCard person={person} />
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
        </div>
      ) : null}
    </CarouselContainer>
  );
}
