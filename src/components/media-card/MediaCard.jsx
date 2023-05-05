/* Components */
import { Container } from "./MediaCard.style";
import Link from "next/link";
import { Image, IMG_ORIGIN_PATH, normalizeDate, toggleFavState } from "@/utils";
import { FiHeart } from "react-icons/fi";

/* Logic */
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function MediaCard({ media }) {
  const { type, id, src, title, releaseDate } = normalizeMedia(media);

  const detailsPath = `/${type}/details/${id}`;

  /* Control favMedias state */
  const { favs } = useSelector(({ favMedias }) => favMedias);
  const [isFav, setIsFav] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFav(favs.find((media) => media.id === id));
  }, [favs]);
  /*  */

  return (
    <Container>
      <Link href={detailsPath}>
        <Image
          src={src ?? "/images/imgNotFound.svg"}
          alt={title}
          width={175}
          height={230}
        />
      </Link>

      <Link href={detailsPath}>
        <h2 className="title">{title}</h2>
      </Link>

      <div>
        <small>{releaseDate}</small>

        <FiHeart
          className={isFav ? "fav" : ""}
          size="1.7rem"
          onClick={() => toggleFavState(setIsFav, dispatch, media)}
        />
      </div>
    </Container>
  );
}

const normalizeMedia = (media) => {
  const {
    name,
    title = name,
    id,
    poster_path,
    release_date,
    first_air_date,
  } = media;

  const type = title ? "movie" : "tv";
  const src = poster_path ? IMG_ORIGIN_PATH + poster_path : null;
  const releaseDate = normalizeDate(release_date ?? first_air_date);

  return {
    type,
    id,
    src,
    title,
    releaseDate,
  };
};
