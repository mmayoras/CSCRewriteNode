import {
  UPDATE_ZIP_CODE,
  UPDATE_DOB,
  RESET_CARD_DETAILS,
  UPDATE_SSN,
  UPDATE_PHONE_NUMBER,
} from './actionTypes';

const defaultState = {
  zipCode: '',
  dob: '',
  ssn: '',
  phoneNumber: '',
};

export function pinpadCardDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ZIP_CODE:
      return Object.assign({}, state, {zipCode: action.zipCode});
    case UPDATE_DOB:
      return Object.assign({}, state, {dob: action.dob});
    case UPDATE_SSN:
      return Object.assign({}, state, {ssn: action.ssn});
    case UPDATE_PHONE_NUMBER:
      return Object.assign({}, state, {phoneNumber: action.phoneNumber});
    case RESET_CARD_DETAILS:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
}
