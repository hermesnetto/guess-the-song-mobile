import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { SongSelector } from '../containers/SongSelector';
import { SongDetails } from '../containers/SongDetails';
import {
  genreSelector,
  playlistSelector,
  matchViewSelector,
  pointsSelector,
} from '../store/selectors';
import { startGameAction, fetchAndPlayRoundAction } from '../store/actionCreators';
import { useSpotifyToken } from '../hooks/useSpotifyToken';

export const MatchScreen: React.FC = () => {
  const dispatch = useDispatch();
  const playlist = useSelector(playlistSelector);
  const genre = useSelector(genreSelector);
  const view = useSelector(matchViewSelector);
  const points = useSelector(pointsSelector);
  const { token } = useSpotifyToken();

  const isPlayingView = view === 'playing';
  const isDetailsView = view === 'details';
  const pointsHeader = points === 1 ? `${points} pt` : `${points} pts`;

  useEffect(() => {
    dispatch(startGameAction());
    dispatch(fetchAndPlayRoundAction(genre.id, token));
  }, [genre, token]);

  return (
    <View style={styles.container}>
      <Header title={genre.name} fill={genre.fill} right={pointsHeader} />

      <Section title={playlist.name}>
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
