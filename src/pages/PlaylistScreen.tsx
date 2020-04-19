import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { PlaylistSelector } from '../containers/PlaylistSelector';
import { Button } from '../components/Button';
import { genreSelector, playlistSelector } from '../store/selectors';
import { useNavigation } from '../hooks/useNavigation';

export const PlaylistScreen: React.FC = () => {
  const genre = useSelector(genreSelector);
  const playlist = useSelector(playlistSelector);
  const navigation = useNavigation();

  const startGame = () => {
    navigation.navigate('match');
  };

  return (
    <View style={styles.container}>
      <Header title="Playlist" fill={genre.fill} />

      <Section title={genre.name}>
        <ScrollView>
          <PlaylistSelector />
        </ScrollView>
      </Section>

      {playlist.id !== '' && (
        <Section>
          <Button title="Start Game" size="lg" onPress={startGame} />
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
