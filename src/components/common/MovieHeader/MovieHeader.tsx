import React from 'react';

import styles from './MovieHeader.module.scss';
import { MovieHeaderProps } from './MovieHeader.props';
export const MovieHeader = ({ title, year, type, runtime, rating }: MovieHeaderProps) => {
  return (
    <div className={styles.content_box}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <span>{type}</span>
        <span>{rating}</span>
        <span>{year}</span>
        <span>{runtime}</span>
      </div>
    </div>
  );
};
