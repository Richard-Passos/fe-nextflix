/* Components */
import { Container, Content } from "./Footer.style";
import { Contact } from "../contact";

export default function Footer() {
  return (
    <Container>
      <Content>
        <h4>Informations</h4>

        <p>
          NextFlix is a personal project, where you will find movie details get
          from <abbr title="The Movie Databases">TMDB</abbr> API
        </p>
      </Content>

      <Content>
        <Contact />
      </Content>
    </Container>
  );
}
