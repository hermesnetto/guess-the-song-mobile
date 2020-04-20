import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 10,
  baseMargin: 20,
  largeMargin: 30,
  sideMargin: 25,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: Constants.statusBarHeight,
  smallRadius: 3,
  baseRadius: 5,
  xlargeRadius: 20,
};

export default metrics;
