import React from 'react';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input';
import { ReactComponent as SearchIcon } from 'src/assets/icons/searchIcon.svg';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form className={styles.search_form} onSubmit={() => {}}>
        <div className={styles.input_container}>
          <Input onChange={() => {}} placeholder={'Type to search...'} version={'custom'} />
        </div>
        <Button version={'custom'} label={'Search'} icon={<SearchIcon />} />
      </form>
    </div>
  );
};
