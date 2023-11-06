import React, {
  FC, FormEvent, useEffect, useState,
} from 'react';
import { Header } from '../components/Header/Header';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesCardList } from '../components/MoviesCardList/MoviesCardList';
import { Footer } from '../components/Footer/Footer';
import { useFormValidation } from '../hooks/useFormValidation';
import { useGetStorageData } from '../hooks/useGetStorageData';
import { useSearchMovies } from '../hooks/useSearchMovies';
import { filterMovies } from '../utils/filterMovies';
import { movieData, Movies as moviesTypes } from '../types/moviesTypes';

interface Props {
  onLike: (movieData: movieData) => Promise<string>;
  onDislike: (id: string) => Promise<string>;
  myMovies: movieData[];
}

const Movies: FC<Props> = ({ onLike, onDislike, myMovies }) => {
  const {
    values, errors, handleChange, isValid, setValues,
  } = useFormValidation({
    search: '',
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const { movies, needPreloader } = useSearchMovies(flag);
  const [filteredMovies, setFilteredMovies] = useState<moviesTypes[]>([]);
  const [storedStatusCheckbox, setStoredStatusCheckbox] = useGetStorageData('checkbox', isChecked);
  const [storedSearchParametr, setStoredSearchParametr] = useGetStorageData('search', values.search);
  const [storedFilteredMovies, setStoredFilteredMovies] = useGetStorageData('filteredMovies', filteredMovies);
  const [storedAllMovies, setStoredAllMovies] = useGetStorageData('movies', movies ?? []);
  const [isFound, setIsFound] = useState<boolean>(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setStoredStatusCheckbox(isChecked);
  }, [isChecked]);

  useEffect(() => {
    if (movies) setStoredAllMovies(movies);
  }, [movies]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setFlag(true);
    setStoredSearchParametr(values.search);
    setStoredStatusCheckbox(isChecked);
    const arrWithFilterMovies = filterMovies(storedAllMovies, values.search, isChecked);
    setFilteredMovies(arrWithFilterMovies);
  };

  useEffect(() => {
    if (filteredMovies) setStoredFilteredMovies(filteredMovies);
    if (filteredMovies.length === 0 && values.search !== '') {
      return setIsFound(false);
    }
    return setIsFound(true);
  }, [filteredMovies]);

  useEffect(() => {
    if (storedSearchParametr) {
      setValues({
        search: storedSearchParametr,
      });
    }
    if (storedStatusCheckbox) setIsChecked(storedStatusCheckbox);
  }, []);

  useEffect(() => {
    setFilteredMovies(filterMovies(storedAllMovies, values.search, isChecked));
  }, [storedAllMovies]);

  useEffect(() => {
    const arrWithFilterMovies = filterMovies(storedAllMovies, storedSearchParametr, isChecked);
    setFilteredMovies(arrWithFilterMovies);
  }, [isChecked]);

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          onChange={handleChange}
          value={values.search || ''}
          onCheckboxChange={handleCheckboxChange}
          checked={isChecked}
          error={errors.search}
          isValid={isValid}
        />
        <MoviesCardList
          movies={storedFilteredMovies || []}
          onLike={onLike}
          onDislike={onDislike}
          myMovies={myMovies}
          needPreloader={needPreloader}
          isFound={isFound}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
