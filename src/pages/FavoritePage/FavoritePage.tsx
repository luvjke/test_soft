import React from 'react';
import { MovieBlock } from 'src/components/common/MovieBlock';
import { useAppSelector } from 'src/redux/hooks';
import { favouriteMovieSelector } from 'src/redux/favoriteSlice/selectors';

// import styles from './FavoritePage.module.scss';
export const FavoritePage = () => {
  const favoriteMovies = useAppSelector(favouriteMovieSelector);
  return (
    <>
      <MovieBlock movies={favoriteMovies} />
    </>
  );
};
