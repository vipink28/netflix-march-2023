import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import { requests } from "../../helper/requests";

const initialState = {
  nfOriginals: {
    status: "idle",
    data: null,
    error: null,
  },
  topRatedTv: {
    status: "idle",
    data: null,
    error: null,
  },
  popularTv: {
    status: "idle",
    data: null,
    error: null,
  }
};

export const fetchNetflixOriginals = createAsyncThunk(
  "tv/fetchNetflixOriginals",
  async () => {
    const response = await axios.get(requests.getNetflixOriginals);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchTopRatedTv = createAsyncThunk(
  "tv/fetchTopRatedTv",
  async () => {
    const response = await axios.get(requests.getTv('top_rated'));
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchPopularTv = createAsyncThunk(
  "tv/fetchPopularTv",
  async () => {
    const response = await axios.get(requests.getTv('popular'));
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNetflixOriginals.pending, (state) => {
        state.nfOriginals.status = "loading";
      })
      .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
        state.nfOriginals.status = "success";
        state.nfOriginals.data = action.payload;
      })
      .addCase(fetchNetflixOriginals.rejected, (state, action) => {
        state.nfOriginals.status = "failed";
        state.nfOriginals.error = action.error.message;
      })
      .addCase(fetchTopRatedTv.pending, (state) => {
        state.topRatedTv.status = "loading";
      })
      .addCase(fetchTopRatedTv.fulfilled, (state, action) => {
        state.topRatedTv.status = "success";
        state.topRatedTv.data = action.payload;
      })
      .addCase(fetchTopRatedTv.rejected, (state, action) => {
        state.topRatedTv.status = "failed";
        state.topRatedTv.error = action.error.message;
      })
      .addCase(fetchPopularTv.pending, (state) => {
        state.popularTv.status = "loading";
      })
      .addCase(fetchPopularTv.fulfilled, (state, action) => {
        state.popularTv.status = "success";
        state.popularTv.data = action.payload;
      })
      .addCase(fetchPopularTv.rejected, (state, action) => {
        state.popularTv.status = "failed";
        state.popularTv.error = action.error.message;
      })
  },
});

export const selectNetflixOriginals = (state) => state.tv.nfOriginals;
export const selectTopRatedTv = (state) => state.tv.topRatedTv;
export const selectPopularTv = (state) => state.tv.popularTv;

export default tvSlice.reducer;
