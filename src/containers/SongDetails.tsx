import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import { selectedSongSelector } from '../store/selectors';
import { SongCard } from '../components/SongCard';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { fetchAndPlayRoundAction } from '../store/actionCreators';

export const SongDetails: React.FC = () => {
  const dispatch = useDispatch();
  const song = useSelector(selectedSongSelector);

  const playNextSong = () => dispatch(fetchAndPlayRoundAction());

  return (
    <View>
      <SongCard song={song}>
        <Button title="Save on Spotify" theme="secondary" />
      </SongCard>
      <Section>
        <Button title="Next Song" size="lg" onPress={playNextSong} />
      </Section>
    </View>
  );
};
