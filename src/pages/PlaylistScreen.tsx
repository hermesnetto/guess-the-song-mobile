import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { PlaylistSelector } from '../containers/PlaylistSelector';
import { Button } from '../components/Button';
import { selectGenre, selectPlaylist } from '../store/selectors';

const PlaylistScreen: React.FC = () => {
  const genre = useSelector(selectGenre);
  const playlist = useSelector(selectPlaylist);

  return (
    <View style={styles.container}>
      <Header title="Playlist" fill={genre.fill} />
      <Section title={genre.name}>
        <PlaylistSelector />
      </Section>
      {playlist.id !== '' && (
        <Section>
          <Button title="Start Game" size="lg" />
        </Section>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaylistScreen;
