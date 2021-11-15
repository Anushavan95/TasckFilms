import { configureStore } from "@reduxjs/toolkit";
import moviesSliceReducer from "./slices/movies";

export const store = configureStore({
  reducer: {
    films: moviesSliceReducer
  }
});
