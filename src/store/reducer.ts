import * as types from './actionTypes';
import * as actions from './actionCreators';
import { Genre, Playlist, Round } from '../types';
import { getRandomInt, getSelectedTrack } from '../utils';

export type Game = {
  rounds: Round[];
  round: number;
  points: number;
  view: 'playing' | 'details';
};

export type State = {
  genre: Genre;
  playlist: Playlist;
  game: Game;
};

const initialGame: Game = {
  rounds: [],
  round: 0,
  points: 0,
  view: 'playing',
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
  game: initialGame,
};

export type Action =
  | actions.SelectGenreAction
  | actions.SelectPlaylistAction
  | actions.StartGameAction
  | actions.SetRoundSongsAction
  | actions.GuessSongAction
  | actions.ShowSongDetailsAction
  | actions.ShowCorrectSongAction;

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case types.SELECT_GENRE:
      return { ...state, genre: action.payload.genre };

    case types.SELECT_PLAYLIST:
      return { ...state, playlist: action.payload.playlist };

    case types.START_GAME:
      return { ...state, game: initialGame };

    case types.SET_ROUND_SONGS:
      return {
        ...state,
        game: {
          ...state.game,
          rounds: [
            ...state.game.rounds,
            {
              songs: action.payload.songs,
              selectedId: getSelectedTrack(action.payload.songs, getRandomInt(0, 4), 1, 4).id,
              guessedId: '',
              state: 'playing',
            },
          ],
          round: state.game.round + 1,
          view: 'playing',
        },
      };

    case types.GUESS_SONG:
      let hasHit = false;

      const rounds: Round[] = state.game.rounds.map((round: Round, index: number) => {
        if (index !== state.game.round - 1) return round;
        hasHit = action.payload.songId === round.selectedId;
        return {
          ...round,
          guessedId: action.payload.songId,
          state: hasHit ? 'hit' : 'missed',
        };
      });

      return {
        ...state,
        game: {
          ...state.game,
          points: hasHit ? state.game.points + 1 : state.game.points,
          rounds,
        },
      };

    case types.SHOW_CORRECT_SONG:
      return {
        ...state,
        game: {
          ...state.game,
          rounds: state.game.rounds.map((round: Round, index: number) => {
            if (index !== state.game.round - 1) return round;
            return {
              ...round,
              state: 'not_tried',
            };
          }),
        },
      };

    case types.SHOW_SONG_DETAILS:
      return { ...state, game: { ...state.game, view: 'details' } };

    default:
      return state;
  }
}
