import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Title from '../components/Title';
import { GenreSelector } from '../containers/GenreSelector';
import { metrics } from '../theme';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Title>Guess The Song</Title>
        <GenreSelector />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: metrics.baseMargin,
  },
});
