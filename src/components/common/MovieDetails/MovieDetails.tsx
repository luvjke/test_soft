import React from 'react';

import { MovieDetailsProps } from './MovieDetails.props';
import styles from './MovieDetails.module.scss';
export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_content}>
        <div className={styles.image_box}>
          <img src={movie.Poster} alt={movie.Title} className={styles.image} />
        </div>
        <div className={styles.descrip_content}>
          <div className={styles.content_box}>
            <h1 className={styles.title}>{movie.Title}</h1>
            <div className={styles.content}>
              <span>{movie.Type}</span>
              <span>{movie.imdbRating}</span>
              <span>{movie.Year}</span>
              <span>{movie.Runtime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
