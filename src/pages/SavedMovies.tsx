import React, {
  FC, FormEvent, useEffect, useState,
} from 'react';
import { Header } from '../components/Header/Header';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesCardList } from '../components/MoviesCardList/MoviesCardList';
import { Footer } from '../components/Footer/Footer';
import { movieData } from '../types/moviesTypes';
import { useFormValidation } from '../hooks/useFormValidation';
import { filterMovies } from '../utils/filterMovies';

interface Props {
  myMovies: movieData[];
  onDislike: (id: string) => Promise<string>;
}

const SavedMovies: FC<Props> = ({ myMovies, onDislike }) => {
  const {
    values, errors, handleChange, isValid,
  } = useFormValidation({
    search: '',
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [savedMovies, setSavedMovies] = useState(myMovies);
  const [isFound, setIsFound] = useState<boolean>(true);

  useEffect(() => {
    const filteredMovies = filterMovies(myMovies, values.search, isChecked);
    setSavedMovies(filteredMovies);
  }, [myMovies]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const filteredMovies = filterMovies(myMovies, values.search, isChecked);
    setSavedMovies(filteredMovies);
    if (filteredMovies.length === 0) setIsFound(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const filteredMovies = filterMovies(myMovies, values.search, isChecked);
    setSavedMovies(filteredMovies);
    if (filteredMovies.length === 0 && values.search !== '') {
      return setIsFound(false);
    }
    return setIsFound(true);
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
          movies={[]}
          myMovies={savedMovies}
          onDislike={onDislike}
          isFound={isFound}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
