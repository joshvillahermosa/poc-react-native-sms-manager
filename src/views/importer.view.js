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
  Content,
  Button
} from 'native-base';

import getHeaderStyles from  './../services/header.service';

export default class Importer extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: 'Not yet clicked'
    }
  }

  /**
   * @todo Move to a dispatcher
   */
  getContacts = () => {
    this.setState({isClicked: 'Clicked'});
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

          <Button 
            warning
            block
            onPress={this.getContacts}>
            <Text>Import Contacts!</Text>
          </Button>

          <Text>{this.state.isClicked}</Text>
        </Content>
      </Container>
    );
  }
}
