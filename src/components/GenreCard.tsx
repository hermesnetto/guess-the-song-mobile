import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { metrics, colors } from '../theme';
import { lightenDarkenColor } from '../utils';
import { Genre } from '../types';

interface Props {
  genre: Genre;
  onPress: (genre: Genre) => void;
}

/** @TODO Change color on press */
const GenreCard: React.FC<Props> = ({ onPress, genre }) => {
  const { id, name, fill } = genre;
  const cardStyles = {
    ...styles.container,
    backgroundColor: fill,
    borderBottomColor: lightenDarkenColor(fill, -40),
  };

  const handlePress = () => onPress(genre);

  return (
    <TouchableHighlight style={cardStyles} onPress={handlePress}>
      <Text style={styles.title}>{name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: metrics.baseRadius,
    flexDirection: 'column',
    alignItems: 'center',
    padding: metrics.baseMargin,
    borderBottomWidth: 3,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GenreCard;
