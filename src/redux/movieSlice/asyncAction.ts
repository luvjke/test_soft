import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { SearchResult } from '../types/movie';

const apikey = 'fe0ee043';

export const fetchMoviesAsync = createAsyncThunk(
  'fetchMovies',
  async ({ searchTerm, page }: { searchTerm: string; page: number }): Promise<SearchResult> => {
    const query = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}&page=${page}`;

    try {
      const response = await axios.get(query);
      return response.data as SearchResult;
    } catch (error) {
      console.error(error);
      return { Search: [], totalResults: 0, Response: false };
    }
  }
);
