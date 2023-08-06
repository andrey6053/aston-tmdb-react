import React from "react";

export default function FilmImage({ poster_path, title }) {
  return <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />;
}
