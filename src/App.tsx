import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';
import { metrics, colors } from './theme';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Routes />
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
});

export default App;
