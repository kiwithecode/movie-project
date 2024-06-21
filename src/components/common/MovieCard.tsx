import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";
import RatingStars from "./RatingStars";

const MovieCard: React.FC<Movie> = ({
  id,
  title,
  poster_path,
  vote_average,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md dark:shadow-custom-dark bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text mx-1 my-2">
      <Link to={`/movie/${id}`}>
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <RatingStars rating={vote_average} />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
