import React, { useEffect, useState } from 'react';
import { Loading } from 'src/components/common/Loading';
import { MovieBlock } from 'src/components/common/MovieBlock';
import { Pagination } from 'src/components/common/Pagination';
import { SearchBar } from 'src/components/common/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchMoviesAsync } from 'src/redux/movieSlice/asyncAction';
import { updateSearchTitle } from 'src/redux/movieSlice/movieSlice';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { searchTerm, movies, status, totalResults } = useAppSelector((state) => state.movieSlice);

  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(fetchMoviesAsync({ searchTerm, page: currentPage }));
    }
  }, [searchTerm, dispatch, currentPage]);

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'failed') {
    return <div>Failed to load</div>;
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }
  const handleUpdateSearch = (value: { search: string }) => {
    dispatch(updateSearchTitle(value.search));
    setCurrentPage(1);
  };
  return (
    <>
      <SearchBar onSetSearch={handleUpdateSearch} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalResults / 10)}
        onPageChange={(page) => handlePageChange(page)}
      />
      <MovieBlock movies={movies} searchTerm={searchTerm} />
    </>
  );
};
