/* Logic */
import axios from "axios";
const { encode } = require("url-encode-decode");

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

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
    .catch((error) => console.log(error));
};

export const getMedias = async (mediaType, classification, page = 1) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/${classification}?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then(({ data }) => {
      return { results: data.results, totalPages: data.total_pages };
    })
    .catch((error) => console.log(error));
};

export const getLatestMedia = async (mediaType) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/latest?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => data)
    .catch((error) => console.log(error));
};
