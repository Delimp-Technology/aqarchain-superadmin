import {combineReducers} from 'redux';

import config from './Config';
import auth from './Auth';
import app from './App';

export default combineReducers({
  config,
  auth,
  app,
});
