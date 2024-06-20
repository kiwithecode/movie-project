import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';

const MovieCard: FC<Movie> = ({ id, title, poster_path, vote_average }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 text-black dark:text-white">
      <Link to={`/movie/${id}`}>
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 dark:text-gray-300">Rating: {vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
