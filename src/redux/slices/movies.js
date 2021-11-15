import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://raw.githubusercontent.com";

const initialState = {
  toggle: false,
  loading: "",
  error: "",
  moviesSeries: []
};

export const getMoviesAsync = createAsyncThunk("movies/get", async () => {
  const response = await axios.get(
    `${BASE_URL}/StreamCo/react-coding-challenge/master/feed/sample.json`
  );
  return response.data;
});

export const moviesSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    toggleFoo: (state) => {
      state.toggle = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state, action) => {
        state.loading = "Loading";
        state.moviesSeries = null;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.loading = "";
        state.moviesSeries = action.payload;
      })
      .addCase(getMoviesAsync.rejected, (state, action) => {
        state.error = "error";
      });
  }
});

export const { toggleFoo } = moviesSlice.actions;

export const selectMovies = (state) => state.films.moviesSeries;

export default moviesSlice.reducer;
