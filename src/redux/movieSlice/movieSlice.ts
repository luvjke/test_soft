import { createSlice } from '@reduxjs/toolkit';

import { MovieState } from './types';
import { fetchMovieAsync, fetchMoviesAsync } from './asyncAction';

const initialState: MovieState = {
  movies: [],
  currentMovie: null,
  searchTerm: 'Star Wars',
  status: 'completed',
  totalResults: 0,
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    updateSearchTitle: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
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
      })
      .addCase(fetchMovieAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieAsync.fulfilled, (state, action) => {
        state.status = 'completed';
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieAsync.rejected, (state, action) => {
        state.status = 'failed';
        action.error.message ? console.error(action.error.message) : console.error(action.error);
      });
  },
});

export const { updateSearchTitle } = movieSlice.actions;

export default movieSlice.reducer;
