export const filterMovies = (movies: any[], queryText: string, isShortFilm: boolean) => {
  const searchString = queryText.toLowerCase();
  return movies.filter(({ nameRU, nameEN, duration }) => {
    const toggle = isShortFilm ? (duration <= 40) : true;

    return toggle && (nameRU.toLowerCase().includes(searchString) || nameEN.toLowerCase().includes(searchString));
  });
};
