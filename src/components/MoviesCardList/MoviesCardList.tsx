import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { movieData, Movies } from '../../types/moviesTypes';
import Preloader from '../Preloader/Preloader';
import { CARDS_COUNT, SCREEN_WIDTH } from '../../utils/constants';

interface Props {
  movies: Movies[];
  onLike?: (movieData: movieData) => Promise<string>;
  onDislike?: (id: string) => Promise<string>;
  myMovies: movieData[];
  needPreloader?: boolean;
  isFound: boolean;
}

export const MoviesCardList: FC<Props> = ({
  movies, onLike, onDislike, myMovies, needPreloader, isFound,
}) => {
  const isSavedMovies = useLocation().pathname === '/saved-movies';
  const [cardsCount, setCardsCount] = useState(0);

  const getCardsCount = (pageWidth: number) => {
    if (pageWidth >= SCREEN_WIDTH.desktop) return CARDS_COUNT.init.desktop;
    if (pageWidth >= SCREEN_WIDTH.tablet) return CARDS_COUNT.init.tablet;
    return CARDS_COUNT.init.mobile;
  };

  const calculateCardsCount = () => {
    const pageWidth = document.documentElement.clientWidth;
    return getCardsCount(pageWidth);
  };

  const calculateCardsToAdd = useCallback(() => {
    const pageWidth = document.documentElement.clientWidth;
    if (pageWidth >= SCREEN_WIDTH.custom) return CARDS_COUNT.toAdd.custom;
    if (pageWidth >= SCREEN_WIDTH.desktop) return CARDS_COUNT.toAdd.desktop;
    return CARDS_COUNT.toAdd.tablet;
  }, []);

  const delayCalculate = () => {
    setTimeout(() => {
      setCardsCount(calculateCardsCount);
    }, 200);
  };

  useEffect(() => {
    setCardsCount(calculateCardsCount);
    window.addEventListener('resize', delayCalculate);
    return () => {
      window.removeEventListener('resize', delayCalculate);
    };
  }, []);

  const handleAddCards = useCallback(() => {
    const number = calculateCardsToAdd();
    setCardsCount((prevCardsCount) => prevCardsCount + number);
  }, [calculateCardsToAdd]);

  return (
    <div className="list">
      <div className="list__container">
        {needPreloader && <Preloader />}
        <div className="list__block">
          {myMovies && movies && !isSavedMovies && movies.slice(0, cardsCount).map((item: Movies) => {
            const arrWithSavedMovie = myMovies.length > 0 && myMovies.filter((movie) => movie.nameRU === item.nameRU);
            const id = arrWithSavedMovie && arrWithSavedMovie.length > 0 ? arrWithSavedMovie[0]._id : undefined;
            const isFilmLiked = arrWithSavedMovie ? arrWithSavedMovie.length > 0 : false;
            return (
              <MoviesCard
                item={item}
                name={item.nameRU}
                url={item.image.formats.thumbnail.url}
                duration={item.duration}
                key={item.id}
                onLike={onLike}
                onDislike={onDislike}
                isFilmLiked={isFilmLiked}
                filmId={id}
                trailerLink={item.trailerLink}
              />
            );
          })}
          {isSavedMovies && myMovies && (
            myMovies.map((item) => (
              <MoviesCard
                name={item.nameRU}
                url={item.image}
                duration={item.duration}
                key={item._id}
                onLike={onLike}
                onDislike={onDislike}
                filmId={item._id}
                trailerLink={item.trailerLink}
              />
            ))
          )}
        </div>
        {!needPreloader && !isFound && <p className="list__error">Ничего не найдено</p>}
        {!isSavedMovies && (cardsCount < movies.length) && <button type="button" onClick={handleAddCards} className="list__button">Ещё</button>}
      </div>
    </div>
  );
};
