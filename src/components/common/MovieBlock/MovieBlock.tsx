import React from 'react';

import styles from './MovieBlock.module.scss';
import { MovieBlockProps } from './MovieBlock.props';
import { MovieBlockItem } from '../MovieBlockItem';
export const MovieBlock = ({ movies, searchTerm }: MovieBlockProps) => {
  return (
    <div className={styles.container}>
      {searchTerm && <div className={styles.result}>Search result : {searchTerm}</div>}
      <div className={styles.block}>
        {movies && movies.map((movie) => <MovieBlockItem key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};
