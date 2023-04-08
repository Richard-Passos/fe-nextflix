/* Components */
import { CardContainer } from "./MediaCard.style";
import { Image } from "@/utils";
import { Heart } from "@styled-icons/bootstrap";
import Link from "next/link";

/* Logic */
import { useContext, useState } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ThemeContext } from "styled-components";

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
  const release_date = media.release_date ?? media.first_air_date;
  const type = media.title ? "movie" : "tv";
  const id = media.id;

  const releaseDate = new Date(release_date);

  const theme = useContext(ThemeContext);
  const [isImageLoad, setIsImageLoad] = useState(false);

  return (
    <CardContainer>
      <Link href={`/details/${type}/${id}`} className="image-container">
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
              ? `https://image.tmdb.org/t/p/original/${src}`
              : "/images/noImgFound.jpg"
          }
          alt={title}
          width={175}
          height={230}
          quality={25}
          onLoad={() => setIsImageLoad(true)}
        />
      </Link>

      <Link href={`/details/${type}/${id}`} className="card-title">
        {title}
      </Link>

      <div className="container">
        <small>
          {releaseDate
            ? `${MONTHS[releaseDate.getMonth()]} ${
                releaseDate.getDate() + 1
              }, ${releaseDate.getFullYear()}`
            : "Release date not found"}
        </small>

        <div className="icon-favorite-container">
          <Heart className="icon-favorite" />
        </div>
      </div>
    </CardContainer>
  );
}
