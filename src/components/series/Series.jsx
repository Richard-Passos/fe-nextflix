/* Components */
import { SeriesContainer } from "./Series.style";
import Link from "next/link";

/* Logic */
import { useEffect, useState } from "react";
import { getMedia } from "@/services/TMDB_API";

export default function Movies({ classification }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getMedia(setSeries, "tv", classification);
  }, []);
  return (
    <>
      <SeriesContainer>
        {series &&
          series.map((serie) => (
            <p key={`key-serie-${serie.id}-${classification}`}>{serie.name}</p>
          ))}
      </SeriesContainer>
      <Link href={`/tv/${classification}`}>Show all</Link>
    </>
  );
}
