import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Header } from '../components/Header';
import Section from '../components/Section';
import { PlaylistSelector } from '../containers/PlaylistSelector';
import { selectGenre } from '../store/selectors';

const PlaylistScreen: React.FC = () => {
  const genre = useSelector(selectGenre);

  return (
    <View style={styles.container}>
      <Header title="Playlist" fill={genre.fill} />
      <Section title={genre.name}>
        <PlaylistSelector />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaylistScreen;
