import React from 'react';

import { MovieItem } from './MovieBlockItem.props';
// import styles from './MovieBlockItem.module.scss';
import { MovieCard } from '../MovieCard';
export const MovieBlockItem = ({ movie }: MovieItem) => {
  return (
    <MovieCard poster={movie.Poster} title={movie.Title} link={`/movie/${movie.imdbID}`}>
      123
    </MovieCard>
  );
};
