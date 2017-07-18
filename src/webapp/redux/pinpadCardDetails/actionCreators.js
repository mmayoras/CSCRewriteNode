import {
  RESET_CARD_DETAILS,
  UPDATE_ZIP_CODE,
  UPDATE_DOB,
  UPDATE_SSN,
  UPDATE_PHONE_NUMBER,
} from './actionTypes';

export function resetCardDetails() {
  return {
    type: RESET_CARD_DETAILS,
  };
}

export function updateZipCode(zipCode) {
  return {
    type: UPDATE_ZIP_CODE,
    zipCode,
  };
}

export function updateDOB(dob) {
  return {
    type: UPDATE_DOB,
    dob,
  };
}

export function updateSSN(ssn) {
  return {
    type: UPDATE_SSN,
    ssn,
  };
}

export function updatePhoneNumber(phoneNumber) {
  return {
    type: UPDATE_PHONE_NUMBER,
    phoneNumber,
  };
}
