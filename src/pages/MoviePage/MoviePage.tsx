import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/components/common/Loading';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchMovieAsync } from 'src/redux/movieSlice/asyncAction';
import { soloMovieSelector, statusSelector } from 'src/redux/movieSlice/selectors';
import { MovieDetails } from 'src/components/common/MovieDetails';

import styles from './MoviePage.module.scss';
export const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(soloMovieSelector);
  const status = useAppSelector(statusSelector);

  useEffect(() => {
    if (typeof id === 'string' && movie?.imdbID !== id) {
      dispatch(fetchMovieAsync(id));
    }
  }, [dispatch, id, movie?.imdbID]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <div>Failed to load</div>;
  }
  return (
    <div className={styles.container}>
      {movie && (
        <>
          <div className={styles.movie_box}>
            <img src={movie.Poster} alt={movie.Title} className={styles.image} />
            <MovieDetails movie={movie} />
          </div>
        </>
      )}
    </div>
  );
};
