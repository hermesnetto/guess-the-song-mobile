import React from 'react';
import { StyleSheet, View } from 'react-native';

import HomePage from './pages/HomePage';
import { metrics, colors } from './theme';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    color: colors.text,
    justifyContent: 'center',
    padding: metrics.sideMargin,
  },
});

export default App;
