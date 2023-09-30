import React from 'react';
import { Header } from '../components/Header/Header';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesCardList } from '../components/MoviesCardList/MoviesCardList';
import { Footer } from '../components/Footer/Footer';

const SavedMovies = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;