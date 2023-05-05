/* Logic */
import { toggleFavMedias } from "@/redux";

export const toggleFavState = (setIsFav, dispatch, media) => {
  setIsFav((prevState) => !prevState);

  const {
    id,
    first_air_date,
    release_date = first_air_date,
    poster_path,
    name,
    title = name,
  } = media;

  dispatch(
    toggleFavMedias({
      id,
      release_date,
      poster_path,
      title,
      type: name ? "tv" : "movie",
    })
  );
};
