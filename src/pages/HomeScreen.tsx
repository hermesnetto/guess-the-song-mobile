import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title';
import { GenreSelector } from '../containers/GenreSelector';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title>Guess The Song</Title>
      <GenreSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
