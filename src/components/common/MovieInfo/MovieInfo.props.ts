import { Movie } from 'src/redux/types/movie';

export type PickInfoProps = Pick<
  Movie,
  | 'Actors'
  | 'Director'
  | 'Writer'
  | 'Genre'
  | 'Language'
  | 'Country'
  | 'Released'
  | 'Awards'
  | 'BoxOffice'
>;

export interface MovieInfoProps {
  movie: PickInfoProps;
}
