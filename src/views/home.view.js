import React, { Component } from 'react';
import {
  Text,
  ListView
} from 'react-native';

import { 
  Container,
  Content
} from 'native-base'

import NavigationButton from './../components/navigation-button.component';
import buttonData from './../data/navigation.data';
import getHeaderStyles from './../services/header.service';

export default class Home extends Component {
  constructor() {
    super();

    // Why?????
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      buttons: ds.cloneWithRows(buttonData),
    }
  }

  /**
   * @todo Abstract text
   */
  static navigationOptions = getHeaderStyles('POC React Native SMS Manager');

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>        
        <Content padder>
          <Text>
            This is a POC (Proof of concept) for Android SMS Reader. This will read Contacts Lists, Send SMS, and Read SMS.
          </Text>

          <ListView 
            dataSource={this.state.buttons}
            renderRow={data => 
              <NavigationButton buttonData={data} navigate={navigate}></NavigationButton>
          }/>

        </Content>
      </Container>
    );
  }
}
