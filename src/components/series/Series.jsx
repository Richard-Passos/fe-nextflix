/* Components */
import { SeriesContainer } from "./Series.style";

/* Logic */
import { useEffect, useState } from "react";
import { getMoviesOrSeries } from "@/services/TMDB_API";

export default function Movies({ classification }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getMoviesOrSeries(setSeries, "tv", classification);
  }, []);
  return (
    <SeriesContainer>
      {series &&
        series.map((serie) => (
          <p key={`key-serie-${serie.id}-${classification}`}>{serie.name}</p>
        ))}
    </SeriesContainer>
  );
}
