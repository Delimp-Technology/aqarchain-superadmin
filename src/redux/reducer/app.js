import {SAVE_AGENTS} from '../actions/types';

let initialState = {
  agents: [],
};

export default function(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case SAVE_AGENTS:
      return {...state, agents: action.payload};
    default:
      return state;
  }
}
