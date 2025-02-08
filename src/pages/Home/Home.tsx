import React from 'react';
import { MovieBlock } from 'src/components/common/MovieBlock';
import { SearchBar } from 'src/components/common/SearchBar/SearchBar';

export const Home = () => {
  return (
    <>
      <SearchBar />
      <MovieBlock />
    </>
  );
};
