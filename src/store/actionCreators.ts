import * as types from './actionTypes';
import { Genre } from '../types';

export type SelectGenreAction = {
  type: typeof types.SELECT_GENRE;
  payload: { genre: Genre };
};

export const selectGenreAction = (genre: Genre): SelectGenreAction => ({
  type: types.SELECT_GENRE,
  payload: { genre },
});
