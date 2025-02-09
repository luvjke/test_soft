import React from 'react';
import classNames from 'classnames';

import styles from './MovieHeader.module.scss';
import { MovieHeaderProps } from './MovieHeader.props';
export const MovieHeader = ({ title, year, type, runtime, rating }: MovieHeaderProps) => {
  return (
    <div className={styles.content_box}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <span className={classNames(styles.type, styles.detail)}>{type}</span>
        <span className={classNames(styles.rating, styles.detail)}>{rating}</span>
        <span className={classNames(styles.rating, styles.detail)}>{year}</span>
        <span className={classNames(styles.runtime, styles.detail)}>{runtime}</span>
      </div>
    </div>
  );
};
