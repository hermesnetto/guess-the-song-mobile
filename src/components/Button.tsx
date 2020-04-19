import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { metrics, colors } from '../theme';
import { lightenDarkenColor } from '../utils';

type Props = {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'secondary';
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({ title, size = 'md', theme = 'primary', onPress }) => {
  const buttonSizes = {
    sm: styles.buttonSmall,
    md: styles.buttonMedium,
    lg: styles.buttonLarge,
  };
  const buttonThemes = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
  };
  const buttonStyles = {
    ...styles.button,
    ...(buttonThemes[theme] || buttonThemes.primary),
    ...(buttonSizes[size] || buttonSizes.md),
  };
  const textSizes = {
    sm: styles.textSmall,
    md: styles.textMedium,
    lg: styles.textLarge,
  };
  const textStyles = {
    ...styles.text,
    ...(textSizes[size] || textSizes.md),
  };

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderBottomColor: lightenDarkenColor(colors.primary, -40),
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    borderBottomColor: lightenDarkenColor(colors.secondary, -40),
  },
  buttonSmall: {
    height: 35,
  },
  buttonMedium: {
    height: 45,
  },
  buttonLarge: {
    height: 65,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textSmall: {
    fontSize: 18,
  },
  textMedium: {
    fontSize: 20,
  },
  textLarge: {
    fontSize: 28,
  },
});
