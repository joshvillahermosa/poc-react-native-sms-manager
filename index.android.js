/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView
} from 'react-native';

import { 
  Container,
  Title,
  Content,
  Footer,
  Body,
  Button,
  Icon
} from 'native-base'

import NavigationButton from './src/components/navigation-button.component';
import Header from './src/components/header.component';
import buttonData from './src/data/navigation.data';

/**
 * @todo Move into App.component as the parent app.
 */
export default class poc extends Component {
  constructor() {
    super();

    // Why?????
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      buttons: ds.cloneWithRows(buttonData),
    }
  }

  render() {
    return (
      <Container>
        <Header viewName="POC React Native SMS Manager"/>
        
        <Content padder>
          <Text>
            This is a POC (Proof of concept) for Android SMS Reader. This will read Contacts Lists, Send SMS, and Read SMS.
          </Text>

          <ListView 
            dataSource={this.state.buttons}
            renderRow={data => <NavigationButton buttonData={data}></NavigationButton>}/>

        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('poc', () => poc);
