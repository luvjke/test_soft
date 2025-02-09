import React from 'react';

import styles from './Loading.module.scss';
export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
