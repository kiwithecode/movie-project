export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  }
  
  export interface MovieDetails {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    genres: { name: string }[];
    runtime: number;
    overview: string;
  }
  