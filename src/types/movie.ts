export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieDetails {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  genres: Genre[];
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  adult: boolean;
}

export interface IconLinkProps {
  href: string;
  lightIcon: string;
  darkIcon: string;
  altText: string;
}
