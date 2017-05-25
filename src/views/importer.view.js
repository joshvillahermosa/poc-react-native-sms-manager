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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { 
  Container,
  Content,
  Button,
  Badge
} from 'native-base';
import { getAll } from 'react-native-contacts';

import ContactListCard from '../components/contact-list-card.component';

import * as contactActions from '../store/actions/contacts.actions';
import getHeaderStyles from  './../services/header.service';

export class Importer extends Component {
  /**
   * @todo Set contants for Text
   */
  getContacts = () => {
    this.props.actions.setContactImportStatus('Getting contacts...');
    getAll((err, contacts) => {
      if(err) {
        this.props.actions.setContactImportStatus(JSON.stringify(err));
        return;
      }

      this.props.actions.setContactCount(contacts.length);
      this.props.actions.setContactImportStatus('Done!')
      this.props.actions.addContacts(contacts);
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
          <Text style={{paddingTop: 5, paddingBottom: 5}}>Importer route that will import contacts and list them here.</Text>

          <Button 
            warning
            block
            onPress={this.getContacts}>
            <Text>Import Contacts!</Text>
          </Button>

          <Text style={{paddingTop: 5, paddingBottom: 5}}>Status: {this.props.contacts.status}</Text>

          <Badge primary>
            <Text style={{color: '#fff'}}>{this.props.contacts.count}</Text>
          </Badge>
          
          <ListView
            dataSource={this.props.contacts.contacts}
            renderRow={data => <ContactListCard contact={data}></ContactListCard>}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({contacts: state.contacts});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(contactActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Importer)
