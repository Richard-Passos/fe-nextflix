/* Components */
import Head from "next/head";
import { Header, MediaDetails } from "@/components";
import { getMediaDetails } from "@/services/TMDB_API";

export default function Details({ details, videos }) {
  return (
    <>
      <Head>
        <title>NextFlix - Media details</title>
      </Head>

      <Header />

      <MediaDetails details={details} videos={videos} />
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

  const { details, videos } = await getMediaDetails(mediaType, mediaId);

  return {
    props: { details, videos },
  };
};
