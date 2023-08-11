import React from "react";
import "./card.scss";
import Image from "../UI/Image/Image";
import { Link } from "react-router-dom";

export default function Card({ data, link }) {
  const { poster_path, title, overview, release_date, vote_average, id } = data;
  if (!poster_path || !overview) return null;
  return (
    <section className="card">
      <div className="card__content">
        <div className="card__title">
          <Link to={`${id}`} onClick={() => link(id)}>
            <div className="card__image">
              <Image title={title} poster_path={poster_path} />
            </div>
            <span>{title}</span>
          </Link>
          <div className="card__description">
            <div className="card__vote-average">
              <span>Оценка: {vote_average}</span>
            </div>
            <div className="card__date-release">
              <span>Дата выхода: {release_date}</span>
            </div>
            <div className="card__overview">
              <span>Описание: {overview}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
