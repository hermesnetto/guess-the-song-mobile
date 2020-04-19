import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import { HomeScreen } from './pages/HomeScreen';
import { MatchScreen } from './pages/MatchScreen';

const screens = {
  home: { screen: HomeScreen },
  match: { screen: MatchScreen },
};

const transition = (
  <Transition.Together>
    <Transition.Out type="slide-left" durationMs={400} interpolation="easeIn" />
    <Transition.In type="fade" durationMs={500} />
  </Transition.Together>
);

const mainNavigation = createAnimatedSwitchNavigator(screens, {
  transition,
});

export default createAppContainer(mainNavigation);
