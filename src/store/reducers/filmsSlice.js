import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSliderFilms, getFilmsBySort, searchFilms, getFilmById, getFilmsList } from "../../actions/getFilms";

export const fetchSliderFilms = createAsyncThunk("rocket/fetchSliderFilms", getSliderFilms);
export const fetchFilmsBySort = createAsyncThunk("rocket/fetchFilmsBySort", getFilmsBySort);
export const fetchFilmsList = createAsyncThunk("rocket/fetchFilmsList", getFilmsList);
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
      .addCase(fetchFilmsList.fulfilled, (state, { payload: { page, payload } }) => {
        if (page === 1 && state.films.length !== 0) return;
        state.films = [...state.films, ...payload];
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
