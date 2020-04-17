import * as types from './actionTypes';
import { Genre, Playlist } from '../types';

export type SelectGenreAction = {
  type: typeof types.SELECT_GENRE;
  payload: { genre: Genre };
};

export type SelectPlaylistAction = {
  type: typeof types.SELECT_PLAYLIST;
  payload: { playlist: Playlist };
};

export const selectGenreAction = (genre: Genre): SelectGenreAction => ({
  type: types.SELECT_GENRE,
  payload: { genre },
});

export const selectPlaylistAction = (playlist: Playlist): SelectPlaylistAction => ({
  type: types.SELECT_PLAYLIST,
  payload: { playlist },
});
