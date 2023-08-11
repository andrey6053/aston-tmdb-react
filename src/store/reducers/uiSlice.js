import { createSlice } from "@reduxjs/toolkit";
import { fetchFilmsBySort, fetchFilmsList } from "./filmsSlice";

const initialState = {
  isLoader: false,
  errors: [],
  typePage: "movies",
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTypePage: (state, { payload }) => {
      state.typePage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsBySort.fulfilled, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFilmsBySort.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchFilmsList.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchFilmsList.fulfilled, (state) => {
        state.isLoader = false;
      })
      .addCase(fetchFilmsBySort.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.errors.push(payload);
      });
  },
});

export const { setTypePage } = uiSlice.actions;
export default uiSlice.reducer;
