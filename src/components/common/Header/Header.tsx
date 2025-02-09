import React from 'react';
import { ReactComponent as MainIcon } from 'src/assets/icons/MainIcon.svg';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/ui/Button';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to={'/'}>
          <MainIcon />
        </Link>
      </div>
      <nav className={styles.header_nav}>
        <ul>
          <Button version={'unfilled'} label={'Favorite'} tag="link" href={'/favorite'} />
        </ul>
      </nav>
    </header>
  );
};
