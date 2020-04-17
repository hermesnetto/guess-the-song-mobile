import { State } from './reducer';
import { Genre, Playlist } from '../types';

export const selectGenre = (state: State): Genre => state.genre;
export const selectPlaylist = (state: State): Playlist => state.playlist;
