import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Right,
  Icon
} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as contactActions from '../store/actions/contacts.actions';
const styles = {
  bold: {
    fontWeight: 'bold'
  },
  contactHeader: {
    paddingTop: 10,
    paddingBottom: 10
  },
  contactNumber: {
    paddingTop: 5,
    paddingBottom: 5
  }
}

export class ContactListCard extends Component {

  /**
   * @todo Move into service
   */
  getPhoneNumber = (contact) => {
    if (contact.phoneNumbers.length === 0) {
      return 'No Phone Number'
    }

    return contact.phoneNumbers[0].number;
  }

  navigateToContact = (contactId) => {
    alert(`Contact: ${contactId}`);
    this.props.actions.setViewingContactById(contactId);
    this.props.navigate('Contact');
  }

  render() {
    return (
      <Card>
        <CardItem header style={styles.contactHeader}>
          <Text style={styles.bold}>
            {this.props.contact.givenName} {this.props.contact.familyName}
          </Text>
        </CardItem>

        <CardItem button style={styles.contactNumber}>
          <Text>{this.getPhoneNumber(this.props.contact)}</Text>

          <Right>
            <Text onPress={() => this.navigateToContact(this.props.contact.recordID)}>
              -->
            </Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(contactActions, dispatch)})
export default connect(undefined, mapDispatchToProps)(ContactListCard)
