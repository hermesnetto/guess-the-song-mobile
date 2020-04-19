import * as types from './actionTypes';
import { Genre, Playlist, Song } from '../types';

export type SelectGenreAction = {
  type: typeof types.SELECT_GENRE;
  payload: { genre: Genre };
};

export type SelectPlaylistAction = {
  type: typeof types.SELECT_PLAYLIST;
  payload: { playlist: Playlist };
};

export type FetchAndPlayRoundAction = {
  type: typeof types.FETCH_AND_PLAY_ROUND;
  payload: {
    genre: string;
    token: string | null;
  };
};

export type SetRoundSongsAction = {
  type: typeof types.SET_ROUND_SONGS;
  payload: { songs: Song[] };
};

export type StartGameAction = {
  type: typeof types.START_GAME;
};

export type GuessSongAction = {
  type: typeof types.GUESS_SONG;
  payload: {
    songId: string;
  };
};

export type ShowSongDetailsAction = {
  type: typeof types.SHOW_SONG_DETAILS;
};

export type ShowCorrectSongAction = {
  type: typeof types.SHOW_CORRECT_SONG;
};

export const selectGenreAction = (genre: Genre): SelectGenreAction => ({
  type: types.SELECT_GENRE,
  payload: { genre },
});

export const selectPlaylistAction = (playlist: Playlist): SelectPlaylistAction => ({
  type: types.SELECT_PLAYLIST,
  payload: { playlist },
});

export const fetchAndPlayRoundAction = (
  genre: string,
  token: string | null
): FetchAndPlayRoundAction => ({
  type: types.FETCH_AND_PLAY_ROUND,
  payload: { genre, token },
});

export const setRoundSongsAction = (songs: Song[]): SetRoundSongsAction => ({
  type: types.SET_ROUND_SONGS,
  payload: { songs },
});

export const startGameAction = (): StartGameAction => ({
  type: types.START_GAME,
});

export const guessSongAction = (songId: string): GuessSongAction => ({
  type: types.GUESS_SONG,
  payload: { songId },
});

export const showSongDetailsAction = (): ShowSongDetailsAction => ({
  type: types.SHOW_SONG_DETAILS,
});

export const showCorrectSongAction = (): ShowCorrectSongAction => ({
  type: types.SHOW_CORRECT_SONG,
});
