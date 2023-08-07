import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSliderFilms, getFilmsBySort, searchFilms, getFilmById } from "../../actions/getFilms";

export const fetchSliderFilms = createAsyncThunk("rocket/fetchSliderFilms", getSliderFilms);
export const fetchFilmsBySort = createAsyncThunk("rocket/fetchFilmsBySort", getFilmsBySort);
export const fetchFilmsBySearch = createAsyncThunk("rocket/fetchFilmsBySearch", searchFilms);
export const fetchFilmById = createAsyncThunk("rocket/fetchFilmById", getFilmById);

const initialState = {
  sliderFilms: [],
  films: [],
  searchFilms: [],
  currentFilm: null,
};
const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderFilms.fulfilled, (state, { payload }) => {
        state.sliderFilms = payload;
        state.currentActor = null;
      })
      .addCase(fetchFilmsBySort.fulfilled, (state, { payload }) => {
        state.films = payload;
        state.currentActor = null;
      })
      .addCase(fetchFilmsBySearch.fulfilled, (state, { payload }) => {
        state.searchFilms = payload;
        state.currentActor = null;
      })
      .addCase(fetchFilmById.fulfilled, (state, { payload }) => {
        state.currentFilm = payload;
      });
  },
});

export default filmsSlice.reducer;
