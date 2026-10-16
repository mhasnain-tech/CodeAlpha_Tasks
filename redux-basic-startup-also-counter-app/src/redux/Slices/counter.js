import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wow: 0,
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.wow += 1;
    },
    decrement: (state) => {
      state.wow -= 1;
    },
    reset: (state) => {
      state.wow = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;


