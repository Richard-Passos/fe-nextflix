/* Components */
import { CardContainer } from "./Card.style";
import Image from "next/image";

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
          <Image
            src={src}
            alt={title}
            width={200}
            height={250}
            quality={50}
            onLoad={() => setIsImageLoad(true)}
            className={isImageLoad ? "" : "hide-img"}
          />
        </div>
        <SkeletonLoader
          width="20rem"
          height="25rem"
          background={theme.colors.theme}
          style={!isImageLoad ? {} : { display: "none" }}
        />

        <p>{title}</p>

        <small>
          {MONTHS[releaseDate.getMonth(release_date)]
            ? `${MONTHS[releaseDate.getMonth(release_date)]} ${
                releaseDate.getDate(release_date) + 1
              }, ${releaseDate.getFullYear(release_date)}`
            : "Release date not found"}
        </small>
      </CardContainer>
    </>
  );
}
