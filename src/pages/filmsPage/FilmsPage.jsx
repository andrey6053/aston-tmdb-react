import React, { useEffect, useRef, useState } from "react";

import "./filmsPage.scss";
import Slider from "../../components/UI/slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmById, fetchSliderFilms } from "../../store/reducers/filmsSlice";
import Panel from "../../components/panel/Panel";
import Card from "../../components/card/Card";
import Loader from "../../components/UI/loader/Loader";
import { setTypePage } from "../../store/reducers/uiSlice";

export default function Main() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const sliderFilms = useSelector((state) => state.films.sliderFilms);
  const films = useSelector((state) => state.films.films);
  const searchFilms = useSelector((state) => state.films.searchFilms);
  const isLoader = useSelector((state) => state.ui.isLoader);
  const lastElement = useRef();
  const observer = useRef();
  useEffect(() => {
    dispatch(fetchSliderFilms());
    dispatch(setTypePage("movie"));
    if (isLoader) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entires) {
      if (entires[0].isIntersecting) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoader]);
  function linkHandler(id) {
    dispatch(fetchFilmById(id));
  }
  return (
    <div className="main container">
      <Slider data={sliderFilms} link={linkHandler} />
      <Panel page={page} />
      <>
        <div className="main__body">
          <div className="main__content">
            {isLoader && <Loader />}
            {searchFilms.length !== 0
              ? searchFilms.map((film) => {
                  return <Card key={film.id} data={film} link={linkHandler} />;
                })
              : films.map((film) => {
                  return <Card key={film.id} data={film} link={linkHandler} />;
                })}
          </div>
          <div style={{ height: 20 }} ref={lastElement}></div>
        </div>
      </>
    </div>
  );
}
