export interface movieData {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
  _id?: string;
}

export interface Thumbnail {
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Image {
  url: string;
  formats: Formats;
}

export interface Movies {
  country: string;
  created_at: Date;
  description: string;
  director: string;
  duration: number;
  id: number;
  image: Image;
  nameEN: string;
  nameRU: string;
  trailerLink: string;
  updated_at: Date;
  year: string;
}
