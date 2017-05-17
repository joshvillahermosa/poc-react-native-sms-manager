/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

// Views
import Home from './src/views/home.view';
import Importer from './src/views/importer.view'; 

const App = StackNavigator({
  Home: { screen: Home },
  Importer: {screen: Importer}
});

AppRegistry.registerComponent('poc', () => App);
