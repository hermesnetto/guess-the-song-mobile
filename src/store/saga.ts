import { put, delay, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as actions from './actionCreators';
import * as Api from '../api';

import { SONG_DURATION, WAIT_BEFORE_DETAILS } from '../constants';

function* fetchSongs(action: actions.FetchAndPlayRoundAction) {
  const { genre, token } = action.payload;

  try {
    const data = yield Api.fetchRoundSongs(genre, token);

    if (!data.error) {
      // show and play song
      yield put(actions.setRoundSongsAction(data.tracks));
      // guessing time is up
      yield delay(SONG_DURATION);
      yield put(actions.showCorrectSongAction());
      // show song details
      yield delay(WAIT_BEFORE_DETAILS);
      yield put(actions.showSongDetailsAction());
    } else {
      /** @TODO Add proper error handling */
    }
  } catch (e) {}
}

export function* saga() {
  yield takeLatest(types.FETCH_AND_PLAY_ROUND, fetchSongs);
}
