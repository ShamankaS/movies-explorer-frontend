export const PATTERN_USERNAME = '^[a-zA-Zа-яА-ЯЁё\\s\\-]+$';

export const PATTERN_EMAIL = "^[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+)*@[a-zA-Z0-9]+(?:\-[a-zA-Z0-9]+)*\\.[a-zA-Z0-9\\-]*[a-zA-Z0-9]?$";

export const ERROR_TEXT = {
  login: {
    400: 'Вы ввели неправильный логин или пароль',
    common: 'При авторизации произошла ошибка',
  },
  registration: {
    409: 'Пользователь с таким email уже существует',
    common: 'При регистрации пользователя произошла ошибка',
  },
  editProfile: {
    409: 'Пользователь с таким email уже существует',
    common: 'При обновлении профиля произошла ошибка',
  },
};

export const SUCCESS_TEXT = {
  editProfile: 'Данные профиля успешно обновлены👍',
};

export const SCREEN_WIDTH = {
  custom: 1668,
  desktop: 1280,
  tablet: 768,
};

export const CARDS_COUNT = {
  init: {
    desktop: 12,
    tablet: 8,
    mobile: 5,
  },
  toAdd: {
    custom: 4,
    desktop: 3,
    tablet: 2,
  },
};

export const SHORT_FILM_DURATION = 40;

export const API_DOMAIN = 'https://api.nomoreparties.co';

export const API_URL = 'https://api.shamanka.movies-exp.nomoredomainsicu.ru';

export const API_BEATFILM_URL = 'https://api.nomoreparties.co/beatfilm-movies';
