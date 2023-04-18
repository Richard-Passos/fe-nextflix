/* Components */
import { MainContainer } from "./Pagination.style";
import { MediaCard } from "../media-card";
import { Buttons } from "./buttons";

/* Logic */
import { v4 as uuidv4 } from "uuid";

export default function Pagination({ medias, totalPages, baseLink }) {
  return (
    <section>
      <MainContainer>
        {medias.length ? (
          medias.map((media) => <MediaCard key={uuidv4()} media={media} />)
        ) : (
          <h2 className="none-media-found">None media matched your query.</h2>
        )}
      </MainContainer>

      <Buttons baseLink={baseLink} totalPages={totalPages} />
    </section>
  );
}
