import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export default class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {marginBottom: 10}
    }
  }

  render() {
    return (
      <Button
        info
        block
        disabled={this.props.buttonData.isDisabled}
        style={this.state.style}
        onPress={() => this.props.navigate(this.props.buttonData.view)}>
        <Text>
          {this.props.buttonData.text_name}
        </Text>
      </Button>
    );
  }
}
