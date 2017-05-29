import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  ListView,
  View
} from 'react-native';
import {bindActionCreators} from 'redux'
import { 
  Container,
  Content,
  Card,
  CardItem,
  List,
  ListItem
} from 'native-base'
import STYLES from '../services/styles.constants'
import getHeaderStyles from './../services/header.service';
import * as navigationActions from '../store/actions/navigation.actions';

export class Contact extends Component {
  constructor() {
    super();
  }

  /**
   * @todo Abstract text
   */
  static navigationOptions = getHeaderStyles('Contact');

  constructFullName =(contact) => {
    return `${contact.givenName} ${contact.familyName}`;
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content padder>

          <Card>
            <CardItem header>
              <Text style={STYLES.bold}>
                {this.constructFullName(this.props.contact)
              }</Text>
            </CardItem>

            <CardItem>
              <ListView
                dataSource={this.props.contactDetails}
                renderRow={data => 
                  <Text>
                    <Text style={STYLES.bold}>{data.key}: </Text>
                    <Text>{data.value}</Text>
                  </Text>
                }
              />
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
const mapStateToProps = (state) => ({
  contact: state.contacts.viewingContact,
  contactDetails: state.contacts.viewingContactDetails
});

export default connect(mapStateToProps)(Contact)
