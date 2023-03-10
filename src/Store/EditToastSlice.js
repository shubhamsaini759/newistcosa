import { createSlice } from "@reduxjs/toolkit";

export const EditToastSlice = createSlice({
  name: "toastEdit",
  initialState: {
    flag: true,
  },
  reducers: {
    setFlag(state) {
      state.flag = true;
    },
    resetFlag(state) {
      state.flag = false;
    },
  },
});
