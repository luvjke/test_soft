import React from 'react';

import { MovieInfoProps } from './MovieInfo.props';
import styles from './MovieInfo.module.scss';
export const MovieInfo = ({ movie }: MovieInfoProps) => (
  <div className={styles.container}>
    {(
      [
        'Actors',
        'Director',
        'Writer',
        'Genre',
        'Language',
        'Country',
        'Released',
        'Awards',
        'BoxOffice',
      ] as const
    ).map((detail) => (
      <React.Fragment key={detail}>
        <div className={styles.detail}>{detail}:</div>
        <div className={styles.content}>{movie[detail]}</div>
      </React.Fragment>
    ))}
  </div>
);
