import React from "react";

export default function Image({ poster_path, title }) {
  return <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card__image" alt={title} />;
}
