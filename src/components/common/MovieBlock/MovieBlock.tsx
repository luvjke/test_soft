import React from 'react';

import styles from './MovieBlock.module.scss';
import { MovieBlockProps } from './MovieBlock.props';
import { MovieBlockItem } from '../MovieBlockItem';
export const MovieBlock = ({ movies }: MovieBlockProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        {movies.map((movie) => (
          <MovieBlockItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};
