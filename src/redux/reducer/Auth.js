import {SAVE_TOKEN, USER_DATA_SAVE} from '../actions/types';

let initialState = {
  token: '',
  language: 'en',
  data: {},
};

export default function(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case SAVE_TOKEN:
      return {...state, token: action.payload};
    case USER_DATA_SAVE:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
