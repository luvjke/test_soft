import { RootState } from '../store';

export const favouriteMovieSelector = (state: RootState) => state.favorites.favouriteMovies;
