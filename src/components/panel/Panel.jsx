import React, { useEffect, useState } from "react";
import "./panel.scss";
import { useDispatch } from "react-redux";
import { fetchFilmsBySort } from "../../store/reducers/filmsSlice";

export default function Panel() {
  const dispatch = useDispatch();
  const [displayUl, setDisplayUl] = useState(false);
  const [select, setSelect] = useState({ textContent: "По умолчанию", value: "popularity.desc" });
  function filtersHandler() {
    setDisplayUl(!displayUl);
  }
  function selectHandler(event) {
    const target = event.target;
    setSelect({ textContent: target.textContent, value: target.dataset.value });
  }
  useEffect(() => {
    dispatch(fetchFilmsBySort(select.value));
  }, [select.value]);
  const { textContent, value } = select;
  return (
    <div className="panel" onClick={filtersHandler}>
      <div className="panel__selected">{textContent}</div>
      <ul style={{ display: displayUl ? "block" : "none" }} onClick={selectHandler}>
        <li data-value="popularity.desc" className={value === "popularity.desc" ? "active" : ""}>
          По умолчанию
        </li>
        <li data-value="revenue.desc" className={value === "revenue.desc" ? "active" : ""}>
          По бюджету
        </li>
        <li data-value="vote_average.desc" className={value === "vote_average.desc" ? "active" : ""}>
          По рейтингу
        </li>
        <li data-value="primary_release_date.desc" className={value === "primary_release_date.desc" ? "active" : ""}>
          По дате добавления
        </li>
      </ul>
    </div>
  );
}
