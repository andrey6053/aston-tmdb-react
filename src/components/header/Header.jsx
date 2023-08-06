import React, { useState } from "react";
import { rocket } from "../../utils";
import "./header.scss";
import Input from "../UI/input/Input";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFilmsBySearch } from "../../store/reducers/filmsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  function setInputValue(event) {
    const value = event.target.value;
    setValue(value);
    getFilmsBySearch(value);
  }
  const getFilmsBySearch = debounce(function (value) {
    dispatch(fetchFilmsBySearch(value));
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
      </div>
    </div>
  );
}
