import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { favouriteMovieSelector } from 'src/redux/favoriteSlice/selectors';
import { addFavouriteMovie, removeFavouriteMovie } from 'src/redux/favoriteSlice/favoriteSlice';
import { Button } from 'src/components/ui/Button';

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
    localStorage.setItem('favorite', json);
  }, [favoriteMovie]);

  return (
    <MovieCard poster={movie.Poster} title={movie.Title} link={`/movie/${movie.imdbID}`}>
      <div>
        <div>
          <span className={styles.type}>{movie.Type}</span>
          <span className={styles.year}>{movie.Year}</span>
        </div>
        <div className={styles.favorite_box}>
          <Button
            version={'unfilled'}
            label={isFavorited ? 'Remove from favorite' : 'Add to favorite'}
            onClick={handleAddFavorite}
          />
        </div>
      </div>
    </MovieCard>
  );
};
