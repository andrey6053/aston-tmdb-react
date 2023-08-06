import { createSlice } from "@reduxjs/toolkit";
import { fetchFilmsBySort, fetchSliderFilms } from "./filmsSlice";

const initialState = {
  isLoader: false,
  errors: [],
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderFilms.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchSliderFilms.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.errors.push(payload);
      })
      .addCase(fetchSliderFilms.fulfilled, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFilmsBySort.fulfilled, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFilmsBySort.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchFilmsBySort.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.errors.push(payload);
      });
  },
});

export const { setLoader } = uiSlice.actions;
export default uiSlice.reducer;
