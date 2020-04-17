import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { metrics, colors } from '../theme';

interface Props {
  title: string;
  fill: string;
}

export const Header: React.FC<Props> = ({ title, fill }) => {
  const containerStyles = {
    ...styles.container,
    backgroundColor: fill,
  };

  return (
    <View style={containerStyles}>
      <View />
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.statusBarHeight + metrics.smallMargin,
    paddingBottom: metrics.smallMargin,
    paddingHorizontal: metrics.sideMargin,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: -Math.abs(metrics.sideMargin),
  },
  title: {
    color: colors.white,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
