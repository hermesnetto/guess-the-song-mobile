import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { metrics, colors } from '../theme';
import { lightenDarkenColor } from '../utils';

interface Props {
  title: string;
  fill: string;
}

/** @TODO Change color on press */
const GenreCard: React.FC<Props> = ({ title, fill }) => {
  const cardStyles = {
    ...styles.container,
    backgroundColor: fill,
    borderBottomColor: lightenDarkenColor(fill, -40),
  };

  return (
    <TouchableHighlight style={cardStyles}>
      <Text style={styles.title}>{title}</Text>
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
