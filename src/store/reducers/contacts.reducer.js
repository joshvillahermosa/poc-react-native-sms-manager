import * as ACTION_CONSTANTS from '../constants/actions.constants';

const initialContactsState = [];

export default function contactsReducer(state = initialContactsState, action) {
  switch(action.type) {
    case ACTION_CONSTANTS.ADD_CONTACT:
      return addContacts(state, action)
  }

  return state;
}

function addContacts(state, action) {
  return [...state, action.contact]
}

