import { RootState } from '../store';

export const movieSelector = (state: RootState) => state.movieSlice.movies;
export const soloMovieSelector = (state: RootState) => state.movieSlice.currentMovie;
export const searchTermSelector = (state: RootState) => state.movieSlice.searchTerm;
export const statusSelector = (state: RootState) => state.movieSlice.status;
export const totalResultsSelector = (state: RootState) => state.movieSlice.totalResults;
