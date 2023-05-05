/* Components */
import { Container, Icon } from "./Contact.style";
import { FiGithub, FiLinkedin } from "react-icons/fi";

/* Logic */
import { v4 as uuidv4 } from "uuid";

export default function Contact() {
  const icons = [
    {
      href: "https://github.com/Richard-Passos",
      name: "GitHub",
      svg: <FiGithub size="2.5em" />,
    },
    {
      href: "https://www.linkedin.com/in/richardpassosdevfullstack/",
      name: "LinkedIn",
      svg: <FiLinkedin size="2.5em" />,
    },
  ];

  return (
    <Container>
      <h4>Make contact</h4>

      <div>
        {icons.map(({ href, name, svg }) => (
          <Icon key={uuidv4()} href={href} target="_blank" className="icon">
            {svg}

            <p className="icon-name">{name}</p>
          </Icon>
        ))}
      </div>
    </Container>
  );
}
