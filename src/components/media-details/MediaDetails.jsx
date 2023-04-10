/* Components */
import {
  DetailsContainer,
  MainDetailsContainer,
  MainDetails,
  Grid,
  SkelentonsContainer,
} from "./MediaDetails.style";
import { Image } from "@/utils";
import ReactStarsRating from "react-awesome-stars-rating";
import { Heart, RightArrow } from "@styled-icons/boxicons-regular";
import ModalVideo from "react-modal-video";
import { Carousel } from "../carousel";
import SkeletonLoader from "tiny-skeleton-loader-react";

/* Logic */
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { useDispatch } from "react-redux";
import { store, toggleFavMedias } from "@/redux";

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

export default function MediaDetails({ media, isFallback }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Skeleton loader uses*/
  const theme = useContext(ThemeContext);

  const [isImageLoad, setIsImageLoad] = useState(false);
  /*  */

  /* Some Media data */
  const { details, videos, castNCrew, similarMovies } = media;

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
  /*  */

  /* Control favMedias state */
  const { favs } = store.getState().favMedias;
  const [isFav, setIsFav] = useState(favs.includes(details.id));

  const dispatch = useDispatch();

  const toggleFavState = () => {
    setIsFav((prevState) => !prevState);

    dispatch(toggleFavMedias(details.id));
  };
  /*  */

  return !isFallback ? (
    <DetailsContainer>
      <MainDetailsContainer
        backgroundImage={IMG_ORIGIN_PATH + details.backdrop_path}
      >
        <div className="background-gradient" />

        <MainDetails>
          <div className="poster-container">
            <SkeletonLoader
              width="30rem"
              height="45rem"
              background={theme.colors.theme}
              style={
                !isImageLoad
                  ? {
                      position: "absolute",
                      borderRadius: "2rem",
                    }
                  : { display: "none" }
              }
            />
            <Image
              className="poster-img"
              src={IMG_ORIGIN_PATH + details.poster_path}
              alt="Media image"
              width={300}
              height={450}
              priority
              onLoad={() => setIsImageLoad(true)}
            />
          </div>

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
                      ? `${MONTHS[releaseDate.getMonth()]} ${(
                          releaseDate.getDate() + 1
                        )
                          .toString()
                          .padStart(2, "0")}, ${releaseDate.getFullYear()}`
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
                <Heart
                  size="2rem"
                  className={isFav ? "fav" : ""}
                  onClick={toggleFavState}
                />
              </div>
            </div>

            <div className="container-flex flex-column">
              <h3>Creator{createdBy.length !== 1 ? "s" : null}</h3>

              <div className="container-flex">
                {createdBy.length
                  ? createdBy.map((creator, i) => (
                      <div key={`key-creator-${i}`} className="creators-name">
                        <p>{creator.name}</p>

                        {createdBy.length > ++i && (
                          <span role="separator">|</span>
                        )}
                      </div>
                    ))
                  : "-"}
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
                  <RightArrow size="1.7rem" /> Play Trailer
                </button>
              </div>
            )}
          </div>
        </MainDetails>
      </MainDetailsContainer>

      <Grid>
        <div className="cast-container">
          {castNCrew && (
            <Carousel
              children={null}
              title="Cast & Crew"
              slides={castNCrew}
              type="cast"
            />
          )}
        </div>

        <div className="details-container">
          <div>
            <h3>Status</h3>

            <p>{details.status}</p>
          </div>

          {details.number_of_episodes && details.number_of_seasons ? (
            <>
              <div>
                <h3>Number of Episodes</h3>

                <p>{details.number_of_episodes.toString().padStart(2, "0")}</p>
              </div>

              <div>
                <h3>Number of Seasons</h3>

                <p>{details.number_of_seasons.toString().padStart(2, "0")}</p>
              </div>
            </>
          ) : null}

          <div>
            <h3>Budget</h3>

            <p>
              {details.budget ? `$${normalizeNumber(details.budget)}` : "-"}
            </p>
          </div>

          <div>
            <h3>Revenue</h3>

            <p>
              {details.revenue ? `$${normalizeNumber(details.revenue)}` : "-"}
            </p>
          </div>

          <div>
            <h3>Homepage Oficial</h3>

            {details.homepage ? (
              <a href={details.homepage}>{details.homepage}</a>
            ) : (
              <p>-</p>
            )}
          </div>
        </div>

        <div className="similar-movies">
          {similarMovies && (
            <Carousel title="Similar Movies" slides={similarMovies} />
          )}
        </div>
      </Grid>
    </DetailsContainer>
  ) : (
    <SkelentonsContainer>
      <SkeletonLoader height="51rem" background={theme.colors.theme} />
      <div>
        <SkeletonLoader
          width="70vw"
          height="25rem"
          background={theme.colors.theme}
        />
        <SkeletonLoader
          width="30vw"
          height="25rem"
          background={theme.colors.theme}
        />
      </div>

      <SkeletonLoader height="40rem" background={theme.colors.theme} />
    </SkelentonsContainer>
  );
}

const normalizeNumber = (n) =>
  String(n)
    .split("")
    .reverse()
    .join("")
    .replaceAll(/(\d\d\d)/g, "$1.")
    .split("")
    .reverse()
    .join("")
    .replace(/(^[.])/, "");