import {ListView} from 'react-native';
import { createStore } from 'redux';
import appReducers from './reducers';

import buttonData from './../data/navigation.data';

/**
 * @todo Move into a sevice called `init-state.service.js`
 */
const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const initialNavigationViewState = dataSource.cloneWithRows(buttonData);

const defaultState = {
  views: initialNavigationViewState,
  contacts: []
};

export default store = createStore(appReducers, defaultState);
