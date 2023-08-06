import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSliderFilms, getFilmsBySort, searchFilms } from "../../actions/getFilms";

export const fetchSliderFilms = createAsyncThunk("rocket/fetchSliderFilms", getSliderFilms);
export const fetchFilmsBySort = createAsyncThunk("rocket/fetchFilmsBySort", getFilmsBySort);
export const fetchFilmsBySearch = createAsyncThunk("rocket/fetchFilmsBySearch", searchFilms);

const initialState = {
  sliderFilms: [],
  films: [],
  searchFilms: [],
};
const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderFilms.fulfilled, (state, { payload }) => {
        state.sliderFilms = payload;
      })
      .addCase(fetchFilmsBySort.fulfilled, (state, { payload }) => {
        state.films = payload;
      })
      .addCase(fetchFilmsBySearch.fulfilled, (state, { payload }) => {
        state.searchFilms = payload;
      });
  },
});

export const { t } = filmsSlice.actions;
export default filmsSlice.reducer;
