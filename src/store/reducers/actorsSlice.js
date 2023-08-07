import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActor, getActorBySearch, getActorsList } from "../../actions/getActors";

export const fetchActorsList = createAsyncThunk("rocket/fetchActorsList", getActorsList);
export const fetchActor = createAsyncThunk("rocket/fetchActor", getActor);
export const fetchActorBySearch = createAsyncThunk("rocket/fetchActorBySearch", getActorBySearch);

const initialState = {
  actors: [],
  currentActor: null,
  searchActors: [],
};
const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActorsList.fulfilled, (state, { payload }) => {
        state.actors = payload;
        state.currentActor = null;
        console.log(state.currentActor);
      })
      .addCase(fetchActor.fulfilled, (state, { payload }) => {
        state.currentActor = payload;
      })
      .addCase(fetchActorBySearch.fulfilled, (state, { payload }) => {
        state.searchActors = payload;
        state.currentActor = null;
      });
  },
});

export default actorsSlice.reducer;
