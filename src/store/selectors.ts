import { State } from './reducer';
import { Genre } from '../types';

export const selectGenre = (state: State): Genre => state.genre;
