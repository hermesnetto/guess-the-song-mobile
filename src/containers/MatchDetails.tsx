import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';

import { allRoundsSelector } from '../store/selectors';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Song } from '../types';
import { useNavigation } from '../hooks/useNavigation';
import { SongDetailsCard } from '../components/SongDetailsCard';

type Round = {
  song: Song;
};

export const MatchDetails: React.FC = () => {
  const navigation = useNavigation();
  const allRounds = useSelector(allRoundsSelector);
  const rounds: Round[] = allRounds.map(round => ({
    song: round.songs.filter(({ id }) => id === round.selectedId)[0],
  }));

  const goHome = () => navigation.navigate('home');

  return (
    <View>
      <Section title="Match details">
        <FlatList
          data={rounds}
          keyExtractor={item => item.song.id}
          renderItem={({ item }) => <SongDetailsCard song={item.song} />}
        />
      </Section>
      <Section>
        <Button title="Go to Home" size="lg" onPress={goHome} />
      </Section>
    </View>
  );
};
