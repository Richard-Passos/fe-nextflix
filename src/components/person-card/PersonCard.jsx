/* Components */
import { Container } from "./PersonCard.style";
import { Image, IMG_ORIGIN_PATH } from "@/utils";

export default function PersonCard({ person }) {
  const { id, name, profile_path, character, job, known_for_department } =
    person;

  const personPath = _normalizedPersonPath(id, name);

  return (
    <Container href={personPath} target="_blank">
      <Image
        src={
          profile_path
            ? IMG_ORIGIN_PATH + profile_path
            : "/images/personNotFound.svg"
        }
        alt={name}
        width={100}
        height={150}
        className="img"
      />

      <div className="text-info">
        <h4 className="name">{name}</h4>

        <p className="job">{character ?? job}</p>

        <small className="department">
          {known_for_department.toLowerCase()}
        </small>
      </div>
    </Container>
  );
}

const _normalizedPersonPath = (id, name) =>
  `https://www.themoviedb.org/person/${id}-${name
    .toLowerCase()
    .replaceAll(" ", "-")}`;
