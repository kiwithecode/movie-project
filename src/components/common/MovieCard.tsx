import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import RatingStars from './RatingStars';

const MovieCard: FC<Movie> = ({ id, title, poster_path, vote_average }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 text-black dark:text-white mx-1 my-2">
      <Link to={`/movie/${id}`}>
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <RatingStars rating={vote_average} />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
