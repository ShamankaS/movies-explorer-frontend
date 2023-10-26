import { useEffect, useState } from 'react';
import { getMovies } from '../utils/MoviesApi';
import { Movies } from '../types/moviesTypes';

export function useSearchMovies(flag: boolean) {
  const [movies, setMovies] = useState<Movies[]>();
  const [error, setError] = useState<string>('');
  const [needPreloader, setNeedPreloader] = useState<boolean>(false);

  const fetchMovies = async () => {
    try {
      setNeedPreloader(true);
      const moviesList = await getMovies();
      setMovies(moviesList);
    } catch (err) {
      setError(err as string);
    } finally {
      setNeedPreloader(false);
    }
  };

  useEffect(() => {
    if (flag) {
      fetchMovies();
    }
  }, [flag]);

  return { movies, error, needPreloader };
}
