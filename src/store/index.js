import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";
import filmsSlice from "./reducers/filmsSlice";
import actorsSlice from "./reducers/actorsSlice";

export default configureStore({
  reducer: {
    ui: uiSlice,
    films: filmsSlice,
    actors: actorsSlice,
  },
});
