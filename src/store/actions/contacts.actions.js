/**
 * @file Contacts actions
 */

import * as ACTIONS_CONSTANTS from '../constants/actions.constants';

/**
 * @todo document 
 */
export function addContact(contact) {
  return {
    type: ACTIONS_CONSTANTS.ADD_CONTACT,
    contact
  }
}

export function addContacts(contacts) {
  return {
    type: ACTIONS_CONSTANTS.ADD_CONTACTS,
    contacts
  }
}

export function setContactCount(count) {
  return {
    type: ACTIONS_CONSTANTS.SET_CONTACT_COUNT,
    count
  }
}

export function setContactImportStatus(status) {
  return {
    type: ACTIONS_CONSTANTS.SET_CONTACT_IMPORT_STATUS,
    status
  }
}
