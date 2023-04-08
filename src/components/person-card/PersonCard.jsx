/* Components */
import { CardContainer } from "./PersonCard.style";
import { Image } from "@/utils";
import Link from "next/link";

/* Logic */
import { useContext, useState } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { ThemeContext } from "styled-components";

export default function PersonCard({ person }) {
  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);

  const normalizedPersonPath = person
    ? `https://www.themoviedb.org/person/${person.id}-${person.name
        .toLowerCase()
        .replaceAll(/ /g, "-")}`
    : "";

  return (
    <CardContainer>
      {person && (
        <Link href={normalizedPersonPath} target="_blank">
          <div>
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
              height={100}
              quality={25}
              onLoad={() => setIsImageLoad(true)}
            />

            <h4>{person.name}</h4>
            <h5>{person.character ?? person.job}</h5>
          </div>
        </Link>
      )}
    </CardContainer>
  );
}
