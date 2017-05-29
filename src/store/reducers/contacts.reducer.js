import {ListView} from 'react-native';
import * as ACTION_CONSTANTS from '../constants/actions.constants';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const initialContacts = dataSource.cloneWithRows([]);

/**
 * @todo Move string into constants
 */

const defaultState = {
  contacts: initialContacts,
  count: 0,
  status: 'Not initialized',
  viewingContactId: null
}

export default function contactsReducer(state = defaultState, action) {
  switch(action.type) {
    case ACTION_CONSTANTS.ADD_CONTACT:
      return addContact(state, action);
    case ACTION_CONSTANTS.ADD_CONTACTS:
      return addContacts(state, action);
    case ACTION_CONSTANTS.SET_CONTACT_COUNT:
      return setContactCount(state, action);
    case ACTION_CONSTANTS.SET_CONTACT_IMPORT_STATUS:
      return setContactImportStatus(state, action);
    case ACTION_CONSTANTS.SET_VIEWING_CONTACT_ID:
      return setViewingContactId(state, action);
  }

  return state;
}

function addContact(state, action) {
  const newState = [...state.contatcs, action.contact];
  return Object.assign({}, state, {contacts: dataSource.cloneWithRows(newState)});
}

function addContacts(state, action) {
  const modifiedState = {
    contacts: action.contacts,
    contactRows: dataSource.cloneWithRows(action.contacts)
  };
  return Object.assign({}, state, modifiedState);
}

function setContactCount(state, action) {
  return Object.assign({}, state, {count: action.count});
}

function setContactImportStatus(state, action) {
  return Object.assign({}, state, {status: action.status});
}

function setViewingContact(state, action) {
  return Object.assign({}, state, {viewingContactId: action.contactId});
}

