import { tmdb } from "./api";
import { Movie, MovieDetails } from "../../types/movie";

export const getTopRatedMovies = async (
  page = 1
): Promise<{ results: Movie[]; total_pages: number }> => {
  try {
    const response = await tmdb.get("/movie/top_rated", {
      params: { language: "en-US", page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw new Error("Failed to fetch top-rated movies");
  }
};

export const searchMovies = async (
  query: string,
  page = 1
): Promise<{ results: Movie[]; total_pages: number }> => {
  try {
    const response = await tmdb.get("/search/movie", {
      params: { query, language: "en-US", page },
    });
    return response.data;
  } catch (error) {
    console.error(`Error searching for movies with query "${query}":`, error);
    throw new Error(`Failed to search for movies with query "${query}"`);
  }
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  try {
    const response = await tmdb.get(`/movie/${id}`, {
      params: { language: "en-US", append_to_response: "genres" },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID "${id}":`, error);
    throw new Error(`Failed to fetch details for movie ID "${id}"`);
  }
};
