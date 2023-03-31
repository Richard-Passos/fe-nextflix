/* Components */
import { Container, Content, IconContainer } from "./Footer.style";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";

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
        <h4>Made contact</h4>

        <div>
          <IconContainer href="https://github.com/Richard-Passos">
            <Github className="icon" />
            <p className="icon-name">Github</p>
          </IconContainer>

          <IconContainer href="https://www.linkedin.com/in/richard-passos-91703624b/">
            <LinkedinSquare className="icon" />
            <p className="icon-name">LinkedIn</p>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
}
