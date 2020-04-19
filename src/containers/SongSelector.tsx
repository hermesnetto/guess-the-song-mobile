import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Option } from '../components/Option';
import { metrics } from '../theme';
import { roundSelector, selectedSongSelector, guessedSongSelector } from '../store/selectors';
import { Song, RoundStates } from '../types';
import { guessSongAction } from '../store/actionCreators';

const getOptionState = (
  song: Song,
  selected: Song,
  guessed: Song,
  state: RoundStates
): 'success' | 'error' | undefined => {
  switch (state) {
    case 'hit':
      if (song.id === selected.id) return 'success';
      return undefined;
    case 'missed':
      if (song.id === guessed.id) {
        return 'error';
      } else if (song.id === selected.id) {
        return 'success';
      }
      return undefined;
    default:
      return undefined;
  }
};

export const SongSelector: React.FC = () => {
  const { songs, state: roundState } = useSelector(roundSelector);
  const selected = useSelector(selectedSongSelector);
  const guessed = useSelector(guessedSongSelector);
  const dispatch = useDispatch();

  const guessSong = (songId: string) => dispatch(guessSongAction(songId));

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
