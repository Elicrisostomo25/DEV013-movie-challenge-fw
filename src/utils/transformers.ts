import { Movie } from "../models/Movie";
import getMovies from "../services/APIService";

export function formatMovie(pelicula: typeof getMovies):typeof Movie {
  return { 
    id: pelicula.id,
    title: pelicula.title,
    poster_path: pelicula.poster_path,
    release_date: pelicula.release_date,
    genre_ids: pelicula.genre_ids,
    vote_average: pelicula.vote_average,
    overview: pelicula.overview,
    language: pelicula.language,
  }
}