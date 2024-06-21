import { useEffect, useState } from "react";
import { getTopRatedMovies, searchMovies } from "../services/tmdb/movieService";
import { Movie } from "../types/movie";

const useMovies = (
  searchTerm: string,
  page: number
): { movies: Movie[]; totalPages: number; loading: boolean } => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = searchTerm
          ? await searchMovies(searchTerm, page)
          : await getTopRatedMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page]);

  return { movies, totalPages, loading };
};

export default useMovies;
