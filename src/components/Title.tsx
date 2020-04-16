import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../theme/colors';

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Title;
