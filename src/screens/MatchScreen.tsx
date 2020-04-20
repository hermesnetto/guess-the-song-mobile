import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Audio } from 'expo-av';

import * as selectors from '../store/selectors';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { SongSelector } from '../containers/SongSelector';
import { SongDetails } from '../containers/SongDetails';
import { startGameAction, fetchAndPlayRoundAction } from '../store/actionCreators';
import { useSpotifyToken } from '../hooks/useSpotifyToken';
import { SONG_DURATION } from '../constants';
import { MatchDetails } from '../containers/MatchDetails';

export const MatchScreen: React.FC = () => {
  const dispatch = useDispatch();
  const genre = useSelector(selectors.genreSelector);
  const view = useSelector(selectors.matchViewSelector);
  const points = useSelector(selectors.pointsSelector);
  const round = useSelector(selectors.roundSelector);
  const roundIndex = useSelector(selectors.roundIndexSelector);
  const { token } = useSpotifyToken();

  const isPlayingView = view === 'playing';
  const isDetailsView = view === 'details';
  const isResultsView = view === 'results';

  useEffect(() => {
    if (token) {
      dispatch(startGameAction());
      dispatch(fetchAndPlayRoundAction(genre.id, token, 1));
    }
  }, [genre, token]);

  useEffect(() => {
    if (round.songs.length) {
      (async () => {
        const sound = new Audio.Sound();

        try {
          await sound.loadAsync({ uri: round.songs[0].preview_url });
          await sound.playAsync();

          setTimeout(() => sound.stopAsync(), SONG_DURATION);
        } catch (error) {}
      })();
    }
  }, [round.songs]);

  if (isResultsView) {
    return (
      <View style={styles.container}>
        <Header title={genre.name} fill={genre.fill} right={`${roundIndex}/5`} />
        <MatchDetails />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={genre.name} fill={genre.fill} right={`${roundIndex}/5`} />
      <Section title={genre.name}>
        {isPlayingView ? <SongSelector /> : <View />}
        {isDetailsView ? <SongDetails /> : <View />}
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
