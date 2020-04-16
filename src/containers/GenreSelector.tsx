import React from 'react';
import { StyleSheet, View } from 'react-native';

import Section from '../components/Section';
import GenreCard from '../components/GenreCard';
import { metrics } from '../theme';
import { GENRES } from '../constants';

const GenreSelector: React.FC = () => {
  return (
    <Section title="Choose a genre">
      <View style={styles.list}>
        {GENRES.map(({ id, name, fill }) => (
          <View style={styles.item} key={id}>
            <GenreCard title={name} fill={fill} />
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

export default GenreSelector;
