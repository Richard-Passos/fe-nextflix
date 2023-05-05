/* Components */
import Head from "next/head";
import { InputSearch, Pagination } from "@/components";

/* Logic */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { searchMedia } from "@/services/TMDB_API";

export default function SearchMedias() {
  const router = useRouter();
  const { currPage } = useRouter().query;

  const baseLink = "/search";

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 800);

  const [medias, setMedias] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    searchMedia(debouncedSearch, setMedias, null, currPage);
  }, [currPage]);

  useEffect(() => {
    searchMedia(debouncedSearch, setMedias, setTotalPages);

    router.push(`${baseLink}/1`);
  }, [debouncedSearch]);

  return (
    <>
      <Head>
        <title>NextFlix - Search</title>
      </Head>

      <InputSearch
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Pagination medias={medias} totalPages={totalPages} baseLink={baseLink} />
    </>
  );
}
