/* Components */
import Image from "next/image";
import { DetailsContainer, Details } from "./MediaDetails.style";
import SkeletonLoader from "tiny-skeleton-loader-react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Heart, Play } from "@styled-icons/bootstrap";
import ModalVideo from "react-modal-video";

/* Logic */
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { useRouter } from "next/router";

const IMG_ORIGIN_PATH = "https://image.tmdb.org/t/p/original";

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

const textRating = [
  "Terrible",
  "Terrible+",
  "Bad",
  "Bad+",
  "Average",
  "Average+",
  "Great",
  "Great+",
  "Awesome",
  "Awesome+",
];
const colorRating = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045",
];

export default function MediaDetails({ details, videos }) {
  const router = useRouter();
  console.log("file: MediaDetails.jsx:7  MediaDetails  details", details);
  console.log("file: MediaDetails.jsx:7  MediaDetails  videos", videos);

  const releaseDate = details
    ? new Date(details.release_date ?? details.first_date_air)
    : "";
  const rating = details
    ? Number(
        String(details.vote_average / 2)
          .split(".")
          .map((n, i) => (i === 1 ? (n > 5 ? 5 : 0) : n))
          .join(".")
      )
    : 0; /* Round to n.5 or n.0 */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isImageLoad, setIsImageLoad] = useState(false);

  const theme = useContext(ThemeContext);

  return !router.isFallback && details ? (
    <DetailsContainer backgroundImage={IMG_ORIGIN_PATH + details.backdrop_path}>
      <div className="background-gradient" />

      <Details>
        <Image
          className="poster-img"
          src={IMG_ORIGIN_PATH + details.poster_path}
          alt="Media image"
          width={300}
          height={450}
          quality={100}
          priority
          onLoad={() => setIsImageLoad(true)}
        />
        <SkeletonLoader
          width="30rem"
          height="45rem"
          background={theme.colors.theme}
          style={
            !isImageLoad
              ? { position: "absolute", borderRadius: "2rem" }
              : { display: "none" }
          }
        />

        <div>
          <h2>{details.title ?? details.name}</h2>

          <div>
            <div className="genres-container">
              {details.genres.map((genre, i) => (
                <p key={`key-genre-${i}`} className="genres-name">
                  {genre.name}
                </p>
              ))}
            </div>

            <div>
              <h4>Release date</h4>
              <p>
                {releaseDate
                  ? `${MONTHS[releaseDate.getMonth()]} ${
                      releaseDate.getDate() + 1
                    }, ${releaseDate.getFullYear()}`
                  : "Release date not found"}
              </p>

              <h4>Runtime</h4>
              <p>
                {details.runtime >= 60
                  ? `${Math.trunc(details.runtime * 0.0166667)}h ${Math.floor(
                      (details.runtime * 0.0166667 -
                        Math.trunc(details.runtime * 0.0166667)) /
                        0.0166667
                    )}m`
                  : `${details.runtime}m`}
              </p>
              {/* Convert runtime to hour and minutes */}
            </div>

            <div>
              <ReactStarsRating
                isEdit={false}
                value={rating}
                primaryColor={colorRating[Math.ceil(rating)]}
              />
              <span>{textRating[Math.ceil(rating)]}</span>

              <Heart size={20} />
            </div>
          </div>

          <div>
            <h3>Overview</h3>

            <p>{details.overview}</p>
          </div>

          {videos && (
            <div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isModalOpen}
                videoId={
                  videos.filter((video) => video.type === "Trailer")[0].key
                }
                onClose={() => setIsModalOpen(false)}
                className="trailer-modal"
              />

              <button
                className="btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                <Play size={20} /> Play Trailer
              </button>

              {/* <a
              href={`https://www.youtube.com/watch?v=${
                videos.filter((video) => video.type === "Trailer")[0].key
              }`}
              target="_blank"
            >
              <Play size={20} /> Play Trailer
            </a> */}
            </div>
          )}
        </div>
      </Details>
    </DetailsContainer>
  ) : (
    <SkeletonLoader
      height="51rem"
      background={theme.colors.theme}
      style={{ marginTop: "-5rem" }}
    />
  );
}
