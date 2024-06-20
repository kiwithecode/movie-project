import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdb/movieService';
import { MovieDetails as MovieDetailsType } from '../types/movie';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          const data = await getMovieDetails(id);
          setMovie(data);
        } else {
          throw new Error('Movie ID is undefined');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {movie && (
        <>
          <h1 className="text-3xl font-bold my-8">{movie.title}</h1>
          <div className="flex flex-col md:flex-row">
            <img
              className="w-full md:w-1/3 rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="md:ml-8 bg-white dark:bg-gray-700 p-4 rounded-lg">
              <p className="mt-4 md:mt-0">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
              </p>
              <p>
                <strong>Duration:</strong> {movie.runtime} minutes
              </p>
              <p className="mt-4">{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
