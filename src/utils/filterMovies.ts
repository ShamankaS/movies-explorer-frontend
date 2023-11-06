import { SHORT_FILM_DURATION } from './constants';

export const filterMovies = (movies: any[], queryText: string, isShortFilm: boolean) => {
  const searchString = queryText.toLowerCase();
  return movies.filter(({ nameRU, nameEN, duration }) => {
    const toggle = isShortFilm ? (duration <= SHORT_FILM_DURATION) : true;

    return toggle && (nameRU.toLowerCase().includes(searchString) || nameEN.toLowerCase().includes(searchString));
  });
};
