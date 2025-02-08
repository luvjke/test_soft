import { Movie } from '../types/movie';

export interface MovieState {
  movies: Movie[];
  searchTerm: string;
  status: 'completed' | 'loading' | 'failed';
  totalResults: number;
}
