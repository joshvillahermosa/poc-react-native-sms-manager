import { combineReducers } from 'redux';

import navigationViewsReducer from './navigation.reducer';
import contactsReducer from './contacts.reducer';

export default appReducers = combineReducers({
  views: navigationViewsReducer,
  contacts: contactsReducer
});
