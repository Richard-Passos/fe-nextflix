/* Components */
import Head from "next/head";
import { Carousel, InitialMedia } from "@/components";

/* Logic */
import { getMedias } from "@/services/TMDB_API";
import { v4 as uuidv4 } from "uuid";

export default function Home({ medias }) {
  const initialMedias = [];

  medias.forEach(({ content }) => {
    const filter = content.filter(
      (obj) => obj.poster_path && obj.backdrop_path
    );

    const uniqueMedia = filter.find(
      ({ id }) => !initialMedias.find((item) => item.id === id)
    );

    initialMedias.push(uniqueMedia);
  });

  return (
    <>
      <Head>
        <title>NextFlix - Home</title>
      </Head>

      <InitialMedia initialMedias={initialMedias} />

      <div className="carousels">
        {medias.map((media) => (
          <Carousel
            key={uuidv4()}
            title={`${media.classification} ${
              media.type === "movie" ? "movies" : "series"
            }`}
            slides={media.content}
            link={`/${media.type}/${media.classification}/1`}
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
