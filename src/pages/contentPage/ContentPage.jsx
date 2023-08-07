import React from "react";
import "./contentPage.scss";
import Loader from "../../components/UI/loader/Loader";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import Image from "../../components/UI/Image/Image";

export default function ContentPage() {
  const content = useCurrentPage();
  if (!content) return <Loader />;
  const { type } = content;
  return (
    <div className="post">
      {content.backdrop_path && (
        <img src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`} className="post__backdrop" alt="" />
      )}
      <section className="post__content">
        {type === "film" ? (
          <>
            <div className="post__poster">
              <Image poster_path={content.poster_path} alt={content.title} />
            </div>
            <div className="post__body">
              <h1>{content.title}</h1>
              <span>Оценка: {content.vote_average}</span>
              <span>Страны производства: </span>
              {content.production_countries.map((country) => (
                <span key={country.name}>{country.name} </span>
              ))}
              <span>Бюджет: {content.budget}$</span>
              <span>Описание: {content.overview}</span>
            </div>
          </>
        ) : (
          <>
            <div className="post__poster">
              <Image poster_path={content.profile_path} alt={content.name} />
            </div>
            <div className="post__body">
              <h1>{content.name}</h1>
              <span>Страна: {content.place_of_birth}</span>
              <span>Год рождения: {content.birthday}</span>
              <span>Биография: {content.biography}</span>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
