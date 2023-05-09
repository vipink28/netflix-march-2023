import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import { requests } from "../../helper/requests";

const initialState = { 
  upcomingMovies: {
    status: "idle",
    data: null,
    error: null,
  },
  nowPlayingMovies: {
    status: "idle",
    data: null,
    error: null,
  }
};

export const fetchUpcomingMovies = createAsyncThunk(
  "movie/fetchUpcomingMovies",
  async () => {
    const response = await axios.get(requests.getMovies('upcoming'));
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchNowPlayingMovies = createAsyncThunk(
  "movie/fetchNowPlayingMovies",
  async () => {
    const response = await axios.get(requests.getMovies('now_playing'));
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.upcomingMovies.status = "loading";
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies.status = "success";
        state.upcomingMovies.data = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.upcomingMovies.status = "failed";
        state.upcomingMovies.error = action.error.message;
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.nowPlayingMovies.status = "loading";
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies.status = "success";
        state.nowPlayingMovies.data = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.nowPlayingMovies.status = "failed";
        state.nowPlayingMovies.error = action.error.message;
      })     
  },
});

export const selectUpcomingMovies = (state) => state.movie.upcomingMovies;
export const selectNowPlayingMovies = (state) => state.movie.nowPlayingMovies;

export default movieSlice.reducer;
