import { useEffect } from "react";
import "./movies.css";
import unavaiable from "../../assets/unavailable.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../../App";
import Tag from "./Tag";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleClick = (type) => {
    const accessToken = localStorage.getItem("accessToken");
    if (type === "favorite") {
      if (isFavorite) {
        setIsFavorite(false);

        axios.delete(`${API_URL}/api/titles/favorite/${movie.imdbId}`, {
          headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        });
      } else {
        setIsFavorite(true);
        axios.post(
          `${API_URL}/api/titles/favorite/${movie.imdbId}`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
          }
        );
      }
    }

    if (type === "watchlater") {
      if (isWatchLater) {
        setIsWatchLater(false);
        axios.delete(`${API_URL}/api/titles/watchlater/${movie.imdbId}`, {
          headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        });
      } else {
        setIsWatchLater(true);
        axios.post(
          `${API_URL}/api/titles/watchlater/${movie.imdbId}`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
          }
        );
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(`${API_URL}/api/titles/favorite/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        data.forEach((element) => {
          if (element.id === movie.id) {
            setIsFavorite(true);
          }
        });
      })
      .catch((err) => console.error(err, "movie Card"));
    axios
      .get(`${API_URL}/api/titles/watchlater/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        data.forEach((element) => {
          if (element.id === movie.id) {
            setIsWatchLater(true);
          }
        });
      })
      .catch((err) => console.error(err, "movie Card"));
  }, [movie.id]);

  return (
    <li className="movie-card-Container">
      <div className="icons-card">
        <span
          className={`icon-later-container ${isWatchLater ? "icon-red" : ""}`}
          onClick={() => handleClick("watchlater")}
        >
          <FontAwesomeIcon icon={faClock} />
        </span>
        <span className={`icon-fav-container ${isFavorite ? "icon-red" : ""}`} onClick={() => handleClick("favorite")}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <div className="header-card">
        <picture className="card-container-img">
          {movie.imageurls.length > 0 ? (
            <img
              width={300}
              height={300}
              src={movie.imageurls}
              alt={movie.title}
              onError={(e) => {
                e.target.src = unavaiable;
                e.onerror = null;
              }}
            />
          ) : (
            <img src={unavaiable} alt="not avalaible" />
          )}
        </picture>
        <span className="title-card">{movie.title}</span>
      </div>
      <div className="body-card">
        <p className="synopsis-card">{movie.synopsis === "" ? "-Not Avalaible-" : movie.synopsis}</p>
        <div className="genres-container-card">
          {movie.genres.map((item) => (
            <Tag key={item} genre={item} filter={true} />
          ))}
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
