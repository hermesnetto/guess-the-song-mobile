import * as types from './actionTypes';
import * as actions from './actionCreators';
import { Genre, Playlist } from '../types';

export type State = {
  genre: Genre;
  playlist: Playlist;
};

export const initialState: State = {
  genre: {
    id: '',
    fill: '',
    name: '',
  },
  playlist: {
    id: 'random',
    name: 'Random',
  },
};

export type Action = actions.SelectGenreAction | actions.SelectPlaylistAction;

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.SELECT_GENRE:
      return { ...state, genre: action.payload.genre };

    case types.SELECT_PLAYLIST:
      return { ...state, playlist: action.payload.playlist };

    default:
      return state;
  }
}
