import {SAVE_ROLES} from '../actions/types';

let initialState = {
  role: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ROLES:
      return {...state, role: action.payload};
    default:
      return state;
  }
}
