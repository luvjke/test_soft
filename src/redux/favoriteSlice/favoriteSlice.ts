import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from 'src/common/utils';

import { Movie } from '../types/movie';

export interface favoriteMovie {
  favouriteMovies: Movie[];
}

const initialState: favoriteMovie = {
  favouriteMovies: getCartFromLS(),
};
const favoriteSlice = createSlice({
  name: 'favotiteMovies',
  initialState,
  reducers: {
    addFavouriteMovie: (state, action) => {
      const movieData = action.payload;
      if (!state.favouriteMovies.some((movie) => movie.imdbID === movieData.id)) {
        state.favouriteMovies.push(movieData);
      }
    },
    removeFavouriteMovie: (state, action) => {
      const movieData = action.payload;
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.imdbID !== movieData.imdbID
      );
    },
  },
});

export const { addFavouriteMovie, removeFavouriteMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
