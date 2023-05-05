/* Components */
import Head from "next/head";
import { MediaDetails, NotFound } from "@/components";

/* Logic */
import { getMediaDetails } from "@/services/TMDB_API";

export default function DetailMedias({ media }) {
  return (
    <>
      <Head>
        <title>NextFlix - Details</title>
      </Head>

      {media ? <MediaDetails media={media} /> : <NotFound />}
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { mediaType, mediaId } = params;

  const media = await getMediaDetails(mediaType, mediaId);

  return {
    props: { media },
  };
};
