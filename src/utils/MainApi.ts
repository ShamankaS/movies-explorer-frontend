import { makeRequest } from './makeRequst';
import { userData } from '../types/userTypes';
import { movieData } from '../types/moviesTypes';
import { API_URL } from './constants';

export function login(data: Partial<userData>) {
  return makeRequest(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
}

export function register(data: userData) {
  return makeRequest(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export function auth() {
  return makeRequest(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function logout() {
  return makeRequest(`${API_URL}/signout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function updateUser(data: Partial<userData>) {
  return makeRequest(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
}

export function saveMovie(data: movieData) {
  return makeRequest(`${API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
}

export function deleteMovie(id: string) {
  return makeRequest(`${API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function getSavedMovies() {
  return makeRequest(`${API_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
