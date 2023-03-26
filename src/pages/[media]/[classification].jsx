/* Components */
import { Pagination } from "@/components";

/* Logic */
import { useRouter } from "next/router";

export default function Medias() {
  const { query } = useRouter();

  return (
    <Pagination mediaType={query.media} classification={query.classification} />
  );
}
