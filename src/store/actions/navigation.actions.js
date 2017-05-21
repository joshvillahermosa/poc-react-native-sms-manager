/**
 * @file Contacts actions
 */

import * as ACTIONS_CONSTANTS from '../constants/actions.constants';

/**
 * @todo Document
 */
export function addNavigationView(navigationView) {
  return {
    type: ACTIONS_CONSTANTS.ADD_NAVIGATION_VIEW,
    navigationView
  }
}
