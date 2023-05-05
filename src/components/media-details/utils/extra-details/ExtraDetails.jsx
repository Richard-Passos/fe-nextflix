/* Components */
import { Container, Column } from "./ExtraDetails.style";
import { Carousel, PeopleCarousel } from "@/components";

export default function ExtraDetails({ media, displayContent }) {
  const { details, castNCrew, similarMovies } = media;

  const { status, budget, revenue, episodesNSeasons, homepage, createdBy } =
    _normalizeMediaDetails(details);

  return (
    <Container>
      <div className="d-flex">
        <div>
          {castNCrew.length && (
            <PeopleCarousel title="Cast & Crew" slides={castNCrew} />
          )}
        </div>

        <div className="text-container">
          <Column>{displayContent([{ title: "Status", name: status }])}</Column>

          {episodesNSeasons && (
            <>
              <Column>
                {displayContent([
                  { title: "Episodes", name: episodesNSeasons.episodes },
                ])}
              </Column>

              <Column>
                {displayContent([
                  { title: "Seasons", name: episodesNSeasons.seasons },
                ])}
              </Column>
            </>
          )}

          <Column>{displayContent([{ title: "Budget", name: budget }])}</Column>

          <Column>
            {displayContent([{ title: "Revenue", name: revenue }])}
          </Column>

          <Column>
            {displayContent([{ title: "Homepage", name: homepage }])}
          </Column>

          <Column>
            <h4>Creator{createdBy.length !== 1 && "s"}</h4>

            <div>{displayContent(createdBy)}</div>
          </Column>
        </div>
      </div>

      {similarMovies.length && (
        <Carousel title="Similar Medias" slides={similarMovies} link={null} />
      )}
    </Container>
  );
}

const _normalizeMediaDetails = (details) => {
  let { status, budget, revenue, homepage } = details;
  const {
    number_of_episodes,
    number_of_seasons,
    created_by,
    production_companies,
  } = details;

  status = status ?? "-";

  budget = budget ? `$${normalizeNumber(budget)}.00` : "-";

  revenue = revenue ? `$${normalizeNumber(revenue)}.00` : "-";

  const episodesNSeasons = number_of_episodes
    ? {
        episodes: number_of_episodes,
        seasons: number_of_seasons,
      }
    : null;

  homepage = homepage ? (
    <a href={homepage} target="_blank">
      Go to homepage
    </a>
  ) : (
    "-"
  );

  const createdBy = created_by ?? production_companies;
  createdBy.splice(4);
  if (createdBy.length === 4) createdBy.splice(3, 1, { name: "More..." });

  return {
    status,
    budget,
    revenue,
    episodesNSeasons,
    homepage,
    createdBy,
  };
};

const normalizeNumber = (n) =>
  String(n)
    .split("")
    .reverse()
    .join("")
    .replaceAll(/(\d\d\d)/g, "$1.")
    .split("")
    .reverse()
    .join("")
    .replace(/(^[.])/, "");
