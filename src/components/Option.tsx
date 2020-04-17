import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { metrics, colors } from '../theme';

interface Props {
  title: string;
}

export const Option: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: metrics.smallMargin + 5,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderBottomWidth: 5,
    borderBottomColor: '#aaa',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
