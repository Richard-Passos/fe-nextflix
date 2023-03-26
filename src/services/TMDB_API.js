/* Logic */
import axios from "axios";
const { encode } = require("url-encode-decode");

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export const searchContent = async (setState, name, setTotalPages, page) => {
  const encodeName = encode(name);

  await axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${encodeName}`
    )
    .then(({ data }) => {
      setTotalPages(data.total_pages);
      setState(data.results);
    })
    .catch((error) => console.log(error));
};

export const getMedia = async (
  setState,
  mediaType,
  classification,
  setTotalPages = null,
  page = 1
) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/${mediaType}/${classification}?api_key=${API_KEY}&language=pt-BR&page=${page}`
    )
    .then(({ data }) => {
      setTotalPages ? setTotalPages(data.total_pages) : null;
      setState(classification === "latest" ? data : data.results);
    })
    .catch((error) => console.log(error));
};
