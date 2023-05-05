/* Components */
import Head from "next/head";
import { HighlightMedia, Carousel } from "@/components";

/* Logic */
import { getMedias } from "@/services/TMDB_API";
import { v4 as uuidv4 } from "uuid";

export default function Home({ medias }) {
  const highlightMedias = getMediasToHighlight(medias);

  return (
    <>
      <Head>
        <title>NextFlix - Home</title>
      </Head>

      <HighlightMedia medias={highlightMedias} />

      <div className="carousels">
        {medias.map(({ classification, type, content }) => (
          <Carousel
            key={uuidv4()}
            title={`${classification} ${
              type === "movie" ? "movies" : "series"
            }`}
            slides={content}
            link={`/${type}/${classification}/1`}
          />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const medias = [
    {
      type: "movie",
      classification: "popular",
    },
    {
      type: "tv",
      classification: "popular",
    },
    {
      type: "movie",
      classification: "top_rated",
    },
    {
      type: "tv",
      classification: "top_rated",
    },
    {
      type: "movie",
      classification: "upcoming",
    },
  ];

  for (let i = 0; i < medias.length; i++) {
    const { results } = await getMedias(
      medias[i].type,
      medias[i].classification
    );

    medias[i] = { ...medias[i], content: results };
  }

  return {
    props: {
      medias,
    },
  };
};

const getMediasToHighlight = (medias) => {
  const highlightMedias = [];

  medias.forEach(({ content }) => {
    const filter = content.filter(
      ({ poster_path, backdrop_path }) => poster_path && backdrop_path
    );

    const uniqueMedia = filter.find(
      ({ id }) => !highlightMedias.find((media) => media.id === id)
    );

    highlightMedias.push(uniqueMedia);
  });

  return highlightMedias;
};
