import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import { requests } from "../../helper/requests";
const initialState = {
  headerDetails: {
    status: "idle",
    data: null,
    error: null,
  },
  videoDetails: {
    status: "idle",
    data: null,
    error: null,
  },
};

export const fetchHeaderDetails = createAsyncThunk(
  "common/fetchHeaderDetails",
  async (video) => {
    const response = await axios.get(requests.getDetails(video));
    return response.data;
  }
);

export const fetchVideoDetails = createAsyncThunk(
  "common/fetchVideoDetails",
  async (video) => {
    const response = await axios.get(requests.getDetails(video));
    return response.data;
  }
);

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderDetails.pending, (state) => {
        state.headerDetails.status = "loading";
      })
      .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
        state.headerDetails.status = "success";
        state.headerDetails.data = action.payload;
      })
      .addCase(fetchHeaderDetails.rejected, (state, action) => {
        state.headerDetails.status = "failed";
        state.headerDetails.error = action.error.message;
      })
      .addCase(fetchVideoDetails.pending, (state) => {
        state.videoDetails.status = "loading";
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.videoDetails.status = "success";
        state.videoDetails.data = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action) => {
        state.videoDetails.status = "failed";
        state.videoDetails.error = action.error.message;
      });
  },
});

export const selectHeaderDetails = (state) => state.common.headerDetails;
export const selectVideoDetails = (state) => state.common.videoDetails;

export default commonSlice.reducer;
