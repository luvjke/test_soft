import { configureStore } from '@reduxjs/toolkit';

import movieSlice from './movieSlice/movieSlice';
import favoriteSlice from './favoriteSlice/favoriteSlice';

export const store = configureStore({
  reducer: {
    movieSlice: movieSlice,
    favorites: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
