/* Components */
import { CardContainer } from "./Card.style";
import Image from "next/image";
import { Heart } from "@styled-icons/bootstrap";

/* Logic */
import { useContext, useState } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ThemeContext } from "styled-components";
import Link from "next/link";

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

export default function card({ title, src, release_date, type, id }) {
  const releaseDate = new Date(release_date);

  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);

  return (
    <CardContainer>
      <Link href={`/details/${type}/${id}`} className="image-container">
        <p className="details-p">Go to media</p>
        <button className="details-btn">Details</button>

        <Image
          src={src}
          alt={title}
          width={200}
          height={230}
          quality={50}
          onLoad={() => setIsImageLoad(true)}
          style={isImageLoad ? {} : { position: "absolute" }}
        />

        <SkeletonLoader
          width="20rem"
          height="23rem"
          background={theme.colors.theme}
          style={
            !isImageLoad
              ? { position: "absolute", borderRadius: "0" }
              : { display: "none" }
          }
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
