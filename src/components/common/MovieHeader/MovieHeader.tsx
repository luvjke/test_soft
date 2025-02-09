import React from 'react';
import classNames from 'classnames';

import styles from './MovieHeader.module.scss';
import { MovieHeaderProps } from './MovieHeader.props';
export const MovieHeader = ({ title, year, type, runtime, rating }: MovieHeaderProps) => {
  return (
    <div className={styles.content_box}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <span className={classNames(styles.detail, styles.type)}>{type}</span>
        <span className={classNames(styles.detail, styles.rating)}>{rating}</span>
        <span className={classNames(styles.detail, styles.year)}>{year}</span>
        <span className={classNames(styles.detail, styles.runtime)}>{runtime}</span>
      </div>
    </div>
  );
};
