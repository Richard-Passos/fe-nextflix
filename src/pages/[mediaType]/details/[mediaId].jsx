/* Components */
import Head from "next/head";
import { MediaDetails } from "@/components";
import { getMediaDetails } from "@/services/TMDB_API";

/* Logic */
import { useRouter } from "next/router";

export default function Details({ media }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NextFlix - Media Details</title>
      </Head>

      {media && <MediaDetails media={media} isFallback={router.isFallback} />}
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
