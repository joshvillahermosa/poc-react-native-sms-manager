/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import { 
  Container,
  Content
} from 'native-base';

import { StackNavigator } from 'react-navigation';

export default class Importer extends Component {
  constructor() {
    super();
  }

  /**
   * @todo Isolate headerStyle and navigation Options into it's own section.
   */
  static navigationOptions = ({navigation}) => ({
    title: 'Contact Importer',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#428bca'
    }
  });

  render() {
    return (
      <Container>
        {/*<Header viewName="POC React Native SMS Manager"/>*/}

        <Text>Sample Rout</Text>
      </Container>
    );
  }
}

/**
 * Stack Navigator
 * @todo Move into a different file
 */
export const ImporterRoute = StackNavigator({
  Importer: {screen: Importer}
});
