import { API_BEATFILM_URL } from './constants';
import { makeRequest } from './makeRequst';

export function getMovies() {
  return makeRequest(`${API_BEATFILM_URL}`);
}
