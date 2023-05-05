/* Components */
import { Container } from "./NotFound.style";
import { FiAlertOctagon } from "react-icons/fi";
import { TbError404 } from "react-icons/tb";
import { BsEmojiFrown } from "react-icons/bs";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="info">
        <h2>
          <FiAlertOctagon size="5em" className="alert" />
          <TbError404 size="10em" />
        </h2>

        <p>
          oops... <BsEmojiFrown size="1em" />
        </p>

        <p>Page not found!</p>
      </div>

      <button className="go-home">
        <Link href="/">GO HOME</Link>
      </button>
    </Container>
  );
}
