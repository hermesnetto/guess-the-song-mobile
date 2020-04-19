import { Song } from './types';

interface Genre {
  id: string;
  name: string;
  fill: string;
}

export const GENRES: Genre[] = [
  { id: 'rock', name: 'Rock', fill: '#3996DB' },
  { id: 'jazz', name: 'Jazz', fill: '#6DC690' },
  { id: 'blues', name: 'Blues', fill: '#E2CD6D' },
  { id: 'disco', name: 'Disco', fill: '#D455A8' },
  { id: 'dance', name: 'Dance', fill: '#634FA6' },
  { id: 'pop', name: 'Pop', fill: '#4ABCC9' },
];

export const EMPTY_SONG: Song = {
  id: '',
  name: '',
  album: {
    images: [],
    name: '',
  },
  artists: [],
  preview_url: '',
};

export const SONG_DURATION = 3000;
export const WAIT_BEFORE_DETAILS = 3000;

export const SPOTIFY_API_URL = 'https://accounts.spotify.com/api';
