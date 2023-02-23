import { createSlice } from "@reduxjs/toolkit";

const IsLoadSlice = createSlice({
  name: "isLoad",
  initialState: {
    isLoad: true,
  },
  reducers: {
    IsLoad(state) {
      state.isLoad = !state.isLoad;
    },
  },
});
