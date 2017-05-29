import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text
} from 'react-native';
import {bindActionCreators} from 'redux'

import { 
  Container,
  Content
} from 'native-base'

import getHeaderStyles from './../services/header.service';
import * as navigationActions from '../store/actions/navigation.actions';

export default class Contact extends Component {
  constructor() {
    super();
  }

  /**
   * @todo Abstract text
   */
  static navigationOptions = getHeaderStyles('Contact: CONTACT NAME');

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state

    return (
      <Container>
        <Content padder>
          <Text>
            Contact View {params.contactId}
          </Text>
        </Content>
      </Container>
    );
  }
}
