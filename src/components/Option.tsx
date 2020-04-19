import React from 'react';
import { StyleSheet, View, Text, TextStyle, ViewStyle } from 'react-native';

import { metrics, colors } from '../theme';
import { lightenDarkenColor } from '../utils';

interface Props {
  title: string;
  state?: 'success' | 'error';
}

export const Option: React.FC<Props> = ({ title, state }) => {
  let containerStyles: ViewStyle = { ...styles.container };
  let titleStyles: TextStyle = { ...styles.title };

  if (state && (state === 'success' || state === 'error')) {
    const fillColor = state === 'success' ? colors.success : colors.error;

    containerStyles = {
      ...containerStyles,
      backgroundColor: fillColor,
      borderBottomColor: lightenDarkenColor(fillColor, -40),
    };
    titleStyles = { ...titleStyles, color: '#fff' };
  }

  return (
    <View style={containerStyles}>
      <Text style={titleStyles}>{title}</Text>
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
