import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";
const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderDetails=createAsyncThunk(
    "common/fetchHeaderDetails",
    async(video)=>{
        const response = await axios.get(requests.getDetails(video));
        return response.data;
    }
)



export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
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
    }
})

export const selectHeaderDetails = (state) => state.common.headerDetails;

export default commonSlice.reducer;