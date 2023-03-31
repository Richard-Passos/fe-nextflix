/* Components */
import { CardContainer } from "./Card.style";
import Image from "next/image";
import { Heart } from "@styled-icons/bootstrap";

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

export default function card({ title, src, release_date }) {
  const releaseDate = new Date(release_date);

  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);

  return (
    <>
      <CardContainer>
        <div className="image-container">
          <button className="synopsis-btn">Synopsis</button>
          <Image
            src={src}
            alt={title}
            width={200}
            height={230}
            quality={50}
            onLoad={() => setIsImageLoad(true)}
            className={isImageLoad ? "" : "hide-img"}
          />
        </div>
        <SkeletonLoader
          width="20rem"
          height="23rem"
          background={theme.colors.theme}
          style={!isImageLoad ? { position: "absolute" } : { display: "none" }}
        />

        <p>{title}</p>

        <div className="container">
          <small>
            {MONTHS[releaseDate.getMonth(release_date)]
              ? `${MONTHS[releaseDate.getMonth(release_date)]} ${
                  releaseDate.getDate(release_date) + 1
                }, ${releaseDate.getFullYear(release_date)}`
              : "Release date not found"}
          </small>

          <div className="icon-favorite-container">
            <Heart className="icon-favorite" />
          </div>
        </div>
      </CardContainer>
    </>
  );
}
