import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const {t} = uiSlice.actions;
export default uiSlice.reducer;
