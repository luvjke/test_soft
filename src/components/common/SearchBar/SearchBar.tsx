import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input';
import { ReactComponent as SearchIcon } from 'src/assets/icons/searchIcon.svg';
import { useSelector } from 'react-redux';
import { searchTermSelector } from 'src/redux/movieSlice/selectors';

import styles from './SearchBar.module.scss';
import { SearchBarProps } from './SearchBar.props';

export const SearchBar = ({ onSetSearch }: SearchBarProps) => {
  const searchTerm = useSelector(searchTermSelector);
  const [inputValue, setInputValue] = React.useState(searchTerm);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSetSearch({ search: inputValue });
  };

  return (
    <div className={styles.container}>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <Input
            onChange={handleInputChange}
            placeholder={'Type to search...'}
            version={'custom'}
            value={inputValue}
          />
        </div>
        <Button version={'custom'} label={'Search'} icon={<SearchIcon />} />
      </form>
    </div>
  );
};
