import {
  UPDATE_PIN_PAD_REQUEST,
  RESET_PINPAD_DATA,
  RESET_CARD_ACTION_STATUS,
} from './actionTypes';

const defaultState = {
  requestType: '',
};

export const pinPadReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PIN_PAD_REQUEST:
      return Object.assign({}, state, {requestType: action.payload});
    case RESET_CARD_ACTION_STATUS:
      return Object.assign({}, state);
    case RESET_PINPAD_DATA:
      return defaultState;
    default:
      return state;
  }
};
