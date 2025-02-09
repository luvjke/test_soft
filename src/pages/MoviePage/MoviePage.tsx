import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from 'src/components/common/Loading';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { fetchMovieAsync } from 'src/redux/movieSlice/asyncAction';
import { soloMovieSelector, statusSelector } from 'src/redux/movieSlice/selectors';
import { MovieDetails } from 'src/components/common/MovieDetails';
import { Button } from 'src/components/ui/Button';

import styles from './MoviePage.module.scss';
export const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(soloMovieSelector);
  const status = useAppSelector(statusSelector);

  const navigate = useNavigate();

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
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <Button version={'unfilled'} label={'Back to search'} onClick={handleBack} />
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
