import * as types from './actionTypes';
import * as actions from './actionCreators';
import { Genre } from '../types';

export type State = {
  genre: Genre;
};

export const initialState: State = {
  genre: {
    id: '',
    fill: '',
    name: '',
  },
};

export type Action = actions.SelectGenreAction;

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.SELECT_GENRE:
      return { ...state, genre: action.payload.genre };

    default:
      return state;
  }
}
