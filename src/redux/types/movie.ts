export interface Movie {
  Poster?: string;
  Title?: string;
  Type?: string;
  Year?: string;
  imdbID?: string;
}

export type Rating = {
  Source: string;
  Value: string;
};
export interface SearchResult {
  Search: Movie[];
  totalResults: number;
  Response: boolean;
}
