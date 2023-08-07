import React, { useEffect } from "react";
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
  const sliderFilms = useSelector((state) => state.films.sliderFilms);
  const films = useSelector((state) => state.films.films);
  const searchFilms = useSelector((state) => state.films.searchFilms);
  const isLoader = useSelector((state) => state.ui.isLoader);
  useEffect(() => {
    dispatch(fetchSliderFilms());
    dispatch(setTypePage("movie"));
  }, []);
  function linkHandler(id) {
    dispatch(fetchFilmById(id));
  }
  return (
    <div className="main container">
      <Slider data={sliderFilms} link={linkHandler} />
      <Panel />
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <div className="main__body">
            <div className="main__content">
              {searchFilms.length !== 0
                ? searchFilms.map((film) => {
                    return <Card key={film.id} data={film} link={linkHandler} />;
                  })
                : films.map((film) => {
                    return <Card key={film.id} data={film} link={linkHandler} />;
                  })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
