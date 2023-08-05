import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";

export default configureStore({
  reducer: {
    ui: uiSlice,
  },
});