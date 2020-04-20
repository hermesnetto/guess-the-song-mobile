import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import { HomeScreen } from './screens/HomeScreen';
import { MatchScreen } from './screens/MatchScreen';

const screens = {
  home: { screen: HomeScreen },
  match: { screen: MatchScreen },
};

const transition = (
  <Transition.Together>
    <Transition.Out type="slide-left" durationMs={200} interpolation="easeIn" />
    <Transition.In type="fade" durationMs={500} />
  </Transition.Together>
);

const mainNavigation = createAnimatedSwitchNavigator(screens, {
  transition,
});

export default createAppContainer(mainNavigation);
