import { combineReducers } from 'redux';
import { TOGGLE_DARKMODE } from '../actions/settings';

const DEFAULT_SETTINGS = {
  darkMode: false
};

export default (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};
