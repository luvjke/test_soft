import { Movie } from 'src/redux/types/movie';

export type PickedProps = Pick<Movie, 'Poster' | 'Title' | 'Type' | 'Year' | 'imdbID'>;

export interface MovieItem {
  movie: PickedProps;
}
