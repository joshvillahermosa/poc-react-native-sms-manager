import {ListView} from 'react-native';
import * as ACTION_CONSTANTS from '../constants/actions.constants';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const initialNavigationViewState = dataSource.cloneWithRows([]);

export default function navigationViewsReducer(state = initialNavigationViewState, action) {
  switch(action.type) {
    case ACTION_CONSTANTS.ADD_NAVIGATION_VIEW:
      return addNavigationView(state, action)
  }

  return state;
}

function addNavigationView(state, action) {
  const newState =  [...state, action.contact];
  return dataSource.cloneWithRows(newState);
}

