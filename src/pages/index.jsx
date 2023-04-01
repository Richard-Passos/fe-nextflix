/* Components */
import Head from "next/head";
import { Carousel, Header, InitialMedia } from "@/components";
import Link from "next/link";

/* Logic */
import { getMedias } from "@/services/TMDB_API";

export default function Home({ medias }) {
  const initialMedias = medias.map(
    ({ content }) =>
      content.filter((obj) => obj.poster_path && obj.backdrop_path)[0]
  );

  return (
    <>
      <Head>
        <title>NextFlix - Home</title>
      </Head>

      <Header />

      <InitialMedia initialMedias={initialMedias} />

      <div className="carousels">
        {medias.map((media, i) => (
          <Carousel
            key={`key-carousel-${i}`}
            title={`${media.classification} ${
              media.type === "movie" ? "movies" : "series"
            }`}
            medias={media.content}
          >
            <Link
              href={`/${media.type}/${media.classification}/${1}`}
              className="btn-show-all"
            >
              Show All
            </Link>
          </Carousel>
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
