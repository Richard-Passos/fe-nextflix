/* Components */
import Head from "next/head";
import { Pagination } from "@/components";
import { SearchInput } from "@/utils";

/* Logic */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMedia } from "@/services/TMDB_API";
import { useDebounce } from "use-debounce";

export default function Medias() {
  const router = useRouter();
  const baseLink = "/search";

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 800);

  const [medias, setMedias] = useState([]);
  const [page] = useState(router.query.currPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    searchMedia(setMedias, debouncedSearch, setTotalPages);
    router.push(`${baseLink}/1`);
  }, [debouncedSearch]);

  useEffect(() => {
    searchMedia(setMedias, debouncedSearch, null, page);
  }, [page]);

  return (
    <>
      <Head>
        <title>NextFlix - Search</title>
      </Head>

      <SearchInput
        className="search-input"
        type="search"
        placeholder="Media Title"
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />

      <Pagination medias={medias} totalPages={totalPages} baseLink={baseLink} />
    </>
  );
}
