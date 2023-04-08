/* Components */
import Head from "next/head";
import { Header, MediaDetails } from "@/components";
import { getMediaDetails } from "@/services/TMDB_API";

export default function Details({ media }) {
  return (
    <>
      <Head>
        <title>NextFlix - Media details</title>
      </Head>

      <Header />

      {media && <MediaDetails media={media} />}
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { mediaType, mediaId } = context.params;

  const media = await getMediaDetails(mediaType, mediaId);

  return {
    props: { media },
  };
};
