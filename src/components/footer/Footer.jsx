/* Components */
import { Container, Content } from "./Footer.style";
import { Contact } from "../contact";

export default function Footer() {
  return (
    <Container>
      <Content>
        <h4>About</h4>

        <p>
          This website is the ideal destination for movie lovers. Here you will
          find an extensive list of films from all genres, from classic cinema
          to the latest productions. Easily navigate our intuitive interface and
          find detailed information about each film, including synopsis, cast,
          director, and duration. Additionally, we offer useful features such as
          the ability to create personalized lists of films to save your
          favorites.
        </p>
      </Content>

      <Content>
        <Contact />
      </Content>
    </Container>
  );
}
