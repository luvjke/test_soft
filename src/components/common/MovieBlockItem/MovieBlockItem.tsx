import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { favouriteMovieSelector } from 'src/redux/favoriteSlice/selectors';
import { addFavouriteMovie, removeFavouriteMovie } from 'src/redux/favoriteSlice/favoriteSlice';
import { Button } from 'src/components/ui/Button';
import { ReactComponent as HearhPlus } from 'src/assets/icons/HearthPlus.svg';
import { ReactComponent as HearhMinus } from 'src/assets/icons/HearthMinus.svg';

import { MovieItem } from './MovieBlockItem.props';
import styles from './MovieBlockItem.module.scss';
import { MovieCard } from '../MovieCard';
export const MovieBlockItem = ({ movie }: MovieItem) => {
  const favoriteMovie = useAppSelector(favouriteMovieSelector);
  const dispatch = useAppDispatch();

  const isFavorited = favoriteMovie.some((data) => data.imdbID === movie.imdbID);

  const handleAddFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavouriteMovie(movie));
    } else {
      dispatch(addFavouriteMovie(movie));
    }
  };

  React.useEffect(() => {
    const json = JSON.stringify(favoriteMovie);
    localStorage.setItem('favoriteMoviesTest', json);
  }, [favoriteMovie]);

  return (
    <MovieCard poster={movie.Poster} title={movie.Title} link={`/movie/${movie.imdbID}`}>
      <div className={styles.description_box}>
        <div className={styles.description_info}>
          <span className={styles.type}>{movie.Type}</span>
          <span className={styles.year}>{movie.Year}</span>
        </div>
        <div className={styles.favorite_box}>
          <Button
            version={'filled'}
            label={''}
            onClick={handleAddFavorite}
            icon={isFavorited ? <HearhMinus /> : <HearhPlus />}
          />
        </div>
      </div>
    </MovieCard>
  );
};
