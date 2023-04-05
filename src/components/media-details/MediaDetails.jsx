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

const test = "12";
console.log(test);
test;

export default function MediaDetails({ details, videos }) {
  const router = useRouter();
  console.log("file: MediaDetails.jsx:7  MediaDetails  details", details);
  console.log("file: MediaDetails.jsx:7  MediaDetails  videos", videos);
  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);

  const releaseDate = details
    ? new Date(details.release_date ?? details.first_air_date)
    : null;

  const runTime = details
    ? details.runtime ?? details.episode_run_time[0] ?? 0
    : 0;

  const createdBy = details
    ? details.created_by ?? details.production_companies
    : [];

  const rating = details
    ? Number(
        String(details.vote_average / 2)
          .split(".")
          .map((n, i) => (i === 1 ? (n > 5 ? 5 : 0) : n))
          .join(".")
      )
    : 0; /* Round to n.5 or n.0 */

  const [isModalOpen, setIsModalOpen] = useState(false);

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
          priority
          onLoad={() => setIsImageLoad(true)}
          style={isImageLoad ? {} : { position: "absolute" }}
        />
        <SkeletonLoader
          width={300}
          height={450}
          background={theme.colors.theme}
          style={
            !isImageLoad
              ? {
                  minWidth: "300px",
                  position: "relative",
                  borderRadius: "2rem",
                }
              : { display: "none" }
          }
        />

        <div className="text-details">
          <h2 className="title">{details.title ?? details.name}</h2>

          <ul className="small-details-list">
            <li>
              <div className="container-flex">
                {details.genres.map((genre, i) => (
                  <div key={`key-genre-${i}`}>
                    <p className="genres-name">{genre.name}</p>

                    {details.genres.length > ++i && (
                      <span role="separator">|</span>
                    )}
                  </div>
                ))}
              </div>
            </li>

            <li>
              <div className="container-flex">
                <h4>Release date:</h4>
                <p>
                  {releaseDate
                    ? `${MONTHS[releaseDate.getMonth()]} ${
                        releaseDate.getDate() + 1
                      }, ${releaseDate.getFullYear()}`
                    : "Release date not found"}
                </p>

                <span role="separator">|</span>

                <h4>Runtime:</h4>
                <p>
                  {runTime >= 60
                    ? `${Math.trunc(runTime * 0.0166667)}h ${Math.floor(
                        (runTime * 0.0166667 -
                          Math.trunc(runTime * 0.0166667)) /
                          0.0166667
                      )}m`
                    : `${runTime}m`}
                </p>
                {/* Convert runtime to hour and minutes */}
              </div>
            </li>
          </ul>

          <div className="rating-container">
            <div>
              <ReactStarsRating
                isEdit={false}
                value={rating}
                primaryColor={colorRating[Math.ceil(rating * 2)]}
              />
              <span>{textRating[Math.ceil(rating * 2)]}</span>
            </div>

            <div className="favorite-btn-container">
              <Heart size={15} />
            </div>
          </div>

          <div className="container-flex flex-column">
            <h3>Creator{createdBy.length !== 1 ? "s" : null}</h3>

            <div className="container-flex">
              {createdBy &&
                createdBy.map((creator, i) => (
                  <div key={`key-creator-${i}`} className="creators-name">
                    <p>{creator.name}</p>

                    {createdBy.length > ++i && <span role="separator">|</span>}
                  </div>
                ))}
            </div>
          </div>

          <div className="overview-container">
            <h3 className="overview-title">Overview</h3>

            <p>{details.overview}</p>
          </div>

          {videos[0] && (
            <div className="trailer-container">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isModalOpen}
                videoId={
                  videos.filter((video) => video.type === "Trailer")[0].key ||
                  videos[0].key
                }
                onClose={() => setIsModalOpen(false)}
                className="trailer-modal"
              />

              <button
                className="trailer-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <Play size={20} /> Play Trailer
              </button>
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
