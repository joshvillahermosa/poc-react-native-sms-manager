import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  ListView
} from 'react-native';
import {bindActionCreators} from 'redux'

import { 
  Container,
  Content
} from 'native-base'

import NavigationButton from './../components/navigation-button.component';
import buttonData from './../data/navigation.data';
import getHeaderStyles from './../services/header.service';
import * as navigationActions from '../store/actions/navigation.actions';

class Home extends Component {
  constructor() {
    super();
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
            dataSource={this.props.views}
            renderRow={data => 
              <NavigationButton buttonData={data} navigate={navigate}></NavigationButton>
          }/>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({views: state.views});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(navigationActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
