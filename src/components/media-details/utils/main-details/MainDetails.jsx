/* Components */
import { Container, DFlex } from "./MainDetails.style";
import { Image, IMG_ORIGIN_PATH, normalizeDate, toggleFavState } from "@/utils";
import { Rating } from "@/components";
import { FiHeart, FiPlay } from "react-icons/fi";
import ModalVideo from "react-modal-video";
import "node_modules/react-modal-video/scss/modal-video.scss";

/* Logic */
import { store } from "@/redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function MainDetails({ media, displayContent }) {
  /* Media data */
  const { details, videos } = media;

  const { poster_path, title, runtime, rating, releaseDate, genres, overview } =
    _normalizeMediaDetails(details);
  /*  */

  /* Control favMedias state */
  const { favs } = store.getState().favMedias;
  const [isFav, setIsFav] = useState(favs.find(({ id }) => id === details.id));

  const dispatch = useDispatch();
  /*  */

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Image
        width={275}
        height={425}
        src={
          poster_path
            ? IMG_ORIGIN_PATH + poster_path
            : "/images/imgNotFound.svg"
        }
        alt="Media image"
        priority
        quality={75}
        className="poster-img"
      />

      <div className="text-details">
        <h2 className="title">{title}</h2>

        <DFlex className="small">
          <h4>Genres:</h4>

          {displayContent(genres)}
        </DFlex>

        <DFlex className="rating">
          <Rating rating={rating} />

          <FiHeart
            size="2rem"
            className={`fav-icon ${isFav ? "is-fav" : ""}`}
            onClick={() => toggleFavState(setIsFav, dispatch, details)}
          />
        </DFlex>

        <DFlex className="small">
          {displayContent([
            { title: "Release date:", name: releaseDate },
            { title: "Runtime:", name: runtime },
          ])}
        </DFlex>

        <DFlex className="column">
          {displayContent([{ title: "Overview", name: overview }])}
        </DFlex>

        <div className="trailer-container">
          {videos.length ? (
            <>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isModalOpen}
                videoId={videos[0].key}
                onClose={() => setIsModalOpen(false)}
              />

              <button
                className="trailer-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <FiPlay size="1.7rem" /> Play Trailer
              </button>
            </>
          ) : (
            <p className="not-found">Trailer Not Found</p>
          )}
        </div>
      </div>
    </Container>
  );
}
const _normalizeMediaDetails = (details) => {
  const {
    poster_path,
    name,
    title = name,
    episode_run_time,
    vote_average,
    release_date,
    first_air_date,
    genres,
    overview,
  } = details;
  let { runtime = episode_run_time[0] } = details;

  const runtimeHour = Math.trunc(runtime / 60);
  runtime =
    runtime >= 60
      ? `${runtimeHour}h ${runtime - runtimeHour * 60}m`
      : `${runtime}m`;

  const rating = Math.ceil(vote_average / 2) || 0;

  const releaseDate = normalizeDate(release_date ?? first_air_date);

  return {
    poster_path,
    title,
    runtime,
    rating,
    releaseDate,
    genres,
    overview,
  };
};
