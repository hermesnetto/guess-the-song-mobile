import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { metrics, colors } from '../theme';

interface Props {
  title: string;
  fill: string;
  right?: string;
}

export const Header: React.FC<Props> = ({ title, fill, right }) => {
  const containerStyles = {
    ...styles.container,
    backgroundColor: fill,
  };
  const titleStyles = { ...styles.text, ...styles.title };

  return (
    <View style={containerStyles}>
      <View />
      <Text style={titleStyles}>{title}</Text>
      {right ? <Text style={styles.text}>{right}</Text> : <View />}
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
    textTransform: 'uppercase',
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
