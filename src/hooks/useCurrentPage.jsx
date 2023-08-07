import { useSelector } from "react-redux";

export function useCurrentPage() {
  const currentActor = useSelector((state) => state.actors.currentActor);
  const currentFilm = useSelector((state) => state.films.currentFilm);
  const id = window.location.pathname.split("/").reverse()[0];
  if (currentFilm?.id === +id) return { type: "film", ...currentFilm };
  if (currentActor?.id === +id) return { type: "actor", ...currentActor };
}
