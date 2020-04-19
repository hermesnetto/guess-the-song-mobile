import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import { selectedSongSelector, genreSelector } from '../store/selectors';
import { SongCard } from '../components/SongCard';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { fetchAndPlayRoundAction } from '../store/actionCreators';
import { useSpotifyToken } from '../hooks/useSpotifyToken';

export const SongDetails: React.FC = () => {
  const dispatch = useDispatch();
  const song = useSelector(selectedSongSelector);
  const genre = useSelector(genreSelector);
  const { token } = useSpotifyToken();

  const playNextSong = () => dispatch(fetchAndPlayRoundAction(genre.id, token));

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
