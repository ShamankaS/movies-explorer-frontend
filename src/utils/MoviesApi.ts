import { makeRequest } from './makeRequst';

export function getMovies() {
  return makeRequest('https://api.nomoreparties.co/beatfilm-movies');
}
