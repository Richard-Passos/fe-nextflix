/* Components */
import { Pagination } from "@/components";
import { useRouter } from "next/router";

/* Logic */
import { useSelector } from "react-redux";

export default function Favorites() {
  const { favs } = useSelector((theme) => theme.favMedias);
  console.log("file: index.jsx:10  Favorites  favs", favs);
  const { currPage } = useRouter().query;

  const contentPerPage = 20;
  const medias = favs.slice(
    (currPage - 1) * contentPerPage,
    contentPerPage * currPage
  );

  const totalPages = favs.length / contentPerPage;

  return (
    <section>
      <Pagination
        medias={medias}
        baseLink="/favorites"
        totalPages={Math.ceil(totalPages)}
      />
    </section>
  );
}
