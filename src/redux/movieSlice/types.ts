import { Movie } from '../types/movie';

export interface MovieState {
  movies: Movie[];
  currentMovie: Movie | null;
  searchTerm: string;
  status: 'completed' | 'loading' | 'failed';
  totalResults: number;
}
