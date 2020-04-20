import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Option } from '../components/Option';
import { metrics } from '../theme';
import { roundSelector, selectedSongSelector, guessedSongSelector } from '../store/selectors';
import { Song, RoundStates } from '../types';
import { guessSongAction } from '../store/actionCreators';
import { select } from 'redux-saga/effects';

const getOptionState = (
  song: Song,
  selected: Song,
  guessed: Song,
  state: RoundStates
): 'success' | 'error' | undefined => {
  if (state === 'playing') return undefined;

  if (state === 'not_tried') {
    if (song.id === selected.id) {
      return 'success';
    }
    return undefined;
  }

  if (state === 'missed') {
    if (song.id === guessed.id) {
      return 'error';
    } else {
      if (song.id === selected.id) {
        return 'success';
      }
      return undefined;
    }
  }

  if (state === 'hit') {
    if (song.id === guessed.id) {
      return 'success';
    }
    return undefined;
  }
};

export const SongSelector: React.FC = () => {
  const { songs, state: roundState } = useSelector(roundSelector);
  const selected = useSelector(selectedSongSelector);
  const guessed = useSelector(guessedSongSelector);
  const dispatch = useDispatch();

  const guessSong = (songId: string) => {
    if (roundState === 'playing') {
      dispatch(guessSongAction(songId));
    }
  };

  return (
    <View style={styles.list}>
      {songs.map(song => {
        let optionState = getOptionState(song, selected, guessed, roundState);

        return (
          <TouchableOpacity key={song.id} style={styles.item} onPress={() => guessSong(song.id)}>
            <Option title={song.name} state={optionState} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  item: {
    marginBottom: metrics.baseMargin,
  },
});
