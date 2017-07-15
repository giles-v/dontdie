import { combineReducers } from 'redux';

import settingsReducer from './settings';
import wpApiReducer from './wp-api';

export default combineReducers({
  settings: settingsReducer,
  wpApi: wpApiReducer
});
