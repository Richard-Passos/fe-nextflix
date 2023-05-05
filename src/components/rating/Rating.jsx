/* Components */
import { Container } from "./Rating.style";
import { FiStar } from "react-icons/fi";

/* Logic */
import { v4 as uuidv4 } from "uuid";

const starsNum = Array(5).fill("");

const textRating = ["Terrible", "Bad", "Average", "Great", "Awesome"];

export default function Rating({ rating }) {
  return (
    <Container>
      <div>
        {starsNum.map((_, i) => (
          <FiStar
            key={uuidv4()}
            size="2.5rem"
            className={i + 1 <= rating ? "fill" : ""}
          />
        ))}
      </div>

      <p>{textRating[rating - 1]}</p>
    </Container>
  );
}
