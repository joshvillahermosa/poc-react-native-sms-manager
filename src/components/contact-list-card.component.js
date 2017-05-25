import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  
} from 'native-base';

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

export default class ContactListCard extends Component {

  /**
   * @todo Move into service
   */
  getPhoneNumber = (contact) => {
    if (contact.phoneNumbers.length === 0) {
      return 'No Phone Number'
    }

    return contact.phoneNumbers[0].number;
  }

  render() {
    return (
      <Card>
        <CardItem header style={styles.contactHeader}>
          <Text style={styles.bold}>
            {this.props.contact.givenName} {this.props.contact.familyName}
          </Text>
        </CardItem>

        <CardItem style={styles.contactNumber}>
          <Text>{this.getPhoneNumber(this.props.contact)}</Text>
        </CardItem>
      </Card>
    )
  }
}
