import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Section } from '../components/Section';
import GenreCard from '../components/GenreCard';
import { metrics } from '../theme';
import { GENRES } from '../constants';
import { useNavigation } from '../hooks/useNavigation';
import { selectGenreAction } from '../store/actionCreators';
import { Genre } from '../types';

export const GenreSelector: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const selectGenre = useCallback(
    (genre: Genre) => {
      dispatch(selectGenreAction(genre));
      navigation.navigate('playlist');
    },
    [dispatch]
  );

  return (
    <Section title="Choose a genre">
      <View style={styles.list}>
        {GENRES.map(genre => (
          <View style={styles.item} key={genre.id}>
            <GenreCard genre={genre} onPress={selectGenre} />
          </View>
        ))}
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: -Math.abs(metrics.smallMargin),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: metrics.smallMargin,
    width: '50%',
  },
});
