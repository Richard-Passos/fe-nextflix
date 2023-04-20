/* Components */
import { CardContainer } from "./MediaCard.style";
import { Image } from "@/utils";
import { Heart } from "@styled-icons/boxicons-regular";
import Link from "next/link";

/* Logic */
import { useContext, useEffect, useState } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ThemeContext } from "styled-components";
import { toggleFavMedias } from "@/redux";
import { useDispatch, useSelector } from "react-redux";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function MediaCard({ media }) {
  const title = media.title ?? media.name;
  const src = media.poster_path ?? media.backdrop_path;
  const type = media.title ? "movie" : "tv";
  const id = media.id;

  /* Normalize date */
  const date = new Date(media.release_date ?? media.first_air_date);

  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");

  const releaseDate = date
    ? `${month} ${day}, ${year}`
    : "Release date not found";
  /*  */

  /* Skeleton loader uses */
  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    setIsImageLoad(false);
  }, [media]);
  /*  */

  /* Control favMedias state */
  const { favs } = useSelector((state) => state.favMedias);
  const [isFav, setIsFav] = useState(favs.find((media) => media.id === id));

  const dispatch = useDispatch();

  const toggleFavState = () => {
    setIsFav((prevState) => !prevState);

    dispatch(
      toggleFavMedias({
        id,
        release_date: media.release_date ?? media.first_air_date,
        poster_path: media.poster_path,
        title,
        type,
      })
    );
  };

  useEffect(() => {
    setIsFav(favs.find((media) => media.id === id));
  }, [favs]);
  /*  */

  return (
    <CardContainer>
      <Link href={`/${type}/details/${id}`} className="image-container">
        <p className="details-p">Go to media</p>
        <button className="details-btn">Details</button>

        <SkeletonLoader
          width="17.5rem"
          height="23rem"
          background={theme.colors.theme}
          style={
            !isImageLoad
              ? { position: "absolute", borderRadius: "0" }
              : { display: "none" }
          }
        />

        <Image
          src={
            src
              ? `https://image.tmdb.org/t/p/original${src}`
              : "/images/noImgFound.jpg"
          }
          alt={title}
          width={175}
          height={230}
          quality={25}
          onLoad={() => setIsImageLoad(true)}
        />
      </Link>

      <Link href={`/${type}/details/${id}`}>
        <h2 className="card-title">{title}</h2>
      </Link>

      <div className="container">
        <small>{releaseDate}</small>

        <div className="icon-favorite-container" role="button">
          <Heart
            className={isFav ? "fav" : ""}
            size="1.7rem"
            onClick={toggleFavState}
          />
        </div>
      </div>
    </CardContainer>
  );
}
