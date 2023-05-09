import { configureStore } from '@reduxjs/toolkit';
import tvReducer from '../features/tv/tvSlice';
import movieReducer from '../features/movie/movieSlice';
import commonReducer from '../features/common/commonSlice';

export const store = configureStore({
  reducer: {
    tv: tvReducer,
    movie: movieReducer,
    common: commonReducer
  },
});
