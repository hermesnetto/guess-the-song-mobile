import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';
import { metrics, colors } from './theme';
import { store } from './store';
import { useSpotifyAuth } from './hooks/useSpotifyAuth';
import { useSpotifyToken } from './hooks/useSpotifyToken';

const App: React.FC = () => {
  const { token, storeToken } = useSpotifyToken();
  const spotifySignIn = useSpotifyAuth();

  useEffect(() => {
    (async () => {
      if (!token) {
        const newToken = await spotifySignIn();
        storeToken(newToken);
      }
    })();
  }, [token]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {token !== null ? <Routes /> : <Text style={styles.loadingText}>Loading</Text>}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.text,
    justifyContent: 'center',
    paddingHorizontal: metrics.sideMargin,
  },
  loadingText: {
    color: colors.text,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
