/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

import { 
  Container,
  Header,
  Title,
  Content,
  Footer,
  Body,
  Icon
} from 'native-base'

export default class poc extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>POC React Native SMS Manager</Title>
          </Body>
        </Header>
        
        <Content padder>
          <Text>
            This is a POC (Proof of concept) for Android SMS Reader. This will read Contacts Lists, Send SMS, and Read SMS.
          </Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('poc', () => poc);
