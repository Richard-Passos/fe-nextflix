/* Components */
import { CardContainer } from "./Card.style";
import Image from "next/image";

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

  return (
    <>
      <CardContainer>
        <Image src={src} alt={title} width={250} height={350} quality={50} />

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
