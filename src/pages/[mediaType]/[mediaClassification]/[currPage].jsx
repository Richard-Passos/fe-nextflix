/* Components */
import Head from "next/head";
import { NotFound, Pagination } from "@/components";

/* Logic */
import { getMedias } from "@/services/TMDB_API";
import { useRouter } from "next/router";

export default function PageMedias({ medias, totalPages }) {
  const { mediaType, mediaClassification } = useRouter().query;

  const baseLink = `/${mediaType}/${mediaClassification}`;

  return (
    <>
      <Head>
        <title>NextFlix - Pagination</title>
      </Head>

      {medias ? (
        <Pagination
          medias={medias}
          totalPages={totalPages}
          baseLink={baseLink}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  const popularMPages = await getMedias("movie", "popular");
  const popularSPages = await getMedias("tv", "popular");
  const topRatedMPages = await getMedias("movie", "top_rated");
  const topRatedSPages = await getMedias("tv", "top_rated");
  const upcomingMPages = await getMedias("movie", "upcoming");

  const medias = [
    {
      type: "movie",
      classification: "popular",
      totalPages: popularMPages.totalPages,
    },
    {
      type: "tv",
      classification: "popular",
      totalPages: popularSPages.totalPages,
    },
    {
      type: "movie",
      classification: "top_rated",
      totalPages: topRatedMPages.totalPages,
    },
    {
      type: "tv",
      classification: "top_rated",
      totalPages: topRatedSPages.totalPages,
    },
    {
      type: "movie",
      classification: "upcoming",
      totalPages: upcomingMPages.totalPages,
    },
  ];

  medias.forEach((media) =>
    Array(
      media.totalPages < 100
        ? media.totalPages
        : 100 /* Pre render max 100 pages */
    )
      .fill(`${media.type} ${media.classification}`)
      .forEach((_, i) =>
        paths.push({
          params: {
            mediaType: media.type,
            mediaClassification: media.classification,
            currPage: String(++i),
          },
        })
      )
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { mediaType, mediaClassification, currPage } = context.params;

  const { results, totalPages } = await getMedias(
    mediaType,
    mediaClassification,
    currPage
  );

  return {
    props: {
      medias: results,
      totalPages,
    },
  };
};
