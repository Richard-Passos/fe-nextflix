/* Components */
import Head from "next/head";
import { Header, Pagination } from "@/components";

/* Logic */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMedia } from "@/services/TMDB_API";

export default function Medias() {
  const router = useRouter();

  const [search, setSearch] = useState("a" /* Initial request to TMDB API */);

  const [medias, setMedias] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    searchMedia(setMedias, search, setTotalPages);
    router.push("/search/1");
  }, [search]);

  useEffect(() => {
    if (router.query.currPage)
      searchMedia(setMedias, search, null, router.query.currPage);
  }, [router.query]);

  return (
    <>
      <Head>
        <title>NextFlix - Pagination</title>
      </Head>

      <Header input setState={setSearch} />

      <Pagination medias={medias} totalPages={totalPages} />
    </>
  );
}
