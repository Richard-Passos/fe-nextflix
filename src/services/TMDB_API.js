/* Logic */
import axios from "axios";
const { encode } = require("url-encode-decode");

const API_KEY = "b681b7a1ecdbcf0bbb1bc98e9edd99ef";

export const searchMovies = async (
  setState,
  movieName,
  setTotalPages,
  page
) => {
  const encodeMovieName = encode(movieName);

  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=true&query=${encodeMovieName}&page=${page}`
    )
    .then(({ data }) => {
      setTotalPages(data.total_pages);
      setState(data.results);
    })
    .catch((error) => console.log(error));
};
