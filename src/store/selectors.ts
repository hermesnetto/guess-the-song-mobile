import { State } from './reducer';
import { Genre, Song, Round } from '../types';
import { EMPTY_SONG } from '../constants';

export const genreSelector = (state: State): Genre => state.genre;
export const matchViewSelector = (state: State): 'playing' | 'details' | 'results' =>
  state.game.view;
export const pointsSelector = (state: State): number => state.game.points;
export const roundIndexSelector = (state: State): number => state.game.round;
export const allRoundsSelector = (state: State): Round[] => state.game.rounds;

export const roundSelector = (state: State): Round => {
  if (!state.game.rounds.length)
    return {
      songs: [],
      selectedId: '',
      guessedId: '',
      state: 'not_tried',
    };
  return state.game.rounds[state.game.round - 1];
};

export const selectedSongSelector = (state: State): Song => {
  if (!state.game.rounds.length) return EMPTY_SONG;
  const round = state.game.rounds[state.game.round - 1];
  return round.songs.filter(({ id }) => id === round.selectedId)[0];
};

export const guessedSongSelector = (state: State): Song => {
  if (!state.game.rounds.length) return EMPTY_SONG;
  const round = state.game.rounds[state.game.round - 1];
  return round.songs.filter(({ id }) => id === round.guessedId)[0];
};
