import { configureStore } from '@reduxjs/toolkit';

import movieSlice from './movieSlice/movieSlice';

export const store = configureStore({
  reducer: {
    movieSlice: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
