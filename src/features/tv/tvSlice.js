import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";

const initialState = {
    nfOriginals:{
        status: 'idle',
        data: null,
        error: null
    }
  };

  export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
      const response = await axios.get(requests.getNetflixOriginals);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

  export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNetflixOriginals.pending, (state)=>{
            state.nfOriginals.status = 'loading'
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state, action)=>{
            state.nfOriginals.status = 'success';
            state.nfOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state, action)=>{
            state.nfOriginals.status = 'failed';
            state.nfOriginals.error = action.error.message;
        })
    }
  })

  export const selectNetflixOriginals = (state) => state.tv.nfOriginals;

  export default tvSlice.reducer;