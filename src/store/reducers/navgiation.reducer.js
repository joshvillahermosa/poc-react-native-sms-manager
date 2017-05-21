import * as ACTION_CONSTANTS from '../constants/actions.constants';

const initialNavigationViewState = [];

export default function navigationViewsReducer(state = initialNavigationViewState, action) {
  switch(action.type) {
    case ACTION_CONSTANTS.ADD_NAVIGATION_VIEW:
      return addNavigatioView(state, action)
  }

  return state;
}

function addNavigatioView(state, action) {
  return [...state, action.contact]
}

