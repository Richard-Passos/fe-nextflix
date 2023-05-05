/* Components */
import { Container } from "./PeopleCarousel.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { PersonCard } from "@/components";

/* Logic */
import { v4 as uuidv4 } from "uuid";

export default function PeopleCarousel({ title, slides }) {
  const slidesToShow = [];
  for (let i = 1; i <= slides.length; i += 2) {
    slidesToShow.push([slides[i - 1], slides[i]]);
  }

  return (
    <Container>
      <h2 className="title">{title}</h2>

      <Splide
        options={{
          rewind: true,
          focus: "center",
          width: "100vw",
          height: "32rem",
          gap: "2rem",
          direction: "ttb",
          drag: false,
          pagination: false,
        }}
      >
        {slidesToShow.map((slides) => (
          <SplideSlide key={uuidv4()}>
            <PersonCard person={slides[0]} />

            {slides[1] && <PersonCard person={slides[1]} />}
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}
