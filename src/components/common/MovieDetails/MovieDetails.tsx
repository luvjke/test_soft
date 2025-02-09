import React from 'react';

import { MovieDetailsProps } from './MovieDetails.props';
import styles from './MovieDetails.module.scss';
import { MovieHeader } from '../MovieHeader';
import { MovieInfo } from '../MovieInfo';
export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_content}>
        <div className={styles.image_box}>
          <img src={movie.Poster} alt={movie.Title} className={styles.image} />
        </div>
        <div className={styles.descrip_content}>
          <MovieHeader
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            runtime={movie.Runtime}
            rating={movie.imdbRating}
          />
          <MovieInfo movie={movie} />
        </div>
      </div>
    </div>
  );
};
