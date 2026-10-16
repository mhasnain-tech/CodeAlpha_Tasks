import { configureStore } from "@reduxjs/toolkit";
import wowBoy from "./Slices/counter.js";

export const store = configureStore({
  reducer: {
    wooo: wowBoy,
  },
});
