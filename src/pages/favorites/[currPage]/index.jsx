/* Components */
import Head from "next/head";
import { NotFound, Pagination } from "@/components";

/* Logic */
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Favorites() {
  const { favs } = useSelector(({ favMedias }) => favMedias);

  const currPage = Math.max(useRouter().query.currPage, 1);
  const contentPerPage = 20;

  const medias = favs.slice(
    (currPage - 1) * contentPerPage,
    contentPerPage * currPage
  );
  const totalPages = favs.length / contentPerPage;

  return (
    <>
      <Head>
        <title>NextFlix - Favorites</title>
      </Head>

      {currPage ? (
        <Pagination
          medias={medias}
          baseLink="/favorites"
          totalPages={Math.ceil(totalPages)}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
}
