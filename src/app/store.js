import { configureStore } from '@reduxjs/toolkit';
import tvReducer from '../features/tv/tvSlice';
import movieReducer from '../features/movie/movieSlice';
import commonReducer from '../features/common/commonSlice';
import userReducer from '../auth/authSlice';

export const store = configureStore({
  reducer: {
    tv: tvReducer,
    movie: movieReducer,
    common: commonReducer,
    auth: userReducer
  },
});
