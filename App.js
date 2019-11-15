import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import homeScreen from './app/screens/homeScreen';
import searchScreen from './app/screens/searchScreen';
const RootStack = createBottomTabNavigator({
  Home: {
    screen: homeScreen,

    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  Search: {
    screen: searchScreen,
  },
});

const App = createAppContainer(RootStack);

export default App;
