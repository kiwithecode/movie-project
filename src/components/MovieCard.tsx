import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
}

const MovieCard: FC<MovieCardProps> = ({ id, title, posterPath, rating }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Link to={`/movie/${id}`}>
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">Rating: {rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
