import React from "react";
import Image from "../UI/Image/Image";
import { Link } from "react-router-dom";
import "./actorCard.scss";

export default function ActorCard({ data, link, linkFilms }) {
  const { profile_path, name, id, known_for } = data;
  if (!profile_path) return null;
  return (
    <section className="card actor">
      <div className="card__content">
        <div className="card__title">
          <Link to={`${id}`} onClick={() => link(id)}>
            <span>{name}</span>
            <div className="card__image">
              <Image title={name} poster_path={profile_path} />
            </div>
          </Link>
        </div>
        <div className="card__description">
          <div className="actor__known-for">
            {known_for.map((film) => (
              <Link to={`${film.id}`} onClick={() => linkFilms(film.id)} key={film.id}>
                <Image title={film.title} poster_path={film.poster_path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
