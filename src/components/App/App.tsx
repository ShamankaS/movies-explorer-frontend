import React, {
  FC, Suspense, useEffect, useState,
} from 'react';
import {
  Route, Routes, useNavigate, redirect,
} from 'react-router-dom';
import './App.css';
import { NotFound } from '../../pages/NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  auth, deleteMovie, getSavedMovies, login, logout, register, saveMovie, updateUser,
} from '../../utils/MainApi';
import { currentUserType, userData } from '../../types/userTypes';
import { movieData } from '../../types/moviesTypes';
import { useGetStorageData } from '../../hooks/useGetStorageData';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ERROR_TEXT } from '../../utils/constants';

const LandingPage = React.lazy(() => import('../../pages/Landing'));
const MoviesPage = React.lazy(() => import('../../pages/Movies'));
const LoginPage = React.lazy(() => import('../../pages/Login'));
const RegisterPage = React.lazy(() => import('../../pages/Register'));
const ProfilePage = React.lazy(() => import('../../pages/ProfileEdit'));
const SavedMoviesPage = React.lazy(() => import('../../pages/SavedMovies'));

export default function App() {
  const [storedIsLoggedIn, setStoredIsLoggedIn] = useGetStorageData('isLoggedIn', false);
  const [myMovies, setMyMovies] = useState<movieData[]>([]);
  const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const movies = await getSavedMovies();
      setMyMovies(movies.reverse());
    } catch (err) {
      console.warn(err);
    }
  };

  const checkToken = async () => {
    try {
      const res = await auth();
      setStoredIsLoggedIn(true);
      setCurrentUser(res);
    } catch (err) {
      console.warn(err);
      setStoredIsLoggedIn(false);
    }
  };

  const handleLogin = async (data: Partial<userData>) => {
    try {
      await login(data);
      setStoredIsLoggedIn(true);
      fetchMovies();
      redirect('/movies');
    } catch (err: any) {
      if (err.statusCode === 400) {
        setErrorMessage(ERROR_TEXT.login[400]);
      } else {
        setErrorMessage(ERROR_TEXT.login.common);
      }
      console.warn(err);
      setStoredIsLoggedIn(false);
    }
  };

  const handleRegister = async (data: userData | Partial<userData>) => {
    try {
      const { email, password } = data;
      await register(data as userData);
      handleLogin({ email, password });
    } catch (err: any) {
      if (err.statusCode === 409) {
        setErrorMessage(ERROR_TEXT.registration[409]);
      } else {
        setErrorMessage(ERROR_TEXT.registration.common);
      }
      console.warn(err);
      setStoredIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      setStoredIsLoggedIn(false);
      localStorage.clear();
      redirect('/');
    } catch (err) {
      console.warn(err);
    }
  };

  const handleProfileEdit = async (values: Partial<userData>) => {
    try {
      const res = await updateUser(values);
      setCurrentUser(res);
      setIsSuccess(true);
    } catch (err: any) {
      setIsSuccess(false);
      if (err.statusCode === 409) {
        setErrorMessage(ERROR_TEXT.editProfile[409]);
      } else {
        setErrorMessage(ERROR_TEXT.editProfile.common);
      }
      console.warn(err);
      setErrorMessage(err.message);
    }
  };

  const handleLike = async (movie: movieData) => {
    try {
      const res = await saveMovie(movie);
      setMyMovies([res, ...myMovies]);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleDislike = async (id: string) => {
    try {
      await deleteMovie(id);
      setMyMovies((state) => state.filter((item) => item._id !== id));
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    setErrorMessage('');
    setIsSuccess(false);
  }, [navigate]);

  useEffect(() => {
    checkToken();
  }, [storedIsLoggedIn]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <LandingPage />
              </Suspense>
            )}
          />
          <Route
            path="movies"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <ProtectedRoute
                  Component={MoviesPage as unknown as FC<{}>}
                  isLoggedIn={storedIsLoggedIn}
                  onLike={handleLike}
                  onDislike={handleDislike}
                  myMovies={myMovies}
                />
              </Suspense>
            )}
          />
          <Route
            path="profile"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <ProtectedRoute
                  Component={ProfilePage as unknown as FC<{}>}
                  isLoggedIn={storedIsLoggedIn}
                  onLogout={handleLogout}
                  onSubmit={handleProfileEdit}
                  error={errorMessage}
                  onErrorChange={setErrorMessage}
                  success={isSuccess}
                  onSetSuccess={setIsSuccess}
                />
              </Suspense>
            )}
          />
          <Route
            path="saved-movies"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <ProtectedRoute
                  Component={SavedMoviesPage as unknown as FC<{}>}
                  isLoggedIn={storedIsLoggedIn}
                  onDislike={handleDislike}
                  myMovies={myMovies}
                />
              </Suspense>
            )}
          />
          <Route
            path="signin"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <LoginPage
                  onSubmit={handleLogin}
                  isLoggedIn={storedIsLoggedIn}
                  error={errorMessage}
                  onErrorChange={setErrorMessage}
                />
              </Suspense>
            )}
          />
          <Route
            path="signup"
            element={(
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <RegisterPage
                  onSubmit={handleRegister}
                  isLoggedIn={storedIsLoggedIn}
                  error={errorMessage}
                  onErrorChange={setErrorMessage}
                />
              </Suspense>
            )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
