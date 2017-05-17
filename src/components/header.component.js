import React, { Component } from 'react';
import { 
  Header as NBHeader, // Rename to avoid conflict. I know it's bad practice but just to get a POC out.
  Title,
  Body
} from 'native-base';

/**
 * @todo See if we can use this header
 */
export default class Header extends Component {
  render() {
    return (
      <NBHeader>
        <Body>
          <Title>{this.props.viewName}</Title>
        </Body>
      </NBHeader>
    )
  }
}
