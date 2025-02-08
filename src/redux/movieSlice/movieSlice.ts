import { createSlice } from '@reduxjs/toolkit';

import { MovieState } from './types';
import { fetchMoviesAsync } from './asyncAction';

const initialState: MovieState = {
  movies: [],
  searchTerm: 'Bleach',
  status: 'completed',
  totalResults: 0,
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = 'completed';
        state.movies = action.payload.Search;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMoviesAsync.rejected, (state, action) => {
        state.status = 'failed';
        action.error.message ? console.error(action.error.message) : console.error(action.error);
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
