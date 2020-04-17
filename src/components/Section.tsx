import React from 'react';
import { StyleSheet, View } from 'react-native';

import { metrics } from '../theme';
import Title from './Title';

interface Props {
  title?: string;
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      {title && <Title>{title}</Title>}
      <View style={styles.body}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.largeMargin,
  },
  body: {
    marginTop: metrics.baseMargin,
  },
});

export default Section;
