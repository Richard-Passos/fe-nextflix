/* Components */
import { Container, Main } from "./Pagination.style";
import { MediaCard } from "@/components";
import { Buttons } from "./utils";

/* Logic */
import { useRouter } from "next/router";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Pagination({ medias, totalPages, baseLink }) {
  const { asPath } = useRouter();

  const main = useMemo(
    () =>
      medias.length ? (
        medias.map((media) => <MediaCard key={uuidv4()} media={media} />)
      ) : (
        <h2 className="none-media-found">None media matched your query.</h2>
      ),
    [medias]
  );

  return (
    <Container>
      <p className="path">HOME {asPath.replaceAll("/", " > ")}</p>

      <Main>{main}</Main>

      <Buttons baseLink={baseLink} totalPages={totalPages} />
    </Container>
  );
}
