import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/UI/loader/Loader";
import { fetchActor, fetchActorsList } from "../../store/reducers/actorsSlice";
import { setTypePage } from "../../store/reducers/uiSlice";
import ActorCard from "../../components/actorCard/ActorCard";
import "./actorPage.scss";
import { fetchFilmById } from "../../store/reducers/filmsSlice";

export default function ActorsPage() {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actors.actors);
  const searchActors = useSelector((state) => state.actors.searchActors);
  const isLoader = useSelector((state) => state.ui.isLoader);
  useEffect(() => {
    dispatch(fetchActorsList());
    dispatch(setTypePage("actors"));
  }, []);
  function linkHandler(id) {
    dispatch(fetchActor(id));
  }
  function linkFilms(id) {
    dispatch(fetchFilmById(id));
  }
  return (
    <div className="main container">
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <div className="main__body">
            <div className="main__content">
              {searchActors.length !== 0
                ? searchActors.map((actor) => {
                    return <ActorCard key={actor.id} data={actor} link={linkHandler} linkFilms={linkFilms} />;
                  })
                : actors.map((actor) => {
                    return <ActorCard key={actor.id} data={actor} link={linkHandler} linkFilms={linkFilms} />;
                  })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
