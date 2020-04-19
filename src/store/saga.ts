import { put, delay, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';
import * as actions from './actionCreators';
import { Song } from '../types';

function* fetchSong() {
  try {
    //  const user = yield call(Api.fetchUser, action.payload.userId);
    const songs: Song[] = [
      {
        id: 'a',
        name: 'Back in black',
        album: {
          name: 'Foo bar',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d00001e0246f35168612cbb305def7458',
              height: 200,
              width: 200,
            },
          ],
        },
        artists: [
          {
            name: 'AC/DC',
          },
        ],
        preview_url: '',
      },
      {
        id: 'b',
        name: 'Return of the loving dead',
        album: {
          name: 'Foo bar',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d00001e0246f35168612cbb305def7458',
              height: 200,
              width: 200,
            },
          ],
        },
        artists: [
          {
            name: 'The Nekromantix',
          },
        ],
        preview_url: '',
      },
      {
        id: 'c',
        name: 'Vampiria',
        album: {
          name: 'Foo bar',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d00001e0246f35168612cbb305def7458',
              height: 200,
              width: 200,
            },
          ],
        },
        artists: [
          {
            name: 'Spellmoon',
          },
        ],
        preview_url: '',
      },
      {
        id: 'd',
        name: 'Better together',
        album: {
          name: 'Foo bar',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d00001e0246f35168612cbb305def7458',
              height: 200,
              width: 200,
            },
          ],
        },
        artists: [
          {
            name: 'Jack Johnson',
          },
        ],
        preview_url: '',
      },
    ];
    yield put(actions.setRoundSongsAction(songs));
    yield delay(2000);
    yield put(actions.showSongDetailsAction());
  } catch (e) {}
}

export function* saga() {
  yield takeLatest(types.FETCH_AND_PLAY_ROUND, fetchSong);
}
