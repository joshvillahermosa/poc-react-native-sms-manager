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

import getHeaderStyles from  './../services/header.service';

export default class Importer extends Component {
  constructor() {
    super();
  }

  /**
   * @todo Isolate headerStyle and navigation Options into it's own section.
   */
  static navigationOptions = getHeaderStyles('Importer');

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Importer route that will import contacts and list them here.</Text>
        </Content>
      </Container>
    );
  }
}
