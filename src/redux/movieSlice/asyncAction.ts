import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = 'fe0ee043';

export const fetchMoviesAsync = createAsyncThunk(
  'fetchMovies',
  async ({ searchTerm, page }: { searchTerm: string; page: number }) => {
    let query = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}&page=${page}`;

    try {
      const response = await axios.get(query);
      return response.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
);
