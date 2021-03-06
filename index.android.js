/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {StackNavigator} from 'react-navigation';

import {Provider} from 'react-redux';
import store from './src/store';

import AppNavigator from './src/router/app.router';

// Views
import Home from './src/views/home.view';
import Importer from './src/views/importer.view'; 

class Root extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('poc', () => Root);
