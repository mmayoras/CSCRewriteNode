import R from 'ramda';

import {
  REMOVE_ALERT,
  REMOVE_ALL_ALERTS,
  ADD_ALERT__WARNING,
  ADD_ALERT__ERROR,
  ADD_ALERT__INFO,
  ADD_ALERT__SUCCESS,
} from './actionTypes';

export function alertMessagesReducer(state = [], action) {
  switch (action.type) {
    case REMOVE_ALL_ALERTS:
      return R.remove(0, state.length, state);
    case REMOVE_ALERT:
      return R.remove(action.payload, 1, state);
    case ADD_ALERT__WARNING:
      return R.append(
        {
          title: action.title,
          message: action.message || '',
          type: 'warning',
        },
        state,
      );
    case ADD_ALERT__ERROR:
      return R.append(
        {
          title: action.title,
          message: action.message || '',
          type: 'error',
        },
        state,
      );
    case ADD_ALERT__INFO:
      return R.append(
        {
          title: action.title,
          message: action.message || '',
          type: 'information',
        },
        state,
      );
    case ADD_ALERT__SUCCESS:
      return R.append(
        {
          title: action.title,
          message: action.message || '',
          type: 'success',
        },
        state,
      );
    default:
      return state;
  }
}
