import { put, delay, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as actions from './actionCreators';
import { getRandomFloat, buildUrlParams } from '../utils';

function* fetchSongs(action: actions.FetchAndPlayRoundAction) {
  const { genre, token } = action.payload;

  try {
    const params = buildUrlParams([
      ['limit', 4],
      ['market', 'BR'], // Get market dinamically
      ['seed_genres', genre],
      ['min_acousticness', getRandomFloat(0.0, 0.5)],
      ['min_danceability', getRandomFloat(0.0, 0.5)],
      ['min_energy', getRandomFloat(0.0, 0.5)],
      ['min_instrumentalness', getRandomFloat(0.0, 0.5)],
      ['min_valence', getRandomFloat(0.0, 0.5)],
    ]);

    const data = yield fetch(`https://api.spotify.com/v1/recommendations?${params}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token || ''}`,
        'Content-Type': 'application/json',
      }),
    }).then(res => res.json());

    if (!data.error) {
      // show and play song
      yield put(actions.setRoundSongsAction(data.tracks));
      // guessing time is up
      yield delay(3000);
      yield put(actions.showCorrectSongAction());
      // show song details
      yield delay(2000);
      yield put(actions.showSongDetailsAction());
    } else {
      // error
    }
  } catch (e) {}
}

export function* saga() {
  yield takeLatest(types.FETCH_AND_PLAY_ROUND, fetchSongs);
}
