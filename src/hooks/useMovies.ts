import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const useMovies = (): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();
      setMovies(topRatedMovies);
    };

    fetchMovies();
  }, []);

  return movies;
};

export default useMovies;
