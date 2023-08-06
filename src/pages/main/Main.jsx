import React, { useEffect } from "react";
import "./main.scss";
import Slider from "../../components/UI/slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliderFilms } from "../../store/reducers/filmsSlice";
import Panel from "../../components/panel/Panel";
import Card from "../../components/card/Card";
import Loader from "../../components/UI/loader/Loader";

export default function Main() {
  const dispatch = useDispatch();
  const sliderFilms = useSelector((state) => state.films.sliderFilms);
  const films = useSelector((state) => state.films.films);
  const searchFilms = useSelector((state) => state.films.searchFilms);
  const isLoader = useSelector((state) => state.ui.isLoader);
  useEffect(() => {
    dispatch(fetchSliderFilms());
  }, []);
  return (
    <div className="main container">
      <Slider data={sliderFilms} />
      <Panel />
      {isLoader ? (
        <Loader />
      ) : (
        <div className="main__body">
          <div className="main__content">
            {searchFilms.length !== 0
              ? searchFilms.map((film) => {
                  return <Card key={film.id} film={film} />;
                })
              : films.map((film) => {
                  return <Card key={film.id} film={film} />;
                })}
          </div>
        </div>
      )}
    </div>
  );
}
