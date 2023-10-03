import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Movies from '../../pages/Movies';
import ProfileEdit from '../../pages/ProfileEdit';
import SavedMovies from '../../pages/SavedMovies';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound/NotFound';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="movies" element={<Movies />} />
        <Route path="profile" element={<ProfileEdit />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
