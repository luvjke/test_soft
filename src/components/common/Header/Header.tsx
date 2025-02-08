import React from 'react';
import { ReactComponent as MainIcon } from 'src/assets/icons/MainIcon.svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <MainIcon />
      </div>
      <nav className={styles.header_nav}>
        <ul>
          <li className={styles.header_icon}>123</li>
          <li className={styles.header_icon}>123</li>
        </ul>
      </nav>
    </header>
  );
};
