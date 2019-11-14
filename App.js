import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import homeScreen from './app/screens/homeScreen';

const RootStack = createStackNavigator({
  Home: {
    screen: homeScreen,

    navigationOptions: () => ({
      headerShown: false,
    }),
  },
});

const App = createAppContainer(RootStack);

export default App;
