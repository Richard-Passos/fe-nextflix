/* Components */
import { IMG_ORIGIN_PATH } from "@/utils";
import { Container, Main } from "./MediaDetails.style";
import { MainDetails, ExtraDetails } from "./utils";
import { FiChevronLeft } from "react-icons/fi";

/* Logic */
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export default function MediaDetails({ media }) {
  const bgImage = IMG_ORIGIN_PATH + media.details.backdrop_path;

  return (
    <Container>
      <button className="go-back" onClick={() => history.go(-1)}>
        <FiChevronLeft size="3em" />
      </button>

      <Main bgImage={bgImage}>
        <div className="bg-gradient" />

        <MainDetails media={media} displayContent={displayContent} />
      </Main>

      <ExtraDetails media={media} displayContent={displayContent} />
    </Container>
  );
}

const displayContent = (arr) =>
  arr.map(({ title, name }, i) => (
    <Fragment key={uuidv4()}>
      {title && <h4>{title}</h4>}

      <p>{name}</p>

      {i + 1 < arr.length && <span role="separator"></span>}
    </Fragment>
  ));
