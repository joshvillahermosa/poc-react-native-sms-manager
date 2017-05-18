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
  Content,
  Button
} from 'native-base';
import { getAll } from 'react-native-contacts';

import getHeaderStyles from  './../services/header.service';

export default class Importer extends Component {
  constructor() {
    super();
    // Why?????
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      status: 'Not Init',
      contacts: this.ds.cloneWithRows([]),
      contactsCount: 0
    }
  }

  /**
   * @todo Move to a dispatcher
   */
  getContacts = () => {
    this.setState({status: 'Getting contacts...'});
    getAll((err, contacts) => {
      if(err) {
        this.setState({status: err});
        return;
      }

      this.setState({
        contacts: this.ds.cloneWithRows(contacts),
        status: 'Done!',
        contactsCount: contacts.length
      });
    });
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

          <Text>{this.state.status}</Text>
          <Text>{this.state.contactsCount}</Text>
          
          <ListView
            dataSource={this.state.contacts}
            renderRow={data => <Text>{data.givenName} {data.familyName}</Text>}
          />
        </Content>
      </Container>
    );
  }
}
