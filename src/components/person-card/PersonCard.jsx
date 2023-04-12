/* Components */
import { CardContainer } from "./PersonCard.style";
import { Image } from "@/utils";

/* Logic */
import { useContext, useEffect, useState } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ThemeContext } from "styled-components";

export default function PersonCard({ person }) {
  /* Skeleton loader uses */
  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);
  console.log("file: PersonCard.jsx:15  PersonCard  isImageLoad", {
    name: isImageLoad,
    isImageLoad,
  });

  useEffect(() => {
    setIsImageLoad(false);
  }, [person]);
  /*  */

  const normalizedPersonPath = person
    ? `https://www.themoviedb.org/person/${person.id}-${person.name
        .toLowerCase()
        .replaceAll(" ", "-")}`
    : "";

  if (person)
    return (
      <CardContainer href={normalizedPersonPath} target="_blank">
        <div className="image-container">
          <SkeletonLoader
            width="10rem"
            height="10rem"
            background={theme.colors.theme}
            style={
              !isImageLoad
                ? { position: "absolute", borderRadius: "50%" }
                : { display: "none" }
            }
          />

          <Image
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
                : "/images/noImgFound.jpg"
            }
            alt={person.name}
            width={100}
            height={150}
            quality={25}
            onLoad={() => setIsImageLoad(true)}
          />
        </div>

        <h4>{person.name}</h4>
        <p>{person.character ?? person.job}</p>
      </CardContainer>
    );
}
