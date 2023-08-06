import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";
import filmsSlice from "./reducers/filmsSlice";

export default configureStore({
  reducer: {
    ui: uiSlice,
    films: filmsSlice,
  },
});
