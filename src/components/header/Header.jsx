import React, { useState } from "react";
import { rocket } from "../../utils";
import "./header.scss";
import Input from "../UI/input/Input";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsBySearch } from "../../store/reducers/filmsSlice";
import { fetchActorBySearch } from "../../store/reducers/actorsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const typePage = useSelector((state) => state.ui.typePage);
  function setInputValue(event) {
    const value = event.target.value;
    setValue(value);
    getFilmsBySearch(value);
  }
  const getFilmsBySearch = debounce(function (value) {
    typePage === "movie" ? dispatch(fetchFilmsBySearch(value)) : dispatch(fetchActorBySearch(value));
  }, 500);
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo-mobile"></div>
        <div className="header__logo">
          <Link to="/">
            <img src={rocket} alt="logo" />
          </Link>
        </div>
        <div className="header__search">
          <Input placeholder="Поиск..." type="text" value={value} setValue={setInputValue} />
        </div>
        <div className="header__links">
          <Link to="/">Фильмы</Link>
          <Link to="/actors">Актеры</Link>
        </div>
      </div>
    </div>
  );
}
