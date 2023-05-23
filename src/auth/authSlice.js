import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        status: false,
        user: null,
        error: null
    }    
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        userAuth: (state, action)=>{
           state.user = action.payload;
        }
    },
    extraReducers: (builder) => {}
})

export const { userAuth } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;