/* Components */
import { Container, IconContainer } from "./Contact.style";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <Container>
      <h4>Make contact</h4>

      <div>
        <IconContainer
          href="https://github.com/Richard-Passos"
          target="_blank"
          className="icon-container"
        >
          <FiGithub size="2.5em" />
          <p className="icon-name">GitHub</p>
        </IconContainer>

        <IconContainer
          href="https://www.linkedin.com/in/richard-passos-91703624b/"
          target="_blank"
          className="icon-container"
        >
          <FiLinkedin size="2.5em" />
          <p className="icon-name">LinkedIn</p>
        </IconContainer>
      </div>
    </Container>
  );
}
