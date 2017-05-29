import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text
} from 'react-native';
import {bindActionCreators} from 'redux'
import { 
  Container,
  Content,
  Card,
  CardItem
} from 'native-base'

import getHeaderStyles from './../services/header.service';
import * as navigationActions from '../store/actions/navigation.actions';

export class Contact extends Component {
  constructor() {
    super();
  }

  /**
   * @todo Abstract text
   */
  static navigationOptions = getHeaderStyles('Contact: CONTACT NAME');

  constructFullName =(contact) => {
    return `${contact.givenName} ${contact.familyName}`;
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content padder>
          <Text>
            Contact View: {this.props.contact.recordID}
          </Text>

          <Card>
          <CardItem header>
            <Text style={{fontWeight: 'bold'}}>
              {this.constructFullName(this.props.contact)}
            </Text>
          </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

/**
 * @todo Refactor into a service... 
 */
const mapStateToProps = (state) => ({contact: state.contacts.viewingContact})

export default connect(mapStateToProps)(Contact)
