/* Logic */
import axios from "axios";
const { encode } = require("url-encode-decode");

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export const getMedias = async (mediaType, classification, page = 1) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/${classification}?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then(({ data }) => {
      return { results: data.results, totalPages: data.total_pages };
    })
    .catch(() => {
      return { results: [], totalPages: 1 };
    });
};

export const searchMedia = async (
  setState,
  search,
  setTotalPages = null,
  page = 1
) => {
  const encodeSearch = encode(search);

  await axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${encodeSearch}`
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
    .then((values) => values.map((value) => value?.data))
    .catch(() => [{}, {}, {}, {}]);

  return {
    details,
    videos: videos.results,
    castNCrew: [...castNCrew.cast, ...castNCrew.crew],
    similarMovies: similarMovies.results,
  };
};
