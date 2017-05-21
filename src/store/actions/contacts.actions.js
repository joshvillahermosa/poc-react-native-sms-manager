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
