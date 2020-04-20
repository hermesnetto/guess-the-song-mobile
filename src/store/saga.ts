import { put, delay, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as actions from './actionCreators';
import * as Api from '../api';

import { SONG_DURATION, WAIT_BEFORE_DETAILS } from '../constants';

function* fetchSongs(action: actions.FetchAndPlayRoundAction) {
  const { genre, token, roundIndex } = action.payload;

  if (roundIndex <= 5) {
    try {
      const data = yield Api.fetchRoundSongs(genre, token);

      if (!data.error) {
        yield put(actions.setRoundSongsAction(data.tracks));

        yield delay(SONG_DURATION);
        yield put(actions.showCorrectSongAction());

        yield delay(WAIT_BEFORE_DETAILS);
        yield put(actions.fetchAndPlayRoundAction(genre, token, roundIndex + 1));
      } else {
        /** @TODO Add proper error handling */
      }
    } catch (e) {}
  } else {
    yield put(actions.showMatchResultsAction());
  }
}

export function* saga() {
  yield takeLatest(types.FETCH_AND_PLAY_ROUND, fetchSongs);
}
