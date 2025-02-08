import React, { useEffect } from 'react';
import { MovieBlock } from 'src/components/common/MovieBlock';
import { SearchBar } from 'src/components/common/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchMoviesAsync } from 'src/redux/movieSlice/asyncAction';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, movies, status } = useAppSelector((state) => state.movieSlice);

  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(fetchMoviesAsync({ searchTerm, page: 1 }));
    }
  }, [searchTerm, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>Failed to load</div>;
  }

  return (
    <>
      <SearchBar />
      <MovieBlock movies={movies} />
    </>
  );
};
