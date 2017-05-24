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

// Views
import Home from './src/views/home.view';
import Importer from './src/views/importer.view'; 

const App = StackNavigator({
  Home: { screen: Home },
  Importer: {screen: Importer}
});

class Root extends Component{
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('poc', () => Root);
