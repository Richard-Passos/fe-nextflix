/* Logic */
import axios from "axios";
import { API_KEY } from "API_KEY";
import { encode } from "url-encode-decode";

export const getMedias = async (mediaType, classification, page = 1) =>
  await axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/${classification}?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then(({ data }) => {
      return { results: data.results, totalPages: data.total_pages };
    })
    .catch(() => {
      return { results: null, totalPages: 1 };
    });

export const searchMedia = async (
  search,
  setState,
  setTotalPages = null,
  page = 1
) => {
  const encodeSearch = encode(search);

  await axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&query=${encodeSearch}`
    )
    .then(({ data }) => {
      setState(data.results);

      if (setTotalPages) setTotalPages(data.total_pages);
    })
    .catch(() => setState([]));
};

export const getMediaDetails = async (mediaType, mediaId) => {
  const repeatUrl = (queryFor = null) =>
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}${
      queryFor ? `/${queryFor}` : ""
    }?api_key=${API_KEY}&language=en-US`;

  const [details, videos, castNCrew, similarMovies] = await Promise.all([
    axios.get(repeatUrl()),
    axios.get(repeatUrl("videos")),
    axios.get(repeatUrl("credits")),
    axios.get(repeatUrl("similar")),
  ])
    .then((values) => values.map(({ data }) => data))
    .catch(() => []);

  return details
    ? {
        details,
        videos: videos.results,
        castNCrew: [...castNCrew.cast, ...castNCrew.crew],
        similarMovies: similarMovies.results,
      }
    : null;
};
