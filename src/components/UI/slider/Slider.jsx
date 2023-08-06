import React from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import { settings } from "../../../config/slideSettings";
import FilmImage from "../filmImage/FilmImage";
import { Link } from "react-router-dom";

export default function Slider({ data }) {
  return (
    <Slide {...settings} className="slider">
      {data.map((elem) => {
        const { id, poster_path, title } = elem;
        return (
          <div key={id}>
            <Link title={title} to={`${id}`}>
              <FilmImage poster_path={poster_path} title={title} />
            </Link>
          </div>
        );
      })}
    </Slide>
  );
}
